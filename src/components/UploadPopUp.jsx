import React from 'react';
import styled from 'styled-components';

const UploadPopUp = ({ setOpen }) => {
  return (
    <Container>
        <Wrapper>
            <Close onClick={ () => setOpen(false) }>X</Close>
            <Title>Upload a New Video</Title>
            <Label>Video:</Label>
            <Input type="file" accept="video/*" />
            <Label>Title:</Label>
            <Input type="text" placeholder='Video Title' />
            <Label>Description:</Label>
            <Description placeholder="Add a description" rows={ 8 } />
            <Label>Tags:</Label>
            <Input type="text" placeholder='Separate the tags with commas.' />
            <Label>Video thumb:</Label>
            <Input type="file" accept="image/*" />
            <UploadButton>Upload</UploadButton>
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
    height: 700px;
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
const Title = styled.h1`
    text-align: center;
    font-size: 1.6rem;
`;

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
`;

const Description = styled.textarea`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
`;

const UploadButton = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
`;

const Label = styled.label`
    font-size: 1rem;
`;


export default UploadPopUp;
