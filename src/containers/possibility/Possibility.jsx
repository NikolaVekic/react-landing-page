import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="ai__possibility section__padding" id="possibility">
      <div className="ai__possibility-image">
        <img src={possibilityImage} alt="ai" />
      </div>
      <div className="ai__possibility-content">
        <h4>Transformative AI Capabilities.</h4>
        <h1 className="gradient__text">
          Unleash the Power of Intelligent Technologies with NexusAI. Elevate
          Your Potential.
        </h1>
        <p>
          Experience the next frontier of artificial intelligence with NexusAI.
          Our cutting-edge technologies redefine possibilities, offering
          innovative solutions that adapt to your unique needs.
        </p>
        <h4>Revolutionizing the Future of AI - Explore the Possibilities.</h4>
      </div>
    </div>
  );
};

export default Possibility;
