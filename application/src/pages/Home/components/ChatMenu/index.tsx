import * as S from './styles'
import { faCommentDots, faMicrophoneLines, faClockRotateLeft  } from '@fortawesome/free-solid-svg-icons'

export const ChatMenu = () => {
    return (
        <S.ChatMenuContainer>
                <S.Title>Chat</S.Title>
                <S.CardContainer>
                    <S.Card to={'/chat/message'}>
                        <S.Filter />
                        <S.Icon icon={faCommentDots} />
                        <S.Text>Message</S.Text>
                    </S.Card>
                    <S.Card to={'/chat/voice'}>
                        <S.Filter />
                        <S.Icon icon={faMicrophoneLines} />
                        <S.Text>Voice</S.Text>
                    </S.Card>
                    <S.Card to={'/chat/history'}>
                        <S.Filter />
                        <S.Icon icon={faClockRotateLeft} />
                        <S.Text>History</S.Text>
                    </S.Card>
                </S.CardContainer>
        </S.ChatMenuContainer>
    )
}