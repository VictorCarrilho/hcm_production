import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@rocketseat/unform';

// Função que o saga esta esperando que seja disparada para realizar a autenticação //
import { signInRequest } from '../../store/modules/auth/actions';

// Style-Sheet \\
import {
    Container,
    LoginContainer,
    DivImageLeft,
    LoginContent,
    TitleH2,
    InputWrapper,
    DivIcon,
    IconFaUserAlt,
    IconFaLock,
    DivInput,
    LoginH5,
    InputLogin,
    BtnLogin
} from './style';

import wave from '../../assets/img/wave.png';
import avatar from '../../assets/business.png';
import logo from '../../assets/img/logo_astronauta.svg';



const Login: React.FC = () => {
    const dispatch = useDispatch();

    async function handleSubmit({ email, password }: any) {
        dispatch(signInRequest(email, password));
    }

    return (
        <Container>
            <img className="wave" src={wave} />
            <LoginContainer>
                <DivImageLeft>
                    <img src={logo} alt="logo" />
                </DivImageLeft>
                <LoginContent>
                    <Form onSubmit={handleSubmit}>
                        <img src={avatar} alt="avatar" />

                        <TitleH2>Welcome</TitleH2>

                        <InputWrapper className='one'>
                            <DivIcon className="divIcon"> <IconFaUserAlt /> </DivIcon>

                            <DivInput className="divInput">
                                <LoginH5>Email</LoginH5>
                                <InputLogin name="email" type="email" />
                            </DivInput>
                        </InputWrapper>

                        <InputWrapper className='pass'>
                            <DivIcon className="divIcon"> <IconFaLock /> </DivIcon>

                            <DivInput className="divInput">
                                <LoginH5>Password</LoginH5>
                                <InputLogin name="password" type="password" />
                            </DivInput>
                        </InputWrapper>

                        <div className="teste">
                            <a href="#">Back to home</a>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <BtnLogin type="submit">Acessar</BtnLogin>

                    </Form>
                </LoginContent>
            </LoginContainer>
        </Container>
    )
}

export default Login;


/*

    return (
        <Container>
                    <LoginArea>
                        <img src={avatar} alt="" />

                        <form action="">
                            <input name="email" type="email" placeholder="Seu login" />
                            <input name="password" type="password" placeholder="Sua senha secreta" />
                            <button type="submit">Acessar</button>

                        </form>
                    </LoginArea>
                    <LoginBanner />
                </Container>
    )

*/