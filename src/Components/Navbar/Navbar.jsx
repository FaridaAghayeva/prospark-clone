import React from "react";
import style from "./Navbar.module.css";
import logo from "../../Assets/Images/65d9eea831d71fae16b25713_Prospark Logo.webp";
import cart from "../../Assets/Images/65d3ad07f167f2ee25801f67_cart.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={style.container}>
      <img src={logo} className={style.img} />
      <div className={style.liItems}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? style.liItem_active : style.liItem
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? style.liItem_active : style.liItem
          }
        >
          About
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? style.liItem_active : style.liItem
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? style.liItem_active : style.liItem
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? style.liItem_active : style.liItem
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive ? style.liItem_active : style.liItem
          }
        >
          Pricing
        </NavLink>
      </div>
      <div className={style.cartContainer}>
        <img src={cart} className={style.cart} />
        <div className={style.getin}>
          <p className={style.getinText}>GET IN TOUCH</p>
        </div>
      </div>
    </div>
  );
}
