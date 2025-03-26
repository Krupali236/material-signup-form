import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function SignupBtn({ handleSubmit }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ margin: { lg: "30px 60px", xs: "10px 50px" } }}
    >
      <Button
        variant="contained"
        onClick={handleSubmit} 
        sx={{
          width: { lg: "200px", xs: "150px" },
          height: "40px",
          backgroundColor: "#0faf82",
          fontWeight: "lighter !important",
          textTransform: "capitalize",
          fontSize: "16px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "white",
            color: "#0faf82",
            border: "2px solid #0faf82 !important",
          },
        }}
      >
        Sign up
      </Button>
    </Stack>
  );
}
