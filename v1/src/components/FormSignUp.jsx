import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function FormSignUp() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirmation, setInputPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("https://todo-api-18-140-52-65.rakamin.com/signup", {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        password_confirmation: inputPasswordConfirmation,
      })
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label fw-semibold">
            Name
          </label>
          <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" className="form-control rounded-pill" id="exampleInputName1" placeholder="Enter your name" />
        </div>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPasswordConfirm1" className="form-label fw-semibold">
            Password Confirmation
          </label>
          <input
            value={inputPasswordConfirmation}
            onChange={(e) => setInputPasswordConfirmation(e.target.value)}
            type="password"
            className="form-control rounded-pill"
            id="exampleInputPasswordConfirm1"
            placeholder="Enter your password again"
          />
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
