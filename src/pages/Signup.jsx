import React from "react";
import Inputs from "../components/Inputs/Inputs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupAlert from "../components/Alert/SignupAlert";
import CustomContainedButton from "../components/Button/CustomContainedBtn";
const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const isValid = (value) => {
    const handleError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphabetRegex = /^[a-zA-Z]+$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!value?.username) {
      handleError.username = "Please enter username";
    } else if (!alphabetRegex.test(value?.username)) {
      handleError.username = "please enter valid username";
    }
    if (!value?.email) {
      handleError.email = "Please enter email";
    } else if (!emailRegex.test(value?.email)) {
      handleError.email = "please enter valid email";
    }

    if (!value?.password) {
      handleError.password = "Please enter password";
    } else if (!passwordRegex.test(value?.password)) {
      handleError.password = "please enter valid password";
    }
    setErrors(handleError);
    console.log(Object.keys(handleError), "errors OBject");
    return Object.keys(handleError).length === 0;
  };

  const handleSubmit = (e) => {
    const validation = isValid(inputValue);
    if (validation) {
      const userData = JSON.parse(localStorage.getItem("users")) || [];
      const userExist = userData.some(
        (users) =>
          users.username === inputValue.username ||
          users.email === inputValue.email
      );
      if (userExist) {
        alert("User already exists!");
      } else {
        userData.push(inputValue);
        localStorage.setItem("users", JSON.stringify(userData));
        setInputValue({ username: "", email: "", password: "" });
        setDialogOpen(true);
      }
    }
  };
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "0px 0px",
            sm: "40px 20px",
            md: "30px 60px",
            lg: "40px 80px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#0faf82",
            height: 150,
            width: "100%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "100%",
              width: "max-content",
            }}
          >
            <LocalFireDepartmentIcon
              color="white"
              sx={{
                "&.MuiSvgIcon-root": {
                  fill: "#0faf82",
                  fontSize: 56,
                },
              }}
            />
          </Box>
          <Typography sx={{ mt: 1 }} variant="h5">
            blueflame
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: {
              lg: "flex-start",
              md: "flex-start",
              sm: "flex-start",
              xs: "center",
            },
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "flex-start",
              xs: "center",
            },
            gap: 1,
          }}
        >
          <Typography variant="h4" sx={{ mt: 4 }}>
            Sign Up
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, mt: 1 }}>
            Hey enter your details to sign in to your account
          </Typography>

          <Inputs
            inputValue={inputValue}
            setInputValue={setInputValue}
            errors={errors}
            fields={["username", "email", "password"]}
          />

          <CustomContainedButton onClick={handleSubmit}>
            Sign Up
          </CustomContainedButton>
          <SignupAlert />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Already have an account?
            <Link m={1} onClick={() => navigate("/signin")}>
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
      <SignupAlert open={dialogOpen} handleClose={() => setDialogOpen(false)} />
    </>
  );
};

export default Signup;
