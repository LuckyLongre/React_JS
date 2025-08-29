// Todo.jsx
// Main Todo list component. Demonstrates state management, adding/removing tasks, and list rendering for the Todo mini-project.
import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import ShowTask from "./ShowTask";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tabToAll, setTabToAll] = useState(true);
  const [TabToCompleted, setTabToCompleted] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    if (tasks.includes(inputValue.trim())) return;

    setTasks((prev) => [
      ...prev,
      { task: inputValue.trim(), isCompleted: false },
    ]);
    setInputValue("");
  };

  const handleDelete = (val) => {
    setTasks((prev) => prev.filter((vl) => vl !== val));
  };

  const handleComplete = (val) => {
    setTasks((prev) =>
      prev.map((task) =>
        task === val ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-10">
      <div className="bg-gray-800/80 border border-gray-700/60 shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
          Todo List
        </h2>
        <form className="flex gap-2 mb-6" onSubmit={handleAddTask}>
          <input
            type="text"
            className="flex-1 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a Task"
            aria-label="Task input"
          />
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 cursor-pointer text-gray-100 px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <MdAddBox size={24} />
          </button>
        </form>
        <button
          onClick={() => setTasks([])}
          className="w-full mb-6 cursor-pointer bg-gray-700 hover:bg-gray-600 text-cyan-400 border border-gray-600 px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Clear all tasks"
        >
          Clear All
        </button>
        {/* Tabes */}
        <div className="flex mb-6 border-b border-gray-600">
          <button
            onClick={() => {
              setTabToCompleted(false);
              setTabToAll(true);
            }}
            className={`flex-1 py-2 text-center font-semibold transition-colors rounded-t-lg focus:outline-none
      ${
        tabToAll
          ? "border-b-2 border-cyan-400 text-cyan-400 bg-gray-800"
          : "text-gray-400 hover:text-cyan-300 bg-gray-700"
      }
    `}
          >
            All Tasks
          </button>
          <button
            onClick={() => {
              setTabToAll(false);
              setTabToCompleted(true);
            }}
            className={`flex-1 py-2 text-center font-semibold transition-colors rounded-t-lg focus:outline-none
      ${
        TabToCompleted
          ? "border-b-2 border-cyan-400 text-cyan-400 bg-gray-800"
          : "text-gray-400 hover:text-cyan-300 bg-gray-700"
      }
    `}
          >
            Completed Tasks
          </button>
        </div>
        <ul className="space-y-4">
          {tabToAll && tasks.length === 0 && (
            <li className="text-gray-300 text-center">No tasks yet.</li>
          )}

          {/* All Tasks */}
          {tabToAll &&
            tasks.map((task, i) => (
              <ShowTask
                key={i}
                task={task}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
              />
            ))}
          {/* Completed Tasks */}
          {TabToCompleted &&
            tasks.filter((val) => val.completed).length === 0 && (
              <li className="text-gray-300 text-center">No tasks completed yet.</li>
            )}
          {TabToCompleted &&
            tasks
              .filter((val) => val.completed)
              .map((task, i) => (
                <ShowTask
                  key={i}
                  task={task}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                />
              ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
