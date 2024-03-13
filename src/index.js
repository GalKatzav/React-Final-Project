import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import WorldUniversities from "./screens/WorldUniversities";
import AddUniversities from "./screens/AddUniversities";
import Footer from "./Footer.js"; // Import the Footer component
import MyRouter from "./MyRouter"; // Assuming MyRouter contains your navbar and footer components

ReactDOM.render(
  <BrowserRouter>
    <div>
      {/* Include the navbar and footer components outside the Routes */}
      <MyRouter />
      <Footer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/worldUniversities" element={<WorldUniversities />} />
        <Route path="/addUniversities" element={<AddUniversities />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
