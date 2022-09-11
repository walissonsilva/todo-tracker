import React from "react";
import { PickerProps } from "@react-native-picker/picker";

import * as S from "./styles";
import { Container, ErrorMessage, Label } from "../Input/styles";

interface IOption {
  label: string;
  value: string;
}

interface SelectProps extends PickerProps {
  label: string;
  error?: string;
  options: IOption[];
  optionSelected?: string;
  onValueChange?: (itemValue: unknown, itemIndex: number) => void;
}

export function Select({
  label,
  error,
  options,
  optionSelected,
  onValueChange,
  ...rest
}: SelectProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <S.PickerWrapper>
        <S.StyledPicker
          selectedValue={optionSelected}
          onValueChange={onValueChange}
          {...rest}
        >
          {options.map((option) => (
            <S.StyledPickerItem
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </S.StyledPicker>
      </S.PickerWrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
}
