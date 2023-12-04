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

const RiskPlanning = () => {
    
    const router = useRouter()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const user = useSelector(state=>state.auth.user)
    const formId = router?.query?.fId
    const [Loaded, setLoaded] = useState(false)

    
    
    const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
    // API Config
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        }
    }

    // Reference Points for TinyMCE
    
    const RP_DC_CommentsRef = useRef(null)
    const RP_DiC_CommentsRef = useRef(null)
    const RP_DrC_CommentsRef = useRef(null)
    const RP_LC_FinancialSolutionsRef = useRef(null)
    const RP_DiC_FinancialSolutionsRef = useRef(null)
    const RP_DrC_FinancialSolutionsRef = useRef(null)
    const RP_AltS_1Ref = useRef(null)
    const RP_AltS_2Ref = useRef(null)
    const RP_AltS_3Ref = useRef(null)
    const ProductReasonsRef = useRef(null)
    const productExecutorFeeRef = useRef(null)
    const productProductMaterialAspectsRef = useRef(null)
    const productProductDetailsRef = useRef(null)
    const productInformationExplainedRef = useRef(null)
    const productNominationOfBeneficiariesRef = useRef(null)

    // 

    const [FormData, setFormData] = useState({
        
        advisorId : user?.id,
        formId : formId,

        RP_DC_LumpSumTotalNeed : "",
        RP_DC_LumpSumExistingProvisions : "",
        RP_DC_LumpSumExistingShortfallSurplus : "",
        RP_DC_LumpSumInvestments : "",        
        RP_DC_IncomeTotalNeed : "",
        RP_DC_IncomeExistingProvisions : "",
        RP_DC_IncomeExistingShortfallSurplus : "",
        RP_DC_IncomeInvestments : "",        
        RP_DC_FB_TotalNeed : "",
        RP_DC_FB_ExistingProvisions : "",
        RP_DC_FB_ExistingShortfallSurplus : "",
        RP_DC_FB_Investments : "",    
        RP_DC_Other : "",
        RP_DC_OtherTotalNeed : "",
        RP_DC_OtherExistingProvisions : "",
        RP_DC_OtherExistingShortfallSurplus : "",
        RP_DC_OtherInvestments : "",        
        RP_DC_Comments : "",    
        RP_DiC_LumpSumTotalNeed : "",
        RP_DiC_LumpSumExistingProvisions : "",
        RP_DiC_LumpSumExistingShortfallSurplus : "",
        RP_DiC_LumpSumInvestments : "",        
        RP_DiC_PI_TotalNeed : "",
        RP_DiC_PI_ExistingProvisions : "",
        RP_DiC_PI_ExistingShortfallSurplus : "",
        RP_DiC_PI_Investments : "",        
        RP_DiC_TI_TotalNeed : "",
        RP_DiC_TI_ExistingProvisions : "",
        RP_DiC_TI_ExistingShortfallSurplus : "",
        RP_DiC_TI_Investments : "",            
        RP_DiC_SiB_TotalNeed : "",
        RP_DiC_SiB_ExistingProvisions : "",
        RP_DiC_SiB_ExistingShortfallSurplus : "",
        RP_DiC_SiB_Investments : "",      
        RP_DiC_Other1 : "",
        RP_DiC_OtherTotalNeed1 : "",
        RP_DiC_OtherExistingProvisions1 : "",
        RP_DiC_OtherExistingShortfallSurplus1 : "",
        RP_DiC_OtherInvestments1 : "",         
        RP_DiC_Other2 : "",
        RP_DiC_OtherTotalNeed2 : "",
        RP_DiC_OtherExistingProvisions2 : "",
        RP_DiC_OtherExistingShortfallSurplus2 : "",
        RP_DiC_OtherInvestments2 : "",     
        RP_DiC_Comments : "",        
        RP_DrC_LumpSumTotalNeed : "",
        RP_DrC_LumpSumExistingProvisions : "",
        RP_DrC_LumpSumExistingShortfallSurplus : "",
        RP_DrC_LumpSumInvestments : "",        
        RP_DrC_IncomeTotalNeed : "",
        RP_DrC_IncomeExistingProvisions : "",
        RP_DrC_IncomeExistingShortfallSurplus : "",
        RP_DrC_IncomeInvestments : "",        
        RP_DrC_Other1 : "",
        RP_DrC_OtherTotalNeed1 : "",
        RP_DrC_OtherExistingProvisions1 : "",
        RP_DrC_OtherExistingShortfallSurplus1 : "",
        RP_DrC_OtherInvestments1 : "",         
        RP_DrC_Other2 : "",
        RP_DrC_OtherTotalNeed2 : "",
        RP_DrC_OtherExistingProvisions2 : "",
        RP_DrC_OtherExistingShortfallSurplus2 : "",
        RP_DrC_OtherExistingriskPlannings2 : "",     
        RP_DrC_Comments : "",      
        RP_LC_FinancialSolutions : "",
        RP_DiC_FinancialSolutions : "",
        RP_DrC_FinancialSolutions : "",    
        RP_AltS_1 : "",
        RP_AltS_2 : "",
        RP_AltS_3 : "",       
    })
    const [ProductTaken, setProductTaken] = useState([])
    const AddNewProductTaken = (e) => {
        const current = [...ProductTaken]
        current.push({
            advisorId : user?.id,  
            formId : formId,  
            Product_Taken : "",  
            Product_Provider : "",
            Policy_Number : "",
            Product_Name : "",
            Product_Premium : "",
            Product_PremiumFrequency : "0", 
            Product_Pattern : "",
            Product_Escalation : "",
            Product_ContractingParty : "",
            Product_LivesAssured : "",
            Product_Beneficiary : "",
            Product_PremiumPayer : "",
            Product_1stYearCommission : "",
            Product_2ndYearCommission : "",
            Product_OngoingFees : "",
            Product_OngoingFeesFrequency : "",
            Product_OngoingFeesFrequency1 : "0",    
            TotalFees_n_Commissions : "",        
            BenDesc_1 : "",
            BenDesc_CoverAmount_1 : "",
            BenDesc_2 : "",
            BenDesc_CoverAmount_2 : "",
            BenDesc_3 : "",
            BenDesc_CoverAmount_3 : "",
            BenDesc_4 : "",
            BenDesc_CoverAmount_4 : "",
            BenDesc_5 : "",
            BenDesc_CoverAmount_5 : "",
            BenDesc_6 : "",
            BenDesc_CoverAmount_6 : "",
            BenDesc_7 : "",
            BenDesc_CoverAmount_7 : "",        
            ProductReasons : "",
            ProductMaterialAspects : "",
            ProductDetails : "",
            ExecutorFee : "",
            NominationOfBeneficiaries : "",
            InformationExplained : ""
        })
        setProductTaken(current)
    }
    const RemoveNewProductTaken = (e) => {
        const current = [...ProductTaken]
        current.pop()
        setProductTaken(current)
    }
    const on_ProductTaken_Change = (e, i) => {
        let newProductTaken = [...ProductTaken]
        newProductTaken[i][e.target.name] = e.target.value
        setProductTaken(newProductTaken)
    }
    // Add New DC Other
    const [Risk_DC_Data, setRisk_DC_Data] = useState([])
    const AddNewRisk_DC_Data = (e) => {
        const current = [...Risk_DC_Data]
        current.push({
            advisorId : user?.id,  
            formId : formId,  
            
            DC_Other : "",
            DC_OtherTotalNeed : "",
            DC_OtherExistingProvisions : "",
            DC_OtherExistingShortfallSurplus : "",
            DC_OtherInvestments : "",        
          
        })
        setRisk_DC_Data(current)
    }
    const RemoveNewRisk_DC_Data = (e) => {
        const current = [...Risk_DC_Data]
        current.pop()
        setRisk_DC_Data(current)
    }
    const on_Risk_DC_Data_Change = (e, i) => {
        let newRisk_DC_Data = [...Risk_DC_Data]
        newRisk_DC_Data[i][e.target.name] = e.target.value
        setRisk_DC_Data(newRisk_DC_Data)
    }
    // End New DC Other
    
    // Add New DiC Other
    const [Risk_DiC_Data, setRisk_DiC_Data] = useState([])
    const AddNewRisk_DiC_Data = (e) => {
        const current = [...Risk_DiC_Data]
        current.push({
            advisorId : user?.id,  
            formId : formId,  
            
            DiC_Other : "",
            DiC_OtherTotalNeed : "",
            DiC_OtherExistingProvisions : "",
            DiC_OtherExistingShortfallSurplus : "",
            DiC_OtherInvestments : "",        
          
        })
        setRisk_DiC_Data(current)
    }
    const RemoveNewRisk_DiC_Data = (e) => {
        const current = [...Risk_DiC_Data]
        current.pop()
        setRisk_DiC_Data(current)
    }
    const on_Risk_DiC_Data_Change = (e, i) => {
        let newRisk_DiC_Data = [...Risk_DiC_Data]
        newRisk_DiC_Data[i][e.target.name] = e.target.value
        setRisk_DiC_Data(newRisk_DiC_Data)
    }
    // End New DiC Other

    // Add New DrC Other
    const [Risk_DrC_Data, setRisk_DrC_Data] = useState([])
    const AddNewRisk_DrC_Data = (e) => {
        const current = [...Risk_DrC_Data]
        current.push({
          advisorId : user?.id,  
          formId : formId,  
          
          DrC_Other : "",
          DrC_OtherTotalNeed : "",
          DrC_OtherExistingProvisions : "",
          DrC_OtherExistingShortfallSurplus : "",
          DrC_OtherInvestments : "",        
          
        })
        setRisk_DrC_Data(current)
    }
    const RemoveNewRisk_DrC_Data = (e) => {
        const current = [...Risk_DrC_Data]
        current.pop()
        setRisk_DrC_Data(current)
    }
    const on_Risk_DrC_Data_Change = (e, i) => {
        let newRisk_DrC_Data = [...Risk_DrC_Data]
        newRisk_DrC_Data[i][e.target.name] = e.target.value
        setRisk_DrC_Data(newRisk_DrC_Data)
    }
    // End New DrC Other
    
    const on_ProductTaken_Value_Change = (name, i, val) => {
        let newProductTaken = [...ProductTaken]
        newProductTaken[i][""+name+""] = val
        setProductTaken(newProductTaken)
    }
    
    const onSubmit = e => {
        e.preventDefault()
        
    }
    
    const compulsoryAEditorRef = useRef(null);
    const FICAEditorRef = useRef(null);
    
    
    const LoadData = async (formId) => {
        
        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId
        })
        try {
            const response = await axios.post(
                `/api/roa/form/riskplanning`,
                Body,
                config
            )
            setFormData(response?.data?.data)


        } catch (error) {
            
        }
        setLoaded(false)
    }

    useEffect(() => {
        // LoadData(formId)
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
                title={"Edit ROA Document"}
                content={"Edit ROA Document"}
            >
                <EditROALayout
                    appTitle={'Edit ROA Document'}
                    pageTitle={'Edit ROA Document'}
                    appName={'ROA'}
                    app={'roa'}
                >
                    <div className='roa-edit-card'>
                        <div className='inital-card-header text-center'>
                            <b>Risk Planning</b>
                        </div> 
                        <div className=''>
                            <form onSubmit={e => onSubmit(e)}>
                                {/* <div className='row'>
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
                                </div>  */}
                                <div className={'inital-card-header mx-5'}>     
                                    <div className='row'>
                                        <b>Financial Needs Analysis Summary</b>
                                        <div className='row'>
                                            <div className='col'>
                                                <b className='roa-font'>Financial Planning Need/Objective</b>
                                            </div>
                                            <div className='col'>
                                                <b className='roa-font'>Total need identified</b>
                                            </div>
                                            <div className='col'>
                                                <b className='roa-font'>Existing provisions</b>
                                            </div>
                                            <div className='col'>
                                                <b className='roa-font'>Shortfall/ Surplus</b>
                                            </div>
                                            <div className='col'>
                                                <b className='roa-font'>Cover taken up now</b>
                                            </div>
                                        </div>
                                        {/* Death Cover */}
                                        <div className='col-lg-12'> 
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Death Cover:</b>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Death Cover:Lump sum</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumTotalNeed' value={FormData?.RP_DC_LumpSumTotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumExistingProvisions' value={FormData?.RP_DC_LumpSumExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumExistingShortfallSurplus' value={FormData?.RP_DC_LumpSumTotalNeed - FormData?.RP_DC_LumpSumExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumInvestments' value={FormData?.RP_DC_LumpSumInvestments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Death Cover: Income (p.m.)</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeTotalNeed' value={FormData?.RP_DC_IncomeTotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeExistingProvisions' value={FormData?.RP_DC_IncomeExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeExistingShortfallSurplus' value={FormData?.RP_DC_IncomeTotalNeed - FormData?.RP_DC_IncomeExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeInvestments' value={FormData?.RP_DC_IncomeInvestments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Funeral Benefit (p.m.)</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_TotalNeed' value={FormData?.RP_DC_FB_TotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_ExistingProvisions' value={FormData?.RP_DC_FB_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_ExistingShortfallSurplus' value={FormData?.RP_DC_FB_TotalNeed - FormData?.RP_DC_FB_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_Investments' value={FormData?.RP_DC_FB_Investments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Other Death Cover */}
                                            {
                                                Risk_DC_Data.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className= { 
                                                                    user?.email.includes('sfp') || user?.email.includes('succession')? "btn btn-primary sfp " 
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p " 
                                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam " 
                                                                    : "btn btn-primary sfp "
                                                                } type='button' onClick={(e)=>{AddNewRisk_DC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faPlus} /> Add New Other Death Cover</button>
                                                        </div>
                                                    </div>
                                                :<></>
                                            }
                                            {
                                                Risk_DC_Data.length  > 0 ?
                                                    Risk_DC_Data.map((row,key) => {
                                                        return (
                                                            <div key={key}>
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        {
                                                                            Risk_DC_Data.length === key + 1?
                                                                            <button className= { 
                                                                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                                                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                                                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                                                                : "btn btn-primary sfp "
                                                                            } type='button' onClick={(e)=>{AddNewRisk_DC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faPlus} /> Add New Other Death Cover</button>
                                                                            : <></>
                                                                        }
                                                                    </div>
                                                                    <div className='col'>
                                                                        <button className= { 
                                                                            user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                                                            : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                                                            : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                                                            : "btn btn-primary sfp "
                                                                        } type='button' onClick={(e)=>{RemoveNewRisk_DC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faMinus} /> Remove Other Death Cover</button>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    {/* <div className='col'>
                                                                        <b className='roa-font'>Death Cover: Other</b>
                                                                    </div> */}
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <textarea type="text" className="form-control roa-font" name='DC_Other' value={row?.DC_Other} onChange={(e) => {on_Risk_DC_Data_Change(e, key)}} placeholder='Enter the title' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DC_OtherTotalNeed' value={row?.DC_OtherTotalNeed} onChange={(e) => {on_Risk_DC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DC_OtherExistingProvisions' value={row?.DC_OtherExistingProvisions} onChange={(e) => {on_Risk_DC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DC_OtherExistingShortfallSurplus' value={row?.DC_OtherTotalNeed-row?.DC_OtherExistingProvisions} onChange={(e) => {on_Risk_DC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DC_OtherInvestments' value={row?.DC_OtherInvestments} onChange={(e) => {on_Risk_DC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                :<></>
                                            }
                                            <p className='roa-label my-2'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Comments:</b>
                                                </div>
                                                <div className='col-12'>
                                                    <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                                        onInit={(evt, editor) => RP_DC_CommentsRef.current = editor}
                                                        value={FormData['RP_DC_Comments']}
                                                        onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DC_Comments']: RP_DC_CommentsRef.current.getContent() }) }}
                                                        name="RP_DC_Comments"
                                                        init={{
                                                            selector: "textarea",
                                                            browser_spellcheck : true,
                                                            height: 300,
                                                            menu: true,
                                                            plugins: [
                                                                'advlist autolink link lists image charmap print preview anchor',
                                                                'searchreplace visualblocks code fullscreen',
                                                                'insertdatetime media table paste code help wordcount',
                                                            ],
                                                            toolbar: 'styles | undo redo | formatselect | ' +
                                                            'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                            'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                            'removeformat',
                                                            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                            init_instance_callback : function(editor) {
                                                                var freeTiny = document.querySelector('.tox .tox-notification--in');
                                                                freeTiny ? freeTiny.style.display = 'none' : "";
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <hr/>
                                        </div> 
                                        {/* Disability Cover */}
                                        <div className='col-lg-12'> 
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Disability Cover:</b>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Lump Sum</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumTotalNeed' value={FormData?.RP_DiC_LumpSumTotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumExistingProvisions' value={FormData?.RP_DiC_LumpSumExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumExistingShortfallSurplus' value={FormData?.RP_DiC_LumpSumTotalNeed - FormData?.RP_DiC_LumpSumExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumInvestments' value={FormData?.RP_DiC_LumpSumInvestments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Permanent Income (p.m.)</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_TotalNeed' value={FormData?.RP_DiC_PI_TotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_ExistingProvisions' value={FormData?.RP_DiC_PI_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_ExistingShortfallSurplus' value={FormData?.RP_DiC_PI_TotalNeed - FormData?.RP_DiC_PI_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_Investments' value={FormData?.RP_DiC_PI_Investments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Temporary Income (p.m.)</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_TotalNeed' value={FormData?.RP_DiC_TI_TotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_ExistingProvisions' value={FormData?.RP_DiC_TI_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_ExistingShortfallSurplus' value={FormData?.RP_DiC_TI_TotalNeed - FormData?.RP_DiC_TI_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_Investments' value={FormData?.RP_DiC_TI_Investments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Sickness Benefit</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_TotalNeed' value={FormData?.RP_DiC_SiB_TotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_ExistingProvisions' value={FormData?.RP_DiC_SiB_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_ExistingShortfallSurplus' value={FormData?.RP_DiC_SiB_TotalNeed - FormData?.RP_DiC_SiB_ExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_Investments' value={FormData?.RP_DiC_SiB_Investments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Other Disease Cover */}
                                            {
                                                Risk_DiC_Data.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className= { 
                                                                    user?.email.includes('sfp') || user?.email.includes('succession')? "btn btn-primary sfp " 
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p " 
                                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam " 
                                                                    : "btn btn-primary sfp "
                                                                } type='button' onClick={(e)=>{AddNewRisk_DiC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faPlus} /> Add New Other Disability Cover</button>
                                                        </div>
                                                    </div>
                                                :<></>
                                            }
                                            {
                                                Risk_DiC_Data.length  > 0 ?
                                                    Risk_DiC_Data.map((row,key) => {
                                                        return (
                                                            <div key={key}>
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        {
                                                                            Risk_DiC_Data.length === key + 1?
                                                                            <button className= { 
                                                                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                                                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                                                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                                                                : "btn btn-primary sfp "
                                                                            } type='button' onClick={(e)=>{AddNewRisk_DiC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faPlus} /> Add New Other Disability Cover</button>
                                                                            : <></>
                                                                        }
                                                                    </div>
                                                                    <div className='col'>
                                                                        <button className= { 
                                                                            user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                                                            : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                                                            : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                                                            : "btn btn-primary sfp "
                                                                        } type='button' onClick={(e)=>{RemoveNewRisk_DiC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faMinus} /> Remove Other Disability Cover</button>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    {/* <div className='col'>
                                                                        <b className='roa-font'>Death Cover: Other</b>
                                                                    </div> */}
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <textarea type="text" className="form-control roa-font" name='DC_Other' value={row?.DC_Other} onChange={(e) => {on_Risk_DiC_Data_Change(e, key)}} placeholder='Enter the title' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DiC_OtherTotalNeed' value={row?.DiC_OtherTotalNeed} onChange={(e) => {on_Risk_DiC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DiC_OtherExistingProvisions' value={row?.DiC_OtherExistingProvisions} onChange={(e) => {on_Risk_DiC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DiC_OtherExistingShortfallSurplus' value={row?.DiC_OtherTotalNeed - row?.DiC_OtherExistingProvisions} onChange={(e) => {on_Risk_DiC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DiC_OtherInvestments' value={row?.DiC_OtherInvestments} onChange={(e) => {on_Risk_DiC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                :<></>
                                            }
                                            <p className='roa-label my-2'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Comments:</b>
                                                </div>
                                                <div className='col-12'>
                                                    <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                                        onInit={(evt, editor) => RP_DiC_CommentsRef.current = editor}
                                                        value={FormData['RP_DiC_Comments']}
                                                        onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DiC_Comments']: RP_DiC_CommentsRef.current.getContent() }) }}
                                                        name="RP_DiC_Comments"
                                                        init={{
                                                            selector: "textarea",
                                                            browser_spellcheck : true,
                                                            height: 300,
                                                            menu: true,
                                                            plugins: [
                                                                'advlist autolink link lists image charmap print preview anchor',
                                                                'searchreplace visualblocks code fullscreen',
                                                                'insertdatetime media table paste code help wordcount',
                                                            ],
                                                            toolbar: 'styles | undo redo | formatselect | ' +
                                                            'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                            'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                            'removeformat',
                                                            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                            init_instance_callback : function(editor) {
                                                                var freeTiny = document.querySelector('.tox .tox-notification--in');
                                                                freeTiny ? freeTiny.style.display = 'none' : "";
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <hr/>
                                            
                                            
                                        </div> 
                                        {/* Dread Disease Cover */}
                                        <div className='col-lg-12'> 
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Dread Disease Cover:</b>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Lump Sum</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumTotalNeed' value={FormData?.RP_DrC_LumpSumTotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumExistingProvisions' value={FormData?.RP_DrC_LumpSumExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumExistingShortfallSurplus' value={FormData?.RP_DrC_LumpSumTotalNeed - FormData?.RP_DrC_LumpSumExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumInvestments' value={FormData?.RP_DrC_LumpSumInvestments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row my-2'>
                                                <div className='col'>
                                                    <b className='roa-font'>Income (p.m.)</b>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeTotalNeed' value={FormData?.RP_DrC_IncomeTotalNeed} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeExistingProvisions' value={FormData?.RP_DrC_IncomeExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeExistingShortfallSurplus' value={FormData?.RP_DrC_IncomeTotalNeed - FormData?.RP_DrC_IncomeExistingProvisions} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeInvestments' value={FormData?.RP_DrC_IncomeInvestments} onChange={(e) => {onChange(e)}} placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Other Dread Disease Cover */}
                                            {
                                                Risk_DrC_Data.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className= { 
                                                                    user?.email.includes('sfp') || user?.email.includes('succession')? "btn btn-primary sfp " 
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p " 
                                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam " 
                                                                    : "btn btn-primary sfp "
                                                                } type='button' onClick={(e)=>{AddNewRisk_DrC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faPlus} /> Add New Other Dread Disease Cover</button>
                                                        </div>
                                                    </div>
                                                :<></>
                                            }
                                            {
                                                Risk_DrC_Data.length  > 0 ?
                                                    Risk_DrC_Data.map((row,key) => {
                                                        return (
                                                            <div key={key}>
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        {
                                                                            Risk_DrC_Data.length === key + 1?
                                                                            <button className= { 
                                                                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                                                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                                                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                                                                : "btn btn-primary sfp "
                                                                            } type='button' onClick={(e)=>{AddNewRisk_DrC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faPlus} /> Add New Other Dread Disease Cover</button>
                                                                            : <></>
                                                                        }
                                                                    </div>
                                                                    <div className='col'>
                                                                        <button className= { 
                                                                            user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                                                            : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                                                            : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                                                            : "btn btn-primary sfp "
                                                                        } type='button' onClick={(e)=>{RemoveNewRisk_DrC_Data(e)}}><FontAwesomeIcon width={'15px'} icon={faMinus} /> Remove Other Dread Disease Cover</button>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    {/* <div className='col'>
                                                                        <b className='roa-font'>Death Cover: Other</b>
                                                                    </div> */}
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <textarea type="text" className="form-control roa-font" name='DC_Other' value={row?.DC_Other} onChange={(e) => {on_Risk_DrC_Data_Change(e, key)}} placeholder='Enter the title' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DrC_OtherTotalNeed' value={row?.DrC_OtherTotalNeed} onChange={(e) => {on_Risk_DrC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DrC_OtherExistingProvisions' value={row?.DrC_OtherExistingProvisions} onChange={(e) => {on_Risk_DrC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DrC_OtherExistingShortfallSurplus' value={row?.DrC_OtherTotalNeed - row?.DiC_OtherExistingProvisions} onChange={(e) => {on_Risk_DrC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={key['DC_Other'] === ""} type="text" className="form-control roa-font" name='DrC_OtherInvestments' value={row?.DrC_OtherInvestments} onChange={(e) => {on_Risk_DrC_Data_Change(e, key)}} placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                :<></>
                                            }
                                            <p className='roa-label my-2'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Comments:</b>
                                                </div>
                                                <div className='col-12'>
                                                    <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                                        onInit={(evt, editor) => RP_DiC_CommentsRef.current = editor}
                                                        value={FormData['RP_DrC_Comments']}
                                                        onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DrC_Comments']: RP_DrC_CommentsRef.current.getContent() }) }}
                                                        name="RP_DrC_Comments"
                                                        init={{
                                                            selector: "textarea",
                                                            browser_spellcheck : true,
                                                            height: 300,
                                                            menu: true,
                                                            plugins: [
                                                                'advlist autolink link lists image charmap print preview anchor',
                                                                'searchreplace visualblocks code fullscreen',
                                                                'insertdatetime media table paste code help wordcount',
                                                            ],
                                                            toolbar: 'styles | undo redo | formatselect | ' +
                                                            'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                            'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                            'removeformat',
                                                            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                            init_instance_callback : function(editor) {
                                                                var freeTiny = document.querySelector('.tox .tox-notification--in');
                                                                freeTiny ? freeTiny.style.display = 'none' : "";
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <hr/>
                                            
                                        </div> 
                                        {/* Section C */}
                                        <div className='col-lg-12'>
                                            <div className='text-center'>
                                                <b>Section C</b>
                                            </div>
                                            <span className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text" 
                                                : user?.email.includes('fs4p') ? "text-start fs4p-text" 
                                                : user?.email.includes('sanlam') ? "text-start sanlam-text" 
                                                : "fw-bold"
                                            } ><b>Financial Solutions:</b></span> 
                                            <p className="roa-label">Summary of recommendations to address your identified needs.</p>
                                            <p className="roa-label"> No cash values are payable/accessible unless a specified event has occurred, i.e., the life event for which cover is taken; in which case the proceeds are payable tax-free. The premiums are not tax-deductible according to current legislation and loans against the policy are not permitted.</p>    
                                            <p className="roa-label">Should the policy have an accelerator benefit attached, it means that upon a claim of that benefit the life cover amount will reduce by the claim amount. Standalone benefits are independent of the life cover, and you may claim without affecting the life cover amounts.</p>
                                            <p className="roa-label"><u>Life Cover:</u></p>
                                            <p className="roa-label">Policies payable to the estate will attract executors’ fees at a maximum of 3.5% + VAT. Where there is a beneficiary the executors fees will not be levied. Executors’ fees are applicable to all assets in the estate of a client and the exemption only applies to policies with beneficiaries. </p>
                                            <p className="roa-label">Death benefits will not be paid where the life insured commits suicide within 2 years of commencement or reinstatement of the cover.</p>
                                            <Editor
                                                onInit={(evt, editor) => RP_LC_FinancialSolutionsRef.current = editor}
                                                value={FormData['RP_LC_FinancialSolutions']}
                                                onEditorChange={(e)=>{ setFormData({...FormData, ['RP_LC_FinancialSolutions']: RP_LC_FinancialSolutionsRef.current.getContent() }) }}
                                                onFocus={(e)=>{backgroundInfo_onFocus1()}}
                                                onBlur={(e)=>{backgroundInfo_onBlur1();onFieldBlur(e)}}                      
                                                name="RP_LC_FinancialSolutions"
                                                init={{
                                                    selector: "textarea",
                                                    browser_spellcheck : true,
                                                    placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
                                                    height: 300,
                                                    menu: true,
                                                    plugins: [
                                                        'advlist autolink link lists image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount',
                                                    ],
                                                    toolbar: 'styles | undo redo | formatselect | ' +
                                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                    'removeformat',
                                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                            <hr/>
                                            <p className="roa-font"><u>Disability Cover:</u></p>
                                            <Editor
                                                onInit={(evt, editor) => RP_DiC_FinancialSolutionsRef.current = editor}
                                                value={FormData['RP_DiC_FinancialSolutions']}
                                                onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DiC_FinancialSolutions']: RP_DiC_FinancialSolutionsRef.current.getContent() }) }}
                                                onFocus={(e)=>{backgroundInfo_onFocus2()}}
                                                onBlur={(e)=>{backgroundInfo_onBlur2();onFieldBlur(e)}}                      
                                                name="RP_DiC_FinancialSolutions"
                                                init={{
                                                    selector: "textarea",
                                                    browser_spellcheck : true,
                                                    placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
                                                    height: 300,
                                                    menu: true,
                                                    plugins: [
                                                        'advlist autolink link lists image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount',
                                                    ],
                                                    toolbar: 'styles | undo redo | formatselect | ' +
                                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                    'removeformat',
                                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                            <hr/>
                                            <p className="roa-font"><u>Dread Disease Cover:</u></p>
                                            <Editor
                                                onInit={(evt, editor) => RP_DrC_FinancialSolutionsRef.current = editor}
                                                value={FormData['RP_DrC_FinancialSolutions']}
                                                onEditorChange={(e)=>{ setFormData({...FormData, ['RP_DrC_FinancialSolutions']: RP_DrC_FinancialSolutionsRef.current.getContent() }) }}
                                                onFocus={(e)=>{backgroundInfo_onFocus2()}}
                                                onBlur={(e)=>{backgroundInfo_onBlur2();onFieldBlur(e)}}                      
                                                name="RP_DrC_FinancialSolutions"
                                                init={{
                                                    selector: "textarea",
                                                    browser_spellcheck : true,
                                                    placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
                                                    height: 300,
                                                    menu: true,
                                                    plugins: [
                                                        'advlist autolink link lists image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount',
                                                    ],
                                                    toolbar: 'styles | undo redo | formatselect | ' +
                                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                    'removeformat',
                                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                        </div>      
                                        {/* Section D */}
                                        <div className='col-lg-12'>
                                            <div className='text-center'>
                                                <b>Section D</b>
                                            </div>
                                            <span className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text" 
                                                : user?.email.includes('fs4p') ? "text-start fs4p-text" 
                                                : user?.email.includes('sanlam') ? "text-start sanlam-text" 
                                                : "fw-bold"
                                            } ><b>Alternative Solutions Considered:</b></span> 
                                            <p className="roa-label">1. Identify the type of product or product provider which was considered but not selected and motivate.</p>
                                            <Editor
                                                onInit={(evt, editor) => RP_AltS_1Ref.current = editor}
                                                value={FormData['RP_AltS_1']}
                                                onEditorChange={(e)=>{ setFormData({...FormData, ['RP_AltS_1']: RP_AltS_1Ref.current.getContent() }) }}
                                                onFocus={(e)=>{backgroundInfo_onFocus1()}}
                                                onBlur={(e)=>{backgroundInfo_onBlur1();onFieldBlur(e)}}                      
                                                name="RP_AltS_1"
                                                init={{
                                                    selector: "textarea",
                                                    browser_spellcheck : true,
                                                    placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
                                                    height: 300,
                                                    menu: true,
                                                    plugins: [
                                                        'advlist autolink link lists image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount',
                                                    ],
                                                    toolbar: 'styles | undo redo | formatselect | ' +
                                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                    'removeformat',
                                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                            <hr/>
                                            <p className="roa-label">2. Identify the type of product or product provider which was considered but not selected and motivate.</p>
                                            <Editor
                                                onInit={(evt, editor) => RP_AltS_2Ref.current = editor}
                                                value={FormData['RP_AltS_2']}
                                                onEditorChange={(e)=>{ setFormData({...FormData, ['RP_AltS_2']: RP_AltS_2Ref.current.getContent() }) }}
                                                onFocus={(e)=>{backgroundInfo_onFocus2()}}
                                                onBlur={(e)=>{backgroundInfo_onBlur2();onFieldBlur(e)}}                      
                                                name="RP_AltS_2"
                                                init={{
                                                    selector: "textarea",
                                                    browser_spellcheck : true,
                                                    placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
                                                    height: 300,
                                                    menu: true,
                                                    plugins: [
                                                        'advlist autolink link lists image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount',
                                                    ],
                                                    toolbar: 'styles | undo redo | formatselect | ' +
                                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                    'removeformat',
                                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                            <hr/>
                                            <p className="roa-label">3. Identify the type of product or product provider which was considered but not selected and motivate.</p>
                                            <Editor
                                                onInit={(evt, editor) => RP_AltS_3Ref.current = editor}
                                                value={FormData['RP_AltS_3']}
                                                onEditorChange={(e)=>{ setFormData({...FormData, ['RP_AltS_3']: RP_AltS_3Ref.current.getContent() }) }}
                                                onFocus={(e)=>{backgroundInfo_onFocus2()}}
                                                onBlur={(e)=>{backgroundInfo_onBlur2();onFieldBlur(e)}}                      
                                                name="RP_AltS_3"
                                                init={{
                                                    selector: "textarea",
                                                    browser_spellcheck : true,
                                                    placeholder: "Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof.",
                                                    height: 300,
                                                    menu: true,
                                                    plugins: [
                                                        'advlist autolink link lists image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount',
                                                    ],
                                                    toolbar: 'styles | undo redo | formatselect | ' +
                                                    'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                                                    'removeformat',
                                                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                        </div>      
                                          
                                        {/* Section D */}
                                        <div className='col-lg-12'>
                                            <div className='text-center'>
                                                <b>Section E</b>
                                            </div>
                                            {
                                                ProductTaken.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className= { 
                                                                    user?.email.includes('sfp') || user?.email.includes('succession')? "btn btn-primary sfp " 
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p " 
                                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam " 
                                                                    : "btn btn-primary sfp "
                                                                } type='button' onClick={(e)=>{AddNewProductTaken(e)}}><FontAwesomeIcon width={'15px'} icon={faPlus} /> Add New Product</button>
                                                        </div>
                                                    </div>
                                                :<></>
                                            }
                                            {
                                                ProductTaken.length > 0 ?
                                                    ProductTaken.map((row, key) => {
                                                        return(
                                                            <>
                                                                
                                                            </>
                                                        )
                                                    })
                                                :<></>
                                            }
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

export default RiskPlanning