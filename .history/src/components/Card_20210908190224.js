import './Card.css';

import React from 'react'

function Card({user}) {
    const avatarUrl = `https://picsum.photos/200/300?random=${user.id}`
    return (
        <div className="col-xs-12 col-sm-3 py-2 clearfix">
        <div className="card profile-card">
          <figure>
            <img src={avatarUrl} className="img-fluid img-profile" alt="Card image" />
          </figure>
          <div className="card-block text-xs-center">
            <p className="h4 card-title font-weight-bold">{user.name}</p>
            <p className="h6 card-subtitle text-muted">{}</p><br />
          </div>
        </div>
      </div>
    )
}

export default Card
