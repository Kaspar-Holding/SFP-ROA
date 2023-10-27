import { verifyUser, refreshUser } from '@/actions/auth'
import DocumentSideBar from '@/components/Compliance/DocumentSidebar'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React, { useEffect } from 'react'

const CreateAppDocumentLayout = ({appTitle, app, pageTitle, dId, children}) => {
    
    return (
        <>
            <Navbar />
            <div className='dashboard'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <DocumentSideBar
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
export default CreateAppDocumentLayout