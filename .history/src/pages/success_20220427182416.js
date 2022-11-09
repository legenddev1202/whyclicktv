import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Success() {
  return (
    <div
      className="h-full w-full flex flex-row items-center justify-center bg-red-300"
      style={{ padding: "192.5 374 155 374", height: "100vh" }}
    >
      <div className="h-20">
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
