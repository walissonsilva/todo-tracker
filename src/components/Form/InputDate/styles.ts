import styled from "styled-components/native";

export const Container = styled.TouchableOpacity``;

export const StyledModal = styled.Modal`
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.75);
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors["background-variant"]};
  width: 90%;
  height: auto;
  border-radius: 10px;
`;

export const CalendarWrapper = styled.View`
  padding: 10px 20px 0;
`;

export const ButtonWrapper = styled.View`
  padding: 20px;
`;
