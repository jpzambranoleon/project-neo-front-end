import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Profile from "./pages/profilePage/Profile";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import Users from "./pages/Users/Users";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <>
            <Route path="/sign-in" element={<SignInSide />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="users" element={<Users />} />
          </>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
