import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Box, Container, createTheme, Grid, ThemeProvider, } from "@mui/material";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/homePage/Home";
import Profile from "./pages/profilePage/Profile";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { InfoContext } from "./utility/InfoProvider";

function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  const { authorized } = useContext(InfoContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Box bgcolor={"background.default"} color="text.primary">
          {authorized ? (
            <Router>
              <Navbar />
              <Container>
                <Grid sx={{ pt: { md: 3, sm: 2 } }} container spacing={3}>
                    <Grid item sm={3}>
                      <LeftBar setMode={setMode} mode={mode} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/explore" element={<Explore />} />
                      </Routes>
                    </Grid>
                    <Grid item sm={3}>
                      <RightBar />
                    </Grid>
                </Grid>
              </Container>
            </Router>
          ) : (
            <Router>
              <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Router>
          )}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
