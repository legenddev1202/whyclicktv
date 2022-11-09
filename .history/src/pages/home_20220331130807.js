import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
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
            style={{ borderColor: "#F05A23", backgroundColor: "#F05A23" }}
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
      <div className="h-full w-full">
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: "#F05A23", height: "426px" }}
        >
          <img
            className="logo-icon h-full absolute -bottom-20"
            style={{ right: "279px" }}
            src="assets/images/logos/tv-logo.png"
            alt="logo"
          />
          <div style={{ padding: "145px 0 0 87px" }}>
            <div className="text-lg text-white" style={{ fontSize: 40 }}>
              773-997-8872
            </div>
            <div className="text-lg text-white pt-8" style={{ fontSize: 40 }}>
              Tell us your story...
            </div>
            <div
              className="text-4xl font-bold text-white pt-8"
              style={{ fontSize: 60 }}
            >
              Your Vision. Our Mission.
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full p-8 pl-72 flex flex-col items-center justify-center relative"
        style={{ height: 516 }}
      >
        <div className="text-3xl font-bold text-gray-900">Recommend Us</div>
        <div className="text-2xl max-w-lg pt-8 leading-loose text-gray-900">
          WhyClick's mission is to help seek volunteer and sponsorship towards
          supported organizations, so they may prosper and promote good social
          activities by means of communication.
        </div>
        <button
          className="rounded-full italic p-2 px-20 text-white underline text-xl mt-8"
          style={{ backgroundColor: "#F05A23" }}
        >
          <Link to="/referrel">Referrel Link</Link>
        </button>
        <div
          className="bg-white shadow-2xl absolute left-20 flex flex-col justify-between items-center"
          style={{ width: "316px", height: "500px", top: -24 }}
        >
          <div className="pt-4" style={{ color: "#F05A23", fontSize: 28 }}>
            How can we help?
          </div>
          <div>
            <input
              className="border rounded-full w-full h-12 px-2"
              style={{ width: 216 }}
              placeholder="Name"
            ></input>
          </div>
          <div className="pt-2">
            <input
              className="border rounded-full w-full h-12 px-2"
              style={{ width: 216 }}
              placeholder="Email"
            ></input>
          </div>
          <div className="pt-1">
            <input
              className="border rounded-full w-full h-12 px-2"
              style={{ width: 216 }}
              placeholder="Phone"
            ></input>
          </div>
          <div className="pt-1">
            <input
              className="border rounded-xl w-full h-24 px-2"
              style={{ width: 216 }}
              placeholder="Message"
            ></input>
          </div>
          <button
            className="w-full h-14 flex items-center justify-center text-white"
            style={{ backgroundColor: "#F05A23" }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
