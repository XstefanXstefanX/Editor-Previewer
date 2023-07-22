import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faMagnifyingGlass,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <div id="nav-bar">
        <ul id="list-menu">
          <li>MyMarshall</li>
          <li>Local Retailers</li>
          <li>
            EN|US <FontAwesomeIcon icon={faFlag} className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="icon" /> Sign in
          </li>
          <li>
            <FontAwesomeIcon icon={faBagShopping} className="icon" /> 0
          </li>
        </ul>
        <header>
            <div className="nav-area">
                <a href='/'>
                    <img className='image' alt='logo' src='https://cdn.iconscout.com/icon/free/png-256/free-marshall-31-283429.png?f=webp'/>
                </a>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
