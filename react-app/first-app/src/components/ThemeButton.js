import React from "react";
import styled from "styled-components";

const ThemeButton = styled.button.attrs(({color}) =>({    
    back: color==='primary' ? '#22ff22' : 
        color==='secondary'? '#2222ff' : 'gray'
}))`
    border: none;    
    border-radius: 5px;    
    height: 50px;           
    :hover {
        transform: scale(0.9);     
    }; 
    background-color: ${props => props.back};
`;

export default ThemeButton;