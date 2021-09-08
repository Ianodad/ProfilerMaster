import './Card.css';

import React from 'react'

function Card({user}) {
    const avatarUrl = `https://i.pravatar.cc/150?img=${}`
    return (
        <div className="col-xs-12 col-sm-3 py-2 clearfix">
        <div className="card profile-card">
          <figure>
            <img src="https://i.pravatar.cc/150?img=" className="img-fluid img-profile" alt="Card image" />
          </figure>
          <div className="card-block text-xs-center">
            <p className="h4 card-title font-weight-bold">John DOe</p>
            <p className="h6 card-subtitle text-muted">Worker</p><br />
          </div>
        </div>
      </div>
    )
}

export default Card
