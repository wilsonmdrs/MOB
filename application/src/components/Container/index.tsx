import { Wrapper } from "./styles"

export interface ContainerProps {
    direction?: 'row' | 'column'
    width?:string
    height?:string
    children:React.ReactNode
    zIndex?:number
    overflow?:string
}

export const Container = ({children, ...props}:ContainerProps) => {
    return <Wrapper {...props} >{children}</Wrapper>
}