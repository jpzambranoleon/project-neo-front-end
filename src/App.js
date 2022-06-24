import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Box, Container, Grid, } from "@mui/material";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/homePage/Home";
import Profile from "./pages/profilePage/Profile";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";
import Navbar from "./components/Navbar";
import LeftBar from "./components/SideMenu/LeftBar";
import RightBar from "./components/SideMenu/RightBar";
import { InfoContext } from "./utility/InfoProvider";

function App() {
  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      {authorized ? (
        <>
          <Navbar />
          <Box sx={{ bgcolor: 'background.paper', pt: 5, pb: 6, }}>
            <Container>
              <Grid container spacing={3}>
                <LeftBar />
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/explore" element={<Explore />} />
                  </Routes>
                </Router>
                <RightBar />
              </Grid>
            </Container>
          </Box>
        </>
      ) : (
        <Router>
          <Routes>
            <Route path="*" element={<SignInSide />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignInSide />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
