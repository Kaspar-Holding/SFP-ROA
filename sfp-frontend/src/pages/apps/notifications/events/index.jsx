// import DashboardLayout from '@/hocs/DashboardLayout'
// import DocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'
import Layout from '../../../../hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Loader from '../../../../hocs/Loader'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import Moment from 'moment'
const Events = () => {

    const router = useRouter()


    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [Loaded, setLoaded] = useState(false)

    const [Events, setEvents] = useState([])
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const localizer = momentLocalizer(Moment)

    const events = [
        {
            title: 'Meeting',
            start: new Date(2024, 0, 30, 9, 0),
            end: new Date(2024, 0, 30, 10, 0),
        },
        // Add more events as needed
    ];


    const loadEvents = async (load) => {
        load ? setLoaded(true) : ""
        try {
            const response = await axios.get(
                '/api/notifications/events',
                config
            )
            setEvents(response?.data?.data)
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
        loadEvents(true)
        const interval = setInterval(() => {
            loadEvents(true)
        }, 60000
        )
        return () => {
            clearInterval(interval);
        }
    }, [])

    const eventStyleGetter = (event) => {
        // Customize background color based on event properties
        const backgroundColor = event.backgroundColor || '#007A8D'; // Default color if not specified
        return {
            style: {
                backgroundColor
            }
        };
    };




    const user = useSelector(state => state.auth.user)


    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }



    return (
        <Layout
            title={ "Create Notification" }
            content={ "Create Notification" }
        >
            <DashboardLayout
                appTitle={ 'Create new Notification' }
                app={ 'notifications' }
                dId={ undefined }
            >

                <div className='col-lg-9 compliance-inital-card'>
                    <div className='position-relative'>
                        <div className='position-absolute top-0 start-50 translate-middle'>
                            <p className='compliance-inital-card-header'>Events Information</p>
                        </div>
                    </div>
                    <div className='compliance-inital-content'>
                        {
                            Loaded ?
                                user?.email?.includes('sfp') || user?.email?.includes('succession') ? <Loader color='sfp-color' />
                                    : user?.email?.includes('fs4p') ? <Loader color='fs4p-color' />
                                        : user?.email?.includes('sanlam') ? <Loader color='sfp-sanlam' />
                                            : <Loader color='sfp-color' />
                                :
                                <div style={ { height: '500px' } }>
                                    <Calendar
                                        localizer={ localizer }
                                        events={ Events }
                                        startAccessor="start"
                                        endAccessor="end"
                                        style={ { margin: '50px' } }
                                        eventStyleGetter={ eventStyleGetter }
                                    />
                                </div>
                        }
                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default Events