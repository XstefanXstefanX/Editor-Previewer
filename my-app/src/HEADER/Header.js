import React from "react";
import UpperHeader from "./UpperHeader";
import { useState } from "react";
import { menuItems } from "../menuItems";
import Dropdown from "./Dropdown";

const Header = () => {
  const [drop, setDrop] = useState(false);
  let indexMain = 0;
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
            {menuItems.map((menuItem, index) => {
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
              return "";
            })}
          </ul>
        </div>
      </header>
      <div className={`drop ${drop ? "show" : ""}`}>
        <Dropdown value={menuItems[0].submenu}/>
        {/*{menuItems.map((menuItem, index) => {
          return (
            <div key={index}>
              <Dropdown value={menuItem.submenu} />
            </div>
          );
        })}*/}
      </div>
    </div>
  );
};

export default Header;
