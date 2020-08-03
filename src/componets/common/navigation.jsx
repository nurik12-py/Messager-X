import React from "react";
import { Link } from "react-router-dom";

import "./navigation.css";

const Navigation = ({
  leftIcon,
  rightIcon,
  title,
  subtitle,
  dropdownContent,
  leftLink,
  fixed,
}) => {
  return (
    <div className="navigation">
      <Link to={leftLink} className="navigation-left-icon">
        {leftIcon}
      </Link>
      <div className="navigation-title-container">
        <div className="navigation-title">{title}</div>
        <div className="navigation-subtitle">{subtitle}</div>
      </div>
      <div className="navigation-right-icon">
        <div className="dropdown">
          {rightIcon}
          <div className="dropdown-content">{dropdownContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
