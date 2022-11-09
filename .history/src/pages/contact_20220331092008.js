import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Contact() {
  return (
    <div className="h-full w-full">
      <div
        className="absolute w-4 h-full left-0 right-0 mx-auto"
        style={{ backgroundColor: "#F05A23" }}
      ></div>
      <div className="bg-transparent w-full h-20 flex items-center px-8 justify-between z-0">
        <div></div>
        <div className="bg-transparent">
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            <Link to="/">HOME</Link>
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            <Link to="/about">ABOUT</Link>
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23", backgroundColor: "#F05A23" }}
          >
            <Link to="/contact">CONTACT</Link>
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            <Link to="/contact">PARTNERS</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
