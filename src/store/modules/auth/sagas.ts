import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }: any) {
    try {
        const { email, password } = payload;
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

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('Usuário não é um prestador de serviços.');
            yield put(signFailure());
            return;
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
