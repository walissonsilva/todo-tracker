import React from "react";
import { Header } from "../../components/Header";
import { TasksList } from "../../components/TasksList";
import { useTasks } from "../../hooks/useTasks";

import * as S from "./styles";

export function UpcomingScreen() {
  const { upcomingTasks } = useTasks();

  return (
    <S.Container>
      <Header title="Próximas tarefas" onTopOfScreen />

      <S.PageContent>
        <TasksList tasks={upcomingTasks} showTasksDate />
      </S.PageContent>
    </S.Container>
  );
}
