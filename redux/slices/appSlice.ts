
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    itemsLoading: boolean;
    getItemsError: boolean;
    authLoading: boolean;

}

const initialState: AppState = {
    itemsLoading: false,
    getItemsError: false,
    authLoading: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getItemsLoading: (state, action: PayloadAction<boolean>) => {
            return {...state, itemsLoading: action.payload}
        },
        getItemsError: (state, action: PayloadAction<boolean>) => {
            return {...state, getItemsError: action.payload}
        },
        authLoading: (state, action: PayloadAction<boolean>) => {
            return {...state, authLoading: action.payload}
        }
       

    }
})


export const { getItemsLoading, getItemsError, authLoading } = appSlice.actions

export default appSlice.reducer