import React from "react";
import { TaskItem } from "./TaskItem/TaskItem";
import { ITask } from "../../types/task";

import * as S from "./styles";
import { FlatList } from "react-native";

interface TasksListProps {
  tasks: ITask[];
  showTasksDate?: boolean;
}

export function TasksList({ tasks, showTasksDate = false }: TasksListProps) {
  function renderItem({ item }: { item: ITask }) {
    return <TaskItem {...item} showTaskDate={showTasksDate} />;
  }

  return (
    <S.Container>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
    </S.Container>
  );
}
