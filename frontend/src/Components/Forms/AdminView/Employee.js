import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import './Styles/CustomNotification.css';
import './Styles/CustomButton.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Editor } from '@tinymce/tinymce-react'
const Employee = ({user}) =>
{
    const [backgroundInfoVisibility1, setbackgroundInfoVisibility1] = useState(false)
    const [backgroundInfoVisibility2, setbackgroundInfoVisibility2] = useState(false)
    const [backgroundInfoVisibility3, setbackgroundInfoVisibility3] = useState(false)
    const [backgroundInfoVisibility4, setbackgroundInfoVisibility4] = useState(false)
    const [backgroundInfoVisibility5, setbackgroundInfoVisibility5] = useState(false)

    function backgroundInfo_onFocus1() {
        setbackgroundInfoVisibility1(true)
      }
      function backgroundInfo_onBlur1() {
        setbackgroundInfoVisibility1(false)
      }

      function backgroundInfo_onFocus2() {
        setbackgroundInfoVisibility2(true)
      }
      function backgroundInfo_onBlur2() {
        setbackgroundInfoVisibility2(false)
      }

      function backgroundInfo_onFocus3() {
        setbackgroundInfoVisibility3(true)
      }
      function backgroundInfo_onBlur3() {
        setbackgroundInfoVisibility3(false)
      }

      function backgroundInfo_onFocus4() {
        setbackgroundInfoVisibility4(true)
      }
      function backgroundInfo_onBlur4() {
        setbackgroundInfoVisibility4(false)
      }

      function backgroundInfo_onFocus5() {
        setbackgroundInfoVisibility5(true)
      }
      function backgroundInfo_onBlur5() {
        setbackgroundInfoVisibility5(false)
      }
      
      const location = useLocation();
      const { state } = location;
      
      const [errorData, setErrorData] = useState({
        status: "",
        message: ""
      })
      const [responseErrorVisibility, setResponseErrorVisibility] = useState("none")
      
      const [UpdateMessage, setUpdateMessage] = useState("")
      const [UpdateMessageVisibility, setUpdateMessageVisibility] = useState("none")
      const [updateErrorData, setUpdateErrorData] = useState({
          status: "",
          message: ""
      })
      const [updateErrorVisibilty, setUpdateErrorVisibility] = useState("none")
      
      const [FormData, setFormData] = useState({
        advisorId : user['id'],
        formId : state['formId'],       
            
        EB_ClientName : "",
        EB_ClientIdNumber : "",
        EB_ClientAddress : "",
        EB_ClientPhoneNumber : "",
        EB_ClientCellNumber : "",
        EB_ClientEmail : "",
        EB_ClientDate : "",
        EB_ClientFinancialAdvisor : "",
        EB_ClientFeeDetails : "",

        EB_BusinessName : "",
        EB_BusinessAddress : "",
        EB_BusinessContactPerson : "",
        EB_BusinessPhoneNumber : "",
        EB_BusinessCellNumber : "",
        EB_BusinessEmail : "",
        EB_BusinessNature : "",
        EB_BusinessUnion : 2,
        EB_BusinessDetails : "",
        EB_BusinessNumberOfEmployees : "",
        EB_BusinessNumberOfEligibleEmployees : "",
        EB_BusinessNumberOfExcludedCategories : "",

        EB_BusEx_FundsName : "",
        EB_BusEx_FundsAdmin : "",
        EB_BusEx_FundsCurrentValue : "",
        EB_BusEx_FundsActiveMembers : "",
        EB_BusEx_FundsFullyPaidMembers : "",
        EB_BusEx_FundsFullyReasonForChange : "",

        EB_BusEmp_Retire_In5Years : 2,
        EB_BusEmp_Retire_In5YearsPercentage : "",
        EB_BusEmp_Fin_Illiterate : 2,
        EB_BusEmp_Fin_IlliteratePercentage : "",
        EB_BusEmp_Fin_Sophisticated : 2,
        EB_BusEmp_Fin_SophisticatedPercentage : "",
        EB_BusHS_TurnOver : 2,
        EB_BusHS_TurnOverPercentage : "",
        EB_BusI_Choice : 2,
        EB_BusI_ChoicePercentage : "",
        EB_BusinessItP : 2,
        EB_BusinessItP_Percentage : "",
        
        EB_BusEmp_AdditionalComments : "",

        EB_BusRB_Category1 : "",
        EB_BusRB_Category2 : "",
        EB_BusRB_Category3 : "",
        EB_BusRB_Category4 : "",

        EB_BusRB_MemContrib_Category1 : "",
        EB_BusRB_MemContrib_Category2 : "",
        EB_BusRB_MemContrib_Category3 : "",
        EB_BusRB_MemContrib_Category4 : "",

        EB_BusRB_EmpContrib_Category1 : "",
        EB_BusRB_EmpContrib_Category2 : "",
        EB_BusRB_EmpContrib_Category3 : "",
        EB_BusRB_EmpContrib_Category4 : "",

        EB_BusRB_NormRetire_AgeCategory1 : "",
        EB_BusRB_NormRetire_AgeCategory2 : "",
        EB_BusRB_NormRetire_AgeCategory3 : "",
        EB_BusRB_NormRetire_AgeCategory4 : "",

        EB_BusRB_FlexibleGroupLife : "",
        EB_BusRB_Approved : 2,
        EB_BusRB_ApprovedCategory1 : "",
        EB_BusRB_ApprovedCategory2 : "",
        EB_BusRB_ApprovedCategory3 : "",
        EB_BusRB_ApprovedCategory4 : "",
        EB_BusRB_UnApproved : 2,
        EB_BusRB_UnApprovedCategory1 : "",
        EB_BusRB_UnApprovedCategory2 : "",
        EB_BusRB_UnApprovedCategory3 : "",
        EB_BusRB_UnApprovedCategory4 : "",

        EB_BusinessRiskFundTakeOver : 2,

        EB_BusRB_SpouseLC_Category1 : "",
        EB_BusRB_SpouseLC_Category2 : "",
        EB_BusRB_SpouseLC_Category3 : "",
        EB_BusRB_SpouseLC_Category4 : "",
        EB_BusRB_SpouseLC_Notes : "",

        EB_BusRB_TrauBenSa_Category1 : "",
        EB_BusRB_TrauBenSa_Category2 : "",
        EB_BusRB_TrauBenSa_Category3 : "",
        EB_BusRB_TrauBenSa_Category4 : "",

        EB_BusRB_FB_CoverCategory1 : "",
        EB_BusRB_FB_CoverCategory2 : "",
        EB_BusRB_FB_CoverCategory3 : "",
        EB_BusRB_FB_CoverCategory4 : "",
        
        EB_BusRB_CapDisBen_Approved : 2,
        EB_BusRB_CapDisBen_ApprovedCategory1 : "",
        EB_BusRB_CapDisBen_ApprovedCategory2 : "",
        EB_BusRB_CapDisBen_ApprovedCategory3 : "",
        EB_BusRB_CapDisBen_ApprovedCategory4 : "",
        EB_BusRB_CapDisBen_UnApproved : 2,
        EB_BusRB_CapDisBen_UnApprovedCategory1 : "",
        EB_BusRB_CapDisBen_UnApprovedCategory2 : "",
        EB_BusRB_CapDisBen_UnApprovedCategory3 : "",
        EB_BusRB_CapDisBen_UnApprovedCategory4 : "",
        
        EB_BusRB_DiIBenWaitPer_Category1 : 0,
        EB_BusRB_DiIBenWaitPer_Category2 : 0,
        EB_BusRB_DiIBenWaitPer_Category3 : 0,
        EB_BusRB_DiIBenWaitPer_Category4 : 0,

        EB_BusRB_ConvOp : "",
        EB_BusRB_GrowthRates : "",
        EB_BusRB_DisabilityBenefitsNotes : "",
        
        EB_BusRB_AccidentBenefit : 0,
        EB_BusRB_AccidentBenefitCategory1 : "",
        EB_BusRB_AccidentBenefitCategory2 : "",
        EB_BusRB_AccidentBenefitCategory3 : "",
        EB_BusRB_AccidentBenefitCategory4 : "",
        EB_BusRB_AccidentBenefitReason : "",
        
        EB_BusRB_DiC_Reason : "",
        EB_BusRB_DrC_Reason : "",
        EB_BusRB_DrC_Summary : "",

        EB_BusRecom_ProductAdmin : "",
        EB_BusRecom_ProductName : "",
        EB_BusRecom_FundType : "",
        EB_BusRecom_RecommendationFundType : "",
        EB_BusRecom_Portfolio : 2,
        EB_BusRecom_ClientAccepted : 2,
        EB_BusRecom_ClientRisks : "",

        EB_BusFReplace_Name : "",
        EB_BusFReplace_RegNo : "",
        EB_BusFReplace_Type : "",
        EB_BusFReplace_Detail : 2,

        EB_BusFReplace_FeeChargesReplaced : "",
        EB_BusFReplace_FeeChargesExisting : "",
        EB_BusFReplace_TnC_Replaced : "",
        EB_BusFReplace_TnC_Existing : "",
        EB_BusFReplace_HealthChangesReplaced : "",
        EB_BusFReplace_HealthChangesExisting : "",
        EB_BusFReplace_TaxImplicationsReplaced : "",
        EB_BusFReplace_TaxImplicationsExisting : "",
        EB_BusFReplace_MaterialDifferencesReplaced : "",
        EB_BusFReplace_MaterialDifferencesExisting : "",
        EB_BusFReplace_PenaltiesReplaced : "",
        EB_BusFReplace_PenaltiesExisting : "",
        EB_BusFReplace_RealisedReplaced : "",
        EB_BusFReplace_RealisedExisting : "",
        
        EB_BusFReplace_EligGr_Proposed : "",
        EB_BusFReplace_EligGr_Existing : "",
        EB_BusFReplace_MemContrib_Proposed : "",
        EB_BusFReplace_MemContrib_Existing : "",
        EB_BusFReplace_EmpContrib_Proposed : "",
        EB_BusFReplace_EmpContrib_Existing : "",
        EB_BusFReplace_EmpContrib_PercentageProposed : "",
        EB_BusFReplace_EmpContrib_PercentageExisting : "",
        EB_BusFReplace_BenPayDis_Proposed : "",
        EB_BusFReplace_BenPayDis_Existing : "",
        EB_BusFReplace_BenPayD_Proposed : "",
        EB_BusFReplace_BenPayD_Existing : "",
        EB_BusFReplace_BenPayW_Proposed : "",
        EB_BusFReplace_BenPayW_Existing : "",
        EB_BusFReplace_BenPayRe_Proposed : "",
        EB_BusFReplace_BenPayRe_Existing : "",
        EB_BusFReplace_NormRetire_AgeProposed : "",
        EB_BusFReplace_NormRetire_AgeExisting : "",
        EB_BusFReplace_ConvOp_Proposed : "",
        EB_BusFReplace_ConvOp_Existing : "",
        EB_BusFReplace_HouseL_Proposed : "",
        EB_BusFReplace_HouseL_Existing : "",
        EB_BusFReplace_AdminC_Proposed : "",
        EB_BusFReplace_AdminC_Existing : "",
        EB_BusFReplace_InvestFee_Proposed : "",
        EB_BusFReplace_InvestFee_Existing : "",
        EB_BusFReplace_CoR_Proposed : "",
        EB_BusFReplace_CoR_Existing : "",
        EB_BusFReplace_BenA_Proposed : "",
        EB_BusFReplace_BenA_Existing : "",
        EB_BusFReplace_InvestCh_Proposed : "",
        EB_BusFReplace_InvestCh_Existing : "",



      })
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
      const [CoverData, setCoverData] = useState([{
            advisorId : user['id'],  
            formId : state['formId'],  
            
            BusB_CoverType : 0,
            BusB_Cover : 3
        }])
        const AddNewCoverData = (e) => {
            const current = [...CoverData]
            current.push({
                advisorId : user['id'],  
                formId : state['formId'],                
                
                BusB_CoverType : 0,
                BusB_Cover : 3
                
            })
            setCoverData(current)
        }
        const RemoveCoverData = (e) => {
            const current = [...CoverData]
            current.pop()
            setCoverData(current)
        }
        const on_CoverData_Change = (e, i) => {
            let newCoverData = [...CoverData]
            newCoverData[i][e.target.name] = e.target.value
            setCoverData(newCoverData)
        }
        const on_CoverData_radio_Change = (e, i, value) => {
            let newCoverData = [...CoverData]
            newCoverData[i][e.target.name] = value
            setCoverData(newCoverData)
        }
      const createEBForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify({
          "formId" : state['formId']
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/view_employee_benefits_data/`, Body ,config)
            // console.log(response.data['formData'])
            if (response.status === 201) {
                setFormData(response.data['formData'])
            } else {
                setFormData(response.data['formData'])
            }
            if (response.data['CoverData'].length > 0) {
                setCoverData(response.data['CoverData'])
            } else {
                setCoverData([{
                    advisorId : user['id'],  
                    formId : state['formId'],                
                    
                    BusB_CoverType : 0,
                    BusB_Cover : 3
                }])
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error.response.data)
            setErrorData({
              status: error.response.status,
              message: error.response.statusText
            })
            setResponseErrorVisibility("block")
        }

      }
      const [SuccessMessage, setSuccessMessage] = useState("")
      const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
      const updateEBForm = async() => {
          const config = {
              headers: {
                  'Content-Type' : 'application/json',
                  'Accept' : 'application/json',
                  'Authorization' : `JWT ${localStorage.getItem('access')}`
              }
          }
          const Body = JSON.stringify(FormData)
          try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_employee_benefits_data/`, Body ,config)
                // console.log(response.data['formData'])
                setFormData(response.data['formData'])
                    
                setSuccessMessage("Employee Benefits data is successfully updated")
                setSuccessMessageVisibility("block")
                setTimeout(() => {
                    setSuccessMessageVisibility("none")
                }, 5000)
              // setSubmissionMessageVisibility("block")
          } catch (error) {
              console.log(error)
              
              setUpdateErrorData({
                status: error.response.status,
                message: error.response.statusText
              })
              setUpdateErrorVisibility("block")
          }
            const CoverData_Body = JSON.stringify({
                "eb_data" : CoverData,
                "formId" : state['formId']
            })
          try {
              const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_eb_coverData/`, CoverData_Body ,config) 
              setCoverData(response.data['formData'])
          } catch (error) {
              
          }
      }
      const onSubmit = e => {
          e.preventDefault()
          updateEBForm()
          // window.location.reload();
      }
      const CoverEditor = useRef(null)
      useEffect(() => {
        if(user){
            createEBForm(FormData)
        }
          // setInterval(updateIPForm, 20000);
      }, []);
    //   console.log(JSON.stringify(FormData))
    
    // setTimeout(() => {
    //     setSuccessMessageVisibility("none")
    // }, 5000);
    return(
        <>
        <br/>
            
             <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>EMPLOYEE BENEFITS</b></div>
             <hr/>
             <form>
                
                  <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label className="col-form-label"><b>Client Name:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true" id="EB_ClientName" name='EB_ClientName' value={FormData['EB_ClientName']}   className="form-control" placeholder="Client Name"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="id_number" className="col-form-label"><b>ID number:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true" id="EB_ClientIdNumber" name='EB_ClientIdNumber' value={FormData['EB_ClientIdNumber']}  className="form-control" placeholder="ID # of client"  aria-describedby="" />
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
                                  <input spellCheck="true" id="EB_ClientAddress" name='EB_ClientAddress' value={FormData['EB_ClientAddress']}  className="form-control" placeholder="Address"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="email" className="col-form-label"><b>Phone:</b></label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true" id="EB_ClientPhoneNumber" name='EB_ClientPhoneNumber' value={FormData['EB_ClientPhoneNumber']}  className="form-control" placeholder="Office Tel"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="email" className="col-form-label"><b>Phone:</b></label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true" id="EB_ClientCellNumber" name='EB_ClientCellNumber' value={FormData['EB_ClientCellNumber']}  className="form-control" placeholder="Cell Number"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="advisor" className="col-form-label"><b>Email:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true" type="email" id="EB_ClientEmail" name='EB_ClientEmail' value={FormData['EB_ClientEmail']}  className="form-control" placeholder="Email"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="date_of_birth" className="col-form-label"><b>Date:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="date" id="EB_ClientDate" name='EB_ClientDate' value={FormData['EB_ClientDate']}  className="form-control" placeholder="date_of_birth"  aria-describedby="" />
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
                                  <input spellCheck="true"  id="EB_ClientFinancialAdvisor" name="EB_ClientFinancialAdvisor" onChange={(e)=>{onChange(e)}} value={FormData['EB_ClientFinancialAdvisor']} className="form-control" placeholder="Primary Intermediary’s name"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="date_of_birth" className="col-form-label"><b>Details of fee:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="text" id="EB_ClientFeeDetails" name='EB_ClientFeeDetails' value={FormData['EB_ClientFeeDetails']}  className="form-control" placeholder="Details of fee due to intermediary"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                

                <hr/>
                <div className="col-11 p_class">
                    <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence and storage of your personal information relating to your financial matters. Ts&Cs on  <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>
                </div>
                <h5 style={{color: '#00788A'}}><b>Section A:Employer Information</b></h5>

                <hr/>
                
                <div style={{fontFamily: 'Arial Narrow',fontSize: '12'}}>
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Name of business entity:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessName" name='EB_BusinessName' value={FormData['EB_BusinessName']}  className="form-control" placeholder="Name of business entity"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Physical Business Address:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessAddress" name='EB_BusinessAddress' value={FormData['EB_BusinessAddress']}  className="form-control" placeholder="Physical Business Address"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Employer contact person:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessContactPerson" name='EB_BusinessContactPerson' value={FormData['EB_BusinessContactPerson']}  className="form-control" placeholder="Employer contact person"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="advisor" className="col-form-label"><b>Office Tel No:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true" id="EB_BusinessPhoneNumber" name='EB_BusinessPhoneNumber' value={FormData['EB_BusinessPhoneNumber']}  className="form-control" placeholder="Office Tel No"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="date_of_birth" className="col-form-label"><b>Cell Phone:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="text" id="EB_BusinessCellNumber" name='EB_BusinessCellNumber' value={FormData['EB_BusinessCellNumber']}  className="form-control" placeholder="Cell Phone"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Email Address:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" type="email" id="EB_BusinessEmail" name='EB_BusinessEmail' value={FormData['EB_BusinessEmail']}  className="form-control" placeholder="Email Address"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Nature of business & Type of industry:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessNature" name='EB_BusinessNature' value={FormData['EB_BusinessNature']}  className="form-control" placeholder="Nature of business & Type of industry"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Do the employees belong to Trade Union/ Bargaining Council?:</b></label>
                                  </div>
                                  <div className="col-1">
                                    <label className="radio-inline">
                                        <input type="radio" className="form-check-input"  id="EB_BusinessUnion" checked={FormData["EB_BusinessUnion"] === "1" ? true : false} name='EB_BusinessUnion' value="1"  />Yes
                                    </label>
                                  </div>
                                  <div className="col-1">
                                    <label className="radio-inline">
                                        <input type="radio" className="form-check-input"  id="EB_BusinessUnion" checked={FormData["EB_BusinessUnion"] === "0" ? true : false} name='EB_BusinessUnion' value="0"  />No
                                    </label>
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Details:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessDetails" name='EB_BusinessDetails' value={FormData['EB_BusinessDetails']}  className="form-control" placeholder="Details"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Total number of employees:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessNumberOfEmployees" name='EB_BusinessNumberOfEmployees' value={FormData['EB_BusinessNumberOfEmployees']}  className="form-control" placeholder="Total number of employees"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Total number of eligible employees:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessNumberOfEligibleEmployees" name='EB_BusinessNumberOfEligibleEmployees' value={FormData['EB_BusinessNumberOfEligibleEmployees']}  className="form-control" placeholder="Total number of eligible employees"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Specify and explain categories of members excluded:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusinessNumberOfExcludedCategories" name='EB_BusinessNumberOfExcludedCategories' value={FormData['EB_BusinessNumberOfExcludedCategories']}  className="form-control" placeholder="Specify and explain categories of members excluded"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                

                <hr/>
                <h5 style={{color: '#00788A'}}><b>Section B:Take-over of existing fund</b></h5>
                <hr/>
                <div style={{fontFamily: 'Arial Narrow',fontSize: '12'}}>
            <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Name of existing fund & PF Reg no:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusEx_FundsName" name='EB_BusEx_FundsName' value={FormData['EB_BusEx_FundsName']}  className="form-control" placeholder="Name of existing fund & PF Reg no"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Name of previous Insurer/ Administrator:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusEx_FundsAdmin" name='EB_BusEx_FundsAdmin' value={FormData['EB_BusEx_FundsAdmin']}  className="form-control" placeholder="Name of previous Insurer/ Administrator"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Current total fund value:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusEx_FundsCurrentValue" name='EB_BusEx_FundsCurrentValue' value={FormData['EB_BusEx_FundsCurrentValue']}  className="form-control" placeholder="Current total fund value"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Number of current active members:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusEx_FundsActiveMembers" name='EB_BusEx_FundsActiveMembers' value={FormData['EB_BusEx_FundsActiveMembers']}  className="form-control" placeholder="Number of current active members"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Number of fully paid-up members:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusEx_FundsFullyPaidMembers" name='EB_BusEx_FundsFullyPaidMembers' value={FormData['EB_BusEx_FundsFullyPaidMembers']}  className="form-control" placeholder="Number of fully paid-up members"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Reason for change:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusEx_FundsFullyReasonForChange" name='EB_BusEx_FundsFullyReasonForChange' value={FormData['EB_BusEx_FundsFullyReasonForChange']}  className="form-control" placeholder="Reason for change"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>

                <hr/>
                <h5 style={{color: '#00788A'}}><b>Section C:Clients Needs and Requirements</b></h5>
                
                {
                    CoverData.map((key,i) => {
                        return (
                            <>
                                    <div className="row">
                                        <div className="col-6">
                                            <button className="btn btn-md" type='button' onClick={(e)=>{AddNewCoverData(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Cover</button>
                                        </div>
                                        {
                                            CoverData.length > 1 ?
                                            <div className="col-6">
                                                <button className="btn btn-md" type='button' onClick={(e)=>{RemoveCoverData(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Cover</button>
                                            </div>
                                            : <></>
                                        }
                                    </div>
                                    
                                    
                                    <hr/>
                                    <div className="row g-3 align-items-center" key={i}>
                                        <div className="col-6">
                                            <div className='col-6'>
                                                <select className="text-start form-select" id="BusB_CoverType" name='BusB_CoverType' value={key.BusB_CoverType} onChange={(e) => {on_CoverData_Change(e, i)}} aria-label="Default select example">
                                                    <option value="0" selected>Select the type of benefit cover.</option>
                                                    <option value="1">Retirement Benefits</option>
                                                    <option value="2">Type of fund/scheme</option>
                                                    <option value="3">Truama Benefits</option>
                                                    <option value="4">Funeral Benefits</option>
                                                    <option value="5">Accidental Benefits</option>
                                                    <option value="6">Group Life Cover</option>
                                                    <option value="7">Lump Sum Disability Cover</option>
                                                    <option value="8">Spouse Life Cover</option>
                                                    <option value="9">Disability Income Cover</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row">
                                                <div className="row col-2 align-items-center">
                                                    <div className="col-2">
                                                        <input className="form-check-input" type="checkbox" id={"BusB_Cover-"+i} name='BusB_Cover' checked={key.BusB_Cover == 1} value="1"  onChange={(e) => {on_CoverData_Change(e, i)}}  />
                                                    </div>
                                                    <div className="col-2">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                </div>
                    
                                                <div className="row col-2 align-items-center">
                                                    <div className="col-2">
                                                        <input className="form-check-input" type="checkbox" id={"BusB_Cover-"+i} name='BusB_Cover' checked={key.BusB_Cover == 0} value="0"  onChange={(e) => {on_CoverData_Change(e, i)}}  />
                                                    </div>
                                                    <div className="col-2">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                    
                                                <div className="row col-2 align-items-center">
                                                    <div className="col-2">
                                                        <input className="form-check-input" type="checkbox" id={"BusB_Cover-"+i} name='BusB_Cover' checked={key.BusB_Cover == 2} value="2" onChange={(e) => {on_CoverData_Change(e, i)}}  />
                                                    </div>
                                                    <div className="col-2">
                                                        <label className="form-check-label"  >
                                                            Undecided
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                                    
                                    </div> 
                                    
                            
                            </>
                        )}
                    )
                }
    {
                                    backgroundInfoVisibility1 ? 
                                    <>
                                    <div id="background_info_instructions1" className="hidden_class">
                                        {/* <p>Discuss the outcome of the FNA</p><br /> */}
                                            <ul>
                                                <li>
                                                Additional Comments .
                            
                                                </li>
                                            
                                            </ul>
                                            
                                    </div>
                                    </>: 
                                    null
                                }
                                <Editor
                                    value={FormData['EB_BusB_CoverDetails']}
                                    // setFormData({...FormData, [e.target.name]: e.target.value})
                                    onEditorChange={(e)=>{ setFormData({...FormData, ["EB_BusB_CoverDetails"]: e}) }}
                                    onFocus={(e)=>{backgroundInfo_onFocus1()}}
                                    onBlur={(e)=>{backgroundInfo_onBlur1()}}
                                    init={{
                                        selector: "textarea",
                                        height: 300,
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
                                />
    <h5 style={{color: '#00788A'}}><b>Section D:Investment Indicator</b></h5>
    <hr/>

                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate1">Are some of the employees within five years of retirement?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="EB_BusEmp_Retire_In5Years" name='EB_BusEmp_Retire_In5Years' checked={FormData['EB_BusEmp_Retire_In5Years'] == 1 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusEmp_Retire_In5Years" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="EB_BusEmp_Retire_In5Years" name='EB_BusEmp_Retire_In5Years' checked={FormData['EB_BusEmp_Retire_In5Years'] == 0 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusEmp_Retire_In5Years" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="EB_BusEmp_Retire_In5YearsPercentage" name='EB_BusEmp_Retire_In5YearsPercentage' value={FormData['EB_BusEmp_Retire_In5YearsPercentage']}  aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate2">Indicate the percentage of employees that are financially illiterate?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="EB_BusEmp_Fin_Illiterate" name='EB_BusEmp_Fin_Illiterate' checked={FormData['EB_BusEmp_Fin_Illiterate'] == 1 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusEmp_Fin_Illiterate" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="EB_BusEmp_Fin_Illiterate" name='EB_BusEmp_Fin_Illiterate' checked={FormData['EB_BusEmp_Fin_Illiterate'] == 0 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusEmp_Fin_Illiterate" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="EB_BusEmp_Fin_IlliteratePercentage" name='EB_BusEmp_Fin_IlliteratePercentage' value={FormData['EB_BusEmp_Fin_IlliteratePercentage']}  aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate3">Indicate the percentage of employees that are financially sophisticated</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="EB_BusEmp_Fin_Sophisticated" name='EB_BusEmp_Fin_Sophisticated' checked={FormData['EB_BusEmp_Fin_Sophisticated'] == 1 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusEmp_Fin_Sophisticated" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="EB_BusEmp_Fin_Sophisticated" name='EB_BusEmp_Fin_Sophisticated' checked={FormData['EB_BusEmp_Fin_Sophisticated'] == 0 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusEmp_Fin_Sophisticated" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="EB_BusEmp_Fin_SophisticatedPercentage" name='EB_BusEmp_Fin_SophisticatedPercentage' value={FormData['EB_BusEmp_Fin_SophisticatedPercentage']}  aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate4">Is there a high staff turnover?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="EB_BusHS_TurnOver" name='EB_BusHS_TurnOver' checked={FormData['EB_BusHS_TurnOver'] == 1 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusHS_TurnOver" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="EB_BusHS_TurnOver" name='EB_BusHS_TurnOver' checked={FormData['EB_BusHS_TurnOver'] == 0 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusHS_TurnOver" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="EB_BusHS_TurnOverPercentage" name='EB_BusHS_TurnOverPercentage' value={FormData['EB_BusHS_TurnOverPercentage']}  aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate5">Is individual member investment choice required?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="EB_BusI_Choice" name='EB_BusI_Choice' checked={FormData['EB_BusI_Choice'] == 1 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusI_Choice" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="EB_BusI_Choice" name='EB_BusI_Choice' checked={FormData['EB_BusI_Choice'] == 0 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusI_Choice" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="EB_BusI_ChoicePercentage" name='EB_BusI_ChoicePercentage' value={FormData['EB_BusI_ChoicePercentage']}  aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is a Default Investment Portfolio required?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="EB_BusinessItP" name='EB_BusinessItP' checked={FormData['EB_BusinessItP'] == 1 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusinessItP" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="EB_BusinessItP" name='EB_BusinessItP' checked={FormData['EB_BusinessItP'] == 0 ? true : false }  />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="EB_BusinessItP" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control"  id="EB_BusinessItP_Percentage" name='EB_BusinessItP_Percentage' value={FormData['EB_BusinessItP_Percentage']}   aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div style={{fontFamily: 'Arial Narrow',fontSize: '12'}}>
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Additional Comments</label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true" id="EB_BusEmp_AdditionalComments" name='EB_BusEmp_AdditionalComments' value={FormData['EB_BusEmp_AdditionalComments']}  className="form-control" placeholder="Additional Comments"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>

                <hr/>
                <h5 style={{color: '#00788A'}}><b>Section E:Risk Benefits</b></h5>
                <hr/>

    <table className="table">
  <tbody>
    
    <tr>
      <td style={{fontSize:'14px'}} align="left">Categories (description)</td>
      <td>
        <div >
            <input type="text" id="EB_BusRB_Category1" name='EB_BusRB_Category1' value={FormData['EB_BusRB_Category1']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_Category2" name='EB_BusRB_Category2' value={FormData['EB_BusRB_Category2']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_Category3" name='EB_BusRB_Category3' value={FormData['EB_BusRB_Category3']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_Category4" name='EB_BusRB_Category4' value={FormData['EB_BusRB_Category4']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px'}} align="left">Member Contributions</td>
      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_MemContrib_Category1" name='EB_BusRB_MemContrib_Category1' value={FormData['EB_BusRB_MemContrib_Category1']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_MemContrib_Category2" name='EB_BusRB_MemContrib_Category2' value={FormData['EB_BusRB_MemContrib_Category2']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_MemContrib_Category3" name='EB_BusRB_MemContrib_Category3' value={FormData['EB_BusRB_MemContrib_Category3']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_MemContrib_Category4" name='EB_BusRB_MemContrib_Category4' value={FormData['EB_BusRB_MemContrib_Category4']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px'}} align="left">Employer contributions</td>
      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_EmpContrib_Category1" name='EB_BusRB_EmpContrib_Category1' value={FormData['EB_BusRB_EmpContrib_Category1']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_EmpContrib_Category2" name='EB_BusRB_EmpContrib_Category2' value={FormData['EB_BusRB_EmpContrib_Category2']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_EmpContrib_Category3" name='EB_BusRB_EmpContrib_Category3' value={FormData['EB_BusRB_EmpContrib_Category3']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            {/* <span className="input-group-text">R</span> */}
            <input type="number" id="EB_BusRB_EmpContrib_Category4" name='EB_BusRB_EmpContrib_Category4' value={FormData['EB_BusRB_EmpContrib_Category4']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Normal Retirement age</td>
      <td>
        <div >
            <input type="text" id="EB_BusRB_NormRetire_AgeCategory1" name='EB_BusRB_NormRetire_AgeCategory1' value={FormData['EB_BusRB_NormRetire_AgeCategory1']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_NormRetire_AgeCategory2" name='EB_BusRB_NormRetire_AgeCategory2' value={FormData['EB_BusRB_NormRetire_AgeCategory2']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_NormRetire_AgeCategory3" name='EB_BusRB_NormRetire_AgeCategory3' value={FormData['EB_BusRB_NormRetire_AgeCategory3']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_NormRetire_AgeCategory4" name='EB_BusRB_NormRetire_AgeCategory4' value={FormData['EB_BusRB_NormRetire_AgeCategory4']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>
    </tr>
 
    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
       <td style={{fontSize:'14px'}} align="left">Death Benefits</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Flexible group life</td>
      <td>
      </td>
      <td>
        <input type="text" id="EB_BusRB_FlexibleGroupLife" name='EB_BusRB_FlexibleGroupLife' value={FormData['EB_BusRB_FlexibleGroupLife']}  className="form-control" aria-describedby="emailHelp" placeholder="Multiple of Salary"/>

      </td>
      <td></td>
      <td></td>

    </tr>

    <tr>
        <td style={{fontSize:'14px'}} align="left">
            <div className="col-12">
                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Approved</label>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="1" id="EB_BusRB_Approved" name='EB_BusRB_Approved' checked={FormData['EB_BusRB_Approved'] == 1 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_Approved" >
                                Yes
                            </label>
                        </div>
                    </div>

                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="0" id="EB_BusRB_Approved" name='EB_BusRB_Approved' checked={FormData['EB_BusRB_Approved'] == 0 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_Approved" >
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div >
                <input type="text" id="EB_BusRB_ApprovedCategory1" name='EB_BusRB_ApprovedCategory1' value={FormData['EB_BusRB_ApprovedCategory1']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_ApprovedCategory2" name='EB_BusRB_ApprovedCategory2' value={FormData['EB_BusRB_ApprovedCategory2']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_ApprovedCategory3" name='EB_BusRB_ApprovedCategory3' value={FormData['EB_BusRB_ApprovedCategory3']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_ApprovedCategory4" name='EB_BusRB_ApprovedCategory4' value={FormData['EB_BusRB_ApprovedCategory4']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

    </tr>
    
    <tr>
    <td style={{fontSize:'14px'}} align="left">
            <div className="col-12">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Unapproved</label>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="1" id="EB_BusRB_UnApproved" name='EB_BusRB_UnApproved' checked={FormData['EB_BusRB_UnApproved'] == 1 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_UnApproved" >
                                Yes
                            </label>
                        </div>
                    </div>

                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="0" id="EB_BusRB_UnApproved" name='EB_BusRB_UnApproved' checked={FormData['EB_BusRB_UnApproved'] == 0 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_UnApproved" >
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div >
                <input type="text" id="EB_BusRB_UnApprovedCategory1" name='EB_BusRB_UnApprovedCategory1' value={FormData['EB_BusRB_UnApprovedCategory1']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_UnApprovedCategory2" name='EB_BusRB_UnApprovedCategory2' value={FormData['EB_BusRB_UnApprovedCategory2']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_UnApprovedCategory3" name='EB_BusRB_UnApprovedCategory3' value={FormData['EB_BusRB_UnApprovedCategory3']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_UnApprovedCategory4" name='EB_BusRB_UnApprovedCategory4' value={FormData['EB_BusRB_UnApprovedCategory4']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

    </tr>


    </tbody>
  </table>

  <div className="row g-3 align-items-center">
    <div className="col-6">
        <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Will the new fund be taking over the life cover of existing disability claims? </label>
    </div>
    <div className="col-6">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input className="form-check-input" type="radio" value="1" id="EB_BusinessRiskFundTakeOver" name='EB_BusinessRiskFundTakeOver' checked={FormData['EB_BusinessRiskFundTakeOver'] == 1 ? true : false }  />
                </div>
                <div className="col-2">
                    <label className="form-check-label" htmlFor="EB_BusinessRiskFundTakeOver" >
                        Yes
                    </label>
                </div>
            </div>

            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input className="form-check-input" type="radio" value="0" id="EB_BusinessRiskFundTakeOver" name='EB_BusinessRiskFundTakeOver' checked={FormData['EB_BusinessRiskFundTakeOver'] == 0 ? true : false }  />
                </div>
                <div className="col-2">
                    <label className="form-check-label" htmlFor="EB_BusinessRiskFundTakeOver" >
                        No
                    </label>
                </div>
            </div>
        </div>
    </div>
    <hr/>                           
  </div> 
<table className="table">
  <tbody>
    
    <tr>
      <td style={{fontSize:'14px'}} align="left">Spouse life cover</td>
      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_SpouseLC_Category1" name='EB_BusRB_SpouseLC_Category1' value={FormData['EB_BusRB_SpouseLC_Category1']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_SpouseLC_Category2" name='EB_BusRB_SpouseLC_Category2' value={FormData['EB_BusRB_SpouseLC_Category2']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_SpouseLC_Category3" name='EB_BusRB_SpouseLC_Category3' value={FormData['EB_BusRB_SpouseLC_Category3']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_SpouseLC_Category4" name='EB_BusRB_SpouseLC_Category4' value={FormData['EB_BusRB_SpouseLC_Category4']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>
    </tr>
    
    <tr>
      <td style={{fontSize:'14px'}} align="left">Notes on Spouse cover</td>
      <td>
        <div >
            <input type="text" id="EB_BusRB_SpouseLC_Notes" name='EB_BusRB_SpouseLC_Notes' value={FormData['EB_BusRB_SpouseLC_Notes']}  className="form-control" aria-describedby="emailHelp" placeholder="Notes on Spouse cover"/>
        </div>
      </td>

      <td></td>

      <td></td>

      <td></td>
      
    </tr>
    <br/>
    <tr>
      <td style={{fontSize:'14px'}} align="left">Trauma Benefit</td>
      <td></td>

      <td></td>

      <td></td>

      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Multiple of Salary </td>
      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_TrauBenSa_Category1" name='EB_BusRB_TrauBenSa_Category1' value={FormData['EB_BusRB_TrauBenSa_Category1']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_TrauBenSa_Category2" name='EB_BusRB_TrauBenSa_Category2' value={FormData['EB_BusRB_TrauBenSa_Category2']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_TrauBenSa_Category3" name='EB_BusRB_TrauBenSa_Category3' value={FormData['EB_BusRB_TrauBenSa_Category3']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_TrauBenSa_Category4" name='EB_BusRB_TrauBenSa_Category4' value={FormData['EB_BusRB_TrauBenSa_Category4']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>
    </tr>
    <br/>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Funeral Benefit</td>
      <td></td>

      <td></td>

      <td></td>

      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Cover required </td>
      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_FB_CoverCategory1" name='EB_BusRB_FB_CoverCategory1' value={FormData['EB_BusRB_FB_CoverCategory1']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_FB_CoverCategory2" name='EB_BusRB_FB_CoverCategory2' value={FormData['EB_BusRB_FB_CoverCategory2']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_FB_CoverCategory3" name='EB_BusRB_FB_CoverCategory3' value={FormData['EB_BusRB_FB_CoverCategory3']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>

      <td>
        <div className="input-group">
            <span className="input-group-text">R</span>
            <input type="number" id="EB_BusRB_FB_CoverCategory4" name='EB_BusRB_FB_CoverCategory4' value={FormData['EB_BusRB_FB_CoverCategory4']}   className="form-control" aria-describedby="emailHelp" placeholder="0.00"/>
        </div>
      </td>
    </tr>
    <tr>
      <td style={{fontSize:'14px'}} align="left">Capital Disability Benefit</td>
      <td>
      </td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
        <td style={{fontSize:'14px'}} align="left">
            <div className="col-12">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Approved</label>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="1" id="EB_BusRB_CapDisBen_Approved" name='EB_BusRB_CapDisBen_Approved' checked={FormData['EB_BusRB_CapDisBen_Approved'] == 1 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_CapDisBen_Approved" >
                                Yes
                            </label>
                        </div>
                    </div>

                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="0" id="EB_BusRB_CapDisBen_Approved" name='EB_BusRB_CapDisBen_Approved' checked={FormData['EB_BusRB_CapDisBen_Approved'] == 0 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_CapDisBen_Approved" >
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div >
                <input type="text" id="EB_BusRB_CapDisBen_ApprovedCategory1" name='EB_BusRB_CapDisBen_ApprovedCategory1' value={FormData['EB_BusRB_CapDisBen_ApprovedCategory1']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_CapDisBen_ApprovedCategory2" name='EB_BusRB_CapDisBen_ApprovedCategory2' value={FormData['EB_BusRB_CapDisBen_ApprovedCategory2']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_CapDisBen_ApprovedCategory3" name='EB_BusRB_CapDisBen_ApprovedCategory3' value={FormData['EB_BusRB_CapDisBen_ApprovedCategory3']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_CapDisBen_ApprovedCategory4" name='EB_BusRB_CapDisBen_ApprovedCategory4' value={FormData['EB_BusRB_CapDisBen_ApprovedCategory4']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

    </tr>
    
    <tr>
    <td style={{fontSize:'14px'}} align="left">
            <div className="col-126">
                    <label htmlFor="EB_BusRB_CapDisBen_UnApproved" className="col-form-label" title="If no, motivate6">Unapproved</label>
            </div>
            <div className="col-126">
                <div className="row">
                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="1" id="EB_BusRB_CapDisBen_UnApproved" name='EB_BusRB_CapDisBen_UnApproved' checked={FormData['EB_BusRB_CapDisBen_UnApproved'] == 1 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_CapDisBen_UnApproved" >
                                Yes
                            </label>
                        </div>
                    </div>

                    <div className="row col-6 align-items-center">
                        <div className="col-6">
                            <input className="form-check-input" type="radio" value="0" id="EB_BusRB_CapDisBen_UnApproved" name='EB_BusRB_CapDisBen_UnApproved' checked={FormData['EB_BusRB_CapDisBen_UnApproved'] == 0 ? true : false }  />
                        </div>
                        <div className="col-6">
                            <label className="form-check-label" htmlFor="EB_BusRB_CapDisBen_UnApproved" >
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div >
                <input type="text" id="EB_BusRB_CapDisBen_UnApprovedCategory1" name='EB_BusRB_CapDisBen_UnApprovedCategory1' value={FormData['EB_BusRB_CapDisBen_UnApprovedCategory1']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_CapDisBen_UnApprovedCategory2" name='EB_BusRB_CapDisBen_UnApprovedCategory2' value={FormData['EB_BusRB_CapDisBen_UnApprovedCategory2']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_CapDisBen_UnApprovedCategory3" name='EB_BusRB_CapDisBen_UnApprovedCategory3' value={FormData['EB_BusRB_CapDisBen_UnApprovedCategory3']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

        <td>
            <div className="form-group">
                <input type="text" id="EB_BusRB_CapDisBen_UnApprovedCategory4" name='EB_BusRB_CapDisBen_UnApprovedCategory4' value={FormData['EB_BusRB_CapDisBen_UnApprovedCategory4']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
            </div>
        </td>

    </tr>
    <tr>
      <td style={{fontSize:'14px'}} align="left">Disability Income Benefit</td>
      <td>
      </td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Waiting period</td>
      <td>
        <div className='col-6'>
            <select className="text-start form-select"id="EB_BusRB_DiIBenWaitPer_Category1" name='EB_BusRB_DiIBenWaitPer_Category1' value={FormData['EB_BusRB_DiIBenWaitPer_Category1']}    aria-label="Default select example">
                <option value="0" selected>Select</option>
                <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">6</option>
                <option value="4">12</option>
                <option value="5">24</option>
            </select>
        </div>
      </td>

      <td>
        <div className='col-6'>
            <select className="text-start form-select" id="EB_BusRB_DiIBenWaitPer_Category2" name='EB_BusRB_DiIBenWaitPer_Category2' value={FormData['EB_BusRB_DiIBenWaitPer_Category2']}    aria-label="Default select example">
                <option value="0" selected>Select</option>
                <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">6</option>
                <option value="4">12</option>
                <option value="5">24</option>
            </select>
        </div>
      </td>

      <td>
        <div className='col-6'>
            <select className="text-start form-select" id="EB_BusRB_DiIBenWaitPer_Category3" name='EB_BusRB_DiIBenWaitPer_Category3' value={FormData['EB_BusRB_DiIBenWaitPer_Category3']}    aria-label="Default select example">
                <option value="0" selected>Select</option>
                <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">6</option>
                <option value="4">12</option>
                <option value="5">24</option>
            </select>
        </div>
      </td>

      <td>
        <div className='col-6'>
            <select className="text-start form-select" id="EB_BusRB_DiIBenWaitPer_Category4" name='EB_BusRB_DiIBenWaitPer_Category4' value={FormData['EB_BusRB_DiIBenWaitPer_Category4']}    aria-label="Default select example">
                <option value="0" selected>Select</option>
                <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">6</option>
                <option value="4">12</option>
                <option value="5">24</option>
            </select>
        </div>
      </td>

    </tr>
    {/* <br/> */}
    </tbody>
</table>

<div style={{fontSize:'14px'}} align="left">
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="address" className="col-form-label">Conversion option:</label>
                        </div>
                        <div className="col-10">
                            <input spellCheck="true" id="EB_BusRB_ConvOp" name='EB_BusRB_ConvOp' value={FormData['EB_BusRB_ConvOp']}  className="form-control" placeholder="Conversion option"  aria-describedby="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        <div style={{fontSize:'14px'}} align="left">
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="address" className="col-form-label">Growth rates for income benefits:</label>
                        </div>
                        <div className="col-10">
                            <input spellCheck="true" id="EB_BusRB_GrowthRates" name='EB_BusRB_GrowthRates' value={FormData['EB_BusRB_GrowthRates']}  className="form-control" placeholder="Growth rates for income benefits"  aria-describedby="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        <div style={{fontSize:'14px'}} align="left">
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="address" className="col-form-label">Notes on Disability Benefits:</label>
                        </div>
                        <div className="col-10">
                            <input spellCheck="true" id="EB_BusRB_DisabilityBenefitsNotes" name='EB_BusRB_DisabilityBenefitsNotes' value={FormData['EB_BusRB_DisabilityBenefitsNotes']}  className="form-control" placeholder="Notes on Disability Benefits"  aria-describedby="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <hr/>
    <table className="table">
  <tbody>
    
  <tr>
      <td style={{fontSize:'14px'}} align="left">Accident Benefit </td>
      <td></td>

      <td></td>

      <td></td>

      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">
        <div className='row'>
            <div className='col-3'>
                Benefit                 
            </div>
            <div className='col-6'>
                <div className='col-8'>
                    <select className="text-start form-select" id="EB_BusRB_AccidentBenefit" name='EB_BusRB_AccidentBenefit' value={FormData['EB_BusRB_AccidentBenefit']}   aria-label="Default select example">
                        <option value="0" selected>Select</option>
                        <option value="1">% of group life cover</option>
                        <option value="2">x annual salary</option>
                    </select>
                </div>
            </div>

        </div>
    </td>
    <td>
        <div >
            <input type="text" id="EB_BusRB_AccidentBenefitCategory1" name='EB_BusRB_AccidentBenefitCategory1' value={FormData['EB_BusRB_AccidentBenefitCategory1']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
    </td>

    <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_AccidentBenefitCategory2" name='EB_BusRB_AccidentBenefitCategory2' value={FormData['EB_BusRB_AccidentBenefitCategory2']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
    </td>

    <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_AccidentBenefitCategory3" name='EB_BusRB_AccidentBenefitCategory3' value={FormData['EB_BusRB_AccidentBenefitCategory3']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
    </td>

    <td>
        <div className="form-group">
            <input type="text" id="EB_BusRB_AccidentBenefitCategory4" name='EB_BusRB_AccidentBenefitCategory4' value={FormData['EB_BusRB_AccidentBenefitCategory4']}   className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
    </td>
    </tr>
    </tbody>
</table>
    
    <hr/>
    {
        backgroundInfoVisibility2 ? 
        <>
        <div id="background_info_instructions2" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need. <br/>
                    Record the client's instructions, deviations and implications thereof.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    {/* <textarea maxLength={1000} className="form-control"  style={{height: '140px'}} 
        id="EB_BusRB_AccidentBenefitReason" name='EB_BusRB_AccidentBenefitReason' value={FormData['EB_BusRB_AccidentBenefitReason']} 
        onFocus={backgroundInfo_onFocus2}
        onBlur={backgroundInfo_onBlur2}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        
        
        `}  aria-describedby=""  ></textarea> */}
    <Editor
        value={FormData['EB_BusRB_AccidentBenefitReason']}
        onEditorChange={(newText)=>{ setFormData({...FormData, ['EB_BusRB_AccidentBenefitReason']: newText }) }}
        onFocus={(e)=>{backgroundInfo_onFocus2()}}
        onBlur={(e)=>{backgroundInfo_onBlur2()}}                      
        name="EB_BusRB_AccidentBenefitReason"
        init={{
            selector: "textarea",
            placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need. \nRecord the client's instructions, deviations and implications thereof.",
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
            <hr/>
            <p>Disability Cover:</p>
            <hr/>

        {
        backgroundInfoVisibility4 ? 
        <>
        <div id="background_info_instructions4" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why disability benefits were recommended to satisfy this need. <br/>
                    Record the client's instructions, deviations and implications thereof.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    {/* <textarea maxLength={1000} className="form-control"  style={{height: '140px'}} 
        id="EB_BusRB_DiC_Reason" name='EB_BusRB_DiC_Reason' value={FormData['EB_BusRB_DiC_Reason']} 
        onFocus={backgroundInfo_onFocus4}
        onBlur={backgroundInfo_onBlur4}
        placeholder={`Explain the reasons why disability benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        
        
        `}  aria-describedby=""  ></textarea> */}
    <Editor
        value={FormData['EB_BusRB_DiC_Reason']}
        onEditorChange={(newText)=>{ setFormData({...FormData, ['EB_BusRB_DiC_Reason']: newText }) }}
        onFocus={(e)=>{backgroundInfo_onFocus2()}}
        onBlur={(e)=>{backgroundInfo_onBlur2()}}                      
        name="EB_BusRB_DiC_Reason"
        init={{
            selector: "textarea",
            placeholder: `
                Explain the reasons why disability benefits were recommended to satisfy this need. 
                Record the client's instructions, deviations and implications thereof.` ,
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
    <hr/>
    <p>Dread Disease Cover:</p>
    <hr/>

            {
        backgroundInfoVisibility3 ? 
        <>
        <div id="background_info_instructions3" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why dread disease cover was recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.



                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    {/* <textarea maxLength={1000} className="form-control"  style={{height: '140px'}} 
        id="EB_BusRB_DrC_Reason" name='EB_BusRB_DrC_Reason' value={FormData['EB_BusRB_DrC_Reason']} 
        onFocus={backgroundInfo_onFocus3}
        onBlur={backgroundInfo_onBlur3}
        placeholder={`Explain the reasons why dread disease cover was recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        
            
        
        `}  aria-describedby=""  ></textarea> */}
    <Editor
        value={FormData['EB_BusRB_DrC_Reason']}
        onEditorChange={(newText)=>{ setFormData({...FormData, ['EB_BusRB_DrC_Reason']: newText }) }}
        onFocus={(e)=>{backgroundInfo_onFocus3()}}
        onBlur={(e)=>{backgroundInfo_onBlur3()}}                      
        name="EB_BusRB_DrC_Reason"
        init={{
            selector: "textarea",
            placeholder: `Explain the reasons why dread disease cover was recommended to satisfy this need. 
            Record the client's instructions, deviations and implications thereof.` ,
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
<hr/>

        {
            backgroundInfoVisibility5 ? 
            <>
            <div id="background_info_instructions5" className="hidden_class">
                <ul>
                    <li>
                        Summary of recommendations to address your identified needs.
                    </li>
       
                </ul>
    
            </div>
            </>: 
            null
        }

        {/* <textarea maxLength={1000} className="form-control"  style={{height: '140px'}} 
        id="EB_BusRB_DrC_Summary" name='EB_BusRB_DrC_Summary' value={FormData['EB_BusRB_DrC_Summary']} 
        onFocus={backgroundInfo_onFocus5}
        onBlur={backgroundInfo_onBlur5}
        placeholder={`Summary of recommendations to address your identified needs.



        `}  aria-describedby=""  ></textarea> */}
        <Editor
        value={FormData['EB_BusRB_DrC_Summary']}
        onEditorChange={(newText)=>{ setFormData({...FormData, ['EB_BusRB_DrC_Summary']: newText }) }}
        onFocus={(e)=>{backgroundInfo_onFocus5()}}
        onBlur={(e)=>{backgroundInfo_onBlur5()}}                      
        name="EB_BusRB_DrC_Summary"
        init={{
            selector: "textarea",
            placeholder: `Summary of recommendations to address your identified needs.` ,
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

        <hr/>

        <h5 style={{color: '#00788A'}}><b>Section F:Recommendations</b></h5>
        <hr/>
        <p>Submit a copy of the accepted proposal with all details of new fund/scheme and benefits with this document. </p>
        <hr/>
        <div style={{fontSize:'14px'}} align="left">
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Product provider/ Administrator:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusRecom_ProductAdmin" name='EB_BusRecom_ProductAdmin' value={FormData['EB_BusRecom_ProductAdmin']}  className="form-control" placeholder="Product provider/ Administrator"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Product name:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusRecom_ProductName" name='EB_BusRecom_ProductName' value={FormData['EB_BusRecom_ProductName']}  className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Type of fund </label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusRecom_FundType" name='EB_BusRecom_FundType' value={FormData['EB_BusRecom_FundType']}  className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Motivation for recommendations of fund/scheme and type:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusRecom_RecommendationFundType" name='EB_BusRecom_RecommendationFundType' value={FormData['EB_BusRecom_RecommendationFundType']}  className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is a Default Investment Portfolio required?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-2 align-items-center">
                                        <div className="col-2">
                                            <input className="form-check-input" type="radio" value="1" id="EB_BusRecom_Portfolio" name='EB_BusRecom_Portfolio' checked={FormData['EB_BusRecom_Portfolio'] == 1 ? true : false}   />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                Yes
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row col-2 align-items-center">
                                        <div className="col-4">
                                            <input className="form-check-input" type="radio" value="0" id="EB_BusRecom_Portfolio" name='EB_BusRecom_Portfolio' checked={FormData['EB_BusRecom_Portfolio'] == 0 ? true : false}   />
                                        </div>
                                        <div className="col-4">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 


                          <hr />
                          <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">The client has accepted the recommendations</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-2 align-items-center">
                                        <div className="col-2">
                                            <input className="form-check-input" type="radio" value="1" id="EB_BusRecom_ClientAccepted" name='EB_BusRecom_ClientAccepted' checked={FormData['EB_BusRecom_ClientAccepted'] == 1 ? true : false}   />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                Yes
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row col-2 align-items-center">
                                        <div className="col-4">
                                            <input className="form-check-input" type="radio" value="0" id="EB_BusRecom_ClientAccepted" name='EB_BusRecom_ClientAccepted' checked={FormData['EB_BusRecom_ClientAccepted'] == 0 ? true : false}   />
                                        </div>
                                        <div className="col-4">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 

                        <hr/>
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">If the client has decided to conclude a transaction that differs from the recommended solution, has the employer been informed of the risks? What risks have been pointed out?:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusRecom_ClientRisks" name='EB_BusRecom_ClientRisks' value={FormData['EB_BusRecom_ClientRisks']}  className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          
                        </div>
                    </div>
               
               <br/>
                <h5 style={{color: '#00788A'}}><b>Section G: Fund Replacement</b></h5>
                <hr/>

                <div style={{fontSize:'14px'}} align="left">
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Name of fund replaced:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusFReplace_Name" name='EB_BusFReplace_Name' value={FormData['EB_BusFReplace_Name']}  className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Reg No: </label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusFReplace_RegNo" name='EB_BusFReplace_RegNo' value={FormData['EB_BusFReplace_RegNo']}  className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Type of fund replaced:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true" id="EB_BusFReplace_Type" name='EB_BusFReplace_Type' value={FormData['EB_BusFReplace_Type']}  className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Detail (as applicable) of the actual and potential financial implications, costs & consequences of the replacement as disclosed to the client.</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-2 align-items-center">
                                        <div className="col-2">
                                            <input className="form-check-input" type="radio" value="1" id="EB_BusFReplace_Detail" name='EB_BusFReplace_Detail' checked={FormData['EB_BusFReplace_Detail'] == 1 ? true : false}   />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                Yes
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row col-2 align-items-center">
                                        <div className="col-4">
                                            <input className="form-check-input" type="radio" value="0" id="EB_BusFReplace_Detail" name='EB_BusFReplace_Detail' checked={FormData['EB_BusFReplace_Detail'] == 0 ? true : false}   />
                                        </div>
                                        <div className="col-4">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 


                          <hr />
                          <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Fees and charges in respect of the replacement fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_FeeChargesReplaced" name='EB_BusFReplace_FeeChargesReplaced' value={FormData['EB_BusFReplace_FeeChargesReplaced']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_FeeChargesExisting" name='EB_BusFReplace_FeeChargesExisting' value={FormData['EB_BusFReplace_FeeChargesExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Special terms and conditions, exclusions of liability, waiting periods, loadings, penalties, excesses, pre-existing conditions, restrictions or circumstances in which benefits will not be provided, which may be applicable to the replacement product:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_TnC_Replaced" name='EB_BusFReplace_TnC_Replaced' value={FormData['EB_BusFReplace_TnC_Replaced']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_TnC_Existing" name='EB_BusFReplace_TnC_Existing' value={FormData['EB_BusFReplace_TnC_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>

                         <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">In the case of risk benefits, the impact of age and health changes on the premium payable:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_HealthChangesReplaced" name='EB_BusFReplace_HealthChangesReplaced' value={FormData['EB_BusFReplace_HealthChangesReplaced']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_HealthChangesExisting" name='EB_BusFReplace_HealthChangesExisting' value={FormData['EB_BusFReplace_HealthChangesExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Differences between the tax implications of the replacement fund and the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_TaxImplicationsReplaced" name='EB_BusFReplace_TaxImplicationsReplaced' value={FormData['EB_BusFReplace_TaxImplicationsReplaced']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_TaxImplicationsExisting" name='EB_BusFReplace_TaxImplicationsExisting' value={FormData['EB_BusFReplace_TaxImplicationsExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Material differences between the investment risk of the replacement fund and the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_MaterialDifferencesReplaced" name='EB_BusFReplace_MaterialDifferencesReplaced' value={FormData['EB_BusFReplace_MaterialDifferencesReplaced']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_MaterialDifferencesExisting" name='EB_BusFReplace_MaterialDifferencesExisting' value={FormData['EB_BusFReplace_MaterialDifferencesExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Penalties or un-recouped expenses deductible or payable due to termination of the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_PenaltiesReplaced" name='EB_BusFReplace_PenaltiesReplaced' value={FormData['EB_BusFReplace_PenaltiesReplaced']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_PenaltiesExisting" name='EB_BusFReplace_PenaltiesExisting' value={FormData['EB_BusFReplace_PenaltiesExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">The extent to which the replacement fund is readily realisable or the relevant funds accessible, compared to the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_RealisedReplaced" name='EB_BusFReplace_RealisedReplaced' value={FormData['EB_BusFReplace_RealisedReplaced']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_RealisedExisting" name='EB_BusFReplace_RealisedExisting' value={FormData['EB_BusFReplace_RealisedExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  
                          
                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Comparison of Benefits </label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Proposed</label>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Existing Fund</label>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  
                        
                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Eligible groups</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_EligGr_Proposed" name='EB_BusFReplace_EligGr_Proposed' value={FormData['EB_BusFReplace_EligGr_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_EligGr_Existing" name='EB_BusFReplace_EligGr_Existing' value={FormData['EB_BusFReplace_EligGr_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Member contribution % / rate</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_MemContrib_Proposed" name='EB_BusFReplace_MemContrib_Proposed' value={FormData['EB_BusFReplace_MemContrib_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_MemContrib_Existing" name='EB_BusFReplace_MemContrib_Existing' value={FormData['EB_BusFReplace_MemContrib_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Employer contribution % / rate</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_EmpContrib_PercentageProposed" name='EB_BusFReplace_EmpContrib_PercentageProposed' value={FormData['EB_BusFReplace_EmpContrib_PercentageProposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_EmpContrib_PercentageExisting" name='EB_BusFReplace_EmpContrib_PercentageExisting' value={FormData['EB_BusFReplace_EmpContrib_PercentageExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  
{/* jnhhufhhfhhfgtghutgjfhhrguh */}
                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is the employer contribution % inclusive or exclusive of risk and administration fees?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_AdminFee_Proposed" name='EB_BusFReplace_AdminFee_Proposed' value={FormData['EB_BusFReplace_AdminFee_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_AdminFee_Existing" name='EB_BusFReplace_AdminFee_Existing' value={FormData['EB_BusFReplace_AdminFee_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>       
                          </div> 
                        </div> 

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on death</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayD_Proposed" name='EB_BusFReplace_BenPayD_Proposed' value={FormData['EB_BusFReplace_BenPayD_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayD_Existing" name='EB_BusFReplace_BenPayD_Existing' value={FormData['EB_BusFReplace_BenPayD_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>          
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on disability (if admitted by underwriter)</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayDis_Proposed" name='EB_BusFReplace_BenPayDis_Proposed' value={FormData['EB_BusFReplace_BenPayDis_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayDis_Existing" name='EB_BusFReplace_BenPayDis_Existing' value={FormData['EB_BusFReplace_BenPayDis_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div> 
                           
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on withdrawal</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayW_Proposed" name='EB_BusFReplace_BenPayW_Proposed' value={FormData['EB_BusFReplace_BenPayW_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayW_Existing" name='EB_BusFReplace_BenPayW_Existing' value={FormData['EB_BusFReplace_BenPayW_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>          
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on retirement</label>
                            </div>
                            
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayRe_Proposed" name='EB_BusFReplace_BenPayRe_Proposed' value={FormData['EB_BusFReplace_BenPayRe_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenPayRe_Existing" name='EB_BusFReplace_BenPayRe_Existing' value={FormData['EB_BusFReplace_BenPayRe_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>       
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Normal retirement age</label>
                            </div>                            
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_NormRetire_AgeProposed" name='EB_BusFReplace_NormRetire_AgeProposed' value={FormData['EB_BusFReplace_NormRetire_AgeProposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_NormRetire_AgeExisting" name='EB_BusFReplace_NormRetire_AgeExisting' value={FormData['EB_BusFReplace_NormRetire_AgeExisting']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>          
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Conversion option available and for which benefits?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_ConvOp_Proposed" name='EB_BusFReplace_ConvOp_Proposed' value={FormData['EB_BusFReplace_ConvOp_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_ConvOp_Existing" name='EB_BusFReplace_ConvOp_Existing' value={FormData['EB_BusFReplace_ConvOp_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>        
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Are housing loans provided?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_HouseL_Proposed" name='EB_BusFReplace_HouseL_Proposed' value={FormData['EB_BusFReplace_HouseL_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_HouseL_Existing" name='EB_BusFReplace_HouseL_Existing' value={FormData['EB_BusFReplace_HouseL_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>       
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">What is the cost of administration and related costs (e.g. commission) as a % of employer’s contribution?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_AdminC_Proposed" name='EB_BusFReplace_AdminC_Proposed' value={FormData['EB_BusFReplace_AdminC_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_AdminC_Existing" name='EB_BusFReplace_AdminC_Existing' value={FormData['EB_BusFReplace_AdminC_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>   
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">What are the investments fees?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_InvestFee_Proposed" name='EB_BusFReplace_InvestFee_Proposed' value={FormData['EB_BusFReplace_InvestFee_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_InvestFee_Existing" name='EB_BusFReplace_InvestFee_Existing' value={FormData['EB_BusFReplace_InvestFee_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>     
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">What is the cost of risk cover as a % of the employer’s contribution?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_CoR_Proposed" name='EB_BusFReplace_CoR_Proposed' value={FormData['EB_BusFReplace_CoR_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_CoR_Existing" name='EB_BusFReplace_CoR_Existing' value={FormData['EB_BusFReplace_CoR_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Are any other benefits available to members on old fund/scheme that are not under the new fund/scheme (e.g. funeral or monthly disability benefits)?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenA_Proposed" name='EB_BusFReplace_BenA_Proposed' value={FormData['EB_BusFReplace_BenA_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_BenA_Existing" name='EB_BusFReplace_BenA_Existing' value={FormData['EB_BusFReplace_BenA_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is there investment choice and if so who qualifies?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_InvestCh_Proposed" name='EB_BusFReplace_InvestCh_Proposed' value={FormData['EB_BusFReplace_InvestCh_Proposed']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="text" id="EB_BusFReplace_InvestCh_Existing" name='EB_BusFReplace_InvestCh_Existing' value={FormData['EB_BusFReplace_InvestCh_Existing']}  className="form-control" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>    
                          </div> 
                        </div>   

                        <hr/>
                        </div>
                    </div>
                
                <br/>
                <h5 style={{color: '#00788A'}}><b>Section H: Clients Declarations</b></h5>
                <p>(Please note that it is of utmost importance that you read this section carefully and understand it fully).</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                1.&nbsp;&nbsp;&nbsp;I confirm that a Contact Stage Disclosure letter, setting out the financial adviser’s full particulars, experience and services offered has been provided to me.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                2.&nbsp;&nbsp;&nbsp;I confirm that I required the financial adviser to render the financial services set out in the Service Level Agreement, a copy of which has been provided to me.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                3.&nbsp;&nbsp;&nbsp;I understand that the accuracy of a needs analysis is dependent upon the information provided to or obtained by the financial adviser. The advice furnished and product recommendations made by the financial adviser are based largely on the information I provided to the financial adviser. I understand that material non-disclosures and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; misrepresentations could result in inappropriate product(s) being recommended and purchased by me.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                4.&nbsp;&nbsp;&nbsp;I confirm that I was provided with copies of quotations, fund fact sheet(s), marketing brochures and rates and benefit sheets for the product(s) selected. All material terms and conditions of the product(s) selected were explained to me prior to any decision made.  <br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                5.&nbsp;&nbsp;&nbsp;I have been informed of and understand all costs, charges, penalties, liquidity limitations and tax implications where applicable.  I understand the risks / guarantees (or absence thereof) associated with the product(s) and /or underlying fund(s) selected.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                6.&nbsp;&nbsp;&nbsp;I confirm that all documents signed by me were fully completed prior to my signing them.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                7.&nbsp;&nbsp;&nbsp;I confirm that the financial adviser has made enquiries to ascertain whether the product(s) selected are intended to replace any existing financial products held by me and where applicable, has informed me of the financial implications, costs and consequences of replacement.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                8.&nbsp;&nbsp;&nbsp;Notwithstanding the information provided by the Advisor, I acknowledge that I have an obligation to familiarize myself with the terms and conditions of the product(s) that I have purchased.<br/>

                </p>
            
                <hr/>
                
                


                </form>



        </>
    )
 }

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})

export default connect(mapStateToProps)(Employee)