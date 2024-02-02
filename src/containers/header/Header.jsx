import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="ai__header section__padding" id="home">
      <div className="ai__header-content">
        <h1 className="gradient__text">Unlock the future with NexusAI.</h1>
        <p>
          Revolutionizing Intelligence - At NexusAI, we redefine the landscape
          of artificial intelligence. Our solutions transcend boundaries,
          offering unprecedented opportunities for growth and efficiency.
          Explore the extraordinary as we guide you through the next frontier of
          intelligent technology.
        </p>
        <div className="ai__header-content__input">
          <input type="email" placeholder="Your Email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="ai__header-content__people">
          <img src={people} alt="img" />
          <p>1,600 people requested access in last 24 hours</p>
        </div>
      </div>
      <div className="ai__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
