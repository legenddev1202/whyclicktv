import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Contact() {
  return (
    <div className="relative w-full">
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
            <Link to="/partners">PARTNERS</Link>
          </button>
        </div>
      </div>
      <div
        className="absolute w-4 h-full left-0 right-0 mx-auto z-10"
        style={{ backgroundColor: "#F05A23", height: "100vh" }}
      ></div>
      <div className="w-full mt-20 absolute p-12 flex">
        <div className="w-1/2 p-12 pr-24 flex flex-col items-center">
          <div className="text-4xl font-bold" style={{ fontSize: 50 }}>
            BUSINESS INFO
          </div>
          <div
            className="w-full h-72 bg-gray-300 mt-8"
            style={{ height: 334 }}
          ></div>
          <div className="mt-8 self-start">
            <div
              className="text-xl font-bold"
              style={{ fontSize: 30, lineHeight: 1.2 }}
            >
              Address
            </div>
            <div className="text-xl" style={{ fontSize: 30, lineHeight: 1.2 }}>
              1200 W 35th Street{" "}
            </div>
            <div className="text-xl" style={{ fontSize: 30, lineHeight: 1.2 }}>
              Chicago, IL, 60629{" "}
            </div>
          </div>
        </div>
        <div className="w-1/2 p-12 pl-24 flex flex-col items-center">
          <div className="text-4xl font-bold" style={{ fontSize: 50 }}>
            QUESTIONS
          </div>
          <div className="w-full mt-8">
            <input
              className="w-full rounded-md h-16 border px-4 bg-gray-100"
              placeholder="Name"
            ></input>
            <div className="w-full mt-8">
              <input
                className="w-full rounded-md h-16 border px-4 bg-gray-100"
                placeholder="Last Name"
              ></input>
            </div>

            <div className="w-full mt-8">
              <input
                className="w-full rounded-md h-16 border px-4 bg-gray-100"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="self-start mt-8">
            <button
              className=" rounded-full"
              style={{
                backgroundColor: "#F05A23",
                width: 198,
                height: 81,
                color: "white",
                fontSize: 30,
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <img
        className="logo-icon h-72 absolute bottom-0 right-0"
        src="assets/images/logos/tv-logo.png"
        alt="logo"
      />
    </div>
  );
}

export default Contact;
