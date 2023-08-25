import React, {useState, useEffect} from 'react'
import '../Styles/Form.css'
import '../Styles/CustomNotification.css'
import Risk from '../Risk';
import Invest from '../Invest';
import AssuranceRisk from '../AssuranceRisk';
import AssuranceInvestment from '../AssuranceInvestment';
import Employee from '../Employee';
import Fiduciary from '../Fiduciary';
import Short_term_Commercial from '../Short-term Commercial';
import Short_term_Personal from '../Short-term Personal';
import {Navigate, NavLink, useLocation} from 'react-router-dom'
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import GapCover from '../GapCover';
import RiskFactors from '../RiskFactors';
import RecordOfAdvice from '../RecordOfAdvice';
import Medical from '../Medical';
import { connect } from 'react-redux'

const CompleteForm = ({user}) => {
    const location = useLocation();
    const { state } = location;

    const sideScroll = (element,direction,speed,distance,step) => {
        var scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed)
    }

    const slideLeftBtn = () => {
        var container = document.getElementById('pills-tab')
        sideScroll(container,'left',25,100,10)
    }

    const slideRightBtn = () => {
        var container = document.getElementById('pills-tab')
        sideScroll(container,'right',25,100,10)
    }

    if (!state || state['formId'] === undefined || state['formId'] === null) {
        return <Navigate to="/"/>
    }
    return (
        <div>    
            {
                state['formId'] ?
                <>
                    <br/>
                    <div class="container p-2">
                        <nav class="tabbable">
                            <div class="row">
                                <div class="col-1">
                                    <button type="button" id="slideLeft" onClick={()=>{slideLeftBtn()}} class="btn btn-light btn-lg rounded-5 shadow bg-body-tertiary rounded">
                                        <i class="fa-solid fa-arrow-left" style={{color: "#007A8D"}}></i>
                                    </button>
                                </div>
                                <div class="col-10 p-0">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-dynamic-risk-assessment-tab" data-bs-toggle="pill" data-bs-target="#pills-dynamic-risk-assessment" type="button" role="tab" aria-controls="pills-dynamic-risk-assessment" aria-selected="true">Dynamic Risk Assessment</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-record-of-advice-tab" data-bs-toggle="pill" data-bs-target="#pills-record-of-advice" type="button" role="tab" aria-controls="pills-record-of-advice" aria-selected="false">Record of Advice</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-risk-planning-tab" data-bs-toggle="pill" data-bs-target="#pills-risk-planning" type="button" role="tab" aria-controls="pills-risk-planning" aria-selected="false">Risk Planning</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-investment-planning-tab" data-bs-toggle="pill" data-bs-target="#pills-investment-planning" type="button" role="tab" aria-controls="pills-investment-planning" aria-selected="false">Investment Planning</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-ba-risk-tab" data-bs-toggle="pill" data-bs-target="#pills-ba-risk" type="button" role="tab" aria-controls="pills-ba-risk" aria-selected="false">BA Risk</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-ba-investment-tab" data-bs-toggle="pill" data-bs-target="#pills-ba-investment" type="button" role="tab" aria-controls="pills-ba-investment" aria-selected="false">BA Investment</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-employee-benefits-tab" data-bs-toggle="pill" data-bs-target="#pills-employee-benefits" type="button" role="tab" aria-controls="pills-employee-benefits" aria-selected="false">Employee Benefits</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-short-term-commerical-tab" data-bs-toggle="pill" data-bs-target="#pills-short-term-commerical" type="button" role="tab" aria-controls="pills-short-term-commerical" aria-selected="false">Short Term Commerical</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-short-term-personal-tab" data-bs-toggle="pill" data-bs-target="#pills-short-term-personal" type="button" role="tab" aria-controls="pills-short-term-personal" aria-selected="false">Short Term Personal</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-fiduciary-tab" data-bs-toggle="pill" data-bs-target="#pills-fiduciary" type="button" role="tab" aria-controls="pills-fiduciary" aria-selected="false">Fiduciary</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-medical-tab" data-bs-toggle="pill" data-bs-target="#pills-medical" type="button" role="tab" aria-controls="pills-medical" aria-selected="false">Medical</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-gap-cover-tab" data-bs-toggle="pill" data-bs-target="#pills-gap-cover" type="button" role="tab" aria-controls="pills-gap-cover" aria-selected="false">Gap Cover</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-1">
                                    <button type="button" id="slideRight" onClick={()=>{slideRightBtn()}} class="btn btn-light btn-lg rounded-5 shadow bg-body-tertiary rounded">
                                        <i class="fa-solid fa-arrow-right" style={{color: "#007A8D"}}></i>
                                    </button>
                                </div>
                            </div>
                        </nav>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-dynamic-risk-assessment" role="tabpanel" aria-labelledby="pills-dynamic-risk-assessment-tab" tabCompleteForm="0">
                                <RiskFactors data={{formId: state['formId'], advisorDetails: state['advisor']}} />
                            </div>
                            <div class="tab-pane fade" id="pills-record-of-advice" role="tabpanel" aria-labelledby="pills-record-of-advice-tab" tabCompleteForm="0">
                                <RecordOfAdvice />
                            </div>
                            <div class="tab-pane fade" id="pills-risk-planning" role="tabpanel" aria-labelledby="pills-risk-planning-tab" tabCompleteForm="0">
                                <Risk />
                            </div>
                            <div class="tab-pane fade" id="pills-investment-planning" role="tabpanel" aria-labelledby="pills-investment-planning-tab" tabCompleteForm="0">
                                <Invest />
                            </div>
                            <div class="tab-pane fade" id="pills-ba-risk" role="tabpanel" aria-labelledby="pills-ba-risk-tab" tabCompleteForm="0">
                                <AssuranceRisk  />
                            </div>
                            <div class="tab-pane fade" id="pills-ba-investment" role="tabpanel" aria-labelledby="pills-ba-investment-tab" tabCompleteForm="0">
                                <AssuranceInvestment  />
                            </div>
                            <div class="tab-pane fade" id="pills-employee-benefits" role="tabpanel" aria-labelledby="pills-employee-benefits-tab" tabCompleteForm="0">
                                <Employee  />
                            </div>
                            <div class="tab-pane fade" id="pills-short-term-commerical" role="tabpanel" aria-labelledby="pills-short-term-commerical-tab" tabCompleteForm="0">
                                <Fiduciary />
                            </div>
                            <div class="tab-pane fade" id="pills-short-term-personal" role="tabpanel" aria-labelledby="pills-short-term-personal-tab" tabCompleteForm="0">
                                <Short_term_Commercial />
                            </div>
                            <div class="tab-pane fade" id="pills-fiduciary" role="tabpanel" aria-labelledby="pills-fiduciary-tab" tabCompleteForm="0">
                                <GapCover />
                            </div>
                            <div class="tab-pane fade" id="pills-medical" role="tabpanel" aria-labelledby="pills-medical-tab" tabCompleteForm="0">
                                <Short_term_Personal />
                            </div>
                            <div class="tab-pane fade" id="pills-gap-cover" role="tabpanel" aria-labelledby="pills-gap-cover-tab" tabCompleteForm="0">
                                <Medical />
                            </div>
                        </div>
                    </div>
                </> :
                <>
                </>
            }        
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})
export default connect(mapStateToProps)(CompleteForm)