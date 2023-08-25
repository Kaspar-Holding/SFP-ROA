import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
// import './Invest.css';
import './Styles/CustomNotification.css'
import './Styles/CustomButton.css'
import { connect } from 'react-redux';
import {LogOut} from '../../../Actions/Auth'

const Fiduciary = ({user, LogOut}) => {
  const location = useLocation();
  const { state } = location;
  // const [propsData, setpropsData] = useState(props.data);
  const [FormData, setFormData] = useState({
    advisorId : state['advisor']['id'],
    formId : state['formId'],
    // clientIdNumber : propsData['clientIdNumber'],
    fiduciaryWillInPlace : 2,
    fiduciaryWillUpdationDate : "",
    fiduciaryWillKeepingPlace : "",
    fiduciaryExecutorDetails : "",
    fiduciaryClientInstructions : "",
    fiduciaryConsequencesExplained : "",
  });
  const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
  const createFiduciaryForm = async(data) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`
        }
    }
    const Body = JSON.stringify(data)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addfiduciarydata/`, Body ,config)
        // console.log(response.data['formData'])
        if (response.status === 201) {
            setFormData(response.data['formData'])
        } else {
            setFormData(response.data['formData'])
        }
        // setSubmissionMessageVisibility("block")
    } catch (error) {
        console.log(error)
        if (error.response.status === 401){
          setSuccessMessage("Login time out, You will be logged out in 5 seconds")
          setSuccessMessageVisibility("block")
          setTimeout(() => {
            setSuccessMessageVisibility("none")
            LogOut()
          }, 5000)
        }
    }
  }
  const [SuccessMessage, setSuccessMessage] = useState("")
  const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
  const updateForm = async() => {
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`
        }
    }
    const Body = JSON.stringify(FormData)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/updatefiduciarydata/`, Body ,config)
        // console.log(response.data['formData'])
        // setFormData(response.data['formData'])
        setSuccessMessage("Fiduciary data is successfully updated")
        setSuccessMessageVisibility("block")
        // setSubmissionMessageVisibility("block")
        setTimeout(() => {
          setSuccessMessageVisibility("none")
        }, 5000)
    } catch (error) {
        console.log(error)
        if (error.response.status === 401){
          setSuccessMessage("Login time out, You will be logged out in 5 seconds")
          setSuccessMessageVisibility("block")
          setTimeout(() => {
            setSuccessMessageVisibility("none")
            LogOut()
          }, 5000)
        }
    }
  }
  const onSubmit = e => {
    e.preventDefault()
    updateForm()
    // window.location.reload();
  }
  const onFieldBlur = e => {
    e.preventDefault()
    updateForm()
    // window.location.reload();
  }
  // console.log(FormData)
  useEffect(() => {
    if (state['formId']){
      createFiduciaryForm(FormData)
    }
      
    // const interval = setInterval(() => {
    //     const FiduicaryformSubmitButton = document.querySelector(".updateFiduicaryFormBTN")
    //     FiduicaryformSubmitButton.click()
    // }, 10000)
    // return () => {
    //     clearInterval(interval);
    // }
  }, [])
  setTimeout(() => {
    setSuccessMessageVisibility("none")
  }, 5000);
  
  // console.log(JSON.stringify(localStorage.getItem('access')))
  return(
      <>
      <br/>
      <div className="notification_container">
        <div className={
              state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "alert alert-sfp-success fade show" 
              : state['advisor']['email'].includes('fs4p') ? "alert alert-fs4p-success fade show" 
              : state['advisor']['email'].includes('sanlam') ? "alert alert-sanlam-success fade show" 
              : "alert alert-sfp-success fade show"
          } style={{display: SuccessMessageVisibility}} role="alert">
          {SuccessMessage}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      </div>
      <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Fiduciary</b></div>
      <hr/>
          <form onSubmit={e => onSubmit(e)}>
                <div style={{fontSize:'14px'}} align="left">
                    <div className="row">
                      <div className="col-12" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="address" className="col-form-label">Is there a valid Will in place?  </label>
                                </div>
                                <div className="col-1">
                                  <label className="radio-inline">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} type="radio" className="form-check-input"  name="fiduciaryWillInPlace" checked={FormData['fiduciaryWillInPlace'] == 1 ? true : false} onChange={e => onChange(e)} value="1"/>Yes
                                  </label>
                                </div>
                                <div className="col-1">
                                  <label className="radio-inline">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} type="radio" className="form-check-input"  name="fiduciaryWillInPlace" checked={FormData['fiduciaryWillInPlace'] == 0 ? true : false} onChange={e => onChange(e)} value="0"/>No
                                  </label>
                                </div>
                            </div>

                          <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryWillUpdationDate" className="col-form-label">Date last updated? </label>
                                </div>
                                <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  type="date" id="fiduciaryWillUpdationDate" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryWillUpdationDate']}  name="fiduciaryWillUpdationDate" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryWillKeepingPlace" className="col-form-label">Where is the will kept? </label>
                                </div>
                                <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="fiduciaryWillKeepingPlace" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryWillKeepingPlace']} name="fiduciaryWillKeepingPlace" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryExecutorDetails" className="col-form-label">Details of Executor?</label>
                                </div>
                                <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="fiduciaryExecutorDetails" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryExecutorDetails']} name="fiduciaryExecutorDetails" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryClientInstructions" className="col-form-label">Client instruction in terms of drafting a Will? </label>
                                </div>
                                <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="fiduciaryClientInstructions" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryClientInstructions']} name="fiduciaryClientInstructions" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryConsequencesExplained" className="col-form-label">Has the consequences of not having a will being explained and discussed? </label>
                                </div>
                                <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="fiduciaryConsequencesExplained" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryConsequencesExplained']}  name="fiduciaryConsequencesExplained" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>
                            <div className="container1">
                                <div className="icon1 update">
                                    <div className="tooltip1">
                                        Update
                                    </div>
                                    <span><button type="submit" className="updateFiduicaryFormBTN" style={{border: "none", backgroundColor: "transparent"}}><i className="fa-solid fa-check" /></button></span>
                                </div>
                            </div>

                        </div>
                      </div>
                  </div>
          </form>
      </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect(mapStateToProps, {LogOut})(Fiduciary)