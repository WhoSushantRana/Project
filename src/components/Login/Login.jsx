import React, { useEffect, useState } from "react";
import trial_illustration from "../../assets/signn.jpg";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import firebase from "firebase/app"
import "firebase/auth"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
   
  
    <section id="trial">
    <div className="container">
        <div className="content">
          <img
            src={trial_illustration}
            alt="illustration"
            className="img-fluid"
          />
          <div className="text_section">
            <h1 className="trial_title">curious?</h1>
            <h3 className="trial_description">
              Sign up for a FREE trial – 1 free test!
              <br /> Or book a demo – we’d love to show you around!
            </h3>
            <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        /><br />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
            <div className="buttons">
            <button
          className="try_button"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
              
              <button className="demo_button" onClick={signInWithGoogle}>
              <img1 src={google}  />
          Login with Google
        </button>
            </div>
            <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
          </div>
        </div>
      </div>
      
      </section> 
    
    
    
  );
}
export default Login;