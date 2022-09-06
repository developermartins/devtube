import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import "@splidejs/splide/dist/css/splide.min.css";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchChannelVideos } from '../services/fetchChannelVideos';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Channel = () => {

  const { currentUser } = useSelector(state => state.user);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetchChannelVideos(currentUser.id);
      setVideos(res);
    };
    fetchVideos();
  }, []);

  return (
    <Container>
      <ChannelHeader>
        <Avatar src={ currentUser.img } />
        <ChannelInfo>
          <ChannelName>{ currentUser.username }</ChannelName>
          <ChanelSubs>{ currentUser.subscribers } subscribers</ChanelSubs>
        </ChannelInfo>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <UpdateAccount>
              Update account
          </UpdateAccount>
        </Link>
      </ChannelHeader>
      <MainSectionTitle>
        Your videos
      </MainSectionTitle>
      <Hr />
      <SlideContainer>
          <Splide options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '4px',
              width: '100%',
          }}>
              {videos.map((video) => {
                return (
                  <SplideSlide key={video._id}>
                    <Card key={ video._id } video={ video } />
                  </SplideSlide>
                );
              })}
          </Splide>
      </SlideContainer>
    </Container>
  );
};


const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

const ChannelHeader = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.channelHeaderBg};
  padding: 50px 150px 10px;
`;

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Avatar = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #999;
    margin-right: 30px;
`;

const ChannelName = styled.h1`
    font-size: 1.5em;
    color: ${({theme}) => theme.textSoft};
`;

const ChanelSubs = styled.p`
    font-size: 0.9em;
    color: ${({theme}) => theme.textSoft};
`;

const UpdateAccount = styled.button`
    margin-right: 30px;
    padding: 15px;
    width: 150px;
    border-radius: 20px;
    border-color:  ${({theme}) => theme.text};
    background: none;
    cursor: pointer;
    color:  ${({theme}) => theme.textSoft};
`;

const MainSectionTitle = styled.h1`
  font-size: 1.4em;
  padding: 50px 150px 10px;
  color: ${({theme}) => theme.text};
`;

const Hr = styled.hr`
    margin: 15px 80px;
    width: 90%;
    border: 1px solid ${({theme}) => theme.soft};
`;

const SlideContainer = styled.section`
  margin-left: 35px;
  position: absolute;
  padding: 10px 40px;
  width: 85%;
`;

export default Channel;
