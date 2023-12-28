// components/Step1.js
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InitialInfo = ({ user, FormData, onChange, nextStep }) => {
    
    const handleNext = () => {
        // Validate data if needed
        nextStep();
    };


    return (
        <div>
            <div className='row'>
                <div className='col-lg-1'>   
                </div>                     
                <div className='col-lg-10 col-md-6 col-sm-12'>      
                    <div className='row'>
                        <div className="col-lg-6 mb-3">
                            <label className="form-label compliance-inital-card-text">Client Name</label>
                            <input spellCheck="true" required minLength="3" and maxLength="45" id="clientName" name="clientName" value={FormData?.clientName} className="form-control" onChange={(e) => {onChange(e)}}  placeholder="Client Name"  aria-describedby="" />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label className="form-label compliance-inital-card-text">Client ID number</label>
                            <input spellCheck="true" disabled id="clientIdNumber" name="clientIdNumber" value={FormData?.clientIdNumber} className="form-control" onChange={(e) => {onChange(e)}}  placeholder="Client ID"  aria-describedby="" />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <label className="form-label compliance-inital-card-text">Client Address</label>
                            <input spellCheck="true" required id="clientAddress" name="clientAddress" value={FormData?.clientAddress} className="form-control" onChange={(e) => {onChange(e)}}  placeholder="Client Address"  aria-describedby="" />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label className="form-label compliance-inital-card-text">Client Email</label>
                            <input spellCheck="true" type='email' required id="clientEmail" name="clientEmail" value={FormData?.clientEmail} className="form-control" onChange={(e) => {onChange(e)}}  placeholder="Client Email"  aria-describedby="" />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label className="form-label compliance-inital-card-text">Client Phone</label>
                            <input spellCheck="true" required id="clientPhoneNumber" name="clientPhoneNumber" value={FormData?.clientPhoneNumber} className="form-control" onChange={(e) => {onChange(e)}}  placeholder="Client Phone Number"  aria-describedby="" />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label className="form-label compliance-inital-card-text">Financial Advisor:</label>
                            <input spellCheck="true" disabled value={`${user?.first_name} ${user?.last_name && user?.last_name != 'nan' ? user?.last_name : ""}`} className="form-control" onChange={(e) => {onChange(e)}} placeholder="Name"  aria-describedby="" />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label className="form-label compliance-inital-card-text">Date:</label>
                            <input required spellCheck="true"  type="date"  id="clientDateOfBirth" value={FormData?.clientDateOfBirth} onChange={e => onChange(e)} name="clientDateOfBirth" className="form-control" placeholder="date_of_birth"  aria-describedby="" />
                        </div>
                        <div className="col-lg-12">
                            <p className='roa-disclaimer'>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) 
                                processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to 
                                SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on 
                                <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
                            </p>
                        </div>
                    </div>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handleNext}>Section A: Compulsory Disclosures <span><FontAwesomeIcon width={"20px"} icon={faArrowRight} /></span></button>
                </div>   
            </div> 
            
        </div>
    );
};

export default InitialInfo;
