
import AppLayout from '../../hocs/AppLayout'
import Layout from '../../hocs/Layout'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AppPage = () => {
    const router = useRouter()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)

    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    return (
        <>
            <Layout
                title={ "Dashboard Page" }
                content={ "Dashboard Page" }
            >
                <AppLayout>
                    <div className='container'>
                        <h1 className='display-4'>Dashboard</h1>
                        {
                            user ?
                                <p>Hi, { user?.email }</p>
                                : <></>
                        }
                    </div>
                </AppLayout>

            </Layout>
        </>
    )
}

export default AppPage