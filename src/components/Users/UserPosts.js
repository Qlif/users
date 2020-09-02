import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUsersPosts} from '../../redux/actions/actions'
import {Link, useParams} from 'react-router-dom';

function UserPosts() {
  let {idUser} = useParams();

  const userPosts = useSelector(state => state.usersStore.userPosts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsersPosts(idUser));
  }, [dispatch]);

  let content;
  if (!userPosts) {
    content = <div className="row"><h2>Server not available</h2></div>;
  } else {
    content = <>
      <div className="row"><Link to="/">Back</Link></div>
      {userPosts.map(post => {
        return (
          <div className="row" key={post.id}>
            <div className="col">{post.id}</div>
            <div className="col">{post.title}</div>
            <div className="col">{post.body}</div>
          </div>
        );
      })
      }
    </>
  }
  return (content);
}

export default UserPosts;
