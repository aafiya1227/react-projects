import React, { useState } from "react";

import "./Todo.css";
function UI() {
  const [itemText, setItemText] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const addTask = () => {
    if (itemText.length) {
      setToDoItems([...toDoItems, { text: itemText, active: false }]);
      setItemText("");
    }
  };

  const setItemIsChecked = (toDoItem) => {
    const finalItems = [...toDoItems];
    const currentItemIndex = toDoItems.findIndex(
      (item) => item.text === toDoItem.text
    );
    finalItems[currentItemIndex] = {
      ...finalItems[currentItemIndex],
      active: !toDoItem.active,
    };
    setToDoItems(finalItems);
  };

  const allTask = (event) => {
    setIsActive("all");
  };

  const completeTask = () => {
    setIsActive("completed");
  };

  const activeTask = () => {
    setIsActive("pending");
  };

  let finalToDoItems = [];

  if (isActive === "completed") {
    finalToDoItems = toDoItems.filter((item) => item.active);
  } else if (isActive === "all") {
    finalToDoItems = toDoItems;
  } else finalToDoItems = toDoItems.filter((item) => !item.active);

  return (
    <div>
      <div className="card  ">
        <div className="card-body">
          <h1 className="card-title">THINGS TO DO</h1>
          <input
            type="search"
            placeholder="Add New"
            value={itemText}
            onChange={(e) => setItemText(e.target.value)}
          ></input>
          <div>
            {finalToDoItems.map((toDoItem, ind) => {
              return (
                <div className="checkbox" key={ind}>
                  <input
                    type="checkbox"
                    checked={toDoItem.active}
                    onChange={(event) => setItemIsChecked(toDoItem)}
                  />
                  <h2>{toDoItem.text}</h2>

                  <hr></hr>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card-footer">
          <div className="icons">
            <i className="fa-solid fa-plus" onClick={addTask}></i>
          </div>

          <button onClick={allTask}>All</button>
          <button onClick={activeTask}>Active</button>
          <button onClick={completeTask}>Completed</button>
        </div>
      </div>
    </div>
  );
}

export default UI;
