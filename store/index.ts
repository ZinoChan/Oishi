import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware, { Task } from 'redux-saga';
import rootSaga from '@sagas/rootSaga';
import { Context, createWrapper } from 'next-redux-wrapper';
import itemsSlice from '@slices/itemsSlice';
import appSlice from '@slices/appSlice';
import cartSlice from '@slices/cartSlice';
import {Store} from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authSlice, { onAuthSuccess, signOutSuccess } from '@slices/authSlice';
import profileSlice from '@slices/profileSlice';
import reviewsSlice, { addReview } from '@slices/reviewsSlice';
export interface SagaStore extends Store {
    sagaTask?: Task
}


export const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: {
            app: appSlice,
            items: itemsSlice,
            cart: cartSlice,
            auth: authSlice,
            profile: profileSlice,
            reviews: reviewsSlice
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({thunk: false, serializableCheck: {
                ignoredActions: [onAuthSuccess.type, signOutSuccess.type, addReview.type]
            }}).concat(logger, sagaMiddleware)
    });

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;

}



export type RootState = ReturnType<typeof makeStore>
export type AppState = ReturnType<RootState['getState']>
export type AppDispatch = ReturnType<RootState['dispatch']>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export const wrapper = createWrapper(makeStore);
