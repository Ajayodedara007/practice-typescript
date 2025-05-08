import "./App.css";
import type { Task } from "./types/Task";

function App() {
  const tasks: Task[] = [
    {
      type: "regular",
      id: 1,
      title: "Learn TypeScript",
      description: "Start with basic types and interfaces",
      completed: false,
      status: "todo",
    },
    {
      type: "meeting",
      id: 2,
      title: "Build a Task Manager",
      description: "Use TypeScript with React",
      completed: true,
      status: "done",
      time: "11:30",
    },
  ];

  //  Function after data
  function printTask(task: Task) {
    console.log("Task type is:", task.type);

    if (task.type === "regular") {
      console.log("Regular Task:", task.title);
    } else {
      console.log("Meeting Task at", task.time);
    }
  }

  //  Call it
  printTask(tasks[0]);
  printTask(tasks[1]);

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
