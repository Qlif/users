import * as type from '../actionTypes/types';

const initialState = {
  userPosts:[]
};

export const usersPostReducer = (state = initialState, action)=>{
  switch (action.type){
    case type.SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload
      }
    default: return state
  }
};
