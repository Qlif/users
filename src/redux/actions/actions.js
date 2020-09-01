import * as type from '../actionTypes/types';

export function setUsers(payload){
  return async dispach =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    dispach({type: type.SET_USERS, payload: json})
  }
}

