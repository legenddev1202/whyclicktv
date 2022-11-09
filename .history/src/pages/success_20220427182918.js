import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Success() {
  return (
    <div
      className="h-full w-full flex flex-col items-center justify-between bg-white"
      style={{ padding: "192.5px 0px 155px 0px", height: "100vh" }}
    >
      <div style={{ height: "270px" }}>
        <img
          className="logo-icon h-full"
          src="assets/images/logos/success.png"
          alt="logo"
        />
      </div>
      <div style={{ fontSize: 80, fontWeight: "bold" }}>THANK YOU!</div>
      <div
        style={{
          fontSize: 40,
          textAlign: "center",
          padding: "43px 25px",
          border: 1,
        }}
      >
        Your responses have been submitted and our team will reach
        <br /> out shortly to follow up.
      </div>
    </div>
  );
}

export default Success;
