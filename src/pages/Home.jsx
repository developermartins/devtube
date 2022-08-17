import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Home = () => {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 60px;
`;

export default Home;
