import React from "react";
import { FormSignIn } from "../components";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <div className="container-fluid">
      <div className="container shadow" style={{ marginTop: "10%" }}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 text-center" style={{ backgroundColor: "#01959f", padding: "123px" }}>
            <div style={{ color: "#ffffff" }}>
              <h2 className="fw-bold">Welcome Back</h2>
              <p>Don't have an account?</p>
              <Link to={"/signup"} className="btn px-3 btn-outline-warning rounded-pill">
                Sign up
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-md-11 col-sm-11 offset-1 pe-5 py-5 align-items-center">
            <div className="mb-3">
              <h3 className="fw-bold mb-4">Sign in</h3>
            </div>
            <FormSignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
