import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";


const hydrate = createAction(HYDRATE);


interface Items {
    id: string;
    item_name: string;
    item_image: string;
    category: string;
    description: string;
    ingredients: string;
    price: number;
}
export interface ItemsState {
    id: string;
    type: string;
    items: Items[]
}



const initialState: ItemsState[] = [];

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        getItems () {},
        
        getItemsSuccess: (state, action: PayloadAction<ItemsState[]>) => {
            return [...action.payload]  
        },
    },
    extraReducers(builder) {
        builder.addCase(hydrate, (state, action) => {
           
            let nextState =  [
                ...state,
                ...(action.payload as any)[itemsSlice.name],
            ]

            if(state.length > 0) nextState = state
           
            return nextState;
        })
    }
    
})




export const {getItems, getItemsSuccess} = itemsSlice.actions

export default itemsSlice.reducer