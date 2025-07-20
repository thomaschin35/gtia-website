import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobeComponent from "../components/about/Globe";

const About = () => {
  return (
    <div className="about-page">
      <Header />

      <GlobeComponent />
      <Footer />
    </div>
  );
};

export default About;
