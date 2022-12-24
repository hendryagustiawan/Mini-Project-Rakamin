import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../store/actions/user";

export default function FormSignIn() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(
      signIn({
        email: inputEmail,
        password: inputPassword,
      })
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
            Email
          </label>
          <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="email" className="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
            Password
          </label>
          <input value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} type="password" className="form-control rounded-pill" id="exampleInputPassword1" placeholder="Enter your password" />
        </div>

        <button type="submit" className="btn form-control rounded-pill" style={{ backgroundColor: "#01959f", color: "#ffffff" }}>
          Sign in
        </button>
      </form>
    </div>
  );
}
