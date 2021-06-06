import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
    id: string;
    role: string;
    user_name: string;
}

const initialState : AuthState | {} = {}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createAccount: (state, action) => {},

        signIn: (state, action) => {},

        signInWithGoogle () {},

        signInWithFacebook () {},

        signOut() {},

        signInSuccess: (state, action) => {
            return {
                ...action.payload
            }
        },

        signOutSuccess: (state, action) => {
            return action.payload
        },

        onAuthSuccess: (state, action) => {}, 
        
    }
})


export const {signIn, createAccount, signInWithGoogle, signInSuccess, signOut,  signOutSuccess, onAuthSuccess, signInWithFacebook } = authSlice.actions

export default authSlice.reducer;