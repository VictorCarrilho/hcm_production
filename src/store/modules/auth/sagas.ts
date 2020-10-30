import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';
import { idText } from 'typescript';

export function* signIn({ payload }: any) {
    try {
        /*const { email, password } = payload;
        const response = yield call(api.post, 'oauth/token', {
            email,
            password
        });

        const { success, message } = response.data;

        if (!success) {
            toast.error(message);
            yield put(signFailure());
            return;
        }

        console.log(response.data);
        return;*/

        const { email, password } = payload;
        if (email !== 'victorcarrilho@gmail.com' && password !== "carrilho") {
            toast.error('Usuário e/ou senha inválidos.');
            yield put(signFailure());
            return;
        }

        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpYXQiOjE2MDM5OTM5MDcsImV4cCI6MTYzNTUyOTkwNywiYXVkIjoiIiwic3ViIjoiIiwibG9naW4iOiJ2aWN0b3JjYXJyaWxob0BnbWFpbC5jb20iLCJuYW1lIjoiVmljdG9yIENhcnJpbGhvIn0.eMjsiTifvJs6B7P6An5Vs9jQMoSZaJ2PJ_U_aVp56Lk";
        const user = {
            "login": 'victorcarrilho@gmail.com',
            "name": 'Victor Carrilho'
        }

        // Definir um header padrão nas requisições API, enviando sempre o token do usuário //
        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        // enviamos ao success as informações para ser salva no state //
        yield put(signInSuccess(token, user));
        history.push('/');

    } catch (err) {
        toast.error('Falha na autenticação, verifique seus dados.');
        yield put(signFailure());
    }
}


export function setToken({ payload }: any) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        // Definir um header padrão nas requisições API, enviando sempre o token do usuário //
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
}

export function signOut() {
    history.push('/');
}

// Enviamos uma execução para a função SIGN_IN_REQUEST //
export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut)
]);
