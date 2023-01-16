import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ title,link }) => {
  return (
    <li className="nav-list__item">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
