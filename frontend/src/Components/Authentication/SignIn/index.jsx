import React, { useState } from 'react'
import '../Style/signIn.css'
import { connect } from 'react-redux'
import { LoginUser } from '../../../Actions/Auth'
import Loader from '../../Loader/Loader'
import sfpLogo from './sfp-logo.png'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const SignIn = ({ LoginUser, isAuthenticated }) => {

    const [LoadingVisibility, setLoadingVisibility] = useState("none")
    const [dataVisibility, setDataVisibility] = useState("block")
    const [FormData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {
        email, password
    } = FormData

    const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })
    // console.log(FormData)

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(FormData['email']) === false) {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Email Validity",
                html: `Email is not valid, Please enter a valid email`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
            return false
        }
        return true
    }
    const validUser = async (status) => {

        setLoadingVisibility("block")
        setDataVisibility("none")

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const Body = JSON.stringify(FormData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/jwt/create/`, Body, config)
            // console.log(response.data['code'])
            LoginUser(FormData)
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: `Error: ${error.response.status}`,
                html: `${error.response.data.detail}`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
        setLoadingVisibility("none")
        setDataVisibility("block")


    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (emailValidation()) {
            validUser()
        }

        // setResponse(LoginUser(FormData))
        // console.log(response)
        // window.location.reload();
    }
    const continueWithAzureAD = async (e) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/o/azuread-oauth2/?redirect_uri=http://localhost:8000`)
            window.location.replace(response.data.authorization_url)
        } catch (error) {
        }

    }
    const continueWithGoogleOAuth = async (e) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000`)
            window.location.replace(response.data.authorization_url)
        } catch (error) { }

    }
    const continueWithMicrosoft = (e) => {
        localStorage.setItem('authType', 'microsoft')
        continueWithAzureAD(e)
    }
    const continueWithGoogle = (e) => {
        localStorage.setItem('authType', 'google')
        continueWithGoogleOAuth(e)
    }
    if (isAuthenticated === true) {
        return <Navigate to='/' />
    }
    return (
        <>
            <div style={ { display: LoadingVisibility } }>
                user?.email?.includes('sfp') || user?.email?.includes('succession') ? <Loader color='sfp-color' />
                : user?.email?.includes('fs4p') ? <Loader color='fs4p-color' />
                : user?.email?.includes('sanlam') ? <Loader color='sfp-sanlam' />
                : <Loader color='sfp-color' />
            </div>
            <div style={ { display: dataVisibility } } >
                <form onSubmit={ e => onSubmit(e) } className="updated-form position-absolute top-35 start-50 translate-middle">
                    <div className="card rounded-5">
                        <div className="card-body">
                            <h5 className="card-title text-center updated-header">Login</h5>
                            <p className="card-text updated-subtitle">Enter your details to get sign in to your account.</p>
                            <br />
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label updated-email">Email</label>
                                <input name="email" value={ email } onChange={ (e) => { onChange(e) } } type="email" className="form-control text-bg-light form-control-md" id="exampleFormControlInput1" placeholder="name@sfp.co.za" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label updated-email">Password</label>
                                <input name="password" value={ password } onChange={ (e) => { onChange(e) } } type="password" className="form-control text-bg-light form-control-md" id="exampleFormControlInput2" placeholder="Password" />
                            </div>
                            <NavLink to="/reset-password">
                                <p className="card-text updated-text">Forget Password ?
                                </p>
                            </NavLink>
                            <br />
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary btn-sfp" type="submit">LOGIN</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, { LoginUser })(SignIn)