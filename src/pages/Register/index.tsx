import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { InputDate } from "../../components/Form/InputDate";
import { Header } from "../../components/Header";
import { taskSchema } from "./schema";

import * as S from "./styles";

interface FormData {
  title: string;
  category: string;
  date: string;
}

export function RegisterScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(taskSchema),
  });

  const handleAddNewTask: SubmitHandler<FieldValues | FormData> = (data) => {
    console.log(data);
  };

  return (
    <S.Container>
      <Header title="Crie uma nova tarefa" />
      <S.ContentContainer>
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
              <InputDate
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
            <Button
              type="outline"
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate("Hoje" as never);
              }}
            >
              Cancelar
            </Button>
          </S.ButtonContainer>

          <S.ButtonContainer>
            <Button
              activeOpacity={0.7}
              onPress={handleSubmit(handleAddNewTask)}
            >
              Adicionar
            </Button>
          </S.ButtonContainer>
        </S.ButtonsWrapper>
      </S.ContentContainer>
    </S.Container>
  );
}
