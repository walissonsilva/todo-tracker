export interface ITask {
  id: number;
  title: string;
  category: string;
  date: string;
  isDone: boolean;
  startDateTime?: string;
  endDateTime?: string;
}
