import { isBefore, isToday, startOfDay } from "date-fns";
import React, { createContext, useContext, useMemo, useState } from "react";
import {
  createTaskOnAPI,
  deleteTaskOnAPI,
  getTasksOnAPI,
} from "../services/tasks";
import { ITask } from "../types/task";

interface TasksContextData {
  tasks: ITask[];
  todayTasks: ITask[];
  overdueTasks: ITask[];
  loadTasks: () => Promise<void>;
  createTask: (title: string, category: string, date: Date) => Promise<void>;
  deleteTask: (taskId: number) => Promise<void>;
}

const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as ITask[]);

  const todayTasks = useMemo(() => {
    return tasks.filter((task) => isToday(task.date));
  }, [tasks]);

  const overdueTasks = useMemo(() => {
    return tasks.filter((task) => isBefore(task.date, startOfDay(new Date())));
  }, [tasks]);

  async function loadTasks() {
    const tasksLoaded = await getTasksOnAPI();
    setTasks(tasksLoaded);
  }

  async function createTask(title: string, category: string, date: Date) {
    const newTask = {
      id: new Date().getTime(),
      title,
      category,
      date,
      isDone: false,
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
    await createTaskOnAPI(newTask);
  }

  async function deleteTask(taskId: number) {
    const filteredTasks = tasks.filter((task) => taskId === task.id);

    setTasks(filteredTasks);
    await deleteTaskOnAPI(taskId);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loadTasks,
        createTask,
        deleteTask,
        todayTasks,
        overdueTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) throw new Error("useTasks must be used inside a TasksProvider");

  return context;
}
