import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchVideoComments } from '../services/userFeedback';
import VideoComment from './VideoComment';

const Comments = ({ videoId }) => {

  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetchVideoComments(videoId);
        setComments(res);
      } catch (error) {};
    };
    fetchComments()
  }, [videoId]);
  

  return (
    <Container>
        <NewComment>
            <Avatar src={ currentUser.img } />
            <Input placeholder='Add a comment...' />
        </NewComment>
        {
          comments.map((comment) => (
            <VideoComment key={comment._id} comment={ comment } />
          ))
        }
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
