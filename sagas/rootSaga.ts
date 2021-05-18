import {getItems} from '@slices/itemsSlice'
import { takeLatest } from "@redux-saga/core/effects";
import getItemsSaga from "./itemsSaga";

export default function* rootSaga(){
    yield takeLatest(getItems.type, getItemsSaga)
}