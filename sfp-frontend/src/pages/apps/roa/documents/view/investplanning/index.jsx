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
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const InvestPlanning = () => {

    // Quill JS

    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState(false)

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
        FormStatus == 0 ? setFormData({ ...FormData, [e.target.name]: e.target.value }) : setErrorMessage("Form is marked completed, can't edit now unless it is marked incomplete.")
        setErrorVisibility(true)
        setTimeout(() => {
            setErrorVisibility(false)
        }, 5000)
        // Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })

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

        IP_SourceOfIncome: 0,
        IP_OtherSourceOfIncome: "",
        IP_InvestmentTerm: "",
        IP_InvestmentTermDetails: "",
        IP_Liquidity: 2,
        IP_LiquidityDetails: "",
        IP_Type: 2,
        IP_TypeDetails: "",
        IP_PremiumType: 2,
        IP_PremiumTypeDetails: "",
        IP_IncomeRequired: 2,
        IP_IncomeRequiredDetails: "",
        IP_InvestmentStrategy: 2,
        IP_InvestmentStrategyDetails: "",
        IP_ReturnRequired: 2,
        IP_ReturnRequiredDetails: "",
        IP_RiskProfile: 2,
        IP_RiskProfileDetails: "",

        IP_RecommendationSummary: "",

        IP_AltS_1: "",
        IP_AltS_2: "",
        IP_AltS_3: ""
    })
    const [ProductTaken, setProductTaken] = useState([])
    const AddNewProductTaken = (e) => {
        const current = [...ProductTaken]
        current.push({
            advisorId: user?.id,
            formId: formId,

            ProductTaken: 0,
            ProductProvider: "",
            PolicyNumber: "",
            ProductName: "",
            ProductPremium: "",
            ProductPremiumFrequency: 1,
            ProductEscalation: "",
            ProductEAC: "",
            ProductContractingParty: "",
            ProductLivesAssured: "",
            ProductPremiumLayer: "",
            ProductBeneficiary: "",
            Product_IniC: "",
            Product_IniC_Percentage: "",
            Product_OnC: "",
            Product_OnC_Percentage: "",

            SFPSolutionFunds: 2,
            SFPSolutionFundsDetails: "",

            ItP: "",
            ItP_Fund: "",
            ItP_FundPercentage: "",
            ItP_FundProvided: 0,
            ItP_FundDiscussed: 0,

            ItP_Fund1: "",
            ItP_FundPercentage1: "",
            ItP_FundProvided1: 0,
            ItP_FundDiscussed1: 0,

            ItP_Fund2: "",
            ItP_FundPercentage2: "",
            ItP_FundProvided2: 0,
            ItP_FundDiscussed2: 0,

            ItP_Fund3: "",
            ItP_FundPercentage3: "",
            ItP_FundProvided3: 0,
            ItP_FundDiscussed3: 0,

            ItP_Fund4: "",
            ItP_FundPercentage4: "",
            ItP_FundProvided4: 0,
            ItP_FundDiscussed4: 0,

            ItP_Fund5: "",
            ItP_FundPercentage5: "",
            ItP_FundProvided5: 0,
            ItP_FundDiscussed5: 0,

            ItP_Fund6: "",
            ItP_FundPercentage6: "",
            ItP_FundProvided6: 0,
            ItP_FundDiscussed6: 0,

            ItP_Fund7: "",
            ItP_FundPercentage7: "",
            ItP_FundProvided7: 0,
            ItP_FundDiscussed7: 0,

            ItP_FundsReasons: "",

            ItP_FundsMaterialAspects: "",
            ItP_ProductDetails: "",
            ItP_FundsExecutorFee: "",
            ItP_FundsNominationOfBeneficiaries: "",
            ItP_FundsInformationExplained: "",
            ItP_FundsAdditionComments: "",
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
                `/api/roa/form/investmentplanning`,
                Body,
                config
            )
            setFormStatus(response?.data?.data?.form_status)


            setFormData(response?.data?.data?.investmentPlanning)
            setProductTaken(response?.data?.data?.productTaken)

        } catch (error) {
            setProductTaken([])
        }
        setLoaded(false)
    }


    const updateIPForm = async () => {

    }


    const onFieldBlur = (e) => {
    }

    const [SicaVisibility, setSicaVisibility] = useState(false)
    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)
    const [backgroundInfoVisibility1, setbackgroundInfoVisibility1] = useState(false)
    const [backgroundInfoVisibility2, setbackgroundInfoVisibility2] = useState(false)
    const [backgroundInfoVisibility3, setbackgroundInfoVisibility3] = useState(false)
    const [backgroundInfoVisibility4, setbackgroundInfoVisibility4] = useState(false)
    const [backgroundInfoVisibility5, setbackgroundInfoVisibility5] = useState(false)
    const [backgroundInfoVisibility6, setbackgroundInfoVisibility6] = useState(false)
    const [backgroundInfoVisibility7, setbackgroundInfoVisibility7] = useState(false)
    const [backgroundInfoVisibility8, setbackgroundInfoVisibility8] = useState(false)
    const [backgroundInfoVisibility9, setbackgroundInfoVisibility9] = useState(false)
    const [backgroundInfoVisibility10, setbackgroundInfoVisibility10] = useState(false)
    const [backgroundInfoVisibility11, setbackgroundInfoVisibility11] = useState(false)
    const [backgroundInfoVisibility12, setbackgroundInfoVisibility12] = useState(false)
    const [backgroundInfoVisibility13, setbackgroundInfoVisibility13] = useState(false)
    const [backgroundInfoVisibility14, setbackgroundInfoVisibility14] = useState(false)
    const [backgroundInfoVisibility15, setbackgroundInfoVisibility15] = useState(false)


    function backgroundInfo_onFocus() {
        setbackgroundInfoVisibility(true)
    }
    function backgroundInfo_onBlur() {
        setbackgroundInfoVisibility(false)
    }
    function backgroundInfo_onFocus1() {
        setbackgroundInfoVisibility1(true)
    }
    function backgroundInfo_onBlur1() {
        setbackgroundInfoVisibility1(false)
    }
    function backgroundInfo_onFocus2() {
        setbackgroundInfoVisibility2(true)
    }
    function backgroundInfo_onBlur2() {
        setbackgroundInfoVisibility2(false)
    }
    function backgroundInfo_onFocus3() {
        setbackgroundInfoVisibility3(true)
    }
    function backgroundInfo_onBlur3() {
        setbackgroundInfoVisibility3(false)
    }
    function backgroundInfo_onFocus4() {
        setbackgroundInfoVisibility4(true)
    }
    function backgroundInfo_onBlur4() {
        setbackgroundInfoVisibility4(false)
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
    function backgroundInfo_onFocus13() {
        setbackgroundInfoVisibility13(true)
    }
    function backgroundInfo_onBlur13() {
        setbackgroundInfoVisibility13(false)
    }
    function backgroundInfo_onFocus14() {
        setbackgroundInfoVisibility14(true)
    }
    function backgroundInfo_onBlur14() {
        setbackgroundInfoVisibility14(false)
    }
    function backgroundInfo_onFocus15() {
        setbackgroundInfoVisibility15(true)
    }
    function backgroundInfo_onBlur15() {
        setbackgroundInfoVisibility15(false)
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
                            <b>Investment and Savings</b>
                        </div>
                        {
                            SuccessMessageVisibility ?
                                <Alert SuccessMessage={ SuccessMessage } />
                                :
                                <></>
                        }
                        <div className='inital-card-header mx-5'>
                            <form onSubmit={ e => onSubmit(e) }>
                                <b className='roa-font'>Source of Funds</b>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='roa-label'>Identify the source of funds being invested</p>
                                    </div>
                                    <div className='col-6'>
                                        <div className='col-6'>
                                            <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-label form-select" name='IP_SourceOfIncome' value={ FormData?.IP_SourceOfIncome } onChange={ (e) => { onChange(e) } } aria-label="Default select example">
                                                <option value="0" selected>Choose Source of funds</option>
                                                <option value="1">Salary</option>
                                                <option value="2">Savings</option>
                                                <option value="3">Inheritence</option>
                                                <option value="4">Resignation</option>
                                                <option value="5">Retirement</option>
                                                <option value="6">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {
                                    backgroundInfoVisibility10 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Define Other Source of Funds.

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>

                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_OtherSourceOfIncome }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_OtherSourceOfIncome']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus10() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur10() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Define Other Source of Funds.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <br />
                                <h6 className={
                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "roa-label sfp-text"
                                        : user?.email.includes('fs4p') ? "roa-label fs4p-text"
                                            : user?.email.includes('sanlam') ? "roa-label sanlam-text"
                                                : "fw-bold"
                                }  > <b>Analysis of Client{ `'` }s Circumstances</b></h6>
                                <p className="roa-label">The analysis of your personal circumstances as described above.</p>


                                <div className='row'>
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate"><b>Investment Requirements</b></label>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate"><b>Need</b></label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.1 Investment term</label>
                                    </div>
                                    <div className="col-3">
                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={ FormData['IP_InvestmentTerm'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="Investment Term" aria-describedby="" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">Years</label>
                                    </div>
                                </div>
                                <br />


                                {
                                    backgroundInfoVisibility11 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_InvestmentTermDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_InvestmentTermDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus11() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur11() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.2 Liquidity/Access required during term</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_Liquidity'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="IP_Liquidity" name="IP_Liquidity" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="letter_of_introduction_radio_btn" >
                                                        Yes
                                                    </label>
                                                </div>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_Liquidity'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="IP_Liquidity" name="IP_Liquidity" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="letter_of_introduction_radio_btn" >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {
                                    backgroundInfoVisibility12 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Does the client require access to the investment during the term?

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_LiquidityDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_LiquidityDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus12() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur12() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Does the client require access to the investment during the term?` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.3 Voluntary or compulsory investment</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_Type'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="IP_Type" name="IP_Type" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="authority_access_radio_btn" >
                                                        Voluntary
                                                    </label>
                                                </div>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_Type'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="IP_Type" name="IP_Type" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="authority_access_radio_btn" >
                                                        Compulsary
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    backgroundInfoVisibility13 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Explain?

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_TypeDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_TypeDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus13() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur13() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Click here to enter text.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />

                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.4 Lump sum or recurring premium</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_PremiumType'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="IP_PremiumType" name="IP_PremiumType" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="provided_identity_radio_btn" >
                                                        Lump Sum
                                                    </label>
                                                </div>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_PremiumType'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="IP_PremiumType" name="IP_PremiumType" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="provided_identity_radio_btn" >
                                                        Recurring
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    backgroundInfoVisibility14 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_PremiumTypeDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_PremiumTypeDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus14() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur14() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.5 Income Required</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_IncomeRequired'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="IP_IncomeRequired" name="IP_IncomeRequired" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="provided_identity_radio_btn1" >
                                                        Yes
                                                    </label>
                                                </div>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className="row col-3 align-items-center">
                                                <div className="col-2">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['IP_IncomeRequired'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="IP_IncomeRequired" name="IP_IncomeRequired" />
                                                </div>
                                                <div className="col-8">
                                                    <label className="roa-font" htmlFor="provided_identity_radio_btn1" >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    backgroundInfoVisibility15 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Details of Income Required.
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_IncomeRequiredDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_IncomeRequiredDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus15() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur15() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Details of Income Required.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />
                                <div className='row'>
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.6 Investment Strategy</label>
                                    </div>

                                    <div className='col-6'>
                                        <div className='col-6'>
                                            <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-label form-select" name='IP_InvestmentStrategy' value={ FormData['IP_InvestmentStrategy'] } onChange={ (e) => { onChange(e) } } aria-label="Default select example">
                                                <option value="0" selected>Choose an Item</option>
                                                <option value="1">Capital Preservation</option>
                                                <option value="2">Income</option>
                                                <option value="3">Goal Specification Investment</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <br />


                                {
                                    backgroundInfoVisibility1 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Notes on discussion with client concerning the investment strategy.<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_InvestmentStrategyDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_InvestmentStrategyDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus1() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur1() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Notes on discussion with client concerning the investment strategy.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />
                                <div className='row'>
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.7 Return Required</label>
                                    </div>
                                    <div className='col-6'>
                                        <div className='col-6'>
                                            <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-label form-select" name='IP_ReturnRequired' value={ FormData['IP_ReturnRequired'] } onChange={ (e) => { onChange(e) } } aria-label="Default select example">
                                                <option value="0" selected>Choose an Item</option>
                                                <option value="1">Market Linked Return</option>
                                                <option value="2">Targeted Return</option>
                                                <option value="3">Benchmark</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                {
                                    backgroundInfoVisibility2 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Notes on discussion with client concerning return expectations.<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_ReturnRequiredDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_ReturnRequiredDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus2() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur2() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Notes on discussion with client concerning return expectations.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />
                                <div className="col-6">
                                </div>
                                <div className='row'>
                                    <div className="col-6">
                                        <label htmlFor="client_name" className="roa-font" title="If no, motivate">2.8 Risk Profile</label>
                                    </div>
                                    <div className='col-6'>
                                        <div className='col-6'>
                                            <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-label form-select" name='IP_RiskProfile' value={ FormData['IP_RiskProfile'] } onChange={ (e) => { onChange(e) } } aria-label="Default select example">
                                                <option value="0" selected>Choose an Item</option>
                                                <option value="1">Conservative</option>
                                                <option value="2">Cautious</option>
                                                <option value="3">Moderate</option>
                                                <option value="4">Moderately Aggressive</option>
                                                <option value="5">Aggressive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {
                                    backgroundInfoVisibility3 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Notes on the client risk profile.<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_RiskProfileDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_RiskProfileDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus3() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur3() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Notes on the client risk profile.` }
                                    />
                                </div>

                                <br />
                                <br />

                                <hr />



                                <h5 className="roa-label " ><b>SECTION C:</b></h5>
                                <h6 className={
                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "roa-label sfp-text"
                                        : user?.email.includes('fs4p') ? "roa-label fs4p-text"
                                            : user?.email.includes('sanlam') ? "roa-label sanlam-text"
                                                : "fw-bold"
                                }  ><b>Financial Solutions:</b></h6>

                                <p className="roa-font">Summary of recommendations to address your identified needs</p>
                                {
                                    backgroundInfoVisibility ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Discuss the outcome of the FNA<br />
                                                    </li>
                                                    <li>
                                                        Qualification of need explaining the reasons why this type of investment vehicle was recommended<br />
                                                    </li>
                                                    <li>
                                                        How it will meet the client{ `'` }s needs<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_RecommendationSummary }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_RecommendationSummary']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Discuss the outcome of the FNA Qualification of need explaining the reasons why this type of investment vehicle was recommended How it will meet the client's needs.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <h5 className="roa-label " ><b>SECTION D:</b></h5>
                                <h6 className={
                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "roa-label sfp-text"
                                        : user?.email.includes('fs4p') ? "roa-label fs4p-text"
                                            : user?.email.includes('sanlam') ? "roa-label sanlam-text"
                                                : "fw-bold"
                                }  ><b>Alternative Solutions Considered</b></h6>

                                <p className="roa-font">The following solutions were presented to you for consideration but were not selected for the following reasons:</p>

                                {
                                    backgroundInfoVisibility4 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        1. Identify the type of product or product provider which was considered but not selected and motivate..<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_AltS_1 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_AltS_1']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus4() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur4() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `1. Identify the type of product or product provider which was considered but not selected and motivate.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />

                                {
                                    backgroundInfoVisibility5 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        2. Identify the type of product or product provider which was considered but not selected and motivate..<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_AltS_2 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_AltS_2']: value }) } }
                                        // onBlur={(e)=>{onFieldBlur(e)}}
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Click here to enter text.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />

                                {
                                    backgroundInfoVisibility6 ?
                                        <>
                                            <div id="background_info_instructions10" className="hidden_class">
                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        3. Identify the type of product or product provider which was considered but not selected and motivate..<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.IP_AltS_3 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['IP_AltS_3']: value }) } }
                                        // onBlur={(e)=>{onFieldBlur(e)}}
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Click here to enter text.` }
                                    />
                                </div>

                                <br />
                                <br />


                                <br />
                                <h5 className="roa-label " ><b>SECTION E:</b></h5>
                                <h6 className={
                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "roa-label sfp-text"
                                        : user?.email.includes('fs4p') ? "roa-label fs4p-text"
                                            : user?.email.includes('sanlam') ? "roa-label sanlam-text"
                                                : "fw-bold"
                                }  ><b>Product Taken</b></h6>

                                <p className="roa-font">Products accepted by you to meet your requirements.</p>
                                {
                                    ProductTaken.length === 0 ?
                                        <div className="col-6">
                                            <button className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                            : "btn btn-primary sfp "
                                            } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon width={ "15px" } icon={ faPlus } /> Add New Product</button>
                                        </div>
                                        : <></>
                                }

                                {
                                    ProductTaken.length > 0 ?
                                        ProductTaken.map((key, i) => {
                                            // console.log(i+1)
                                            return (
                                                <>
                                                    <div className="row">
                                                        {
                                                            ProductTaken.length == i + 1 ?
                                                                <div className="col-6">
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                    : "btn btn-primary sfp "
                                                                    } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon width={ "15px" } icon={ faPlus } /> Add New Product</button>
                                                                </div>
                                                                : <></>
                                                        }
                                                        <div className="col-6">
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                            : "btn btn-danger sfp "
                                                            } type='button' onClick={ (e) => { RemoveNewProductTaken(e) } }><FontAwesomeIcon width={ "15px" } icon={ faMinus } /> Remove Product</button>
                                                        </div>
                                                    </div>

                                                    <div className="container mt-3">
                                                        <table className="table">

                                                            <tbody>
                                                                <tr>
                                                                    <td className="roa-font" align="start">Product:</td>
                                                                    <td>
                                                                        <div className=''>
                                                                            <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-label form-select" name='ProductTaken' value={ parseInt(key.ProductTaken) } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-label="Default select example">
                                                                                <option value="0" selected>Choose Product</option>
                                                                                <option value="1">Endowment</option>
                                                                                <option value="2">RA</option>
                                                                                <option value="3">TFSA</option>
                                                                                <option value="4">Unit Trust</option>
                                                                                <option value="5">Life Annuity</option>
                                                                                <option value="6">Living Annuity</option>
                                                                                <option value="7">Other</option>
                                                                            </select>

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
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductProvider' value={ key.ProductProvider } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>

                                                                    <td className="roa-font" align="start">Policy No:</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='PolicyNumber' required value={ key.PolicyNumber } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    <td></td>

                                                                    <td></td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="roa-font" align="start">Product Name:</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductName' value={ key.ProductName } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>

                                                                    <td className="roa-font" align="start">Premium</td>
                                                                    <td>
                                                                        <div className='row'>
                                                                            <div className='col-6'>
                                                                                <div className="form-group">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductPremium' value={ key.ProductPremium } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-6'>
                                                                                <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-label form-select" name='ProductPremiumFrequency' value={ key.ProductPremiumFrequency } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-label="Default select example">
                                                                                    <option value="0" selected>Frequency</option>
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
                                                                    <td className="roa-font" align="start">Escalation:</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductEscalation' value={ key.ProductEscalation } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>

                                                                    <td className="roa-font" align="start">Total estimated annual <br />cost (EAC)</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ProductEAC' value={ key.ProductEAC } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="roa-font" align="start">Contracting Party</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductContractingParty' value={ key.ProductContractingParty } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>

                                                                    <td className="roa-font" align="start">Life/Lives assured</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductLivesAssured' value={ key.ProductLivesAssured } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="roa-font" align="start">Premium Layer</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductPremiumLayer' value={ key.ProductPremiumLayer } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="roa-font" align="start">Beneficiary / nominee</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ProductBeneficiary' value={ key.ProductBeneficiary } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>

                                                                    <td className="roa-font" align="start">Initial Commission</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='Product_IniC' value={ key.Product_IniC } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='Product_IniC_Percentage' value={ key.Product_IniC_Percentage } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td className="roa-font" align="start">Ongoing Commission</td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='Product_OnC' value={ key.Product_OnC } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    <td>

                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='Product_OnC_Percentage' value={ key.Product_OnC_Percentage } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </div>


                                                    <div className="row g-3 align-items-center">
                                                        <div className="col-6">
                                                            <label htmlFor="client_name" className="roa-font" title="If no, motivate">Were the SFP Solution Funds (multi-managed wrap funds) considered?</label>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="row">
                                                                <div className="row col-2 align-items-center">
                                                                    <div className="col-2">
                                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ key.SFPSolutionFunds == 1 ? true : false } onChange={ (e) => { on_ProductTaken_Change(e, i) } } type="radio" value="1" id="SFPSolutionFunds" name="SFPSolutionFunds" />
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <label className="roa-font" htmlFor="provided_identity_radio_btn2" >
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <div className="row col-2 align-items-center">
                                                                    <div className="col-2">
                                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ key.SFPSolutionFunds == 0 ? true : false } onChange={ (e) => { on_ProductTaken_Change(e, i) } } type="radio" value="0" id="SFPSolutionFunds" name="SFPSolutionFunds" />
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <label className="roa-font" htmlFor="provided_identity_radio_btn2" >
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="provided_identity_3" >
                                                            {
                                                                SicaVisibility ?
                                                                    <>
                                                                        <div id="provided_identity_instructions2" className="hidden_class">
                                                                            <p className="roa-font">State the motivation</p>
                                                                        </div>
                                                                    </> :
                                                                    null
                                                            }
                                                            {/* <textarea maxLength={500}   id="provided_identity2" name="SFPSolutionFundsDetails" value={key.SFPSolutionFundsDetails} onChange={(e) => {on_ProductTaken_Change(e, i)}} onFocus={sica_onFocus} onBlur={sica_onBlur} className="form-control" placeholder="State the motivation" aria-describedby="" ></textarea> */ }

                                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                <ReactQuill
                                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                    value={ key?.SFPSolutionFundsDetails }
                                                                    onChange={ (value) => { on_ProductTaken_Value_Change("SFPSolutionFundsDetails", i, value) } }
                                                                    // onBlur={(e)=>{onFieldBlur(e)}}
                                                                    modules={ modules }
                                                                    formats={ formats }
                                                                    style={ {
                                                                        height: '300px', // Set the desired height here
                                                                    } }
                                                                    placeholder={ `Click here to enter text.` }
                                                                />
                                                            </div>

                                                            <br />
                                                            <br />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <p className="roa-font"><b>Investment portfolio</b></p>

                                                    {
                                                        backgroundInfoVisibility7 ?
                                                            <>
                                                                <div id="background_info_instructions10" className="hidden_class">
                                                                    {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                                    <ul>
                                                                        <li>
                                                                            When a wrap fund or a selection of wrap funds is used, motivate, and explain.<br /><br />
                                                                            Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided:<br /><br />
                                                                            illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,<br /><br />
                                                                            motivating the constructed portfolio with reference to the following aspects:<br /><br />
                                                                            correlation;<br /><br />
                                                                            drawdown;<br /><br />
                                                                            portfolio return;<br /><br />
                                                                            meeting the investment objectives of the clients

                                                                        </li>

                                                                    </ul>

                                                                </div>
                                                            </> :
                                                            null
                                                    }
                                                    <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                        <ReactQuill
                                                            theme="snow" // Specify the theme ('snow' or 'bubble')
                                                            value={ key?.ItP }
                                                            onChange={ (value) => { on_ProductTaken_Value_Change("ItP", i, value) } }
                                                            onFocus={ (e) => { backgroundInfo_onFocus7() } }
                                                            onBlur={ (e) => { backgroundInfo_onBlur7() } }
                                                            modules={ modules }
                                                            formats={ formats }
                                                            style={ {
                                                                height: '300px', // Set the desired height here
                                                            } }
                                                            placeholder={ `
                                                                When a wrap fund or a selection of wrap funds is used, motivate, and explain.

                                                                Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided:

                                                                illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,

                                                                motivating the constructed portfolio with reference to the following aspects:

                                                                correlation;

                                                                drawdown;

                                                                portfolio return;

                                                                meeting the investment objectives of the clients `}
                                                        />
                                                    </div>

                                                    <br />
                                                    <br />
                                                    <br />
                                                    <table className="table">
                                                        <thead>
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                                            <td scope="col" align="center"><p className="roa-font">Fund Fact Sheets to client:</p></td>

                                                        </thead>


                                                    </table>


                                                    <div className="container mt-3">
                                                        <table className="table">

                                                            <tbody>
                                                                <tr>
                                                                    <td className="roa-font" align="start">Funds</td>



                                                                    <td className="roa-font" align="center">%</td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <div className='roa-font'>Provided</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className='roa-font'>Discussed</div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund' value={ key.ItP_Fund } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">

                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage' value={ key.ItP_FundPercentage } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.ItP_FundProvided === 1 ? true : false } name="ItP_FundProvided" onChange={ (e) => { key.ItP_FundProvided === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.ItP_FundDiscussed === 1 ? true : false } name="ItP_FundDiscussed" onChange={ (e) => { key.ItP_FundDiscussed === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> No</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund1' value={ key.ItP_Fund1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage1' value={ key.ItP_FundPercentage1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundProvided1 === 1 ? true : false } name="ItP_FundProvided1" onChange={ (e) => { key.ItP_FundProvided1 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundDiscussed1 === 1 ? true : false } name="ItP_FundDiscussed1" onChange={ (e) => { key.ItP_FundDiscussed1 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> No</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund2' value={ key.ItP_Fund2 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage2' value={ key.ItP_FundPercentage2 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundProvided2 === 1 ? true : false } name="ItP_FundProvided2" onChange={ (e) => { key.ItP_FundProvided2 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundDiscussed2 === 1 ? true : false } name="ItP_FundDiscussed2" onChange={ (e) => { key.ItP_FundDiscussed2 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> No</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund3' value={ key.ItP_Fund3 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage3' value={ key.ItP_FundPercentage3 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundProvided3 === 1 ? true : false } name="ItP_FundProvided3" onChange={ (e) => { key.ItP_FundProvided3 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundDiscussed3 === 1 ? true : false } name="ItP_FundDiscussed3" onChange={ (e) => { key.ItP_FundDiscussed3 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> No</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund4' value={ key.ItP_Fund4 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage4' value={ key.ItP_FundPercentage4 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundProvided4 === 1 ? true : false } name="ItP_FundProvided4" onChange={ (e) => { key.ItP_FundProvided4 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundDiscussed4 === 1 ? true : false } name="ItP_FundDiscussed4" onChange={ (e) => { key.ItP_FundDiscussed4 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> No</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund5' value={ key.ItP_Fund5 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage5' value={ key.ItP_FundPercentage5 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundProvided5 === 1 ? true : false } name="ItP_FundProvided5" onChange={ (e) => { key.ItP_FundProvided5 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundDiscussed5 === 1 ? true : false } name="ItP_FundDiscussed5" onChange={ (e) => { key.ItP_FundDiscussed5 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> No</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund6' value={ key.ItP_Fund6 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage6' value={ key.ItP_FundPercentage6 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundProvided6 === 1 ? true : false } name="ItP_FundProvided6" onChange={ (e) => { key.ItP_FundProvided6 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundDiscussed6 === 1 ? true : false } name="ItP_FundDiscussed6" onChange={ (e) => { key.ItP_FundDiscussed6 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                        <label className="roa-font"> No</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" name='ItP_Fund7' value={ key.ItP_Fund7 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">%</span>
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='ItP_FundPercentage7' value={ key.ItP_FundPercentage7 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <div className='type="checkbox"'>
                                                                            <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundProvided7 === 1 ? true : false } name="ItP_FundProvided7" onChange={ (e) => { key.ItP_FundProvided7 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                            <label className="roa-font"> Yes</label>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className='type="checkbox"'>
                                                                            <input type="checkbox" class="form-check-input" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ key.ItP_FundDiscussed7 === 1 ? true : false } name="ItP_FundDiscussed7" onChange={ (e) => { key.ItP_FundDiscussed7 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1) } } />
                                                                            <label className="roa-font"> No</label>
                                                                        </div>
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <br />
                                                    <p className="roa-font">The following are reasons why the abovementioned product best suits your needs and objectives:</p>

                                                    {
                                                        backgroundInfoVisibility8 ?
                                                            <>
                                                                <div id="background_info_instructions10" className="hidden_class">
                                                                    {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                                    <ul>
                                                                        <li>
                                                                            Motivate why the chosen product was recommended to best suit your client{ `'` }s needs.<br />
                                                                        </li>

                                                                    </ul>

                                                                </div>
                                                            </> :
                                                            null
                                                    }

                                                    <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                        <ReactQuill
                                                            theme="snow" // Specify the theme ('snow' or 'bubble')
                                                            value={ key?.ItP_FundsReasons }
                                                            onChange={ (value) => { on_ProductTaken_Value_Change("ItP_FundsReasons", i, value) } }
                                                            onFocus={ (e) => { backgroundInfo_onFocus8() } }
                                                            onBlur={ (e) => { backgroundInfo_onBlur8() } }
                                                            modules={ modules }
                                                            formats={ formats }
                                                            style={ {
                                                                height: '300px', // Set the desired height here
                                                            } }
                                                            placeholder={ `Motivate why the chosen product was recommended to best suit your client's needs.` }
                                                        />
                                                    </div>

                                                    <br />
                                                    <br />
                                                    <hr />
                                                    <p className="roa-font">The details of the material aspects of the selected product that were discussed with you are outlined below:</p>
                                                    {

                                                        parseInt(key.ProductTaken) == 1 ? <>
                                                            <p className="roa-font">
                                                                <b>Tax Implications:</b><br />
                                                                There are significant tax benefits afforded to Endowment plan investors. With an endowment plan the life insurance company will pay tax on your behalf at a rate of 30%. At maturity date the proceeds of this investment will be tax free.
                                                            </p>

                                                            <p className="roa-font">
                                                                <b>Liquidity:</b><br />
                                                                In the first five years of this investment your access to your funds are restricted. During this period access is limited to one partial withdrawal or a full surrender or a loan subject to penalties.
                                                            </p>

                                                            <p className="roa-font">
                                                                <b>Termination Penalties:</b>
                                                                The will be termination penalties levied in the event of early access to funds during the restriction period of the first 5 years of the investment.
                                                                The following events will be deemed as trigger events, where applicable:
                                                                <ul>
                                                                    <li>Stopping contributions</li>
                                                                    <li>Reducing contributions</li>
                                                                    <li>Partial withdrawal</li>
                                                                    <li>Loan</li>
                                                                    <li>Full surrender</li>
                                                                </ul>
                                                                As discussed please refer to the sliding scale in the policy documents illustrating the penalties to be levied at a given period.
                                                            </p>

                                                            <p className="roa-font">
                                                                <b>Gurantees:</b><br />
                                                                The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses
                                                            </p>

                                                            <p className="roa-font">
                                                                <b>Legislative Restrictions:</b><br />
                                                                In the event of a withdrawal there may be restrictions on the maximum amount allowed as a withdrawal, any excess amount above the
                                                                allowed limit will have to remain invested until the end of the restricted period.
                                                                In the event of any increase in contributions in which an increase of more than 20% of the preceeding two years premiums occurs a new restriction period of 5 years will apply

                                                            </p>

                                                            <p className="roa-font">
                                                                <b>Implication of Fees:</b><br />
                                                                Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.
                                                            </p>

                                                            <p className="roa-font">
                                                                <b>At death-Endownment:</b><br />
                                                                The proceeds will pay-out to your nominated beneficiary and will attract estate duty at a maximum of 25%. Should the beneficiary be your estate executors fees will be applicable.
                                                            </p>

                                                            <p className="roa-font">
                                                                <b>At death-sinking fund</b><br />
                                                                The policy will be enforced with the new owner as stipulated.
                                                            </p>


                                                        </> : parseInt(key.ProductTaken) == 2 ?
                                                            <>
                                                                <p className="roa-font"><b>Tax Implications:</b><br />
                                                                    There are significant tax benefits afforded to RA investors. You are permitted to deduct up to 27.5% of your annual taxable incomes (subject to  R350 000 per year maximum). Contributions in excess of this amount may deducted in the following tax year or at retirement. In addition to this, no income tax or capital gain tax is charged on the investment returns within an RA. Also, the funds housed in your RA do not form part of your estate, which means that this money will not be subject to executors fees or estate duty (except the excess contributions made). At retirement, you will be permitted to withdraw up to 1/3 of the value of the retirement annuity(s) of which the first R500 000 of the total withdrawal is tax-free subject to there being no previous withdrawals from any retirement fund.</p>

                                                                <p className="roa-font"><b>Liquidity:</b><br />
                                                                    You will only be able to access the funds from age 55 onwards, subject to formal emigration from South Africa after a period of 3 years or at early retirement due to permanent disability.</p>

                                                                <p className="roa-font"><b>Termination Penalties:</b><br />
                                                                    Planner disclose as per the product</p>

                                                                <p className="roa-font"><b>Gurantees:</b><br />
                                                                    The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses.</p>

                                                                <p className="roa-font"><b>Legislative Restrictions:</b><br />
                                                                    At retirement you have the option to withdraw 1/3 of the investment in cash. The remaining two-thirds must be used to purchase a pension income to sustain you during retirement. Alternatively you may choose to purchase an income with the full amount. Retirement annuity withdrawals are taxed according to the retirement lumpsum tax tables</p>

                                                                <p className="roa-font"><b>Implication of Fees:</b><br />
                                                                    Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.</p>

                                                                <p className="roa-font"><b>Commutation at Retirement:</b><br />
                                                                    You are allowed to commute the entire fund value provided the minimum fund value of R247 500 is met. This rule is applied per retirement fund and not per client. </p>

                                                                <p className="roa-font"><b>At death</b><br />
                                                                    You may nominate beneficiaries. However, the trustees of the fund will make the final decision in terms of equitable distribution of the funds. The trustees will take your wishes into account but are not bound by them.</p>
                                                            </>
                                                            : parseInt(key.ProductTaken) == 3 ?
                                                                <>
                                                                    <p className="roa-font">
                                                                        <b>Tax Implications:</b><br />
                                                                        The investment will not attract any tax  if contributions are kept within the annual limits which are R36 000 p.a and R500 000 life time. Any excess contributions will be taxed at 40%.
                                                                    </p>

                                                                    <p className="roa-font">
                                                                        <b>Liquidity:</b><br />
                                                                        Planner disclose
                                                                    </p>

                                                                    <p className="roa-font">
                                                                        <b>Termination Penalties:</b><br />
                                                                        Planner to disclosed
                                                                    </p>

                                                                    <p className="roa-font">
                                                                        <b>Gurantees:</b><br />
                                                                        The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses.
                                                                    </p>

                                                                    <p className="roa-font">
                                                                        <b>Implication of Fees:</b><br />
                                                                        Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.
                                                                    </p>

                                                                    <p className="roa-font">
                                                                        <b>Legislative Restrictions:</b><br />
                                                                        There are limits to the annual and life time contributions on this investment. You may have multiple tax free savings accounts but the annual and lifetime limits limits are applied per individual and not per investment.In the event that you make a withdrawal any subsequent replacement of funds above the limit will attract tax at 40%.
                                                                    </p>

                                                                    <p className="roa-font">
                                                                        <b>Death Benefit</b><br />
                                                                        Planner to disclose
                                                                    </p>

                                                                </> : parseInt(key.ProductTaken) == 4 ?
                                                                    <>
                                                                        <p className="roa-font">
                                                                            <b>Tax Implications:</b><br />
                                                                            Your investment will be taxed in accordance with your marginal tax rate. This investment will attract capital gains tax when you change funds or when funds are withdrawn.
                                                                        </p>

                                                                        <p className="roa-font">
                                                                            <b>Liquidity:</b><br />
                                                                            You are allowed to make regular withdrawals.
                                                                        </p>

                                                                        <p className="roa-font">
                                                                            <b>Termination Penalties:</b><br />
                                                                            No termination penalties
                                                                        </p>

                                                                        <p className="roa-font">
                                                                            <b>Gurantees:</b><br />
                                                                            The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses.
                                                                        </p>

                                                                        <p className="roa-font">
                                                                            <b>Implication of Fees:</b><br />
                                                                            Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.
                                                                        </p>

                                                                        <p className="roa-font">
                                                                            <b>Legislative Restrictions:</b><br />
                                                                            The are no legislative restrictions on this investment
                                                                        </p>

                                                                        <p className="roa-font">
                                                                            <b>At Death</b><br />
                                                                            You cannot appoint a beneficiary. In the event of death this benefit will pay into the your Estate. The investment will be an asset in your estate and will attract estate duty and executors’ fees. The investment will be distributed in accordance with your instructions in the will.
                                                                        </p>
                                                                    </> : parseInt(key.ProductTaken) == 5 ?
                                                                        <>

                                                                            <p className="roa-font">
                                                                                <b>Tax Implications:</b><br />
                                                                                The income drawn form this investmenet will be taxed at your marginal tax rate taking into consideration your gross income form all your income streams. Due to this you may pay a higher tax than illustrated when looking at this investment individually.
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Termination Penalties:</b><br />
                                                                                This investment cannot be terminated
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Gurantees:</b><br />
                                                                                The income amount paid out by this investment is guaranteed for life, if you have selecetd an escalation for your income the income will increase by the selected escalation annually. Selecting an escalation on your income will result I the initial income amount being substantially lower than if the level income option is selected.
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Implication of Fees:</b><br />
                                                                                The fees levied on this investment are priced into the product
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Legislative Restrictions:</b><br />
                                                                                The decision to invest in this product cannot be reversed, the income amount cannot be altered you will only receive annual increases if you have selected the escalation option
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>At Death</b><br />
                                                                                Single Life: If you have selecetd the single life option the income paid out on this investment will cease in the event of your death, the product does not have a death benefit this means no funds will be paid out.<br /><br />
                                                                                Joint Life : If you have selected the joint life option it means you have elecetd to have two life assured on the product. In the event of the 1st life assureds death the income will continue paying out to the second life assured, the income paid out to the second life assured maybe reduced subject to the option you have selected. At the death of the second life assured income will cease and no death benefit will be paid out.<br /><br />
                                                                                Guarantee Period : In the event that you have seleceted a guarantee period this means that in the event of your death or the death of both life assured in the case of a joint life within the guarantee period the income on this investment will continue to pay to your nominated beneficiary until the end of the guarantee period.

                                                                            </p>

                                                                            <p className="roa-font">
                                                                                Please not if death is to occur after the guarantee period no income will be paid to your nominated beneficiary.
                                                                            </p>
                                                                        </> : parseInt(key.ProductTaken) == 6 ? <>

                                                                            <p className="roa-font">
                                                                                <b>Tax Implications:</b><br />
                                                                                The growth on this investment will not attract any tax, but the income drawn will be taxed at your marginal tax rate taking into consideration all gross income generated form all available income streams. Due to this you may pay a higher tax than illustrated when looking at this investment individually.
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Liquidity:</b><br />
                                                                                This investment does not allow you to access the invested capital not even in the event of termination
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Termination Penalties:</b><br />
                                                                                In the event that you terminate this investment any applicable termination fees will be disclosed in the termination quotation
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Gurantees:</b><br />
                                                                                The product does not offer any guarantees, invested funds will be subject to markert fluctuations and pontential capital losses
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Implication of Fees:</b><br />
                                                                                Please note there will be fees levied on the invetsment, these fees will result in the reduction of returns generated by the investment and in the event of low growth may alos have a negative impact on the fund value. We have also discussed the EAC which is an illustration  the maximum tatal cost that may be levied on the investment. It also important to not that as a general rule and for longegivity the icnome withdrwaa rate should be kept lower than the invetsment return rate. I have also made you aware of inflation that is the risk that the buying power of your funds over time may be depleted and eroded .
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>Legislative Restrictions:</b><br />
                                                                                There are limits imposed on the income witdrawal rate, currntly as legislation stands you are allowed a minimum of 2.5% and a maximum of 17.5%. The income withdrawal rate can be changed once a year depending on your income objectives at the time. It should be noted that changes in income rates should be considered in consideration to expected investment returns and adjustments and realingment consindered accordingly.
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                In the event that this invetsment is terminated you will not have access to the inevsted capital but will be required to transffer the fund value to an alternative annuity vehicle, life or living annuity.
                                                                            </p>

                                                                            <p className="roa-font">
                                                                                <b>At Death</b><br />
                                                                                In the event of death the investment will pay-out directly to your nominated beneficiary and will not form part of your estate or attract any estate taxes. The beneficiary will be presented with the option to transfer the funds into a new annuity in their name or alternatively take the funds in cash which will attract taxes.The beneficiary also has an option the select the alternatives as a combination.
                                                                            </p>

                                                                        </> :
                                                                            <>

                                                                                {
                                                                                    backgroundInfoVisibility8 ?
                                                                                        <>
                                                                                            <div id="background_info_instructions10" className="hidden_class">
                                                                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
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
                                                                                        value={ key?.ItP_FundsMaterialAspects }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ItP_FundsMaterialAspects", i, value) } }
                                                                                        onFocus={ (e) => { backgroundInfo_onFocus8() } }
                                                                                        onBlur={ (e) => { backgroundInfo_onBlur8() } }
                                                                                        modules={ modules }
                                                                                        formats={ formats }
                                                                                        style={ {
                                                                                            height: '300px', // Set the desired height here
                                                                                        } }
                                                                                        placeholder={ `Explain any deviations from your recommendation and the implications thereof.` }
                                                                                    />
                                                                                </div>

                                                                                <br />
                                                                                <br />
                                                                                <br />
                                                                                {
                                                                                    backgroundInfoVisibility9 ?
                                                                                        <>
                                                                                            <div id="background_info_instructions10" className="hidden_class">
                                                                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
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
                                                                                        value={ key?.STIC_Fire_AddComments }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ItP_ProductDetails", i, value) } }
                                                                                        onFocus={ (e) => { backgroundInfo_onFocus9() } }
                                                                                        onBlur={ (e) => { backgroundInfo_onBlur9() } }
                                                                                        modules={ modules }
                                                                                        formats={ formats }
                                                                                        style={ {
                                                                                            height: '300px', // Set the desired height here
                                                                                        } }
                                                                                        placeholder={ `The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?` }
                                                                                    />
                                                                                </div>

                                                                                <br />
                                                                                <br />

                                                                                <br />
                                                                                {
                                                                                    backgroundInfoVisibility10 ?
                                                                                        <>
                                                                                            <div id="background_info_instructions10" className="hidden_class">
                                                                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
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
                                                                                        value={ key?.ItP_ExecutorFee }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ItP_ExecutorFee", i, value) } }
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
                                                                                            <div id="background_info_instructions10" className="hidden_class">
                                                                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
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
                                                                                        value={ FormData?.STIC_Fire_AddComments }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ItP_NominationOfBeneficiaries", i, value) } }
                                                                                        onFocus={ (e) => { backgroundInfo_onFocus11() } }
                                                                                        onBlur={ (e) => { backgroundInfo_onBlur11() } }
                                                                                        modules={ modules }
                                                                                        formats={ formats }
                                                                                        style={ {
                                                                                            height: '300px', // Set the desired height here
                                                                                        } }
                                                                                        placeholder={ `Record discussion with regard to nomination of beneficiaries or cessionaries.` }
                                                                                    />
                                                                                </div>

                                                                                <br />
                                                                                <br />

                                                                                <br />
                                                                                {
                                                                                    backgroundInfoVisibility12 ?
                                                                                        <>
                                                                                            <div id="background_info_instructions10" className="hidden_class">
                                                                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
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
                                                                                        value={ key?.ItP_InformationExplained }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ItP_InformationExplained", i, value) } }
                                                                                        onFocus={ (e) => { backgroundInfo_onFocus12() } }
                                                                                        onBlur={ (e) => { backgroundInfo_onBlur12() } }
                                                                                        modules={ modules }
                                                                                        formats={ formats }
                                                                                        style={ {
                                                                                            height: '300px', // Set the desired height here
                                                                                        } }
                                                                                        placeholder={ `Discuss the following information which has been explained to client.
                                                                                            General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.)
                                                                                            Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)
                                                                                            Waiting periods
                                                                                            Cooling off period`}
                                                                                    />
                                                                                </div>

                                                                                <br />
                                                                                <br />
                                                                                <hr />
                                                                            </>
                                                    }
                                                    {
                                                        parseInt(key.ProductTaken) != 7 ?
                                                            <>
                                                                <strong className="roa-font">Additional Comments</strong>

                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ key?.ItP_FundsAdditionComments }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("ItP_FundsAdditionComments", i, value) } }
                                                                        // onBlur={(e)=>{onFieldBlur(e)}}
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }
                                                                        placeholder={ `Additional Comments.` }
                                                                    />
                                                                </div>

                                                                <br />
                                                                <br />
                                                                <hr />
                                                            </>
                                                            : <></>
                                                    }
                                                </>


                                            )
                                        }) : <></>
                                }


                            </form>
                        </div>
                    </div>

                </EditROALayout >
            </Layout >
        </div >
    )
}

export default InvestPlanning