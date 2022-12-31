import React from "react";
import styled from "styled-components";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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
