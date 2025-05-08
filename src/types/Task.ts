export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  status: TaskStatus;
}

// export type Task = {
//   id: number;
//   title: string;
//   description: string;
//   completed: TaskStatus;
// };
