import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actionTypes/types';
import * as workers from './usersWorkers';

export function* sagaWatcherUsers(){
  yield takeEvery(types.GET_USERS_CALL,workers.sagaWorkerUsers);
}