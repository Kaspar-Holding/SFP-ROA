import React from 'react'
import { connect } from 'react-redux'

const UserProfile = ({isAuthenticated, user}) => {

  return (
    <>
      <div className='container'>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">
                {user['name']}'s Profile
            </h1>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" value={user['name']} name='name' disabled />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={user['email']} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
        </div>

      </div>
    </>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect(mapStateToProps)(UserProfile)
