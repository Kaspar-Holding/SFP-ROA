import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import CompleteForm from '../Components/Forms/CompleteForm';


const CompleteFormLayout = () => {
  return (
    <>
      <CompleteForm />
      <Outlet />
    </>
  )
}

export default CompleteFormLayout