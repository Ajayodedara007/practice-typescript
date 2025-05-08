import type { Task } from "../types/Task";

export function getIncompleteTasks(tasks: Task[]): Task[] {
  return tasks?.filter((task) => !task.completed);
}
