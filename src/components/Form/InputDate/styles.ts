import styled from "styled-components/native";

export const Container = styled.TouchableOpacity``;

export const StyledModal = styled.Modal`
  background-color: rgba(0, 0, 0, 0.2);
  flex: 1;
  height: 100%;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors["background-variant"]};
  margin-top: auto;
`;

export const CalendarWrapper = styled.View`
  padding: 30px 30px 0;
`;

export const ButtonWrapper = styled.View`
  padding: 40px 20px 20px;
`;
