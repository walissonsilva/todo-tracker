import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity``;

export const ModalContent = styled.View`
  padding: 30px;
  flex: 1;
  justify-content: space-between;
`;

export const CalendarWrapper = styled.View``;

export const DateSelected = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  margin-top: 30px;
  padding: 5px;
  border-radius: 5px;
  font-size: ${RFValue(18)}px;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors["secondary"]};
  color: ${({ theme }) => theme.colors["secondary"]};
`;

export const ButtonWrapper = styled.View``;
