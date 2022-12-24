import React from "react";
import { CustomGroup } from "../components";

export default function HomePage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#01959f" }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#" style={{ color: "#ffffff" }}>
            Kanban
          </a>
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
            <button className="btn btn" style={{ backgroundColor: "orange", color: "#ffffff" }} type="submit">
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="product-roadmap container">
        <div className="content-title my-5">
          <span className="fw-semibold fs-5 me-2">Product Roadmap</span>
          <span className="add-new-group text-white">
            <i className="fa-solid fa-plus me-2"></i>Add New Group
          </span>
        </div>
        <div className="group row align-items-center justify-items-between">
          <CustomGroup />
        </div>
      </div>
    </>
  );
}
