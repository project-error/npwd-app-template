import React, { useEffect, useState } from 'react';
import { NUIContext, NuiContext, NuiProvider, useNuiEvent } from 'react-fivem-hooks';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { IPhoneSettings } from '@project-error/npwd-types';
import { i18n } from 'i18next';
import { Theme, StyledEngineProvider, Paper, Typography } from '@mui/material';
import ThemeSwitchProvider from './ThemeSwitchProvider';

const Container = styled(Paper)`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const LinkItem = styled(Link)`
  font-family: sans-serif;
  text-decoration: none;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

const App = (props: AppProps) => {
  const history = useHistory();
  const [count, setCount] = useState(0);
  const { data } = useNuiEvent<string>({ event: 'RANDOM' });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitchProvider mode={props.theme.palette.mode}>
        <Container>
          <button onClick={() => history.push('/')} style={{ alignSelf: 'flex-start' }}>
            Back
          </button>
          <h1>App title</h1>

          <h2>Data from client: {data}</h2>

          <p>Language is: {props.settings.language.label}</p>

          <div>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button>{count}</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
          </div>

          <Footer>
            <LinkItem to="/">
              <Typography>Home</Typography>
            </LinkItem>
          </Footer>
        </Container>
      </ThemeSwitchProvider>
    </StyledEngineProvider>
  );
};

const WithProviders: React.FC<AppProps> = (props) => (
  <NuiProvider>
    <App {...props} />
  </NuiProvider>
);

export default WithProviders;
