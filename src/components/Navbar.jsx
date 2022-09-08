import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import UploadPopUp from './UploadPopUp';
import UserPopUp from './UserPopUp';
import UserDefaultImg from '../images/user.png';

const Navbar = ({ toggleTheme }) => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [query, setQuery] = useState('');

    const { currentUser } = useSelector(state => state.user);

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    };

  return (
    <>
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Search' onChange={ handleChange } />
                    <SearchOutlinedIcon  onClick={ () => navigate(`/search?q=${query}`) } style={{ "cursor": "pointer" }} />
                </Search>
            { currentUser ? ( 
                <User>
                    <VideoCallOutlinedIcon
                        onClick={ () => setOpen(true) }
                        style={{ "cursor": "pointer", "marginRight":"20px" }}
                    />
                    <Avatar src={ currentUser.img || UserDefaultImg } onClick={() => setOpenPopUp(!openPopUp)} />
                    { currentUser.username }
                </User> 
            ) :
                <Link to="signin" style={{ textDecoration: "none" }}>
                    <Button>
                        <AccountCircleOutlinedIcon />
                        SIGN IN
                    </Button>
                </Link>
                }
            </Wrapper>
        </Container>
        { open && <UploadPopUp setOpen={ setOpen } /> }
        { openPopUp && <UserPopUp toggleTheme={ toggleTheme } setOpenPopUp={ setOpenPopUp } /> }
    </>
  );
};

const Container = styled.section`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 56px;
`;

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0 20px;
    position: relative;
`;

const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 10px;
    color: ${({theme}) => theme.text};
`;

const Input = styled.input`
    border: none;
    background-color: transparent;
    width: 100%;
    outline: 0;
    color: ${({theme}) => theme.text};
`;

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #999;
    cursor: pointer;
`;

export default Navbar;
