import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Referral() {
  return (
    <div
      className="w-full"
      style={{ height: "100vh", backgroundColor: "#F05A23" }}
    >
      <div className="w-full p-12 flex h-full">
        <div className="w-1/2 p-12 mx-12 flex flex-col items-center bg-white h-11/12 relative shadow-2xl">
          <div className="text-4xl font-bold" style={{ fontSize: 50 }}>
            Who you are
          </div>
          <div className="w-full mt-8">
            <input
              className="w-full rounded-md h-16 border px-4 bg-gray-100"
              placeholder="Name"
            ></input>
            <div className="w-full mt-8">
              <input
                className="w-full rounded-md h-16 border px-4 bg-gray-100"
                placeholder="Association with us"
              ></input>
            </div>
          </div>
          <img
            className="logo-icon absolute bottom-0 right-0"
            src="assets/images/logos/tv-logo.png"
            width={203}
            height={192}
            alt="logo"
          />
          <div
            className="text-5xl font-bold absolute bottom-8 right-12"
            style={{ color: "#F05A23", fontSize: 80 }}
          >
            1
          </div>
        </div>
        <div className="w-1/2 p-12 mx-12 flex flex-col items-center bg-white h-11/12 relative shadow-2xl">
          <div className="text-4xl font-bold" style={{ fontSize: 50 }}>
            Referral
          </div>
          <div className="w-full mt-8">
            <input
              className="w-full rounded-md border px-4 bg-gray-100"
              placeholder="Name"
              style={{ height: 110 }}
            ></input>
            <div className="w-full mt-8">
              <input
                className="w-full rounded-md h-16 border px-4 bg-gray-100"
                placeholder="Email"
                style={{ height: 110 }}
              ></input>
            </div>
            <div className="w-full mt-8">
              <input
                className="w-full rounded-md h-16 border px-4 bg-gray-100"
                placeholder="Number"
                style={{ height: 110 }}
              ></input>
            </div>
            <div className="w-full mt-8">
              <input
                className="w-full rounded-md h-16 border px-4 bg-gray-100"
                placeholder="Message..."
                style={{ height: 110 }}
              ></input>
            </div>
          </div>
          <div className="self-start mt-8">
            <button
              className="rounded-full"
              style={{
                backgroundColor: "#F05A23",
                color: "white",
                fontSize: 50,
                height: 80,
                width: 229,
              }}
            >
              SUBMIT
            </button>
          </div>
          <img
            className="logo-icon absolute bottom-0 right-0"
            src="assets/images/logos/tv-logo.png"
            width={203}
            height={192}
            alt="logo"
          />
          <div
            className="text-5xl font-bold absolute bottom-8 right-12"
            style={{ color: "#F05A23", fontSize: 80 }}
          >
            2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
