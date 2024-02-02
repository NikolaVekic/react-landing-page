import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "Interface",
    text: "Streamline your experience with our user-friendly interface, designed for effortless navigation and accessibility.",
  },
  {
    title: "Analytics",
    text: "Gain deeper insights with our advanced analytics tools, providing real-time data analysis for informed decision-making.",
  },
  {
    title: "Automation",
    text: "Enhance efficiency through intelligent automation, allowing you to focus on high-value tasks while NexusAI handles the rest.",
  },
  {
    title: "Scalability",
    text: "Grow seamlessly with NexusAI's scalable solutions, adapting to your evolving needs without compromising performance.",
  },
];

const Features = () => {
  return (
    <div className="ai__features section__padding" id="features">
      <div className="ai__features-heading">
        <h1 className="gradient__text">Empower Your Journey with NexusAI.</h1>
        <p>Unleashing the Full Potential of AI Innovation.</p>
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
