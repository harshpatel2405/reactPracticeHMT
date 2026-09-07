import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>

        <h2 className="error-title">Page Not Found</h2>

        <p className="error-message">
          Oops! The page you are looking for does not exist
          <br />
          or has been moved.
        </p>

        <button className="home-btn">Go Back Home</button>
      </div>
    </div>
  );
};

export default PageNotFound;