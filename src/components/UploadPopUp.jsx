import React from 'react';
import styled from 'styled-components';

const UploadPopUp = ({ setOpen }) => {
  return (
    <Container>
        <Wrapper>
            <Close onClick={ () => setOpen(false) }>X</Close>
            <Title>Upload a New Video</Title>
        </Wrapper>
    </Container>
  );
};

const Container = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000e7;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.section`
    width: 600px;
    height: 600px;
    background-color: ${({ theme }) => theme.bgLighter};
    border-radius: 10px;
    color: ${({ theme }) => theme.text};
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
const Title = styled.h1``;

export default UploadPopUp;
