import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

import { darkTheme, lightTheme } from './utils/theme';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <Container>
        <Menu darkMode={ darkMode } setDarkMode={ setDarkMode } />
        <Main>
          <Navbar />
          <Wrapper>
            video cards
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.section`
  display: flex;
`;

const Main = styled.section`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`;

const Wrapper = styled.section`

`;

export default App;
