import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '../../../../../../hocs/Layout'
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../../../../hocs/Loader'
import EditROALayout from '../../../../../../hocs/EditROALayout'
import { Editor } from '@tinymce/tinymce-react'
import dynamic from "next/dynamic";

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Alert from '../../../../../../components/Alert'
import DangerAlert from '../../../../../../components/DangerAlert'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Medical = () => {

    // Quill JS

    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState(false)
    const [ErrorVisibility, setErrorVisibility] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState("")

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


    // 

    const [FormData, setFormData] = useState({

        advisorId: user?.id,
        formId: formId,

        MSA_ClientName: "",
        MSA_ClientIdNumber: "",
        MSA_ClientAddress: "",
        MSA_ClientEmail: "",
        MSA_ClientPhone: "",
        MSA_ClientDate: "",

        MSA_Name: "",
        MSA_MaritalStatus: "",
        MSA_Gender: "",
        MSA_Occupation: "",
        MSA_Income: "",
        MSA_Subsidy: "",
        MSA_Dependant: "",
        MSA_Spouse: "",
        MSA_AdultDependant: "",
        MSA_ChronicM: "",
        MSA_ChronicS: "",
        MSA_ChronicAD: "",
        MSA_ChronicC: "",
        MSA_ChronicOC: "",
        MSA_PFromDate: "",
        MSA_PTODate: "",

        BackInfo: "",

        SNA_Needs1: 2,
        SNA_Comments1: "",
        SNA_Needs2: 2,
        SNA_Comments2: "",
        SNA_Needs3: 2,
        SNA_Comments3: "",
        SNA_Needs4: 2,
        SNA_Comments4: "",
        SNA_Needs5: 2,
        SNA_Comments5: "",
        SNA_Needs6: 2,
        SNA_Comments6: "",
        SNA_Needs7: 2,
        SNA_Comments7: "",
        SNA_Needs8: 2,
        SNA_Comments8: "",
        SNA_Needs9: 2,
        SNA_Comments9: "",
        SNA_Other: "",
        SNA_Needs10: 2,
        SNA_Comments10: "",

        CoMAB_Current1: "",
        CoMAB_Replaced1: "",
        CoMAB_Current2: "",
        CoMAB_Replaced2: "",
        CoMAB_Current3: "",
        CoMAB_Replaced3: "",
        CoMAB_Current4: "",
        CoMAB_Replaced4: "",
        CoMAB_Current5: "",
        CoMAB_Replaced5: "",
        CoMAB_Current6: "",
        CoMAB_Replaced6: "",
        CoMAB_Current7: "",
        CoMAB_Replaced7: "",
        CoMAB_Current8: "",
        CoMAB_Replaced8: "",
        CoMAB_Current9: "",
        CoMAB_Replaced9: "",
        CoMAB_Current10: "",
        CoMAB_Replaced10: "",
        CoMAB_Current11: "",
        CoMAB_Replaced11: "",
        CoMAB_Current12: "",
        CoMAB_Replaced12: "",

        SectionD_SnF: "",
        SectionE_PMB: "",

        SectionF_NotAccepted: "",
        SectionF_Reasons: "",
        SectionF_Consequences: 2,
        SectionF_Fee: "",
        SectionF_Comments: "",
        SectionF_Date: "",
        SectionF_ClientName: "",
    })


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
                `/api/roa/form/medical`,
                Body,
                config
            )
            setFormData(response?.data?.data?.medical)
            setFormStatus(response?.data?.data?.form_status)


        } catch (error) {

        }
        setLoaded(false)
    }

    const updateForm = async () => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId,
            medical: FormData,
        })
        try {
            await axios.post(
                `/api/roa/form/medical/update`,
                Body,
                config
            ).then((response) => {

                // Swal.fire({
                //     type: 'success',
                //     title: 'Success',
                //     text: 'Assurance Form Updated Successfully.',
                //     position: 'bottom-end',
                //     showConfirmButton: false,
                //     backdrop: "None",
                //     color: "#fff",
                //     background: "#00788B",
                //     timer: 5000
                // })
                setSuccessMessage("Medical form is successfully updated")
                setSuccessMessageVisibility(true)
                setTimeout(() => {
                    setSuccessMessageVisibility(false)
                }, 5000)
            })

        } catch (error) {
            setErrorMessage("Something went wrong, don't proceed furthur. Contact Admin right away.")
            setErrorVisibility(true)
            setTimeout(() => {
                setErrorVisibility(false)
            }, 5000)
        }
        setLoaded(false)
    }


    const onFieldBlur = (e) => {
        FormStatus == 0 ? updateForm() : Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })

    }

    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)


    function backgroundInfo_onFocus() {
        setbackgroundInfoVisibility(true)
    }
    function backgroundInfo_onBlur() {
        setbackgroundInfoVisibility(false)
    }


    useEffect(() => {
        LoadData(formId)
    }, [])

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
                        <div className='inital-card-header text-center'>
                            <b>Medical</b>
                        </div>
                        {
                            SuccessMessageVisibility ?
                                <Alert SuccessMessage={ SuccessMessage } />
                                :
                                <></>
                        }{
                            ErrorVisibility ?
                                <DangerAlert SuccessMessage={ ErrorMessage } />
                                :
                                <></>
                        }
                        <br />
                        <form className='inital-card-header mx-5' onSubmit={ e => onSubmit(e) }>
                            <div className="row roa-label">

                                <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-6">
                                            <label className="col-form-label"><b>Client name:</b></label>
                                        </div>
                                        <div className="col-6">
                                            <input disabled spellCheck="true" id="MSA_ClientName" name='MSA_ClientName' value={ FormData['MSA_ClientName'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Client Name" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-6">
                                            <label className="col-form-label"><b>ID Number:</b></label>
                                        </div>
                                        <div className="col-6">
                                            <input disabled spellCheck="true" id="MSA_ClientIdNumber" name='MSA_ClientIdNumber' value={ FormData['MSA_ClientIdNumber'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="ID# of client" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-6">
                                            <label className="col-form-label"><b>Address:</b></label>
                                        </div>
                                        <div className="col-6">
                                            <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ClientAddress" name='MSA_ClientAddress' value={ FormData['MSA_ClientAddress'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Address" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-6">
                                            <label className="col-form-label"><b>Email:</b></label>
                                        </div>
                                        <div className="col-6">
                                            <input disabled spellCheck="true" id="MSA_ClientEmail" name='MSA_ClientEmail' value={ FormData['MSA_ClientEmail'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Email Address" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-6">
                                            <label className="col-form-label"><b>Phone:</b></label>
                                        </div>
                                        <div className="col-6">
                                            <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ClientPhone" name='MSA_ClientPhone' value={ FormData['MSA_ClientPhone'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Contact Number" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-6">
                                            <label className="col-form-label"><b>Financial advisor:</b></label>
                                        </div>
                                        <div className="col-6">
                                            <input disabled spellCheck="true" value={ `${user?.full_name}` } className="form-control" placeholder="Primary intermediary's name" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-6">
                                            <label className="col-form-label"><b>Date:</b></label>
                                        </div>
                                        <div className="col-6">
                                            <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ClientDate" name='MSA_ClientDate' value={ FormData['MSA_ClientDate'] } onChange={ (e) => { onChange(e) } } type="date" className="form-control" placeholder="Primary intermediary's name" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <p className='roa-label'>
                                In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP)
                                processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to
                                SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on
                                <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
                            </p>
                            {/* Section A */ }
                            <div id="sectionA">
                                <b>Section A</b>
                                <p className='roa-font '><strong>Medical Schemes Analysis</strong></p>
                                <div className="row roa-label">

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Name and surname:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_Name" name='MSA_Name' value={ FormData['MSA_Name'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Marital status:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_MaritalStatus" name='MSA_MaritalStatus' value={ FormData['MSA_MaritalStatus'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Gender:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_Gender" name='MSA_Gender' value={ FormData['MSA_Gender'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Occupation:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_Occupation" name='MSA_Occupation' value={ FormData['MSA_Occupation'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Income per month(if income plan is selected):</b></label>
                                            </div>
                                            <div className="col-6">
                                                <div className='input-group'>
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_Income" name='MSA_Income' value={ FormData['MSA_Income'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="0,00" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Subsidy:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <div className='input-group'>
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_Subsidy" name='MSA_Subsidy' value={ FormData['MSA_Subsidy'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="0,00" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Number of Dependants:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_Dependant" name='MSA_Dependant' value={ FormData['MSA_Dependant'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="# of Dependants" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Spouse:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_Spouse" name='MSA_Spouse' value={ FormData['MSA_Spouse'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Enter name of spouse" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Other Adult Dependents (Parents, Guardians, Legal dependents):</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_AdultDependant" name='MSA_AdultDependant' value={ FormData['MSA_AdultDependant'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="List name of other adult dependents" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Chronic conditions(Member):</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ChronicM" name='MSA_ChronicM' value={ FormData['MSA_ChronicM'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="List of chronic conditions" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Chronic conditions(Spouse):</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ChronicS" name='MSA_ChronicS' value={ FormData['MSA_ChronicS'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="List of chronic conditions of spouse" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Chronic conditions(Adult Dependents):</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ChronicAD" name='MSA_ChronicAD' value={ FormData['MSA_ChronicAD'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="List of chronic conditions for adult dependents" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Chronic conditions(Children):</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ChronicC" name='MSA_ChronicC' value={ FormData['MSA_ChronicC'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="List of chronic conditions for children" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Other medical pre existing conditions:</b></label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="MSA_ChronicOC" name='MSA_ChronicOC' value={ FormData['MSA_ChronicOC'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label"><b>Period that you have been part of your previous Medical Aid:</b></label>
                                            </div>
                                            <div className="col-1">
                                                <label className="col-form-label">From:</label>
                                            </div>
                                            <div className="col-2">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" type="date" id="MSA_PFromDate" name='MSA_PFromDate' value={ FormData['MSA_PFromDate'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                            <div className="col-1">
                                                <label className="col-form-label">To:</label>
                                            </div>
                                            <div className="col-2">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" type="date" id="MSA_PTODate" name='MSA_PTODate' value={ FormData['MSA_PTODate'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                {/* Section B */ }
                                <b>Section B</b>
                                <div id="sectionB" className='roa-label'>
                                    <p className='roa-font'>
                                        <b>
                                            Background Information
                                        </b>
                                    </p>
                                    <p>Your personal circumstances that formed the basis for my recommendation</p>
                                </div>
                                <br />
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
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.BackInfo }
                                        onChange={ (value) => { setFormData({ ...FormData, ['BackInfo']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Provide a detailed description of the client’s:
                                                •	current personal circumstances,
                                                •	needs that have been identified, 
                                                •	and relevant information 
                                            that formed the basis for the financial solution recommended`}
                                    />
                                </div>
                                <br />
                                <br />
                                <hr />
                                <b>Summary Needs Analysis</b>
                                <div className="row roa-label">

                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Need</b></label>
                                            </div>
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Need Identified</b></label>
                                            </div>
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Comments</b></label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Hospital cover</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs1"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs1" name="SNA_Needs1" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs1"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs1" name="SNA_Needs1" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments1" name='SNA_Comments1' value={ FormData['SNA_Comments1'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Day to Day Benefits</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs2"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs2" name="SNA_Needs2" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs2"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs2" name="SNA_Needs2" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments2" name='SNA_Comments2' value={ FormData['SNA_Comments2'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Threshhold Benefits</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs3"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs3" name="SNA_Needs3" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs3"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs3" name="SNA_Needs3" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments3" name='SNA_Comments3' value={ FormData['SNA_Comments3'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Chronic Benefits</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs4"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs4" name="SNA_Needs4" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs4"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs4" name="SNA_Needs4" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments4" name='SNA_Comments4' value={ FormData['SNA_Comments4'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Savings Account</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs5"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs5" name="SNA_Needs5" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs5"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs5" name="SNA_Needs5" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments5" name='SNA_Comments5' value={ FormData['SNA_Comments5'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Affordable Premium</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs6"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs6" name="SNA_Needs6" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs6"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs6" name="SNA_Needs6" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments6" name='SNA_Comments6' value={ FormData['SNA_Comments6'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Hospital Preference</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs7"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs7" name="SNA_Needs7" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs7"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs7" name="SNA_Needs7" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments7" name='SNA_Comments7' value={ FormData['SNA_Comments7'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>PMB</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs8"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs8" name="SNA_Needs8" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs8"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs8" name="SNA_Needs8" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments8" name='SNA_Comments8' value={ FormData['SNA_Comments8'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Doctor/Specialist/Hospital network</b></label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs9"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs9" name="SNA_Needs9" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs9"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs9" name="SNA_Needs9" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments9" name='SNA_Comments9' value={ FormData['SNA_Comments9'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Other" name='SNA_Other' value={ FormData['SNA_Other'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" style={ { width: "200px" } } />
                                            </div>
                                            <div className="col-4">
                                                <div className="row col-12 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs10"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SNA_Needs10" name="SNA_Needs10" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SNA_Needs10"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SNA_Needs10" name="SNA_Needs10" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SNA_Comments10" name='SNA_Comments10' value={ FormData['SNA_Comments10'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/* Section C */ }
                                <b>Section C</b>
                                <div id="sectionC" className='roa-label'>
                                    <p><b>Summary: Comparison of Medical Aid Benefits</b></p>
                                    <p>(Indicate whether a new medical scheme(s) is recommended or an existing scheme is to be replaced) </p>
                                    <div className="row">

                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Details</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Current Medical Scheme/<br />
                                                        Proposed Medical Scheme<br />
                                                        What are we expecting to be answered here
                                                    </b></label>
                                                </div>
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Replaced Medical Scheme/<br />
                                                        Proposed Medical Scheme
                                                    </b></label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Name:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current1" name='CoMAB_Current1' value={ FormData['CoMAB_Current1'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced1" name='CoMAB_Replaced1' value={ FormData['CoMAB_Replaced1'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Contribution/Premium:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current2" name='CoMAB_Current2' value={ FormData['CoMAB_Current2'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced2" name='CoMAB_Replaced2' value={ FormData['CoMAB_Replaced2'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Benefits:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current3" name='CoMAB_Current3' value={ FormData['CoMAB_Current3'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced3" name='CoMAB_Replaced3' value={ FormData['CoMAB_Replaced3'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Savings Account:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current4" name='CoMAB_Current4' value={ FormData['CoMAB_Current4'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced4" name='CoMAB_Replaced4' value={ FormData['CoMAB_Replaced4'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Chronic Benefits:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current5" name='CoMAB_Current5' value={ FormData['CoMAB_Current5'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced5" name='CoMAB_Replaced5' value={ FormData['CoMAB_Replaced5'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Hospital Cover:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current6" name='CoMAB_Current6' value={ FormData['CoMAB_Current6'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced6" name='CoMAB_Replaced6' value={ FormData['CoMAB_Replaced6'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Limits on cover:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current7" name='CoMAB_Current7' value={ FormData['CoMAB_Current7'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced7" name='CoMAB_Replaced7' value={ FormData['CoMAB_Replaced7'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>General Waiting Period:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current8" name='CoMAB_Current8' value={ FormData['CoMAB_Current8'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced8" name='CoMAB_Replaced8' value={ FormData['CoMAB_Replaced8'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Condition Specific Waiting Period:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current9" name='CoMAB_Current9' value={ FormData['CoMAB_Current9'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced9" name='CoMAB_Replaced9' value={ FormData['CoMAB_Replaced9'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Legislated Prescribed Minimum Benefits:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current10" name='CoMAB_Current10' value={ FormData['CoMAB_Current10'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced10" name='CoMAB_Replaced10' value={ FormData['CoMAB_Replaced10'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Later Joiner Penalty:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current11" name='CoMAB_Current11' value={ FormData['CoMAB_Current11'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced11" name='CoMAB_Replaced11' value={ FormData['CoMAB_Replaced11'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <label className="col-form-label"><b>Reward/Loyalty Programme:</b></label>
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Current12" name='CoMAB_Current12' value={ FormData['CoMAB_Current12'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="CoMAB_Replaced12" name='CoMAB_Replaced12' value={ FormData['CoMAB_Replaced12'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                {/* Section D */ }
                                <b>Section D</b>
                                <div id="sectionD" className='roa-label'>
                                    <p><b>Initial recommendation/advice & motivation</b></p>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-12">
                                            <label className="col-form-label"><b>Scheme and Fund recommended and/or selected by you:</b></label>
                                        </div>
                                        <div className="col-12">
                                            {/* <textarea maxLength={1000} spellCheck="true"  id="SectionD_SnF" name='SectionD_SnF' value={FormData['SectionD_SnF']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Motivation for recommendations – State why the product purchased will suit the client"  aria-describedby="" style={{height:"150px"}}/> */ }
                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.SectionD_SnF }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['SectionD_SnF']: value }) } }
                                                    // onBlur={(e)=>{onFieldBlur(e)}}
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder={ `Motivation for recommendations – State why the product purchased will suit the client` }
                                                />
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                                <hr />
                                {/* Section E */ }
                                <b>Section E</b>
                                <div id="sectionE" className='roa-label'>
                                    <p><b>Important Information Highlighted To You</b></p>
                                    <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                        <ReactQuill
                                            theme="snow" // Specify the theme ('snow' or 'bubble')
                                            value={ FormData?.SectionE_PMB }
                                            onChange={ (value) => { setFormData({ ...FormData, ['SectionE_PMB']: value }) } }
                                            // onBlur={(e)=>{onFieldBlur(e)}}
                                            modules={ modules }
                                            formats={ formats }
                                            style={ {
                                                height: '300px', // Set the desired height here
                                            } }
                                            placeholder={ `PMB, waiting periods, exclusions, late joiner penalties, tax deductibility, consequences of replacement, etc.` }
                                        />
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <hr />
                                {/* Section F */ }
                                <b>Section F</b>
                                <div id="sectionF" className='roa-label'>
                                    <p><b>Financial Adviser{ `'` }s Declaration</b></p>
                                    <div className="row">

                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-6">
                                                    <label className="col-form-label">You have elected not to accept the following product recommendations:</label>
                                                </div>
                                                <div className="col-6">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SectionF_NotAccepted" name='SectionF_NotAccepted' value={ FormData['SectionF_NotAccepted'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-6">
                                                    <label className="col-form-label">For the following reasons:</label>
                                                </div>
                                                <div className="col-6">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SectionF_Reasons" name='SectionF_Reasons' value={ FormData['SectionF_Reasons'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-6">
                                                    <label className="col-form-label">The consequences thereof have been clearly explained to you:</label>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row col-6 align-items-center">
                                                        <div className="col-3">
                                                            <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SectionF_Consequences"] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="SectionF_Consequences" name="SectionF_Consequences" />
                                                        </div>
                                                        <div className="col-3">
                                                            <label className="form-check-label"  >
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="col-3">
                                                            <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData["SectionF_Consequences"] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="SectionF_Consequences" name="SectionF_Consequences" />
                                                        </div>
                                                        <div className="col-3">
                                                            <label className="form-check-label"  >
                                                                No
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-6">
                                                    <label className="col-form-label">Fees and/or commission:</label>
                                                </div>
                                                <div className="col-6">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SectionF_Fee" name='SectionF_Fee' value={ FormData['SectionF_Fee'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.SectionF_Comments }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['SectionF_Comments']: value }) } }
                                                    // onBlur={(e)=>{onFieldBlur(e)}}
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder={ `Click here to enter comments.` }
                                                />
                                            </div>
                                            <br />
                                            <br />
                                        </div>


                                        <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-4">
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SectionF_Date" name='SectionF_Date' value={ FormData['SectionF_Date'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Sign here" aria-describedby="" />
                                                </div>
                                                <div className="col-4">
                                                    <div className='form-floating mb-3'>
                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SectionF_Date" name='SectionF_Date' value={ FormData['SectionF_Date'] } onChange={ (e) => { onChange(e) } } type="date" className="form-control" placeholder="Click here to enter text" aria-describedby="" />
                                                        <label className="col-form-label">Date:</label>

                                                    </div>
                                                </div>
                                                <div className='col-4'>

                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="SectionF_ClientName" name='SectionF_ClientName' value={ FormData['SectionF_ClientName'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Client Name" aria-describedby="" />
                                                </div>
                                            </div>
                                        </div>







                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </EditROALayout >
            </Layout >
        </div >
    )
}

export default Medical