import React from 'react'
import { connect } from 'react-redux'
import '../Styles/v2.css'
import { Navigate, Outlet } from 'react-router-dom'

const LayoutUpdated = ({isAuthenticated}) => {
    if(isAuthenticated === true){
        return <Navigate to="/" />
    }
    return (
        <>
            <div className="updated-body">            
                <div className="row row2">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className='updated-logo' src={`${process.env.REACT_APP_BACKEND_URL}/media/logo.png`}/>
                    </div>
                    <div className="col-lg-4">
                    </div>
                    {
                        isAuthenticated ?
                        <div className="col-lg-2 col-md-12 col-sm-12">
                            <div className="btn-group">
                                <button className="btn btn-primary btn-lg dropdown-toggle rounded-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    User 123
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                        : <></>
                    }
                </div>
                <Outlet />
                <div className="updated-footer position-absolute bottom-0 start-50 translate-middle">
                    © SFP by KCS 2023
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps)(LayoutUpdated)