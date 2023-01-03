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

const Photo = ({src}) => {
    return(
        <center>                                  
            <PhotoSrc src={src}></PhotoSrc>
        </center>        
    )
}


export default Photo;