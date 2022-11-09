import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Referral() {
  return (
    <div
      className="h-full w-full"
      style={{ height: "100vh", backgroundColor: "#F05A23" }}
    >
      <div className="w-full p-12 flex h-5/6">
        <div className="w-1/2 p-12 mx-12 flex flex-col items-center bg-white">
          <div className="text-4xl font-bold">BUSINESS INFO</div>
          <div className="w-full h-72 bg-gray-300 mt-8"></div>
          <div className="mt-8 self-start">
            <div className="text-xl font-bold">Address</div>
            <div className="text-xl">1200 W 35th Street </div>
            <div className="text-xl">Chicago, IL, 60629 </div>
          </div>
        </div>
        <div className="w-1/2 p-12 mx-12 flex flex-col items-center bg-white">
          <div className="text-4xl font-bold">QUESTIONS</div>
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
            <div className="w-full mt-8">
              <input
                className="w-full rounded-md h-16 border px-4 bg-gray-100"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="self-start mt-8">
            <button
              className="p-4 rounded-full px-16"
              style={{ backgroundColor: "#F05A23", color: "white" }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
