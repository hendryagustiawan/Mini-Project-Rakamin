import React from "react";

export default function ModalEdit() {
  return (
    <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Task
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                Task Name
              </label>
              <input type="text" className="form-control rounded" id="exampleInputName" aria-describedby="emailHelp" placeholder="Type your Task" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
                Progress
              </label>
              <input type="text" className="form-control rounded" id="exampleInputProgress" placeholder="70%" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn" style={{ backgroundColor: "#ffffff", color: "black", border: "1px solid black" }} data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn" style={{ backgroundColor: "#01959f", color: "#ffffff" }}>
              Save Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
