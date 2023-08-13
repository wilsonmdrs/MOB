import * as S from './styles'
export const Footer = () => {
    const year = new Date().getFullYear()
    return (    
        <S.Footer>
            <S.Text>Developed by Wilson Medeiros - {year}</S.Text>
        </S.Footer>
    )
}