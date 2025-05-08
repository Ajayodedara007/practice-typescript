export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: TaskStatus;
}

// export type Task = {
//   id: number;
//   title: string;
//   description: string;
//   completed: TaskStatus;
// };
