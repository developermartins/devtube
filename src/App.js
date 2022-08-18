import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { darkTheme, lightTheme } from './utils/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Video from './pages/Video';
import Login from './pages/Login';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <Container>
        <BrowserRouter>
          <Menu darkMode={ darkMode } setDarkMode={ setDarkMode } />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={ <Home /> } />
                  <Route path='signin' element={ <Login /> } />
                  <Route path='video'>
                    <Route path=':id' element={ <Video /> } />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
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
  padding: 22px, 96px;
`;

export default App;
