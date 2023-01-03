import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Menu from "../../components/Menu";

const Principal = () => {
    return (
        <div>            
            <Menu/>            
            <h1>Principal</h1>
        </div>
    )
}

export default Principal;