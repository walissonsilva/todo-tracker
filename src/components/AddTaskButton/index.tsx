import { useNavigation } from "@react-navigation/native";
import { RectButtonProps } from "react-native-gesture-handler";
import * as S from "./styles";

interface AddTaskButtonProps extends RectButtonProps {}

export function AddTaskButton({ children, ...rest }: AddTaskButtonProps) {
  const navigation = useNavigation();

  return (
    <S.AddTask
      {...rest}
      onPress={() => navigation.navigate("RegisterModal" as never)}
    >
      <S.AddTaskIcon name="plus" />
    </S.AddTask>
  );
}
