import { verifyUser, refreshUser } from '@/actions/auth'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React, { useEffect } from 'react'

const AppLayout = ({children}) => {
    
    return (
        <>
            <Navbar />
            <div className=''>
                {children}
            </div>
        </>
    )
}
export default AppLayout