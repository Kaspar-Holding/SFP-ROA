import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../../../hocs/Layout'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import Swal from 'sweetalert2'
import axios from 'axios'

const NewUser = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [FormData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        userType: 0
    })
    // console.log(FormData)
    const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })
    const createUser = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }

        // console.log(FormData)
        try {
            const Body = JSON.stringify(FormData)
            const response = await axios.post(`/api/users/create/`, Body, config)
            if (response.status === 201) {
                setFormData({
                    email: "",
                    first_name: "",
                    last_name: "",
                    password: "",
                    re_password: "",
                    userType: 0
                })
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Success",
                    html: `User is created`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            }


        } catch (error) {
            if ('email' in error.response.data) {
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Error",
                    html: error.response.data['email'][0],
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            }
            else if ('password' in error.response.data) {
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Error",
                    html: error.response.data['password'][0],
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            } else {
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Error",
                    html: 'API Error',
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            }
        }
    }
    // console.log(JSON.stringify(FormData))
    const onSubmit = e => {
        e.preventDefault()
        createUser()
    }

    const [ShowPassword, setShowPassword] = useState(true)

    const generateStrongPassword = (e, length) => {
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
        var password = "";
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        setFormData({ ...FormData, ['password']: password })
        setShowPassword(false)
        copyToClipboard(password)
        Swal.fire({
            position: "bottom-end",
            type: "error",
            title: "Success",
            html: `Password is generated and copied to clipboard`,
            showConfirmButton: !1,
            timer: 5000,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
        })
    }
    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }



    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    if (typeof window != 'undefined' && !user?.is_superuser) {
        router.push('/')
    }

    return (
        <div>
            <Layout
                title={ "User Management" }
                content={ "User Management" }
            >
                <DashboardLayout

                    appTitle={ 'Create new User' }
                    app={ 'users' }
                >
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-12 app-users-list-records'>
                                <h1 className='app-dashboard-header text-center'>Create new User</h1>
                                <form onSubmit={ e => onSubmit(e) }>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                        <input type="text" className="form-control" onChange={ e => onChange(e) } name='first_name' value={ FormData['first_name'] } required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" onChange={ e => onChange(e) } name='last_name' value={ FormData['last_name'] } required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" onChange={ e => onChange(e) } name="email" value={ FormData['email'] } id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <div className="input-group">
                                            <input type={ ShowPassword ? "password" : "text" } minLength={ 8 } className="form-control" onChange={ e => onChange(e) } value={ FormData['password'] } name="password" id="exampleInputPassword1" required />
                                            <button class="input-group-text" onClick={ (e) => { setShowPassword(!ShowPassword) } } type="button"><i class="fa-solid fa-eye"></i></button>
                                            <button class="input-group-text" onClick={ (e) => { generateStrongPassword(e, 10) } } type="button"><i class="fa-solid fa-check-to-slot"></i> Generate Password</button>

                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Role" className="form-label">Role</label>
                                        <select className="form-select" onChange={ e => onChange(e) } value={ FormData['userType'] } name="userType" aria-label="Default select example">
                                            <option value="0">Admin</option>
                                            <option value="1">Gatekeeper</option>
                                            <option value="2">ARC</option>
                                            <option value="3">Regional Manager</option>
                                            <option value="5">Business Account Consultant</option>
                                            <option value="6">Advisor</option>
                                        </select>
                                    </div>

                                    {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </DashboardLayout>

            </Layout>
        </div>
    )
}
export default NewUser