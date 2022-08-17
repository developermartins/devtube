import React from 'react';
import styled from 'styled-components';

const Menu = () => {
  return (
    <Container>
        <Wrapper>
            items
        </Wrapper>
    </Container>
  );
};

const Container = styled.section`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: white;
`;

const Wrapper = styled.section`
    padding: 18px 26px;
`;

export default Menu;
