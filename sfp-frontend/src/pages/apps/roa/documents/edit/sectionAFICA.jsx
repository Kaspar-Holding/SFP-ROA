// components/ClientRisk.js
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react'

const SectionAFICA = ({ user, FormData, setFormData, onChange, nextStep, prevStep, FICAEditorRef }) => {
    
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
                <b>Section A</b>
            </div>  
            <br/>
            <div className='row'>                       
                <div className='roa-font'>
                    <b>2. Financial Intelligence Centre Act (FICA)</b>
                </div>  
                <div className="col-6 roa-label">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided a clear copy of his/her identity document.</label>
                </div>
                
                <div className="col-6">
                    <div className="row">
                        <div className="row col-6 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData?.clientFica == 1 ? true : false}  onChange={e => onChange(e)} type="radio" value="1" id="provided_identity_radio_btn" name="clientFica"/>
                            </div>
                            <div className="col-6">
                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-6 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData?.clientFica == 0 ? true : false}  onChange={e => onChange(e)} type="radio" value="0" id="provided_identity_radio_btn" name="clientFica"/>
                            </div>
                            <div className="col-6">
                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Editor
                    onInit={(evt, editor) => FICAEditorRef.current = editor}
                    value={FormData?.clientFicaReason}
                    onEditorChange={(e)=>{ setFormData({...FormData, ['clientFicaReason']: FICAEditorRef.current.getContent() }) }}
                    name="clientBackgroundInfo"
                    init={{
                        browser_spellcheck : true,
                        selector: "textarea",
                        height: 300,
                        contextmenu: false,
                        menubar: true,
                        plugins: [
                            'advlist autolink link lists image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                        ],
                        toolbar: 'styles | undo redo | formatselect | ' +
                        'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist | outdent indent | link | copy paste undo redo | ' +
                        'removeformat',
                        content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                        init_instance_callback : function(editor) {
                            var freeTiny = document.querySelector('.tox .tox-notification--in');
                            freeTiny ? freeTiny.style.display = 'none' : "";
                        }
                    }}
                />
                <br/>
            </div>
            <br/>
            <div className='row'>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handlePrevious}><FontAwesomeIcon width={"20px"}  icon={faArrowLeft} /> Section A: Access Information</button>
                </div>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handleNext}>Section A: Replacements <FontAwesomeIcon width={"20px"}  icon={faArrowRight} /></button>
                </div>
            </div> 
        </div>
    );
};

export default SectionAFICA;