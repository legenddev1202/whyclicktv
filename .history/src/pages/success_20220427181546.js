import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Success() {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const onSubmit = async () => {
    console.log(values);
    var form = {
      email: "info@whyclick.tv",
      // email: 'ocean.kurakin@gmail.com',
      subject: `Received a message from ${values.email}`,
      emailBody: `
        <p> Name: ${values.name} ${values.lastName}</p>
      `,
    };

    const response = await axios.post(
      "https://us-central1-insurancewebapptest.cloudfunctions.net/sendMailOverHTTP_whyClick",
      form
    );
    console.log(response.data);
    if (response.data.includes("Error")) {
      console.log(true);
    } else {
      console.log(true);
    }
  };
  return (
    <div className="relative h-full w-full" style={{ height: "100vh" }}></div>
  );
}

export default Success;
