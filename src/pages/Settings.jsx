import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const Settings = () => {

    const { currentUser } = useSelector(state => state.user);

    console.log(currentUser)

  return (
    <Container>
        <PageTitle>Account</PageTitle>
        <Wrapper>
            <ChannelImage src={ currentUser.img } />
            <ChannelName>Welcome, { currentUser.username }!</ChannelName>
        </Wrapper>
        <Hr />
        <ChannelAccountInfo>
            <SectionTitle>Your DevTube Channel</SectionTitle>
            <Content>
                Logged in as { currentUser.email }
                <br />
                <br />
                Username { currentUser.username }
            </Content>
        </ChannelAccountInfo>
        <Hr />
    </Container>
  );
};

const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 60px 60px;
    justify-content: center;
`;

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
`;

const ChannelImage = styled.img`
    margin-right: 30px;
    height: 60px;
    width: 60px;
    border-radius: 100%;
`;

const ChannelName = styled.h1`
    font-size: 1.5em;
    color:  ${({theme}) => theme.text};
    text-align: center;
`;

const PageTitle = styled.h1`
    font-size: 2em;
    color:  ${({theme}) => theme.text};
    margin-bottom: 50px;
`;

const ChannelAccountInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
`;

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const SectionTitle = styled.p`
    color:  ${({theme}) => theme.text};
    margin-bottom: 15px;
`;

const Content = styled.p`
    color:  ${({theme}) => theme.textSoft};
    font-size: 0.9em;
`;

export default Settings;
