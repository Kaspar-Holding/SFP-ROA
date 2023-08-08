import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Styles/Sidebar.css'
import {LogOut} from '../../Actions/Auth'

const Sidebar = ({LogOut, isAuthenticated, user}) => {
    
    const logout = e => {
        e.preventDefault()
        LogOut()
    }
    // console.log(isAuthenticated)
    const [userData, setUserData] = useState()
    const [isSuperuser, setIsSuperuser] = useState("")
    useEffect(() => {
        if (user) {
            setIsSuperuser(user["is_superuser"])
        }
    },[isSuperuser,isAuthenticated, user]);
    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary py-5">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="sidebarMenuLabel">
                        
                    </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink 
                                className={
                                    user ? user['email'].includes('sfp') || user['email'].includes('succession')? "nav-link sfp-nav-link" 
                                    : user['email'].includes('fs4p') ? "nav-link fs4p-nav-link" 
                                    : user['email'].includes('sanlam') ? "nav-link sanlam-nav-link" 
                                    : "nav-link ": "nav-link "
                                }   
                                aria-current="page" 
                                exact
                                to="/"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={
                                    user ? user['email'].includes('sfp') || user['email'].includes('succession')? "nav-link sfp-nav-link" 
                                    : user['email'].includes('fs4p') ? "nav-link fs4p-nav-link" 
                                    : user['email'].includes('sanlam') ? "nav-link sanlam-nav-link" 
                                    : "nav-link ": "nav-link "
                                }  
                                to="/createform"
                            >
                                Create Form
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={
                                    user ? user['email'].includes('sfp') || user['email'].includes('succession')? "nav-link sfp-nav-link" 
                                    : user['email'].includes('fs4p') ? "nav-link fs4p-nav-link" 
                                    : user['email'].includes('sanlam') ? "nav-link sanlam-nav-link" 
                                    : "nav-link ": "nav-link "
                                } 
                                to="/importexport"
                            >
                            <span data-feather="file"></span>
                                Import/Export
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink 
                                className={
                                    user ? user['email'].includes('sfp') || user['email'].includes('succession')? "nav-link sfp-nav-link" 
                                    : user['email'].includes('fs4p') ? "nav-link fs4p-nav-link" 
                                    : user['email'].includes('sanlam') ? "nav-link sanlam-nav-link" 
                                    : "nav-link ": "nav-link "
                                } 
                                to="/apps"
                            >
                            <span data-feather="file"></span>
                                Apps
                            </NavLink>
                        </li> */}
                        {
                            isSuperuser == true ?
                                <li className="nav-item">
                                    <NavLink 
                                        className={
                                            user ? user['email'].includes('sfp') || user['email'].includes('succession')? "nav-link sfp-nav-link" 
                                            : user['email'].includes('fs4p') ? "nav-link fs4p-nav-link" 
                                            : user['email'].includes('sanlam') ? "nav-link sanlam-nav-link" 
                                            : "nav-link ": "nav-link "
                                        } 
                                        to="/users"
                                    >
                                    <span data-feather="file"></span>
                                        User Management
                                    </NavLink>
                                </li>
                                
                            : <></>
                        }
                        <hr/>
                        <li className="nav-item">
                            <a className="nav-link" onClick={e => logout(e)} href="#">
                            <span data-feather="layers"></span>
                                Sign Out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
export default connect(mapStateToProps, {LogOut})(Sidebar)
