import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";

export const AddTask = styled(RectButton)`
  font-family: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors["primary"]};
  border-radius: 99999px;
  padding: 7px;

  position: absolute;
  bottom: ${RFValue(15)}px;
  right: ${RFValue(15)}px;

  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const AddTaskIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
`;
