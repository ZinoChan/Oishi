import { firebaseAddReview } from "@lib/firebase";
import {  call, put } from "@redux-saga/core/effects";
import { addReview,} from "@slices/reviewsSlice";
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
    }
}


export default reviewsSaga;