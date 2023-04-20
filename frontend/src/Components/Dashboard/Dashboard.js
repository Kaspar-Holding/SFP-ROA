import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink, Navigate, useSearchParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import DashboardFooter from '../DashboardFooter';

const Dashboard = ({user}) => {
    const [searchParams, setSearchParams] = useSearchParams()
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
            setAdvisor(user["first_name"] + " " + user["last_name"])
        }
    }, [Advisor,user])
    const state = searchParams.get("state") ? searchParams.get("state") : null
    const code = searchParams.get("code") ? searchParams.get("code") : null
    if (state && code) {
      return <Navigate to="/" />
    }
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
                    <br/>
                    <div style={{textAlign: 'center'}}>
                        <img 
                            src=
                            {
                                user['email'].includes('sfp') ? `${process.env.REACT_APP_BACKEND_URL}/media/logo.png` 
                                : user['email'].includes('fs4p') ? `${process.env.REACT_APP_BACKEND_URL}/media/fs4p_logo.jpg` 
                                : user['email'].includes('sanlam') ? `${process.env.REACT_APP_BACKEND_URL}/media/afp_logo.png` 
                                : <></>
                            }
                            className={
                                user['email'].includes('sfp') ? "sfp-logo"
                                : user['email'].includes('fs4p') ? "fs4p-logo"
                                : user['email'].includes('sanlam') ? "sanlam-logo"
                                : <></>
                            }
                        />
                    </div>
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
                            <p className="card-text">You can create a new web based ROA Form from here</p>
                            <NavLink 
                                to="/createform" 
                                className= { 
                                    user['email'].includes('sfp') ? "btn btn-primary sfp" 
                                    : user['email'].includes('fs4p') ? "btn btn-primary fs4p" 
                                    : user['email'].includes('sanlam') ? "btn btn-primary sanlam" 
                                    : "btn btn-primary "
                                }
                            >Create</NavLink>

                        </div>
                    </div>
                    <hr/>
                    {
                        user['is_superuser'] ? 
                        <>
                            <div className="nav-align-top mb-4">
                                <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <button 
                                            type="button" 
                                            className= { 
                                                user['email'].includes('sfp') ? "nav-link sfp-nav-pill-btn" 
                                                : user['email'].includes('fs4p') ? "nav-link fs4p-nav-pill-btn" 
                                                : user['email'].includes('sanlam') ? "nav-link sanlam-nav-pill-btn" 
                                                : "nav-link "
                                            }
                                            role="tab" 
                                            data-bs-toggle="tab" 
                                            data-bs-target="#navs-pills-dashboard-overall" 
                                            aria-controls="navs-pills-top-overall" 
                                            aria-selected="true"
                                        >
                                            Overall
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button 
                                            type="button" 
                                            className= { 
                                                user['email'].includes('sfp') ? "nav-link sfp-nav-pill-btn active" 
                                                : user['email'].includes('fs4p') ? "nav-link fs4p-nav-pill-btn active" 
                                                : user['email'].includes('sanlam') ? "nav-link sanlam-nav-pill-btn active" 
                                                : "nav-link sfp-link active"
                                            }
                                            role="tab" 
                                            data-bs-toggle="tab" 
                                            data-bs-target="#navs-pills-dashboard-user" 
                                            aria-controls="navs-pills-top-user" 
                                            aria-selected="true"
                                        >
                                            User
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" style={{backgroundColor: "transparent", boxShadow: "none", padding: "none"}}>
                                <div className={"tab-pane fade"} 
                                        id="navs-pills-dashboard-overall" role="tabpanel">
                                    <AdminDashboard />
                                </div>
                                <div className={"tab-pane fade active show"} 
                                        id="navs-pills-dashboard-user" role="tabpanel">
                                    <UserDashboard />
                                </div>
                            </div>
                        </>
                        : 
                        <>
                            <UserDashboard />
                        </>
                    }
                    
                </div>
                <DashboardFooter />
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