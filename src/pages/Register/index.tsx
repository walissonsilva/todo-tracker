import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Alert } from "react-native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { InputDate } from "../../components/Form/InputDate";
import { Header } from "../../components/Header";
import { taskSchema } from "./schema";

import * as S from "./styles";

interface FormData {
  title: string;
  category: string;
}

export function RegisterScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(taskSchema),
  });

  const handleAddNewTask: SubmitHandler<FieldValues | FormData> = (data) => {
    if (!date) {
      Alert.alert(
        "Formulário imcompleto",
        "Defina uma data para a sua tarefa."
      );
    }

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
          <InputDate
            label="Data"
            selectedDate={date}
            onChangeDate={(date: string) => setDate(date)}
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
