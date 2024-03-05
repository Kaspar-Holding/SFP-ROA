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

const BAInvestment = () => {

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

    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState(false)


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

        AI_Term: "",
        AI_TermDetails: "",
        // AI_Type : 1,    
        // AI_TypeDetails : "",    
        AI_PremiumType: 2,
        AI_PremiumTypeDetails: "",
        AI_Strategy: 1,
        AI_StrategyDetails: "",
        AI_ReturnRequired: 1,
        AI_ReturnRequiredDetails: "",
        AI_RiskProfile: 1,
        AI_RiskProfileDetails: "",

        AI_TRP_TotalNeed: "",
        AI_TRP_ExistingProvisions: "",
        AI_TRP_ExistingShortfallSurplus: "",
        AI_TRP_ExistingInvestments: "",

        AI_RA_TotalNeed: "",
        AI_RA_ExistingProvisions: "",
        AI_RA_ExistingShortfallSurplus: "",
        AI_RA_ExistingInvestments: "",

        AI_CR_TotalNeed: "",
        AI_CR_ExistingProvisions: "",
        AI_CR_ExistingShortfallSurplus: "",
        AI_CR_Investments: "",

        AI_Other: "",
        AI_Other_TotalNeed: "",
        AI_Other_ExistingProvisions: "",
        AI_Other_ExistingShortfallSurplus: "",
        AI_Other_Investments: "",

        AI_FinancialSolutions: "",
        AI_AltS_1: "",
        AI_AltS_2: "",
        AI_AltS_3: ""
    })
    const [ProductTaken, setProductTaken] = useState([])
    const AddNewProductTaken = (e) => {
        const current = [...ProductTaken]
        current.push({
            advisorId: user?.id,
            formId: formId,

            Pr_Taken: 0,
            Pr_Provider: "",
            Pr_PolicyNumber: "",
            Pr_Name: "",
            Pr_Premium: "",
            Pr_PremiumFrequency: 0,
            Pr_Escalation: "",
            Pr_EAC: "",
            Pr_ContractingParty: "",
            Pr_LivesAssured: "",
            Pr_PremiumPayer: "",
            Pr_Beneficiary: "",
            Pr_IniC: "",
            Pr_IniC_Percentage: "",
            Pr_OnC: "",
            Pr_OnC_Percentage: "",

            Portfolio: "",

            SourceOfFunds: 0,
            SourceOfFundsDetail: "",

            PF_1: "",
            PF_Percentage1: "",
            PF_Provided1: false,
            PF_Discussed1: false,

            PF_2: "",
            PF_Percentage2: "",
            PF_Provided2: false,
            PF_Discussed2: false,

            PF_3: "",
            PF_Percentage3: "",
            PF_Provided3: false,
            PF_Discussed3: false,

            PF_4: "",
            PF_Percentage4: "",
            PF_Provided4: false,
            PF_Discussed4: false,

            PF_5: "",
            PF_Percentage5: "",
            PF_Provided5: false,
            PF_Discussed5: false,

            PF_6: "",
            PF_Percentage6: "",
            PF_Provided6: false,
            PF_Discussed6: false,

            PF_7: "",
            PF_Reasons: "",
            PF_Provided7: false,
            PF_Discussed7: false,

            PF_Reasons: "",
            PF_MaterialAspects: "",
            PF_ExecutorFee: "",
            PF_InformationExplained: "",
            PF_AdditionComments: "",
            PF_Pr_Details: "",
            PF_NominationOfBeneficiaries: ""
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

    const on_ProductTaken_Value_Change = (name, i, val) => {
        let newProductTaken = [...ProductTaken]
        newProductTaken[i]["" + name + ""] = val
        setProductTaken(newProductTaken)
    }

    // Add New BnS Other
    const [AI_Others_Data, setAI_Others_Data] = useState([])
    const AddNewAI_Others_Data = (e) => {
        const current = [...AI_Others_Data]
        current.push({
            advisorId: user?.id,
            formId: formId,

            AI_Other: "",
            AI_Other_TotalNeed: "",
            AI_Other_ExistingProvisions: "",
            AI_Other_ExistingShortfallSurplus: "",
            AI_Other_ExistingInvestments: "",
        })
        setAI_Others_Data(current)
    }
    const RemoveNewAI_Others_Data = (e) => {
        const current = [...AI_Others_Data]
        current.pop()
        setAI_Others_Data(current)
    }
    const on_AI_Others_Data_Change = (e, i) => {
        let newAI_Others_Data = [...AI_Others_Data]
        newAI_Others_Data[i][e.target.name] = e.target.value
        setAI_Others_Data(newAI_Others_Data)
    }
    // End New BnS Other



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
                `/api/roa/form/assuranceinvestment`,
                Body,
                config
            )
            setFormData(response?.data?.data?.assuranceInvestment)
            setFormStatus(response?.data?.data?.form_status)
            setProductTaken(response?.data?.data?.productTaken)
            setAI_Others_Data(response?.data?.data?.ai_other)

        } catch (error) {

        }
        setLoaded(false)
    }

    const updateRPForm = async () => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId,
            assuranceInvestment: FormData,
            productTaken: ProductTaken,
            ai_other: AI_Others_Data
        })
        try {
            await axios.post(
                `/api/roa/form/assuranceinvestment/update`,
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
                setSuccessMessage("Assurance investment is successfully updated")
                setSuccessMessageVisibility(true)
                setTimeout(() => {
                    setSuccessMessageVisibility(false)
                }, 5000)
            })

        } catch (error) {

        }
        setLoaded(false)
    }

    const onFieldBlur = (e) => {
        FormStatus == 0 ? updateRPForm() : Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })
    }

    const [backgroundInfoVisibility8, setbackgroundInfoVisibility8] = useState(false)
    const [backgroundInfoVisibility9, setbackgroundInfoVisibility9] = useState(false)
    const [backgroundInfoVisibility10, setbackgroundInfoVisibility10] = useState(false)
    const [backgroundInfoVisibility10_1, setbackgroundInfoVisibility10_1] = useState(false)
    const [backgroundInfoVisibility11, setbackgroundInfoVisibility11] = useState(false)
    const [backgroundInfoVisibility12, setbackgroundInfoVisibility12] = useState(false)
    const [backgroundInfoVisibility14, setbackgroundInfoVisibility14] = useState(false)
    const [backgroundInfoVisibility15, setbackgroundInfoVisibility15] = useState(false)
    const [backgroundInfoVisibility16, setbackgroundInfoVisibility16] = useState(false)
    const [backgroundInfoVisibility17, setbackgroundInfoVisibility17] = useState(false)
    const [backgroundInfoVisibility18, setbackgroundInfoVisibility18] = useState(false)
    const [backgroundInfoVisibility19, setbackgroundInfoVisibility19] = useState(false)
    const [backgroundInfoVisibility20, setbackgroundInfoVisibility20] = useState(false)
    const [backgroundInfoVisibility21, setbackgroundInfoVisibility21] = useState(false)
    const [backgroundInfoVisibility22, setbackgroundInfoVisibility22] = useState(false)
    const [backgroundInfoVisibility23, setbackgroundInfoVisibility23] = useState(false)
    const [backgroundInfoVisibility24, setbackgroundInfoVisibility24] = useState(false)


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
    function backgroundInfo_onFocus10_1() {
        setbackgroundInfoVisibility10_1(true)
    }
    function backgroundInfo_onBlur10_1() {
        setbackgroundInfoVisibility10_1(false)
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
    function backgroundInfo_onFocus16() {
        setbackgroundInfoVisibility16(true)
    }
    function backgroundInfo_onBlur16() {
        setbackgroundInfoVisibility16(false)
    }
    function backgroundInfo_onFocus17() {
        setbackgroundInfoVisibility17(true)
    }
    function backgroundInfo_onBlur17() {
        setbackgroundInfoVisibility17(false)
    }
    function backgroundInfo_onFocus18() {
        setbackgroundInfoVisibility18(true)
    }
    function backgroundInfo_onBlur18() {
        setbackgroundInfoVisibility18(false)
    }
    function backgroundInfo_onFocus19() {
        setbackgroundInfoVisibility19(true)
    }
    function backgroundInfo_onBlur19() {
        setbackgroundInfoVisibility19(false)
    }
    function backgroundInfo_onFocus20() {
        setbackgroundInfoVisibility20(true)
    }
    function backgroundInfo_onBlur20() {
        setbackgroundInfoVisibility20(false)
    }
    function backgroundInfo_onFocus21() {
        setbackgroundInfoVisibility21(true)
    }
    function backgroundInfo_onBlur21() {
        setbackgroundInfoVisibility21(false)
    }
    function backgroundInfo_onFocus22() {
        setbackgroundInfoVisibility22(true)
    }
    function backgroundInfo_onBlur22() {
        setbackgroundInfoVisibility22(false)
    }
    function backgroundInfo_onFocus23() {
        setbackgroundInfoVisibility23(true)
    }
    function backgroundInfo_onBlur23() {
        setbackgroundInfoVisibility23(false)
    }
    function backgroundInfo_onFocus24() {
        setbackgroundInfoVisibility24(true)
    }
    function backgroundInfo_onBlur24() {
        setbackgroundInfoVisibility24(false)
    }
    function backgroundInfo_onFocus25() {
        setbackgroundInfoVisibility25(true)
    }
    function backgroundInfo_onBlur25() {
        setbackgroundInfoVisibility25(false)
    }
    function backgroundInfo_onFocus26() {
        setbackgroundInfoVisibility26(true)
    }
    function backgroundInfo_onBlur26() {
        setbackgroundInfoVisibility26(false)
    }
    function backgroundInfo_onFocus27() {
        setbackgroundInfoVisibility27(true)
    }
    function backgroundInfo_onBlur27() {
        setbackgroundInfoVisibility27(false)
    }


    const [Fica, setFica] = useState(true)
    const [FicaReason, setFicaReason] = useState("")
    const [FicaVisibility, setFicaVisibility] = useState(false)

    const [Rica, setRica] = useState(true)
    const [RicaReason, setRicaReason] = useState("")
    const [RicaVisibility, setRicaVisibility] = useState(false)
    const [Rica1Visibility, setRica1Visibility] = useState(false)
    const [Rica2Visibility, setRica2Visibility] = useState(false)

    const [Sica, setSica] = useState(true)
    const [SicaReason, setSicaReason] = useState("")
    const [SicaVisibility, setSicaVisibility] = useState(false)

    const [Sica1, setSica1] = useState(true)
    const [Sica1Reason, setSica1Reason] = useState("")
    const [Sica1Visibility, setSica1Visibility] = useState(false)

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

    function rica_onFocus() {
        setRicaVisibility(true)
    }
    function rica_onBlur() {
        setRicaVisibility(false)
    }
    function rica1_onFocus() {
        setRica1Visibility(true)
    }
    function rica1_onBlur() {
        setRica1Visibility(false)
    }
    function rica2_onFocus() {
        setRica2Visibility(true)
    }
    function rica2_onBlur() {
        setRica2Visibility(false)
    }

    function sica_onFocus() {
        setSicaVisibility(true)
    }
    function sica_onBlur() {
        setSicaVisibility(false)
    }

    function sica1_onFocus() {
        setSica1Visibility(true)
    }
    function sica1_onBlur() {
        setSica1Visibility(false)
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

    function backgroundInfo_onFocus5() {
        setbackgroundInfoVisibility5(true)
    }
    function backgroundInfo_onBlur5() {
        setbackgroundInfoVisibility5(false)
    }
    function backgroundInfo_onFocus6() {
        setbackgroundInfoVisibility6(true)
    }
    function backgroundInfo_onBlur6() {
        setbackgroundInfoVisibility6(false)
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
    function backgroundInfo_onFocus16() {
        setbackgroundInfoVisibility16(true)
    }
    function backgroundInfo_onBlur16() {
        setbackgroundInfoVisibility16(false)
    }
    function backgroundInfo_onFocus17() {
        setbackgroundInfoVisibility17(true)
    }
    function backgroundInfo_onBlur17() {
        setbackgroundInfoVisibility17(false)
    }
    function backgroundInfo_onFocus18() {
        setbackgroundInfoVisibility18(true)
    }
    function backgroundInfo_onBlur18() {
        setbackgroundInfoVisibility18(false)
    }
    function backgroundInfo_onFocus19() {
        setbackgroundInfoVisibility19(true)
    }
    function backgroundInfo_onBlur19() {
        setbackgroundInfoVisibility19(false)
    }
    function backgroundInfo_onFocus20() {
        setbackgroundInfoVisibility20(true)
    }
    function backgroundInfo_onBlur20() {
        setbackgroundInfoVisibility20(false)
    }
    function backgroundInfo_onFocus21() {
        setbackgroundInfoVisibility21(true)
    }
    function backgroundInfo_onBlur21() {
        setbackgroundInfoVisibility21(false)
    }
    function backgroundInfo_onFocus22() {
        setbackgroundInfoVisibility22(true)
    }
    function backgroundInfo_onBlur22() {
        setbackgroundInfoVisibility22(false)
    }
    function backgroundInfo_onFocus23() {
        setbackgroundInfoVisibility23(true)
    }
    function backgroundInfo_onBlur23() {
        setbackgroundInfoVisibility23(false)
    }
    function backgroundInfo_onFocus24() {
        setbackgroundInfoVisibility24(true)
    }
    function backgroundInfo_onBlur24() {
        setbackgroundInfoVisibility24(false)
    }
    function backgroundInfo_onFocus25() {
        setbackgroundInfoVisibility25(true)
    }
    function backgroundInfo_onBlur25() {
        setbackgroundInfoVisibility25(false)
    }
    function backgroundInfo_onFocus26() {
        setbackgroundInfoVisibility26(true)
    }
    function backgroundInfo_onBlur26() {
        setbackgroundInfoVisibility26(false)
    }
    function backgroundInfo_onFocus27() {
        setbackgroundInfoVisibility27(true)
    }
    function backgroundInfo_onBlur27() {
        setbackgroundInfoVisibility27(false)
    }


    useEffect(() => {
        LoadData(formId)
    }, [])
    return (
        <div>
            <Layout
                title={ "Edit BA Risk Document" }
                content={ "Edit ROA Document" }
            >
                <EditROALayout
                    appTitle={ 'Edit BA Risk Document' }
                    pageTitle={ 'Edit BA Risk Document' }
                    appName={ 'BA Risk' }
                    app={ 'roa' }
                >
                    <div className='roa-edit-card'>
                        <div className='inital-card-header text-center'>
                            <b>Part II: Investment & Savings</b>
                        </div>
                        {
                            SuccessMessageVisibility ?
                                <Alert SuccessMessage={ SuccessMessage } />
                                :
                                <></>
                        }
                        <br />
                        <form className='inital-card-header mx-5' onSubmit={ e => onSubmit(e) }>
                            <p><b>Section B</b></p>
                            <p className='roa-font'><b>Analysis of Business’s Circumstances</b></p>
                            <p className='roa-label'>The analysis of your personal circumstances as described above</p>
                            <p className='roa-font'><b>Investment requirements</b></p>
                            <div className='row'>
                                <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-4">
                                            <label className="col-form-label roa-label">Investment term</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-4">
                                            <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="AI_Term" name='AI_Term' value={ FormData['AI_Term'] } onChange={ (e) => { onChange(e) } } className="form-control" placeholder="years" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                {
                                    backgroundInfoVisibility14 ?
                                        <>
                                            <div id="background_info_instructions14" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.<br />

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }<div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_TermDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_TermDetails']: value }) } }
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
                            </div>
                            <br />
                            <br />
                            <hr />
                            <div className='row'>
                                <div className="col-6">
                                    <label htmlFor="client_name" className="col-form-label roa-label" title="If no, motivate">Lump sum or recurring premium.</label>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="row col-4 align-items-center">
                                            <div className="col-2">
                                                <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AI_PremiumType'] == 1 ? true : false } name="AI_PremiumType" onChange={ (e) => { onChange(e) } } type="radio" value="1" />
                                            </div>
                                            <div className="col-8">
                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn3" >
                                                    Lump sum
                                                </label>
                                            </div>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="row col-4 align-items-center">
                                            <div className="col-2">
                                                <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AI_PremiumType'] == 0 ? true : false } name="AI_PremiumType" onChange={ (e) => { onChange(e) } } type="radio" value="0" />
                                            </div>
                                            <div className="col-8">
                                                <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn3" >
                                                    Recurring
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    Sica ? null :
                                        <>
                                            <div className="col-11" id="provided_identity_3" >
                                                {
                                                    Sica1Visibility ?
                                                        <>
                                                            <div id="provided_identity_instructions" className="hidden_class">
                                                                <p>If no, motivate</p>
                                                            </div>
                                                        </> :
                                                        null
                                                }
                                                <textarea maxLength={ 500 } onFocus={ sica1_onFocus } onBlur={ sica1_onBlur } className="form-control" placeholder="Notes" aria-describedby="" ></textarea>

                                            </div>
                                            <hr />
                                        </>
                                }
                                {
                                    backgroundInfoVisibility15 ?
                                        <>
                                            <div id="background_info_instructions15" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>Notes<br />

                                                    </li>

                                                </ul>

                                            </div>
                                        </>
                                        :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_PremiumTypeDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_PremiumTypeDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus15() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur15() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Notes` }
                                    />
                                </div>
                                <br />
                                <br />
                            </div>
                            <br />
                            <br />
                            <hr />
                            <div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='roa-label'>Investment Strategy</p>
                                    </div>
                                    <div className='col-6'>
                                        <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-font form-select roa-label" id="AI_Strategy" name='AI_Strategy' value={ FormData['AI_Strategy'] } onChange={ (e) => { onChange(e) } } aria-label="Default select example">
                                            <option value="0" selected>Select</option>
                                            <option value="1">Capital Growth</option>
                                            <option value="2">Capital Preservtion</option>
                                            <option value="3">Income</option>
                                            <option value="4">Specified Goal Investment</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                {
                                    backgroundInfoVisibility16 ?
                                        <>
                                            <div id="background_info_instructions16" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>Notes on discussion with client concerning the investment strategy.<br />

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_StrategyDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_StrategyDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus16() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur16() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Notes on discussion with client concerning the investment strategy` }
                                    />
                                </div>
                                <br />
                                <br />
                            </div>
                            <br />
                            <br />
                            <hr />
                            <div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='roa-label'>Return Required</p>
                                    </div>
                                    <div className='col-6'>
                                        <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-font form-select roa-label" id="AI_ReturnRequired" name='AI_ReturnRequired' value={ FormData['AI_ReturnRequired'] } onChange={ (e) => { onChange(e) } } aria-label="Default select example">
                                            <option value="0" selected>Select</option>
                                            <option value="1">Guaranteed Return</option>
                                            <option value="2">Marketed Linked Return</option>
                                            <option value="3">Targeted Return</option>
                                            <option value="4">Benchmark</option>
                                        </select>
                                    </div>
                                </div>
                                {
                                    backgroundInfoVisibility17 ?
                                        <>
                                            <div id="background_info_instructions17" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>Notes on discussion with client concerning return expectations.<br />

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_ReturnRequiredDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_ReturnRequiredDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus17() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur17() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Notes on discussion with client concerning return expectations` }
                                    />
                                </div>
                                <br />
                                <br />
                            </div>
                            <br />
                            <br />
                            <hr />
                            <div>
                                <div className='row'>
                                    <div className='col-6 roa-label'>
                                        <p>Risk Profile</p>
                                    </div>
                                    <div className='col-6 roa-label'>
                                        <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-font form-select" id="AI_RiskProfile" name='AI_RiskProfile' value={ FormData['AI_RiskProfile'] } onChange={ (e) => { onChange(e) } } aria-label="Default select example">
                                            <option value="0" selected>Select</option>
                                            <option value="1">Ultra Conservative</option>
                                            <option value="2">Conservative</option>
                                            <option value="3">Cautious</option>
                                            <option value="4">Moderate</option>
                                        </select>
                                    </div>
                                </div>
                                {
                                    backgroundInfoVisibility18 ?
                                        <>
                                            <div id="background_info_instructions18" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>Notes on the client risk profile..<br />

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_RiskProfileDetails }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_RiskProfileDetails']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus18() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur18() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Notes on the client risk profile` }
                                    />
                                </div>
                                <br />
                                <br />
                            </div>
                            <br />
                            <br />
                            <hr />
                            <div>
                                <p className='roa-label'>Funding of future expenses and/or deferred gratuities</p>
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
                                <p className='roa-label'>Payment of trade restraint agreements</p>
                                <div className='row my-2'>
                                    <div className='col'>
                                        <b className='roa-font'>Payment of trade restraint agreements</b>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_TRP_TotalNeed' value={ FormData?.AI_TRP_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_TRP_ExistingProvisions' value={ FormData?.AI_TRP_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_TRP_ExistingShortfallSurplus' value={ FormData?.AI_TRP_TotalNeed - FormData?.AI_TRP_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_TRP_ExistingInvestments' value={ FormData?.AI_TRP_ExistingInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row my-2'>
                                    <div className='col'>
                                        <b className='roa-font'>Replacement of assets</b>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_RA_TotalNeed' value={ FormData?.AI_RA_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_RA_ExistingProvisions' value={ FormData?.AI_RA_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_RA_ExistingShortfallSurplus' value={ FormData?.AI_RA_TotalNeed - FormData?.AI_RA_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group roa-font">
                                            <span className="input-group-text">R</span>
                                            <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_RA_ExistingInvestments' value={ FormData?.AI_RA_ExistingInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row my-2'>
                                <div className='col'>
                                    <b className='roa-font'>Compulsory refurbishing of franchises</b>
                                </div>
                                <div className='col'>
                                    <div className="input-group roa-font">
                                        <span className="input-group-text">R</span>
                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_CR_TotalNeed' value={ FormData?.AI_CR_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="input-group roa-font">
                                        <span className="input-group-text">R</span>
                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_CR_ExistingProvisions' value={ FormData?.AI_CR_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="input-group roa-font">
                                        <span className="input-group-text">R</span>
                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_CR_ExistingShortfallSurplus' value={ FormData?.AI_CR_TotalNeed - FormData?.AI_CR_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="input-group roa-font">
                                        <span className="input-group-text">R</span>
                                        <input type="number" onBlur={ (e) => { onFieldBlur(e) } } onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_CR_ExistingInvestments' value={ FormData?.RP_DiC_LumpSumInvestments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                    </div>
                                </div>
                            </div>
                            {
                                AI_Others_Data.length === 0 ?
                                    <div className="col-6">
                                        <button className={
                                            user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                    : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                        : "btn btn-primary sfp "
                                        } type='button' onClick={ (e) => { AddNewAI_Others_Data(e) } }><FontAwesomeIcon icon={ faPlus } width={ '15px' } /> Add Other</button>
                                    </div>
                                    : <></>
                            }
                            <p className='roa-font'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                            {
                                AI_Others_Data.length > 0 ?
                                    AI_Others_Data.map((key, i) => {
                                        return (
                                            <>
                                                <div className='row'>
                                                    <div className='col'>
                                                        {
                                                            AI_Others_Data.length === i + 1 ?
                                                                <button className={
                                                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                        : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                            : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                : "btn btn-primary sfp "
                                                                } type='button' onClick={ (e) => { AddNewAI_Others_Data(e) } }><FontAwesomeIcon icon={ faPlus } width={ '15px' } /> Add Other</button>
                                                                : <></>
                                                        }
                                                    </div>
                                                    <div className='col'>
                                                        <button className={
                                                            user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                    : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                        : "btn btn-danger sfp "
                                                        } type='button' onClick={ (e) => { RemoveNewAI_Others_Data(e) } }><FontAwesomeIcon icon={ faMinus } width={ '15px' } /> Remove Other Cover</button>

                                                    </div>
                                                </div>

                                                <div className='row my-2'>
                                                    <div className='col'>
                                                        <div className="input-group roa-font">
                                                            <input type="text" className="form-control" name='AI_Other' value={ FormData?.AI_Other } onChange={ (e) => { onChange(e) } } />
                                                        </div>
                                                    </div>
                                                    <div className='col'>
                                                        <div className="input-group roa-font">
                                                            <span className="input-group-text">R</span>
                                                            <input disabled={ key['AI_Other'] === "" } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_Other_TotalNeed' value={ key?.AI_Other_TotalNeed } onChange={ (e) => { on_AI_Others_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                        </div>
                                                    </div>
                                                    <div className='col'>
                                                        <div className="input-group roa-font">
                                                            <span className="input-group-text">R</span>
                                                            <input disabled={ key['AI_Other'] === "" } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_Other_ExistingProvisions' value={ key?.AI_Other_ExistingProvisions } onChange={ (e) => { on_AI_Others_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                        </div>
                                                    </div>
                                                    <div className='col'>
                                                        <div className="input-group roa-font">
                                                            <span className="input-group-text">R</span>
                                                            <input disabled={ key['AI_Other'] === "" } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_Other_ExistingShortfallSurplus' value={ key?.AI_Other_TotalNeed - key?.AI_Other_ExistingProvisions } onChange={ (e) => { on_AI_Others_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                        </div>
                                                    </div>
                                                    <div className='col'>
                                                        <div className="input-group roa-font">
                                                            <span className="input-group-text">R</span>
                                                            <input disabled={ key['AI_Other'] === "" } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AI_Other_ExistingInvestments' value={ key?.AI_Other_ExistingInvestments } onChange={ (e) => { on_AI_Others_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                    : null
                            }
                            <hr />
                            {/* SECTION C: */ }
                            <div>

                                <p><b>Section C</b></p>
                                <p className='roa-font'><b>Financial Solutions</b></p>
                                <p className='roa-label'>Summary of recommendations to address the business’s needs identified</p>
                                {
                                    backgroundInfoVisibility19 ?
                                        <>
                                            <div id="background_info_instructions19" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>Discuss the outcome of the FNA:<br />
                                                        Quantification of need explaining the reasons why this type of investment vehicle was recommended<br />
                                                        How it will meet the business need
                                                        <br />

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_FinancialSolutions }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_FinancialSolutions']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus19() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur19() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }

                                        placeholder={ `Discuss the outcome of the FNA: Quantification of need explaining the reasons why this type of investment vehicle was recommended  How it will meet the business need` }
                                    />
                                </div>
                                <br />
                                <br />
                            </div>
                            <br />
                            <br />
                            <hr />
                            {/* Section D */ }
                            <div>
                                <p><b>Section D</b></p>
                                <p className='roa-font'><b>Alternative Solutions Considered</b></p>
                                <p className='roa-label'>The following solutions were presented to you for consideration but were not selected for the following reasons:</p>
                                {
                                    backgroundInfoVisibility20 ?
                                        <>
                                            <div id="background_info_instructions20" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>1. Identify the type of product or product provider which was considered but not selected and motivate.


                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_AltS_1 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_AltS_1']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus20() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur20() } }
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
                                    backgroundInfoVisibility21 ?
                                        <>
                                            <div id="background_info_instructions21" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>2. Identify the type of product or product provider which was considered but not selected and motivate.


                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_AltS_2 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_AltS_2']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus21() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur21() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }

                                        placeholder={ `2. Identify the type of product or product provider which was considered but not selected and motivate.` }
                                    />
                                </div>
                                <br />
                                <br />
                                <hr />
                                {
                                    backgroundInfoVisibility22 ?
                                        <>
                                            <div id="background_info_instructions22" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul className='roa-label'>
                                                    <li>3. Identify the type of product or product provider which was considered but not selected and motivate.


                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AI_AltS_3 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AI_AltS_3']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus21() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur21() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }

                                        placeholder={ `3. Identify the type of product or product provider which was considered but not selected and motivate.` }
                                    />
                                </div>
                                <br />
                                <br />
                            </div>
                            <br />
                            <br />
                            <hr />
                            {/* Section E */ }
                            <div>
                                <p><b>Section E</b></p>
                                <p className='roa-font'><b>Product Taken (Each additional need must be accompanied by its own product annexure.)</b></p>
                                <p className='roa-label'>Products accepted by you to meet the business’s requirements</p>
                                <hr />
                                {
                                    ProductTaken.length === 0 ?
                                        <>
                                            <div className="col-6">
                                                <button className={
                                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                        : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                            : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                : "btn btn-primary sfp "
                                                } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon icon={ faPlus } width={ '15px' } /> Add New Product</button>
                                            </div>
                                        </>
                                        : <></>
                                }
                                {
                                    ProductTaken.length > 0 ?
                                        ProductTaken.map((key, i) => {
                                            // console.log(i+1)
                                            return (
                                                <>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                            : "btn btn-primary sfp "
                                                            } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon icon={ faPlus } width={ '15px' } /> Add New Product</button>
                                                        </div>
                                                        <div className="col-6">
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                            : "btn btn-danger sfp "
                                                            } type='button' onClick={ (e) => { RemoveNewProductTaken(e) } }><FontAwesomeIcon icon={ faMinus } width={ '15px' } /> Remove Product</button>
                                                        </div>
                                                    </div>
                                                    <div style={ { fontFamily: 'Arial Narrow', fontSize: '9' } }>
                                                        <div className="row">

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label className="col-form-label roa-label"><b>Product Taken</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-font form-select roa-label" name='Pr_Taken' value={ key.Pr_Taken } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-label="Default select example">
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
                                                                </div>
                                                            </div>
                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                            </div>
                                                            <hr />
                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label className="col-form-label roa-font"><b>Product Provider</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_Provider" name='Pr_Provider' value={ key.Pr_Provider } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label htmlFor="id_number" className="col-form-label roa-font"><b>Policy number</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_PolicyNumber" name='Pr_PolicyNumber' value={ key.Pr_PolicyNumber } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label className="col-form-label roa-font"><b>Product Name</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_Name" name='Pr_Name' value={ key.Pr_Name } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label htmlFor="id_number" className="col-form-label roa-font"><b>Premium</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className='row'>
                                                                            <div className='col-6'>
                                                                                <div className="form-group">
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="Pr_Premium" name='Pr_Premium' value={ key.Pr_Premium } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-6'>
                                                                                <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-font form-select" id="Pr_PremiumFrequency" name='Pr_PremiumFrequency' value={ key.Pr_PremiumFrequency } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-label="Default select example">
                                                                                    <option value="0" selected>Frequeny</option>
                                                                                    <option value="1">Monthly</option>
                                                                                    <option value="2">Quarterly</option>
                                                                                    <option value="3">Annually</option>
                                                                                    <option value="4">Once Off</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label className="col-form-label roa-font"><b>Escalation</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" spellCheck="true" id="Pr_Escalation" name='Pr_Escalation' value={ key.Pr_Escalation } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label htmlFor="id_number" className="col-form-label roa-font"><b>Effective annual cost (EAC)</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_EAC" name='Pr_EAC' value={ key.Pr_EAC } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label className="col-form-label roa-font"><b>Contracting party</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_ContractingParty" name='Pr_ContractingParty' value={ key.Pr_ContractingParty } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label htmlFor="id_number" className="col-form-label roa-font"><b>Life / Lives covered</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type='text' spellCheck="true" id="Pr_LivesAssured" name='Pr_LivesAssured' value={ key.Pr_LivesAssured } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label className="col-form-label roa-font"><b>Premium Payer</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_PremiumPayer" name='Pr_PremiumPayer' value={ key.Pr_PremiumPayer } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label htmlFor="id_number" className="col-form-label roa-font"><b>Beneficiary/cessionary</b></label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_Beneficiary" name='Pr_Beneficiary' value={ key.Pr_Beneficiary } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label className="col-form-label roa-font"><b>Initial commission</b></label>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_IniC" name='Pr_IniC' value={ key.Pr_IniC } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="R 0.00" aria-describedby="" />
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_IniC_Percentage" name='Pr_IniC_Percentage' value={ key.Pr_IniC_Percentage } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="            00 %" aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                <div className="row g-3 align-items-center">
                                                                    <div className="col-4">
                                                                        <label htmlFor="id_number" className="col-form-label roa-font"><b>Ongoing commission</b></label>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_OnC" name='Pr_OnC' value={ key.Pr_OnC } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="R 0.00" aria-describedby="" />
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="Pr_OnC_Percentage" name='Pr_OnC_Percentage' value={ key.Pr_OnC_Percentage } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="            00 %" aria-describedby="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />

                                                        </div>
                                                    </div>

                                                    <br />
                                                    <div className={
                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "h6 fw-bold roa-font sfp-text"
                                                            : user?.email.includes('fs4p') ? "h6 fw-bold roa-font fs4p-text"
                                                                : user?.email.includes('sanlam') ? "h6 fw-bold roa-font sanlam-text"
                                                                    : "h6 fw-bold roa-font"
                                                    }>Investment Portfolio</div>

                                                    {
                                                        backgroundInfoVisibility23 ?
                                                            <>
                                                                <div id="background_info_instructions23" className="hidden_class">
                                                                    {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                    <ul className='roa-label'>
                                                                        <li>
                                                                            When a wrap fund or a selection of wrap funds is used, motivate and explain.
                                                                        </li>
                                                                        <li>
                                                                            Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided:
                                                                        </li>
                                                                        <li>
                                                                            illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,
                                                                        </li>
                                                                        <li>
                                                                            motivating the constructed portfolio with reference to the following aspects:
                                                                        </li>
                                                                        <ul className='roa-label'>
                                                                            <li>
                                                                                correlation;
                                                                            </li>
                                                                            <li>
                                                                                drawdown;
                                                                            </li>
                                                                            <li>
                                                                                portfolio return;
                                                                            </li>
                                                                            <li>
                                                                                meeting the investment objectives of the clients
                                                                            </li>
                                                                        </ul>




                                                                    </ul>

                                                                </div>
                                                            </> :
                                                            null
                                                    }
                                                    <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                        <ReactQuill
                                                            theme="snow" // Specify the theme ('snow' or 'bubble')
                                                            value={ key?.Portfolio }
                                                            onChange={ (value) => { on_ProductTaken_Value_Change("Portfolio", i, value) } }
                                                            onFocus={ (e) => { backgroundInfo_onFocus23() } }
                                                            onBlur={ (e) => { backgroundInfo_onBlur23() } }
                                                            modules={ modules }
                                                            formats={ formats }
                                                            style={ {
                                                                height: '300px', // Set the desired height here
                                                            } }

                                                            placeholder={ `When a wrap fund or a selection of wrap funds is used, motivate and explain. \n Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided: \n illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,\n motivating the constructed portfolio with reference to the following aspects:\n o	correlation;\n o	drawdown;\n o	portfolio return;\n o	meeting the investment objectives of the clients` }
                                                        />
                                                    </div>
                                                    <br />
                                                    <br />


                                                    <table className="table">
                                                        <thead>
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                                            <td scope="col" align="center"><p className='roa-font'><b>Fund Fact Sheets to client:</b></p></td>

                                                        </thead>


                                                    </table>
                                                    <div className="container mt-3">
                                                        <table className="table">

                                                            <tbody>
                                                                <tr>
                                                                    <td className="roa-font" align="start"><b>Funds</b></td>



                                                                    <td className="roa-font" align="center"><b>%</b></td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <div><b className='roa-font'>Provided</b></div>
                                                                    </td>
                                                                    <td>
                                                                        <div><b className='roa-font'>Discussed</b></div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_1" name='PF_1' value={ key.PF_1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_Percentage1" name='PF_Percentage1' value={ key.PF_Percentage1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Provided1 } name="PF_Provided1" onChange={ (e) => { key.PF_Provided1 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Discussed1 } name="PF_Discussed1" onChange={ (e) => { key.PF_Discussed1 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_2" name='PF_2' value={ key.PF_2 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_Percentage2" name='PF_Percentage2' value={ key.PF_Percentage2 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Provided2 } name="PF_Provided2" onChange={ (e) => { key.PF_Provided2 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Discussed2 } name="PF_Discussed2" onChange={ (e) => { key.PF_Discussed2 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_3" name='PF_3' value={ key.PF_3 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_Percentage3" name='PF_Percentage3' value={ key.PF_Percentage3 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Provided3 } name="PF_Provided3" onChange={ (e) => { key.PF_Provided3 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Discussed3 } name="PF_Discussed3" onChange={ (e) => { key.PF_Discussed3 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_4" name='PF_4' value={ key.PF_4 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_Percentage4" name='PF_Percentage4' value={ key.PF_Percentage4 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Provided4 } name="PF_Provided4" onChange={ (e) => { key.PF_Provided4 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Discussed4 } name="PF_Discussed4" onChange={ (e) => { key.PF_Discussed4 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td >
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_5" name='PF_5' value={ key.PF_5 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_Percentage5" name='PF_Percentage5' value={ key.PF_Percentage5 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Provided5 } name="PF_Provided5" onChange={ (e) => { key.PF_Provided5 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Discussed5 } name="PF_Discussed5" onChange={ (e) => { key.PF_Discussed5 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>
                                                                </tr>


                                                                <tr>
                                                                    <td >
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_6" name='PF_6' value={ key.PF_6 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_Percentage6" name='PF_Percentage6' value={ key.PF_Percentage6 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Provided6 } name="PF_Provided6" onChange={ (e) => { key.PF_Provided6 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Discussed6 } name="PF_Discussed6" onChange={ (e) => { key.PF_Discussed6 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>
                                                                </tr>


                                                                <tr>
                                                                    <td >
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_7" name='PF_7' value={ key.PF_7 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>
                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */ }


                                                                    <td align="center">
                                                                        <div className="form-group">
                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control roa-label" id="PF_Percentage7" name='PF_Percentage7' value={ key.PF_Percentage7 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" style={ { width: '120px' } } />
                                                                        </div>
                                                                    </td>

                                                                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */ }
                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Provided7 } name="PF_Provided7" onChange={ (e) => { key.PF_Provided7 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>

                                                                    <td>
                                                                        <input type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ key.PF_Discussed7 } name="PF_Discussed7" onChange={ (e) => { key.PF_Discussed7 === true ? on_ProductTaken_CheckBox_Change(e, i, false) : on_ProductTaken_CheckBox_Change(e, i, true) } } />
                                                                        <label className='roa-font'> Yes</label>
                                                                    </td>
                                                                </tr>





                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <br />
                                                    <div className={
                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "h6 fw-bold roa-font sfp-text"
                                                            : user?.email.includes('fs4p') ? "h6 fw-bold roa-font fs4p-text"
                                                                : user?.email.includes('sanlam') ? "h6 fw-bold roa-font sanlam-text"
                                                                    : "h6 fw-bold roa-font"
                                                    }>Source of Funds</div>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <p className='roa-font'>Identify the source of funds being invested</p>
                                                        </div>
                                                        <div className='col-6'>
                                                            <div className='col-6'>
                                                                <select onBlur={ (e) => { onFieldBlur(e) } } className="roa-font form-select" name='SourceOfFunds' value={ key.SourceOfFunds } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-label="Default select example">
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
                                                        backgroundInfoVisibility10_1 ?
                                                            <>
                                                                <div id="background_info_instructions10" className="hidden_class">
                                                                    {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                    <ul className='roa-label'>
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
                                                            value={ key?.SourceOfFundsDetail }
                                                            onChange={ (value) => { on_ProductTaken_Value_Change("SourceOfFundsDetail", i, value) } }
                                                            onFocus={ (e) => { backgroundInfo_onFocus10_1() } }
                                                            onBlur={ (e) => { backgroundInfo_onBlur10_1() } }
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
                                                    <p className="roa-font">The following are reasons why the abovementioned product best suits the business’s needs and objectives:</p>
                                                    {
                                                        backgroundInfoVisibility24 ?
                                                            <>
                                                                <div id="background_info_instructions24" className="hidden_class">
                                                                    {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                                    <ul className='roa-label'>
                                                                        <li>
                                                                            Motivate why the chosen product was recommended to best suit your client{ `'` }s needs


                                                                        </li>

                                                                    </ul>

                                                                </div>
                                                            </> :
                                                            null
                                                    }
                                                    <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                        <ReactQuill
                                                            theme="snow" // Specify the theme ('snow' or 'bubble')
                                                            value={ key?.PF_Reasons }
                                                            onChange={ (value) => { on_ProductTaken_Value_Change("PF_Reasons", i, value) } }
                                                            onFocus={ (e) => { backgroundInfo_onFocus24() } }
                                                            onBlur={ (e) => { backgroundInfo_onBlur24() } }
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
                                                    <br />
                                                    <p className="roa-font">The details of the material aspects of the selected product that were discussed with you are outlined below:</p>
                                                    {

                                                        parseInt(key.Pr_Taken) === 1 ? <>
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
                                                                <ul className='roa-label'>
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


                                                        </> : parseInt(key.Pr_Taken) === 2 ?
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
                                                            : parseInt(key.Pr_Taken) === 3 ?
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

                                                                </> : parseInt(key.Pr_Taken) === 4 ?
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
                                                                    </> : parseInt(key.Pr_Taken) === 5 ?
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
                                                                        </> : parseInt(key.Pr_Taken) === 6 ? <>

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
                                                                                            <div id="background_info_instructions8" className="hidden_class">
                                                                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                                                                <ul className='roa-label'>
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
                                                                                        value={ key?.PF_MaterialAspects }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("PF_MaterialAspects", i, value) } }
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
                                                                                            <div id="background_info_instructions9" className="hidden_class">
                                                                                                {/* <p className="roa-font">Discuss the outcome of the FNA</p><br /> */ }
                                                                                                <ul className='roa-label'>
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
                                                                                        value={ key?.PF_Pr_Details }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("PF_Pr_Details", i, value) } }
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
                                                                                                <ul className='roa-label'>
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
                                                                                        value={ key?.PF_ExecutorFee }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("PF_ExecutorFee", i, value) } }
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
                                                                                                <ul className='roa-label'>
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
                                                                                        value={ key?.PF_NominationOfBeneficiaries }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("PF_NominationOfBeneficiaries", i, value) } }
                                                                                        onFocus={ (e) => { backgroundInfo_onFocus11() } }
                                                                                        onBlur={ (e) => { backgroundInfo_onBlur11() } }
                                                                                        modules={ modules }
                                                                                        formats={ formats }
                                                                                        style={ {
                                                                                            height: '300px', // Set the desired height here
                                                                                        } }

                                                                                        placeholder={ `Record discussion with regard to nomination of beneficiaries or cessionaries\n` }
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
                                                                                                <ul className='roa-label'>
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
                                                                                        value={ key?.PF_InformationExplained }
                                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("PF_InformationExplained", i, value) } }
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
                                                        parseInt(key.Pr_Taken) != 7 ?
                                                            <>
                                                                <strong className='roa-font'>Additional Comments</strong>

                                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                    <ReactQuill
                                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                        value={ key?.PF_AdditionComments }
                                                                        onChange={ (value) => { on_ProductTaken_Value_Change("PF_AdditionComments", i, value) } }
                                                                        // onBlur={(e)=>{onFieldBlur(e)}}
                                                                        modules={ modules }
                                                                        formats={ formats }
                                                                        style={ {
                                                                            height: '300px', // Set the desired height here
                                                                        } }

                                                                        placeholder={ `Additional Comments` }
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
                                        })
                                        : <></>
                                }
                            </div>
                        </form>
                    </div>

                </EditROALayout >
            </Layout >
        </div >
    )
}

export default BAInvestment