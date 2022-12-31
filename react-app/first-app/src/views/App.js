import React from "react";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Button from "../components/Button";
import Photo from "../components/Photo";

import photo1 from "../assets/allan-ferreira.jpeg";
import ThemeButton from "../components/ThemeButton";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';

const App = () =>{
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })    
    const isTabletOrMobile = useMediaQuery({ maxWidth: 720 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })

    return(
        <div>
            <h1>ok:{"isDesktopOrLaptop"+isDesktopOrLaptop}</h1>
            <h1>ok:{"isTabletOrMobile"+isTabletOrMobile}</h1>
            <h1>ok:{"isPortrait"+isPortrait}</h1>
            <Header>Menu</Header>
            <Grid isMobile={isTabletOrMobile} 
                isPortrait={isPortrait}>
                
                <Button>ok</Button>
                <button>ok</button>
                <button>ok</button>
                <button>ok</button>
                <button>ok</button>  
                <Photo src={photo1}></Photo>                
                <Photo src={photo1}></Photo>
                <Photo src={photo1}></Photo>
                <Photo src={photo1}></Photo>
                <Photo src={photo1}></Photo>
                <ThemeButton color="secondary">outro</ThemeButton>
            </Grid>
        </div>
    )
};

export default App;