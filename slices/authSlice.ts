import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
    id: string;
    role: string;
}

const initialState : AuthState | {} = {}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInWithGoogle () {},

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

        authLoading: (state, action) => {},

      
       
        
    }
})


export const { signInWithGoogle, signInSuccess, signOut,  signOutSuccess, onAuthSuccess } = authSlice.actions

export default authSlice.reducer;