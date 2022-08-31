import React, { useEffect, useState } from 'react';
import { fetchVideoByTags } from '../services/fetchVideos';

import styled from 'styled-components';
import Card from './Card';

const Recomendation = ({ tags }) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchRecomendedVideos = async () => {
            const res = await fetchVideoByTags(tags);

            setVideos(res);
        };

        fetchRecomendedVideos();
    }, []);

  return (
    <Container>
        { 
            videos.map((video) => {
                <Card key={video._id} video={video} />
            })
        }
    </Container>
  );
};

const Container = styled.section`
    flex: 2;
`;

export default Recomendation;
