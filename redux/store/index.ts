import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
import createSagaMiddleware, { Task } from 'redux-saga';
import rootSaga from '@sagas/rootSaga';
import { Context, createWrapper } from 'next-redux-wrapper';
import itemsSlice from '@slices/itemsSlice';
import appSlice from '@slices/appSlice';
import cartSlice from '@slices/cartSlice';
import {combineReducers, Store} from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authSlice, { onAuthSuccess, signOutSuccess } from '@slices/authSlice';
import profileSlice from '@slices/profileSlice';
import reviewsSlice, { addReview } from '@slices/reviewsSlice';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import ordersSlice, { setOrders } from '@slices/ordersSlice';
import customizeSlice from '@slices/customizeSlice';

export interface SagaStore extends Store {
    sagaTask?: Task
}

const rootReducer = combineReducers({
    app: appSlice,
    items: itemsSlice,
    cart: cartSlice,
    auth: authSlice,
    profile: profileSlice,
    reviews: reviewsSlice,
    orders: ordersSlice,
    customized: customizeSlice
})



const makeConfiguredStore = (reducer) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({thunk: false, serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, setOrders.type, onAuthSuccess.type, signOutSuccess.type, addReview.type]
            }}).concat( sagaMiddleware)
    });

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

export const makeStore = (context: Context = null) => {
   const isServer = typeof window === 'undefined';

   if(isServer) {
       return makeConfiguredStore(rootReducer)
   }else{
    const {persistStore, persistReducer} = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
        key: 'root',
        whitelist: ['items', 'cart'], 
        storage
    };
    

    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = makeConfiguredStore(persistedReducer);
    {/*// @ts-ignore */}
    store.__persistor = persistStore(store);

    return store;
   }
}



export type RootState = ReturnType<typeof makeStore>
export type AppState = ReturnType<RootState['getState']>
export type AppDispatch = ReturnType<RootState['dispatch']>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export const wrapper = createWrapper(makeStore);