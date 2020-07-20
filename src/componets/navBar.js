import React from "react";
import { ReactComponent as Chat } from "../icons/chat.svg";
import { ReactComponent as Edit } from "../icons/edit.svg";
import { ReactComponent as Gear } from "../icons/gear.svg";
import { ReactComponent as Person } from "../icons/person.svg";
import { ReactComponent as People } from "../icons/people.svg";
import { NavLink } from "react-router-dom";

import "./navBar.css";

const NavBar = () => {
  const icons = [<People />, <Edit />, <Chat />, <Person />, <Gear />];
  const links = [
    "/create-group",
    "/friends",
    "/chats",
    "/profile",
    "/settings",
  ];

  return (
    <div className="navbar">
      {icons.map((navIcon, key) => (
        <div key={key} className="navbar-action">
          <NavLink to={links[key]}>{navIcon}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
