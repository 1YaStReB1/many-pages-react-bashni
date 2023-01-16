import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import NavItem from "./NavItem";

const navigation = [
  {
    title: "Главная",
    link: "/"
  },
  {
    title: "Башенки",
    link: "/projects"
  },
  {
    title: "Контакты",
    link: "/contacts"
  }
]

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
        <NavLink to="/" className="logo">
        <strong>Новый</strong> Сайтик
        </NavLink>
         

          <BtnDarkMode/>

          
          <ul className="nav-list">
          {navigation.map((item) =>( <NavItem key={item.title} title={item.title} link={item.link} />)
          )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
