import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
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
import { useTasks } from "../../hooks/useTasks";
import { showToast } from "../../utils/toast";
import { taskSchema } from "./schema";

import { Select } from "../../components/Form/Select";
import { categories } from "../../constants/categories";
import * as S from "./styles";
import { addHours, intlFormat } from "date-fns";

interface FormData {
  title: string;
  category: string;
}

export function RegisterScreen() {
  const { createTask } = useTasks();
  const navigation = useNavigation();
  const [date, setDate] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(taskSchema),
  });

  const selectOptions = useMemo(() => {
    return categories.map((category) => ({
      value: category.key,
      label: category.label,
    }));
  }, [categories]);

  const handleAddNewTask: SubmitHandler<FieldValues | FormData> = async (
    data
  ) => {
    if (!date) {
      Alert.alert(
        "Formulário imcompleto",
        "Defina uma data para a sua tarefa."
      );
    }

    const { title, category } = data;
    const utcDate = new Date(`${date}`);
    const now = new Date();
    const utcTimeOffset = now.getTimezoneOffset() / 60;

    await createTask(title, category, addHours(utcDate, utcTimeOffset));
    showToast("success", "Tarefa adicionada", "Adicionada com sucesso!");
    navigation.navigate("Hoje" as never);
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
              <Select
                label="Categoria"
                onBlur={onBlur}
                options={selectOptions}
                selectedValue={value}
                onValueChange={onChange}
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
