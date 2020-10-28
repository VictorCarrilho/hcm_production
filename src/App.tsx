import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
