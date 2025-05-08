export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskType = "regular" | "meeting";

export type Task =
  | {
      type: "regular";
      id: number;
      title: string;
      description: string;
      completed: boolean;
      status: TaskStatus;
    }
  | {
      type: "meeting";
      id: number;
      title: string;
      description: string;
      completed: boolean;
      status: TaskStatus;
      time: string;
    };

// export type Task = {
//   id: number;
//   title: string;
//   description: string;
//   completed: TaskStatus;
// };
