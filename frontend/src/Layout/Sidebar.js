import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Styles/Sidebar.css'
import {LogOut} from '../Actions/Auth'

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
    <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                <span data-feather="home"></span>
                Dashboard
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/createform">
                <span data-feather="file"></span>
                Create Form
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/print">
                <span data-feather="file"></span>
                Print
                </NavLink>
            </li>
            {
                isSuperuser == true ?
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">
                        <span data-feather="file"></span>
                        User Management
                        </NavLink>
                    </li>
                : <></>
            }
            {/* <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="shopping-cart"></span>
                Products
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="users"></span>
                Customers
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
                </a>
            </li> */}
            <hr/>
            <li className="nav-item">
                <a className="nav-link" onClick={e => logout(e)} href="#">
                <span data-feather="layers"></span>
                    Sign Out
                </a>
            </li>
            </ul>

            {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a className="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul className="nav flex-column mb-2">
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Last quarter
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
                </a>
            </li>
            </ul> */}
        </div>
        </nav>
    </div>
  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
  })
export default connect(mapStateToProps, {LogOut})(Sidebar)
