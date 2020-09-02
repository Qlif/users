import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUsersPosts} from '../../redux/actions/actions'
import {Link} from 'react-router-dom';

function UserPosts(props) {
  const idUser = props.match.params.idUser
  const userPosts = useSelector(state => state.userPostsStore.userPosts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsersPosts(idUser));
  }, [dispatch,idUser]);

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
