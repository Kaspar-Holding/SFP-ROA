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
import CompliancePagination from '@/modules/CompliancePagination'
import AppLayout from '@/hocs/AppLayout'
import InsightsLayout from '@/hocs/InsightsLayout'

// import Chart from "react-apexcharts"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const monitoring = () => {
    // const Chart = dynamic(() => import('react-apexcharts'), {})
    const router = useRouter()
    
    const [Loaded, setLoaded] = useState(false)
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const user = useSelector(state=>state.auth.user)
	const [FilterType, setFilterType] = useState(2)

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


    const lineSeries = (data) => [
        {
          name: "Trend of last 15 days",
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

    
    useEffect(() => {
        
    }, [])

    
    // if (typeof window != 'undefined' && !isAuthenticated) {
    //     router.push('/auth/login')
    // }

    // if (user?.userType === 6) {
    //     router.push('/')
    // }

    return (
        <Layout
            title={"Monitoring Insights"}
            content={"Monitoring Insights"}
        >
            <InsightsLayout>
                <div className='row'>
                    hi
                </div>
                
            </InsightsLayout>
        </Layout>
    )
}

export default monitoring