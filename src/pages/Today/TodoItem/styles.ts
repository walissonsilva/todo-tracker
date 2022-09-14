import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  isDone: boolean;
}
export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) =>
    theme.colors["text-color-lighten"] + "33"};

  ${({ isDone }) =>
    isDone &&
    css`
      opacity: 0.4;
    `}
`;

export const TodayTaskContent = styled.TouchableOpacity`
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 7px 2px;
`;

interface TaskTitleProps {
  isDone: boolean;
}

export const TaskTitle = styled.Text<TaskTitleProps>`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors["text-color"]};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

export const TaskDetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const TaskOverdueText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
`;

export const CategoryWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

interface TaskCategoryProps {
  color?: string;
  isDone?: boolean;
}

export const CategoryIndicator = styled.View<TaskCategoryProps>`
  background-color: ${({ color, theme }) => color || theme.colors.primary};
  width: ${RFValue(7)}px;
  height: ${RFValue(7)}px;
  border-radius: 99999px;
  margin-right: 5px;
`;

export const TaskCategory = styled.Text<TaskCategoryProps>`
  font-size: ${RFValue(12)}px;
  color: ${({ color, theme }) => color || theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;
