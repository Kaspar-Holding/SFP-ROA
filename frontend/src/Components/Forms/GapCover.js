import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
// import './Invest.css';
import './Styles/CustomNotification.css'
import './Styles/CustomButton.css'
import axios from 'axios';
// import { Editor } from '@tinymce/tinymce-react'
import { connect } from 'react-redux'
import {LogOut} from '../../Actions/Auth'

import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
const GapCover = ({user, LogOut}) => {

    
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
  
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
  
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
  
  
            ['clean']  
        ],
    };

    const formats = [];
    const location = useLocation();
    const { state } = location;

    const [FormData, setFormData] = useState({
        advisorId : state['advisor']['id'],
        formId : state['formId'],
        GP_ClientName : "",
        GP_ClientIdNumber : "",
        GP_ClientAddress : "",
        GP_ClientEmail : "",
        GP_ClientPhoneNumber : "",
        GP_ClientMedicalAidName : "",
        GP_ClientInceptionDate : "",
        GP_Date : "",
        
        GP_Benefits : "",
        GP_MedicalDependent : 2,

        GP_MemberName1 : "",
        GP_MemberRelationship1 : "",
        GP_MemberAidPlan1 : "",
        GP_MemberName2 : "",
        GP_MemberRelationship2 : "",
        GP_MemberAidPlan2 : "",
        GP_MemberName3 : "",
        GP_MemberRelationship3 : "",
        GP_MemberAidPlan3 : "",
        GP_MemberName4 : "",
        GP_MemberRelationship4 : "",
        GP_MemberAidPlan4 : "",

        GP_Provider : "",
        GP_Option : "",
        GP_Motivation : "",
        GP_TotalPremium : "",
        GP_BrokerFee : "",
        GP_Commission : "",

        GP_CP_Rate : "",
        GP_NP_Rate : "",
        GP_CP_Overall : "",
        GP_NP_Overall : "",
        GP_CP_CoPayment_B : "",
        GP_NP_CoPayment_B : "",
        GP_CP_SubLimit_B : "",
        GP_NP_SubLimit_B : "",
        GP_CP_Cancer_B : "",
        GP_NP_Cancer_B : "",
        GP_CP_CancerD_B : "",
        GP_NP_CancerD_B : "",
        GP_CP_Other_B : "",
        GP_NP_Other_B : "",
        GP_CP_CasualB : "",
        GP_NP_CasualB : "",
        GP_CP_TraumaB : "",
        GP_NP_TraumaB : "",
        GP_CP_PreW_B : "",
        GP_NP_PreW_B : "",
        GP_CP_Med_SW_B : "",
        GP_NP_Med_SW_B : "",
        GP_CP_Accidental_DC_B : "",
        GP_NP_Accidental_DC_B : "",
        GP_CP_GenWait_P : "",
        GP_NP_GenWait_P : "",
        GP_CP_PreExist_P : "",
        GP_NP_PreExist_P : "",
        GP_CP_Specific_P : "",
        GP_NP_Specific_P : "",

        GP_Exclusions : 2,
        GP_Other_Exclusions : "",
        GP_GeneralComments : "",
        
        GP_FinanAdvisor_ProdRecomm : "",
        GP_FinanAdvisor_Reasons : "",
        GP_FinanAdvisor_Consequences : 2,
        GP_FinanAdvisor_FeeCommission : "",
        GP_FinanAdvisor_OtherComments : "",
        GP_FinanAdvisor_Date : "",
      });
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})

      const createGapCoverForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_gap_cover_data/`, Body ,config)
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
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_gap_cover_data/`, Body ,config)
            // console.log(response.data['formData'])
            // setFormData(response.data['formData'])
            setSuccessMessage("Gap Cover data is successfully updated")
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
            createGapCoverForm(FormData)
        }

        // const interval = setInterval(() => {
        //     const GapCoverformSubmitButton = document.querySelector(".updateGapCoverFormBTN")
        //     GapCoverformSubmitButton.click()
        // }, 10000)
        // return () => {
        //     clearInterval(interval);
        // }
      }, []);
    //   setTimeout(() => {
    //     setSuccessMessageVisibility("none")
    //   }, 5000);
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
      } style={{fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>GAP COVER</b></div>
        <hr/>

       <form onSubmit={e => onSubmit(e)}>
       <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Client Name:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_ClientName" onChange={(e) => {onChange(e)}} value={FormData['GP_ClientName']}  name="GP_ClientName" className="form-control" placeholder="Client Name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>ID number:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_ClientIdNumber" onChange={(e) => {onChange(e)}} value={FormData['GP_ClientIdNumber']}  name="GP_ClientIdNumber"  className="form-control" placeholder="ID number"  aria-describedby="" />
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
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_ClientAddress" onChange={(e) => {onChange(e)}} value={FormData['GP_ClientAddress']}  name="GP_ClientAddress"  className="form-control" placeholder="Address"  aria-describedby="" />
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
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_ClientEmail" onChange={(e) => {onChange(e)}} value={FormData['GP_ClientEmail']}  name="GP_ClientEmail"  className="form-control" placeholder="Email"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Phone:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_ClientPhoneNumber" onChange={(e) => {onChange(e)}} value={FormData['GP_ClientPhoneNumber']}  name="GP_ClientPhoneNumber"  className="form-control" placeholder="Mobile Number"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <hr className="col-11" />
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Medical Aid:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_ClientMedicalAidName" onChange={(e) => {onChange(e)}} value={FormData['GP_ClientMedicalAidName']}  name="GP_ClientMedicalAidName"  className="form-control" placeholder="Medical Aid Name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Inception Date:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="GP_ClientInceptionDate" onChange={(e) => {onChange(e)}} value={FormData['GP_ClientInceptionDate']}  name="GP_ClientInceptionDate"  className="form-control" placeholder="Click to enter date"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <hr className="col-11" />
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Financial Advisor:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_FinancialAdvisor" onChange={(e) => {onChange(e)}} value={FormData['GP_FinancialAdvisor']}  name="GP_FinancialAdvisor"  className="form-control" placeholder="Primary intermediary's name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Date:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="GP_Date" onChange={(e) => {onChange(e)}} value={FormData['GP_Date']}  name="GP_Date"  className="form-control" placeholder="Click here to enter date"  aria-describedby="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <hr className="col-11" />
        <div className="col-11 p_class">
        
        <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) 
            processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to 
            SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on 
            <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
        </p> 
        </div>

        {/* <br/> */}
        <div><b>SECTION A</b></div>
        <h5 className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "h6 section_class2 sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "h6 section_class2 fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "h6 section_class2 sanlam-text" 
            : "h6 section_class2"
        }><b>NEED</b></h5>
        <div><b> Gap cover benefits are only available as an add-on to the members belonging to a registered medical aid.</b></div>
        
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-12">
                            <label htmlFor="id_number" className="col-form-label"><b>Details:</b></label>
                        </div>
                        <div className="col-12">
                            {/* <textarea maxLength={1000} spellCheck="true" id="GP_Benefits" onChange={(e) => {onChange(e)}} value={FormData['GP_Benefits']}  name="GP_Benefits"  className="form-control" placeholder="Details"  aria-describedby="" style={{width:"900px",height:"80px"}} /> */}
                            <ReactQuill
                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                value={FormData?.GP_Benefits}
                                onChange={(value)=>{ setFormData({...FormData, ['GP_Benefits']: value })}}
                                onBlur={(e)=>{onFieldBlur(e)}}
                                modules={modules}
                                formats={formats}
                                style={{
                                    height: '200px', // Set the desired height here
                                }}
                                placeholder='Details'
                            />
                            {/* <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                value={FormData['GP_Benefits']}
                                // setFormData({...FormData, [e.target.name]: e.target.value})
                                onEditorChange={(e)=>{ setFormData({...FormData, ["GP_Benefits"]: e}) }}
                                init={{
                                    selector: "textarea",
                                    browser_spellcheck : true,
                                    height: 300,
                                    placeholder: "Details",
                                    menu: true,
                                    plugins: [
                                        'advlist autolink link lists image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount',
                                    ],
                                    toolbar: 'styles | undo redo | formatselect | ' +
                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist | bullist numlist | outdent indent | link | copy paste undo redo | ' +
                                    'removeformat',
                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                    init_instance_callback : function(editor) {
                                        var freeTiny = document.querySelector('.tox .tox-notification--in');
                                    freeTiny.style.display = 'none';
                                    }
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
                <hr/>

                <div><b>SECTION B</b></div>
                <h5 className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "h6 section_class2 sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "h6 section_class2 fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "h6 section_class2 sanlam-text" 
            : "h6 section_class2"
        }><b>DEPENDENTS COVERED</b></h5>
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-6">
                            <label htmlFor="id_number" className="col-form-label"><b>Are all dependents on the same medical aid and same medical aid plan? </b></label>
                        </div>
                        <div className="col-6">
                            <input onMouseLeave={(e)=>{onFieldBlur(e)}} className='form-check-input' type="radio" id="GP_MedicalDependent" onChange={(e) => {onChange(e)}} checked={FormData['GP_MedicalDependent'] == 1 ? true : false} name="GP_MedicalDependent" value="1"/>
                                <label for="yes9">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input onMouseLeave={(e)=>{onFieldBlur(e)}} className='form-check-input' type="radio" id="GP_MedicalDependent" onChange={(e) => {onChange(e)}} checked={FormData['GP_MedicalDependent'] == 0 ? true : false} name="GP_MedicalDependent" value="0"/>
                                <label for="no9">No</label>
                        </div>
                    </div>
                </div>
                <hr/>
                <table class="table">
                    <thead>
                        <tr align="left">
                            <th align="left"><b>Member Name</b></th>
                            <th><b>Relationship to main Member</b></th>
                            <th><b>Medical Aid Plan</b></th>
                            {/* <th></th>
                            <th></th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td align="left">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberName1" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberName1']}  name="GP_MemberName1" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberRelationship1" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberRelationship1']}  name="GP_MemberRelationship1" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberAidPlan1" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberAidPlan1']}  name="GP_MemberAidPlan1" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberName2" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberName2']}  name="GP_MemberName2" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberRelationship2" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberRelationship2']}  name="GP_MemberRelationship2" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberAidPlan2" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberAidPlan2']}  name="GP_MemberAidPlan2" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberName2" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberName3']}  name="GP_MemberName3" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberRelationship3" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberRelationship3']}  name="GP_MemberRelationship3" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberAidPlan3" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberAidPlan3']}  name="GP_MemberAidPlan3" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberName4" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberName4']}  name="GP_MemberName4" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberRelationship4" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberRelationship4']}  name="GP_MemberRelationship4" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_MemberAidPlan4" onChange={(e) => {onChange(e)}} value={FormData['GP_MemberAidPlan4']}  name="GP_MemberAidPlan4" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div><b>SECTION C</b></div>
                <h5 className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "h6 section_class2 sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "h6 section_class2 fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "h6 section_class2 sanlam-text" 
            : "h6 section_class2"
        }><b>SOLUTION</b></h5>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Provider:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_Provider" onChange={(e) => {onChange(e)}} value={FormData['GP_Provider']}  name="GP_Provider"  className="form-control" placeholder="         Provider"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Option:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_Option" onChange={(e) => {onChange(e)}} value={FormData['GP_Option']}  name="GP_Option"  className="form-control" placeholder="         Option"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Motivation:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_Motivation" onChange={(e) => {onChange(e)}} value={FormData['GP_Motivation']}  name="GP_Motivation"  className="form-control" placeholder="         Motivation"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Total Premium:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_TotalPremium" onChange={(e) => {onChange(e)}} value={FormData['GP_TotalPremium']}  name="GP_TotalPremium"  className="form-control" placeholder="         R 0.00"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Broker Fee:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_BrokerFee" onChange={(e) => {onChange(e)}} value={FormData['GP_BrokerFee']}  name="GP_BrokerFee"  className="form-control" placeholder="         R 0.00"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Commission:</b></label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_Commission" onChange={(e) => {onChange(e)}} value={FormData['GP_Commission']}  name="GP_Commission"  className="form-control" placeholder="         R 0.00"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div><b>SECTION D</b></div>
                <h5 className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "h6 section_class2 sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "h6 section_class2 fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "h6 section_class2 sanlam-text" 
            : "h6 section_class2"
        }><b>BENEFITS</b></h5>
                <div><b>In the event of a replacement complete both current and new product</b></div>

                <table class="table">
                    <thead>
                        <tr align="left">
                            <th align="left"><b></b></th>
                            <th><b>Current Product</b></th>
                            <th><b>New Product</b></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td align="left"><b>Gap Cover rate</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_Rate" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_Rate']}  name="GP_CP_Rate" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_Rate" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_Rate']}  name="GP_NP_Rate" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Overall annual limit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_Overall" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_Overall']}  name="GP_CP_Overall" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_Overall" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_Overall']}  name="GP_NP_Overall" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Co-payment benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_CoPayment_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_CoPayment_B']}  name="GP_CP_CoPayment_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_CoPayment_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_CoPayment_B']}  name="GP_NP_CoPayment_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Sub-limit benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_SubLimit_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_SubLimit_B']}  name="GP_CP_SubLimit_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_SubLimit_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_SubLimit_B']}  name="GP_NP_SubLimit_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Cancer benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_Cancer_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_Cancer_B']}  name="GP_CP_Cancer_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_Cancer_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_Cancer_B']}  name="GP_NP_Cancer_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Cancer diagnose benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_CancerD_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_CancerD_B']}  name="GP_CP_CancerD_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_CancerD_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_CancerD_B']}  name="GP_NP_CancerD_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Other benefits</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_Other_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_Other_B']}  name="GP_CP_Other_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_Other_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_Other_B']}  name="GP_NP_Other_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Casualty benefit(In case of accident)</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_CasualB" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_CasualB']}  name="GP_CP_CasualB" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_CasualB" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_CasualB']}  name="GP_NP_CasualB" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Trauma counselling benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_TraumaB" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_TraumaB']}  name="GP_CP_TraumaB" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_TraumaB" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_TraumaB']}  name="GP_NP_TraumaB" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Gap Cover premium waiver benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_PreW_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_PreW_B']}  name="GP_CP_PreW_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_PreW_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_PreW_B']}  name="GP_NP_PreW_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Medical scheme waiver benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_Med_SW_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_Med_SW_B']}  name="GP_CP_Med_SW_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_Med_SW_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_Med_SW_B']}  name="GP_NP_Med_SW_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Accidental death cover benefit</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_Accidental_DC_B" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_Accidental_DC_B']}  name="GP_CP_Accidental_DC_B" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_Accidental_DC_B" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_Accidental_DC_B']}  name="GP_NP_Accidental_DC_B" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <div><b>SECTION E</b></div>
                            
                        </tr>

                        <tr>
                            <h5 className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "h6 section_class2 sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "h6 section_class2 fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "h6 section_class2 sanlam-text" 
            : "h6 section_class2"
        }><b>WAITING PERIODS</b></h5>
                           
                        </tr>

                        <tr>
                            <td align="left"><b>General Waiting period</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_GenWait_P" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_GenWait_P']}  name="GP_CP_GenWait_P" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_GenWait_P" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_GenWait_P']}  name="GP_NP_GenWait_P" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Waiting period for pre-existing condition</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_PreExist_P" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_PreExist_P']}  name="GP_CP_PreExist_P" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_PreExist_P" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_PreExist_P']}  name="GP_NP_PreExist_P" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Specific waiting periods</b></td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_CP_Specific_P" onChange={(e) => {onChange(e)}} value={FormData['GP_CP_Specific_P']}  name="GP_CP_Specific_P" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_NP_Specific_P" onChange={(e) => {onChange(e)}} value={FormData['GP_NP_Specific_P']}  name="GP_NP_Specific_P" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div><b>SECTION F</b></div>
                <h5 className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "h6 section_class2 sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "h6 section_class2 fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "h6 section_class2 sanlam-text" 
            : "h6 section_class2"
        }><b>EXCLUSIONS</b></h5>

                    <div className="row g-3 align-items-center">
                        <div className="col-6">
                            <label htmlFor="id_number" className="col-form-label"><b>Are claims whereby the medical aid requires a co-payment for not using a specific medical service provider excluded?</b></label>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="row col-3 align-items-center">
                                    <div className="col-2">
                                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['GP_Exclusions'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="GP_Exclusions" name="GP_Exclusions" />
                                    </div>
                                    <div className="col-8">
                                        <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="row col-3 align-items-center">
                                    <div className="col-2">
                                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['GP_Exclusions'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="GP_Exclusions" name="GP_Exclusions" />
                                    </div>
                                    <div className="col-8">
                                        <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        


                    </div>
                    <hr/>

                    <div className="row g-3 align-items-center">
                        <div className="col-12">
                            <label htmlFor="id_number" className="col-form-label"><b>Other Exclusions</b></label>
                        </div>
                        <div className="col-12">
                            {/* <textarea maxLength={1000} spellCheck="true"  id="GP_Other_Exclusions" onChange={(e) => {onChange(e)}} value={FormData['GP_Other_Exclusions']}  name="GP_Other_Exclusions" className="form-control" placeholder="Discuss other exclusions"  aria-describedby=""  /> */}
                            <ReactQuill
                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                value={FormData?.GP_Other_Exclusions}
                                onChange={(value)=>{ setFormData({...FormData, ['GP_Other_Exclusions']: value })}}
                                onBlur={(e)=>{onFieldBlur(e)}}
                                modules={modules}
                                formats={formats}
                                style={{
                                    height: '200px', // Set the desired height here
                                }}
                                placeholder='Discuss other exclusions'
                            />
                            {/* <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                value={FormData['GP_Other_Exclusions']}
                                // setFormData({...FormData, [e.target.name]: e.target.value})
                                onEditorChange={(e)=>{ setFormData({...FormData, ["GP_Other_Exclusions"]: e}) }}
                                init={{
                                    selector: "textarea",
                                    browser_spellcheck : true,
                                    height: 300,
                                    placeholder: "Discuss other exclusions",
                                    menu: true,
                                    plugins: [
                                        'advlist autolink link lists image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount',
                                    ],
                                    toolbar: 'styles | undo redo | formatselect | ' +
                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist | bullist numlist | outdent indent | link | copy paste undo redo | ' +
                                    'removeformat',
                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                    init_instance_callback : function(editor) {
                                        var freeTiny = document.querySelector('.tox .tox-notification--in');
                                    freeTiny.style.display = 'none';
                                    }
                                }}
                            /> */}
                        </div>
                    </div>
                    <hr/>

                    <div className="row g-3 align-items-center">
                        <div className="col-12">
                            <label htmlFor="id_number" className="col-form-label"><b>General comments</b></label>
                        </div>
                        <div className="col-12">
                            {/* <textarea maxLength={1000} spellCheck="true"  id="GP_GeneralComments" onChange={(e) => {onChange(e)}} value={FormData['GP_GeneralComments']}  name="GP_GeneralComments" className="form-control" placeholder="Discuss other exclusions"  aria-describedby=""  /> */}
                            <ReactQuill
                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                value={FormData?.GP_GeneralComments}
                                onChange={(value)=>{ setFormData({...FormData, ['GP_GeneralComments']: value })}}
                                onBlur={(e)=>{onFieldBlur(e)}}
                                modules={modules}
                                formats={formats}
                                style={{
                                    height: '200px', // Set the desired height here
                                }}
                                placeholder="Discuss other exclusions"
                            />
                            {/* <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                value={FormData['GP_GeneralComments']}
                                // setFormData({...FormData, [e.target.name]: e.target.value})
                                onEditorChange={(e)=>{ setFormData({...FormData, ["GP_GeneralComments"]: e}) }}
                                init={{
                                    selector: "textarea",
                                    browser_spellcheck : true,
                                    height: 300,
                                    placeholder: "Discuss other exclusions",
                                    menu: true,
                                    plugins: [
                                        'advlist autolink link lists image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount',
                                    ],
                                    toolbar: 'styles | undo redo | formatselect | ' +
                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist | bullist numlist | outdent indent | link | copy paste undo redo | ' +
                                    'removeformat',
                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                    init_instance_callback : function(editor) {
                                        var freeTiny = document.querySelector('.tox .tox-notification--in');
                                    freeTiny.style.display = 'none';
                                    }
                                }}
                            /> */}
                        </div>
                    </div>
                    <hr/>
                    <div align="center"><b>Notes</b></div>
                    <hr/>

                    <div>You will always be responsible towards the provider of medical services. Gap cover often requires a subsequent claim process to be followed, once the medical aid company has made their payment. You are then required to submit a claim to the Gap cover provider for settlement of the remainder, up to the limit of the option selected.  </div>
                    <hr/>

                    <div>Most Medical Aid companies have introduced co-payments and sub-limits for certain in hospital treatment and procedures. If you elect not to take this cover you will be responsible for these. </div>
                    <hr/>

                    <div>Please be aware that No benefits are payable which should be provided by the Medical Aid scheme (such as Prescribed Minimum Benefits), this exception includes ward fees, theatre fees, medicines and other hospital expenses.</div>
                    <hr/>

                    <div>Please make sure you have read through your policy schedule/s Terms and Conditions thoroughly once your policy/s has been accepted.</div>
                    <hr/>

                    <div>All material facts must be accurately and properly disclosed. The accuracy and completeness of all answers, statements and/or other information provided by or on behalf of the client, are the client’s own responsibility.</div>
                    <hr/>

                    <div>Gap Cover applies to In-Hospital accounts and must not be confused with the Threshold Gap that applies for Out-Of-Hospital claims.</div>
                    <hr/>

                    <div><b>SECTION G</b></div>
                    <h5 className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "h6 section_class2 sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "h6 section_class2 fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "h6 section_class2 sanlam-text" 
            : "h6 section_class2"
        }><b>FINANCIAL ADVISER'S DECLARATION</b></h5>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">You have elected not to accept the following product recommendations:</label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_FinanAdvisor_ProdRecomm" onChange={(e) => {onChange(e)}} value={FormData['GP_FinanAdvisor_ProdRecomm']}  name="GP_FinanAdvisor_ProdRecomm" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
                        </div>
                    </div>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">For the following reasons</label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_FinanAdvisor_Reasons" onChange={(e) => {onChange(e)}} value={FormData['GP_FinanAdvisor_Reasons']}  name="GP_FinanAdvisor_Reasons" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
                        </div>
                    </div>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">The consequences thereof have been clearly explained to you.</label>
                        </div>
                        <div className="col-6">
                        <div className="row">
                            <div className="row col-3 align-items-center">
                                <div className="col-2">
                                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['GP_FinanAdvisor_Consequences'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="GP_FinanAdvisor_Consequences" name="GP_FinanAdvisor_Consequences" />
                                </div>
                                <div className="col-8">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                        Yes
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-3 align-items-center">
                                <div className="col-2">
                                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['GP_FinanAdvisor_Consequences'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="GP_FinanAdvisor_Consequences" name="GP_FinanAdvisor_Consequences" />
                                </div>
                                <div className="col-8">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    </div>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">Fee and/or commission</label>
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="GP_FinanAdvisor_FeeCommission" onChange={(e) => {onChange(e)}} value={FormData['GP_FinanAdvisor_FeeCommission']}  name="GP_FinanAdvisor_FeeCommission" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className='col-10'>
                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="GP_FinanAdvisor_OtherComments" onChange={(e) => {onChange(e)}} value={FormData['GP_FinanAdvisor_OtherComments']}  name="GP_FinanAdvisor_OtherComments" className="form-control" placeholder="Other Comments"  aria-describedby=""  />
                        </div>
                    </div>
                    <br />
                    <div className="row g-3">
                        <div className="col-4">
                            <p>Sign Here</p>    
                        </div>
                        <div className="col-6">
                            <input onBlur={(e)=>{onFieldBlur(e)}} type="date" id="GP_FinanAdvisor_Date" onChange={(e) => {onChange(e)}} value={FormData['GP_FinanAdvisor_Date']}  name="GP_FinanAdvisor_Date" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
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
                          className="updateGapCoverFormBTN"
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

export default connect(mapStateToProps, {LogOut})(GapCover) 