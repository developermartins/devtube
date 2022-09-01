import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchVideos } from '../services/fetchVideos';

import styled from 'styled-components';

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
    <Container>Search</Container>
  );
};

const Container = styled.section`
    display: flex;
    flex-direction: wrap;
    gap: 10px;
`;

export default Search;
