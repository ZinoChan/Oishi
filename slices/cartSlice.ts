import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
        id: number;
        item_name: string;
        item_image: string;
        price: number;
        category: string;
        quantity: number;
}

const initialState : CartItem[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            return  state.some(item => item.id === action.payload.id) ? 
            [...state] : [{...action.payload, quantity: 1}, ...state]
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        addQty: (state, action) => {
            return state.map(item => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        },
        minusQty: (state, action) => {
            return state.map(item => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })
        },
        clearCart: (state, action) => {
            return []
        }
    }
})

export const { addItem, removeItem, addQty, minusQty, clearCart } = cartSlice.actions

export default cartSlice.reducer;