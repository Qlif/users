import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUsersPosts} from '../../redux/actions/actions'

function UserPosts({idUser=1}){
  const userPosts = useSelector(state =>state.usersStore.userPosts)
  const dispatch= useDispatch();
  dispatch(setUsersPosts(idUser));

  let content;
  if(!userPosts){
    content = <div className="row"><h2>Server not available</h2></div>;
  }else {
    content = userPosts.map(post =>{
      return(
        <div className="row">
          <div className="col">{post.id}</div>
          <div className="col">{post.title}</div>
          <div className="col">{post.body}</div>
        </div>
      );
    })
  }
  return(content);
}

export default UserPosts;
