import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateVideo } from '../services/updateVideo';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Card from '../components/Card';
import app from '../firebase';
import { deleteVideo } from '../services/deleteVideo';

const UpdateVideo = () => {

    const path = useLocation().pathname.split("/")[2];

    const navigate = useNavigate();

    const { currentVideo } = useSelector((state) => state.video);

    const [img, setImg] = useState(undefined);
    const [imgPercentage, setImgPercentage] = useState(0);
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
                urlType === "imgUrl" && setImgPercentage(Math.round(progress));
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
        img && uploadFile(img, "imgUrl");
    }, [img]);


    const handleUpdate = async (e) => {
        e.preventDefault();

        const res = await updateVideo(path.toString(), { ...inputs, tags });

        res.status === 200 && navigate(`/video/${res.data._id}`);
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        const res = await deleteVideo(path.toString());

        res.status === 200 && navigate("/");
    };

  return (
    <Container>
        <Title>Update your video</Title>
        <Hr />
        <Section>
            <Card type="sm" video={ currentVideo } />
        </Section>
        <FormSection>
            <Label>Title:</Label>
            <Input type="text" placeholder='Video Title' name='title' onChange={ handlechange } />
            <Label>Description:</Label>
            <Description placeholder="Add a description" name='description' rows={ 8 } onChange={ handlechange } />
            <Label>Tags:</Label>
            <Input type="text" placeholder='Separate the tags with commas.' onChange={ handleTags } />
            <Label>Video thumb:</Label>
            {
                imgPercentage > 0 ? ("Uploading: " + imgPercentage + "%") : (
                    <Input type="file" accept="image/*" onChange={ e => setImg(e.target.files[0]) } />
                )
            }
           <ButtonsSection>
                <UpdateVideoBtn onClick={ handleUpdate }>Update video</UpdateVideoBtn>
                <DeleteVideoBtn onClick={ handleDelete }>Delete video</DeleteVideoBtn>
           </ButtonsSection>
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

const ButtonsSection = styled.section`
    display: flex;
    margin-top: 25px;
`;

const UpdateVideoBtn = styled.button`
    background-color: #007dd6;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    margin-right: 30px;
`;

const DeleteVideoBtn = styled.button`
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

export default UpdateVideo;
