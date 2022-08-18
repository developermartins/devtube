import React from 'react';
import styled from 'styled-components';

const VideoComment = () => {
  return (
    <Container>
        <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu-oDvWEJ-WfN9bgxQB2YAlnjC2uqN_c7JQZvX9Ikfg=s88-c-k-c0x00ffffff-no-rj' />
        <Details>
            <Name>
                John Doe <Date>Há 1 mês</Date> 
            </Name>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum massa sit amet porttitor aliquet. 
                Sed iaculis ac dolor hendrerit dignissim. Duis a auctor quam. Sed at pretium velit.
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
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
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
