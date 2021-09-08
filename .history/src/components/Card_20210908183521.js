import './Card.css';

import React from 'react'

function Card() {
    return (
        <div className="col-xs-12 col-sm-3 py-2 clearfix">
        <div className="card profile-card">
          <figure>
            <img src="http://cps-static.rovicorp.com/3/JPG_400/MI0003/711/MI0003711195.jpg?partner=allrovi.com" className="img-fluid img-profile" alt="Card image" />
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
