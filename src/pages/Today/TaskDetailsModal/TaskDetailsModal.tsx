import React from "react";
import { ITask } from "../../../types/task";
import { formatDate, getDayOfWeek } from "../../../utils/date";

import { ICategory } from "../../../types/category";
import * as S from "./styles";
import { useTasks } from "../../../hooks/useTasks";
import { Alert } from "react-native";

interface TaskDetailsModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  task: ITask;
  categoryDetails?: ICategory;
}

export function TaskDetailsModal({
  isOpen,
  toggleModal,
  task,
  categoryDetails,
}: TaskDetailsModalProps) {
  const { deleteTask, toggleTaskStatus } = useTasks();

  function handleRemoveTask() {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover a tarefa "${task.title}"?`,
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: async () => await removeTask() },
      ]
    );
  }

  async function removeTask() {
    toggleModal();
    await deleteTask(task.id);
  }

  async function handleUpdateTaskStatus() {
    if (!task.isDone) toggleModal();
    await toggleTaskStatus(task.id);
  }

  return (
    <S.StyledModal
      visible={isOpen}
      animationType="fade"
      onRequestClose={toggleModal}
      presentationStyle="overFullScreen"
      transparent
    >
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>Detalhes da Tarefa</S.ModalTitle>
            <S.CloseIcon onPress={toggleModal} name="x" />
          </S.ModalHeader>

          <S.ModalTaskMainInfoContainer>
            <S.ModalTaskTitle>{task.title}</S.ModalTaskTitle>
            <S.ModalTaskCategory>
              <S.TaskCategory color={categoryDetails?.color}>
                {categoryDetails?.label}
              </S.TaskCategory>
            </S.ModalTaskCategory>
            <S.ModalTaskDate>{`${formatDate(task.date)}`}</S.ModalTaskDate>

            <S.Actions>
              <S.ActionWrapper
                disabled={task.isDone}
                onPress={() =>
                  !task.isDone
                    ? Alert.alert("Iniciar tarefa", "Em desenvolvimento...")
                    : {}
                }
              >
                <S.ActionIcon color="primary" name="play" />
                <S.ActionName color="primary">Iniciar</S.ActionName>
              </S.ActionWrapper>

              <S.ActionWrapper onPress={handleUpdateTaskStatus}>
                <S.ActionIcon
                  name={task.isDone ? "thumbs-up" : "thumbs-down"}
                  color={task.isDone ? "success" : "danger"}
                />
                <S.ActionName color={task.isDone ? "success" : "danger"}>
                  Status
                </S.ActionName>
              </S.ActionWrapper>

              <S.ActionWrapper
                onPress={() =>
                  Alert.alert("Editar tarefa", "Em desenvolvimento")
                }
              >
                <S.ActionIcon name="edit-2" />
                <S.ActionName>Editar</S.ActionName>
              </S.ActionWrapper>

              <S.ActionWrapper onPress={handleRemoveTask}>
                <S.ActionIcon color="danger" name="trash-2" />
                <S.ActionName color="danger">Apagar</S.ActionName>
              </S.ActionWrapper>
            </S.Actions>
          </S.ModalTaskMainInfoContainer>
        </S.ModalContent>
      </S.ModalOverlay>
    </S.StyledModal>
  );
}
