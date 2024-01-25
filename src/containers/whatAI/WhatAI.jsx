import React from "react";
import "./whatAI.css";
import { Feature } from "../../components";

const WhatAI = () => {
  return (
    <div className="ai__whatai section__margin" id="ai">
      <div className="ai__whatai-feature">
        <Feature
          title="What is AI"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          voluptatum."
        />
      </div>
      <div className="ai__whatai-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          voluptatum!
        </h1>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="ai__whatai-container">
        <Feature
          title="Title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          voluptatum!"
        />
        <Feature
          title="Title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          voluptatum!"
        />
        <Feature
          title="Title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          voluptatum!"
        />
      </div>
    </div>
  );
};

export default WhatAI;
