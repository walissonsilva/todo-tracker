import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  type?: "default" | "outline";
}

export function Button({ children, type = "default", ...rest }: ButtonProps) {
  return (
    <S.Container
      onPress={rest.onPress}
      type={type}
      activeOpacity={0.7}
      {...rest}
    >
      <S.ButtonText type={type}>{children}</S.ButtonText>
    </S.Container>
  );
}
