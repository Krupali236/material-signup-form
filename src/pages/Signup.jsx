import React from "react";
import Inputs from "../components/Inputs/Inputs";
import SignupBtn from "../components/Button/SignupBtn";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  console.log(isSmallScreen, "isSmallScreen");
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
        alert("Sign up successful!");
        setInputValue({ username: "", email: "", password: "" });
      }
    }
  };
  return (
    <>
      {isSmallScreen && (
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
          }}
        >
          <div
            style={{
              backgroundColor: "#0faf82",
              height: 150,
              width: "100%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
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
            <Typography
              sx={{ mt: 1 }}
              variant="h5"
              color="white"
              fontWeight="normal"
              textAlign="center"
            >
              blueflame
            </Typography>
          </div>
          <div style={{ padding: "40px 20px" }}>
            <Typography variant="h4" color="#0faf82" fontWeight="bold">
              Sign Up
            </Typography>
            <Typography
              variant="body"
              color="black"
              sx={{ mb: 2, mt: 1, fontSize: "14px" }}
            >
              Hey enter your details to sign in to your account
            </Typography>

            <Inputs
              inputValue={inputValue}
              setInputValue={setInputValue}
              errors={errors}
            />
            <SignupBtn handleSubmit={handleSubmit} />

            <Link
              href="#"
              color="inherit"
              sx={{
                textDecoration: "none",
                display: "block",
                marginLeft: "60px",
                fontSize: "14px",
              }}
            >
              Forgot your password?
            </Link>
            <p
              style={{
                marginLeft: "60px",
                fontSize: "14px",
                marginTop: "12px",
              }}
            >
              Already have an account?
              <Link
                color="inherit"
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  mt: 1,
                }}
                onClick={() => navigate("/signin")}
              >
                SignIn
              </Link>
            </p>
          </div>
        </Box>
      )}

      {/* Large Screen  */}
      <Box
        sx={{
          padding: {
            xs: "50px 10px",
            sm: "40px 20px",
            md: "30px 60px",
            lg: "40px 80px",
          },
          display: { xs: "none", sm: "block", md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          color="#0faf82"
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Sign Up
        </Typography>
        <Typography variant="body" color="black" sx={{ mb: 2, mt: 1 }}>
          Hey enter your details to sign in to your account
        </Typography>

        <Inputs
          inputValue={inputValue}
          setInputValue={setInputValue}
          errors={errors}
        />
        <SignupBtn handleSubmit={handleSubmit} />

        <Link
          href="#"
          color="inherit"
          sx={{
            textDecoration: "none",
            display: "block",
            marginLeft: "60px",
          }}
        >
          Forgot your password?
        </Link>
      </Box>
    </>
  );
};

export default Signup;
