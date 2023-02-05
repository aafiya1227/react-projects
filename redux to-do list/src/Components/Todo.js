import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Action/Action";
import "./Todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const selector = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div>
            <h2>Add Your List Here</h2>
          </div>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => {
                if (inputData.length > 0) {
                  dispatch(addTodo(inputData), setInputData(""));
                }
              }}
            ></i>
          </div>
          <div className="showItems">
            {selector.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-trash-alt add-btn"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              onClick={() => dispatch(removeTodo())}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
