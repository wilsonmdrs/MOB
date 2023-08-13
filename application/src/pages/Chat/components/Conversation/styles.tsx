import { styled } from "styled-components";
import { Container } from "../../../../components/Container";

export const ConversationContainer = styled(Container)`
  && {
    height: 100%;
  }
`;

export const ConversationContent = styled(Container)`
  && {
    flex-direction: column-reverse;
    gap: 10px;
    padding: 10px 0;
    overflow: scroll;
    height: 80%;
    &::-webkit-scrollbar {
      display: none;
    };
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const InputContainer = styled(Container)`
  && {
    padding: 2vh 10vw;
    justify-content: center;
    padding-bottom: 2rem;
  }
`;
