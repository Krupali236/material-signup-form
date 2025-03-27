import React from "react";
import Button from "@mui/material/Button";
const SigninBtn = () => {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          height: "40px",
          color: "white",
          borderColor: "white",
          textTransform: "capitalize",
          width: "200px",
          marginTop: "60px",
          fontSize: "16px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "white",
            color: "#0faf82",
            borderColor: "white",
          },
        }}
      >
        Sign In
      </Button>
    </div>
  );
};

export default SigninBtn;
