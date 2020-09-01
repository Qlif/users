import React, {useEffect} from 'react';
import UserInfo from './UserInfo';
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../redux/actions/actions'

const  Users = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(action.setUsers());
  },[dispatch]);

  const users = useSelector(state => state.users.users);

  let content;
  if(!users.length){
     content = <div className="row"><h2>Server not available</h2></div>;
  }else{
    content = users.map(user => {
        return <UserInfo
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          key={user.id}
        />
      });
  }
  return (content)
}

export default Users;
