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


export const { signInWithGoogle, signInSuccess, signOut,  signOutSuccess, onAuthSuccess, signInWithFacebook } = authSlice.actions

export default authSlice.reducer;