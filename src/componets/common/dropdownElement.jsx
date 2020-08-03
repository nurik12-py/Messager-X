import React from "react";
import { Link } from "react-router-dom";

import "./dropdownElement.css";

const DropdownElement = ({ title, icon, link, ...rest }) => {
  return (
    <Link to={link}>
      <div className="dropdown-element" {...rest}>
        <div>{title}</div>
        {icon}
      </div>
    </Link>
  );
};

export default DropdownElement;
