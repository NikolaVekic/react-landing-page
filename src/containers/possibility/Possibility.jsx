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
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          repellat dolore iusto.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          provident dolore aut. Fuga eum nobis facilis officia unde accusamus
          odio quibusdam. Rerum quis veritatis saepe iure itaque. Totam,
          recusandae ut?
        </p>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
      </div>
    </div>
  );
};

export default Possibility;
