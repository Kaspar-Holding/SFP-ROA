import LogPagination from '../../../../modules/LogPagination'
import React, { useState, useEffect } from 'react'
import Layout from '../../../../hocs/Layout'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import Loader from '../../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Moment from 'moment'
import dynamic from 'next/dynamic'

const LogsList = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const [FilterType, setFilterType] = useState(2)
    const [CustomFilterType, setCustomFilterType] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const Date_Var = new Date()
    const yesterday = Moment(new Date(Date.now() - 86400000)).format('YYYY-MM-DD')
    const currentYear = Date_Var.getFullYear()
    const [Month, setMonth] = useState(("0" + (Date_Var.getMonth() + 1)).slice(-2))
    const [Year, setYear] = useState(currentYear)
    const [MonthYear, setMonthYear] = useState(currentYear)
    const [CurrentDate, setCurrentDate] = useState(Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2))
    const [FromDate, setFromDate] = useState(Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2))
    const [ToDate, setToDate] = useState(Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2))
    const year = 2023
    const years = Array.from(new Array(currentYear - year + 1), (val, index) => index + year)


    const [Loaded, setLoaded] = useState(false)
    const [Logs, setLogs] = useState([])
    const [KPIs, setKPIs] = useState([])
    const [TrendData, setTrendData] = useState([])
    const [KPITrend, setKPITrend] = useState({})
    const [Sortby, setSortby] = useState('Full_Name')
    const [UserType, setUserType] = useState('all')
    const [SortDirection, setSortDirection] = useState("asc")
    const [PageSize, setPageSize] = useState(20)
    const [TotalRecords, setTotalRecords] = useState(0)
    const [TotalPages, setTotalPages] = useState(2)
    const [SearchQuery, setSearchQuery] = useState("")

    const onSearchQueryChange = (e) => {
        setSearchQuery(e.target.value)
        loadLogs(1, PageSize, Sortby, SortDirection, e.target.value, UserType, false)
    }
    const onPageSizeChange = (e, value) => {
        e.preventDefault()
        setPageSize(value)
        loadLogs(1, value, Sortby, SortDirection, SearchQuery, UserType, true)
    }
    const onSortChange = (e, value) => {
        e.preventDefault()
        setSortby(value)
        loadLogs(1, PageSize, value, SortDirection, SearchQuery, UserType, true)
    }
    const onUserTypeChange = (e, value) => {
        e.preventDefault()
        setUserType(value)
        loadLogs(1, PageSize, Sortby, SortDirection, SearchQuery, value, true)
    }
    const onSortDirectionChange = (e, value) => {
        e.preventDefault()
        setSortDirection(value)
        loadLogs(1, PageSize, Sortby, value, SearchQuery, UserType, true)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const loadLogs = async (pNumber, pSize, load) => {
        setCurrentPage(pNumber)
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify({
                "page_number": pNumber,
                "page_size": pSize,
            })
            const response = await axios.post(
                '/api/users/logs/',
                Body,
                config
            )

            setTotalPages(response?.data?.data?.total_pages)
            setLogs(response?.data?.data?.results)
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
        loadLogs(1, PageSize, true)
    }, [])
    return (
        <Layout
            title={ "User Management" }
            content={ "User Management" }
        >
            <DashboardLayout

                appTitle={ 'Logs' }
                app={ 'users' }
            >
                {
                    Loaded ?
                        <Loader />
                        :
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-12 app-users-list-records'>
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <h1 className='app-dashboard-header'>Logs</h1>

                                        </div>
                                        <div className='col-lg-5'>
                                        </div>
                                        <div className='col-lg-4'>
                                            {/* <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p> */ }
                                            <div className='row'>
                                                <div className="col-3 dropdown mx-1">
                                                    <button className="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Page Size
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className={ PageSize == 20 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "20") } } href="#">20</a></li>
                                                        <li><a className={ PageSize == 50 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "50") } } href="#">50</a></li>
                                                        <li><a className={ PageSize == 100 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "100") } } href="#">100</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='app-users-list-records-table'>
                                        <table className="table" >
                                            <thead className='tableHead'>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Log Name</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='tableContent'>
                                                {
                                                    Logs?.map((log, index) => {
                                                        return (
                                                            <tr key={ index }>
                                                                <th scope="row">{ index + 1 }</th>
                                                                <td>{ log?.log_name }</td>
                                                                <td>
                                                                    { log?.log_type === 1 ?
                                                                        "Bulk Updated"
                                                                        :
                                                                        ""
                                                                    }
                                                                </td>
                                                                <td>{ log?.status === 1 ? "Completed" : "Ongoing" }</td>
                                                                <td>
                                                                    <button
                                                                        onClick={ (e) => { router.push({ pathname: "/apps/users/logs/view", query: { lId: log?.id } }) } }
                                                                        className='btn btn-sm btn-sfp btn-primary mx-1'
                                                                    >
                                                                        <i className='fa-solid fa-eye'></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <br />
                                    <div className='d-flex justify-content-center'>
                                        {/* <CompliancePagination totalRecords={TotalRecords} pageLimit={PageSize} paginationSearchQuery={SearchQuery} paginationOrderBy={Sortby} paginationOrderDirection={SortDirection} onPageChanged={loadLogs} /> */ }
                                        {
                                            TotalRecords !== 0 && TotalPages != 1 ?
                                                <LogPagination
                                                    currentPage={ currentPage }
                                                    setPage={ setCurrentPage }
                                                    totalPages={ TotalPages }
                                                    pageSize={ PageSize }
                                                    sBy={ Sortby }
                                                    searchQuery={ SearchQuery }
                                                    sDirection={ SortDirection }
                                                    uType={ UserType }
                                                    onPageChange={ loadLogs }
                                                />
                                                :
                                                <></>
                                        }

                                    </div>

                                </div>
                            </div>
                        </div>
                }
            </DashboardLayout>

        </Layout>
    )
}

export default LogsList