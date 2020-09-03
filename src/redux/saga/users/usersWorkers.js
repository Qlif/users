import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../../../api'

export function* sagaWorkerUsers(){
  try {
    const payload = yield call(api.getFetchRequestToServer,'https://jsonplaceholder.typicode.com/users')
    yield put(actions.getUsersSuccess(payload));
  }catch (err){
    yield put(actions.getUsersFailure(err.message))
  }

}