import { firebaseAddUser, firebaseCreateAccount, firebaseGetUser, firebaseSignIn, firebaseSignInWithFacebook, firebaseSignInWithGoogle, firebaseSignOut, serverTimestamp } from '@lib/firebase';
import { onAuthSuccess, signIn, createAccount, signInSuccess, signInWithGoogle, signInWithFacebook, signOut, signOutSuccess } from '@slices/authSlice';
import { setProfile } from '@slices/profileSlice';
import { call, put } from 'redux-saga/effects'



function* authSaga({type, payload}) {
    switch(type){
        case createAccount.type:
            try {
               const ref = yield call(firebaseCreateAccount, payload.email, payload.password);
                const user = {
                    fullname: 'client',
                    email: payload.email,
                    address: '',
                    postalCode: '',
                    mobile: '',
                    dateJoined: ref.user.metadata.creationTime || serverTimestamp()
                }

                yield call(firebaseAddUser, ref.user.uid, user);
                yield put(setProfile(user));

            } catch (err) {
                console.log(err.message)
            }

        case signIn.type:
            try {
                yield call(firebaseSignIn, payload.email, payload.password)
            } catch (err) {
                console.log(err)
            }
        break;
        case signInWithGoogle.type:
            try {
                yield call(firebaseSignInWithGoogle)
            } catch (err) {
                console.log(err.message)
            }
        break;

        case signInWithFacebook.type:
            try {
               yield call(firebaseSignInWithFacebook)
            } catch (err) {
                console.log(err.message)
            }
        break;

        case onAuthSuccess.type:
            const snapshot = yield call(firebaseGetUser, payload.uid);

            if(snapshot.data()){
                const user = snapshot.data();
                yield put(setProfile(user));
                yield put(signInSuccess({
                    id: payload.uid,
                    role: 'USER',
                    user_name: user.fullname
                }))
            }else if(payload.providerData[0].providerId !== 'password' && !snapshot.data()){
                const user = {
                    fullname: payload.displayName ? payload.displayName : 'User',
                    email: payload.email,
                    address: '',
                    postalCode: '',
                    mobile: '',
                    dateJoined: payload.metadata.creationTime
                }
                yield call(firebaseAddUser, payload.uid, user )
                yield put(setProfile(user))
                yield put(signInSuccess({
                    id: payload.uid,
                    role: 'USER',
                    user_name: payload.displayName ? payload.displayName : 'User',
                }))
                
                
            }

            break;

            case signOut.type:
                try {
                    yield call(firebaseSignOut)
                    yield put(signOutSuccess(null))
                } catch (err) {
                    console.log(err.message)
                }
            break;
    }
}

export default authSaga;