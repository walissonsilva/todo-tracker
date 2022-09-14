import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";

export const AddTask = styled(TouchableOpacity)`
  position: absolute;
  bottom: ${RFValue(15)}px;
  right: ${RFValue(15)}px;
  z-index: 1;
  border-radius: 99999px;
`;

export const AddTaskWrapper = styled.View`
  padding: 7px;
  background-color: ${({ theme }) => theme.colors["primary"]};
  border-radius: 99999px;
  align-items: center;
  justify-content: center;

  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  box-shadow: 2px 2px 10px #000000;
`;

export const AddTaskIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
`;
