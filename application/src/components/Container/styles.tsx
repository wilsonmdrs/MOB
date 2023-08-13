import { styled } from "styled-components";
import { ContainerProps } from ".";

interface WrapperProps extends Omit<ContainerProps, 'children'> {}

export const Wrapper = styled.div<WrapperProps>`
  display: flex ;
  position: relative;
  z-index:  ${props => props.zIndex ? props.zIndex : 2};
  overflow:  ${props => props.overflow ? props.overflow : 'auto'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  height: ${props => props.height ? props.height : '100%'};
  width: ${props => props.width ? props.width : '100%'};
`