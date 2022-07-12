import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.jpg";
import S from "./Navbar.module.css";

export default function NavBar() {
  return (
    <header className={S.navbar}>
      <div>
        <NavLink exact to="/">
          <img
            id="logoHenry"
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt=""
          />
        </NavLink>
      </div>
      <nav>
        <ul className={S.list}>
          <li className={S.list_item}>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
