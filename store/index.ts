import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@sagas/rootSaga';
import { createWrapper } from 'next-redux-wrapper';
import itemsSlice from '@slices/itemsSlice';
import appSlice from '@slices/appSlice';
import cartSlice from '@slices/cartSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        app: appSlice,
        items: itemsSlice,
        cart: cartSlice 
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({thunk: false}).concat(logger, sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export const wrapper = createWrapper(() => store)
