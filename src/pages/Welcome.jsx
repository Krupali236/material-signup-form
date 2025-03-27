import React from "react";
import SigninBtn from "../components/Button/SigninBtn";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import Divider, { dividerClasses } from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: { lg: "600px", xs: "100vh", sm: "600px", md: "600px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" mb={3}>
        Welcome Back!
      </Typography>
      <Typography variant="body1">To stay connected with us</Typography>
      <Typography variant="body1">
        please login with your personal info
      </Typography>
      <SigninBtn />

      <Box
        sx={{
          textAlign: "center",
          margin: "100px 0px",
          display: "flex",
          alignItems: "center",
          color: "white",
          fontWeight: 300,
          "& svg": {
            m: 1,
          },
          [`& .${dividerClasses.root}`]: {
            mx: 0.5,
            borderColor: "white",
          },
        }}
      >
        <Link
          href="#"
          color="inherit"
          sx={{ textDecoration: "none", padding: "0px 5px" }}
        >
          CREATOR <span style={{ fontWeight: 500 }}>HERE</span>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link
          href="#"
          color="inherit"
          sx={{ textDecoration: "none", padding: "0px 5px" }}
        >
          DERECTOR <span style={{ fontWeight: 500 }}>HERE</span>
        </Link>
      </Box>
      <Box
        sx={{
          fontSize: "14px",
          color: "white",
          mt: 4,
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
          },
        }}
      >
        Don't have an account?
        <Link
          color="inherit"
          sx={{
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            mt: 1,
          }}
          onClick={() => navigate("/")}
        >
          SignUp
        </Link>
      </Box>
    </Box>
  );
};

export default Welcome;
