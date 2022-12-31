import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    border-radius: 5px;    
    height: 50px;       
    cursor: pointer; 
    :hover {
        transform: scale(0.9);     
    };
    align-self: center;
`;

export default Button;