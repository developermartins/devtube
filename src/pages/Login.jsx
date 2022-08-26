import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSignin = (e) => {
        e.preventDefault();

        try {
            
        } catch (error) {
            
        }

    }

  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to DevMarts</SubTitle>
            <Input placeholder="username" onChange={e=>setUsername(e.target.value)} />
            <Input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
            <Button onClick={handleSignin}>Sing in</Button>
            <Title>or</Title>
            <Input placeholder="username" onChange={e=>setUsername(e.target.value)} />
            <Input placeholder="email" onChange={e=>setEmail(e.target.value)}/>
            <Input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <Button>Sing up</Button>
        </Wrapper>
        <More>
            Brasil(BR)
            <Links>
                <Link>Ajuda</Link>
                <Link>Privacidade</Link>
                <Link>Termos de uso</Link>
            </Links>
        </More>
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 5px;
    padding: 20px 80px;
    gap: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
`;

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
`;

const Input = styled.input`
    border: 1px solid ${({theme}) => theme.soft};
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`;

const Button = styled.button`
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`;

const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
`;

const Links = styled.div`
    margin-left: 50px;
`;

const Link = styled.span`
    margin-left: 30px;
`;

export default Login;
