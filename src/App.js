import "./App.css";
import Signup from "./pages/Signup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Welcome from "./pages/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <Signup /> */}
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
      path: "/signin",
      element: (
        <>
          {/* <Welcome /> */}
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
                bgcolor: "white",
                borderRadius: "20px",
                padding: "0px !important",
                "&.MuiContainer-root": { padding: "0px !important" },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, sm: 12, md: 5, lg: 5 }}
                    sx={{
                      backgroundColor: "#0faf82",
                      borderRadius: "20px",
                      // display: { xs: "none", md: "block" },
                    }}
                  >
                    <Welcome />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
