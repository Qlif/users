import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import * as api from '../../../api'

export function* sagaWorkerUserPosts(props){
  try {
    const payload = yield call(api.getFetchRequestToServer,`https://jsonplaceholder.typicode.com/posts?userId=${props.payload}`);
    yield put(actions.getUserPostsSuccess(payload));
  }catch (err){
    yield put(actions.getUserPostsFailure(err.message))
  }
}