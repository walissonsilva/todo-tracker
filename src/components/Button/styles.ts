import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { ButtonProps } from "./Button";

interface ContainerProps {
  type: ButtonProps["type"];
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: ${RFValue(44)}px;
  background-color: ${({ theme }) => theme.colors["primary"]};
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  ${({ type, theme }) =>
    type === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors["primary-variant"]};
    `}
`;

export const ButtonText = styled.Text<ContainerProps>`
  color: ${({ theme, type }) =>
    type === "default"
      ? theme.colors["white"]
      : theme.colors["primary-variant"]};
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.semi_bold};
`;
