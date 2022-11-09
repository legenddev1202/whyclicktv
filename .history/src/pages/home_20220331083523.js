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
            <Link to="/contact">PARTNERS</Link>
          </button>
        </div>
      </div>
      <div className="h-full w-full bg-slate-300">
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: "#F05A23" }}
        >
          <img
            className="logo-icon h-full absolute -bottom-20 right-72"
            src="assets/images/logos/tv-logo.png"
            alt="logo"
          />
          <div className="p-20 pt-36">
            <div className="text-lg text-white">773-997-8872</div>
            <div className="text-lg text-white">Tell us your story...</div>
            <div className="text-4xl font-bold text-white">
              Your Vision. Our Mission.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-8 pl-36 flex flex-col items-center justify-center relative">
        <div className="text-3xl font-bold">Recommend Us</div>
        <div className="text-2xl max-w-lg pt-8 leading-loose">
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
        <div className="w-1/5 h-full bg-white shadow-2xl absolute left-20 -top-12 flex flex-col justify-between items-center">
          <div>How can we help?</div>
          <div className="pt-4">
            <input
              className="border rounded-full w-full h-12 px-2"
              placeholder="Name"
            ></input>
          </div>
          <div className="pt-8">
            <input
              className="border rounded-full w-full h-12 px-4"
              placeholder="Email"
            ></input>
          </div>
          <div className="pt-8">
            <input
              className="border rounded-full w-full h-12 px-4"
              placeholder="Phone"
            ></input>
          </div>
          <div className="pt-8">
            <input
              className="border rounded-full w-full h-12 px-4"
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
