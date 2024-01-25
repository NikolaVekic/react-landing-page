import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

const Features = () => {
  return (
    <div className="ai__features section__padding" id="features">
      <div className="ai__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          consequatur voluptate nulla!
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
          ducimus.
        </p>
      </div>
      <div className="ai__features-container">
        {featuresData.map((item, index) => {
          return (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
