import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/homePage/Home";
import Profile from "./pages/profilePage/Profile";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";
import Navbar from "./components/Navbar";
import LeftBar from "./components/SideMenu/LeftBar";
import RightBar from "./components/SideMenu/RightBar";
import { InfoContext } from "./utility/InfoProvider";
import { Navigate } from "react-router-dom";

function App() {
  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      {authorized ? (
        <>
          <Navbar />
          <CustomBox>
            <Grid container spacing={3}>
              <LeftBar />
              <Router>
                <Routes>
                  <>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/explore" element={<Explore />} />
                  </>
                </Routes>
              </Router>
              <RightBar />
            </Grid>
          </CustomBox>
        </>
      ) : (
        <Router>
          <Routes>
            <Route path="/sign-in" element={<SignInSide />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

const CustomBox = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "0 auto",
  marginTop: theme.spacing(10),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: theme.spacing(4),
  },
}));

export default App;
