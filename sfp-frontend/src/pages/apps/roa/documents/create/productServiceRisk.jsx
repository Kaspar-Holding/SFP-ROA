// components/ProductServiceRiskProductServiceRisk.js
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React from 'react';

const ProductServiceRisk = ({ user, formData, onChange, nextStep, prevStep }) => {
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
                <b>B. Product/Service Risk</b>
            </div>  
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <Tippy className='roa-tippy' conntent="The drop-down list is created for all products/services that have been captured in the Library in the Summary Worksheet">                    
                        <label className="col-form-label roa-font">Product/Service Name</label>
                    </Tippy>
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_Product_Name' id='RF_Product_Name' value={FormData['RF_Product_Name']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="7">Advisory or intermediary services only with commission based inflow</option>
                    </select>  
                </div>
                <div className='col-2'></div>
                {
                    user['is_superuser'] ?
                    <>
                        <div className='col-1'>
                            <label className="col-form-label">3</label>
                        </div>
                        <div className='col-1'>
                            <label className="col-form-label">2</label>
                        </div>
                        <div className='col-2'>
                            <label className="col-form-label">6</label>
                        </div>
                    </>
                    :
                    <></>
                }
            </div>
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <Tippy content="This field defaults to the relevant Product / Service category that was selected for the relevant product/service in the Summary Worksheet. It is displayed for information purposes only">                   
                        <label className="col-form-label roa-font">Product/Service Category</label>
                    </Tippy>
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <label className="col-form-label roa-font">Advisory services: non financial</label>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handlePrevious}><FontAwesomeIcon width={"20px"}  icon={faArrowLeft} /> A. Client Risk</button>
                </div>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handleNext}>C. Transaction Risk<FontAwesomeIcon width={"20px"}  icon={faArrowRight} /></button>
                </div>
            </div> 
            
        </div>
    );
};

export default ProductServiceRisk;
