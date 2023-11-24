import { verifyUser, refreshUser } from '../../actions/auth'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/Sidebar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const DashboardLayout = ({appTitle, app, children}) => {
    
    return (
        <>
            <Navbar />
            <div className='dashboard'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <SideBar
                            appTitle={appTitle} 
                            app={app} 
                        />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
export default DashboardLayout