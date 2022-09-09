import React from "react";
import { TextInputProps } from "react-native";

import * as S from "./styles";

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export function Input({ label, error, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.Container>
  );
}
