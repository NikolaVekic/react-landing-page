import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="ai__footer section__padding">
    <div className="ai__footer-links">
      <div className="ai__footer-links_logo">
        <h1>NexusAI</h1>
        <p>
          Address 123, <br /> All Rights Reserved
        </p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Links</h4>
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Contact</h4>
        <p>Address 123</p>
        <p>123-456-7890</p>
        <p>info@email.net</p>
      </div>
    </div>

    <div className="ai__footer-copyright">
      <p>@2024 NexusAI All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
