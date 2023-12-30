import styled from "styled-components";

export const Form = styled.form`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextInput = styled.input`
    width: 90%;
    padding: 0 1em;
    height: 2em;
    border: none;
    margin: 1em 0;
    background-color: #c2c2c2;
`

export const Label = styled.label`
    width: 90%;
    height: 6em;
    padding: 1em;
    cursor: pointer;
    margin: 1em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #c2c2c2;
`

export const FileInput = styled.input`
    display: none;
`

export const Button = styled.button`
    width: 45%;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    background-color: #0c442a;

    &:hover{
        background-color: #186c46;
    }
`

export const Divisor = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`