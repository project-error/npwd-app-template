import React from 'react';
import ReactDOM from 'react-dom';
import '../npwd.config';

import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import App from './App';
import image from './bg.png';
import { NuiProvider } from 'react-fivem-hooks';

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 1000px;
`;
const Background = styled.div<{ src: string }>`
  background: url(${({ src }) => src});
  position: absolute;
  z-index: 1;
  width: 500px;
  height: 1000px;
  pointer-events: none;
`;

const AppContainer = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 100px;
  left: 50px;
  right: 50px;
  top: 100px;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

// Default settings will come from package. This is for development purposes.
const settings = {
  isDarkMode: false,
  language: 'sv' as const,
};

const Root = () => (
  <BrowserRouter>
    <NuiProvider>
      <Container>
        <Background src={image} />
        <AppContainer>
          <App settings={settings} />
        </AppContainer>
      </Container>
    </NuiProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
