import { useTasks } from "../../../hooks/useTasks";
import * as S from "./styles";

export function Header() {
  const { todayTasks, overdueTasks } = useTasks();

  const headerMessage = overdueTasks.length
    ? `Você tem ${todayTasks.length} tarefa(s) para hoje e ${overdueTasks.length} pendente(s).`
    : `Você tem ${todayTasks.length} tarefa(s) para hoje`;

  return (
    <S.Container>
      <S.UserSection>
        <S.UserMessageWrapper>
          <S.WelcomeMessage>Olá, Walisson!</S.WelcomeMessage>
          <S.InfoMessage>{headerMessage}</S.InfoMessage>
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
