import DashboardLayout from '../../../hocs/DashboardLayout'
import Layout from '../../../hocs/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Moment from 'moment'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Loader from '../../../hocs/Loader'
import CompliancePagination from '../../../modules/CompliancePagination'
import FilterComponent from './Filters'
import Filters from './Filters'

// import Chart from "react-apexcharts"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const Compliance = () => {
    // const Chart = dynamic(() => import('react-apexcharts'), {})
    const router = useRouter()
    
    const [Loaded, setLoaded] = useState(false)
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
	const [FilterType, setFilterType] = useState(2)
	const [CustomFilterType, setCustomFilterType] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const Date_Var = new Date()
    const yesterday = Moment(new Date(Date.now() - 86400000)).format('YYYY-MM-DD')
    const currentYear = Date_Var.getFullYear()
    const [Month, setMonth] = useState(("0" + (Date_Var.getMonth() + 1)).slice(-2))
    const [Year, setYear] = useState(currentYear)
    const [MonthYear, setMonthYear] = useState(currentYear)
    const [CurrentDate, setCurrentDate] = useState(Date_Var.getFullYear()+"-"+ ("0" + (Date_Var.getMonth() + 1)).slice(-2)+"-"+("0" + Date_Var.getDate()).slice(-2))
    const [FromDate, setFromDate] = useState(Date_Var.getFullYear()+"-"+ ("0" + (Date_Var.getMonth() + 1)).slice(-2)+"-"+("0" + Date_Var.getDate()).slice(-2))
    const [ToDate, setToDate] = useState(Date_Var.getFullYear()+"-"+ ("0" + (Date_Var.getMonth() + 1)).slice(-2)+"-"+("0" + Date_Var.getDate()).slice(-2))
    const year = 2023
    const years = Array.from(new Array(currentYear - year + 1),( val, index) => index + year)

    
    const LoadDayStats = async(inputDate) => {
    }
    const LoadMonthlyStats = async(inputDate) => {
    }
    const LoadAnnualStats = async(inputDate) => {
    }
    const LoadCustomStats = async(toDate, fromDate) => {
    }

    const [PageSize, setPageSize] = useState(5)
    const [TotalRecords, setTotalRecords] = useState(0)
    const [TotalPages, setTotalPages] = useState(2)
    const [TrendData, setTrendData] = useState([])
    const [Sortby, setSortby] = useState('created_at')
    const [SortDirection, setSortDirection] = useState("down")
    const user = useSelector(state=>state.auth.user)
    const [SearchQuery, setSearchQuery] = useState("")
    const [KPITrend, setKPITrend] = useState({})
    const onSearchQueryChange = (e) => {
        setSearchQuery(e.target.value)
        searchReviews(e.target.value, PageSize, 1)
    }

    const onPageSizeChange = (e, value) => {
        e.preventDefault()
        setPageSize(value)
        loadReviews(1, value, Sortby, SortDirection)
    }
    const onSortChange = (e, value) => {
        e.preventDefault()
        setSortby(value)
        loadReviews(1, PageSize, value, SortDirection)
    }
    const onSortDirectionChange = (e, value) => {
        e.preventDefault()
        setSortDirection(value)
        loadReviews(1, PageSize, Sortby, value)
    }

    const lineSeries = (data) => [
        {
          name: "Total Forms",
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

    const series = [44, 55, 13, 43]
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
        legend :{
            show: true,
            position: "bottom"
        }
      
      
    }

    const config = {
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        }
    }

    const [Reviews, setReviews] = useState([])

    const [KPIs, setKPIs] = useState({})

    const searchReviews = async (search_query, page_size, page_number) => {

        const Body = JSON.stringify({search_query, page_size, page_number})

        try {
            const response = await axios.post(
                '/api/compliance/search',
                Body,
                config
            )
            setReviews(response?.data?.data?.results)
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

    const loadReviews = async (pNumber, pSize, sBy, sDirection) => {
        setLoaded(true)
        try {
            const Body = JSON.stringify({
                "page_number" : pNumber,
                "page_size" : pSize,
                "sort_by" : sBy,
                "sort_direction" : sDirection,
            })
            const response = await axios.post(
                '/api/compliance',
                Body,
                config
            )
            setTotalPages(response?.data?.data?.total_pages)
            setReviews(response?.data?.data?.results)
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
        setLoaded(false)

    }

    const loadKPIsandTrends = async (filterType, year, monthyear, month, date, customFilterType, fromdate, todate) => {
        try {
            const Body = JSON.stringify({filterType, year, monthyear, month, date, customFilterType, fromdate, todate})
            const response = await axios.post(
                '/api/compliance/kpisntrend',
                Body,
                config
            )
            setTrendData(response?.data?.data?.trend_data)
            setKPIs(response?.data?.data?.kpis)
            setKPITrend(response?.data?.data?.trend)
            
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

    const loadPaginatedData = async (pNumber, pSize, sBy, sDirection) => {
        setCurrentPage(pNumber)
        try {
            const Body = JSON.stringify({
                "page_number" : pNumber,
                "page_size" : pSize,
                "sort_by" : sBy,
                "sort_direction" : sDirection,
            })
            const response = await axios.post(
                '/api/compliance',
                Body,
                config
            )
            setTotalPages(response?.data?.data?.total_pages)
            setReviews(response?.data?.data?.results)
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

    }
    
    useEffect(() => {
        loadKPIsandTrends(FilterType, Year, MonthYear, Month, CurrentDate, CustomFilterType, FromDate, ToDate)
        loadReviews(1, PageSize, Sortby, SortDirection)
    }, [])

    
    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    if (user?.userType === 6) {
        router.push('/')
    }

    return (
        <Layout
            title={"Compliance"}
            content={"Compliance"}
        >
            <DashboardLayout
                appTitle={'Compliance'}
                app={'compliance'}
            >
                {
                    Loaded ?
                    <Loader />
                    :
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-5 app-dashboard-kpi'>
                                <div className='row'>
                                    <div className='col-8'>
                                        <h1 className='app-dashboard-header'>Total Summary</h1>
                                    </div>
                                </div>
                                {/* <p className='app-dashboard-subheader'>Compliance KPIs</p> */}
                                <Filters
                                    filterType={FilterType} 
                                    updateFilter={setFilterType} 
                                    Month={Month} 
                                    updateMonth={setMonth} 
                                    Year={Year} 
                                    updateYear={setYear} 
                                    MonthYear={MonthYear} 
                                    updateMonthYear={setMonthYear} 
                                    CurrentDate={CurrentDate} 
                                    updateCurrentDate={setCurrentDate} 
                                    FromDate={FromDate} 
                                    updateFromDate={setFromDate} 
                                    ToDate={ToDate} 
                                    updateToDate={setToDate} 
                                    years={years}
                                    loadData={loadKPIsandTrends}
                                    CustomFilterType={CustomFilterType}
                                    setCustomFilterType={setCustomFilterType}
                                />
                                <div className='row'>
                                    <div className='col-lg-3 p-0 m-0'>
                                        <div className="card kpi-card-1">
                                            <div className="card-body">
                                                <h1 className='kpi-number'>
                                                    {
                                                        KPIs?.created ? KPIs?.created : 0 
                                                    }
                                                </h1>
                                                <p className='kpi-title'>
                                                    Total
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 p-0 m-0'>
                                        <div className="card kpi-card-2">
                                            <div className="card-body">
                                                <h1 className='kpi-number'>
                                                    {
                                                        KPIs?.approved ? KPIs?.approved : 0 
                                                    }
                                                </h1>
                                                <p className='kpi-title'>
                                                    Approved
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 p-0 m-0'>
                                        <div className="card kpi-card-3">
                                            <div className="card-body">
                                                <h1 className='kpi-number'>
                                                    {
                                                        KPIs?.rejected ? KPIs?.rejected : 0 
                                                    }
                                                </h1>
                                                <p className='kpi-title'>
                                                    Rejected
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 p-0 m-0'>
                                        <div className="card kpi-card-4">
                                            <div className="card-body">
                                                <h1 className='kpi-number'>
                                                    {
                                                        KPIs?.referred ? KPIs?.referred : 0 
                                                    }
                                                </h1>
                                                <p className='kpi-title'>
                                                    Referred
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 app-dashboard-progress'>
                                <h1 className='app-dashboard-header'>Progress</h1>
                                {/* <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p> */}
                                {
                                    KPITrend ?
                                        (typeof window !== 'undefined') && <Chart options={pieChartOptions} series={KPITrend ? Object.values(KPITrend) : [0, 0, 0, 0]} type="pie" width={'100%'} />
                                    : <></>
                                }
                            </div>
                            <div className='col-lg-4 app-dashboard-trend'>
                                <h1 className='app-dashboard-header'>Trending Data</h1>
                                {/* <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p> */}
                                {/* <Chart options={lineOptions} series={lineSeries} type="line" height={210} /> */}
                                {
                                    TrendData.length > 0 ?
                                        (typeof window !== 'undefined') && <Chart options={lineOptions([TrendData].map(x => x.map(a => (a[0]))).flat(2), 2)} series={lineSeries([TrendData].map(x => x.map(a => (a[1]))).flat(2))} type="bar" height={210} />
                                    : <></>
                                }
                            </div>
                            <div className='col-lg-12 app-dashboard-records'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <h1 className='app-dashboard-header'>Recent Cases</h1>

                                    </div>
                                    <div className='col-lg-4'>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className='fa-solid fa-search' />
                                            </span>
                                            <input type="text"  className="form-control" value={SearchQuery} onChange={(e)=>{onSearchQueryChange(e)}} placeholder="Search Policy No# or Client" />
                                        </div>
                                    </div>
                                    <div className='col-lg-1'>
                                    </div>
                                    <div className='col-lg-4'>
                                        {/* <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p> */}
                                        <div className='row'>
                                            <div className="col-3 dropdown mx-1">
                                                <button className="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Page Size
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className={PageSize == 5 ? "dropdown-item active" : "dropdown-item"} onClick={(e)=>{onPageSizeChange(e, "5")}} href="#">5</a></li>
                                                    <li><a className={PageSize == 10 ? "dropdown-item active" : "dropdown-item"} onClick={(e)=>{onPageSizeChange(e, "10")}} href="#">10</a></li>
                                                    <li><a className={PageSize == 20 ? "dropdown-item active" : "dropdown-item"} onClick={(e)=>{onPageSizeChange(e, "20")}} href="#">20</a></li>
                                                    <li><a className={PageSize == 50 ? "dropdown-item active" : "dropdown-item"} onClick={(e)=>{onPageSizeChange(e, "50")}} href="#">50</a></li>
                                                    <li><a className={PageSize == 100 ? "dropdown-item active" : "dropdown-item"} onClick={(e)=>{onPageSizeChange(e, "100")}} href="#">100</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-3 dropdown">
                                                <button className="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Sort by
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className={Sortby === "policy_number" ? "dropdown-item active" : "dropdown-item"} onClick={(e)=>{onSortChange(e, "policy_number")}} href="#">Policy Number</a></li>
                                                    <li><a className={Sortby === "created_at" ? "dropdown-item active" : "dropdown-item"} onClick={(e)=>{onSortChange(e, "created_at")}} href="#">Creation Time</a></li>
                                                </ul>
                                            </div>
                                            <div className='col-1'>
                                                <button
                                                    onClick={(e)=>{onSortDirectionChange(e, "up")}}
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
                                                    onClick={(e)=>{onSortDirectionChange(e, "down")}}
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
                                <div className='app-dashboard-records-table'>
                                    <table className="table" >
                                        <thead className='tableHead'>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Policy Number</th>
                                                <th scope="col">Advisor</th>
                                                <th scope="col">Client Name</th>
                                                {
                                                    user?.userType === 1?
                                                        <th scope="col">Gatekeeper / ARC</th>
                                                    : ""
                                                }
                                                <th scope="col">Last Review Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className='tableContent'>
                                            {
                                                Reviews ?
                                                    Reviews.map(
                                                        (review, i) => {
                                                            return(
                                                                <tr key={i}>
                                                                    <th scope="row">{i+1}</th>
                                                                    <td>
                                                                        {
                                                                            review?.policy_number
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            review?.advisor
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            review?.clientName
                                                                        }
                                                                    </td>
                                                                    {
                                                                        user?.userType === 1?
                                                                        <td>
                                                                            {review?.review_user}
                                                                        </td>
                                                                        : ""
                                                                    }
                                                                    <td>
                                                                        {
                                                                            Moment(review?.last_review_date).format('DD MMMM YYYY, hh:mm A')
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            review?.referred ?
                                                                                review?.status === 0 ? "New Case" :
                                                                                review?.status === 1 ? "Reffered - Approved" :
                                                                                review?.status === 2 ? "Reffered - Not Approved" :
                                                                                review?.status === 7 ? "Reffered - Not Approved & Editing" :
                                                                                review?.status === 3 ? "Reffered - Referred" :
                                                                                review?.status === 4 ? "Reffered - Partial Approved" : 
                                                                                review?.status === 5 ? "Reffered - Picked Up" : ""
                                                                            :
                                                                                review?.status === 0 ? "New Case" :
                                                                                review?.status === 1 ? "Approved" :
                                                                                review?.status === 2 ? "Not Approved" :
                                                                                review?.status === 7 ? "Not Approved & Editing" :
                                                                                review?.status === 3 ? "Referred" :
                                                                                review?.status === 4 ? "Partial Approved" : 
                                                                                review?.status === 5 ? "Picked Up" : ""
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
                                                                                        onClick={()=> {
                                                                                            router.push({
                                                                                                pathname: "/apps/compliance/documents/view",
                                                                                                query: { dId: review?.id }
                                                                                            })
                                                                                        }}
                                                                                    >
                                                                                        <i className="fa-solid fa-eye"></i>
                                                                                        View
                                                                                    </button>
                                                                                :<></>
                                                                            }
                                                                            {
                                                                                !user?.is_superuser && user?.userType === 1 ?
                                                                                    review?.status === 1 ?
                                                                                        <button 
                                                                                            type="button" 
                                                                                            className={
                                                                                                "btn btn-sm btn-success"                                                                          
                                                                                            }
                                                                                            onClick={()=> {
                                                                                                router.push({
                                                                                                    pathname: "/apps/compliance/documents/view",
                                                                                                    query: { dId: review?.id }
                                                                                                })
                                                                                            }}
                                                                                        >
                                                                                            <i className="fa-solid fa-eye"></i>
                                                                                            View
                                                                                        </button>
                                                                                    :
                                                                                        <button 
                                                                                            type="button" 
                                                                                            className={"btn btn-sm btn-secondary"}
                                                                                            onClick={()=> {
                                                                                                router.push({
                                                                                                    pathname: "/apps/compliance/documents/edit",
                                                                                                    query: { dId: review?.id }
                                                                                                })
                                                                                            }}
                                                                                        >
                                                                                            <i className='bi pe-none me-2 fa-solid fa-pen-to-square' />
                                                                                            Edit
                                                                                        </button>
                                                                                    :
                                                                                <></>
                                                                            }
                                                                            {
                                                                                !user?.is_superuser && user?.userType === 2 ?
                                                                                    review?.status === 1 || review?.status === 3 || review?.status === 5 || review?.referred ?
                                                                                        <button 
                                                                                            type="button" 
                                                                                            className={
                                                                                                "btn btn-sm btn-success"                                                                          
                                                                                            }
                                                                                            onClick={()=> {
                                                                                                router.push({
                                                                                                    pathname: "/apps/compliance/documents/view",
                                                                                                    query: { dId: review?.id }
                                                                                                })
                                                                                            }}
                                                                                        >
                                                                                            <i className="fa-solid fa-eye"></i>
                                                                                            View
                                                                                        </button>
                                                                                    :
                                                                                        <button 
                                                                                            type="button" 
                                                                                            className={"btn btn-sm btn-secondary"}
                                                                                            onClick={()=> {
                                                                                                router.push({
                                                                                                    pathname: "/apps/compliance/documents/edit",
                                                                                                    query: { dId: review?.id }
                                                                                                })
                                                                                            }}
                                                                                        >
                                                                                            <i className='bi pe-none me-2 fa-solid fa-pen-to-square' />
                                                                                            Edit
                                                                                        </button>
                                                                                    :
                                                                                <></>
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
                                <br/>
                                <div className='d-flex justify-content-center'>
                                    {/* <CompliancePagination totalRecords={TotalRecords} pageLimit={PageSize} paginationSearchQuery={SearchQuery} paginationOrderBy={Sortby} paginationOrderDirection={SortDirection} onPageChanged={loadReviews} /> */}
                                    {
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

export default Compliance