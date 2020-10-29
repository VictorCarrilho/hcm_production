import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../store';


export default function RouteWrapper({ component: Component, isPrivate = false, path, params, ...rest }: any) {
    const { isLogged } = store.getState().auth;
    const { companyName, companyToken } = store.getState().company;

    // O usuário deve selecionar primeiro a empresa \\
    if (!companyName && !companyToken && path != "/") {
        return <Redirect to='/' />
    }

    // Se o usuário não estiver logado e a pagina for privada \\
    if (!isLogged && isPrivate && companyName) {
        return <Redirect to='/login' />
    }

    if (isLogged && !isPrivate && companyName) {
        return <Redirect to='/dashboard' />
    }


    return (<Route {...rest}
        render={
            props => (
                <Component {...props} />
            )
        }
    />
    )
}
