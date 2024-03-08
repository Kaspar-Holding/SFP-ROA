import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Pagination from '../../Pagination/Pagination'
import { connect } from 'react-redux'
import { NavLink, Navigate } from 'react-router-dom'
import Loader from '../../Loader/Loader'
import { LogOut } from '../../../Actions/Auth'
import Chart from "react-apexcharts"
import Swal from 'sweetalert2'

const Compliance = (props) => {
    const user = props.user
    const [formStats, setCaseStats] = useState([])
    const [TrendingData, setTrendingData] = useState([])
    const [SearchQuery, setSearchQuery] = useState("")
    const [formList, setCaseList] = useState([])
    const [OrderBy, setOrderBy] = useState("name")
    const [Loader, setLoader] = useState("none")
    const [TotalCases, setTotalCases] = useState(0)
    const [PageLimit, setPageLimit] = useState(0)
    const [Advisor, setAdvisor] = useState("")
    const [dashboardVisibility, setDashboardVisibility] = useState("none")
    // header

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    // New Compliance Document
    const [ComplianceDocument, setComplianceDocument] = useState({
        user: user.id,
        policy_number: ""
    })

    const onChange = (e) => {
        setComplianceDocument({
            ...ComplianceDocument,
            [e.target.name]: e.target.value
        })
    }

    const createGKFDocumentBtn = (e) => {
        e.preventDefault()
        createGKFDocument()
    }


    const [DocumentCreatedStatus, setDocumentCreatedStatus] = useState(false)
    const [DocumentResponse, setDocumentResponse] = useState({})

    const createGKFDocument = async () => {
        const Body = JSON.stringify(ComplianceDocument)

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/compliance/document/`,
                Body,
                config
            )

            setDocumentCreatedStatus(true)
            setDocumentResponse(response.data)
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `Proceed to next level.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `${error?.response?.data?.errors}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
    }

    // Apex Charts 
    const apexChartSeries = (seriesName, seriesData, seriesName1, seriesData1) =>
    (
        [
            {
                name: seriesName,
                data: seriesData,
                type: 'line'
            },
            {
                name: seriesName1,
                data: seriesData1,
                type: 'column'
            }
        ]
    )
    const apexChartDualOptions = (chartId, xaxis, seriesA, color) =>
    (
        {
            chart: {
                id: chartId,
                width: "100%"
            },
            dataLabels: {
                enabled: true,
            },
            stroke: {
                width: [0, 4]
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: xaxis
            },
            yaxis: [
                {
                    title: {
                        text: seriesA
                    },
                }
            ],
            colors: [color],
            stroke: {
                curve: 'smooth'
            },
            dataLabels: {
                enabled: false,
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'black'
                },
                background: {
                    enabled: true,
                    foreColor: 'black',
                    borderRadius: 2,
                    padding: 4,
                    opacity: 0.9,
                    borderWidth: 1,
                    borderColor: '#fff',
                },
            },
            plotOptions: {
                pie: {
                    legend: {
                        position: 'bottom'
                    }
                }
            },
            grid: {
                show: false
            }

        }
    )
    // console.log(user)
    const loadCasesStats = async (page_number, order_by, search_query) => {
        setLoader("block")
        setDashboardVisibility("none")
        const Body = JSON.stringify(
            {
                "advisorId": user['id'],
                "page_number": page_number,
                "order_by": order_by,
                "search_query": search_query
            }
        )
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/forms_stats/`, Body, config)
            setCaseStats(response.data)
            setCaseList(response.data['results'])
            setTotalCases(response.data['total_records'])
            setPageLimit(response.data['pagelimit'])
            //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
            console.log('first', error.response.statusText)
            if (error.response.status === 401) {
                LogOut()
            }
            //   setResponseError(error.response.statusText)
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/forms_stats/trending_data/`, config)
            setTrendingData(response.data['data'])
            //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
            console.log('first', error.response)
            if (error.response.status === 401) {
                LogOut()
            }
            //   setResponseError(error.response.statusText)
        }
        setLoader("none")
        setDashboardVisibility("block")
    }
    const onLoadCasesStats = async (page_number, order_by, search_query) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        const Body = JSON.stringify(
            {
                "advisorId": user['id'],
                "page_number": page_number,
                "order_by": order_by,
                "search_query": search_query
            }
        )
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/forms_stats/`, Body, config)
            setCaseStats(response.data)
            setCaseList(response.data['results'])
            setTotalCases(response.data['total_records'])
            setPageLimit(response.data['pagelimit'])
            //   console.log('Users', JSON.stringify(response.data))
        } catch (error) {
            console.log('first', error.response.statusText)
            if (error.response.status === 401) {
                LogOut()
            }
            //   setResponseError(error.response.statusText)
        }
    }
    const onSearchQueryChange = (e) => {
        e.preventDefault()
        setTotalCases(0)
        setSearchQuery(e.target.value)
        onLoadCasesStats(1, OrderBy, e.target.value)
    }
    const onFilterChange = (e) => {
        e.preventDefault()
        setTotalCases(0)
        setSearchQuery(e.target.value)
        onLoadCasesStats(1, OrderBy, e.target.value)
    }
    const resetCase = (e) => {
        e.preventDefault()
        setOrderBy("")
        setSearchQuery("")
        onLoadCasesStats(1, "", "")
    }
    // console.log(formStats)
    useEffect(() => {
        loadCasesStats(1, OrderBy, SearchQuery)
        if (user) {
            setAdvisor(user["first_name"] + " " + user["last_name"])
        }
    }, [Advisor, user])


    if (DocumentCreatedStatus) {
        return (
            <Navigate
                type="button"
                to={ { pathname: "/create-compliance-document" } }
                state={
                    {
                        data: DocumentResponse
                    }
                }
            />
        )
    }

    return (
        <div className=''>
            <Helmet>
                <title>Compliance Management Dashboard</title>
            </Helmet>
            <div style={ { display: Loader } }>
                user?.email?.includes('sfp') || user?.email?.includes('succession') ? <Loader color='sfp-color' />
                : user?.email?.includes('fs4p') ? <Loader color='fs4p-color' />
                : user?.email?.includes('sanlam') ? <Loader color='sfp-sanlam' />
                : <Loader color='sfp-color' />
            </div>
            <div className="updated-app-dashboard position-absolute my-5 start-50 translate-middle" style={ { display: dashboardVisibility } }>
                <div className="row">
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ formStats['completed_forms'] }</h5>
                                        <p className="card-text updated-subtitle">Completed Case</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ formStats['incompleted_forms'] }</h5>
                                        <p className="card-text updated-subtitle">Incompleted Cases</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ formStats['yet_to_approved_forms'] }</h5>
                                        <p className="card-text updated-subtitle">Awaiting Approval</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ formStats['blocked_forms'] }</h5>
                                        <p className="card-text updated-subtitle">Block Cases</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card rounded-5">
                            <div className="card-body">
                                <h5 className="card-title text-center updated-header">Welcome, { user ? user.first_name : "User" }</h5>
                                <p className="card-text updated-subtitle">Compliance Management</p>
                                <hr />
                                <h5 className="card-title text-center ">Create a new Case</h5>
                                <form onSubmit={ (e) => { createGKFDocumentBtn(e) } }>
                                    <input spellCheck="true" required type="text" value={ ComplianceDocument?.policy_number } onChange={ (e) => { onChange(e) } } id="Polic_Number" name="policy_number" className="form-control" placeholder="Enter Policy Number" aria-describedby="" />
                                    <div className="d-grid gap-1">
                                        <button
                                            type='submit'
                                            className={
                                                user['email'].includes('sfp') || user['email'].includes('succession') ? "btn btn-primary sfp"
                                                    : user['email'].includes('fs4p') ? "btn btn-primary fs4p"
                                                        : user['email'].includes('sanlam') ? "btn btn-primary sanlam"
                                                            : "btn btn-primary "
                                            }
                                        >
                                            Create New Case
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card rounded-5">
                            <div className="card-body">
                                <h5 className="card-title text-center updated-header">Cases Trending Data</h5>
                                {
                                    user['email'].includes('sfp') || user['email'].includes('succession') ?
                                        <Chart
                                            options={ apexChartDualOptions('trending-data', [TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Cases Created', '#14848A') }
                                            series={ apexChartSeries('Case Created', [TrendingData].map(x => x.map(a => (a[1]))).flat(2)) }
                                            type="line"
                                            width="100%"
                                            height="100%"
                                        />
                                        : user['email'].includes('fs4p') ?
                                            <Chart
                                                options={ apexChartDualOptions('trending-data', [TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Cases Created', '#6AC7D2') }
                                                series={ apexChartSeries('Case Created', [TrendingData].map(x => x.map(a => (a[1]))).flat(2)) }
                                                type="line"
                                                width="100%"
                                                height="100%"
                                            />
                                            : user['email'].includes('sanlam') ?
                                                <Chart
                                                    options={ apexChartDualOptions('trending-data', [TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Completed', '#0074C9') }
                                                    series={ apexChartSeries('Case Created', [TrendingData].map(x => x.map(a => (a[1]))).flat(2)) }
                                                    type="line"
                                                    width="100%"
                                                    height="100%"
                                                />
                                                :
                                                <Chart
                                                    options={ apexChartDualOptions('trending-data', [TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Cases Created', '#14848A') }
                                                    series={ apexChartSeries('Case Created', [TrendingData].map(x => x.map(a => (a[1]))).flat(2)) }
                                                    type="line"
                                                    width="100%"
                                                    height="100%"
                                                />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-12'>
                        <div className="card rounded-5 py-1">
                            <br />
                            <div className="row">
                                <div className='col-lg-3 col-md-6 col-sm-6'>
                                    <h5>Search Cases</h5>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-6'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="clientNameIdSearchQuery"
                                        placeholder="Client Name / Client ID"
                                        onChange={ (e) => { onFilterChange(e) } }
                                    />
                                </div>
                            </div>
                            <div className='table-responsive scroll'>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Client Name</th>
                                            {/* <th scope="col">Client Email</th> */ }
                                            <th scope="col">Client ID Number</th>
                                            {/* <th scope="col">Client Risk Status</th> */ }
                                            <th scope="col">Risk Weight</th>
                                            <th scope="col">Case Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            TotalCases > 0 ?
                                                formList.map((row, i) => (
                                                    <tr key={ i }>
                                                        <th scope="row">{ i + 1 }</th>
                                                        <td>{ row['RF_ClientName'] }</td>
                                                        {/* <td>{row['clientEmail']}</td> */ }
                                                        <td>{ row['RF_ClientId'] }</td>


                                                        { (() => {
                                                            if (parseInt(row['RF_Client_Match']) === 1) {
                                                                return (<>
                                                                    <td>Medium</td>

                                                                </>);
                                                            }

                                                            if (parseInt(row['RF_Client_Match']) === 2 || parseInt(row['RF_Client_Match']) === 5 || parseInt(row['RF_Client_Match']) === 8 || parseInt(row['RF_Client_Match']) === 11) {
                                                                return (<>
                                                                    <td>High</td>

                                                                </>);
                                                            }

                                                            if (parseInt(row['RF_Client_Match']) === 3 || parseInt(row['RF_Client_Match']) === 6) {
                                                                return (<>
                                                                    <td>Low</td>

                                                                </>);
                                                            }

                                                            if (parseInt(row['RF_Client_Match']) === 4 || parseInt(row['RF_Client_Match']) === 7) {
                                                                return (<>
                                                                    <td>Medium</td>
                                                                </>);
                                                            }

                                                            if (parseInt(row['RF_Client_Match']) === 9 || parseInt(row['RF_Client_Match']) === 10) {
                                                                return (<>
                                                                    <td>Intolerable</td>

                                                                </>);
                                                            }

                                                            else {
                                                                return (<>
                                                                    <td>Undetermined</td>
                                                                </>);
                                                            }
                                                        })() }

                                                        <td>{ row['status'] === 3 ? "Denied" : row['status'] === 0 ? "Incomplete" : row['status'] === 1 ? "Completed" : row['status'] === 2 ? "Waiting Approval" : "Blocked" }</td>
                                                        {
                                                            user['is_superuser'] ?
                                                                <>
                                                                    <td>
                                                                        {
                                                                            row['status'] != 2 && row['status'] != 3 ?
                                                                                <NavLink
                                                                                    type="button"
                                                                                    to={ { pathname: "/completeform" } }
                                                                                    state={
                                                                                        {
                                                                                            advisor: user,
                                                                                            formId: row['id']
                                                                                        }
                                                                                    }

                                                                                    className={
                                                                                        user['email'].includes('sfp') || user['email'].includes('succession') ? "btn btn-sm sfp-primary"
                                                                                            : user['email'].includes('fs4p') ? "btn btn-sm fs4p-primary"
                                                                                                : user['email'].includes('sanlam') ? "btn btn-sm sanlam-primary"
                                                                                                    : "btn btn-sm btn-primary"
                                                                                    }
                                                                                >
                                                                                    Edit
                                                                                </NavLink>
                                                                                : row['status'] == 3 ?
                                                                                    // <NavLink 
                                                                                    //     type="button" 
                                                                                    //     to={{pathname:row['url']}} 
                                                                                    //     state={
                                                                                    //         {
                                                                                    //             formId : row['id'],
                                                                                    //             formStatus : row['status'], 
                                                                                    //             clientName : row['RF_ClientName'], 
                                                                                    //             clientId: row['RF_ClientId']
                                                                                    //         }
                                                                                    //     } 
                                                                                    //     className="btn btn-sm btn btn-sm btn-outline-warning">Approve/Deny</NavLink>
                                                                                    <button className="btn btn-sm btn-outline-warning" type='button'>Denied</button>
                                                                                    : row['status'] == 4 ?
                                                                                        <button className="btn btn-sm btn-outline-danger" type='button'>Blocked</button>
                                                                                        :
                                                                                        <button className="btn btn-sm btn-outline-danger" type='button'>Blocked</button>
                                                                        }
                                                                    </td>
                                                                </>
                                                                :
                                                                <>
                                                                    <td>
                                                                        {
                                                                            row['status'] <= 2 ?
                                                                                <NavLink
                                                                                    type="button"
                                                                                    to={ { pathname: "/completeform" } }
                                                                                    state={
                                                                                        {
                                                                                            advisor: user,
                                                                                            formId: row['id'],
                                                                                            formStatus: row['status'],
                                                                                            clientName: row['RF_ClientName'],
                                                                                            clientId: row['RF_ClientId']
                                                                                        }
                                                                                    }
                                                                                    className={
                                                                                        user['email'].includes('sfp') || user['email'].includes('succession') ? "btn btn-sm sfp-outline-primary"
                                                                                            : user['email'].includes('fs4p') ? "btn btn-sm fs4p-outline-primary"
                                                                                                : user['email'].includes('sanlam') ? "btn btn-sm sanlam-outline-primary"
                                                                                                    : "btn btn-sm btn-outline-primary"
                                                                                    }
                                                                                >
                                                                                    Edit
                                                                                </NavLink>
                                                                                : row['status'] == 4 ?
                                                                                    <button className="btn btn-sm btn-outline-danger" type='button'>Blocked</button>
                                                                                    :
                                                                                    <button className="btn btn-sm btn-outline-danger" type='button'>Can't Edit</button>
                                                                        }
                                                                    </td>
                                                                </>
                                                        }
                                                    </tr>
                                                ))
                                                : <></>
                                        }
                                        {/* <tr>
                                            <th scope="row">1</th>
                                            <td>{data[0]['name']}</td>
                                            <td>{data[0]['email']}</td>
                                            <td>{data[0]['role'] === true ? "Admin" : "Agent"}</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                                <br />
                            </div>
                            <div className='d-flex justify-content-center'>
                                {
                                    TotalCases > 0 ?
                                        <Pagination totalRecords={ TotalCases } pageLimit={ PageLimit } paginationSearchQuery={ SearchQuery } paginationOrderBy={ OrderBy } onPageChanged={ onLoadCasesStats } />
                                        : <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})

export default connect(mapStateToProps, {})(Compliance)