import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Profile from './pages/Profile';

const theme = {
  colors: {
    red: 'red',
    black: 'black',
    greyChelou: '#74798C',
    greyClair: 'rgb(252,234,234)',
  },
};

const GlobalStyle = createGlobalStyle`
  html {
      font-size: 10px;
      font-family: 'Roboto', sans-serif;
      @media (max-width: 1100px) {
            font-size: 8px;
      }    
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #root{
    height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
