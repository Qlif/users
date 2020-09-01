import * as type from '../actionTypes/types';

export function setUsers(){
  return async dispach =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    dispach({type: type.SET_USERS, payload: json})
  }
}
export function setUsersPosts(id){
  return async dispach =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const json = await response.json()
    dispach({type: type.SET_USER_POSTS, payload: json})
  }
}

