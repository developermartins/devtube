import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { darkTheme, lightTheme } from './utils/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Video from './pages/Video';
import Login from './pages/Login';
import usePersistedState from './utils/usePersistedState';
import Search from './pages/Search';

const App = () => {

  const [theme, setTheme] = usePersistedState('theme', lightTheme);

  const toggleTheme = () => {

    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={ theme }>
      <Container>
        <BrowserRouter>
          <Menu toggleTheme={ toggleTheme } />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={ <Home type="random" /> } />
                  <Route path="trends" element={ <Home type="trend" /> } />
                  <Route path="subscriptions" element={ <Home type="sub" /> } />
                  <Route path="search" element={ <Search /> } />
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
