export interface ITask {
  id: number;
  title: string;
  category: string;
  date: Date;
  isDone: boolean;
  startDateTime?: Date;
  endDateTime?: Date;
  overdue?: boolean;
}
