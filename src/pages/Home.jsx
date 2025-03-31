import React from "react";
import { Box, Typography } from "@mui/material";
import CustomOutlineButton from "../components/Button/CustomOutlineBtn";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#0faf82",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" mb={3}>
          Welcome Back!
        </Typography>
        <Typography variant="body2">
          Sign up today to get exclusive updates, special offers, and insider
          content straight to your inbox.
        </Typography>
        <Typography variant="body2">
          Be the first to know about new products, latest news, member-only
          deals!
        </Typography>
        <CustomOutlineButton onClick={() => navigate("/signup")} color="#fff">
          Sign up
        </CustomOutlineButton>
      </Box>
    </div>
  );
};

export default Home;
