import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Partners from "./pages/partners";
import Referral from "./pages/referral";
import Success from "./pages/success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="partners" element={<Partners />} />
      <Route path="referrel" element={<Referral />} />
      <Route path="success" element={<Success />} />
    </Routes>
  );
}

export default App;
