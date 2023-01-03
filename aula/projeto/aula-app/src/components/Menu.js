import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5px auto;
    padding: 5px;
    flex-direction: row;  
    gap:10px ;
    background-color: brown;
    color: white;
    border-radius: 10px;
    width: 95%;
    height: 50px;
`;

const Menu = () => {
    return(
        <MenuBar>
            <Link to="/">Home</Link>
            <Link to="/country">Countries</Link>
        </MenuBar>
    )

}

export default Menu;