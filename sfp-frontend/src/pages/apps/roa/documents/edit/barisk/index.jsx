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
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BARisk = () => {

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



    const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })
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

        AR_BusinessTradeName: "",
        AR_BusinessRegisteredName: "",
        AR_BusinessAuthorisedPersons: "",
        AR_BusinessFinancialAdvisor: "",
        AR_BusinessAddress: "",
        AR_BusinessEmail: "",
        AR_BusinessPhoneNumber: "",
        AR_BusinessDate: "",

        AR_ComDisc_AuthorizedPerson: 2,
        AR_ComDisc_AuthorizedPersonDetail: "",
        AR_ComDisc_Authority: 2,
        AR_ComDisc_AuthorityDetail: "",

        AR_FICA: 2,
        AR_FICADetail: "",

        AR_RepPrs_Taken: 2,
        AR_RepPrs_TakenDetail: "",
        AR_RepPrs_Explained: 2,
        AR_RepPrs_ExplainedDetail: "",
        AR_RepPrs_Cancelled: 2,
        AR_RepPrs_CancelledDetail: "",

        AR_SourceOfFunds: 2,
        AR_SourceOfFundsDetail: "",

        AR_ReplacementBackInfo: "",

        AR_BusA_BnS: false,
        AR_BusA_KeyP_Insurance: false,
        AR_BusA_ContingentLiability: false,
        AR_BusA_BusOvProt: false,
        AR_BusA_CLARedm: false,
        AR_BusA_DebitLoanRedemption: false,
        AR_BusA_FundingOfFutureExpenses: false,
        AR_BusA_FundingOfDeferredGratuities: false,
        AR_BusA_Details: "",

        AR_BnS_DeathTotalNeed: "",
        AR_BnS_DeathProvisions: "",
        AR_BnS_DeathShortfallSurplus: "",
        AR_BnS_DeathAssuranceInvestments: "",

        AR_BnS_DiC_TotalNeed: "",
        AR_BnS_DiC_ExistingProvisions: "",
        AR_BnS_DiC_ExistingShortfallSurplus: "",
        AR_BnS_DiC_Investments: "",

        AR_BnS_Other: "",
        AR_BnS_OtherTotalNeed: "",
        AR_BnS_OtherExistingProvisions: "",
        AR_BnS_OtherExistingShortfallSurplus: "",
        AR_BnS_OtherInvestments: "",

        AR_BnS_Comments: "",

        AR_KeyP_DC_TotalNeed: "",
        AR_KeyP_DC_ExistingProvisions: "",
        AR_KeyP_DC_ExistingShortfallSurplus: "",
        AR_KeyP_DC_Investments: "",

        AR_KeyP_DiC_TotalNeed: "",
        AR_KeyP_DiC_ExistingProvisions: "",
        AR_KeyP_DiC_ExistingShortfallSurplus: "",
        AR_KeyP_DiC_Investments: "",

        AR_KeyP_TI_CoverTotalNeed: "",
        AR_KeyP_TI_CoverExistingProvisions: "",
        AR_KeyP_TI_CoverExistingShortfallSurplus: "",
        AR_KeyP_TI_CoverInvestments: "",

        AR_KeyP_PI_CoverTotalNeed: "",
        AR_KeyP_PI_CoverExistingProvisions: "",
        AR_KeyP_PI_CoverExistingShortfallSurplus: "",
        AR_KeyP_PI_CoverInvestments: "",

        AR_KeyP_Other: "",
        AR_KeyP_OtherTotalNeed: "",
        AR_KeyP_OtherExistingProvisions: "",
        AR_KeyP_OtherExistingShortfallSurplus: "",
        AR_KeyP_OtherInvestments: "",

        AR_KeyP_Comments: "",

        AR_SureNLia_DeathTotalNeed: "",
        AR_SureNLia_DeathProvisions: "",
        AR_SureNLia_DeathShortfallSurplus: "",
        AR_SureNLia_DeathAssuranceInvestments: "",

        AR_SureNLia_DiC_TotalNeed: "",
        AR_SureNLia_DiC_Provisions: "",
        AR_SureNLia_DiC_ShortfallSurplus: "",
        AR_SureNLia_DiC_Investments: "",

        AR_SureNLia_Other: "",
        AR_SureNLia_OtherTotalNeed: "",
        AR_SureNLia_OtherProvisions: "",
        AR_SureNLia_OtherShortfallSurplus: "",
        AR_SureNLia_OtherInvestments: "",

        AR_SureNLia_Comments: "",

        AR_BusOvProt_TI_CoverTotalNeed: "",
        AR_BusOvProt_TI_CoverExistingProvisions: "",
        AR_BusOvProt_TI_CoverExistingShortfallSurplus: "",
        AR_BusOvProt_TI_CoverInvestments: "",

        AR_BusOvProt_PI_CoverTotalNeed: "",
        AR_BusOvProt_PI_CoverExistingProvisions: "",
        AR_BusOvProt_PI_CoverExistingShortfallSurplus: "",
        AR_BusOvProt_PI_CoverInvestments: "",

        AR_BusOvProt_Other: "",
        AR_BusOvProt_OtherTotalNeed: "",
        AR_BusOvProt_OtherExistingProvisions: "",
        AR_BusOvProt_OtherExistingShortfallSurplus: "",
        AR_BusOvProt_OtherInvestments: "",

        AR_BusOvProt_Comments: "",

        AR_CLARedm_DC_TotalNeed: "",
        AR_CLARedm_DC_ExistingProvisions: "",
        AR_CLARedm_DC_ExistingShortfallSurplus: "",
        AR_CLARedm_DC_Investments: "",

        AR_CLARedm_DiC_TotalNeed: "",
        AR_CLARedm_DiC_ExistingProvisions: "",
        AR_CLARedm_DiC_ExistingShortfallSurplus: "",
        AR_CLARedm_DiC_Investments: "",

        AR_CLARedm_Other: "",
        AR_CLARedm_OtherTotalNeed: "",
        AR_CLARedm_OtherExistingProvisions: "",
        AR_CLARedm_OtherExistingShortfallSurplus: "",
        AR_CLARedm_OtherInvestments: "",

        // AR_CLARedm_Comments : "",  

        AR_DLARedm_DC_TotalNeed: "",
        AR_DLARedm_DC_ExistingProvisions: "",
        AR_DLARedm_DC_ExistingShortfallSurplus: "",
        AR_DLARedm_DC_Investments: "",

        AR_DLARedm_DiC_TotalNeed: "",
        AR_DLARedm_DiC_ExistingProvisions: "",
        AR_DLARedm_DiC_ExistingShortfallSurplus: "",
        AR_DLARedm_DiC_Investments: "",

        AR_DLARedm_Other: "",
        AR_DLARedm_OtherTotalNeed: "",
        AR_DLARedm_OtherExistingProvisions: "",
        AR_DLARedm_OtherExistingShortfallSurplus: "",
        AR_DLARedm_OtherInvestments: "",

        // AR_DLARedm_Comments : "",  

        AR_LifeCoverFinancialSolutions: "",
        AR_DiC_FinancialSolutions: "",

        AR_AltS_1: "",
        AR_AltS_2: "",
        AR_AltS_3: ""
    })
    const [ProductTaken, setProductTaken] = useState([])
    const AddNewProductTaken = (e) => {
        const current = [...ProductTaken]
        current.push({
            advisorId: user?.id,
            formId: formId,

            ProductTaken: "",
            ProductProvider: "",
            PolicyNumber: "",
            ProductName: "",
            ProductPremium: "",
            ProductPremiumFrequency: 0,
            ProductPattern: "",
            ProductEscalation: "",
            ProductContractingParty: "",
            ProductLivesAssured: "",
            ProductPremiumPayer: "",
            Product1stYearCommission: "",
            Product2ndYearCommission: "",
            ProductOngoingFees: "",
            ProductOngoingFeesFrequency: "",

            BenDesc_1: "",
            BenDesc_CoverAmount1: "",
            BenDesc_2: "",
            BenDesc_CoverAmount2: "",
            BenDesc_3: "",
            BenDesc_CoverAmount3: "",

            ProductReasons: "",
            ProductMaterialAspects: "",
            ProductDetails: "",
            ProductBriefSummary: "",
            Cessionaries: "",
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

    const on_ProductTaken_Value_Change = (name, i, val) => {
        let newProductTaken = [...ProductTaken]
        newProductTaken[i]["" + name + ""] = val
        setProductTaken(newProductTaken)
    }


    // Add New BnS Other
    const [AR_BnS_Data, setAR_BnS_Data] = useState([])
    const AddNewAR_BnS_Data = (e) => {
        const current = [...AR_BnS_Data]
        current.push({
            advisorId: user?.id,
            formId: formId,

            BnS_Other: "",
            BnS_OtherTotalNeed: "",
            BnS_OtherExistingProvisions: "",
            BnS_OtherExistingShortfallSurplus: "",
            BnS_OtherInvestments: "",

        })
        setAR_BnS_Data(current)
    }
    const RemoveNewAR_BnS_Data = (e) => {
        const current = [...AR_BnS_Data]
        current.pop()
        setAR_BnS_Data(current)
    }
    const on_AR_BnS_Data_Change = (e, i) => {
        let newAR_BnS_Data = [...AR_BnS_Data]
        newAR_BnS_Data[i][e.target.name] = e.target.value
        setAR_BnS_Data(newAR_BnS_Data)
    }
    // End New BnS Other

    // Add New KeyP Other
    const [AR_KeyP_Data, setAR_KeyP_Data] = useState([])
    const AddNewAR_KeyP_Data = (e) => {
        const current = [...AR_KeyP_Data]
        current.push({
            advisorId: user?.id,
            formId: formId,

            KeyP_Other: "",
            KeyP_OtherTotalNeed: "",
            KeyP_OtherExistingProvisions: "",
            KeyP_OtherExistingShortfallSurplus: "",
            KeyP_OtherInvestments: "",

        })
        setAR_KeyP_Data(current)
    }
    const RemoveNewAR_KeyP_Data = (e) => {
        const current = [...AR_KeyP_Data]
        current.pop()
        setAR_KeyP_Data(current)
    }
    const on_AR_KeyP_Data_Change = (e, i) => {
        let newAR_KeyP_Data = [...AR_KeyP_Data]
        newAR_KeyP_Data[i][e.target.name] = e.target.value
        setAR_KeyP_Data(newAR_KeyP_Data)
    }
    // End New KeyP Other

    // Add New SureNLia Other
    const [AR_SureNLia_Data, setAR_SureNLia_Data] = useState([])
    const AddNewAR_SureNLia_Data = (e) => {
        const current = [...AR_SureNLia_Data]
        current.push({
            advisorId: user?.id,
            formId: formId,

            SureNLia_Other: "",
            SureNLia_OtherTotalNeed: "",
            SureNLia_OtherExistingProvisions: "",
            SureNLia_OtherExistingShortfallSurplus: "",
            SureNLia_OtherInvestments: "",

        })
        setAR_SureNLia_Data(current)
    }
    const RemoveNewAR_SureNLia_Data = (e) => {
        const current = [...AR_SureNLia_Data]
        current.pop()
        setAR_SureNLia_Data(current)
    }
    const on_AR_SureNLia_Data_Change = (e, i) => {
        let newAR_SureNLia_Data = [...AR_SureNLia_Data]
        newAR_SureNLia_Data[i][e.target.name] = e.target.value
        setAR_SureNLia_Data(newAR_SureNLia_Data)
    }
    // End New SureNLia Other

    // Add New BisOvProt Other
    const [AR_BusOvProt_Data, setAR_BusOvProt_Data] = useState([])
    const AddNewAR_BusOvProt_Data = (e) => {
        const current = [...AR_BusOvProt_Data]
        current.push({
            advisorId: user?.id,
            formId: formId,

            BusOvProt_Other: "",
            BusOvProt_OtherTotalNeed: "",
            BusOvProt_OtherExistingProvisions: "",
            BusOvProt_OtherExistingShortfallSurplus: "",
            BusOvProt_OtherInvestments: "",

        })
        setAR_BusOvProt_Data(current)
    }
    const RemoveNewAR_BusOvProt_Data = (e) => {
        const current = [...AR_BusOvProt_Data]
        current.pop()
        setAR_BusOvProt_Data(current)
    }
    const on_AR_BusOvProt_Data_Change = (e, i) => {
        let newAR_BusOvProt_Data = [...AR_BusOvProt_Data]
        newAR_BusOvProt_Data[i][e.target.name] = e.target.value
        setAR_BusOvProt_Data(newAR_BusOvProt_Data)
    }
    // End New BisOvProt Other

    // Add New AR_CLARedm Other
    const [AR_CLARedm_Data, setAR_CLARedm_Data] = useState([])
    const AddNewAR_CLARedm_Data = (e) => {
        const current = [...AR_CLARedm_Data]
        current.push({
            advisorId: user?.id,
            formId: formId,

            CLARedm_Other: "",
            CLARedm_OtherTotalNeed: "",
            CLARedm_OtherExistingProvisions: "",
            CLARedm_OtherExistingShortfallSurplus: "",
            CLARedm_OtherInvestments: "",

        })
        setAR_CLARedm_Data(current)
    }
    const RemoveNewAR_CLARedm_Data = (e) => {
        const current = [...AR_CLARedm_Data]
        current.pop()
        setAR_CLARedm_Data(current)
    }
    const on_AR_CLARedm_Data_Change = (e, i) => {
        let newAR_CLARedm_Data = [...AR_CLARedm_Data]
        newAR_CLARedm_Data[i][e.target.name] = e.target.value
        setAR_CLARedm_Data(newAR_CLARedm_Data)
    }
    // End New AR_CLARedm Other

    // Add New AR_DLARedm Other
    const [AR_DLARedm_Data, setAR_DLARedm_Data] = useState([])
    const AddNewAR_DLARedm_Data = (e) => {
        const current = [...AR_DLARedm_Data]
        current.push({
            advisorId: user?.id,
            formId: formId,

            DLARedm_Other: "",
            DLARedm_OtherTotalNeed: "",
            DLARedm_OtherExistingProvisions: "",
            DLARedm_OtherExistingShortfallSurplus: "",
            DLARedm_OtherInvestments: "",

        })
        setAR_DLARedm_Data(current)
    }
    const RemoveNewAR_DLARedm_Data = (e) => {
        const current = [...AR_DLARedm_Data]
        current.pop()
        setAR_DLARedm_Data(current)
    }
    const on_AR_DLARedm_Data_Change = (e, i) => {
        let newAR_DLARedm_Data = [...AR_DLARedm_Data]
        newAR_DLARedm_Data[i][e.target.name] = e.target.value
        setAR_DLARedm_Data(newAR_DLARedm_Data)
    }
    // End New AR_DLARedm Other

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


    const onFieldBlur = (e) => {
        // updateRPForm()
    }

    const [letterOfIntroduction, setletterOfIntroduction] = useState(true)
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionReason, setletterOfIntroductionReason] = useState("")
    const [letterOfIntroductionAccess, setletterOfIntroductionAccess] = useState(true)
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [letterOfIntroductionAccessReason, setletterOfIntroductionAccessReason] = useState("")
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
    const [backgroundInfoVisibility16, setbackgroundInfoVisibility16] = useState(false)
    const [backgroundInfoVisibility17, setbackgroundInfoVisibility17] = useState(false)
    const [backgroundInfoVisibility18, setbackgroundInfoVisibility18] = useState(false)
    const [backgroundInfoVisibility19, setbackgroundInfoVisibility19] = useState(false)
    const [backgroundInfoVisibility20, setbackgroundInfoVisibility20] = useState(false)
    const [backgroundInfoVisibility21, setbackgroundInfoVisibility21] = useState(false)
    const [backgroundInfoVisibility22, setbackgroundInfoVisibility22] = useState(false)
    const [backgroundInfoVisibility23, setbackgroundInfoVisibility23] = useState(false)
    const [backgroundInfoVisibility24, setbackgroundInfoVisibility24] = useState(false)
    const [backgroundInfoVisibility25, setbackgroundInfoVisibility25] = useState(false)
    const [backgroundInfoVisibility26, setbackgroundInfoVisibility26] = useState(false)
    const [backgroundInfoVisibility27, setbackgroundInfoVisibility27] = useState(false)





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
                            <b>Business Assurance</b>
                        </div>
                        <br />
                        <form className='inital-card-header mx-5' onSubmit={ e => onSubmit(e) }>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Trade name of Business:</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="AR_BusinessTradeName" name='AR_BusinessTradeName' value={ FormData?.AR_BusinessTradeName } onChange={ (e) => { onChange(e) } } className="form-control roa-label" placeholder="Trade name of Business" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <div className='row py-2'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Registered name of Business:</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="AR_BusinessRegisteredName" name='AR_BusinessRegisteredName' value={ FormData?.AR_BusinessRegisteredName } onChange={ (e) => { onChange(e) } } className="form-control roa-label" placeholder="Registered name of business (If different from the trade name of the business)" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Authorised Person(s):</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="AR_BusinessAuthorisedPersons" name='AR_BusinessAuthorisedPersons' value={ FormData?.AR_BusinessAuthorisedPersons } onChange={ (e) => { onChange(e) } } className="form-control roa-label" placeholder="Person(s) who may act on behalf of this business" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <div className='row py-2'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Financial Advisor:</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input value={ `${user?.first_name} ${user?.last_name != 'nan' ? user?.last_name : ''} ` } disabled className="form-control roa-label" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Address:</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="AR_BusinessAddress" name='AR_BusinessAddress' value={ FormData?.AR_BusinessAddress } onChange={ (e) => { onChange(e) } } className="form-control roa-label" placeholder="Business address" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <div className='row py-2'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Email:</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" type="email" id="AR_BusinessEmail" name='AR_BusinessEmail' value={ FormData?.AR_BusinessEmail } onChange={ (e) => { onChange(e) } } className="form-control roa-label" placeholder="Email address" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Phone:</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="AR_BusinessPhoneNumber" name='AR_BusinessPhoneNumber' value={ FormData?.AR_BusinessPhoneNumber } onChange={ (e) => { onChange(e) } } className="form-control roa-label" placeholder="Contact numbers" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <div className='row py-2'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <label className="roa-font"><b>Date:</b></label>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12'>
                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="date" id="AR_BusinessDate" name='AR_BusinessDate' value={ FormData?.AR_BusinessDate } onChange={ (e) => { onChange(e) } } className="form-control roa-label" placeholder="Click or tap to enter date" aria-describedby="" style={ { width: '100%' } } />
                                </div>
                            </div>
                            <br />
                            <div className='col-12'>
                                <p className='roa-disclaimer'>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP)
                                    processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to
                                    SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on
                                    <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
                                </p>
                            </div>
                            <hr />
                            {/* Section A */ }
                            <p><b>Section A</b></p>
                            <div className='col-12'>
                                <ol>
                                    <li className='roa-font'>Compulsory Disclosures</li>
                                    <div className='row'>
                                        <div className="col-8">
                                            <label htmlFor="client_name" className="col-form-label roa-label" title="If no, motivate">Authorised person(s) was/were provided with a copy of the Letter of Introduction.</label>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="row col-4 align-items-center"></div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData?.AR_ComDisc_AuthorizedPerson == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="AR_ComDisc_AuthorizedPerson" name="AR_ComDisc_AuthorizedPerson" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" >
                                                            Yes
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData?.AR_ComDisc_AuthorizedPerson == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="AR_ComDisc_AuthorizedPerson" name="AR_ComDisc_AuthorizedPerson" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            letterOfIntroductionVisibility ?
                                                <>
                                                    <div className="hidden_class">
                                                        <p>If no, motivate</p>
                                                    </div>
                                                </> :
                                                null
                                        }
                                        <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                            <ReactQuill
                                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                                value={ FormData?.AR_ComDisc_AuthorizedPersonDetail }
                                                onChange={ (value) => { setFormData({ ...FormData, ['AR_ComDisc_AuthorizedPersonDetail']: value }) } }
                                                onFocus={ (e) => { letter_of_introduction_onFocus() } }
                                                onBlur={ (e) => { letter_of_introduction_onBlur() } }
                                                modules={ modules }
                                                formats={ formats }
                                                style={ {
                                                    height: '300px', // Set the desired height here
                                                } }
                                                placeholder={ `If no, motivate.` }
                                            />
                                        </div>

                                        <br />
                                        <br />
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-8">
                                                <label htmlFor="client_name" className="col-form-label roa-label" title="If no, motivate">Client has provided authority to access information.</label>
                                            </div>
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="row col-4 align-items-center"></div>
                                                    <div className="row col-4 align-items-center">
                                                        <div className="col-4">
                                                            <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_ComDisc_Authority'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="AR_ComDisc_Authority" name="AR_ComDisc_Authority" />
                                                        </div>
                                                        <div className="col-4">
                                                            <label className="form-check-label roa-font" >
                                                                Yes
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="row col-4 align-items-center">
                                                        <div className="col-4">
                                                            <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_ComDisc_Authority'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="AR_ComDisc_Authority" name="AR_ComDisc_Authority" />
                                                        </div>
                                                        <div className="col-4">
                                                            <label className="form-check-label roa-font" >
                                                                No
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-12" id="authority_access_2" >
                                                {
                                                    letterOfIntroductionAccessVisibility ?
                                                        <>
                                                            <div id="authority_access_instructions" className="hidden_class">
                                                                <p>If no, motivate</p>
                                                            </div>
                                                        </> :
                                                        null
                                                }
                                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                    <ReactQuill
                                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                                        value={ FormData?.AR_ComDisc_AuthorityDetail }
                                                        onChange={ (value) => { setFormData({ ...FormData, ['AR_ComDisc_AuthorityDetail']: value }) } }
                                                        onFocus={ (e) => { letter_of_introduction_access_onFocus() } }
                                                        onBlur={ (e) => { letter_of_introduction_access_onBlur() } }
                                                        modules={ modules }
                                                        formats={ formats }
                                                        style={ {
                                                            height: '300px', // Set the desired height here
                                                        } }
                                                        placeholder={ `If no, motivate.` }
                                                    />
                                                </div>

                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                    <li className='roa-font'>Financial Intelligence Centre Act (FICA)</li>

                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label htmlFor="client_name" className="col-form-label roa-label" title="If no, motivate">Client has provided the required FICA documents.</label>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="row col-4 align-items-center"></div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData?.AR_FICA == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="AR_FICA" name="AR_FICA" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                            Yes
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData?.AR_FICA == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="AR_FICA" name="AR_FICA" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn" >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12" id="provided_identity_2" >
                                            {
                                                FicaVisibility ?
                                                    <>
                                                        <div id="provided_identity_instructions" className="hidden_class">
                                                            <p>If no, motivate</p>
                                                        </div>
                                                    </> :
                                                    null
                                            }

                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.AR_FICADetail }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['AR_FICADetail']: value }) } }
                                                    onFocus={ (e) => { fica_onFocus() } }
                                                    onBlur={ (e) => { fica_onBlur() } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder={ `If no, motivate.` }
                                                />
                                            </div>

                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <hr />
                                    <li className='roa-font'>Replacement</li>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label htmlFor="client_name" className="col-form-label roa-label" title="If no, motivate">Does/Do the product(s) taken replace an existing product(s)?</label>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="row col-4 align-items-center"></div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_RepPrs_Taken'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="AR_RepPrs_Taken" name="AR_RepPrs_Taken" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn1" >
                                                            Yes
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_RepPrs_Taken'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="AR_RepPrs_Taken" name="AR_RepPrs_Taken" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn1" >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12" id="provided_identity_2" >
                                            {
                                                RicaVisibility ?
                                                    <>
                                                        <div id="provided_identity_instructions" className="hidden_class">
                                                            <p>If no, motivate</p>
                                                        </div>
                                                    </> :
                                                    null
                                            }
                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.AR_RepPrs_TakenDetail }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['AR_RepPrs_TakenDetail']: value }) } }
                                                    onFocus={ (e) => { rica_onFocus() } }
                                                    onBlur={ (e) => { rica_onBlur() } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder={ `If no, motivate.` }
                                                />
                                            </div>

                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label htmlFor="client_name" className="col-form-label roa-label" title="If no, motivate">If “Yes” (above), the Financial Adviser confirms that all disclosures on the Replacement Product Comparison document have been explained to the client.</label>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="row col-4 align-items-center"></div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_RepPrs_Explained'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value={ 1 } id="AR_RepPrs_Explained" name="AR_RepPrs_Explained" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn1" >
                                                            Yes
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_RepPrs_Explained'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value={ 0 } id="AR_RepPrs_Explained" name="AR_RepPrs_Explained" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn1" >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12" id="provided_identity_2" >
                                            {
                                                Rica1Visibility ?
                                                    <>
                                                        <div id="provided_identity_instructions" className="hidden_class">
                                                            <p>If no, motivate</p>
                                                        </div>
                                                    </> :
                                                    null
                                            }
                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.AR_RepPrs_ExplainedDetail }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['AR_RepPrs_ExplainedDetail']: value }) } }
                                                    onFocus={ (e) => { rica1_onFocus() } }
                                                    onBlur={ (e) => { rica1_onBlur() } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder={ `If no, motivate` }
                                                />
                                            </div>

                                            <br />
                                            <br />
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label htmlFor="client_name" className="col-form-label roa-label" title="If no, motivate">The client has confirmed that no financial products were canceled, Lapsed forfeited, surrendered, or partially surrendered in the 6 months preceding and does not intend to cancel a financial product in the next 6 months.</label>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="row col-4 align-items-center"></div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_RepPrs_Cancelled'] == 1 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="1" id="AR_RepPrs_Cancelled" name="AR_RepPrs_Cancelled" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn2" >
                                                            Yes
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row col-4 align-items-center">
                                                    <div className="col-4">
                                                        <input onMouseLeave={ (e) => { onFieldBlur(e) } } className="form-check-input" checked={ FormData['AR_RepPrs_Cancelled'] == 0 ? true : false } onChange={ (e) => { onChange(e) } } type="radio" value="0" id="AR_RepPrs_Cancelled" name="AR_RepPrs_Cancelled" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="form-check-label roa-font" htmlFor="provided_identity_radio_btn2" >
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12" id="provided_identity_2" >
                                            {
                                                Rica2Visibility ?
                                                    <>
                                                        <div id="provided_identity_instructions" className="hidden_class">
                                                            <p>If no, motivate</p>
                                                        </div>
                                                    </> :
                                                    null
                                            }
                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ FormData?.AR_RepPrs_CancelledDetail }
                                                    onChange={ (value) => { setFormData({ ...FormData, ['AR_RepPrs_CancelledDetail']: value }) } }
                                                    onFocus={ (e) => { rica2_onFocus() } }
                                                    onBlur={ (e) => { rica2_onBlur() } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder={ `If no, motivate.` }
                                                />
                                            </div>

                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <hr />
                                    {
                                        backgroundInfoVisibility10 ?
                                            <>
                                                <div id="background_info_instructions10" className="hidden_class">
                                                    {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                    <ul>
                                                        <li>
                                                            Define Other Source of Funds.

                                                        </li>

                                                    </ul>

                                                </div>
                                            </> :
                                            null
                                    }
                                </ol>
                                {/* Section B */ }
                                <p><b>Section B</b></p>
                                <p className='roa-font'>Background Information</p>
                                <p className='roa-label'><p>Provide a brief description of the business</p></p>
                                {
                                    backgroundInfoVisibility1 ?
                                        <>
                                            <div id="background_info_instructions1" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Brief description of the business.<br />
                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AR_ReplacementBackInfo }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AR_ReplacementBackInfo']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus1() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur1() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Brief description of the business.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />
                                <p className='roa-font'><b>Business Needs Identified</b></p>
                                <h4 className=''><b>PART I: RISK</b></h4>
                                <p className='roa-label'>Financial Needs Analysis Summary: Business Assurance</p>
                                <p className='roa-font'><b>Business assurance needs identified</b></p>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData["AR_BusA_BnS"] } name="AR_BusA_BnS" onChange={ (e) => { FormData["AR_BusA_BnS"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Funding of Buy-and-Sell Agreement
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData["AR_BusA_KeyP_Insurance"] } name="AR_BusA_KeyP_Insurance" onChange={ (e) => { FormData["AR_BusA_KeyP_Insurance"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Key Person Insurance
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData["AR_BusA_ContingentLiability"] } name="AR_BusA_ContingentLiability" onChange={ (e) => { FormData["AR_BusA_ContingentLiability"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Contingent liability
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } checked={ FormData["AR_BusA_BusOvProt"] } name="AR_BusA_BusOvProt" onChange={ (e) => { FormData["AR_BusA_BusOvProt"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Business Overheads Protection
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ FormData["AR_BusA_CLARedm"] } name="AR_BusA_CLARedm" onChange={ (e) => { FormData["AR_BusA_CLARedm"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Credit Loan Account Redemption
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ FormData["AR_BusA_DebitLoanRedemption"] } name="AR_BusA_DebitLoanRedemption" onChange={ (e) => { FormData["AR_BusA_DebitLoanRedemption"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Debit Loan Redemption
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ FormData["AR_BusA_FundingOfFutureExpenses"] } name="AR_BusA_FundingOfFutureExpenses" onChange={ (e) => { FormData["AR_BusA_FundingOfFutureExpenses"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Funding of Future Expenses
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" onMouseLeave={ (e) => { onFieldBlur(e) } } id="vehicle1" checked={ FormData["AR_BusA_FundingOfDeferredGratuities"] } name="AR_BusA_FundingOfDeferredGratuities" onChange={ (e) => { FormData["AR_BusA_FundingOfDeferredGratuities"] === true ? setFormData({ ...FormData, [e.target.name]: false }) : setFormData({ ...FormData, [e.target.name]: true }) } } />
                                            <label className="form-check-label roa-label" for="flexCheckDefault">
                                                Funding of Deferred Gratuities
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                        <ReactQuill
                                            theme="snow" // Specify the theme ('snow' or 'bubble')
                                            value={ FormData?.AR_BusA_Details }
                                            onChange={ (value) => { setFormData({ ...FormData, ['AR_BusA_Details']: value }) } }
                                            onFocus={ (e) => { backgroundInfo_onFocus2() } }
                                            onBlur={ (e) => { backgroundInfo_onBlur2() } }
                                            modules={ modules }
                                            formats={ formats }
                                            style={ {
                                                height: '300px', // Set the desired height here
                                            } }
                                            placeholder={ `Provide description and motivation of the description of the needs identified.` }
                                        />
                                    </div>

                                    <br />
                                    <br />
                                </div>
                                <hr />
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
                                <div className='row'>
                                    <div className='col'>
                                        <b className='roa-font'>Buy and sell</b>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='row my-2'>
                                        <div className='col'>
                                            <b className='roa-font'>Death Cover:Lump sum</b>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DC_TotalNeed' value={ FormData?.AR_BnS_DC_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DC_Provisions' value={ FormData?.AR_BnS_DC_Provisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DC_ShortfallSurplus' value={ FormData?.AR_BnS_DC_TotalNeed - FormData?.AR_BnS_DC_Provisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DC_Investments' value={ FormData?.AR_BnS_DC_Investments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='row my-2'>
                                        <div className='col'>
                                            <b className='roa-font'>Disability</b>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DiC_TotalNeed' value={ FormData?.AR_BnS_DiC_TotalNeed } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DiC_ExistingProvisions' value={ FormData?.AR_BnS_DiC_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DiC_ExistingShortfallSurplus' value={ FormData?.AR_BnS_DiC_TotalNeed - FormData?.AR_BnS_DiC_ExistingProvisions } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="input-group roa-font">
                                                <span className="input-group-text">R</span>
                                                <input type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='AR_BnS_DiC_Investments' value={ FormData?.AR_BnS_DiC_Investments } onChange={ (e) => { onChange(e) } } placeholder='0.00' aria-label="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    AR_BnS_Data.length === 0 ?
                                        <div className="col-6">
                                            <button className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                            : "btn btn-primary sfp "
                                            } type='button' onClick={ (e) => { AddNewAR_BnS_Data(e) } }><FontAwesomeIcon icon={ faPlus } width={ '15px' } /> Add Other</button>
                                        </div>
                                        :
                                        <></>
                                }
                                <p className='roa-label'><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>

                                {
                                    AR_BnS_Data.length > 0 ?
                                        AR_BnS_Data.map((row, key) => {
                                            return (
                                                <div key={ key }>
                                                    <div className='row'>
                                                        <div className='col'>
                                                            {
                                                                AR_BnS_Data.length === key + 1 ?
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                    : "btn btn-primary sfp "
                                                                    } type='button' onClick={ (e) => { AddNewAR_BnS_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faPlus } /> Add New Other Death Cover</button>
                                                                    : <></>
                                                            }
                                                        </div>
                                                        <div className='col'>
                                                            <button className={
                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                            : "btn btn-primary sfp "
                                                            } type='button' onClick={ (e) => { RemoveNewAR_BnS_Data(e) } }><FontAwesomeIcon width={ '15px' } icon={ faMinus } /> Remove Other Death Cover</button>
                                                        </div>
                                                    </div>
                                                    <div className='row my-2'>
                                                        {/* <div className='col'>
                                                                        <b className='roa-font'>Death Cover: Other</b>
                                                                    </div> */}
                                                        <div className='col'>
                                                            <div className="input-group roa-font">
                                                                <textarea type="text" className="form-control roa-font" name='DC_Other' value={ row?.DC_Other } onChange={ (e) => { on_AR_BnS_Data_Change(e, key) } } placeholder='Enter the title' aria-label="" />
                                                            </div>
                                                        </div>
                                                        <div className='col'>
                                                            <div className="input-group roa-font">
                                                                <span className="input-group-text">R</span>
                                                                <input disabled={ key?.DC_Other === "" } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control roa-font" name='BnS_OtherTotalNeed' value={ row?.BnS_OtherTotalNeed } onChange={ (e) => { on_AR_BnS_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                            </div>
                                                        </div>
                                                        <div className='col'>
                                                            <div className="input-group roa-font">
                                                                <span className="input-group-text">R</span>
                                                                <input disabled={ key?.DC_Other === "" } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control roa-font" name='BnS_OtherExistingProvisions' value={ row?.BnS_OtherExistingProvisions } onChange={ (e) => { on_AR_BnS_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                            </div>
                                                        </div>
                                                        <div className='col'>
                                                            <div className="input-group roa-font">
                                                                <span className="input-group-text">R</span>
                                                                <input disabled type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control roa-font" name='BnS_OtherExistingShortfallSurplus' value={ row?.BnS_OtherTotalNeed - row?.BnS_OtherExistingProvisions } onChange={ (e) => { on_AR_BnS_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                            </div>
                                                        </div>
                                                        <div className='col'>
                                                            <div className="input-group roa-font">
                                                                <span className="input-group-text">R</span>
                                                                <input disabled={ key?.DC_Other === "" } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control roa-font" name='BnS_OtherInvestments' value={ row?.BnS_OtherInvestments } onChange={ (e) => { on_AR_BnS_Data_Change(e, key) } } placeholder='' aria-label="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default BARisk