import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

const Dashboard = ({user}) => {

    const [formStats, setFormStats] = useState([])
    const [SearchQuery, setSearchQuery] = useState("")
    const [formList, setFormList] = useState([])
    const [OrderBy, setOrderBy] = useState("name")
    const [Loader, setLoader] = useState("none")
    const [TotalForms, setTotalForms] = useState(0)
    const [PageLimit, setPageLimit] = useState(0)
    const [Advisor, setAdvisor] = useState("")
    const [dashboardVisibility, setDashboardVisibility] = useState("none")
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
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/forms_stats/`, Body,config)
          setFormStats(response.data)
          setFormList(response.data['results'])
          setTotalForms(response.data['total_records'])
          setPageLimit(response.data['pagelimit'])
        //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
          console.log('first', error.response.statusText)
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
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/forms_stats/`, Body,config)
          setFormStats(response.data)
          setFormList(response.data['results'])
          setTotalForms(response.data['total_records'])
          setPageLimit(response.data['pagelimit'])
        //   console.log('Users', JSON.stringify(response.data))
        } catch (error) {
          console.log('first', error.response.statusText)
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
            setAdvisor(user["name"])
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
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        {/* <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span ></span>
                                This week
                            </button>
                        </div> */}
                    </div>
                    {/* <h2>Forms</h2> */}
                    <div className="card">
                        <div className="card-header">
                            New ROA Form
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Create a new ROA Form</h5>
                            <p className="card-text">Admins can create a new web based ROA Form from here</p>
                            <NavLink to="/createform" className="btn btn-primary">Create</NavLink>
                        </div>
                    </div>
                    <hr/>
                    <h5 className="h3">Stats</h5>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Completed Forms</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['completed_forms']}</h5>
                                    <p className="card-text">Forms completed by {user['name']}.</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Incompleted Forms</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['incompleted_forms']}</h5>
                                    <p className="card-text">Incompleted forms filled by {user['name']}.</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Awating Approval Forms</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['yet_to_approved_forms']}</h5>
                                    <p className="card-text">Awating Approval forms from Admins.</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className="card">
                                <h5 className="card-header">Blocked Forms</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{formStats['blocked_forms']}</h5>
                                    <p className="card-text">Blocked forms filled by Admins.</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
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
                                    {/* <th scope="col">Client Email</th> */}
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
                                    Object.keys(formList).map((keyName, i) => (
                                        <tr>
                                            <th scope="row">{i+1}</th>
                                            <td>{formList[i]['RF_ClientName']}</td>
                                            {/* <td>{formList[i]['clientEmail']}</td> */}
                                            <td>{formList[i]['RF_ClientId']}</td>
                                        
                                            
                                            {(() => { 
                                                if(parseInt(formList[i]['RF_Client_Match'])===1)
                                                {
                                                    return (<>
                                                        <td>Medium</td>

                                                    </>);
                                                }

                                                if(parseInt(formList[i]['RF_Client_Match'])===2 || parseInt(formList[i]['RF_Client_Match'])===5 || parseInt(formList[i]['RF_Client_Match'])===8 || parseInt(formList[i]['RF_Client_Match'])===11)
                                                {
                                                    return (<>
                                                        <td>High</td>

                                                    </>);
                                                }

                                                if(parseInt(formList[i]['RF_Client_Match'])===3 || parseInt(formList[i]['RF_Client_Match'])===6)
                                                {
                                                    return (<>
                                                        <td>Low</td>

                                                    </>);
                                                }

                                                if(parseInt(formList[i]['RF_Client_Match'])===4 || parseInt(formList[i]['RF_Client_Match'])===7)
                                                {
                                                    return (<>
                                                        <td>Medium</td>
                                                    </>);
                                                }

                                                if(parseInt(formList[i]['RF_Client_Match'])===9 || parseInt(formList[i]['RF_Client_Match'])===10) 
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
                                            
                                            <td>{formList[i]['status'] === 3 ? "Blocked" : formList[i]['status'] === 0 ? "Incomplete" : formList[i]['status'] === 1 ? "Completed" : formList[i]['status'] === 2 ? "Waiting Approval" : "" }</td>
                                            {
                                                user['is_superuser'] ?
                                                <>
                                                    <td>
                                                        {
                                                            formList[i]['status'] != 2 && formList[i]['status'] != 3 ?
                                                            <NavLink type="button" to={{pathname:"/completeform"}} state={{formId : formList[i]['id'],formStatus : formList[i]['status'], clientName : formList[i]['RF_ClientName'], clientId: formList[i]['RF_ClientId']}} className="btn btn-sm btn-outline-primary">Edit</NavLink>
                                                            : 
                                                            <NavLink type="button" to={{pathname:formList[i]['url']}} state={{formId : formList[i]['id'],formStatus : formList[i]['status'], clientName : formList[i]['RF_ClientName'], clientId: formList[i]['RF_ClientId']}} className="btn btn-sm btn btn-sm btn-outline-warning">Approve/Deny</NavLink>
                                                            // <button className="btn btn-sm btn-outline-warning" type='button'>Approve/Deny</button>
                                                        }
                                                    </td>
                                                </>
                                                :
                                                <>
                                                    <td>
                                                        {
                                                            formList[i]['status'] != 2 && formList[i]['status'] != 3 ?
                                                            <NavLink type="button" to={{pathname:"/completeform"}} state={{formId : formList[i]['id'],formStatus : formList[i]['status'], clientName : formList[i]['RF_ClientName'], clientId: formList[i]['RF_ClientId']}} className="btn btn-sm btn-outline-primary">Edit</NavLink>
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
  
export default connect(mapStateToProps)(Dashboard)