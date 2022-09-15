import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const PageContent = styled.View`
  padding: 20px 30px 0;
  flex: 1;
`;
