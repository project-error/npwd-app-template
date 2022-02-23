import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 1.5rem;

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: #212121;
    color: #fafafa;
  `}
`;

const LinkItem = styled(Link)<{ isDarkMode: boolean }>`
  font-family: sans-serif;
  text-decoration: none;
  color: ${({ isDarkMode }) => (isDarkMode ? '#fafafa' : '#222')};
`;

const Footer = styled.footer`
  margin-top: auto;
`;

// These will come from some package.
interface Settings {
  isDarkMode: boolean;
  language: 'sv' | 'en';
}
interface PhoneProps {
  settings: Settings;
}

const App = (props: PhoneProps) => {
  const [count, setCount] = useState(0);
  return (
    <Container isDarkMode={props.settings.isDarkMode}>
      <LinkItem to="/" isDarkMode={props.settings.isDarkMode}>
        Close
      </LinkItem>

      <h1>App title</h1>

      <p>Language is: {props.settings.language}</p>

      <div>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button>{count}</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
      </div>

      <Footer>
        <LinkItem to="/home" isDarkMode={props.settings.isDarkMode}>
          Home
        </LinkItem>
      </Footer>
    </Container>
  );
};

export default App;
