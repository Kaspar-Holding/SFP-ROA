import React, { useState, useEffect } from 'react'
import '../Style/signIn.css'
import { connect } from 'react-redux'
import { LoginUser } from '../../../Actions/Auth'
import Loader from '../../Loader/Loader'
import sfpLogo from './sfp-logo.png'
import axios from 'axios'
import { NavLink, Navigate, useSearchParams } from 'react-router-dom'
import { resetPasswordConfirm } from '../../../Actions/Auth'
import Swal from 'sweetalert2'

const ResetPasswordConfirm = ({ resetPasswordConfirm, isAuthenticated }) => {
    const [LoadingVisibility, setLoadingVisibility] = useState("none")
    const [dataVisibility, setDataVisibility] = useState("block")
    const [RequestSent, setRequestSent] = useState(false)
    const [FormData, setFormData] = useState({
        new_password: "",
        re_new_password: ""
    })

    const [searchParams, setSearchParams] = useSearchParams()
    const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })
    const { new_password, re_new_password } = FormData


    const validateToken = async (uid, token) => {
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": "csrfToken"
            }
        }
        const Body = JSON.stringify({
            "uid": uid,
            "token": token
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/email/validateUIDToken/`, Body, config)
            console.log(response)
        } catch (error) {

        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const uid = searchParams.get("uid")
        const token = searchParams.get("token")
        if (new_password == re_new_password) {
            const response = await resetPasswordConfirm(uid, token, new_password, re_new_password)
            if (response.status === 400) {
                if (response.data['new_password']) {
                    Swal.fire({
                        position: "bottom-end",
                        type: "error",
                        title: `API Error`,
                        html: `${response.data['new_password']}`,
                        showConfirmButton: !1,
                        timer: 10000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                }
                if (response.data['token']) {

                    Swal.fire({
                        position: "bottom-end",
                        type: "error",
                        title: `Expired Token`,
                        html: `${response.data['token']}`,
                        showConfirmButton: !1,
                        timer: 10000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                }
            }

            // console.log(response)
        } else {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: `Error`,
                html: `Passwords don't match`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }

        // setResponse(LoginUser(FormData))
        // console.log(response)
        // window.location.reload();
    }
    useEffect(() => {
        const uid = searchParams.get("uid")
        const token = searchParams.get("token")
        validateToken(uid, token)
    }, [])
    if (RequestSent) {
        return <Navigate to='/signin' />
    }

    if (isAuthenticated === true) {
        return <Navigate to='/' />
    }
    return (
        <div className="">
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
                            <h5 className="card-title text-center updated-header">Reset Password</h5>
                            <p className="card-text updated-subtitle">Enter new password.</p>
                            <br />
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label updated-email">New Password</label>
                                <input name="new_password" value={ new_password } onChange={ (e) => { onChange(e) } } type="password" className="form-control text-bg-light form-control-md" placeholder="New Password" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label updated-email">Confirm New Password</label>
                                <input name="re_new_password" value={ re_new_password } onChange={ (e) => { onChange(e) } } type="password" className="form-control text-bg-light form-control-md" placeholder="Confirm New Password" />
                            </div>
                            <NavLink to="/signin">
                                <p className="card-text updated-text">Login ?
                                </p>
                            </NavLink>
                            <br />
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary btn-sfp" type="submit">Reset Password</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, { resetPasswordConfirm })(ResetPasswordConfirm)