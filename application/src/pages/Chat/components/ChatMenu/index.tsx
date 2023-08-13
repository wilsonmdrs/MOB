import { IconButton } from '../../../../components/IconButton'
import * as S from './styles'
import { faPlus, faArrowRotateLeft  } from '@fortawesome/free-solid-svg-icons'
export const ChatMenuOptions = () => {

    return (
        <S.ChatMenuOptionsContainer>
            <IconButton icon={faArrowRotateLeft} />
            <IconButton icon={faPlus} />
        </S.ChatMenuOptionsContainer>
    )
}