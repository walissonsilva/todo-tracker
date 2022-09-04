import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(20)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 20px 0;
  border-bottom-left-radius: 20px;
`;

export const WelcomeMessage = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors["text-color"]};
`;

export const ProfileImage = styled.Image`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-radius: 99999px;
`;
