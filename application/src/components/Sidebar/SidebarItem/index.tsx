import * as S from './styles'

interface SidebarItemProps {
    path:string
    name:string
    icon:React.ReactNode
    isExpanded:boolean
}

export const SidebarItem = ({path, name, icon, isExpanded = false}:SidebarItemProps) => {

    return (
        <S.SidebarItemContainer to={path} 
      >
            {icon}
            <S.SidebarItemText>{name}</S.SidebarItemText>
           
        </S.SidebarItemContainer>
    )
}