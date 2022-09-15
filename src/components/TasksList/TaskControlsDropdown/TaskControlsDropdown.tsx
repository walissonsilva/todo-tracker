import React from "react";
import { ITask } from "../../../types/task";
import { Alert } from "react-native";
import { useTasks } from "../../../hooks/useTasks";

import * as S from "./styles";

interface TaskDetailsModalProps {
  isOpen: boolean;
  task: ITask;
}

export function TaskDetailsModal({ isOpen, task }: TaskDetailsModalProps) {
  const { deleteTask, updateSelectedTaskId } = useTasks();

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
    updateSelectedTaskId(undefined);
    await deleteTask(task.id);
  }

  return isOpen ? (
    <S.Container>
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

      {/* <S.ActionWrapper onPress={handleUpdateTaskStatus}>
        <S.ActionIcon
          name={task.isDone ? "thumbs-up" : "thumbs-down"}
          color={task.isDone ? "success" : "danger"}
        />
        <S.ActionName color={task.isDone ? "success" : "danger"}>
          Status
        </S.ActionName>
      </S.ActionWrapper> */}

      <S.ActionWrapper
        onPress={() => Alert.alert("Editar tarefa", "Em desenvolvimento")}
      >
        <S.ActionIcon name="edit-2" />
        <S.ActionName>Editar</S.ActionName>
      </S.ActionWrapper>

      <S.ActionWrapper onPress={handleRemoveTask}>
        <S.ActionIcon color="danger" name="trash-2" />
        <S.ActionName color="danger">Apagar</S.ActionName>
      </S.ActionWrapper>
    </S.Container>
  ) : null;
}
