import { verifyUser, refreshUser } from '../../actions/auth'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Layout = ({ title, content, children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                verifyUser()
            )
        }
    }, [dispatch])

    return (
        <>
            <Head>
                <title>
                    { title } - Succession Finance Planning
                </title>
                <meta name='description' content={ content } />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-KPJVL4QCY9"></script>
                <script dangerouslySetInnerHTML={ {
                    __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', 'G-KPJVL4QCY9');`

                } }>
                </script>
            </Head>
            {/* <Navbar /> */ }
            <div className=''>
                { children }
            </div>
        </>
    )
}

Layout.defaultProps = {
    title: "KCS",
    content: "Boilerplate for HTTPOnly Auth"
}

export default Layout