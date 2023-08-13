import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isExpanded: boolean;
}

export const SidebarItemContainer = styled(NavLink)`
  && {
    text-decoration: none;
    display: flex;
    height: 50px;
    align-items: center;
    overflow: hidden;
    margin: 0;
    z-index: 7;
    border-bottom: 3px solid ${(props) => props.theme.gray_500};
    gap: 15px;
    justify-content: left;
    &:hover {
      transition: 0.3s ease-in-out;
      border-bottom: 3px solid ${(props) => props.theme.primary};
      background-color: ${(props) => props.theme.gray_950};
    }
  }
  &&.active {
    border-bottom: 3px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.gray_950};
    overflow: hidden;
  }
`;

export const SidebarItemText = styled.p`
  color: ${(props) => props.theme.gray_300};
  font-size: 14px;
  overflow: hidden;
  z-index: 7;
`;
