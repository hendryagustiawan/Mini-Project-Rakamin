import React from "react";
import { createItems } from "../store/actions/item";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ModalNewTask() {
  const [inputName, setInputName] = useState("");
  const [inputProgress, setInputProgress] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state } = useLocation();
  // console.log(state);

  const handleCreateItems = (e) => {
    e.preventDefault();

    dispatch(
      createItems(state.id, {
        name: inputName,
        progress_percentage: inputProgress,
      })
    );
    navigate("/");
  };

  return (
    <div className="modal fade" id="newTaskModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Create Task
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={handleCreateItems}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                  Task Name
                </label>
                <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" className="form-control rounded" id="exampleInputName" aria-describedby="emailHelp" placeholder="Type your Task" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
                  Progress
                </label>
                <input value={inputProgress} onChange={(e) => setInputProgress(e.target.value)} type="text" className="form-control rounded" id="exampleInputProgress" placeholder="70%" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn" style={{ backgroundCcolor: "#ffffff", color: "black", border: "1px solid black" }} data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="submit" className="btn btn" style={{ backgroundColor: "#01959f", color: "#ffffff" }}>
                Save Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
