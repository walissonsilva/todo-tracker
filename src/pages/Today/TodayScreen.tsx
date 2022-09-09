import React from "react";
import * as S from "./styles";
import { Header } from "./TodayHeader/TodayHeader";

export function TodayScreen() {
  return (
    <S.Container>
      <Header />

      <S.PageContent>
        <S.TodayWrapper>
          <S.TodayTitle>Hoje</S.TodayTitle>
        </S.TodayWrapper>

        <S.TodayTodoContainer showsVerticalScrollIndicator={false}>
          {Array.from({ length: 10 }).map(() => (
            <>
              <S.TodayTodoItem>
                <S.TodayTodoContent>
                  <S.TodoTitle>Criar a tela Today</S.TodoTitle>
                </S.TodayTodoContent>
              </S.TodayTodoItem>
              <S.TodayTodoItem>
                <S.TodayTodoContent>
                  <S.TodoTitle>
                    Um nome enorme para essa tarefa somenteabc para testar como
                    vai ficar
                  </S.TodoTitle>
                </S.TodayTodoContent>
              </S.TodayTodoItem>
            </>
          ))}
        </S.TodayTodoContainer>
      </S.PageContent>
    </S.Container>
  );
}
