import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Home = () => {

  const [videos, setVideos] = useState([]);

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
