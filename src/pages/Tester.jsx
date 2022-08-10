import React from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Reset from "../components/Reset/Reset";
import Dashboard from "../components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function Tester() {
  return (
    <div className='Tester'>
      <Router>
     <Routes>
      
         <Route exact path="/tester" element={<Login />} />
         <Route exact path="/tester/register" element={<Register />} />
         <Route exact path="/tester/reset" element={<Reset />} />
         <Route exact path="/tester/dashboard" element={<Dashboard />} />
       </Routes>
  </Router>
    </div>
   
    
  //   
  );
};

export default Tester;
