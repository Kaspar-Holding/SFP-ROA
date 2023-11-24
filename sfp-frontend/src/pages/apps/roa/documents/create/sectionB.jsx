// components/ClientRisk.js
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react'

const SectionB = ({ user, FormData, setFormData, onChange, prevStep, FICAEditorRef }) => {
    
    const handlePrevious = () => {
        // Validate data if needed
        prevStep();
    };


    return (
        <div>
            <div className='text-center'>
                <b>SECTION B</b>
            </div>  
            <br/>
            <div className='row'>                       
                <div className='roa-font'>
                    <b>Background information</b>
                </div>  
                <div className="col-6 roa-label">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Your personal circumstances that formed the basis for my recommendation</label>
                </div>
                <Editor
                    onInit={(evt, editor) => FICAEditorRef.current = editor}
                    value={FormData['clientBackgroundInfo']}
                    onEditorChange={(e)=>{ setFormData({...FormData, ['clientBackgroundInfo']: FICAEditorRef.current.getContent() }) }}
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
                <div className='col-12'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handlePrevious}><FontAwesomeIcon width={"20px"}  icon={faArrowLeft} /> <strong>Section A: FICA</strong></button>
                </div>
            </div> 
        </div>
    );
};

export default SectionB;
