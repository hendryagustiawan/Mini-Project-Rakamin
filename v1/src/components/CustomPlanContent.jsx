import React from "react";

export default function CustomPlanContent() {
  return (
    <div className="plan-content">
      <p className="plan-content-title">Re-designed the zero-g doggie bags. No more spills!</p>
      <hr style={{ borderTop: "dotted 1px" }} />
      <div className="d-flex align-items-center justify-content-between">
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span className="progress-precent me-4">30%</span>
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
                  <i className="fa-solid fa-trash me-4 mb-3"></i>Delete
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
