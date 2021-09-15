/* eslint-disable jsx-a11y/alt-text */
import './Card.css';

import React from 'react';
import { Link } from 'react-router-dom';

function CardTwo({user, height}) {
  const backgroundUrl = `https://picsum.photos/200/120?random=${user.id}`;
  const avatarUrl = `https://i.pravatar.cc/300?u=${user.id}`;
  // console.log(width)
  return (
    <Link className="card card-profile-card text-center" to={`/profile/${user.id}`} style={{ height:`${height-10}px`, borderRadius:'20px'}} >
      <img className="card-img-top" src={backgroundUrl} style={{ borderRadius:'20px' }}/>
      <div className="card-block">
          <div className="image-wrapper">
            <img className="card-img-profile" src={avatarUrl} />
          </div>
        <h4 className="card-title">
          {user.name}
          <span className="card-occupation"><small>{user.occupation}</small></span>
        </h4>
      </div>
    </Link>
  );
}

export default CardTwo;
