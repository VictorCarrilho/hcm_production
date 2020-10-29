import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { companySuccess, companyFailure } from './actions';


export function* companyValidation({ payload }: any) {
    try {
        const { companyNameURL } = payload;

        /*
        // Nome da empresa recebida na URL pela função COMPANY_REQUEST \\
        const { companyNameURL } = payload;
        const response = yield call(api.post, 'company', {
            companyNameURL
        });

        const { success, message } = response.data;

        // Se deu error, enviar falha para o saga \\
        if (!success) {
            toast.error(message);
            yield put(companyFailure());
            return;
        }

        const { companyName, companyToken } = response.data;*/
        if (companyNameURL != 'verzani') {
            toast.error('Empresa não cadastrada em nossa base de dados');
            yield put(companyFailure());
            return;
        }

        const companyName = "verzani";
        const companyToken = "Y2xpZW50ZToxMjM=";

        api.defaults.headers['Authorization'] = `Basic ${companyToken}`;
        yield put(companySuccess(companyName, companyToken));
        history.push('/login');
    } catch (err) {
        toast.error('Não foi possivel verificar a empresa enviada. Favor tentar mais tarde');
        yield put(companyFailure());
    }
}


export function setToken({ payload }: any) {
    if (!payload) return;

    const { companyToken } = payload.auth;

    if (companyToken) {
        api.defaults.headers['Authorization'] = `Basic ${companyToken}`;
    }
}

export function signOut() {
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@company/COMPANY_REQUEST', companyValidation),
]);
