import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Div100vh from 'react-div-100vh';
import StoryProvider from 'components/StoryProvider';
import Test from 'story/Test';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      intelligence: {
        main: '#0277bd',
      },
      interpersonal: {
        main: '#aa00ff',
      },
      locomotion: {
        main: '#f9a825',
      },
      physique: {
        main: '#c62828',
      },
      primary: {
        main: '#c6ff00',
      },
      mode: 'dark',
    },
  });

  return (
    <Div100vh>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <StoryProvider>
          <Test />
          {/* <BottomNavigation
          sx={{ width: 500 }}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}>
          <BottomNavigationAction
            label="Historia"
            value="recents"
            icon={<AutoStoriesIcon />}
          />
          <BottomNavigationAction
            label="Atributos"
            value="folder"
            icon={<AccountCircleIcon />}
          />
          <BottomNavigationAction
            label="Inventario"
            value="favorites"
            icon={<ListAltIcon />}
          />
          <BottomNavigationAction
            label="Mapa"
            value="nearby"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation> */}
        </StoryProvider>
      </ThemeProvider>
    </Div100vh>
  );
};

export default App;
