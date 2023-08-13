import { useEffect, useState } from 'react'
import { InputMessage } from "../../../../components/InputMessage";
import { Message } from "../../../../components/Message";
import { useChat } from "../../../../hooks/useChat";
import { EmptyMessage } from "../EmptyMessage";
import * as S from "./styles";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

export const Conversation = () => {
const { currentConversation, setUserMessage, setAutoType } = useChat()
  const onSubmitMessage = (content: string) => {
    if (content) {
      setUserMessage(content)
    }
  };

  const handleDone = () => {}

  // useEffect(() => {
  //   if (currentConversation.length && !currentConversation[0].autoTyped) {
  //   }
  // },[currentConversation])

  console.log(currentConversation)

  return (
    <S.ConversationContainer width={"100%"} direction="column">
      <S.ConversationContent>
        {currentConversation.length ? (
          currentConversation.map(({ id, author, content, autoTyped}, index) => {
            if (index === 0 ) {
              return (
                <Message key={id} author={author} content={content} autoTyped={autoTyped}>
                  {!autoTyped ? (
                    <Typewriter words={[content]} loop={1} typeSpeed={20} onLoopDone={handleDone} />
                  ): null}  
                </Message>
              )
            } else {
              return <Message key={id} author={author} content={content} autoTyped={autoTyped} />;
            }
          })
        ) : (
          <EmptyMessage />
        )}
      </S.ConversationContent>
      <S.InputContainer height="auto">
        <InputMessage onReply={onSubmitMessage} />
      </S.InputContainer>
    </S.ConversationContainer>
  );
};
