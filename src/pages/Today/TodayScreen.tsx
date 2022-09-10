import React from "react";
import { AddTaskButton } from "../../components/AddTaskButton";
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
          <S.TodayListWrapper>
            {Array.from({ length: 20 }).map((_, index) => (
              <S.TodayTodoItem>
                <S.TodayTodoContent>
                  <S.TodoTitle>
                    {index + 1}
                    Um nome enorme para essa tarefa somenteabc para testar como
                    vai ficar
                  </S.TodoTitle>
                </S.TodayTodoContent>
              </S.TodayTodoItem>
            ))}
          </S.TodayListWrapper>
        </S.TodayTodoContainer>

        <AddTaskButton />
      </S.PageContent>
    </S.Container>
  );
}
