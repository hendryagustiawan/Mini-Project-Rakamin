import React from "react";
import { Link } from "react-router-dom";

export default function CustomPlanContent({ id, todoId, name, progress_percentage }) {
  return (
    <div className="plan-content mb-3">
      <p className="plan-content-title">{name}</p>
      <hr style={{ borderTop: "dotted 1px" }} />
      <div className="d-flex align-items-center justify-content-between">
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ minWidth: progress_percentage }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span className="progress-precent me-4">{progress_percentage}%</span>
        {/* <!-- button-model-main --> */}
        <i className="fa-sharp fa-solid fa-ellipsis" data-bs-toggle="modal" data-bs-target="#mainModal"></i>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="mainModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="btn-modal">
                  <i className="fa-solid fa-arrow-right me-4 mb-3"></i>Move Right
                </div>
                <div className="btn-modal">
                  <i className="fa-solid fa-arrow-left me-4 mb-3"></i>Move Left
                </div>

                <div className="btn-modal" data-bs-toggle="modal" data-bs-target="#editModal">
                  <i className="fa-solid fa-pen-to-square me-4 mb-3"></i>Edit
                </div>

                <div className="btn-modal-delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                  <Link state={{ id, todoId }} className="text-decoration-none">
                    <i className="fa-solid fa-trash me-4 mb-3"></i>Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End --> */}
      </div>
    </div>
  );
}
