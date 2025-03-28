import React from "react";
import Button from "@mui/material/Button";

const CustomContainedButton = ({
  children,
  onClick,
  color = "#0faf82",
  size = "medium",
  fullWidth = false,
}) => {
  return (
    <Button
      variant="contained"
      color={color}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{ backgroundColor: color, color: "white" }}
    >
      {children}
    </Button>
  );
};

export default CustomContainedButton;
