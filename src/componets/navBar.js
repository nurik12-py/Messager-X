import React from "react";
import { ReactComponent as Chat } from "../../node_modules/bootstrap-icons/icons/chat.svg";
import { ReactComponent as Edit } from "../../node_modules/bootstrap-icons/icons/pencil-square.svg";
import { ReactComponent as Gear } from "../../node_modules/bootstrap-icons/icons/gear-wide-connected.svg";
import { ReactComponent as Person } from "../../node_modules/bootstrap-icons/icons/person.svg";
import { ReactComponent as People } from "../../node_modules/bootstrap-icons/icons/people.svg";
import { NavLink } from "react-router-dom";

import "./navBar.css";

const NavBar = () => {
  const icons = [<Edit />, <Chat />, <Person />, <Gear />];
  const links = ["/friends", "/chats", "/profile", "/settings"];

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
