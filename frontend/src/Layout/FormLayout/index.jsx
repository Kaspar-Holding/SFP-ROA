import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../Styles/v2.css'
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Swal from 'sweetalert2'
import {LogOut} from '../../Actions/Auth'

const FormLayout = (props) => {
    const user = props.user
	const location = useLocation()
    const { state } = location
    const navigate = useNavigate()

    // Load Data
    const [FormData, setFormData] = useState({
        
        advisorId : 1,
        advisorName: "" ,            
        RF_Overall_Risk: "Undetermined",
        RF_BU_Risk : "2",
        RF_Date : "",
        RF_ClientName : "",
        RF_CompleteByName : "",
        RF_CompleteByName : "",
        RF_EventID : "",
        RF_CompleteByRole : "",

        RF_AdjustedRisk : "",
        RF_GCO_Risk : "",
        RF_Approvals : "",

        RF_ClientType : "1",
        RF_Occupation : "1",
        RF_CountryOfBirth : "206",
        RF_CountryOfResidence : "206",
        RF_Nationality : "206",
        RF_Different_Nationality : "0",
        RF_CountryOfTax : "0",
        RF_Industry : "0",
        RF_SourceOfFunds : "0",
        RF_RelationshipToClient : "0",
        RF_CountryOfRegistration : "0",
        RF_CountryOfOperation : "0",
        RF_Type_Legal_Entity : "0",
        RF_Industry : "0",
        RF_SourceOfFunds : "0",
        RF_Client_Relationship : "2",
        RF_Product_Name : "0",
        RF_Product_Category : "",
        RF_Transaction_Flow : "1",
        RF_Transaction_Method : "0",
        RF_Transaction_Reason : "0",
        RF_High_Transaction_Reason : "0",
        RF_Transaction_Frequency : "0",
        RF_Transaction_Value : "0",
        RF_Currency_Value : "ZAR",
        RF_Transaction_Geography : "0",
        RF_Funds_Jurisdiction : "0",
        RF_Delivery_Channel : "0",
        RF_Linked_Party_Acting : "0",
        RF_Linked_Party_Paying : "0",
        RF_Client_Match : "0",
        RF_Client_Beneficiaries : "0"
    })
    const [LoaderVisibility, setLoaderVisibility] = useState("none")
    const [dataVisibility, setDataVisibility] = useState("none")
    // Country Score
    const LoadRFForm = async(advisorId, formId) => {
        setLoaderVisibility("block")
        setDataVisibility("none")
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify({
            "formId" : state['formId'],
            "advisorId" : state['advisor']['id']
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/view_risk_factors_data/`, Body ,config)
            if (response.status === 200) {
                setFormData(response.data['formData'])
            }
        } catch (error) {
        }
        setLoaderVisibility("none")
        setDataVisibility("block")
    }

    // Update Form Status
    
    const updateFromStatus = async(status) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify({'formId' : state['formId'], 'formStatus': status})
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_form_status/`, Body ,config)
            // console.log(response.data['code'])
            if (response.status === 200){
                // setSubmissionMessage("User Account Created Successfully")
                setFormData(response.data['Data'])
                // console.log(response.data['Data'])
                // navigate("/completeform", {state : {formId: response.data['formId']}})
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            if (error.response.status === 401){
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Logged Out",
                    html: `Login time out, You will be logged out in 5 seconds`,
                    showConfirmButton: !1,
                    timer: 10000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
                setTimeout(() => {
                    props.LogOut()
                }, 5000)
              }
            // setSubmissionErrorVisibilty("block")
        }
    }
    
    const onFormStatusUpdateSubmit = (e,formStatus) => {
        e.preventDefault()
        updateFromStatus(formStatus)
        // window.location.reload();
    }

    // Download Form
    
    const DownloadDRAPDF = async(e, dra_status) => {
        e.preventDefault()
        const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`
        }
        }
        const Body = JSON.stringify({
            "formId" : state['formId'],
            "dra_status" : dra_status,
            "advisorId" : state['advisor']['id']
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/printing/downloadPDF/`, Body,config)
            const url = `${process.env.REACT_APP_BACKEND_URL}/${response.data['file']}`
            window.open(url, '_blank').focus()
        } catch (error) {
            if (error.response.status === 401){
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Logged Out",
                    html: `Login time out, You will be logged out in 5 seconds`,
                    showConfirmButton: !1,
                    timer: 10000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
                setTimeout(() => {
                    props.LogOut()
                }, 5000)
              }
            if (error.response.data['status'] === 404) {
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Error",
                    html: `${error.response.data['message']}`,
                    showConfirmButton: !1,
                    timer: 10000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            }
        // console.log('first', error)
        }
    }

    useEffect(() => {
        if (state && state['formId']){
            console.log(state)
            LoadRFForm(state['advisor']['id'],state['formId'])
        }
        // setInterval(updateIPForm, 20000);
    }, [])
    

    if(props.isAuthenticated === false || props.isAuthenticated === null){
        return <Navigate to="/signin" />
    }
    return (
        <>
            <div className="updated-body">
                <br/>
                <div className="row form">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="d-flex flex-column flex-shrink-0 bg-white rounded-5 rounded-start-0 card1">
                            <img 
                                src={
                                    user['email'].includes('sfp') || user['email'].includes('succession')? `${process.env.REACT_APP_BACKEND_URL}/media/logo.png` 
                                    : user['email'].includes('fs4p') ? `${process.env.REACT_APP_BACKEND_URL}/media/fs4p_logo.jpg` 
                                    : user['email'].includes('sanlam') ? `${process.env.REACT_APP_BACKEND_URL}/media/afp_logo.png` 
                                    : `${process.env.REACT_APP_BACKEND_URL}/media/logo.png` 
                                }
                                className={
                                    user['email'].includes('sfp') || user['email'].includes('succession')? "updated-logo sfp-logo"
                                    : user['email'].includes('fs4p') ? "updated-logo fs4p-logo"
                                    : user['email'].includes('sanlam') ? "updated-logo sanlam-logo"
                                    : "updated-logo sfp-logo"
                                }
                            />
                            <div className='d-flex justify-content-center'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/web-roa">Web ROA</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {
                                                location.pathname == "/createform" ? "Create Form" :
                                                location.pathname == "/completeform" ? "Complete Form" : ""
                                            }
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-lg-1 col-md-6 col-sm-1">
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-2">
                                    <button type="button" onClick={()=>{navigate(-1)}} className="btn btn-light btn-lg rounded-5 back-form-btn shadow bg-body-tertiary rounded">
                                        <i className="fa-solid fa-arrow-left" style={{color: "#007A8D"}}></i>
                                    </button>
                                </div>
                                <div className="col-lg-1 col-md-6 col-sm-0">
                                </div>
                                <div className="col-lg-7 col-md-6 col-sm-7">
                                    <span className="form-header">ROA</span><br/>
                                    <span className="form-user">{user ? `${user.first_name} ${user.last_name}` : ""}</span>
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-lg-1 col-md-1 col-sm-1'>

                                </div>
                                <div className='col-lg-11 col-md-11 col-sm-11'>
                                    {
                                        state ? state['formId'] ?
                                        <>
                                            <div>
                                                <h6 className='text'>
                                                    Client Name
                                                </h6>
                                                <p className='value'>
                                                    {FormData['RF_ClientName']}
                                                </p>
                                                <h6 className='text'>
                                                    Client ID
                                                </h6>
                                                <p className='value'>
                                                    {FormData['RF_ClientId']}
                                                </p>
                                                <h6 className='text'>
                                                    Client Date
                                                </h6>
                                                <p className='value'>
                                                    {moment(FormData['RF_Date']).format('DD MMMM YYYY')}
                                                </p>
                                                <h6 className='text'>
                                                    Client Date
                                                </h6>
                                                <p className='value'>
                                                    {moment(FormData['RF_Date']).format('DD MMMM YYYY')}
                                                </p>
                                                <div className='row'>
                                                    {
                                                        FormData['status'] === 1 ?
                                                        <>
                                                            <div className='col-12'>
                                                                <form onSubmit={e => onFormStatusUpdateSubmit(e,0)}>
                                                                    <button 
                                                                        type='submit' 
                                                                        className= { 
                                                                            user ? user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp col-11" 
                                                                            : user['email'].includes('fs4p') ? "btn btn-primary fs4p col-11" 
                                                                            : user['email'].includes('sanlam') ? "btn btn-primary sanlam col-11" 
                                                                            : "btn btn-primary sfp col-11" : ""
                                                                        }
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                </form>
                                                            </div>                        
                                                            <div className='row'>
                                                                <div className='col-6'>
                                                                    {/* <NavLink to={{pathname:"/printform"}} state={{formId : FormData['id'], advisorId : FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} className='btn btn-success col-11'>Print</NavLink> */}
                                                                    <button 
                                                                        type='submit' onClick={(e)=>{DownloadDRAPDF(e, true)}} 
                                                                        className= { 
                                                                            user ? user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp col-12" 
                                                                            : user['email'].includes('fs4p') ? "btn btn-primary fs4p col-12" 
                                                                            : user['email'].includes('sanlam') ? "btn btn-primary sanlam col-12" 
                                                                            : "btn btn-primary sfp col-12" : ""
                                                                        }
                                                                    >
                                                                        Print
                                                                    </button>
                                                                    <br/>

                                                                </div> 
                                                                <div className='col-6'>
                                                                    {/* <NavLink to={{pathname:"/printformclient"}} state={{formId : FormData['id'], advisorId : FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} className='btn btn-success col-11'>Print For Client</NavLink> */}
                                                                    <button 
                                                                        type='submit' onClick={(e)=>{DownloadDRAPDF(e, false)}} 
                                                                        className= { 
                                                                            user ? user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp col-12" 
                                                                            : user['email'].includes('fs4p') ? "btn btn-primary fs4p col-12" 
                                                                            : user['email'].includes('sanlam') ? "btn btn-primary sanlam col-12" 
                                                                            : "btn btn-primary sfp col-12" : ""
                                                                        }
                                                                    >
                                                                        Client Print
                                                                    </button>
                                                                    <br/>
                                                                </div> 
                                                            </div>                   
                                                        </> : 
                                                        <>
                                                            <div className='text-center'>
                                                                <form onSubmit={e => onFormStatusUpdateSubmit(e,1)}>
                                                                    <button type='submit' className= { 
                                                                        user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp col-11" 
                                                                        : user['email'].includes('fs4p') ? "btn btn-primary fs4p col-11" 
                                                                        : user['email'].includes('sanlam') ? "btn btn-primary sanlam col-11" 
                                                                        : "btn btn-primary sfp col-8"
                                                                    }>Mark Form Complete</button>
                                                                </form>
                                                            </div>
                                                        
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </>
                                        : <></>
                                        : <></>
                                    }
                                </div>
                                
                            </div>
                            <br/>
                            <div className={state ? "footer1" :"footer"}>
                                <div className="container">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary btn-sfp" onClick={()=>{LogOut()}} type="button">Logout</button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    © SFP by KCS 2023
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-6 col-sm-12">
                        <div className="bg-white rounded-5 p-2">
                            <div className="card2 container">
                                <Outlet />
                            </div>
                        </div>
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
  
export default connect(mapStateToProps, {LogOut})(FormLayout)