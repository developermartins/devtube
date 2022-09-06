import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { postVideos } from '../services/postVideos';
import { useNavigate } from 'react-router-dom';

import app from '../firebase';
import styled from 'styled-components';

const UploadPopUp = ({ setOpen }) => {

    const navigate = useNavigate();

  return (
    <Container>
        <Wrapper>
            <Close >X</Close>
           
        </Wrapper> 
    </Container>
  );
};

const Container = styled.section`
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: right;
`;
const Wrapper = styled.section`
    width: 200px;
    height: 300px;
    background-color: ${({ theme }) => theme.bgLighter};
    border-radius: 10px;
    color: ${({ theme }) => theme.text};
    margin-top: 80px;
    margin-right: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
`;
const Close = styled.button`
    position: absolute;
    background: none;
    border: none;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;


export default UploadPopUp;
