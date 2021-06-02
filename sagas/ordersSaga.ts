import { firebaseSetOrders } from "@lib/firebase";
import {call, put } from "@redux-saga/core/effects";
import { clearCart } from "@slices/cartSlice";
import { setOrders } from "@slices/ordersSlice";
import toast from "react-hot-toast";



function* ordersSaga({type, payload}){
    switch(type){
        case setOrders.type:
            try {
                yield call(firebaseSetOrders, payload.id, payload.orders)
                toast.success('Your Orders Placed successfully')
                yield put(clearCart())
            } catch (err) {
                console.log(err.message)
            }
    }
}


export default ordersSaga;