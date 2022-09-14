import React, { useEffect } from "react";
import { AddTaskButton } from "../../components/AddTaskButton";
import { useTasks } from "../../hooks/useTasks";
import * as S from "./styles";
import { Header } from "./TodayHeader/TodayHeader";
import { TodoItem } from "./TodoItem/TodoItem";

export function TodayScreen() {
  const { todayTasks, overdueTasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <S.Container>
      <Header />

      <S.PageContent>
        <S.TodayWrapper>
          <S.TodayTitle>Suas Tarefas</S.TodayTitle>
        </S.TodayWrapper>

        <S.TodayTodoContainer showsVerticalScrollIndicator={false}>
          <S.TodayListWrapper>
            {[...overdueTasks, ...todayTasks].map((task) => (
              <TodoItem key={task.id} {...task} />
            ))}
          </S.TodayListWrapper>
        </S.TodayTodoContainer>

        <AddTaskButton />
      </S.PageContent>
    </S.Container>
  );
}
