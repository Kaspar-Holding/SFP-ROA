import React, {useEffect} from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { checkAuthenticated, LoadUser } from '../Actions/Auth'

const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated()
    props.LoadUser()
  }, [])
  return (
    <>
        <Header />
        {props.children}
    </>
  )
}

export default connect(null, {checkAuthenticated, LoadUser})(Layout)
