import styled from "styled-components";

export const Card = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c2c2c2;
    margin: 1em 0;
`

export const LeftOfCard = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
        font-size: 1em;
    }

    & p {
        width: 15em;
    }
`

export const RightOfCard = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 30%;
    }
`

export const Divisor = styled.div`
    padding: 1em;
`

export const RemoveToCartButton = styled.button`
    cursor: pointer;
    border: none;
    height: 100%;
    background-color: #888888;

    &:hover {
        background-color: red;
    }
`
