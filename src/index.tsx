import React from 'react';
import ReactDOM from 'react-dom';
import '../npwd.config';

import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import App from './App';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 667px;
`;

// Default settings will come from package. This is for development purposes.
const settings = {
  isDarkMode: false,
  language: 'sv' as const,
};

const Root = () => (
  <BrowserRouter>
    <AppContainer>
      <App settings={settings} />
    </AppContainer>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
