import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="bg-transparent w-full h-20 flex items-center px-8 justify-between z-0">
        <div>
          <div className="h-20">
            <img
              className="logo-icon h-full"
              src="assets/images/logos/logo.svg"
              alt="logo"
            />
          </div>
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
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            <Link to="/signin">Sign-In</Link>
          </button>
        </div>
      </div>

      <div
        className="flex w-full items-center justify-around absolute z-20 mx-auto ml-auto"
        style={{ top: "200px", minWidth: 1500 }}
      >
        <div
          className="bg-gray-300"
          style={{ width: "524px", height: "467px" }}
        >
          <img
            className="logo-icon h-full"
            src="assets/images/logos/logo.svg"
            alt="logo"
          />
        </div>
        <div
          className=" flex flex-col items-center justify-center"
          style={{ maxWidth: "887px" }}
        >
          <div
            className="text-4xl font-bold mb-8 text-gray-900"
            style={{ fontSize: 50 }}
          >
            ABOUT
          </div>
          <div
            className="text-2xl text-center leading-relaxed text-gray-900"
            style={{ fontSize: 30 }}
          >
            WhyClick's mission is to help seek volunteer and sponsorship towards
            supported organizations, so they may prosper and promote good social
            activities by means of communication.
            <br /> The parent company Stay Focused Network, LLC creates a
            network of systems that supply organizations and companies with the
            tools necessary to prosper in today's demanding markets.
            <br /> You create the vision and we transform your plan into an
            effective and clear focused medium. <br /> Why we click has a
            tethered vision for you.
          </div>
        </div>
      </div>

      {/* <img
        className="logo-icon h-72 absolute bottom-20 right-20"
        src="assets/images/logos/tv-logo.png"
        alt="logo"
      /> */}
    </div>
  );
}

export default About;
