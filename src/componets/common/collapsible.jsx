import React from "react";
import "./collapsible.css";

const Collapsible = ({
  title,
  subtitle,
  isCollapsed,
  onClick,
  icon,
  content,
}) => {
  return (
    <div>
      <div className="collapsible-container">
        <div className="collapsible d-flex">
          <div>
            <div className="collapsible-title">{title}</div>
            <div>{subtitle}</div>
          </div>
          <div onClick={onClick}>{icon}</div>
        </div>
        {isCollapsed && <div className="collapsible-content">{content}</div>}
      </div>
    </div>
  );
};

export default Collapsible;
