
import { login, resetPasswordRequest, reset_register_success } from '../../../actions/auth'
import Layout from '../../../hocs/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../hocs/Loader'
import Link from 'next/link'
const ResetPasswordPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth.loading)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const reset_email_sent = useSelector(state => state.auth.reset_email_sent)

    const [FormData, setFormData] = useState({
        email: "",
    })

    const {
        email,
    } = FormData



    const onInputUpdate = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }


    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(email) === false) {
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


    const onFormSubmit = (e) => {
        e.preventDefault()
        if (emailValidation()) {
            if (dispatch && dispatch != null && dispatch != undefined) {
                dispatch(
                    resetPasswordRequest(email)
                )
            }
        }
    }

    if (typeof window != 'undefined' && isAuthenticated) {
        router.push('/dashboard')
    }

    if (typeof window != 'undefined' && reset_email_sent) {
        router.push('/auth/login')
    }



    return (
        <>
            <Layout
                title={ "Reset Password Page" }
                content={ "Reset Password" }
            >
                {
                    loading ?
                        <Loader />
                        :
                        <div className='updated-body'>
                            <form onSubmit={ e => onFormSubmit(e) } className="updated-form position-absolute top-35 start-50 translate-middle">
                                <div className="card rounded-5 shadow-lg bg-body-tertiary rounded">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">Request Password Reset</h5>
                                        <p className="card-text updated-subtitle">Enter your email for password reset.</p>
                                        <br />
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label updated-email">Email</label>
                                            <input name="email" value={ email } onChange={ (e) => { onInputUpdate(e) } } type="email" className="form-control text-bg-light form-control-md" id="exampleFormControlInput1" placeholder="name@sfp.co.za" />
                                        </div>
                                        <Link href="/auth/login">
                                            <p className="card-text updated-text">Login?</p>
                                        </Link>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary btn-sfp" type="submit">Reset Password</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="updated-footer text-light position-absolute bottom-0 start-50 translate-middle">
                                © SFP by KCS 2023
                            </div>
                        </div>
                }

            </Layout>
        </>
    )
}

export default ResetPasswordPage