// import { Breadcrumbs } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
// import './Header.css';
function  Risk()
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
    
        RP_DiC_OtherTotalNeed1 : "",
        RP_DiC_OtherExistingProvisions1 : "",
        RP_DiC_OtherExistingShortfallSurplus1 : "",
        RP_DiC_OtherInvestments1 : "", 
        
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
        
        RP_DrC_OtherTotalNeed1 : "",
        RP_DrC_OtherExistingProvisions1 : "",
        RP_DrC_OtherExistingShortfallSurplus1 : "",
        RP_DrC_OtherInvestments1 : "", 
        
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
      const updateRPForm = async() => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(FormData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_risk_planning_data/`, Body ,config)
            // console.log(response.data['formData'])
            setFormData(response.data['formData'])
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
        }
      }
      const onSubmit = e => {
        e.preventDefault()
        updateRPForm()
        // window.location.reload();
      }
      useEffect(() => {
        createRPForm(FormData)
      }, []);
      // console.log(JSON.stringify(FormData))

    return(

      <header style={ HeaderStyle }>
        <form onSubmit={e => onSubmit(e)}>
          
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
          <input type="number" className="form-control" name='RP_DC_LumpSumTotalNeed' value={FormData['RP_DC_LumpSumTotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_LumpSumExistingProvisions' value={FormData['RP_DC_LumpSumExistingProvisions']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_LumpSumExistingShortfallSurplus' value={FormData['RP_DC_LumpSumExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_LumpSumInvestments' value={FormData['RP_DC_LumpSumInvestments']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover: Income (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_IncomeTotalNeed' value={FormData['RP_DC_IncomeTotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_IncomeExistingProvisions' value={FormData['RP_DC_IncomeExistingProvisions']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_IncomeExistingShortfallSurplus' value={FormData['RP_DC_IncomeExistingShortfallSurplus']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_IncomeInvestments' value={FormData['RP_DC_IncomeInvestments']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Funeral Benefit (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_FB_IncomeTotalNeed' value={FormData['RP_DC_FB_IncomeTotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_FB_IncomeExistingProvisions' value={FormData['RP_DC_FB_IncomeExistingProvisions']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_FB_IncomeExistingShortfallSurplus' value={FormData['RP_DC_FB_IncomeExistingShortfallSurplus']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_FB_IncomeInvestments' value={FormData['RP_DC_FB_IncomeInvestments']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_OtherIncomeTotalNeed' value={FormData['RP_DC_OtherIncomeTotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_OtherIncomeExistingProvisions' value={FormData['RP_DC_OtherIncomeExistingProvisions']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_OtherIncomeExistingShortfallSurplus' value={FormData['RP_DC_OtherIncomeExistingShortfallSurplus']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DC_OtherIncomeInvestments' value={FormData['RP_DC_OtherIncomeInvestments']} onChange={(e) => {onChange(e)}}  placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
      <td>
        <div className="form-group">
            <input type="text"  name='RP_DC_Comments' value={FormData['RP_DC_Comments']} onChange={(e) => {onChange(e)}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
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
          <input type="number" className="form-control" name='RP_DiC_LumpSumTotalNeed' value={FormData['RP_DiC_LumpSumTotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_LumpSumExistingProvisions' value={FormData['RP_DiC_LumpSumExistingProvisions']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_LumpSumExistingShortfallSurplus' value={FormData['RP_DiC_LumpSumExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_LumpSumInvestments' value={FormData['RP_DiC_LumpSumInvestments']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanent Income (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_PI_TotalNeed' value={FormData['RP_DiC_PI_TotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_PI_ExistingProvisions' value={FormData['RP_DiC_PI_ExistingProvisions']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_PI_ExistingShortfallSurplus' value={FormData['RP_DiC_PI_ExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_PI_Investments' value={FormData['RP_DiC_PI_Investments']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td> 
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Temporary Income (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_TI_TotalNeed' value={FormData['RP_DiC_TI_TotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_TI_ExistingProvisions' value={FormData['RP_DiC_TI_ExistingProvisions']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_TI_ExistingShortfallSurplus' value={FormData['RP_DiC_TI_ExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_TI_Investments' value={FormData['RP_DiC_TI_Investments']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Sickness Benefit</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_SiB_TotalNeed' value={FormData['RP_DiC_SiB_TotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_SiB_ExistingProvisions' value={FormData['RP_DiC_SiB_ExistingProvisions']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_SiB_ExistingShortfallSurplus' value={FormData['RP_DiC_SiB_ExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_SiB_Investments' value={FormData['RP_DiC_SIB_Investments']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherTotalNeed1' value={FormData['RP_DiC_OtherTotalNeed1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherExistingProvisions1' value={FormData['RP_DiC_OtherExistingProvisions1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherExistingShortfallSurplus1' value={FormData['RP_DiC_OtherExistingShortfallSurplus1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherInvestments1' value={FormData['RP_DiC_OtherInvestments1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherTotalNeed2' value={FormData['RP_DiC_OtherTotalNeed2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherExistingProvisions2' value={FormData['RP_DiC_OtherExistingProvisions2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherExistingShortfallSurplus2' value={FormData['RP_DiC_OtherExistingShortfallSurplus2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DiC_OtherInvestments2' value={FormData['RP_DiC_OtherInvestments2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


     <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
        <td>  
          <div className="form-group">
            <input type="email" className="form-control" id="RP_DiC_Comments" name='RP_DiC_Comments' value={FormData['RP_DiC_Comments']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
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
          <input type="number" className="form-control" name='RP_DrC_LumpSumTotalNeed' value={FormData['RP_DrC_LumpSumTotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_LumpSumExistingProvisions' value={FormData['RP_DrC_LumpSumExistingProvisions']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_LumpSumExistingShortfallSurplus' value={FormData['RP_DrC_LumpSumExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_LumpSumInvestments' value={FormData['RP_DrC_LumpSumInvestments']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease:Income(p.m)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_IncomeTotalNeed' value={FormData['RP_DrC_IncomeTotalNeed']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_IncomeExistingProvisions' value={FormData['RP_DrC_IncomeExistingProvisions']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_IncomeExistingShortfallSurplus' value={FormData['RP_DrC_IncomeExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_IncomeInvestments' value={FormData['RP_DrC_IncomeInvestments']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherTotalNeed1' value={FormData['RP_DrC_OtherTotalNeed1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherExistingProvisions1' value={FormData['RP_DrC_OtherExistingProvisions1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherExistingShortfallSurplus1' value={FormData['RP_DrC_OtherExistingShortfallSurplus1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherInvestments1' value={FormData['RP_DrC_OtherInvestments1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherTotalNeed2' value={FormData['RP_DrC_OtherTotalNeed2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherExistingProvisions2' value={FormData['RP_DrC_OtherExistingProvisions2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherExistingShortfallSurplus2' value={FormData['RP_DrC_OtherExistingShortfallSurplus2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input type="number" className="form-control" name='RP_DrC_OtherInvestments2' value={FormData['RP_DrC_OtherInvestments2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
        </div>
      </td>
    </tr>


    <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
        <td>  
        <div className="form-group">
          <input type="email" className="form-control" id="RP_DrC_Comments" name='RP_DrC_Comments' value={FormData['RP_DrC_Comments']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
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


        {
        backgroundInfoVisibility1 ? 
        <>
        <div id="background_info_instructions1" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea className="form-control"  style={{height: '100px'}} 
        id="RP_LC_FinancialSolutions" name='RP_LC_FinancialSolutions' value={FormData['RP_LC_FinancialSolutions']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus1}
        onBlur={backgroundInfo_onBlur1}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        `}  aria-describedby=""  ></textarea>



<p className="text-start"><u>Disability Cover:</u></p>
{
        backgroundInfoVisibility2 ? 
        <>
        <div id="background_info_instructions2" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea className="form-control"  style={{height: '100px'}} 
        id="RP_DiC_FinancialSolutions" name='RP_DiC_FinancialSolutions' value={FormData['RP_DiC_FinancialSolutions']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus2}
        onBlur={backgroundInfo_onBlur2}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        `}  aria-describedby=""  ></textarea>




<p className="text-start"><u>Dread Disease Cover:</u></p>
{
        backgroundInfoVisibility3 ? 
        <>
        <div id="background_info_instructions3" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea className="form-control"  style={{height: '100px'}} 
        id="RP_DrC_FinancialSolutions" name='RP_DrC_FinancialSolutions' value={FormData['RP_DrC_FinancialSolutions']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus3}
        onBlur={backgroundInfo_onBlur3}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        `}  aria-describedby=""  ></textarea>


<h5 className="text-start " ><b>SECTION D:</b></h5> 
        <h6 className="text-start " style={{ color: "#14848A"}} ><b>Alternative Solutions Considered</b></h6>

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
    <textarea className="form-control"  style={{height: '80px'}} 
        id="RP_AltS_1" name='RP_AltS_1' value={FormData['RP_AltS_1']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus4}
        onBlur={backgroundInfo_onBlur4}
        placeholder={`1. Identify the type of product or product provider which was considered but not selected and motivate.
        `}  aria-describedby=""  ></textarea>
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
    <textarea className="form-control"  style={{height: '80px'}} 
        id="RP_AltS_2" name='RP_AltS_2' value={FormData['RP_AltS_2']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus5}
        onBlur={backgroundInfo_onBlur5}
        placeholder={`2. Identify the type of product or product provider which was considered but not selected and motivate.
        `}  aria-describedby=""  ></textarea>

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
    <textarea className="form-control"  style={{height: '80px'}} 
        id="RP_AltS_3" name='RP_AltS_3' value={FormData['RP_AltS_3']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus6}
        onBlur={backgroundInfo_onBlur6}
        placeholder={`3. Identify the type of product or product provider which was considered but not selected and motivate.
        `}  aria-describedby=""  ></textarea>

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
            <input type="text" className="form-control" id="RP_Product_Taken" name='RP_Product_Taken' value={FormData['RP_Product_Taken']} onChange={(e) => {onChange(e)}}  aria-describedby="emailHelp" placeholder=""/>
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
            <input type="text" className="form-control" id="RP_Product_Provider" name='RP_Product_Provider' value={FormData['RP_Product_Provider']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Policy No:</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Policy_Number" name='RP_Policy_Number' value={FormData['RP_Policy_Number']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 

        <td></td> 
        
        <td></td>      
      </tr>
      <tr>
            <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Name:</td>
            <td>  
            <div className="form-group">
                <input type="text" className="form-control" id="RP_Product_Name" name='RP_Product_Name' value={FormData['RP_Product_Name']} onChange={(e) => {onChange(e)}}  aria-describedby="emailHelp" placeholder="" />
            </div>
        </td>  
        <td></td>
        
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium</td>
        <td>  
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <input type="text" className="form-control" id="RP_Product_Premium" name='RP_Product_Premium' value={FormData['RP_Product_Premium']} onChange={(e) => {onChange(e)}}  aria-describedby="emailHelp" placeholder="" />
                    </div>
                </div>
                <div className='col-6'>
                    <select className="text-start form-select" id="RP_Product_PremiumFrequency" name='RP_Product_PremiumFrequency' value={FormData['RP_Product_PremiumFrequency']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
              <input type="text" className="form-control" id="RP_Product_Pattern" name='RP_Product_Pattern' value={FormData['RP_Product_Pattern']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
          </div>
        </td>  
        <td>
        </td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Escalation in<br/>cover/premium</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_Escalation" name='RP_Product_Escalation' value={FormData['RP_Product_Escalation']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 

        <td></td>      
      </tr>
      
      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Contracting Party:</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_ContractingParty" name='RP_Product_ContractingParty' value={FormData['RP_Product_ContractingParty']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Life/Lives<br/>covered</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_LivesAssured" name='RP_Product_LivesAssured' value={FormData['RP_Product_LivesAssured']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Beneficial/<br/>Cessionary</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_Beneficiary" name='RP_Product_Beneficiary' value={FormData['RP_Product_Beneficiary']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium<br/>payer(s)</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_PremiumPayer" name='RP_Product_PremiumPayer' value={FormData['RP_Product_PremiumPayer']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">1st year<br/>commission</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_1stYearCommission" name='RP_Product_1stYearCommission' value={FormData['RP_Product_1stYearCommission']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">2nd year<br/>commission</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_2ndYearCommission" name='RP_Product_2ndYearCommission' value={FormData['RP_Product_2ndYearCommission']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Ongoing fees</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="RP_Product_OngoingFees" name='RP_Product_OngoingFees' value={FormData['RP_Product_OngoingFees']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Frequency</td>
       <td>  
        <div className='row'>
          <div className='col-6'>
              <div className="form-group">
                  <input type="text" className="form-control" id="RP_Product_OngoingFeesFrequency" name='RP_Product_OngoingFeesFrequency' value={FormData['RP_Product_OngoingFeesFrequency']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" />
              </div>
          </div>
          <div className='col-6'>
              <select className="text-start form-select" id="RP_Product_OngoingFeesFrequency1" name='RP_Product_OngoingFeesFrequency1' value={FormData['RP_Product_OngoingFeesFrequency1']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
            <input type="text" className="form-control" id="RP_TotalFees_n_Commissions" name='RP_TotalFees_n_Commissions' value={FormData['RP_TotalFees_n_Commissions']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder=""/>
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
                        <input spellCheck="true" id="RP_BenDesc_1" name='RP_BenDesc_1' value={FormData['RP_BenDesc_1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input type="number" className="form-control" id="RP_BenDesc_CoverAmount1" name='RP_BenDesc_CoverAmount1' value={FormData['RP_BenDesc_CoverAmount1']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            
   
            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" id="RP_BenDesc_2" name='RP_BenDesc_2' value={FormData['RP_BenDesc_2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input type="number" className="form-control" id="RP_BenDesc_CoverAmount2" name='RP_BenDesc_CoverAmount2' value={FormData['RP_BenDesc_CoverAmount2']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            
   
            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" id="RP_BenDesc_3" name='RP_BenDesc_3' value={FormData['RP_BenDesc_3']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input type="number" className="form-control" id="RP_BenDesc_CoverAmount3" name='RP_BenDesc_CoverAmount3' value={FormData['RP_BenDesc_CoverAmount3']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            
   
            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" id="RP_BenDesc_4" name='RP_BenDesc_4' value={FormData['RP_BenDesc_4']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input type="number" className="form-control" id="RP_BenDesc_CoverAmount4" name='RP_BenDesc_CoverAmount4' value={FormData['RP_BenDesc_CoverAmount4']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            
   
            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" id="RP_BenDesc_5" name='RP_BenDesc_5' value={FormData['RP_BenDesc_5']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input type="number" className="form-control" id="RP_BenDesc_CoverAmount5" name='RP_BenDesc_CoverAmount5' value={FormData['RP_BenDesc_CoverAmount5']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            
   
            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" id="RP_BenDesc_6" name='RP_BenDesc_6' value={FormData['RP_BenDesc_6']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input type="number" className="form-control" id="RP_BenDesc_CoverAmount6" name='RP_BenDesc_CoverAmount6' value={FormData['RP_BenDesc_CoverAmount6']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            
   
            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" id="RP_BenDesc_7" name='RP_BenDesc_7' value={FormData['RP_BenDesc_7']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input type="number" className="form-control" id="RP_BenDesc_CoverAmount7" name='RP_BenDesc_CoverAmount7' value={FormData['RP_BenDesc_CoverAmount7']} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
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
    <textarea className="form-control"  style={{height: '80px'}} 
        id="RP_ProductReasons" name='RP_ProductReasons' value={FormData['RP_ProductReasons']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus7}
        onBlur={backgroundInfo_onBlur7}
        placeholder={`Motivate why the chosen product was recommended to best suit your client’s needs.
        `}  aria-describedby=""  ></textarea>
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
    <textarea className="form-control"  style={{height: '80px'}} 
        id="RP_ProductMaterialAspects" name='RP_ProductMaterialAspects' value={FormData['RP_ProductMaterialAspects']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus8}
        onBlur={backgroundInfo_onBlur8}
        placeholder={`Explain any deviations from your recommendation and the implications thereof.
        `}  aria-describedby=""  ></textarea>

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
    <textarea className="form-control"  style={{height: '80px'}} 
        id="RP_ProductDetails" name='RP_ProductDetails' value={FormData['RP_ProductDetails']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus9}
        onBlur={backgroundInfo_onBlur9}
        placeholder={`The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?
        `}  aria-describedby=""  ></textarea>


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
    <textarea className="form-control"  style={{height: '200px'}} 
        id="RP_ExecutorFee" name='RP_ExecutorFee' value={FormData['RP_ExecutorFee']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus10}
        onBlur={backgroundInfo_onBlur10}
        placeholder={`Executor’s fees?
Does the policy offer any liquidity?
Provide a summary of the contents of the quote with regard to the following:
Benefit terms (cease ages, cover periods etc.)
Details of premium and cover pattern structure, frequency etc.
        
        `}  aria-describedby=""  ></textarea>


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
    <textarea className="form-control"  style={{height: '100px'}} 
        id="RP_NominationOfBeneficiaries" name='RP_NominationOfBeneficiaries' value={FormData['RP_NominationOfBeneficiaries']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus11}
        onBlur={backgroundInfo_onBlur11}
        placeholder={`Record discussion with regard to nomination of beneficiaries or cessionaries.
        
        `}  aria-describedby=""  ></textarea>


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
    <textarea className="form-control"  style={{height: '220px'}} 
        id="RP_InformationExplained" name='RP_InformationExplained' value={FormData['RP_InformationExplained']} onChange={(e) => {onChange(e)}}    
        onFocus={backgroundInfo_onFocus12}
        onBlur={backgroundInfo_onBlur12}
        placeholder={`Discuss the following information which has been explained to client.
General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.)
Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)
Waiting periods
Cooling off period
        
        
        `}  aria-describedby=""  ></textarea>

        <button className='btn btn-primary'>Update Data</button>
        
        
      
      
        </form>
      </header>
    )
}

export default Risk

const HeaderStyle = {
   width: "100%",
   height: "100vh",
  // background: `url(${BackgroundImage})`,
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover"
}