import { firebaseAddReview, firebaseDeleteReview, firebaseEditReview } from "@lib/firebase";
import {  call } from "@redux-saga/core/effects";
import { addReview, deleteReview, editReview,} from "@slices/reviewsSlice";
import toast from "react-hot-toast";


function* reviewsSaga({type, payload}){
    switch(type){
       

        case addReview.type:
            try {
                yield call(firebaseAddReview, payload.uid, payload.review, payload.item_id);
                yield toast.success('review added successfully ');
            } catch (err) {
                console.log(err.message)
            }
        break;

        case editReview.type:
            try {
                yield call(firebaseEditReview,  payload.uid, payload.content, payload.item_id)
                yield toast.success('review edited successfully')
            } catch (err) {
                console.log(err)
                yield toast.error('an error accured ')
            }
        break;

        case deleteReview.type:
            try {
               
                yield call(firebaseDeleteReview, payload.uid, payload.item_id)
                yield toast.success('reviews deleted')
            } catch (err) {
                console.log(err.message)
            }
    }
}


export default reviewsSaga;