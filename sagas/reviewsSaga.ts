import { firebaseAddReview, firebaseGetReviews } from "@lib/firebase";
import {  call, put } from "@redux-saga/core/effects";
import { addReview, getReviews, getReviewsSuccess } from "@slices/reviewsSlice";
import toast from "react-hot-toast";


function* reviewsSaga({type, payload}){
    switch(type){
        case getReviews.type:
            try {
                const snapshot = yield call(firebaseGetReviews);
                if(snapshot.docs){
                    const reviews = snapshot.docs.map(doc => doc.data());
                    yield put(getReviewsSuccess(reviews));
                }else{
                    yield put(getReviewsSuccess([]))
                }
            } catch (err) {
                console.log(err.message)
            }
        break;

        case addReview.type:
            try {
                yield call(firebaseAddReview, payload.uid, payload.review, payload.item_id);
                yield toast.success('review added successfully ');
            } catch (err) {
                console.log(err.message)
            }
    }
}


export default reviewsSaga;