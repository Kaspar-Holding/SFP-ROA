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
    const [FormStatus, setFormStatus] = useState(0)

    const LoadData = async (formId) => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId
        })
        try {
            const response = await axios.post(
                `/api/roa/form/assurancerisk`,
                Body,
                config
            )
            setFormStatus(response?.data?.data?.form_status)
            setFormData(response?.data?.data?.assuranceRisk)
            setProductTaken(response?.data?.data?.productTaken)
            setAR_BnS_Data(response?.data?.data?.ar_bns_other)
            setAR_BusOvProt_Data(response?.data?.data?.ar_busovprot_other)
            setAR_CLARedm_Data(response?.data?.data?.credit_otherData)
            setAR_DLARedm_Data(response?.data?.data?.debit_otherData)
            setAR_KeyP_Data(response?.data?.data?.keyp_otherData)
            setAR_SureNLia_Data(response?.data?.data?.sureNLia_otherData)


        } catch (error) {

        }
        setLoaded(false)
    }

    const updateRAForm = async () => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId,
            assuranceRisk: FormData,
            productTaken: ProductTaken,
            ar_bns_other: AR_BnS_Data,
            ar_busovprot_other: AR_BusOvProt_Data,
            credit_otherData: AR_CLARedm_Data,
            debit_otherData: AR_DLARedm_Data,
            keyp_otherData: AR_KeyP_Data,
            sureNLia_otherData: AR_SureNLia_Data,
        })
        try {
            await axios.post(
                `/api/roa/form/assurancerisk/update`,
                Body,
                config
            ).then((response) => {

                Swal.fire({
                    type: 'success',
                    title: 'Success',
                    text: 'Assurance Form Updated Successfully.',
                    position: 'bottom-end',
                    showConfirmButton: false,
                    backdrop: "None",
                    color: "#fff",
                    background: "#00788B",
                    timer: 5000
                })
            })

        } catch (error) {

        }
        setLoaded(false)
    }

    const onFieldBlur = (e) => {
        FormStatus == 0 ? updateRAForm() : Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })
    }

    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [backgroundInfoVisibility1, setbackgroundInfoVisibility1] = useState(false)
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
    const [FicaVisibility, setFicaVisibility] = useState(false)

    const [RicaVisibility, setRicaVisibility] = useState(false)
    const [Rica1Visibility, setRica1Visibility] = useState(false)
    const [Rica2Visibility, setRica2Visibility] = useState(false)


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
                        <form className='inital-card-header mx-5 roa-label' onSubmit={ e => onSubmit(e) }>
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
                                    <input value={ `${user?.full_name} ` } disabled className="form-control roa-label" aria-describedby="" style={ { width: '100%' } } />
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
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">Comments</p>
                                    </div>
                                    <div className='col-12'>

                                        <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                            <ReactQuill
                                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                                value={ FormData?.AR_BnS_Comments }
                                                onChange={ (value) => { setFormData({ ...FormData, ['AR_BnS_Comments']: value }) } }
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
                                <hr />

                                <table className="table">
                                    <tbody>

                                        <tr>
                                            {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */ }
                                            <td className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text"
                                                    : user?.email.includes('fs4p') ? "text-start fs4p-text"
                                                        : user?.email.includes('sanlam') ? "text-start sanlam-text"
                                                            : ""
                                            } style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Key person </td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Death</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DC_TotalNeed" name='AR_KeyP_DC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DC_ExistingProvisions" name='AR_KeyP_DC_ExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DC_ExistingShortfallSurplus" name='AR_KeyP_DC_ExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DC_TotalNeed'] - FormData['AR_KeyP_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DC_Investments" name='AR_KeyP_DC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Disability</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DiC_TotalNeed" name='AR_KeyP_DiC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DiC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DiC_ExistingProvisions" name='AR_KeyP_DiC_ExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DiC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DiC_ExistingShortfallSurplus" name='AR_KeyP_DiC_ExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DiC_TotalNeed'] - FormData['AR_KeyP_DiC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_DiC_Investments" name='AR_KeyP_DiC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_DiC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Temporary Income (p.m.)</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_TI_CoverTotalNeed" name='AR_KeyP_TI_CoverTotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_TI_CoverTotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_TI_CoverExistingProvisions" name='AR_KeyP_TI_CoverExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_TI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_TI_CoverExistingShortfallSurplus" name='AR_KeyP_TI_CoverExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_TI_CoverTotalNeed'] - FormData['AR_KeyP_TI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_TI_CoverInvestments" name='AR_KeyP_TI_CoverInvestments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_TI_CoverInvestments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Permanent Income(p.m)</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_PI_CoverTotalNeed" name='AR_KeyP_PI_CoverTotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_PI_CoverTotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_PI_CoverExistingProvisions" name='AR_KeyP_PI_CoverExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_PI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_PI_CoverExistingShortfallSurplus" name='AR_KeyP_PI_CoverExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_PI_CoverTotalNeed'] - FormData['AR_KeyP_PI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_KeyP_PI_CoverInvestments" name='AR_KeyP_PI_CoverInvestments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_KeyP_PI_CoverInvestments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                                {
                                    AR_KeyP_Data.length === 0 ?
                                        <div className="col-6">
                                            <button className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                            : "btn btn-primary sfp "
                                            } type='button' onClick={ (e) => { AddNewAR_KeyP_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                        </div>
                                        : <></>
                                }
                                <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                <table className="table">
                                    <tbody>
                                        {
                                            AR_KeyP_Data.length > 0 ?
                                                AR_KeyP_Data.map((key, i) => {
                                                    // console.log(i+1)
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    {
                                                                        AR_KeyP_Data.length === i + 1 ?
                                                                            <button className={
                                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                            : "btn btn-primary sfp "
                                                                            } type='button' onClick={ (e) => { AddNewAR_KeyP_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                                                            : <></>
                                                                    }
                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                                    : "btn btn-danger sfp "
                                                                    } type='button' onClick={ (e) => { RemoveNewAR_KeyP_Data(e) } }><FontAwesomeIcon width="15px" icon={ faMinus } /> Remove Other Cover</button>

                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <div className="form-group">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" name='KeyP_Other' value={ key['KeyP_Other'] } maxLength={ 500 } onChange={ (e) => { on_AR_KeyP_Data_Change(e, i) } } placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                                                </td>
                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['KeyP_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='KeyP_OtherTotalNeed' value={ key['KeyP_OtherTotalNeed'] } onChange={ (e) => { on_AR_KeyP_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['KeyP_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='KeyP_OtherExistingProvisions' value={ key['KeyP_OtherExistingProvisions'] } onChange={ (e) => { on_AR_KeyP_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['KeyP_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='KeyP_OtherExistingShortfallSurplus' value={ key['KeyP_OtherTotalNeed'] - key['KeyP_OtherExistingProvisions'] } onChange={ (e) => { on_AR_KeyP_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['KeyP_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='KeyP_OtherInvestments' value={ key['KeyP_OtherInvestments'] } onChange={ (e) => { on_AR_KeyP_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                                : <></>
                                        }
                                    </tbody>
                                </table>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">Comments</p>
                                    </div>
                                    <div className='col-12'>

                                        <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                            <ReactQuill
                                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                                value={ FormData?.AR_KeyP_Comments }
                                                onChange={ (value) => { setFormData({ ...FormData, ['AR_KeyP_Comments']: value }) } }
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

                                <table className="table">
                                    <tbody>

                                        <tr>
                                            {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */ }
                                            <td className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text"
                                                    : user?.email.includes('fs4p') ? "text-start fs4p-text"
                                                        : user?.email.includes('sanlam') ? "text-start sanlam-text"
                                                            : ""
                                            } style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Suretyship and Liability </td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Death</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DC_TotalNeed" name='AR_SureNLia_DC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DC_ExistingProvisions" name='AR_SureNLia_DC_ExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DC_ExistingShortfallSurplus" name='AR_SureNLia_DC_ExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DC_TotalNeed'] - FormData['AR_SureNLia_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DC_Investment" name='AR_SureNLia_DC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Disability</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DiC_TotalNeed" name='AR_SureNLia_DiC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DiC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DiC_Provisions" name='AR_SureNLia_DiC_Provisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DiC_Provisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DiC_ShortfallSurplus" name='AR_SureNLia_DiC_ShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DiC_TotalNeed'] - FormData['AR_SureNLia_DiC_Provisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_SureNLia_DiC_Investment" name='AR_SureNLia_DiC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_SureNLia_DiC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                                {
                                    AR_SureNLia_Data.length === 0 ?
                                        <div className="col-6">
                                            <button className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                            : "btn btn-primary sfp "
                                            } type='button' onClick={ (e) => { AddNewAR_SureNLia_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                        </div>
                                        : <></>
                                }
                                <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                <table className="table">
                                    <tbody>
                                        {
                                            AR_SureNLia_Data.length > 0 ?
                                                AR_SureNLia_Data.map((key, i) => {
                                                    // console.log(i+1)
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    {
                                                                        AR_SureNLia_Data.length === i + 1 ?
                                                                            <button className={
                                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                            : "btn btn-primary sfp "
                                                                            } type='button' onClick={ (e) => { AddNewAR_SureNLia_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                                                            : <></>
                                                                    }
                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                                    : "btn btn-danger sfp "
                                                                    } type='button' onClick={ (e) => { RemoveNewAR_SureNLia_Data(e) } }><FontAwesomeIcon width="15px" icon={ faMinus } /> Remove Other Cover</button>

                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <div className="form-group">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" name='SureNLia_Other' value={ key['SureNLia_Other'] } maxLength={ 500 } onChange={ (e) => { on_AR_SureNLia_Data_Change(e, i) } } placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                                                </td>
                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['SureNLia_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='SureNLia_OtherTotalNeed' value={ key['SureNLia_OtherTotalNeed'] } onChange={ (e) => { on_AR_SureNLia_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['SureNLia_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='SureNLia_OtherExistingProvisions' value={ key['SureNLia_OtherExistingProvisions'] } onChange={ (e) => { on_AR_SureNLia_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['SureNLia_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='SureNLia_OtherExistingShortfallSurplus' value={ key['SureNLia_OtherTotalNeed'] - key['SureNLia_OtherExistingProvisions'] } onChange={ (e) => { on_AR_SureNLia_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['SureNLia_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='SureNLia_OtherInvestments' value={ key['SureNLia_OtherInvestments'] } onChange={ (e) => { on_AR_SureNLia_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                                : <></>
                                        }
                                    </tbody>
                                </table>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">Comments</p>
                                    </div>
                                    <div className='col-12'>

                                        <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                            <ReactQuill
                                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                                value={ FormData?.AR_SureNLia_Comments }
                                                onChange={ (value) => { setFormData({ ...FormData, ['AR_SureNLia_Comments']: value }) } }
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

                                <table className="table">
                                    <tbody>

                                        <tr>
                                            {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */ }
                                            <td className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text"
                                                    : user?.email.includes('fs4p') ? "text-start fs4p-text"
                                                        : user?.email.includes('sanlam') ? "text-start sanlam-text"
                                                            : ""
                                            } style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Business Overheads Protection </td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Temporary Income(p.m.)</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_TI_CoverTotalNeed" name='AR_BusOvProt_TI_CoverTotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_TI_CoverTotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_TI_CoverExistingProvisions" name='AR_BusOvProt_TI_CoverExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_TI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_TI_CoverExistingShortfallSurplus" name='AR_BusOvProt_TI_CoverExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_TI_CoverTotalNeed'] - FormData['AR_BusOvProt_TI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_TI_CoverInvestments" name='AR_BusOvProt_TI_CoverInvestments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_TI_CoverInvestments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Permanant Income(p.m.)</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_PI_CoverTotalNeed" name='AR_BusOvProt_PI_CoverTotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_PI_CoverTotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_PI_CoverExistingProvisions" name='AR_BusOvProt_PI_CoverExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_PI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_PI_CoverExistingShortfallSurplus" name='AR_BusOvProt_PI_CoverExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_PI_CoverTotalNeed'] - FormData['AR_BusOvProt_PI_CoverExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_BusOvProt_PI_CoverInvestments" name='AR_BusOvProt_PI_CoverInvestments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_BusOvProt_PI_CoverInvestments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>




                                    </tbody>
                                </table>
                                <br />
                                {
                                    AR_BusOvProt_Data.length === 0 ?
                                        <div className="col-6">
                                            <button className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                            : "btn btn-primary sfp "
                                            } type='button' onClick={ (e) => { AddNewAR_BusOvProt_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                        </div>
                                        : <></>
                                }
                                <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                <table className="table">
                                    <tbody>
                                        {
                                            AR_BusOvProt_Data.length > 0 ?
                                                AR_BusOvProt_Data.map((key, i) => {
                                                    // console.log(i+1)
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    {
                                                                        AR_BusOvProt_Data.length === i + 1 ?
                                                                            <button className={
                                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                            : "btn btn-primary sfp "
                                                                            } type='button' onClick={ (e) => { AddNewAR_BusOvProt_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                                                            : <></>
                                                                    }
                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                                    : "btn btn-danger sfp "
                                                                    } type='button' onClick={ (e) => { RemoveNewAR_BusOvProt_Data(e) } }><FontAwesomeIcon width="15px" icon={ faMinus } /> Remove Other Cover</button>

                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <div className="form-group">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" name='BusOvProt_Other' value={ key['BusOvProt_Other'] } maxLength={ 500 } onChange={ (e) => { on_AR_BusOvProt_Data_Change(e, i) } } placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                                                </td>
                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['BusOvProt_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='BusOvProt_OtherTotalNeed' value={ key['BusOvProt_OtherTotalNeed'] } onChange={ (e) => { on_AR_BusOvProt_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['BusOvProt_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='BusOvProt_OtherExistingProvisions' value={ key['BusOvProt_OtherExistingProvisions'] } onChange={ (e) => { on_AR_BusOvProt_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['BusOvProt_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='BusOvProt_OtherExistingShortfallSurplus' value={ key['BusOvProt_OtherTotalNeed'] - key['BusOvProt_OtherExistingProvisions'] } onChange={ (e) => { on_AR_BusOvProt_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['BusOvProt_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='BusOvProt_OtherInvestments' value={ key['BusOvProt_OtherInvestments'] } onChange={ (e) => { on_AR_BusOvProt_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                                : <></>
                                        }
                                    </tbody>
                                </table>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">Comments</p>
                                    </div>
                                    <div className='col-12'>

                                        <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                            <ReactQuill
                                                theme="snow" // Specify the theme ('snow' or 'bubble')
                                                value={ FormData?.AR_BusOvProt_Comments }
                                                onChange={ (value) => { setFormData({ ...FormData, ['AR_BusOvProt_Comments']: value }) } }
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

                                <table className="table">
                                    <tbody>

                                        <tr>
                                            {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */ }
                                            <td className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text"
                                                    : user?.email.includes('fs4p') ? "text-start fs4p-text"
                                                        : user?.email.includes('sanlam') ? "text-start sanlam-text"
                                                            : ""
                                            } style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Credit Loan Account Redemption </td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Death</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DC_TotalNeed" name='AR_CLARedm_DC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DC_ExistingProvisions" name='AR_CLARedm_DC_ExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DC_ExistingShortfallSurplus" name='AR_CLARedm_DC_ExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DC_TotalNeed'] - FormData['AR_CLARedm_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DC_Investments" name='AR_CLARedm_DC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Disability</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DiC_TotalNeed" name='AR_CLARedm_DiC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DiC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DiC_ExistingProvisions" name='AR_CLARedm_DiC_ExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DiC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DiC_ExistingShortfallSurplus" name='AR_CLARedm_DiC_ExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DiC_TotalNeed'] - FormData['AR_CLARedm_DiC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_CLARedm_DiC_Investments" name='AR_CLARedm_DiC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_CLARedm_DiC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <br />

                                {
                                    AR_CLARedm_Data.length === 0 ?
                                        <div className="col-6">
                                            <button className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                            : "btn btn-primary sfp "
                                            } type='button' onClick={ (e) => { AddNewAR_CLARedm_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                        </div>
                                        : <></>
                                }
                                <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                <table className="table">
                                    <tbody>
                                        {
                                            AR_CLARedm_Data.length > 0 ?
                                                AR_CLARedm_Data.map((key, i) => {
                                                    // console.log(i+1)
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    {
                                                                        AR_CLARedm_Data.length === i + 1 ?
                                                                            <button className={
                                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                            : "btn btn-primary sfp "
                                                                            } type='button' onClick={ (e) => { AddNewAR_CLARedm_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                                                            : <></>
                                                                    }
                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                                    : "btn btn-danger sfp "
                                                                    } type='button' onClick={ (e) => { RemoveNewAR_CLARedm_Data(e) } }><FontAwesomeIcon width="15px" icon={ faMinus } /> Remove Other Cover</button>

                                                                </td>
                                                                <td className="col"></td>
                                                                <td className="col"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <div className="form-group">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" name='CLARedm_Other' value={ key['CLARedm_Other'] } maxLength={ 500 } onChange={ (e) => { on_AR_CLARedm_Data_Change(e, i) } } placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                                                </td>
                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['CLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='CLARedm_OtherTotalNeed' value={ key['CLARedm_OtherTotalNeed'] } onChange={ (e) => { on_AR_CLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['CLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='CLARedm_OtherExistingProvisions' value={ key['CLARedm_OtherExistingProvisions'] } onChange={ (e) => { on_AR_CLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['CLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='CLARedm_OtherExistingShortfallSurplus' value={ key['CLARedm_OtherTotalNeed'] - key['CLARedm_OtherExistingProvisions'] } onChange={ (e) => { on_AR_CLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['CLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='CLARedm_OtherInvestments' value={ key['CLARedm_OtherInvestments'] } onChange={ (e) => { on_AR_CLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                                : <></>
                                        }
                                    </tbody>
                                </table>
                                <table className="table">
                                    <tbody>


                                        <br />
                                        <br />
                                        <tr>
                                            {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */ }
                                            <td className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "text-start sfp-text"
                                                    : user?.email.includes('fs4p') ? "text-start fs4p-text"
                                                        : user?.email.includes('sanlam') ? "text-start sanlam-text"
                                                            : ""
                                            } style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Debit Loan Redemption </td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                            <td className="col"></td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Death</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DC_TotalNeed" name='AR_DLARedm_DC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DC_ExistingProvisions" name='AR_DLARedm_DC_ExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DC_ExistingShortfallSurplus" name='AR_DLARedm_DC_ExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DC_TotalNeed'] - FormData['AR_DLARedm_DC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DC_Investments" name='AR_DLARedm_DC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="col" style={ { fontSize: '14px', fontWeight: 'bold' } } align="left">Disability</td>
                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DiC_TotalNeed" name='AR_DLARedm_DiC_TotalNeed' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DiC_TotalNeed'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DiC_ExistingProvisions" name='AR_DLARedm_DiC_ExistingProvisions' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DiC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DiC_ExistingShortfallSurplus" name='AR_DLARedm_DiC_ExistingShortfallSurplus' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DiC_TotalNeed'] - FormData['AR_DLARedm_DiC_ExistingProvisions'] } aria-label="" />
                                                </div>
                                            </td>

                                            <td className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">R</span>
                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="AR_DLARedm_DiC_Investments" name='AR_DLARedm_DiC_Investments' onChange={ (e) => { onChange(e) } } value={ FormData['AR_DLARedm_DiC_Investments'] } aria-label="" />
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <br />
                                {
                                    AR_DLARedm_Data.length === 0 ?
                                        <div className="col-6">
                                            <button className={
                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                            : "btn btn-primary sfp "
                                            } type='button' onClick={ (e) => { AddNewAR_DLARedm_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                        </div>
                                        : <></>
                                }
                                <p><b>Note:</b> Other Number fields will be disabled until the value of the first field is not entered.</p>
                                <table className="table">
                                    <tbody>
                                        {
                                            AR_DLARedm_Data.length > 0 ?
                                                AR_DLARedm_Data.map((key, i) => {
                                                    // console.log(i+1)
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    {
                                                                        AR_DLARedm_Data.length === i + 1 ?
                                                                            <button className={
                                                                                user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                                                    : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                                                        : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                                            : "btn btn-primary sfp "
                                                                            } type='button' onClick={ (e) => { AddNewAR_DLARedm_Data(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add Other</button>
                                                                            : <></>
                                                                    }
                                                                </td>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                                    : "btn btn-danger sfp "
                                                                    } type='button' onClick={ (e) => { RemoveNewAR_DLARedm_Data(e) } }><FontAwesomeIcon width="15px" icon={ faMinus } /> Remove Other Cover</button>

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="col" style={ { fontSize: '14px', fontWeight: 'bold', color: 'grey' } } align="left">
                                                                    <div className="form-group">
                                                                        <input onBlur={ (e) => { onFieldBlur(e) } } type="text" name='DLARedm_Other' value={ key['DLARedm_Other'] } maxLength={ 500 } onChange={ (e) => { on_AR_DLARedm_Data_Change(e, i) } } placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                                                </td>
                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['DLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DLARedm_OtherTotalNeed' value={ key['DLARedm_OtherTotalNeed'] } onChange={ (e) => { on_AR_DLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['DLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DLARedm_OtherExistingProvisions' value={ key['DLARedm_OtherExistingProvisions'] } onChange={ (e) => { on_AR_DLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['DLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DLARedm_OtherExistingShortfallSurplus' value={ key['DLARedm_OtherTotalNeed'] - key['DLARedm_OtherExistingProvisions'] } onChange={ (e) => { on_AR_DLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>

                                                                <td className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">R</span>
                                                                        <input disabled={ key['DLARedm_Other'] === "" } onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" name='DLARedm_OtherInvestments' value={ key['DLARedm_OtherInvestments'] } onChange={ (e) => { on_AR_DLARedm_Data_Change(e, i) } } placeholder='0.00' aria-label="" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                                : <></>
                                        }
                                    </tbody>
                                </table>
                                <br />
                                <h5 className="section_class"><b>SECTION B:</b></h5>
                                <div className={
                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "h6 fw-bold sfp-text"
                                        : user?.email.includes('fs4p') ? "h6 fw-bold fs4p-text"
                                            : user?.email.includes('sanlam') ? "h6 fw-bold sanlam-text"
                                                : "h6 fw-bold"
                                }>Financial Solutions</div>
                                <p>Summary of recommendations to address the business{ `'` }s needs identified.</p>
                                <p>Life Cover</p>
                                <hr />

                                {
                                    backgroundInfoVisibility3 ?
                                        <>
                                            <div id="background_info_instructions3" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Explain the reasons why Life cover benefits were recommended to satisfy this need.<br />
                                                        Record the client{ `'` }s instructions, deviations and implications thereof.

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }

                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AR_LifeCoverFinancialSolutions }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AR_LifeCoverFinancialSolutions']: value }) } }
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
                                <br />
                                <p>Disability Cover</p>
                                <hr />

                                {
                                    backgroundInfoVisibility4 ?
                                        <>
                                            <div id="background_info_instructions4" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                <ul>
                                                    <li>
                                                        Explain the reasons why Disability cover benefits were recommended to satisfy this need.<br />
                                                        Record the client{ `'` }s instructions, deviations and implications thereof.

                                                    </li>

                                                </ul>

                                            </div>
                                        </> :
                                        null
                                }
                                <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                    <ReactQuill
                                        theme="snow" // Specify the theme ('snow' or 'bubble')
                                        value={ FormData?.AR_DiC_FinancialSolutions }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AR_DiC_FinancialSolutions']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus4() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur4() } }
                                        modules={ modules }
                                        formats={ formats }
                                        style={ {
                                            height: '300px', // Set the desired height here
                                        } }
                                        placeholder={ `Explain the reasons why Disability cover benefits were recommended to satisfy this need. Record the client's instructions, deviations and implications thereof.` }
                                    />
                                </div>

                                <br />
                                <br />
                                <hr />

                                <br />
                                <h5 className="section_class"><b>SECTION C:</b></h5>
                                <div className={
                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "h6 fw-bold sfp-text"
                                        : user?.email.includes('fs4p') ? "h6 fw-bold fs4p-text"
                                            : user?.email.includes('sanlam') ? "h6 fw-bold sanlam-text"
                                                : "h6 fw-bold"
                                }>Alternative Solutions Considered</div>
                                <p>The following solutions were presented to you for consideration but were not selected for the following reasons:</p>


                                {
                                    backgroundInfoVisibility5 ?
                                        <>
                                            <div id="background_info_instructions5" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
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
                                        value={ FormData?.AR_AltS_1 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AR_AltS_1']: value }) } }
                                        // onBlur={(e)=>{onFieldBlur(e)}}
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
                                    backgroundInfoVisibility6 ?
                                        <>
                                            <div id="background_info_instructions6" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
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
                                        value={ FormData?.AR_AltS_2 }
                                        onChange={ (value) => { setFormData({ ...FormData, ['AR_AltS_2']: value }) } }
                                        onFocus={ (e) => { backgroundInfo_onFocus6() } }
                                        onBlur={ (e) => { backgroundInfo_onBlur6() } }
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
                                    backgroundInfoVisibility7 ?
                                        <>
                                            <div id="background_info_instructions7" className="hidden_class">
                                                {/* <p>Discuss the outcome of the FNA</p><br /> */ }
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
                                </div>
                                <ReactQuill
                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                    value={ FormData?.AR_AltS_3 }
                                    onChange={ (value) => { setFormData({ ...FormData, ['AR_AltS_3']: value }) } }
                                    onFocus={ (e) => { backgroundInfo_onFocus7() } }
                                    onBlur={ (e) => { backgroundInfo_onBlur7() } }
                                    modules={ modules }
                                    formats={ formats }
                                    style={ {
                                        height: '300px', // Set the desired height here
                                    } }
                                    placeholder={ `3. Identify the type of product or product provider which was considered but not selected and motivate.` }
                                />

                                <br />
                                <br />
                                <hr />
                                <h5 className="section_class"><b>SECTION D:</b></h5>
                                <div className={
                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "h6 fw-bold sfp-text"
                                        : user?.email.includes('fs4p') ? "h6 fw-bold fs4p-text"
                                            : user?.email.includes('sanlam') ? "h6 fw-bold sanlam-text"
                                                : "h6 fw-bold"
                                }>Product Taken (Each additional need must be accompanied by its own product annexure.)</div>

                                <p>Products accepted by you to meet the business’s requirements.</p>
                                <br />
                                {
                                    ProductTaken.length === 0 ?
                                        <>
                                            <div className="col-6">
                                                <button className={
                                                    user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-primary sfp "
                                                        : user?.email.includes('fs4p') ? "btn btn-primary fs4p "
                                                            : user?.email.includes('sanlam') ? "btn btn-primary sanlam "
                                                                : "btn btn-primary sfp "
                                                } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add New Product</button>
                                            </div>
                                        </>
                                        : <></>
                                }
                                {
                                    ProductTaken.length > 0 ?
                                        <>
                                            {
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
                                                                    } type='button' onClick={ (e) => { AddNewProductTaken(e) } }><FontAwesomeIcon width="15px" icon={ faPlus } /> Add New Product</button>
                                                                </div>
                                                                <div className="col-6">
                                                                    <button className={
                                                                        user?.email.includes('sfp') || user?.email.includes('succession') ? "btn btn-danger sfp "
                                                                            : user?.email.includes('fs4p') ? "btn btn-danger fs4p "
                                                                                : user?.email.includes('sanlam') ? "btn btn-danger sanlam "
                                                                                    : "btn btn-danger sfp "
                                                                    } type='button' onClick={ (e) => { RemoveNewProductTaken(e) } }><FontAwesomeIcon width="15px" icon={ faMinus } /> Remove Product</button>
                                                                </div>

                                                            </div>

                                                            <hr />
                                                            <div style={ { fontFamily: 'Arial Narrow', fontSize: '9' } }>

                                                                <div className="row">
                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                                <b>Product:</b>
                                                                            </div>
                                                                            <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                                <div className=''>
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="ProductTaken" name='ProductTaken' value={ key.ProductTaken } onChange={ (e) => { on_ProductTaken_Change(e, i) } } aria-describedby="emailHelp" placeholder="" />

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label className="col-form-label"><b>Product Provider</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="ProductProvider" name='ProductProvider' value={ key.ProductProvider } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label htmlFor="id_number" className="col-form-label"><b>Policy number</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="PolicyNumber" required name='PolicyNumber' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.PolicyNumber } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label className="col-form-label"><b>Product Name</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="ProductName" name='ProductName' value={ key.ProductName } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label htmlFor="id_number" className="col-form-label"><b>Premium</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className='row'>
                                                                                    <div className='col-6'>
                                                                                        <div className="form-group">
                                                                                            <input onBlur={ (e) => { onFieldBlur(e) } } type="text" className="form-control" id="ProductPremium" name='ProductPremium' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.ProductPremium } aria-describedby="emailHelp" placeholder="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-6'>
                                                                                        <select onBlur={ (e) => { onFieldBlur(e) } } className="text-start form-select" id="ProductPremiumFrequency" name='ProductPremiumFrequency' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.ProductPremiumFrequency } aria-label="Default select example">
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
                                                                                <label className="col-form-label"><b>Premium Pattern</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="ProductPattern" name='ProductPattern' value={ key.ProductPattern } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label htmlFor="id_number" className="col-form-label"><b>Escalation in cover / premium</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } type="text" spellCheck="true" id="ProductEscalation" name='ProductEscalation' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.ProductEscalation } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label className="col-form-label"><b>Contracting party</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="ProductContractingParty" name='ProductContractingParty' value={ key.ProductContractingParty } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label htmlFor="id_number" className="col-form-label"><b>Life / Lives covered</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } type="text" spellCheck="true" id="ProductLivesAssured" name='ProductLivesAssured' value={ key.ProductLivesAssured } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label className="col-form-label"><b>Premium Payer</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="ProductPremiumPayer" name='ProductPremiumPayer' value={ key.ProductPremiumPayer } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label className="col-form-label"><b>1st year commission</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="input-group">
                                                                                    <span className="input-group-text">R</span>
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="Product1stYearCommission" name='Product1stYearCommission' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.Product1stYearCommission } aria-label="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-6" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label htmlFor="id_number" className="col-form-label"><b>2nd year commission</b></label>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="input-group">
                                                                                    <span className="input-group-text">R</span>
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="Product2ndYearCommission" name='Product2ndYearCommission' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.Product2ndYearCommission } aria-label="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-4">
                                                                                <label className="col-form-label"><b>Benefit description: life cover, disability etc</b></label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-6">
                                                                                <label htmlFor="id_number" className="col-form-label"><b>Cover amount</b></label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />


                                                                    <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_1" name='BenDesc_1' value={ key.BenDesc_1 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-9">
                                                                                <div className="input-group">
                                                                                    <span className="input-group-text">R</span>
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="BenDesc_CoverAmount1" name='BenDesc_CoverAmount1' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.BenDesc_CoverAmount1 } aria-label="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_2" name='BenDesc_2' value={ key.BenDesc_2 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-9">
                                                                                <div className="input-group">
                                                                                    <span className="input-group-text">R</span>
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="BenDesc_CoverAmount2" name='BenDesc_CoverAmount2' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.BenDesc_CoverAmount2 } aria-label="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="col-8" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-6">
                                                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="BenDesc_3" name='BenDesc_3' value={ key.BenDesc_3 } onChange={ (e) => { on_ProductTaken_Change(e, i) } } className="form-control" placeholder="Click here to enter text." aria-describedby="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-4" style={ { paddingBottom: "0.5%" } }>
                                                                        <div className="row g-3 align-items-center">
                                                                            <div className="col-9">
                                                                                <div className="input-group">
                                                                                    <span className="input-group-text">R</span>
                                                                                    <input onBlur={ (e) => { onFieldBlur(e) } } type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } className="form-control" placeholder='0.00' id="BenDesc_CoverAmount3" name='BenDesc_CoverAmount3' onChange={ (e) => { on_ProductTaken_Change(e, i) } } value={ key.BenDesc_CoverAmount3 } aria-label="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                </div>
                                                            </div>

                                                            <p>The following are reasons why the abovementioned product best suits the business’s needs and objectives:</p>

                                                            {
                                                                backgroundInfoVisibility8 ?
                                                                    <>
                                                                        <div id="background_info_instructions8" className="hidden_class">
                                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
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
                                                                    value={ key?.ProductReasons }
                                                                    onChange={ (value) => { on_ProductTaken_Value_Change("ProductReasons", i, value) } }
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
                                                            <p>The details of the material aspects of the selected product that were discussed with you are outlined below:</p>

                                                            {
                                                                backgroundInfoVisibility9 ?
                                                                    <>
                                                                        <div id="background_info_instructions9" className="hidden_class">
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
                                                                    value={ key?.ProductMaterialAspects }
                                                                    onChange={ (value) => { on_ProductTaken_Value_Change("ProductMaterialAspects", i, value) } }
                                                                    onFocus={ (e) => { backgroundInfo_onFocus9() } }
                                                                    onBlur={ (e) => { backgroundInfo_onBlur9() } }
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
                                                            <hr />
                                                            {
                                                                backgroundInfoVisibility10 ?
                                                                    <>
                                                                        <div id="background_info_instructions9" className="hidden_class">
                                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                            <ul>
                                                                                <li>
                                                                                    Disclose and explain the following:<br />
                                                                                    The tax implications for the company, e.g., income tax<br />
                                                                                    The tax implications for the lives covered, e.g., estate duty, income tax, CGT<br />
                                                                                    Executor’s fees?


                                                                                </li>

                                                                            </ul>

                                                                        </div>
                                                                    </> :
                                                                    null
                                                            }

                                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                <ReactQuill
                                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                    value={ key?.ProductDetails }
                                                                    onChange={ (value) => { on_ProductTaken_Value_Change("ProductDetails", i, value) } }
                                                                    onFocus={ (e) => { backgroundInfo_onFocus10() } }
                                                                    onBlur={ (e) => { backgroundInfo_onBlur10() } }
                                                                    modules={ modules }
                                                                    formats={ formats }
                                                                    style={ {
                                                                        height: '300px', // Set the desired height here
                                                                    } }
                                                                    placeholder={ `Disclose and explain the following: The tax implications for the company, e.g., income tax The tax implications for the lives covered, e.g., estate duty, income tax, CGT Executor’s fees?` }
                                                                />
                                                            </div>

                                                            <br />
                                                            <br />
                                                            <hr />

                                                            {
                                                                backgroundInfoVisibility11 ?
                                                                    <>
                                                                        <div id="background_info_instructions11" className="hidden_class">
                                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                            <ul>
                                                                                <li>
                                                                                    Provide a brief summary of the contents of the quote with regard to the following:<br />
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
                                                                    value={ key?.STIC_Fire_AddComments }
                                                                    onChange={ (value) => { on_ProductTaken_Value_Change("ProductBriefSummary", i, value) } }
                                                                    onFocus={ (e) => { backgroundInfo_onFocus11() } }
                                                                    onBlur={ (e) => { backgroundInfo_onBlur11() } }
                                                                    modules={ modules }
                                                                    formats={ formats }
                                                                    style={ {
                                                                        height: '300px', // Set the desired height here
                                                                    } }
                                                                    placeholder={ `Provide a brief summary of the contents of the quote with regard to the following: Benefit terms (cease ages, cover periods etc.) Details of premium and cover pattern structure, frequency etc.` }
                                                                />
                                                            </div>

                                                            <br />
                                                            <br />
                                                            <hr />

                                                            {
                                                                backgroundInfoVisibility12 ?
                                                                    <>
                                                                        <div id="background_info_instructions12" className="hidden_class">
                                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                            <ul>
                                                                                <li>
                                                                                    Record discussion with regard to cessionaries, if applicable.

                                                                                </li>

                                                                            </ul>

                                                                        </div>
                                                                    </> :
                                                                    null
                                                            }

                                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                <ReactQuill
                                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                    value={ key?.Cessionaries }
                                                                    onChange={ (value) => { on_ProductTaken_Value_Change("Cessionaries", i, value) } }
                                                                    onFocus={ (e) => { backgroundInfo_onFocus12() } }
                                                                    onBlur={ (e) => { backgroundInfo_onBlur12() } }
                                                                    modules={ modules }
                                                                    formats={ formats }
                                                                    style={ {
                                                                        height: '300px', // Set the desired height here
                                                                    } }
                                                                    placeholder={ `Record discussion with regard to cessionaries, if applicable.` }
                                                                />
                                                            </div>

                                                            <br />
                                                            <br />
                                                            <hr />

                                                            {
                                                                backgroundInfoVisibility13 ?
                                                                    <>
                                                                        <div id="background_info_instructions13" className="hidden_class">
                                                                            {/* <p>Discuss the outcome of the FNA</p><br /> */ }
                                                                            <ul>
                                                                                <li>Discuss the following information which has been explained to client:<br />
                                                                                    General exclusions of liability (i.e. benefit exclusions e.g., suicide clause on death, psychological conditions on disability, etc.)<br />
                                                                                    Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)<br />
                                                                                    Waiting periods<br />
                                                                                    Cooling off period<br />
                                                                                    Other relevant information<br />
                                                                                    Record discussion with regard to cessionaries, if applicable.<br />

                                                                                </li>

                                                                            </ul>

                                                                        </div>
                                                                    </> :
                                                                    null
                                                            }

                                                            <div onMouseLeave={ (e) => { onFieldBlur(e) } }>
                                                                <ReactQuill
                                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                                    value={ FormData?.InformationExplained }
                                                                    onChange={ (value) => { on_ProductTaken_Value_Change("InformationExplained", i, value) } }
                                                                    // onBlur={(e)=>{onFieldBlur(e)}}
                                                                    modules={ modules }
                                                                    formats={ formats }
                                                                    style={ {
                                                                        height: '300px', // Set the desired height here
                                                                    } }
                                                                    placeholder={ `Discuss the following information which has been explained to client: General exclusions of liability (i.e. benefit exclusions e.g., suicide clause on death, psychological conditions on disability, etc.) Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings) Waiting periods Cooling off period Other relevant information.` }
                                                                />
                                                            </div>

                                                            <br />
                                                            <br />
                                                        </>
                                                    )
                                                }
                                                )
                                            }
                                        </>
                                        : <></>
                                }
                                <hr />
                            </div>
                        </form>
                    </div>

                </EditROALayout >
            </Layout >
        </div >
    )
}

export default BARisk