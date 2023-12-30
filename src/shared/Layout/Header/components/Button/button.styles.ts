import styled from "styled-components";

interface MenuToggleProps {
    rotate?: string;
    translateY?: string;
    boxShadow?: string;
    onClick?: () => void;
  }

export const MenuToggle = styled.div<MenuToggleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 25px;
    margin-left: 2em; 
    height: 2em;




    &::before {
        content: '';
        position: absolute;
        width: 2em;
        height: 2px;
        background: #FFFFFF;
        transform: translateY(${(props) => props.translateY ? `${props.translateY}` : '8px'}) rotate(${(props) => (props.rotate ? `${props.rotate}` : '0deg')});
        transition: 0.1s;
    }

    &::after {
        content: '';
        position: absolute;
        width: 2em;
        height: 2px;
        background: #FFFFFF;
        transform: translateY(${(props) => props.translateY ? `-${props.translateY}` : '-8px'}) rotate(${(props) => (props.rotate ? `-${props.rotate}` : '0deg')});
        box-shadow: ${(props) => props.boxShadow};
        transition: 0.1s;
    }
`