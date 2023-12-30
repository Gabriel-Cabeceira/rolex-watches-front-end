import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%
    padding: 1em;
`

export const HomeTitle = styled.div`
    width: 50%;
    margin: auto;
    padding: 5em;
    text-align: center;

    & h1 {
        font-size: 3em;
    }
`

export const Watches = styled.ul`
    width: 95%;
    margin: auto;
    padding: 5px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;

    @media (min-width: 768px){
        grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    }
`;