import React, {useState} from 'react'
import './Styles/Form.css'
import Risk from './Risk';
import Invest from './Invest';
import AssuranceRisk from './AssuranceRisk';
import AssuranceInvestment from './AssuranceInvestment';
import Employee from './Employee';
import Fiduciary from './Fiduciary';
import Short_term_Commercial from './Short-term Commercial';
import Short_term_Personal from './Short-term Personal';
import MedicalAid from './MedicalAid';
import GapCover from './GapCover';
import {Navigate, NavLink} from 'react-router-dom'
export const CreateForm = () => {
    const [clientName, setclientName] = useState("")
    const [idNumber, setidNumber] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [dateOfBirth, setdateOfBirth] = useState("")
    const [advisorId, setadvisorId] = useState("")
    const [letterOfIntroduction, setletterOfIntroduction] = useState(true)
    const [letterOfIntroductionReason, setletterOfIntroductionReason] = useState("")
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccess, setletterOfIntroductionAccess] = useState(true)
    const [letterOfIntroductionAccessReason, setletterOfIntroductionAccessReason] = useState("")
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [Fica, setFica] = useState(true)
    const [FicaReason, setFicaReason] = useState("")
    const [FicaVisibility, setFicaVisibility] = useState(false)
    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)
  //   console.log(clientName)
    function _btn() {
      console.log(clientName)
      return <Navigate to="/remaining_form" />
      alert(JSON.stringify({
          "Client Name": clientName,
          "ID Number" : idNumber,
          "EMail" : email,
          "Address" : address,
          "Phone Number" : phoneNumber,
          "Date of Birth" : dateOfBirth,
          "Advisor" : advisorId
      }))

    }
    function letter_of_introduction_onFocus() {
      setletterOfIntroductionVisibility(true)
    }
    function letter_of_introduction_onBlur() {
      setletterOfIntroductionVisibility(false)
    }
    function letter_of_introduction_access_onFocus() {
      setletterOfIntroductionAccessVisibility(true)
    }
    function letter_of_introduction_access_onBlur() {
      setletterOfIntroductionAccessVisibility(false)
    }
    function fica_onFocus() {
      setFicaVisibility(true)
    }
    function fica_onBlur() {
      setFicaVisibility(false)
    }
    function backgroundInfo_onFocus() {
      setbackgroundInfoVisibility(true)
    }
    function backgroundInfo_onBlur() {
      setbackgroundInfoVisibility(false)
    }
    return (
      
      <main className="container">
          {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="fw-bold h2_1">SECTION A: LONG-TERM INSURANCE </h2>
          </div>
          <div className="bg-white p-1 rounded">
              <h2 className="fw-bold h2_1">RECORD OF ADVICE</h2>
              <hr/>
              <form onSubmit={_btn} method="get">
                  <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label className="col-form-label"><b>Client Name:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="client_name" onChange={(e) => {setclientName(e.target.value)}} name="client_name" className="form-control" placeholder="Client Name"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="id_number" className="col-form-label"><b>ID number:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="id_number" onChange={(e) => {setidNumber(e.target.value)}} name="id_number" className="form-control" placeholder="ID number"  aria-describedby="" />
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
                                  <input spellCheck="true"  id="address" onChange={(e) => {setaddress(e.target.value)}}  name="address" className="form-control" placeholder="Address"  aria-describedby="" />
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
                                  <input spellCheck="true"  id="email" onChange={(e) => {setemail(e.target.value)}}  name="email" className="form-control" placeholder="Email"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="phone" className="col-form-label"><b>Phone:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="number" id="phone" onChange={(e) => {setphoneNumber(e.target.value)}} name="phone" className="form-control" placeholder="Phone"  aria-describedby="" />
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
                                  <input spellCheck="true"  id="advisor" onChange={(e) => {setadvisorId(e.target.value)}}  name="advisor" className="form-control" placeholder="Financial Advisor"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="date_of_birth" className="col-form-label"><b>Date:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="date"  id="date_of_birth" onChange={(e) => {setdateOfBirth(e.target.value)}} name="date_of_birth" className="form-control" placeholder="date_of_birth"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          <hr className="col-11" />
                          <div className="col-11 p_class">
                              <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>
                          </div>
                          <h5 className="section_class"><b>SECTION A:</b></h5>
                          <ol style={{fontFamily: 'Arial Narrow',fontSize: 15}}>
                              <li className="h6 fw-bold" style={{color: '#00788A'}}>Compulsory Disclosures</li>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client was provided with a copy of the Letter of Introduction.</label>
                                  </div>
                                  <div className="col-6">
                                      <div className="row">
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                                      No
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  {
                                    
                                          <div className="col-11" id="letter_of_introduction_2">
                                              
                                              <textarea  id="letter_of_introduction" name="letter_of_introduction" className="form-control" placeholder="       Click here to enter text." aria-describedby="" ></textarea>
                                          </div>
                                   
                                  }
                              </div>
                              <hr className="col-11" />
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided authority to access information.</label>
                                  </div>
                                  <div className="col-6">
                                      <div className="row">
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="0" id="authority_access_radio_btn" name="authority_access_radio_btn" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="authority_access_radio_btn" name="authority_access_radio_btn" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                                      No
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  {
                                    
                                          <div className="col-11" id="authority_access_2" >
                                              
                                              <textarea  id="authority_access" name="authority_access" className="form-control" placeholder="       Click here to enter text." aria-describedby="" ></textarea>
                                          </div>
                                    
                                  }
                              </div>
                              <hr className="col-11" />
                              <li className="h6 fw-bold" style={{color: '#00788A'}}>Financial Intelligence Centre Act (FICA)</li>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided a clear copy of his/her identity document.</label>
                                  </div>
                                  <div className="col-6">
                                      <div className="row">
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="0" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                      No
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  {
                                    
                                          <div className="col-11" id="provided_identity_2" >
                                             
                                              <textarea  id="provided_identity" name="provided_identity" className="form-control" placeholder="         Click here to enter text" aria-describedby="" ></textarea>
                                          </div>
                                    
                                  }
                              </div>
                              <hr className="col-11" />
                          </ol>
                          <h5 className="section_class"><b>SECTION B:</b></h5>
                          <h5 className="h6 section_class1"><b>Background information</b></h5>
                          <p>Your personal circumstances that formed the basis for my recommendation</p>
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
                          <textarea  id="background_info" name="background_info" className="form-control"  style={{height: '160px'}} 
                          onFocus={backgroundInfo_onFocus}
                          onBlur={backgroundInfo_onBlur}
                          placeholder={
                              `                       Provide a detailed description of the client’s:
                              •	current personal circumstances,
                              •	needs that have been identified, 
                              •	and relevant information 
                          that formed the basis for the financial solution recommended`}  aria-describedby=""  ></textarea>
                          
                          
                      </div>
                  </div>
              </form>
              
          </div> */}

<br/>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="risk-tab" data-bs-toggle="tab" data-bs-target="#risk" type="button" role="tab" aria-controls="risk" aria-selected="true">Risk Planning</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="invest-tab" data-bs-toggle="tab" data-bs-target="#invest" type="button" role="tab" aria-controls="invest" aria-selected="false">Investment Planning</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="assurance1-tab" data-bs-toggle="tab" data-bs-target="#assurance1" type="button" role="tab" aria-controls="assurance1" aria-selected="false">Business Assurance Risk</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="assurance2-tab" data-bs-toggle="tab" data-bs-target="#assurance2" type="button" role="tab" aria-controls="assurance2" aria-selected="false">Business Assurance Invesment</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="employee-tab" data-bs-toggle="tab" data-bs-target="#employee" type="button" role="tab" aria-controls="employee" aria-selected="false">Employee Benefits</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="fiduciary-tab" data-bs-toggle="tab" data-bs-target="#fiduciary" type="button" role="tab" aria-controls="fiduciary" aria-selected="false">Fiduciary</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Short-term-Commercial-tab" data-bs-toggle="tab" data-bs-target="#Short-term-Commercial" type="button" role="tab" aria-controls="Short-term-Commercial" aria-selected="false">Short-term Insurance:Commercial</button>
  </li>
  <br/>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Short-term-Personal-tab" data-bs-toggle="tab" data-bs-target="#Short-term-Personal" type="button" role="tab" aria-controls="Short-term-Personal" aria-selected="false">Short-term Insurance:Personal</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="MedicalAid-tab" data-bs-toggle="tab" data-bs-target="#MedicalAid" type="button" role="tab" aria-controls="MedicalAid" aria-selected="false">Medical Aid</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="GapCover-tab" data-bs-toggle="tab" data-bs-target="#GapCover" type="button" role="tab" aria-controls="GapCover" aria-selected="false">Gap Cover</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="risk" role="tabpanel" aria-labelledby="risk-tab"><Risk/></div>
  <div class="tab-pane fade" id="invest" role="tabpanel" aria-labelledby="invest-tab"><Invest/></div>
  <div class="tab-pane fade" id="assurance1" role="tabpanel" aria-labelledby="assurance1-tab"><AssuranceRisk/></div>
  <div class="tab-pane fade" id="assurance2" role="tabpanel" aria-labelledby="assurance2-tab"><AssuranceInvestment/></div>
  <div class="tab-pane fade" id="employee" role="tabpanel" aria-labelledby="employee-tab"><Employee/></div>
  <div class="tab-pane fade" id="fiduciary" role="tabpanel" aria-labelledby="fiduciary-tab"><Fiduciary/></div>
  <div class="tab-pane fade" id="Short-term-Commercial" role="tabpanel" aria-labelledby="Short-term-Commercial-tab"><Short_term_Commercial/></div>
  <div class="tab-pane fade" id="Short-term-Personal" role="tabpanel" aria-labelledby="Short-term-Personal-tab"><Short_term_Personal/></div>
  <div class="tab-pane fade" id="MedicalAid" role="tabpanel" aria-labelledby="MedicalAid-tab"><MedicalAid/></div>
  <div class="tab-pane fade" id="GapCover" role="tabpanel" aria-labelledby="GapCover-tab"><GapCover/></div>
</div>
      </main>
    )
}
