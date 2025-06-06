import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient_text">Ready to transform how you learn?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Start Exploring Now</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <h3>Easy Explainer</h3>
          <p>Making complex topics simple, one explanation at a time.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Topics</h4>
          <p>Science</p>
          <p>Technology</p>
          <p>Mathematics</p>
          <p>History</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Popular</h4>
          <p>Black Holes</p>
          <p>AI & Machine Learning</p>
          <p>Cryptocurrency</p>
          <p>Climate Change</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Support</h4>
          <p>How It Works</p>
          <p>Examples</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2024 Easy Explainer. Making learning simple and fun.</p>
      </div>
    </div>
  );
};

export default Footer;
