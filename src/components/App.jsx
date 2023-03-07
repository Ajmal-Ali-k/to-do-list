import React, { useState } from "react";
import ToDoItem from "./ToDoitem";

function App() {
  const [inputText, setnIputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setnIputText(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setnIputText("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDO, index) => {
            return (
              <ToDoItem
                text={toDO}
                key={index}
                id={index}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
