import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { updateAccount } from '../services/accountServices';
import { useDispatch } from 'react-redux';
import { startAccountUpdate, updateAccountSuccess } from '../redux/userSlice';

import app from '../firebase';
import styled from 'styled-components';

const UpdateAccountPopUp = ({ setOpen, userId }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [img, setImg] = useState(undefined);
    const [avatarPercentage, setAvatarPercentage] = useState(0);
    const [inputs, setInputs] = useState({});

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
                urlType === "img" && setAvatarPercentage(Math.round(progress));
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
       img && uploadFile(img, "img");
    }, [img]);


    const handleUpdate = async (e) => {
        e.preventDefault();
        dispatch(startAccountUpdate());

        const res = await updateAccount(userId, inputs);

        dispatch(updateAccountSuccess(res.data));

        setOpen(false);
        res.status === 200 && navigate("/");
    };

  return (
    <Container>
        <Wrapper>
            <Close onClick={ () => setOpen(false) }>X</Close>
            <Title>Update your account</Title>
            <Label>Avatar</Label>
            {  
                avatarPercentage > 0 ? ("Uploading: " + avatarPercentage + "%") : (
                    <Input type="file" accept="png/*" onChange={ e => setImg(e.target.files[0]) } />
                )
            }
            <Label>Username</Label>
            <Input type="text" placeholder='Username' name='username' onChange={ handlechange } />
            <Label>Email</Label>
            <Input type="text" placeholder='Email' name='email' onChange={ handlechange } />
            <Label>Password</Label>
            <Input type="text" placeholder='Email' name='password' onChange={ handlechange } />
            {/* <Label>Confirm password</Label>
            <Input type="text" placeholder='Email' name='email' onChange={ handlechange } /> */}
            <UploadButton onClick={ handleUpdate }>Update account</UploadButton>
        </Wrapper> 
    </Container>
  );
};

const Container = styled.section`
    width: 100%;
    height: 100vh;
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


export default UpdateAccountPopUp;
