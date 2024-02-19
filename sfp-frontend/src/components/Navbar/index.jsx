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
    const [AnnoucementShown, setAnnoucementShown] = useState(false)
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
                if (!document.querySelector('#announcement-modal')) {
                    // Create a modal
                    const modal = document.createElement('div')
                    modal.setAttribute("id", "announcement-modal")
                    modal.setAttribute("data-bs-backdrop", "static")
                    modal.classList.add('modal', 'fade')

                    // Create a modal dialog
                    const modalDialog = document.createElement('div')
                    modalDialog.classList.add('modal-dialog', 'modal-lg')

                    // Create a modal content element
                    const modalContent = document.createElement('div')
                    modalContent.classList.add('modal-content')

                    // Create a modal header
                    const modalHeader = document.createElement('div')
                    modalHeader.classList.add('modal-header')
                    modalHeader.innerHTML = `<h3 className="modal-title fs-5" id="annonucementModalLabel">Announcements</h3>`

                    // Create a close button
                    const closeButton = document.createElement('button')
                    closeButton.classList.add('btn-close')
                    closeButton.setAttribute('data-bs-dismiss', 'modal')

                    // Append close button to modal header
                    modalHeader.appendChild(closeButton)

                    // Append modal header to modal content
                    modalContent.appendChild(modalHeader)

                    // Create a modal body
                    const modalBody = document.createElement('div')


                    // Loop through announcements to create carousel items
                    // Create a variable to keep track of the current announcement index
                    let currentIndex = 0

                    // Function to show the current announcement
                    const showAnnouncement = () => {
                        // Clear modal body content
                        modalBody.innerHTML = ''

                        // Create announcement element

                        const announcementElement = document.createElement('div')
                        announcementElement.classList.add('container', 'text-center')
                        announcementElement.innerHTML = `<h3>${ams[currentIndex]['title']}</h3>`

                        const announcementContent = document.createElement('div')
                        announcementContent.classList.add('container')
                        announcementContent.innerHTML = ams[currentIndex]['message']

                        // Append announcement element to modal body
                        modalBody.appendChild(announcementElement)
                        modalBody.appendChild(announcementContent)
                    }

                    // Function to show next announcement
                    const showNextAnnouncement = () => {
                        currentIndex = (currentIndex + 1) % ams.length
                        showAnnouncement()
                    }

                    // Function to show previous announcement
                    const showPreviousAnnouncement = () => {
                        currentIndex = (currentIndex - 1 + ams.length) % ams.length
                        showAnnouncement()
                    }

                    // Create next and previous buttons
                    const nextButton = document.createElement('button')
                    nextButton.classList.add('btn', 'btn-primary', 'btn-sfp')
                    nextButton.innerText = 'Next'
                    nextButton.addEventListener('click', showNextAnnouncement)

                    const markButton = document.createElement('button')
                    markButton.classList.add('btn', 'btn-primary', 'me-2', 'btn-sfp')
                    markButton.innerText = 'Mark Notification Read'
                    markButton.addEventListener('click', (event) => markAnnoucementRead(event, ams[currentIndex]['id'], ams.length, currentIndex))

                    const markAllButton = document.createElement('button')
                    markAllButton.classList.add('btn', 'btn-primary', 'me-2', 'btn-sfp')
                    markAllButton.innerText = 'Mark All Read'
                    markAllButton.addEventListener('click', (event) => markNotificationsReadModal(event))

                    const prevButton = document.createElement('button')
                    prevButton.classList.add('btn', 'btn-primary', 'me-2', 'btn-sfp')
                    prevButton.innerText = 'Previous'
                    prevButton.addEventListener('click', showPreviousAnnouncement)


                    // Show the first announcement
                    showAnnouncement()



                    // Append modal body to modal content
                    modalContent.appendChild(modalBody)

                    // Create modal footer
                    const modalFooter = document.createElement('div')
                    modalFooter.classList.add('modal-footer', 'text-center')
                    modalFooter.appendChild(markButton)
                    if (ams.length > 1) {
                        modalFooter.appendChild(prevButton)
                        modalFooter.appendChild(nextButton)
                    }

                    // Append modal footer to modal content
                    modalFooter.appendChild(markAllButton)
                    modalContent.appendChild(modalFooter)

                    // Append modal content to modal dialog
                    modalDialog.appendChild(modalContent)

                    // Append modal dialog to modal
                    modal.appendChild(modalDialog)

                    // Append modal to body
                    document.body.appendChild(modal)

                    // Show the modal
                    const myModal = new bootstrap.Modal(modal)
                    myModal.show()

                }
            }
        } catch (error) {
            // console.log(error)
            // Swal.fire({
            //     position: "bottom-end",
            //     type: "error",
            //     title: "Error",
            //     html: `${error?.response?.data?.error}`,
            //     showConfirmButton: !1,
            //     timer: 5000,
            //     confirmButtonClass: "btn btn-primary",
            //     buttonsStyling: !1,
            // })

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
            // Swal.fire({
            //     position: "bottom-end",
            //     type: "error",
            //     title: "Error",
            //     html: `${error?.response?.data?.error}`,
            //     showConfirmButton: !1,
            //     timer: 5000,
            //     confirmButtonClass: "btn btn-primary",
            //     buttonsStyling: !1,
            // })

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
            // Swal.fire({
            //     position: "bottom-end",
            //     type: "error",
            //     title: "Error",
            //     html: `${error?.response?.data?.error}`,
            //     showConfirmButton: !1,
            //     timer: 5000,
            //     confirmButtonClass: "btn btn-primary",
            //     buttonsStyling: !1,
            // })

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
    const markNotificationsReadModal = async (e) => {
        try {
            const response = await axios.get(
                '/api/notifications/read',
                config
            )
            loadUnreadNotifications()
            const modal = document.getElementById('announcement-modal')
            if (modal) {
                // Hide the modal
                const myModal = new bootstrap.Modal(modal)
                myModal.hide()
                // remove backdrop
                const backdrop = document.querySelector('.modal-backdrop')

                // Remove the backdrop
                if (backdrop) {
                    backdrop.remove()
                }
            }


            // Remove the modal from the DOM
            modal.remove()
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
                html: `Announcement was marked as read`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
            // Get the modal element
            const modal = document.getElementById('announcement-modal')
            if (modal) {
                // Hide the modal
                const myModal = new bootstrap.Modal(modal)
                myModal.hide()
                // remove backdrop
                const backdrop = document.querySelector('.modal-backdrop')

                // Remove the backdrop
                if (backdrop) {
                    backdrop.remove()
                }
            }


            // Remove the modal from the DOM
            modal.remove()
        } catch (error) {
            console.log(error)
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
            clearInterval(interval)
        }
    }, [])



    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }
    return (
        <>
            <header className="p-3 mb-3 border-bottom">
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
                                                                    {
                                                                        notification?.downloading_link ?
                                                                            <>
                                                                                <a target='_blank' href={ `${API_URL}/${notification.downloading_link}` } className="btn btn-primary btn-sfp btn-sm text-light" style={ { color: 'white' } }>Download</a>
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
                                {/* <li><a className="dropdown-item" href="#">Settings</a></li> */ }
                                <li><Link className="dropdown-item" href="/apps/profile">Profile</Link></li>
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