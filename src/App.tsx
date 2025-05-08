import "./App.css";
import type { Task } from "./types/Task";
import { getIncompleteTasks, getStatusMessage } from "./utils/TaskUtils";

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

  // Reusable generic function
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  const firstTask = getFirst(tasks);

  console.log("Get First task", firstTask);

  const incompleteTasks = getIncompleteTasks(tasks);
  console.log("Incomplete tasks:", incompleteTasks);

  const message = getStatusMessage("in-progress");
  console.log("Message:", message);

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
