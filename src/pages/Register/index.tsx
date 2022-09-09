import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TaskModal } from "../../components/TaskModal";

import * as S from "./styles";

export function RegisterScreen() {
  const navigation = useNavigation();

  function goBack() {
    try {
      navigation.goBack();
    } catch {
      navigation.navigate("Hoje" as never);
    }
  }

  return (
    <S.Container>
      <TaskModal title="Nova Tarefa" visible={true} onCancel={goBack} />
    </S.Container>
  );
}
