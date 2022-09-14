import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface AddTaskButtonProps extends TouchableOpacityProps {}

export function AddTaskButton({ children, ...rest }: AddTaskButtonProps) {
  const navigation = useNavigation();

  return (
    <S.AddTask
      {...rest}
      onPress={() => navigation.navigate("RegisterModal" as never)}
      activeOpacity={0.7}
    >
      <S.AddTaskWrapper>
        <S.AddTaskIcon name="plus" />
      </S.AddTaskWrapper>
    </S.AddTask>
  );
}
