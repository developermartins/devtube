import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchVideoById } from '../services/fetchVideos';

import styled from 'styled-components';
import Card from '../components/Card';
import { useSelector } from 'react-redux';


const UpdateVideo = () => {

    const path = useLocation().pathname.split("/")[2];

    const [video, setVideo] = useState({});
    const [img, setImg] = useState(undefined);
    const [imgPercentage, setImgPercentage] = useState(0);

    // useEffect(() => {

    //     const fetchVideo = async () => {
    //         const currentVideo = await fetchVideoById(path.toString());
    //         setVideo(currentVideo); 
    //     };
    //     fetchVideo();
    // }, []);

    // console.log(video)

    const { currentVideo } = useSelector((state) => state.video);

    console.log(currentVideo)

  return (
    <Container>
        <Title>Update your video</Title>
        <Hr />
        <Section>
            <Card type="sm" video={ currentVideo } />
        </Section>
        <FormSection>
            <Label>Title:</Label>
            <Input type="text" placeholder='Video Title' name='title' />
            <Label>Description:</Label>
            <Description placeholder="Add a description" name='description' rows={ 8 }   />
            <Label>Tags:</Label>
            <Input type="text" placeholder='Separate the tags with commas.'  />
            <Label>Video thumb:</Label>
            {
                imgPercentage > 0 ? ("Uploading: " + imgPercentage + "%") : (
                    <Input type="file" accept="image/*" onChange={ e => setImg(e.target.files[0]) } />
                )
            }
        </FormSection>
    </Container>
  );
};

const Container = styled.section`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    `;

const Section = styled.section`
    width: 30%;
`;

const Title = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 1.5rem;
`;

const Hr = styled.hr`
    margin: 15px 0;
    width: 100%;
    border: 1px solid ${({theme}) => theme.soft};
`;

const FormSection = styled.section`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Label = styled.label`
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
    width: 50%;
    margin-bottom: 15px;
`;

const Description = styled.textarea`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
    width: 50%;
    margin-bottom: 15px;
`;

export default UpdateVideo;
