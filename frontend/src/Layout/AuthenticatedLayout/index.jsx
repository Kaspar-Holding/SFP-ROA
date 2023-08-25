import React from 'react'
import { connect } from 'react-redux'
import '../Styles/v2.css'
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../Header'

const AuthenticatedLayout = (props) => {
	const location = useLocation()
    const navigate = useNavigate()
    const user = props.user
    if(props.isAuthenticated === false || props.isAuthenticated === null){
        return <Navigate to="/signin" />
    }
    return (
        <>
            <div className="updated-body">    
                {
                    location.pathname != "/createform" && location.pathname != "/completeform" ?
                    <>
                        <div className="row row2">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <NavLink to="/">
                                    <img 
                                        src={
                                            user ? user['email'].includes('sfp') || user['email'].includes('succession')? `${process.env.REACT_APP_BACKEND_URL}/media/logo.png` 
                                            : user['email'].includes('fs4p') ? `${process.env.REACT_APP_BACKEND_URL}/media/fs4p_logo.jpg` 
                                            : user['email'].includes('sanlam') ? `${process.env.REACT_APP_BACKEND_URL}/media/afp_logo.png` 
                                            : `${process.env.REACT_APP_BACKEND_URL}/media/logo.png`  : ""
                                        }
                                        className={
                                            user ? user['email'].includes('sfp') || user['email'].includes('succession')? "updated-logo sfp-logo"
                                            : user['email'].includes('fs4p') ? "updated-logo fs4p-logo"
                                            : user['email'].includes('sanlam') ? "updated-logo sanlam-logo"
                                            : "updated-logo sfp-logo" : ""
                                        }
                                    />
                                </NavLink>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                            </div>
                            {
                                props.isAuthenticated ?
                                <Header />
                                : <></>
                            }
                        </div>
                        {
                            location.pathname != "/" ?
                            <div className={location.pathname === "/web-roa" || location.pathname === "/compliance" || location.pathname === "/users"  ? 'position-absolute back-btn-app' : 'position-absolute back-btn my-2'}>
                                {
                                    location.pathname != "/web-roa" && location.pathname != "/compliance" && location.pathname != "/users"  ?
                                    <div className='row' onClick={()=> {navigate(-1)}}>
                                        <div className='col-3'>
                                            <button type="button" className="btn btn-light btn-lg rounded-5 back-btn">
                                                <i class="fa-solid fa-arrow-left"></i>
                                            </button>
                                        </div>
                                        <div className='col-1'>
                                        </div>
                                        <div className='col-6 my-1'>
                                            <span className=' translate-middle back-text'>Back</span>
                                        </div>
                                    </div>

                                    :
                                    <NavLink to="/">
                                        <div className='row'>
                                            <div className='col-3'>
                                                <button type="button" className="btn btn-light btn-lg rounded-5 back-btn">
                                                    <i class="fa-solid fa-arrow-left"></i>
                                                </button>
                                            </div>
                                            <div className='col-1'>
                                            </div>
                                            <div className='col-6 my-1'>
                                                <span className=' translate-middle back-text'>Apps</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                }
                            </div>
                            : <></>
                        }
                    </>
                    : <></>
                }        
                <br/>
                <Outlet />
                {
                    location.pathname != "/createform" && location.pathname != "/completeform" ?
                    <div className="updated-footer position-absolute bottom-0 start-50 translate-middle">
                        © SFP by KCS 2023
                    </div>
                    : <></>
                }
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
  
export default connect(mapStateToProps, {})(AuthenticatedLayout)