export interface ITask {
  id: number;
  title: string;
  category: string;
  date: Date;
  isDone: boolean;
  startDateTime?: string;
  endDateTime?: string;
  overdue?: boolean;
}
