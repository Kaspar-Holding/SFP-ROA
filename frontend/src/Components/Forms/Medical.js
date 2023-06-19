import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
// import './Invest.css';
import './Styles/CustomNotification.css'
import './Styles/CustomButton.css'
import { connect } from 'react-redux';
import { Editor, tinyMCE } from '@tinymce/tinymce-react'
import {LogOut} from '../../Actions/Auth'
const Medical = ({user, LogOut}) => {
    const [letterOfIntroduction, setletterOfIntroduction] = useState(true)
    const [letterOfIntroductionReason, setletterOfIntroductionReason] = useState("")
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccess, setletterOfIntroductionAccess] = useState(true)

    const [Fica, setFica] = useState(true)
    const [FicaReason, setFicaReason] = useState("")
    const [FicaVisibility, setFicaVisibility] = useState(false)


    const [Fica1, setFica1] = useState(true)
    const [FicaReason1, setFicaReason1] = useState("")
    const [FicaVisibility1, setFicaVisibility1] = useState(false)

    const [Rica, setRica] = useState(true)
    const [RicaReason, setRicaReason] = useState("")
    const [RicaVisibility, setRicaVisibility] = useState(false)

    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)

    function letter_of_introduction_onFocus() {
        setletterOfIntroductionVisibility(true)
      }
      function letter_of_introduction_onBlur() {
        setletterOfIntroductionVisibility(false)
      }

      function fica_onFocus() {
        setFicaVisibility(true)
      }
      function fica_onBlur() {
        setFicaVisibility(false)
      }

      function fica1_onFocus() {
        setFicaVisibility1(true)
      }
      function fica1_onBlur() {
        setFicaVisibility1(false)
      }

      function rica_onFocus() {
        setRicaVisibility(true)
      }
      function rica_onBlur() {
        setRicaVisibility(false)
      }

      function backgroundInfo_onFocus() {
        setbackgroundInfoVisibility(true)
      }
      function backgroundInfo_onBlur() {
        setbackgroundInfoVisibility(false)
      }

      function fica_onFocus() {
        setFicaVisibility(true)
      }
      function fica_onBlur() {
        setFicaVisibility(false)
      }
      const location = useLocation();
    const { state } = location;

    const [FormData, setFormData] = useState({
        advisorId : state['advisor']['id'],
        formId : state['formId'],
        

        MSA_ClientName: "",
        MSA_ClientIdNumber: "",
        MSA_ClientAddress: "",
        MSA_ClientEmail: "",
        MSA_ClientPhone: "",
        MSA_ClientDate: "",

        MSA_Name: "",
        MSA_MaritalStatus: "",
        MSA_Gender: "",
        MSA_Occupation: "",
        MSA_Income: "",
        MSA_Subsidy: "",
        MSA_Dependant: "",
        MSA_Spouse: "",
        MSA_AdultDependant: "",
        MSA_ChronicM: "",
        MSA_ChronicS: "",
        MSA_ChronicAD: "",
        MSA_ChronicC: "",
        MSA_ChronicOC: "",
        MSA_PFromDate: "",
        MSA_PTODate: "",

        BackInfo: "",
        
        SNA_Needs1 : 2,
        SNA_Comments1: "",
        SNA_Needs2 : 2,
        SNA_Comments2: "",
        SNA_Needs3 : 2,
        SNA_Comments3: "",
        SNA_Needs4 : 2,
        SNA_Comments4: "",
        SNA_Needs5 : 2,
        SNA_Comments5: "",
        SNA_Needs6 : 2,
        SNA_Comments6: "",
        SNA_Needs7 : 2,
        SNA_Comments7: "",
        SNA_Needs8 : 2,
        SNA_Comments8: "",
        SNA_Needs9 : 2,
        SNA_Comments9: "",
        SNA_Other : "",
        SNA_Needs10 : 2,
        SNA_Comments10: "",
        
        CoMAB_Current1: "",
        CoMAB_Replaced1: "",
        CoMAB_Current2: "",
        CoMAB_Replaced2: "",
        CoMAB_Current3: "",
        CoMAB_Replaced3: "",
        CoMAB_Current4: "",
        CoMAB_Replaced4: "",
        CoMAB_Current5: "",
        CoMAB_Replaced5: "",
        CoMAB_Current6: "",
        CoMAB_Replaced6: "",
        CoMAB_Current7: "",
        CoMAB_Replaced7: "",
        CoMAB_Current8: "",
        CoMAB_Replaced8: "",
        CoMAB_Current9: "",
        CoMAB_Replaced9: "",
        CoMAB_Current10: "",
        CoMAB_Replaced10: "",
        CoMAB_Current11: "",
        CoMAB_Replaced11: "",
        CoMAB_Current12: "",
        CoMAB_Replaced12: "",

        SectionD_SnF: "",
        SectionE_PMB: "",

        SectionF_NotAccepted: "",
        SectionF_Reasons: "",
        SectionF_Consequences : 2,
        SectionF_Fee: "",
        SectionF_Comments: "",
        SectionF_Date: "",
        SectionF_ClientName: "",

      });
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})

      const createMedicalForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_medical_data/`, Body ,config)
            // console.log(response.data['formData'])
            if (response.status === 201) {
                setFormData(response.data['formData'])
            } else {
                setFormData(response.data['formData'])
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
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
      const updateMedicalForm = async() => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(FormData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_medical_data/`, Body ,config)
            // console.log(response.data['formData'])
            // setFormData(response.data['formData'])
            setSuccessMessage("Medical data is successfully updated")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
            }, 5000)
            // setSubmissionMessageVisibility("block")
        } catch (error) {
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
        updateMedicalForm()
        // window.location.reload();
      }
      const onFieldBlur = e => {
        updateMedicalForm()
        // window.location.reload();
      }
      // console.log(FormData)
      useEffect(() => {
        if (state['formId']){

          createMedicalForm(FormData)
        }

        // const interval = setInterval(() => {
        //     const MedicalFormSubmitButton = document.querySelector(".updateMedicalFormBTN")
        //     MedicalFormSubmitButton.click()
        // }, 10000)
        // return () => {
        //     clearInterval(interval);
        // }
      }, []);
      // setTimeout(() => {
      //   setSuccessMessageVisibility("none")
      // }, 5000);
      
    return(
        <>
         <br/>
        <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Medical</b></div>
       <hr/>
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
       <form onSubmit={e => onSubmit(e)}>
       
  <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>MEDICAL SCHEMES ANALYSIS</b></div>
    <hr/>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Client name:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ClientName" name='MSA_ClientName' value={FormData['MSA_ClientName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Client Name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>ID Number:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ClientIdNumber" name='MSA_ClientIdNumber' value={FormData['MSA_ClientIdNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="ID# of client"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Address:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ClientAddress" name='MSA_ClientAddress' value={FormData['MSA_ClientAddress']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Address"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Email:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ClientEmail" name='MSA_ClientEmail' value={FormData['MSA_ClientEmail']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Email Address"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Phone:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ClientPhone" name='MSA_ClientPhone' value={FormData['MSA_ClientPhone']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Contact Number"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Financial advisor:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" value={FormData['MSA_Advisor']} disabled className="form-control" placeholder="Primary intermediary's name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Date:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ClientDate" name='MSA_ClientDate' value={FormData['MSA_ClientDate']} onChange={(e) => {onChange(e)}} type="date" className="form-control" placeholder="Primary intermediary's name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

      </div>
    </div>

    <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) 
        processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to 
        SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on 
        <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
    </p>
    {/* <br/> */}
    <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION A:</b></div>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>MEDICAL SCHEMES ANALYSIS</b></div>

    <hr/>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Name and surname:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_Name" name='MSA_Name' value={FormData['MSA_Name']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Marital status:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_MaritalStatus" name='MSA_MaritalStatus' value={FormData['MSA_MaritalStatus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Gender:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_Gender" name='MSA_Gender' value={FormData['MSA_Gender']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Occupation:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_Occupation" name='MSA_Occupation' value={FormData['MSA_Occupation']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Income per month(if income plan is selected):</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_Income" name='MSA_Income' value={FormData['MSA_Income']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 00"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Subsidy:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_Subsidy" name='MSA_Subsidy' value={FormData['MSA_Subsidy']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 00"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Number of Dependants:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_Dependant" name='MSA_Dependant' value={FormData['MSA_Dependant']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="# of Dependants"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Spouse:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_Spouse" name='MSA_Spouse' value={FormData['MSA_Spouse']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Enter name of spouse"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Other Adult Dependents (Parents, Guardians, Legal dependents):</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_AdultDependant" name='MSA_AdultDependant' value={FormData['MSA_AdultDependant']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List name of other adult dependents"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Member):</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ChronicM" name='MSA_ChronicM' value={FormData['MSA_ChronicM']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Spouse):</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ChronicS" name='MSA_ChronicS' value={FormData['MSA_ChronicS']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions of spouse"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Adult Dependents):</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ChronicAD" name='MSA_ChronicAD' value={FormData['MSA_ChronicAD']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions for adult dependents"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Children):</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ChronicC" name='MSA_ChronicC' value={FormData['MSA_ChronicC']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions for children"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Other medical pre existing conditions:</b></label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MSA_ChronicOC" name='MSA_ChronicOC' value={FormData['MSA_ChronicOC']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Period that you have been part of your previous Medical Aid:</b></label>
              </div>
              <div className="col-1">
                <label className="col-form-label">From:</label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="MSA_PFromDate" name='MSA_PFromDate' value={FormData['MSA_PFromDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/> 
              </div>
              <div className="col-1">
                <label className="col-form-label">To:</label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="MSA_PTODate" name='MSA_PTODate' value={FormData['MSA_PTODate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/> 
              </div>
          </div>
        </div>
        <hr/>

      </div>
    </div>

    <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION B:</b></div>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>BACKGROUND INFORMATION</b></div>

    <hr/><p>Your personal circumstances that formed the basis for my recommendation</p>
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
      {/* <textarea maxLength={1000}  id="BackInfo"  className="form-control"  style={{height: '160px'}}  
      name='BackInfo' value={FormData['BackInfo']} onChange={(e) => {onChange(e)}} 
      onFocus={backgroundInfo_onFocus}
      onBlur={backgroundInfo_onBlur}
      placeholder={
          `                       Provide a detailed description of the client’s:
          •	current personal circumstances,
          •	needs that have been identified, 
          •	and relevant information 
      that formed the basis for the financial solution recommended`}  aria-describedby=""  ></textarea> */}
      <Editor
          value={FormData['BackInfo']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['BackInfo']: newText }) }}
          onFocus={(e)=>{backgroundInfo_onFocus()}}
          onBlur={(e)=>{backgroundInfo_onBlur();onFieldBlur(e)}}                      
          name="BackInfo"
          init={{
              selector: "textarea",
              browser_spellcheck : true,
              placeholder: `Provide a detailed description of the client’s:
              •	current personal circumstances,
              •	needs that have been identified, 
              •	and relevant information 
          that formed the basis for the financial solution recommended`,
              height: 300,
              menu: true,
              plugins: [
                  'advlist autolink link lists image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'styles | undo redo | formatselect | ' +
              'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
              'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
      />

<br/>
<div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SUMMARY NEEDS ANALYSIS</b></div>

<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Need</b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Need Identified</b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Comments</b></label>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Hospital cover</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs1" name="SNA_Needs1" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs1" name="SNA_Needs1" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments1" name='SNA_Comments1' value={FormData['SNA_Comments1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Day to Day Benefits</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs2" name="SNA_Needs2" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs2" name="SNA_Needs2" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments2" name='SNA_Comments2' value={FormData['SNA_Comments2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Threshhold Benefits</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs3" name="SNA_Needs3" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs3" name="SNA_Needs3" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments3" name='SNA_Comments3' value={FormData['SNA_Comments3']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Chronic Benefits</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs4" name="SNA_Needs4" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs4" name="SNA_Needs4" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments4" name='SNA_Comments4' value={FormData['SNA_Comments4']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Savings Account</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs5" name="SNA_Needs5" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs5" name="SNA_Needs5" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments5" name='SNA_Comments5' value={FormData['SNA_Comments5']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Affordable Premium</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs6"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs6" name="SNA_Needs6" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs6"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs6" name="SNA_Needs6" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments6" name='SNA_Comments6' value={FormData['SNA_Comments6']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Hospital Preference</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs7"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs7" name="SNA_Needs7" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs7"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs7" name="SNA_Needs7" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments7" name='SNA_Comments7' value={FormData['SNA_Comments7']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>PMB</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs8"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs8" name="SNA_Needs8" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs8"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs8" name="SNA_Needs8" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments8" name='SNA_Comments8' value={FormData['SNA_Comments8']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Doctor/Specialist/Hospital network</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs9"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs9" name="SNA_Needs9" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs9"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs9" name="SNA_Needs9" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments9" name='SNA_Comments9' value={FormData['SNA_Comments9']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Other" name='SNA_Other' value={FormData['SNA_Other']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}}/>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs10"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SNA_Needs10" name="SNA_Needs10" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SNA_Needs10"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SNA_Needs10" name="SNA_Needs10" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SNA_Comments10" name='SNA_Comments10' value={FormData['SNA_Comments10']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

      </div>
  </div>

  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION C:</b></div>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SUMMARY: COMPARISON OF MEDICAL AID BENEFITS</b></div>
    <p className="text-start "style={{ color: "#14848A"}}>(Indicate whether a new medical scheme(s) is recommended or an existing scheme is to be replaced) </p>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Details</b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Current Medical Scheme/<br/>
                                                    Proposed Medical Scheme<br/>
                                                    What are we expecting to be answered here
                                                  </b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Replaced Medical Scheme/<br/>
                                                    Proposed Medical Scheme
                                                    </b></label>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Name:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current1" name='CoMAB_Current1' value={FormData['CoMAB_Current1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced1" name='CoMAB_Replaced1' value={FormData['CoMAB_Replaced1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Contribution/Premium:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current2" name='CoMAB_Current2' value={FormData['CoMAB_Current2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced2" name='CoMAB_Replaced2' value={FormData['CoMAB_Replaced2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Benefits:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current3" name='CoMAB_Current3' value={FormData['CoMAB_Current3']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced3" name='CoMAB_Replaced3' value={FormData['CoMAB_Replaced3']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Savings Account:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current4" name='CoMAB_Current4' value={FormData['CoMAB_Current4']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced4" name='CoMAB_Replaced4' value={FormData['CoMAB_Replaced4']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Chronic Benefits:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current5" name='CoMAB_Current5' value={FormData['CoMAB_Current5']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced5" name='CoMAB_Replaced5' value={FormData['CoMAB_Replaced5']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Hospital Cover:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current6" name='CoMAB_Current6' value={FormData['CoMAB_Current6']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced6" name='CoMAB_Replaced6' value={FormData['CoMAB_Replaced6']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Limits on cover:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current7" name='CoMAB_Current7' value={FormData['CoMAB_Current7']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced7" name='CoMAB_Replaced7' value={FormData['CoMAB_Replaced7']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>General Waiting Period:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current8" name='CoMAB_Current8' value={FormData['CoMAB_Current8']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced8" name='CoMAB_Replaced8' value={FormData['CoMAB_Replaced8']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Condition Specific Waiting Period:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current9" name='CoMAB_Current9' value={FormData['CoMAB_Current9']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced9" name='CoMAB_Replaced9' value={FormData['CoMAB_Replaced9']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Legislated Prescribed Minimum Benefits:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current10" name='CoMAB_Current10' value={FormData['CoMAB_Current10']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced10" name='CoMAB_Replaced10' value={FormData['CoMAB_Replaced10']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Later Joiner Penalty:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current11" name='CoMAB_Current11' value={FormData['CoMAB_Current11']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced11" name='CoMAB_Replaced11' value={FormData['CoMAB_Replaced11']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Reward/Loyalty Programme:</b></label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Current12" name='CoMAB_Current12' value={FormData['CoMAB_Current12']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="CoMAB_Replaced12" name='CoMAB_Replaced12' value={FormData['CoMAB_Replaced12']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>
      </div>
  </div>

<br/>
  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION D:</b></div>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>INITIAL RECOMMENDATION/ADVICE & MOTIVATION</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-12">
                  <label className="col-form-label"><b>Scheme and Fund recommended and/or selected by you:</b></label>
              </div>
              <div className="col-12">
                {/* <textarea maxLength={1000} spellCheck="true"  id="SectionD_SnF" name='SectionD_SnF' value={FormData['SectionD_SnF']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Motivation for recommendations – State why the product purchased will suit the client"  aria-describedby="" style={{height:"150px"}}/> */}
                <Editor onBlur={(e)=>{onFieldBlur(e)}}
                value={FormData['SectionD_SnF']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['SectionD_SnF']: newText }) }}
                // onFocus={(e)=>{backgroundInfo_onFocus10()}}
                // onBlur={(e)=>{backgroundInfo_onBlur10()}}                      
                name="SectionD_SnF"
                init={{
                    selector: "textarea",
                    height: 300,
                    placeholder: "Motivation for recommendations – State why the product purchased will suit the client",
                    menu: true,
                    plugins: [
                        'advlist autolink link lists image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar: 'styles | undo redo | formatselect | ' +
                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                    'removeformat | wordcount ',
                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                }}
            />
              </div>
            </div>
        </div>

        <hr/>
      </div>
    </div>

    <br/>
  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION E:</b></div>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>IMPORTANT INFORMATION HIGHLIGHTED TO YOU</b></div>
    <hr/>
    {/* <textarea maxLength={1000} spellCheck="true"  id="SectionE_PMB" name='SectionE_PMB' value={FormData['SectionE_PMB']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="PMB, waiting periods, exclusions, late joiner penalties, tax deductibility, consequences of replacement, etc."  aria-describedby="" style={{height:"80px"}}/> */}
    <Editor
        value={FormData['SectionE_PMB']}
        onEditorChange={(newText)=>{ setFormData({...FormData, ['SectionE_PMB']: newText }) }}
        name="SectionE_PMB"
        init={{
            selector: "textarea",
            browser_spellcheck : true,
            height: 300,
            menu: true,
            placeholder: "PMB, waiting periods, exclusions, late joiner penalties, tax deductibility, consequences of replacement, etc.",
            plugins: [
                'advlist autolink link lists image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
            ],
            toolbar: 'styles | undo redo | formatselect | ' +
            'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
            'removeformat | wordcount ',
            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
        }}
    />      
    <hr/>

    
    <br/>
  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION F:</b></div>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>FINANCIAL ADVISER'S DECLARATION</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">You have elected not to accept the following product recommendations:</label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SectionF_NotAccepted" name='SectionF_NotAccepted' value={FormData['SectionF_NotAccepted']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">For the following reasons:</label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SectionF_Reasons" name='SectionF_Reasons' value={FormData['SectionF_Reasons']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">The consequences thereof have been clearly explained to you:</label>
              </div>
              <div className="col-6">
                <div className="row col-6 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SectionF_Consequences"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="SectionF_Consequences" name="SectionF_Consequences" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["SectionF_Consequences"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="SectionF_Consequences" name="SectionF_Consequences" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Fees and/or commission:</label>
              </div>
              <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SectionF_Fee" name='SectionF_Fee' value={FormData['SectionF_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-10">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SectionF_Comments" name='SectionF_Comments' value={FormData['SectionF_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter comments"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SectionF_Date" name='SectionF_Date' value={FormData['SectionF_Date']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Sign here"  aria-describedby=""/>
              </div>
              <div className="col-4">
                  <label className="col-form-label">Date:</label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SectionF_Date" name='SectionF_Date' value={FormData['SectionF_Date']} onChange={(e) => {onChange(e)}} type="date" className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="SectionF_ClientName" name='SectionF_ClientName' value={FormData['SectionF_ClientName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Client Name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        
        
        
      </div>
    </div>
          <div  
              className={
                  state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "container-sfp" 
                  : state['advisor']['email'].includes('fs4p') ? "container-fs4p" 
                  : state['advisor']['email'].includes('sanlam') ? "container-sanlam" 
                  : "container-sfp"
              }
          >
              <div 
                  className={"icon1 update"}
              >
                  <div 
                      className={
                          state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "tooltip-sfp" 
                          : state['advisor']['email'].includes('fs4p') ? "tooltip-fs4p" 
                          : state['advisor']['email'].includes('sanlam') ? "tooltip-sanlam" 
                          : "tooltip-sfp"
                      }
                  >
                      Update
                  </div>
                  <span>
                      <button 
                          type="submit"  
                          className="updateMedicalFormBTN"
                          style={{border: "none", backgroundColor: "transparent"}}
                      >
                          <i className="fa-solid fa-check" />
                      </button>
                  </span>
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

export default connect(mapStateToProps, {LogOut})(Medical)