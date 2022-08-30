import React, { useEffect, useState } from 'react';

import { fetchChannelInfo } from '../services/fetchChannelInfo';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

import styled from 'styled-components';

const Card = ({ type, video }) => {

  let infoText = `${video.views} views • ${format(video.createdAt)}`;

  const [channelInfo, setChannelInfo] = useState({});

  useEffect(() => {
    const callFetchChannelInfo = async () => {
      const channel = await fetchChannelInfo(video.userId);

      setChannelInfo(channel);
    };
    callFetchChannelInfo();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: 'none' }}>
        <Container type={ type }>
            <Image type={ type } src={video.imgUrl} />
            <Details type={ type }>
                <ChannelImage type={ type } src={ channelInfo?.img } />
                <Texts>
                    <Title>{ video.title }</Title>
                    <ChannelName>{ channelInfo.username }</ChannelName>
                    <Info>
                        {infoText}
                    </Info>
                </Texts>
            </Details>
        </Container>
    </Link>
  );
};

const Container = styled.section`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`;


const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "120px" : "202px"};
    background-color: #999;
    border-radius: 5px;
    flex: 1;
`;

const Details = styled.section`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px"};
    gap: 12px;
    flex: 1;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.section``;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`;

export default Card;
