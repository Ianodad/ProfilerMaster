import React from 'react'
import './ProfileCard.css'

const ProfileCard=()=> {
    return (
        <div className="row">
        <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" className="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" className="btn btn-sm btn-default float-right">Message</a>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">

                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Jessica Jones<span className="font-weight-light">, 27</span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2" />Bucharest, Romania
                </div>
                <div>
                  <i className="ni education_hat mr-2" />University of Computer Science
                </div>
                <hr className="my-4" />
                <p>Bio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileCard
