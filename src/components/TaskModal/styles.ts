import styled from "styled-components/native";

export const Modal = styled.Modal`
  width: 100%;
  flex: 1;
`;

export const ModalContentContainer = styled.View`
  padding: 22px 30px;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

export const InputsWrapper = styled.View``;
export const ButtonsWrapper = styled.View``;
export const ButtonContainer = styled.View`
  margin-top: 10px;
`;
