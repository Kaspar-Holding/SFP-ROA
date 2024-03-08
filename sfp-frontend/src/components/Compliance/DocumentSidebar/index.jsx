import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { logout } from '../../../actions/auth'
const DocumentSideBar = ({ appTitle, app, pageTitle, appName }) => {

    const user = useSelector(state => state.auth.user)

    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))

    const [DocumentInitalData, setDocumentInitalData] = useState({})

    const dispatch = useDispatch()

    const logOutBtn = (e) => {
        e.preventDefault()
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                logout()
            )
        }
    }

    const router = useRouter()

    useEffect(() => {


        const interval = setInterval(() => {
            setCurrentDate(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))
        }, 6000
        )
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 py-5" style={ { height: '85vh', backgroundColor: 'white' } }>
                <div className='text-center'>
                    <nav className='text-center' aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link href="/">Apps</Link></li>
                            <li className="breadcrumb-item"><Link href={ `/apps/${app}` }>{ appName }</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Review Document</li>
                        </ol>
                    </nav>
                    <p className='sidebar-welcome'>
                        { appTitle }
                    </p>
                    <p className='sidebar-user'>
                        { user?.full_name }
                    </p>
                    <p className='sidebar-date'>
                        { CurrentDate }
                    </p>
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href={ `/apps/${app}` } className={ router.pathname === `/apps/${app}` ? "nav-link active" : "nav-link link-body-emphasis" } aria-current="page">
                            <i className='bi pe-none me-2 fa-solid fa-chart-simple' />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href={ `/apps/${app}` } className={ router.pathname === `/apps/${app}/trends` ? "nav-link active" : "nav-link link-body-emphasis" }>
                            <i className='bi pe-none me-2 fa-solid fa-line-chart' />
                            Trends
                        </Link>
                    </li>

                    {
                        app === "compliance" && user?.is_superuser ?
                            <li>
                                <Link href={ `/apps/${app}/questions` } className={ router.pathname === `/apps/${app}/questions` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                    <i className='bi pe-none me-2 fa-solid fa-clipboard' />
                                    Questions
                                </Link>
                            </li>
                            : <></>
                    }
                    <li>
                        <Link href="#" className={ router.pathname === `/apps/${app}/data` ? "nav-link active" : "nav-link link-body-emphasis" }>
                            <i className='bi pe-none me-2 fa-solid fa-list' />
                            Full List
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={ router.pathname === `/apps/` ? "nav-link active" : "nav-link link-body-emphasis" }>
                            <i className='bi pe-none me-2 fa-solid fa-boxes-stacked' />
                            Other Applications
                        </Link>
                    </li>
                </ul>
                <hr />

                <div className='d-flex align-items-end flex-column px-auto'>
                    <div className="container sidebar-footer">
                        <div className="d-grid gap-2">
                            <button onClick={ (e) => { logOutBtn(e) } } className={
                                user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                    : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                        : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                            : 'btn btn-primary btn-sfp'
                            } type="button">
                                <i className='bi pe-none me-2 fa-solid fa-arrow-right-from-bracket'></i>
                                Logout
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">
                            © SFP by KCS 2023
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default DocumentSideBar