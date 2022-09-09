import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import Feather from "react-native-vector-icons/Feather";

export const Container = styled.View`
  height: ${RFPercentage(8)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors["text-color-inverted"]};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.semi_bold};
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors["text-color-inverted-lighten"]};
  font-size: ${RFValue(20)}px;
`;
