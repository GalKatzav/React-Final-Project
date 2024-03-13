import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'; // Import CSS file for styling

export default function MyRouter() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-cream"> {/* Change bg-secondary to bg-cream */}
        <ul className="navbar-nav mx-auto"> {/* Change me-auto to mx-auto for center alignment */}
          <li className="nav-item">
            <Link to="/home" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/universities" className="nav-link active">
              Universities
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addUniversities" className="nav-link active">
              Add Universities
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
