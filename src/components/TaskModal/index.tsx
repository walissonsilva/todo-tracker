import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ModalProps } from "react-native";
import { Input } from "../Form/Input/Input";
import { Header } from "../Header";

import { Button } from "../Button/Button";
import { taskSchema } from "./schema";
import * as S from "./styles";

interface FormData {
  title: string;
  category: string;
  date: string;
}

interface TaskModalProps extends ModalProps {
  title: string;
  toggleModal?: () => void;
  onCancel?: () => void;
}

export function TaskModal({
  title,
  toggleModal,
  onCancel,
  ...rest
}: TaskModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(taskSchema),
  });

  const handleAddNewTask: SubmitHandler<FieldValues | FormData> = (
    data: any
  ) => {
    console.log(data);
  };

  return (
    <S.Modal {...rest}>
      <Header title={title} />
      <S.ModalContentContainer>
        <S.InputsWrapper>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Título"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.title?.message}
              />
            )}
            name="title"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Categoria"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.category?.message}
              />
            )}
            name="category"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Data"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.date?.message}
              />
            )}
            name="date"
          />
        </S.InputsWrapper>

        <S.ButtonsWrapper>
          <S.ButtonContainer>
            <Button type="outline" activeOpacity={0.7} onPress={onCancel}>
              Cancelar
            </Button>
          </S.ButtonContainer>

          <S.ButtonContainer>
            <Button
              activeOpacity={0.7}
              onPress={handleSubmit(handleAddNewTask)}
            >
              Adicionar tarefa
            </Button>
          </S.ButtonContainer>
        </S.ButtonsWrapper>
      </S.ModalContentContainer>
    </S.Modal>
  );
}
