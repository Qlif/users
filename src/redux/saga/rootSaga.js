import {all} from 'redux-saga/effects'
import * as usersSaga from './users/usersWathers';
import * as userPostsSaga from './userPost/userPostsWatchers';

export function* rootSaga(){
  yield all([
    //Users
    usersSaga.sagaWatcherUsers(),
    //UsersPost
    userPostsSaga.sagaWatcherUserPost(),

  ])
}
