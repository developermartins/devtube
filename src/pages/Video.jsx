import React from 'react';
import styled from 'styled-components';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';

const Video = () => {
  return (
    <Container>
        <Content>
          <VideoWrapper>
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%" 
              height="720" 
              src="https://www.youtube.com/embed/6hdMspVzslY" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </VideoWrapper>
          <Title>Test Video</Title>
          <Details>
            <Info>31.531 visualizações • 30 de jun. de 2022</Info>
            <Buttons>
              <Button>
                <ThumbUpOffAltOutlinedIcon /> 123
              </Button>
              <Button>
                <ThumbDownOffAltIcon /> Dislike
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
              <ChannelImage src='https://yt3.ggpht.com/ytc/AMLnZu-oDvWEJ-WfN9bgxQB2YAlnjC2uqN_c7JQZvX9Ikfg=s88-c-k-c0x00ffffff-no-rj'/>
              <ChannelDetail>
                <ChannelName>DevMarts</ChannelName>
                <ChannelCounter>200k Subscribers</ChannelCounter>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum massa sit amet porttitor aliquet. 
                  Sed iaculis ac dolor hendrerit dignissim. Duis a auctor quam. Sed at pretium velit.
                </Description>
              </ChannelDetail>
            </ChannelInfo>
            <SubscribeButon>Subscribe</SubscribeButon>
          </Channel>
          <Hr />
          <Comments />
        </Content>
        <Recomendation>recomendation</Recomendation>
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

const Recomendation = styled.section`
    flex: 2;
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

export default Video;
