import { RFValue } from "react-native-responsive-fontsize";
import styled, { css, DefaultTheme } from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-bottom: 10px;
`;

interface ActionWrapperProps {
  disabled?: boolean;
}

export const ActionWrapper = styled.TouchableOpacity<ActionWrapperProps>`
  padding: 7px 0;
  background-color: ${({ theme }) => theme.colors["background-variant"] + "55"};
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 5px;
  border-radius: 5px;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
    `}
`;

interface ActionIconProps {
  color?: keyof DefaultTheme["colors"];
}

export const ActionIcon = styled(Feather)<ActionIconProps>`
  font-size: ${RFValue(12)}px;
  color: ${({ color, theme }) => theme.colors[color || "text-color"]};
  line-height: ${RFValue(20)}px;
`;

export const ActionName = styled.Text<ActionIconProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ color, theme }) => theme.colors[color || "text-color"]};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(22)}px;
  margin-left: 7px;
`;
