import React from "react";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import Divider, { dividerClasses } from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import CustomOutlineButton from "../components/Button/CustomOutlineBtn";
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
      <Typography variant="body2">To stay connected with us</Typography>
      <Typography variant="body2">
        please login with your personal info
      </Typography>
      {/* <SigninBtn /> */}
      <CustomOutlineButton onClick={() => navigate("/signin")} color="#fff">
        Sign in
      </CustomOutlineButton>
      <Box
        sx={{
          textAlign: "center",
          margin: "100px 0px",
          display: "flex",
          alignItems: "baseline",
          color: "white",
          fontWeight: 300,
          "& svg": {
            m: 1,
          },
          [`& .${dividerClasses.root}`]: {
            mx: 1.5,
            borderColor: "white",
          },
        }}
      >
        <Typography variant="body2">CREATOR</Typography>
        <Typography variant="button" pl={0.5}>
          HERE
        </Typography>

        <Divider orientation="vertical" flexItem />
        <Typography variant="body2">DERECTOR</Typography>
        <Typography variant="button" pl={0.5}>
          HERE
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 4,
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
          },
        }}
      >
        <Typography variant="subtitle1">
          Don't have an account?
          <Link color="inherit" m={1} onClick={() => navigate("/signup")}>
            SignUp
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Welcome;
