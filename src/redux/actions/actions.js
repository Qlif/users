import * as type from '../actionTypes/types';

export function getUsersCall(){
  return {
    type:type.GET_USERS_CALL
  }
}

export function getUsersSuccess(users){
  return{
    type: type.GET_USERS_SUCCESS,
    payload: users
  }
}

export function getUsersFailure(err){
  return{
    type: type.GET_USERS_FAILURE,
    payload: err
  }
}

export function getUserPostsCall(id){
  return {
    type: type.GET_USER_POSTS_CALL,
    payload: id
  }
}

export function getUserPostsSuccess(posts){
  return{
    type: type.GET_USER_POSTS_SUCCESS,
    payload: posts
  }
}

export function getUserPostsFailure(err){
  return{
    type: type.GET_USER_POSTS_FAILURE,
    payload: err
  }
}

