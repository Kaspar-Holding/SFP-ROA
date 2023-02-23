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
    
    // console.log(JSON.stringify(FiduciaryFormData))

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
            <RecordOfAdvice data={{formId: state['formId']}}  />
            <Risk data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
            <Invest data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
            <AssuranceRisk data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} />
            <AssuranceInvestment  data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}}/>
            <Employee data={{formId: state['formId'],advisorId: FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} />
            <Fiduciary data={{formId: state['formId'],advisorId: state['advisorId']}} />
            <Short_term_Commercial data={{formId: state['formId']}} />
            <Short_term_Personal data={{formId: state['formId']}} />
            <GapCover data={{formId: state['formId']}} />
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
      
      </>
    )
    
}

export default PrintForm