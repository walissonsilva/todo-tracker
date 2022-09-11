import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import Feather from "react-native-vector-icons/Feather";

interface ContainerProps {
  onTopOfScreen: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: ${({ onTopOfScreen }) =>
    onTopOfScreen ? RFPercentage(15) : RFPercentage(10)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  padding: ${({ onTopOfScreen }) => (onTopOfScreen ? "30px 30px 0" : "0 30px")};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors["white"]};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-right: 5px;
  padding: 0px 5px 0 0;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(17)}px;
`;
