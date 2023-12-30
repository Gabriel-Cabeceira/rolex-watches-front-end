import styled from "styled-components";

export const Card = styled.li`
    width: 20em;
    margin: auto;
    display: flex;
    background-color: #f8f8f8;
    height: 18em;

    @media (min-width: 768px){
        width: 30em;
        height: 20em;
    }
`

export const LeftOfCard = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {

        font-size: 1.3em;
    }
`

export const Divisor = styled.div`
    padding: 2em;
`

export const RightOfCard = styled.div`
    width: 50%;
    height: 100%;

    & img {
        width: 100%;
    }
`

export const AddToCartButton = styled.button`
    cursor: pointer;
    border: none;

    &:hover {
        color: #2bad7d;
    }
`