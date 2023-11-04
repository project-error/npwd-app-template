import React, { useState } from 'react';

import { i18n } from 'i18next';
import {
  Theme,
  Paper,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  StyledEngineProvider
} from '@mui/material';
import Header, { HEADER_HEIGHT } from './components/Header';
import styled from '@emotion/styled';
import {  Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { path } from '../npwd.config';
import { HomeRounded, InfoRounded } from '@mui/icons-material';
import ThemeSwitchProvider from './ThemeSwitchProvider';

const Container = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const LinkItem = styled(Link)`
  font-family: sans-serif;
  text-decoration: none;
`;


const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.5rem;
  max-height: calc(100% - 3.5rem - ${HEADER_HEIGHT});
  overflow: auto;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: any;
}

function App(props: AppProps) {
  const history = useHistory();
  const { pathname } = useLocation();

  const [page, setPage] = useState(pathname);

  const handleChange = (_e: any, newPage: any) => {
    setPage(newPage);
  };

  console.log("MOCK APP PROPS", props)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitchProvider mode='dark'>
      <Container square elevation={0}>
          <Header>Template app</Header>
          <Content>
            <div>
              <h1>Template app - Heading 1</h1>

              <h3>You are at {pathname}</h3>

              <button onClick={history.goBack}>
                Back to home
              </button>
            </div>


            <Footer>
              <LinkItem to="/">
                <Typography>Home</Typography>
              </LinkItem>
            </Footer>
          </Content>

          <BottomNavigation value={page} onChange={handleChange} showLabels>
          <BottomNavigationAction
              label={'Home'}
              value="/home"
              icon={<HomeRounded />}
              component={NavLink}
              to={path}
            />
            <BottomNavigationAction
              label={'About'}
              value="/about"
              color="secondary"
              icon={<InfoRounded />}
              component={NavLink}
              to={path}
            />
          </BottomNavigation>

        </Container>
      </ThemeSwitchProvider>
  
      </StyledEngineProvider>
  );
};

export default function WithProviders(props: AppProps) {
  return (
    <App {...props} />
  )
}
