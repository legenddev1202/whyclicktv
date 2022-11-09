import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import "./App.css";
import Contact from "./pages/contact";
import Partners from "./pages/partners";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contact" element={<Partners />} />
    </Routes>
  );
}

export default App;
