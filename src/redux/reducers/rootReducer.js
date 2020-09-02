import {combineReducers} from 'redux';
import {usersReducer} from './usersReducer';
import {usersPostReducer} from './userPostReducer'

export const rootReducer = combineReducers({
  usersStore: usersReducer,
  userPostsStore: usersPostReducer
})
