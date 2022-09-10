import { useMemo, useState } from "react";
import { Modal, Text } from "react-native";
import { Input, InputProps } from "../Input/Input";
import { Calendar } from "react-native-calendars";

import * as S from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../Header";
import { Button } from "../../Button/Button";

interface InputDateProps extends InputProps {}

export function InputDate(props: InputDateProps) {
  const [isModalSelectDateOpen, setIsModalSelectDateOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState("");

  const formattedDateSelected = useMemo(() => {
    if (dateSelected) {
      const [year, month, day] = dateSelected.split("-");
      return `${day}/${month}/${year}`;
    }

    return "";
  }, [dateSelected]);

  function toggleModal() {
    setIsModalSelectDateOpen(!isModalSelectDateOpen);
  }

  return (
    <S.Container onPress={toggleModal} activeOpacity={0.7}>
      <Input {...props} value={formattedDateSelected} editable={false} />

      <Modal visible={isModalSelectDateOpen}>
        <Header
          title="Selecione uma data"
          goBackIcon={{ show: true, action: toggleModal }}
        />
        <S.ModalContent>
          <S.CalendarWrapper>
            <Calendar
              focusable
              markedDates={{
                [dateSelected]: { selected: true },
              }}
              onDayPress={(date) => setDateSelected(date.dateString)}
            />
          </S.CalendarWrapper>

          <S.ButtonWrapper>
            <Button onPress={toggleModal}>Confirmar</Button>
          </S.ButtonWrapper>
        </S.ModalContent>
      </Modal>
    </S.Container>
  );
}
