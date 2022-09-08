import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

import Feather from "react-native-vector-icons/Feather";
import { RectButton } from "react-native-gesture-handler";
import { getTabBarHeight } from "@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageContent = styled.View`
  padding: 22px 30px;
`;

export const TodayWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TodayTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors["text-color"]};
`;

export const AddTask = styled(RectButton)`
  font-family: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors["secondary"]};
  border-radius: 99999px;
  padding: 7px;

  position: absolute;
  bottom: ${RFValue(15)}px;
  right: ${RFValue(15)}px;

  width: ${RFValue(44)}px;
  height: ${RFValue(44)}px;

  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const AddIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
`;

export const TodayTodoContainer = styled.ScrollView`
  margin-top: 10px;
  margin-bottom: ${RFValue(50)}px;
`;

export const TodayTodoItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.primary + "11"};
`;

export const TodayTodoContent = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 7px 10px;
`;

export const TodoTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TodayTodoControls = styled.View`
  flex-direction: row;
  align-items: center;
`;
