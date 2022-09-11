import { useMemo, useState } from "react";
import { Modal } from "react-native";
import { Calendar } from "react-native-calendars";
import { Input, InputProps } from "../Input/Input";

import { useTheme } from "styled-components";
import { Button } from "../../Button/Button";
import { Header } from "../../Header";
import * as S from "./styles";

interface InputDateProps extends InputProps {
  selectedDate: string;
  onChangeDate: (date: string) => void;
}

export function InputDate({
  selectedDate,
  onChangeDate,
  ...props
}: InputDateProps) {
  const theme = useTheme();
  const [isModalSelectDateOpen, setIsModalSelectDateOpen] = useState(false);

  const formattedDateSelected = useMemo(() => {
    if (selectedDate) {
      const [year, month, day] = selectedDate.split("-");
      return `${day}/${month}/${year}`;
    }

    return "";
  }, [selectedDate]);

  function toggleModal() {
    setIsModalSelectDateOpen(!isModalSelectDateOpen);
  }

  return (
    <S.Container onPress={toggleModal} activeOpacity={0.7}>
      <Input {...props} value={formattedDateSelected} editable={false} />

      <S.StyledModal
        visible={isModalSelectDateOpen}
        animationType="fade"
        onRequestClose={toggleModal}
        presentationStyle="overFullScreen"
        transparent
      >
        <S.ModalOverlay>
          <S.ModalContent>
            <Header
              title="Selecione uma data"
              icon={{ type: "close", action: toggleModal }}
              onTopOfScreen={false}
            />
            <S.CalendarWrapper>
              <Calendar
                theme={{
                  calendarBackground: theme.colors["background-variant"],
                  selectedDayTextColor: theme.colors["white"],
                  selectedDayBackgroundColor: theme.colors["primary"],
                  monthTextColor: theme.colors["text-color"],
                  dayTextColor: theme.colors["text-color"],
                  todayTextColor: theme.colors["primary-variant"],
                  arrowColor: theme.colors["text-color"],
                }}
                focusable
                markedDates={{
                  [selectedDate]: { selected: true },
                }}
                onDayPress={(date) => onChangeDate(date.dateString)}
              />
            </S.CalendarWrapper>

            <S.ButtonWrapper>
              <Button onPress={toggleModal}>Confirmar</Button>
            </S.ButtonWrapper>
          </S.ModalContent>
        </S.ModalOverlay>
      </S.StyledModal>
    </S.Container>
  );
}
