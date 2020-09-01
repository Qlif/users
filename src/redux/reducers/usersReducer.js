import * as type from '../actionTypes/types';

const initialState = {
  users:[],
  userPosts:[]
};

export const usersReducer = (state = initialState, action)=>{
  switch (action.type){
    case type.SET_USERS:
      return {
        ...state,
        users: action.payload
      }
      case type.SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload
      }
    default: return state
  }
};