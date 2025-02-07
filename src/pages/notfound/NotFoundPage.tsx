import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./notFoundPage.css"; // Include the CSS for styling
import fourofour from "./../../assets/404.png";
const NotFoundPage: React.FC = () => {
  const navigate = useNavigate(); // useNavigate replaces useHistory in v6

  const goHome = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="suggestion">
          It seems like you've lost your way. Let’s get you back on track!
        </p>
        <button className="back-home-btn" onClick={goHome}>
          Go to Homepage
        </button>
      </div>
      <div className="illustration">
        <img src={fourofour} alt="404 Illustration" />
      </div>
    </div>
  );
};

export default NotFoundPage;
