import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const SuperUserLayout = (user, isAuthenticated) => {
  // console.log(user)
  const [isSuperuser, setIsSuperuser] = useState()
  
  useEffect(() => {
    if (user) {
      setIsSuperuser(user["is_superuser"])
    }
  },[isSuperuser,user])
  
  if(isAuthenticated === false || isAuthenticated === null){
    if(!user["is_superuser"]){
      return <Navigate to="/" />
    }
    return <Navigate to="/signin" />
  }
  return (
    <>
      <Outlet />
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user
})

export default connect(mapStateToProps, {})(SuperUserLayout)