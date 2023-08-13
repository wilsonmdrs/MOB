import * as S from "./styles"
import Logo from '../../assets/imgs/Logo.png'
  
  
export const Header = () => {
    return (
        <S.HeaderContainer>
            <S.LogoImage src={Logo} />
            <S.Circle />
        </S.HeaderContainer>
    )
}