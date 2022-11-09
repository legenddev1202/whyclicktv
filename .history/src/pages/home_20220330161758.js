import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-full h-20 flex items-center px-8 justify-between">
        <div>
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
            HOME
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            ABOUT
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            CONTACT
          </button>
          <button
            className="h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23" }}
          >
            PARTNERS
          </button>
        </div>
      </div>
      <div className="h-full w-full bg-slate-300">
        <div className="h-80" style={{ backgroundColor: "#F05A23" }}></div>
      </div>
    </>
  );
}
export default Home;
