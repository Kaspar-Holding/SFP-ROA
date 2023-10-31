import DashboardLayout from '@/hocs/DashboardLayout'
import CompleteDocumentLayout from '@/hocs/Compliance/CompleteDocumentLayout'
import Layout from '@/hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { currencyFormatter } from '@/modules/formatter'
import Loader from '@/hocs/Loader'

const CompleteDocument = () => {
    const router = useRouter()
    
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const user = useSelector(state=>state.auth.user)

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

        identity: 0,
        disclosure: 0,

        policy_schedule: 0,
        commission_release_form: 0

    })

    
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
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
        setLoaded(false)
    }
    
    const LoadDocumentData = async (documentId) => {
        
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
    }
    
    const loadVersion = async (e, vId, version) => {
        e.preventDefault()
        setCurrentVersion(version)
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
            title={"Continue Compliance"}
            content={"Continue Compliance"}
        >
            <CompleteDocumentLayout
                appTitle={'Continue Compliance Review'}
                app={'compliance'}
                dId={router?.query?.slug}
            >   
                {
                    Loaded ?
                    <Loader />
                    :
                    <div className='gatekeeping-inital-card'>
                        <div className='container'>
                            <h6 className='gatekeeping-header'>Gatekeeping Questions</h6>
                            <hr/>
                            <br/>
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
                                                                            i+1 == CurrentVersion ?
                                                                            "page-link active":
                                                                            "page-link"
                                                                        } 
                                                                        onClick={(e)=>{loadVersion(e, version?.id, version?.version)}}
                                                                        href="#"
                                                                    >
                                                                        {version?.version}
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
                            <br/>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.fica == Number("100") ? true : false} name="fica" id="fica"/>
                                                                        <label className="form-check-label" for="fica">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.fica == Number("0") ? true : false} name="fica" id="fica"/>
                                                                        <label className="form-check-label" for="fica">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.fica == Number("1") ? true : false} name="fica" id="fica"/>
                                                                        <label className="form-check-label" for="fica">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
                                                    </>
                                                }
                                                <div className='col py-3 border-bottom'>
                                                    <h6 className='gatekeeping-question'>
                                                        Proof of Screening
                                                    </h6>
                                                    <div className='row'>
                                                        <div className='col-lg-4'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" value={100} checked={Data?.proof_of_screening == Number("100") ? true : false} name="proof_of_screening" id="proof_of_screening"/>
                                                                <label className="form-check-label" for="proof_of_screening">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-4'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" value={0} checked={Data?.proof_of_screening == Number("0") ? true : false} name="proof_of_screening" id="proof_of_screening"/>
                                                                <label className="form-check-label" for="proof_of_screening">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-4'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" value={1} checked={Data?.proof_of_screening == Number("1") ? true : false} name="proof_of_screening" id="proof_of_screening"/>
                                                                <label className="form-check-label" for="proof_of_screening">
                                                                    N/A
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    DocumentInitalData?.businessType === 2 ?
                                                    <>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Identity
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.identity == Number("100") ? true : false} name="identity" id="identity"/>
                                                                        <label className="form-check-label" for="identity">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.identity == Number("0") ? true : false} name="identity" id="identity"/>
                                                                        <label className="form-check-label" for="identity">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.identity == Number("1") ? true : false} name="identity" id="identity"/>
                                                                        <label className="form-check-label" for="identity">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Disclosure
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.disclosure == Number("100") ? true : false} name="disclosure" id="disclosure"/>
                                                                        <label className="form-check-label" for="disclosure">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.disclosure == Number("0") ? true : false} name="disclosure" id="disclosure"/>
                                                                        <label className="form-check-label" for="disclosure">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.disclosure == Number("1") ? true : false} name="disclosure" id="disclosure"/>
                                                                        <label className="form-check-label" for="disclosure">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                    :<></>
                                                }
                                                <br/>
                                                {
                                                    DocumentInitalData?.businessType != 2 ?
                                                    <>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                DRA
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.dra == Number("100") ? true : false} name="dra" id="dra"/>
                                                                        <label className="form-check-label" for="dra">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.dra == Number("0") ? true : false} name="dra" id="dra"/>
                                                                        <label className="form-check-label" for="dra">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.dra == Number("1") ? true : false} name="dra" id="dra"/>
                                                                        <label className="form-check-label" for="dra">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.letter_of_intro == Number("100") ? true : false} name="letter_of_intro" id="letter_of_intro"/>
                                                                        <label className="form-check-label" for="letter_of_intro">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.letter_of_intro == Number("0") ? true : false} name="letter_of_intro" id="letter_of_intro"/>
                                                                        <label className="form-check-label" for="letter_of_intro">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.letter_of_intro == Number("1") ? true : false} name="letter_of_intro" id="letter_of_intro"/>
                                                                        <label className="form-check-label" for="letter_of_intro">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.authorisation_letter == Number("100") ? true : false} name="authorisation_letter" id="authorisation_letter"/>
                                                                        <label className="form-check-label" for="authorisation_letter">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.authorisation_letter == Number("0") ? true : false} name="authorisation_letter" id="authorisation_letter"/>
                                                                        <label className="form-check-label" for="authorisation_letter">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.authorisation_letter == Number("1") ? true : false} name="authorisation_letter" id="authorisation_letter"/>
                                                                        <label className="form-check-label" for="authorisation_letter">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.roa_type == Number("100") ? true : false} name="roa_type" id="roa_type"/>
                                                                        <label className="form-check-label" for="roa_type">
                                                                            SanFin ROA
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.roa_type == Number("0") ? true : false} name="roa_type" id="roa_type"/>
                                                                        <label className="form-check-label" for="roa_type">
                                                                            SFP ROA
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.roa_type == Number("1") ? true : false} name="roa_type" id="roa_type"/>
                                                                        <label className="form-check-label" for="roa_type">
                                                                            Glacier Ice
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <br/>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={2} checked={Data?.roa_type == Number("2") ? true : false} name="roa_type" id="roa_type"/>
                                                                        <label className="form-check-label" for="roa_type">
                                                                            Compare Med
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={3} checked={Data?.roa_type == Number("3") ? true : false} name="roa_type" id="roa_type"/>
                                                                        <label className="form-check-label" for="roa_type">
                                                                            Get Quote
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={4} checked={Data?.roa_type == Number("4") ? true : false} name="roa_type" id="roa_type"/>
                                                                        <label className="form-check-label" for="roa_type">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.roa == Number("100") ? true : false} name="roa" id="roa"/>
                                                                        <label className="form-check-label" for="roa">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.roa == Number("0") ? true : false} name="roa" id="roa"/>
                                                                        <label className="form-check-label" for="roa">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.roa == Number("1") ? true : false} name="roa" id="roa"/>
                                                                        <label className="form-check-label" for="roa">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.fna == Number("100") ? true : false} name="fna" id="fna"/>
                                                                        <label className="form-check-label" for="fna">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.fna == Number("0") ? true : false} name="fna" id="fna"/>
                                                                        <label className="form-check-label" for="fna">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.fna == Number("1") ? true : false} name="fna" id="fna"/>
                                                                        <label className="form-check-label" for="fna">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.application == Number("100") ? true : false} name="application" id="application"/>
                                                                        <label className="form-check-label" for="application">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.application == Number("0") ? true : false} name="application" id="application"/>
                                                                        <label className="form-check-label" for="application">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.application == Number("1") ? true : false} name="application" id="application"/>
                                                                        <label className="form-check-label" for="application">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.quotation == Number("100") ? true : false} name="quotation" id="quotation"/>
                                                                        <label className="form-check-label" for="quotation">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.quotation == Number("0") ? true : false} name="quotation" id="quotation"/>
                                                                        <label className="form-check-label" for="quotation">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.quotation == Number("1") ? true : false} name="quotation" id="quotation"/>
                                                                        <label className="form-check-label" for="quotation">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
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
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.risk_portfolio == Number("100") ? true : false} name="risk_portfolio" id="risk_portfolio"/>
                                                                        <label className="form-check-label" for="risk_portfolio">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.risk_portfolio == Number("0") ? true : false} name="risk_portfolio" id="risk_portfolio"/>
                                                                        <label className="form-check-label" for="risk_portfolio">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.risk_portfolio == Number("1") ? true : false} name="risk_portfolio" id="risk_portfolio"/>
                                                                        <label className="form-check-label" for="risk_portfolio">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
                                                    </>
                                                }
                                                {
                                                    DocumentInitalData?.businessType == 1 || DocumentInitalData?.businessType == 4 || (DocumentInitalData?.businessType > 5 && DocumentInitalData?.businessType < 9) ?
                                                    <>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Mandate
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.mandate == Number("100") ? true : false} name="mandate" id="mandate"/>
                                                                        <label className="form-check-label" for="mandate">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.mandate == Number("0") ? true : false} name="mandate" id="mandate"/>
                                                                        <label className="form-check-label" for="mandate">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.mandate == Number("1") ? true : false} name="mandate" id="mandate"/>
                                                                        <label className="form-check-label" for="mandate">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
                                                    </>
                                                }
                                                {
                                                    (DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 11 && DocumentInitalData?.businessType != 13) || (DocumentInitalData?.businessType > 5 && DocumentInitalData?.businessType < 8) ?
                                                    <>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Replacement?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={100} checked={Data?.replacement == Number("100") ? true : false} name="replacement" id="replacement"/>
                                                                        <label className="form-check-label" for="replacement">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={0} checked={Data?.replacement == Number("0") ? true : false} name="replacement" id="replacement"/>
                                                                        <label className="form-check-label" for="replacement">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value={1} checked={Data?.replacement == Number("1") ? true : false} name="replacement" id="replacement"/>
                                                                        <label className="form-check-label" for="replacement">
                                                                            N/A
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </>
                                                    :<>
                                                    </>
                                                }
                                                {
                                                    Data?.replacement == Number("100") ?
                                                        (DocumentInitalData?.businessType != 2 && DocumentInitalData?.businessType != 11 && DocumentInitalData?.businessType != 13) || (DocumentInitalData?.businessType > 5 && DocumentInitalData?.businessType < 9) ?
                                                        <>
                                                            <div className='col py-3 border-bottom'>
                                                                <h6 className='gatekeeping-question'>
                                                                    Type of Replacement
                                                                </h6>
                                                                <div className='row'>
                                                                    <div className='col-lg-4'>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="radio" value={100} checked={Data?.replacement_type == Number("100") ? true : false} name="replacement_type" id="replacement_type"/>
                                                                            <label className="form-check-label" for="replacement_type">
                                                                                Rule 19
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="radio" value={0} checked={Data?.replacement_type == Number("0") ? true : false} name="replacement_type" id="replacement_type"/>
                                                                            <label className="form-check-label" for="replacement_type">
                                                                                Non-Rule 19
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="radio" value={1} checked={Data?.replacement_type == Number("1") ? true : false} name="replacement_type" id="replacement_type"/>
                                                                            <label className="form-check-label" for="replacement_type">
                                                                                N/A
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br/>
                                                        </>
                                                        :<>
                                                        </>
                                                    :<>
                                                    </>
                                                }
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
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
                                                                    <label for="basic-url" className="form-label compliance-inital-card-text">Policy Schedule</label>
                                                                    {/* <input 
                                                                        required 
                                                                        
                                                                        type="text" 
                                                                        value={Data?.policy_schedule} 
                                                                        name="policy_schedule" 
                                                                        className="form-control" 
                                                                        id="basic-url" 
                                                                        aria-describedby="basic-addon3 basic-addon4" 
                                                                    /> */}
                                                                    <div className='row'>
                                                                        <div className='col-lg-4'>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="radio" value={100} checked={Data?.policy_schedule == Number("100") ? true : false} name="policy_schedule" id="policy_schedule"/>
                                                                                <label className="form-check-label" for="policy_schedule">
                                                                                    Yes
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-lg-4'>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="radio" value={0} checked={Data?.policy_schedule == Number("0") ? true : false} name="policy_schedule" id="policy_schedule"/>
                                                                                <label className="form-check-label" for="policy_schedule">
                                                                                    No
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-lg-4'>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="radio" value={1} checked={Data?.policy_schedule == Number("1") ? true : false} name="policy_schedule" id="policy_schedule"/>
                                                                                <label className="form-check-label" for="policy_schedule">
                                                                                    N/A
                                                                                </label>
                                                                            </div>
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
                                                                        <label for="basic-url" className="form-label compliance-inital-card-text">Commission Release Form</label>
                                                                        <div className='row'>
                                                                            <div className='col-lg-4'>
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input" type="radio" value={100} checked={Data?.commission_release_form == Number("100") ? true : false} name="commission_release_form" id="commission_release_form"/>
                                                                                    <label className="form-check-label" for="fica">
                                                                                        Yes
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-4'>
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input" type="radio" value={0} checked={Data?.commission_release_form == Number("0") ? true : false} name="commission_release_form" id="commission_release_form"/>
                                                                                    <label className="form-check-label" for="fica">
                                                                                        No
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-4'>
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input" type="radio" value={1} checked={Data?.commission_release_form == Number("1") ? true : false} name="commission_release_form" id="commission_release_form"/>
                                                                                    <label className="form-check-label" for="fica">
                                                                                        N/A
                                                                                    </label>
                                                                                </div>
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
                        <br/>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <button 
                                    className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100"
                                    type='button'
                                    onClick={()=>{
                                        DocumentInitalData?.referred && user?.userType === 1  ?
                                        router.push({pathname: "/apps/compliance/documents/view", query: {'dId': dId}})
                                        :
                                        DocumentInitalData?.status != 3 && user?.id === DocumentInitalData?.user_id ?
                                        router.push({pathname: "/apps/compliance/documents/edit", query: {'dId': dId}})
                                        : 
                                        router.push({pathname: "/apps/compliance/documents/view", query: {'dId': dId}})
                                    }}
                                >
                                    <i className='bi pe-none mx-2 me-2 fa-solid fa-arrow-left'/>
                                    Back to Inital Data
                                </button>
                            </div>
                            {
                                DocumentInitalData?.arc_status || DocumentInitalData?.status === 3 ?
                                <div className='col-lg-6'>
                                    <button 
                                        className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100"
                                        type='button'
                                        onClick={()=>{
                                            !user?.is_superuser && user?.userType === 1 && (DocumentInitalData?.status == 0 || DocumentInitalData?.status == 2 || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5) ?
                                            router.push({pathname: "/apps/compliance/documents/arc", query: {'dId': dId}}) :
                                            router.push({pathname: "/apps/compliance/documents/view/arc", query: {'dId': dId}})
                                        }}
                                    >
                                        Continue to ARC
                                        <i className='bi pe-none mx-2 me-2 fa-solid fa-arrow-right'/>
                                    </button>
                                </div>
                                :
                                <div className='col-lg-6'>
                                    <button 
                                        className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100"
                                        type='button'
                                        onClick={()=>{
                                            router.push({pathname: "/apps/compliance/documents/summary", query: {'dId': dId}})
                                        }}
                                    >
                                        Continue to Summary
                                        <i className='bi pe-none mx-2 me-2 fa-solid fa-arrow-right'/>
                                    </button>
                                </div>
                            }
                        </div>



                    </div>
                }

            </CompleteDocumentLayout>
        </Layout>
    )
}

export default CompleteDocument