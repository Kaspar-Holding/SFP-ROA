// import { Breadcrumbs } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import  './Styles/CustomNotification.css'
import  './Styles/CustomButton.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
// import './Header.css';
import { Editor, tinyMCE } from '@tinymce/tinymce-react'
import {LogOut} from '../../../Actions/Auth'
const Risk = ({user, LogOut}) =>
{
    const [backgroundInfoVisibility1, setbackgroundInfoVisibility1] = useState(false)
    const [backgroundInfoVisibility2, setbackgroundInfoVisibility2] = useState(false)
    const [backgroundInfoVisibility3, setbackgroundInfoVisibility3] = useState(false)
    const [backgroundInfoVisibility4, setbackgroundInfoVisibility4] = useState(false)
    const [backgroundInfoVisibility5, setbackgroundInfoVisibility5] = useState(false)
    const [backgroundInfoVisibility6, setbackgroundInfoVisibility6] = useState(false)
    const [backgroundInfoVisibility7, setbackgroundInfoVisibility7] = useState(false)
    const [backgroundInfoVisibility8, setbackgroundInfoVisibility8] = useState(false)
    const [backgroundInfoVisibility9, setbackgroundInfoVisibility9] = useState(false)
    const [backgroundInfoVisibility10, setbackgroundInfoVisibility10] = useState(false)
    const [backgroundInfoVisibility11, setbackgroundInfoVisibility11] = useState(false)
    const [backgroundInfoVisibility12, setbackgroundInfoVisibility12] = useState(false)

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
      function backgroundInfo_onFocus6() {
        setbackgroundInfoVisibility6(true)
      }
      function backgroundInfo_onBlur6() {
        setbackgroundInfoVisibility6(false)
      }
      function backgroundInfo_onFocus7() {
        setbackgroundInfoVisibility7(true)
      }
      function backgroundInfo_onBlur7() {
        setbackgroundInfoVisibility7(false)
      }
      function backgroundInfo_onFocus8() {
        setbackgroundInfoVisibility8(true)
      }
      function backgroundInfo_onBlur8() {
        setbackgroundInfoVisibility8(false)
      }
      function backgroundInfo_onFocus9() {
        setbackgroundInfoVisibility9(true)
      }
      function backgroundInfo_onBlur9() {
        setbackgroundInfoVisibility9(false)
      }
      function backgroundInfo_onFocus10() {
        setbackgroundInfoVisibility10(true)
      }
      function backgroundInfo_onBlur10() {
        setbackgroundInfoVisibility10(false)
      }
      function backgroundInfo_onFocus11() {
        setbackgroundInfoVisibility11(true)
      }
      function backgroundInfo_onBlur11() {
        setbackgroundInfoVisibility11(false)
      }
      function backgroundInfo_onFocus12() {
        setbackgroundInfoVisibility12(true)
      }
      function backgroundInfo_onBlur12() {
        setbackgroundInfoVisibility12(false)
      }
      
      const location = useLocation();
      const { state } = location;
      const [FormData, setFormData] = useState({
        
        advisorId : state['advisor']['id'],
        formId : state['formId'],

        RP_DC_LumpSumTotalNeed : "",
        RP_DC_LumpSumExistingProvisions : "",
        RP_DC_LumpSumExistingShortfallSurplus : "",
        RP_DC_LumpSumInvestments : "",        
        RP_DC_IncomeTotalNeed : "",
        RP_DC_IncomeExistingProvisions : "",
        RP_DC_IncomeExistingShortfallSurplus : "",
        RP_DC_IncomeInvestments : "",        
        RP_DC_FB_TotalNeed : "",
        RP_DC_FB_ExistingProvisions : "",
        RP_DC_FB_ExistingShortfallSurplus : "",
        RP_DC_FB_Investments : "",    
        RP_DC_Other : "",
        RP_DC_OtherTotalNeed : "",
        RP_DC_OtherExistingProvisions : "",
        RP_DC_OtherExistingShortfallSurplus : "",
        RP_DC_OtherInvestments : "",        
        RP_DC_Comments : "",    
        RP_DiC_LumpSumTotalNeed : "",
        RP_DiC_LumpSumExistingProvisions : "",
        RP_DiC_LumpSumExistingShortfallSurplus : "",
        RP_DiC_LumpSumInvestments : "",        
        RP_DiC_PI_TotalNeed : "",
        RP_DiC_PI_ExistingProvisions : "",
        RP_DiC_PI_ExistingShortfallSurplus : "",
        RP_DiC_PI_Investments : "",        
        RP_DiC_TI_TotalNeed : "",
        RP_DiC_TI_ExistingProvisions : "",
        RP_DiC_TI_ExistingShortfallSurplus : "",
        RP_DiC_TI_Investments : "",            
        RP_DiC_SiB_TotalNeed : "",
        RP_DiC_SiB_ExistingProvisions : "",
        RP_DiC_SiB_ExistingShortfallSurplus : "",
        RP_DiC_SiB_Investments : "",      
        RP_DiC_Other1 : "",
        RP_DiC_OtherTotalNeed1 : "",
        RP_DiC_OtherExistingProvisions1 : "",
        RP_DiC_OtherExistingShortfallSurplus1 : "",
        RP_DiC_OtherInvestments1 : "",         
        RP_DiC_Other2 : "",
        RP_DiC_OtherTotalNeed2 : "",
        RP_DiC_OtherExistingProvisions2 : "",
        RP_DiC_OtherExistingShortfallSurplus2 : "",
        RP_DiC_OtherInvestments2 : "",     
        RP_DiC_Comments : "",        
        RP_DrC_LumpSumTotalNeed : "",
        RP_DrC_LumpSumExistingProvisions : "",
        RP_DrC_LumpSumExistingShortfallSurplus : "",
        RP_DrC_LumpSumInvestments : "",        
        RP_DrC_IncomeTotalNeed : "",
        RP_DrC_IncomeExistingProvisions : "",
        RP_DrC_IncomeExistingShortfallSurplus : "",
        RP_DrC_IncomeInvestments : "",        
        RP_DrC_Other1 : "",
        RP_DrC_OtherTotalNeed1 : "",
        RP_DrC_OtherExistingProvisions1 : "",
        RP_DrC_OtherExistingShortfallSurplus1 : "",
        RP_DrC_OtherInvestments1 : "",         
        RP_DrC_Other2 : "",
        RP_DrC_OtherTotalNeed2 : "",
        RP_DrC_OtherExistingProvisions2 : "",
        RP_DrC_OtherExistingShortfallSurplus2 : "",
        RP_DrC_OtherExistingriskPlannings2 : "",     
        RP_DrC_Comments : "",      
        RP_LC_FinancialSolutions : "",
        RP_DiC_FinancialSolutions : "",
        RP_DrC_FinancialSolutions : "",    
        RP_AltS_1 : "",
        RP_AltS_2 : "",
        RP_AltS_3 : "",       
      })
      const [ProductTaken, setProductTaken] = useState([])
      const AddNewProductTaken = (e) => {}
    const RemoveNewProductTaken = (e) => {
    }
    const on_ProductTaken_Change = (e, i) => {
    }
    // Add New DC Other
    const [Risk_DC_Data, setRisk_DC_Data] = useState([])
    const AddNewRisk_DC_Data = (e) => {
    }
    const RemoveNewRisk_DC_Data = (e) => {
    }
    const on_Risk_DC_Data_Change = (e, i) => {
    }
    // End New DC Other
    
    // Add New DiC Other
    const [Risk_DiC_Data, setRisk_DiC_Data] = useState([])
    const AddNewRisk_DiC_Data = (e) => {}
    const RemoveNewRisk_DiC_Data = (e) => {
    }
    const on_Risk_DiC_Data_Change = (e, i) => {
    }
    // End New DiC Other

    // Add New DrC Other
    const [Risk_DrC_Data, setRisk_DrC_Data] = useState([])
    const AddNewRisk_DrC_Data = (e) => {}
    const RemoveNewRisk_DrC_Data = (e) => {
    }
    const on_Risk_DrC_Data_Change = (e, i) => {
    }
    // End New DrC Other
    
    const on_ProductTaken_Value_Change = (name, i, val) => {
    }
      // console.log(JSON.stringify(FormData))
      const [SuccessMessage, setSuccessMessage] = useState("")
      const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
      const onChange = e => {}
      const createRPForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_risk_planning_data/`, Body ,config)
            // console.log(response.data['formData'])
            if (response.status === 201) {
                setFormData(response.data['formData'])
            } else {
                setFormData(response.data['formData'])
                setProductTaken(response.data['ProductTaken'])
                setRisk_DC_Data(response.data['Risk_DC_Data'])
                setRisk_DiC_Data(response.data['Risk_DiC_Data'])
                setRisk_DrC_Data(response.data['Risk_DrC_Data'])
                // if (response.data['ProductTaken'].length > 0) {
                // } else {
                //   setProductTaken([{
                //     advisorId : state['advisor']['id'],  
                //     formId : state['formId'],  
                //     Product_Taken : "",  
                //     Product_Provider : "",
                //     Policy_Number : "",
                //     Product_Name : "",
                //     Product_Premium : "",
                //     Product_PremiumFrequency : "0", 
                //     Product_Pattern : "",
                //     Product_Escalation : "",
                //     Product_ContractingParty : "",
                //     Product_LivesAssured : "",
                //     Product_Beneficiary : "",
                //     Product_PremiumPayer : "",
                //     Product_1stYearCommission : "",
                //     Product_2ndYearCommission : "",
                //     Product_OngoingFees : "",
                //     Product_OngoingFeesFrequency : "",
                //     Product_OngoingFeesFrequency1 : "0",    
                //     TotalFees_n_Commissions : "",        
                //     BenDesc_1 : "",
                //     BenDesc_CoverAmount_1 : "",
                //     BenDesc_2 : "",
                //     BenDesc_CoverAmount_2 : "",
                //     BenDesc_3 : "",
                //     BenDesc_CoverAmount_3 : "",
                //     BenDesc_4 : "",
                //     BenDesc_CoverAmount_4 : "",
                //     BenDesc_5 : "",
                //     BenDesc_CoverAmount_5 : "",
                //     BenDesc_6 : "",
                //     BenDesc_CoverAmount_6 : "",
                //     BenDesc_7 : "",
                //     BenDesc_CoverAmount_7 : "",        
                //     ProductReasons : "",
                //     ProductMaterialAspects : "",
                //     ProductDetails : "",
                //     ExecutorFee : "",
                //     NominationOfBeneficiaries : "",
                //     InformationExplained : ""
                //   }])
                // }
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
      const updateRPForm = async() => {}
      const onSubmit = e => {
        e.preventDefault()
        updateRPForm()
        // window.location.reload();
      }
      
      const onFieldBlur = (e) => {
        updateRPForm()
      }
        
      const RP_DC_CommentsRef = useRef(null)
      const RP_DiC_CommentsRef = useRef(null)
      const RP_DrC_CommentsRef = useRef(null)
      const RP_LC_FinancialSolutionsRef = useRef(null)
      const RP_DiC_FinancialSolutionsRef = useRef(null)
      const RP_DrC_FinancialSolutionsRef = useRef(null)
      const RP_AltS_1Ref = useRef(null)
      const RP_AltS_2Ref = useRef(null)
      const RP_AltS_3Ref = useRef(null)
      const ProductReasonsRef = useRef(null)
      const productExecutorFeeRef = useRef(null)
      const productProductMaterialAspectsRef = useRef(null)
      const productProductDetailsRef = useRef(null)
      const productInformationExplainedRef = useRef(null)
      const productNominationOfBeneficiariesRef = useRef(null)
      useEffect(() => {
        if (state['formId']){
          createRPForm(FormData)
        }
        // const interval = setInterval(() => {
        //     const formSubmitButton = document.querySelector(".updateRiskFormBTN")
        //     formSubmitButton.click()
        // }, 10000)
        // return () => {
        //     clearInterval(interval);
        // }
      }, []);
      // console.log(JSON.stringify(FormData))

      // setTimeout(() => {
      //   setSuccessMessageVisibility("none")
      // }, 5000);
    return(

      <header >
        
      <div className="notification_container">
        <div 
          className={
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
          
   <br/>
   <div
      className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : "fw-bold"
      } 
      style={{fontSize:'36.66px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>RISK</b></div>
   <hr/>
        <h5 
          className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
            : "fw-bold"
          }
        > <b>Financial Needs Analysis Summary</b></h5>  

        <table className="table">
  <thead>
    <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Financial Planning Need/Objective</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Total need identified</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Existing provisions</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Shortfall/ Surplus</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Cover taken up now </th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : "fw-bold"
      } style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover: </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover:Lump sum</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumTotalNeed' value={FormData['RP_DC_LumpSumTotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumExistingProvisions' value={FormData['RP_DC_LumpSumExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumExistingShortfallSurplus' value={FormData['RP_DC_LumpSumTotalNeed'] - FormData['RP_DC_LumpSumExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumInvestments' value={FormData['RP_DC_LumpSumInvestments']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover: Income (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeTotalNeed' value={FormData['RP_DC_IncomeTotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeExistingProvisions' value={FormData['RP_DC_IncomeExistingProvisions']}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeExistingShortfallSurplus' value={FormData['RP_DC_IncomeTotalNeed'] - FormData['RP_DC_IncomeExistingProvisions']}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeInvestments' value={FormData['RP_DC_IncomeInvestments']}  placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Funeral Benefit (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_TotalNeed' value={FormData['RP_DC_FB_TotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_ExistingProvisions' value={FormData['RP_DC_FB_ExistingProvisions']}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_ExistingShortfallSurplus' value={FormData['RP_DC_FB_TotalNeed'] - FormData['RP_DC_FB_ExistingProvisions']}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_Investments' value={FormData['RP_DC_FB_Investments']}  placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>
    </tbody>
    </table>
    
    <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
    <table className="table">
      <tbody>
    {
      Risk_DC_Data.length > 0 ?
      Risk_DC_Data.map((key,i) => {
        // console.log(i+1)
          return (
            <>
              <tr>
                <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text"  name='DC_Other' value={key['DC_Other']} maxLength={500} placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </td>
                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DC_OtherTotalNeed' value={key['DC_OtherTotalNeed']} placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DC_OtherExistingProvisions' value={key['DC_OtherExistingProvisions']}  placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DC_OtherExistingShortfallSurplus' value={key['DC_OtherTotalNeed'] - key['DC_OtherExistingProvisions']}  placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DC_OtherInvestments' value={key['DC_OtherInvestments']}  placeholder='0.00' aria-label="" />
                  </div>
                </td>
              </tr>
            </>
          )
      })
      :<></>
    }
      </tbody>
    </table>
    
    <div className='row'>
      <div className='col-12'>
        <p style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</p>
      </div>
      <div className='col-12'>
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          onInit={(evt, editor) => RP_DC_CommentsRef.current = editor}
          value={FormData['RP_DC_Comments']}
          onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DC_Comments']: RP_DC_CommentsRef.current.getContent() }) }}
          name="RP_DC_Comments"
          init={{
              selector: "textarea",
              browser_spellcheck : true,
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
              'removeformat',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
      />
      </div>

    </div>  
    <hr/>
    
    <table className="table">
      <tbody>  
    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : "fw-bold"
      } style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability Cover: </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Lump Sum</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumTotalNeed' value={FormData['RP_DiC_LumpSumTotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumExistingProvisions' value={FormData['RP_DiC_LumpSumExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumExistingShortfallSurplus' value={FormData['RP_DiC_LumpSumTotalNeed'] - FormData['RP_DiC_LumpSumExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumInvestments' value={FormData['RP_DiC_LumpSumInvestments']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanent Income (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_TotalNeed' value={FormData['RP_DiC_PI_TotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_ExistingProvisions' value={FormData['RP_DiC_PI_ExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_ExistingShortfallSurplus' value={FormData['RP_DiC_PI_TotalNeed']-FormData['RP_DiC_PI_ExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_Investments' value={FormData['RP_DiC_PI_Investments']} placeholder='0.00' aria-label="" />
        </div>
      </td> 
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Temporary Income (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_TotalNeed' value={FormData['RP_DiC_TI_TotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_ExistingProvisions' value={FormData['RP_DiC_TI_ExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_ExistingShortfallSurplus' value={FormData['RP_DiC_TI_TotalNeed']-FormData['RP_DiC_TI_ExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_Investments' value={FormData['RP_DiC_TI_Investments']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Sickness Benefit</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_TotalNeed' value={FormData['RP_DiC_SiB_TotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_ExistingProvisions' value={FormData['RP_DiC_SiB_ExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_ExistingShortfallSurplus' value={FormData['RP_DiC_SiB_TotalNeed']-FormData['RP_DiC_SiB_ExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_Investments' value={FormData['RP_DiC_SiB_Investments']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    {/* <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
      <div className="form-group">
            <input onBlur={(e)=>{onFieldBlur(e)}} type="text"  name='RP_DiC_Other1' value={FormData['RP_DiC_Other1']} maxLength={500} placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} disabled={FormData['RP_DiC_Other1'] === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_OtherTotalNeed1' value={FormData['RP_DiC_OtherTotalNeed1']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} disabled={FormData['RP_DiC_Other1'] === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_OtherExistingProvisions1' value={FormData['RP_DiC_OtherExistingProvisions1']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} disabled={FormData['RP_DiC_Other1'] === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_OtherExistingShortfallSurplus1' value={FormData['RP_DiC_OtherTotalNeed1']-FormData['RP_DiC_OtherExistingProvisions1']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} disabled={FormData['RP_DiC_Other1'] === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_OtherInvestments1' value={FormData['RP_DiC_OtherInvestments1']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
      <div className="form-group">
            <input onBlur={(e)=>{onFieldBlur(e)}} type="text"  name='RP_DiC_Other2' value={FormData['RP_DiC_Other2']} maxLength={500} placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DiC_Other2'] === ""} className="form-control" name='RP_DiC_OtherTotalNeed2' value={FormData['RP_DiC_OtherTotalNeed2']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DiC_Other2'] === ""} className="form-control" name='RP_DiC_OtherExistingProvisions2' value={FormData['RP_DiC_OtherExistingProvisions2']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DiC_Other2'] === ""} className="form-control" name='RP_DiC_OtherExistingShortfallSurplus2' value={FormData['RP_DiC_OtherTotalNeed2']-FormData['RP_DiC_OtherExistingProvisions2']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DiC_Other2'] === ""} className="form-control" name='RP_DiC_OtherInvestments2' value={FormData['RP_DiC_OtherInvestments2']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr> */}

    </tbody>
    </table>
   
    <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
    <table className="table">
      <tbody>
    {
      Risk_DiC_Data.length > 0 ?
      Risk_DiC_Data.map((key,i) => {
        // console.log(i+1)
          return (
            <>
              
              <tr>
                <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text"  name='DiC_Other' value={key['DiC_Other']} maxLength={500}  placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </td>
                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DiC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DiC_OtherTotalNeed' value={key['DiC_OtherTotalNeed']}  placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DiC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DiC_OtherExistingProvisions' value={key['DiC_OtherExistingProvisions']}   placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DiC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DiC_OtherExistingShortfallSurplus' value={key['DiC_OtherTotalNeed'] - key['DiC_OtherExistingProvisions']}   placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DiC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DiC_OtherInvestments' value={key['DiC_OtherInvestments']}   placeholder='0.00' aria-label="" />
                  </div>
                </td>
              </tr>
            </>
          )
      })
      :<></>
    }
      </tbody>
    </table>
    <div className='row'>
      <div className='col-12'>
        <p style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</p>
      </div>
      <div className='col-12'>
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          onInit={(evt, editor) => RP_DiC_CommentsRef.current = editor}
          value={FormData['RP_DiC_Comments']}
          onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DiC_Comments']: RP_DiC_CommentsRef.current.getContent() }) }}
          name="RP_DiC_Comments"
          init={{
              selector: "textarea",
              browser_spellcheck : true,
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
              'removeformat',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
      />
      </div>

    </div>  
    <hr/>
    
    <table className="table">
      <tbody>  

    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : "fw-bold"
      } style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease Cover: </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease:Lump Sum</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumTotalNeed' value={FormData['RP_DrC_LumpSumTotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumExistingProvisions' value={FormData['RP_DrC_LumpSumExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumExistingShortfallSurplus' value={FormData['RP_DrC_LumpSumTotalNeed']-FormData['RP_DrC_LumpSumExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumInvestments' value={FormData['RP_DrC_LumpSumInvestments']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease:Income(p.m)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeTotalNeed' value={FormData['RP_DrC_IncomeTotalNeed']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeExistingProvisions' value={FormData['RP_DrC_IncomeExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeExistingShortfallSurplus' value={FormData['RP_DrC_IncomeTotalNeed']-FormData['RP_DrC_IncomeExistingProvisions']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeInvestments' value={FormData['RP_DrC_IncomeInvestments']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    {/* <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
      <div className="form-group">
            <input onBlur={(e)=>{onFieldBlur(e)}} type="text"  name='RP_DrC_Other1' value={FormData['RP_DrC_Other1']} maxLength={500} placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other1'] === ""} className="form-control" name='RP_DrC_OtherTotalNeed1' value={FormData['RP_DrC_OtherTotalNeed1']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other1'] === ""} className="form-control" name='RP_DrC_OtherExistingProvisions1' value={FormData['RP_DrC_OtherExistingProvisions1']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other1'] === ""} className="form-control" name='RP_DrC_OtherExistingShortfallSurplus1' value={FormData['RP_DrC_OtherTotalNeed1']-FormData['RP_DrC_OtherExistingProvisions1']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other1'] === ""} className="form-control" name='RP_DrC_OtherInvestments1' value={FormData['RP_DrC_OtherInvestments1']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
      <div className="form-group">
            <input onBlur={(e)=>{onFieldBlur(e)}} type="text"  name='RP_DrC_Other2' value={FormData['RP_DrC_Other2']} maxLength={500} placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other2'] === ""} className="form-control" name='RP_DrC_OtherTotalNeed2' value={FormData['RP_DrC_OtherTotalNeed2']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other2'] === ""} className="form-control" name='RP_DrC_OtherExistingProvisions2' value={FormData['RP_DrC_OtherExistingProvisions2']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other2'] === ""} className="form-control" name='RP_DrC_OtherExistingShortfallSurplus2' value={FormData['RP_DrC_OtherTotalNeed2']-FormData['RP_DrC_OtherExistingProvisions2']} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } disabled={FormData['RP_DrC_Other2'] === ""} className="form-control" name='RP_DrC_OtherInvestments2' value={FormData['RP_DrC_OtherInvestments2']} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr> */}

    </tbody>
    </table>
    
    <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
    <table className="table">
      <tbody>
    {
      Risk_DrC_Data.length > 0 ?
      Risk_DrC_Data.map((key,i) => {
        // console.log(i+1)
          return (
            <>
              <tr>
                <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text"  name='DrC_Other' value={key['DrC_Other']} maxLength={500} placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </td>
                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DrC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DrC_OtherTotalNeed' value={key['DrC_OtherTotalNeed']} placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DrC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DrC_OtherExistingProvisions' value={key['DrC_OtherExistingProvisions']}  placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DrC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DrC_OtherExistingShortfallSurplus' value={key['DrC_OtherTotalNeed'] - key['DrC_OtherExistingProvisions']}  placeholder='0.00' aria-label="" />
                  </div>
                </td>

                <td>
                  <div className="input-group">
                    <span className="input-group-text">R</span>
                    <input disabled={key['DrC_Other'] === ""} onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DrC_OtherInvestments' value={key['DrC_OtherInvestments']}  placeholder='0.00' aria-label="" />
                  </div>
                </td>
              </tr>
            </>
          )
      })
      :<></>
    }
      </tbody>
    </table>
    <div className='row'>
      <div className='col-12'>
        <p style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</p>
      </div>
      <div className='col-12'>
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          onInit={(evt, editor) => RP_DrC_CommentsRef.current = editor}
          value={FormData['RP_DrC_Comments']}
          onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DrC_Comments']: RP_DrC_CommentsRef.current.getContent() }) }}
          name="RP_DrC_Comments"
          init={{
              selector: "textarea",
              browser_spellcheck : true,
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
              'removeformat',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
      </div>

    </div>  
    <hr/>
    
        

  <h5 className="text-start " ><b>SECTION C:</b></h5> 
        <h6 className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : "fw-bold"
      } ><b>Financial Solutions:</b></h6>
        
        <p className="text-start">Summary of recommendations to address your identified needs.</p>
        <p className="text-start"> No cash values are payable/accessible unless a specified event has occurred, i.e., the life event for which cover is taken; in which case the proceeds are payable tax-free. The premiums are not tax-deductible according to current legislation and loans against the policy are not permitted.</p>    
        <p className="text-start">Should the policy have an accelerator benefit attached, it means that upon a claim of that benefit the life cover amount will reduce by the claim amount. Standalone benefits are independent of the life cover, and you may claim without affecting the life cover amounts.</p>
        <p className="text-start"><u>Life Cover:</u></p>
        <p className="text-start">Policies payable to the estate will attract executors’ fees at a maximum of 3.5% + VAT. Where there is a beneficiary the executors fees will not be levied. Executors’ fees are applicable to all assets in the estate of a client and the exemption only applies to policies with beneficiaries. </p>
        <p className="text-start">Death benefits will not be paid where the life insured commits suicide within 2 years of commencement or reinstatement of the cover.</p>


        {
        backgroundInfoVisibility1 ? 
        <>
        <div id="background_info_instructions1" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br/>
                    </li>
                    <li>
                    Record the client's instructions, deviations and implications thereof.
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <Editor
          onInit={(evt, editor) => RP_LC_FinancialSolutionsRef.current = editor}
          value={FormData['RP_LC_FinancialSolutions']}
          onEditorChange={(e)=>{ setFormData({...FormData, ['RP_LC_FinancialSolutions']: RP_LC_FinancialSolutionsRef.current.getContent() }) }}
          onFocus={(e)=>{backgroundInfo_onFocus1()}}
          onBlur={(e)=>{backgroundInfo_onBlur1();onFieldBlur(e)}}                      
          name="RP_LC_FinancialSolutions"
          init={{
              selector: "textarea",
              browser_spellcheck : true,
              placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
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
              'removeformat',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />


<p className="text-start"><u>Disability Cover:</u></p>
{
        backgroundInfoVisibility2 ? 
        <>
        <div id="background_info_instructions2" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why disability cover benefits were recommended to satisfy this need.<br/>
                    </li>
                    <li>
                    Record the client's instructions, deviations and implications thereof.
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <Editor
          onInit={(evt, editor) => RP_DiC_FinancialSolutionsRef.current = editor}
          value={FormData['RP_DiC_FinancialSolutions']}
          onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DiC_FinancialSolutions']: RP_DiC_FinancialSolutionsRef.current.getContent() }) }}
          onFocus={(e)=>{backgroundInfo_onFocus2()}}
          onBlur={(e)=>{backgroundInfo_onBlur2();onFieldBlur(e)}}                      
          name="RP_DiC_FinancialSolutions"
          init={{
            selector: "textarea",
            browser_spellcheck : true,
            placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
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
              'removeformat',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />


<p className="text-start"><u>Dread Disease Cover:</u></p>
{
        backgroundInfoVisibility3 ? 
        <>
        <div id="background_info_instructions3" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why dread disease cover benefits were recommended to satisfy this need.<br/>
                    </li>
                    <li>
                    Record the client's instructions, deviations and implications thereof.
                    </li>

                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <Editor
      onInit={(evt, editor) => RP_DrC_FinancialSolutionsRef.current = editor}
      value={FormData['RP_DrC_FinancialSolutions']}
      onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DrC_FinancialSolutions']: RP_DrC_FinancialSolutionsRef.current.getContent() }) }}
      onFocus={(e)=>{backgroundInfo_onFocus3()}}
      onBlur={(e)=>{backgroundInfo_onBlur3();onFieldBlur(e)}}                      
      name="RP_DrC_FinancialSolutions"
      init={{
          selector: "textarea",
          browser_spellcheck : true,
          placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
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
          'removeformat',
          content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
      }}
    />


<h5 className="text-start " ><b>SECTION D:</b></h5> 
        <h6 className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : "fw-bold"
      } ><b>Alternative Solutions Considered</b></h6>

        <p className="text-start">The following solutions were presented to you for consideration but were not selected for the following reasons:</p>

        {
        backgroundInfoVisibility4 ? 
        <>
        <div id="background_info_instructions4" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    1. Identify the type of product or product provider which was considered but not selected and motivate.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <Editor 
      onInit={(evt, editor) => RP_AltS_1Ref.current = editor}
      value={FormData['RP_AltS_1']}
      onEditorChange={(e)=>{ setFormData({...FormData, ['RP_AltS_1']: RP_AltS_1Ref.current.getContent() }) }}
      onFocus={(e)=>{backgroundInfo_onFocus4()}}
      onBlur={(e)=>{backgroundInfo_onBlur4();onFieldBlur(e)}}                      
      name="RP_AltS_1"
      init={{
          selector: "textarea",
          browser_spellcheck : true,
          placeholder: '1. Identify the type of product or product provider which was considered but not selected and motivate.',
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

    {
        backgroundInfoVisibility5 ? 
        <>
        <div id="background_info_instructions5" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    2. Identify the type of product or product provider which was considered but not selected and motivate.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    
    <Editor 
      onInit={(evt, editor) => RP_AltS_2Ref.current = editor}
      value={FormData['RP_AltS_2']}
      onEditorChange={(e)=>{ setFormData({...FormData, ['RP_AltS_2']: RP_AltS_2Ref.current.getContent() }) }}
      onFocus={(e)=>{backgroundInfo_onFocus5()}}
      onBlur={(e)=>{backgroundInfo_onBlur5();onFieldBlur(e)}}                      
      name="RP_AltS_2"
      init={{
          selector: "textarea",
          browser_spellcheck : true,
          placeholder: '2. Identify the type of product or product provider which was considered but not selected and motivate.',
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
    {
        backgroundInfoVisibility6 ? 
        <>
        <div id="background_info_instructions6" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    3. Identify the type of product or product provider which was considered but not selected and motivate.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    
    <Editor 
      onInit={(evt, editor) => RP_AltS_3Ref.current = editor}
      value={FormData['RP_AltS_3']}
      onEditorChange={(e)=>{ setFormData({...FormData, ['RP_AltS_3']: RP_AltS_3Ref.current.getContent() }) }}
      onFocus={(e)=>{backgroundInfo_onFocus6()}}
      onBlur={(e)=>{backgroundInfo_onBlur6();onFieldBlur(e)}}                      
      name="RP_AltS_3"
      init={{
          selector: "textarea",
          browser_spellcheck : true,
          placeholder: '3. Identify the type of product or product provider which was considered but not selected and motivate.',
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
    <h5 className="text-start " ><b>SECTION E:</b></h5> 
    
    {
      ProductTaken.length > 0 ?
      ProductTaken.map((key,i) => {
        // console.log(i+1)
          return (
            <>

                  <h6 className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : "fw-bold"
      } ><b>Product Taken {i+1}</b></h6>

                  <p className="text-start ">Products accepted by you to meet your requirements. </p> 
                  <hr/>
                  
                  <hr/>
            <div className="container mt-3">          
            <table className="table">
              
              <tbody>
                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product:</td>
                  <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_Taken" name='Product_Taken' value={key.Product_Taken} aria-describedby="emailHelp" placeholder=""/>
                      {/* <select onBlur={(e)=>{onFieldBlur(e)}}className="text-start form-select" name='Product_Taken' value={key.Product_Taken} onChange={(e)=>{on_ProductTaken_Change(e, i)}} aria-label="Default select example">
                            <option value="0" selected>Choose Product</option>
                            <option value="1">Endowment</option>
                            <option value="2">RA</option>
                            <option value="3">TFSA</option>
                            <option value="4">Unit Trust</option>
                            <option value="5">Life Annuity</option>
                            <option value="6">Living Annuity</option>
                            <option value="7">Other</option>
                        </select> */}
                  </div>
                </td>  
                <td></td>
                
                <td></td>

                  <td></td> 
                  
                  <td></td>      
                </tr>
              
                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Provider:</td>
                  <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_Provider" name='Product_Provider' value={key.Product_Provider}  aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Policy No:</td>
                <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Policy_Number" name='Policy_Number' required value={key.Policy_Number}  aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td> 

                  <td></td> 
                  
                  <td></td>      
                </tr>
                <tr>
                      <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Name:</td>
                      <td>  
                      <div className="form-group">
                          <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_Name" name='Product_Name' value={key.Product_Name} aria-describedby="emailHelp" placeholder="" />
                      </div>
                  </td>  
                  <td></td>
                  
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium</td>
                  <td>  
                      <div className='row'>
                          <div className='col-6'>
                              <div className="form-group">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_Premium" name='Product_Premium' value={key.Product_Premium} aria-describedby="emailHelp" placeholder="" />
                              </div>
                          </div>
                          <div className='col-6'>
                              <select onBlur={(e)=>{onFieldBlur(e)}}className="text-start form-select" id="Product_PremiumFrequency" name='Product_PremiumFrequency' value={key.Product_PremiumFrequency}  aria-label="Default select example">
                                  <option value="0" selected>Frequeny</option>
                                  <option value="1">Monthly</option>
                                  <option value="2">Quarterly</option>
                                  <option value="3">Annually</option>
                                  <option value="4">Once Off</option>
                              </select>
                          </div>
                      </div>
                      
                  </td> 
                </tr>
                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium Pattern:</td>
                  <td>  
                    <div className="form-group">
                        <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_Pattern" name='Product_Pattern' value={key.Product_Pattern}   aria-describedby="emailHelp" placeholder=""/>
                    </div>
                  </td>  
                  <td>
                  </td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Escalation in<br/>cover/premium</td>
                <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_Escalation" name='Product_Escalation' value={key.Product_Escalation}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td> 
                  <td></td> 

                  <td></td>      
                </tr>
                
                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Contracting Party:</td>
                  <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_ContractingParty" name='Product_ContractingParty' value={key.Product_ContractingParty}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Life/Lives<br/>covered</td>
                <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_LivesAssured" name='Product_LivesAssured' value={key.Product_LivesAssured}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td> 
                  <td></td> 
                  <td></td>      
                </tr>

                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Beneficial/<br/>Cessionary</td>
                  <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_Beneficiary" name='Product_Beneficiary' value={key.Product_Beneficiary}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium<br/>payer(s)</td>
                <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_PremiumPayer" name='Product_PremiumPayer' value={key.Product_PremiumPayer}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td> 
                  <td></td> 
                  <td></td>      
                </tr>

                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">1st year<br/>commission</td>
                  <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="Product_1stYearCommission" name='Product_1stYearCommission' value={key.Product_1stYearCommission}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td>  
                <td></td>
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">2nd year<br/>commission</td>
                <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="Product_2ndYearCommission" name='Product_2ndYearCommission' value={key.Product_2ndYearCommission}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td> 
                  <td></td> 
                  <td></td>      
                </tr>

                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Ongoing fees</td>
                  <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="Product_OngoingFees" name='Product_OngoingFees' value={key.Product_OngoingFees}   aria-describedby="emailHelp" placeholder=""/>
                  </div>
                </td>  
                <td></td>
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Frequency</td>
                <td>  
                  <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <input onBlur={(e)=>{onFieldBlur(e)}} type="text" className="form-control" id="Product_OngoingFeesFrequency" name='Product_OngoingFeesFrequency' value={key.Product_OngoingFeesFrequency}  aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div>
                    <div className='col-6'>
                        <select onBlur={(e)=>{onFieldBlur(e)}}className="text-start form-select" id="Product_OngoingFeesFrequency1" name='Product_OngoingFeesFrequency1' value={key.Product_OngoingFeesFrequency1}  aria-label="Default select example">
                            <option value="0" selected>Frequeny</option>
                            <option value="1">Monthly</option>
                            <option value="2">Quarterly</option>
                            <option value="3">Annually</option>
                            <option value="4">Once Off</option>
                        </select>
                    </div>
                  </div>
                </td> 
                  <td></td> 
                  <td></td>      
                </tr>

                

                <tr>
                  <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start"></td>
                  
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Total fees and commission</td>

                {/* <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Frequency</td> */}
                <td>  
                  <div className="form-group">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="TotalFees_n_Commissions" name='TotalFees_n_Commissions' value={key.TotalFees_n_Commissions}   aria-describedby="emailHelp" placeholder=""/>
                      
                  </div>
                </td>
                <td></td> 
                <td></td>
                <td></td>
                        
                </tr>


                <tr>
                  
                </tr>

              
              </tbody>
            </table>
            </div>

            <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                  <div className="row">
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-8">
                                  <label className="col-form-label"><b>Benefit description: life cover, disability etc</b></label>
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-4">
                                  <label htmlFor="id_number" className="col-form-label"><b>Cover amount</b></label>
                              </div> 
                          </div>
                      </div>
                      <hr/>

            
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="BenDesc_1" name='BenDesc_1' value={key.BenDesc_1}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <div className="input-group">
                                    <span className="input-group-text">R</span>
                                    <input onBlur={(e)=>{onFieldBlur(e)}} disabled={key.BenDesc_1 === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_1" name='BenDesc_CoverAmount_1' value={key.BenDesc_CoverAmount_1}  placeholder='0.00' aria-label="" />
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <hr/>

                      
            
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="BenDesc_2" name='BenDesc_2' value={key.BenDesc_2}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <div className="input-group">
                                    <span className="input-group-text">R</span>
                                    <input onBlur={(e)=>{onFieldBlur(e)}} disabled={key.BenDesc_2 === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_2" name='BenDesc_CoverAmount_2' value={key.BenDesc_CoverAmount_2}  placeholder='0.00' aria-label="" />
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <hr/>

                      
            
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="BenDesc_3" name='BenDesc_3' value={key.BenDesc_3}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <div className="input-group">
                                    <span className="input-group-text">R</span>
                                    <input onBlur={(e)=>{onFieldBlur(e)}} disabled={key.BenDesc_3 === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_3" name='BenDesc_CoverAmount_3' value={key.BenDesc_CoverAmount_3}  placeholder='0.00' aria-label="" />
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <hr/>

                      
            
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="BenDesc_4" name='BenDesc_4' value={key.BenDesc_4}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <div className="input-group">
                                    <span className="input-group-text">R</span>
                                    <input onBlur={(e)=>{onFieldBlur(e)}} disabled={key.BenDesc_4 === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_4" name='BenDesc_CoverAmount_4' value={key.BenDesc_CoverAmount_4}  placeholder='0.00' aria-label="" />
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <hr/>

                      
            
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="BenDesc_5" name='BenDesc_5' value={key.BenDesc_5}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <div className="input-group">
                                    <span className="input-group-text">R</span>
                                    <input onBlur={(e)=>{onFieldBlur(e)}} disabled={key.BenDesc_5 === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_5" name='BenDesc_CoverAmount_5' value={key.BenDesc_CoverAmount_5}  placeholder='0.00' aria-label="" />
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <hr/>

                      
            
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="BenDesc_6" name='BenDesc_6' value={key.BenDesc_6}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <div className="input-group">
                                    <span className="input-group-text">R</span>
                                    <input onBlur={(e)=>{onFieldBlur(e)}} disabled={key.BenDesc_6 === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_6" name='BenDesc_CoverAmount_6' value={key.BenDesc_CoverAmount_6}  placeholder='0.00' aria-label="" />
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <hr/>

                      
            
                      <div className="col-8" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="BenDesc_7" name='BenDesc_7' value={key.BenDesc_7}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                              </div>
                          </div>
                      </div>

                      <div className="col-4" style={{paddingBottom: "0.5%"}}>
                          <div className="row g-3 align-items-center">
                              <div className="col-6">
                                  <div className="input-group">
                                    <span className="input-group-text">R</span>
                                    <input onBlur={(e)=>{onFieldBlur(e)}} disabled={key.BenDesc_7 === ""} type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_7" name='BenDesc_CoverAmount_7' value={key.BenDesc_CoverAmount_7}  placeholder='0.00' aria-label="" />
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <hr/>

                      
                      <hr/>
                  </div> 
              </div>  


            <p className="text-start">The following are reasons why the above-mentioned product best suits your needs and objectives</p>

            {
                  backgroundInfoVisibility7 ? 
                  <>
                  <div id="background_info_instructions7" className="hidden_class">
                      {/* <p>Discuss the outcome of the FNA</p><br /> */}
                          <ul>
                              <li>
                              Motivate why the chosen product was recommended to best suit your client’s needs.

                              </li>
                            
                          </ul>
                          
                  </div>
                  </>: 
                  null
              }
              <Editor
                  onInit={(evt, editor) => ProductReasonsRef.current = editor}
                  value={key.ProductReasons}
                  id={"productTaken"+i}
                  onEditorChange={(newText)=>{ on_ProductTaken_Value_Change("ProductReasons", i, newText)}}
                  onFocus={(e)=>{backgroundInfo_onFocus7()}}
                  onBlur={(e)=>{backgroundInfo_onBlur7();onFieldBlur(e)}} 
                  name="ProductReasons"                     
                  init={{
                      selector: "textarea",
                      browser_spellcheck : true,
                      placeholder: 'Motivate why the chosen product was recommended to best suit your client’s needs.',
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
            <p className="text-start">The details of the material aspects of the selected product that were discussed with you are outlined below:</p>
              
              {
                  backgroundInfoVisibility8 ? 
                  <>
                  <div id="background_info_instructions8" className="hidden_class">
                      {/* <p>Discuss the outcome of the FNA</p><br /> */}
                          <ul>
                              <li>
                              Explain any deviations from your recommendation and the implications thereof.
                              </li>
                            
                          </ul>
                          
                  </div>
                  </>: 
                  null
              }              
              <Editor 
                  onInit={(evt, editor) => productProductMaterialAspectsRef.current = editor}
                  value={key.ProductMaterialAspects}
                  onEditorChange={(newText)=>{ on_ProductTaken_Value_Change("ProductMaterialAspects", i, newText)}}
                  onFocus={(e)=>{backgroundInfo_onFocus8()}}
                  onBlur={(e)=>{backgroundInfo_onBlur8();onFieldBlur(e)}}                      
                  init={{
                      selector: "textarea",
                      browser_spellcheck : true,
                      placeholder : 'Explain any deviations from your recommendation and the implications thereof.',
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
              {
                  backgroundInfoVisibility9 ? 
                  <>
                  <div id="background_info_instructions9" className="hidden_class">
                      {/* <p>Discuss the outcome of the FNA</p><br /> */}
                          <ul>
                              <li>
                              The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?
                              </li>
                            
                          </ul>
                          
                  </div>
                  </>: 
                  null
              }                          
              <Editor 
                onInit={(evt, editor) => productProductDetailsRef.current = editor}
                value={key.ProductDetails}
                onEditorChange={(e)=>{ on_ProductTaken_Value_Change("ProductDetails", i, e)}}
                onFocus={(e)=>{backgroundInfo_onFocus9()}}
                onBlur={(e)=>{backgroundInfo_onBlur9();onFieldBlur(e)}}                      
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    placeholder: 'The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?',
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
              {
                  backgroundInfoVisibility10 ? 
                  <>
                  <div id="background_info_instructions10" className="hidden_class">
                      {/* <p>Discuss the outcome of the FNA</p><br /> */}
                          <ul>
                              <li>
                              Executor’s fees?<br/>
                              Does the policy offer any liquidity?<br/>
                              Provide a summary of the contents of the quote with regard to the following:<br/>
                              Benefit terms (cease ages, cover periods etc.)<br/>
                              Details of premium and cover pattern structure, frequency etc.

                              </li>
                            
                          </ul>
                          
                  </div>
                  </>: 
                  null
              }
                          
              <Editor
                onInit={(evt, editor) => productExecutorFeeRef.current = editor}
                value={key.ExecutorFee}
                onEditorChange={(e)=>{ on_ProductTaken_Value_Change("ExecutorFee", i, e)}}
                onFocus={(e)=>{backgroundInfo_onFocus10()}}
                onBlur={(e)=>{backgroundInfo_onBlur10();onFieldBlur(e)}}        
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    height: 300,
                    placeholder:'Executor’s fees?\nDoes the policy offer any liquidity?\nProvide a summary of the contents of the quote with regard to the following:\nBenefit terms (cease ages, cover periods etc.)\nDetails of premium and cover pattern structure, frequency etc.\n',               
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
              {
                  backgroundInfoVisibility11 ? 
                  <>
                  <div id="background_info_instructions11" className="hidden_class">
                      {/* <p>Discuss the outcome of the FNA</p><br /> */}
                          <ul>
                              <li>
                              Record discussion with regard to nomination of beneficiaries or cessionaries.

                              </li>
                            
                          </ul>
                          
                  </div>
                  </>: 
                  null
              }
              <Editor 
                onInit={(evt, editor) => productNominationOfBeneficiariesRef.current = editor}
                value={key.NominationOfBeneficiaries}
                onEditorChange={(e)=>{ on_ProductTaken_Value_Change("NominationOfBeneficiaries", i, e)}}
                onFocus={(e)=>{backgroundInfo_onFocus11()}}
                onBlur={(e)=>{backgroundInfo_onBlur11();onFieldBlur(e)}}        
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    height: 300,
                    placeholder:'Record discussion with regard to nomination of beneficiaries or cessionaries.',               
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
              {
                  backgroundInfoVisibility12 ? 
                  <>
                  <div id="background_info_instructions12" className="hidden_class">
                      {/* <p>Discuss the outcome of the FNA</p><br /> */}
                          <ul>
                              <li>
                              Discuss the following information which has been explained to client.<br/>
                              General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.)<br/>
                              Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)<br/>
                              Waiting periods<br/>
                              Cooling off period

                              </li>
                            
                          </ul>
                          
                  </div>
                  </>: 
                  null
              }
             <Editor 
                onInit={(evt, editor) => productInformationExplainedRef.current = editor}
                value={key.InformationExplained}
                onEditorChange={(e)=>{ on_ProductTaken_Value_Change("InformationExplained", i, e)}}
                onFocus={(e)=>{backgroundInfo_onFocus12()}}
                onBlur={(e)=>{backgroundInfo_onBlur12();onFieldBlur(e)}}        
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    height: 300,
                    placeholder:`Discuss the following information which has been explained to client.
                    General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.)
                    Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)
                    Waiting periods
                    Cooling off period`,               
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
              
            </>
          ) 
        }
      ) : <></>
    }

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
                                    className="updateRiskFormBTN"
                                    style={{border: "none", backgroundColor: "transparent"}}
                                >
                                    <i className="fa-solid fa-check" />
                                </button>
                            </span>
                        </div>
                    </div>
        
        
      
      
        </form>
      </header>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect(mapStateToProps, {LogOut})(Risk)

const HeaderStyle = {
   width: "100%",
   height: "100vh",
  // background: `url(${BackgroundImage})`,
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover"
}