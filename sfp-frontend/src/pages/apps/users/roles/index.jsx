import UserPagination from '../../../../modules/UserPagination'
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

const UsersList = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [CurrentRow, setCurrentRow] = useState(0)

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
    const [PageSize, setPageSize] = useState(20)
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
    const on_Table_value_update = (e, i) => {
        let newData = [...Users]
        newData[i][e.target.name] = e.target.value
        setUsers(newData)
    }
    const on_Table_status_update = (e, i, status) => {
        let newData = [...Users]
        if (status === 1) {
            newData[i][e.target.name] = 0
        } else {
            newData[i][e.target.name] = 1
        }
        setUsers(newData)
    }

    const updateUserStatus = async (e, uId, userType) => {
        e.preventDefault()
        const Body = JSON.stringify({
            uId,
            userType
        })
        try {
            const response = await axios.post(
                '/api/users/roles/update',
                Body,
                config
            )
            setKPIs(response?.data?.data)
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `${response?.data?.data?.message}`,
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

    useEffect(() => {
        loadUsersKPIs()
        loadUsers(1, PageSize, Sortby, SortDirection, SearchQuery, UserType, true)
    }, [])
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
                                <div className='col-lg-12 app-users-list-records'>
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
                                    <div className='app-users-list-records-table'>
                                        <table className="table" >
                                            <thead className='tableHead'>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">User Type</th>
                                                </tr>
                                            </thead>
                                            <tbody className='tableContent'>
                                                {
                                                    Users?.map((user, index) => {
                                                        return (
                                                            <tr key={ index }>
                                                                <th scope="row">{ index + 1 }</th>
                                                                <td>{ user?.full_name }</td>
                                                                <td>{ user?.email }</td>
                                                                <td>{ user?.id_number }</td>
                                                                <td onMouseOver={ (e) => { setCurrentRow(`${user?.user_id}`) } }>
                                                                    {/* {
                                                                        user?.is_superuser ? "Admin" :
                                                                            user?.user_type === 0 ? "Admin" :
                                                                                user?.user_type === 1 ? "ARC" :
                                                                                    user?.user_type === 2 ? "Gatekeeper" :
                                                                                        user?.user_type === 3 ? "Manager" :
                                                                                            user?.user_type === 4 ? "Manager" :
                                                                                                user?.user_type === 5 ? "BAC" :
                                                                                                    user?.user_type === 6 ? "Advisor" : ""
                                                                    } */}
                                                                    {
                                                                        CurrentRow === `${user?.user_id}` ?
                                                                            <div className="input-group">
                                                                                <select autoFocus onChange={ (e) => { on_Table_value_update(e, index) } } name="user_type" value={ user?.user_type } className="form-select form-select-sm">
                                                                                    <option value="0">Admin</option>
                                                                                    <option value="1">ARC</option>
                                                                                    <option value="2">Gatekeeper</option>
                                                                                    <option value="3">Manager</option>
                                                                                    <option value="5">BAC</option>
                                                                                    <option value="6">Advisor</option>
                                                                                </select>
                                                                                <button class="input-group-text" onClick={ (e) => { updateUserStatus(e, user?.user_id, user?.user_type); setCurrentRow(0) } } type="button"><i class="fa-solid fa-check-to-slot"></i></button>
                                                                            </div>
                                                                            :
                                                                            user?.is_superuser ? "Admin" :
                                                                                Number(user?.user_type) === 0 ? "Admin" :
                                                                                    Number(user?.user_type) === 1 ? "ARC" :
                                                                                        Number(user?.user_type) === 2 ? "Gatekeeper" :
                                                                                            Number(user?.user_type) === 3 ? "Manager" :
                                                                                                Number(user?.user_type) === 4 ? "Manager" :
                                                                                                    Number(user?.user_type) === 5 ? "BAC" :
                                                                                                        Number(user?.user_type) === 6 ? "Advisor" : ""
                                                                        // : formatter.format(0)
                                                                    }
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
                                    {/* Update Role Modal */ }

                                </div>
                            </div>
                        </div>
                }
            </DashboardLayout>

        </Layout>
    )
}

export default UsersList