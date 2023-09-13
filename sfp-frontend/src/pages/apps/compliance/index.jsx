import DashboardLayout from '@/hocs/DashboardLayout'
import Layout from '@/hocs/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Moment from 'moment'
import { useRouter } from 'next/router'
// import Chart from "react-apexcharts"


const Compliance = () => {
    const router = useRouter()
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
            width: 380,
            type: 'pie',
        },
        labels: ['Total', 'Approved', 'Not Approved', 'Referred'],
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

    const loadReviews = async () => {

        try {
            const response = await axios.get(
                '/api/compliance',
                config
            )
            setReviews(response?.data?.data?.data)
            setKPIs(response?.data?.data?.kpis)
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
        loadReviews()
    }, [])



    return (
        <Layout
            title={"Compliance"}
            content={"Compliance"}
        >
            <DashboardLayout
                appTitle={'Compliance'}
                app={'compliance'}
            >
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
                                                    KPIs?.total
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
                                                    KPIs?.approved
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
                                                    KPIs?.rejected
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
                                                    KPIs?.referred
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
                            {/* <Chart options={pieChartOptions} series={series} type="pie" width={250} /> */}
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
                                        <input type="text" class="form-control" placeholder="Search Policy No# here" />
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
                                                            <th scope="row">1</th>
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
                                                                    Moment(review?.last_review_date).format('hh:mm A, DD MMMM YYYY')
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    review?.status === 0 ? "New Case" :
                                                                    review?.status === 1 ? "Approved" :
                                                                    review?.status === 2 ? "Not Approved" :
                                                                    review?.status === 3 ? "Referred" :
                                                                    review?.status === 4 ? "Partial Approved" : ""
                                                                }
                                                            </td>
                                                            <td>
                                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                    {
                                                                        
                                                                        review?.status == 0 ?
                                                                        <button 
                                                                            type="button" 
                                                                            className={"btn btn-secondary"}
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
                                                                            <i className='bi pe-none me-2 fa-solid fa-pen-to-square' />
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
            </DashboardLayout>
        </Layout>
    )
}

export default Compliance