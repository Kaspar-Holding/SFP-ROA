import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '../../../../../hocs/Layout'
import CreateDocumentLayout from '../../../../../hocs/Compliance/CreateDocumentLayout'
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

const CreateROA = () => {
    
    const router = useRouter()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const user = useSelector(state=>state.auth.user)
    
    const Date_Var = new Date()
    const CurrentData = Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + (Date_Var.getDate())).slice(-2)
    const [FormData, setFormData] = useState({
        clientName :  "",
        clientIdNumber : "",
        clientEmail : "",
        clientAddress : "",
        clientPhoneNumber : "",
        clientDateOfBirth : Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + (Date_Var.getDate())).slice(-2),
        clientLetterOfIntroduction : 2,
        clientLetterOfIntroductionReason : "",
        clientLetterOfIntroductionAccess : 2,
        clientLetterOfIntroductionAccessReason : "",
        clientFica : 2,
        clientFicaReason : "",
        clientReplacement : 2,
        clientReplacementReason : "",
        clientBackgroundInfo : ""
    })
    // console.log(FormData)
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [FicaVisibility, setFicaVisibility] = useState(false)
    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)
    
    const [errorData, setErrorData] = useState({
        status: "",
        message: "",
        errors: []
    })
    // console.log(localStorage.getItem('access'))
    const emailValidation = () =>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(FormData?.clientEmail) === false){
          setErrorData({
            status: "Email Validity",
            message: "Email is not valid, Please enter a valid email",
            errors: ""
          })
          setSubmissionErrorVisibilty("block")
          setTimeout(() => {
            setSubmissionErrorVisibilty("none")
          }, 5000)
          return false
        }
        return true
    }
    const [SubmissionErrorVisibilty, setSubmissionErrorVisibilty] = useState("none")
    
    const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
   
    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
    const createROAForm= async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`/api/roa/create/`, Body ,config)
            
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `${response?.data?.success}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
            console.log(response?.data?.data?.id)
            router.push({
                pathname: "/apps/roa/documents/complete",
                query: {dId : response?.data?.data?.id}
            })
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            let errors = error?.response?.data?.error?.errors
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: Object.entries(errors).map( ([key, value]) => `${(key[0].toUpperCase() + key.slice(1)).replace('_',' ')}: ${value}` ),
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
    }
    
    const onSubmit = e => {
        e.preventDefault()
        if (FormData?.clientName === "" || FormData?.clientIdNumber === "" || FormData?.clientEmail === "" || FormData?.clientPhoneNumber === "") {
            if (FormData?.clientName === "" && FormData?.clientIdNumber === "" && FormData?.clientEmail === "" && FormData?.clientPhoneNumber === "") {
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Error",
                    html: "Please fill all the fields in initial information section",
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
                if (step != 0 ){ 
                    setStep(0)
                }
            }else {
                if (FormData?.clientName === ""){
                    Swal.fire({
                        position: "bottom-end",
                        type: "success",
                        title: "Error",
                        html: "Please fill client name field in initial information section",
                        showConfirmButton: !1,
                        timer: 5000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                    if (step != 0 ){ 
                        setStep(0)
                    }
                } if (FormData?.clientIdNumber === ""){
                    Swal.fire({
                        position: "bottom-end",
                        type: "success",
                        title: "Error",
                        html: "Please fill client id number field in initial information section",
                        showConfirmButton: !1,
                        timer: 5000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                    if (step != 0 ){ 
                        setStep(0)
                    }
                } if (FormData?.clientEmail === ""){
                    Swal.fire({
                        position: "bottom-end",
                        type: "success",
                        title: "Error",
                        html: "Please fill client email field in initial information section",
                        showConfirmButton: !1,
                        timer: 5000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                    if (step != 0 ){ 
                        setStep(0)
                    }
                } if (FormData?.clientPhoneNumber === ""){
                    Swal.fire({
                        position: "bottom-end",
                        type: "success",
                        title: "Error",
                        html: "Please fill client phone number field in initial information section",
                        showConfirmButton: !1,
                        timer: 5000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                    if (step != 0 ){ 
                        setStep(0)
                    }
                }
            }

        } else {

            if (emailValidation()){
                createROAForm(FormData)
            }else{
                if (step != 0 ){ 
                    setStep(0)
                }
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Error",
                    html: "Please fill correct email field in initial information section",
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            
            }
        }
    }
    
    
    const [tableData, setTableData] = useState([
        {
            id: 1,
            productToSell1 : "",
            productToSell2 : "",
            intermediaryCode1 : "",
            intermediaryCode2 : "",
        }
    ]);

    const addRow = () => {
        const newId = tableData.length + 1;
        const newRow = {
            id: newId,
            productToSell1 : "",
            productToSell2 : "",
            intermediaryCode1 : "",
            intermediaryCode2 : "",
        }
        ;
        setTableData([...tableData, newRow]);
    };

    const removeRow = (id) => {
        const updatedData = tableData.filter((row) => row.id !== id);
        setTableData(updatedData);
    };

    const handleContentChange = (id, fieldName, content) => {
        const updatedData = tableData.map((row) =>
          row.id === id ? { ...row, [fieldName]:content } : row
        );
        setTableData(updatedData);
    };
    


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
                title={"Create ROA Document"}
                content={"Create ROA Document"}
            >
                <CreateDocumentLayout
                    appTitle={'Create ROA Document'}
                    pageTitle={'Create ROA Document'}
                    appName={'ROA'}
                    app={'roa'}
                    dId={undefined}
                >
                    <div className='compliance-inital-card'>
                        <div className='position-relative'>
                            <div className='position-absolute top-0 start-50 translate-middle'>
                                <p className='compliance-inital-card-header'>Disclosure And Consent Document </p>
                            </div>
                            <form onSubmit={e => onSubmit(e)}>
                                <div className={'inital-card-header mx-5'}>     
                                    <div className='row'>
                                        <div className='col-lg-1'>   
                                        </div> 
                                        <div className='col-lg-10'> 
                                            <hr/>
                                            <p className='text-center'>Letter of Introduction</p>
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <p className='roa-font'>Dear Client,</p>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='row'>
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    Existing Client
                                                                </label>
                                                            </div>
                                                            <div className="col-2">
                                                                <input className="form-check-input" checked={FormData?.existingClient == 1 ? true : false}  onChange={e => onChange(e)} type="radio" value="1" id="existingClient_radio_btn" name="existingClient"/>
                                                            </div>
                                                        </div>
                                                        <div className="row col-6 align-items-center">
                                                            <div className="col-6">
                                                                <label className="form-check-label roa-font roa-font" htmlFor="provided_identity_radio_btn" >
                                                                    New Client
                                                                </label>
                                                            </div>
                                                            <div className="col-2">
                                                                <input className="form-check-input" checked={FormData?.existingClient == 0 ? true : false}  onChange={e => onChange(e)} type="radio" value="0" id="existingClient_radio_btn" name="existingClient"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='roa-label'>
                                                Thank you for choosing Succession Financial Planning Advisory Services (Pty) Ltd. (herein referred to as “SFP”) as your service provider of choice. Please be advised that as a contracted intermediary of SFP, a licensed Financial Service Provider (FSP No.: 41158); including any authorised user(s) of SFP, consent is required to access your current/existing financial planning portfolio, which includes your risk and investment policies; as well as any employee benefits; medical and/or short term information, that you may have with any Financial Service Provider (that is: any Long-term insurer, short term insurer, retirement fund, medical aid; and/or other financial institution directly). Access to your financial planning portfolio is to assist you in making an informed decision around your financial planning needs. Further, consent is required to authorise the intermediary of SFP to act as your new intermediary on record to fulfil your financial planning objectives; as well as provide suitable communication related to your financial planning needs.  
                                            </p>
                                            <table className="table table-bordered">
                                                <thead>   
                                                    <tr>
                                                        <td scope="col-3"><p className='text-center roa-table-head'>About SFP</p></td>
                                                        <td scope="col-3"><p className='text-center roa-table-head'>Professional Indemnity Insurance</p></td>
                                                        <td scope="col-3"><p className='text-center roa-table-head'>Confidentiality</p></td>
                                                        <td scope="col-3"><p className='text-center roa-table-head'>Compliance with FAIS</p></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='col-3'>
                                                            <p className='roa-label'>
                                                                SFP is a wholly owned subsidiary of Sanlam Life Insurance Limited and has received more than 30% of its income in the last 12 months from Sanlam. Heinrich Punt is the Responsible Key Individual
                                                            </p>
                                                        </td>
                                                        <td className='col-3'>
                                                            <p className='roa-label'>
                                                            SFP accepts responsibility for the actions of {user?.first_name} {user?.last_name} in the rendering of financial services on behalf of SFP and carries the necessary Professional Indemnity Insurance. 
                                                            </p>                                                            
                                                        </td>
                                                        <td className='col-3'>
                                                            <p className='roa-label'>
                                                                All Information obtained from you will be treated as confidential and will only be disclosed upon your prior written consent or if required in terms of applicable law. <br/> Additionally, refer to compliance with the Protection of Personal Information Act below.
                                                            </p>
                                                        </td>
                                                        <td className='col-3'>
                                                            <p className='roa-label'>
                                                                SFP is monitored by the Compliance Office of Sanlam Life Insurance Limited
                                                            </p>
                                                            {/* Compliance Officer */}
                                                            <div className='row'>
                                                                <div className='col-2'>
                                                                    <p className='roa-label'>
                                                                        <i className='fa fa-user'></i>
                                                                    </p>
                                                                </div>
                                                                <div className='col-10'>
                                                                    <p className='roa-label'>Andrie Bester</p>
                                                                </div>
                                                            </div>
                                                            {/* Location */}
                                                            <div className='row'>
                                                                <div className='col-2'>
                                                                    <p className='roa-label'>
                                                                        <i className='fa fa-location-pin'></i>
                                                                    </p>
                                                                </div>
                                                                <div className='col-10'>
                                                                    <p className='roa-label'>2 Strand Road, Bellville </p>
                                                                </div>
                                                            </div>
                                                            {/* Phone */}
                                                            <div className='row'>
                                                                <div className='col-2'>
                                                                    <p className='roa-label'>
                                                                        <i className='fa fa-phone'></i>
                                                                    </p>
                                                                </div>
                                                                <div className='col-10'>
                                                                    <p className='roa-label'><a href='tel:+27 21 847 1483'>(021) 847 1483</a> (office) </p>
                                                                </div>
                                                            </div>
                                                            {/* Email */}
                                                            <div className='row'>
                                                                <div className='col-2'>
                                                                    <p className='roa-label'>
                                                                        <i className='fa fa-envelope'></i>
                                                                    </p>
                                                                </div>
                                                                <div className='col-10'>
                                                                    <p className='roa-label'><a href='mailto:andrie.bester@sanlam.co.za '>andrie.bester@sanlam.co.za</a> </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* Intermediary Detail – a registered representative contracted by SFP */}
                                            <p className='text-center'>
                                                <strong>Intermediary Detail</strong> – a registered representative contracted by SFP
                                            </p>
                                            {/* Advisor Details */}
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                <i className='fa fa-user'></i>
                                                                <br/>
                                                                Name
                                                            </p>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <p className='roa-label'>
                                                                <i className='fa fa-user' style={{color: "white"}}></i>
                                                                <br/>
                                                                {user?.first_name} {user?.last_name}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                <i className='fa fa-phone'></i>
                                                                <br/>
                                                                Phone
                                                            </p>
                                                        </td>
                                                        <td colSpan={3}>
                                                            <p className='roa-label'>
                                                                <i className='fa fa-user' style={{color: "white"}}></i>
                                                                <br/>
                                                                {user?.first_name} {user?.last_name}
                                                            </p>
                                                        </td>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                <i className='fa fa-building'></i>
                                                                <br/>
                                                                Office
                                                            </p>
                                                        </td>
                                                        <td colSpan={3}>
                                                            <p className='roa-label'>
                                                                <i className='fa fa-user' style={{color: "white"}}></i>
                                                                <br/>
                                                                {user?.first_name} {user?.last_name}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                <i className='fa fa-envelope'></i>
                                                                <br/>
                                                                Email
                                                            </p>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <p className='roa-label'>
                                                                <i className='fa fa-envelope' style={{color: "white"}}></i>
                                                                <br/>
                                                                {user?.email}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                Industry<br/>Experience:
                                                            </p>
                                                        </td>
                                                        <td colSpan={3}>
                                                            <p className='roa-label'>
                                                                5 years
                                                            </p>
                                                        </td>
                                                        <td colSpan={6}>
                                                            <p className='roa-label'>
                                                                In service with SFP as from:
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                Qualtification:
                                                            </p>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <p className='roa-label'>
                                                                5 years
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                Category of<br/>Business Intermediary<br/>is licenced to sell<br/>(reference:<br/>SUB-CATEGORY = SC)
                                                            </p>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Category
                                                                            </span>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Advice
                                                                            </span>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Intermediary
                                                                            </span>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Supervision
                                                                            </span>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Category
                                                                            </span>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Advice
                                                                            </span>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Intermediary
                                                                            </span>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <span className='roa-font'>
                                                                                Supervision
                                                                            </span>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Long-Term<br/>insurance SC<br/>A
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Pension Fund<br/>(excl. Retail)
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Long-Term<br/>insurance SC<br/>B1
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Shares
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Long-Term<br/>insurance SC<br/>B2
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Money Market<br/>Instruments 
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Long-Term<br/>insurance SC<br/>B2-A
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Debentures &<br/>Securitised Debt
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Long-Term<br/>insurance SC<br/>B1-A
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Warrants,<br/>Certificates &<br/>other instruments
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Long-Term<br/>insurance SC<br/>C
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Bonds
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Short-Term<br/>Insurance<br/>Personal<br/>Lines
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Collective<br/>Investment<br/>Schemes 
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Short-Term<br/>Insurance<br/>Commercial<br/>Lines
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Health<br/>Service<br/>Benefits 
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Short-Term<br/>Insurance<br/>Personal<br/>Lines A
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Long-Term<br/>deposits 
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Retail<br/>Pension<br/>Benefits 
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-table-head'>
                                                                                Short-Term<br/>deposits 
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className='roa-label'>
                                                                                ABC
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                Remuneration:
                                                            </p>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <p className='roa-label'>
                                                                The representative of SFP, as mentioned above, is remunerated through the payment commission on business implemented, and, where applicable, service fees that may have expressly been contracted with a client in writing.
                                                                <br/>It is noted that the above-mentioned representative does not hold more than 10% of shares issued by any insurer. 
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <p className='roa-label text-center'>
                                                                Supervision:
                                                            </p>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <p className='roa-label'>
                                                                If a Category or Sub-Category (SC) of business is marked as under supervision –the intermediary is marked for legislated monitoring until the relevant experience is obtained.                                                                  
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* Compliance with the Protection of Personal Information Act (The POPI Act) */}
                                            <p className='text-center'>
                                                Compliance with the Protection of Personal Information Act (The POPI Act)
                                            </p>
                                            <p className='roa-label'>
                                                SFP ensures that all personal information (“PI”) is safely processed and protected from unsolicited access as required by applicable legislation. In order to provide you with financial advice and/or intermediary services within the requirements of the Financial Advisory and Intermediary Service (FAIS) Act and any subordinate legislation, SFP may collect, process, collate, store, analyse and disclose PI for the following purpose: 
                                            </p>
                                            <div className='row'>
                                                <div className='col-4 border-end'>
                                                    <ul className='roa-label'>
                                                        <li>Conducting a Financial Needs Analysis</li>
                                                        <li>Recommendations for potential solutions to financial planning needs</li>
                                                        <li>Ongoing monitoring and reviews</li>
                                                    </ul>
                                                </div>
                                                <div className='col-4 border-end'>
                                                    <ul className='roa-label'>
                                                        <li>Obtaining quotations and supporting applications to product providers, which may include information for underwriting purposes</li>
                                                        <li>Submission of claims</li>
                                                        <li>Statistical analysis; and/or</li>
                                                    </ul>
                                                </div>
                                                <div className='col-4'>
                                                    <ul className='roa-label'>
                                                        <li>Allocating another intermediary in the event of resignation/retirement and/or other valid reason</li>
                                                        <li>Any other purposes related herein <i>(the list may not be regarded as exhaustive)</i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className='roa-label'>
                                                As a result, the information required to fulfil the relevant advice and/or intermediary services is your PI, which includes but is not limited to your personal, family (including information pertaining to a minor, where necessary), financial, credit and health information. The data collected is also processed and stored to meet other legislative obligations such as FICA (Financial Intelligence Centre Act) and the NCA (National Credit Act) requirements, among other regulatory requirements, as and when applicable. It may become necessary to share your personal information within the group and with other service providers where required for any of the purposes listed above. This may further include, but is not limited to, administrative support staff, other intermediaries, legal consultants, financial planning or product specialists, and product providers.  SFP may send your personal information to service providers outside the borders of the Republic of South Africa (where such a country has similar protection laws or has entered into a binding agreement with SFP that ensures effective adherence to the principles for processing of information under the Protection of Personal Information Act No 4 of 2013) for storage or further processing on SFP’s behalf. You have the right to request access to your personal information so collected and to request for your information to be updated and/or corrected (for which you must inform SFP immediately of any changes, failing which the appropriateness of the financial advice may be compromised). Personal information will be retained for as long as necessary to meet the FAIS and FIC Act requirements and other legislation. We may provide you with information about financial products and other services, including text messages, emails, newsletters and the like. If you do not want to receive such information, please let us know in writing to opt out (see below point 4).  For more information, please go to the SFP website: <a href="www.sfpadvice.co.za">www.sfpadvice.co.za</a> 
                                            </p>
                                            {/* Client Information */}
                                            <p className='text-center'>
                                                Client Information <i>(the undersigned)</i>
                                            </p>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <span className='roa-label'>
                                                                Name of client:
                                                            </span>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <input type="text" className="form-control roa-label" id="clientName" name="clientName" value={FormData?.clientName} onChange={(e)=>{onChange(e)}} placeholder="Client Name"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <span className='roa-label'>
                                                                Identity Number:
                                                            </span>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <input type="text" className="form-control roa-label" id="clientIdNumber" name="clientIdNumber" value={FormData?.clientIdNumber} onChange={(e)=>{onChange(e)}} placeholder="Client ID Number"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <span className='roa-label'>
                                                                Phone:
                                                            </span>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <input type="text" className="form-control roa-label" id="clientPhone" name="clientPhone" value={FormData?.clientPhone} onChange={(e)=>{onChange(e)}} placeholder="Client Phone"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <span className='roa-label'>
                                                                Email:
                                                            </span>
                                                        </td>
                                                        <td colSpan={9}>
                                                            <input type="text" className="form-control roa-label" id="clientEmail" name="clientEmail" value={FormData?.clientEmail} onChange={(e)=>{onChange(e)}} placeholder="Client Email"/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <p className='roa-font'>
                                                                Declaration: 
                                                            </p>
                                                            <p className='roa-label'>
                                                                I, the undersigned, hereby acknowledge and accept:
                                                            </p>
                                                        </td>
                                                        <td colSpan={5}>
                                                            <o className='roa-font'>
                                                                Please tick appropriately and sign:
                                                            </o>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <p className='roa-label'>
                                                                1.	The receipt of a copy of {user?.first_name} {user?.last_name} here’s Letter of Introduction; and 
                                                            </p>
                                                        </td>
                                                        <td colSpan={5}>
                                                            <div className='row'>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptYes">
                                                                            Yes
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptYes" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptNo">
                                                                            No
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptNo" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <p className='roa-label'>
                                                                2.	The explanation of SFP Compliance with The POPI Act, and
                                                            </p>
                                                        </td>
                                                        <td colSpan={5}>
                                                            <div className='row'>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptYes">
                                                                            Yes
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptYes" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptNo">
                                                                            No
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptNo" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <p className='roa-label'>
                                                                3.	The purpose for processing my PI and sharing my PI with relevant parties, and
                                                            </p>
                                                        </td>
                                                        <td colSpan={5}>
                                                            <div className='row'>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptYes">
                                                                            Yes
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptYes" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptNo">
                                                                            No
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptNo" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <p className='roa-label'>
                                                                4.	That my information may be used for marketing purposes.
                                                            </p>
                                                        </td>
                                                        <td colSpan={5}>
                                                            <div className='row'>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptYes">
                                                                            Yes
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptYes" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptNo">
                                                                            No
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptNo" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <p className='roa-label'>
                                                                5.	That my PI may be retained for as long as The FAIS and FIC Act requires
                                                            </p>
                                                        </td>
                                                        <td colSpan={5}>
                                                            <div className='row'>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptYes">
                                                                            Yes
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptYes" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-6'>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label roa-font" for="receiptNo">
                                                                            No
                                                                        </label>
                                                                        <input className="form-check-input" type="checkbox" value="" id="receiptNo" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <p className='roa-label'>
                                                                Signature
                                                            </p>
                                                        </td>
                                                        <td colSpan={5}>
                                                            <div className="row g-3 align-items-center">
                                                                <div className="col-3 roa-font">
                                                                    <label for="clientSignatureDate" className="col-form-label">Date</label>
                                                                </div>
                                                                <div className="col-9">
                                                                    <input type="date" id="clientSignatureDate" className="form-control" aria-describedby="passwordHelpInline"/>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {/* Client Consent and Authorisation: */}
                                            <p className='text-center'>
                                                Client Consent and Authorisation:
                                            </p>
                                            <p className='roa-font'>
                                                Part 1: Authorisation to access information 
                                            </p>
                                            <p className='roa-label'>
                                                I, the undersigned, 
                                            </p>
                                            <ul className='roa-label'>
                                                <li>
                                                    hereby confirm that the {user?.first_name} {user?.last_name} is acting in my best interest for the purpose of providing me with financial advice and intermediary services, and I give consent and authorisation to them, and accordingly any authorised user of SFP, to obtain my financial planning information held by any Financial Service Provider, as explained above, or by using the services of The Financial Services Exchange (Pty) Ltd (also known as “Astute”), where applicable. This consent and authorisation include access to information pertaining to any Short-Term Insurer that is in possession of my Short-Term Insurance products or any medical, and gap cover applicable to my financial planning portfolio. 
                                                    <ul className='roa-table-head'>
                                                        <li>
                                                            <div className='row'>
                                                                <div className='col-3'>
                                                                    <p className=''>
                                                                        Policy # and Provider for 
                                                                    </p>
                                                                </div>
                                                                <div className='col-1'>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                        <label class="form-check-label" for="flexCheckDefault">
                                                                            STI
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-1'>
                                                                    or 
                                                                </div>
                                                                <div className='col-2'> 
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                        <label class="form-check-label" for="flexCheckDefault">
                                                                            Health Insurance
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-3'> 
                                                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Policy #" />
                                                                </div>
                                                                
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    hereby authorise any financial institution or employer in possession of information regarding my financial planning portfolio to release that information upon request directly to the intermediary authorised herein, or to the intermediary’s authorised personnel. I further, understand that I may have to sign a specific product provider document for consent thereto
                                                </li>
                                                <li>
                                                    understand that this authorisation is valid indefinitely and I have the right to withdraw this authorisation at any time, in writing:
                                                </li>
                                            </ul>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <p className='roa-label'>
                                                                Client Signature:
                                                            </p>
                                                        </div>
                                                        <div className='col-6'>
                                                            <br/>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <p className='roa-label'>
                                                                Date:
                                                            </p>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className='form-select' type='date' value={FormData?.authorizationDate} name='authorizationDate' onChange={(e)=>{onChange(e)}}/>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <hr/>
                                            {/* Part 2: Appointment as New Official Care Intermediary */}
                                            <p className='roa-font'>
                                                Part 2: Appointment as New Official Care Intermediary
                                            </p>
                                            <p className='roa-label'>
                                                I, the undersigned, 
                                            </p>
                                            <ul className='roa-label'>
                                                <li>
                                                    <p>
                                                        further request the financial institutions with which the above-mentioned intermediary has a sales agreement, to record them as my official care intermediary, unless indicated otherwise below appointed for a specific financial planning need only. I have been fully informed as to the implications and consequences of this letter of appointment.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        agree to the transfer of any new commission and appropriate service fees which may be due during the period of this appointment to the appointed Financial Service Provider (namely: SFP) nominated above in respect of my policy(ies).
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        I understand that I have the right to withdraw this authorisation at any time, in writing.
                                                    </p>
                                                </li>
                                            </ul>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            <p className='text-center roa-table-head'>
                                                                Product Provider<br/>Authorised to sell
                                                            </p>
                                                        </th>
                                                        <th scope="col">
                                                            <p className='text-center roa-table-head'>
                                                                Intermediary Sub-Code
                                                            </p>
                                                        </th>
                                                        <th scope="col">
                                                            <p className='text-center roa-table-head'>
                                                                Product Provider<br/>Authorised to sell
                                                            </p>
                                                        </th>
                                                        <th scope="col">
                                                            <p className='text-center roa-table-head'>
                                                                Intermediary Sub-Code
                                                            </p>
                                                        </th>
                                                        <th scope="col">
                                                            <p className='text-center roa-table-head'>
                                                                Actions
                                                            </p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {tableData.map((row, id) => (
                                                    <tr key={row?.id}>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control roa-label"
                                                                value={row?.productToSell1}
                                                                onChange={(e) => handleContentChange(row.id, "productToSell1", e.target.value)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control roa-label"
                                                                value={row?.intermediaryCode1}
                                                                onChange={(e) => handleContentChange(row.id, "intermediaryCode1", e.target.value)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control roa-label"
                                                                value={row?.productToSell2}
                                                                onChange={(e) => handleContentChange(row.id, "productToSell2", e.target.value)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control roa-label"
                                                                value={row?.intermediaryCode2}
                                                                onChange={(e) => handleContentChange(row.id, "intermediaryCode2", e.target.value)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-danger"
                                                                type='button'
                                                                onClick={() => removeRow(row.id)}
                                                            >
                                                            Remove
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <button className="btn btn-primary btn-sfp" type='button' onClick={addRow}>
                                                Add Product
                                            </button>
                                            <p className='roa-label'>
                                                Specific need for which Intermediary is authorised (i.e., not for entire portfolio):  
                                            </p>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <p className='roa-label'>
                                                                Client Signature:
                                                            </p>
                                                        </div>
                                                        <div className='col-6'>
                                                            <br/>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <p className='roa-label'>
                                                                Date:
                                                            </p>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className='form-select' type='date' value={FormData?.appointmentDate} name='appointmentDate' onChange={(e)=>{onChange(e)}}/>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <hr/>
                                            {/* Complaints Information: */}
                                            <p className='text-center'>
                                                Complaints Information:
                                            </p>
                                            <p className='roa-label'>
                                                Should you feel aggrieved by any advice and/or service provided by SFP and/or the representative on record, you may lodge a complaint at <a href='mailto:complaints@succession.co.za'>complaints@succession.co.za</a> or contact the relevant party below:
                                            </p>
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2}>
                                                            <p className='roa-table-head text-center'>
                                                                Advice complaints
                                                            </p>
                                                        </th>
                                                        <th colSpan={4}>
                                                            <p className='roa-table-head text-center'>
                                                                Service/product complaints
                                                            </p>
                                                        </th>
                                                        <th colSpan={4}>
                                                            <p className='roa-table-head text-center'>
                                                                Retirement Fund complaints
                                                            </p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <p className='roa-font'>
                                                                The FAIS Ombud
                                                            </p>
                                                            <p className='roa-label'>
                                                                Tel: 012 470 9080
                                                                <br/>
                                                                Fax: 012 348 3447
                                                                <br/>
                                                                E-mail: <a href='mailto:info@faisombud.co.za'>info@faisombud.co.za</a>
                                                                <br/>
                                                                Website: <a href='www.faisombud.co.za'>www.faisombud.co.za</a>
                                                            </p>
                                                        </td>
                                                        <td colSpan={2}>
                                                            <p className='roa-font'>
                                                                The Ombudsman for Short-Term Insurance
                                                            </p>
                                                            <p className='roa-label'>
                                                                Tel: 011 726 8900
                                                                <br/>
                                                                Fax: 011 726 5501
                                                                <br/>
                                                                E-mail: <a href='mailto:info@osti.co.za'>info@osti.co.za</a>
                                                                <br/>
                                                                Website: <a href='www.osti.co.za'>www.osti.co.za</a>
                                                            </p>
                                                        </td>
                                                        <td colSpan={2}>
                                                            <p className='roa-font'>
                                                                The Ombudsman for Long-Term Insurance
                                                            </p>
                                                            <p className='roa-label'>
                                                                Tel: 021 657 5000
                                                                <br/>
                                                                Fax: 021 674 0951
                                                                <br/>
                                                                E-mail: <a href='mailto:info@ombud.co.za'>info@ombud.co.za</a>
                                                                <br/>
                                                                Website: <a href='www.ombud.co.za'>www.ombud.co.za</a>
                                                            </p>

                                                        </td>
                                                        <td colSpan={2}>
                                                            <p className='roa-font'>
                                                                The Pension Funds Adjudicator
                                                            </p>
                                                            <p className='roa-label'>
                                                                Tel: 012 346 1738
                                                                <br/>
                                                                Fax: 086 693 7472
                                                                <br/>
                                                                E-mail: <a href='mailto:enquiries@pfa.org.za'>enquiries@pfa.org.za</a>
                                                                <br/>
                                                                Website: <a href='www.pfa.org.za '>www.pfa.org.za </a>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <hr/>
                                            <button className='btn btn-primary btn-sfp w-100' type="submit">Create Form <span><FontAwesomeIcon width={"20px"} icon={faCheck} /></span></button>

                                        </div> 
                                        <div className='col-lg-1'>   
                                        </div> 
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>

                </CreateDocumentLayout>
            </Layout>
        </div>
    )
}

export default CreateROA