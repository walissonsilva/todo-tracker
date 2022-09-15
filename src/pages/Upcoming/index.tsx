import React from "react";
import { Header } from "../../components/Header";

import * as S from "./styles";

export function UpcomingScreen() {
  return (
    <S.Container>
      <Header title="Próximas tarefas" onTopOfScreen />
    </S.Container>
  );
}
