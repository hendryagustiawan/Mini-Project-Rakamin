import React from "react";

export default function ModalDelete() {
  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              <i className="fa-solid fa-triangle-exclamation me-2" style={{ color: "red" }}></i>Delete Task
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">Are you sure want to delete this task? your action can’t be reverted.</div>
          <div className="modal-footer">
            <button type="button" className="btn btn" style={{ backgroundColor: "#ffffff", color: "black", border: "1px solid black" }} data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn" style={{ backgroundColor: "red", color: "#ffffff" }}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
