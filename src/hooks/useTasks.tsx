import React, { createContext, useContext, useState } from "react";
import { ITask } from "../types/task";

interface TasksContextData {
  tasks: ITask[];
  createTask: (title: string, category: string, date: string) => void;
}

const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Primeira tarefa",
      category: "Categoria",
      date: new Date().toISOString(),
      isDone: false,
    },
  ] as ITask[]);

  function createTask(title: string, category: string, date: string) {
    const newTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        title,
        category,
        date,
        isDone: false,
      },
    ];

    setTasks(newTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
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
