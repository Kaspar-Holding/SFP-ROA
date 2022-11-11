import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from '../Loader/Loader';

const Dashboard = ({user}) => {

    const [formStats, setFormStats] = useState([]);
    const [formList, setFormList] = useState([]);
    const [Loader, setLoader] = useState("none")
    const [Advisor, setAdvisor] = useState("")
    const [dashboardVisibility, setDashboardVisibility] = useState("none")
    // console.log(user)
    const loadFormsStats = async() => {
        setLoader("block")
        setDashboardVisibility("none")
        const config = {
          headers: {
              'Content-Type' : 'application/json',
              'Authorization' : `JWT ${localStorage.getItem('access')}`,
              'Accept' : 'application/json'
          }
        }
        const Body = JSON.stringify({"advisorId" : user['id']})
        try {
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/forms_stats/`, Body,config)
          setFormStats(response.data)
          setFormList(response.data['forms'])
        //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
          console.log('first', error.response.statusText)
        //   setResponseError(error.response.statusText)
        }
        setLoader("none")
        setDashboardVisibility("block")
    }
    // console.log(formStats)
    useEffect(() => {
        loadFormsStats()
        if (user){
            setAdvisor(user["name"])
        }
    }, [Advisor,user])
    // console.log(localStorage.getItem('access'))
  return (
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
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card">
                            <h5 className="card-header">Completed Forms</h5>
                            <div className="card-body">
                                <h5 className="card-title">{formStats['completed_forms']}</h5>
                                <p className="card-text">Number of forms completed by Agent.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card">
                            <h5 className="card-header">Incompleted Forms</h5>
                            <div className="card-body">
                                <h5 className="card-title">{formStats['incompleted_forms']}</h5>
                                <p className="card-text">Number of incompleted forms filled by Agent.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h5 className="h3">Form List</h5>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Client Name</th>
                                <th scope="col">Client Email</th>
                                <th scope="col">Client ID Number</th>
                                <th scope="col">Client Phone Number</th>
                                <th scope="col">Form Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(formList).map((keyName, i) => (
                                    <tr>
                                        <th scope="row">{i+1}</th>
                                        <td>{formList[i]['clientName']}</td>
                                        <td>{formList[i]['clientEmail']}</td>
                                        <td>{formList[i]['clientIdNumber']}</td>
                                        <td>{formList[i]['clientPhoneNumber']}</td>
                                        <td>{formList[i]['status'] === 0 ? "Incomplete" : "Completed"}</td>
                                        <td>
                                            <NavLink type="button" to={{pathname:"/completeform"}} state={{formId : formList[i]['id'],formStatus : formList[i]['status'], advisorId : formList[i]['advisorId'], advisor: Advisor}} className="btn btn-sm btn-outline-primary">Edit</NavLink>
                                            {/* <NavLink type="button" to={{pathname:"/userdetails"}} state={{userID : data[i]['id']}} className="btn btn-sm btn-outline-primary">Edit</NavLink> */}
                                        </td>
                                    </tr>
                                ))
                            }                        
                            {/* <tr>
                                <th scope="row">1</th>
                                <td>{data[0]['name']}</td>
                                <td>{data[0]['email']}</td>
                                <td>{data[0]['role'] == true ? "Admin" : "Agent"}</td>
                            </tr> */}
                        </tbody>
                    </table>
                    <br/>
                </div>
            </div>
        </div>
    
    </>

  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
  
export default connect(mapStateToProps)(Dashboard)