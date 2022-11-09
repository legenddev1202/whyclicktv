import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Success() {
  return (
    <div
      className="h-full w-full flex flex-row items-between justify-center bg-white"
      style={{ padding: "192.5px 374px 155px 374px", height: "100vh" }}
    >
      <div style={{ height: "270px" }}>
        <img
          className="logo-icon h-full"
          src="assets/images/logos/success.png"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Success;
