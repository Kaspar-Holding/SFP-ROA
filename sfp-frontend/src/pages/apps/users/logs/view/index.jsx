
import React, { useState, useEffect } from 'react'
import Layout from '../../../../../hocs/Layout'
import DashboardLayout from '../../../../../hocs/DashboardLayout'
import Loader from '../../../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Moment from 'moment'
import dynamic from 'next/dynamic'
import { API_URL } from '../../../../../config'

const LogList = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const lId = router?.query?.lId

    const [LogDetails, setLogDetails] = useState({})
    const [LogKPIs, setLogKPIs] = useState({})
    const [LogContent, setLogContent] = useState([])
    const [Loaded, setLoaded] = useState(false)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const loadLog = async (lId, load) => {
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify(lId)
            const response = await axios.post(
                '/api/users/logs/details',
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
        loadLog(lId, true)
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
    return (
        <Layout
            title={ "Log Details" }
            content={ "Log Details" }
        >
            <DashboardLayout
                appTitle={ LogDetails?.log_name ? `${LogDetails?.log_name} \n Details` : 'View Log' }
                app={ "users" }
            >
                {
                    Loaded ?
                        <Loader />
                        :
                        <div className='col-lg-9'>
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
                                                                        log?.log_type === 1 ?
                                                                            "User Updating"
                                                                            :
                                                                            log?.log_type === 2 ?
                                                                                "User Found"
                                                                                :
                                                                                log?.log_type === 3 ?
                                                                                    "User Updated"
                                                                                    :
                                                                                    log?.log_type === 4 ?
                                                                                        "User Profile Created"
                                                                                        :
                                                                                        log?.log_type === 5 ?
                                                                                            "New User Created"
                                                                                            :
                                                                                            log?.log_type === 7 ?
                                                                                                "Downloading Link"
                                                                                                :
                                                                                                "User does not exist"
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
                }
            </DashboardLayout>

        </Layout>
    )
}

export default LogList