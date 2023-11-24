// components/Step1.js
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React from 'react';

const TransactionRisk = ({ user, formData, setFormData, onChange, nextStep, prevStep }) => {

    const handleNext = () => {
        // Validate data if needed
        nextStep();
    };
    const handlePrevious = () => {
        // Validate data if needed
        prevStep();
    };

    return (
        <div>
            <div className='text-center'>
                <b>C. Transaction Risk</b>
            </div>
            <br/>
            <div className='row'>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handlePrevious}><FontAwesomeIcon width={"20px"}  icon={faArrowLeft} /> B. Product/Service Risk</button>
                </div>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handleNext}>D. Reputation Risk<FontAwesomeIcon width={"20px"}  icon={faArrowRight} /></button>
                </div>
            </div> 
        </div>
    );
};

export default TransactionRisk;
