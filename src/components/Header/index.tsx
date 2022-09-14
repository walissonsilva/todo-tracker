import React from "react";

import * as S from "./styles";

interface HeaderProps {
  title: string;
  icon?: {
    type: "back" | "close";
    action: () => void;
  };
  onTopOfScreen?: boolean;
}

export function Header({ title, icon, onTopOfScreen = true }: HeaderProps) {
  return (
    <S.Container onTopOfScreen={onTopOfScreen}>
      {icon && (
        <S.IconWrapper onPress={icon.action} activeOpacity={0.7}>
          <S.Icon name={icon.type === "back" ? "arrow-left" : "x"} />
        </S.IconWrapper>
      )}

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
