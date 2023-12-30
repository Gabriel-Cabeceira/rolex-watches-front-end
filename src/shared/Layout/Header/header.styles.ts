import styled from "styled-components";



export const StyledHeader = styled.header`
    padding: 1.5em 0;
    background-image: linear-gradient(to right, #0b3f27, #196f48);
    display: flex;
    color: #FFFFFF;
    transition: height 0.4s ease;
`

export const NavListItens = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-right: 2em;

    @media (max-width: 768px){
        width: 7em;
    }
`

export const ListItem = styled.li`
    padding: 0 0.6em;
    display: flex;
    align-items: center;
    cursor: pointer;

    & span {
        margin-left: 10px;
    }

    @media (max-width: 768px){
     & span {
        display: none;
     }   
    }
`

export const RolexLogo = styled.img`
    margin-left: 205px;
    width: 2em;


    @media (max-width: 768px){
        margin-left: 65px;      
    }
`

export const ContainerNav = styled.div`
    position: absolute;
    top: 1em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContentExpandedNav = styled.div`
    width: 100%;
    margin: 5em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
`

export const OptionsHeader = styled.div`

    width: 25%;
    padding: 10px;

    & p {
        font-weight: bold;
        cursor: pointer;

    }

    & p:hover {
        color: #2bad7d;
    }
`

export const ContainerCarrossel = styled.div`
    width: 65%;
    padding: 10px;
`

