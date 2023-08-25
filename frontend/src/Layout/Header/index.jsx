import React, {useState ,useEffect} from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import './styles/dashboard.css'
import {LogOut} from '../../Actions/Auth'
import { connect } from 'react-redux'

const Header = (props) => {
    const user = props.user
    const logout = e => {
        e.preventDefault()
        props.LogOut()
    }
    const isAuthenticated = props.isAuthenticated
    const [userName, setUserName] = useState("")
    useEffect(() => {
        if (user){
        setUserName(user["first_name"] + " " + user["last_name"])
        }
    },[userName, isAuthenticated, user])
    return (
        <>
            <div className="col-lg-2 col-md-12 col-sm-12">
                <div className="btn-group">
                    <button className="btn btn-primary btn-lg dropdown-toggle rounded-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {userName}
                    </button>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/profile" className="dropdown-item" href="#">Profile</NavLink></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#" onClick={e => logout(e)}>Sign Out</a></li>
                    </ul>
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