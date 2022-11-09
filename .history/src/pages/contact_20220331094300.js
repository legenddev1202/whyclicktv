import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Contact() {
  return (
    <div className="relative h-full w-full" style={{ height: "100vh" }}>
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
            style={{ borderColor: "#F05A23", backgroundColor: "white" }}
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
      <div className="w-full mt-20 absolute p-12 flex">
        <div className="w-1/2 p-12 pr-24 flex flex-col items-center">
          <div className="text-4xl font-bold">BUSINESS INFO</div>
          <div className="w-full h-72 bg-gray-300 mt-8"></div>
          <div className="mt-8 self-start">
            <div className="text-xl font-bold">Address</div>
            <div className="text-xl">1200 W 35th Street </div>
            <div className="text-xl">Chicago, IL, 60629 </div>
          </div>
        </div>
        <div className="w-1/2 p-12 bg-gray-300 pr-24">
          <div className="text-4xl font-bold">BUSINESS INFO</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
