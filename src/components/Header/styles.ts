import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import Feather from "react-native-vector-icons/Feather";

export const Container = styled.View`
  height: ${RFPercentage(15)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  padding: 30px 30px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors["white"]};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
`;
