import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="bg-transparent w-full h-20 flex items-center px-8 justify-between z-0">
        <div>
          <div
            className="absolute w-72 h-20 top-0 left-0"
            style={{ backgroundColor: "#F05A23" }}
          ></div>
        </div>
        <div className="bg-transparent">
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
      <div
        className="absolute w-72 h-full left-0 z-10"
        style={{ backgroundColor: "#F05A23" }}
      ></div>
      <div className="flex justify-between z-20">
        <div className="w-72 h-72 bg-red-300">IMAGE HERE</div>
        <div>
          <div>ABOUT</div>
          <div>
            WhyClick's mission is to help seek volunteer and sponsorship towards
            supported organizations, so they may prosper and promote good social
            activities by means of communication. The parent company Stay
            Focused Network, LLC creates a network of systems that supply
            organizations and companies with the tools necessary to prosper in
            today's demanding markets. You create the vision and we transform
            your plan into an effective and clear focused medium. Why we click
            has a tethered vision for you.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
