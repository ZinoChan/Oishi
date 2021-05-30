import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "hooks/useCookie";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

const ITEMS = 'ITEMS';

interface Items {
    id: number;
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

const initialState: ItemsState[] = getCookie(ITEMS);

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
           
            const items =  [
                ...state,
                ...(action.payload as any)[itemsSlice.name],
            ]
            setCookie(ITEMS, items)
            return items;
        })
    }
    
})


export const {getItems, getItemsSuccess} = itemsSlice.actions

export default itemsSlice.reducer