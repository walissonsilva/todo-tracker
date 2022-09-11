import styled from "styled-components/native";

export const Container = styled.TouchableOpacity``;

export const StyledModal = styled.Modal`
  background-color: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(2px);
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
