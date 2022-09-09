import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, loginWithGoogle, signup } from '../services/login';
import { 
    loginFailure,
    loginStart,
    loginSuccess 
} from '../redux/userSlice';
import { auth, provider } from "../firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Login = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [isSigninError, setIsSigninError] = useState(false);
    const [signinError, setSigninError] = useState("");
    
    const [isSignupError, setIsSignupError] = useState(false);
    const [signupError, setSignupError] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        const { email, password } = values;

        try {
            const userLogin = await login(email, password);
            dispatch(loginSuccess(userLogin));
            navigate('/')
        } catch (error) {
            dispatch(loginFailure());
            setIsSigninError(true);
            setSigninError(error.response.data);
        };
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        const { email, username, password } = values;

        dispatch(loginStart());

        try {
            const userSignup = await signup(email, username, password);
            dispatch(loginSuccess(userSignup.data.accountData));
            navigate('/');
        } catch (error) {
            dispatch(loginFailure());
            setIsSignupError(true);
            setSignupError(error.response.data);
        };
    };

    const signInWithGoogle = async () => {
        dispatch(loginStart())
        signInWithPopup(auth, provider)
            .then((result) => loginWithGoogle(result)
            .then((res) => dispatch(loginSuccess(res), navigate('/'))))
            .catch((error) => {
                dispatch(loginFailure());
            });
    };

    const handleChange = (e) => {
        setIsSignupError(false);
        setSignupError("");
        setIsSigninError(false);
        setSigninError("");
        setValues({ ...values, [e.target.name]: e.target.value });
    };

  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to DevTube</SubTitle>
            <Form>
                <Input
                    placeholder="Email"
                    name="email"
                    onChange={ handleChange }
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autocomplete="current-password"
                    onChange={ handleChange }
                />
                { isSigninError && <ErrorMessage>{signinError}</ErrorMessage> }
            </Form>
            <Button onClick={ handleSignin }>Sign in</Button>

            <Title>or</Title>
            <Button onClick={ signInWithGoogle }>Singn in with Google</Button>

            <Title>or</Title>
            <Title>Sign up</Title>
            <Form>
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={ handleChange }
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={ handleChange }
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autocomplete="off"
                    onChange={ handleChange }
                />
            </Form>
            { isSignupError && <ErrorMessage>{signupError}</ErrorMessage> }
            <Button onClick={ handleSignup }>Sign up</Button>
        </Wrapper>
        <More>
            English(US)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Use terms</Link>
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
    width: 400px;
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
    color: ${({theme}) => theme.text};
    padding: 10px;
    margin-bottom: 20px;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ErrorMessage = styled.span`
    color: red;
`;

export default Login;
