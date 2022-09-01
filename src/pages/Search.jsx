import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchVideos } from '../services/fetchVideos';

import styled from 'styled-components';
import Card from '../components/Card';

const Search = () => {

    const [videos, setVideos] = useState([]);
    const query = useLocation().search;

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await searchVideos(query);
            setVideos(res);
        };

        fetchVideos();
    }, [query]);

    console.log(videos)

  return (
    <Container>
        { videos.map((video) => (
            <Card key={ video._id } video={ video } />
        )) }
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 60px;
    gap: 10px;
`;

export default Search;
