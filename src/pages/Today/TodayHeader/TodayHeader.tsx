import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.UserSection>
        <S.UserMessageWrapper>
          <S.WelcomeMessage>Olá, Walisson!</S.WelcomeMessage>
          <S.InfoMessage>Você ainda tem 3 tarefas para hoje.</S.InfoMessage>
        </S.UserMessageWrapper>

        <S.ProfileImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/87311565?v=4",
          }}
        />
      </S.UserSection>
    </S.Container>
  );
}
