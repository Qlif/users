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

export function getUsersFailure(){
  return{
    type: type.GET_USERS_FAILURE,
  }
}

export function getUserPostsCall(id){
  return {
    type: type.GET_USER_POSTS_CALL,
    payload: id
  }
}

export function getUserPostsSuccess(users){
  return{
    type: type.GET_USERS_SUCCESS,
    payload: users
  }
}

export function getUserPostsFailure(){
  return{
    type: type.GET_USER_POSTS_FAILURE,
  }
}

