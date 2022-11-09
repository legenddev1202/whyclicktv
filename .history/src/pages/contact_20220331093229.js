import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Contact() {
  return (
    <div className=" relative h-full w-full" style={{ height: "100vh" }}>
      <div className="bg-transparent w-full h-20 flex items-center px-8 justify-between z-20 absolute">
        <div></div>
        <div className="bg-transparent">
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23", backgroundColor: "white" }}
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
      <div
        className="absolute w-4 h-full left-0 right-0 mx-auto z-10"
        style={{ backgroundColor: "#F05A23", height: "100vh" }}
      ></div>
      <div className="w-full h-full bg-red-300 pt-130"></div>
    </div>
  );
}

export default Contact;
