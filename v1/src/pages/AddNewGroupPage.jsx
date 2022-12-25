import React from "react";
import { CustomNavbar, FormNewGroup } from "../components";

export default function AddNewGroupPage() {
  return (
    <>
      <CustomNavbar />
      <div className="mt-5 container">
        <h5 className="fw-bold my-4">Create Task</h5>
        <FormNewGroup />
      </div>
    </>
  );
}
