import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
import { RFValue } from "react-native-responsive-fontsize";

export const PickerWrapper = styled.View`
  padding: 0 6px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`;

export const StyledPicker = styled(Picker)`
  height: ${RFValue(44)}px;
`;

export const StyledPickerItem = styled(Picker.Item)`
  padding: 10px;
`;
