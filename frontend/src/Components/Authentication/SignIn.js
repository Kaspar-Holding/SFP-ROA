import React, {useState} from 'react'
import '../Styles/SignIn.css'
import {connect} from 'react-redux'
import {Navigate, NavLink} from 'react-router-dom'
import {LoginUser} from '../../Actions/Auth'
import Loader from '../Loader/Loader'
import axios from 'axios'



const SignIn = ({LoginUser, isAuthenticated}) => {
  
  const [LoadingVisibility, setLoadingVisibility] = useState("none")
  const [dataVisibility, setDataVisibility] = useState("block")
  const [FormData, setFormData] = useState({
    email: "",
    password: ""
  })

  const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
  // console.log(FormData)
  const [errorData, setErrorData] = useState({
    status: "",
    message: "",
    errors: []  
  })
  const [ResponseStatus, setResponseStatus] = useState(401);
  const validUser = async(status) => {
    setLoadingVisibility("block")
    setDataVisibility("none")
      
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }
    const Body = JSON.stringify(FormData)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/jwt/create/`, Body ,config)
        // console.log(response.data['code'])
        LoginUser(FormData)
        // setSubmissionMessageVisibility("block")
    } catch (error) {
        console.log(error.response.data)
        setErrorData({
            status: error.response.status,
            message: error.response.data.detail,
            errors: error.response.errors
        })
        

        setSubmissionErrorVisibilty("block")
    }
    setLoadingVisibility("none")
    setDataVisibility("block")
    
}
  const [response, setResponse] = useState([]);
  const [SubmissionErrorVisibilty, setSubmissionErrorVisibilty] = useState("none")
  const onSubmit = e => {
    e.preventDefault()
    validUser()
    
    // setResponse(LoginUser(FormData))
    // console.log(response)
    // window.location.reload();
  }
  
  if (isAuthenticated == true){
    return <Navigate to='/' />
  }
  return (
    <>
      <div style={{display: LoadingVisibility}}>
        <Loader />
      </div>
      <div className='body' style={{display: dataVisibility}} >
        <main className="form-signin w-100 m-auto">
            <form onSubmit={e => onSubmit(e)}>
                {/* <img className="mb-4" alt="" width="72" height="72" /> */}

                <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
                <div className="alert alert-danger text-center" style={{display: SubmissionErrorVisibilty}} role="alert">
                    <p><b>Error {errorData.status} </b></p>
                    {errorData.message}
                </div>
                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={e => onChange(e)} required/>
                  <label htmlFor="floatingInput"  >Email address</label>
                </div>
                <div className="form-floating">
                  <input type="password" minLength={8}  className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={e => onChange(e)} required/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
  
                {/* <div className="checkbox mb-3 text-center">
                  <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div> */}
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">&copy; SFP by KCS 2022–2022</p>
            </form>
        </main>
    </div>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, {LoginUser})(SignIn)