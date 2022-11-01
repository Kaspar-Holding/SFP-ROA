import React, {useState} from 'react'
import '../Styles/SignIn.css'
import {connect} from 'react-redux'
import {Navigate, NavLink} from 'react-router-dom'
import {LoginUser} from '../../Actions/Auth'



const SignIn = ({LoginUser, isAuthenticated}) => {
  const [FormData, setFormData] = useState({
    email: "",
    password: ""
  })

  const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
  // console.log(FormData)
  
  const onSubmit = e => {
    e.preventDefault()
    LoginUser(FormData)
    // window.location.reload();
  }
  
  if (isAuthenticated == true){
    return <Navigate to='/' />
  }
  return (
    <div className='body' >
      <main className="form-signin w-100 m-auto">
          <form onSubmit={e => onSubmit(e)}>
              {/* <img className="mb-4" alt="" width="72" height="72" /> */}
              <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

              <div className="form-floating">
                <input type="email"  className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={e => onChange(e)} required/>
                <label htmlFor="floatingInput"  >Email address</label>
              </div>
              <div className="form-floating">
                <input type="password"  className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={e => onChange(e)} required/>
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
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, {LoginUser})(SignIn)