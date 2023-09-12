
import { resetPasswordConfirm } from '@/actions/auth'
import Layout from '@/hocs/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '@/hocs/Loader'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
const ResetPasswordConfirmPage = () => {
    const router = useRouter()
    const {
        uid, 
        token
    } = router.query
    const dispatch = useDispatch()  
    const loading = useSelector(state=>state.auth.loading)
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const password_reset = useSelector(state=>state.auth.password_reset)
    
    const [FormData, setFormData] = useState({
        new_password : "",
        re_new_password : "",
    })

    const {
        new_password,
        re_new_password,
    } = FormData

    

    const onInputUpdate = (e) => {
        setFormData({
            ...FormData,
            [e.target.name] : e.target.value
        })
    }
    


    const onFormSubmit = (e) => {
        e.preventDefault()
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                resetPasswordConfirm(uid, token, new_password, re_new_password)
            )
        }
    }

    // validate token
    const validate = async () => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }

        const Body = JSON.stringify(router.query)
        
        try {

            await axios.post('/api/account/password/validateToken', Body, config)

            
            
        } catch (error) {

            
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `Link expired`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

            router.push('/auth/login')
        }

    } 

    useEffect(() => {
        if (uid && token) {
            validate()
        }
    }, [uid, token, validate])
    

    if (typeof window != 'undefined' && isAuthenticated) {
        router.push('/dashboard')
    }

    if (typeof window != 'undefined' && password_reset) {
        router.push('/auth/login')
    }

    

    return (
        <>
            <Layout
                title={"Reset Password Page"}
                content={"Reset Password"}
            >
                {
                    loading ? 
                    <Loader />
                    :
                    <div className='updated-body'>
                        <form onSubmit={e => onFormSubmit(e)} className="updated-form position-absolute top-35 start-50 translate-middle">
                            <div className="card rounded-5 shadow-lg bg-body-tertiary rounded">
                                <div className="card-body">
                                    <h5 className="card-title text-center updated-header">Reset Password</h5>
                                    <p className="card-text updated-subtitle">Enter new password.</p>
                                    <br/>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label updated-email">New Password</label>
                                        <input name="new_password" value={new_password} onChange={(e)=>{onInputUpdate(e)}} type="password" className="form-control text-bg-light form-control-md"  placeholder="New Password" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label updated-email">Confirm New Password</label>
                                        <input name="re_new_password" value={re_new_password} onChange={(e)=>{onInputUpdate(e)}} type="password" className="form-control text-bg-light form-control-md"  placeholder="Confirm New Password" />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary btn-sfp" type="submit">Update Password</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="updated-footer position-absolute bottom-0 start-50 translate-middle">
                            © SFP by KCS 2023
                        </div>
                    </div>
                }

            </Layout>
        </>
    )   
}

export default ResetPasswordConfirmPage