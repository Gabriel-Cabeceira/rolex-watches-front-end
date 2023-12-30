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

export const ContainerForm = styled.div`

    width: 55%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
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