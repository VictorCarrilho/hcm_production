import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../store';

import LayoutDefault from '../pages/_layouts/default';
import LayoutAuth from '../pages/_layouts/auth';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import usePeristedState from '../utils/usePersistedState'

export default function RouteWrapper({ component: Component, isPrivate = false, path, params, ...rest }: any) {
    const { isLogged } = store.getState().auth;
    const { companyName, companyToken } = store.getState().company;

    const Layout = isLogged ? LayoutDefault : LayoutAuth;
    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }


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
                <ThemeProvider theme={theme} >
                    <GlobalStyle />
                    <Layout toggleTheme={toggleTheme}>
                        <Component {...props} />
                    </Layout>
                </ThemeProvider>
            )
        }
    />
    )
}
