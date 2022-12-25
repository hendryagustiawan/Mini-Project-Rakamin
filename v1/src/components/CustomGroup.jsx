import React from "react";
import CustomPlanContent from "./CustomPlanContent";
import { ModalEdit, ModalDelete, ModalNewTask } from "../components";
import { getItems } from "../store/actions/item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CustomGroup({ id, title, description }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems(id));
  }, []);

  const items = useSelector((state) => state.items?.items);

  return (
    <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
      <div className="group-btn">
        <span className="group-task">{title}</span>
        <h6 className="my-2 plan-task">{description}</h6>
        {items.map((el) => {
          if (id == el.todo_id) {
            return <CustomPlanContent key={el.id} id={el.id} todoId={el.todo_id} name={el.name} progress_percentage={el.progress_percentage} />;
          }
          <input type="text" className="form-control rounded" id="exampleInputPassword1" placeholder="No Task" />;
        })}
        {/* <!-- new-task --> */}
        <div className="new-task mt-2" data-bs-toggle="modal" data-bs-target="#newTaskModal">
          <Link state={{ id }} className="text-decoration-none text-dark">
            <i className="fa-solid fa-circle-plus me-2"></i>
            New Task
          </Link>
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
