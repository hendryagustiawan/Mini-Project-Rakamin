import React from "react";
import { CustomGroup, CustomNavbar } from "../components";
import { getTodos } from "../store/actions/todo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const { todos } = useSelector((state) => state.todos);

  return (
    <>
      <CustomNavbar />
      <div className="product-roadmap container">
        <div className="content-title my-5">
          <span className="fw-semibold fs-5 me-2">Product Roadmap</span>
          <Link to={"/add"} className="text-decoration-none">
            <span className="add-new-group text-white">
              <i className="fa-solid fa-plus me-2"></i>Add New Group
            </span>
          </Link>
        </div>
        <div className="group row justify-items-between">
          {todos.map((el) => {
            return <CustomGroup key={el.id} id={el.id} title={el.title} description={el.description} />;
          })}
        </div>
      </div>
    </>
  );
}
