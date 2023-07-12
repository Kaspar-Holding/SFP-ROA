import React, {useState, useEffect} from 'react'
import './Styles/Form.css'
import './Styles/CustomNotification.css'
import Risk from './Risk';
import Invest from './Invest';
import AssuranceRisk from './AssuranceRisk';
import AssuranceInvestment from './AssuranceInvestment';
import Employee from './Employee';
import Fiduciary from './Fiduciary';
import Short_term_Commercial from './Short-term Commercial';
import Short_term_Personal from './Short-term Personal';
import {Navigate, NavLink, useLocation} from 'react-router-dom'
import axios from 'axios';
import Loader from '../../Loader/Loader';
import GapCover from './GapCover';
import RiskFactors from './RiskFactors';
import Footer from '../Footer';
import RecordOfAdvice from './RecordOfAdvice';
import Medical from './Medical';
import { connect } from 'react-redux';
const CompleteForm = ({user}) => {
    const location = useLocation();
    const { state } = location;
    if (!state || state['formId'] === undefined || state['formId'] === null) {
        return <Navigate to="/"/>
    }
    // alert(state)
    // console.log(state)
    // console.log(JSON.stringify(FiduciaryFormData))
    return (
      <>
        {
            state['formId'] ?
                <div>
                <br/>
                
                <div style={{textAlign: 'center'}}>
                    <img 
                        src=
                        {
                            user['email'].includes('sfp') || user['email'].includes('succession')? `${process.env.REACT_APP_BACKEND_URL}/media/logo.png` 
                            : user['email'].includes('fs4p') ? `${process.env.REACT_APP_BACKEND_URL}/media/fs4p_logo.jpg` 
                            : user['email'].includes('sanlam') ? `${process.env.REACT_APP_BACKEND_URL}/media/afp_logo.png` 
                            : `${process.env.REACT_APP_BACKEND_URL}/media/logo.png` 
                        }
                        className={
                            user['email'].includes('sfp') || user['email'].includes('succession')? "sfp-logo"
                            : user['email'].includes('fs4p') ? "fs4p-logo"
                            : user['email'].includes('sanlam') ? "sanlam-logo"
                            : "sfp-logo"
                        }
                    />
                </div>
                <main className="container">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <RiskFactors data={{formId: state['formId'], advisorDetails: state['advisor']}} />
                </div>
                {/* <div className='col-6'>
                    <NavLink to={{pathname:"/printform"}} state={{formId : FormData['id'], advisorId : FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} className='btn btn-success col-12'>Print</NavLink>
                    <NavLink to={{pathname:"/printformclient"}} state={{formId : FormData['id'], advisorId : FormData['advisorId'], clientIdNumber: FormData['clientIdNumber']}} className='btn btn-success col-12'>Print For Client</NavLink>
                </div>  */}
                <br/>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="record-of-advice" data-bs-toggle="tab" data-bs-target="#recordOfAdvice" type="button" role="tab" aria-controls="risk" aria-selected="true">Record of Advice</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="risk-tab" data-bs-toggle="tab" data-bs-target="#risk" type="button" role="tab" aria-controls="risk" aria-selected="true">Risk Planning</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="invest-tab" data-bs-toggle="tab" data-bs-target="#invest" type="button" role="tab" aria-controls="invest" aria-selected="false">Investment Planning</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="assurance1-tab" data-bs-toggle="tab" data-bs-target="#assurance1" type="button" role="tab" aria-controls="assurance1" aria-selected="false">BA Risk</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="assurance2-tab" data-bs-toggle="tab" data-bs-target="#assurance2" type="button" role="tab" aria-controls="assurance2" aria-selected="false">BA Investment</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="employee-tab" data-bs-toggle="tab" data-bs-target="#employee" type="button" role="tab" aria-controls="employee" aria-selected="false">Employee Benefits</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="fiduciary-tab" data-bs-toggle="tab" data-bs-target="#fiduciary" type="button" role="tab" aria-controls="fiduciary" aria-selected="false">Fiduciary</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="Short-term-Commercial-tab" data-bs-toggle="tab" data-bs-target="#Short-term-Commercial" type="button" role="tab" aria-controls="Short-term-Commercial" aria-selected="false">Short-term Commercial</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="Short-term-Personal-tab" data-bs-toggle="tab" data-bs-target="#Short-term-Personal" type="button" role="tab" aria-controls="Short-term-Personal" aria-selected="false">Short-term Personal</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="Medical-tab" data-bs-toggle="tab" data-bs-target="#Medical" type="button" role="tab" aria-controls="Medical" aria-selected="false">Medical</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className={
                                state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "nav-link sfp-text" 
                                : state['advisor']['email'].includes('fs4p') ? "nav-link fs4p-text" 
                                : state['advisor']['email'].includes('sanlam') ? "nav-link sanlam-text" 
                                : "nav-link sfp-text"
                            } 
                            id="Gap-Cover-tab" data-bs-toggle="tab" data-bs-target="#Gap-Cover" type="button" role="tab" aria-controls="Gap-Cover" aria-selected="false">Gap Cover</button>
                    </li>
                    <br/>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="recordOfAdvice" role="tabpanel" aria-labelledby="risk-tab"><RecordOfAdvice /></div>
                        <div className="tab-pane fade" id="risk" role="tabpanel" aria-labelledby="risk-tab"><Risk /></div>
                        <div className="tab-pane fade" id="invest" role="tabpanel" aria-labelledby="invest-tab"><Invest /></div>
                        <div className="tab-pane fade" id="assurance1" role="tabpanel" aria-labelledby="assurance1-tab"><AssuranceRisk  /></div>
                        <div className="tab-pane fade" id="assurance2" role="tabpanel" aria-labelledby="assurance2-tab"><AssuranceInvestment  /></div>
                        <div className="tab-pane fade" id="employee" role="tabpanel" aria-labelledby="employee-tab"><Employee  /></div>
                        {/* {
                            state['clientIdNumber']!== undefined ? 
                            <div className="tab-pane fade" id="fiduciary" role="tabpanel" aria-labelledby="fiduciary-tab"><Fiduciary data={{formId: state['formId'],advisorId: state['advisorId'], clientIdNumber: state['clientIdNumber']}}/></div>
                            : <></>
                        } */}
                        <div className="tab-pane fade" id="fiduciary" role="tabpanel" aria-labelledby="fiduciary-tab"><Fiduciary /></div>
                        {/* <div className="tab-pane fade" id="fiduciary" role="tabpanel" aria-labelledby="fiduciary-tab"><Fiduciary FormData={FiduciaryFormData} setFormData={setFiduciaryFormData} /></div> */}
                        <div className="tab-pane fade" id="Short-term-Commercial" role="tabpanel" aria-labelledby="Short-term-Commercial-tab"><Short_term_Commercial /></div>
                        <div className="tab-pane fade" id="Gap-Cover" role="tabpanel" aria-labelledby="Gap-Cover-tab"><GapCover /></div>
                        <div className="tab-pane fade" id="Short-term-Personal" role="tabpanel" aria-labelledby="Short-term-Personal-tab"><Short_term_Personal /></div>
                        <div className="tab-pane fade" id="Medical" role="tabpanel" aria-labelledby="Medical-tab"><Medical /></div>
                    </div>
            </main>
                <Footer />
                </div>
            : <></>
        }
      </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
  })
export default connect(mapStateToProps)(CompleteForm)
