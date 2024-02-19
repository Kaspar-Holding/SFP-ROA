import React, { useEffect, useState } from 'react'
import Layout from '../../../hocs/Layout'
import { useRouter } from 'next/router'
import AppLayout from '../../../hocs/AppLayout'
import Moment from 'moment'
import { useSelector } from 'react-redux'
import Loader from '../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import Link from 'next/link'
import DashboardLayout from '../../../hocs/DashboardLayout'
import { API_URL } from '../../../config'

const Notifications = () => {
    const router = useRouter()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))

    const [NotificationsData, setNotificationsData] = useState([])
    const [TotalRecords, setTotalRecords] = useState(0)
    const [TotalPages, setTotalPages] = useState(2)

    const [Loaded, setLoaded] = useState(false)
    const [PageSize, setPageSize] = useState(10)

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    const loadNotifications = async (pNumber, pSize, load) => {
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify({
                "page_number": pNumber,
                "page_size": pSize
            })
            const response = await axios.post(
                '/api/notifications/get',
                Body,
                config
            )
            setTotalPages(response?.data?.data?.total_pages)
            setNotificationsData(response?.data?.data?.results)
            setTotalRecords(response?.data?.data?.total_records)
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `${error?.response?.data?.error}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
        load ? setLoaded(false) : ""

    }
    useEffect(() => {
        loadNotifications(1, PageSize, true)
        const interval = setInterval(() => {
            setCurrentDate(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))
        }, 6000
        )
        return () => {
            clearInterval(interval);
        }
    }, [])

    const isHtml = (content) => {
        return /<\/?[a-z][\s\S]*>/i.test(content)
    }

    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }
    return (
        <Layout
            title={ "Notifications" }
            content={ "Notifications" }
        >
            <DashboardLayout

                appTitle={ 'Notifications' }
                app={ 'notifications' }

            >
                <div className='col-lg-9'>
                    <div className='col-lg-12 app-notifications-dashboard'>
                        {
                            Loaded ?
                                <Loader />
                                :
                                NotificationsData.map(
                                    (notification, index) => {
                                        return (
                                            <div key={ index } className={
                                                notification?.type == 1 ?
                                                    "notification-card text-dark"
                                                    :
                                                    notification?.type == 4 ?
                                                        "notification-card bg-dark text-light"
                                                        :
                                                        notification?.type == 5 ?
                                                            "notification-card bg-success text-light"
                                                            :
                                                            "notification-card"
                                            }>
                                                <h6>{ notification?.title }</h6>
                                                {
                                                    /<\/?[a-z][\s\S]*>/i.test(notification?.message) ?
                                                        <div dangerouslySetInnerHTML={ { __html: notification?.message } } className="small p-2 me-3 mb-3 rounded-3" style={ notification?.notificationType == 1 ? { backgroundColor: '#007A8D', color: 'black' } : {} }>
                                                        </div>
                                                        :
                                                        <p>{ notification?.message }</p>
                                                }
                                                {
                                                    notification?.downloading_link ?
                                                        <>
                                                            <a target='_blank' href={ `${API_URL}/${notification.downloading_link}` } className="btn btn-primary btn-sm btn-sfp" style={ { color: 'white' } }>Download</a>
                                                        </>
                                                        :
                                                        <></>
                                                }
                                                {
                                                    notification?.log ?
                                                        <>
                                                            <button href="/apps/notifications/logs/details"
                                                                onClick={ () => {
                                                                    router.push({
                                                                        pathname: "/apps/notifications/logs/details",
                                                                        query: { log: notification?.log }
                                                                    })
                                                                } }
                                                                className="btn btn-primary btn-sfp btn-sm text-light">View Logs for { notification?.log_name }
                                                            </button>
                                                            <br />
                                                        </>
                                                        :
                                                        <></>
                                                }
                                                <br />
                                                <span className={
                                                    notification?.type == 4 ?
                                                        "time text-light"
                                                        :
                                                        notification?.type == 4 ?
                                                            "time text-light"
                                                            :
                                                            "time"
                                                } style={ { fontSize: '12px' } }>{ notification?.time }</span>
                                            </div>

                                        )
                                    }
                                )
                        }
                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default Notifications