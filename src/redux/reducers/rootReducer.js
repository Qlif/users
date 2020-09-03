import {combineReducers} from 'redux';
import {usersReducer} from './usersReducer';
import {userPostsReducer} from './userPostsReducer'

export const rootReducer = combineReducers({
  usersStore: usersReducer,
  userPostsStore: userPostsReducer
})
