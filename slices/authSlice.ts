import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: null,
    reducers: {
        signInWithGoogle () {},

        signOut() {},

        signInSuccess: (state, action) => {
            return {
                ...action.payload
            }
        },

        signOutSuccess: (state, action) => {
            return null
        },

        onAuthSuccess: (state, action) => {},

        authLoading: (state, action) => {},

      
       
        
    }
})


export const { signInWithGoogle, signInSuccess, signOut,  signOutSuccess, onAuthSuccess } = authSlice.actions

export default authSlice.reducer;