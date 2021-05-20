import { createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

interface Items {
    id: number;
    item_name: string;
    item_image: string;
    category: string;
    description: string;
    ingredients: string;
    price: number;
    comments: string[]
}
export interface ItemsState {
    id: number;
    type: string;
    items: Items[]
}

const initialState: ItemsState[] = [];

const itemsSlice = createSlice({
    name: "items",
    initialState,
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