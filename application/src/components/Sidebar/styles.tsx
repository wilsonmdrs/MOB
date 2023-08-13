import { styled } from "styled-components";
import React  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarProps {
  isExpanded: boolean;
}

export const Sidebar = styled.nav<SidebarProps>`
  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 7;
  height:100%;
  position: absolute;
  opacity: .9;
  overflow: hidden;
  transition: .3s ease-in-out ;
  width: 50px;
  background-color: ${(props) => props.theme.gray_850};
  ${(props) => props.isExpanded ?`width: 20vw};` : null}

`;

export const Offset = styled.div`
  display: flex;
  width:100vw;
  height: 100vw;
  position: fixed;
  z-index:6;
`

export const BarMenu = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 15px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.gray_500};
  cursor: pointer;
  overflow: hidden;
  z-index: 7;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  && {
    display: flex;
    font-size: 16px;
    min-width: 50px;
    color: ${(props) => (props.theme.primary ? props.theme.primary : "#fff")};
    justify-content: center;
    z-index: 7;

  }
`;
