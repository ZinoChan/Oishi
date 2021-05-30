import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "hooks/useCookie";

const CART = 'CART';

export interface CartItem {
        id: number;
        item_name: string;
        item_image: string;
        price: number;
        category: string;
        quantity: number;
}


const initialState : CartItem[] = getCookie(CART);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const cart =  state.some(item => item.id === action.payload.id) ? 
            [...state] : [{...action.payload}, ...state]
            setCookie(CART, cart)
            return cart;
            
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const cart =  state.filter(item => item.id !== action.payload);
            setCookie(CART, cart);
            return cart;
        },
        addQty: (state, action: PayloadAction<number>) => {
            const cart =  state.map(item => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })

            setCookie(CART, cart);
            return cart;
        },
        minusQty: (state, action: PayloadAction<number>) => {
            const cart =  state.map(item => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })

            setCookie(CART, cart);
            return cart;
        },
        clearCart: (state, action) => {
            const cart = [];
            setCookie(CART, cart);
            return cart;
        }
    }
})

export const { addItem, removeItem, addQty, minusQty, clearCart } = cartSlice.actions

export default cartSlice.reducer;