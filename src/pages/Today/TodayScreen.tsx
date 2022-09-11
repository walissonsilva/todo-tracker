import React from "react";
import { AddTaskButton } from "../../components/AddTaskButton";
import { useTasks } from "../../hooks/useTasks";
import * as S from "./styles";
import { Header } from "./TodayHeader/TodayHeader";

export function TodayScreen() {
  const { tasks } = useTasks();

  return (
    <S.Container>
      <Header />

      <S.PageContent>
        <S.TodayWrapper>
          <S.TodayTitle>Hoje</S.TodayTitle>
        </S.TodayWrapper>

        <S.TodayTodoContainer showsVerticalScrollIndicator={false}>
          <S.TodayListWrapper>
            {tasks.map((task) => (
              <S.TodayTodoItem key={task.id}>
                <S.TodayTodoContent>
                  <S.TodoTitle>{task.title}</S.TodoTitle>
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
