import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 20em;
    padding: 1em;
    margin: 10em auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0b4028;
`

export const RolexLogo = styled.img`
    width: 3em;
`

export const FormLogin = styled.form`
    width: 90%;
`

export const Input = styled.input`
    border: solid 1px #FFF;
    width: 95%;
    margin: 1em auto;
    height: 2em;
`

export const AlertMessage = styled.p`
    text-align: center;
    margin-bottom: -5px;
    color: red;
`

export const PositiveMessage = styled.p`
    text-align: center;
    margin-bottom: -5px;
    color: #20ff03;
`

export const Divisor = styled.div`
    width: 98%;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 48%;
    border: none;
    height: 2em;
    margin: 1em 0;
    background-color: #196f48aa;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #196f48;
    }
`