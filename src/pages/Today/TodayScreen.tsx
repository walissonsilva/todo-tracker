import React, { useEffect } from "react";
import { AddTaskButton } from "../../components/AddTaskButton";
import { TasksList } from "../../components/TasksList";
import { useTasks } from "../../hooks/useTasks";
import { Header } from "./TodayHeader/TodayHeader";

import * as S from "./styles";

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

        <TasksList tasks={[...overdueTasks, ...todayTasks]} />

        <AddTaskButton />
      </S.PageContent>
    </S.Container>
  );
}
