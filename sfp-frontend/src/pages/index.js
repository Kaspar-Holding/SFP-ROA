
import AppLayout from '../hocs/AppLayout'
import Layout from '../hocs/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'
const AppPage = () => {
    const router = useRouter()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
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
            <Layout
                title={ "Dashboard Page" }
                content={ "Dashboard Page" }
            >
                <AppLayout>
                    <div className='apps'>
                        <div className='container'>

                            <div className='position-relative'>
                                <div className="position-absolute top-0 end-0 dateTime">
                                    { CurrentDate }
                                </div>
                            </div>
                            <br />
                            <h5 className="card-title text-center updated-header">Welcome { user ? user.first_name : "User" }</h5>
                            <p className="card-text updated-subtitle">Select an App to start your work.</p>
                            <br />
                            <div class="container text-center">
                                <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                                    <div class="col">
                                        <Link href="/apps/insights" style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-chart-simple"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <Link href="/apps/insights" className="appLabel">Insights</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/apps/roa" style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-clipboard"></i></h5>
                                                    <br />
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
                                                <Link href="/apps/compliance" style={ { textDecoration: "none" } }>
                                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                        <div className="card-body">
                                                            <br />
                                                            <h5 className="card-title text-center"><i className="fa-solid fa-check-double"></i></h5>
                                                            <br />
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
                                        <Link href="/apps/external" style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-paperclip"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Import Export</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/" style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-users"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <Link href="/users" className="appLabel">Users</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/" style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-gear"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Settings</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/" style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-user"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <Link href="/profile" className="appLabel">User Profile</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/" style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-right-from-bracket"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Logout</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <a href="https://forms.office.com/r/n8cTPGJzhu" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-calculator"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Felicity</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://business.d6.co.za/nc/messages" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-d"></i><i className="fa-solid fa-6"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">D6 Web app</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://business.d6.co.za/nc/messages" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-g"></i><i className="fa-solid fa-q"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Get Quote</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://forms.office.com/r/k2ch7r0ZnW" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-d"></i><i className="fa-solid fa-s"></i><i className="fa-solid fa-q"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Supervision Quiz</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://sanport.sanlam.co.za/sanfin/dashboard/mainhtml" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-s"></i><i className="fa-solid fa-a"></i><i className="fa-solid fa-n">-</i><i className="fa-solid fa-f"></i><i className="fa-solid fa-i"></i><i className="fa-solid fa-n"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">SanFin</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://ess.sagesouthafrica.co.za/" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-s"></i><i className="fa-solid fa-a"></i><i className="fa-solid fa-g"></i><i className="fa-solid fa-e"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">SAGE payslips</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://sanport.sanlam.co.za/sfpelearning/mod/folder/view.php?id=1250&forceview=1" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-s"></i><i className="fa-solid fa-f"></i><i className="fa-solid fa-p"></i>-<i className="fa-solid fa-p"></i><i className="fa-solid fa-d"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">SFP payrun dates</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://sanport.sanlam.co.za/sfpelearning/pluginfile.php/2686/mod_resource/content/0/MARKETING%20TOOLKIT%202022.pdf" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-m"></i><i className="fa-solid fa-t"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Marketing toolkit</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://auth.comotion.us/auth/realms/seedanalytics/protocol/openid-connect/auth?client_id=seedanalytics_client&redirect_uri=https%3A%2F%2Fseedanalytics.comodash.io%2Foauth2%2Fidpresponse&response_type=code&scope=openid&state=5C8qcvkaOP6vW5ynY4hOSlAkBv2TVjv2ImHEzzX%2Fy%2FIPChKuK%2Fa6VvzUUO1zxsHau66Qvik3iJjZFo1S%2BuhMMnLpVboZwPAvDRSWBPbSsRY8W4cmc0Mpf9UqrOshwAE3SpMH6d%2B9qqvO7QLUgMLm7HAhlauoqIhOY1I4wyvnL%2BbINdxTD4FAsaakAzSvlcGsJ0O2FaJIyV71NhAZ8nvukt91sQ5Il6%2BHvqtrbCj0W4HswZFOJsdNrQ%3D%3D" target='_blank' style={ { textDecoration: "none" } }>
                                            <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                                <div className="card-body">
                                                    <br />
                                                    <h5 className="card-title text-center"><i className="fa-solid fa-s"></i><i className="fa-solid fa-e"></i><i className="fa-solid fa-e"></i><i className="fa-solid fa-d"></i></h5>
                                                    <br />
                                                    <p className="card-text text-center">
                                                        <a href="#" className="appLabel">Seed</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
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