import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITask } from "../types/task";

const ASYNC_STORAGE_KEY = "@todo-tracker/tasks";

export async function getTasksOnAPI(): Promise<ITask[]> {
  const tasks = (await AsyncStorage.getItem(ASYNC_STORAGE_KEY)) || "[]";
  const tasksObject: ITask[] = JSON.parse(tasks);
  return tasksObject.map((task) => ({
    ...task,
    date: new Date(task.date),
  }));
}

export async function createTaskOnAPI(task: ITask): Promise<void> {
  const tasks = await getTasksOnAPI();
  await AsyncStorage.setItem(
    ASYNC_STORAGE_KEY,
    JSON.stringify([...tasks, task])
  );
}

export async function deleteTaskOnAPI(taskId: number): Promise<void> {
  const tasks = await getTasksOnAPI();
  const filteredTasks = tasks.filter((task) => taskId === task.id);
  await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(filteredTasks));
}
