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
import RiskFactors from './PrintedComponents/RiskFactors';
import RecordOfAdvice from './PrintedComponents/RecordOfAdvice';
const PrintForm = () => {
  function loadFrame() {
    window.print();
  };
  window.onload = setTimeout(loadFrame, 5000);
    const location = useLocation();
    const { state } = location;
    const [ComponentStatus, setComponentStatus] = useState({
      RecordOfAdvice:true,
      AssuranceInvestment:true,
      AssuranceRisk:true,
      EmployeeBenefits:true,
      Fiduciary:true,
      GapCover:true,
      InvestmentPlanning:true,
      RiskPlanning:true,
      ShortTermInsuranceCommerical:true,
      ShortTermInsurancePersonal:true

    })
    const [responseError, setResponseError] = useState("");
  //   useEffect(() => {
  //     const config = {
  //       headers: {
  //           'Content-Type' : 'application/json',
  //           'Authorization' : `JWT ${localStorage.getItem('access')}`,
  //           'Accept' : 'application/json'
  //       }
  //     }
  //     try {
  //       const response = axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/printStatus/`, config)
  //       setComponentStatus(response.ComponentStatus)
  //     //   console.log('Users', JSON.stringify(response.data.Data))
  //     } catch (error) {
  //       console.log('first', error.response.statusText)
  //       setResponseError(error.response.statusText)
  //     }
  // },[
      
  // ]);
  const loadFormData = async() => {
    const config = {
      headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `JWT ${localStorage.getItem('access')}`,
          'Accept' : 'application/json'
      }
    }
    const Body = JSON.stringify({'formId' : state['formId']})
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/printStatus/`, Body,config)
      setComponentStatus(response.data['componentStatus'])
      // console.log(response.data)
    //   console.log('Users', JSON.stringify(response.data.Data))
    } catch (error) {
      console.log('first', error.response.statusText)
      setResponseError(error.response.statusText)
    }
}
useEffect(() => {
  loadFormData(state['formId'])
}, [])
    
// console.log(ComponentStatus["RecordOfAdvice"])
    return (
      <>
        
        <div >
        {/* <button type="button" className='btn btn-primary' onClick={handleDownloadPdf}>
            Download as PDF
        </button> */}
        <main className="container">
          {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="fw-bold h2_1">SECTION A: LONG-TERM INSURANCE </h2>
          </div> */}
        
        <RiskFactors data={{formId: state['formId']}}  />
        <br/>
            {
              ComponentStatus["RecordOfAdvice"] ?
              <RecordOfAdvice data={{formId: state['formId']}}  />
              :<></>

            }
            {
              ComponentStatus["RiskPlanning"] ?
              <Risk data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
              :<></>
            }
            {
              ComponentStatus["InvestmentPlanning"] ?
              <Invest data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
              :<></>
            }
            {
              ComponentStatus["AssuranceRisk"] ?
              <AssuranceRisk data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} />
              :<></>
            }
            {
              ComponentStatus["AssuranceInvestment"] ?
              <AssuranceInvestment  data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
              :<></>
            }
            {
              ComponentStatus["EmployeeBenefits"] ?
              <Employee data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} />
              :<></>
            }
            {
              ComponentStatus["Fiduciary"] ?
              <Fiduciary data={{formId: state['formId'],advisorId: state['advisorId']}} />
              :<></>
            }
            {
              ComponentStatus["ShortTermInsuranceCommerical"] ?
              <Short_term_Commercial data={{formId: state['formId']}} />
              :<></>
            }
            {
              ComponentStatus["ShortTermInsurancePersonal"] ?
              <Short_term_Personal data={{formId: state['formId']}} />
              :<></>
            }
            {
              ComponentStatus["GapCover"] ?
              <GapCover data={{formId: state['formId']}} />
              :<></>
            }
           
            
            
            
            
      </main>
        </div>
      
      </>
    )
    
}

export default PrintForm