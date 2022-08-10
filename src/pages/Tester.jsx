import React from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Reset from "../components/Reset/Reset";
import Dashboard from "../components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
const Tester = () => {
  return (
    <div>
      <h1
        style={{ // Applying some styles to the heading
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          border: "13px solid #6A0DAD",
          color: "#7F00FF",
        }}
      >
        ????Geeks For Geeks Second Component in New Tab
      </h1>
      <div>
      hi
      <Login />
      <Register />
      <Reset />
      <Dashboard />
    </div>
    </div>
   
    
  //   <Router>
  //   <Routes>
  //       <Route exact path="/" element={<Login />} />
  //       <Route exact path="/register" element={<Register />} />
  //       <Route exact path="/reset" element={<Reset />} />
  //       <Route exact path="/dashboard" element={<Dashboard />} />
  //     </Routes>
  // </Router>
  );
};

export default Tester;
