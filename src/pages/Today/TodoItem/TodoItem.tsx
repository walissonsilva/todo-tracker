import { useState } from "react";
import { categories } from "../../../constants/categories";
import { ITask } from "../../../types/task";
import { TaskDetailsModal } from "../TaskDetailsModal/TaskDetailsModal";
import * as S from "./styles";

interface TodoItemProps extends ITask {}

export function TodoItem({ ...task }: TodoItemProps) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const categoryDetails = categories.find((c) => c.key === task.category);

  function toggleModal() {
    setIsTaskModalOpen(!isTaskModalOpen);
  }

  return (
    <S.Container isDone={task.isDone}>
      <S.TodayTaskContent activeOpacity={0.5} onPress={toggleModal}>
        <S.TaskTitle isDone={task.isDone}>{task.title}</S.TaskTitle>

        <S.TaskDetailsContainer>
          <S.CategoryWrapper>
            <S.CategoryIndicator color={categoryDetails?.color} />
            <S.TaskCategory color={categoryDetails?.color} isDone={task.isDone}>
              {categoryDetails?.label}
            </S.TaskCategory>
          </S.CategoryWrapper>
          <S.TaskOverdueText>
            {task.overdue ? "Atrasada" : ""}
          </S.TaskOverdueText>
        </S.TaskDetailsContainer>
      </S.TodayTaskContent>

      <TaskDetailsModal
        isOpen={isTaskModalOpen}
        toggleModal={toggleModal}
        task={task}
        categoryDetails={categoryDetails}
      />
    </S.Container>
  );
}