import React from "react";
import CustomPlanContent from "./CustomPlanContent";
import { ModalEdit, ModalDelete, ModalNewTask } from "../components";

export default function CustomGroup() {
  return (
    <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
      <div className="group-btn">
        <span className="group-task">Group Task 1</span>
        <h6 className="my-2 plan-task">Januari - Maret</h6>
        <CustomPlanContent />
        {/* <!-- new-task --> */}
        <div className="new-task mt-2" data-bs-toggle="modal" data-bs-target="#newTaskModal">
          <i className="fa-solid fa-circle-plus me-2"></i>
          New Task
        </div>
        {/* <!-- Modal-New_Task --> */}
        <ModalNewTask />
        {/* <!-- End-Model-New-Task --> */}

        {/* <!-- Modal-Edit-Task --> */}
        <ModalEdit />
        {/* <!-- End-Model-Edit-Task --> */}

        {/* <!-- Modal-Delete-Task --> */}
        <ModalDelete />
        {/* <!-- End-Model-Delete-Task --> */}
      </div>
    </div>
  );
}
