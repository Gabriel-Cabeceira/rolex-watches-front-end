import styled from "styled-components";

export const Card = styled.li`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c2c2c2;
    margin: 1em 0;
`

export const LeftOfCard = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {

        font-size: 1em;
    }
`

export const Divisor = styled.div`
    padding: 1em;
`

export const RightOfCard = styled.div`
    width: 50%;
    height: 100%;

    & img {
        width: 100%;
    }
`