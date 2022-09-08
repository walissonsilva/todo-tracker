import React from "react";
import { ModalProps, Text } from "react-native";
import { PageContent } from "../../pages/Today/styles";

import * as S from "./styles";

interface TaskModalProps extends ModalProps {
  title: string;
  toggleModal: () => void;
}

export function TaskModal({ title, toggleModal, ...rest }: TaskModalProps) {
  return (
    <S.Modal {...rest}>
      <PageContent>
        <Text>Teste</Text>
        <S.CloseIconButton onPress={toggleModal}>
          <S.CloseIcon>Fechar</S.CloseIcon>
        </S.CloseIconButton>
      </PageContent>
    </S.Modal>
  );
}
