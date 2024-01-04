import styled from "styled-components";

export const Main = styled.div`
    padding: 2em;
`

export const UserName = styled.h1`
    font-style: italic;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ContainerCart = styled.div`

    width: 55%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    overflow-y: auto;
`

export const ContainerProducts = styled.div`
    width: 40%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    overflow-y: auto;
`

export const Title = styled.h1`
    font-size: 1.3em;
    font-style: italic;
`

export const ProductsList = styled.ul`

    width: 100%;
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FinishPurchase = styled.button`
    width: 10em;
    background-color: #0b3f27;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    padding: 1em;
    border-radius: 5px;

    &:hover {
        background-color: #196e48;
    }
`