import React from 'react';
import styled from 'styled-components';
import {primary, secondary,inactive} from '../styles/colors';

const Header = styled.h1.attrs(({theme})=>({
  background: theme=='primary'?primary:
              theme=='secondary'?secondary:
              theme=='inactive'?'gray':''}))`
    font-size: 1.5em;
    background-color: ${props=>props.background};
`;

export default Header;