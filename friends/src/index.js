import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App';

const theme = 
 {

  // primaryColor: rgb(210, 196, 170),
  secondaryColor: "#7f5539",
  accentColor: "#3C6E71",
  black: "#353535",
  white: "FFFFFF",
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </ThemeProvider>,
  document.getElementById('root')
);

