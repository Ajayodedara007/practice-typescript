import "./App.css";
import type { Task } from "./types/Task";
import { getIncompleteTasks } from "./utils/TaskUtils";

function App() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Learn TypeScript",
      description: "Start with basic types and interfaces",
      completed: false,
      status: "todo",
    },
    {
      id: 2,
      title: "Build a Task Manager",
      description: "Use TypeScript with React",
      completed: true,
      status: "done",
    },
  ];

  const incompleteTasks = getIncompleteTasks(tasks);
  console.log("Incomplete tasks:", incompleteTasks);

  return (
    <>
      <div className="p-10 flex items-center justify-center bg-green-200">
        <h1 className="text-4xl font-bold text-green-700">
          Tailwind CSS is Working!
        </h1>
      </div>
    </>
  );
}

export default App;
