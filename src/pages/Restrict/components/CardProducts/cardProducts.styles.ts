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

export const ExcludeButton = styled.button`
    background-color: #f8f8f8;
    cursor: pointer;
    margin: 0.5em;
    width: 1.5em;
    width: 1.5em;
    border-radius: 50%;
    border: none;

    &:hover {
        background-color: red;
    }
`;