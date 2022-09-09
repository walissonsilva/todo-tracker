import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors["text-color-ligthen"]};
  margin-bottom: 6px;
`;

export const Input = styled.TextInput`
  border-radius: 5px;
  height: ${RFValue(44)}px;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors["primary-ligthen"] + "44"};
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.light};
  height: ${RFValue(14)}px;
  margin-left: 2px;
`;
