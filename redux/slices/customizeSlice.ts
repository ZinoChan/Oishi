import { createSlice } from "@reduxjs/toolkit";




const customizeSlice = createSlice({
    name: "customized",
    initialState: [],
    reducers: {
        addIngredient: (state, action) => {
            return state.some(item => item.id === action.payload.id) ? 
            state.map(item => {
                if( item.id === action.payload.id){
                    return {...item, quantity: item.quantity + 1}
                }
                return item

            }) : [...state, {...action.payload, quantity: 1}]
        },

        minusIngredient: (state, action) => {
            const item = state.find(item => item.id === action.payload.id);
            return item.quantity === 1 ? state.filter(item => item.id !== action.payload.id) :
            state.map(item => {
                    if(item.id === action.payload.id){
                        return  {...item, quantity: item.quantity - 1}
                    }
                    return item;

                })
        },

        clearCustomize:() => {
            return []
        }
    }
})


export const {addIngredient, minusIngredient, clearCustomize} = customizeSlice.actions;

export default customizeSlice.reducer;