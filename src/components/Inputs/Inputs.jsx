import * as React from "react";
import { Box, Typography, TextField } from "@mui/material"; // ✅ Use TextField instead of FilledInput
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

const Inputs = ({
  inputValue,
  setInputValue,
  errors,
  fields = ["username", "email", "password"],
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        width: "80%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        mt: 3,
      }}
    >
      {/* Username */}
      {fields.includes("username") && (
        <>
          <TextField
            variant="filled"
            type="text"
            name="username"
            value={inputValue?.username}
            onChange={handleChange}
            placeholder="Username"
            sx={{
              m: 1,
              border: errors?.username ? "2px solid #d32f2f" : "none",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityOutlinedIcon
                    sx={{ color: "#000", fill: "white" }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {errors?.username && (
            <Typography color="error">{errors.username}</Typography>
          )}
        </>
      )}

      {/* Email (Only for Signup) */}
      {fields.includes("email") && (
        <>
          <TextField
            variant="filled"
            type="email"
            name="email"
            value={inputValue?.email}
            onChange={handleChange}
            placeholder="Email"
            sx={{ m: 1, border: errors?.email ? "2px solid #d32f2f" : "none" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "#000", fill: "white" }} />
                </InputAdornment>
              ),
            }}
          />
          {errors?.email && (
            <Typography color="error">{errors.email}</Typography>
          )}
        </>
      )}

      {/* Password */}
      {fields.includes("password") && (
        <>
          <TextField
            variant="filled"
            type={showPassword ? "text" : "password"}
            name="password"
            value={inputValue?.password}
            onChange={handleChange}
            placeholder="Password"
            sx={{
              m: 1,
              border: errors?.password ? "2px solid #d32f2f" : "none",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ backgroundColor: "transparent" }}
                >
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start" sx={{ width: "63px" }}>
                  <LockOutlinedIcon sx={{ color: "#000", fill: "white" }} />
                </InputAdornment>
              ),
            }}
          />
          {errors?.password && (
            <Typography color="error">{errors.password}</Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default Inputs;
