import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Container, Grid, } from "@mui/material";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/homePage/Home";
import Profile from "./pages/profilePage/Profile";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import RightBar from "./components/SideMenu/RightBar";
import { InfoContext } from "./utility/InfoProvider";

function App() {
  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      {authorized ? (
        <>
          <Router>
            <Navbar />
            <Container>
              <Grid sx={{ bgcolor: 'background.paper', pt: { md: 3, sm: 2 }, pb: 2, }} container spacing={3}>
                  <Grid item sm={3}>
                    <SideMenu />
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
