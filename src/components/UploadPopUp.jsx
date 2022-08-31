import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import app from '../firebase';
import styled from 'styled-components';

const UploadPopUp = ({ setOpen }) => {

    const [img, setImg] = useState(undefined);
    const [video, setVideo] = useState(undefined);
    const [imgPercentage, setImgPercentage] = useState(0);
    const [videoPercentage, setVideoPercentage] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);

    const handleTags = (e) => {
        setTags(e.target.value.split(","));
    };

    const handlechange = (e) => {
        setInputs((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgPercentage(Math.round(progress)) : setVideoPercentage(Math.round(progress));
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break;
                };
            },
            (error) => {},
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => {
                        return {
                            ...prev,
                            [urlType]: downloadURL,
                        };
                    });
                });
            },
        );
    };

    useEffect(() => {
       video && uploadFile(video, "videoUrl");
    }, [video]);

    useEffect(() => {
       img && uploadFile(img, "imgUrl");
    }, [img]);

  return (
    <Container>
        <Wrapper>
            <Close onClick={ () => setOpen(false) }>X</Close>
            <Title>Upload a New Video</Title>
            <Label>Video:</Label>
            {  
                videoPercentage > 0 ? ("Uploading: " + videoPercentage + "%") : (
                    <Input type="file" accept="video/*" onChange={ e => setVideo(e.target.files[0]) } />
                )
            }
            <Label>Title:</Label>
            <Input type="text" placeholder='Video Title' name='title' onChange={ handlechange } />
            <Label>Description:</Label>
            <Description placeholder="Add a description" name='description' rows={ 8 }  onChange={ handlechange } />
            <Label>Tags:</Label>
            <Input type="text" placeholder='Separate the tags with commas.' onChange={ handleTags } />
            <Label>Video thumb:</Label>
            {
                imgPercentage > 0 ? ("Uploading: " + imgPercentage + "%") : (
                    <Input type="file" accept="image/*" onChange={ e => setImg(e.target.files[0]) } />
                )
            }
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
