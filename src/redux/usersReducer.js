import * as type from './types';

const initialState = {
  users:[]
};

export const usersReducer = (state = initialState, action)=>{
  switch (action.type){
    case type.SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    default: return state
  }
};