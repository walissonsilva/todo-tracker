import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  padding: 22px 30px;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

export const InputsWrapper = styled.View`
  margin-top: 8px;
`;
export const ButtonsWrapper = styled.View``;
export const ButtonContainer = styled.View`
  margin-top: 10px;
`;
