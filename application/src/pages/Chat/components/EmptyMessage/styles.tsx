import { styled } from "styled-components";
import { Container } from "../../../../components/Container";

export const EmptyContainer = styled(Container)`
    && {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
`

export const Text = styled.p`
    font-size: 1.5rem
`