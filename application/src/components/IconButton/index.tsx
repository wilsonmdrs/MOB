import * as S from './styles'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconProp
}
export const IconButton = ({icon , ...props}:ButtonProps) => {

    return (
        <S.Button {...props}>
            <S.Icon icon={icon} />
        </S.Button>
    )
}