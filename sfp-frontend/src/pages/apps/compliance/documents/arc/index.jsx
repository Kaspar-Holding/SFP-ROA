import DashboardLayout from '@/hocs/DashboardLayout'
import CompleteDocumentLayout from '@/hocs/Compliance/CompleteDocumentLayout'
import Layout from '@/hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Loader from '@/hocs/Loader'

const ARCDocument = () => {
    
    const router = useRouter()
    const [Loaded, setLoaded] = useState(false)
    
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
        
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }

    
    const [Versions, setVersions] = useState([])
    const [CurrentVersion, setCurrentVersion] = useState(0)

    const dId = router?.query?.dId
    
    const user = useSelector(state=>state.auth.user)
    
    const [ARCAnswers, setARCAnswers] = useState({

        document: dId,

        client_needs :0,
        appropriate_fna :0,
        fna_outcome :0,
        product_suitability :0,
        alternative_solutions :0,
        material_aspects :0,
        special_terms :0,
        replacement_terms :0,
        disclosure_a: 0,
        disclosure_b: 0,
        personal_details_a: 0,
        personal_details_b: 0,
        general_a: 0,
        general_b: 0,
        general_c: 0,
        general_d: 0,
        risk_classes_a: 0,
        risk_classes_b: 0,
        fna_a: 0,
        fna_b: 0,
        recommended_products_a: 0,
        recommended_products_b: 0,
        recommended_products_c: 0,
        replacements_a: 0,
        replacements_b: 0,
        replacements_c: 0,
        replacements_d: 0,
        client_consent_a: 0,
        client_consent_b: 0,
    })

    const onChange = (e) => {
        setARCAnswers({
            ...ARCAnswers,
            [e.target.name]: e.target.value
        })
    }

    const submitARCForm = (e) => {
        e.preventDefault()
        updateARCForm()
    }

    const updateARCForm = async() => {
        const Body = JSON.stringify(ARCAnswers)

        try {
            const response = await axios.post(
                '/api/compliance/arc/update',
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
            router.push({pathname: "/apps/compliance/documents/summary", query: {'dId': dId}})
        } catch (error) {
            console.log(error?.response?.data?.error)
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `${error?.response?.data?.error}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
            
        }
    }
    
    const [DocumentInitalData, setDocumentInitalData] = useState({})

    const LoadData = async (documentId) => {
        setLoaded(true)    
        const Body = JSON.stringify({
            dId: documentId
        })

        try {
            const response = await axios.post(
                `/api/compliance/load`,
                Body,
                config
            )

            setDocumentInitalData(response?.data?.data)


        } catch (error) {
            
        }
        setLoaded(false)    
    }

    const LoadARCData = async (documentId) => {
        setLoaded(true)        
        const Body = JSON.stringify({
            dId: documentId
        })
        
        try {
            const response = await axios.post(
                `/api/compliance/arc`,
                Body,
                config
            )
            
            setARCAnswers(response?.data?.data?.data)
            setVersions(response?.data?.data?.versions)
            setCurrentVersion(response?.data?.data?.versions.length)
            
        } catch (error) {
            console.log(error?.response?.data)
            setARCAnswers({
                

                document: dId,

                client_needs : 1,
                appropriate_fna : 1,
                fna_outcome : 1,
                product_suitability : 1,
                alternative_solutions : 1,
                material_aspects : 1,
                special_terms : 1,
                replacement_terms : 1,
                disclosure_a: 1,
                disclosure_b: 1,
                personal_details_a: 1,
                personal_details_b: 1,
                general_a: 1,
                general_b: 1,
                general_c: 1,
                general_d: 1,
                risk_classes_a: 1,
                risk_classes_b: 1,
                fna_a: 1,
                fna_b: 1,
                recommended_products_a: 1,
                recommended_products_b: 1,
                recommended_products_c: 1,
                replacements_a: 1,
                replacements_b: 1,
                replacements_c: 1,
                replacements_d: 1,
                client_consent_a: 1,
                client_consent_b: 1,
            })
            
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
                `/api/compliance/arc/version`,
                Body,
                config
            )

            setARCAnswers(response?.data?.data)
            
        } catch (error) {
            
            
        }
    }

    

    useEffect(() => {
        // getCategories()

        if (dId) {
            LoadARCData(dId)
            LoadData(dId)
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
            title={"ARC Compliance"}
            content={"ARC Compliance"}
        >
            <CompleteDocumentLayout
                appTitle={'ARC Compliance Document'}
                app={'compliance'}
                dId={router?.query?.slug}
            >
                {
                    Loaded ?
                    <Loader />
                    :
                    <form onSubmit={(e)=>{submitARCForm(e)}} className='gatekeeping-inital-card'>
                        <div className='container'>
                            <h6 className='gatekeeping-header'>ARC Questions</h6>
                            <hr/>
                            {
                                Versions.length > 0 ?
                                    <nav className='d-flex justify-content-center' aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link disabled" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">Review{Versions.length > 1 ? "(s)" : ""} :</span>
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
                            <br/>
                            
                            {
                                // false ?
                                DocumentInitalData?.businessType <= 13 ?
                                <div className='accordion' id="A_R_Cs">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseA_R_Cs" aria-expanded="true" aria-controls="collapseA_R_Cs">
                                                Normal Questions
                                            </button>
                                        </h2>
                                        <div id="collapseA_R_Cs" className="accordion-collapse collapsed" data-bs-parent="#A_R_Cs">
                                            <div className="accordion-body">
                                                <div className='row row-cols-2'>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>
                                                            Clients needs
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={15} checked={ARCAnswers?.client_needs == 15 ? true : false} name="client_needs" id="client_needs"/>
                                                                    <label className="form-check-label" for="client_needs">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={10} checked={ARCAnswers?.client_needs == Number("10") ? true : false} name="client_needs" id="client_needs"/>
                                                                    <label className="form-check-label" for="client_needs">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.client_needs == Number("0") ? true : false} name="client_needs" id="client_needs"/>
                                                                    <label className="form-check-label" for="client_needs">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>
                                                            Appropriate FNA
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={20} checked={ARCAnswers?.appropriate_fna == Number("20") ? true : false} name="appropriate_fna" id="appropriate_fna"/>
                                                                    <label className="form-check-label" for="appropriate_fna">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={15} checked={ARCAnswers?.appropriate_fna == Number("15") ? true : false} name="appropriate_fna" id="appropriate_fna"/>
                                                                    <label className="form-check-label" for="appropriate_fna">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.appropriate_fna == Number("0") ? true : false} name="appropriate_fna" id="appropriate_fna"/>
                                                                    <label className="form-check-label" for="appropriate_fna">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>
                                                            FNA outcome
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={15} checked={ARCAnswers?.fna_outcome == Number("15") ? true : false} name="fna_outcome" id="fna_outcome"/>
                                                                    <label className="form-check-label" for="fna_outcome">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={10} checked={ARCAnswers?.fna_outcome == Number("10") ? true : false} name="fna_outcome" id="fna_outcome"/>
                                                                    <label className="form-check-label" for="fna_outcome">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.fna_outcome == Number("0") ? true : false} name="fna_outcome" id="fna_outcome"/>
                                                                    <label className="form-check-label" for="fna_outcome">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>                        
                                                            Product suitability
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={10} checked={ARCAnswers?.product_suitability == Number("10") ? true : false} name="product_suitability" id="product_suitability"/>
                                                                    <label className="form-check-label" for="product_suitability">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.product_suitability == Number("5") ? true : false} name="product_suitability" id="product_suitability"/>
                                                                    <label className="form-check-label" for="product_suitability">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.product_suitability == Number("0") ? true : false} name="product_suitability" id="product_suitability"/>
                                                                    <label className="form-check-label" for="product_suitability">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>                        
                                                            Alternative Solutions
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={10} checked={ARCAnswers?.alternative_solutions == Number("10") ? true : false} name="alternative_solutions" id="alternative_solutions"/>
                                                                    <label className="form-check-label" for="alternative_solutions">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.alternative_solutions == Number("5") ? true : false} name="alternative_solutions" id="alternative_solutions"/>
                                                                    <label className="form-check-label" for="alternative_solutions">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.alternative_solutions == Number("0") ? true : false} name="alternative_solutions" id="alternative_solutions"/>
                                                                    <label className="form-check-label" for="alternative_solutions">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>                        
                                                            Material Aspects
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={20} checked={ARCAnswers?.material_aspects == Number("20") ? true : false} name="material_aspects" id="material_aspects"/>
                                                                    <label className="form-check-label" for="material_aspects">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={10} checked={ARCAnswers?.material_aspects == Number("10") ? true : false} name="material_aspects" id="material_aspects"/>
                                                                    <label className="form-check-label" for="material_aspects">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.material_aspects == Number("0") ? true : false} name="material_aspects" id="material_aspects"/>
                                                                    <label className="form-check-label" for="material_aspects">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>                        
                                                            Special terms & loadings
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={10} checked={ARCAnswers?.special_terms == Number("10") ? true : false} name="special_terms" id="special_terms"/>
                                                                    <label className="form-check-label" for="special_terms">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.special_terms == Number("5") ? true : false} name="special_terms" id="special_terms"/>
                                                                    <label className="form-check-label" for="special_terms">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.special_terms == Number("0") ? true : false} name="special_terms" id="special_terms"/>
                                                                    <label className="form-check-label" for="special_terms">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col py-3 border-bottom'>
                                                        <h6 className='gatekeeping-question'>                        
                                                            Replacement comparison
                                                        </h6>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={15} checked={ARCAnswers?.replacement_terms == Number("15") ? true : false} name="replacement_terms" id="replacement_terms"/>
                                                                    <label className="form-check-label" for="replacement_terms">
                                                                        <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={10} checked={ARCAnswers?.replacement_terms == Number("10") ? true : false} name="replacement_terms" id="replacement_terms"/>
                                                                    <label className="form-check-label" for="replacement_terms">
                                                                        <strong>Partially</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.replacement_terms == Number("0") ? true : false} name="replacement_terms" id="replacement_terms"/>
                                                                    <label className="form-check-label" for="replacement_terms">
                                                                        <strong>Not</strong> <strong>Approved</strong>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className='accordion' id="STInsurances">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSTInsurances" aria-expanded="true" aria-controls="collapseSTInsurances">
                                                    Disclosures Questions
                                                </button>
                                            </h2>
                                            <div id="collapseSTInsurances" className="accordion-collapse collapsed" data-bs-parent="#STInsurances">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has FAIS disclosure documents (permit) been signed and filed?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.disclosure_a == Number("5") ? true : false} name="disclosure_a" id="disclosure_a"/>
                                                                        <label className="form-check-label" for="disclosure_a">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.disclosure_a == Number("0") ? true : false} name="disclosure_a" id="disclosure_a"/>
                                                                        <label className="form-check-label" for="disclosure_a">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.disclosure_a == Number("1") ? true : false} name="disclosure_a" id="disclosure_a"/>
                                                                        <label className="form-check-label" for="disclosure_a">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has client has provided authority to access information?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.disclosure_b == Number("5") ? true : false} name="disclosure_b" id="disclosure_b"/>
                                                                        <label className="form-check-label" for="disclosure_b">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.disclosure_b == Number("0") ? true : false} name="disclosure_b" id="disclosure_b"/>
                                                                        <label className="form-check-label" for="disclosure_b">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.disclosure_b == Number("1") ? true : false} name="disclosure_b" id="disclosure_b"/>
                                                                        <label className="form-check-label" for="disclosure_b">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePersonalDetails" aria-expanded="true" aria-controls="collapsePersonalDetails">
                                                    Personal Details Questions
                                                </button>
                                            </h2>
                                            <div id="collapsePersonalDetails" className="accordion-collapse collapsed" data-bs-parent="#PersonalDetails">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has FAIS disclosure documents (permit) been signed and filed?
                                                            </h6>
                                                            <div className='row row-cols-1'>
                                                                <div className='col py-3 '>
                                                                    <h6 className='gatekeeping-question'>
                                                                        Was the name, surname gender, identifying number and client preference filled in correctly?
                                                                    </h6>
                                                                    <div className='row'>
                                                                        <div className='col-lg-4'>
                                                                            <div className="form-check">
                                                                                <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.personal_details_a == Number("5") ? true : false} name="personal_details_a" id="personal_details_a"/>
                                                                                <label className="form-check-label" for="personal_details_a">
                                                                                    <strong>Approved</strong>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-lg-4'>
                                                                            <div className="form-check">
                                                                                <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.personal_details_a == Number("0") ? true : false} name="personal_details_a" id="personal_details_a"/>
                                                                                <label className="form-check-label" for="personal_details_a">
                                                                                    <strong>Partially</strong> <strong>Approved</strong>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-lg-4'>
                                                                            <div className="form-check">
                                                                                <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.personal_details_a == Number("1") ? true : false} name="personal_details_a" id="personal_details_a"/>
                                                                                <label className="form-check-label" for="personal_details_a">
                                                                                    <strong>Not</strong> <strong>Approved</strong>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGeneral" aria-expanded="true" aria-controls="collapseGeneral">
                                                    General Questions
                                                </button>
                                            </h2>
                                            <div id="collapseGeneral" className="accordion-collapse collapsed" data-bs-parent="#General">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has the refusal of cover question been answered and details provided where the response is positive?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.general_a == Number("5") ? true : false} name="general_a" id="general_a"/>
                                                                        <label className="form-check-label" for="general_a">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.general_a == Number("0") ? true : false} name="general_a" id="general_a"/>
                                                                        <label className="form-check-label" for="general_a">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.general_a == Number("1") ? true : false} name="general_a" id="general_a"/>
                                                                        <label className="form-check-label" for="general_a">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Is this a replacement (or partial replacement) of cover?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.general_b == Number("5") ? true : false} name="general_b" id="general_b"/>
                                                                        <label className="form-check-label" for="general_b">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.general_b == Number("0") ? true : false} name="general_b" id="general_b"/>
                                                                        <label className="form-check-label" for="general_b">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.general_b == Number("1") ? true : false} name="general_b" id="general_b"/>
                                                                        <label className="form-check-label" for="general_b">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                List of clients’ previous insurer
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.general_c == Number("5") ? true : false} name="general_c" id="general_c"/>
                                                                        <label className="form-check-label" for="general_c">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.general_c == Number("0") ? true : false} name="general_c" id="general_c"/>
                                                                        <label className="form-check-label" for="general_c">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.general_c == Number("1") ? true : false} name="general_c" id="general_c"/>
                                                                        <label className="form-check-label" for="general_c">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has details of previous losses been completed with details?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.general_d == Number("5") ? true : false} name="general_d" id="general_d"/>
                                                                        <label className="form-check-label" for="general_d">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.general_d == Number("0") ? true : false} name="general_d" id="general_d"/>
                                                                        <label className="form-check-label" for="general_d">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.general_d == Number("1") ? true : false} name="general_d" id="general_d"/>
                                                                        <label className="form-check-label" for="general_d">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRiskClasses" aria-expanded="true" aria-controls="collapseRiskClasses">
                                                    Risk Classes / Client needs (Factual Questions)
                                                </button>
                                            </h2>
                                            <div id="collapseRiskClasses" className="accordion-collapse collapsed" data-bs-parent="#RiskClasses">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has all the relevant risk classes been identified and offered?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.risk_classes_a == Number("5") ? true : false} name="risk_classes_a" id="risk_classes_a"/>
                                                                        <label className="form-check-label" for="risk_classes_a">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.risk_classes_a == Number("0") ? true : false} name="risk_classes_a" id="risk_classes_a"/>
                                                                        <label className="form-check-label" for="risk_classes_a">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.risk_classes_a == Number("1") ? true : false} name="risk_classes_a" id="risk_classes_a"/>
                                                                        <label className="form-check-label" for="risk_classes_a">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Have all questions in the identified risk classes been answered
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.risk_classes_b == Number("5") ? true : false} name="risk_classes_b" id="risk_classes_b"/>
                                                                        <label className="form-check-label" for="risk_classes_b">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.risk_classes_b == Number("0") ? true : false} name="risk_classes_b" id="risk_classes_b"/>
                                                                        <label className="form-check-label" for="risk_classes_b">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.risk_classes_b == Number("1") ? true : false} name="risk_classes_b" id="risk_classes_b"/>
                                                                        <label className="form-check-label" for="risk_classes_b">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFNA" aria-expanded="true" aria-controls="collapseFNA">
                                                    Financial Needs Analysis Summary / Cover Recommendations
                                                </button>
                                            </h2>
                                            <div id="collapseFNA" className="accordion-collapse collapsed" data-bs-parent="#FNA">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Was the need of the client identified in the ROA?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.fna_a == Number("5") ? true : false} name="fna_a" id="fna_a"/>
                                                                        <label className="form-check-label" for="fna_a">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.fna_a == Number("0") ? true : false} name="fna_a" id="fna_a"/>
                                                                        <label className="form-check-label" for="fna_a">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.fna_a == Number("1") ? true : false} name="fna_a" id="fna_a"/>
                                                                        <label className="form-check-label" for="fna_a">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Was option or additional cover offered and discussed with the client? Are the responses recorded?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.fna_b == Number("5") ? true : false} name="fna_b" id="fna_b"/>
                                                                        <label className="form-check-label" for="fna_b">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.fna_b == Number("0") ? true : false} name="fna_b" id="fna_b"/>
                                                                        <label className="form-check-label" for="fna_b">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.fna_b == Number("1") ? true : false} name="fna_b" id="fna_b"/>
                                                                        <label className="form-check-label" for="fna_b">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRecommProducts" aria-expanded="true" aria-controls="collapseRecommProducts">
                                                    Recommended Products
                                                </button>
                                            </h2>
                                            <div id="collapseRecommProducts" className="accordion-collapse collapsed" data-bs-parent="#RecommProducts">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has the optional cover recommendations been made for all risk classes? Optional cover on buildings, contents, all risk, rental car, caravan contents or glitter finish on watercraft, etc. 
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.recommended_products_a == Number("5") ? true : false} name="recommended_products_a" id="recommended_products_a"/>
                                                                        <label className="form-check-label" for="recommended_products_a">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.recommended_products_a == Number("0") ? true : false} name="recommended_products_a" id="recommended_products_a"/>
                                                                        <label className="form-check-label" for="recommended_products_a">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.recommended_products_a == Number("1") ? true : false} name="recommended_products_a" id="recommended_products_a"/>
                                                                        <label className="form-check-label" for="recommended_products_a">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Is there an explanation that illustrates exclusions, special conditions or endorsements, or a reason to refuse cover? (e.g. no burglar bars, or linked alarm, immobilizer)
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.recommended_products_b == Number("5") ? true : false} name="recommended_products_b" id="recommended_products_b"/>
                                                                        <label className="form-check-label" for="recommended_products_b">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.recommended_products_b == Number("0") ? true : false} name="recommended_products_b" id="recommended_products_b"/>
                                                                        <label className="form-check-label" for="recommended_products_b">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.recommended_products_b == Number("1") ? true : false} name="recommended_products_b" id="recommended_products_b"/>
                                                                        <label className="form-check-label" for="recommended_products_b">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Is the quote on file?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.recommended_products_c == Number("5") ? true : false} name="recommended_products_c" id="recommended_products_c"/>
                                                                        <label className="form-check-label" for="recommended_products_c">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.recommended_products_c == Number("0") ? true : false} name="recommended_products_c" id="recommended_products_c"/>
                                                                        <label className="form-check-label" for="recommended_products_c">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.recommended_products_c == Number("1") ? true : false} name="recommended_products_c" id="recommended_products_c"/>
                                                                        <label className="form-check-label" for="recommended_products_c">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReplacements" aria-expanded="true" aria-controls="collapseReplacements">
                                                    Replacements
                                                </button>
                                            </h2>
                                            <div id="collapseReplacements" className="accordion-collapse collapsed" data-bs-parent="#Replacements">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Is this product a replacement? 
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.replacements_a == Number("5") ? true : false} name="replacements_a" id="replacements_a"/>
                                                                        <label className="form-check-label" for="replacements_a">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.replacements_a == Number("0") ? true : false} name="replacements_a" id="replacements_a"/>
                                                                        <label className="form-check-label" for="replacements_a">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.replacements_a == Number("1") ? true : false} name="replacements_a" id="replacements_a"/>
                                                                        <label className="form-check-label" for="replacements_a">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has the purpose and reasons been identified?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.replacements_b == Number("5") ? true : false} name="replacements_b" id="replacements_b"/>
                                                                        <label className="form-check-label" for="replacements_b">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.replacements_b == Number("0") ? true : false} name="replacements_b" id="replacements_b"/>
                                                                        <label className="form-check-label" for="replacements_b">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.replacements_b == Number("1") ? true : false} name="replacements_b" id="replacements_b"/>
                                                                        <label className="form-check-label" for="replacements_b">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has the comparison section been completed?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.replacements_c == Number("5") ? true : false} name="replacements_c" id="replacements_c"/>
                                                                        <label className="form-check-label" for="replacements_c">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.replacements_c == Number("0") ? true : false} name="replacements_c" id="replacements_c"/>
                                                                        <label className="form-check-label" for="replacements_c">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.replacements_c == Number("1") ? true : false} name="replacements_c" id="replacements_c"/>
                                                                        <label className="form-check-label" for="replacements_c">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has the required information been captured adequately on the Comparison ROA?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.replacements_d == Number("5") ? true : false} name="replacements_d" id="replacements_d"/>
                                                                        <label className="form-check-label" for="replacements_d">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.replacements_d == Number("0") ? true : false} name="replacements_d" id="replacements_d"/>
                                                                        <label className="form-check-label" for="replacements_d">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.replacements_d == Number("1") ? true : false} name="replacements_d" id="replacements_d"/>
                                                                        <label className="form-check-label" for="replacements_d">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClientConsent" aria-expanded="true" aria-controls="collapseClientConsent">
                                                    Client Consent
                                                </button>
                                            </h2>
                                            <div id="collapseClientConsent" className="accordion-collapse collapsed" data-bs-parent="#ClientConsent">
                                                <div className="accordion-body">
                                                    <div className='row row-cols-1'>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has the debit order instruction been completed and signed?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.client_consent_a == Number("5") ? true : false} name="client_consent_a" id="client_consent_a"/>
                                                                        <label className="form-check-label" for="client_consent_a">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.client_consent_a == Number("0") ? true : false} name="client_consent_a" id="client_consent_a"/>
                                                                        <label className="form-check-label" for="client_consent_a">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.client_consent_a == Number("1") ? true : false} name="client_consent_a" id="client_consent_a"/>
                                                                        <label className="form-check-label" for="client_consent_a">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col py-3 border-bottom'>
                                                            <h6 className='gatekeeping-question'>
                                                                Has the client consented to a credit check for STI purposes?
                                                            </h6>
                                                            <div className='row'>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={5} checked={ARCAnswers?.client_consent_b == Number("5") ? true : false} name="client_consent_b" id="client_consent_b"/>
                                                                        <label className="form-check-label" for="client_consent_b">
                                                                            <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={0} checked={ARCAnswers?.client_consent_b == Number("0") ? true : false} name="client_consent_b" id="client_consent_b"/>
                                                                        <label className="form-check-label" for="client_consent_b">
                                                                            <strong>Partially</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <div className="form-check">
                                                                        <input onChange={(e)=>{Versions.length > 0 ? CurrentVersion === Versions[Versions.length-1]['version'] ? onChange(e) : "" : onChange(e)}}className="form-check-input" type="radio" value={1} checked={ARCAnswers?.client_consent_b == Number("1") ? true : false} name="client_consent_b" id="client_consent_b"/>
                                                                        <label className="form-check-label" for="client_consent_b">
                                                                            <strong>Not</strong> <strong>Approved</strong>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            }
                        
                            {/* <div className='row row-cols-4'>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Disclosure", 5)}}>Add Disclosure</button>
                                </div>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Personal Details", 5)}}>Add Personal Details</button>
                                </div>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"General", 5)}}>Add General</button>
                                </div>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Risk Classes / Client needs (Factual Questions)", 5)}}>Add Risk Classes</button>
                                </div>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Financial Needs Analysis Summary / Cover Recommendations", 5)}}>Add FNA</button>
                                </div>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Recommended Products (Santam/A&G/M&F)", 5)}}>Add Recommended Products</button>
                                </div>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Replacements", 5)}}>Add Replacements</button>
                                </div>
                                <div className='col my-2'>
                                    <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Client Consent", 5)}}>Add Client Consent</button>
                                </div>
                            </div> */}
                        </div>
                        <br/>
                        <div className=''>
                            <div className="mx-auto">
                                <div className='row'>
                                    {
                                        DocumentInitalData?.starting_point == 2 ?
                                            user?.is_superuser || (DocumentInitalData?.user_id !== user?.id && user?.userType === 1) ?
                                            <div className={ DocumentInitalData?.status == 2 ? 'col-lg-4' : "col-lg-6"}>
                                                <button 
                                                    className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100"
                                                    type='button'
                                                    onClick={()=>{router.push({pathname: "/apps/compliance/documents/view/gatekeeping", query: {'dId': dId}})}}
                                                >
                                                    <i className='bi pe-none mx-2 me-2 fa-solid fa-arrow-left'/>
                                                    Back to Gatekeeping
                                                </button>
                                            </div>
                                            :
                                            user?.is_superuser || (DocumentInitalData?.user_id === user?.id && user?.userType === 1) ?
                                            <div className={ DocumentInitalData?.status == 2 ? 'col-lg-4' : "col-lg-6"}>
                                                <button 
                                                    className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100"
                                                    type='button'
                                                    onClick={()=>{router.push({pathname: "/apps/compliance/documents/gatekeeping", query: {'dId': dId}})}}
                                                >
                                                    <i className='bi pe-none mx-2 me-2 fa-solid fa-arrow-left'/>
                                                    Back to Gatekeeping
                                                </button>
                                            </div>
                                            :<></>
                                        :<></>
                                    }
                                    {
                                        (user?.is_superuser || user?.userType === 1 ) && DocumentInitalData?.status != 1 ?
                                        <div className={ DocumentInitalData?.status == 2 ? 'col-lg-4' : "col-lg-6"}>
                                            <button className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100" type="submit">
                                                Save & Continue to Summary
                                            </button>
                                        </div>
                                        :<></>
                                    }
                                    {
                                        Versions.length >= 1 || user?.userType === 2 ?
                                        <div className={ DocumentInitalData?.status == 1 || DocumentInitalData?.status == 3  || DocumentInitalData?.status == 5 ? 'my-2 col-lg-12' : DocumentInitalData?.status == 2 ? 'col-lg-4' : "col-lg-6"}>
                                            <button 
                                                className="btn btn-primary compliance-inital-card-button-text btn-sfp w-100"
                                                type='button'
                                                onClick={()=>{router.push({pathname: "/apps/compliance/documents/summary", query: {'dId': dId}})}}
                                            >
                                                Continue to Summary
                                                <i className='bi pe-none mx-2 me-2 fa-solid fa-arrow-right'/>
                                            </button>
                                        </div>
                                        :<></>
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

export default ARCDocument