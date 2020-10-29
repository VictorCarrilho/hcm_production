import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


// Configuração do PersistReducer \\
const persistConfig = {
    key: 'hcm_production',
    storage,
    whitelist: ['company', 'auth']
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);


export { store, persistor };


