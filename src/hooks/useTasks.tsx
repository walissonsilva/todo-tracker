import { isBefore, isToday, startOfDay } from "date-fns";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  createTaskOnAPI,
  deleteTaskOnAPI,
  getTasksOnAPI,
  updateTaskOnAPI,
} from "../services/tasks";
import { ITask } from "../types/task";

interface TasksContextData {
  tasks: ITask[];
  todayTasks: ITask[];
  overdueTasks: ITask[];
  loadTasks: () => Promise<void>;
  createTask: (title: string, category: string, date: Date) => Promise<void>;
  deleteTask: (taskId: number) => Promise<void>;
  toggleTaskStatus: (taskId: number) => Promise<void>;
  selectedTaskId: number | undefined;
  updateSelectedTaskId: (taskId?: number) => void;
}

const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [selectedTaskId, setTaskSelectedId] = useState<number | undefined>(
    undefined
  );
  const [tasks, setTasks] = useState([] as ITask[]);

  const todayTasks = useMemo(() => {
    const today = tasks.filter((task) => isToday(task.date));
    return today.sort((a, b) => Number(a.isDone) - Number(b.isDone));
  }, [tasks]);

  const overdueTasks = useMemo(() => {
    const tasksBeforeToday = tasks.filter(
      (task) => isBefore(task.date, startOfDay(new Date())) && !task.isDone
    );
    return tasksBeforeToday.map((task) => ({ ...task, overdue: true }));
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
    const filteredTasks = tasks.filter((task) => taskId !== task.id);

    setTasks(filteredTasks);
    await deleteTaskOnAPI(taskId);
  }

  async function toggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const newStatus = !task.isDone;
        return {
          ...task,
          endDateTime: newStatus ? new Date() : undefined,
          startDateTime: newStatus ? task.startDateTime : undefined,
          isDone: !task.isDone,
        };
      }
      return task;
    });

    setTasks(newTasks);

    const taskToUpdate = tasks.find((task) => task.id === taskId);
    const taskUpdated = {
      ...taskToUpdate,
      isDone: !taskToUpdate?.isDone,
    };
    updateTaskOnAPI(taskUpdated as ITask);
  }

  const updateSelectedTaskId = useCallback(
    (taskId?: number) => {
      setTaskSelectedId(taskId);
    },
    [setTaskSelectedId]
  );

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loadTasks,
        createTask,
        deleteTask,
        toggleTaskStatus,
        todayTasks,
        overdueTasks,
        selectedTaskId,
        updateSelectedTaskId,
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
