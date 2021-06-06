import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        setOrders(state, action){},
    }
})



export const {setOrders} = orderSlice.actions;


export default orderSlice.reducer