import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';



function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <GlobalStyle />
                    <Routes />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
