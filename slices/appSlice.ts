import { createSlice } from "@reduxjs/toolkit";

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
        getItemsLoading: (state, action) => {
            return {...action.payload}
        },
        getItemsError: (state, action) => {
            return {...action.payload}
        }
    }
})


export const { getItemsLoading, getItemsError } = appSlice.actions

export default appSlice.reducer