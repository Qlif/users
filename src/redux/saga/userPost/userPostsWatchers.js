import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actionTypes/types';
import * as workers from './userPostsWorkers'

export function* sagaWatcherUserPost(){
  yield takeEvery(types.GET_USER_POSTS_CALL,workers.sagaWorkerUserPosts)
}