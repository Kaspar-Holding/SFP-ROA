import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { logout } from '../../actions/auth'
const SideBar = ({ appTitle, app }) => {


    const router = useRouter()

    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)

    const logOutBtn = (e) => {
        e.preventDefault()
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                logout()
            )
        }
    }

    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))
        }, 6000
        )
        return () => {
            clearInterval(interval);
        }
    }, [])

    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }



    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 py-5" style={ { height: '85vh', backgroundColor: 'white' } }>
                <div className='text-center'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link href="/">Apps</Link></li>
                            {
                                appTitle.includes("\n Details") ?
                                    <>
                                        <li className="breadcrumb-item"><Link href="/apps/users">Users</Link></li>
                                        <li className="breadcrumb-item active">{ appTitle }</li>
                                    </>
                                    :
                                    <>
                                        {
                                            router.pathname === `/apps/${app}` ?
                                                <li className="breadcrumb-item">
                                                    {
                                                        app === "roa" ?
                                                            app.toUpperCase()
                                                            :
                                                            app.charAt(0).toUpperCase() + app.slice(1)
                                                    }
                                                </li>
                                                :
                                                <>
                                                    <li className="breadcrumb-item">
                                                        <Link href={ `/apps/${app}` }>
                                                            {
                                                                app === "roa" ?
                                                                    app.toUpperCase()
                                                                    :
                                                                    app.charAt(0).toUpperCase() + app.slice(1)
                                                            }
                                                        </Link>
                                                    </li>
                                                    <li className="breadcrumb-item active">{ appTitle }</li>
                                                </>
                                        }
                                    </>
                            }
                        </ol>
                    </nav>
                    <p className='sidebar-welcome'>
                        {
                            appTitle.includes("\n Details") ?
                                <p>
                                    <span className='fw-bold'>{ appTitle }</span>
                                </p>
                                :
                                appTitle === "Users" ?
                                    <p>
                                        Welcome to <br />
                                        <span className='fw-bold'>User Management</span>
                                    </p>
                                    :
                                    <p>
                                        Welcome to <br />
                                        <span className='fw-bold'>{ appTitle }</span>
                                    </p>
                        }
                    </p>
                    <p className='sidebar-user'>
                        { user?.full_name }
                    </p>
                    <p className='sidebar-date'>
                        { CurrentDate }
                    </p>
                </div>
                {
                    app !== "users" && app !== "profile" && app !== "notifications" && !appTitle.includes("\n Details") ?
                        <div className="d-grid gap-2">
                            <Link href={ `/apps/${app}/documents/create` }
                                className={
                                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                        : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                            : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                                : 'btn btn-primary btn-sfp'
                                }
                            >
                                <i className='bi pe-none me-2 fa-solid fa-file'></i>
                                Create new Document
                            </Link>
                        </div>
                        : <></>

                }
                {
                    app == "users" ?
                        <div className="d-grid gap-2">
                            <Link href={ `/apps/${app}/create` } className={
                                user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                    : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                        : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                            : 'btn btn-primary btn-sfp'
                            } >
                                <i className='bi pe-none me-2 fa-solid fa-file'></i>
                                Create new User
                            </Link>
                        </div>
                        : <></>

                }
                {
                    app === "notifications" && user?.is_superuser ?
                        <div className="d-grid gap-2">
                            <Link href={ `/apps/${app}/create` } className={
                                user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                    : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                        : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                            : 'btn btn-primary btn-sfp'
                            } >
                                <i className='bi pe-none me-2 fa-solid fa-bell'></i>
                                Generate New Notification
                            </Link>
                        </div>
                        : <></>

                }
                {
                    app === 'compliance' && user?.userType === 2 ?
                        <>
                        </>
                        : <></>
                }
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {
                        appTitle.includes("\n Details") ?
                            <li className="nav-item">
                                <Link href={ `/apps/users` } className={ router.pathname === `/apps/users` ? "nav-link active" : "nav-link link-body-emphasis" } aria-current="page">
                                    <i className='bi pe-none me-2 fa-solid fa-chart-simple' />
                                    Dashboard
                                </Link>
                            </li> :
                            app !== "profile" ?
                                <li className="nav-item">
                                    <Link href={ `/apps/${app}` } className={ router.pathname === `/apps/${app}` ? "nav-link active" : "nav-link link-body-emphasis" } aria-current="page">
                                        <i className='bi pe-none me-2 fa-solid fa-chart-simple' />
                                        Dashboard
                                    </Link>
                                </li>
                                : <></>
                    }
                    {
                        appTitle.includes("\n Details") ?
                            <>
                                <li>
                                    <Link href={ `/apps/users/list` } className={ router.pathname === `/apps/users/list` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-users' />
                                        All Users
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href={ `/apps/${app}/create` } className={ router.pathname === `/apps/${app}/create` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-user-plus' />
                                        Create User
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href={ `/apps/users/regions` } className={ router.pathname === `/apps/users/regions` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-earth' />
                                        Regions
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ `/apps/users/roles` } className={ router.pathname === `/apps/users/roles` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-user-tag' />
                                        Update User Roles
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ `/apps/users/update` } className={ router.pathname === `/apps/users/update` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-edit' />
                                        Bulk Update
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ `/apps/users/logs` } className={ router.pathname === `/apps/users/logs` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-history' />
                                        Bulk Update Logs
                                    </Link>
                                </li>


                            </>
                            :
                            app.includes("users") ?
                                <>
                                    <li>
                                        <Link href={ `/apps/${app}/list` } className={ router.pathname === `/apps/${app}/list` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                            <i className='bi pe-none me-2 fa-solid fa-users' />
                                            All Users
                                        </Link>
                                    </li>
                                    {/* <li>
                                    <Link href={ `/apps/${app}/create` } className={ router.pathname === `/apps/${app}/create` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-user-plus' />
                                        Create User
                                    </Link>
                                </li> */}
                                    <li>
                                        <Link href={ `/apps/${app}/regions` } className={ router.pathname === `/apps/${app}/regions` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                            <i className='bi pe-none me-2 fa-solid fa-user-tag' />
                                            Regions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={ `/apps/${app}/export` } className={ router.pathname === `/apps/${app}/export` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                            <i className='bi pe-none me-2 fa-solid fa-file-export' />
                                            Export Users
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={ `/apps/${app}/roles` } className={ router.pathname === `/apps/${app}/roles` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                            <i className='bi pe-none me-2 fa-solid fa-user-tag' />
                                            Update User Roles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={ `/apps/${app}/update` } className={ router.pathname === `/apps/${app}/update` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                            <i className='bi pe-none me-2 fa-solid fa-edit' />
                                            Bulk Update
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={ `/apps/${app}/logs` } className={ router.pathname === `/apps/${app}/logs` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                            <i className='bi pe-none me-2 fa-solid fa-history' />
                                            Bulk Update Logs
                                        </Link>
                                    </li>


                                </>
                                :
                                app === "notifications" ?
                                    <>
                                        <li>
                                            <Link href={ `/apps/${app}/logs` } className={ router.pathname === `/apps/${app}/logs` || router.pathname === `/apps/${app}/logs/details` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                                <i className='bi pe-none me-2 fa-solid fa-history' />
                                                Logs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={ `/apps/${app}/events` } className={ router.pathname === `/apps/${app}/events` || router.pathname === `/apps/${app}/logs/details` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                                <i className='bi pe-none me-2 fa-solid fa-calendar' />
                                                Events
                                            </Link>
                                        </li>
                                        {
                                            user?.is_superuser ?
                                                <li>
                                                    <Link href={ `/apps/${app}/events/update` } className={ router.pathname === `/apps/${app}/events/update` || router.pathname === `/apps/${app}/logs/details` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                                        <i className='bi pe-none me-2 fa-solid fa-calendar' />
                                                        Events Bulk Update
                                                    </Link>
                                                </li>
                                                :
                                                <></>
                                        }


                                    </>
                                    :
                                    <></>
                    }
                    {/* <li>
                        <Link href={`/apps/${app}/trends`} className={ router.pathname === `/apps/${app}/trends` ? "nav-link active" :"nav-link link-body-emphasis" }>
                            <i className='bi pe-none me-2 fa-solid fa-line-chart' />
                            Trends
                        </Link>
                    </li> */}

                    {/* {
                        app === "compliance" && user?.is_superuser ?
                        <li>
                            <Link href={`/apps/${app}/questions`} className={router.pathname === `/apps/${app}/questions` ? "nav-link active" :"nav-link link-body-emphasis"}>
                                <i className='bi pe-none me-2 fa-solid fa-clipboard' />
                                Questions
                            </Link>
                        </li>
                        : <></>
                    } */}
                    {
                        app !== "users" && app !== "profile" ?

                            <li>
                                <Link href={ `/apps/${app}/list` } className={ router.pathname === `/apps/${app}/list` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                    <i className='bi pe-none me-2 fa-solid fa-list' />
                                    Full List
                                </Link>
                            </li>
                            : <></>
                    }
                    {
                        app === "roa" && user?.is_superuser ?

                            <li>
                                <Link href={ `/apps/${app}/products` } className={ router.pathname === `/apps/${app}/products` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                    <i className='bi pe-none me-2 fa-solid fa-clipboard' />
                                    Disclosure Products
                                </Link>
                            </li>
                            : <></>
                    }
                    {
                        app === "roa" || app === "compliance" ?
                            <>
                                <li>
                                    <Link href={ `/apps/${app}/export` } className={ router.pathname === `/apps/${app}/export` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-file-export' />
                                        Export
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ `/apps/${app}/import` } className={ router.pathname === `/apps/${app}/import` ? "nav-link active" : "nav-link link-body-emphasis" }>
                                        <i className='bi pe-none me-2 fa-solid fa-file-import' />
                                        Import
                                    </Link>
                                </li>
                            </>
                            : <></>
                    }
                    {/* <li>
                        <Link href="/" className={ router.pathname === `/apps/` ? "nav-link active" : "nav-link link-body-emphasis" }>
                            <i className='bi pe-none me-2 fa-solid fa-boxes-stacked' />
                            Other Applications
                        </Link>
                    </li> */}
                </ul>
                <hr />

                <div className='d-flex align-items-end flex-column px-auto'>
                    <div className="container sidebar-footer">
                        <div className="d-grid gap-2">
                            <button onClick={ (e) => { logOutBtn(e) } }
                                className={
                                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                        : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                            : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                                : 'btn btn-primary btn-sfp'
                                }
                                type="button"
                            >
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

export default SideBar