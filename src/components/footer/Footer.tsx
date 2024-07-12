import React from "react";
import "./Footer.css";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitchFilled,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a leading e-commerce site offering the best sporting products
            at amazing prices.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/products">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: mdjak8980@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/innocent.jaki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitchFilled />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled />
            </a>
            <a
              href="https://www.linkedin.com/in/jakaria-hossain-82935020a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
