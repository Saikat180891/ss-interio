import React from "react";
import Navbar from "../Navbar";
import "./index.css";
const navOptions = [
  "AN INTRODUCTION",
  "ENTRANCE",
  "DRAWING ROOM",
  "DINING ROOM",
  "THE BEDROOMS",
  "BATHROOMS",
  "KITCHEN",
  "PROPERTY SUMMARY",
  "FEATURES",
  "FLOORPLAN",
  "CONTACT",
];
const SideNav = ({ handleClose }) => {
  return (
    <div className="side-container">
      <button className="close-desktop" onClick={() => handleClose()}>
        X
      </button>
      <ul className="list">
        {navOptions?.map((item) => {
          return <li className="list-ele">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default SideNav;
