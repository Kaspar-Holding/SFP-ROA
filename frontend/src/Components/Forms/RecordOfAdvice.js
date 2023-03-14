import React, {useState, useEffect} from 'react'
import './Styles/Form.css'
import {Navigate, NavLink, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import  './Styles/CustomNotification.css'
import  './Styles/CustomButton.css'


const RecordOfAdvice = ({user}) => {
    const location = useLocation();
    const { state } = location;    
    const Date_Var = new Date()
    const CurrentData = Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + (Date_Var.getDate())).slice(-2)
    const [FormData, setFormData] = useState({
        advisorId : user['id'],
        formId : state['formId'],
        clientName :  state['clientName'],
        clientIdNumber : state['clientId'],
        clientEmail : "",
        clientAddress : "",
        clientPhoneNumber : "",
        clientDateOfBirth : Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + (Date_Var.getDate())).slice(-2),
        clientLetterOfIntroduction : "1",
        clientLetterOfIntroductionReason : "",
        clientLetterOfIntroductionAccess : "1",
        clientLetterOfIntroductionAccessReason : "",
        clientFica : "1",
        clientFicaReason : "",
        clientBackgroundInfo : ""
    })
    // console.log(FormData)
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [FicaVisibility, setFicaVisibility] = useState(false)
    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)
    
    function letter_of_introduction_onFocus() {
      setletterOfIntroductionVisibility(true)
    }
    function letter_of_introduction_onBlur() {
      setletterOfIntroductionVisibility(false)
    }
    function letter_of_introduction_access_onFocus() {
      setletterOfIntroductionAccessVisibility(true)
    }
    function letter_of_introduction_access_onBlur() {
      setletterOfIntroductionAccessVisibility(false)
    }
    function fica_onFocus() {
      setFicaVisibility(true)
    }
    function fica_onBlur() {
      setFicaVisibility(false)
    }
    function backgroundInfo_onFocus() {
      setbackgroundInfoVisibility(true)
    }
    function backgroundInfo_onBlur() {
      setbackgroundInfoVisibility(false)
    }
    
    const [errorData, setErrorData] = useState({
        status: "",
        message: "",
        errors: []
    })
    // console.log(localStorage.getItem('access'))
    const emailValidation = () =>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(FormData['clientEmail']) === false){
          setErrorData({
            status: "Email Validity",
            message: "Email is not valid, Please enter a valid email",
            errors: ""
          })
          setSubmissionErrorVisibilty("block")
          setTimeout(() => {
            setSubmissionErrorVisibilty("none")
          }, 5000)
          return false
        }
        return true
    }
    const [SubmissionErrorVisibilty, setSubmissionErrorVisibilty] = useState("none")
    const navigate = useNavigate()
    const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
    const createRecordOfAdviceForm = async(formData) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(formData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addformdata/`, Body ,config)
            if (response.status === 201) {
                setFormData(response.data['formData'])
            } else {
                setFormData(response.data['formData'])
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
            setErrorData({
                status: error.response.status,
                message: error.response.statusText,
                errors: error.response.errors
            })
            setSubmissionErrorVisibilty("block")
            setTimeout(() => {
                setSubmissionErrorVisibilty("none")
            }, 5000)
        }
    }
    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
    const updateRecordOfAdviceForm= async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/updateformdata/`, Body ,config)
            // console.log(response.data['code'])
            setFormData(response.data['Data'])
            setSuccessMessage("Record of Advice is successfully updated")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
                setSuccessMessageVisibility("none")
            }, 5000)
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
            setErrorData({
                status: error.response.status,
                message: error.response.statusText,
                errors: error.response.errors
            })
            setSubmissionErrorVisibilty("block")
            setTimeout(() => {
                setSubmissionErrorVisibilty("none")
            }, 5000)
        }
    }
    const onSubmit = e => {
        e.preventDefault()
        setSuccessMessageVisibility("none")
        setSubmissionErrorVisibilty("none")
        var emailValid = emailValidation()
        if(emailValid === false){
            setSuccessMessage("Invalid Email")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
                setSuccessMessageVisibility("none")
            }, 5000)
        }
        if (FormData['clientPhoneNumber'].length < 10){
            setSuccessMessage("Invalid Phone Number, Please input valid phone number with 10 digits")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
            setSuccessMessageVisibility("none")
            }, 5000)

        }else{
            updateRecordOfAdviceForm(FormData)
        }
        // window.location.reload();
    }
        // window.location.reload();
        // console.log(JSON.stringify(FormData))
    useEffect(() => {
        createRecordOfAdviceForm(FormData)
    }, []);
    return (
      
        <main className="container">
            <div className="notification_container">
                <div className="alert alert-success fade show" style={{display: SuccessMessageVisibility}} role="alert">
                {SuccessMessage}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
            </div>
            {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2 className="fw-bold h2_1">SECTION A: LONG-TERM INSURANCE </h2>
            </div> */}
            <div className="bg-white p-1 rounded">
                <h2 className="fw-bold h2_1">RECORD OF ADVICE</h2>
                <hr/>
                <div className="alert alert-danger" style={{display: SubmissionErrorVisibilty}} role="alert">
                    {errorData.status} : {errorData.message}
                </div>
                {/* <form onSubmit={e => onSubmit(e)} method="post"> */}
                <form onSubmit={e => onSubmit(e)}>
                    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                        <div className="row">
                            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label className="col-form-label"><b>Client Name:</b></label>
                                    </div>
                                    <div className="col-6">
                                        <input required minlength="3" and maxlength="45" id="clientName" value={FormData['clientName']} onChange={e => onChange(e)} name="clientName" className="form-control" placeholder="Client Name"  aria-describedby="" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label htmlFor="id_number" className="col-form-label"><b>ID number:</b></label>
                                    </div>
                                    <div className="col-6">
                                        <input required type="number" id="clientIdNumber" value={FormData['clientIdNumber']}  onChange={e => onChange(e)} name="clientIdNumber" className="form-control" placeholder="ID number"  aria-describedby="" />
                                    </div>
                                </div>
                            </div>
                            <hr className="col-11" />
                            <div className="col-12" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-2">
                                        <label htmlFor="address" className="col-form-label"><b>Address:</b></label>
                                    </div>
                                    <div className="col-9">
                                        <input required spellCheck="true"  id="clientAddress" value={FormData['clientAddress']} onChange={(e) => {onChange(e)}}  name="clientAddress" className="form-control" placeholder="Address"  aria-describedby="" />
                                    </div>
                                </div>
                            </div>
                            <hr className="col-11" />
                            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label htmlFor="email" className="col-form-label"><b>Email:</b></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="email" required spellCheck="true" size="30"  id="email" onChange={(e) => {onChange(e)}} value={FormData['clientEmail']} name="clientEmail" className="form-control" placeholder="user@succession.co.za"  aria-describedby="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label htmlFor="phoneNumber" className="col-form-label"><b>Phone:</b></label>
                                    </div>
                                    <div className="col-6">
                                        <input required spellCheck="true" minLength="10" type="number" id="clientPhoneNumber" value={FormData['clientPhoneNumber']} onChange={(e) => {onChange(e)}} name="clientPhoneNumber" className="form-control" placeholder="Phone"  aria-describedby="" />
                                    </div>
                                </div>
                            </div>
                            <hr className="col-11" />
                            
                            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label htmlFor="advisor" className="col-form-label"><b>Financial Advisor:</b></label>
                                    </div>
                                    <div className="col-6">
                                        <input required spellCheck="true" value={user['name']} disabled name="advisor" className="form-control" placeholder="Financial Advisor"  aria-describedby="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label htmlFor="date_of_birth" className="col-form-label"><b>Date:</b></label>
                                    </div>
                                    <div className="col-6">
                                        <input required spellCheck="true"  type="date"  id="date_of_birth" value={FormData['date_of_birth']} onChange={e => onChange(e)} name="clientDateOfBirth" className="form-control" placeholder="date_of_birth"  aria-describedby="" />
                                    </div>
                                </div>
                            </div>
                            <hr className="col-11" />
                            <div className="col-11 p_class">
                                <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>
                            </div>
                            <h5 className="section_class"><b>SECTION A:</b></h5>
                            <ol style={{fontFamily: 'Arial Narrow',fontSize: 15}}>
                                <li className="h6 fw-bold" style={{color: '#00788A'}}>Compulsory Disclosures</li>
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client was provided with a copy of the Letter of Introduction.</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="row col-2 align-items-center">
                                                <div className="col-2">
                                                    <input className="form-check-input" checked={FormData['clientLetterOfIntroduction'] === "1" ? true : false}  onChange={e => onChange(e)} type="radio" value="1" id="provided_identity_radio_btn" name="clientLetterOfIntroduction"/>
                                                </div>
                                                <div className="col-2">
                                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                        Yes
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row col-2 align-items-center">
                                                <div className="col-2">
                                                    <input className="form-check-input" checked={FormData['clientLetterOfIntroduction'] === "1" ? false : true}  onChange={e => onChange(e)} type="radio" value="0" id="provided_identity_radio_btn" name="clientLetterOfIntroduction"/>
                                                </div>
                                                <div className="col-2">
                                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-11" id="letter_of_introduction_2">
                                        {
                                            letterOfIntroductionVisibility ?
                                            <>
                                                <div id="letter_of_introduction_instructions" className="hidden_class">
                                                    <p>If no, motivate</p>
                                                </div>
                                            </> :
                                            null
                                        }
                                        <textarea id="letter_of_introduction" required={FormData['clientLetterOfIntroduction'] === "0" ? true : false} value={FormData['clientLetterOfIntroductionReason']} name="clientLetterOfIntroductionReason"  onChange={e => onChange(e)} onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                                    </div>
                                    {/* {
                                        FormData['letterOfIntroduction'] === "1" ?
                                        null :
                                        <>
                                            <div className="col-11" id="letter_of_introduction_2">
                                                {
                                                    letterOfIntroductionVisibility ?
                                                    <>
                                                        <div id="letter_of_introduction_instructions" className="hidden_class">
                                                            <p>If no, motivate</p>
                                                        </div>
                                                    </> :
                                                    null
                                                }
                                                <textarea  id="letter_of_introduction" name="letterOfIntroductionReason"  onChange={e => onChange(e)} onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                                            </div>
                                        </>
                                    } */}
                                </div>
                                <hr className="col-11" />
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided authority to access information.</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="row col-2 align-items-center">
                                                <div className="col-2">
                                                    <input required className="form-check-input" checked={FormData['clientLetterOfIntroductionAccess'] === "1" ? true : false}  onChange={e => onChange(e)} type="radio" value="1" id="provided_identity_radio_btn" name="clientLetterOfIntroductionAccess"/>
                                                </div>
                                                <div className="col-2">
                                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                        Yes
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row col-2 align-items-center">
                                                <div className="col-2">
                                                    <input required className="form-check-input" checked={FormData['clientLetterOfIntroductionAccess'] === "1" ? false : true}  onChange={e => onChange(e)} type="radio" value="0" id="provided_identity_radio_btn" name="clientLetterOfIntroductionAccess"/>
                                                </div>
                                                <div className="col-2">
                                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-11" id="authority_access_2" >
                                        {
                                            letterOfIntroductionAccessVisibility ?
                                            <>
                                                <div id="authority_access_instructions" className="hidden_class">
                                                    <p>If no, motivate</p>
                                                </div>
                                            </> :
                                            null
                                        }
                                        <textarea id="authority_access" required={FormData['clientLetterOfIntroductionAccess'] === "0" ? true : false} name="clientLetterOfIntroductionAccessReason" value={FormData['clientLetterOfIntroductionAccessReason']}  onChange={e => onChange(e)} onFocus={letter_of_introduction_access_onFocus} onBlur={letter_of_introduction_access_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                                    </div>
                                    {/* {
                                        FormData['letterOfIntroductionAccess'] === "1" ?
                                        null :
                                        <>
                                            <div className="col-11" id="authority_access_2" >
                                                {
                                                    letterOfIntroductionAccessVisibility ?
                                                    <>
                                                        <div id="authority_access_instructions" className="hidden_class">
                                                            <p>If no, motivate</p>
                                                        </div>
                                                    </> :
                                                    null
                                                }
                                                <textarea  id="authority_access" name="letterOfIntroductionAccessReason"  onChange={e => onChange(e)} onFocus={letter_of_introduction_access_onFocus} onBlur={letter_of_introduction_access_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                                            </div>
                                        </>
                                    } */}
                                </div>
                                <hr className="col-11" />
                                <li className="h6 fw-bold" style={{color: '#00788A'}}>Financial Intelligence Centre Act (FICA)</li>
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided a clear copy of his/her identity document.</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="row col-2 align-items-center">
                                                <div className="col-2">
                                                    <input required className="form-check-input" checked={FormData['clientFica'] === "1" ? true : false}  onChange={e => onChange(e)} type="radio" value="1" id="provided_identity_radio_btn" name="clientFica"/>
                                                </div>
                                                <div className="col-2">
                                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                        Yes
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row col-2 align-items-center">
                                                <div className="col-2">
                                                    <input required className="form-check-input" checked={FormData['clientFica'] === "1" ? false : true}  onChange={e => onChange(e)} type="radio" value="0" id="provided_identity_radio_btn" name="clientFica"/>
                                                </div>
                                                <div className="col-2">
                                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-11" id="provided_identity_2" >
                                        {
                                            FicaVisibility ?
                                            <>
                                                <div id="provided_identity_instructions" className="hidden_class">
                                                    <p>If no, motivate</p>
                                                </div>
                                            </> : 
                                            null
                                        }
                                        <textarea  id="provided_identity" required={FormData['clientFica'] === "0" ? true : false} value={FormData['clientFicaReason']} name="clientFicaReason" onChange={(e) => {onChange(e)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                                    </div>
                                    {/* {
                                        FormData['fica'] === "1" ? null : 
                                        <>
                                            <div className="col-11" id="provided_identity_2" >
                                                {
                                                    FicaVisibility ?
                                                    <>
                                                        <div id="provided_identity_instructions" className="hidden_class">
                                                            <p>If no, motivate</p>
                                                        </div>
                                                    </> : 
                                                    null
                                                }
                                                <textarea  id="provided_identity" name="ficaReason" onChange={(e) => {onChange(e)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                                            </div>
                                        </>
                                    } */}
                                </div>
                                <hr className="col-11" />
                            </ol>
                            <h5 className="section_class"><b>SECTION B:</b></h5>
                            <h5 className="h6 section_class1"><b>Background information</b></h5>
                            <p>Your personal circumstances that formed the basis for my recommendation</p>
                            {
                                backgroundInfoVisibility ? 
                                <>
                                    <div id="background_info_instructions" className="hidden_class">
                                        <p>Provide a detailed description of the client’s:</p><br />
                                        <ul>
                                            <li>
                                                current personal circumstances,<br />
                                            </li>
                                            <li>
                                                needs that have been identified,<br />
                                            </li>
                                            <li>
                                                and relevant information<br />
                                            </li>
                                        </ul>
                                        <p>that formed the basis for the financial solution recommended</p>
                                    </div>
                                </>: 
                                null
                            }
                            <textarea  id="clientBackgroundInfo" name="clientBackgroundInfo" className="form-control"  style={{height: '160px'}} 
                            onFocus={backgroundInfo_onFocus} required
                            onBlur={backgroundInfo_onBlur}
                            onChange={e => onChange(e)}
                            value={FormData['clientBackgroundInfo']}
                            placeholder={
                                `                       Provide a detailed description of the client’s:
                                •	current personal circumstances,
                                •	needs that have been identified, 
                                •	and relevant information 
                            that formed the basis for the financial solution recommended`}  aria-describedby=""  ></textarea>
                            
                            {/* <NavLink to="/remaining_form" className='btn btn-primary' value="Next" /> */}
                            {/* <NavLink to="/remaining_form" className='btn btn-primary'>Next</NavLink> */}
                            <br />
                        </div>
                    </div>
                    <div className="container1">
                        <div className="icon1 update">
                            <div className="tooltip1">
                                Update
                            </div>
                            <span><button type="submit" style={{border: "none", backgroundColor: "transparent"}}><i className="fa-solid fa-check" /></button></span>
                        </div>
                    </div>
                </form>
                
            </div>

            <br/>
        </main>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})

export default connect(mapStateToProps)(RecordOfAdvice)
