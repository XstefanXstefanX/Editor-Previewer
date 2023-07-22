import React from "react";

const Dropdown = ({ value }) => {
  return (
    <ul>
      {value.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </ul>
  );
};

export default Dropdown;
