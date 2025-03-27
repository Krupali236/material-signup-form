import { BorderBottom } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: 500,
      color:"white",
    },
    h2: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "lighter",
      color:"white",
    },
    h5: {
      fontSize: "24px",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#89ceb9",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#7abdaa",
          },
          "&.Mui-focused": {
            backgroundColor: "#68ab96",
          },
          "& input": {
            padding: "0px !important",
            height: "100%",
            font:"revert",
          },
          "&::before, &::after": {
            borderBottom: "none !important",
          },
        },
      },
    },
    MuiTextField: {
      // ✅ Ensures TextField uses the theme
      defaultProps: {
        variant: "filled",
      },
    },
    MuiFormControl: {
      // ✅ Ensures consistent styling for inputs
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "& .MuiFilledInput-root": {
            height: "40px",
            backgroundColor: "#89ceb9",
            padding: "0px !important",
            BorderBottom: "0px !important",
            "&:hover": {
              backgroundColor: "#7abdaa",
            },
            "&.Mui-focused": {
              backgroundColor: "#68ab96",
            },
            "&::before, &::after": {
              borderBottom: "none !important",
            },
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          backgroundColor: "#58bd94",
          height: "55px",
          width: "55px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0px !important",
          padding: "3px 0px",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          // borderRadius: "50%", // Optional: If you want rounded InputAdornment
        },
      },
    },
  },
});

export default theme;
