import "./laptop.css";
import React from "react";
import { laptop, video } from "../../assets/index";
const Laptop = () => {
  return (
    <div>
      <div id="main">
        <img src={laptop} className="img-fluid" alt="error" />
        <video src={video} controls></video>
        <div className="row">
          <div className="col-12 text-white text-bold ">
            <p className="heading">We help you get your <b> DREAM </b>Job </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
