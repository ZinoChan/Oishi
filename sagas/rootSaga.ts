import {getItems} from '@slices/itemsSlice'
import { takeLatest } from "@redux-saga/core/effects";
import getItemsSaga from "./itemsSaga";
import { onAuthSuccess, signInWithGoogle, signOut } from '@slices/authSlice';
import authSaga from './authSaga';
import { addReview, deleteReview, editReview } from '@slices/reviewsSlice';
import reviewsSaga from './reviewsSaga';
import {  updateProfile } from '@slices/profileSlice';
import profileSaga from './profileSaga';
import { setOrders } from '@slices/ordersSlice';
import ordersSaga from './ordersSaga';

export default function* rootSaga(){
    yield takeLatest(getItems.type, getItemsSaga),
    yield takeLatest([
        signInWithGoogle.type,
        onAuthSuccess.type,
        signOut.type,
    ], authSaga),
    yield takeLatest([
        addReview.type,
        editReview.type,
        deleteReview.type
    ], reviewsSaga),
    yield takeLatest([
        updateProfile.type,
        
    ], profileSaga),
    yield takeLatest([
        setOrders.type
    ], ordersSaga)
}