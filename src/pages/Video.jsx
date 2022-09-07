import React, { useEffect, useState } from 'react';

import { dislikeFunction, likeFunction } from '../services/userFeedback';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchVideoById } from '../services/fetchVideos';
import { fetchChannelInfo } from '../services/fetchChannelInfo';
import { dislike, fetchSuccess, like } from '../redux/videoSlice';
import { subscribe, unsubscribe } from '../services/subscriptions';
import { subscription } from '../redux/userSlice';
import { format } from 'timeago.js';

import styled from 'styled-components';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Recomendation from '../components/Recomendation';

const Video = () => {

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await fetchVideoById(path);
        console.log(videoRes);
        const channelRes = await fetchChannelInfo(videoRes.userId);
        setChannel(channelRes);
        dispatch(fetchSuccess(videoRes));
      } catch (error) {};
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {

    if (currentUser) {
      await likeFunction(currentVideo._id);
      dispatch(like(currentUser?.id));
    } else {
      navigate("/signin");
    };
  };

  const handleDislike = async () => {

    if (currentUser) {
      await dislikeFunction(currentVideo._id);
      dispatch(dislike(currentUser?.id));
    } else {
      navigate("/signin");
    };

  };

  const handleSubscription = async () => {

    if (currentUser) {
      currentUser?.subscribedUsers.includes(channel._id)
      ? await unsubscribe(channel._id)
      : await subscribe(channel._id);
      dispatch(subscription(channel._id));
    } else {
      navigate("/signin");
    };

  };

  return (
    <Container>
        <Content>
          <VideoWrapper>
            <VideoFrame src={ currentVideo.videoUrl } controls />
          </VideoWrapper>
          <Title>{ currentVideo.title }</Title>
          <Details>
            <Info>{ currentVideo.views } views • { format(currentVideo.createdAt) }</Info>
            <Buttons>
              <Button onClick={ handleLike }>
                { 
                currentVideo.likes?.includes(currentUser?.id) ? ( 
                    <ThumbUpAltIcon />
                  ) : ( 
                    <ThumbUpOffAltOutlinedIcon /> 
                  ) }{ " " }
                { currentVideo.likes?.length }
              </Button>
              <Button onClick={ handleDislike }>
              { 
                currentVideo.dislikes?.includes(currentUser?.id) ? ( 
                    <ThumbDownAltIcon />
                  ) : ( 
                    <ThumbDownOffAltIcon />
                ) }{ " " }
                 Dislike
              </Button>
              <Button>
                <ReplyOutlinedIcon /> Share
              </Button>
              <Button>
                <AddTaskOutlinedIcon /> Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <ChannelImage src={ channel.img }/>
              <ChannelDetail>
                <ChannelName>{ channel.username }</ChannelName>
                <ChannelCounter>{ channel.subscribers } Subscribers</ChannelCounter>
                <Description>
                  { currentVideo.description }
                </Description>
              </ChannelDetail>
            </ChannelInfo>
            {
              currentUser?.id !== currentVideo.userId && 
              <SubscribeButon onClick={ handleSubscription }>{ 
                currentUser?.subscribedUsers?.includes(channel._id) ? "SUBSCRIBED" : "SUBSCRIBE" 
              }</SubscribeButon>
            }
          </Channel>
          <Hr />
          <Comments videoId={ currentVideo._id } />
        </Content>
        <Recomendation tags={ currentVideo.tags }/>
    </Container>
  );
};

const Container = styled.section`
    padding: 50px;
    display: flex;
    gap: 24px;
`;

const Content = styled.section`
    flex: 5;
`;

const VideoWrapper = styled.section`
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color:  ${({theme}) => theme.text};
`;

const Details = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color:  ${({theme}) => theme.textSoft};
`;

const Buttons = styled.section`
  display: flex;
  gap: 20px;
  color:  ${({theme}) => theme.text};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  color:  ${({theme}) => theme.text};
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Channel = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.section`
  display: flex;
  gap: 20px;
`;

const SubscribeButon = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
`;

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color:  ${({theme}) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color:  ${({theme}) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const VideoFrame = styled.video`
  border-radius: 20px;
  max-height: 720px;
  width: 100%;
  object-fit: cover;
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

export default Video;
