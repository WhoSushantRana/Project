
import React from "react";
import "./home.css";
import pic from "../../assets/Investment.png";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="for_BG">
        <div id="top_section">
          <div className="container">
            <div className="main_content">
              <div className="descriptionx">
              Hi Get your <font color="green">DREAM</font> job<br />
                Now !
              </div>
              
               
             
              <div className="text-center text-white my-2 smallx ">
               
                <button
                  type="text"
                  className="text-center my-5 free_btn font-weight-light"
                >
                  GET STARTED 
                </button>
              </div>
            </div>
          </div><img src={pic} className="img-fluid" alt="error" />
        </div>
      </div>
    </>
  );
};

export default Home;
