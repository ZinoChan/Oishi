import {  firebaseUpdateProfile } from "@lib/firebase";
import { call, put } from "@redux-saga/core/effects";
import { updateProfile, updateProfileSuccess } from "@slices/profileSlice";


function* profileSaga({type, payload}){
    switch(type){
        case updateProfile.type:
            try {
                yield call(firebaseUpdateProfile, payload.id, payload.updates);
                yield put(updateProfileSuccess(payload.updates))
                
            } catch (err) {
                console.log(err)
            }
        break;

       
       
    }
}



export default profileSaga;