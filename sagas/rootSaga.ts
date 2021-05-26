import {getItems} from '@slices/itemsSlice'
import { takeLatest } from "@redux-saga/core/effects";
import getItemsSaga from "./itemsSaga";
import { onAuthSuccess, signInWithGoogle, signOut } from '@slices/authSlice';
import authSaga from './authSaga';
import { addReview, deleteReview, getReviews } from '@slices/reviewsSlice';
import reviewsSaga from './reviewsSaga';

export default function* rootSaga(){
    yield takeLatest(getItems.type, getItemsSaga),
    yield takeLatest([
        signInWithGoogle.type,
        onAuthSuccess.type,
        signOut.type,
    ], authSaga),
    yield takeLatest([
        getReviews.type,
        addReview.type,
        deleteReview.type
    ], reviewsSaga)
}