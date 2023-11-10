import React from "react";
import "./hero.css";
import HeroSectionBGImage from "../../Assets/HeroSection-bg-image.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        <img
          src={HeroSectionBGImage}
          alt="Hero Section Background Image (Person Throwing Paper Airplane)"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-heading">Andrae's Travel Page</h1>
        <h2 className="hero-subheading">Showcasing the top travel locations</h2>
      </div>
    </div>
  );
};

export default Hero;
