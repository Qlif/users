import * as type from '../actionTypes/types';

const initialState = {
  userPosts:[]
};

export const userPostsReducer = (state = initialState, action)=>{
  switch (action.type){
    case type.GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload
      }
    default: return state
  }
};
