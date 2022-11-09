import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div className="relative">
      <div
        className="absolute w-72 h-full left-0"
        style={{ backgroundColor: "#F05A23" }}
      ></div>
      <div className="bg-transparent w-full h-20 flex items-center px-8 justify-between">
        <div className="h-20">
          <img
            className="logo-icon h-full"
            src="assets/images/logos/logo.svg"
            alt="logo"
          />
        </div>
        <div className="">
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            <Link to="/">HOME</Link>
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23", backgroundColor: "#F05A23" }}
          >
            <Link to="/about">ABOUT</Link>
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
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
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default About;
