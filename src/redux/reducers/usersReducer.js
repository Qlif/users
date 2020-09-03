import * as type from '../actionTypes/types';

const initialState = {
  users:[],
};

export const usersReducer = (state = initialState, action)=>{
  switch (action.type){
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    default: return state
  }
};