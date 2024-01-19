import UserPagination from '../../../modules/UserPagination'
import React, { useState, useEffect } from 'react'
import Layout from '../../../hocs/Layout'
import DashboardLayout from '../../../hocs/DashboardLayout'
import Loader from '../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Moment from 'moment'
import dynamic from 'next/dynamic'

const Users = () => {
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
    const [Users, setUsers] = useState([])
    const [KPIs, setKPIs] = useState([])
    const [TrendData, setTrendData] = useState([])
    const [KPITrend, setKPITrend] = useState({})
    const [Sortby, setSortby] = useState('Full_Name')
    const [UserType, setUserType] = useState('all')
    const [SortDirection, setSortDirection] = useState("asc")
    const [PageSize, setPageSize] = useState(15)
    const [TotalRecords, setTotalRecords] = useState(0)
    const [TotalPages, setTotalPages] = useState(2)
    const [SearchQuery, setSearchQuery] = useState("")

    const onSearchQueryChange = (e) => {
        setSearchQuery(e.target.value)
        loadUsers(1, PageSize, Sortby, SortDirection, e.target.value, UserType, false)
    }
    const onPageSizeChange = (e, value) => {
        e.preventDefault()
        setPageSize(value)
        loadUsers(1, value, Sortby, SortDirection, SearchQuery, UserType, true)
    }
    const onSortChange = (e, value) => {
        e.preventDefault()
        setSortby(value)
        loadUsers(1, PageSize, value, SortDirection, SearchQuery, UserType, true)
    }
    const onUserTypeChange = (e, value) => {
        e.preventDefault()
        setUserType(value)
        loadUsers(1, PageSize, Sortby, SortDirection, SearchQuery, value, true)
    }
    const onSortDirectionChange = (e, value) => {
        e.preventDefault()
        setSortDirection(value)
        loadUsers(1, PageSize, Sortby, value, SearchQuery, UserType, true)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const loadUsers = async (pNumber, pSize, sBy, sDirection, searchQuery, userType, load) => {
        setCurrentPage(pNumber)
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify({
                "page_number": pNumber,
                "page_size": pSize,
                "sort_by": sBy,
                "sort_direction": sDirection,
                "search_query": searchQuery,
                "user_type": userType,
            })
            const response = await axios.post(
                '/api/users/list/',
                Body,
                config
            )

            setTotalPages(response?.data?.data?.total_pages)
            setUsers(response?.data?.data?.results)
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
    const loadUsersKPIs = async () => {
        try {
            const response = await axios.get(
                '/api/users/kpis',
                config
            )
            setKPIs(response?.data?.data)

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

    useEffect(() => {
        loadUsersKPIs()
        loadUsers(1, PageSize, Sortby, SortDirection, SearchQuery, UserType, true)
    }, [])


    // Chart Configurtions
    // Pie Chart
    const pieChartOptions = {
        // colors: ["#FEEAE5", "#FFE5E9", "#FFFAE4", "#F6E4FF"],
        chart: {
            type: 'pie',
        },
        labels: ['Approved', 'Not Approved', 'Referred'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
        legend: {
            show: true,
            position: "bottom"
        }


    }

    // Line Chart

    const lineSeries = (data) => [
        {
            name: "Total Users",
            data: data
        }
    ]

    const lineOptions = (header, max) => ({
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: true
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: header,
            title: {
                text: 'Dates'
            }
        },
        yaxis: {
            title: {
                text: 'Count'
            },
        },
        legend: {
            show: false
        }
    })
    return (
        <Layout
            title={ "User Management" }
            content={ "User Management" }
        >
            <DashboardLayout

                appTitle={ 'Users' }
                app={ 'users' }
            >
                {
                    Loaded ?
                        <Loader />
                        :
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-12 app-users-dashboard-kpi'>
                                    <div className='row'>
                                        <div className='col-8'>
                                            <h1 className='app-dashboard-header'>Total Summary</h1>
                                        </div>
                                    </div>
                                    {/* <p className='app-dashboard-subheader'>Compliance KPIs</p> */ }
                                    {/* <Filters
                                        filterType={ FilterType }
                                        updateFilter={ setFilterType }
                                        Month={ Month }
                                        updateMonth={ setMonth }
                                        Year={ Year }
                                        updateYear={ setYear }
                                        MonthYear={ MonthYear }
                                        updateMonthYear={ setMonthYear }
                                        CurrentDate={ CurrentDate }
                                        updateCurrentDate={ setCurrentDate }
                                        FromDate={ FromDate }
                                        updateFromDate={ setFromDate }
                                        ToDate={ ToDate }
                                        updateToDate={ setToDate }
                                        years={ years }
                                        loadData={ loadKPIsandTrends }
                                        CustomFilterType={ CustomFilterType }
                                        setCustomFilterType={ setCustomFilterType }
                                    /> */}
                                    <div className='row'>
                                        <div className='col p-0 m-0'>
                                            <div className="card kpi-users-card-1">
                                                <div className="card-body">
                                                    <h1 className='kpi-users-number'>
                                                        {
                                                            KPIs?.all_users ? KPIs?.all_users : 0
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
                                                            KPIs?.admin_users ? KPIs?.admin_users : 0
                                                        }
                                                    </h1>
                                                    <p className='kpi-users-title'>
                                                        Admins
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col p-0 m-0'>
                                            <div className="card kpi-users-card-3">
                                                <div className="card-body">
                                                    <h1 className='kpi-users-number'>
                                                        {
                                                            KPIs?.manager_users ? KPIs?.manager_users : 0
                                                        }
                                                    </h1>
                                                    <p className='kpi-users-title'>
                                                        Managers
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col p-0 m-0'>
                                            <div className="card kpi-users-card-4">
                                                <div className="card-body">
                                                    <h1 className='kpi-users-number'>
                                                        {
                                                            KPIs?.gk_users ? KPIs?.gk_users + KPIs?.arc_users : 0
                                                        }
                                                    </h1>
                                                    <p className='kpi-users-title'>
                                                        ARC/GKs
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col p-0 m-0'>
                                            <div className="card kpi-users-card-5">
                                                <div className="card-body">
                                                    <h1 className='kpi-users-number'>
                                                        {
                                                            KPIs?.advisor_users ? KPIs?.advisor_users : 0
                                                        }
                                                    </h1>
                                                    <p className='kpi-users-title'>
                                                        Advisors
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 app-users-dashboard-records'>
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <h1 className='app-dashboard-header'>Users</h1>

                                        </div>
                                        <div className='col-lg-4'>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <i className='fa-solid fa-search' />
                                                </span>
                                                <input type="text" className="form-control" value={ SearchQuery } onChange={ (e) => { onSearchQueryChange(e) } } placeholder="Name or Email" />
                                            </div>
                                        </div>
                                        <div className='col-lg-1'>
                                        </div>
                                        <div className='col-lg-4'>
                                            {/* <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p> */ }
                                            <div className='row'>
                                                <div className="col-3 dropdown mx-1">
                                                    <button className="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Page Size
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className={ PageSize == 5 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "5") } } href="#">5</a></li>
                                                        <li><a className={ PageSize == 10 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "10") } } href="#">10</a></li>
                                                        <li><a className={ PageSize == 20 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "20") } } href="#">20</a></li>
                                                        <li><a className={ PageSize == 50 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "50") } } href="#">50</a></li>
                                                        <li><a className={ PageSize == 100 ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onPageSizeChange(e, "100") } } href="#">100</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-3 dropdown">
                                                    <button className="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Sort by
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className={ Sortby === "Full_Name" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onSortChange(e, "Full_Name") } } href="#">Name</a></li>
                                                        <li><a className={ Sortby === "user__email" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onSortChange(e, "user__email") } } href="#">Email</a></li>
                                                        <li><a className={ Sortby === "ID_Number" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onSortChange(e, "ID_Number") } } href="#">ID Number</a></li>

                                                    </ul>
                                                </div>
                                                <div className="col-3 dropdown">
                                                    <button className="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        By User Type
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className={ UserType === "all" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onUserTypeChange(e, "all") } } href="#">All</a></li>
                                                        <li><a className={ UserType === "admins" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onUserTypeChange(e, "admins") } } href="#">Admins</a></li>
                                                        <li><a className={ UserType === "1" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onUserTypeChange(e, "1") } } href="#">ARCs</a></li>
                                                        <li><a className={ UserType === "2" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onUserTypeChange(e, "2") } } href="#">Gatekeepers</a></li>
                                                        <li><a className={ UserType === "3" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onUserTypeChange(e, "3") } } href="#">Managers</a></li>
                                                        <li><a className={ UserType === "5" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onUserTypeChange(e, "5") } } href="#">BACs</a></li>
                                                        <li><a className={ UserType === "6" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onUserTypeChange(e, "6") } } href="#">Advisors</a></li>

                                                    </ul>
                                                </div>
                                                <div className='col-1'>
                                                    <button
                                                        onClick={ (e) => { onSortDirectionChange(e, "desc") } }
                                                        className={
                                                            SortDirection === "desc" ?
                                                                'btn btn-sm btn-sfp btn-secondary'
                                                                :
                                                                'btn btn-sm btn-outline-secondary'
                                                        }
                                                    >
                                                        <i className="fa-solid fa-arrow-up-wide-short"></i>
                                                    </button>
                                                </div>
                                                <div className='col-1'>
                                                    <button
                                                        onClick={ (e) => { onSortDirectionChange(e, "asc") } }
                                                        className={
                                                            SortDirection === "asc" ?
                                                                'btn btn-sm btn-sfp btn-secondary'
                                                                :
                                                                'btn btn-sm btn-outline-secondary'
                                                        }
                                                    >
                                                        <i className="fa-solid fa-arrow-down-wide-short"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='app-users-dashboard-records-table'>
                                        <table className="table" >
                                            <thead className='tableHead'>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">ID Number</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='tableContent'>
                                                {
                                                    Users?.map((user_row, index) => {
                                                        return (
                                                            <tr key={ index }>
                                                                <th scope="row">{ index + 1 }</th>
                                                                <td>{ user_row?.full_name }</td>
                                                                <td>{ user_row?.email }</td>
                                                                <td>{ user_row?.id_number }</td>
                                                                <td>{ user_row?.email }</td>
                                                                <td>
                                                                    {
                                                                        user_row?.is_superuser ? "Admin" :
                                                                            user_row?.user_type === 0 ? "Admin" :
                                                                                user_row?.user_type === 1 ? "ARC" :
                                                                                    user_row?.user_type === 2 ? "Gatekeeper" :
                                                                                        user_row?.user_type === 3 ? "Manager" :
                                                                                            user_row?.user_type === 4 ? "Manager" :
                                                                                                user_row?.user_type === 5 ? "BAC" :
                                                                                                    user_row?.user_type === 6 ? "Advisor" : ""
                                                                    }
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        onClick={ (e) => { router.push({ pathname: "/apps/users/edit", query: { uId: user_row?.user_id } }) } }
                                                                        className='btn btn-sm btn-sfp btn-primary mx-1'
                                                                    >
                                                                        <i className='fa-solid fa-edit'></i>
                                                                    </button>
                                                                    <button
                                                                        onClick={ (e) => { router.push({ pathname: "/apps/users/view", query: { uId: user_row?.user_id } }) } }
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
                                        {/* <CompliancePagination totalRecords={TotalRecords} pageLimit={PageSize} paginationSearchQuery={SearchQuery} paginationOrderBy={Sortby} paginationOrderDirection={SortDirection} onPageChanged={loadUsers} /> */ }
                                        {
                                            TotalRecords !== 0 && TotalPages != 1 ?
                                                <UserPagination
                                                    currentPage={ currentPage }
                                                    setPage={ setCurrentPage }
                                                    totalPages={ TotalPages }
                                                    pageSize={ PageSize }
                                                    sBy={ Sortby }
                                                    searchQuery={ SearchQuery }
                                                    sDirection={ SortDirection }
                                                    uType={ UserType }
                                                    onPageChange={ loadUsers }
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

export default Users