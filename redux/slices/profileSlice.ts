import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

interface ProfileState {
    fullname: string;
    email: string;
    address: string;
    postalCode: string;
    basket: CartItem[];
    mobile: string;
    dateJoined: string;

}

const initialState: ProfileState | {} = {}


const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
           return action.payload
          
        },

        updateProfile(state,action){},


        updateProfileSuccess: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },

        clearProfile: () => {
            return {}
        }
    }
})


export const { setProfile, updateProfile, updateProfileSuccess, clearProfile, } = profileSlice.actions;


export default profileSlice.reducer;