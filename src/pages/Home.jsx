import React from "react";
import Features from "../components/Features/Features";
import Market from "../components/Market/Market";
import Footer from "../components/Footer/Footer";
import Trial from "../components/Trial/Trial";
import Laptop from "../components/Laptop/Laptop";
import Homex from "../components/Home/Home";
import Brands from "../components/Brands/Brands";
import Grean from "../components/Grean/Grean";

const Home = () => {
  return (
    <div>
      <Homex />
      <Laptop />
      <Grean />
      <Features />
      <Market />
      <Brands />
      <Trial />
      <Footer />
    </div>
  );
};

export default Home;
