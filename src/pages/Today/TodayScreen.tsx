import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";
import * as S from "./styles";
import { Header } from "./TodayHeader/TodayHeader";

export function TodayScreen() {
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();

  useFocusEffect(() => {
    const state = navigation.getState();

    if (state.history) {
      const isAddTaskScreen = state.history.some((historyItem: any) =>
        historyItem.key.includes("Adicionar")
      );

      if (isAddTaskScreen) {
        navigation.navigate("RegisterModal" as never);
      }
    }
  });

  return (
    <S.Container>
      <Header />

      <S.PageContent>
        <S.TodayWrapper>
          <S.TodayTitle>Hoje</S.TodayTitle>
        </S.TodayWrapper>

        <S.TodayTodoContainer showsVerticalScrollIndicator={false}>
          <S.TodayListWrapper>
            {Array.from({ length: 20 }).map((_, index) => (
              <S.TodayTodoItem>
                <S.TodayTodoContent>
                  <S.TodoTitle>
                    {index + 1}
                    Um nome enorme para essa tarefa somenteabc para testar como
                    vai ficar
                  </S.TodoTitle>
                </S.TodayTodoContent>
              </S.TodayTodoItem>
            ))}
          </S.TodayListWrapper>
        </S.TodayTodoContainer>
      </S.PageContent>
    </S.Container>
  );
}
