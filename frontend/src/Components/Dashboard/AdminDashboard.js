import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import {LogOut} from '../../Actions/Auth'
import Chart from "react-apexcharts"
const Dashboard = ({user, LogOut}) => {

    const [formStats, setFormStats] = useState([])
    const [TrendingData, setTrendingData] = useState([])
    const [SearchQuery, setSearchQuery] = useState("")
    const [formList, setFormList] = useState([])
    const [OrderBy, setOrderBy] = useState("name")
    const [Loader, setLoader] = useState("none")
    const [TotalForms, setTotalForms] = useState(0)
    const [PageLimit, setPageLimit] = useState(0)
    const [Advisor, setAdvisor] = useState("")
    const [dashboardVisibility, setDashboardVisibility] = useState("none")
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
    const loadFormsStats = async(page_number, order_by, search_query) => {
        setLoader("block")
        setDashboardVisibility("none")
        const config = {
          headers: {
              'Content-Type' : 'application/json',
              'Authorization' : `JWT ${localStorage.getItem('access')}`,
              'Accept' : 'application/json'
          }
        }
        const Body = JSON.stringify(
            {
                "advisorId" : user['id'],
                "page_number" : page_number,
                "order_by" : order_by,
                "search_query" : search_query
            }
        )
        try {
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/admin_forms_stats/`, Body,config)
          setFormStats(response.data)
          setFormList(response.data['results'])
          setTotalForms(response.data['total_records'])
          setPageLimit(response.data['pagelimit'])
          //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
          console.log('first', error.response.statusText)
          if (error.response.status === 401){
			LogOut()
		}
          //   setResponseError(error.response.statusText)
        }
        
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin_forms_stats/trending_data/`, config)
            setTrendingData(response.data['data'])
        //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
            console.log('first', error.response.statusText)
            if (error.response.status === 401){
                LogOut()
		    }
        //   setResponseError(error.response.statusText)
        }
        setLoader("none")
        setDashboardVisibility("block")
    }
    const onLoadFormsStats = async(page_number, order_by, search_query) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`,
                'Accept' : 'application/json'
            }
        }
        const Body = JSON.stringify(
        {
            "advisorId" : user['id'],
            "page_number" : page_number,
            "order_by" : order_by,
            "search_query" : search_query
        }
        )
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/admin_forms_stats/`, Body,config)
            // console.log(response.data)
            setFormStats(response.data)
            setFormList(response.data['results'])
            setTotalForms(response.data['total_records'])
            setPageLimit(response.data['pagelimit'])
            // console.log(response.data)
        //   console.log('Users', JSON.stringify(response.data))
        } catch (error) {
          console.log('first', error.response.statusText)
          if (error.response.status === 401){
			LogOut()
		    }
        //   setResponseError(error.response.statusText)
        }
    }
    const onSearchQueryChange = (e) => {
        e.preventDefault()
        setTotalForms(0)
        setSearchQuery(e.target.value)
        onLoadFormsStats(1, OrderBy, e.target.value)    
    }
    const onFilterChange = (e) => {
        e.preventDefault()
        setTotalForms(0)
        setSearchQuery(e.target.value)
        onLoadFormsStats(1, OrderBy, e.target.value)    
    }
    const resetForm = (e) => {
        e.preventDefault()
        setOrderBy("")
        setSearchQuery("")
        onLoadFormsStats(1,"","")
    }
    // console.log(formStats)
    useEffect(() => {
        loadFormsStats(1,OrderBy, SearchQuery)
        if (user){
            setAdvisor(user["first_name"] + " " + user["last_name"])
        }
    }, [Advisor,user])
    // console.log(localStorage.getItem('access'))
  return (
    <>
    {
        user ? 
        <>
            <div style={{display: Loader}}>
                <Loader />
            </div>
            <div style={{display: dashboardVisibility}}>
                <div className='container'>
                    <h5 className="h3">Stats</h5>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Completed</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['completed_forms']}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Incompleted</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['incompleted_forms']}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Awaiting Approval</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['yet_to_approved_forms']}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Blocked</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['blocked_forms']}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card flex-fill">
                        <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                            <h5 className="card-title mb-0">Forms Trending Data (last 15 days)</h5>       
                        </div>
                        <div className="card-body">
                            {
                                user['email'].includes('sfp') || user['email'].includes('succession') ?
                                <Chart
                                    options={apexChartDualOptions('trending-data',[TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Forms Created', '#14848A')}
                                    series={apexChartSeries('Form Created',  [TrendingData].map(x => x.map(a => (a[1]))).flat(2))}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                                : user['email'].includes('fs4p') ? 
                                <Chart
                                    options={apexChartDualOptions('trending-data',[TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Forms Created', '#6AC7D2')}
                                    series={apexChartSeries('Form Created',  [TrendingData].map(x => x.map(a => (a[1]))).flat(2))}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                                : user['email'].includes('sanlam') ? 
                                <Chart
                                    options={apexChartDualOptions('trending-data',[TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Completed', '#0074C9')}
                                    series={apexChartSeries('Form Created',  [TrendingData].map(x => x.map(a => (a[1]))).flat(2))}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                                :
                                <Chart
                                    options={apexChartDualOptions('trending-data',[TrendingData].map(x => x.map(a => (a[0]))).flat(2), 'Forms Created', '#14848A')}
                                    series={apexChartSeries('Form Created',  [TrendingData].map(x => x.map(a => (a[1]))).flat(2))}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                            }
                        </div>
                    </div>
                    <hr />
                    <h5 className="h3">Form List</h5>
                    <div className="card mb-4">
                        <h5 className="card-header">Search Forms</h5>
                        <div className="card-body">
                            <div>
                                {/* <label htmlFor="defaultFormControlInput" className="form-label">Name</label> */}
                                <div className='row'>
                                    <div className='col-12'>
                                        {/* <form onSubmit={(e)=>{onSearchQueryChange(e)}} > */}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="clientNameIdSearchQuery"
                                            placeholder="Client Name / Client ID"
                                            onChange={(e)=>{onFilterChange(e)}}    
                                        />
                                        {/* </form> */}
                                    </div>
                                    {/* <div className='col-2'>
                                        <button onClick={(e)=>{resetForm(e)}} className='btn btn-md btn-primary'>Reset Search</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='table-responsive'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Filed by</th>
                                    <th scope="col">Client ID Number</th>
                                    {/* <th scope="col">Client Risk Status</th> */}
                                    <th scope="col">Risk Weight</th>
                                    <th scope="col">Form Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    TotalForms > 0 ?
                                    formList.map((row, keyItem) => (
                                        // console.log(row['advisorData'])
                                        
                                        <tr key={keyItem}>
                                            <th scope="row">{keyItem+1}</th>
                                            <td>{row['RF_ClientName']}</td>
                                            {/* <td>{row['clientEmail']}</td> */}
                                            <td>{row['advisorName']}</td>
                                            <td>{row['RF_ClientId']}</td>
                                        
                                            
                                            {(() => { 
                                                if(parseInt(row['RF_Client_Match'])===1)
                                                {
                                                    return (<>
                                                        <td>Medium</td>

                                                    </>);
                                                }

                                                if(parseInt(row['RF_Client_Match'])===2 || parseInt(row['RF_Client_Match'])===5 || parseInt(row['RF_Client_Match'])===8 || parseInt(row['RF_Client_Match'])===11)
                                                {
                                                    return (<>
                                                        <td>High</td>

                                                    </>);
                                                }

                                                if(parseInt(row['RF_Client_Match'])===3 || parseInt(row['RF_Client_Match'])===6)
                                                {
                                                    return (<>
                                                        <td>Low</td>

                                                    </>);
                                                }

                                                if(parseInt(row['RF_Client_Match'])===4 || parseInt(row['RF_Client_Match'])===7)
                                                {
                                                    return (<>
                                                        <td>Medium</td>
                                                    </>);
                                                }

                                                if(parseInt(row['RF_Client_Match'])===9 || parseInt(row['RF_Client_Match'])===10) 
                                                {
                                                    return (<>
                                                        <td>Intolerable</td>

                                                    </>);
                                                }

                                                else
                                                {
                                                    return (<>
                                                        <td>Undetermined</td>
                                                    </>);
                                                }
                                                })()}
                                            
                                            <td>{row['status'] === 3 ? "Blocked" : row['status'] === 0 ? "Incomplete" : row['status'] === 1 ? "Completed" : row['status'] === 2 ? "Waiting Approval" : "Blocked" }</td>
                                            <td>
                                                {
                                                    row['status'] != 2 && row['status'] != 3 ?
                                                    <NavLink type="button" to={{pathname:"/viewForm"}} state={{formId : row['id'], advisor: row['advisorData'],formStatus : row['status'], clientName : row['RF_ClientName'], clientId: row['RF_ClientId']}} className="btn btn-sm btn-outline-primary">View</NavLink>
                                                    : row['status'] == 4 ?
                                                    <NavLink type="button" to={{pathname:"/viewForm"}} state={{formId : row['id'], advisor: row['advisorData'],formStatus : row['status'], clientName : row['RF_ClientName'], clientId: row['RF_ClientId']}} className="btn btn-sm btn-outline-danger">View (Blocked)</NavLink>
                                                    : 
                                                    <NavLink type="button" to={{pathname:row['url']}} state={{formId : row['id'],formStatus : row['status'], clientName : row['RF_ClientName'], clientId: row['RF_ClientId']}} className="btn btn-sm btn btn-sm btn-outline-warning">Approve/Deny</NavLink>
                                                    // <button className="btn btn-sm btn-outline-warning" type='button'>Approve/Deny</button>
                                                }
                                            </td>
                                            {/* {
                                                user.is_superuser ?
                                                <>
                                                </>
                                                :
                                                <>
                                                    <td>
                                                        {
                                                            row['status'] == 1 && row['status'] == 2 ?
                                                            <NavLink 
                                                                type="button" 
                                                                to={{pathname:"/viewForm"}} 
                                                                state={{formId : row['id'], advisor: row['advisorData'],formStatus : row['status'], clientName : row['RF_ClientName'], clientId: row['RF_ClientId']}} 
                                                                className={
                                                                    user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-sm sfp-outline-primary" 
                                                                    : user['email'].includes('fs4p') ? "btn btn-sm fs4p-outline-primary" 
                                                                    : user['email'].includes('sanlam') ? "btn btn-sm sanlam-outline-primary" 
                                                                    : "btn btn-sm btn-outline-primary"
                                                                }
                                                            >
                                                                View
                                                            </NavLink>
                                                            : row['status'] == 4 ?
                                                            <NavLink 
                                                                type="button" 
                                                                to={{pathname:"/viewForm"}} 
                                                                state={{formId : row['id'], advisor: row['advisorData'],formStatus : row['status'], clientName : row['RF_ClientName'], clientId: row['RF_ClientId']}} 
                                                                className={
                                                                    user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-sm sfp-outline-danger" 
                                                                    : user['email'].includes('fs4p') ? "btn btn-sm fs4p-outline-danger" 
                                                                    : user['email'].includes('sanlam') ? "btn btn-sm sanlam-outline-danger" 
                                                                    : "btn btn-sm btn-outline-danger"
                                                                }
                                                            >
                                                                View
                                                            </NavLink>
                                                            :
                                                            <button className="btn btn-sm btn-outline-danger" type='button'>Can't Edit</button>
                                                        }
                                                    </td>
                                                </>
                                            } */}
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
                        <br/>
                    </div>
                    <div className='d-flex justify-content-center'>
                    {
                        TotalForms > 0 ?
                        <Pagination  totalRecords={TotalForms} pageLimit={PageLimit} paginationSearchQuery={SearchQuery} paginationOrderBy={OrderBy} onPageChanged={onLoadFormsStats} />
                        : <></>
                    }
                </div>
                </div>
            </div>
        </>
        :
        <></>
    }
    
    </>

  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
  
export default connect(mapStateToProps, {LogOut})(Dashboard)