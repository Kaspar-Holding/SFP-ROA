import React, {useState ,useEffect} from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import './styles/dashboard.css'
import {LogOut} from '../../Actions/Auth'
import { connect } from 'react-redux'

const Header = (props) => {
    const user = props.user
    const isAuthenticated = props.isAuthenticated
    const [userName, setUserName] = useState("")
    useEffect(() => {
        if (user){
        setUserName(user["first_name"] + " " + user["last_name"])
        }
    },[userName, isAuthenticated, user])
    return (
        <>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
                {
                    user ?
                    <NavLink to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    {/* <NavLink to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"> */}
                        {
                            user ?
                                user['email'].includes('sfp') || user['email'].includes('succession')? <span>Succession Financial Planning</span>
                                : user['email'].includes('fs4p') ? <span>Financial Solutions 4 Professionals</span>
                                : user['email'].includes('sanlam') ? <span>Aligned Financial Planning</span>
                                : <span>Succession Financial Planning</span>
                                : 
                            <>
                                <span>Web ROA</span>
                            </>
                        }
                    </NavLink>
                    :
                    <a href="#" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
                        Web ROA
                    </a>
                }

                <ul className="navbar-nav flex-row">
                    <li className="nav-item text-nowrap">
                        {
                            isAuthenticated ? 
                            <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white px-3" to="/profile">{userName}</NavLink>
                            : <NavLink className="nav-link px-3" to="/signin">Login</NavLink>
                        }
                    </li>
                </ul>

            </header>
            <div className="offcanvas offcanvas-start offcanvas-size-xxl" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <NavLink to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
                    {/* <NavLink to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"> */}
                        {
                            user ?
                                user['email'].includes('sfp') || user['email'].includes('succession')? <span>Succession Financial Planning</span>
                                : user['email'].includes('fs4p') ? <span>Financial Solutions 4 Professionals</span>
                                : user['email'].includes('sanlam') ? <span>Aligned Financial Planning</span>
                                : <span>Succession Financial Planning</span>
                                : 
                            <>
                                <span>Web ROA</span>
                            </>
                        }
                    </NavLink>

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item text-nowrap">
                            {
                                isAuthenticated ? 
                                <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white px-3" to="/profile">{userName}</NavLink>
                                : <NavLink className="nav-link px-3" to="/signin">Login</NavLink>
                            }
                        </li>
                    </ul>

                </header>
                <div className="offcanvas-body">
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <button type="button" className="btn btn-primary btn-lg" style={{width: '100%'}}>
                                    <div className='row'>
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <i style={{width: ''}} className="fa-solid fa-house"></i>
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-10'>
                                            Web ROA
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <button type="button" className="btn btn-primary btn-lg" style={{width: '100%'}}>
                                    <div className='row'>
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <i style={{width: ''}} className="fa-solid fa-house"></i>
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-10'>
                                            Compliance Management
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
  
export default connect(mapStateToProps, {LogOut})(Header)