import React, {useEffect} from 'react';
import UserInfo from './UserInfo';
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../redux/actions/actions'
import {usersSelector} from '../../selectors/selectors';

const  Users = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(action.getUsersCall());
  },[dispatch]);

  const users = useSelector(usersSelector);

  let content;
  if(!users.length){
     content = <div className="row"><h2>Server not available</h2></div>;
  }else{
    content = users.map(user => {
      return<UserInfo
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              key={user.id}
            />
    });
  }
  return content
}

export default Users;
