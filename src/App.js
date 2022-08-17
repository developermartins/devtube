import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;

const Main = styled.section`
  flex: 7;
`;

const Wrapper = styled.section`

`;

export default App;
