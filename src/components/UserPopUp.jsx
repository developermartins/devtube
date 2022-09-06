import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styled, { ThemeContext } from 'styled-components';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const UploadPopUp = ({ toggleTheme }) => {

    const { title } = useContext(ThemeContext);

    const navigate = useNavigate();

  return (
      <Container>
        <Wrapper>
            <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <AccountCircleOutlinedIcon />
                    Your channel
                </Item>
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <LogoutOutlinedIcon />
                    Logout
                </Item>
            </Link>
            <Hr />
            <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <SettingsOutlinedIcon />
                    Settings
                </Item>
            </Link>
            <Item onClick={() => toggleTheme()}>
                <SettingsBrightnessOutlinedIcon />
                { title === 'light' ? 'Dark Mode'  : 'Light Mode' }
            </Item>
        </Wrapper> 
    </Container>
  );
};

const Container = styled.section`
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50;
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
    margin-top: 20px;
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

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 4px 0;

    &:hover {
        background-color: ${({theme}) => theme.soft};
    }
`;

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

export default UploadPopUp;
