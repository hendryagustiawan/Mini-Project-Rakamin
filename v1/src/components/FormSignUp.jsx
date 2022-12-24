import React from "react";
import { Link } from "react-router-dom";

export default function FormSignUp() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label fw-semibold">
            Name
          </label>
          <input type="text" className="form-control rounded-pill" id="exampleInputName1" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
            Email
          </label>
          <input type="email" className="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
            Password
          </label>
          <input type="password" className="form-control rounded-pill" id="exampleInputPassword1" placeholder="Enter your password" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPasswordConfirm1" className="form-label fw-semibold">
            Password Confirmation
          </label>
          <input type="password" className="form-control rounded-pill" id="exampleInputPasswordConfirm1" placeholder="Enter your password again" />
        </div>
        <button type="submit" className="btn form-control rounded-pill" style={{ backgroundColor: "#01959f", color: "#ffffff" }}>
          Sign up
        </button>
        <p className="pt-2">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-decoration-none">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
