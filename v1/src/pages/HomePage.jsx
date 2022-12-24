import React from "react";
import { CustomGroup, CustomNavbar } from "../components";

export default function HomePage() {
  return (
    <>
      <CustomNavbar />
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
