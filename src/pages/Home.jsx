import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { fetchVideos } from '../services/fetchVideos';

const Home = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const callFetchVideos = async () => {
      const ramdomVideos = await fetchVideos();

      setVideos(ramdomVideos);
    };
    callFetchVideos();
  }, []);

  return (
    <Container>
        { videos.map(() => (
          <Card />
        )) }
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
