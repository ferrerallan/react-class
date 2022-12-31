import React from "react";
import styled from "styled-components";

const PhotoSrc = styled.img`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    :hover {
        transform: scale(0.9);
        transform: rotate(360deg); 
        transition: 0.4s;        
    };
    cursor: pointer;    
`;

const handleName = (src) => {
    let result = ""+src;
    return result.split("/")[3];
}

const FileName = styled.p`
    font-size: 10px;
    background-color: aqua;
`;

const Photo = ({src}) => {
    return(
        <center>            
            <FileName>{handleName(src)}</FileName>            
            <PhotoSrc src={src}></PhotoSrc>
        </center>        
    )
}


export default Photo;