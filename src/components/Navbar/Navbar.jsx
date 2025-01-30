import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const navigate = useNavigate();

  const handleMenuClick = (menuItem, route) => {
    setMenu(menuItem);
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <li
          onClick={() => handleMenuClick("home", "/")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => handleMenuClick("menu", "/menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => handleMenuClick("about us", "/app")}
          className={menu === "about us" ? "active" : ""}
        >
          mobile app
        </li>
        <li
          onClick={() => handleMenuClick("contact us", "/contact")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
