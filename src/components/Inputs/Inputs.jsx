import * as React from "react";
// import Box from "@mui/material/Box";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
const Inputs = ({ inputValue, setInputValue, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((inputValue) => ({
      ...inputValue,
      [name]: value,
    }));
    console.log(inputValue, "inputValue");
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {/* Username  */}
      <FormControl
        sx={{ m: 1, borderRadius: "10px !important" }}
        variant="filled"
      >
        <FilledInput
          disableUnderline
          type="text"
          name="username"
          value={inputValue?.username}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Username"
          id="filled-adornment-amount"
          sx={{
            backgroundColor: "#89ceb9",
            padding: 0,
            borderRadius: "5px",
            border: errors?.username ? "2px solid red" : "none",
            "& input": {
              padding: "0px !important",
              height: "100%",
            },
            "& .MuiInputAdornment-root": {
              marginTop: 0,
              maxHeight: "100%",
              padding: 0,
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            },
          }}
          startAdornment={
            <InputAdornment
              position="start"
              sx={{
                backgroundColor: "#58bd94",
                height: "55px",
                width: "55px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0px !important",
              }}
            >
              <PermIdentityOutlinedIcon
                sx={{
                  backgroundColor: "transparent",
                  borderColor: "white",
                  fill: "white",
                }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      {errors?.username && (
        <Typography color="error" textAlign="center">
          {errors.username}
        </Typography>
      )}
      {/* Email  */}
      <FormControl sx={{ m: 1 }} variant="filled">
        <FilledInput
          disableUnderline
          type="email"
          name="email"
          value={inputValue?.email}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Email"
          id="filled-adornment-amount"
          sx={{
            backgroundColor: "#89ceb9",
            borderRadius: "5px",
            padding: 0,
            border: errors?.email ? "2px solid red" : "none",
            "& input": {
              padding: "0px !important",
              height: "100%",
            },
            "& .MuiInputAdornment-root": {
              marginTop: 0,
              maxHeight: "100%",
              padding: 0,
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            },
          }}
          startAdornment={
            <InputAdornment
              position="start"
              sx={{
                backgroundColor: "#58bd94",
                height: "55px",
                width: "55px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0px !important",
              }}
            >
              <EmailOutlinedIcon
                sx={{
                  backgroundColor: "transparent",
                  borderColor: "white",
                  fill: "white",
                }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      {errors?.email && (
        <Typography color="error" textAlign="center">
          {errors.email}
        </Typography>
      )}
      {/* Password */}
      <FormControl sx={{ m: 1 }} variant="filled">
        <FilledInput
          disableUnderline
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={inputValue?.password}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Password"
          sx={{
            backgroundColor: "#89ceb9",
            padding: 0,
            borderRadius: "5px",
            border: errors?.password ? "2px solid red" : "none",
            "& input": {
              padding: "0px !important",
              height: "100%",
            },
            "& .MuiInputAdornment-root": {
              marginTop: 0,
              maxHeight: "100%",
              padding: 0,
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff sx={{ marginRight: "15px" }} />
                ) : (
                  <Visibility sx={{ marginRight: "15px" }} />
                )}
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment
              position="start"
              sx={{
                backgroundColor: "#58bd94",
                height: "55px",
                width: "65px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0px !important",
              }}
            >
              <LockOutlinedIcon
                sx={{
                  backgroundColor: "transparent",
                  borderColor: "white",
                  fill: "white",
                }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      {errors?.password && (
        <Typography color="error" textAlign="center">
          {errors.password}
        </Typography>
      )}
    </Box>
  );
};
export default Inputs;
