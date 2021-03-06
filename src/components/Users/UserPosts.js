import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserPostsCall} from '../../redux/actions/actions'
import {Link} from 'react-router-dom';
import {usersPostSelector} from '../../selectors/userPostsSelector';

function UserPosts(props) {
  const idUser = props.match.params.idUser
  const userPosts = useSelector(usersPostSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPostsCall(idUser));
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
