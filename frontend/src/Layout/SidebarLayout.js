import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'
const SidebarLayout = ({isAuthenticated, user}) => {
  if(isAuthenticated === false || isAuthenticated === null){
    return <Navigate to="/signin" />
  }
  return (
    <>
    <div className="container-fluid">
      <div className='row'>
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>

      </div>
    </div>
  </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect(mapStateToProps, {})(SidebarLayout)