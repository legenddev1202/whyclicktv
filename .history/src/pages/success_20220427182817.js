import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Success() {
  return (
    <div
      className="h-full w-full flex flex-col items-center justify-between bg-white"
      style={{ padding: "192.5px 374px 155px 374px", height: "100vh" }}
    >
      <div style={{ height: "270px" }}>
        <img
          className="logo-icon h-full"
          src="assets/images/logos/success.png"
          alt="logo"
        />
      </div>
      <div style={{ fontSize: 80, fontWeight: "bold" }}>THANK YOU!</div>
      <div style={{ fontSize: 40, textAlign: "center", padding: "43px 25px" }}>
        Your responses have been submitted and our team will reach out shortly{" "}
        <br />
        to follow up.
      </div>
    </div>
  );
}

export default Success;
