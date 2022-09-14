import { RFValue } from "react-native-responsive-fontsize";
import styled, { css, DefaultTheme } from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";

export const StyledModal = styled.Modal`
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors["background-variant"]};
  width: 85%;
  height: auto;
  border-radius: 5px;
  padding: 20px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(14)}px;
`;

export const ModalTitle = styled.Text`
  color: ${({ theme }) => theme.colors["text-color"]};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.semi_bold};
`;

export const CloseIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors["text-color"]};
  font-size: ${RFValue(17)}px;
  margin-right: 5px;
`;

export const ModalTaskMainInfoContainer = styled.View``;

export const ModalTaskTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors["text-color"]};
  font-size: ${RFValue(18)}px;
`;

export const ModalTaskCategory = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface TaskCategoryProps {
  color?: string;
}

export const TaskCategory = styled.Text<TaskCategoryProps>`
  font-size: ${RFValue(14)}px;
  color: ${({ color, theme }) => color || theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ModalTaskDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors["text-color-lighten"]};
  font-size: ${RFValue(14)}px;
  margin-top: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(8)}px;
`;

interface ActionWrapperProps {
  disabled?: boolean;
}

export const ActionWrapper = styled.TouchableOpacity<ActionWrapperProps>`
  background-color: ${({ theme }) => theme.colors["background"] + "77"};
  padding: 10px;
  margin: 5px;
  flex: 1;
  align-items: center;
  justify-content: center;
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
  font-size: ${RFValue(16)}px;
  color: ${({ color, theme }) => theme.colors[color || "text-color"]};
`;

export const ActionName = styled.Text<ActionIconProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ color, theme }) => theme.colors[color || "text-color"]};
  font-size: ${RFValue(9)}px;
  margin-top: 5px;
`;
