import React from "react";

export default function FormSignIn() {
  return (
    <div>
      <form>
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

        <button type="submit" className="btn form-control rounded-pill" style={{ backgroundColor: "#01959f", color: "#ffffff" }}>
          Sign in
        </button>
      </form>
    </div>
  );
}
