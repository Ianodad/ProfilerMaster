import React from 'react'



const Menu = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="#">CAR DEALER</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto topnav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop Pre-Owned</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop New Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Clearence Event</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Carfax</a>
                <a className="dropdown-item" href="#">Carproof</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Omnivic</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-white" type="button" href="#" data-toggle="modal" data-target="#myModal">Sign In</a>                  
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-danger text-white" type="button" href="#" data-toggle="modal" data-target="#myModal">Register</a>
            </li>
          </ul>
        </div>
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Customer Sign In</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form>
                  <label className="sr-only" htmlFor="usrname">Username</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <label className="sr-only" htmlFor="Password">Name</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon2"><i className="fa fa-key" /></span>
                    </div>
                    <input id="Password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                  </div>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Sign In</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </nav>   
        </>
    )
}

export default Menu
