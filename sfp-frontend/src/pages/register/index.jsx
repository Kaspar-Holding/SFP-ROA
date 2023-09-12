import { register } from '@/actions/auth'
import Layout from '@/hocs/Layout'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RegisterPage = () => {
    const dispatch = useDispatch()
    const register_success = useSelector(state=>state.auth.register_success)
    const loading = useSelector(state=>state.auth.loading)
    const router = useRouter()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    
    const [FormData, setFormData] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        re_password : "",
    })

    const {
        first_name,
        last_name,
        email,
        password,
        re_password
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
                register(
                    first_name,
                    last_name,
                    email,
                    password,
                    re_password
                )
            )
        }
    }

    if (typeof window != 'undefined' && isAuthenticated) {
        router.push('/dashboard')
    }
    else {
        router.push('/login')
    }

    return (
        <>
            <Layout
                title={"Register Page"}
                content={"Account Registration Page"}
            >
                <div className='container'>
                    <h1 className='display-4'>Account Registration</h1>
                    <form onSubmit={(e)=>{onFormSubmit(e)}}>
                        <div class="mb-3">
                            <label for="exampleInputFirstName1" class="form-label">First Name</label>
                            <input name="first_name" value={first_name} onChange={(e)=>{onInputUpdate(e)}} type="text" class="form-control" id="exampleInputFirstName1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputLastName1" class="form-label">Last Name</label>
                            <input name="last_name" value={last_name} onChange={(e)=>{onInputUpdate(e)}} type="text" class="form-control" id="exampleInputLastName1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input name="email" value={email} onChange={(e)=>{onInputUpdate(e)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input name="password" value={password} onChange={(e)=>{onInputUpdate(e)}} type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputConfirmPassword1" class="form-label">Confirm Password</label>
                            <input name="re_password" value={re_password} onChange={(e)=>{onInputUpdate(e)}} type="password" class="form-control" id="exampleInputConfirmPassword1" />
                        </div>
                        {
                            loading ?
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                {/* <Loader
                                    type="Oval"
                                    color="#00bbff"
                                    width={50}
                                    height={50}  
                                /> */}
                            </div>
                            : 
                            <button type="submit" class="btn btn-primary">Register</button>
                        }
                    </form>
                </div>

            </Layout>
        </>
    )   
}

export default RegisterPage