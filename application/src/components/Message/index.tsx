import * as S from "./styles";
import ProfileImage from '../../assets/imgs/profile-image.jpeg'
import BotImage from '../../assets/imgs/bot-image.png'
import { AuthorType } from "../../redux/reducers/conversationReducer";

interface MessageProps {
  content: string;
  author: AuthorType
  autoTyped?:boolean
  children?:React.ReactNode
}


export const Message = ({ author, content = "", children }: MessageProps) => {
  

  const imageSource = author === AuthorType.BOT ? BotImage : ProfileImage

  return (
    <S.MessageContainer author={author}>
      <S.Author author={author} image={imageSource} />
      <S.ContentContainer author={author}>
        <S.Filter />
        <S.TextMessage author={author}>
          {children ? children : content}
        </S.TextMessage>
      </S.ContentContainer>
    </S.MessageContainer>
  );
};
