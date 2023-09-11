import { verifyUser, refreshUser } from '@/actions/auth'
import CompleteDocumentSidebar from '@/components/Compliance/CompleteDocumentSidebar'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React, { useEffect } from 'react'

const CompleteDocumentLayout = ({appTitle, app, dId, children}) => {
    
    return (
        <>
            <Navbar />
            <div className='dashboard'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <CompleteDocumentSidebar
                            appTitle={appTitle} 
                            app={app} 
                        />
                    </div>
                    <div className='col-lg-9'>
                        <div className='document'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompleteDocumentLayout