import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      setTasks([...tasks, task]);
    }
  };

  const handleCheck = (e) => {
    const li = e.target.parentNode;

    if (li.classList.contains("completed")) {
      li.classList.remove("completed");
    } else {
      li.classList.add("completed");
    }
  };

  const handleRemove = (e, index) => {
    const li = e.target.parentNode;
    li.remove();
  };

  return (
    <div className="App">
      <div id="centerContent">
        <h1>TO-DO List</h1>
        <div id="todoScreen">
          <div id="formDiv">
            <form onSubmit={handleSubmit}>
              <div id="cu">
                <label htmlFor="objective">
                  <input
                    placeholder="Oque temos para hoje?"
                    type="text"
                    onChange={(e) => setTask(e.target.value)}
                    
                  />
                <button id="addButton">Adicionar</button>
                </label>
              </div>
            </form>
          </div>
          <div id="list">
            <ul>
              {tasks.map((todo, index) => (
                <li key={index} className="tasks">
                  <input
                    type="checkbox"
                    name="checkbox"
                    onChange={(e) => handleCheck(e)}
                  />
                  <p>{todo}</p>
                  <button className="removeButton" onClick={(e) => handleRemove(e)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
