import React from "react";
import styled from "styled-components";

const Grid = styled.div.attrs(({isMobile,isPortrait}) =>({
    isTabletOrMobile: isMobile,
    isPortrait: isPortrait
}))`
    display: grid;    
    grid-template-columns: repeat(${props=>props.isTabletOrMobile?2:3}, 1fr);
    gap: 10px;
    padding: 20px;     
    background-color: ${props => props.isPortrait ? 'red' : 'blue'};
`;

export default Grid;