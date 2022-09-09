import * as S from "./styles";

interface AddTaskButtonProps {
  children: React.ReactNode;
}

export function AddTaskButton({ children }: AddTaskButtonProps) {
  return <S.AddTask>{children}</S.AddTask>;
}
