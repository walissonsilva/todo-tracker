import { RectButtonProps } from "react-native-gesture-handler";
import * as S from "./styles";

interface AddTaskButtonProps extends RectButtonProps {
  children: React.ReactNode;
}

export function AddTaskButton({ children }: AddTaskButtonProps) {
  return <S.AddTask>{children}</S.AddTask>;
}
