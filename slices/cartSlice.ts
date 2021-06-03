import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartItem {
        id: number | string;
        item_name: string;
        item_image: string;
        price: number;
        category: string;
        quantity: number;
        ingredients: [] | any | null;
}


const initialState : CartItem[]  = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            return state.some(item => item.id === action.payload.id) ? 
            [...state] : [{...action.payload}, ...state]
           
            
        },
        removeItem: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload);
           
        },
        addQty: (state, action: PayloadAction<number>) => {
            return state.map(item => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })

            
        },
        minusQty: (state, action: PayloadAction<number>) => {
            return state.map(item => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })

          
        },
        clearCart: () => {
            return [];
            
        }
    }
})

export const { addItem, removeItem, addQty, minusQty, clearCart } = cartSlice.actions

export default cartSlice.reducer;