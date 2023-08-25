import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Apps = (props) => {
    const user = props.user
    return (
        <div className=''>
            <Helmet>
                <title>Apps</title>
            </Helmet>
            <div className="updated-dashboard position-absolute my-5 start-50 translate-middle">
                <div className="card rounded-5">
                    <div className="card-body">
                        <h5 className="card-title text-center updated-header">Welcome, {user ? user.first_name : "User"}</h5>
                        <p className="card-text updated-subtitle">Select an App to start your work.</p>
                        <br/>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-chart-simple"></i></h5>
                                        <p className="card-text text-center">
                                            <a href="#" className="card-text stretched-link">Insights</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-clipboard"></i></h5>
                                        <p className="card-text text-center">
                                            <NavLink to="/web-roa" className="card-text stretched-link">Web ROA</NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-check-double"></i></h5>
                                        <p className="card-text text-center">
                                            <NavLink to="/compliance" className="card-text stretched-link">Compliance</NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-users"></i></h5>
                                        <p className="card-text text-center">
                                            <NavLink to="/users" className="card-text stretched-link">Users</NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-paperclip"></i></h5>
                                        <p className="card-text text-center">
                                            <a href="#" className="card-text stretched-link">Import Export</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-gear"></i></h5>
                                        <p className="card-text text-center">
                                            <a href="#" className="card-text stretched-link">Settings</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-user"></i></h5>
                                        <p className="card-text text-center">
                                            <NavLink to="/profile" className="card-text stretched-link">User Profile</NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 shadow app p-1 mb-1 bg-body-light rounded-4">
                                <div className="card bg-body-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><i className="fa-solid fa-right-from-bracket"></i></h5>
                                        <p className="card-text text-center">
                                            <a href="#" className="card-text stretched-link">Logout</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
  
export default connect(mapStateToProps, {})(Apps)