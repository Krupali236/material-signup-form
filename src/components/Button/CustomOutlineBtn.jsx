import React from "react";
import Button from "@mui/material/Button";

const CustomOutlineButton = ({
  children,
  onClick,
  color = "#0faf82",
  size = "medium",
  fullWidth = false,
}) => {
  return (
    <Button
      variant="outlined"
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        color: color,
        border: `2px solid ${color} !important`,
        "&:hover": {
          color: color,
          borderColor: color,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomOutlineButton;
