import DashboardLayout from '../../../../../hocs/DashboardLayout'
import CompleteDocumentLayout from '../../../../../hocs/Compliance/CompleteDocumentLayout'
import Layout from '../../../../../hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Loader from '../../../../../hocs/Loader'
import { currencyFormatter } from '../../../../../modules/formatter'


const CompleteDocument = () => {
    const router = useRouter()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const dId = router?.query?.dId

    const [Loaded, setLoaded] = useState(false)

    const [Versions, setVersions] = useState([])
    const [CurrentVersion, setCurrentVersion] = useState(0)

    const [DocumentInitalData, setDocumentInitalData] = useState({})

    const [Data, setData] = useState({
        document: dId,

        lump_sum: 0,
        monthly_premium: 0,
        commission: 0,

        fica: 0,
        proof_of_screening: 0,
        dra: 0,
        letter_of_intro: 0,
        authorisation_letter: 0,
        roa_type: 0,
        roa: 0,
        fna: 0,
        application: 0,
        quotation: 0,
        risk_portfolio: 0,
        mandate: 0,
        replacement: 0,
        replacement_type: 0,
        date_of_screening: 0,
        timeously: 0,

        policy_schedule: 0,
        commission_release_form: 0

    })

    const onFormUpdate = (e) => {
        setData({
            ...Data,
            [e.target.name]: e.target.value
        })
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const LoadData = async (documentId) => {
        setLoaded(true)
        const Body = JSON.stringify({
            dId: documentId
        })

        try {
            const response = await axios.post(
                `/api/compliance/gatekeeping`,
                Body,
                config
            )

            setData(response?.data?.data?.data)
            setVersions(response?.data?.data?.versions)
            setCurrentVersion(response?.data?.data?.versions.length)

        } catch (error) {
            console.log(error?.response?.data)
            setData({
                document: dId,

                lump_sum: "",
                monthly_premium: "",
                commission: "",

                fica: 0,
                proof_of_screening: 0,
                dra: 0,
                letter_of_intro: 0,
                authorisation_letter: 0,
                roa_type: 0,
                roa: 0,
                fna: 0,
                application: 0,
                quotation: 0,
                risk_portfolio: 0,
                mandate: 0,
                replacement: 0,
                replacement_type: 0,

                policy_schedule: 0,
                commission_release_form: 0
            })

        }
        setLoaded(false)
    }

    const LoadDocumentData = async (documentId) => {
        setLoaded(true)
        const Body = JSON.stringify({
            dId: documentId
        })

        try {
            const response = await axios.post(
                `/api/compliance/load/`,
                Body,
                config
            )

            setDocumentInitalData(response?.data?.data)

        } catch (error) {

        }
        setLoaded(false)
    }

    const loadVersion = async (e, vId, vNum) => {
        e.preventDefault()
        setCurrentVersion(vNum)
        const Body = JSON.stringify({
            vId: vId
        })

        try {
            const response = await axios.post(
                `/api/compliance/gatekeeping/version`,
                Body,
                config
            )

            setData(response?.data?.data)

        } catch (error) {
            setData({
                document: dId,

                lump_sum: 0,
                monthly_premium: 0,
                commission: 0,

                fica: 0,
                proof_of_screening: 0,
                dra: 0,
                letter_of_intro: 0,
                authorisation_letter: 0,
                roa_type: 0,
                roa: 0,
                fna: 0,
                application: 0,
                quotation: 0,
                risk_portfolio: 0,
                mandate: 0,
                replacement: 0,
                replacement_type: 0,

                policy_schedule: 0,
                commission_release_form: 0
            })

        }
    }

    const onFormSubmitBtn = (e) => {
        e.preventDefault()
        onFormSubmit()
    }
    const onFormSubmit = async () => {
        if (Versions.length > 0 && CurrentVersion !== Versions[Versions.length - 1]['version']) {
            router.push({ pathname: "/apps/compliance/documents/summary", query: { 'dId': dId } })
        } else {

            const Body = JSON.stringify(Data)

            try {
                const response = await axios.post(
                    '/api/compliance/complete',
                    Body,
                    config
                )
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

                if (DocumentInitalData?.user_id === user?.id && user?.userType === 1) {
                    router.push({
                        pathname: `/apps/compliance/documents/arc`,
                        query: { dId: dId }
                    })
                } else {
                    router.push({
                        pathname: `/apps/compliance/documents/summary`,
                        query: { dId: dId }
                    })

                }


            } catch (error) {
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "Error",
                    html: `${error?.response?.data?.success}`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })

            }
        }
    }


    const user = useSelector(state => state.auth.user)
    useEffect(() => {

        if (dId) {
            LoadData(dId)
            LoadDocumentData(dId)
        }

    }, [])



    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }
    if (user?.userType === 6) {
        router.push('/')
    }




    return (
        <Layout
            title={ "Continue Compliance" }
            content={ "Continue Compliance" }
        >
            <CompleteDocumentLayout
                appTitle={ 'Continue Compliance Review' }
                app={ 'compliance' }
                dId={ router?.query?.slug }
            >
                {
                    Loaded ?
                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? <Loader color='sfp-color' />
                            : user?.email?.includes('fs4p') ? <Loader color='fs4p-color' />
                                : user?.email?.includes('sanlam') ? <Loader color='sfp-sanlam' />
                                    : <Loader color='sfp-color' />
                        :
                        <form onSubmit={ (e) => { onFormSubmitBtn(e) } } className='gatekeeping-inital-card'>
                            <div className='container'>
                                <h6 className='gatekeeping-header'>Gatekeeping Questions</h6>
                                <hr />
                                <br />
                                {
                                    Versions.length > 0 ?
                                        <nav className='d-flex justify-content-center' aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link disabled" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">Review(s) :</span>
                                                    </a>
                                                </li>
                                                {
                                                    Versions.map(
                                                        (version, i) => {
                                                            return (
                                                                <>
                                                                    <li className="page-item">
                                                                        <a
                                                                            className={
                                                                                i + 1 == CurrentVersion ?
                                                                                    "page-link active" :
                                                                                    "page-link"
                                                                            }
                                                                            onClick={ (e) => { loadVersion(e, version?.id, version?.version) } }
                                                                            href="#"
                                                                        >
                                                                            { version?.version }
                                                                        </a>
                                                                    </li>
                                                                </>
                                                            )
                                                        }
                                                    )
                                                }
                                            </ul>
                                        </nav>
                                        : <></>
                                }
                                {/* <div className='accordion' id="commissionQuestions">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCommissionQuestions" aria-expanded="true" aria-controls="collapseCommissionQuestions">
                                            Lump Sum and Commission Questions
                                        </button>
                                    </h2>
                                    <div id="collapseCommissionQuestions" className="accordion-collapse collapsed" data-bs-parent="#commissionQuestions">
                                        <div className="accordion-body">
                                            <div className='row'>
                                                <div className='col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Lump Sum</label>
                                                        <div className="input-group mb-3">
                                                            <span class="input-group-text" id="basic-addon1">R</span>
                                                            <input 
                                                                required 
                                                                onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e)}} 
                                                                type="text" 
                                                                value={Data?.lump_sum} 
                                                                name="lump_sum" 
                                                                className="form-control" 
                                                                id="basic-url" 
                                                                aria-describedby="basic-addon3 basic-addon4" 
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Monthly Premium</label>
                                                        <div className="input-group mb-3">
                                                            <span class="input-group-text" id="basic-addon2">R</span>
                                                            <input 
                                                                required 
                                                                onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e)}} 
                                                                type="text" 
                                                                value={Data?.monthly_premium} 
                                                                name="monthly_premium" 
                                                                className="form-control" 
                                                                id="basic-url" 
                                                                aria-describedby="basic-addon3 basic-addon4" 
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Commission</label>
                                                        <div className="input-group mb-3">
                                                            <span class="input-group-text" id="basic-addon3">R</span>
                                                            <input 
                                                                required 
                                                                onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e)}} 
                                                                type="text" 
                                                                value={Data?.commission} 
                                                                name="commission" 
                                                                className="form-control" 
                                                                id="basic-url" 
                                                                aria-describedby="basic-addon3 basic-addon4" 
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/> */}
                                {
                                    DocumentInitalData?.businessType != 2 ?
                                        <div className="accordion" id="gatekeepingChecklist">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGateKeepingChecklist" aria-expanded="false" aria-controls="collapseGateKeepingChecklist">
                                                        Gatekeeping Checklist
                                                    </button>
                                                </h2>
                                                <div id="collapseGateKeepingChecklist" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        <div className='row row-cols-3'>
                                                            {
                                                                DocumentInitalData?.businessType != 2 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                FICA (Clear ID)
                                                                            </h6>
                                                                            <div className='row'>

                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.fica == Number("100") ? true : false } name="fica" id="fica" />
                                                                                            <label className="form-check-label" htmlFor="fica">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.fica == Number("0") ? true : false } name="fica" id="fica" />
                                                                                            <label className="form-check-label" htmlFor="fica">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.fica == Number("1") ? true : false } name="fica" id="fica" />
                                                                                            <label className="form-check-label" htmlFor="fica">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 ?
                                                                    <div className='col py-3 border-bottom'>
                                                                        <h6 className='gatekeeping-question'>
                                                                            Proof of Screening
                                                                        </h6>
                                                                        <div className='row'>
                                                                            <div className='col-lg-1'>
                                                                            </div>
                                                                            <div className='col-lg-10 row'>
                                                                                <div className='col-lg-4'>
                                                                                    <div className="form-check">
                                                                                        <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.proof_of_screening == Number("100") ? true : false } name="proof_of_screening" id="proof_of_screening" />
                                                                                        <label className="form-check-label" htmlFor="proof_of_screening">
                                                                                            <strong>Yes</strong>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-4'>
                                                                                    <div className="form-check">
                                                                                        <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.proof_of_screening == Number("0") ? true : false } name="proof_of_screening" id="proof_of_screening" />
                                                                                        <label className="form-check-label" htmlFor="proof_of_screening">
                                                                                            <strong>No</strong>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-4'>
                                                                                    <div className="form-check">
                                                                                        <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.proof_of_screening == Number("1") ? true : false } name="proof_of_screening" id="proof_of_screening" />
                                                                                        <label className="form-check-label" htmlFor="proof_of_screening">
                                                                                            <strong>N/A</strong>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-1'>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    : <></>
                                                            }
                                                            <br />
                                                            {
                                                                DocumentInitalData?.businessType != 2 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                DRA
                                                                            </h6>
                                                                            <div className='row'>

                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.dra == Number("100") ? true : false } name="dra" id="dra" />
                                                                                            <label className="form-check-label" htmlFor="dra">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.dra == Number("0") ? true : false } name="dra" id="dra" />
                                                                                            <label className="form-check-label" htmlFor="dra">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.dra == Number("1") ? true : false } name="dra" id="dra" />
                                                                                            <label className="form-check-label" htmlFor="dra">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 13 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Letter of Introduction
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.letter_of_intro == Number("100") ? true : false } name="letter_of_intro" id="letter_of_intro" />
                                                                                            <label className="form-check-label" htmlFor="letter_of_intro">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.letter_of_intro == Number("0") ? true : false } name="letter_of_intro" id="letter_of_intro" />
                                                                                            <label className="form-check-label" htmlFor="letter_of_intro">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.letter_of_intro == Number("1") ? true : false } name="letter_of_intro" id="letter_of_intro" />
                                                                                            <label className="form-check-label" htmlFor="letter_of_intro">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 13 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Authorisation letter
                                                                            </h6>
                                                                            <div className='row'>

                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.authorisation_letter == Number("100") ? true : false } name="authorisation_letter" id="authorisation_letter" />
                                                                                            <label className="form-check-label" htmlFor="authorisation_letter">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.authorisation_letter == Number("0") ? true : false } name="authorisation_letter" id="authorisation_letter" />
                                                                                            <label className="form-check-label" htmlFor="authorisation_letter">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.authorisation_letter == Number("1") ? true : false } name="authorisation_letter" id="authorisation_letter" />
                                                                                            <label className="form-check-label" htmlFor="authorisation_letter">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 11 && DocumentInitalData?.businessType != 13 && DocumentInitalData?.businessType != 14 && DocumentInitalData?.businessType != 15 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                ROA Type
                                                                            </h6>
                                                                            <div className='row'>

                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.roa_type == Number("100") ? true : false } name="roa_type" id="roa_type" />
                                                                                            <label className="form-check-label" htmlFor="roa_type">
                                                                                                <strong>SanFin ROA</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.roa_type == Number("0") ? true : false } name="roa_type" id="roa_type" />
                                                                                            <label className="form-check-label" htmlFor="roa_type">
                                                                                                <strong>SFP ROA</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.roa_type == Number("1") ? true : false } name="roa_type" id="roa_type" />
                                                                                            <label className="form-check-label" htmlFor="roa_type">
                                                                                                <strong>Glacier Ice</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                            <br />
                                                                            <div className='row'>

                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 2 } checked={ Data?.roa_type == Number("2") ? true : false } name="roa_type" id="roa_type" />
                                                                                            <label className="form-check-label" htmlFor="roa_type">
                                                                                                <strong>Compare Med</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 3 } checked={ Data?.roa_type == Number("3") ? true : false } name="roa_type" id="roa_type" />
                                                                                            <label className="form-check-label" htmlFor="roa_type">
                                                                                                <strong>Get Quote</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 4 } checked={ Data?.roa_type == Number("4") ? true : false } name="roa_type" id="roa_type" />
                                                                                            <label className="form-check-label" htmlFor="roa_type">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 11 && DocumentInitalData?.businessType != 13 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                ROA (All sections completed)
                                                                            </h6>
                                                                            <div className='row'>

                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.roa == Number("100") ? true : false } name="roa" id="roa" />
                                                                                            <label className="form-check-label" htmlFor="roa">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.roa == Number("0") ? true : false } name="roa" id="roa" />
                                                                                            <label className="form-check-label" htmlFor="roa">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.roa == Number("1") ? true : false } name="roa" id="roa" />
                                                                                            <label className="form-check-label" htmlFor="roa">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 10 && DocumentInitalData?.businessType != 11 && DocumentInitalData?.businessType != 13 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                FNA (Appropriate FNA filed)
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.fna == Number("100") ? true : false } name="fna" id="fna" />
                                                                                            <label className="form-check-label" htmlFor="fna">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.fna == Number("0") ? true : false } name="fna" id="fna" />
                                                                                            <label className="form-check-label" htmlFor="fna">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.fna == Number("1") ? true : false } name="fna" id="fna" />
                                                                                            <label className="form-check-label" htmlFor="fna">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 10 && DocumentInitalData?.businessType != 13 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Application
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.application == Number("100") ? true : false } name="application" id="application" />
                                                                                            <label className="form-check-label" htmlFor="application">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.application == Number("0") ? true : false } name="application" id="application" />
                                                                                            <label className="form-check-label" htmlFor="application">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.application == Number("1") ? true : false } name="application" id="application" />
                                                                                            <label className="form-check-label" htmlFor="application">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 10 && DocumentInitalData?.businessType != 11 && DocumentInitalData?.businessType != 13 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Quotation
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.quotation == Number("100") ? true : false } name="quotation" id="quotation" />
                                                                                            <label className="form-check-label" htmlFor="quotation">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.quotation == Number("0") ? true : false } name="quotation" id="quotation" />
                                                                                            <label className="form-check-label" htmlFor="quotation">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.quotation == Number("1") ? true : false } name="quotation" id="quotation" />
                                                                                            <label className="form-check-label" htmlFor="quotation">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType == 1 || (DocumentInitalData?.businessType > 5 && DocumentInitalData?.businessType < 9) ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Risk Portfolio
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.risk_portfolio == Number("100") ? true : false } name="risk_portfolio" id="risk_portfolio" />
                                                                                            <label className="form-check-label" htmlFor="risk_portfolio">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.risk_portfolio == Number("0") ? true : false } name="risk_portfolio" id="risk_portfolio" />
                                                                                            <label className="form-check-label" htmlFor="risk_portfolio">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.risk_portfolio == Number("1") ? true : false } name="risk_portfolio" id="risk_portfolio" />
                                                                                            <label className="form-check-label" htmlFor="risk_portfolio">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType == 1 || (DocumentInitalData?.businessType > 5 && DocumentInitalData?.businessType < 9) ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Mandate
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.mandate == Number("100") ? true : false } name="mandate" id="mandate" />
                                                                                            <label className="form-check-label" htmlFor="mandate">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.mandate == Number("0") ? true : false } name="mandate" id="mandate" />
                                                                                            <label className="form-check-label" htmlFor="mandate">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.mandate == Number("1") ? true : false } name="mandate" id="mandate" />
                                                                                            <label className="form-check-label" htmlFor="mandate">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                (DocumentInitalData?.businessType == 1 || DocumentInitalData?.businessType == 3 || DocumentInitalData?.businessType == 4 || DocumentInitalData?.businessType == 6 || DocumentInitalData?.businessType == 7 | DocumentInitalData?.businessType == 8 || DocumentInitalData?.businessType == 12 || DocumentInitalData?.businessType == 14 || DocumentInitalData?.businessType == 15) ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Replacement?
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.replacement == Number("100") ? true : false } name="replacement" id="replacement" />
                                                                                            <label className="form-check-label" htmlFor="replacement">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.replacement == Number("0") ? true : false } name="replacement" id="replacement" />
                                                                                            <label className="form-check-label" htmlFor="replacement">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.replacement == Number("1") ? true : false } name="replacement" id="replacement" />
                                                                                            <label className="form-check-label" htmlFor="replacement">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                Data?.replacement == Number("100") ?
                                                                    (DocumentInitalData?.businessType == 1 || DocumentInitalData?.businessType == 3 || DocumentInitalData?.businessType == 4 || DocumentInitalData?.businessType == 6 || DocumentInitalData?.businessType == 7 | DocumentInitalData?.businessType == 8 || DocumentInitalData?.businessType == 12) ?
                                                                        <>
                                                                            <div className='col py-3 border-bottom'>
                                                                                <h6 className='gatekeeping-question'>
                                                                                    Type of Replacement
                                                                                </h6>
                                                                                <div className='row'>
                                                                                    <div className='col-lg-1'>
                                                                                    </div>
                                                                                    <div className='col-lg-10 row'>
                                                                                        <div className='col-lg-4'>
                                                                                            <div className="form-check">
                                                                                                <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.replacement_type == Number("100") ? true : false } name="replacement_type" id="replacement_type" />
                                                                                                <label className="form-check-label" htmlFor="replacement_type">
                                                                                                    Rule 19
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-lg-4'>
                                                                                            <div className="form-check">
                                                                                                <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.replacement_type == Number("0") ? true : false } name="replacement_type" id="replacement_type" />
                                                                                                <label className="form-check-label" htmlFor="replacement_type">
                                                                                                    <strong>No</strong>n-Rule 19
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-lg-4'>
                                                                                            <div className="form-check">
                                                                                                <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.replacement_type == Number("1") ? true : false } name="replacement_type" id="replacement_type" />
                                                                                                <label className="form-check-label" htmlFor="replacement_type">
                                                                                                    <strong>N/A</strong>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-1'>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <br />
                                                                        </>
                                                                        : <>
                                                                        </>

                                                                    : <>
                                                                    </>
                                                            }
                                                            {
                                                                DocumentInitalData?.businessType != 2 ?
                                                                    <>
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Date of screening
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.date_of_screening == Number("100") ? true : false } name="date_of_screening" id="date_of_screening" />
                                                                                            <label className="form-check-label" htmlFor="date_of_screening">
                                                                                                <strong>Before quote date</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.date_of_screening == Number("0") ? true : false } name="date_of_screening" id="date_of_screening" />
                                                                                            <label className="form-check-label" htmlFor="date_of_screening">
                                                                                                <strong>After quote date</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.date_of_screening == Number("1") ? true : false } name="date_of_screening" id="date_of_screening" />
                                                                                            <label className="form-check-label" htmlFor="date_of_screening">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                        <div className='col py-3 border-bottom'>
                                                                            <h6 className='gatekeeping-question'>
                                                                                Timeously(within a month)
                                                                            </h6>
                                                                            <div className='row'>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                                <div className='col-lg-10 row'>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.timeously == Number("100") ? true : false } name="timeously" id="timeously" />
                                                                                            <label className="form-check-label" htmlFor="timeously">
                                                                                                <strong>Yes</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.timeously == Number("0") ? true : false } name="timeously" id="timeously" />
                                                                                            <label className="form-check-label" htmlFor="timeously">
                                                                                                <strong>No</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-4'>
                                                                                        <div className="form-check">
                                                                                            <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.timeously == Number("1") ? true : false } name="timeously" id="timeously" />
                                                                                            <label className="form-check-label" htmlFor="timeously">
                                                                                                <strong>N/A</strong>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-1'>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </>
                                                                    : <></>
                                                            }
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : <></>
                                }
                                <br />
                                {
                                    DocumentInitalData?.businessType > 12 || DocumentInitalData?.businessType == 2 || DocumentInitalData?.businessType == 11 ?
                                        <>
                                            <div className='accordion' id="policyCommQs">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsepolicyCommQs" aria-expanded="true" aria-controls="collapsepolicyCommQs">
                                                            Policy and Commission Questions
                                                        </button>
                                                    </h2>
                                                    <div id="collapsepolicyCommQs" className="accordion-collapse collapsed" data-bs-parent="#policyCommQs">
                                                        <div className="accordion-body">
                                                            <div className='row row-cols-2'>
                                                                {
                                                                    DocumentInitalData?.businessType > 12 ?
                                                                        <div className='col'>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Policy Schedule</label>
                                                                                {/* <input 
                                                                        required 
                                                                        onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e)}} 
                                                                        type="text" 
                                                                        value={Data?.policy_schedule} 
                                                                        name="policy_schedule" 
                                                                        className="form-control" 
                                                                        id="basic-url" 
                                                                        aria-describedby="basic-addon3 basic-addon4" 
                                                                    /> */}
                                                                                <div className='row'>
                                                                                    <div className='col-lg-1'>
                                                                                    </div>
                                                                                    <div className='col-lg-10 row'>
                                                                                        <div className='col-lg-4'>
                                                                                            <div className="form-check">
                                                                                                <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.policy_schedule == Number("100") ? true : false } name="policy_schedule" id="policy_schedule" />
                                                                                                <label className="form-check-label" htmlFor="policy_schedule">
                                                                                                    <strong>Yes</strong>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-lg-4'>
                                                                                            <div className="form-check">
                                                                                                <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.policy_schedule == Number("0") ? true : false } name="policy_schedule" id="policy_schedule" />
                                                                                                <label className="form-check-label" htmlFor="policy_schedule">
                                                                                                    <strong>No</strong>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-lg-4'>
                                                                                            <div className="form-check">
                                                                                                <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.policy_schedule == Number("1") ? true : false } name="policy_schedule" id="policy_schedule" />
                                                                                                <label className="form-check-label" htmlFor="policy_schedule">
                                                                                                    <strong>N/A</strong>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-1'>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        : <></>
                                                                }
                                                                {
                                                                    DocumentInitalData?.businessType == 2 || DocumentInitalData?.businessType == 11 ?
                                                                        <>
                                                                            <div className='col'>
                                                                                <div className="mb-3">
                                                                                    <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Commission Release Form</label>
                                                                                    <div className='row'>
                                                                                        <div className='col-lg-1'>
                                                                                        </div>
                                                                                        <div className='col-lg-10 row'>
                                                                                            <div className='col-lg-4'>
                                                                                                <div className="form-check">
                                                                                                    <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 100 } checked={ Data?.commission_release_form == Number("100") ? true : false } name="commission_release_form" id="commission_release_form" />
                                                                                                    <label className="form-check-label" htmlFor="fica">
                                                                                                        <strong>Yes</strong>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-lg-4'>
                                                                                                <div className="form-check">
                                                                                                    <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 0 } checked={ Data?.commission_release_form == Number("0") ? true : false } name="commission_release_form" id="commission_release_form" />
                                                                                                    <label className="form-check-label" htmlFor="fica">
                                                                                                        <strong>No</strong>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-lg-4'>
                                                                                                <div className="form-check">
                                                                                                    <input className="form-check-input" type="radio" onChange={ (e) => { Versions.length > 0 ? CurrentVersion === Versions[Versions.length - 1]['version'] ? onFormUpdate(e) : "" : onFormUpdate(e) } } value={ 1 } checked={ Data?.commission_release_form == Number("1") ? true : false } name="commission_release_form" id="commission_release_form" />
                                                                                                    <label className="form-check-label" htmlFor="fica">
                                                                                                        <strong>N/A</strong>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-lg-1'>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                        : <></>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        : <></>
                                }
                            </div>
                            <br />
                            <div className=''>
                                <div className="mx-auto">
                                    <div className='row'>
                                        {
                                            DocumentInitalData?.status === 0 || DocumentInitalData?.status === 2 || DocumentInitalData?.status === 3 || DocumentInitalData?.status === 5 || DocumentInitalData?.status === 7 ?
                                                <div className={
                                                    Versions.length >= 1 ?
                                                        'col-lg-6'
                                                        :
                                                        'col-lg-12'
                                                }
                                                >
                                                    <button className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100" type="submit">
                                                        {
                                                            DocumentInitalData?.user_id === user?.id && user?.userType === 1 ?
                                                                "Save & Continue to ARC" :
                                                                "Save & Continue to Summary"
                                                        }
                                                        <i className='bi pe-<strong>No</strong>ne mx-2 me-2 fa-solid fa-arrow-right' />
                                                    </button>
                                                </div>
                                                : <></>
                                        }
                                        {
                                            Versions.length >= 1 ?
                                                <div className='col-lg-6'>
                                                    <button
                                                        className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100"
                                                        type='button'
                                                        onClick={ () => {
                                                            (DocumentInitalData?.user_id === user?.id && user?.userType === 1) || (user?.userType === 1 && DocumentInitalData?.arc_status) ?
                                                                router.push({ pathname: "/apps/compliance/documents/arc", query: { 'dId': dId } })
                                                                :
                                                                router.push({ pathname: "/apps/compliance/documents/summary", query: { 'dId': dId } })
                                                        } }
                                                    >
                                                        {
                                                            (DocumentInitalData?.user_id === user?.id && user?.userType === 1) || (user?.userType === 1 && DocumentInitalData?.arc_status) ?
                                                                "Continue to ARC" :
                                                                "Continue to Summary"
                                                        }
                                                        <i className='bi pe-<strong>No</strong>ne mx-2 me-2 fa-solid fa-arrow-right' />
                                                    </button>
                                                </div>
                                                : <></>
                                        }
                                    </div>
                                </div>
                            </div>


                        </form>
                }

            </CompleteDocumentLayout>
        </Layout>
    )
}

export default CompleteDocument