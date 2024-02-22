// import { Breadcrumbs } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import { useLocation } from 'react-router-dom';
function  Risk()
{
    
      const location = useLocation();
      const { state } = location;
      const [FormData, setFormData] = useState({
        
        advisorId : state['advisorId'],
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
    
        RPDreadComments : "",
      
        RPLifeCoverFinancialSolutions : "",
        RP_DiC_FinancialSolutions : "",
        RP_DrC_FinancialSolutions : "",
    
        RP_AltS_1 : "",
        RP_AltS_2 : "",
        RP_AltS_3 : "",
    
        RP_Product_Taken : "",  
        RP_Product_Provider : "",
        RP_Policy_Number : "",
        RP_Product_Name : "",
        RP_Product_Premium : "",
        RP_Product_PremiumFrequency : "0", 
        RP_Product_Pattern : "",
        RP_Product_Escalation : "",
        RP_Product_ContractingParty : "",
        RP_Product_LivesAssured : "",
        RP_Product_Beneficiary : "",
        RP_Product_PremiumPayer : "",
        RP_Product_1stYearCommission : "",
        RP_Product_2ndYearCommission : "",
        RP_Product_OngoingFees : "",
        RP_Product_OngoingFeesFrequency : "",
        RP_Product_OngoingFeesFrequency1 : "0",
    
        RP_TotalFees_n_Commissions : "",
        
        RP_BenDesc_1 : "",
        RP_BenDesc_CoverAmount1 : "",
        RP_BenDesc_2 : "",
        RP_BenDesc_CoverAmount2 : "",
        RP_BenDesc_3 : "",
        RP_BenDesc_CoverAmount3 : "",
        RP_BenDesc_4 : "",
        RP_BenDesc_CoverAmount4 : "",
        RP_BenDesc_5 : "",
        RP_BenDesc_CoverAmount5 : "",
        RP_BenDesc_6 : "",
        RP_BenDesc_CoverAmount6 : "",
        RP_BenDesc_7 : "",
        RP_BenDesc_CoverAmount7 : "",
        
        RP_ProductReasons : "",
        RP_ProductMaterialAspects : "",
        RP_ProductDetails : "",
        RP_ExecutorFee : "",
        RP_NominationOfBeneficiaries : "",
        RP_InformationExplained : "",
    
      })
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
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
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
        }
      }
      
      const MIN_TEXTAREA_HEIGHT = 32;
      const textareaRef = useRef(null);
      useLayoutEffect(() => {
          textareaRef.current.style.height = "inherit";
          // Set height
          textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
          )}px`;
      }, [FormData])
      useEffect(() => {
        createRPForm(FormData)
      }, []);
      // console.log(JSON.stringify(FormData))

      return(

        <header >
          
          <form >
            
     <br/>
     <div className="text-start "style={{ color: "#14848A" ,fontSize:'36.66px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>RISK</b></div>
     <hr/>
          <h5 className="text-start " style={{ color: "#14848A"}} > <b>Financial Needs Analysis Summary</b></h5>  
  
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
        <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover: </td>
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
            <input disabled type="number" className="form-control" name='RP_DC_LumpSumTotalNeed' value={FormData['RP_DC_LumpSumTotalNeed']}  aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_LumpSumExistingProvisions' value={FormData['RP_DC_LumpSumExistingProvisions']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_LumpSumExistingShortfallSurplus' value={FormData['RP_DC_LumpSumExistingShortfallSurplus']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_LumpSumInvestments' value={FormData['RP_DC_LumpSumInvestments']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover: Income (p.m.)</td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_IncomeTotalNeed' value={FormData['RP_DC_IncomeTotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_IncomeExistingProvisions' value={FormData['RP_DC_IncomeExistingProvisions']}    aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_IncomeExistingShortfallSurplus' value={FormData['RP_DC_IncomeExistingShortfallSurplus']}    aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_IncomeInvestments' value={FormData['RP_DC_IncomeInvestments']}    aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Funeral Benefit (p.m.)</td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_FB_IncomeTotalNeed' value={FormData['RP_DC_FB_IncomeTotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_FB_IncomeExistingProvisions' value={FormData['RP_DC_FB_IncomeExistingProvisions']}    aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_FB_IncomeExistingShortfallSurplus' value={FormData['RP_DC_FB_IncomeExistingShortfallSurplus']}    aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_FB_IncomeInvestments' value={FormData['RP_DC_FB_IncomeInvestments']}    aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
          <div className="form-group">
              <input disabled type="text"  name='RP_DC_Other' value={FormData['RP_DC_Other']}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_OtherIncomeTotalNeed' value={FormData['RP_DC_OtherIncomeTotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_OtherIncomeExistingProvisions' value={FormData['RP_DC_OtherIncomeExistingProvisions']}    aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_OtherIncomeExistingShortfallSurplus' value={FormData['RP_DC_OtherIncomeExistingShortfallSurplus']}    aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DC_OtherIncomeInvestments' value={FormData['RP_DC_OtherIncomeInvestments']}    aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
        <td>
          <div className="form-group">
              <input disabled type="text"  name='RP_DC_Comments' value={FormData['RP_DC_Comments']}   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </td>
      </tr>
  
      <tr>
         {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
        <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability Cover: </td>
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
            <input disabled type="number" className="form-control" name='RP_DiC_LumpSumTotalNeed' value={FormData['RP_DiC_LumpSumTotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_LumpSumExistingProvisions' value={FormData['RP_DiC_LumpSumExistingProvisions']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_LumpSumExistingShortfallSurplus' value={FormData['RP_DiC_LumpSumExistingShortfallSurplus']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_LumpSumInvestments' value={FormData['RP_DiC_LumpSumInvestments']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanent Income (p.m.)</td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_PI_TotalNeed' value={FormData['RP_DiC_PI_TotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_PI_ExistingProvisions' value={FormData['RP_DiC_PI_ExistingProvisions']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_PI_ExistingShortfallSurplus' value={FormData['RP_DiC_PI_ExistingShortfallSurplus']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_PI_Investments' value={FormData['RP_DiC_PI_Investments']}   aria-label="" />
          </div>
        </td> 
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Temporary Income (p.m.)</td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_TI_TotalNeed' value={FormData['RP_DiC_TI_TotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_TI_ExistingProvisions' value={FormData['RP_DiC_TI_ExistingProvisions']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_TI_ExistingShortfallSurplus' value={FormData['RP_DiC_TI_ExistingShortfallSurplus']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_TI_Investments' value={FormData['RP_DiC_TI_Investments']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Sickness Benefit</td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_SiB_TotalNeed' value={FormData['RP_DiC_SiB_TotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_SiB_ExistingProvisions' value={FormData['RP_DiC_SiB_ExistingProvisions']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_SiB_ExistingShortfallSurplus' value={FormData['RP_DiC_SiB_ExistingShortfallSurplus']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_SiB_Investments' value={FormData['RP_DiC_SIB_Investments']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
        <div className="form-group">
              <input disabled type="text"  name='RP_DiC_Other1' value={FormData['RP_DiC_Other1']}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherTotalNeed1' value={FormData['RP_DiC_OtherTotalNeed1']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherExistingProvisions1' value={FormData['RP_DiC_OtherExistingProvisions1']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherExistingShortfallSurplus1' value={FormData['RP_DiC_OtherExistingShortfallSurplus1']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherInvestments1' value={FormData['RP_DiC_OtherInvestments1']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
        <div className="form-group">
              <input disabled type="text"  name='RP_DiC_Other2' value={FormData['RP_DiC_Other2']}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherTotalNeed2' value={FormData['RP_DiC_OtherTotalNeed2']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherExistingProvisions2' value={FormData['RP_DiC_OtherExistingProvisions2']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherExistingShortfallSurplus2' value={FormData['RP_DiC_OtherExistingShortfallSurplus2']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DiC_OtherInvestments2' value={FormData['RP_DiC_OtherInvestments2']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
       <tr> 
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
          <td>  
            <div className="form-group">
              <input disabled type="email" className="form-control" id="RP_DiC_Comments" name='RP_DiC_Comments' value={FormData['RP_DiC_Comments']}  aria-describedby="emailHelp" />
            </div>
         </td>
         <td></td>  
         <td></td>
         <td></td>
         <td></td> 
       </tr> 
  
  
      <tr>
         {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
        <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease Cover: </td>
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
            <input disabled type="number" className="form-control" name='RP_DrC_LumpSumTotalNeed' value={FormData['RP_DrC_LumpSumTotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_LumpSumExistingProvisions' value={FormData['RP_DrC_LumpSumExistingProvisions']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_LumpSumExistingShortfallSurplus' value={FormData['RP_DrC_LumpSumExistingShortfallSurplus']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_LumpSumInvestments' value={FormData['RP_DrC_LumpSumInvestments']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease:Income(p.m)</td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_IncomeTotalNeed' value={FormData['RP_DrC_IncomeTotalNeed']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_IncomeExistingProvisions' value={FormData['RP_DrC_IncomeExistingProvisions']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_IncomeExistingShortfallSurplus' value={FormData['RP_DrC_IncomeExistingShortfallSurplus']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_IncomeInvestments' value={FormData['RP_DrC_IncomeInvestments']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
        <div className="form-group">
              <input disabled type="text"  name='RP_DrC_Other1' value={FormData['RP_DrC_Other1']}   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherTotalNeed1' value={FormData['RP_DrC_OtherTotalNeed1']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherExistingProvisions1' value={FormData['RP_DrC_OtherExistingProvisions1']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherExistingShortfallSurplus1' value={FormData['RP_DrC_OtherExistingShortfallSurplus1']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherInvestments1' value={FormData['RP_DrC_OtherInvestments1']}   aria-label="" />
          </div>
        </td>
      </tr>
  
      <tr>
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
        <div className="form-group">
              <input disabled type="text"  name='RP_DrC_Other2' value={FormData['RP_DrC_Other2']} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </td>
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherTotalNeed2' value={FormData['RP_DrC_OtherTotalNeed2']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherExistingProvisions2' value={FormData['RP_DrC_OtherExistingProvisions2']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherExistingShortfallSurplus2' value={FormData['RP_DrC_OtherExistingShortfallSurplus2']}   aria-label="" />
          </div>
        </td>
  
        <td>
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" name='RP_DrC_OtherInvestments2' value={FormData['RP_DrC_OtherInvestments2']}   aria-label="" />
          </div>
        </td>
      </tr>
  
  
      <tr> 
        <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
          <td>  
          <div className="form-group">
            <input disabled type="email" className="form-control" id="RP_DrC_Comments" name='RP_DrC_Comments' value={FormData['RP_DrC_Comments']}  aria-describedby="emailHelp" />
          </div>
         </td> 
         <td></td>  
         <td></td>
         <td></td>
         <td></td>   
       </tr> 
      </tbody>
    </table>
          
  
    <h5 className="text-start " ><b>SECTION C:</b></h5> 
          <h6 className="text-start " style={{ color: "#14848A"}} ><b>Financial Solutions:</b></h6>
          
          <p className="text-start">Summary of recommendations to address your identified needs.</p>
          <p className="text-start"> No cash values are payable/accessible unless a specified event has occurred, i.e., the life event for which cover is taken; in which case the proceeds are payable tax-free. The premiums are not tax-deductible according to current legislation and loans against the policy are not permitted.</p>    
          <p className="text-start">Should the policy have an accelerator benefit attached, it means that upon a claim of that benefit the life cover amount will reduce by the claim amount. Standalone benefits are independent of the life cover, and you may claim without affecting the life cover amounts.</p>
          <p className="text-start"><u>Life Cover:</u></p>
          <p className="text-start">Policies payable to the estate will attract executors’ fees at a maximum of 3.99% + VAT. Where there is a beneficiary the executors fees will not be levied. Executors’ fees are applicable to all assets in the estate of a client and the exemption only applies to policies with beneficiaries. </p>
          <p className="text-start">Death benefits will not be paid where the life insured commits suicide within 2 years of commencement or reinstatement of the cover.</p>
  
  
         
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_LC_FinancialSolutions" name='RP_LC_FinancialSolutions' value={FormData['RP_LC_FinancialSolutions']}     
            aria-describedby=""  ></textarea>
  
  
  
  <p className="text-start"><u>Disability Cover:</u></p>
  
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_DiC_FinancialSolutions" name='RP_DiC_FinancialSolutions' value={FormData['RP_DiC_FinancialSolutions']}    
            aria-describedby=""  ></textarea>
  
  
  
  
  <p className="text-start"><u>Dread Disease Cover:</u></p>
  
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_DrC_FinancialSolutions" name='RP_DrC_FinancialSolutions' value={FormData['RP_DrC_FinancialSolutions']}  
           aria-describedby=""  ></textarea>
  
  
  <h5 className="text-start " ><b>SECTION D:</b></h5> 
          <h6 className="text-start " style={{ color: "#14848A"}} ><b>Alternative Solutions Considered</b></h6>
  
          <p className="text-start">The following solutions were presented to you for consideration but were not selected for the following reasons:</p>
  
         
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_AltS_1" name='RP_AltS_1' value={FormData['RP_AltS_1']}     
           aria-describedby=""  ></textarea>
  <br/>
  
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_AltS_2" name='RP_AltS_2' value={FormData['RP_AltS_2']}     
         aria-describedby=""  ></textarea>
  
      <br/>
      
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_AltS_3" name='RP_AltS_3' value={FormData['RP_AltS_3']}     
           aria-describedby=""  ></textarea>
  
  <h5 className="text-start " ><b>SECTION E:</b></h5> 
          <h6 className="text-start " style={{ color: "#14848A"}} ><b>Product Taken</b></h6>
  
          <p className="text-start ">Products accepted by you to meet your requirements. </p> 
  
  
    <div className="container mt-3">          
    <table className="table">
      
      <tbody>
        <tr>
          <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product:</td>
          <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_Taken" name='RP_Product_Taken' value={FormData['RP_Product_Taken']}   aria-describedby="emailHelp" />
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
              <input disabled type="text" className="form-control" id="RP_Product_Provider" name='RP_Product_Provider' value={FormData['RP_Product_Provider']}  aria-describedby="emailHelp" />
          </div>
         </td>  
         <td></td>
         
         <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Policy No:</td>
         <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Policy_Number" name='RP_Policy_Number' value={FormData['RP_Policy_Number']}  aria-describedby="emailHelp" />
          </div>
         </td> 
  
          <td></td> 
          
          <td></td>      
        </tr>
        <tr>
              <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Name:</td>
              <td>  
              <div className="form-group">
                  <input disabled type="text" className="form-control" id="RP_Product_Name" name='RP_Product_Name' value={FormData['RP_Product_Name']}   aria-describedby="emailHelp"  />
              </div>
          </td>  
          <td></td>
          
          <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium</td>
          <td>  
              <div className='row'>
                  <div className='col-6'>
                      <div className="form-group">
                          <input disabled type="text" className="form-control" id="RP_Product_Premium" name='RP_Product_Premium' value={FormData['RP_Product_Premium']}   aria-describedby="emailHelp"  />
                      </div>
                  </div>
                  <div className='col-6'>
                      <select disabled className="text-start form-select" id="RP_Product_PremiumFrequency" name='RP_Product_PremiumFrequency' value={FormData['RP_Product_PremiumFrequency']}  aria-label="Default select example">
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
                <input disabled type="text" className="form-control" id="RP_Product_Pattern" name='RP_Product_Pattern' value={FormData['RP_Product_Pattern']}   aria-describedby="emailHelp" />
            </div>
          </td>  
          <td>
          </td>
         
         <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Escalation in<br/>cover/premium</td>
         <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_Escalation" name='RP_Product_Escalation' value={FormData['RP_Product_Escalation']}   aria-describedby="emailHelp" />
          </div>
         </td> 
          <td></td> 
  
          <td></td>      
        </tr>
        
        <tr>
          <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Contracting Party:</td>
          <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_ContractingParty" name='RP_Product_ContractingParty' value={FormData['RP_Product_ContractingParty']}   aria-describedby="emailHelp" />
          </div>
         </td>  
         <td></td>
         
         <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Life/Lives<br/>covered</td>
         <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_LivesAssured" name='RP_Product_LivesAssured' value={FormData['RP_Product_LivesAssured']}   aria-describedby="emailHelp" />
          </div>
         </td> 
          <td></td> 
          <td></td>      
        </tr>
  
        <tr>
          <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Beneficial/<br/>Cessionary</td>
          <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_Beneficiary" name='RP_Product_Beneficiary' value={FormData['RP_Product_Beneficiary']}   aria-describedby="emailHelp" />
          </div>
         </td>  
         <td></td>
         
         <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium<br/>payer(s)</td>
         <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_PremiumPayer" name='RP_Product_PremiumPayer' value={FormData['RP_Product_PremiumPayer']}   aria-describedby="emailHelp" />
          </div>
         </td> 
          <td></td> 
          <td></td>      
        </tr>
  
        <tr>
          <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">1st year<br/>commission</td>
          <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_1stYearCommission" name='RP_Product_1stYearCommission' value={FormData['RP_Product_1stYearCommission']}   aria-describedby="emailHelp" />
          </div>
         </td>  
         <td></td>
         <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">2nd year<br/>commission</td>
         <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_2ndYearCommission" name='RP_Product_2ndYearCommission' value={FormData['RP_Product_2ndYearCommission']}   aria-describedby="emailHelp" />
          </div>
         </td> 
          <td></td> 
          <td></td>      
        </tr>
  
        <tr>
          <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Ongoing fees</td>
          <td>  
          <div className="form-group">
              <input disabled type="text" className="form-control" id="RP_Product_OngoingFees" name='RP_Product_OngoingFees' value={FormData['RP_Product_OngoingFees']}   aria-describedby="emailHelp" />
          </div>
         </td>  
         <td></td>
         <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Frequency</td>
         <td>  
          <div className='row'>
            <div className='col-6'>
                <div className="form-group">
                    <input disabled type="text" className="form-control" id="RP_Product_OngoingFeesFrequency" name='RP_Product_OngoingFeesFrequency' value={FormData['RP_Product_OngoingFeesFrequency']}  aria-describedby="emailHelp"  />
                </div>
            </div>
            <div className='col-6'>
                <select disabled className="text-start form-select" id="RP_Product_OngoingFeesFrequency1" name='RP_Product_OngoingFeesFrequency1' value={FormData['RP_Product_OngoingFeesFrequency1']}  aria-label="Default select example">
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
              <input disabled type="text" className="form-control" id="RP_TotalFees_n_Commissions" name='RP_TotalFees_n_Commissions' value={FormData['RP_TotalFees_n_Commissions']}   aria-describedby="emailHelp" />
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
                          <input disabled spellCheck="true" id="RP_BenDesc_1" name='RP_BenDesc_1' value={FormData['RP_BenDesc_1']}  className="form-control"   aria-describedby="" />
                      </div>
                  </div>
              </div>
  
              <div className="col-4" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">R</span>
                            <input disabled type="number" className="form-control" id="RP_BenDesc_CoverAmount1" name='RP_BenDesc_CoverAmount1' value={FormData['RP_BenDesc_CoverAmount1']}   aria-label="" />
                          </div>
                      </div> 
                  </div>
              </div>
              <hr/>
  
              
     
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <input disabled spellCheck="true" id="RP_BenDesc_2" name='RP_BenDesc_2' value={FormData['RP_BenDesc_2']}  className="form-control"   aria-describedby="" />
                      </div>
                  </div>
              </div>
  
              <div className="col-4" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">R</span>
                            <input disabled type="number" className="form-control" id="RP_BenDesc_CoverAmount2" name='RP_BenDesc_CoverAmount2' value={FormData['RP_BenDesc_CoverAmount2']}   aria-label="" />
                          </div>
                      </div> 
                  </div>
              </div>
              <hr/>
  
              
     
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <input disabled spellCheck="true" id="RP_BenDesc_3" name='RP_BenDesc_3' value={FormData['RP_BenDesc_3']}  className="form-control"   aria-describedby="" />
                      </div>
                  </div>
              </div>
  
              <div className="col-4" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">R</span>
                            <input disabled type="number" className="form-control" id="RP_BenDesc_CoverAmount3" name='RP_BenDesc_CoverAmount3' value={FormData['RP_BenDesc_CoverAmount3']}   aria-label="" />
                          </div>
                      </div> 
                  </div>
              </div>
              <hr/>
  
              
     
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <input disabled spellCheck="true" id="RP_BenDesc_4" name='RP_BenDesc_4' value={FormData['RP_BenDesc_4']}  className="form-control"   aria-describedby="" />
                      </div>
                  </div>
              </div>
  
              <div className="col-4" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">R</span>
                            <input disabled type="number" className="form-control" id="RP_BenDesc_CoverAmount4" name='RP_BenDesc_CoverAmount4' value={FormData['RP_BenDesc_CoverAmount4']}   aria-label="" />
                          </div>
                      </div> 
                  </div>
              </div>
              <hr/>
  
              
     
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <input disabled spellCheck="true" id="RP_BenDesc_5" name='RP_BenDesc_5' value={FormData['RP_BenDesc_5']}  className="form-control"   aria-describedby="" />
                      </div>
                  </div>
              </div>
  
              <div className="col-4" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">R</span>
                            <input disabled type="number" className="form-control" id="RP_BenDesc_CoverAmount5" name='RP_BenDesc_CoverAmount5' value={FormData['RP_BenDesc_CoverAmount5']}   aria-label="" />
                          </div>
                      </div> 
                  </div>
              </div>
              <hr/>
  
              
     
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <input disabled spellCheck="true" id="RP_BenDesc_6" name='RP_BenDesc_6' value={FormData['RP_BenDesc_6']}  className="form-control"   aria-describedby="" />
                      </div>
                  </div>
              </div>
  
              <div className="col-4" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">R</span>
                            <input disabled type="number" className="form-control" id="RP_BenDesc_CoverAmount6" name='RP_BenDesc_CoverAmount6' value={FormData['RP_BenDesc_CoverAmount6']}   aria-label="" />
                          </div>
                      </div> 
                  </div>
              </div>
              <hr/>
  
              
     
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <input disabled spellCheck="true" id="RP_BenDesc_7" name='RP_BenDesc_7' value={FormData['RP_BenDesc_7']}  className="form-control"   aria-describedby="" />
                      </div>
                  </div>
              </div>
  
              <div className="col-4" style={{paddingBottom: "0.5%"}}>
                  <div className="row g-3 align-items-center">
                      <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">R</span>
                            <input disabled type="number" className="form-control" id="RP_BenDesc_CoverAmount7" name='RP_BenDesc_CoverAmount7' value={FormData['RP_BenDesc_CoverAmount7']}   aria-label="" />
                          </div>
                      </div> 
                  </div>
              </div>
              <hr/>
  
              
              <hr/>
          </div> 
      </div>  
  
  
  <p className="text-start">The following are reasons why the above-mentioned product best suits your needs and objectives</p>
  
  
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_ProductReasons" name='RP_ProductReasons' value={FormData['RP_ProductReasons']}     
          aria-describedby=""  ></textarea>
  <hr/>
  <p className="text-start">The details of the material aspects of the selected product that were discussed with you are outlined below:</p>
  
    
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_ProductMaterialAspects" name='RP_ProductMaterialAspects' value={FormData['RP_ProductMaterialAspects']}     
           aria-describedby=""  ></textarea>
  
  <br/>
     
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_ProductDetails" name='RP_ProductDetails' value={FormData['RP_ProductDetails']}     
           aria-describedby=""  ></textarea>
  
  
      <br/>
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_ExecutorFee" name='RP_ExecutorFee' value={FormData['RP_ExecutorFee']}     
         aria-describedby=""  ></textarea>
  
  
  <br/>
      
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_NominationOfBeneficiaries" name='RP_NominationOfBeneficiaries' value={FormData['RP_NominationOfBeneficiaries']}     
          aria-describedby=""  ></textarea>
  
  
  <br/>
      
      <textarea disbaled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none",overflow:"hidden" }} className="form-control"
          id="RP_InformationExplained" name='RP_InformationExplained' value={FormData['RP_InformationExplained']}     
          aria-describedby=""  ></textarea>
  
          
        
        
          </form>
        </header>
      )
}

export default Risk

