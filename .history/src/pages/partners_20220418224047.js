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
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            <Link to="/signin">Sign-In</Link>
          </button>
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center pt-16">
        <div
          className="text-center text-4xl font-bold text-gray-600"
          style={{ fontSize: 50, lineHeight: 1.2 }}
        >
          Community Partners
        </div>
        <div className="w-full flex mt-4">
          <div className="w-1/3 relative px-20 flex flex-col items-center">
            <div
              className="absolute w-4 h-1/2 -right-2"
              style={{ backgroundColor: "#F05A23" }}
            />
            <div
              className="rounded-full bg-gray-100 opacity-50 border border-slate-500 flex items-center justify-center"
              style={{ width: 250, height: 250 }}
            >
              <div
                className="pt-4 text-xl text-gray-600 text-center"
                style={{ fontSize: 35 }}
              >
                Become a <br />
                partner
              </div>
            </div>
            <div
              className="pt-4 text-xl font-bold text-gray-600"
              style={{ fontSize: 40 }}
            >
              Partner
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
          </div>
          <div className="w-1/3 relative px-20 flex flex-col items-center">
            <div
              className="absolute w-4 h-1/2 -right-2"
              style={{ backgroundColor: "#F05A23" }}
            />
            <div
              className="rounded-full bg-gray-100 opacity-50 border border-slate-500 flex items-center justify-center"
              style={{ width: 250, height: 250 }}
            >
              <div
                className="pt-4 text-xl text-gray-600 text-center"
                style={{ fontSize: 35 }}
              >
                Become a <br />
                partner
              </div>
            </div>
            <div
              className="pt-4 text-xl font-bold text-gray-600"
              style={{ fontSize: 40 }}
            >
              Partner
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
          </div>
          <div className="w-1/3 relative px-20 flex flex-col items-center">
            <div
              className="rounded-full bg-gray-100 opacity-50 border border-slate-500 flex items-center justify-center"
              style={{ width: 250, height: 250 }}
            >
              <div
                className="pt-4 text-xl text-gray-600 text-center"
                style={{ fontSize: 35 }}
              >
                Become a <br />
                partner
              </div>
            </div>
            <div
              className="pt-4 text-xl font-bold text-gray-600"
              style={{ fontSize: 40 }}
            >
              Partner
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
            <div
              className="pt-4 text-xl text-gray-600"
              style={{ fontSize: 35 }}
            >
              This is a testimonial
            </div>
          </div>
        </div>
        <img
          className="logo-icon h-5/6 absolute bottom-0 right-0 -z-20"
          src="assets/images/logos/tv-logo.png"
          alt="logo"
        />
      </div>
    </>
  );
}
export default Partners;
