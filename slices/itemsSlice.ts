import { createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        getItems () {},
        
        getItemsSuccess: (state, action) => {
            return [...action.payload]
        },
    },
    extraReducers(builder) {
        builder.addCase(hydrate, (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return [
                ...state,
                ...(action.payload as any)[itemsSlice.name],
            ]
        })
    }
    
})


export const {getItems, getItemsSuccess} = itemsSlice.actions

export default itemsSlice.reducer