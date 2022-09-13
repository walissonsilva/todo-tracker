import React, { useEffect } from "react";
import { AddTaskButton } from "../../components/AddTaskButton";
import { useTasks } from "../../hooks/useTasks";
import * as S from "./styles";
import { Header } from "./TodayHeader/TodayHeader";

export function TodayScreen() {
  const { todayTasks, overdueTasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <S.Container>
      <Header />

      <S.PageContent>
        {overdueTasks.length ? (
          <>
            <S.TodayWrapper>
              <S.TodayTitle>Atrasadas</S.TodayTitle>
            </S.TodayWrapper>

            <S.TodayTodoContainer showsVerticalScrollIndicator={false}>
              <S.TodayListWrapper>
                {overdueTasks.map((task) => (
                  <S.TodayTodoItem key={task.id}>
                    <S.TodayTodoContent>
                      <S.TodoTitle>{task.title}</S.TodoTitle>
                    </S.TodayTodoContent>
                  </S.TodayTodoItem>
                ))}
              </S.TodayListWrapper>
            </S.TodayTodoContainer>
          </>
        ) : null}

        <S.TodayWrapper>
          <S.TodayTitle>Hoje</S.TodayTitle>
        </S.TodayWrapper>

        <S.TodayTodoContainer showsVerticalScrollIndicator={false}>
          <S.TodayListWrapper>
            {todayTasks.map((task) => (
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
