import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Todo = ({ text, id, onDelete, setShowPopup, setPopupContent }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdateTodo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="card mb-3 small-card">
      <div className="card-body d-flex align-items-center justify-content-between">
        <span className="flex-grow-1 text-dark">{text}</span>
        <div className="d-flex">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={handleUpdateTodo}
          >
            <AiFillEdit />
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={handleDelete}
          >
            <RxCross1 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
