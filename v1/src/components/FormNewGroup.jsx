import React from "react";
import { useState } from "react";
import { createTodos } from "../store/actions/todo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function FormNewGroup() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateTodos = (e) => {
    e.preventDefault();

    dispatch(
      createTodos({
        title: inputTitle,
        description: inputDescription,
      })
    );
    navigate("/");
  };

  return (
    <div className="row align-items-center justify-content-center">
      <form className="col-lg-6 col-md-12" onSubmit={handleCreateTodos}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
            Title
          </label>
          <input value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} type="text" className="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your Title" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
            Description
          </label>
          <input value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} type="text" className="form-control rounded-pill" id="exampleInputPassword1" placeholder="Type your Description" />
        </div>

        <button type="submit" className="btn form-control rounded-pill" style={{ backgroundColor: "#01959f", color: "#ffffff" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
