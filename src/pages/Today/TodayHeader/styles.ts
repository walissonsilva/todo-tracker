import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 44px 30px 20px;
  border-bottom-left-radius: 30px;
`;

export const UserSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${RFPercentage(12)}px;
`;

export const UserMessageWrapper = styled.View`
  flex: 1;
`;

export const WelcomeMessage = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 5px;
`;

export const InfoMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors["white-100"]};
  line-height: ${RFValue(17)}px;
`;

export const ProfileImage = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  margin-left: 20px;
`;
