import React from "react";
import { FormSignUp } from "../components";

export default function SignUpPage() {
  return (
    <div className="container-fluid">
      <div className="container shadow my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 text-center">
            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?w=740&t=st=1671834523~exp=1671835123~hmac=0688c6e5ec7b4b415403aeed9ee449415e49b675c7e1b18166bf2501fa149409" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-5 col-md-11 col-sm-11 offset-1 pe-5 py-5 align-items-center">
            <div className="mb-3">
              <h3 className="fw-bold mb-4">Create a New Account</h3>
            </div>
            <FormSignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
