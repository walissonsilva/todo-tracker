import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.WelcomeMessage>Olá, Walisson!</S.WelcomeMessage>

      <S.ProfileImage
        source={{ uri: "https://avatars.githubusercontent.com/u/87311565?v=4" }}
      />
    </S.Container>
  );
}
