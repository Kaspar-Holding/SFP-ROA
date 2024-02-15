import DashboardLayout from '../../../../hocs/DashboardLayout'
import Layout from '../../../../hocs/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Moment from 'moment'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Loader from '../../../../hocs/Loader'
import CompliancePagination from '../../../../modules/CompliancePagination'
import AppLayout from '../../../../hocs/AppLayout'
import InsightsLayout from '../../../../hocs/InsightsLayout'
import { currencyFormatter, numberFormatter } from '../../../../modules/formatter'
import FilterComponent from '../Filters'
import Filters from './Filters'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const GatekeepingInsights = () => {
    // const Chart = dynamic(() => import('react-apexcharts'), {})
    const router = useRouter()
    const [Loaded, setLoaded] = useState(false)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const [FilterType, setFilterType] = useState(2)
    const [CustomFilterType, setCustomFilterType] = useState(1)

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


    const chart1Series = [
        {
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
    ]

    const chart1Options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            fontFamily: "Open Sans",
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'smooth',
            dashArray: [0, 0, 0]
        },
        title: {
            text: 'Page Statistics',
            fontFamily: "Open Sans",
            align: 'left'
        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: [
                '01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'
            ],
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val + " (mins)"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " per session"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                }
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    }

    const totalGatekeepingSeries = (name, data, type, name_1, data_1, type_1, name_2, data_2, type_2) => [
        {
            name: name,
            data: data,
            color: '#007A8D',
            type: type ? type : "line"
        },
        {
            name: name_2,
            data: data_2,
            color: '#FFF000',
            type: type_2 ? type_2 : "line"
        },
        {
            name: name_1,
            data: data_1,
            color: '#00FF00',
            type: type_1 ? type_1 : "line"
        },
        // {
        //     name: name_2,
        //     data: data_2,
        //     color: '#000000',
        //     type: type_2 ? type_2 : "line"
        // }
    ]

    const mixSeries = (series_1_name, series_1_data, series_1_type, series_2_name, series_2_data, series_2_type,) => [
        {
            name: series_1_name,
            data: series_1_data,
            type: series_1_type,
        },
        {
            name: series_2_name,
            data: series_2_data,
            type: series_2_type,
        },
    ]

    const mixOptions = (categories, title, y_title, y_title1) => ({
        chart: {
            height: 350,
            type: 'line',
            fontFamily: "Open Sans",
        },
        stroke: {
            width: [0, 4],
            curve: 'smooth',
        },
        title: {
            text: title
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: categories
        },
        yaxis: [{
            title: {
                text: y_title
            },

        },
        {
            opposite: true,
            title: {
                text: y_title1,
                formatter: function (val) {
                    return val + " %"
                }
            }
        }
        ],
        legend: {
            show: false
        }

    })

    const totalGatekeepingOptions = (categories, title, y_title, y_title1) => ({
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            fontFamily: "Open Sans",
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'smooth',
            dashArray: [0, 0, 0]
        },
        title: {
            text: title,
            fontFamily: "Open Sans",
            align: 'left'
        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: categories,
        },
        yaxis: [{
            title: {
                text: y_title
            },

        },
        {
            opposite: true,
            title: {
                text: y_title1,
                formatter: function (val) {
                    return val + " %"
                }
            }
        }
        ],
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                }
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    })

    const columnChartOptions = (categories, title) => ({
        chart: {
            type: 'bar',
            fontFamily: "Open Sans",
            zoom: {
                enabled: false
            },
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: categories,
        },
        yaxis: {
            title: {
                text: 'Total Gatekeeping'
            }
        },
        title: {
            text: title,
            fontFamily: "Open Sans",
            align: 'left'
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "R " + val + " "
                }
            }
        }
    })

    const totalRegionGatekeepingOptions = (categories, title) => ({
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            fontFamily: "Open Sans",
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'smooth',
            dashArray: [0, 0, 0]
        },
        title: {
            text: title,
            fontFamily: "Open Sans",
            align: 'left'
        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: categories,
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    })

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
    const pieChartOptions = (title, labels) => ({
        // colors: ["#FEEAE5", "#FFE5E9", "#FFFAE4"],
        chart: {
            type: 'pie',
            fontFamily: "Open Sans",
        },
        labels: labels,
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
        title: {
            text: title,
            fontFamily: "Open Sans",
            align: 'left'
        },
        legend: {
            show: true,
            position: "bottom"
        }


    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const [KPIs, setKPIs] = useState({})
    const [GatekeepingTrend, setGatekeepingTrend] = useState([])
    const [GatekeepingTrendList, setGatekeepingTrendList] = useState([])
    const [RejectionGatekeepingTrend, setRejectionGatekeepingTrend] = useState([])
    const [DatewiseGatekeepingTrend, setDatewiseGatekeepingTrend] = useState([])
    const [RegionGatekeepingTrend, setRegionGatekeepingTrend] = useState([])
    const [BusinessTypeGatekeepingTrend, setBusinessTypeGatekeepingTrend] = useState([])
    // console.log(BusinessTypeGatekeepingTrend)

    const LoadData = async (filterType, year, monthyear, month, date, customFilterType, fromdate, todate, region, gatekeeper, businessType) => {
        setLoaded(true)
        const Body = JSON.stringify({ filterType, year, monthyear, month, date, customFilterType, fromdate, todate, region, gatekeeper, businessType })

        try {
            const response = await axios.post(
                '/api/insights/gatekeeping',
                Body,
                config
            )

            setKPIs(response?.data?.data?.kpis)
            setGatekeepingTrend(response?.data?.data?.businessType_trend)
            setGatekeepingTrendList(response?.data?.data?.businessType_trend_list)
            setDatewiseGatekeepingTrend(response?.data?.data?.date_gatekeeping_trend)
            // setRegions(response?.data?.data?.top_regions)
            // setAdvisors(response?.data?.data?.top_advisors)
            // setRegionGatekeepingTrend(response?.data?.data?.region_gatekeeping_trend)
            setBusinessTypeGatekeepingTrend(response?.data?.data?.date_businesstype_trend)
            setRejectionGatekeepingTrend(response?.data?.data?.businessType_rejection_trend)
        } catch (error) {

        }
        setLoaded(false)
    }

    // Filter Data
    const [Regions, setRegions] = useState([])
    const [Gatekeepers, setGatekeepers] = useState([])
    const [SelectedRegions, setSelectedRegions] = useState("all")
    const [SelectedGatekeepers, setSelectedGatekeepers] = useState("all")
    const [BusinessType, setBusinessType] = useState("all")
    // Load Regions
    const LoadRegions = async () => {
        try {
            const response = await axios.get('/api/account/regions', config)
            // console.log(first)
            setRegions(response?.data?.data?.regions)

        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
    }
    // Load Advisors
    const LoadGatekeepers = async () => {
        try {
            const response = await axios.get('/api/account/gatekeepers', config)
            setGatekeepers(response?.data?.data?.gatekeepers)
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
    }

    // Load Region based Advisors
    const LoadRegionAdvisors = async (region) => {
        const Body = JSON.stringify({ region })
        try {
            const response = await axios.post('/api/insights/agents', Body, config)
            setAdvisors(response?.data?.data?.advisors)

        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
    }

    useEffect(() => {
        LoadData(FilterType, Year, MonthYear, Month, CurrentDate, CustomFilterType, FromDate, ToDate, SelectedRegions, SelectedGatekeepers, BusinessType)
        LoadGatekeepers()
        LoadRegions()
    }, [])


    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    return (
        <Layout
            title={ "Insights" }
            content={ "Insights" }
        >
            <InsightsLayout>
                <div className='container-fluid'>
                    <Filters
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
                        loadData={ LoadData }
                        CustomFilterType={ CustomFilterType }
                        setCustomFilterType={ setCustomFilterType }
                        Regions={ Regions }
                        gatekeepers={ Gatekeepers }
                        SelectedRegions={ SelectedRegions }
                        SelectedGatekeepers={ SelectedGatekeepers }
                        setSelectedRegions={ setSelectedRegions }
                        setSelectedGatekeepers={ setSelectedGatekeepers }
                        loadAdvisors={ LoadRegionAdvisors }
                        BusinessType={ BusinessType }
                        setBusinessType={ setBusinessType }
                    />
                    {
                        Loaded ?
                            <Loader />
                            :
                            <>
                                <div className='row row-cols-4'>
                                    <div className='col'>
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <h5 className="scoreCard">{ numberFormatter('en-ZA', 0).format(KPIs?.total_reviews) }</h5>
                                                <span className='scoreCard-title'>Total Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <h5 className="scoreCard">{ numberFormatter('en-ZA', 0).format(KPIs?.total_approvals) }</h5>
                                                <span className='scoreCard-title'>Total Approvals</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <h5 className="scoreCard">{ numberFormatter('en-ZA', 0).format(KPIs?.total_denied) }</h5>
                                                <span className='scoreCard-title'>Total Denied</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <h5 className="scoreCard">{ numberFormatter('en-ZA', 0).format(KPIs?.total_partial_approvals) }</h5>
                                                <span className='scoreCard-title'>Total Partial Approvals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <div className='col-lg-3 col-md-6 col-sm-12 bg-white py-2'>
                                        {
                                            (typeof window !== 'undefined') && <Chart options={ pieChartOptions("Type of Business", [GatekeepingTrend].map(x => x.map(a => (a[0]))).flat(2)) } series={ [GatekeepingTrend].map(x => x.map(a => (a[1]))).flat(2) } type="pie" width={ '100%' } />
                                        }
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12 bg-white py-2'>
                                        {
                                            (typeof window !== 'undefined') && <Chart options={ pieChartOptions("Reason for Rejection", [RejectionGatekeepingTrend].map(x => x.map(a => (a[0]))).flat(2)) } series={ [RejectionGatekeepingTrend].map(x => x.map(a => (a[1]))).flat(2) } type="pie" width={ '100%' } />
                                        }
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 bg-white'>
                                        {
                                            (typeof window !== 'undefined') && <Chart options={ totalGatekeepingOptions([DatewiseGatekeepingTrend].map(x => x.map(a => (a[0]))).flat(2), "Gatekeeping Approval", "Reviews", "Percentage Approved at 1st Review") } series={ totalGatekeepingSeries("Reviews", [DatewiseGatekeepingTrend].map(x => x.map(a => (a[1]))).flat(2), "bar", "First Approval", [DatewiseGatekeepingTrend].map(x => x.map(a => (a[2]))).flat(2), "bar", "First Approval Percentage", [DatewiseGatekeepingTrend].map(x => x.map(a => (a[3]))).flat(2), "bar") } type="bar" height={ 350 } />
                                        }
                                    </div>
                                    {/* <div className='col-lg-3 col-md-6 col-sm-12 bg-white'>
                                    {
                                        (typeof window !== 'undefined') && <Chart options={totalGatekeepingOptions([BusinessTypeGatekeepingTrend].map(x => x.map(a => (a[0]))).flat(2),"Business Type Trend", "Reviews", "Approved at 1st Review")} series={totalGatekeepingSeries("Reviews",[BusinessTypeGatekeepingTrend].map(x => x.map(a => (a[1]))).flat(2), "bar", "First Approval",[BusinessTypeGatekeepingTrend].map(x => x.map(a => (a[2]))).flat(2), "bar")} type="bar" height={350} />
                                    }
                                </div> */}
                                    {/* <div className='col-lg-5 col-md-6 col-sm-12 bg-white'>
                                    {
                                        (typeof window !== 'undefined') && <Chart options={mixOptions([BusinessTypeGatekeepingTrend].map(x => x.map(a => (a[0]))).flat(2),'Business Type based Trend', "Total Gatekeeping", "Percentage of Gatekeeping")} series={mixSeries("Total Gatekeeping", [BusinessTypeGatekeepingTrend].map(x => x.map(a => (a[1]))).flat(2), 'column', "Percentage of Gatekeeping", [BusinessTypeGatekeepingTrend].map(x => x.map(a => (a[2]))).flat(2), 'line')} type="line" height={350} />
                                    }
                                </div> */}
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-12 bg-white insight-gatekeeping-card py-1'>
                                        <h5 class="app-dashboard-header">Reviews per Business Type</h5>
                                        <table className="table mx-1">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Business Type</th>
                                                    <th scope="col">Total Reviews</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    GatekeepingTrendList.map(
                                                        (row, key) => {
                                                            return (
                                                                <tr key={ key }>
                                                                    <th scope="row">{ key + 1 }</th>
                                                                    <td>{ row?.businessType }</td>
                                                                    <td>{ numberFormatter('en-ZA', 0).format(row?.reviews) }</td>
                                                                </tr>
                                                            )
                                                        }
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 bg-white insight-gatekeeping-card py-1'>
                                        <h5 class="app-dashboard-header">Approved at 1st Review per Business Type</h5>
                                        <table className="table mx-1">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Business Type</th>
                                                    <th scope="col">Approved at 1st Review</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    GatekeepingTrendList.map(
                                                        (row, key) => {
                                                            return (
                                                                <tr key={ key }>
                                                                    <th scope="row">{ key + 1 }</th>
                                                                    <td>{ row?.businessType }</td>
                                                                    <td>{ numberFormatter('en-ZA', 0).format(row?.rejected_reviews) }</td>
                                                                </tr>
                                                            )
                                                        }
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* <div className='col-lg-4 col-md-6 col-sm-12 bg-white insight-gatekeeping-card'>
                                    <h5 class="app-dashboard-header">10 Advisors</h5>
                                    <table className="table mx-1">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Gatekeeping</th>
                                            </tr>
                                        </thead>
                                        <tbody>                                            
                                            {
                                                Advisors.map(
                                                    (row, key) => {
                                                        return(
                                                            <tr key={key}>
                                                                <th scope="row">{key+1}</th>
                                                                <td>{row?.advisor}</td>
                                                                <td>{row?.email}</td>
                                                                <td>{currencyFormatter('en-ZA','ZAR').format(row?.gatekeeping)}</td>
                                                            </tr>
                                                        )
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div> */}
                                </div>
                                <br />
                                <br />
                            </>
                    }
                </div>

            </InsightsLayout>
        </Layout>
    )
}

export default GatekeepingInsights