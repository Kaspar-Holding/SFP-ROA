import { verifyUser, refreshUser } from '@/actions/auth'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/Sidebar'
import Head from 'next/head'
import React, { useEffect } from 'react'

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