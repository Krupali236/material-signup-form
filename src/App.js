import "./App.css";
import Signup from "./pages/Signup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Welcome from "./pages/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/Theme"; 
import Signin from "./pages/Signin";
import LoginContent from "./pages/LoginContent";
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: (
        <>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                height: { lg: 600, md: 600, sm: 600, xs: "100vh" },
                bgcolor: "white",
                borderRadius: "20px",
                padding: "0px !important",
                "&.MuiContainer-root": { padding: "0px !important" },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                    sx={{
                      backgroundColor: "#0faf82",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      display: { xs: "none", sm: "block", md: "block" },
                    }}
                  >
                    <Welcome />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7 }}>
                    <Signup />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                bgcolor: "white",
                borderRadius: "20px",
                padding: "0px !important",
                "&.MuiContainer-root": { padding: "0px !important" },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                    sx={{
                      backgroundColor: "#0faf82",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      borderTopRightRadius: {
                        xs: "20px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                      borderBottomRightRadius: {
                        xs: "20px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <Welcome />
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 7, md: 7, lg: 7 }}
                    sx={{ display: { xs: "none", sm: "block", md: "block" } }}
                  >
                    <Signup />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
        </>
      ),
    },
    {
      path: "/signin",
      element: (
        <>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                height: { lg: 600, md: 600, sm: 600, xs: "100vh" },
                bgcolor: "white",
                borderRadius: "20px",
                padding: "0px !important",
                "&.MuiContainer-root": { padding: "0px !important" },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                    sx={{
                      backgroundColor: "#0faf82",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      display: { xs: "none", sm: "block", md: "block" },
                    }}
                  >
                    <LoginContent />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7 }}>
                    <Signin />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
        </>
      ),
    },
    {
      path:"/home",
      element:(<><Home/></>)
    }
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
