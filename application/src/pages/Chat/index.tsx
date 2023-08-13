import { Container } from "../../components/Container";
import { Conversation } from "./components/Conversation";
import * as S from "./styles";
export const Chat = () => {
  return (
    <Container>
      <S.Filter />
      <Conversation />
    </Container>
  );
};
