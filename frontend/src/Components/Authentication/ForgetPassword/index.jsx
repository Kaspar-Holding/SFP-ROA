import React, { useState } from 'react'
import '../Style/signIn.css'
import {connect} from 'react-redux'
import {LoginUser} from '../../../Actions/Auth'
import Loader from '../../Loader/Loader'
import sfpLogo from './sfp-logo.png'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'
import {resetPassword} from '../../../Actions/Auth'
import Swal from 'sweetalert2'

const ForgetPassword = ({resetPassword, isAuthenticated}) => {
  
    const [LoadingVisibility, setLoadingVisibility] = useState("none")
    const [dataVisibility, setDataVisibility] = useState("block")
    const [RequestSent, setRequestSent] = useState(false)
    const [FormData, setFormData] = useState({
        email: ""
    })
    
    const {email} = FormData
  
    const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
    const [ResponseStatus, setResponseStatus] = useState(401)
    const emailValidation = () =>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(FormData['email']) === false){
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
    
    const onSubmit = async(e) => {
        e.preventDefault()
        if (emailValidation()){
            setLoadingVisibility("block")
            setDataVisibility("none")
            const response = await resetPassword(FormData)
            if (response.status === 204){
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: `Success`,
                    html: `Password Reset Email sent`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
                setRequestSent(true)
            } else {
            
                if (response.data) {
                    Swal.fire({
                        position: "bottom-end",
                        type: "error",
                        title: `Error: ${response.status}`,
                        html: `${response.data.detail}`,
                        showConfirmButton: !1,
                        timer: 10000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })

                }
        
            }
            
            setLoadingVisibility("none")
            setDataVisibility("block")
        }
      
      // setResponse(LoginUser(FormData))
      // console.log(response)
      // window.location.reload();
    }
    if (RequestSent) {
      return <Navigate to='/signin' />
    }
    
    if (isAuthenticated === true){
      return <Navigate to='/' />
    }
    return (
        <div className="updated-body"> 
            <div>
                <img className='updated-logo' src={`${process.env.REACT_APP_BACKEND_URL}/media/logo.png`}/>
            </div>
            <div style={{display: LoadingVisibility}}>
                <Loader />
            </div> 
            <div style={{display: dataVisibility}} >
                <form onSubmit={e => onSubmit(e)} className="updated-form position-absolute top-35 start-50 translate-middle">
                    <div className="card rounded-5">
                        <div className="card-body">
                            <h5 className="card-title text-center updated-header">Request Password Reset</h5>
                            <p className="card-text updated-subtitle">Enter your email for password reset.</p>
                            <br/>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label updated-email">Email</label>
                                <input name="email" value={email} onChange={(e)=>{onChange(e)}} type="email" className="form-control text-bg-light form-control-md" id="exampleFormControlInput1" placeholder="name@sfp.co.za" />
                            </div>
                            <NavLink to="/signin">
                                <p className="card-text updated-text">Login ?
                                </p>
                            </NavLink>
                            <br/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary btn-sfp" type="submit">Reset Password</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>          
            <div className="updated-footer position-absolute bottom-0 start-50 translate-middle">
                &copy; SFP by KCS 2022 – {(new Date()).getFullYear()}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})
  
export default connect(mapStateToProps, {resetPassword})(ForgetPassword)