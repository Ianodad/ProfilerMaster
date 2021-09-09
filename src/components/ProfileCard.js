/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './ProfileCard.css';

import React from 'react';
import { Link, useHistory} from 'react-router-dom';

const ProfileCard = ({ user }) => {
  const history = useHistory();

  const dayLapse = (date1, date2) => {
    console.log(date1);
    const oneDay = 24 * 60 * 60 * 1000;
    const date1InMillis = date1.getTime();
    const date2InMillis = date2.getTime();
    const days = Math.round(Math.abs(date2InMillis - date1InMillis) / oneDay);
    return days;
  };

  const avatarUrl = `https://i.pravatar.cc/300?u=${user.id}`;

  return (
    <div className="row profile-card">
      <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
        <div className="card card-profile shadow">
          <div className="row justify-content-center">
            <div className="col-lg-3 order-lg-2">
              <div className="card-profile-image">
                <a href="#">
                  <img src={avatarUrl} className="rounded-circle" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-sm btn-info mr-4" onClick={() => {
                    history.goBack();
                }}>
                Back
              </a>
              <Link to={`/edit/${user.id}`}>
                <a href="#" className="btn btn-sm btn-default float-right">
                  Edit
                </a>
              </Link>
            </div>
          </div>
          <div className="card-body pt-0 pt-md-4">
            <div className="text-center mt-md-4">
              <h3 className="profile-car-name">
                {user.name}
              </h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {user.email}
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                {user.occupation}
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                Added {dayLapse(new Date(user.created_at), new Date())}{' '}
              </div>
              <hr className="my-2" />
              <p>{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
