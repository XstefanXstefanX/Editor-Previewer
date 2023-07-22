import React from "react";
import UpperHeader from "./UpperHeader";
import { useState } from "react";
import { menuItems } from "../menuItems";

const Header = () => {
  const [drop, setDrop] = useState(false);
  return (
    <div id="nav-bar">
      <UpperHeader />
      <header>
        <div className="nav-area">
          <img
            className="image"
            alt="logo"
            src="https://cdn.iconscout.com/icon/free/png-256/free-marshall-31-283429.png?f=webp"
          />
          <ul>
            {menuItems.map((menuItem) => {
              if (menuItem.submenu) {
                return (
                  <li>
                    <button
                      onMouseOver={() => setDrop((prev) => !prev)}
                      onMouseOut={() => setDrop((prev) => !prev)}
                      className="menuButton"
                    >
                      <a href={menuItem.url}>{menuItem.title}</a>
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </header>
      <div className={`drop ${drop ? "show" : ""}`}></div>
    </div>
  );
};

export default Header;
