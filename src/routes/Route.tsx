import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../store';


export default function RouteWrapper({ component: Component, isPrivate = false, path, ...rest }: any) {
    const { isLogged } = store.getState().auth;

    if (!isLogged && isPrivate) {
        return <Redirect to="/login" />
    }

    // Se o usuário ESTIVER logado e tentar acessar a rota login, enviar para o dashboard \\
    if (isLogged && !isPrivate) {
        return <Redirect to="/" />
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
