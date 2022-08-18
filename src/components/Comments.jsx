import React from 'react';
import styled from 'styled-components';
import VideoComment from './VideoComment';

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu-oDvWEJ-WfN9bgxQB2YAlnjC2uqN_c7JQZvX9Ikfg=s88-c-k-c0x00ffffff-no-rj' />
            <Input placeholder='Add a comment...' />
        </NewComment>
        <VideoComment />
        <VideoComment />
        <VideoComment />
        <VideoComment />
    </Container>
  );
};

const Container = styled.section`

`;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color: transparent;
  outline: none;
  width: 100%;
  color: ${({theme}) => theme.text};
  padding: 5px;
`;

export default Comments;
