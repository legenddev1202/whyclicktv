import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="bg-transparent w-full h-20 flex items-center px-8 justify-between z-0">
        <div>
          <div
            className="absolute h-20 top-0 left-0"
            style={{ backgroundColor: "#F05A23", width: "279px" }}
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
            <Link to="/partners">PARTNERS</Link>
          </button>
        </div>
      </div>

      <div
        className="flex w-full items-center justify-around absolute z-20 mx-auto ml-auto"
        style={{ top: "200px" }}
      >
        <div
          className="bg-gray-300"
          style={{ width: "350px", height: "350px" }}
        >
          IMAGE HERE
        </div>
        <div className="max-w-3xl flex flex-col items-center justify-center">
          <div className="text-4xl font-bold mb-8 text-gray-900">ABOUT</div>
          <div className="text-2xl text-center leading-relaxed text-gray-900">
            WhyClick's mission is to help seek volunteer and sponsorship towards
            supported organizations, so they may prosper and promote good social
            activities by means of communication. The parent company Stay
            Focused Network, LLC creates a network of systems that supply
            organizations and companies with the tools necessary to prosper in
            today's demanding markets.
            <br /> You create the vision and we transform your plan into an
            effective and clear focused medium. Why we click has a tethered
            vision for you.
          </div>
        </div>
      </div>
      <div
        className="absolute w-56 h-full left-0 z-10"
        style={{ backgroundColor: "#F05A23" }}
      ></div>
    </div>
  );
}

export default About;
