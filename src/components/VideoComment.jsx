import React, { useEffect, useState } from 'react';
import { fetchChannelInfo } from '../services/fetchChannelInfo';
import { format } from 'timeago.js';

import styled from 'styled-components';
import UserDefaultImg from '../images/user.png';

const VideoComment = ({ comment }) => {

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelRes = await fetchChannelInfo(comment.userId);
        setChannel(channelRes);
      } catch (error) {};
    };
    fetchData();
  }, [comment.userId]);

  return (
    <Container>
        <Avatar src={ channel.img || UserDefaultImg } />
        <Details>
            <Name>
                { channel.username } <Date>{ format(comment.createdAt) }</Date>
            </Name>
            <Text>
              { comment.userComment }
            </Text>
        </Details>
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color:  ${({theme}) => theme.text};
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color:  ${({theme}) => theme.text};
`;

const Date = styled.span`
    font-size: 14px;
    font-weight: 400;
    color:  ${({theme}) => theme.textSoft};
    margin-left: 5px;
`;

const Text = styled.span`
    font-size: 14px;
`;

export default VideoComment;
