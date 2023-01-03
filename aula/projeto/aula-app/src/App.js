import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Photo from './components/Photo';
import foto from './assets/allan-ferreira.jpeg';
import { useMediaQuery } from 'react-responsive';
import Countries from './components/Countries';
import Menu from './components/Menu';


function App() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 720 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });
  return (
    <div className="App">
      <Menu />
      <Header
        theme="inactive"
      >Ola
      <Grid isMobile={isTabletOrMobile}
            isPortrait={isPortrait}>
        <Photo src={foto} />
        <Photo src={foto} />
        <Photo src={foto} />
        <Photo src={foto} />
        <Photo src={foto} />
        <Photo src={foto} />
      </Grid>
      
      <Countries/>
      
      </Header>
    </div>
  );
}

export default App;
