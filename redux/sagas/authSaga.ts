import { firebaseAddUser, firebaseCreateAccount, firebaseGetUser, firebaseSignIn, firebaseSignInWithFacebook, firebaseSignInWithGoogle, firebaseSignOut, serverTimestamp } from '@lib/firebase';
import { authLoading , authError } from '@slices/appSlice';
import { onAuthSuccess, signIn, createAccount, signInSuccess, signInWithGoogle, signInWithFacebook, signOut, signOutSuccess } from '@slices/authSlice';
import { clearCart } from '@slices/cartSlice';
import { clearProfile, setProfile } from '@slices/profileSlice';
import toast from 'react-hot-toast';
import { call, put } from 'redux-saga/effects'



function* handleError(err) {
    yield put(authLoading(false));

    switch (err.code) {
        case 'auth/network-request-failed':
            yield(put(authError({message: 'Network error has occured. Please try again.'})))
            break;
            case 'auth/email-already-in-use':
              yield put(authError({ message: 'Email is already in use. Please use another email' }));
              break;
            case 'auth/wrong-password':
              yield put(authError({ message: 'Incorrect email or password' }));
              break;
            case 'auth/user-not-found':
              yield put(authError({ message: 'Incorrect email or password' }));
              break;
            case 'auth/reset-password-error':
              yield put(authError({ message: 'Failed to send password reset email. Did you type your email correctly?' }));
              break;
            default:
              yield put(authError({ message: err.message }));
              break;
    }
}

function* initRequest() {
    yield put(authError(null));
    yield put(authLoading(true));
}

function* authSaga({type, payload}) {
    switch(type){
        case createAccount.type:
            try {
                yield initRequest()
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
                yield put(authLoading(false));

            } catch (err) {
                yield handleError(err)
            }
            break;

        case signIn.type:
            try {
                yield initRequest()
                yield call(firebaseSignIn, payload.email, payload.password);
                yield put(authLoading(false));
            } catch (err) {
                yield handleError(err);
            }
        break;
        case signInWithGoogle.type:
            try {
                yield initRequest();
                yield call(firebaseSignInWithGoogle);
                yield put(authLoading(false));
            } catch (err) {
                yield handleError(err)
            }
        break;

        case signInWithFacebook.type:
            try {
                yield initRequest();
               yield call(firebaseSignInWithFacebook);
               yield put(authLoading(false));
            } catch (err) {
                yield handleError(err)
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
                    yield initRequest()
                    yield call(firebaseSignOut);
                    yield put(clearCart())
                    yield put(clearProfile())
                    yield put(signOutSuccess(null))
                    yield put(authLoading(false));
                } catch (err) {
                    yield handleError(err)
                }
            break;
    }
}

export default authSaga;