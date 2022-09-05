import React from "react";
import { Header } from "../../components/Header/Header";
import * as S from "./styles";

export function TodayScreen() {
  return (
    <S.Container>
      <Header />

      <S.PageContent>
        <S.TodayWrapper>
          <S.TodayTitle>Tarefas de hoje</S.TodayTitle>

          <S.TodayPercentage>75%</S.TodayPercentage>
        </S.TodayWrapper>
      </S.PageContent>
    </S.Container>
  );
}
