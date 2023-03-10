import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#01959f" }}>
      <div className="container">
        <Link to={"/"} className="navbar-brand fw-bold fs-4" href="#" style={{ color: "#ffffff" }}>
          Kanban
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-white" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-white" href="#">
                Favorite
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-white" href="#">
                About
              </a>
            </li>
          </ul>
          <button onClick={handleLogout} className="btn btn" style={{ backgroundColor: "orange", color: "#ffffff" }} type="button">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
