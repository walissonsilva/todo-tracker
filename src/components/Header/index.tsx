import React from "react";

import * as S from "./styles";

interface HeaderProps {
  title: string;
  goBackIcon?: {
    show: boolean;
    action: () => void;
  };
}

export function Header({ title, goBackIcon }: HeaderProps) {
  return (
    <S.Container>
      {goBackIcon && goBackIcon.show && (
        <S.IconWrapper onPress={goBackIcon.action}>
          <S.Icon name="arrow-left" />
        </S.IconWrapper>
      )}

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
