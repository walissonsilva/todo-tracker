import { useTasks } from "../../../hooks/useTasks";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.UserSection>
        <S.UserMessageWrapper>
          <S.WelcomeMessage>Olá, Walisson!</S.WelcomeMessage>
          <S.InfoMessage>Planeje e gerencie suas tarefas diárias</S.InfoMessage>
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
