import React from 'react';
import styled from 'styled-components';

const Video = () => {
  return (
    <Container>
        <Content>Content</Content>
        <Recomendation>recomendation</Recomendation>
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    gap: 24px;
`;

const Content = styled.section`
    flex: 5;
`;

const Recomendation = styled.section`
    flex: 2;
`;

export default Video;
