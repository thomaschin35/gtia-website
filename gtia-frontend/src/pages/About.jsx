import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mission from "../components/about/Mission";
import Eboard from "../components/about/Eboard";
import "../styles/about.scss";
import Committee from "../components/about/Committee";
import BackgroundBottom from "../components/about/BackgroundBottom";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Mission />
      <div className="gradient-container">
      <Eboard />
      <Committee/>
        <Footer />
        <BackgroundBottom />
      </div>
    </div>
  );
};

export default About;
