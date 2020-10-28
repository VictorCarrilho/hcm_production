import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

// Função que o saga esta esperando que seja disparada para realizar a autenticação //
import { signInRequest } from '../../store/modules/auth/actions';

// Style-Sheet \\
import { Container } from './style';


const Login: React.FC = () => {
    const dispatch = useDispatch();

    async function handleSubmit({ email, password }: any) {
        dispatch(signInRequest(email, password));
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Digite seu e-mail" />
                <br />
                <Input name="password" type="password" placeholder="Digite seu password" />
                <br />
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    )
}

export default Login;