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
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a href="#" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
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
            </a>
            {/* <div className="offcanvas offcanvas-start offcanvas-size-xxl" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <button type="button" class="btn btn-primary btn-lg">
                                    <i style={{width: ''}} className="fa-solid fa-house"></i>
                                    Web ROA
                                </button>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <button type="button" class="btn btn-primary btn-lg">
                                    <i style={{width: ''}} className="fa-solid fa-house"></i>
                                    Compliance Management
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <ul className="navbar-nav flex-row">
                <li className="nav-item text-nowrap">
                    {
                        isAuthenticated ? 
                        <NavLink className="nav-link px-3" to="/profile">{userName}</NavLink>
                        : <NavLink className="nav-link px-3" to="/signin">Login</NavLink>
                    }
                </li>
            </ul>

        </header>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
  
export default connect(mapStateToProps, {LogOut})(Header)