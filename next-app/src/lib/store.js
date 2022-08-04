import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers';
import rootSaga from './sagas';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

export const makeStore = () => {
    // 1: Create the middleware
    const sagaMiddleware = createSagaMiddleware();

    // 2: Add an extra parameter for applying middleware
    const store = configureStore({

        reducer: rootReducer,

        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
            thunk: false
        }).concat(sagaMiddleware)
    });

    // 3: Run your sagas on server
    store.sagaTask = sagaMiddleware.run(rootSaga);
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    // 4: now return the store
    return store;
};

export const wrapper = createWrapper(makeStore);

