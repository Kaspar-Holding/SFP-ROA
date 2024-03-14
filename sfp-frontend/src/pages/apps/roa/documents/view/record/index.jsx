import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'

import dynamic from "next/dynamic";
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'
import InitialInfo from './initialInfo'
import SectionACD from './sectionACD'
// import ProductServiceRisk from './productServiceRisk'
// import TransactionRisk from './transactionRisk'
import SectionAAInfo from './sectionAAInfo'
import SectionAFICA from './sectionAFICA'
import SectionAReplacements from './sectionAReplacements'
import SectionB from './sectionB'
import Loader from '../../../../../../hocs/Loader'
import EditROALayout from '../../../../../../hocs/EditROALayout'
import Layout from '../../../../../../hocs/Layout'
import { Editor } from '@tinymce/tinymce-react'
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Alert from '../../../../../../components/Alert';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditROA = () => {

    // Quill JS


    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction


            ['clean']
        ],
        clipboard: {
            matchVisual: true, // Enable pasting styles from external sources
        },

    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'list', 'bullet', 'indent',
        'blockquote', 'code-block',
        'align',
        'link', 'image', 'video',
        'font', // Add the 'font' format
    ];

    const router = useRouter()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const formId = router?.query?.fId
    const [Loaded, setLoaded] = useState(false)

    const Date_Var = new Date()
    const CurrentData = Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + (Date_Var.getDate())).slice(-2)
    const [FormData, setFormData] = useState({
        clientName: "",
        clientIdNumber: "",
        clientEmail: "",
        clientAddress: "",
        clientPhoneNumber: "",
        clientDateOfBirth: Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + (Date_Var.getDate())).slice(-2),
        clientLetterOfIntroduction: 2,
        clientLetterOfIntroductionReason: "",
        clientLetterOfIntroductionAccess: 2,
        clientLetterOfIntroductionAccessReason: "",
        clientFica: 2,
        clientFicaReason: "",
        clientReplacement: 2,
        clientReplacementReason: "",
        clientBackgroundInfo: ""
    })
    // console.log(FormData)

    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState(false)

    // console.log(localStorage.getItem('access'))
    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(FormData?.clientEmail) === false) {
            setErrorData({
                status: "Email Validity",
                message: "Email is not valid, Please enter a valid email",
                errors: ""
            })
            setSubmissionErrorVisibilty(true)
            setTimeout(() => {
                setSubmissionErrorVisibilty(false)
            }, 5000)
            return false
        }
        return true
    }

    const onChange = e => {
        FormStatus == 0 ? setFormData({ ...FormData, [e.target.name]: e.target.value }) : Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })

    }
    // API Config
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const updateROAForm = async (data) => {

    }

    const onSubmit = e => {
        e.preventDefault()

    }

    const [FormStatus, setFormStatus] = useState(0)
    const LoadData = async (formId) => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId
        })
        try {
            const response = await axios.post(
                `/api/roa/form/record_of_advice/`,
                Body,
                config
            )
            setFormData(response?.data?.data?.roa_data)
            setFormStatus(response?.data?.data?.form_status)


        } catch (error) {

        }
        setLoaded(false)
    }

    const onFieldBlur = (e) => {
    }

    // Some extra stuff
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [FicaVisibility, setFicaVisibility] = useState(false)
    const [ReplacementVisibility, setReplacementVisibility] = useState(false)
    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)

    function letter_of_introduction_onFocus() {
        setletterOfIntroductionVisibility(true)
    }
    function letter_of_introduction_onBlur() {
        setletterOfIntroductionVisibility(false)
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




    useEffect(() => {
        LoadData(formId)
    }, [])

    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };
    return (
        <div>
            <Layout
                title={ "Edit ROA Document" }
                content={ "Edit ROA Document" }
            >
                <EditROALayout
                    appTitle={ 'Edit ROA Document' }
                    pageTitle={ 'Edit ROA Document' }
                    appName={ 'ROA' }
                    app={ 'roa' }
                >
                    <div className='roa-edit-card'>
                        <div className='inital-card-header mx-5 text-center'>
                            <b>Record of Advice</b>
                        </div>
                        {
                            SuccessMessageVisibility ?
                                <Alert SuccessMessage={ SuccessMessage } />
                                :
                                <></>
                        }
                        <div className=''>
                            <form onSubmit={ e => onSubmit(e) }>
                                <div className={ 'inital-card-header mx-5' }>
                                    <div className='row'>
                                        <div className='col-lg-1'>
                                        </div>
                                        <div className='col-lg-10 col-md-6 col-sm-12'>
                                            <div className='row'>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label compliance-inital-card-text">Client Name</label>
                                                    <input spellCheck="true" disabled required minLength="3" and maxLength="45" id="clientName" name="clientName" value={ FormData?.clientName } className="form-control" onChange={ (e) => { onChange(e) } } placeholder="Client Name" aria-describedby="" />
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label compliance-inital-card-text">Client ID number</label>
                                                    <input spellCheck="true" disabled id="clientIdNumber" name="clientIdNumber" value={ FormData?.clientIdNumber } className="form-control" onChange={ (e) => { onChange(e) } } placeholder="Client ID" aria-describedby="" />
                                                </div>
                                                <div className="col-lg-12 mb-3">
                                                    <label className="form-label compliance-inital-card-text">Client Address</label>
                                                    <input spellCheck="true" required onBlur={ (e) => { onFieldBlur(e) } } id="clientAddress" name="clientAddress" value={ FormData?.clientAddress } className="form-control" onChange={ (e) => { onChange(e) } } placeholder="Client Address" aria-describedby="" />
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label compliance-inital-card-text">Client Email</label>
                                                    <input spellCheck="true" disabled type='email' required id="clientEmail" name="clientEmail" value={ FormData?.clientEmail } className="form-control" onChange={ (e) => { onChange(e) } } placeholder="Client Email" aria-describedby="" />
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label compliance-inital-card-text">Client Phone</label>
                                                    <input spellCheck="true" disabled required id="clientPhoneNumber" name="clientPhoneNumber" value={ FormData?.clientPhoneNumber } className="form-control" onChange={ (e) => { onChange(e) } } placeholder="Client Phone Number" aria-describedby="" />
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label compliance-inital-card-text">Financial Advisor:</label>
                                                    <input spellCheck="true" disabled value={ `${user?.full_name}` } className="form-control" onChange={ (e) => { onChange(e) } } placeholder="Name" aria-describedby="" />
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label compliance-inital-card-text">Date:</label>
                                                    <input required spellCheck="true" type="date" id="clientDateOfBirth" value={ FormData?.clientDateOfBirth } onChange={ e => onChange(e) } name="clientDateOfBirth" className="form-control" placeholder="date_of_birth" aria-describedby="" />
                                                </div>
                                                <div className="col-lg-12">
                                                    <p className='roa-disclaimer'>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP)
                                                        processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to
                                                        SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on
                                                        <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <button className='btn btn-primary btn-sfp w-100' onClick={handleNext}>Section A: Compulsory Disclosures <span><FontAwesomeIcon width={"20px"} icon={faArrowRight} /></span></button> */ }
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-1'>
                                        </div>
                                        <div className='col-lg-10'>
                                            {/* Section A */ }
                                            <div className='text-center'>
                                                <b>Section A</b>
                                            </div>
                                            <br />
                                            <div className='row'>
                                                <div className='roa-font'>
                                                    <b>1. Compulsory Disclosures</b>
                                                </div>
                                                <div className="col-6 roa-label">
                                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client was provided with a copy of the Letter of Introduction.</label>
                                                </div>

                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-2">
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientLetterOfIntroduction == 1 ? true : false } onChange={ e => onChange(e) } type="radio" value="1" id="provided_identity_radio_btn" name="clientLetterOfIntroduction" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    Yes
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-2">
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientLetterOfIntroduction == 0 ? true : false } onChange={ e => onChange(e) } type="radio" value="0" id="provided_identity_radio_btn" name="clientLetterOfIntroduction" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    letterOfIntroductionVisibility ?
                                                        <>
                                                            <div id="letter_of_introduction_instructions" className="hidden_class">
                                                                <p>If no, motivate</p>
                                                            </div>
                                                        </> :
                                                        null
                                                }
                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.clientLetterOfIntroductionReason }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['clientLetterOfIntroductionReason']: value }) } }
                                                        onFocus={ (e) => { letter_of_introduction_onFocus() } }
                                                        onBlur={ (e) => { letter_of_introduction_onBlur() } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here

                                                        } }
                                                        placeholder="If no, motivate"
                                                    />
                                                </div>
                                                {/* <Editor
                                                    apiKey='24mclovnb2gg7pih0ea5b9uqb87alv4p1pmmhsc0c9yprghq'
                                                    onInit={(evt, editor) => compulsoryAEditorRef.current = editor}
                                                    value={FormData?.clientLetterOfIntroductionAccessReason}
                                                    onEditorChange={(e)=>{ setFormData({...FormData, ['clientLetterOfIntroductionAccessReason']: compulsoryAEditorRef.current.getContent() }) }}
                                                    onFocus={(e)=>{letter_of_introduction_onFocus()}}
                                                    onBlur={(e)=>{letter_of_introduction_onBlur()}}
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
                                                /> */}
                                                <br />
                                            </div>
                                            <br />
                                            <br />
                                            <div className='row'>
                                                <div className="col-6 roa-label">
                                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided authority to access information.</label>
                                                </div>

                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-2">
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientLetterOfIntroductionAccess == 1 ? true : false } onChange={ e => onChange(e) } type="radio" value="1" id="provided_identity_radio_btn" name="clientLetterOfIntroductionAccess" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    Yes
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-2">
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientLetterOfIntroductionAccess == 0 ? true : false } onChange={ e => onChange(e) } type="radio" value="0" id="provided_identity_radio_btn" name="clientLetterOfIntroductionAccess" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    letterOfIntroductionAccessVisibility ?
                                                        <>
                                                            <div id="authority_access_instructions" className="hidden_class">
                                                                <p>If no, motivate</p>
                                                            </div>
                                                        </> :
                                                        null
                                                }
                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.clientLetterOfIntroductionAccessReason }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['clientLetterOfIntroductionAccessReason']: value }) } }
                                                        onFocus={ (e) => { setletterOfIntroductionAccessVisibility(true) } }
                                                        onBlur={ (e) => { setletterOfIntroductionAccessVisibility(false) } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here

                                                        } }
                                                        placeholder="If no, motivate"
                                                    />
                                                </div>
                                                <br />
                                                <br />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
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
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientFica == 1 ? true : false } onChange={ e => onChange(e) } type="radio" value="1" id="provided_identity_radio_btn" name="clientFica" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    Yes
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-2">
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientFica == 0 ? true : false } onChange={ e => onChange(e) } type="radio" value="0" id="provided_identity_radio_btn" name="clientFica" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    FicaVisibility ?
                                                        <>
                                                            <div id="provided_identity_instructions" className="hidden_class">
                                                                <p>If no, motivate</p>
                                                            </div>
                                                        </> :
                                                        null
                                                }
                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.clientFicaReason }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['clientFicaReason']: value }) } }
                                                        onFocus={ (e) => { fica_onFocus() } }
                                                        onBlur={ (e) => { fica_onBlur() } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here

                                                        } }
                                                        placeholder="If no, motivate"
                                                    />
                                                </div>
                                                <br />
                                                <br />
                                                <br />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <div className='row'>
                                                <div className='roa-font'>
                                                    <b>3. Replacements</b>
                                                </div>
                                                <div className="col-6 roa-label">
                                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Does/Do the product(s) taken replace an existing product(s)?</label>
                                                </div>

                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-2">
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientReplacement == 1 ? true : false } onChange={ e => onChange(e) } type="radio" value="1" id="provided_identity_radio_btn" name="clientReplacement" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    Yes
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-2">
                                                                <input className="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData?.clientReplacement == 0 ? true : false } onChange={ e => onChange(e) } type="radio" value="0" id="provided_identity_radio_btn" name="clientReplacement" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    ReplacementVisibility ?
                                                        <>
                                                            <div id="provided_identity_instructions" className="hidden_class">
                                                                <p>If no, motivate</p>
                                                            </div>
                                                        </> :
                                                        null
                                                }
                                                {/* <textarea  id="provided_identity" required={FormData['clientReplacement'] === 0 ? true : false} value={FormData['clientReplacementReason']}  maxLength={256} name="clientReplacementReason" onChange={(e) => {onChange(e)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea> */ }
                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.clientReplacementReason }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['clientReplacementReason']: value }) } }
                                                        onFocus={ (e) => { setReplacementVisibility(true); onFieldBlur(e) } }
                                                        onBlur={ (e) => { setReplacementVisibility(false); onFieldBlur(e) } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here

                                                        } }
                                                        placeholder="If no, motivate"
                                                    />
                                                </div>
                                                <br />
                                                <br />
                                                <br />
                                            </div>
                                            <br />
                                            <br />
                                            <div className='text-center'>
                                                <b>SECTION B</b>
                                            </div>
                                            <br />
                                            <div className='row'>
                                                <div className='roa-font'>
                                                    <b>Background information</b>
                                                </div>
                                                <div className="col-6 roa-label">
                                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Your personal circumstances that formed the basis for my recommendation</label>
                                                </div>
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
                                                        </> :
                                                        null
                                                }
                                                <br />
                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.clientBackgroundInfo }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['clientBackgroundInfo']: value }) } }
                                                        onFocus={ (e) => { backgroundInfo_onFocus() } }
                                                        onBlur={ (e) => { backgroundInfo_onBlur() } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here
                                                        } }
                                                        placeholder={
                                                            `                       Provide a detailed description of the client’s:
                                                            •	current personal circumstances,
                                                            •	needs that have been identified, 
                                                            •	and relevant information 
                                                        that formed the basis for the financial solution recommended`}
                                                    />
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                            <br />


                                            {/* <SectionACD user={user} FormData={FormData} setFormData={setFormData} onUpdate={()=>{updateROAForm(FormData)}} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} compulsoryAEditorRef={compulsoryAEditorRef} /> */ }
                                            {/* <SectionAAInfo user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} compulsoryAEditorRef={compulsoryAEditorRef} /> */ }
                                            {/* <SectionAFICA user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} FICAEditorRef={FICAEditorRef} /> */ }
                                            {/* <SectionAReplacements user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} FICAEditorRef={FICAEditorRef} /> */ }
                                            {/* <SectionB user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} prevStep={prevStep} FICAEditorRef={FICAEditorRef} /> */ }
                                            <hr />
                                            <button className='btn btn-primary btn-sfp w-100' type="submit">Update Form <span><FontAwesomeIcon width={ "20px" } icon={ faCheck } /></span></button>

                                        </div>
                                        <div className='col-lg-1'>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </EditROALayout>
            </Layout>
        </div>
    )
}

export default EditROA