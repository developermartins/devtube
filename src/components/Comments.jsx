import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchVideoComments } from '../services/userFeedback';
import { postComment } from '../services/postComment';

import styled from 'styled-components';
import VideoComment from './VideoComment';

const Comments = ({ videoId }) => {

  const { currentUser } = useSelector((state) => state.user);

  const [comment, setComment] = useState("");
  const [open, setOpen] = useState();
  const [sentComment, setSentComment] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetchVideoComments(videoId);
        setComments(res);
      } catch (error) {};
    };
    fetchComments()
  }, [videoId, sentComment]);
  
  const handleChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setComment("");
    setOpen(false);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    await postComment({ userComment: comment, videoId: videoId });
    setSentComment(true);
    setComment("");
    setOpen(false);
  };

  return (
    <Container>
        <NewComment>
            <Avatar src={ currentUser?.img } />
            <Input
              placeholder='Add a comment...'
              value={ comment }
              onClick={ () => setOpen(true) }
              onChange={ handleChange }
            />
            { open &&
               <>
                  <CancelCommentButon 
                    onClick={ handleCancel }
                  >
                    cancel
                  </CancelCommentButon>
                  <CommentButon 
                    onClick={ handleComment }
                  >
                    comment
                  </CommentButon>
               </>
            }
        </NewComment>
        {
          comments?.map((comment) => (
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

const CommentButon = styled.button`
  background-color: #007dd6;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
`;

const CancelCommentButon = styled.button`
  background-color: transparent;
  font-weight: 500;
  color: ${({theme}) => theme.text};
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
`;

export default Comments;
