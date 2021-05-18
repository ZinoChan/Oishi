import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        getItems () {},
        
        getItemsSuccess: (state, action) => {
            return [...action.payload]
        },

    }
})


export const {getItems, getItemsSuccess} = itemsSlice.actions

export default itemsSlice.reducer