import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Pricing from "./pages/Pricing";
import Tester from "./pages/Tester";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/tester" element={<Tester />} />
          <Route exact path="/" element={<Login />} />
       <Route exact path="/register" element={<Register />} />
       <Route exact path="/reset" element={<Reset />} />
       <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
