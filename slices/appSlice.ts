import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        itemsLoading: false,
        getItemsError: false,
    },
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