import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    itemsLoading: boolean;
    getItemsError: boolean;

}

const initialState: AppState = {
    itemsLoading: false,
    getItemsError: false,
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
       

    }
})


export const { getItemsLoading, getItemsError } = appSlice.actions

export default appSlice.reducer