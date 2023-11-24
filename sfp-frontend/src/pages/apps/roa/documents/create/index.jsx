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
import ProductServiceRisk from './productServiceRisk'
import TransactionRisk from './transactionRisk'
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
    
    const [errorData, setErrorData] = useState({
        status: "",
        message: "",
        errors: []
    })
    // console.log(localStorage.getItem('access'))
    const emailValidation = () =>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(FormData['clientEmail']) === false){
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
    const createRecordOfAdviceForm = async(formData) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT `
            }
        }
        const Body = JSON.stringify(formData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addformdata/`, Body ,config)
            setFormData(response.data['formData'])
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            if (error.response.status === 401){
                setSuccessMessage("Login time out, You will be logged out in 5 seconds")
                setSuccessMessageVisibility("block")
                setTimeout(() => {
                  setSuccessMessageVisibility("none")
                  LogOut()
                }, 5000)
              }
            setErrorData({
                status: error.response.status,
                message: error.response.statusText,
                errors: error.response.errors
            })
            setSubmissionErrorVisibilty("block")
            setTimeout(() => {
                setSubmissionErrorVisibilty("none")
            }, 5000)
        }
    }

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
            // console.log(response.data['code'])
            // setFormData(response.data['Data'])
            
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
    
    const backgroundEditorRef = useRef(null);
    const compulsoryAEditorRef = useRef(null);
    const compulsoryBEditorRef = useRef(null);
    const FICAEditorRef = useRef(null);
    


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
                                <p className='compliance-inital-card-header'>Create new Record of Advice Form</p>
                            </div>
                            <form onSubmit={e => onSubmit(e)}>
                                <br/>
                                <div className={'inital-card-header mx-5'}>     
                                    <div className='row'>
                                        <div className='col-lg-1'>   
                                        </div> 
                                        <div className='col-lg-10'>   
                                            <hr/>
                                            <div className='row'>
                                                <div className='col-lg-2'>
                                                    <button type='button'
                                                        className={step === 0 ? "btn btn-primary btn-sfp w-100" : "btn btn-outline-primary btn-outline-sfp w-100"}
                                                        onClick={()=>{setStep(0)}}
                                                    >Inital Information</button>
                                                </div>
                                                <div className='col-lg-2'>
                                                    <button type='button'
                                                        className={step === 1 ? "btn btn-primary btn-sfp w-100" : "btn btn-outline-primary btn-outline-sfp w-100"}
                                                        onClick={()=>{setStep(1)}}
                                                    >Section A Part 1</button>
                                                </div>
                                                <div className='col-lg-2'>
                                                    <button type='button'
                                                        className={step === 2 ? "btn btn-primary btn-sfp w-100" : "btn btn-outline-primary btn-outline-sfp w-100"}
                                                        onClick={()=>{setStep(2)}}
                                                    >Section A: Part 2</button>
                                                </div>
                                                <div className='col-lg-2'>
                                                    <button type='button'
                                                        className={step === 3 ? "btn btn-primary btn-sfp w-100" : "btn btn-outline-primary btn-outline-sfp w-100"}
                                                        onClick={()=>{setStep(3)}}
                                                    >Replacements</button>
                                                </div>
                                                <div className='col-lg-2'>
                                                    <button type='button'
                                                        className={step === 4 ? "btn btn-primary btn-sfp w-100" : "btn btn-outline-primary btn-outline-sfp w-100"}
                                                        onClick={()=>{setStep(4)}}
                                                    >FICA</button>
                                                </div>
                                                <div className='col-lg-2'>
                                                    <button type='button'
                                                        className={step === 5 ? "btn btn-primary btn-sfp w-100" : "btn btn-outline-primary btn-outline-sfp w-100"}
                                                        onClick={()=>{setStep(5)}}
                                                    >Section B</button>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div> 
                                        <div className='col-lg-1'>   
                                        </div> 
                                    </div> 
                                    {step === 0 && <InitialInfo user={user} FormData={FormData} onChange={onChange} nextStep={nextStep} />}
                                    <div className='row'>
                                        <div className='col-lg-1'>   
                                        </div> 
                                        <div className='col-lg-10'> 
                                            {
                                                step != 0 ?
                                                <>
                                                    <div className='row'>
                                                        <div className="col-lg-6 mb-3">
                                                            <div className='row'>
                                                                <div className='col-4'>
                                                                    <label className="form-label roa-label"><strong>Client Name:</strong></label>
                                                                </div>
                                                                <div className='col-8'>
                                                                    <label className="form-label roa-label">{FormData?.clientName}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 mb-3">
                                                            <div className='row'>
                                                                <div className='col-4'>
                                                                    <label className="form-label roa-label"><strong>Client ID:</strong></label>
                                                                </div>
                                                                <div className='col-8'>
                                                                    <label className="form-label roa-label">{FormData?.clientIdNumber}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 mb-3">
                                                            <div className='row'>
                                                                <div className='col-4'>
                                                                    <label className="form-label roa-label"><strong>Client Email:</strong></label>
                                                                </div>
                                                                <div className='col-8'>
                                                                    <label className="form-label roa-label">{FormData?.clientEmail}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 mb-3">
                                                            <div className='row'>
                                                                <div className='col-4'>
                                                                    <label className="form-label roa-label"><strong>Client Phone:</strong></label>
                                                                </div>
                                                                <div className='col-8'>
                                                                    <label className="form-label roa-label">{FormData?.clientPhoneNumber}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </>
                                                :<></>
                                            }  
                                        </div> 
                                        <div className='col-lg-1'>   
                                        </div> 
                                    </div> 
                                    <div className='row'>
                                        <div className='col-lg-1'>   
                                        </div> 
                                        <div className='col-lg-10'> 
                                            {step === 1 && <SectionACD user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} compulsoryAEditorRef={compulsoryAEditorRef} />}
                                            {step === 2 && <SectionAAInfo user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} compulsoryAEditorRef={compulsoryAEditorRef} />}
                                            {step === 3 && <SectionAFICA user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} FICAEditorRef={FICAEditorRef} />}
                                            {step === 4 && <SectionAReplacements user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} nextStep={nextStep}  prevStep={prevStep} FICAEditorRef={FICAEditorRef} />}
                                            {step === 5 && <SectionB user={user} FormData={FormData} setFormData={setFormData} onChange={onChange} prevStep={prevStep} FICAEditorRef={FICAEditorRef} />}
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