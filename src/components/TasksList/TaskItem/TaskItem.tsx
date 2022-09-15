import { categories } from "../../../constants/categories";
import { useTasks } from "../../../hooks/useTasks";
import { ITask } from "../../../types/task";
import { formatDate } from "../../../utils/date";
import { TaskDetailsModal } from "../TaskControlsDropdown/TaskControlsDropdown";
import * as S from "./styles";

interface TaskItemProps extends ITask {
  showTaskDate?: boolean;
}

export function TaskItem({ showTaskDate = false, ...task }: TaskItemProps) {
  const { toggleTaskStatus, updateSelectedTaskId, selectedTaskId } = useTasks();
  const categoryDetails = categories.find((c) => c.key === task.category);

  async function handleToggleTaskStatus() {
    await toggleTaskStatus(task.id);
  }

  function handleUpdateSelectedTaskId() {
    if (task.id === selectedTaskId) {
      updateSelectedTaskId(undefined);
    } else {
      updateSelectedTaskId(task.id);
    }
  }

  return (
    <S.Container>
      <S.TaskContainer isDone={task.isDone}>
        <S.TaskCheckWrapper onPress={handleToggleTaskStatus}>
          <S.TaskCheck color={categoryDetails?.color} isDone={task.isDone}>
            <S.TaskCheckIcon name="check" />
          </S.TaskCheck>
        </S.TaskCheckWrapper>

        <S.TodayTaskContent
          activeOpacity={0.5}
          onPress={() => handleUpdateSelectedTaskId()}
        >
          <S.TaskTitle isDone={task.isDone}>{task.title}</S.TaskTitle>

          <S.TaskDetailsContainer>
            <S.CategoryWrapper>
              <S.CategoryIndicator color={categoryDetails?.color} />
              <S.TaskCategory
                color={categoryDetails?.color}
                isDone={task.isDone}
              >
                {categoryDetails?.label}
              </S.TaskCategory>
            </S.CategoryWrapper>
            <S.TaskDateText>
              {showTaskDate ? formatDate(task.date) : ""}
            </S.TaskDateText>
            <S.TaskOverdueText>
              {task.overdue ? "Atrasada" : ""}
            </S.TaskOverdueText>
          </S.TaskDetailsContainer>
        </S.TodayTaskContent>
      </S.TaskContainer>

      <TaskDetailsModal isOpen={task.id === selectedTaskId} task={task} />
    </S.Container>
  );
}
