import DashboardLayout from '@/hocs/DashboardLayout'
import Layout from '@/hocs/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Moment from 'moment'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Loader from '@/hocs/Loader'

// import Chart from "react-apexcharts"


const Compliance = () => {
    // const Chart = dynamic(() => import('react-apexcharts'), {})
    const router = useRouter()
    
    const [Loaded, setLoaded] = useState(false)
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)

    const user = useSelector(state=>state.auth.user)
    const [SearchQuery, setSearchQuery] = useState("")
    const [KPITrend, setKPITrend] = useState({})
    const onSearchQueryChange = (e) => {
        setSearchQuery(e.target.value)
        searchReviews(e.target.value, 10, 1)
    }

    const lineSeries = [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
    ]

    const lineOptions = {
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
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
                enabled: true,
        },
        stroke: {
                curve: 'smooth'
        },
        title: {
                text: 'Average High & Low Temperature',
                align: 'left'
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Temperature'
            },
            min: 5,
            max: 40
        },
        legend: {
            show: false
        }
    }

    const series = [44, 55, 13, 43]
    const pieChartOptions = {
        // colors: ["#FEEAE5", "#FFE5E9", "#FFFAE4", "#F6E4FF"],
        chart: {
            type: 'pie',
        },
        labels: ['Created', 'Approved', 'Not Approved', 'Referred'],
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


    const loadReviews = async () => {
        setLoaded(true)
        try {
            const response = await axios.get(
                '/api/compliance',
                config
            )
            setReviews(response?.data?.data?.data)
            setKPIs(response?.data?.data?.trend)
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
        setLoaded(false)

    }
    

    useEffect(() => {
        loadReviews()
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
                                <h1 className='app-dashboard-header'>Total Summary</h1>
                                <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p>
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
                                <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p>
                                {/* {
                                    KPITrend ?
                                        (typeof window !== 'undefined') && <Chart options={pieChartOptions} series={KPITrend ? Object.values(KPITrend) : [0, 0, 0, 0]} type="pie" width={'100%'} />
                                    : <></>
                                } */}
                            </div>
                            <div className='col-lg-4 app-dashboard-trend'>
                                <h1 className='app-dashboard-header'>Trending Data</h1>
                                <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p>
                                {/* <Chart options={lineOptions} series={lineSeries} type="line" height={210} /> */}
                            </div>
                            <div className='col-lg-12 app-dashboard-records'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <h1 className='app-dashboard-header'>Recent Cases</h1>

                                    </div>
                                    <div className='col-lg-3'>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">
                                                <i className='fa-solid fa-search' />
                                            </span>
                                            <input type="text"  class="form-control" value={SearchQuery} onChange={(e)=>{onSearchQueryChange(e)}} placeholder="Search Policy No# here" />
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                    </div>
                                    <div className='col-lg-3'>
                                        <p className='app-dashboard-subheader'>Compliance KPIs in last 15 days</p>
                                    </div>
                                    
                                </div>
                                <hr/>
                                <table className="table">
                                    <thead className='tableHead'>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Policy Number</th>
                                            <th scope="col">Advisor</th>
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
                                                                {
                                                                    user?.userType === 1?
                                                                    <td>
                                                                        {review?.gatekeeper}
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
                                                                            
                                                                            !user?.is_superuser && (review?.status != 1) && (review?.user_id !== user?.id && review?.referred) ?
                                                                            <button 
                                                                                type="button" 
                                                                                className={"btn btn-secondary"}
                                                                                onClick={()=> {
                                                                                    review?.user_id !== user?.id ?
                                                                                    router.push({
                                                                                        pathname: "/apps/compliance/documents/view",
                                                                                        query: { dId: review?.id }
                                                                                    })
                                                                                    :
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
                                                                            <button 
                                                                                type="button" 
                                                                                className={
                                                                                    "btn btn-success"                                                                          
                                                                                }
                                                                                onClick={()=> {
                                                                                    router.push({
                                                                                        pathname: "/apps/compliance/documents/view",
                                                                                        query: { dId: review?.id }
                                                                                    })
                                                                                }}
                                                                            >
                                                                                <i class="fa-solid fa-eye"></i>
                                                                                View
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
                        </div>
                    </div>
                }
            </DashboardLayout>
        </Layout>
    )
}

export default Compliance