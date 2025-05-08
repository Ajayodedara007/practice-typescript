import "./App.css";
import type { Task } from "./types/Task";

function App() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, Bread, Eggs",
      completed: false,
    },
    {
      id: 2,
      title: "Study TypeScript",
      description: "Learn types and interfaces",
      completed: true,
    },
  ];

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
