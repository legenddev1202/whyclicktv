import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-slate-300 w-full h-20 flex items-center px-8 justify-between">
        <div></div>
        <div>
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
    </>
  );
}
export default Home;
