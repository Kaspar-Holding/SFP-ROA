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
import Filters from '../Filters'
// import FilterComponent from './Filters'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const MonitoringInsights = () => {
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

    const totalMonitoringSeries = (name, data, type, name_1, data_1, type_1, name_2, data_2, type_2, name_3, data_3, type_3) => [
        {
            name: name,
            data: data,
            color: '#008000',
            type: type ? type : "line"
        },
        {
            name: name_1,
            data: data_1,
            color: '#FFF000',
            type: type_1 ? type_1 : "line"
        },
        {
            name: name_2,
            data: data_2,
            color: '#FF0000',
            type: type_2 ? type_2 : "line"
        },
        {
            name: name_3,
            data: data_3,
            color: '#FFA500',
            type: type_3 ? type_3 : "line"
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

    const totalMonitoringOptions = (categories, title, y_title, y_title1) => ({
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: true
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
        }]
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
                text: 'Total Monitoring'
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

    const totalRegionMonitoringOptions = (categories, title) => ({
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
    const pieChartOptions = (title) => ({
        // colors: ["#FEEAE5", "#FFE5E9", "#FFFAE4"],
        chart: {
            type: 'pie',
            zoom: {
                enabled: true
            },
            fontFamily: "Open Sans",
            toolbar: {
                show: true
            }
        },
        labels: ['Approved at 1st Review', 'Non-Approved at 1st Review', 'Partial at 1st Review'],
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
    const [MonitoringTrend, setMonitoringTrend] = useState([])
    const [DateMonitoringTrend, setDateMonitoringTrend] = useState([])
    const [RegionMonitoringTrend, setRegionMonitoringTrend] = useState([])
    const [StartingPoint, setStartingPoint] = useState('all')
    const [BusinessTypeMonitoringTrend, setBusinessTypeMonitoringTrend] = useState([])
    const [RegionsData, setRegionsData] = useState([])
    const [RegionsRecurring, setRegionsRecurring] = useState([])
    const [AdvisorsData, setAdvisorsData] = useState([])
    const [AdvisorsRecurring, setAdvisorsRecurring] = useState([])

    const LoadData = async (filterType, year, monthyear, month, date, customFilterType, fromdate, todate, region, advisor, businessType, starting_point) => {
        setLoaded(true)
        const Body = JSON.stringify({ filterType, year, monthyear, month, date, customFilterType, fromdate, todate, region, advisor, businessType, starting_point })

        try {
            const response = await axios.post(
                '/api/insights/monitoring',
                Body,
                config
            )

            setKPIs(response?.data?.data?.kpis)
            setMonitoringTrend(response?.data?.data?.trend)
            setDateMonitoringTrend(response?.data?.data?.date_monitoring_trend)
            setRegionsData(response?.data?.data?.top_regions)
            // setRegionsRecurring(response?.data?.data?.top_regions)
            setAdvisorsData(response?.data?.data?.top_advisors)
            // setAdvisorsRecurring(response?.data?.data?.top_advisors_recurring)
            // setRegionMonitoringTrend(response?.data?.data?.region_monitoring_trend)
            // setBusinessTypeMonitoringTrend(response?.data?.data?.businessType_monitoring_trend)

        } catch (error) {

        }
        setLoaded(false)
    }


    // Filter Data
    const [Regions, setRegions] = useState([])
    const [Advisors, setAdvisors] = useState([])
    const [SelectedRegions, setSelectedRegions] = useState("all")
    const [SelectedAdvisors, setSelectedAdvisors] = useState("all")
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
    const LoadAdvisors = async () => {
        try {
            const response = await axios.get('/api/account/agents', config)

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
        LoadData(FilterType, Year, MonthYear, Month, CurrentDate, CustomFilterType, FromDate, ToDate, SelectedRegions, SelectedAdvisors, BusinessType, StartingPoint)
        LoadAdvisors()
        LoadRegions()
    }, [])

    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (key) => {
        if (sortBy === key) {
            // Toggle sort order if the same column is clicked again
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            // Sort by the selected column in ascending order
            setSortBy(key);
            setSortOrder('asc');
        }
    };

    const sortedAdvisorsData = [...AdvisorsData].sort((a, b) => {
        const factor = sortOrder === 'asc' ? 1 : -1;
        if (sortBy) {
            if (a[sortBy] < b[sortBy]) return -1 * factor;
            if (a[sortBy] > b[sortBy]) return 1 * factor;
            return 0;
        }
        return 0;
    });

    const [RegionSortBy, setRegionSortBy] = useState(null);
    const [RegionSortOrder, setRegionSortOrder] = useState('asc');

    const handleRegionSort = (key) => {
        if (RegionSortBy === key) {
            // Toggle RegionSort order if the same column is clicked again
            setRegionSortOrder(RegionSortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            // RegionSort by the selected column in ascending order
            setRegionSortBy(key);
            setRegionSortOrder('asc');
        }
    };

    const sortedRegionsData = [...RegionsData].sort((a, b) => {
        const factor = RegionSortOrder === 'asc' ? 1 : -1;
        if (RegionSortBy) {
            if (a[RegionSortBy] < b[RegionSortBy]) return -1 * factor;
            if (a[RegionSortBy] > b[RegionSortBy]) return 1 * factor;
            return 0;
        }
        return 0;
    });

    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    user?.full_name

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
                        advisors={ Advisors }
                        SelectedRegions={ SelectedRegions }
                        SelectedAdvisors={ SelectedAdvisors }
                        setSelectedRegions={ setSelectedRegions }
                        setSelectedAdvisors={ setSelectedAdvisors }
                        loadAdvisors={ LoadRegionAdvisors }
                        BusinessType={ BusinessType }
                        setBusinessType={ setBusinessType }
                        monitoring={ true }
                        startingPoint={ StartingPoint }
                        setStartingPoint={ setStartingPoint }
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
                                        <div className="card text-center firstApproval">
                                            <div className="card-body">
                                                <h5 className="scoreCard">{ numberFormatter('en-ZA', 0).format(KPIs?.first_approval) }</h5>
                                                <span className='scoreCard-title'>1st Review Approvals</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="card text-center partialApproval">
                                            <div className="card-body">
                                                <h5 className="scoreCard">{ numberFormatter('en-ZA', 0).format(KPIs?.first_partial_approval) }</h5>
                                                <span className='scoreCard-title'>1st Review Partial Approvals</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="card text-center notApproval">
                                            <div className="card-body">
                                                <h5 className="scoreCard">{ numberFormatter('en-ZA', 0).format(KPIs?.first_not_approved) }</h5>
                                                <span className='scoreCard-title'>1st Review Not Approvals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-12 bg-white py-2'>
                                        {
                                            DateMonitoringTrend.length == 0 ? <></> : (typeof window !== 'undefined') && <Chart options={ pieChartOptions("Advice Monitoring Approval") } series={ MonitoringTrend ? Object.values(MonitoringTrend) : [0, 0, 0] } type="pie" width={ '100%' } />
                                        }
                                    </div>
                                    <div className='col-lg-8 col-md-6 col-sm-12 bg-white py-2'>
                                        {
                                            DateMonitoringTrend.length == 0 ? <></> : (typeof window !== 'undefined') && <Chart options={ totalMonitoringOptions([DateMonitoringTrend].map(x => x.map(a => (a[0]))).flat(2), "Total Cases Monitored", "Count", "Percentage of Approved at 1st Review") } series={ totalMonitoringSeries("Approved at 1st Review", [DateMonitoringTrend].map(x => x.map(a => (a[1]))).flat(2), "bar", "Percentage of Approved at 1st Review", [DateMonitoringTrend].map(x => x.map(a => (a[4]))).flat(2), "line", "Non-Approved at 1st Review", [DateMonitoringTrend].map(x => x.map(a => (a[2]))).flat(2), "bar", "Partial at 1st Review", [DateMonitoringTrend].map(x => x.map(a => (a[3]))).flat(2), "bar") } type="line" height={ 350 } />
                                        }
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-12 bg-white insight-monitoring-card'>
                                        <h5 class="app-dashboard-header">Regions</h5>
                                        <table className="table mx-1">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Region <button onClick={ () => { handleRegionSort('region') } } className='btn btn-sm btn-sfp'><i className='fa-solid fa-sort' /></button></th>
                                                    <th scope="col">1st Review Approvals <button onClick={ () => { handleRegionSort('first_approval') } } className='btn btn-sm btn-sfp'><i className='fa-solid fa-sort' /></button></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    sortedRegionsData.map(
                                                        (row, key) => {
                                                            return (
                                                                <tr key={ key }>
                                                                    <th scope="row">{ key + 1 }</th>
                                                                    <td>{ row?.region }</td>
                                                                    <td>{ numberFormatter('en-ZA').format(row?.first_approval) }</td>
                                                                </tr>
                                                            )
                                                        }
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 bg-white insight-monitoring-card'>
                                        <h5 class="app-dashboard-header">Advisors</h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className='col-1'>#</th>
                                                    <th scope="col" className='col-3'>Advisor <button onClick={ () => { handleSort('advisor') } } className='btn btn-sm btn-sfp'><i className='fa-solid fa-sort' /></button></th>
                                                    <th scope="col" className='col-3'>1st Review Approvals <button onClick={ () => { handleSort('first_approval') } } className='btn btn-sm btn-sfp'><i className='fa-solid fa-sort' /></button></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    sortedAdvisorsData.map(
                                                        (row, key) => {
                                                            return (
                                                                <tr key={ key }>
                                                                    <th className='' scope="row">{ key + 1 }</th>
                                                                    <td className=''>{ row?.advisor } ({ row?.email })</td>
                                                                    <td className=''>{ numberFormatter('en-ZA').format(row?.first_approval) }</td>
                                                                </tr>
                                                            )
                                                        }
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
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

export default MonitoringInsights