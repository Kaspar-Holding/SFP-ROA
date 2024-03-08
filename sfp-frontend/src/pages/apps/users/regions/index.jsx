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

const RegionsList = () => {
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
    const [Regions, setRegions] = useState([])
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
        loadRegions(1, PageSize, Sortby, SortDirection, e.target.value, UserType, false)
    }
    const onPageSizeChange = (e, value) => {
        e.preventDefault()
        setPageSize(value)
        loadRegions(1, value, Sortby, SortDirection, SearchQuery, UserType, true)
    }
    const onSortChange = (e, value) => {
        e.preventDefault()
        setSortby(value)
        loadRegions(1, PageSize, value, SortDirection, SearchQuery, UserType, true)
    }
    const onUserTypeChange = (e, value) => {
        e.preventDefault()
        setUserType(value)
        loadRegions(1, PageSize, Sortby, SortDirection, SearchQuery, value, true)
    }
    const onSortDirectionChange = (e, value) => {
        e.preventDefault()
        setSortDirection(value)
        loadRegions(1, PageSize, Sortby, value, SearchQuery, UserType, true)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const loadRegions = async (load) => {
        load ? setLoaded(true) : ""
        try {
            const response = await axios.get(
                '/api/users/regions',
                config
            )

            setRegions(response?.data?.data?.regions)

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
    const onRegionDelete = (e, region, regionId) => {
        e.preventDefault()
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this and all data related to ${region} will be deleted.!`,
            type: "error",
            showCancelButton: !0,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            confirmButtonClass: "btn btn-sfp",
            cancelButtonClass: "btn btn-danger ml-1",
            buttonsStyling: !1,
        }).then(function (t) {
            t.value
                ? deleteRegion(true, region, regionId)
                : t.dismiss === Swal.DismissReason.cancel &&
                Swal.fire({
                    title: "Cancelled",
                    text: `Your store ${region} is safe :)`,
                    type: "error",
                    confirmButtonClass: "btn btn-success",
                })
        })

    }
    const deleteRegion = async (load, region, regionId) => {
        load ? setLoaded(true) : ""
        const Body = JSON.stringify(regionId)
        console.log(Body)
        try {
            const response = await axios.post(
                '/api/users/regions/delete',
                Body,
                config
            )

            loadRegions(true)
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `${region} deleted successfully`,
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
        load ? setLoaded(false) : ""

    }

    useEffect(() => {
        loadRegions(true)
    }, [])
    return (
        <Layout
            title={ "User Region Management" }
            content={ "User Region Management" }
        >
            <DashboardLayout

                appTitle={ 'Regions' }
                app={ 'users' }
            >
                {
                    Loaded ?
                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? <Loader color='sfp-color' />
                            : user?.email?.includes('fs4p') ? <Loader color='fs4p-color' />
                                : user?.email?.includes('sanlam') ? <Loader color='sfp-sanlam' />
                                    : <Loader color='sfp-color' />
                        :
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-12 app-users-list-records'>
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <h1 className='app-dashboard-header'>Regions</h1>

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

                                    </div>
                                    <div className='app-users-list-records-table'>
                                        <table className="table" >
                                            <thead className='tableHead'>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Region</th>
                                                    <th scope="col">Manager</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='tableContent'>
                                                {
                                                    Regions?.map((row, index) => {
                                                        return (
                                                            <tr key={ index }>
                                                                <th scope="row">{ index + 1 }</th>
                                                                <td>{ row?.region }</td>
                                                                <td>{ row?.manager }</td>
                                                                <td>
                                                                    <button
                                                                        onClick={ (e) => { router.push({ pathname: "/apps/users/regions/view", query: { rId: row?.id } }) } }
                                                                        className='btn btn-sm btn-sfp btn-primary mx-1'
                                                                    >
                                                                        <i className='fa-solid fa-eye'></i>
                                                                    </button>
                                                                    <button
                                                                        onClick={ (e) => { onRegionDelete(e, row?.region, row?.id) } }
                                                                        className='btn btn-sm btn-danger mx-1'
                                                                    >
                                                                        <i className='fa-solid fa-trash'></i>
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
                                        {/* <CompliancePagination totalRecords={TotalRecords} pageLimit={PageSize} paginationSearchQuery={SearchQuery} paginationOrderBy={Sortby} paginationOrderDirection={SortDirection} onPageChanged={loadRegions} /> */ }
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
                                                    onPageChange={ loadRegions }
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

export default RegionsList