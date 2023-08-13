import { useRef } from 'react'
import * as S from "./styles"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

interface InputMessageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onReply:() => void
}


export const InputMessage = ({ onReply }) => {
    const inputRef = useRef({current:{value:""}})
    const onReplyMessage = () => {
        onReply(inputRef.current.value)
        inputRef.current.value = ''
    }

    const handleOnKeyDown = (keyCode:string) => {
        if (keyCode === 'Enter') {
            onReplyMessage()
        }
    }
    return (
    <S.InputGroup>
        <S.Filter />
        <S.Input type={'text'} ref={inputRef} onKeyPress={e => handleOnKeyDown(e.key)}/>
        <S.SendButton>
            <S.SendIcon icon={faPaperPlane} onClick={onReplyMessage}/>
        </S.SendButton>
    </S.InputGroup>
    )
}