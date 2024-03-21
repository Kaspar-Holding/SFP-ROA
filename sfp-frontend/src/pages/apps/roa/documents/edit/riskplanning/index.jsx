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

const RiskPlanning = () => {

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
        FormStatus == 0 ? setFormData({ ...FormData, [e.target.name]: e.target.value }) : <></> //Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })

    }
    // API Config
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
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

        advisorId: user?.id,
        formId: formId,

        RP_DC_LumpSumTotalNeed: "",
        RP_DC_LumpSumExistingProvisions: "",
        RP_DC_LumpSumExistingShortfallSurplus: "",
        RP_DC_LumpSumInvestments: "",
        RP_DC_IncomeTotalNeed: "",
        RP_DC_IncomeExistingProvisions: "",
        RP_DC_IncomeExistingShortfallSurplus: "",
        RP_DC_IncomeInvestments: "",
        RP_DC_FB_TotalNeed: "",
        RP_DC_FB_ExistingProvisions: "",
        RP_DC_FB_ExistingShortfallSurplus: "",
        RP_DC_FB_Investments: "",
        RP_DC_Other: "",
        RP_DC_OtherTotalNeed: "",
        RP_DC_OtherExistingProvisions: "",
        RP_DC_OtherExistingShortfallSurplus: "",
        RP_DC_OtherInvestments: "",
        RP_DC_Comments: "",
        RP_DiC_LumpSumTotalNeed: "",
        RP_DiC_LumpSumExistingProvisions: "",
        RP_DiC_LumpSumExistingShortfallSurplus: "",
        RP_DiC_LumpSumInvestments: "",
        RP_DiC_PI_TotalNeed: "",
        RP_DiC_PI_ExistingProvisions: "",
        RP_DiC_PI_ExistingShortfallSurplus: "",
        RP_DiC_PI_Investments: "",
        RP_DiC_TI_TotalNeed: "",
        RP_DiC_TI_ExistingProvisions: "",
        RP_DiC_TI_ExistingShortfallSurplus: "",
        RP_DiC_TI_Investments: "",
        RP_DiC_SiB_TotalNeed: "",
        RP_DiC_SiB_ExistingProvisions: "",
        RP_DiC_SiB_ExistingShortfallSurplus: "",
        RP_DiC_SiB_Investments: "",
        RP_DiC_Other1: "",
        RP_DiC_OtherTotalNeed1: "",
        RP_DiC_OtherExistingProvisions1: "",
        RP_DiC_OtherExistingShortfallSurplus1: "",
        RP_DiC_OtherInvestments1: "",
        RP_DiC_Other2: "",
        RP_DiC_OtherTotalNeed2: "",
        RP_DiC_OtherExistingProvisions2: "",
        RP_DiC_OtherExistingShortfallSurplus2: "",
        RP_DiC_OtherInvestments2: "",
        RP_DiC_Comments: "",
        RP_DrC_LumpSumTotalNeed: "",
        RP_DrC_LumpSumExistingProvisions: "",
        RP_DrC_LumpSumExistingShortfallSurplus: "",
        RP_DrC_LumpSumInvestments: "",
        RP_DrC_IncomeTotalNeed: "",
        RP_DrC_IncomeExistingProvisions: "",
        RP_DrC_IncomeExistingShortfallSurplus: "",
        RP_DrC_IncomeInvestments: "",
        RP_DrC_Other1: "",
        RP_DrC_OtherTotalNeed1: "",
        RP_DrC_OtherExistingProvisions1: "",
        RP_DrC_OtherExistingShortfallSurplus1: "",
        RP_DrC_OtherInvestments1: "",
        RP_DrC_Other2: "",
        RP_DrC_OtherTotalNeed2: "",
        RP_DrC_OtherExistingProvisions2: "",
        RP_DrC_OtherExistingShortfallSurplus2: "",
        RP_DrC_OtherExistingriskPlannings2: "",
        RP_DrC_Comments: "",
        RP_LC_FinancialSolutions: "",
        RP_DiC_FinancialSolutions: "",
        RP_DrC_FinancialSolutions: "",
        RP_AltS_1: "",
        RP_AltS_2: "",
        RP_AltS_3: "",
    })
    const [ProductTaken, setProductTaken] = useState([])
    const AddNewProductTaken = (e) => {
        const current = [...ProductTaken]
        current.push({
            advisorId: user?.id,
            formId: formId,
            Product_Taken: "",
            Product_Provider: "",
            Policy_Number: "",
            Product_Name: "",
            Product_Premium: "",
            Product_PremiumFrequency: "0",
            Product_Pattern: "",
            Product_Escalation: "",
            Product_ContractingParty: "",
            Product_LivesAssured: "",
            Product_Beneficiary: "",
            Product_PremiumPayer: "",
            Product_1stYearCommission: "",
            Product_2ndYearCommission: "",
            Product_OngoingFees: "",
            Product_OngoingFeesFrequency: "",
            Product_OngoingFeesFrequency1: "0",
            TotalFees_n_Commissions: "",
            BenDesc_1: "",
            BenDesc_CoverAmount_1: "",
            BenDesc_2: "",
            BenDesc_CoverAmount_2: "",
            BenDesc_3: "",
            BenDesc_CoverAmount_3: "",
            BenDesc_4: "",
            BenDesc_CoverAmount_4: "",
            BenDesc_5: "",
            BenDesc_CoverAmount_5: "",
            BenDesc_6: "",
            BenDesc_CoverAmount_6: "",
            BenDesc_7: "",
            BenDesc_CoverAmount_7: "",
            ProductReasons: "",
            ProductMaterialAspects: "",
            ProductDetails: "",
            ExecutorFee: "",
            NominationOfBeneficiaries: "",
            InformationExplained: ""
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
            advisorId: user?.id,
            formId: formId,

            DC_Other: "",
            DC_OtherTotalNeed: "",
            DC_OtherExistingProvisions: "",
            DC_OtherExistingShortfallSurplus: "",
            DC_OtherInvestments: "",

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
            advisorId: user?.id,
            formId: formId,

            DiC_Other: "",
            DiC_OtherTotalNeed: "",
            DiC_OtherExistingProvisions: "",
            DiC_OtherExistingShortfallSurplus: "",
            DiC_OtherInvestments: "",

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
            advisorId: user?.id,
            formId: formId,

            DrC_Other: "",
            DrC_OtherTotalNeed: "",
            DrC_OtherExistingProvisions: "",
            DrC_OtherExistingShortfallSurplus: "",
            DrC_OtherInvestments: "",

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
        newProductTaken[i]["" + name + ""] = val
        setProductTaken(newProductTaken)
    }

    const onSubmit = e => {
        e.preventDefault()

    }

    const compulsoryAEditorRef = useRef(null);
    const FICAEditorRef = useRef(null);

    const [FormStatus, setFormStatus] = useState(0)
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
            setFormData(response?.data?.data?.riskPlanning)
            setProductTaken(response?.data?.data?.productTaken)
            setRisk_DC_Data(response?.data?.data?.dc_other)
            setRisk_DiC_Data(response?.data?.data?.diC_other)
            setRisk_DrC_Data(response?.data?.data?.drC_other)
            setFormStatus(response?.data?.data?.form_status)
        } catch (error) {

            setProductTaken([])
            setRisk_DC_Data([])
            setRisk_DiC_Data([])
            setRisk_DrC_Data([])
        }
        setLoaded(false)
    }

    const updateRPForm = async () => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId,
            riskPlanning: FormData,
            productTaken: ProductTaken,
            dc_other: Risk_DC_Data,
            diC_other: Risk_DiC_Data,
            drC_other: Risk_DrC_Data,
        })
        try {
            await axios.post(
                `/api/roa/form/riskplanning/update`,
                Body,
                config
            ).then((response) => {

                // Swal.fire({
                //     type: 'success',
                //     title: 'Success',
                //     text: 'Risk Planning Form Updated Successfully.',
                //     position: 'bottom-end',
                //     showConfirmButton: false,
                //     backdrop: "None",
                //     color: "#fff",
                //     background: "#00788B",
                //     timer: 5000
                // })
                setSuccessMessage("Risk Planning form is successfully updated")
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
        FormStatus == 0 ? updateRPForm() : <></> //Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })

    }


    const [backgroundInfoVisibility1, setbackgroundInfoVisibility1] = useState(false)
    const [backgroundInfoVisibility2, setbackgroundInfoVisibility2] = useState(false)
    const [backgroundInfoVisibility3, setbackgroundInfoVisibility3] = useState(false)
    const [backgroundInfoVisibility21, setbackgroundInfoVisibility21] = useState(false)
    const [backgroundInfoVisibility31, setbackgroundInfoVisibility31] = useState(false)
    const [backgroundInfoVisibility7, setbackgroundInfoVisibility7] = useState(false)
    const [backgroundInfoVisibility8, setbackgroundInfoVisibility8] = useState(false)
    const [backgroundInfoVisibility9, setbackgroundInfoVisibility9] = useState(false)
    const [backgroundInfoVisibility10, setbackgroundInfoVisibility10] = useState(false)
    const [backgroundInfoVisibility11, setbackgroundInfoVisibility11] = useState(false)
    const [backgroundInfoVisibility12, setbackgroundInfoVisibility12] = useState(false)

    function backgroundInfo_onFocus1() {
        setbackgroundInfoVisibility1(true)
    }
    function backgroundInfo_onFocus7() {
        setbackgroundInfoVisibility7(true)
    }
    function backgroundInfo_onBlur7() {
        setbackgroundInfoVisibility7(false)
    }
    function backgroundInfo_onFocus8() {
        setbackgroundInfoVisibility8(true)
    }
    function backgroundInfo_onBlur8() {
        setbackgroundInfoVisibility8(false)
    }
    function backgroundInfo_onFocus9() {
        setbackgroundInfoVisibility9(true)
    }
    function backgroundInfo_onBlur9() {
        setbackgroundInfoVisibility9(false)
    }
    function backgroundInfo_onFocus10() {
        setbackgroundInfoVisibility10(true)
    }
    function backgroundInfo_onBlur10() {
        setbackgroundInfoVisibility10(false)
    }
    function backgroundInfo_onFocus11() {
        setbackgroundInfoVisibility11(true)
    }
    function backgroundInfo_onBlur11() {
        setbackgroundInfoVisibility11(false)
    }
    function backgroundInfo_onFocus12() {
        setbackgroundInfoVisibility12(true)
    }
    function backgroundInfo_onBlur12() {
        setbackgroundInfoVisibility12(false)
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
                            <b>Risk Planning</b>
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
                        <div className=''>
                            <form onSubmit={ e => onSubmit(e) }>
                                <div className={ 'inital-card-header mx-5' }>
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
                                        {/* Death Cover */ }
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumTotalNeed' value={ FormData?.RP_DC_LumpSumTotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumExistingProvisions' value={ FormData?.RP_DC_LumpSumExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumExistingShortfallSurplus' value={ FormData?.RP_DC_LumpSumTotalNeed - FormData?.RP_DC_LumpSumExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_LumpSumInvestments' value={ FormData?.RP_DC_LumpSumInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeTotalNeed' value={ FormData?.RP_DC_IncomeTotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeExistingProvisions' value={ FormData?.RP_DC_IncomeExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeExistingShortfallSurplus' value={ FormData?.RP_DC_IncomeTotalNeed - FormData?.RP_DC_IncomeExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_IncomeInvestments' value={ FormData?.RP_DC_IncomeInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_TotalNeed' value={ FormData?.RP_DC_FB_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_ExistingProvisions' value={ FormData?.RP_DC_FB_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_ExistingShortfallSurplus' value={ FormData?.RP_DC_FB_TotalNeed - FormData?.RP_DC_FB_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DC_FB_Investments' value={ FormData?.RP_DC_FB_Investments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Other Death Cover */ }
                                            {
                                                Risk_DC_Data.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                            : "btn btn-primary sfp "
                                                            } type='button' onClick={ (e) => { AddNewRisk_DC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Other Death Cover</button>
                                                        </div>
                                                    </div>
                                                    : <></>
                                            }
                                            {
                                                Risk_DC_Data.length > 0 ?
                                                    Risk_DC_Data.map((row, key) => {
                                                        return (
                                                            <div key={ key }>
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        {
                                                                            Risk_DC_Data.length === key + 1 ?
                                                                                <button className={
                                                                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                        : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                            : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                                : "btn btn-primary sfp "
                                                                                } type='button' onClick={ (e) => { AddNewRisk_DC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Other Death Cover</button>
                                                                                : <></>
                                                                        }
                                                                    </div>
                                                                    <div className='col'>
                                                                        <button className={
                                                                            user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                        : "btn btn-primary sfp "
                                                                        } type='button' onClick={ (e) => { RemoveNewRisk_DC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faMinus } /> Remove Other Death Cover</button>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    {/* <div className='col'>
                                                                        <b className='roa-font'>Death Cover: Other</b>
                                                                    </div> */}
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <textarea type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DC_Other' value={ row?.DC_Other } onChange={ (e) => { on_Risk_DC_Data_Change(e, key) } } placeholder='Enter the Name' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DC_OtherTotalNeed' value={ row?.DC_OtherTotalNeed } onChange={ (e) => { on_Risk_DC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DC_OtherExistingProvisions' value={ row?.DC_OtherExistingProvisions } onChange={ (e) => { on_Risk_DC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DC_OtherExistingShortfallSurplus' value={ row?.DC_OtherTotalNeed - row?.DC_OtherExistingProvisions } onChange={ (e) => { on_Risk_DC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DC_OtherInvestments' value={ row?.DC_OtherInvestments } onChange={ (e) => { on_Risk_DC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : <></>
                                            }
                                            <p className='roa-label my-2'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Comments:</b>
                                                </div>
                                                <div className='col-12' onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.RP_DC_Comments }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['RP_DC_Comments']: value }) } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here
                                                        } }
                                                    />
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                        <br />
                                        <br />
                                        <hr />
                                        {/* Disability Cover */ }
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumTotalNeed' value={ FormData?.RP_DiC_LumpSumTotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumExistingProvisions' value={ FormData?.RP_DiC_LumpSumExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumExistingShortfallSurplus' value={ FormData?.RP_DiC_LumpSumTotalNeed - FormData?.RP_DiC_LumpSumExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_LumpSumInvestments' value={ FormData?.RP_DiC_LumpSumInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_TotalNeed' value={ FormData?.RP_DiC_PI_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_ExistingProvisions' value={ FormData?.RP_DiC_PI_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_ExistingShortfallSurplus' value={ FormData?.RP_DiC_PI_TotalNeed - FormData?.RP_DiC_PI_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_PI_Investments' value={ FormData?.RP_DiC_PI_Investments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_TotalNeed' value={ FormData?.RP_DiC_TI_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_ExistingProvisions' value={ FormData?.RP_DiC_TI_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_ExistingShortfallSurplus' value={ FormData?.RP_DiC_TI_TotalNeed - FormData?.RP_DiC_TI_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_TI_Investments' value={ FormData?.RP_DiC_TI_Investments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_TotalNeed' value={ FormData?.RP_DiC_SiB_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_ExistingProvisions' value={ FormData?.RP_DiC_SiB_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_ExistingShortfallSurplus' value={ FormData?.RP_DiC_SiB_TotalNeed - FormData?.RP_DiC_SiB_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DiC_SiB_Investments' value={ FormData?.RP_DiC_SiB_Investments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Other Disease Cover */ }
                                            {
                                                Risk_DiC_Data.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                            : "btn btn-primary sfp "
                                                            } type='button' onClick={ (e) => { AddNewRisk_DiC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Other Disability Cover</button>
                                                        </div>
                                                    </div>
                                                    : <></>
                                            }
                                            {
                                                Risk_DiC_Data.length > 0 ?
                                                    Risk_DiC_Data.map((row, key) => {
                                                        return (
                                                            <div key={ key }>
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        {
                                                                            Risk_DiC_Data.length === key + 1 ?
                                                                                <button className={
                                                                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                        : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                            : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                                : "btn btn-primary sfp "
                                                                                } type='button' onClick={ (e) => { AddNewRisk_DiC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Other Disability Cover</button>
                                                                                : <></>
                                                                        }
                                                                    </div>
                                                                    <div className='col'>
                                                                        <button className={
                                                                            user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                        : "btn btn-primary sfp "
                                                                        } type='button' onClick={ (e) => { RemoveNewRisk_DiC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faMinus } /> Remove Other Disability Cover</button>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    {/* <div className='col'>
                                                                        <b className='roa-font'>Death Cover: Other</b>
                                                                    </div> */}
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <textarea type="text" className="form-control roa-font" name='DC_Other' value={ row?.DC_Other } onChange={ (e) => { on_Risk_DiC_Data_Change(e, key) } } placeholder='Enter the Name' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" className="form-control roa-font" name='DiC_OtherTotalNeed' value={ row?.DiC_OtherTotalNeed } onChange={ (e) => { on_Risk_DiC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" className="form-control roa-font" name='DiC_OtherExistingProvisions' value={ row?.DiC_OtherExistingProvisions } onChange={ (e) => { on_Risk_DiC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" className="form-control roa-font" name='DiC_OtherExistingShortfallSurplus' value={ row?.DiC_OtherTotalNeed - row?.DiC_OtherExistingProvisions } onChange={ (e) => { on_Risk_DiC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" className="form-control roa-font" name='DiC_OtherInvestments' value={ row?.DiC_OtherInvestments } onChange={ (e) => { on_Risk_DiC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : <></>
                                            }
                                            <p className='roa-label my-2'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Comments:</b>
                                                </div>
                                                <div className='col-12' onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.RP_DiC_Comments }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['RP_DiC_Comments']: value }) } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here
                                                        } }
                                                    />
                                                </div>
                                                <br />
                                                <br />
                                            </div>
                                            <br />
                                            <br />
                                            <hr />


                                        </div>
                                        {/* Dread Disease Cover */ }
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumTotalNeed' value={ FormData?.RP_DrC_LumpSumTotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumExistingProvisions' value={ FormData?.RP_DrC_LumpSumExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumExistingShortfallSurplus' value={ FormData?.RP_DrC_LumpSumTotalNeed - FormData?.RP_DrC_LumpSumExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_LumpSumInvestments' value={ FormData?.RP_DrC_LumpSumInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
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
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeTotalNeed' value={ FormData?.RP_DrC_IncomeTotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeExistingProvisions' value={ FormData?.RP_DrC_IncomeExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeExistingShortfallSurplus' value={ FormData?.RP_DrC_IncomeTotalNeed - FormData?.RP_DrC_IncomeExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="input-group roa-font">
                                                        <span className="input-group-text">R</span>
                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='RP_DrC_IncomeInvestments' value={ FormData?.RP_DrC_IncomeInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Other Dread Disease Cover */ }
                                            {
                                                Risk_DrC_Data.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                            : "btn btn-primary sfp "
                                                            } type='button' onClick={ (e) => { AddNewRisk_DrC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Other Dread Disease Cover</button>
                                                        </div>
                                                    </div>
                                                    : <></>
                                            }
                                            {
                                                Risk_DrC_Data.length > 0 ?
                                                    Risk_DrC_Data.map((row, key) => {
                                                        return (
                                                            <div key={ key }>
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        {
                                                                            Risk_DrC_Data.length === key + 1 ?
                                                                                <button className={
                                                                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                        : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                            : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                                : "btn btn-primary sfp "
                                                                                } type='button' onClick={ (e) => { AddNewRisk_DrC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Other Dread Disease Cover</button>
                                                                                : <></>
                                                                        }
                                                                    </div>
                                                                    <div className='col'>
                                                                        <button className={
                                                                            user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                        : "btn btn-primary sfp "
                                                                        } type='button' onClick={ (e) => { RemoveNewRisk_DrC_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faMinus } /> Remove Other Dread Disease Cover</button>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    {/* <div className='col'>
                                                                        <b className='roa-font'>Death Cover: Other</b>
                                                                    </div> */}
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <textarea type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DrC_Other' value={ row?.DrC_Other } onChange={ (e) => { on_Risk_DrC_Data_Change(e, key) } } placeholder='Enter the Name' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DrC_OtherTotalNeed' value={ row?.DrC_OtherTotalNeed } onChange={ (e) => { on_Risk_DrC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DrC_OtherExistingProvisions' value={ row?.DrC_OtherExistingProvisions } onChange={ (e) => { on_Risk_DrC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" onBlur={ (e) => { onFieldBlur(e) } } className="form-control roa-font" name='DrC_OtherExistingShortfallSurplus' value={ row?.DrC_OtherTotalNeed - row?.DrC_OtherExistingProvisions } onChange={ (e) => { on_Risk_DrC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="input-group roa-font">
                                                                            <span className="input-group-text">R</span>
                                                                            <input disabled={ key['DC_Other'] === "" } type="text" className="form-control roa-font" name='DrC_OtherInvestments' value={ row?.DrC_OtherInvestments } onChange={ (e) => { on_Risk_DrC_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : <></>
                                            }
                                            <p className='roa-label my-2'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                            <div className='row'>
                                                <div className='col'>
                                                    <b className='roa-font'>Comments:</b>
                                                </div>

                                                <div className='col-12' onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.RP_DrC_Comments }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['RP_DrC_Comments']: value }) } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here
                                                        } }
                                                    />
                                                </div>
                                                <br />
                                                <br />
                                            </div>
                                            <br />
                                            <br />
                                            <hr />

                                        </div>
                                        {/* Section C */ }
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
                                            {
                                                backgroundInfoVisibility1 ?
                                                    <>
                                                        <div id="background_info_instructions1" className="hidden_class">
                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                            <ul>
                                                                <li>
                                                                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br />
                                                                </li>
                                                                <li>
                                                                    Record the client{ `'` }s instructions, deviations and implications thereof.
                                                                </li>

                                                            </ul>

                                                        </div>
                                                    </> :
                                                    null
                                            }
                                            <div className='col-12' onFocus={ () => (setbackgroundInfoVisibility1(true)) } onBlur={ () => (setbackgroundInfoVisibility1(false)) } onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.RP_LC_FinancialSolutions }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['RP_LC_FinancialSolutions']: value }) } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder="Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof."

                                                />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <hr />
                                            <p className="roa-font"><u>Disability Cover:</u></p>
                                            {
                                                backgroundInfoVisibility2 ?
                                                    <>
                                                        <div id="background_info_instructions1" className="hidden_class">
                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                            <ul>
                                                                <li>
                                                                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br />
                                                                </li>
                                                                <li>
                                                                    Record the client{ `'` }s instructions, deviations and implications thereof.
                                                                </li>

                                                            </ul>

                                                        </div>
                                                    </> :
                                                    null
                                            }
                                            <div className='col-12' onFocus={ () => (setbackgroundInfoVisibility2(true)) } onBlur={ () => (setbackgroundInfoVisibility2(false)) } onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.RP_DiC_FinancialSolutions }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['RP_DiC_FinancialSolutions']: value }) } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <hr />
                                            <p className="roa-font"><u>Dread Disease Cover:</u></p>
                                            {
                                                backgroundInfoVisibility3 ?
                                                    <>
                                                        <div id="background_info_instructions1" className="hidden_class">
                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                            <ul>
                                                                <li>
                                                                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br />
                                                                </li>
                                                                <li>
                                                                    Record the client{ `'` }s instructions, deviations and implications thereof.
                                                                </li>

                                                            </ul>

                                                        </div>
                                                    </> :
                                                    null
                                            }
                                            <div className='col-12' onFocus={ () => (setbackgroundInfoVisibility3(true)) } onBlur={ () => (setbackgroundInfoVisibility3(false)) } onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.RP_DrC_FinancialSolutions }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['RP_DrC_FinancialSolutions']: value }) } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder="Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof."
                                                />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <hr />
                                        </div>
                                        {/* Section D */ }
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
                                            {
                                                backgroundInfoVisibility1 ?
                                                    <div id="background_info_instructions1">
                                                        <p className="roa-label">1. Identify the type of product or product provider which was considered but not selected and motivate.</p>
                                                    </div>
                                                    : <></>
                                            }

                                            <div className='col-12' onFocus={ () => (setbackgroundInfoVisibility1(true)) } onBlur={ () => (setbackgroundInfoVisibility1(false)) } onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.RP_AltS_1 }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['RP_AltS_1']: value }) } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder="Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof."
                                                />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <hr />
                                            {
                                                backgroundInfoVisibility21 ?
                                                    <div id="background_info_instructions1">
                                                        <p className="roa-label">2. Identify the type of product or product provider which was considered but not selected and motivate.</p>
                                                    </div>
                                                    : <></>
                                            }

                                            <div className='col-12' onFocus={ () => (setbackgroundInfoVisibility21(true)) } onBlur={ () => (setbackgroundInfoVisibility21(false)) } onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.RP_AltS_2 }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['RP_AltS_2']: value }) } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder="Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof."
                                                />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <hr />
                                            {
                                                backgroundInfoVisibility31 ?
                                                    <div id="background_info_instructions1">
                                                        <p className="roa-label">3. Identify the type of product or product provider which was considered but not selected and motivate.</p>
                                                    </div>
                                                    : <></>
                                            }

                                            <div className='col-12' onFocus={ () => (setbackgroundInfoVisibility31(true)) } onBlur={ () => (setbackgroundInfoVisibility31(false)) } onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.RP_AltS_3 }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['RP_AltS_3']: value }) } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder="Explain the reasons why life cover benefits were recommended to satisfy this need.\nRecord the client's instructions, deviations and implications thereof."
                                                />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <hr />
                                        </div>

                                        {/* Section D */ }
                                        <div className='col-lg-12'>
                                            <div className='text-center'>
                                                <b>Section E</b>
                                            </div>
                                            {
                                                ProductTaken.length === 0 ?
                                                    <div className="row">
                                                        <div className='col'>
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                            : "btn btn-primary sfp "
                                                            } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Product</button>
                                                        </div>
                                                    </div>
                                                    : <></>
                                            }
                                            {
                                                ProductTaken.length > 0 ?
                                                    ProductTaken.map((row, i) => {
                                                        return (
                                                            <div key={ i }>
                                                                <div className='row'>
                                                                    <div className='col-4'>
                                                                        <h6 className={
                                                                            user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text"
                                                                                : user?.email.includes('fs4p') ? "text-start fs4p-text"
                                                                                    : user?.email.includes('sanlam') ? "text-start sanlam-text"
                                                                                        : "fw-bold"
                                                                        } ><b>Product Taken { i + 1 }</b></h6>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        {
                                                                            ProductTaken.length === i + 1 ?
                                                                                <button className={
                                                                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                        : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                            : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                                : "btn btn-primary sfp "
                                                                                } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Product</button>
                                                                                : <></>
                                                                        }
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <button className={
                                                                            user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                                : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                                    : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                                        : "btn btn-danger sfp "
                                                                        } type='button' onClick={ (e) => { RemoveNewProductTaken(e) } }><FontAwesomeIcon width={ '15px' } icon={ faMinus } /> Remove Product</button>
                                                                    </div>
                                                                </div>
                                                                <p className="roa-label">Products accepted by you to meet your requirements. </p>
                                                                <hr />
                                                                <div className="container mt-3">
                                                                    <table className="table">

                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="roa-font" align="start">Product:</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_Taken" name='Product_Taken' value={ row?.Product_Taken } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />

                                                                                    </div>
                                                                                </td>
                                                                                <td></td>

                                                                                <td></td>

                                                                                <td></td>

                                                                                <td></td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td className="roa-font" align="start">Product Provider:</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_Provider" name='Product_Provider' value={ row?.Product_Provider } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>

                                                                                <td className="roa-font" align="start">Policy No:</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Policy_Number" name='Policy_Number' required value={ row?.Policy_Number } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>

                                                                                <td></td>

                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="roa-font" align="start">Product Name:</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_Name" name='Product_Name' value={ row?.Product_Name } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>

                                                                                <td className="roa-font" align="start">Premium</td>
                                                                                <td>
                                                                                    <div className='row'>
                                                                                        <div className='col-6'>
                                                                                            <div className="form-group">
                                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_Premium" name='Product_Premium' value={ row?.Product_Premium } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-6'>
                                                                                            <select onBlur={ (e) => { onFieldBlur(e) } } className="text-start form-select" id="Product_PremiumFrequency" name='Product_PremiumFrequency' value={ row?.Product_PremiumFrequency } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-label="Default select example">
                                                                                                <option value="0" selected>Frequency</option>
                                                                                                <option value="1">Monthly</option>
                                                                                                <option value="2">Quarterly</option>
                                                                                                <option value="3">Annually</option>
                                                                                                <option value="4">Once Off</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="roa-font" align="start">Premium Pattern:</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_Pattern" name='Product_Pattern' value={ row?.Product_Pattern } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                </td>

                                                                                <td className="roa-font" align="start">Escalation in<br />cover/premium</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_Escalation" name='Product_Escalation' value={ row?.Product_Escalation } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>

                                                                                <td></td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td className="roa-font" align="start">Contracting Party:</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_ContractingParty" name='Product_ContractingParty' value={ row?.Product_ContractingParty } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>

                                                                                <td className="roa-font" align="start">Life/Lives<br />covered</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_LivesAssured" name='Product_LivesAssured' value={ row?.Product_LivesAssured } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td></td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td className="roa-font" align="start">Beneficial/<br />Cessionary</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_Beneficiary" name='Product_Beneficiary' value={ row?.Product_Beneficiary } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>

                                                                                <td className="roa-font" align="start">Premium<br />payer(s)</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_PremiumPayer" name='Product_PremiumPayer' value={ row?.Product_PremiumPayer } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td></td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td className="roa-font" align="start">1st year<br />commission</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="Product_1stYearCommission" name='Product_1stYearCommission' value={ row?.Product_1stYearCommission } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td className="roa-font" align="start">2nd year<br />commission</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="Product_2ndYearCommission" name='Product_2ndYearCommission' value={ row?.Product_2ndYearCommission } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td></td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td className="roa-font" align="start">Ongoing fees</td>
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="Product_OngoingFees" name='Product_OngoingFees' value={ row?.Product_OngoingFees } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td className="roa-font" align="start">Frequency</td>
                                                                                <td>
                                                                                    <div className='row'>
                                                                                        <div className='col-6'>
                                                                                            <div className="form-group">
                                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Product_OngoingFeesFrequency" name='Product_OngoingFeesFrequency' value={ row?.Product_OngoingFeesFrequency } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-6'>
                                                                                            <select onBlur={ (e) => { onFieldBlur(e) } } className="text-start form-select" id="Product_OngoingFeesFrequency1" name='Product_OngoingFeesFrequency1' value={ row?.Product_OngoingFeesFrequency1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-label="Default select example">
                                                                                                <option value="0" selected>Frequeny</option>
                                                                                                <option value="1">Monthly</option>
                                                                                                <option value="2">Quarterly</option>
                                                                                                <option value="3">Annually</option>
                                                                                                <option value="4">Once Off</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td></td>
                                                                            </tr>



                                                                            <tr>

                                                                                <td className="roa-font" align="start">Total fees and commission</td>

                                                                                {/* <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Frequency</td> */ }
                                                                                <td>
                                                                                    <div className="form-group">
                                                                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="TotalFees_n_Commissions" name='TotalFees_n_Commissions' value={ row?.TotalFees_n_Commissions } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />

                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>

                                                                            </tr>


                                                                            <tr>

                                                                            </tr>


                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <div style={ { fontFamily: 'Arial Narrow', fontSize: '9' } }>
                                                                    <div className="row">
                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-8">
                                                                                    <label className="roa-font"><b>Benefit description: life cover, disability etc</b></label>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-4">
                                                                                    <label htmlFor="id_number" className="roa-font"><b>Cover amount</b></label>
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_1" name='BenDesc_1' value={ row?.BenDesc_1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text">R</span>
                                                                                        <input disabled={ row?.BenDesc_1 === "" } type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_1" name='BenDesc_CoverAmount_1' value={ row?.BenDesc_CoverAmount_1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>



                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_2" name='BenDesc_2' value={ row?.BenDesc_2 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text">R</span>
                                                                                        <input disabled={ row?.BenDesc_2 === "" } type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_2" name='BenDesc_CoverAmount_2' value={ row?.BenDesc_CoverAmount_2 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>



                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_3" name='BenDesc_3' value={ row?.BenDesc_3 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text">R</span>
                                                                                        <input disabled={ row?.BenDesc_3 === "" } type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_3" name='BenDesc_CoverAmount_3' value={ row?.BenDesc_CoverAmount_3 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>



                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_4" name='BenDesc_4' value={ row?.BenDesc_4 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text">R</span>
                                                                                        <input disabled={ row?.BenDesc_4 === "" } type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_4" name='BenDesc_CoverAmount_4' value={ row?.BenDesc_CoverAmount_4 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>



                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_5" name='BenDesc_5' value={ row?.BenDesc_5 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text">R</span>
                                                                                        <input disabled={ row?.BenDesc_5 === "" } type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_5" name='BenDesc_CoverAmount_5' value={ row?.BenDesc_CoverAmount_5 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>



                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_6" name='BenDesc_6' value={ row?.BenDesc_6 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text">R</span>
                                                                                        <input disabled={ row?.BenDesc_6 === "" } type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_6" name='BenDesc_CoverAmount_6' value={ row?.BenDesc_CoverAmount_6 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_7" name='BenDesc_7' value={ row?.BenDesc_7 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                            <div className="row g-3 align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text">R</span>
                                                                                        <input disabled={ row?.BenDesc_7 === "" } type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" id="BenDesc_CoverAmount_7" name='BenDesc_CoverAmount_7' value={ row?.BenDesc_CoverAmount_7 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        <hr />
                                                                    </div>
                                                                </div>


                                                                <p className="roa-font">The following are reasons why the above-mentioned product best suits your needs and objectives</p>

                                                                {
                                                                    backgroundInfoVisibility7 ?
                                                                        <>
                                                                            <div id="background_info_instructions7" className="hidden_class">
                                                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                                <ul>
                                                                                    <li>
                                                                                        Motivate why the chosen product was recommended to best suit your client’s needs.

                                                                                    </li>

                                                                                </ul>

                                                                            </div>
                                                                        </> :
                                                                        null
                                                                }
                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ row?.ProductReasons }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ProductReasons", i, value) } }
                                                                        onFocus={ (e) => { backgroundInfo_onFocus7() } }
                                                                        onBlur={ (e) => { backgroundInfo_onBlur7() } }
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }
                                                                        placeholder='Motivate why the chosen product was recommended to best suit your client’s needs.'
                                                                    />
                                                                </div>

                                                                <br />
                                                                <br />
                                                                <hr />
                                                                <p className="roa-font">The details of the material aspects of the selected product that were discussed with you are outlined below:</p>

                                                                {
                                                                    backgroundInfoVisibility8 ?
                                                                        <>
                                                                            <div id="background_info_instructions8" className="hidden_class">
                                                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                                <ul>
                                                                                    <li>
                                                                                        Explain any deviations from your recommendation and the implications thereof.
                                                                                    </li>

                                                                                </ul>

                                                                            </div>
                                                                        </> :
                                                                        null
                                                                }
                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ row?.ProductMaterialAspects }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ProductMaterialAspects", i, value) } }
                                                                        onFocus={ (e) => { backgroundInfo_onFocus8() } }
                                                                        onBlur={ (e) => { backgroundInfo_onBlur8() } }
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }
                                                                        placeholder='Explain any deviations from your recommendation and the implications thereof.'
                                                                    />
                                                                </div>
                                                                <br />
                                                                <br />
                                                                <br />
                                                                {
                                                                    backgroundInfoVisibility9 ?
                                                                        <>
                                                                            <div id="background_info_instructions9" className="hidden_class">
                                                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                                <ul>
                                                                                    <li>
                                                                                        The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?
                                                                                    </li>

                                                                                </ul>

                                                                            </div>
                                                                        </> :
                                                                        null
                                                                }
                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ row?.ProductDetails }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ProductDetails", i, value) } }
                                                                        onFocus={ (e) => { backgroundInfo_onFocus9() } }
                                                                        onBlur={ (e) => { backgroundInfo_onBlur9() } }
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }
                                                                        placeholder='The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?'
                                                                    />
                                                                </div>
                                                                <br />
                                                                <br />
                                                                <br />
                                                                {
                                                                    backgroundInfoVisibility10 ?
                                                                        <>
                                                                            <div id="background_info_instructions10" className="hidden_class">
                                                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                                <ul>
                                                                                    <li>
                                                                                        Executor’s fees?<br />
                                                                                        Does the policy offer any liquidity?<br />
                                                                                        Provide a summary of the contents of the quote with regard to the following:<br />
                                                                                        Benefit terms (cease ages, cover periods etc.)<br />
                                                                                        Details of premium and cover pattern structure, frequency etc.

                                                                                    </li>

                                                                                </ul>

                                                                            </div>
                                                                        </> :
                                                                        null
                                                                }
                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ row?.ExecutorFee }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ExecutorFee", i, value) } }
                                                                        onFocus={ (e) => { backgroundInfo_onFocus10() } }
                                                                        onBlur={ (e) => { backgroundInfo_onBlur10() } }
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }
                                                                        placeholder={ `Executor’s fees?\nDoes the policy offer any liquidity?\nProvide a summary of the contents of the quote with regard to the following:\nBenefit terms (cease ages, cover periods etc.)\nDetails of premium and cover pattern structure, frequency etc.\n` }
                                                                    />
                                                                </div>
                                                                <br />
                                                                <br />
                                                                <br />
                                                                {
                                                                    backgroundInfoVisibility11 ?
                                                                        <>
                                                                            <div id="background_info_instructions11" className="hidden_class">
                                                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                                <ul>
                                                                                    <li>
                                                                                        Record discussion with regard to nomination of beneficiaries or cessionaries.

                                                                                    </li>

                                                                                </ul>

                                                                            </div>
                                                                        </> :
                                                                        null
                                                                }
                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ row?.NominationOfBeneficiaries }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("NominationOfBeneficiaries", i, value) } }
                                                                        onFocus={ (e) => { backgroundInfo_onFocus11() } }
                                                                        onBlur={ (e) => { backgroundInfo_onBlur11() } }
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }
                                                                        placeholder='Record discussion with regard to nomination of beneficiaries or cessionaries'
                                                                    />
                                                                </div>
                                                                <br />
                                                                <br />
                                                                <br />
                                                                {
                                                                    backgroundInfoVisibility12 ?
                                                                        <>
                                                                            <div id="background_info_instructions12" className="hidden_class">
                                                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                                <ul>
                                                                                    <li>
                                                                                        Discuss the following information which has been explained to client.<br />
                                                                                        General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.)<br />
                                                                                        Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)<br />
                                                                                        Waiting periods<br />
                                                                                        Cooling off period

                                                                                    </li>

                                                                                </ul>

                                                                            </div>
                                                                        </> :
                                                                        null
                                                                }
                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ row?.InformationExplained }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("InformationExplained", i, value) } }
                                                                        onFocus={ (e) => { backgroundInfo_onFocus12() } }
                                                                        onBlur={ (e) => { backgroundInfo_onBlur12() } }
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }
                                                                        placeholder={
                                                                            `Discuss the following information which has been explained to client. \n
                                                                                General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.) \n
                                                                                Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings) \n
                                                                                Waiting periods \n
                                                                                Cooling off period`
                                                                        }
                                                                    />
                                                                </div>
                                                                <br />
                                                                <br />

                                                                <hr />

                                                            </div>
                                                        )
                                                    })
                                                    : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </EditROALayout >
            </Layout >
        </div >
    )
}

export default RiskPlanning