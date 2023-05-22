import React, { useState } from "react";
import TodoRow from "./components/TodoRow";
import Button from "./components/Button";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  // Event handler for input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  // Event handler for Adding a new Todo
  const addTodo = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Event handler for deleting todo
  const handleDelete = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Map tasks to TodoRow Component
  const todoList = tasks.map((task, index) => (
    <TodoRow key={index} label={task} onDelete={() => handleDelete(index)} />
  ));

  return (
    <div className="flex flex-col items-center font-sans">
      <h1 className="text-4xl font-bold m-6 text-gray-700">Todo List</h1>

      <div className="flex flex-col p-6 border-b-2 md:flex-row md:justify-between md:items-center  sm:items-center">
        <input
          className="bg-slate-100 rounded-md px-4 py-2 mx-0 mb-3 md:mb-0 md:mr-4 outline-none focus:bg-blue-100 border-green-800 "
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Add task here..."
        />
        <Button variant="big" onClick={addTodo}>
          Add
        </Button>
      </div>

      <div className="flex flex-col pt-2 w-full md:w-4/6 break-all">
        {tasks.length > 0 ? (
          <ul>{todoList}</ul>
        ) : (
          <div className="flex justify-center items-center w-full">
            <p className="mt-5">No Task Found</p>
          </div>

        )}
      </div>
    </div>
  );
}

export default App;
