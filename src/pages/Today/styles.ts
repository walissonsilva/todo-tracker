import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import Feather from "react-native-vector-icons/Feather";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageContent = styled.View`
  padding: 22px 30px;
  flex: 1;
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

export const AddIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
`;

export const TodayTodoContainer = styled.ScrollView`
  margin: 10px 0 0;
`;

export const TodayListWrapper = styled.View`
  height: 100%;
`;
