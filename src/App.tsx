import React, { useState } from 'react';

// Configuração para armazenar variaveis na aplicação \\
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';


// Configuração de Rotas da aplicação \\
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

// StyleSheet \\
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
