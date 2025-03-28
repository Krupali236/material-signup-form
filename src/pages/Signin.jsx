import React, { useState } from "react";
import Inputs from "../components/Inputs/Inputs";
// import SignupBtn from "../components/Button/SignupBtn";
import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import LoginBtn from "../components/Button/LoginBtn";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CustomContainedButton from "../components/Button/CustomContainedBtn";
const Signin = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const isValid = (value) => {
    const handleError = {};
    if (!value?.username) handleError.username = "Please enter username";
    if (!value?.password) handleError.password = "Please enter password";
    setErrors(handleError);
    return Object.keys(handleError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid(inputValue)) {
      const userData = JSON.parse(localStorage.getItem("users")) || [];
      const user = userData.find(
        (u) =>
          u.username === inputValue.username &&
          u.password === inputValue.password
      );
      if (user) {
        alert("Sign in successful!");
        navigate("/"); // Redirect to dashboard or home
      } else {
        alert("Invalid username or password");
      }
    }
  };

  return (
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
        <Typography
          sx={{ mt: 1 }}
          variant="h5"
          color="white"
          fontWeight="normal"
          textAlign="center"
        >
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
          Sign In
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, mt: 1 }}>
          Enter your username and password to sign in
        </Typography>

        <Inputs
          inputValue={inputValue}
          setInputValue={setInputValue}
          errors={errors}
          fields={["username", "password"]}
        />

        <CustomContainedButton onClick={handleSubmit} color="#0faf82">
          Sign In
        </CustomContainedButton>

        <Link href="#" mt={2}>
          Forgot your password?
        </Link>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link m={1} onClick={() => navigate("/signup")}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signin;
