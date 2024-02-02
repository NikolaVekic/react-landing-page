import React from "react";
import "./whatAI.css";
import { Feature } from "../../components";

const WhatAI = () => {
  return (
    <div className="ai__whatai section__margin" id="ai">
      <div className="ai__whatai-feature">
        <Feature
          title="What is AI"
          text="Embark on a journey into the future with NexusAI, where artificial intelligence transcends boundaries. Our advanced solutions redefine the way you perceive technology, offering unparalleled possibilities for innovation and efficiency."
        />
      </div>
      <div className="ai__whatai-heading">
        <h1 className="gradient__text">
          Join the AI Revolution. Elevate Your Experience with NexusAI.
        </h1>
        <p>Empowering Tomorrow, Today.</p>
      </div>
      <div className="ai__whatai-container">
        <Feature
          title="Infinite Insights"
          text="Unlock profound insights with NexusAI, expanding your understanding of data and trends."
        />
        <Feature
          title="Effortless Efficiency"
          text="Redefine operational efficiency through streamlined processes and intelligent automation."
        />
        <Feature
          title="Seamless Integration"
          text="Seamlessly integrate NexusAI into your workflows, enhancing collaboration and adaptability."
        />
      </div>
    </div>
  );
};

export default WhatAI;
