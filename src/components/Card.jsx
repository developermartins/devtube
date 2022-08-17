import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: 'none' }}>
        <Container>
            <Image src="https://i.ytimg.com/vi/6hdMspVzslY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbkbl0oQ3eNRQt32vqHSc8156DbQ" />
            <Details>
                <ChannelImage src="https://yt3.ggpht.com/ytc/AMLnZu-oDvWEJ-WfN9bgxQB2YAlnjC2uqN_c7JQZvX9Ikfg=s88-c-k-c0x00ffffff-no-rj" />
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>MartsDev</ChannelName>
                    <Info>31.139 visualizações • 30 de jun. de 2022</Info>
                </Texts>
            </Details>
        </Container>
    </Link>
  );
};

const Container = styled.section`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`;


const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
    border-radius: 5px;
`;

const Details = styled.section`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
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
