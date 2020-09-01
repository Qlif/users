import React, {useLayoutEffect} from 'react';
import UserInfo from './UserInfo';
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../redux/actions/actions'

const  Users = () => {
  const dispach = useDispatch();
  useLayoutEffect(()=>{
    dispach(action.setUsers());
  },[dispach]);

  const users = useSelector(state => state.users.users);

  if(!users.length){
    return( <div className="row">
      <h2>Server not available</h2>
    </div>
    )
  }

  return (
    users.map(user => {
      return <UserInfo
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        key={user.id}
      />
    })
  )
}

export default Users;
