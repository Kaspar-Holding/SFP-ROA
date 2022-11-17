import React, {useState, useEffect, useRef} from 'react'
import './Styles/Form.css'
import Risk from './PrintedComponents/Risk';
import Invest from './PrintedComponents/Invest';
import AssuranceRisk from './PrintedComponents/AssuranceRisk';
import AssuranceInvestment from './PrintedComponents/AssuranceInvestment';
import Employee from './PrintedComponents/Employee';
import Fiduciary from './PrintedComponents/Fiduciary';
import Short_term_Commercial from './PrintedComponents/Short-term Commercial';
import Short_term_Personal from './PrintedComponents/Short-term Personal';
import {Navigate, NavLink, useLocation} from 'react-router-dom'
import axios from 'axios';
import Loader from '../Loader/Loader';
import Footer from '../Footer';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import GapCover from './PrintedComponents/GapCover';

const PrintForm = () => {
    const location = useLocation();
    const { state } = location;
    const [stateData, setstateData] = useState({})
    const printRef = useRef()
    const handleDownloadPdf = async () => {
        const element = printRef.current
        const canvas = await html2canvas(element)
        const data = canvas.toDataURL('image/png')
    
        const pdf = new jsPDF()
        const imgProperties = pdf.getImageProperties(data)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width
    
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('print.pdf')
      }
    const [LoaderVisibility, setLoaderVisibility] = useState("none")
    const [dataVisibility, setDataVisibility] = useState("none")
    const [FormData, setFormData] = useState({
        clientName :  "",
        formId : stateData['formId'],
        clientIdNumber : stateData['clientIdNumber'],
        clientEmail : "",
        clientAddress : "",
        clientPhoneNumber : "",
        advisorId : stateData['advisorId'],
        clientDateOfBirth : "",
        clientLetterOfIntroduction : "1",
        clientLetterOfIntroductionReason : "",
        clientLetterOfIntroductionAccess : "1",
        clientLetterOfIntroductionAccessReason : "",
        clientFica : "1",
        clientFicaReason : "",
        clientBackgroundInfo : ""
    })
    const [FiduciaryFormData, setFiduciaryFormData] = useState({
        advisorId : state['advisorId'],
        formId : state['formId'],
        // clientIdNumber :state['clientIdNumber'],
        fiduciaryWillInPlace : "1",
        fiduciaryWillUpdationDate : "",
        fiduciaryWillKeepingPlace : "",
        fiduciaryExecutorDetails : "",
        fiduciaryClientInstructions : "",
        fiduciaryConsequencesExplained : "",
    });
    
    // console.log(FormData['clientIdNumber'])
    // console.log({formId: FormData['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']})
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [FicaVisibility, setFicaVisibility] = useState(false)
    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)
    // const onGetValue = e => FormData[e.target.name]
    function onGetValue(e) { 
        return FormData[e.target.name]
    }
    const [errorData, setErrorData] = useState({
        status: "",
        message: "",
        errors: []
    })
    // console.log(localStorage.getItem('access'))
    const [SubmissionErrorVisibilty, setSubmissionErrorVisibilty] = useState("none")

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
    // console.log(FormData['clientIdNumber'])
    const updateFromStatus = async(status) => {
        
        setLoaderVisibility("block")
        setDataVisibility("none")
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
            console.log(error)
            setErrorData({
                status: error.response.status,
                message: error.response.statusText,
                errors: error.response.errors
            })
            setSubmissionErrorVisibilty("block")
        }
        
        setLoaderVisibility("none")
        setDataVisibility("block")
    }
    const loadFormData = async() => {
        
        setLoaderVisibility("block")
        setDataVisibility("none")
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify({'formId' : state['formId']})
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/viewformdata/`, Body ,config)
            // console.log(response.data['code'])
            if (response.status === 200){
                // setSubmissionMessage("User Account Created Successfully")
                setFormData(response.data['Data'])
                // console.log(response.data['Data'])
                // navigate("/completeform", {state : {formId: response.data['formId']}})
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
        }
        
        setLoaderVisibility("none")
        setDataVisibility("block")
    }
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
                setFiduciaryFormData(response.data['formData'])
            } else {
                setFiduciaryFormData(response.data['formData'])
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
        }
      }
    const changeFormStatus = (e,formStatus) => {
        e.preventDefault()
        updateFromStatus(formStatus)
        // window.location.reload();
    }
    useEffect(() => {
        setstateData(state)
        loadFormData()
        // console.log(JSON.stringify(FiduciaryFormData))
        // createFiduciaryForm(FiduciaryFormData)
    },[
        // console.log(JSON.stringify(FiduciaryFormData))
    ]);
    // console.log(JSON.stringify(FiduciaryFormData))

    return (
      <>
        <div style={{display: LoaderVisibility}}>
            <Loader />
        </div>
        <div style={{display: dataVisibility}}>
        {/* <button type="button" className='btn btn-primary' onClick={handleDownloadPdf}>
            Download as PDF
        </button> */}
        <main className="container">
          {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="fw-bold h2_1">SECTION A: LONG-TERM INSURANCE </h2>
          </div> */}
          <div className="bg-white p-1 rounded">
                <div className='row'>
                    <div className='col-8'>
                        <h2 className="fw-bold h2_1">RECORD OF ADVICE</h2>
                    </div>
                    
                    
                </div>
                <hr/>
                <div className="alert alert-danger" style={{display: SubmissionErrorVisibilty}} role="alert">
                    {errorData.status} : {errorData.message}
                </div>
                <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                    <div className="row">
                        <div className="col-6" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label className="col-form-label"><b>Client Name:</b></label>
                                </div>
                                <div className="col-6">
                                    <input spellCheck="true" id="clientName" value={FormData['clientName']} disabled  name="clientName" className="form-control" placeholder="Client Name"  aria-describedby="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label htmlFor="id_number" className="col-form-label"><b>ID number:</b></label>
                                </div>
                                <div className="col-6">
                                    <input spellCheck="true"  id="clientIdNumber" value={FormData['clientIdNumber']} disabled name="clientIdNumber" className="form-control" placeholder="ID number"  aria-describedby="" />
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
                                    <input spellCheck="true"  id="clientAddress" value={FormData['clientAddress']} disabled  name="clientAddress" className="form-control" placeholder="Address"  aria-describedby="" />
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
                                    <input spellCheck="true"  id="email" value={FormData['clientEmail']} disabled  name="clientEmail" className="form-control" placeholder="Email"  aria-describedby="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label htmlFor="phoneNumber" className="col-form-label"><b>Phone:</b></label>
                                </div>
                                <div className="col-6">
                                    <input spellCheck="true"  type="number" id="clientPhoneNumber" value={FormData['clientPhoneNumber']} disabled name="clientPhoneNumber" className="form-control" placeholder="Phone"  aria-describedby="" />
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
                                    <input spellCheck="true" value={FormData['advisorName']} disabled name="advisor" className="form-control" placeholder="Financial Advisor"  aria-describedby="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label htmlFor="date_of_birth" className="col-form-label"><b>Date:</b></label>
                                </div>
                                <div className="col-6">
                                    <input spellCheck="true"  type="text"  id="date_of_birth" value={FormData['clientDateOfBirth']} disabled name="clientDateOfBirth" className="form-control" placeholder="date_of_birth"  aria-describedby="" />
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
                                                <input className="form-check-input" checked={FormData['clientLetterOfIntroduction'] === 1 ? true : false}   type="radio" value="1" id="letter_of_introduction_radio_btn" name="clientLetterOfIntroduction" />
                                            </div>
                                            <div className="col-2">
                                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row col-2 align-items-center">
                                            <div className="col-2">
                                                <input className="form-check-input" checked={FormData['clientLetterOfIntroduction'] === 1 ? false : true}   type="radio" value="0" id="letter_of_introduction_radio_btn" name="clientLetterOfIntroduction" />
                                            </div>
                                            <div className="col-2">
                                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
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
                                    <textarea  id="letter_of_introduction" name="clientLetterOfIntroductionReason"  value={FormData['clientLetterOfIntroductionReason']} disabled onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
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
                                            <textarea  id="letter_of_introduction" name="letterOfIntroductionReason"  value={FormData['clientName']} disabled onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
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
                                                <input className="form-check-input" checked={FormData['clientLetterOfIntroductionAccess'] === 1 ? true : false}   type="radio" value="1" id="authority_access_radio_btn" name="clientLetterOfIntroductionAccess" />
                                            </div>
                                            <div className="col-2">
                                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row col-2 align-items-center">
                                            <div className="col-2">
                                                <input className="form-check-input" checked={FormData['clientLetterOfIntroductionAccess'] === 1 ? false : true}   type="radio" value="0" id="authority_access_radio_btn" name="clientLetterOfIntroductionAccess" />
                                            </div>
                                            <div className="col-2">
                                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
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
                                    <textarea  id="authority_access" name="clientLetterOfIntroductionAccessReason"  value={FormData['clientLetterOfIntroductionAccessReason']} disabled onFocus={letter_of_introduction_access_onFocus} onBlur={letter_of_introduction_access_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
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
                                            <textarea  id="authority_access" name="letterOfIntroductionAccessReason"  value={FormData['clientName']} disabled onFocus={letter_of_introduction_access_onFocus} onBlur={letter_of_introduction_access_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
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
                                                <input className="form-check-input" checked={FormData['clientFica'] === 1 ? true : false}   type="radio" value="1" id="provided_identity_radio_btn" name="clientFica"/>
                                            </div>
                                            <div className="col-2">
                                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row col-2 align-items-center">
                                            <div className="col-2">
                                                <input className="form-check-input" checked={FormData['clientFica'] === 1 ? false : true}   type="radio" value="0" id="provided_identity_radio_btn" name="clientFica"/>
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
                                    <textarea  id="provided_identity" name="clientFicaReason" value={FormData['clientFicaReason']} disabled onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
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
                                            <textarea  id="provided_identity" name="ficaReason" value={FormData['clientName']} disabled onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
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
                        <textarea  id="clientBackgroundInfo" name="clientBackgroundInfo" value={FormData['clientBackgroundInfo']} className="form-control" 
                        onFocus={backgroundInfo_onFocus}
                        onBlur={backgroundInfo_onBlur} disabled
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
              
          </div>

        <br/>
            <Risk data={{formId: FormData['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
            <Invest data={{formId: FormData['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
            <AssuranceRisk data={{formId: FormData['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} />
            <AssuranceInvestment  data={{formId: FormData['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
            <Employee data={{formId: FormData['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} />
            <Fiduciary data={{formId: state['formId'],advisorId: state['advisorId']}} />
            <Short_term_Commercial />
            <Short_term_Personal />
            <GapCover />
            {/* <div className="tab-content" id="myTabContent"> */}
                {/* {
                    state['clientIdNumber']!== undefined ? 
                    <div className="tab-pane fade" id="fiduciary" role="tabpanel" aria-labelledby="fiduciary-tab"><Fiduciary data={{formId: state['formId'],advisorId: state['advisorId'], clientIdNumber: state['clientIdNumber']}}/></div>
                    : <></>
                } */}
                {/* <div className="tab-pane fade" id="fiduciary" role="tabpanel" aria-labelledby="fiduciary-tab"><Fiduciary FormData={FiduciaryFormData} setFormData={setFiduciaryFormData} /></div> */}
                {/* <div className="tab-pane fade" id="Short-term-Commercial" role="tabpanel" aria-labelledby="Short-term-Commercial-tab"><Short_term_Commercial/></div> */}
                {/* <div className="tab-pane fade" id="Short-term-Personal" role="tabpanel" aria-labelledby="Short-term-Personal-tab"><Short_term_Personal/></div> */}
            {/* </div> */}
            {/* <Footer /> */}
      </main>
        </div>
        <Footer />
      </>
    )
}

export default PrintForm