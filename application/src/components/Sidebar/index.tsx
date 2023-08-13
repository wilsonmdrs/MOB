import {useState} from 'react'
import { SidebarItem } from './SidebarItem'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCommentDots, faHome, faMicrophoneLines, faClockRotateLeft  } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <S.Sidebar isExpanded={isExpanded} >
            {isExpanded ? <S.Offset onClick={() => setIsExpanded(!isExpanded)} /> : null }
            <S.BarMenu onClick={() => setIsExpanded(!isExpanded)}>
                <FontAwesomeIcon icon={faBars} fontSize={25}/>
            </S.BarMenu>
            <SidebarItem isExpanded={isExpanded} path='/home' name='Home' icon={<S.MenuIcon icon={faHome} />}  />
            <SidebarItem isExpanded={isExpanded} path='/chat/message' name='Chat' icon={<S.MenuIcon icon={faCommentDots} />}  />
            <SidebarItem isExpanded={isExpanded} path='/chat/voice' name='Voice' icon={<S.MenuIcon icon={faMicrophoneLines} />}  />
            <SidebarItem isExpanded={isExpanded} path='/chat/history' name='History' icon={<S.MenuIcon icon={faClockRotateLeft} />}  />
        </S.Sidebar>
    )
}