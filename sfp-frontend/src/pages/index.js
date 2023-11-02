
import AppLayout from '@/hocs/AppLayout'
import Layout from '@/hocs/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'
const AppPage = () => {
    const router = useRouter()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const user = useSelector(state=>state.auth.user)
    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A') )
    
    useEffect(() => {
        const interval = setInterval(() => {
                setCurrentDate(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A') )
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
            <Layout
                title={"Dashboard Page"}
                content={"Dashboard Page"}
            >
                <AppLayout>
                    <div className='apps'>
                        <div className='container'>

                            <div className='position-relative'>
                                <div className="position-absolute top-0 end-0 dateTime">
                                    {CurrentDate}
                                </div>
                            </div>
                            <br/>
                            <h5 className="card-title text-center updated-header">Welcome {user ? user.first_name : "User"}</h5>
                            <p className="card-text updated-subtitle">Select an App to start your work.</p>
                            <br/>
                            <div class="container text-center">
                                <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                                <div class="col">
                                        <Link href="/apps/insights" style={{textDecoration: "none"}}>                                        
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br/>
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-chart-simple"></i></h5>
                                                    <br/>
                                                    <p className="card-text text-center">
                                                        <Link href="/apps/insights" className="appLabel">Insights</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/apps/roa" style={{textDecoration: "none"}}>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br/>
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-clipboard"></i></h5>
                                                    <br/>
                                                    <p className="card-text text-center">
                                                        <Link href="/apps/roa" className="appLabel">Web ROA</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {
                                        user?.is_superuser || user?.userType === 1 || user?.userType === 2 ?
                                        <div class="col">
                                            <Link href="/apps/compliance" style={{textDecoration: "none"}}>
                                                <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                    <div className="card-body">
                                                        <br/>
                                                        <h5 className="card-title text-center"><i className="fa-solid fa-check-double"></i></h5>
                                                        <br/>
                                                        <p className="card-text text-center">
                                                            <Link href="/apps/compliance" className="appLabel">Compliance</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        : <></>
                                    }
                                    <div class="col">
                                        <Link href="/" style={{textDecoration: "none"}}>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br/>
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-paperclip"></i></h5>
                                                    <br/>
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Import Export</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                                    <div class="col">
                                        <Link href="/" style={{textDecoration: "none"}}>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br/>
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-users"></i></h5>
                                                    <br/>
                                                    <p className="card-text text-center">
                                                        <Link href="/users" className="appLabel">Users</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/" style={{textDecoration: "none"}}>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br/>
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-gear"></i></h5>
                                                    <br/>
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Settings</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/" style={{textDecoration: "none"}}>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br/>
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-user"></i></h5>
                                                    <br/>
                                                    <p className="card-text text-center">
                                                        <Link href="/profile" className="appLabel">User Profile</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/" style={{textDecoration: "none"}}>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br/>
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-right-from-bracket"></i></h5>
                                                    <br/>
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Logout</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppLayout>

            </Layout>
        </>
    )   
}

export default AppPage