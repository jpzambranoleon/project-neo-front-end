import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInSide from "./SignInSide";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignInSide />} />
          <>
            <Route path="/" element={<Home />} />
          </>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
