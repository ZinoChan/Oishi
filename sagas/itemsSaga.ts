import {call, put} from 'redux-saga/effects'
import { getItemsError, getItemsLoading } from 'slices/appSlice';
import { getItemsSuccess } from 'slices/itemsSlice';

const fetchItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const items = await response.json()
    return items
}


function* getItemsSaga(){
   try {
       yield put(getItemsLoading(true))
        const items = yield call(fetchItems);
        
        yield put(getItemsSuccess(items))
        yield put(getItemsLoading(false))
   } catch (err) {
       yield put(getItemsError(true))
   }
}



export default getItemsSaga;