import "./Card.css";
import { Link } from "react-router-dom";

import React from "react";

function Card({ user }) {
  // const backgroundUrl = `https://picsum.photos/200/300?random=${user.id}`
  const avatarUrl = `https://i.pravatar.cc/300?u=${user.id}`;
  return (
    <>
        <Link className="col-xs-12 col-sm-3 py-2 clearfix" to={`/profile/${user.id}`}>
      
          <Link className="card profile-card">
            <figure>
              <img
                src={avatarUrl}
                className="img-fluid img-profile"
                alt="Card image"
              />
            </figure>
            <div className="card-block text-xs-center">
              <p className="h4 card-title font-weight-bold">{user.name}</p>
              <p className="h6 card-subtitle text-muted">{user.occupation}</p>
              <br />
            </div>
          </Link>
      
    </>
  );
}

export default Card;
