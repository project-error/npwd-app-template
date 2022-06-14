import React, { useEffect, useState } from 'react';
import { useNuiEvent } from 'react-fivem-hooks';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSubscription } from "./hooks/useCustomEvents";
import { useThemeMode } from "./atoms/app-atoms";

const Container = styled.div<{ isDarkMode: boolean }>`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  max-height: 100%;
  background-color: #fafafa;
  color: #212121;

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
	theme: any;
	language: 'sv' | 'en';
}

interface PhoneProps {
	settings: Settings;
}

const App = (props: PhoneProps) => {
	const history = useHistory();
	const [count, setCount] = useState(0);
	const [value, setValue] = useState('');
	const [isDarkMode, setIsDarkMode] = useThemeMode();
	
	
	const { data } = useNuiEvent<string>({ event: 'RANDOM' });
	
	useSubscription('themeChanged', (theme: any) => {
		const isDark = theme.detail.value === 'taso-dark'
		
		setIsDarkMode(isDark);
	})
	
	
	return (
		<Container isDarkMode={isDarkMode}>
			<button onClick={() => history.push('/')} style={{ alignSelf: 'flex-start' }}>
				Back
			</button>
			<h1>App title</h1>
			
			<h2>Data from client: {data}</h2>
			
			<p>Language is: {props.settings.language}</p>
			
			<h1>{value}</h1>
			
			<div>
				<button onClick={() => setCount(prev => prev + 1)}>+</button>
				<button>{count}</button>
				<button onClick={() => setCount(prev => prev - 1)}>-</button>
			</div>
			
			<Footer>
				<LinkItem to="/" isDarkMode={isDarkMode}>
					Home
				</LinkItem>
			</Footer>
		</Container>
	);
};

export default App;
