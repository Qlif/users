import {takeEvery, put, call} from 'redux-saga/effects';
import * as types from '../actionTypes/types';

export function* sagaWatcher(){
  yield takeEvery(types.GET_USERS_CALL,sagaWorkerUsers);
  yield takeEvery(types.GET_USER_POSTS_CALL,sagaWorkerUserPosts)
}

function* sagaWorkerUsers(){
  try {
    const payload = yield call(getFetchRequestToServer,'https://jsonplaceholder.typicode.com/users');
    yield put({type: types.GET_USERS_SUCCESS, payload:payload});
  }catch (err){
    console.log(err)
    yield put({type:types.GET_USERS_FAILURE})
  }

}

function* sagaWorkerUserPosts(props){
  try {
    const payload = yield call(getFetchRequestToServer,`https://jsonplaceholder.typicode.com/posts?userId=${props.payload}`);
    yield put({type: types.GET_USER_POSTS_SUCCESS, payload:payload});
  }catch (err){
    console.log(err)
    yield put({type:types.GET_USER_POSTS_FAILURE})
  }

}

async function getFetchRequestToServer(url){
  const response = await fetch(url);
  return await response.json();
}

// function sagaWorker(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(users => put({type: GET_USERS_SUCCESS, payload:users}))
//     .catch(er=> put({type:GET_USERS_FAILURE}))
// }