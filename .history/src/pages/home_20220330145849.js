import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-full h-20 flex items-center px-8 justify-between">
        <div></div>
        <div className="">
          <button
            className="bg-slate-500 h-10 px-8 mx-8 border"
            style={{ borderColor: "#F05A23", backgroundColor: "#F05A23" }}
          >
            HOME
          </button>
          <button className="bg-slate-500 h-10 px-8 mx-8">ABOUT</button>
          <button className="bg-slate-500 h-10 px-8 mx-8">CONTACT</button>
          <button className="bg-slate-500 h-10 px-8 mx-8">PARTNERS</button>
        </div>
      </div>
      <div className="h-full w-full bg-slate-300">
        <div className="h-80"></div>
      </div>
    </>
  );
}
export default Home;
