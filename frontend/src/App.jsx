import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { BASE_URL } from "./utils/constant";
import axios from "axios";
import UpdatePopup from "./components/UpdatePopup";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/get`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveTodo = () => {
    axios
      .post(`${BASE_URL}/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prev) => !prev);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`${BASE_URL}/delete/${id}`)
      .then((res) => {
        // deleted in backend and the rest of todos are displayed here
        setUpdateUI((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const updateTodo = (id, updatedTodo) => {
    axios
      .patch(`${BASE_URL}/update/${popupContent.id}`, { toDo: updatedTodo })
      .then((res) => {
        setUpdateUI((prev) => !prev);
        setShowPopup(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title text-center display-4">Todo App</h1>

        <div className="input_holder mt-3 mb-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Add a task"
          />
          <button onClick={saveTodo} className="btn btn-primary">
            Add
          </button>
        </div>

        <div className="list">
          {todos.map((el) => (
            <Todo
              key={el._id}
              id={el._id}
              text={el.toDo}
              onDelete={deleteTodo}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>

      <div className="showpopup mt-4">
        {showPopup && (
          <UpdatePopup
            setShowPopup={setShowPopup}
            updateTodo={updateTodo}
            initialInput={popupContent.toDo}
            popupContent={popupContent}
          />
        )}
      </div>
    </main>
  );
};

export default App;
