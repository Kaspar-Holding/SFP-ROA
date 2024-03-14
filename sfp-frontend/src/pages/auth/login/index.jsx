
import { login, reset_register_success } from '../../../actions/auth'
import Layout from '../../../hocs/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../hocs/Loader'
import Link from 'next/link'
import Swal from 'sweetalert2'
const LoginPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth.loading)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const [FormData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {
        email,
        password,
    } = FormData

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

    useEffect(() => {
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                reset_register_success()
            )
        }
    }, [])


    const onInputUpdate = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (emailValidation()) {
            if (dispatch && dispatch != null && dispatch != undefined) {
                dispatch(
                    login(email, password)
                )
            }
        }
    }

    if (typeof window != 'undefined' && isAuthenticated) {
        router.push('/')
    }

    return (
        <>
            <Layout
                title={ "Login Page" }
                content={ "Account Login Page" }
            >
                {
                    loading ?
                        <Loader color='sfp-color' />
                        :
                        <div className='updated-body'>
                            <form onSubmit={ e => onFormSubmit(e) } className="updated-form position-absolute top-35 start-50 translate-middle">
                                <div className="card rounded-5 shadow-lg bg-body-tertiary rounded">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">Login</h5>
                                        <p className="card-text updated-subtitle">Enter your details to get sign in to your account.</p>
                                        <br />
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label updated-email">Email</label>
                                            <input name="email" value={ email } onChange={ (e) => { onInputUpdate(e) } } type="email" className="form-control text-bg-light form-control-md" id="exampleFormControlInput1" placeholder="name@sfp.co.za" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label updated-email">Password</label>
                                            <input name="password" value={ password } onChange={ (e) => { onInputUpdate(e) } } type="password" className="form-control text-bg-light form-control-md" id="exampleFormControlInput2" placeholder="Password" />
                                        </div>
                                        <Link href="/auth/reset-password">
                                            <p className="card-text updated-text">Forget Password ?</p>
                                        </Link>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-sfp" type="submit">LOGIN</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="updated-footer position-absolute bottom-0 start-50 translate-middle text-light">
                                © SFP by KCS 2023
                            </div>
                        </div>
                }

            </Layout>
        </>
    )
}

export default LoginPage