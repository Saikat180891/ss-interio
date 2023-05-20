import React from "react";
import "./index.css";
import nav from "../../Assests/nav.png";

const Navbar = ({ title, icon, a, handleClose }) => {
  return (
    <div className="navbar-container">
      {icon && (
        <img className="seg1" src={icon} onClick={() => handleClose()} />
      )}
      <div className="title">{title} </div>
      {a && <div className="A">{a}</div>}
    </div>
  );
};

export default Navbar;
