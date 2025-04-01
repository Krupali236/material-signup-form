import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: 500,
      color: "white",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontWeight: "bold",
    },
    h4: {
      color: "#0faf82",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "24px",
      color: "#fff",
      fontWeight: 400,
      textAlign: "center",
      fontFamily: "emoji",
      letterSpacing: 1,
    },
    body2: {
      fontSize: "16px",
      fontFamily: "system-ui",
      fontWeight: "200 !important",
      color: "white",
      textAlign: "center",
    },
    body1: {
      fontSize: "16px",
      color: "black",
      fontFamily: "system-ui",
      fontWeight: 200,
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: "200 !important",
      color: "white",
    },
    button: {
      fontSize: "15px",
      fontWeight: 600,
      cursor: "pointer",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          width: "100%",
          // backgroundColor: "#89ceb9",
          borderRadius: "5px",
          "&:hover": {
            // backgroundColor: "#7abdaa",
          },
          "&.Mui-focused": {
            // backgroundColor: "#68ab96",
          },
          "& input": {
            width: "100%",
            padding: "0px !important",
            height: "100%",
            font: "revert",
          },
          "&::before, &::after": {
            borderBottom: "none !important",
          },
        },
      },
    },
    MuiTextField: {
      // TextField uses the theme
      defaultProps: {
        variant: "filled",
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& .MuiFilledInput-root": {
            height: "40px",
            backgroundColor: "#fff", //inputs background color
            border: "2px solid #89ceb9",
            padding: "0px !important",
            BorderBottom: "0px !important",
            "&:hover": {
              backgroundColor: "#7abdaa", // input hover
            },
            "&.Mui-focused": {
              backgroundColor: "#68ab96", // input focus background color
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
          backgroundColor: "#58bd94", // input icon background color
          height: "55px",
          width: "55px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0px !important",
          padding: "3px 0px",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "200px",
          height: "40px",
          marginTop: "30px",
          border: "2px solid #0faf82 !important",
          fontWeight: "lighter !important",
          textTransform: "capitalize",
          fontSize: "16px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "white",
            color: "#0faf82 !important",
            border: "2px solid #0faf82 !important",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 400,
          color: "#000",
          cursor: "pointer",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: { lg: "30%", md: "50%", sm: "90%", xs: "90%" },
          position: "relative",
          paddingTop: "50px",
          borderRadius: "12px",
          textAlign: "center",
          overflow: "visible",
          borderTop: "4px solid #0faf82", // Green top border
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Subtle shadow
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          paddingBottom: "16px",
        },
      },
    },
  },
});

export default theme;
