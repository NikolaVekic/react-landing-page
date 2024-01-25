import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="ai__header section__padding" id="home">
      <div className="ai__header-content">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          accusamus?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          totam, laborum aliquid hic praesentium quasi sit impedit corporis,
          ratione architecto blanditiis perspiciatis cum nostrum explicabo vitae
          doloremque reiciendis quod ea exercitationem autem esse vel harum.
          Eveniet ut veritatis illum quaerat?
        </p>
        <div className="ai__header-content__input">
          <input type="email" placeholder="Your Email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="ai__header-content__people">
          <img src={people} />
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
