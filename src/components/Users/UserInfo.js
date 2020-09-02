//Core
import React from 'react';
import {Link } from 'react-router-dom';

function UserInfo({id, name, username, email}) {

  return (
    <div className="row">
      <div className="col-sm">{id}</div>
      <div className="col-sm"><Link to={`/userposts/${id}`}>{name}</Link></div>
      <div className="col-sm">{username}</div>
      <div className="col-sm">{email}</div>
    </div>
  );
}

export default UserInfo;
