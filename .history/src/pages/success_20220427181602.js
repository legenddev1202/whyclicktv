import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Success() {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  return (
    <div className="relative h-full w-full" style={{ height: "100vh" }}></div>
  );
}

export default Success;
