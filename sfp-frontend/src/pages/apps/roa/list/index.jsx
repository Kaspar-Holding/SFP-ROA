import { useRouter } from 'next/router'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import Layout from '../../../../hocs/Layout'
import Loader from '../../../../hocs/Loader'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import Moment from 'moment'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })


const ROAList = () => {
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
    const [Forms, setForms] = useState([])
    const [KPIs, setKPIs] = useState([])
    const [TrendData, setTrendData] = useState([])
    const [KPITrend, setKPITrend] = useState({})
    const [Sortby, setSortby] = useState('created_at')
    const [SortDirection, setSortDirection] = useState("down")
    const [PageSize, setPageSize] = useState(5)
    const [TotalRecords, setTotalRecords] = useState(0)
    const [TotalPages, setTotalPages] = useState(2)
    const [SearchQuery, setSearchQuery] = useState("")

    const onSearchQueryChange = (e) => {
        setSearchQuery(e.target.value)
        loadForms(1, PageSize, Sortby, SortDirection, e.target.value, false)
    }
    const onPageSizeChange = (e, value) => {
        e.preventDefault()
        setPageSize(value)
        loadReviews(1, value, Sortby, SortDirection, SearchQuery, true)
    }
    const onSortChange = (e, value) => {
        e.preventDefault()
        setSortby(value)
        loadReviews(1, PageSize, value, SortDirection, SearchQuery, true)
    }
    const onSortDirectionChange = (e, value) => {
        e.preventDefault()
        setSortDirection(value)
        loadReviews(1, PageSize, Sortby, value, SearchQuery, true)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const loadForms = async (pNumber, pSize, sBy, sDirection, searchQuery, load) => {
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify({
                "page_number": pNumber,
                "page_size": pSize,
                "sort_by": sBy,
                "sort_direction": sDirection,
                "search_query": searchQuery,
            })
            const response = await axios.post(
                '/api/roa',
                Body,
                config
            )
            setTotalPages(response?.data?.data?.total_pages)
            setForms(response?.data?.data?.results)
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
        loadForms(1, PageSize, Sortby, SortDirection, SearchQuery, true)
    }, [])


    return (
        <Layout
            title={ "Record of Advice" }
            content={ "Record of Advice" }
        >
            <DashboardLayout
                appTitle={ 'ROA List' }
                app={ 'roa' }
            >
                {
                    Loaded ?
                        <Loader />
                        :
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-12 roa-list-records'>
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <h1 className='app-dashboard-header'>Recent Cases</h1>

                                        </div>
                                        <div className='col-lg-4'>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <i className='fa-solid fa-search' />
                                                </span>
                                                <input type="text" className="form-control" value={ SearchQuery } onChange={ (e) => { onSearchQueryChange(e) } } placeholder="Search Client Name / ID / Phone Number" />
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
                                                        <li><a className={ Sortby === "policy_number" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onSortChange(e, "policy_number") } } href="#">Policy Number</a></li>
                                                        <li><a className={ Sortby === "created_at" ? "dropdown-item active" : "dropdown-item" } onClick={ (e) => { onSortChange(e, "created_at") } } href="#">Creation Time</a></li>
                                                    </ul>
                                                </div>
                                                <div className='col-1'>
                                                    <button
                                                        onClick={ (e) => { onSortDirectionChange(e, "up") } }
                                                        className={
                                                            SortDirection === "up" ?
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
                                                        onClick={ (e) => { onSortDirectionChange(e, "down") } }
                                                        className={
                                                            SortDirection === "down" ?
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
                                    <div className='roa-list-records-table'>
                                        <table className="table" >
                                            <thead className='tableHead'>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Client Name</th>
                                                    <th scope="col">Client ID Number</th>
                                                    <th scope="col">Client Phone</th>
                                                    <th scope="col">Client Email</th>
                                                    <th scope="col">Updated At</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='tableContent'>
                                                {
                                                    Forms ?
                                                        Forms.map(
                                                            (form, i) => {
                                                                return (
                                                                    <tr key={ i }>
                                                                        <th scope="row">{ i + 1 }</th>
                                                                        <td>
                                                                            {
                                                                                form?.client_name
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                form?.client_id_number
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                form?.client_contact
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                form?.client_email
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                Moment(form?.updated_at).format('DD MMMM YYYY, hh:mm A')
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                form?.status === 0 ? "New Form" :
                                                                                    form?.status === 1 ? "Completed" : ""
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                                {

                                                                                    user?.is_superuser ?
                                                                                        <button
                                                                                            type="button"
                                                                                            className={
                                                                                                "btn btn-sm btn-success"
                                                                                            }
                                                                                            onClick={ () => {
                                                                                                router.push({
                                                                                                    pathname: "/apps/roa/documents/view",
                                                                                                    query: { fId: form?.id }
                                                                                                })
                                                                                            } }
                                                                                        >
                                                                                            <i className="fa-solid fa-eye"></i>
                                                                                            View
                                                                                        </button>
                                                                                        :
                                                                                        <button
                                                                                            type="button"
                                                                                            className={
                                                                                                "btn btn-sm btn-primary"
                                                                                            }
                                                                                            onClick={ () => {
                                                                                                router.push({
                                                                                                    pathname: "/apps/roa/documents/edit",
                                                                                                    query: { fId: form?.id }
                                                                                                })
                                                                                            } }
                                                                                        >
                                                                                            <i className="fa-solid fa-eye"></i>
                                                                                            Edit
                                                                                        </button>
                                                                                }

                                                                                {/* <button 
                                                                            type="button" 
                                                                            className="btn btn-danger"
                                                                            onClick={(e)=>{deleteQuestionBtn(e, row?.id)}}
                                                                        >
                                                                            <i className='bi pe-none me-2 fa-solid fa-trash' />
                                                                            Delete
                                                                        </button> */}
                                                                            </div>
                                                                        </td>

                                                                    </tr>
                                                                )
                                                            }
                                                        )
                                                        : <></>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <br />
                                    <div className='d-flex justify-content-center'>
                                        {/* <CompliancePagination totalRecords={TotalRecords} pageLimit={PageSize} paginationSearchQuery={SearchQuery} paginationOrderBy={Sortby} paginationOrderDirection={SortDirection} onPageChanged={loadReviews} /> */ }
                                        {/* {
                                    TotalRecords !== 0 && TotalPages != 1 ?
                                    <CompliancePagination 
                                        currentPage={currentPage}
                                        setPage={setCurrentPage}
                                        totalPages={TotalPages}
                                        pageSize={PageSize}
                                        sBy={Sortby}
                                        sDirection={SortDirection}
                                        onPageChange={loadPaginatedData}
                                    />
                                    :
                                    <></>
                                } */}

                                    </div>

                                </div>
                            </div>
                        </div>
                }
            </DashboardLayout>
        </Layout>
    )
}

export default ROAList