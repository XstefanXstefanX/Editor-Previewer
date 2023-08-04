import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faMagnifyingGlass,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const UpperHeader = () => {
  return (
    <ul id="list-menu">
      <li>MyMarshall</li>
      <li>Local Retailers</li>
      <li>
        EN|US <FontAwesomeIcon icon={faFlag} className="icon" />
      </li>
      <li id="searchIcon">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </li>
      <li>
        <FontAwesomeIcon icon={faUser} className="icon" /> Sign in
      </li>
      <li>
        <FontAwesomeIcon icon={faBagShopping} className="icon" /> 0
      </li>
    </ul>
  );
};
export default UpperHeader;
