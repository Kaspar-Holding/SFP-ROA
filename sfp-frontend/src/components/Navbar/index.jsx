import axios from 'axios'
import { logout } from '../../actions/auth'
import { API_URL } from '../../config'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const [NotificationsData, setNotificationsData] = useState([])
    const [UnreadNotificationsCount, setUnreadNotificationsCount] = useState(0)
    const [ModalVisible, setModalVisible] = useState(false)
    const [Annonucements, setAnnonucements] = useState([])
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    console.log(ModalVisible)
    const loadAnnonucements = async () => {
        const Body = JSON.stringify({
            "page_number": 1,
            "page_size": 5
        })
        try {
            const response = await axios.post(
                '/api/notifications/annonucement',
                Body,
                config
            )
            setAnnonucements(response?.data?.data?.results)
            let ams = response?.data?.data?.results
            if (ams.length > 0) {

                if (ModalVisible == false) {
                    const myModal = new bootstrap.Modal('#annonucementModal')
                    myModal.show()
                    setModalVisible(true)
                }
            }
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

    }
    const loadUnreadNotifications = async () => {
        try {
            const response = await axios.get(
                '/api/notifications/unread',
                config
            )
            setUnreadNotificationsCount(response?.data?.data?.total)
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

    }
    const loadNotifications = async (pNumber, pSize) => {
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
            setNotificationsData(response?.data?.data?.results)
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

    }
    const markNotificationsRead = async () => {
        try {
            const response = await axios.get(
                '/api/notifications/read',
                config
            )
            loadUnreadNotifications()
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

    }
    const markAnnoucementRead = async (e, id) => {
        e.preventDefault()
        const Body = JSON.stringify(id)
        setModalVisible(false)
        try {
            await axios.post(
                '/api/notifications/annonucement/read',
                Body,
                config
            )
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Success",
                html: `Annoucement was marked as read`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
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

    }
    const logOutBtn = (e) => {
        e.preventDefault()
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                logout()
            )
        }
    }
    useEffect(() => {
        loadAnnonucements()
        loadUnreadNotifications()
        loadNotifications(1, 5)
        const interval = setInterval(() => {
            loadAnnonucements()
            loadUnreadNotifications()
            loadNotifications(1, 5)
        }, 3000
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
            <header className="p-3 mb-3 border-bottom">
                <div>
                    <div className="modal fade" onMouseLeave={ (e) => { markAnnoucementRead(e, Annonucements[0]['id']) } } id="annonucementModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="annonucementModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            {
                                Annonucements.map(
                                    (annonucement, index) => {
                                        return (
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="annonucementModalLabel">{ annonucement?.title }</h1>
                                                </div>
                                                <div className="modal-body">
                                                    {
                                                        /<\/?[a-z][\s\S]*>/i.test(annonucement?.message) ?
                                                            <div dangerouslySetInnerHTML={ { __html: annonucement?.message } } className="small p-2 me-3 mb-3 rounded-3" style={ annonucement?.notificationType == 1 ? { backgroundColor: '#007A8D', color: 'black' } : {} }>
                                                            </div>
                                                            :
                                                            annonucement?.message
                                                    }
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" onClick={ (e) => { markAnnoucementRead(e, annonucement?.id) } } className="btn btn-primary btn-sfp" data-bs-dismiss="modal">Read</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link href="/" className="nav-link px-2 link-body-emphasis" style={ { width: "100%" } }>
                                    SFP Online
                                </Link>
                            </li>
                        </ul>
                        <div className="nav-item dropdown nav-item-box">
                            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className="badge rounded-pill">{ UnreadNotificationsCount }</span>
                            </a>
                            <div className="dropdown-menu notifications">
                                <div className="topnav-dropdown-header">
                                    <span className="notification-title">Notifications</span>
                                    <a href="#" className="clear-noti nav-link" onClick={ (e) => { markNotificationsRead(e) } }> Clear All </a>
                                </div>
                                <div className="noti-content">
                                    <ul className="notification-list">
                                        {
                                            NotificationsData.map(
                                                (notification, index) => {
                                                    return (
                                                        <li key={ index } className="notification-message py-1">
                                                            <div className="media d-flex">
                                                                <div className="media-body flex-grow-1">
                                                                    <p className="noti-details">
                                                                        <span className="noti-title">
                                                                            { notification.notificationType == 4 ? "System:" : "" }
                                                                            { notification?.title }
                                                                        </span><br /><span className="noti-title">
                                                                            {
                                                                                /<\/?[a-z][\s\S]*>/i.test(notification?.message) ?
                                                                                    <div dangerouslySetInnerHTML={ { __html: notification?.message } } className="small p-2 me-3 mb-3 rounded-3" style={ notification?.notificationType == 1 ? { backgroundColor: '#007A8D', color: 'black' } : {} }>
                                                                                    </div>
                                                                                    :
                                                                                    notification?.message
                                                                            }
                                                                        </span></p>
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
                                                                    <p className="noti-time"><span className="notification-time">{ notification?.time }</span></p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </li>
                                                    )
                                                }
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="topnav-dropdown-footer">
                                    <Link href="/apps/notifications" className='nav-link'>View all Notifications</Link>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown text-end">
                            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle mx-2" />
                                { `${user?.full_name}` }
                            </a>
                            <ul className="dropdown-menu text-small">
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" onClick={ (e) => { logOutBtn(e) } }>Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar