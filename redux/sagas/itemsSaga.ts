import { firebaseGetItems } from '@lib/firebase';
import {call, put} from 'redux-saga/effects'
import { getItemsError, getItemsLoading } from '@slices/appSlice';
import { getItemsSuccess } from '@slices/itemsSlice';
import { toast } from 'react-hot-toast';



function* getItemsSaga(){
   try {
       yield put(getItemsLoading(true))
        const snapshot = yield call(firebaseGetItems);
       
        if(snapshot.docs){
            const items = snapshot.docs.map(doc => doc.data())
       
            yield put(getItemsSuccess(items))
            
        }else{
            toast.error("no food was found ");
        }
        yield put(getItemsLoading(false))
   } catch (err) {
       yield put(getItemsError(true))
   }
}



export default getItemsSaga;