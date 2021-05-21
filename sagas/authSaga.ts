import { firebaseAddUser, firebaseGetUser, firebaseSignInWithGoogle, firebaseSignOut } from '@lib/firebase';
import { onAuthSuccess, signInSuccess, signInWithGoogle, signOut } from '@slices/authSlice';
import { setProfile } from '@slices/profileSlice';
import { call, put } from 'redux-saga/effects'



function* authSaga({type, payload}) {
    switch(type){
        case signInWithGoogle.type:
            try {
                yield call(firebaseSignInWithGoogle)
            } catch (err) {
                console.log(err.message)
            }
        break;
        case onAuthSuccess.type:
            const snapshot = yield call(firebaseGetUser, payload.uid);

            if(snapshot.data()){
                const user = snapshot.data();
                yield put(setProfile(user))
            }else if(payload.providerData[0].providerId !== 'password' && !snapshot.data()){
                const user = {
                    fullname: payload.displayName ? payload.displayName : 'User',
                    email: payload.email,
                    address: '',
                    zipCode: '',
                    city: '',
                    basket: [],
                    mobile: '',
                    dateJoined: payload.metadata.creationTime
                }
                yield call(firebaseAddUser, payload.uid, user )
                yield put(setProfile(user))
                yield put(signInSuccess({
                    id: payload.uid,
                    role: 'USER'
                }))
                
                
            }

            break;

            case signOut.type:
                try {
                    yield call(firebaseSignOut)
                } catch (err) {
                    console.log(err.message)
                }



    }
}

export default authSaga;