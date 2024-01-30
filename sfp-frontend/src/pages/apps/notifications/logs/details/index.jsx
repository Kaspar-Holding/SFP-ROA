import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Moment from 'moment'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import Link from 'next/link'
import Layout from '../../../../../hocs/Layout'
import AppLayout from '../../../../../hocs/AppLayout'
import DashboardLayout from '../../../../../hocs/DashboardLayout'

const Notifications = () => {
    const router = useRouter()
    const log = router?.query?.log

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))

    const [NotificationsData, setNotificationsData] = useState([])
    const [TotalRecords, setTotalRecords] = useState(0)
    const [TotalPages, setTotalPages] = useState(2)

    const [Loaded, setLoaded] = useState(false)
    const [PageSize, setPageSize] = useState(5)

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    const [LogDetails, setLogDetails] = useState({})
    const [LogKPIs, setLogKPIs] = useState({})
    const [LogContent, setLogContent] = useState([])

    const loadLog = async (log, load) => {
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify(log)
            const response = await axios.post(
                '/api/notifications/log',
                Body,
                config
            )

            setLogDetails(response?.data?.data?.logInfo)
            setLogContent(response?.data?.data?.logData)
            setLogKPIs(response?.data?.data?.kpisData)

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
        loadLog(log, true)
    }, [])

    const rowsPerPage = 10

    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (newPage) => {
        setCurrentPage(newPage);
    }

    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(startPage + 2, Math.ceil(LogContent?.length / rowsPerPage));

    if (endPage - startPage < 2) {
        startPage = Math.max(endPage - 2, 1);
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
                appTitle={ 'Notification Logs' }
                app={ 'notifications' }
            >
                <div className='col-lg-9'>
                    <div className='col-lg-12 app-notifications-dashboard'>
                        <h1 className='app-dashboard-header text-center'>{ LogDetails?.log_name } Details</h1>
                        <br />
                        <div className='row'>
                            {
                                LogKPIs?.total ?
                                    <div className='app-users-dashboard-kpi'>
                                        <div className='row'>
                                            <div className='col-lg-12 text-center'>
                                                <h1 className='app-dashboard-header'>{ LogDetails?.log_name } Details</h1>
                                            </div>
                                            <div className='col-lg-12 text-center'>
                                                <p>Updated by: { LogDetails?.updated_by }</p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col p-0 m-0'>
                                                <div className="card kpi-users-card-1">
                                                    <div className="card-body">
                                                        <h1 className='kpi-users-number'>
                                                            {
                                                                LogKPIs?.total ? LogKPIs?.total : 0
                                                            }
                                                        </h1>
                                                        <p className='kpi-users-title'>
                                                            Total
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col p-0 m-0'>
                                                <div className="card kpi-users-card-2">
                                                    <div className="card-body">
                                                        <h1 className='kpi-users-number'>
                                                            {
                                                                LogKPIs?.updated ? LogKPIs?.updated : 0
                                                            }
                                                        </h1>
                                                        <p className='kpi-users-title'>
                                                            Updated
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col p-0 m-0'>
                                                <div className="card kpi-users-card-3">
                                                    <div className="card-body">
                                                        <h1 className='kpi-users-number'>
                                                            {
                                                                LogKPIs?.created ? LogKPIs?.created : 0
                                                            }
                                                        </h1>
                                                        <p className='kpi-users-title'>
                                                            Created
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col p-0 m-0'>
                                                <div className="card kpi-users-card-4">
                                                    <div className="card-body">
                                                        <h1 className='kpi-users-number'>
                                                            {
                                                                LogKPIs?.not_existing ? LogKPIs?.not_existing : 0
                                                            }
                                                        </h1>
                                                        <p className='kpi-users-title'>
                                                            Not Found
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                            <div className='col-lg-12 app-logs-dashboard-records'>
                                <div className={ 'app-logs-dashboard-records-table' }>
                                    <table className="table" >
                                        <thead className='tableHead'>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody className='tableContent'>
                                            {
                                                LogContent?.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((log, index) => {
                                                    return (
                                                        <tr key={ index } className={ log?.log_type === 3 ? "table-success" : log?.log_type === 5 ? "table-danger" : "" }>
                                                            <th scope="row">{ index + 1 }</th>
                                                            <td>
                                                                {
                                                                    log?.log_type === 7 ?
                                                                        <a href={ `${API_URL}/${log?.downloading_link}` } target='_blank'>{ log?.log_description }</a>
                                                                        :
                                                                        log?.log_description
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    LogDetails?.log_type == 5 ?
                                                                        log?.log_type === 1 ?
                                                                            "Database Backup"
                                                                            :
                                                                            log?.log_type === 2 ?
                                                                                "Database Server Connection"
                                                                                :
                                                                                log?.log_type === 3 ?
                                                                                    "Backup Uploading Connection"
                                                                                    :
                                                                                    log?.log_type === 4 ?
                                                                                        "Backup Uploaded"
                                                                                        :
                                                                                        "Backup Server closed"
                                                                        : " "
                                                                }
                                                            </td>
                                                            <td>{ `${Moment(log?.created_at).format('HH:MM:ss A')} at ${Moment(log?.created_at).format('DD-MMM-YYYY')}` }</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            {
                                                currentPage != 1 ?
                                                    <>
                                                        <li className={ `page-item ${currentPage === 1 && 'disabled'}` }>
                                                            <button className="page-link" onClick={ () => handleClick(1) }>First</button>
                                                        </li>
                                                        <li className={ `page-item ${currentPage === 1 && 'disabled'}` }>
                                                            <button className="page-link" onClick={ () => handleClick(currentPage - 1) }>Previous</button>
                                                        </li>
                                                    </>
                                                    :
                                                    null
                                            }
                                            {
                                                [...Array(endPage - startPage + 1)].map((e, i) => (
                                                    <li key={ i + startPage } className={ `page-item ${currentPage === i + startPage ? 'active' : ''}` }>
                                                        <button className="page-link" onClick={ () => handleClick(i + startPage) }>{ i + startPage }</button>
                                                    </li>
                                                ))
                                            }
                                            {
                                                currentPage != Math.ceil(LogContent?.length / rowsPerPage) ?
                                                    <>
                                                        <li className={ `page-item ${currentPage === Math.ceil(LogContent?.length / rowsPerPage) && 'disabled'}` }>
                                                            <button className="page-link" onClick={ () => handleClick(currentPage + 1) }>Next</button>
                                                        </li>
                                                        <li className={ `page-item ${currentPage === Math.ceil(LogContent?.length / rowsPerPage) && 'disabled'}` }>
                                                            <button className="page-link" onClick={ () => handleClick(Math.ceil(LogContent?.length / rowsPerPage)) }>Last</button>
                                                        </li>
                                                    </>
                                                    :
                                                    null
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default Notifications