import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Partners() {
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
            style={{ borderColor: "#F05A23" }}
          >
            <Link to="/contact">CONTACT</Link>
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23", backgroundColor: "#F05A23" }}
          >
            <Link to="/partners">PARTNERS</Link>
          </button>
        </div>
      </div>
      <div className="h-full w-full bg-slate-300 flex flex-col items-center justify-center pt-16">
        <div className="text-center text-4xl font-bold">
          WHO WE WORK
          <br />
          WITH
        </div>
        <div className="w-full flex">
          <div className="w-1/3 bg-red-300 relative px-20 flex flex-col items-center">
            <div
              className="absolute w-4 h-1/2 -right-2"
              style={{ backgroundColor: "#F05A23" }}
            />
            <div className="h-32 w-32 rounded-full bg-gray-100"></div>
            <div className="pt-4 text-xl font-bold">Partner</div>
            <div className="pt-4 text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
          </div>
          <div className="w-1/3 bg-red-300 relative px-20 flex flex-col items-center">
            <div
              className="absolute w-4 h-1/2 -right-2"
              style={{ backgroundColor: "#F05A23" }}
            />
            <div className="h-32 w-32 rounded-full bg-gray-100"></div>
            <div className="pt-4 text-xl font-bold">Partner</div>
            <div className="pt-4 text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
          </div>
          <div className="w-1/3 bg-red-300 relative px-20 flex flex-col items-center">
            <div
              className="absolute w-4 h-1/2 -right-2"
              style={{ backgroundColor: "#F05A23" }}
            />
            <div className="h-32 w-32 rounded-full bg-gray-100"></div>
            <div className="pt-4 text-xl font-bold">Partner</div>
            <div className="pt-4 text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
            <div className="text-xl">This is a testimonial</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Partners;
