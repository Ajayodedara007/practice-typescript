import type { Task, TaskStatus } from "../types/Task";

export function getIncompleteTasks(tasks: Task[]): Task[] {
  return tasks?.filter((task) => !task.completed);
}

export function getStatusMessage(status: TaskStatus): string {
  if (status === "todo") {
    return "Task not started";
  } else if (status === "in-progress") {
    return "Task is in progress";
  } else {
    return "Task completed";
  }
}
