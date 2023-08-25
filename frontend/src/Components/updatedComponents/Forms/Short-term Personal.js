import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
// import './Invest.css';
import './Styles/CustomNotification.css'
import './Styles/CustomButton.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Editor } from '@tinymce/tinymce-react'
import { LogOut } from '../../../Actions/Auth'
const Short_term_Personal = ({user, LogOut}) => {

    const [letterOfIntroduction, setletterOfIntroduction] = useState(true)
    const [letterOfIntroductionReason, setletterOfIntroductionReason] = useState("")
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionAccess, setletterOfIntroductionAccess] = useState(true)

    const [Fica, setFica] = useState(true)
    const [FicaReason, setFicaReason] = useState("")
    const [FicaVisibility, setFicaVisibility] = useState(false)


    const [Fica1, setFica1] = useState(true)
    const [FicaReason1, setFicaReason1] = useState("")
    const [FicaVisibility1, setFicaVisibility1] = useState(false)

    const [Rica, setRica] = useState(true)
    const [RicaReason, setRicaReason] = useState("")
    const [RicaVisibility, setRicaVisibility] = useState(false)

    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)

    function letter_of_introduction_onFocus() {
        setletterOfIntroductionVisibility(true)
      }
      function letter_of_introduction_onBlur() {
        setletterOfIntroductionVisibility(false)
      }

      function fica_onFocus() {
        setFicaVisibility(true)
      }
      function fica_onBlur() {
        setFicaVisibility(false)
      }

      function fica1_onFocus() {
        setFicaVisibility1(true)
      }
      function fica1_onBlur() {
        setFicaVisibility1(false)
      }

      function rica_onFocus() {
        setRicaVisibility(true)
      }
      function rica_onBlur() {
        setRicaVisibility(false)
      }

      function backgroundInfo_onFocus() {
        setbackgroundInfoVisibility(true)
      }
      function backgroundInfo_onBlur() {
        setbackgroundInfoVisibility(false)
      }

      function fica_onFocus() {
        setFicaVisibility(true)
      }
      function fica_onBlur() {
        setFicaVisibility(false)
      }
      const location = useLocation();
    const { state } = location;

    const [FormData, setFormData] = useState({
        advisorId : state['advisor']['id'],
        formId : state['formId'],
        
        STIP_Underwritten_By: "",
        STIP_Branch_Name: "",
        STIP_Branch_Number: "",
        STIP_Quotation_Number: "",
        STIP_Policy_Number: "",
        STIP_Inception_Date: "",
        
        STIP_Applicant_Surname: "",
        STIP_Applicant_Gender : 2,
        STIP_Applicant_Initials: "",
        STIP_Applicant_Title: "",
        STIP_Applicant_DateofBirth: "",
        STIP_Applicant_IdNumber: "",
        STIP_Applicant_Email: "",
        STIP_Applicant_ContactNumber: "",

        STIP_General_Refused : 2,
        STIP_General_Risks : 2,
        STIP_General_LastDate: "",
        STIP_General_InsurerName: "",

        STIP_General_TypeOfLoss: "",
        STIP_General_LossYear: "",
        STIP_General_LossAmount: "",
        STIP_General_LossInsurer: "",
        
        STIP_CnRI_Existing_Company: "",
        STIP_CnRI_Replacement_Company: "",
        STIP_CnRI_Existing_Provider: "",
        STIP_CnRI_Replacement_Provider: "",
        STIP_CnRI_Existing_Product: "",
        STIP_CnRI_Replacement_Product: "",
            
        STIP_CnRI_1_Recomm : 2, 
        STIP_CnRI_1_Accepted : 2, 
        STIP_CnRI_1_CoverAmount : "", 
        STIP_CnRI_1_Premium1 : "", 
        STIP_CnRI_1_Premium2 : "", 
        STIP_CnRI_1_Excess1 : "", 
        STIP_CnRI_1_Excess2 : "", 
        
        STIP_CnRI_2_Recomm : 2, 
        STIP_CnRI_2_Accepted : 2, 
        STIP_CnRI_2_CoverAmount : "", 
        STIP_CnRI_2_Premium1 : "", 
        STIP_CnRI_2_Premium2 : "", 
        STIP_CnRI_2_Excess1 : "", 
        STIP_CnRI_2_Excess2 : "", 
        
        STIP_CnRI_3_Recomm : 2, 
        STIP_CnRI_3_Accepted : 2, 
        STIP_CnRI_3_CoverAmount : "", 
        STIP_CnRI_3_Premium1 : "", 
        STIP_CnRI_3_Premium2 : "", 
        STIP_CnRI_3_Excess1 : "", 
        STIP_CnRI_3_Excess2 : "", 
        
        STIP_CnRI_4_Recomm : 2, 
        STIP_CnRI_4_Accepted : 2, 
        STIP_CnRI_4_CoverAmount : "", 
        STIP_CnRI_4_Premium1 : "", 
        STIP_CnRI_4_Premium2 : "", 
        STIP_CnRI_4_Excess1 : "", 
        STIP_CnRI_4_Excess2 : "", 
        
        STIP_CnRI_4_Recomm : 2, 
        STIP_CnRI_4_Accepted : 2, 
        STIP_CnRI_4_CoverAmount : "", 
        STIP_CnRI_4_Premium1 : "", 
        STIP_CnRI_4_Premium2 : "", 
        STIP_CnRI_4_Excess1 : "", 
        STIP_CnRI_4_Excess2 : "", 
        
        STIP_CnRI_5_Recomm : 2, 
        STIP_CnRI_5_Accepted : 2, 
        STIP_CnRI_5_CoverAmount : "", 
        STIP_CnRI_5_Premium1 : "", 
        STIP_CnRI_5_Premium2 : "", 
        STIP_CnRI_5_Excess1 : "", 
        STIP_CnRI_5_Excess2 : "", 
        
        STIP_CnRI_6_Recomm : 2, 
        STIP_CnRI_6_Accepted : 2, 
        STIP_CnRI_6_CoverAmount : "", 
        STIP_CnRI_6_Premium1 : "", 
        STIP_CnRI_6_Premium2 : "", 
        STIP_CnRI_6_Excess1 : "", 
        STIP_CnRI_6_Excess2 : "", 
        
        STIP_CnRI_7_Recomm : 2, 
        STIP_CnRI_7_Accepted : 2, 
        STIP_CnRI_7_CoverAmount : "", 
        STIP_CnRI_7_Premium1 : "", 
        STIP_CnRI_7_Premium2 : "", 
        STIP_CnRI_7_Excess1 : "", 
        STIP_CnRI_7_Excess2 : "", 
        
        STIP_CnRI_8_Recomm : 2, 
        STIP_CnRI_8_Accepted : 2, 
        STIP_CnRI_8_CoverAmount : "", 
        STIP_CnRI_8_Premium1 : "", 
        STIP_CnRI_8_Premium2 : "", 
        STIP_CnRI_8_Excess1 : "", 
        STIP_CnRI_8_Excess2 : "", 
        
        STIP_CnRI_9_Recomm : 2, 
        STIP_CnRI_9_Accepted : 2, 
        STIP_CnRI_9_CoverAmount : "", 
        STIP_CnRI_9_Premium1 : "", 
        STIP_CnRI_9_Premium2 : "", 
        STIP_CnRI_9_Excess1 : "", 
        STIP_CnRI_9_Excess2 : "", 
        
        STIP_CnRI_10_Recomm : 2, 
        STIP_CnRI_10_Accepted : 2, 
        STIP_CnRI_10_CoverAmount : "", 
        STIP_CnRI_10_Premium1 : "", 
        STIP_CnRI_10_Premium2 : "", 
        STIP_CnRI_10_Excess1 : "", 
        STIP_CnRI_10_Excess2 : "", 
        
        STIP_CnRI_11_Recomm : 2, 
        STIP_CnRI_11_Accepted : 2, 
        STIP_CnRI_11_CoverAmount : "", 
        STIP_CnRI_11_Premium1 : "", 
        STIP_CnRI_11_Premium2 : "", 
        STIP_CnRI_11_Excess1 : "", 
        STIP_CnRI_11_Excess2 : "", 
        
        STIP_CnRI_12_Recomm : 2, 
        STIP_CnRI_12_Accepted : 2, 
        STIP_CnRI_12_CoverAmount : "", 
        STIP_CnRI_12_Premium1 : "", 
        STIP_CnRI_12_Premium2 : "", 
        STIP_CnRI_12_Excess1 : "", 
        STIP_CnRI_12_Excess2 : "", 
        
        STIP_CnRI_13_Recomm : 2, 
        STIP_CnRI_13_Accepted : 2, 
        STIP_CnRI_13_CoverAmount : "", 
        STIP_CnRI_13_Premium1 : "", 
        STIP_CnRI_13_Premium2 : "", 
        STIP_CnRI_13_Excess1 : "", 
        STIP_CnRI_13_Excess2 : "", 
        
        STIP_CnRI_14_Recomm : 2, 
        STIP_CnRI_14_Accepted : 2, 
        STIP_CnRI_14_CoverAmount : "", 
        STIP_CnRI_14_Premium1 : "", 
        STIP_CnRI_14_Premium2 : "", 
        STIP_CnRI_14_Excess1 : "", 
        STIP_CnRI_14_Excess2 : "", 
        
        STIP_CnRI_15_Recomm : 2, 
        STIP_CnRI_15_Accepted : 2, 
        STIP_CnRI_15_CoverAmount : "", 
        STIP_CnRI_15_Premium1 : "", 
        STIP_CnRI_15_Premium2 : "", 
        STIP_CnRI_15_Excess1 : "", 
        STIP_CnRI_15_Excess2 : "", 
        
        STIP_CnRI_16_Recomm : 2, 
        STIP_CnRI_16_Accepted : 2, 
        STIP_CnRI_16_CoverAmount : "", 
        STIP_CnRI_16_Premium1 : "", 
        STIP_CnRI_16_Premium2 : "", 
        STIP_CnRI_16_Excess1 : "", 
        STIP_CnRI_16_Excess2 : "", 
        
        STIP_CnRI_17_Recomm : 2, 
        STIP_CnRI_17_Accepted : 2, 
        STIP_CnRI_17_CoverAmount : "", 
        STIP_CnRI_17_Premium1 : "", 
        STIP_CnRI_17_Premium2 : "", 
        STIP_CnRI_17_Excess1 : "", 
        STIP_CnRI_17_Excess2 : "", 
        
        STIP_CnRI_18_Recomm : 2, 
        STIP_CnRI_18_Accepted : 2, 
        STIP_CnRI_18_CoverAmount : "", 
        STIP_CnRI_18_Premium1 : "", 
        STIP_CnRI_18_Premium2 : "", 
        STIP_CnRI_18_Excess1 : "", 
        STIP_CnRI_18_Excess2 : "", 
        
        STIP_CnRI_19_Recomm : 2, 
        STIP_CnRI_19_Accepted : 2, 
        STIP_CnRI_19_CoverAmount : "", 
        STIP_CnRI_19_Premium1 : "", 
        STIP_CnRI_19_Premium2 : "", 
        STIP_CnRI_19_Excess1 : "", 
        STIP_CnRI_19_Excess2 : "", 
        
        STIP_CnRI_20_Recomm : 2, 
        STIP_CnRI_20_Accepted : 2, 
        STIP_CnRI_20_CoverAmount : "", 
        STIP_CnRI_20_Premium1 : "", 
        STIP_CnRI_20_Premium2 : "", 
        STIP_CnRI_20_Excess1 : "", 
        STIP_CnRI_20_Excess2 : "", 
        
        STIP_CnRI_21_Recomm : 2, 
        STIP_CnRI_21_Accepted : 2, 
        STIP_CnRI_21_CoverAmount : "", 
        STIP_CnRI_21_Premium1 : "", 
        STIP_CnRI_21_Premium2 : "", 
        STIP_CnRI_21_Excess1 : "", 
        STIP_CnRI_21_Excess2 : "", 
        
        STIP_CnRI_22_Recomm : 2, 
        STIP_CnRI_22_Accepted : 2, 
        STIP_CnRI_22_CoverAmount : "", 
        STIP_CnRI_22_Premium1 : "", 
        STIP_CnRI_22_Premium2 : "", 
        STIP_CnRI_22_Excess1 : "", 
        STIP_CnRI_22_Excess2 : "", 
        
        STIP_CnRI_23_Recomm : 2, 
        STIP_CnRI_23_Accepted : 2, 
        STIP_CnRI_23_CoverAmount : "", 
        STIP_CnRI_23_Premium1 : "", 
        STIP_CnRI_23_Premium2 : "", 
        STIP_CnRI_23_Excess1 : "", 
        STIP_CnRI_23_Excess2 : "", 
        
        STIP_CnRI_24_Recomm : 2, 
        STIP_CnRI_24_Accepted : 2, 
        STIP_CnRI_24_CoverAmount : "", 
        STIP_CnRI_24_Premium1 : "", 
        STIP_CnRI_24_Premium2 : "", 
        STIP_CnRI_24_Excess1 : "", 
        STIP_CnRI_24_Excess2 : "", 
        
        STIP_CnRI_25_Recomm : 2, 
        STIP_CnRI_25_Accepted : 2, 
        STIP_CnRI_25_CoverAmount : "", 
        STIP_CnRI_25_Premium1 : "", 
        STIP_CnRI_25_Premium2 : "", 
        STIP_CnRI_25_Excess1 : "", 
        STIP_CnRI_25_Excess2 : "", 
        
        STIP_CnRI_26_Recomm : 2, 
        STIP_CnRI_26_Accepted : 2, 
        STIP_CnRI_26_CoverAmount : "", 
        STIP_CnRI_26_Premium1 : "", 
        STIP_CnRI_26_Premium2 : "", 
        STIP_CnRI_26_Excess1 : "", 
        STIP_CnRI_26_Excess2 : "", 
        
        STIP_CnRI_27_Recomm : 2,
        STIP_CnRI_27_Accepted : 2,
        STIP_CnRI_27_CoverAmount : "",
        STIP_CnRI_27_Premium1 : "",
        STIP_CnRI_27_Premium2 : "",
        STIP_CnRI_27_Excess1 : "",
        STIP_CnRI_27_Excess2 : "",

        STIP_CnRI_FeeCharges: "",
        STIP_CnRI_Commission: "",
        STIP_CnRI_TotalPremium: "",

        STIP_CnRen_Existing_Company: "",
        STIP_CnRen_Replacement_Company: "",
        STIP_CnRen_Existing_Provider: "",
        STIP_CnRen_Replacement_Provider: "",
        STIP_CnRen_Existing_Product: "",
        STIP_CnRen_Replacement_Product: "",
        
        STIP_CnRen_1_Recomm : 2, 
        STIP_CnRen_1_Accepted : 2, 
        STIP_CnRen_1_CoverAmount : "", 
        STIP_CnRen_1_Premium1 : "", 
        STIP_CnRen_1_Premium2 : "", 
        STIP_CnRen_1_Excess1 : "", 
        STIP_CnRen_1_Excess2 : "", 
        
        STIP_CnRen_2_Recomm : 2, 
        STIP_CnRen_2_Accepted : 2, 
        STIP_CnRen_2_CoverAmount : "", 
        STIP_CnRen_2_Premium1 : "", 
        STIP_CnRen_2_Premium2 : "", 
        STIP_CnRen_2_Excess1 : "", 
        STIP_CnRen_2_Excess2 : "", 
        
        STIP_CnRen_3_Recomm : 2, 
        STIP_CnRen_3_Accepted : 2, 
        STIP_CnRen_3_CoverAmount : "", 
        STIP_CnRen_3_Premium1 : "", 
        STIP_CnRen_3_Premium2 : "", 
        STIP_CnRen_3_Excess1 : "", 
        STIP_CnRen_3_Excess2 : "", 
        
        STIP_CnRen_4_Recomm : 2, 
        STIP_CnRen_4_Accepted : 2, 
        STIP_CnRen_4_CoverAmount : "", 
        STIP_CnRen_4_Premium1 : "", 
        STIP_CnRen_4_Premium2 : "", 
        STIP_CnRen_4_Excess1 : "", 
        STIP_CnRen_4_Excess2 : "", 
        
        STIP_CnRen_4_Recomm : 2, 
        STIP_CnRen_4_Accepted : 2, 
        STIP_CnRen_4_CoverAmount : "", 
        STIP_CnRen_4_Premium1 : "", 
        STIP_CnRen_4_Premium2 : "", 
        STIP_CnRen_4_Excess1 : "", 
        STIP_CnRen_4_Excess2 : "", 
        
        STIP_CnRen_5_Recomm : 2, 
        STIP_CnRen_5_Accepted : 2, 
        STIP_CnRen_5_CoverAmount : "", 
        STIP_CnRen_5_Premium1 : "", 
        STIP_CnRen_5_Premium2 : "", 
        STIP_CnRen_5_Excess1 : "", 
        STIP_CnRen_5_Excess2 : "", 
        
        STIP_CnRen_6_Recomm : 2, 
        STIP_CnRen_6_Accepted : 2, 
        STIP_CnRen_6_CoverAmount : "", 
        STIP_CnRen_6_Premium1 : "", 
        STIP_CnRen_6_Premium2 : "", 
        STIP_CnRen_6_Excess1 : "", 
        STIP_CnRen_6_Excess2 : "", 
        
        STIP_CnRen_7_Recomm : 2, 
        STIP_CnRen_7_Accepted : 2, 
        STIP_CnRen_7_CoverAmount : "", 
        STIP_CnRen_7_Premium1 : "", 
        STIP_CnRen_7_Premium2 : "", 
        STIP_CnRen_7_Excess1 : "", 
        STIP_CnRen_7_Excess2 : "", 
        
        STIP_CnRen_8_Recomm : 2, 
        STIP_CnRen_8_Accepted : 2, 
        STIP_CnRen_8_CoverAmount : "", 
        STIP_CnRen_8_Premium1 : "", 
        STIP_CnRen_8_Premium2 : "", 
        STIP_CnRen_8_Excess1 : "", 
        STIP_CnRen_8_Excess2 : "", 
        
        STIP_CnRen_9_Recomm : 2, 
        STIP_CnRen_9_Accepted : 2, 
        STIP_CnRen_9_CoverAmount : "", 
        STIP_CnRen_9_Premium1 : "", 
        STIP_CnRen_9_Premium2 : "", 
        STIP_CnRen_9_Excess1 : "", 
        STIP_CnRen_9_Excess2 : "", 
        
        STIP_CnRen_10_Recomm : 2, 
        STIP_CnRen_10_Accepted : 2, 
        STIP_CnRen_10_CoverAmount : "", 
        STIP_CnRen_10_Premium1 : "", 
        STIP_CnRen_10_Premium2 : "", 
        STIP_CnRen_10_Excess1 : "", 
        STIP_CnRen_10_Excess2 : "", 
        
        STIP_CnRen_11_Recomm : 2, 
        STIP_CnRen_11_Accepted : 2, 
        STIP_CnRen_11_CoverAmount : "", 
        STIP_CnRen_11_Premium1 : "", 
        STIP_CnRen_11_Premium2 : "", 
        STIP_CnRen_11_Excess1 : "", 
        STIP_CnRen_11_Excess2 : "", 
        
        STIP_CnRen_12_Recomm : 2, 
        STIP_CnRen_12_Accepted : 2, 
        STIP_CnRen_12_CoverAmount : "", 
        STIP_CnRen_12_Premium1 : "", 
        STIP_CnRen_12_Premium2 : "", 
        STIP_CnRen_12_Excess1 : "", 
        STIP_CnRen_12_Excess2 : "", 
        
        STIP_CnRen_13_Recomm : 2, 
        STIP_CnRen_13_Accepted : 2, 
        STIP_CnRen_13_CoverAmount : "", 
        STIP_CnRen_13_Premium1 : "", 
        STIP_CnRen_13_Premium2 : "", 
        STIP_CnRen_13_Excess1 : "", 
        STIP_CnRen_13_Excess2 : "", 
        
        STIP_CnRen_14_Recomm : 2, 
        STIP_CnRen_14_Accepted : 2, 
        STIP_CnRen_14_CoverAmount : "", 
        STIP_CnRen_14_Premium1 : "", 
        STIP_CnRen_14_Premium2 : "", 
        STIP_CnRen_14_Excess1 : "", 
        STIP_CnRen_14_Excess2 : "", 
        
        STIP_CnRen_15_Recomm : 2, 
        STIP_CnRen_15_Accepted : 2, 
        STIP_CnRen_15_CoverAmount : "", 
        STIP_CnRen_15_Premium1 : "", 
        STIP_CnRen_15_Premium2 : "", 
        STIP_CnRen_15_Excess1 : "", 
        STIP_CnRen_15_Excess2 : "", 
        
        STIP_CnRen_16_Recomm : 2, 
        STIP_CnRen_16_Accepted : 2, 
        STIP_CnRen_16_CoverAmount : "", 
        STIP_CnRen_16_Premium1 : "", 
        STIP_CnRen_16_Premium2 : "", 
        STIP_CnRen_16_Excess1 : "", 
        STIP_CnRen_16_Excess2 : "", 
        
        STIP_CnRen_17_Recomm : 2, 
        STIP_CnRen_17_Accepted : 2, 
        STIP_CnRen_17_CoverAmount : "", 
        STIP_CnRen_17_Premium1 : "", 
        STIP_CnRen_17_Premium2 : "", 
        STIP_CnRen_17_Excess1 : "", 
        STIP_CnRen_17_Excess2 : "", 
        
        STIP_CnRen_18_Recomm : 2, 
        STIP_CnRen_18_Accepted : 2, 
        STIP_CnRen_18_CoverAmount : "", 
        STIP_CnRen_18_Premium1 : "", 
        STIP_CnRen_18_Premium2 : "", 
        STIP_CnRen_18_Excess1 : "", 
        STIP_CnRen_18_Excess2 : "", 
        
        STIP_CnRen_19_Recomm : 2, 
        STIP_CnRen_19_Accepted : 2, 
        STIP_CnRen_19_CoverAmount : "", 
        STIP_CnRen_19_Premium1 : "", 
        STIP_CnRen_19_Premium2 : "", 
        STIP_CnRen_19_Excess1 : "", 
        STIP_CnRen_19_Excess2 : "", 
        
        STIP_CnRen_20_Recomm : 2, 
        STIP_CnRen_20_Accepted : 2, 
        STIP_CnRen_20_CoverAmount : "", 
        STIP_CnRen_20_Premium1 : "", 
        STIP_CnRen_20_Premium2 : "", 
        STIP_CnRen_20_Excess1 : "", 
        STIP_CnRen_20_Excess2 : "", 
        
        STIP_CnRen_21_Recomm : 2, 
        STIP_CnRen_21_Accepted : 2, 
        STIP_CnRen_21_CoverAmount : "", 
        STIP_CnRen_21_Premium1 : "", 
        STIP_CnRen_21_Premium2 : "", 
        STIP_CnRen_21_Excess1 : "", 
        STIP_CnRen_21_Excess2 : "", 
        
        STIP_CnRen_22_Recomm : 2, 
        STIP_CnRen_22_Accepted : 2, 
        STIP_CnRen_22_CoverAmount : "", 
        STIP_CnRen_22_Premium1 : "", 
        STIP_CnRen_22_Premium2 : "", 
        STIP_CnRen_22_Excess1 : "", 
        STIP_CnRen_22_Excess2 : "", 
        
        STIP_CnRen_23_Recomm : 2, 
        STIP_CnRen_23_Accepted : 2, 
        STIP_CnRen_23_CoverAmount : "", 
        STIP_CnRen_23_Premium1 : "", 
        STIP_CnRen_23_Premium2 : "", 
        STIP_CnRen_23_Excess1 : "", 
        STIP_CnRen_23_Excess2 : "", 
        
        STIP_CnRen_24_Recomm : 2, 
        STIP_CnRen_24_Accepted : 2, 
        STIP_CnRen_24_CoverAmount : "", 
        STIP_CnRen_24_Premium1 : "", 
        STIP_CnRen_24_Premium2 : "", 
        STIP_CnRen_24_Excess1 : "", 
        STIP_CnRen_24_Excess2 : "", 
        
        STIP_CnRen_25_Recomm : 2, 
        STIP_CnRen_25_Accepted : 2, 
        STIP_CnRen_25_CoverAmount : "", 
        STIP_CnRen_25_Premium1 : "", 
        STIP_CnRen_25_Premium2 : "", 
        STIP_CnRen_25_Excess1 : "", 
        STIP_CnRen_25_Excess2 : "", 
        
        STIP_CnRen_26_Recomm : 2, 
        STIP_CnRen_26_Accepted : 2, 
        STIP_CnRen_26_CoverAmount : "", 
        STIP_CnRen_26_Premium1 : "", 
        STIP_CnRen_26_Premium2 : "", 
        STIP_CnRen_26_Excess1 : "", 
        STIP_CnRen_26_Excess2 : "", 
        
        STIP_CnRen_27_Recomm : 2,
        STIP_CnRen_27_Accepted : 2,
        STIP_CnRen_27_CoverAmount : "",
        STIP_CnRen_27_Premium1 : "",
        STIP_CnRen_27_Premium2 : "",
        STIP_CnRen_27_Excess1 : "",
        STIP_CnRen_27_Excess2 : "",

        STIP_CnRen_FeeCharges: "",
        STIP_CnRen_Commission: "",
        STIP_CnRen_TotalPremium: "",

        STIP_CnRI_AdviseGiven : 2,
        STIP_CnRI_ReplacePurpose: "",
        STIP_CnRI_ReplaceReason: "",
        STIP_CnRI_ReplaceSupplier: "",

        STIP_HC_AddComments: "",
        STIP_HC_ResidentialArea: "",
        STIP_HC_StreetNumber: "",
        STIP_HC_PostalCode: "",
        STIP_HC_ResidenceType: "",
        STIP_HC_Flat_GroundLevel : 2,
        STIP_HC_WallConstruction : 2,
        STIP_HC_RoofConstruction : 2,
        STIP_HC_SM_BurglarBar : 2,
        STIP_HC_SM_SecurityGate : 2,
        STIP_HC_SM_AlarmSystem : 2,
        STIP_HC_SM_SecurityArea : 2,
        STIP_HC_NoClaimBonus: "",
        STIP_HC_SumInsured: "",
        STIP_HCEx_BusinessType: "",
        STIP_HCEx_InsuredAmount: "",
        STIP_HC_ADI_General1: 2,
        STIP_HC_ADI_General2: 2,
        STIP_HC_ADI_MechElecBreakdown: 2,
        STIP_HC_ADI_ElectronicalBreakdown: 2,
        STIP_HC_ADI_PowerSurgeCover1: 2,
        STIP_HC_ADI_PowerSurgeCover2: 2,
        STIP_HC_ADI_PowerSurgeCover3: 2,
        STIP_HC_Fee: "",
        STIP_HC_Commission: "",
        STIP_HC_TotalPremium: "",

        STIP_Build_AddComments: "",
        STIP_Build_ResidentialArea: "",
        STIP_Build_StreetNumber: "",
        STIP_Build_PostalCode: "",
        STIP_Build_ResidenceType: "",
        STIP_Build_Type: "",
        // STIP_Build_Flat_GroundLevel : 2,
        STIP_Build_Voluntary : 2,
        STIP_Build_SnL : 2,
        STIP_Build_ADI : 2,
        STIP_Build_WallConstruction : 2,
        STIP_Build_RoofConstruction : 2,
        STIP_Build_Fee: "",
        STIP_Build_Commission: "",
        STIP_Build_TotalPremium: "",
        STIP_Build_AdditionalAdvise: "",

        STIP_AddProp_AddComments: "",
        STIP_AddProp_ResidentialArea: "",
        STIP_AddProp_StreetNumber: "",
        STIP_AddProp_PostalCode: "",
        STIP_AddProp_ResidenceType: "",
        STIP_AddProp_Type: "",
        // STIP_AddProp_Flat_GroundLevel : "",
        STIP_AddProp_Voluntary : 2,
        STIP_AddProp_SnL : 2,
        STIP_AddProp_ADI : 2,
        STIP_AddProp_WallConstruction : 2,
        STIP_AddProp_RoofConstruction : 2,
        STIP_AddProp_Fee: "",
        STIP_AddProp_Commission: "",
        STIP_AddProp_TotalPremium: "",
        STIP_AddProp_AdditionalAdvise: "",

        STIP_Vehicle_AddComments: "",
        STIP_Vehicle_Owner: "",
        STIP_Vehicle_RegOwner: "",
        STIP_Vehicle_Usage: "",
        STIP_Vehicle_ONParkingOptions : 0,
        STIP_Vehicle_ONParking: "",
        STIP_Vehicle_ONOtherParking: "",
        STIP_Vehicle_CoverType : 0,
        STIP_Vehicle_SM1 : 2,
        STIP_Vehicle_SM2 : 2,
        STIP_Vehicle_SM3 : 2,
        STIP_Vehicle_SM4 : 2,
        STIP_Vehicle_Driver: "",
        STIP_Vehicle_DriverLicIssDate: "",
        STIP_Vehicle_LicCode: "",
        STIP_Vehicle_SumInsured: "",
        STIP_Vehicle_ClaimBonus: "",
        STIP_Vehicle_VoluntaryExcess : 2,
        STIP_Vehicle_Extras1 : 2,
        STIP_Vehicle_ExtrasAmount1: "",
        STIP_Vehicle_Extras2 : 2,
        STIP_Vehicle_ExtrasAmount2: "",
        STIP_Vehicle_Extras3 : 2,
        STIP_Vehicle_ExtrasAmount3: "",
        STIP_Vehicle_Extras4 : 2,
        STIP_Vehicle_ExtrasAmount4: "",
        STIP_Vehicle_Extras5 : 2,
        STIP_Vehicle_ExtrasAmount5: "",
        STIP_Vehicle_Extras6 : 2,
        STIP_Vehicle_ExtrasAmount6: "",
        STIP_Vehicle_Extras7 : 2,
        STIP_Vehicle_ExtrasAmount7: "",
        STIP_Vehicle_Extras8 : 2,
        STIP_Vehicle_ExtrasAmount8: "",
        STIP_Vehicle_Extras9 : 2,
        STIP_Vehicle_ExtrasAmount9: "",
        STIP_Vehicle_Extras10 : 2,
        STIP_Vehicle_ExtrasAmount10: "",
        STIP_Vehicle_Extras11 : 2,
        STIP_Vehicle_ExtrasAmount11: "",
        STIP_Vehicle_Extras12 : 2,
        STIP_Vehicle_ExtrasAmount12: "",
        STIP_Vehicle_Extras13 : 2,
        STIP_Vehicle_ExtrasAmount13: "",
        STIP_Vehicle_Extras14 : "",
        STIP_Vehicle_ExtrasAmount14: "",
        STIP_Vehicle_AC1 : 2,
        STIP_Vehicle_AC2 : 2,
        STIP_Vehicle_AC3 : 2,
        STIP_Vehicle_AC4 : 2,
        STIP_Vehicle_AC5 : 2,
        STIP_Vehicle_Fees: "",
        STIP_Vehicle_Commission: "",
        STIP_Vehicle_TotalPremium: "",
        STIP_Vehicle_Comments: "",
        
        STIP_MotorC_AddComments: "",
        STIP_MotorC_RegOwner: "",
        STIP_MotorC_Usage: "",
        STIP_MotorC_ONParkingOptions : 0,
        STIP_MotorC_ONParking: "",
        STIP_MotorC_ONOtherParking: "",
        STIP_MotorC_CoverType : 0,
        STIP_MotorC_Driver: 0,
        STIP_MotorC_Driver1: "",
        STIP_MotorC_DriverLicIssDate: "",
        STIP_MotorC_LicCode: "",
        STIP_MotorC_SumInsured: "",
        STIP_MotorC_ClaimBonus: "",
        STIP_MotorC_Fees: "",
        STIP_MotorC_Commission: "",
        STIP_MotorC_TotalPremium: "",
        STIP_MotorC_Comments: "",

        STIP_Trailer_AddComments: "",
        STIP_Trailer_RegOwner: "",
        STIP_Trailer_Type: "",
        STIP_Trailer_ONParkingOptions : 0,
        STIP_Trailer_ONOtherParking: "",
        STIP_Trailer_SumInsured: "",
        STIP_Trailer_ClaimBonus: "",
        STIP_Trailer_Fees: "",
        STIP_Trailer_Commission: "",
        STIP_Trailer_TotalPremium: "",
        STIP_Trailer_Comments: "",

        STIP_WaterC_AddComments: "",
        STIP_WaterC_RegOwner: "",
        STIP_WaterC_Type: "",
        STIP_WaterC_Hull: "",
        STIP_WaterC_SumInsured: "",
        STIP_WaterC_VIN: "",
        STIP_WaterC_EngineNumber: "",
        STIP_WaterC_OC_Glitter: "",
        STIP_WaterC_OC_SpecifiedAccessories: "",
        STIP_WaterC_OC_MotorType: "",
        STIP_WaterC_OC_Output: "",
        STIP_WaterC_Fees: "",
        STIP_WaterC_Commission: "",
        STIP_WaterC_TotalPremium: "",
        STIP_WaterC_Comments: "",

        STIP_PersonalLL_AddComments : 2,
        STIP_PersonalLL_IndemnityLimit : 2,
        STIP_PersonalLL_IndemnityLimitDetail : "",
        STIP_PersonalLL_Fees: "",
        STIP_PersonalLL_Commission: "",
        STIP_PersonalLL_TotalPremium: "",
        STIP_PersonalLL_Comments: "",

        STIP_LegalA_AddComments : 2,
        STIP_LegalA_IndemnityLimit : 2,
        STIP_LegalA_IndemnityLimitDetail : "",
        STIP_LegalA_Fees: "",
        STIP_LegalA_Commission: "",
        STIP_LegalA_TotalPremium: "",
        STIP_LegalA_Comments: "",

        STIP_ProductConsidered: "",
        STIP_ProductRecommended: "",
        STIP_ProductReasons: "",

        STIP_DbyI_AddComments: "",
        STIP_DbyI_IName: "",
        STIP_DbyI_Code: "",
        STIP_DbyI_Signature: "",
        STIP_DbyI_Date: "",

        // STIP_MSA_ClientName: "",
        // STIP_MSA_ClientIdNumber: "",
        // STIP_MSA_ClientAddress: "",
        // STIP_MSA_ClientEmail: "",
        // STIP_MSA_ClientPhone: "",
        // STIP_MSA_ClientDate: "",

        // STIP_MSA_Name: "",
        // STIP_MSA_MaritalStatus: "",
        // STIP_MSA_Gender: "",
        // STIP_MSA_Occupation: "",
        // STIP_MSA_Income: "",
        // STIP_MSA_Subsidy: "",
        // STIP_MSA_Dependant: "",
        // STIP_MSA_Spouse: "",
        // STIP_MSA_AdultDependant: "",
        // STIP_MSA_ChronicM: "",
        // STIP_MSA_ChronicS: "",
        // STIP_MSA_ChronicAD: "",
        // STIP_MSA_ChronicC: "",
        // STIP_MSA_ChronicOC: "",
        // STIP_MSA_PFromDate: "",
        // STIP_MSA_PTODate: "",

        // STIP_BackInfo: "",
        
        // STIP_SNA_Needs1 : 2,
        // STIP_SNA_Comments1: "",
        // STIP_SNA_Needs2 : 2,
        // STIP_SNA_Comments2: "",
        // STIP_SNA_Needs3 : 2,
        // STIP_SNA_Comments3: "",
        // STIP_SNA_Needs4 : 2,
        // STIP_SNA_Comments4: "",
        // STIP_SNA_Needs5 : 2,
        // STIP_SNA_Comments5: "",
        // STIP_SNA_Needs6 : 2,
        // STIP_SNA_Comments6: "",
        // STIP_SNA_Needs7 : 2,
        // STIP_SNA_Comments7: "",
        // STIP_SNA_Needs8 : 2,
        // STIP_SNA_Comments8: "",
        // STIP_SNA_Needs9 : 2,
        // STIP_SNA_Comments9: "",
        // STIP_SNA_Needs10 : 2,
        // STIP_SNA_Comments10: "",
        
        // STIP_CoMAB_Current1: 2,
        // STIP_CoMAB_Replaced1: "",
        // STIP_CoMAB_Current2: 2,
        // STIP_CoMAB_Replaced2: "",
        // STIP_CoMAB_Current3: 2,
        // STIP_CoMAB_Replaced3: "",
        // STIP_CoMAB_Current4: 2,
        // STIP_CoMAB_Replaced4: "",
        // STIP_CoMAB_Current5: 2,
        // STIP_CoMAB_Replaced5: "",
        // STIP_CoMAB_Current6: 2,
        // STIP_CoMAB_Replaced6: "",
        // STIP_CoMAB_Current7: 2,
        // STIP_CoMAB_Replaced7: "",
        // STIP_CoMAB_Current8: 2,
        // STIP_CoMAB_Replaced8: "",
        // STIP_CoMAB_Current9: 2,
        // STIP_CoMAB_Replaced9: "",
        // STIP_CoMAB_Current10: 2,
        // STIP_CoMAB_Replaced10: "",
        // STIP_CoMAB_Current11: 2,
        // STIP_CoMAB_Replaced11: "",
        // STIP_CoMAB_Current12: 2,
        // STIP_CoMAB_Replaced12: "",

        // STIP_SectionD_SnF: "",
        // STIP_SectionE_PMB: "",

        // STIP_SectionF_NotAccepted: "",
        // STIP_SectionF_Reasons: "",
        // STIP_SectionF_Consequences : 2,
        // STIP_SectionF_Fee: "",
        // STIP_SectionF_Comments: "",
        // STIP_SectionF_Date: "",
        // STIP_SectionF_ClientName: "",

      });
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})

      const createSTIPForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_short_term_personal_data/`, Body ,config)
            // console.log(response.data['formData'])
            if (response.status === 201) {
                setFormData(response.data['formData'])
            } else {
                setFormData(response.data['formData'])
                setLossType(response.data['Loss_Data'])
                setSection_HC(response.data['Sec_HC_Data'])
                setSection_Build(response.data['Sec_Build_Data'])
                setSection_LegalA(response.data['Sec_LegalA_Data'])
                setSection_PersonalLL(response.data['Sec_PersonalLL_Data'])
                setSection_WaterC(response.data['Sec_WaterC_Data'])
                setSection_MotorC(response.data['Sec_MotorC_Data'])
                setSection_AddProp(response.data['Sec_AddProp_Data'])
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
        }
      }
      const [SuccessMessage, setSuccessMessage] = useState("")
      const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
      const updateForm = async() => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(FormData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_short_term_personal_data/`, Body ,config)
            // console.log(response.data['formData'])
            // setFormData(response.data['formData'])
            setSuccessMessage("Short Term Insurance Personal data is successfully updated")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
            }, 5000)
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
        }
        
        const Loss_Data_Body = JSON.stringify({
          "formId" : state['formId'],
          "loss_data" : LossType
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_loss_Data/`, Loss_Data_Body ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_HC_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_hc_data" : Section_HC
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_hc_Data/`, Sec_HC_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_Build_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_build_data" : Section_Build
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_build_Data/`, Sec_Build_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_AddProp_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_addprop_data" : Section_AddProp
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_addprop_Data/`, Sec_AddProp_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_Vehicle_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_vehicle_data" : Section_Vehicle
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_vehicle_Data/`, Sec_Vehicle_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_MotorC_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_motorc_data" : Section_MotorC
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_motorc_Data/`, Sec_MotorC_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_WaterC_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_waterc_data" : Section_WaterC
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_waterc_Data/`, Sec_WaterC_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_PersonalLL_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_personalll_data" : Section_PersonalLL
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_personal_Data/`, Sec_PersonalLL_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        const Sec_LegalA_Data = JSON.stringify({
          "formId" : state['formId'],
          "sec_legala_data" : Section_LegalA
        })
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_stip_sec_legala_Data/`, Sec_LegalA_Data ,config) 
        } catch (error) {
          if (error.response.status === 401){
            setSuccessMessage("Login time out, You will be logged out in 5 seconds")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
              LogOut()
            }, 5000)
          }
        }
        
      }
      const onSubmit = e => {
        e.preventDefault()
        updateForm()
        // window.location.reload();
      }
      
      const onFieldBlur = e => {
        updateForm()
      }

      // Loss Type
      const [LossType, setLossType] = useState([])
      const AddNewLossType = (e) => {
        const current = [...LossType]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          General_TypeOfLoss : "",  
          General_LossYear : "",
          General_LossAmount : "",
          General_LossInsurer : "",
        })
        setLossType(current)
      }
      const RemoveNewLossType = (e) => {
          const current = [...LossType]
          current.pop()
          setLossType(current)
      }
      const on_LossType_Change = (e, i) => {
          let newLossType = [...LossType]
          newLossType[i][e.target.name] = e.target.value
          setLossType(newLossType)
      }
      // const on_LossType_Value_Change = (i, name, value) => {
      //     let newLossType = [...LossType]
      //     newLossType[i][name] = value
      //     setLossType(newLossType)
      // }
      
      const on_LossType_Value_Change = (name, i, val) => {
        let newLossType = [...LossType]
        newLossType[i][""+name+""] = val
        setLossType(newLossType)
      }
      // End Loss Type

      // Section HC
      const [Section_HC, setSection_HC] = useState([])
      const AddNewSection_HC = (e) => {
        const current = [...Section_HC]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          HC_AddComments: "",
          HC_ResidentialArea: "",
          HC_StreetNumber: "",
          HC_PostalCode: "",
          HC_ResidenceType: "",
          HC_Flat_GroundLevel : 2,
          HC_WallConstruction : 2,
          HC_RoofConstruction : 2,
          HC_SM_BurglarBar : 2,
          HC_SM_SecurityGate : 2,
          HC_SM_AlarmSystem : 2,
          HC_SM_SecurityArea : 2,
          HC_NoClaimBonus: "",
          HC_SumInsured: "",
          HCEx_BusinessType: "",
          HCEx_InsuredAmount: "",
          HC_ADI_General1: 2,
          HC_ADI_General2: 2,
          HC_ADI_MechElecBreakdown: 2,
          HC_ADI_ElectronicalBreakdown: 2,
          HC_ADI_PowerSurgeCover1: 2,
          HC_ADI_PowerSurgeCover2: 2,
          HC_ADI_PowerSurgeCover3: 2,
          HC_Fee: "",
          HC_Commission: "",
          HC_TotalPremium: "",

        })
        setSection_HC(current)
      }
      const RemoveNewSection_HC = (e) => {
          const current = [...Section_HC]
          current.pop()
          setSection_HC(current)
      }
      const on_Section_HC_Change = (e, i) => {
          let newSection_HC = [...Section_HC]
          newSection_HC[i][e.target.name] = e.target.value
          setSection_HC(newSection_HC)
      }      
      const on_Section_HC_Value_Change = (name, i, val) => {
        let newSection_HC = [...Section_HC]
        newSection_HC[i][""+name+""] = val
        setSection_HC(newSection_HC)
      }

      const on_Section_HC_CheckBox_Change = (e, i, value) => {
        let newSection_HC = [...Section_HC]
        newSection_HC[i][e.target.name] = value
        setSection_HC(newSection_HC)
      }
      // End Section HC


      // Section Build
      const [Section_Build, setSection_Build] = useState([])
      const AddNewSection_Build = (e) => {
        const current = [...Section_Build]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          Build_AddComments: "",
          Build_ResidentialArea: "",
          Build_StreetNumber: "",
          Build_PostalCode: "",
          Build_ResidenceType: "",
          Build_Type: "",
          Build_Voluntary : 2,
          Build_SnL : 2,
          Build_ADI : 2,
          Build_WallConstruction : 2,
          Build_RoofConstruction : 2,
          Build_Fee: "",
          Build_Commission: "",
          Build_TotalPremium: "",
          Build_AdditionalAdvise: "",

        })
        setSection_Build(current)
      }
      const RemoveNewSection_Build = (e) => {
          const current = [...Section_Build]
          current.pop()
          setSection_Build(current)
      }
      const on_Section_Build_Change = (e, i) => {
          let newSection_Build = [...Section_Build]
          newSection_Build[i][e.target.name] = e.target.value
          setSection_Build(newSection_Build)
      }      
      const on_Section_Build_Value_Change = (name, i, val) => {
        let newSection_Build = [...Section_Build]
        newSection_Build[i][""+name+""] = val
        setSection_Build(newSection_Build)
      }

      const on_Section_Build_CheckBox_Change = (e, i, value) => {
        let newSection_Build = [...Section_Build]
        newSection_Build[i][e.target.name] = value
        setSection_Build(newSection_Build)
      }
      // End Section Build

      // Section AddProp
      const [Section_AddProp, setSection_AddProp] = useState([])
      const AddNewSection_AddProp = (e) => {
        const current = [...Section_AddProp]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          AddProp_AddComments: "",
          AddProp_ResidentialArea: "",
          AddProp_StreetNumber: "",
          AddProp_PostalCode: "",
          AddProp_ResidenceType: "",
          AddProp_Type: "",
          AddProp_Voluntary : 2,
          AddProp_SnL : 2,
          AddProp_ADI : 2,
          AddProp_WallConstruction : 2,
          AddProp_RoofConstruction : 2,
          AddProp_Fee: "",
          AddProp_Commission: "",
          AddProp_TotalPremium: "",
          AddProp_AdditionalAdvise: "",

        })
        setSection_AddProp(current)
      }
      const RemoveNewSection_AddProp = (e) => {
          const current = [...Section_AddProp]
          current.pop()
          setSection_AddProp(current)
      }
      const on_Section_AddProp_Change = (e, i) => {
          let newSection_AddProp = [...Section_AddProp]
          newSection_AddProp[i][e.target.name] = e.target.value
          setSection_AddProp(newSection_AddProp)
      }      
      const on_Section_AddProp_Value_Change = (name, i, val) => {
        let newSection_AddProp = [...Section_AddProp]
        newSection_AddProp[i][""+name+""] = val
        setSection_AddProp(newSection_AddProp)
      }

      const on_Section_AddProp_CheckBox_Change = (e, i, value) => {
        let newSection_AddProp = [...Section_AddProp]
        newSection_AddProp[i][e.target.name] = value
        setSection_AddProp(newSection_AddProp)
      }
      // End Section AddProp

      // Section Vehicle
      const [Section_Vehicle, setSection_Vehicle] = useState([])
      const AddNewSection_Vehicle = (e) => {
        const current = [...Section_Vehicle]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          Vehicle_AddComments: "",
          Vehicle_Owner: "",
          Vehicle_RegOwner: "",
          Vehicle_Usage: "",
          Vehicle_ONParkingOptions : 0,
          Vehicle_ONParking: "",
          Vehicle_ONOtherParking: "",
          Vehicle_CoverType : 0,
          Vehicle_SM1 : 2,
          Vehicle_SM2 : 2,
          Vehicle_SM3 : 2,
          Vehicle_SM4 : 2,
          Vehicle_Driver: "",
          Vehicle_DriverLicIssDate: "",
          Vehicle_LicCode: "",
          Vehicle_SumInsured: "",
          Vehicle_ClaimBonus: "",
          Vehicle_VoluntaryExcess : 2,
          Vehicle_Extras1 : 2,
          Vehicle_ExtrasAmount1: "",
          Vehicle_Extras2 : 2,
          Vehicle_ExtrasAmount2: "",
          Vehicle_Extras3 : 2,
          Vehicle_ExtrasAmount3: "",
          Vehicle_Extras4 : 2,
          Vehicle_ExtrasAmount4: "",
          Vehicle_Extras5 : 2,
          Vehicle_ExtrasAmount5: "",
          Vehicle_Extras6 : 2,
          Vehicle_ExtrasAmount6: "",
          Vehicle_Extras7 : 2,
          Vehicle_ExtrasAmount7: "",
          Vehicle_Extras8 : 2,
          Vehicle_ExtrasAmount8: "",
          Vehicle_Extras9 : 2,
          Vehicle_ExtrasAmount9: "",
          Vehicle_Extras10 : 2,
          Vehicle_ExtrasAmount10: "",
          Vehicle_Extras11 : 2,
          Vehicle_ExtrasAmount11: "",
          Vehicle_Extras12 : 2,
          Vehicle_ExtrasAmount12: "",
          Vehicle_Extras13 : 2,
          Vehicle_ExtrasAmount13: "",
          Vehicle_Extras14 : "",
          Vehicle_ExtrasAmount14: "",
          Vehicle_AC1 : 2,
          Vehicle_AC2 : 2,
          Vehicle_AC3 : 2,
          Vehicle_AC4 : 2,
          Vehicle_AC5 : 2,
          Vehicle_Fees: "",
          Vehicle_Commission: "",
          Vehicle_TotalPremium: "",
          Vehicle_Comments: "",

        })
        setSection_Vehicle(current)
      }
      const RemoveNewSection_Vehicle = (e) => {
          const current = [...Section_Vehicle]
          current.pop()
          setSection_Vehicle(current)
      }
      const on_Section_Vehicle_Change = (e, i) => {
          let newSection_Vehicle = [...Section_Vehicle]
          newSection_Vehicle[i][e.target.name] = e.target.value
          setSection_Vehicle(newSection_Vehicle)
      }      
      const on_Section_Vehicle_Value_Change = (name, i, val) => {
        let newSection_Vehicle = [...Section_Vehicle]
        newSection_Vehicle[i][""+name+""] = val
        setSection_Vehicle(newSection_Vehicle)
      }

      const on_Section_Vehicle_CheckBox_Change = (e, i, value) => {
        let newSection_Vehicle = [...Section_Vehicle]
        newSection_Vehicle[i][e.target.name] = value
        setSection_Vehicle(newSection_Vehicle)
      }
      // End Section Vehicle

      // Section MotorC
      const [Section_MotorC, setSection_MotorC] = useState([])
      const AddNewSection_MotorC = (e) => {
        const current = [...Section_MotorC]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          MotorC_AddComments: "",
          MotorC_RegOwner: "",
          MotorC_Usage: "",
          MotorC_ONParkingOptions : 0,
          MotorC_ONParking: "",
          MotorC_ONOtherParking: "",
          MotorC_CoverType : 0,
          MotorC_Driver: 0,
          MotorC_Driver1: "",
          MotorC_DriverLicIssDate: "",
          MotorC_LicCode: "",
          MotorC_SumInsured: "",
          MotorC_ClaimBonus: "",
          MotorC_Fees: "",
          MotorC_Commission: "",
          MotorC_TotalPremium: "",
          MotorC_Comments: "",

        })
        setSection_MotorC(current)
      }
      const RemoveNewSection_MotorC = (e) => {
          const current = [...Section_MotorC]
          current.pop()
          setSection_MotorC(current)
      }
      const on_Section_MotorC_Change = (e, i) => {
          let newSection_MotorC = [...Section_MotorC]
          newSection_MotorC[i][e.target.name] = e.target.value
          setSection_MotorC(newSection_MotorC)
      }      
      const on_Section_MotorC_Value_Change = (name, i, val) => {
        let newSection_MotorC = [...Section_MotorC]
        newSection_MotorC[i][""+name+""] = val
        setSection_MotorC(newSection_MotorC)
      }

      const on_Section_MotorC_CheckBox_Change = (e, i, value) => {
        let newSection_MotorC = [...Section_MotorC]
        newSection_MotorC[i][e.target.name] = value
        setSection_MotorC(newSection_MotorC)
      }
      // End Section MotorC

      // Section Trailer
      const [Section_Trailer, setSection_Trailer] = useState([])
      const AddNewSection_Trailer = (e) => {
        const current = [...Section_Trailer]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          Trailer_AddComments: "",
          Trailer_RegOwner: "",
          Trailer_Type: "",
          Trailer_ONParkingOptions : 0,
          Trailer_ONOtherParking: "",
          Trailer_SumInsured: "",
          Trailer_ClaimBonus: "",
          Trailer_Fees: "",
          Trailer_Commission: "",
          Trailer_TotalPremium: "",
          Trailer_Comments: "",

        })
        setSection_Trailer(current)
      }
      const RemoveNewSection_Trailer = (e) => {
          const current = [...Section_Trailer]
          current.pop()
          setSection_Trailer(current)
      }
      const on_Section_Trailer_Change = (e, i) => {
          let newSection_Trailer = [...Section_Trailer]
          newSection_Trailer[i][e.target.name] = e.target.value
          setSection_Trailer(newSection_Trailer)
      }      
      const on_Section_Trailer_Value_Change = (name, i, val) => {
        let newSection_Trailer = [...Section_Trailer]
        newSection_Trailer[i][""+name+""] = val
        setSection_Trailer(newSection_Trailer)
      }

      const on_Section_Trailer_CheckBox_Change = (e, i, value) => {
        let newSection_Trailer = [...Section_Trailer]
        newSection_Trailer[i][e.target.name] = value
        setSection_Trailer(newSection_Trailer)
      }
      // End Section Trailer

      // Section WaterC
      const [Section_WaterC, setSection_WaterC] = useState([])
      const AddNewSection_WaterC = (e) => {
        const current = [...Section_WaterC]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          WaterC_AddComments: "",
          WaterC_RegOwner: "",
          WaterC_Type: "",
          WaterC_Hull: "",
          WaterC_SumInsured: "",
          WaterC_VIN: "",
          WaterC_EngineNumber: "",
          WaterC_OC_Glitter: "",
          WaterC_OC_SpecifiedAccessories: "",
          WaterC_OC_MotorType: "",
          WaterC_OC_Output: "",
          WaterC_Fees: "",
          WaterC_Commission: "",
          WaterC_TotalPremium: "",
          WaterC_Comments: "",

        })
        setSection_WaterC(current)
      }
      const RemoveNewSection_WaterC = (e) => {
          const current = [...Section_WaterC]
          current.pop()
          setSection_WaterC(current)
      }
      const on_Section_WaterC_Change = (e, i) => {
          let newSection_WaterC = [...Section_WaterC]
          newSection_WaterC[i][e.target.name] = e.target.value
          setSection_WaterC(newSection_WaterC)
      }      
      const on_Section_WaterC_Value_Change = (name, i, val) => {
        let newSection_WaterC = [...Section_WaterC]
        newSection_WaterC[i][""+name+""] = val
        setSection_WaterC(newSection_WaterC)
      }

      const on_Section_WaterC_CheckBox_Change = (e, i, value) => {
        let newSection_WaterC = [...Section_WaterC]
        newSection_WaterC[i][e.target.name] = value
        setSection_WaterC(newSection_WaterC)
      }
      // End Section WaterC

      // Section PersonalLL
      const [Section_PersonalLL, setSection_PersonalLL] = useState([])
      const AddNewSection_PersonalLL = (e) => {
        const current = [...Section_PersonalLL]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          PersonalLL_AddComments : 2,
          PersonalLL_IndemnityLimit : 2,
          PersonalLL_IndemnityLimitDetail : "",
          PersonalLL_Fees: "",
          PersonalLL_Commission: "",
          PersonalLL_TotalPremium: "",
          PersonalLL_Comments: "",

        })
        setSection_PersonalLL(current)
      }
      const RemoveNewSection_PersonalLL = (e) => {
          const current = [...Section_PersonalLL]
          current.pop()
          setSection_PersonalLL(current)
      }
      const on_Section_PersonalLL_Change = (e, i) => {
          let newSection_PersonalLL = [...Section_PersonalLL]
          newSection_PersonalLL[i][e.target.name] = e.target.value
          setSection_PersonalLL(newSection_PersonalLL)
      }      
      const on_Section_PersonalLL_Value_Change = (name, i, val) => {
        let newSection_PersonalLL = [...Section_PersonalLL]
        newSection_PersonalLL[i][""+name+""] = val
        setSection_PersonalLL(newSection_PersonalLL)
      }

      const on_Section_PersonalLL_CheckBox_Change = (e, i, value) => {
        let newSection_PersonalLL = [...Section_PersonalLL]
        newSection_PersonalLL[i][e.target.name] = value
        setSection_PersonalLL(newSection_PersonalLL)
      }
      // End Section PersonalLL

      // Section LegalA
      const [Section_LegalA, setSection_LegalA] = useState([])
      const AddNewSection_LegalA = (e) => {
        const current = [...Section_LegalA]
        current.push({
          advisorId : state['advisor']['id'],  
          formId : state['formId'],  
          
          LegalA_AddComments : 2,
          LegalA_IndemnityLimit : 2,
          LegalA_IndemnityLimitDetail : "",
          LegalA_Fees: "",
          LegalA_Commission: "",
          LegalA_TotalPremium: "",
          LegalA_Comments: "",

        })
        setSection_LegalA(current)
      }
      const RemoveNewSection_LegalA = (e) => {
          const current = [...Section_LegalA]
          current.pop()
          setSection_LegalA(current)
      }
      const on_Section_LegalA_Change = (e, i) => {
          let newSection_LegalA = [...Section_LegalA]
          newSection_LegalA[i][e.target.name] = e.target.value
          setSection_LegalA(newSection_LegalA)
      }      
      const on_Section_LegalA_Value_Change = (name, i, val) => {
        let newSection_LegalA = [...Section_LegalA]
        newSection_LegalA[i][""+name+""] = val
        setSection_LegalA(newSection_LegalA)
      }

      const on_Section_LegalA_CheckBox_Change = (e, i, value) => {
        let newSection_LegalA = [...Section_LegalA]
        newSection_LegalA[i][e.target.name] = value
        setSection_LegalA(newSection_LegalA)
      }
      // End Section LegalA

      // console.log(FormData)
      useEffect(() => {
        if (state['formId']){
          createSTIPForm(FormData)
        }
        // const interval = setInterval(() => {
        //   const STIPFormSubmitButton = document.querySelector(".updateSTIPFormBTN")
        //   STIPFormSubmitButton.click()
        // }, 10000)
        // return () => {
        //     clearInterval(interval);
        // }
      }, []);
      // setTimeout(() => {
      //   setSuccessMessageVisibility("none")
      // }, 5000);
      
    return(
        <>
         <br/>
        <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SHORT-TERM INSURANCE: PERSONAL LINES</b></div>
       <hr/>
       <div className="notification_container">
          <div className={
              state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "alert alert-sfp-success fade show" 
              : state['advisor']['email'].includes('fs4p') ? "alert alert-fs4p-success fade show" 
              : state['advisor']['email'].includes('sanlam') ? "alert alert-sanlam-success fade show" 
              : "alert alert-sfp-success fade show"
          } style={{display: SuccessMessageVisibility}} role="alert">
          {SuccessMessage}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
          </div>
        </div>
       <form onSubmit={e => onSubmit(e)}>
       
       <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) 
            processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to 
            SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on 
            <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
        </p>
       <hr/>
       <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label className="col-form-label"><b>Very Important:</b></label>
                        </div>
                        <div className="col-8">
                            <p>You are strongly advised to study your policy to acquaint yourself with the detail of all special terms and conditions for liability. If you have any questions or queries regarding the terms of your policy contract, you are advised to immediately contact the intermediary whose details appear in the sections below so that these issues can be addressed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <p>This document serves to record advice and the basis on which it was given. Kindly safeguard this record for future reference.</p>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">

            {/* <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Company:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Underwritten_By" name='STIP_Underwritten_By' value={FormData['STIP_Underwritten_By']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div> */}
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Quotation number:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Quotation_Number" name='STIP_Quotation_Number' value={FormData['STIP_Quotation_Number']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            {/* <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Branch name:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Branch_Name" name='STIP_Branch_Name' value={FormData['STIP_Branch_Name']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Branch number:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Branch_Number" name='STIP_Branch_Number' value={FormData['STIP_Branch_Number']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <hr/> */}

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Policy Number</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Policy_Number" name='STIP_Policy_Number' value={FormData['STIP_Policy_Number']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Inception date:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="STIP_Inception_Date" name='STIP_Inception_Date' value={FormData['STIP_Inception_Date']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

        </div>
    </div>

    <br/>
    <div className="text-start "style={{fontSize:'20px',fontFamily:'Arial Bold'}}>
        <b>INFORMATION ON ITEMS AND RISKS TO BE INSURED</b>
    </div>

<hr/>
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label className="col-form-label"><b>Note:</b></label>
                        </div>
                        <div className="col-8">
                            <p>If any section needs to be completed more than what is provided for (e.g., for more than one motorcycle), you may duplicate the section by clicking on the ‘+’ on the bottom right-hand corner of the section.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>

        <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>DETAILS OF APPLICANT</b></div>
        <hr/>
        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Surname:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Applicant_Surname" name='STIP_Applicant_Surname' value={FormData['STIP_Applicant_Surname']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Gender:</b></label>
                    </div>
                    <div className="col-6">
                      <div className="row col-6 align-items-center">
                        <div className="col-3">
                            <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Applicant_Gender"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Applicant_Gender" name="STIP_Applicant_Gender" />
                        </div>
                        <div className="col-3">
                            <label className="form-check-label"  >
                                Male
                            </label>
                        </div>
                        <div className="col-3">
                            <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Applicant_Gender"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Applicant_Gender" name="STIP_Applicant_Gender" />
                        </div>
                        <div className="col-3">
                            <label className="form-check-label"  >
                                Female
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Initials:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Applicant_Initials" name='STIP_Applicant_Initials' value={FormData['STIP_Applicant_Initials']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Title:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Applicant_Title" name='STIP_Applicant_Title' value={FormData['STIP_Applicant_Title']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Date of birth</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="STIP_Applicant_DateofBirth" name='STIP_Applicant_DateofBirth' value={FormData['STIP_Applicant_DateofBirth']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Identity Number:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Applicant_IdNumber" name='STIP_Applicant_IdNumber' value={FormData['STIP_Applicant_IdNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Email Address:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Applicant_Email" name='STIP_Applicant_Email' value={FormData['STIP_Applicant_Email']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Contact Number:</b></label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Applicant_ContactNumber" name='STIP_Applicant_ContactNumber' value={FormData['STIP_Applicant_ContactNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

        </div>
    </div>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>GENERAL</b></div>
    <hr/>

    <div className="row g-3 align-items-center">
        <div className="col-6">
            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">3.	Has an insurer ever refused any proposal of yours, cancelled any policy (or section thereof), refused to renew any policy (or section thereof), or imposed any special conditions?</label>
        </div>
        <div className="col-6">
          <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_General_Refused"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_General_Refused" name="STIP_General_Refused" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_General_Refused"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_General_Refused" name="STIP_General_Refused" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      No
                  </label>
              </div>
          </div>
        </div>
        <div className="col-11" id="letter_of_introduction_2">
            {
                letterOfIntroductionVisibility ?
                <>
                    <div id="letter_of_introduction_instructions" className="hidden_class">
                        <p>If yes, provide details</p>
                    </div>
                </> :
                null
            }
            {/* <textarea  id="STIP_General_RefusedDetails" name='STIP_General_RefusedDetails' value={FormData['STIP_General_RefusedDetails']} onChange={(e) => {onChange(e)}} onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If yes, provide details" aria-describedby="" ></textarea> */}
            <Editor
              value={FormData['STIP_General_RefusedDetails']}
              onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_General_RefusedDetails']: newText }) }}
              onFocus={(e)=>{letter_of_introduction_onFocus()}}
              onBlur={(e)=>{letter_of_introduction_onBlur();onFieldBlur(e)}}                      
              name="STIP_General_RefusedDetails"
              init={{
                  selector: "textarea",
                  browser_spellcheck : true,
                  placeholder: "If yes, provide details",
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
                  'removeformat | wordcount ',
                  content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
              }}
            />
            </div>
    </div>
    <hr/>

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">4.	Are you currently insured against the risks you are applying for?  </label>
                </div>
                <div className="col-6">
                <div className="row col-6 align-items-center">
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_General_Risks"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_General_Risks" name="STIP_General_Risks" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            Yes
                        </label>
                    </div>
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_General_Risks"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_General_Risks" name="STIP_General_Risks" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            No
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-11" id="provided_identity_2" >
                {
                    FicaVisibility ?
                    <>
                        <div id="provided_identity_instructions" className="hidden_class">
                            <p>If yes,provide name of the issuer</p>
                        </div>
                    </> : 
                    null
                }
                {/* <textarea  id="STIP_General_RisksDetails" name='STIP_General_RisksDetails' value={FormData['STIP_General_RisksDetails']} onChange={(e) => {onChange(e)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If yes,provide name of the issuer" aria-describedby="" ></textarea> */}
                <Editor
                  value={FormData['STIP_General_RisksDetails']}
                  onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_General_RisksDetails']: newText }) }}
                  onFocus={(e)=>{fica_onFocus()}}
                  onBlur={(e)=>{fica_onBlur();onFieldBlur(e)}}                      
                  name="STIP_General_RisksDetails"
                  init={{
                      selector: "textarea",
                      browser_spellcheck : true,
                      placeholder: "If yes,provide name of the issuer",
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
                      'removeformat | wordcount ',
                      content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                  }}
                />
                </div>
            </div>
            <hr/>

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">5.	If you were previously insured but currently NOT, provide the following:  </label>
                </div>
            </div>
           
        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label">Last date of insurance: </label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="STIP_General_LastDate" name='STIP_General_LastDate' value={FormData['STIP_General_LastDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click or tap to enter date."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label">Name of insurer: </label>
                    </div>
                    <div className="col-6">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_General_InsurerName" name='STIP_General_InsurerName' value={FormData['STIP_General_InsurerName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click or tap to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            

            </div>
        </div>
        <hr/>
            <div className="row g-3 align-items-center">
                <div className="col-10">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">6.	Provide full details of any losses you have experienced during the last 3 years, including claims that have been paid or not been paid.   </label>
                </div>
            </div>

<br/>
<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
    <div className="row">
        <div className="col-4" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label className="col-form-label"><b>TYPE OF LOSS</b></label>
                </div>

                <div className="col-6">
                <label className="col-form-label"><b>YEAR</b></label>
                </div>
            </div>
        </div>

        <div className="col-4" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label className="col-form-label"><b>AMOUNT (R) </b></label>
                </div>
                <div className="col-6">
                <label className="col-form-label"><b>INSURER</b></label>
                </div>
            </div>
        </div>

    </div>
</div>
{
    LossType.length === 0 ?
      <div className="col-6">
          <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewLossType(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Loss Type</button>
      </div>
    :<></>
}
{
    LossType.length > 0 ?
    LossType.map((key,i) => {
      // console.log(i+1)
        return (
          <>
            <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                <div className="row">
                    <div className="col-4" style={{paddingBottom: "0.5%"}}>
                        <div className="row g-3 align-items-center">
                            <div className="col-6">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="General_TypeOfLoss" name='General_TypeOfLoss' value={key.General_TypeOfLoss} onChange={(e) => {on_LossType_Change(e, i)}} className="form-control" placeholder="Type of loss"  aria-describedby="" style={{width:"150px"}} />
                            </div>
                            
                            <div className="col-6">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="General_LossYear" name='General_LossYear' value={key.General_LossYear} onChange={(e) => {on_LossType_Change(e, i)}} className="form-control" placeholder="Year"  aria-describedby="" style={{width:"150px"}} />
                            </div>
                        </div>
                    </div>

                    <div className="col-4" style={{paddingBottom: "0.5%"}}>
                        <div className="row g-3 align-items-center">
                            <div className="col-6">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="General_LossAmount" name='General_LossAmount' value={key.General_LossAmount} onChange={(e) => {on_LossType_Change(e, i)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                            </div>
                            
                            <div className="col-6">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="General_LossInsurer" name='General_LossInsurer' value={key.General_LossInsurer} onChange={(e) => {on_LossType_Change(e, i)}} className="form-control" placeholder="Insurer"  aria-describedby="" style={{width:"150px"}} />
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                      <div className='row'>
                        {
                          i+1 == LossType.length ?
                          <div className="col-6">
                              <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewLossType(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Loss Type</button>
                          </div>
                          : <></>
                        }
                        <div className="col-6">
                            <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewLossType(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Loss Type</button>
                        </div>
                      </div>
                    </div>
                    <hr/>
                </div>
            </div>
            
          </>
        )
    }): <></>
}

<br/>
  <hr/>
<h6 align="left" style={{ color: "#14848A"}}><b>COVER OF INSURANCE</b></h6>
<hr/>

<h6 align="center" style={{ color: "#14848A"}}><b>PRODUCT COMPARISON</b></h6>
<div className="">
  <div className='table-responsive'>
  <table id="productSizes" className="table table-bordered border dark">
  <tbody>
          {/* <tr className="d-flex">
              <td className="col-2"></td>
              <td className="col-2"></td>
              <td className="col-2"></td>
              <td className="col-3">Existing Product</td>
              <td className="col-3">Replacement Product</td>
          </tr> */}
      
      
          {/* <tr className="d-flex">
              
              <td><h6 align="center" style={{ color: "#14848A", width:"1110px"}}><b>PRODUCT COMPARISON</b></h6></td>
            
          </tr> */}
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"490px"}}></td>
              <td className="col-2" align="center" style={{width:"390px"}}>
                <b>Existing Product</b>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_Existing_Company" name='STIP_CnRI_Existing_Company' value={FormData['STIP_CnRI_Existing_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <b>Replacement Product</b>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_Replacement_Company" name='STIP_CnRI_Replacement_Company' value={FormData['STIP_CnRI_Replacement_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"490px"}}></td>
              <td className="col-2" align="center" style={{width:"390px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_Existing_Provider" name='STIP_CnRI_Existing_Provider' value={FormData['STIP_CnRI_Existing_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_Replacement_Provider" name='STIP_CnRI_Replacement_Provider' value={FormData['STIP_CnRI_Replacement_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"490px"}}></td>
              <td className="col-2" align="center" style={{width:"390px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_Existing_Product" name='STIP_CnRI_Existing_Product' value={FormData['STIP_CnRI_Existing_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_Replacement_Product" name='STIP_CnRI_Replacement_Product' value={FormData['STIP_CnRI_Replacement_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
            
            <td class="col-2" style={{width:"170px"}}><b>Cover</b></td>
            <td class="col-2" style={{width:"100px"}}><b>Recommended</b></td>
            <td class="col-2" style={{width:"90px"}}><b>Accepted</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Cover</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Premium</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Excess</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Cover</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Premium</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Excess</b></td>
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                House content</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_1_Recomm"] == 1 ? true : false} name="STIP_CnRI_1_Recomm" onChange={(e)=>{FormData["STIP_CnRI_1_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_1_Accepted"] == 1 ? true : false} name="STIP_CnRI_1_Accepted" onChange={(e)=>{FormData["STIP_CnRI_1_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_1_CoverAmount" name='STIP_CnRI_1_CoverAmount' value={FormData['STIP_CnRI_1_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_1_Premium1" name='STIP_CnRI_1_Premium1' value={FormData['STIP_CnRI_1_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_1_Excess1" name='STIP_CnRI_1_Excess1' value={FormData['STIP_CnRI_1_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_1_Cover" name='STIP_CnRI_1_Cover' value={FormData['STIP_CnRI_1_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_1_Premium2" name='STIP_CnRI_1_Premium2' value={FormData['STIP_CnRI_1_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_1_Excess2" name='STIP_CnRI_1_Excess2' value={FormData['STIP_CnRI_1_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                Buildings</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_2_Recomm"] == 1 ? true : false} name="STIP_CnRI_2_Recomm" onChange={(e)=>{FormData["STIP_CnRI_2_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_2_Accepted"] == 1 ? true : false} name="STIP_CnRI_2_Accepted" onChange={(e)=>{FormData["STIP_CnRI_2_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_2_CoverAmount" name='STIP_CnRI_2_CoverAmount' value={FormData['STIP_CnRI_2_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_2_Premium1" name='STIP_CnRI_2_Premium1' value={FormData['STIP_CnRI_2_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_2_Excess1" name='STIP_CnRI_2_Excess1' value={FormData['STIP_CnRI_2_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_2_Cover" name='STIP_CnRI_2_Cover' value={FormData['STIP_CnRI_2_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_2_Premium2" name='STIP_CnRI_2_Premium2' value={FormData['STIP_CnRI_2_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_2_Excess2" name='STIP_CnRI_2_Excess2' value={FormData['STIP_CnRI_2_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;
              Subsidence and landslip</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_3_Recomm"] == 1 ? true : false} name="STIP_CnRI_3_Recomm" onChange={(e)=>{FormData["STIP_CnRI_3_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_3_Accepted"] == 1 ? true : false} name="STIP_CnRI_3_Accepted" onChange={(e)=>{FormData["STIP_CnRI_3_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_3_CoverAmount" name='STIP_CnRI_3_CoverAmount' value={FormData['STIP_CnRI_3_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_3_Premium1" name='STIP_CnRI_3_Premium1' value={FormData['STIP_CnRI_3_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_3_Excess1" name='STIP_CnRI_3_Excess1' value={FormData['STIP_CnRI_3_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_3_Cover" name='STIP_CnRI_3_ECover value={FormData['STIP_CnRI_3_ExcCover onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_3_Premium2" name='STIP_CnRI_3_Premium2' value={FormData['STIP_CnRI_3_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_3_Excess2" name='STIP_CnRI_3_Excess2' value={FormData['STIP_CnRI_3_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Accidental damage</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_4_Recomm"] == 1 ? true : false} name="STIP_CnRI_4_Recomm" onChange={(e)=>{FormData["STIP_CnRI_4_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_4_Accepted"] == 1 ? true : false} name="STIP_CnRI_4_Accepted" onChange={(e)=>{FormData["STIP_CnRI_4_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_4_CoverAmount" name='STIP_CnRI_4_CoverAmount' value={FormData['STIP_CnRI_4_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_4_Premium1" name='STIP_CnRI_4_Premium1' value={FormData['STIP_CnRI_4_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_4_Excess1" name='STIP_CnRI_4_Excess1' value={FormData['STIP_CnRI_4_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_4_Cover" name='STIP_CnRI_4_ECover value={FormData['STIP_CnRI_4_ExcCover onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_4_Premium2" name='STIP_CnRI_4_Premium2' value={FormData['STIP_CnRI_4_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_4_Excess2" name='STIP_CnRI_4_Excess2' value={FormData['STIP_CnRI_4_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                All Risk(General)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_5_Recomm"] == 1 ? true : false} name="STIP_CnRI_5_Recomm" onChange={(e)=>{FormData["STIP_CnRI_5_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_5_Accepted"] == 1 ? true : false} name="STIP_CnRI_5_Accepted" onChange={(e)=>{FormData["STIP_CnRI_5_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_5_CoverAmount" name='STIP_CnRI_5_CoverAmount' value={FormData['STIP_CnRI_5_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_5_Premium1" name='STIP_CnRI_5_Premium1' value={FormData['STIP_CnRI_5_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_5_Excess1" name='STIP_CnRI_5_Excess1' value={FormData['STIP_CnRI_5_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_5_Cover" name='STIP_CnRI_5_ECover value={FormData['STIP_CnRI_5_ExcCover onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_5_Premium2" name='STIP_CnRI_5_Premium2' value={FormData['STIP_CnRI_5_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_5_Excess2" name='STIP_CnRI_5_Excess2' value={FormData['STIP_CnRI_5_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Clothing and personal</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_6_Recomm"] == 1 ? true : false} name="STIP_CnRI_6_Recomm" onChange={(e)=>{FormData["STIP_CnRI_6_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_6_Accepted"] == 1 ? true : false} name="STIP_CnRI_6_Accepted" onChange={(e)=>{FormData["STIP_CnRI_6_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_6_CoverAmount" name='STIP_CnRI_6_CoverAmount' value={FormData['STIP_CnRI_6_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_6_Premium1" name='STIP_CnRI_6_Premium1' value={FormData['STIP_CnRI_6_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_6_Excess1" name='STIP_CnRI_6_Excess1' value={FormData['STIP_CnRI_6_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_6_Cover" name='STIP_CnRI_6_ECover value={FormData['STIP_CnRI_6_ExcCover onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_6_Premium2" name='STIP_CnRI_6_Premium2' value={FormData['STIP_CnRI_6_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_6_Excess2" name='STIP_CnRI_6_Excess2' value={FormData['STIP_CnRI_6_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          {/* <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;
              Keys and locks</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_7_Recomm"] == 1 ? true : false} name="STIP_CnRI_7_Recomm" onChange={(e)=>{FormData["STIP_CnRI_7_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_7_Accepted"] == 1 ? true : false} name="STIP_CnRI_7_Accepted" onChange={(e)=>{FormData["STIP_CnRI_7_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_7_CoverAmount" name='STIP_CnRI_7_CoverAmount' value={FormData['STIP_CnRI_7_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_7_Premium1" name='STIP_CnRI_7_Premium1' value={FormData['STIP_CnRI_7_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_7_Excess1" name='STIP_CnRI_7_Excess1' value={FormData['STIP_CnRI_7_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_7_Premium2" name='STIP_CnRI_7_Premium2' value={FormData['STIP_CnRI_7_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_7_Excess2" name='STIP_CnRI_7_Excess2' value={FormData['STIP_CnRI_7_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr> */}

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Wheelchairs</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_8_Recomm"] == 1 ? true : false} name="STIP_CnRI_8_Recomm" onChange={(e)=>{FormData["STIP_CnRI_8_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_8_Accepted"] == 1 ? true : false} name="STIP_CnRI_8_Accepted" onChange={(e)=>{FormData["STIP_CnRI_8_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_8_CoverAmount" name='STIP_CnRI_8_CoverAmount' value={FormData['STIP_CnRI_8_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_8_Premium1" name='STIP_CnRI_8_Premium1' value={FormData['STIP_CnRI_8_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_8_Excess1" name='STIP_CnRI_8_Excess1' value={FormData['STIP_CnRI_8_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_8_Cover" name='STIP_CnRI_8_ECover value={FormData['STIP_CnRI_8_ExcCover onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_8_Premium2" name='STIP_CnRI_8_Premium2' value={FormData['STIP_CnRI_8_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_8_Excess2" name='STIP_CnRI_8_Excess2' value={FormData['STIP_CnRI_8_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Bicycles</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_9_Recomm"] == 1 ? true : false} name="STIP_CnRI_9_Recomm" onChange={(e)=>{FormData["STIP_CnRI_9_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_9_Accepted"] == 1 ? true : false} name="STIP_CnRI_9_Accepted" onChange={(e)=>{FormData["STIP_CnRI_9_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_9_CoverAmount" name='STIP_CnRI_9_CoverAmount' value={FormData['STIP_CnRI_9_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_9_Premium1" name='STIP_CnRI_9_Premium1' value={FormData['STIP_CnRI_9_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_9_Excess1" name='STIP_CnRI_9_Excess1' value={FormData['STIP_CnRI_9_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_9_Cover" name='STIP_CnRI_9_ECover value={FormData['STIP_CnRI_9_ExcCover onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_9_Premium2" name='STIP_CnRI_9_Premium2' value={FormData['STIP_CnRI_9_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_9_Excess2" name='STIP_CnRI_9_Excess2' value={FormData['STIP_CnRI_9_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Cellular telephones</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_10_Recomm"] == 1 ? true : false} name="STIP_CnRI_10_Recomm" onChange={(e)=>{FormData["STIP_CnRI_10_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_10_Accepted"] == 1 ? true : false} name="STIP_CnRI_10_Accepted" onChange={(e)=>{FormData["STIP_CnRI_10_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_10_CoverAmount" name='STIP_CnRI_10_CoverAmount' value={FormData['STIP_CnRI_10_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_10_Premium1" name='STIP_CnRI_10_Premium1' value={FormData['STIP_CnRI_10_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_10_Excess1" name='STIP_CnRI_10_Excess1' value={FormData['STIP_CnRI_10_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_10_Cover" name='STIP_CnRI_10_Cover' value={FormData['STIP_CnRI_10_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_10_Premium2" name='STIP_CnRI_10_Premium2' value={FormData['STIP_CnRI_10_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_10_Excess2" name='STIP_CnRI_10_Excess2' value={FormData['STIP_CnRI_10_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          {/* <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              TV,VCR,Decoders</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_11_Recomm"] == 1 ? true : false} name="STIP_CnRI_11_Recomm" onChange={(e)=>{FormData["STIP_CnRI_11_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_11_Accepted"] == 1 ? true : false} name="STIP_CnRI_11_Accepted" onChange={(e)=>{FormData["STIP_CnRI_11_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_11_CoverAmount" name='STIP_CnRI_11_CoverAmount' value={FormData['STIP_CnRI_11_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_11_Premium1" name='STIP_CnRI_11_Premium1' value={FormData['STIP_CnRI_11_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_11_Excess1" name='STIP_CnRI_11_Excess1' value={FormData['STIP_CnRI_11_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_11_Premium2" name='STIP_CnRI_11_Premium2' value={FormData['STIP_CnRI_11_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_11_Excess2" name='STIP_CnRI_11_Excess2' value={FormData['STIP_CnRI_11_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr> */}


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                All Risk Specified</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_12_Recomm"] == 1 ? true : false} name="STIP_CnRI_12_Recomm" onChange={(e)=>{FormData["STIP_CnRI_12_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_12_Accepted"] == 1 ? true : false} name="STIP_CnRI_12_Accepted" onChange={(e)=>{FormData["STIP_CnRI_12_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_12_CoverAmount" name='STIP_CnRI_12_CoverAmount' value={FormData['STIP_CnRI_12_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_12_Premium1" name='STIP_CnRI_12_Premium1' value={FormData['STIP_CnRI_12_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_12_Excess1" name='STIP_CnRI_12_Excess1' value={FormData['STIP_CnRI_12_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_12_Cover" name='STIP_CnRI_12_Cover' value={FormData['STIP_CnRI_12_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_12_Premium2" name='STIP_CnRI_12_Premium2' value={FormData['STIP_CnRI_12_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_12_Excess2" name='STIP_CnRI_12_Excess2' value={FormData['STIP_CnRI_12_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Computer equipment</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_13_Recomm"] == 1 ? true : false} name="STIP_CnRI_13_Recomm" onChange={(e)=>{FormData["STIP_CnRI_13_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_13_Accepted"] == 1 ? true : false} name="STIP_CnRI_13_Accepted" onChange={(e)=>{FormData["STIP_CnRI_13_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_13_CoverAmount" name='STIP_CnRI_13_CoverAmount' value={FormData['STIP_CnRI_13_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_13_Premium1" name='STIP_CnRI_13_Premium1' value={FormData['STIP_CnRI_13_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_13_Excess1" name='STIP_CnRI_13_Excess1' value={FormData['STIP_CnRI_13_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_13_Cover" name='STIP_CnRI_13_Cover' value={FormData['STIP_CnRI_13_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_13_Premium2" name='STIP_CnRI_13_Premium2' value={FormData['STIP_CnRI_13_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_13_Excess2" name='STIP_CnRI_13_Excess2' value={FormData['STIP_CnRI_13_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Items in bank vault</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_14_Recomm"] == 1 ? true : false} name="STIP_CnRI_14_Recomm" onChange={(e)=>{FormData["STIP_CnRI_14_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_14_Accepted"] == 1 ? true : false} name="STIP_CnRI_14_Accepted" onChange={(e)=>{FormData["STIP_CnRI_14_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_14_CoverAmount" name='STIP_CnRI_14_CoverAmount' value={FormData['STIP_CnRI_14_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_14_Premium1" name='STIP_CnRI_14_Premium1' value={FormData['STIP_CnRI_14_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_14_Excess1" name='STIP_CnRI_14_Excess1' value={FormData['STIP_CnRI_14_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_14_Cover" name='STIP_CnRI_14_Cover' value={FormData['STIP_CnRI_14_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_14_Premium2" name='STIP_CnRI_14_Premium2' value={FormData['STIP_CnRI_14_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_14_Excess2" name='STIP_CnRI_14_Excess2' value={FormData['STIP_CnRI_14_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Jewellery(All jewellery)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_15_Recomm"] == 1 ? true : false} name="STIP_CnRI_15_Recomm" onChange={(e)=>{FormData["STIP_CnRI_15_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_15_Accepted"] == 1 ? true : false} name="STIP_CnRI_15_Accepted" onChange={(e)=>{FormData["STIP_CnRI_15_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_15_CoverAmount" name='STIP_CnRI_15_CoverAmount' value={FormData['STIP_CnRI_15_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_15_Premium1" name='STIP_CnRI_15_Premium1' value={FormData['STIP_CnRI_15_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_15_Excess1" name='STIP_CnRI_15_Excess1' value={FormData['STIP_CnRI_15_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_15_Cover" name='STIP_CnRI_15_Cover' value={FormData['STIP_CnRI_15_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_15_Premium2" name='STIP_CnRI_15_Premium2' value={FormData['STIP_CnRI_15_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_15_Excess2" name='STIP_CnRI_15_Excess2' value={FormData['STIP_CnRI_15_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Photographic equipment</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_16_Recomm"] == 1 ? true : false} name="STIP_CnRI_16_Recomm" onChange={(e)=>{FormData["STIP_CnRI_16_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_16_Accepted"] == 1 ? true : false} name="STIP_CnRI_16_Accepted" onChange={(e)=>{FormData["STIP_CnRI_16_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_16_CoverAmount" name='STIP_CnRI_16_CoverAmount' value={FormData['STIP_CnRI_16_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_16_Premium1" name='STIP_CnRI_16_Premium1' value={FormData['STIP_CnRI_16_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_16_Excess1" name='STIP_CnRI_16_Excess1' value={FormData['STIP_CnRI_16_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_16_Cover" name='STIP_CnRI_16_Cover' value={FormData['STIP_CnRI_16_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_16_Premium2" name='STIP_CnRI_16_Premium2' value={FormData['STIP_CnRI_16_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_16_Excess2" name='STIP_CnRI_16_Excess2' value={FormData['STIP_CnRI_16_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Sound Equipment</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_17_Recomm"] == 1 ? true : false} name="STIP_CnRI_17_Recomm" onChange={(e)=>{FormData["STIP_CnRI_17_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_17_Accepted"] == 1 ? true : false} name="STIP_CnRI_17_Accepted" onChange={(e)=>{FormData["STIP_CnRI_17_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_17_CoverAmount" name='STIP_CnRI_17_CoverAmount' value={FormData['STIP_CnRI_17_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_17_Premium1" name='STIP_CnRI_17_Premium1' value={FormData['STIP_CnRI_17_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_17_Excess1" name='STIP_CnRI_17_Excess1' value={FormData['STIP_CnRI_17_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_17_Cover" name='STIP_CnRI_17_Cover' value={FormData['STIP_CnRI_17_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_17_Premium2" name='STIP_CnRI_17_Premium2' value={FormData['STIP_CnRI_17_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_17_Excess2" name='STIP_CnRI_17_Excess2' value={FormData['STIP_CnRI_17_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Other specify</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_18_Recomm"] == 1 ? true : false} name="STIP_CnRI_18_Recomm" onChange={(e)=>{FormData["STIP_CnRI_18_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_18_Accepted"] == 1 ? true : false} name="STIP_CnRI_18_Accepted" onChange={(e)=>{FormData["STIP_CnRI_18_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_18_CoverAmount" name='STIP_CnRI_18_CoverAmount' value={FormData['STIP_CnRI_18_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_18_Premium1" name='STIP_CnRI_18_Premium1' value={FormData['STIP_CnRI_18_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_18_Excess1" name='STIP_CnRI_18_Excess1' value={FormData['STIP_CnRI_18_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_18_Cover" name='STIP_CnRI_18_Cover' value={FormData['STIP_CnRI_18_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_18_Premium2" name='STIP_CnRI_18_Premium2' value={FormData['STIP_CnRI_18_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_18_Excess2" name='STIP_CnRI_18_Excess2' value={FormData['STIP_CnRI_18_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                Personal legal liability</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_19_Recomm"] == 1 ? true : false} name="STIP_CnRI_19_Recomm" onChange={(e)=>{FormData["STIP_CnRI_19_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_19_Accepted"] == 1 ? true : false} name="STIP_CnRI_19_Accepted" onChange={(e)=>{FormData["STIP_CnRI_19_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_19_CoverAmount" name='STIP_CnRI_19_CoverAmount' value={FormData['STIP_CnRI_19_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_19_Premium1" name='STIP_CnRI_19_Premium1' value={FormData['STIP_CnRI_19_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_19_Excess1" name='STIP_CnRI_19_Excess1' value={FormData['STIP_CnRI_19_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_19_Cover" name='STIP_CnRI_19_Cover' value={FormData['STIP_CnRI_19_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_19_Premium2" name='STIP_CnRI_19_Premium2' value={FormData['STIP_CnRI_19_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_19_Excess2" name='STIP_CnRI_19_Excess2' value={FormData['STIP_CnRI_19_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                (PLIP)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_20_Recomm"] == 1 ? true : false} name="STIP_CnRI_20_Recomm" onChange={(e)=>{FormData["STIP_CnRI_20_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_20_Accepted"] == 1 ? true : false} name="STIP_CnRI_20_Accepted" onChange={(e)=>{FormData["STIP_CnRI_20_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_20_CoverAmount" name='STIP_CnRI_20_CoverAmount' value={FormData['STIP_CnRI_20_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_20_Premium1" name='STIP_CnRI_20_Premium1' value={FormData['STIP_CnRI_20_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_20_Excess1" name='STIP_CnRI_20_Excess1' value={FormData['STIP_CnRI_20_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_20_Cover" name='STIP_CnRI_20_Cover' value={FormData['STIP_CnRI_20_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_20_Premium2" name='STIP_CnRI_20_Premium2' value={FormData['STIP_CnRI_20_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_20_Excess2" name='STIP_CnRI_20_Excess2' value={FormData['STIP_CnRI_20_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                Vehicles(Refer to quote/policy)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_21_Recomm"] == 1 ? true : false} name="STIP_CnRI_21_Recomm" onChange={(e)=>{FormData["STIP_CnRI_21_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_21_Accepted"] == 1 ? true : false} name="STIP_CnRI_21_Accepted" onChange={(e)=>{FormData["STIP_CnRI_21_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_21_CoverAmount" name='STIP_CnRI_21_CoverAmount' value={FormData['STIP_CnRI_21_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_21_Premium1" name='STIP_CnRI_21_Premium1' value={FormData['STIP_CnRI_21_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_21_Excess1" name='STIP_CnRI_21_Excess1' value={FormData['STIP_CnRI_21_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_21_Cover" name='STIP_CnRI_21_Cover' value={FormData['STIP_CnRI_21_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_21_Premium2" name='STIP_CnRI_21_Premium2' value={FormData['STIP_CnRI_21_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_21_Excess2" name='STIP_CnRI_21_Excess2' value={FormData['STIP_CnRI_21_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Car hire</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_22_Recomm"] == 1 ? true : false} name="STIP_CnRI_22_Recomm" onChange={(e)=>{FormData["STIP_CnRI_22_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_22_Accepted"] == 1 ? true : false} name="STIP_CnRI_22_Accepted" onChange={(e)=>{FormData["STIP_CnRI_22_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_22_CoverAmount" name='STIP_CnRI_22_CoverAmount' value={FormData['STIP_CnRI_22_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_22_Premium1" name='STIP_CnRI_22_Premium1' value={FormData['STIP_CnRI_22_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_22_Excess1" name='STIP_CnRI_22_Excess1' value={FormData['STIP_CnRI_22_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_22_Cover" name='STIP_CnRI_22_Cover' value={FormData['STIP_CnRI_22_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_22_Premium2" name='STIP_CnRI_22_Premium2' value={FormData['STIP_CnRI_22_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_22_Excess2" name='STIP_CnRI_22_Excess2' value={FormData['STIP_CnRI_22_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Excess waiver</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_23_Recomm"] == 1 ? true : false} name="STIP_CnRI_23_Recomm" onChange={(e)=>{FormData["STIP_CnRI_23_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_23_Accepted"] == 1 ? true : false} name="STIP_CnRI_23_Accepted" onChange={(e)=>{FormData["STIP_CnRI_23_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_23_CoverAmount" name='STIP_CnRI_23_CoverAmount' value={FormData['STIP_CnRI_23_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_23_Premium1" name='STIP_CnRI_23_Premium1' value={FormData['STIP_CnRI_23_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_23_Excess1" name='STIP_CnRI_23_Excess1' value={FormData['STIP_CnRI_23_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_23_Cover" name='STIP_CnRI_23_Cover' value={FormData['STIP_CnRI_23_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_23_Premium2" name='STIP_CnRI_23_Premium2' value={FormData['STIP_CnRI_23_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_23_Excess2" name='STIP_CnRI_23_Excess2' value={FormData['STIP_CnRI_23_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; 
              Credit shortfall</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_24_Recomm"] == 1 ? true : false} name="STIP_CnRI_24_Recomm" onChange={(e)=>{FormData["STIP_CnRI_24_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_24_Accepted"] == 1 ? true : false} name="STIP_CnRI_24_Accepted" onChange={(e)=>{FormData["STIP_CnRI_24_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_24_CoverAmount" name='STIP_CnRI_24_CoverAmount' value={FormData['STIP_CnRI_24_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_24_Premium1" name='STIP_CnRI_24_Premium1' value={FormData['STIP_CnRI_24_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_24_Excess1" name='STIP_CnRI_24_Excess1' value={FormData['STIP_CnRI_24_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_24_Cover" name='STIP_CnRI_24_Cover' value={FormData['STIP_CnRI_24_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_24_Premium2" name='STIP_CnRI_24_Premium2' value={FormData['STIP_CnRI_24_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_24_Excess2" name='STIP_CnRI_24_Excess2' value={FormData['STIP_CnRI_24_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>



          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                Watercraft</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_25_Recomm"] == 1 ? true : false} name="STIP_CnRI_25_Recomm" onChange={(e)=>{FormData["STIP_CnRI_25_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_25_Accepted"] == 1 ? true : false} name="STIP_CnRI_25_Accepted" onChange={(e)=>{FormData["STIP_CnRI_25_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_25_CoverAmount" name='STIP_CnRI_25_CoverAmount' value={FormData['STIP_CnRI_25_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_25_Premium1" name='STIP_CnRI_25_Premium1' value={FormData['STIP_CnRI_25_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_25_Excess1" name='STIP_CnRI_25_Excess1' value={FormData['STIP_CnRI_25_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_25_Cover" name='STIP_CnRI_25_Cover' value={FormData['STIP_CnRI_25_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_25_Premium2" name='STIP_CnRI_25_Premium2' value={FormData['STIP_CnRI_25_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_25_Excess2" name='STIP_CnRI_25_Excess2' value={FormData['STIP_CnRI_25_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                Sasria</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_26_Recomm"] == 1 ? true : false} name="STIP_CnRI_26_Recomm" onChange={(e)=>{FormData["STIP_CnRI_26_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_26_Accepted"] == 1 ? true : false} name="STIP_CnRI_26_Accepted" onChange={(e)=>{FormData["STIP_CnRI_26_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_26_CoverAmount" name='STIP_CnRI_26_CoverAmount' value={FormData['STIP_CnRI_26_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_26_Premium1" name='STIP_CnRI_26_Premium1' value={FormData['STIP_CnRI_26_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_26_Excess1" name='STIP_CnRI_26_Excess1' value={FormData['STIP_CnRI_26_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_26_Cover" name='STIP_CnRI_26_Cover' value={FormData['STIP_CnRI_26_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_26_Premium2" name='STIP_CnRI_26_Premium2' value={FormData['STIP_CnRI_26_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_26_Excess2" name='STIP_CnRI_26_Excess2' value={FormData['STIP_CnRI_26_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>
                Legal access</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_27_Recomm"] == 1 ? true : false} name="STIP_CnRI_27_Recomm" onChange={(e)=>{FormData["STIP_CnRI_27_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRI_27_Accepted"] == 1 ? true : false} name="STIP_CnRI_27_Accepted" onChange={(e)=>{FormData["STIP_CnRI_27_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_27_CoverAmount" name='STIP_CnRI_27_CoverAmount' value={FormData['STIP_CnRI_27_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_27_Premium1" name='STIP_CnRI_27_Premium1' value={FormData['STIP_CnRI_27_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_27_Excess1" name='STIP_CnRI_27_Excess1' value={FormData['STIP_CnRI_27_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_27_Cover" name='STIP_CnRI_27_Cover' value={FormData['STIP_CnRI_27_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_27_Premium2" name='STIP_CnRI_27_Premium2' value={FormData['STIP_CnRI_27_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_27_Excess2" name='STIP_CnRI_27_Excess2' value={FormData['STIP_CnRen_27_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Fees and charges</td>
              <td className="col-10">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_FeeCharges" name='STIP_CnRI_FeeCharges' value={FormData['STIP_CnRI_FeeCharges']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Commissions</td>
              <td className="col-10">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_Commission" name='STIP_CnRI_Commission' value={FormData['STIP_CnRI_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Total premium</td>
              <td className="col-10">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRI_TotalPremium" name='STIP_CnRI_TotalPremium' value={FormData['STIP_CnRI_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
              </td>
            
          </tr>

          
          
      </tbody>
  </table>
  </div>
  </div>


  <br/>
  <hr/>
<h6 align="left" style={{ color: "#14848A"}}><b>COVER AND RENEWAL OF INSURANCE</b></h6>
<hr/>
<div className="">
<div className='table-responsive'>
<table id="productSizes" className="table table-bordered border dark">
  <tbody>
          {/* <tr className="d-flex">
              <td className="col-2"></td>
              <td className="col-2"></td>
              <td className="col-2"></td>
              <td className="col-3">Existing Product</td>
              <td className="col-3">Replacement Product</td>
          </tr> */}
      
      
          <tr className="d-flex">
              
              <td><h6 align="center" style={{ color: "#14848A", width:"1110px"}}><b>COVER COMPARISON AT RENEWAL</b></h6></td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"490px"}}></td>
              <td className="col-2" align="center" style={{width:"390px"}}>
                <b>Existing Product</b>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_Existing_Company" name='STIP_CnRen_Existing_Company' value={FormData['STIP_CnRen_Existing_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <b>Replacement Product</b>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_Replacement_Company" name='STIP_CnRen_Replacement_Company' value={FormData['STIP_CnRen_Replacement_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"490px"}}></td>
              <td className="col-2" align="center" style={{width:"390px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_Existing_Provider" name='STIP_CnRen_Existing_Provider' value={FormData['STIP_CnRen_Existing_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_Replacement_Provider" name='STIP_CnRen_Replacement_Provider' value={FormData['STIP_CnRen_Replacement_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"490px"}}></td>
              <td className="col-2" align="center" style={{width:"390px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_Existing_Product" name='STIP_CnRen_Existing_Product' value={FormData['STIP_CnRen_Existing_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_Replacement_Product" name='STIP_CnRen_Replacement_Product' value={FormData['STIP_CnRen_Replacement_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
            
            <td class="col-2" style={{width:"170px"}}><b>Cover</b></td>
            <td class="col-2" style={{width:"100px"}}><b>Recommended</b></td>
            <td class="col-2" style={{width:"90px"}}><b>Accepted</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Cover</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Premium</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Excess</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Cover</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Premium</b></td>
            <td class="col-2" style={{width:"130px"}}><b>Excess</b></td>
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>House content</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_1_Recomm"] == 1 ? true : false} name="STIP_CnRen_1_Recomm" onChange={(e)=>{FormData["STIP_CnRen_1_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_1_Accepted"] == 1 ? true : false} name="STIP_CnRen_1_Accepted" onChange={(e)=>{FormData["STIP_CnRen_1_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_1_CoverAmount" name='STIP_CnRen_1_CoverAmount' value={FormData['STIP_CnRen_1_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_1_Premium1" name='STIP_CnRen_1_Premium1' value={FormData['STIP_CnRen_1_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_1_Excess1" name='STIP_CnRen_1_Excess1' value={FormData['STIP_CnRen_1_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_1_Cover" name='STIP_CnRen_1_Cover' value={FormData['STIP_CnRen_1_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_1_Premium2" name='STIP_CnRen_1_Premium2' value={FormData['STIP_CnRen_1_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_1_Excess2" name='STIP_CnRen_1_Excess2' value={FormData['STIP_CnRen_1_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Buildings</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_2_Recomm"] == 1 ? true : false} name="STIP_CnRen_2_Recomm" onChange={(e)=>{FormData["STIP_CnRen_2_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_2_Accepted"] == 1 ? true : false} name="STIP_CnRen_2_Accepted" onChange={(e)=>{FormData["STIP_CnRen_2_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_2_CoverAmount" name='STIP_CnRen_2_CoverAmount' value={FormData['STIP_CnRen_2_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_2_Premium1" name='STIP_CnRen_2_Premium1' value={FormData['STIP_CnRen_2_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_2_Excess1" name='STIP_CnRen_2_Excess1' value={FormData['STIP_CnRen_2_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_2_Cover" name='STIP_CnRen_2_Cover' value={FormData['STIP_CnRen_2_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_2_Premium2" name='STIP_CnRen_2_Premium2' value={FormData['STIP_CnRen_2_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_2_Excess2" name='STIP_CnRen_2_Excess2' value={FormData['STIP_CnRen_2_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Subsidence and landslip</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_3_Recomm"] == 1 ? true : false} name="STIP_CnRen_3_Recomm" onChange={(e)=>{FormData["STIP_CnRen_3_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_3_Accepted"] == 1 ? true : false} name="STIP_CnRen_3_Accepted" onChange={(e)=>{FormData["STIP_CnRen_3_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_3_CoverAmount" name='STIP_CnRen_3_CoverAmount' value={FormData['STIP_CnRen_3_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_3_Premium1" name='STIP_CnRen_3_Premium1' value={FormData['STIP_CnRen_3_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_3_Excess1" name='STIP_CnRen_3_Excess1' value={FormData['STIP_CnRen_3_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_3_Cover" name='STIP_CnRen_3_Cover' value={FormData['STIP_CnRen_3_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_3_Premium2" name='STIP_CnRen_3_Premium2' value={FormData['STIP_CnRen_3_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_3_Excess2" name='STIP_CnRen_3_Excess2' value={FormData['STIP_CnRen_3_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Accidental damage</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_4_Recomm"] == 1 ? true : false} name="STIP_CnRen_4_Recomm" onChange={(e)=>{FormData["STIP_CnRen_4_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_4_Accepted"] == 1 ? true : false} name="STIP_CnRen_4_Accepted" onChange={(e)=>{FormData["STIP_CnRen_4_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_4_CoverAmount" name='STIP_CnRen_4_CoverAmount' value={FormData['STIP_CnRen_4_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_4_Premium1" name='STIP_CnRen_4_Premium1' value={FormData['STIP_CnRen_4_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_4_Excess1" name='STIP_CnRen_4_Excess1' value={FormData['STIP_CnRen_4_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_4_Cover" name='STIP_CnRen_4_Cover' value={FormData['STIP_CnRen_4_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_4_Premium2" name='STIP_CnRen_4_Premium2' value={FormData['STIP_CnRen_4_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_4_Excess2" name='STIP_CnRen_4_Excess2' value={FormData['STIP_CnRen_4_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>All Risk(General)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_5_Recomm"] == 1 ? true : false} name="STIP_CnRen_5_Recomm" onChange={(e)=>{FormData["STIP_CnRen_5_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_5_Accepted"] == 1 ? true : false} name="STIP_CnRen_5_Accepted" onChange={(e)=>{FormData["STIP_CnRen_5_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_5_CoverAmount" name='STIP_CnRen_5_CoverAmount' value={FormData['STIP_CnRen_5_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_5_Premium1" name='STIP_CnRen_5_Premium1' value={FormData['STIP_CnRen_5_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_5_Excess1" name='STIP_CnRen_5_Excess1' value={FormData['STIP_CnRen_5_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_5_Cover" name='STIP_CnRen_5_Cover' value={FormData['STIP_CnRen_5_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_5_Premium2" name='STIP_CnRen_5_Premium2' value={FormData['STIP_CnRen_5_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_5_Excess2" name='STIP_CnRen_5_Excess2' value={FormData['STIP_CnRen_5_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Clothing and personal</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_6_Recomm"] == 1 ? true : false} name="STIP_CnRen_6_Recomm" onChange={(e)=>{FormData["STIP_CnRen_6_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_6_Accepted"] == 1 ? true : false} name="STIP_CnRen_6_Accepted" onChange={(e)=>{FormData["STIP_CnRen_6_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_6_CoverAmount" name='STIP_CnRen_6_CoverAmount' value={FormData['STIP_CnRen_6_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_6_Premium1" name='STIP_CnRen_6_Premium1' value={FormData['STIP_CnRen_6_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_6_Excess1" name='STIP_CnRen_6_Excess1' value={FormData['STIP_CnRen_6_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_6_Cover" name='STIP_CnRen_6_Cover' value={FormData['STIP_CnRen_6_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_6_Premium2" name='STIP_CnRen_6_Premium2' value={FormData['STIP_CnRen_6_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_6_Excess2" name='STIP_CnRen_6_Excess2' value={FormData['STIP_CnRen_6_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Keys and locks</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_7_Recomm"] == 1 ? true : false} name="STIP_CnRen_7_Recomm" onChange={(e)=>{FormData["STIP_CnRen_7_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_7_Accepted"] == 1 ? true : false} name="STIP_CnRen_7_Accepted" onChange={(e)=>{FormData["STIP_CnRen_7_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_7_CoverAmount" name='STIP_CnRen_7_CoverAmount' value={FormData['STIP_CnRen_7_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_7_Premium1" name='STIP_CnRen_7_Premium1' value={FormData['STIP_CnRen_7_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_7_Excess1" name='STIP_CnRen_7_Excess1' value={FormData['STIP_CnRen_7_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_7_Cover" name='STIP_CnRen_7_Cover' value={FormData['STIP_CnRen_7_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_7_Premium2" name='STIP_CnRen_7_Premium2' value={FormData['STIP_CnRen_7_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_7_Excess2" name='STIP_CnRen_7_Excess2' value={FormData['STIP_CnRen_7_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Wheelchairs</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_8_Recomm"] == 1 ? true : false} name="STIP_CnRen_8_Recomm" onChange={(e)=>{FormData["STIP_CnRen_8_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_8_Accepted"] == 1 ? true : false} name="STIP_CnRen_8_Accepted" onChange={(e)=>{FormData["STIP_CnRen_8_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_8_CoverAmount" name='STIP_CnRen_8_CoverAmount' value={FormData['STIP_CnRen_8_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_8_Premium1" name='STIP_CnRen_8_Premium1' value={FormData['STIP_CnRen_8_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_8_Excess1" name='STIP_CnRen_8_Excess1' value={FormData['STIP_CnRen_8_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_8_Cover" name='STIP_CnRen_8_Cover' value={FormData['STIP_CnRen_8_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_8_Premium2" name='STIP_CnRen_8_Premium2' value={FormData['STIP_CnRen_8_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_8_Excess2" name='STIP_CnRen_8_Excess2' value={FormData['STIP_CnRen_8_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Bicycles</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_9_Recomm"] == 1 ? true : false} name="STIP_CnRen_9_Recomm" onChange={(e)=>{FormData["STIP_CnRen_9_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_9_Accepted"] == 1 ? true : false} name="STIP_CnRen_9_Accepted" onChange={(e)=>{FormData["STIP_CnRen_9_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_9_CoverAmount" name='STIP_CnRen_9_CoverAmount' value={FormData['STIP_CnRen_9_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_9_Premium1" name='STIP_CnRen_9_Premium1' value={FormData['STIP_CnRen_9_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_9_Excess1" name='STIP_CnRen_9_Excess1' value={FormData['STIP_CnRen_9_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_9_Cover" name='STIP_CnRen_9_Cover' value={FormData['STIP_CnRen_9_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_9_Premium2" name='STIP_CnRen_9_Premium2' value={FormData['STIP_CnRen_9_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_9_Excess2" name='STIP_CnRen_9_Excess2' value={FormData['STIP_CnRen_9_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Cellular telephones</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_10_Recomm"] == 1 ? true : false} name="STIP_CnRen_10_Recomm" onChange={(e)=>{FormData["STIP_CnReI10_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_10_Accepted"] == 1 ? true : false} name="STIP_CnReI10_Accepted" onChange={(e)=>{FormData["STIP_CnRen_10_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_10_CoverAmount" name='STIP_CnRen_10_CoverAmount' value={FormData['STIP_CnRen_10_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_10_Premium1" name='STIP_CnRen_10_Premium1' value={FormData['STIP_CnRen_10_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_10_Excess1" name='STIP_CnRen_10_Excess1' value={FormData['STIP_CnRen_10_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_10_Cover" name='STIP_CnReI10_Cover' value={FormData['STIP_CnReI10_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_10_Premium2" name='STIP_CnRen_10_Premium2' value={FormData['STIP_CnReI10_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_10_Excess2" name='STIP_CnRen_10_Excess2' value={FormData['STIP_CnRen_10_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; TV,VCR,Decoders</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_11_Recomm"] == 1 ? true : false} name="STIP_CnRen_11_Recomm" onChange={(e)=>{FormData["STIP_CnReI11_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_11_Accepted"] == 1 ? true : false} name="STIP_CnReI11_Accepted" onChange={(e)=>{FormData["STIP_CnRen_11_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_11_CoverAmount" name='STIP_CnRen_11_CoverAmount' value={FormData['STIP_CnRen_11_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_11_Premium1" name='STIP_CnRen_11_Premium1' value={FormData['STIP_CnRen_11_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_11_Excess1" name='STIP_CnRen_11_Excess1' value={FormData['STIP_CnRen_11_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_11_Cover" name='STIP_CnReI11_Cover' value={FormData['STIP_CnReI11_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_11_Premium2" name='STIP_CnRen_11_Premium2' value={FormData['STIP_CnReI11_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_11_Excess2" name='STIP_CnRen_11_Excess2' value={FormData['STIP_CnRen_11_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          {/* <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>All Risk Specified</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_12_Recomm"] == 1 ? true : false} name="STIP_CnRen_12_Recomm" onChange={(e)=>{FormData["STIP_CnReI12_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_12_Accepted"] == 1 ? true : false} name="STIP_CnReI12_Accepted" onChange={(e)=>{FormData["STIP_CnRen_12_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_12_CoverAmount" name='STIP_CnRen_12_CoverAmount' value={FormData['STIP_CnRen_12_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_12_Premium1" name='STIP_CnRen_12_Premium1' value={FormData['STIP_CnRen_12_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_12_Excess1" name='STIP_CnRen_12_Excess1' value={FormData['STIP_CnRen_12_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_12_Cover" name='STIP_CnReI12_Cover' value={FormData['STIP_CnReI12_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_12_Premium2" name='STIP_CnRen_12_Premium2' value={FormData['STIP_CnReI12_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_12_Excess2" name='STIP_CnRen_12_Excess2' value={FormData['STIP_CnRen_12_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr> */}

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Computer equipment</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_13_Recomm"] == 1 ? true : false} name="STIP_CnRen_13_Recomm" onChange={(e)=>{FormData["STIP_CnReI13_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_13_Accepted"] == 1 ? true : false} name="STIP_CnReI13_Accepted" onChange={(e)=>{FormData["STIP_CnRen_13_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_13_CoverAmount" name='STIP_CnRen_13_CoverAmount' value={FormData['STIP_CnRen_13_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_13_Premium1" name='STIP_CnRen_13_Premium1' value={FormData['STIP_CnRen_13_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_13_Excess1" name='STIP_CnRen_13_Excess1' value={FormData['STIP_CnRen_13_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_13_Cover" name='STIP_CnReI13_Cover' value={FormData['STIP_CnReI13_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_13_Premium2" name='STIP_CnRen_13_Premium2' value={FormData['STIP_CnReI13_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_13_Excess2" name='STIP_CnRen_13_Excess2' value={FormData['STIP_CnRen_13_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Items in bank vault</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_14_Recomm"] == 1 ? true : false} name="STIP_CnRen_14_Recomm" onChange={(e)=>{FormData["STIP_CnReI14_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_14_Accepted"] == 1 ? true : false} name="STIP_CnReI14_Accepted" onChange={(e)=>{FormData["STIP_CnRen_14_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_14_CoverAmount" name='STIP_CnRen_14_CoverAmount' value={FormData['STIP_CnRen_14_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_14_Premium1" name='STIP_CnRen_14_Premium1' value={FormData['STIP_CnRen_14_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_14_Excess1" name='STIP_CnRen_14_Excess1' value={FormData['STIP_CnRen_14_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_14_Cover" name='STIP_CnReI14_Cover' value={FormData['STIP_CnReI14_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_14_Premium2" name='STIP_CnRen_14_Premium2' value={FormData['STIP_CnReI14_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_14_Excess2" name='STIP_CnRen_14_Excess2' value={FormData['STIP_CnRen_14_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Jewellery(All jewellery)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_15_Recomm"] == 1 ? true : false} name="STIP_CnRen_15_Recomm" onChange={(e)=>{FormData["STIP_CnReI15_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_15_Accepted"] == 1 ? true : false} name="STIP_CnReI15_Accepted" onChange={(e)=>{FormData["STIP_CnRen_15_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_15_CoverAmount" name='STIP_CnRen_15_CoverAmount' value={FormData['STIP_CnRen_15_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_15_Premium1" name='STIP_CnRen_15_Premium1' value={FormData['STIP_CnRen_15_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_15_Excess1" name='STIP_CnRen_15_Excess1' value={FormData['STIP_CnRen_15_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_15_Cover" name='STIP_CnReI15_Cover' value={FormData['STIP_CnReI15_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_15_Premium2" name='STIP_CnRen_15_Premium2' value={FormData['STIP_CnReI15_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_15_Excess2" name='STIP_CnRen_15_Excess2' value={FormData['STIP_CnRen_15_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Photographic equipment</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_16_Recomm"] == 1 ? true : false} name="STIP_CnRen_16_Recomm" onChange={(e)=>{FormData["STIP_CnReI16_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_16_Accepted"] == 1 ? true : false} name="STIP_CnReI16_Accepted" onChange={(e)=>{FormData["STIP_CnRen_16_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_16_CoverAmount" name='STIP_CnRen_16_CoverAmount' value={FormData['STIP_CnRen_16_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_16_Premium1" name='STIP_CnRen_16_Premium1' value={FormData['STIP_CnRen_16_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_16_Excess1" name='STIP_CnRen_16_Excess1' value={FormData['STIP_CnRen_16_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_16_Cover" name='STIP_CnReI16_Cover' value={FormData['STIP_CnReI16_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_16_Premium2" name='STIP_CnRen_16_Premium2' value={FormData['STIP_CnReI16_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_16_Excess2" name='STIP_CnRen_16_Excess2' value={FormData['STIP_CnRen_16_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Sound Equipment</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_17_Recomm"] == 1 ? true : false} name="STIP_CnRen_17_Recomm" onChange={(e)=>{FormData["STIP_CnReI17_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_17_Accepted"] == 1 ? true : false} name="STIP_CnReI17_Accepted" onChange={(e)=>{FormData["STIP_CnRen_17_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_17_CoverAmount" name='STIP_CnRen_17_CoverAmount' value={FormData['STIP_CnRen_17_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_17_Premium1" name='STIP_CnRen_17_Premium1' value={FormData['STIP_CnRen_17_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_17_Excess1" name='STIP_CnRen_17_Excess1' value={FormData['STIP_CnRen_17_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_17_Cover" name='STIP_CnReI17_Cover' value={FormData['STIP_CnReI17_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_17_Premium2" name='STIP_CnRen_17_Premium2' value={FormData['STIP_CnReI17_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_17_Excess2" name='STIP_CnRen_17_Excess2' value={FormData['STIP_CnRen_17_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Other specify</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_18_Recomm"] == 1 ? true : false} name="STIP_CnRen_18_Recomm" onChange={(e)=>{FormData["STIP_CnReI18_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_18_Accepted"] == 1 ? true : false} name="STIP_CnReI18_Accepted" onChange={(e)=>{FormData["STIP_CnRen_18_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_18_CoverAmount" name='STIP_CnRen_18_CoverAmount' value={FormData['STIP_CnRen_18_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_18_Premium1" name='STIP_CnRen_18_Premium1' value={FormData['STIP_CnRen_18_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_18_Excess1" name='STIP_CnRen_18_Excess1' value={FormData['STIP_CnRen_18_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_18_Cover" name='STIP_CnReI18_Cover' value={FormData['STIP_CnReI18_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_18_Premium2" name='STIP_CnRen_18_Premium2' value={FormData['STIP_CnReI18_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_18_Excess2" name='STIP_CnRen_18_Excess2' value={FormData['STIP_CnRen_18_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Personal legal liability</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_19_Recomm"] == 1 ? true : false} name="STIP_CnRen_19_Recomm" onChange={(e)=>{FormData["STIP_CnReI19_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_19_Accepted"] == 1 ? true : false} name="STIP_CnReI19_Accepted" onChange={(e)=>{FormData["STIP_CnRen_19_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_19_CoverAmount" name='STIP_CnRen_19_CoverAmount' value={FormData['STIP_CnRen_19_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_19_Premium1" name='STIP_CnRen_19_Premium1' value={FormData['STIP_CnRen_19_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_19_Excess1" name='STIP_CnRen_19_Excess1' value={FormData['STIP_CnRen_19_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_19_Cover" name='STIP_CnReI19_Cover' value={FormData['STIP_CnReI19_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_19_Premium2" name='STIP_CnRen_19_Premium2' value={FormData['STIP_CnReI19_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_19_Excess2" name='STIP_CnRen_19_Excess2' value={FormData['STIP_CnRen_19_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>(PLIP)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_20_Recomm"] == 1 ? true : false} name="STIP_CnRen_20_Recomm" onChange={(e)=>{FormData["STIP_CnReI20_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_20_Accepted"] == 1 ? true : false} name="STIP_CnReI20_Accepted" onChange={(e)=>{FormData["STIP_CnRen_20_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_20_CoverAmount" name='STIP_CnRen_20_CoverAmount' value={FormData['STIP_CnRen_20_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_20_Premium1" name='STIP_CnRen_20_Premium1' value={FormData['STIP_CnRen_20_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_20_Excess1" name='STIP_CnRen_20_Excess1' value={FormData['STIP_CnRen_20_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_20_Cover" name='STIP_CnReI20_Cover' value={FormData['STIP_CnReI20_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_20_Premium2" name='STIP_CnRen_20_Premium2' value={FormData['STIP_CnReI20_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_20_Excess2" name='STIP_CnRen_20_Excess2' value={FormData['STIP_CnRen_20_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Vehicles(Refer to quote/policy)</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_21_Recomm"] == 1 ? true : false} name="STIP_CnRen_21_Recomm" onChange={(e)=>{FormData["STIP_CnReI21_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_21_Accepted"] == 1 ? true : false} name="STIP_CnReI21_Accepted" onChange={(e)=>{FormData["STIP_CnRen_21_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_21_CoverAmount" name='STIP_CnRen_21_CoverAmount' value={FormData['STIP_CnRen_21_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_21_Premium1" name='STIP_CnRen_21_Premium1' value={FormData['STIP_CnRen_21_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_21_Excess1" name='STIP_CnRen_21_Excess1' value={FormData['STIP_CnRen_21_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_21_Cover" name='STIP_CnReI21_Cover' value={FormData['STIP_CnReI21_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_21_Premium2" name='STIP_CnRen_21_Premium2' value={FormData['STIP_CnReI21_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_21_Excess2" name='STIP_CnRen_21_Excess2' value={FormData['STIP_CnRen_21_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Car hire</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_22_Recomm"] == 1 ? true : false} name="STIP_CnRen_22_Recomm" onChange={(e)=>{FormData["STIP_CnReI22_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_22_Accepted"] == 1 ? true : false} name="STIP_CnReI22_Accepted" onChange={(e)=>{FormData["STIP_CnRen_22_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_22_CoverAmount" name='STIP_CnRen_22_CoverAmount' value={FormData['STIP_CnRen_22_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_22_Premium1" name='STIP_CnRen_22_Premium1' value={FormData['STIP_CnRen_22_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_22_Excess1" name='STIP_CnRen_22_Excess1' value={FormData['STIP_CnRen_22_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_22_Cover" name='STIP_CnReI22_Cover' value={FormData['STIP_CnReI22_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_22_Premium2" name='STIP_CnRen_22_Premium2' value={FormData['STIP_CnReI22_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_22_Excess2" name='STIP_CnRen_22_Excess2' value={FormData['STIP_CnRen_22_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Excess waiver</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_23_Recomm"] == 1 ? true : false} name="STIP_CnRen_23_Recomm" onChange={(e)=>{FormData["STIP_CnReI23_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_23_Accepted"] == 1 ? true : false} name="STIP_CnReI23_Accepted" onChange={(e)=>{FormData["STIP_CnRen_23_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_23_CoverAmount" name='STIP_CnRen_23_CoverAmount' value={FormData['STIP_CnRen_23_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_23_Premium1" name='STIP_CnRen_23_Premium1' value={FormData['STIP_CnRen_23_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_23_Excess1" name='STIP_CnRen_23_Excess1' value={FormData['STIP_CnRen_23_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_23_Cover" name='STIP_CnReI23_Cover' value={FormData['STIP_CnReI23_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_23_Premium2" name='STIP_CnRen_23_Premium2' value={FormData['STIP_CnReI23_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_23_Excess2" name='STIP_CnRen_23_Excess2' value={FormData['STIP_CnRen_23_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Credit shortfall</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_24_Recomm"] == 1 ? true : false} name="STIP_CnRen_24_Recomm" onChange={(e)=>{FormData["STIP_CnReI24_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_24_Accepted"] == 1 ? true : false} name="STIP_CnReI24_Accepted" onChange={(e)=>{FormData["STIP_CnRen_24_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_24_CoverAmount" name='STIP_CnRen_24_CoverAmount' value={FormData['STIP_CnRen_24_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_24_Premium1" name='STIP_CnRen_24_Premium1' value={FormData['STIP_CnRen_24_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_24_Excess1" name='STIP_CnRen_24_Excess1' value={FormData['STIP_CnRen_24_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_24_Cover" name='STIP_CnReI24_Cover' value={FormData['STIP_CnReI24_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_24_Premium2" name='STIP_CnRen_24_Premium2' value={FormData['STIP_CnReI24_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_24_Excess2" name='STIP_CnRen_24_Excess2' value={FormData['STIP_CnRen_24_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>



          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Watercraft</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_25_Recomm"] == 1 ? true : false} name="STIP_CnRen_25_Recomm" onChange={(e)=>{FormData["STIP_CnReI25_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_25_Accepted"] == 1 ? true : false} name="STIP_CnReI25_Accepted" onChange={(e)=>{FormData["STIP_CnRen_25_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_25_CoverAmount" name='STIP_CnRen_25_CoverAmount' value={FormData['STIP_CnRen_25_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_25_Premium1" name='STIP_CnRen_25_Premium1' value={FormData['STIP_CnRen_25_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_25_Excess1" name='STIP_CnRen_25_Excess1' value={FormData['STIP_CnRen_25_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_25_Cover" name='STIP_CnReI25_Cover' value={FormData['STIP_CnReI25_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_25_Premium2" name='STIP_CnRen_25_Premium2' value={FormData['STIP_CnReI25_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_25_Excess2" name='STIP_CnRen_25_Excess2' value={FormData['STIP_CnRen_25_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Sasria</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_26_Recomm"] == 1 ? true : false} name="STIP_CnRen_26_Recomm" onChange={(e)=>{FormData["STIP_CnReI26_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_26_Accepted"] == 1 ? true : false} name="STIP_CnReI26_Accepted" onChange={(e)=>{FormData["STIP_CnRen_26_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_26_CoverAmount" name='STIP_CnRen_26_CoverAmount' value={FormData['STIP_CnRen_26_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_26_Premium1" name='STIP_CnRen_26_Premium1' value={FormData['STIP_CnRen_26_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_26_Excess1" name='STIP_CnRen_26_Excess1' value={FormData['STIP_CnRen_26_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_26_Cover" name='STIP_CnReI26_Cover' value={FormData['STIP_CnReI26_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_26_Premium2" name='STIP_CnRen_26_Premium2' value={FormData['STIP_CnReI26_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_26_Excess2" name='STIP_CnRen_26_Excess2' value={FormData['STIP_CnRen_26_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Legal access</td>
              <td className="col-2" style={{width:"100px"}}>
                  <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_27_Recomm"] == 1 ? true : false} name="STIP_CnRen_27_Recomm" onChange={(e)=>{FormData["STIP_CnReI27_Recomm"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"90px"}}>
                <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_CnRen_27_Accepted"] == 1 ? true : false} name="STIP_CnReI27_Accepted" onChange={(e)=>{FormData["STIP_CnRen_27_Accepted"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_27_CoverAmount" name='STIP_CnRen_27_CoverAmount' value={FormData['STIP_CnRen_27_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_27_Premium1" name='STIP_CnRen_27_Premium1' value={FormData['STIP_CnRen_27_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_27_Excess1" name='STIP_CnRen_27_Excess1' value={FormData['STIP_CnRen_27_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_27_Cover" name='STIP_CnReI27_Cover' value={FormData['STIP_CnReI27_Cover']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_27_Premium2" name='STIP_CnRen_27_Premium2' value={FormData['STIP_CnReI27_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_27_Excess2" name='STIP_CnRen_27_Excess2' value={FormData['STIP_CnRen_27_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Fees and charges</td>
              <td className="col-10">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_FeeCharges" name='STIP_CnRen_FeeCharges' value={FormData['STIP_CnRen_FeeCharges']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Commissions</td>
              <td className="col-10">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_Commission" name='STIP_CnRen_Commission' value={FormData['STIP_CnRen_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"170px"}}>Total premium</td>
              <td className="col-10">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_CnRen_TotalPremium" name='STIP_CnRen_TotalPremium' value={FormData['STIP_CnRen_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
              </td>
            
          </tr>

          
          
      </tbody>
  </table>
  </div>
</div>

  <div className="row g-3 align-items-center">
      <div className="col-6">
      <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Does the advice given to the client include replacement of an existing financial product?	</label>
      </div>
      <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIP_CnRI_AdviseGiven'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_CnRI_AdviseGiven" name="STIP_CnRI_AdviseGiven"/>
                  </div>
                  <div className="col-2">
                      <label className="form-check-label" htmlFor="STIP_CnRI_AdviseGiven" >
                          Yes
                      </label>
                  </div>
              </div>
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIP_CnRI_AdviseGiven'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_CnRI_AdviseGiven" name="STIP_CnRI_AdviseGiven"/>
                  </div>
                  <div className="col-2">
                      <label className="form-check-label" htmlFor="STIP_CnRI_AdviseGiven" >
                          No
                      </label>
                  </div>
              </div>
          </div>
      </div>
      <div className="col-11" id="provided_identity_2" >
        {
            FicaVisibility1 ?
            <>
                <div id="provided_identity_instructions" className="hidden_class">
                      <p>What is the purpose of this replacement?</p> 
                </div>
                
                
            </> : 
            null
        }

        <p>If yes,answer the following:</p>
        <p>What is the purpose of this replacement?</p>
        {/* <textarea name='STIP_CnRI_ReplacePurpose' onChange={(e) => {onChange(e)}} value={FormData['STIP_CnRI_ReplacePurpose']} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea> */}
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_CnRI_ReplacePurpose']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_CnRI_ReplacePurpose']: newText }) }}
          name="STIP_CnRI_ReplacePurpose"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
        <hr/>
        <p>Reasons why replacement is considered more suitable than retaining or modifying the terminated product:</p>
        {/* <textarea name='STIP_CnRI_ReplaceReason' onChange={(e) => {onChange(e)}} value={FormData['STIP_CnRI_ReplaceReason']} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea> */}
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_CnRI_ReplaceReason']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_CnRI_ReplaceReason']: newText }) }}                     
          name="STIP_CnRI_ReplaceReason"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
        <hr/>
        <p>Suppliers of the product(s) to be replaced:</p>
        {/* <textarea name='STIP_CnRI_ReplaceSupplier' onChange={(e) => {onChange(e)}} value={FormData['STIP_CnRI_ReplaceSupplier']} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea> */}
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_CnRI_ReplaceSupplier']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_CnRI_ReplaceSupplier']: newText }) }}
          name="STIP_CnRI_ReplaceSupplier"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />

    </div>
  </div>


  <br/>
  <hr/>
  {
      FormData['STIP_CnRI_1_Accepted'] === 1 ?
            <>
              
              <div className="row">
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <h6 align="left" style={{ color: "#14848A"}}><b>HOUSE CONTENT</b></h6>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                {
                  Section_HC.length === 0 ?
                    <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_HC(e)}}><FontAwesomeIcon icon={faPlus} /> Add New House Content Section</button>
                  : <></>
                }
                </div>
              </div>
              <div><b>Primary Property</b></div>

              <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                <div className="row">

                    <div className="col-8" style={{paddingBottom: "0.5%"}}>
                        <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label className="col-form-label">Residential area</label>
                            </div>
                            <div className="col-6">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_ResidentialArea" name='STIP_HC_ResidentialArea' value={FormData['STIP_HC_ResidentialArea']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div className="col-8" style={{paddingBottom: "0.5%"}}>
                        <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label className="col-form-label">Street name,number and suburb</label>
                            </div>
                            <div className="col-8">
                                {/* <textarea maxLength={500} spellCheck="true"  id="STIP_HC_StreetNumber" name='STIP_HC_StreetNumber' value={FormData['STIP_HC_StreetNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/> */}
                                <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                  value={FormData['STIP_HC_StreetNumber']}
                                  onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_HC_StreetNumber']: newText }) }}
                                  name="STIP_HC_StreetNumber"
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
                                      'removeformat | wordcount ',
                                      content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                  }}
                                />
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div className="col-8" style={{paddingBottom: "0.5%"}}>
                        <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label className="col-form-label">Postal code</label>
                            </div>
                            <div className="col-6">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_PostalCode" name='STIP_HC_PostalCode' value={FormData['STIP_HC_PostalCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div className="col-8" style={{paddingBottom: "0.5%"}}>
                        <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label className="col-form-label">Type of residence: (e.g., small holding, farm, residential, flat, other) </label>
                            </div>
                            <div className="col-6">
                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_ResidenceType" name='STIP_HC_ResidenceType' value={FormData['STIP_HC_ResidenceType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                            </div>
                        </div>
                    </div>
                    <hr/>

                </div>
              </div>

              <div><i>(Mark the applicable option with an 'X')</i></div> 
              <div><b>Note that the cover amount must be at replacement value and NOT at municipal valuation.</b></div>
                  <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>If flat, is it above ground level? </b></label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_Flat_GroundLevel"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_Flat_GroundLevel" name="STIP_HC_Flat_GroundLevel" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Yes
                                </label>
                            </div>
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_Flat_GroundLevel"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_Flat_GroundLevel" name="STIP_HC_Flat_GroundLevel" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    No
                                </label>
                            </div>
                        </div>

                          </div>
                        </div>
                      </div>
                      <hr/>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Wall construction:  </b></label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_WallConstruction"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_WallConstruction" name="STIP_HC_WallConstruction" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Standard
                                </label>
                            </div>
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_WallConstruction"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_WallConstruction" name="STIP_HC_WallConstruction" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Non Standard
                                </label>
                            </div>
                          </div>
                            

                          </div>
                        </div>
                      </div>
                      <hr/>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Roof construction:  </b></label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_RoofConstruction"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_RoofConstruction" name="STIP_HC_RoofConstruction" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Standard
                                </label>
                            </div>
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_RoofConstruction"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_RoofConstruction" name="STIP_HC_RoofConstruction" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Non Standard
                                </label>
                            </div>
                          </div>

                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div><b>Safety measures:</b></div>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Burglar bars on all windows that open</label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                        <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_BurglarBar"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_BurglarBar" name="STIP_HC_SM_BurglarBar" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_BurglarBar"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_BurglarBar" name="STIP_HC_SM_BurglarBar" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                          </div>
                        </div>
                      </div>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Security gates at all doors that open (including sliding doors) </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                        <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_SecurityGate"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_SecurityGate" name="STIP_HC_SM_SecurityGate" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_SecurityGate"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_SecurityGate" name="STIP_HC_SM_SecurityGate" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                          </div>
                        </div>
                      </div>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. 24 hours monitored linked alarm system  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_AlarmSystem"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_AlarmSystem" name="STIP_HC_SM_AlarmSystem" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Yes
                                </label>
                            </div>
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_AlarmSystem"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_AlarmSystem" name="STIP_HC_SM_AlarmSystem" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    No
                                </label>
                            </div>
                        </div>

                          </div>
                        </div>
                      </div>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Security area (fencing/wall with electric wiring + 24-hour guards and access control)  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_SecurityArea"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_SecurityArea" name="STIP_HC_SM_SecurityArea" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Yes
                                </label>
                            </div>
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_SM_SecurityArea"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_SecurityArea" name="STIP_HC_SM_SecurityArea" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    No
                                </label>
                            </div>
                          </div>

                          </div>
                        </div>
                      </div>
                      <hr/>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>No claims bonus (number of years claimed): </b>  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_NoClaimBonus" name='STIP_HC_NoClaimBonus' value={FormData['STIP_HC_NoClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>House content sum insured:</b>  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_SumInsured" name='STIP_HC_SumInsured' value={FormData['STIP_HC_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div><i>(if client cannot provide a value, client must complete and indicate a value in accordance therewith)</i></div>
                      <hr/>

                      <div><b>Extensions: </b></div>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Home business: Type of business  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HCEx_BusinessType" name='STIP_HCEx_BusinessType' value={FormData['STIP_HCEx_BusinessType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    <br/>
                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Insured amount: (include stock-in-trade) </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HCEx_InsuredAmount" name='STIP_HCEx_InsuredAmount' value={FormData['STIP_HCEx_InsuredAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>

                      <div><b>Accidental damage items:</b></div>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. General: (including mechanical/electrical and electronical):  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_General1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_General1" name="STIP_HC_ADI_General1" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Yes
                                </label>
                            </div>
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_General1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_General1" name="STIP_HC_ADI_General1" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    No
                                </label>
                            </div>
                        </div>

                          </div>
                        </div>
                      </div>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. General: (excluding mechanical/electrical or electronical):  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_General2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_General2" name="STIP_HC_ADI_General2" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    Yes
                                </label>
                            </div>
                            <div className="col-3">
                                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_General2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_General2" name="STIP_HC_ADI_General2" />
                            </div>
                            <div className="col-3">
                                <label className="form-check-label"  >
                                    No
                                </label>
                            </div>
                        </div>

                          </div>
                        </div>
                      </div>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Mechanical/electrical breakdown:  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_MechElecBreakdown"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_MechElecBreakdown" name="STIP_HC_ADI_MechElecBreakdown" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Yes
                                  </label>
                              </div>
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_MechElecBreakdown"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_MechElecBreakdown" name="STIP_HC_ADI_MechElecBreakdown" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      No
                                  </label>
                              </div>
                          </div>

                          </div>
                        </div>
                      </div>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Electronical breakdown:  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_ElectronicalBreakdown"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_ElectronicalBreakdown" name="STIP_HC_ADI_ElectronicalBreakdown" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Yes
                                  </label>
                              </div>
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_ElectronicalBreakdown"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_ElectronicalBreakdown" name="STIP_HC_ADI_ElectronicalBreakdown" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      No
                                  </label>
                              </div>
                          </div>

                          </div>
                        </div>
                      </div>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Power surge cover:  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="row col-6 align-items-center">
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_PowerSurgeCover1" name="STIP_HC_ADI_PowerSurgeCover1" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Yes
                                  </label>
                              </div>
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_PowerSurgeCover1" name="STIP_HC_ADI_PowerSurgeCover1" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      No
                                  </label>
                              </div>
                          </div>

                          </div>
                        </div>
                      </div>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Power surge cover(excluding air conditioner(s)):  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                        <div className="row col-6 align-items-center">
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_PowerSurgeCover2" name="STIP_HC_ADI_PowerSurgeCover2" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Yes
                                  </label>
                              </div>
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_PowerSurgeCover2" name="STIP_HC_ADI_PowerSurgeCover2" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      No
                                  </label>
                              </div>
                          </div>

                          </div>
                        </div>
                      </div>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Power surge cover(including geyser):  </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                        <div className="row col-6 align-items-center">
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_PowerSurgeCover3" name="STIP_HC_ADI_PowerSurgeCover3" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Yes
                                  </label>
                              </div>
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_PowerSurgeCover3" name="STIP_HC_ADI_PowerSurgeCover3" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      No
                                  </label>
                              </div>
                          </div>

                          </div>
                        </div>
                      </div>
                    <hr/>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees</b></label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_Fee" name='STIP_HC_Fee' value={FormData['STIP_HC_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>


                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission</b> </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_Commission" name='STIP_HC_Commission' value={FormData['STIP_HC_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>

                      <div className="row g-4 align-items-center">
                    <div className="col-4">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total Premium</b> </label>
                    </div>
                      <div className="col-8">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_HC_TotalPremium" name='STIP_HC_TotalPremium' value={FormData['STIP_HC_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>

                      <div>It is in your own interest to check the adequacy of the sum insured (replacement value – new for old) by using the House Content Inventory and informing us about your requirements. Similar attention should be given to your All Risk policy.</div>

                      <br/>
                      
                      <b className="col-form-label">Additional Comments</b>
                      <br/>
                      <Editor onBlur={(e)=>{onFieldBlur(e)}}
                        value={FormData['STIP_HC_AddComments']}
                        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_HC_AddComments']: newText }) }}                  
                        name="STIP_HC_AddComments"
                        init={{
                            selector: "textarea",
                            browser_spellcheck : true,
                            placeholder: "Click here to enter text",
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
                            'removeformat | wordcount ',
                            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                        }}
                      />
                      <hr/>
                      
                      {
  Section_HC.length > 0 ?
  Section_HC.map((key, i) => {
    return (
      <>
        
<div className="row">
<div className='col-lg-6 col-md-6 col-sm-12'>
  <h6 align="left" style={{ color: "#14848A"}}><b>HOUSE CONTENT (#{i+2})</b></h6>
</div>
<div className='col-lg-6 col-md-6 col-sm-12'>
  <div className='row'>
    {
      i+1 == Section_HC.length ?
      <div className="col-6">
          <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_HC(e)}}><FontAwesomeIcon icon={faPlus} /> Add New House Content Section</button>
      </div>
      : <></>
    }
    <div className="col-6">
        <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_HC(e)}}><FontAwesomeIcon icon={faMinus} /> Remove House Content Section</button>
    </div>
</div>
</div>
</div>
<div><b>Primary Property</b></div>

<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
<div className="row">

    <div className="col-8" style={{paddingBottom: "0.5%"}}>
        <div className="row g-3 align-items-center">
            <div className="col-4">
                <label className="col-key-label">Residential area</label>
            </div>
            <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_ResidentialArea" name='HC_ResidentialArea' value={key['HC_ResidentialArea']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
            </div>
        </div>
    </div>
    <hr/>

    <div className="col-8" style={{paddingBottom: "0.5%"}}>
        <div className="row g-3 align-items-center">
            <div className="col-4">
                <label className="col-key-label">Street name,number and suburb</label>
            </div>
            <div className="col-8">
                {/* <textarea maxLength={500} spellCheck="true"  id="HC_StreetNumber" name='HC_StreetNumber' value={key['HC_StreetNumber']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/> */}
                <Editor onBlur={(e)=>{onFieldBlur(e)}}
                  value={key['HC_StreetNumber']}
                  onEditorChange={(newText)=>{ on_Section_HC_Value_Change("HC_StreetNumber", i, newText) }}
                  name="HC_StreetNumber"
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
                      toolbar: 'styles | undo redo | keyatselect | ' +
                      'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                      'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
                      'removekeyat | wordcount ',
                      content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                  }}
                />
            </div>
        </div>
    </div>
    <hr/>

    <div className="col-8" style={{paddingBottom: "0.5%"}}>
        <div className="row g-3 align-items-center">
            <div className="col-4">
                <label className="col-key-label">Postal code</label>
            </div>
            <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_PostalCode" name='HC_PostalCode' value={key['HC_PostalCode']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
            </div>
        </div>
    </div>
    <hr/>

    <div className="col-8" style={{paddingBottom: "0.5%"}}>
        <div className="row g-3 align-items-center">
            <div className="col-4">
                <label className="col-key-label">Type of residence: (e.g., small holding, farm, residential, flat, other) </label>
            </div>
            <div className="col-6">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_ResidenceType" name='HC_ResidenceType' value={key['HC_ResidenceType']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
            </div>
        </div>
    </div>
    <hr/>

</div>
</div>

<div><i>(Mark the applicable option with an 'X')</i></div> 
<div><b>Note that the cover amount must be at replacement value and NOT at municipal valuation.</b></div>
  <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>If flat, is it above ground level? </b></label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_Flat_GroundLevel"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_Flat_GroundLevel" name="HC_Flat_GroundLevel" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_Flat_GroundLevel"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_Flat_GroundLevel" name="HC_Flat_GroundLevel" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    No
                </label>
            </div>
        </div>

          </div>
        </div>
      </div>
      <hr/>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>Wall construction:  </b></label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_WallConstruction"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_WallConstruction" name="HC_WallConstruction" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Standard
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_WallConstruction"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_WallConstruction" name="HC_WallConstruction" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Non Standard
                </label>
            </div>
          </div>
            

          </div>
        </div>
      </div>
      <hr/>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>Roof construction:  </b></label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_RoofConstruction"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_RoofConstruction" name="HC_RoofConstruction" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Standard
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_RoofConstruction"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_RoofConstruction" name="HC_RoofConstruction" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Non Standard
                </label>
            </div>
          </div>

          </div>
        </div>
      </div>
      <hr/>
      <div><b>Safety measures:</b></div>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Burglar bars on all windows that open</label>
    </div>
      <div className="col-8">
        <div className="row">
        <div className="row col-6 align-items-center">
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_BurglarBar"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_SM_BurglarBar" name="HC_SM_BurglarBar" />
          </div>
          <div className="col-3">
              <label className="key-check-label"  >
                  Yes
              </label>
          </div>
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_BurglarBar"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_SM_BurglarBar" name="HC_SM_BurglarBar" />
          </div>
          <div className="col-3">
              <label className="key-check-label"  >
                  No
              </label>
          </div>
      </div>

          </div>
        </div>
      </div>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Security gates at all doors that open (including sliding doors) </label>
    </div>
      <div className="col-8">
        <div className="row">
        <div className="row col-6 align-items-center">
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_SecurityGate"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_SM_SecurityGate" name="HC_SM_SecurityGate" />
          </div>
          <div className="col-3">
              <label className="key-check-label"  >
                  Yes
              </label>
          </div>
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_SecurityGate"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_SM_SecurityGate" name="HC_SM_SecurityGate" />
          </div>
          <div className="col-3">
              <label className="key-check-label"  >
                  No
              </label>
          </div>
      </div>

          </div>
        </div>
      </div>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. 24 hours monitored linked alarm system  </label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_AlarmSystem"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_SM_AlarmSystem" name="HC_SM_AlarmSystem" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_AlarmSystem"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_SM_AlarmSystem" name="HC_SM_AlarmSystem" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    No
                </label>
            </div>
        </div>

          </div>
        </div>
      </div>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Security area (fencing/wall with electric wiring + 24-hour guards and access control)  </label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_SecurityArea"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_SM_SecurityArea" name="HC_SM_SecurityArea" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_SM_SecurityArea"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_SM_SecurityArea" name="HC_SM_SecurityArea" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    No
                </label>
            </div>
          </div>

          </div>
        </div>
      </div>
      <hr/>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>No claims bonus (number of years claimed): </b>  </label>
    </div>
      <div className="col-8">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_NoClaimBonus" name='HC_NoClaimBonus' value={key['HC_NoClaimBonus']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>House content sum insured:</b>  </label>
    </div>
      <div className="col-8">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_SumInsured" name='HC_SumInsured' value={key['HC_SumInsured']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <div><i>(if client cannot provide a value, client must complete and indicate a value in accordance therewith)</i></div>
      <hr/>

      <div><b>Extensions: </b></div>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">Home business: Type of business  </label>
    </div>
      <div className="col-8">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HCEx_BusinessType" name='HCEx_BusinessType' value={key['HCEx_BusinessType']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
          </div>
        </div>
      </div>


    <br/>
      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">Insured amount: (include stock-in-trade) </label>
    </div>
      <div className="col-8">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HCEx_InsuredAmount" name='HCEx_InsuredAmount' value={key['HCEx_InsuredAmount']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>

      <div><b>Accidental damage items:</b></div>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. General: (including mechanical/electrical and electronical):  </label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_General1"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_ADI_General1" name="HC_ADI_General1" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_General1"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_ADI_General1" name="HC_ADI_General1" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    No
                </label>
            </div>
        </div>

          </div>
        </div>
      </div>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. General: (excluding mechanical/electrical or electronical):  </label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_General2"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_ADI_General2" name="HC_ADI_General2" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_General2"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_ADI_General2" name="HC_ADI_General2" />
            </div>
            <div className="col-3">
                <label className="key-check-label"  >
                    No
                </label>
            </div>
        </div>

          </div>
        </div>
      </div>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Mechanical/electrical breakdown:  </label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_MechElecBreakdown"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_ADI_MechElecBreakdown" name="HC_ADI_MechElecBreakdown" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_MechElecBreakdown"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_ADI_MechElecBreakdown" name="HC_ADI_MechElecBreakdown" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      No
                  </label>
              </div>
          </div>

          </div>
        </div>
      </div>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Electronical breakdown:  </label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_ElectronicalBreakdown"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_ADI_ElectronicalBreakdown" name="HC_ADI_ElectronicalBreakdown" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_ElectronicalBreakdown"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_ADI_ElectronicalBreakdown" name="HC_ADI_ElectronicalBreakdown" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      No
                  </label>
              </div>
          </div>

          </div>
        </div>
      </div>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Power surge cover:  </label>
    </div>
      <div className="col-8">
        <div className="row">
          <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_PowerSurgeCover1"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_ADI_PowerSurgeCover1" name="HC_ADI_PowerSurgeCover1" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_PowerSurgeCover1"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_ADI_PowerSurgeCover1" name="HC_ADI_PowerSurgeCover1" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      No
                  </label>
              </div>
          </div>

          </div>
        </div>
      </div>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Power surge cover(excluding air conditioner(s)):  </label>
    </div>
      <div className="col-8">
        <div className="row">
        <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_PowerSurgeCover2"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_ADI_PowerSurgeCover2" name="HC_ADI_PowerSurgeCover2" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_PowerSurgeCover2"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_ADI_PowerSurgeCover2" name="HC_ADI_PowerSurgeCover2" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      No
                  </label>
              </div>
          </div>

          </div>
        </div>
      </div>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate">. Power surge cover(including geyser):  </label>
    </div>
      <div className="col-8">
        <div className="row">
        <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_PowerSurgeCover3"] == 1 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="1" id="HC_ADI_PowerSurgeCover3" name="HC_ADI_PowerSurgeCover3" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="key-check-input" checked={key["HC_ADI_PowerSurgeCover3"] == 0 ? true : false} onChange={(e) => {on_Section_HC_Change(e, i)}} type="radio" value="0" id="HC_ADI_PowerSurgeCover3" name="HC_ADI_PowerSurgeCover3" />
              </div>
              <div className="col-3">
                  <label className="key-check-label"  >
                      No
                  </label>
              </div>
          </div>

          </div>
        </div>
      </div>
    <hr/>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>Fees</b></label>
    </div>
      <div className="col-8">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_Fee" name='HC_Fee' value={key['HC_Fee']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>


      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>Commission</b> </label>
    </div>
      <div className="col-8">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_Commission" name='HC_Commission' value={key['HC_Commission']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>

      <div className="row g-4 align-items-center">
    <div className="col-4">
        <label htmlFor="client_name" className="col-key-label" title="If no, motivate"><b>Total Premium</b> </label>
    </div>
      <div className="col-8">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="HC_TotalPremium" name='HC_TotalPremium' value={key['HC_TotalPremium']} onChange={(e) => {on_Section_HC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>

      <div>It is in your own interest to check the adequacy of the sum insured (replacement value – new for old) by using the House Content Inventory and inkeying us about your requirements. Similar attention should be given to your All Risk policy.</div>

      <br/>
      
      <b className="col-key-label">Additional Comments</b>
      <br/>
      <Editor onBlur={(e)=>{onFieldBlur(e)}}
        value={key['HC_AddComments']}
        onEditorChange={(newText)=>{ on_Section_HC_Value_Change("HC_AddComments", i, newText) }}                  
        name="HC_AddComments"
        init={{
            selector: "textarea",
            browser_spellcheck : true,
            placeholder: "Click here to enter text",
            height: 300,
            menu: true,
            plugins: [
                'advlist autolink link lists image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
            ],
            toolbar: 'styles | undo redo | keyatselect | ' +
            'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist  | outdent indent | link | copy paste undo redo | ' +
            'removekeyat | wordcount ',
            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
        }}
      />
      <hr/>
      
     
      </>
    )})
    :<></>
}
            </>
        :
              <>
              </>
    }
    {
        FormData['STIP_CnRI_2_Accepted'] === 1  ?
              <>
              <hr/>
                <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h6 align="left" style={{ color: "#14848A"}}><b>BUILDINGS</b></h6>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                  {
                    Section_Build.length === 0 ?
                      <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_Build(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Buildings Section</button>
                    : <></>
                  }
                  </div>
                </div>
                <div><b>Primary Property</b></div>

                  <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                    <div className="row">

                        <div className="col-8" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label className="col-form-label">Residential area</label>
                                </div>
                                <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_ResidentialArea" name='STIP_Build_ResidentialArea' value={FormData['STIP_Build_ResidentialArea']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="col-8" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label className="col-form-label">Street name,number and suburb</label>
                                </div>
                                <div className="col-8">
                                    {/* <textarea maxLength={500} spellCheck="true"  id="STIP_Build_StreetNumber" name='STIP_Build_StreetNumber' value={FormData['STIP_Build_StreetNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/> */}
                                    <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                      value={FormData['STIP_Build_StreetNumber']}
                                      onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_Build_StreetNumber']: newText }) }}
                                      name="STIP_Build_StreetNumber"
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
                                          'removeformat | wordcount ',
                                          content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                      }}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="col-8" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label className="col-form-label">Postal code</label>
                                </div>
                                <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_PostalCode" name='STIP_Build_PostalCode' value={FormData['STIP_Build_PostalCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="col-8" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                    <label className="col-form-label">Type of residence: (e.g., small holding, farm, residential, flat, other) </label>
                                </div>
                                <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_ResidenceType" name='STIP_Build_ResidenceType' value={FormData['STIP_Build_ResidenceType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                </div>
                            </div>
                        </div>
                        <hr/>

                    </div>
                  </div>

                    <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Type of building:</b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_Type" name='STIP_Build_Type' value={FormData['STIP_Build_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:'200px'}}/>
                                    </div>
                                </div>

                                
                              </div>
                            </div>
                          </div>
                          <hr/>

                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Voluntary excess </b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                              <div className="row col-6 align-items-center">
                                <div className="col-3">
                                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_Voluntary"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_Voluntary" name="STIP_Build_Voluntary" />
                                </div>
                                <div className="col-3">
                                    <label className="form-check-label"  >
                                        Yes
                                    </label>
                                </div>
                                <div className="col-3">
                                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_Voluntary"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_Voluntary" name="STIP_Build_Voluntary" />
                                </div>
                                <div className="col-3">
                                    <label className="form-check-label"  >
                                        No
                                    </label>
                                </div>
                            </div>

                              </div>
                            </div>
                          </div>

                        <hr/>
                        <div><b>Optional cover</b></div>
                        <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Subsidence and landslide</label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                              <div className="row col-6 align-items-center">
                                <div className="col-3">
                                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_SnL"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_SnL" name="STIP_Build_SnL" />
                                </div>
                                <div className="col-3">
                                    <label className="form-check-label"  >
                                        Yes
                                    </label>
                                </div>
                                <div className="col-3">
                                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_SnL"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_SnL" name="STIP_Build_SnL" />
                                </div>
                                <div className="col-3">
                                    <label className="form-check-label"  >
                                        No
                                    </label>
                                </div>
                              </div>

                              </div>
                            </div>
                          </div>

                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Accidental damage items</label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                              <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_ADI"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_ADI" name="STIP_Build_ADI" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Yes
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_ADI"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_ADI" name="STIP_Build_ADI" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          No
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>

                        <hr/>
                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Wall construction </b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_WallConstruction"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_WallConstruction" name="STIP_Build_WallConstruction" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Standard
                                  </label>
                              </div>
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_WallConstruction"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_WallConstruction" name="STIP_Build_WallConstruction" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Non Standard
                                  </label>
                              </div>
                          </div>
                              </div>
                            </div>
                          </div>
                          <hr/>

                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Roof construction </b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_RoofConstruction"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_RoofConstruction" name="STIP_Build_RoofConstruction" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Standard
                                  </label>
                              </div>
                              <div className="col-3">
                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Build_RoofConstruction"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_RoofConstruction" name="STIP_Build_RoofConstruction" />
                              </div>
                              <div className="col-3">
                                  <label className="form-check-label"  >
                                      Non Standard
                                  </label>
                              </div>
                          </div>

                              </div>
                            </div>
                          </div>

                          <hr/>
                      <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees </b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_Fee" name='STIP_Build_Fee' value={FormData['STIP_Build_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                                    </div>
                                </div>
                              </div>
                            </div>
                      </div>

                      <hr/>
                      <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission </b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_Commission" name='STIP_Build_Commission' value={FormData['STIP_Build_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                                    </div>
                                </div>
                              </div>
                            </div>
                      </div>

                      <hr/>
                      <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium</b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_TotalPremium" name='STIP_Build_TotalPremium' value={FormData['STIP_Build_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                                    </div>
                                </div>
                              </div>
                            </div>
                      </div>

                        <br/>
                      {/* <div className="col-2">
                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Build_AdditionalAdvise" name='STIP_Build_AdditionalAdvise' value={FormData['STIP_Build_AdditionalAdvise']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" style={{width:'1000px'}}/>
                      </div> */}
                      <b className="col-form-label">Additional Comments</b>
                      <div>Additional notes on buildings that may affect cover/advice to the client: </div>
                      <br/>
                      <Editor onBlur={(e)=>{onFieldBlur(e)}}
                        value={FormData['STIP_Build_AddComments']}
                        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_Build_AddComments']: newText }) }}                  
                        name="STIP_Build_AddComments"
                        init={{
                            selector: "textarea",
                            browser_spellcheck : true,
                            placeholder: "Click here to enter text",
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
                            'removeformat | wordcount ',
                            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                        }}
                      />
                      {
  Section_Build.length > 0 ?
  Section_Build.map((key, i) => {
    return (
      <>
        <hr/>
                                      
                                      <div className="row">
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                          <h6 align="left" style={{ color: "#14848A"}}><b>BUILDINGS (#{i+2})</b></h6>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                          <div className='row'>
                                              {
                                                i+1 == Section_HC.length ?
                                                <div className="col-6">
                                                    <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_Build(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Buildings Section</button>
                                                </div>
                                                : <></>
                                              }
                                              <div className="col-6">
                                                  <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_Build(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Buildings Section</button>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div><b>Primary Property</b></div>
                      
                                        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                                          <div className="row">
                      
                                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                                  <div className="row g-3 align-items-center">
                                                      <div className="col-4">
                                                          <label className="col-form-label">Residential area</label>
                                                      </div>
                                                      <div className="col-6">
                                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_ResidentialArea" name='Build_ResidentialArea' value={key['Build_ResidentialArea']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <hr/>
                      
                                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                                  <div className="row g-3 align-items-center">
                                                      <div className="col-4">
                                                          <label className="col-form-label">Street name,number and suburb</label>
                                                      </div>
                                                      <div className="col-8">
                                                          {/* <textarea maxLength={500} spellCheck="true"  id="Build_StreetNumber" name='Build_StreetNumber' value={key['Build_StreetNumber']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/> */}
                                                          <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                                            value={key['Build_StreetNumber']}
                                                            onEditorChange={(newText)=>{ on_Section_Build_Value_Change("Build_StreetNumber", i, newText) }}
                                                            name="Build_StreetNumber"
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
                                                                'removeformat | wordcount ',
                                                                content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                                            }}
                                                          />
                                                      </div>
                                                  </div>
                                              </div>
                                              <hr/>
                      
                                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                                  <div className="row g-3 align-items-center">
                                                      <div className="col-4">
                                                          <label className="col-form-label">Postal code</label>
                                                      </div>
                                                      <div className="col-6">
                                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_PostalCode" name='Build_PostalCode' value={key['Build_PostalCode']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
                                                      </div>
                                                  </div>
                                              </div>
                                              <hr/>
                      
                                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                                  <div className="row g-3 align-items-center">
                                                      <div className="col-4">
                                                          <label className="col-form-label">Type of residence: (e.g., small holding, farm, residential, flat, other) </label>
                                                      </div>
                                                      <div className="col-6">
                                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_ResidenceType" name='Build_ResidenceType' value={key['Build_ResidenceType']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <hr/>
                      
                                          </div>
                                        </div>
                      
                                          <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Type of building:</b></label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                      <div className="row col-2 align-items-center">
                                                          <div className="col-2">
                                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_Type" name='Build_Type' value={key['Build_Type']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:'200px'}}/>
                                                          </div>
                                                      </div>
                      
                                                      
                                                    </div>
                                                  </div>
                                                </div>
                                                <hr/>
                      
                                                <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Voluntary excess </b></label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                    <div className="row col-6 align-items-center">
                                                      <div className="col-3">
                                                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_Voluntary"] == 1 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="1" id="Build_Voluntary" name="Build_Voluntary" />
                                                      </div>
                                                      <div className="col-3">
                                                          <label className="form-check-label"  >
                                                              Yes
                                                          </label>
                                                      </div>
                                                      <div className="col-3">
                                                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_Voluntary"] == 0 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="0" id="Build_Voluntary" name="Build_Voluntary" />
                                                      </div>
                                                      <div className="col-3">
                                                          <label className="form-check-label"  >
                                                              No
                                                          </label>
                                                      </div>
                                                  </div>
                      
                                                    </div>
                                                  </div>
                                                </div>
                      
                                              <hr/>
                                              <div><b>Optional cover</b></div>
                                              <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Subsidence and landslide</label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                    <div className="row col-6 align-items-center">
                                                      <div className="col-3">
                                                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_SnL"] == 1 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="1" id="Build_SnL" name="Build_SnL" />
                                                      </div>
                                                      <div className="col-3">
                                                          <label className="form-check-label"  >
                                                              Yes
                                                          </label>
                                                      </div>
                                                      <div className="col-3">
                                                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_SnL"] == 0 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="0" id="Build_SnL" name="Build_SnL" />
                                                      </div>
                                                      <div className="col-3">
                                                          <label className="form-check-label"  >
                                                              No
                                                          </label>
                                                      </div>
                                                    </div>
                      
                                                    </div>
                                                  </div>
                                                </div>
                      
                                                <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Accidental damage items</label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                    <div className="row col-6 align-items-center">
                                                        <div className="col-3">
                                                            <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_ADI"] == 1 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="1" id="Build_ADI" name="Build_ADI" />
                                                        </div>
                                                        <div className="col-3">
                                                            <label className="form-check-label"  >
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="col-3">
                                                            <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_ADI"] == 0 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="0" id="Build_ADI" name="Build_ADI" />
                                                        </div>
                                                        <div className="col-3">
                                                            <label className="form-check-label"  >
                                                                No
                                                            </label>
                                                        </div>
                                                    </div>
                      
                                                    </div>
                                                  </div>
                                                </div>
                      
                                              <hr/>
                                                <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Wall construction </b></label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                  <div className="row col-6 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_WallConstruction"] == 1 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="1" id="Build_WallConstruction" name="Build_WallConstruction" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Standard
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_WallConstruction"] == 0 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="0" id="Build_WallConstruction" name="Build_WallConstruction" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Non Standard
                                                        </label>
                                                    </div>
                                                </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <hr/>
                      
                                                <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Roof construction </b></label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                  <div className="row col-6 align-items-center">
                                                    <div className="col-3">
                                                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_RoofConstruction"] == 1 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="1" id="Build_RoofConstruction" name="Build_RoofConstruction" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Standard
                                                        </label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Build_RoofConstruction"] == 0 ? true : false} onChange={(e) => {on_Section_Build_Change(e, i)}} type="radio" value="0" id="Build_RoofConstruction" name="Build_RoofConstruction" />
                                                    </div>
                                                    <div className="col-3">
                                                        <label className="form-check-label"  >
                                                            Non Standard
                                                        </label>
                                                    </div>
                                                </div>
                      
                                                    </div>
                                                  </div>
                                                </div>
                      
                                                <hr/>
                                            <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees </b></label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                      <div className="row col-2 align-items-center">
                                                          <div className="col-2">
                                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_Fee" name='Build_Fee' value={key['Build_Fee']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                                                          </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                            </div>
                      
                                            <hr/>
                                            <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission </b></label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                      <div className="row col-2 align-items-center">
                                                          <div className="col-2">
                                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_Commission" name='Build_Commission' value={key['Build_Commission']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                                                          </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                            </div>
                      
                                            <hr/>
                                            <div className="row g-4 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium</b></label>
                                              </div>
                                                <div className="col-8">
                                                  <div className="row">
                                                      <div className="row col-2 align-items-center">
                                                          <div className="col-2">
                                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_TotalPremium" name='Build_TotalPremium' value={key['Build_TotalPremium']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                                                          </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                            </div>
                      
                                              <br/>
                                            {/* <div className="col-2">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Build_AdditionalAdvise" name='Build_AdditionalAdvise' value={key['Build_AdditionalAdvise']} onChange={(e) => {on_Section_Build_Change(e, i)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" style={{width:'1000px'}}/>
                                            </div> */}
                                            <b className="col-form-label">Additional Comments</b>
                                            <div>Additional notes on buildings that may affect cover/advice to the client: </div>
                                            <br/>
                                            <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                              value={key['Build_AddComments']}
                                              onEditorChange={(newText)=>{ on_Section_Build_Value_Change("Build_AddComments", i, newText) }}                  
                                              name="Build_AddComments"
                                              init={{
                                                  selector: "textarea",
                                                  browser_spellcheck : true,
                                                  placeholder: "Click here to enter text",
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
                                                  'removeformat | wordcount ',
                                                  content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                              }}
                                            />
                                            <hr/>
                      
                                              <hr/>
                                              <br/>
      </>
    )})
    : <></>
}
                
                      <hr/>

                        <hr/>
                        <br/>
                        <div className="row">
                          <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h6 align="left" style={{ color: "#14848A"}}><b>Additional Property</b></h6>
                          </div>
                          <div className='col-lg-6 col-md-6 col-sm-12'>
                          {
                            Section_AddProp.length === 0 ?
                              <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_AddProp(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Additional Property</button>
                            : <></>
                          }
                          </div>
                        </div>

                        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                          <div className="row">

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Residential area</label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_ResidentialArea" name='STIP_AddProp_ResidentialArea' value={FormData['STIP_AddProp_ResidentialArea']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Street name,number and suburb</label>
                                      </div>
                                      <div className="col-8">
                                          {/* <textarea maxLength={500} spellCheck="true"  id="STIP_AddProp_StreetNumber" name='STIP_AddProp_StreetNumber' value={FormData['STIP_AddProp_StreetNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/> */}
                                          <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                            value={FormData['STIP_AddProp_StreetNumber']}
                                            onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_AddProp_StreetNumber']: newText }) }}
                                            name="STIP_AddProp_StreetNumber"
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
                                                'removeformat | wordcount ',
                                                content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                            }}
                                          />
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Postal code</label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_PostalCode" name='STIP_AddProp_PostalCode' value={FormData['STIP_AddProp_PostalCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Type of residence: (e.g., small holding, farm, residential, flat, other) </label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_ResidenceType" name='STIP_AddProp_ResidenceType' value={FormData['STIP_AddProp_ResidenceType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label"><b>Type of building</b></label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_Type" name='STIP_AddProp_Type' value={FormData['STIP_AddProp_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                      </div>
                                  </div>
                              </div>

                            </div>
                          </div>







                          <hr/>
                      <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Voluntary excess </b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                              <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_Voluntary"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_Voluntary" name="STIP_AddProp_Voluntary" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Yes
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_Voluntary"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_Voluntary" name="STIP_AddProp_Voluntary" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          No
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>
                          <div><b>Optional cover</b></div>

                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Subsidence and landslide</label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                              <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_SnL"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_SnL" name="STIP_AddProp_SnL" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Yes
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_SnL"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_SnL" name="STIP_AddProp_SnL" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          No
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>


                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Accidental damage items</label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_ADI"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_ADI" name="STIP_AddProp_ADI" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Yes
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_ADI"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_ADI" name="STIP_AddProp_ADI" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          No
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>


                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Wall construction</b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_WallConstruction"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_WallConstruction" name="STIP_AddProp_WallConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Standard
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_WallConstruction"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_WallConstruction" name="STIP_AddProp_WallConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Non Standard
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>


                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Roof construction</b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_RoofConstruction"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_RoofConstruction" name="STIP_AddProp_RoofConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Standard
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_AddProp_RoofConstruction"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_RoofConstruction" name="STIP_AddProp_RoofConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Non Standard
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>


                          <div className="row g-4 align-items-center">
                            <div className="col-4">
                              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees</b></label>
                          </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_Fee" name='STIP_AddProp_Fee' value={FormData['STIP_AddProp_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                    </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>

                          <div className="row g-4 align-items-center">
                            <div className="col-4">
                              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission</b></label>
                          </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_Commission" name='STIP_AddProp_Commission' value={FormData['STIP_AddProp_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                    </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>

                          <div className="row g-4 align-items-center">
                            <div className="col-4">
                              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium</b></label>
                          </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_TotalPremium" name='STIP_AddProp_TotalPremium' value={FormData['STIP_AddProp_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                    </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>

                        <br/>
                          {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_AddProp_AdditionalAdvise" name='STIP_AddProp_AdditionalAdvise' value={FormData['STIP_AddProp_AdditionalAdvise']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{width:"1000px"}} />
                          <hr/> */}

                          <br/>
                      <b className="col-form-label">Additional Comments</b>
                      <div>Additional notes on additional properties that may affect cover/advice to the client: </div>
                      <br/>
                      <Editor onBlur={(e)=>{onFieldBlur(e)}}
                        value={FormData['STIP_AddProp_AddComments']}
                        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_AddProp_AddComments']: newText }) }}                  
                        name="STIP_AddProp_AddComments"
                        init={{
                            selector: "textarea",
                            browser_spellcheck : true,
                            placeholder: "Click here to enter text",
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
                            'removeformat | wordcount ',
                            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                        }}
                      />
                      <hr/>
                      {
  Section_AddProp.length > 0 ?
  Section_AddProp.map((key, i) => {
    return (
      <>
              
                        <div className="row">
                          <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h6 align="left" style={{ color: "#14848A"}}><b>Additional Property (#{i+2})</b></h6>
                          </div>
                          <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='row'>
                                {
                                  i+1 == Section_HC.length ?
                                  <div className="col-6">
                                      <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_HC(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Additional Property</button>
                                  </div>
                                  : <></>
                                }
                                <div className="col-6">
                                    <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_HC(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Additional Property</button>
                                </div>
                            </div>
                          </div>
                        </div>

                        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                          <div className="row">

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Residential area</label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_ResidentialArea" name='AddProp_ResidentialArea' value={key['AddProp_ResidentialArea']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Street name,number and suburb</label>
                                      </div>
                                      <div className="col-8">
                                          {/* <textarea maxLength={500} spellCheck="true"  id="AddProp_StreetNumber" name='AddProp_StreetNumber' value={key['AddProp_StreetNumber']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/> */}
                                          <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                            value={key['AddProp_StreetNumber']}
                                            onEditorChange={(newText)=>{ on_Section_AddProp_Value_Change("AddProp_StreetNumber", i, newText) }}
                                            name="AddProp_StreetNumber"
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
                                                'removeformat | wordcount ',
                                                content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                                            }}
                                          />
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Postal code</label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_PostalCode" name='AddProp_PostalCode' value={key['AddProp_PostalCode']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label">Type of residence: (e.g., small holding, farm, residential, flat, other) </label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_ResidenceType" name='AddProp_ResidenceType' value={key['AddProp_ResidenceType']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                      </div>
                                  </div>
                              </div>
                              <hr/>

                              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                  <div className="row g-3 align-items-center">
                                      <div className="col-4">
                                          <label className="col-form-label"><b>Type of building</b></label>
                                      </div>
                                      <div className="col-6">
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_Type" name='AddProp_Type' value={key['AddProp_Type']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                      </div>
                                  </div>
                              </div>

                            </div>
                          </div>







                          <hr/>
                      <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Voluntary excess </b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                              <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_Voluntary"] == 1 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="1" id="AddProp_Voluntary" name="AddProp_Voluntary" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Yes
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_Voluntary"] == 0 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="0" id="AddProp_Voluntary" name="AddProp_Voluntary" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          No
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>
                          <div><b>Optional cover</b></div>

                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Subsidence and landslide</label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                              <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_SnL"] == 1 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="1" id="AddProp_SnL" name="AddProp_SnL" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Yes
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_SnL"] == 0 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="0" id="AddProp_SnL" name="AddProp_SnL" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          No
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>


                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Accidental damage items</label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_ADI"] == 1 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="1" id="AddProp_ADI" name="AddProp_ADI" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Yes
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_ADI"] == 0 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="0" id="AddProp_ADI" name="AddProp_ADI" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          No
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>


                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Wall construction</b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_WallConstruction"] == 1 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="1" id="AddProp_WallConstruction" name="AddProp_WallConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Standard
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_WallConstruction"] == 0 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="0" id="AddProp_WallConstruction" name="AddProp_WallConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Non Standard
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>


                          <div className="row g-4 align-items-center">
                        <div className="col-4">
                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Roof construction</b></label>
                        </div>
                          <div className="col-8">
                            <div className="row">
                            <div className="row col-6 align-items-center">
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_RoofConstruction"] == 1 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="1" id="AddProp_RoofConstruction" name="AddProp_RoofConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Standard
                                      </label>
                                  </div>
                                  <div className="col-3">
                                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["AddProp_RoofConstruction"] == 0 ? true : false} onChange={(e) => {on_Section_AddProp_Change(e, i)}} type="radio" value="0" id="AddProp_RoofConstruction" name="AddProp_RoofConstruction" />
                                  </div>
                                  <div className="col-3">
                                      <label className="form-check-label"  >
                                          Non Standard
                                      </label>
                                  </div>
                              </div>

                              </div>
                            </div>
                          </div>
                          <hr/>


                          <div className="row g-4 align-items-center">
                            <div className="col-4">
                              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees</b></label>
                          </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_Fee" name='AddProp_Fee' value={key['AddProp_Fee']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                    </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>

                          <div className="row g-4 align-items-center">
                            <div className="col-4">
                              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission</b></label>
                          </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_Commission" name='AddProp_Commission' value={key['AddProp_Commission']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                    </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>

                          <div className="row g-4 align-items-center">
                            <div className="col-4">
                              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium</b></label>
                          </div>
                          <div className="col-8">
                            <div className="row">
                                <div className="row col-2 align-items-center">
                                    <div className="col-2">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_TotalPremium" name='AddProp_TotalPremium' value={key['AddProp_TotalPremium']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                    </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>

                        <br/>
                          {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="AddProp_AdditionalAdvise" name='AddProp_AdditionalAdvise' value={key['AddProp_AdditionalAdvise']} onChange={(e) => {on_Section_AddProp_Change(e, i)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{width:"1000px"}} />
                          <hr/> */}

                          <br/>
                      <b className="col-form-label">Additional Comments</b>
                      <div>Additional notes on additional properties that may affect cover/advice to the client: </div>
                      <br/>
                      <Editor onBlur={(e)=>{onFieldBlur(e)}}
                        value={key['AddProp_AddComments']}
                        onEditorChange={(newText)=>{ on_Section_Build_Value_Change("AddProp_AddComments", i, newText) }}                  
                        name="AddProp_AddComments"
                        init={{
                            selector: "textarea",
                            browser_spellcheck : true,
                            placeholder: "Click here to enter text",
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
                            'removeformat | wordcount ',
                            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                        }}
                      />
      </>
    )})
    : <></>
}
                
                          </>
        :
              <>
              </>
    }
    {
        FormData['STIP_CnRI_21_Accepted'] === 1 ?
              <>
        <div className="row">
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <h6 align="left" style={{ color: "#14848A"}}><b>VEHICLE</b></h6>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                {
                  Section_Vehicle.length === 0 ?
                    <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_Vehicle(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Vehicle</button>
                  : <></>
                }
                </div>
              </div>
        <div>Please see attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number and engine number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Vehicle in the name of:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_Owner" name='STIP_Vehicle_Owner' value={FormData['STIP_Vehicle_Owner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_RegOwner" name='STIP_Vehicle_RegOwner' value={FormData['STIP_Vehicle_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Usage:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_Usage" name='STIP_Vehicle_Usage' value={FormData['STIP_Vehicle_Usage']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      
                  </div>
              </div>
          </div>
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Overnight parking</b></label>
                  </div>
                  <div className="col-4">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select"  name='STIP_Vehicle_ONParkingOptions' value={FormData['STIP_Vehicle_ONParkingOptions']} onChange={(e) => {onChange(e)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_ONParking" name='STIP_Vehicle_ONParking' value={FormData['STIP_Vehicle_ONParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>

          {/* <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>R:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_ONOtherParking" name='STIP_Vehicle_ONOtherParking' value={FormData['STIP_Vehicle_ONOtherParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div> */}
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Type of cover required</b></label>
                  </div>
                  <div className="col-6">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select"  name='STIP_Vehicle_CoverType' value={FormData['STIP_Vehicle_CoverType']} onChange={(e) => {onChange(e)}}
                      // value={} onChange={(e) => {onChange(e)}}
                      aria-label="Default select example">
                        <option value="0" selected>Select the type of cover</option>
                        <option value="1">Comprehensive (cover for comprehensive risks)</option>
                        <option value="2">Limited (Fire and Theft)</option>
                        <option value="3">Third Party (cover for claims of 3rd parties)</option>
                        <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                    </select>
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">

                      <label htmlFor="id_number" className="col-form-label"><b></b></label>
                  </div>
                  <div className="col-6">
                      
                  </div>
              </div>
          </div>
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-4 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Safety measures</b></label>
                  </div>
                  <div className="col-8">
                    <div className='row'>
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM1"] == 1 ? true : false} name="STIP_Vehicle_SM1" onChange={(e)=>{FormData["STIP_Vehicle_SM1"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                            Immobilizer  
                            </label>
                        </div>
                      </div> 
                        
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM2"] == 1 ? true : false} name="STIP_Vehicle_SM2" onChange={(e)=>{FormData["STIP_Vehicle_SM2"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                              Gear lock
                            </label>
                        </div>
                      </div> 
                    </div>
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-4 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      {/* <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM2"] == 1 ? true : false} name="STIP_Vehicle_SM2" onChange={(e)=>{FormData["STIP_Vehicle_SM2"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/> */}
                        <label className="form-check-label" for="flexCheckDefault">
                        {/* Tracking device   */}
                        </label>
                    </div>
                  </td> 
                    
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      {/* <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM2"] == 1 ? true : false} name="STIP_Vehicle_SM2" onChange={(e)=>{FormData["STIP_Vehicle_SM2"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/> */}
                        <label className="form-check-label" for="flexCheckDefault">
                          {/* Data dot */}
                        </label>
                    </div>
                  </td> 
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-4 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b></b></label>
                  </div>
                  <div className="col-8">
                    <div className='row'>
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM3"] == 1 ? true : false} name="STIP_Vehicle_SM3" onChange={(e)=>{FormData["STIP_Vehicle_SM3"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                            Tracking device  
                            </label>
                        </div>
                      </div> 
                        
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM4"] == 1 ? true : false} name="STIP_Vehicle_SM4" onChange={(e)=>{FormData["STIP_Vehicle_SM4"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                              Data dot
                            </label>
                        </div>
                      </div> 
                    </div>
                  </div>
              </div>
          </div>

        
      </div>
  </div>
      <br/>
  <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Regular driver:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_Driver" name='STIP_Vehicle_Driver' value={FormData['STIP_Vehicle_Driver']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_DriverLicIssDate" name='STIP_Vehicle_DriverLicIssDate' value={FormData['STIP_Vehicle_DriverLicIssDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
      <hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Driver's license issue date:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="STIP_Vehicle_DriverLicIssDate" name='STIP_Vehicle_DriverLicIssDate' value={FormData['STIP_Vehicle_DriverLicIssDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter date."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>License code:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_LicCode" name='STIP_Vehicle_LicCode' value={FormData['STIP_Vehicle_LicCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
      <hr/>
        

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_SumInsured" name='STIP_Vehicle_SumInsured' value={FormData['STIP_Vehicle_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

      <hr/>
          

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>No claims bonus:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_ClaimBonus" name='STIP_Vehicle_ClaimBonus' value={FormData['STIP_Vehicle_ClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

  
      </div>
  </div>
      <hr/>
  <div className="row g-2 align-items-center">
  <div className="col-2">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Voluntary excess</b></label>
      </div>
        <div className="col-6">
          <div className="row">
            <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_VoluntaryExcess"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_VoluntaryExcess" name="STIP_Vehicle_VoluntaryExcess" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_VoluntaryExcess"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_VoluntaryExcess" name="STIP_Vehicle_VoluntaryExcess" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      No
                  </label>
              </div>
          </div>

            </div>
          </div>
        </div>
        <hr/>

      <div><b>Extras:</b></div>

      <div className="row g-2 align-items-center">
  <div className="col-2">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"></label>
      </div>
        <div className="col-10">
          <div className="row">
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras1"] == 1 ? true : false} name="STIP_Vehicle_Extras1" onChange={(e)=>{FormData["STIP_Vehicle_Extras1"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                          Air Conditioning
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount1' value={FormData['STIP_Vehicle_ExtrasAmount1']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras2"] == 1 ? true : false} name="STIP_Vehicle_Extras2" onChange={(e)=>{FormData["STIP_Vehicle_Extras2"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Mag wheels
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount2' value={FormData['STIP_Vehicle_ExtrasAmount2']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras3"] == 1 ? true : false} name="STIP_Vehicle_Extras3" onChange={(e)=>{FormData["STIP_Vehicle_Extras3"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                          Canopy
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount3' value={FormData['STIP_Vehicle_ExtrasAmount3']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras4"] == 1 ? true : false} name="STIP_Vehicle_Extras4" onChange={(e)=>{FormData["STIP_Vehicle_Extras4"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Electric windows
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount4' value={FormData['STIP_Vehicle_ExtrasAmount4']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras5"] == 1 ? true : false} name="STIP_Vehicle_Extras5" onChange={(e)=>{FormData["STIP_Vehicle_Extras5"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Leather seats
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount5' value={FormData['STIP_Vehicle_ExtrasAmount5']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras6"] == 1 ? true : false} name="STIP_Vehicle_Extras6" onChange={(e)=>{FormData["STIP_Vehicle_Extras6"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Tow bar
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount6' value={FormData['STIP_Vehicle_ExtrasAmount6']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras7"] == 1 ? true : false} name="STIP_Vehicle_Extras7" onChange={(e)=>{FormData["STIP_Vehicle_Extras7"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Roof carrier
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount7' value={FormData['STIP_Vehicle_ExtrasAmount7']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras8"] == 1 ? true : false} name="STIP_Vehicle_Extras8" onChange={(e)=>{FormData["STIP_Vehicle_Extras8"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Sunroof
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount8' value={FormData['STIP_Vehicle_ExtrasAmount8']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras9"] == 1 ? true : false} name="STIP_Vehicle_Extras9" onChange={(e)=>{FormData["STIP_Vehicle_Extras9"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Power steering
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount9' value={FormData['STIP_Vehicle_ExtrasAmount9']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras10"] == 1 ? true : false} name="STIP_Vehicle_Extras10" onChange={(e)=>{FormData["STIP_Vehicle_Extras10"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Sound
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount10' value={FormData['STIP_Vehicle_ExtrasAmount10']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras11"] == 1 ? true : false} name="STIP_Vehicle_Extras11" onChange={(e)=>{FormData["STIP_Vehicle_Extras11"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Car Keys
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount11' value={FormData['STIP_Vehicle_ExtrasAmount11']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras12"] == 1 ? true : false} name="STIP_Vehicle_Extras12" onChange={(e)=>{FormData["STIP_Vehicle_Extras12"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Tools,spare parts
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount12' value={FormData['STIP_Vehicle_ExtrasAmount12']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIP_Vehicle_Extras13"] == 1 ? true : false} name="STIP_Vehicle_Extras13" onChange={(e)=>{FormData["STIP_Vehicle_Extras13"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Restricted travelling cover
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount13' value={FormData['STIP_Vehicle_ExtrasAmount13']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                      <label className="form-check-label"  >
                      Other
                      </label>
                  </div>
                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="text" placeholder="Enter text" name='STIP_Vehicle_Extras14' value={FormData['STIP_Vehicle_Extras14']} onChange={(e) => {onChange(e)}}   />
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount14' value={FormData['STIP_Vehicle_ExtrasAmount14']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
            </div>
          </div>
        <div className="col-10">
          <div className="row">
              <div className="row align-items-center">
                  <div className="col-4">
                    <b>Additional cover required by client:</b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Market value/hire purchase difference
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                      <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC1" name="STIP_Vehicle_AC1" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC1" name="STIP_Vehicle_AC1" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Waiver of excess (NOT if client choose voluntary excess)
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC2" name="STIP_Vehicle_AC2" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC2" name="STIP_Vehicle_AC2" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Car hire	
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC3" name="STIP_Vehicle_AC3" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC3" name="STIP_Vehicle_AC3" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Damage to rims and tyres
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC4" name="STIP_Vehicle_AC4" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC4" name="STIP_Vehicle_AC4" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Contents of 4 x 4
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC5" name="STIP_Vehicle_AC5" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_Vehicle_AC5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC5" name="STIP_Vehicle_AC5" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <br/>
              <br/>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Fees:</b></label>
                    </div>
                    <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_Fees" name='STIP_Vehicle_Fees' value={FormData['STIP_Vehicle_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
              </div>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Commission:</b></label>
                    </div>
                    <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_Commission" name='STIP_Vehicle_Commission' value={FormData['STIP_Vehicle_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
              </div>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Total Premium:</b></label>
                    </div>
                    <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_TotalPremium" name='STIP_Vehicle_TotalPremium' value={FormData['STIP_Vehicle_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
                
              </div>
                {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Vehicle_Comments" name='STIP_Vehicle_Comments' value={FormData['STIP_Vehicle_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />
              <br/> */}
              <b className="col-form-label">Additional Comments</b>
              <div>Additional notes on vehicles that may affect cover/advice to the client:</div>
              <br/>
              <Editor onBlur={(e)=>{onFieldBlur(e)}}
                value={FormData['STIP_Vehicle_AddComments']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_Vehicle_AddComments']: newText }) }}                  
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    placeholder: "Click here to enter text",
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
                    'removeformat | wordcount ',
                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                }}
              />
              <hr/>
              
            </div>
          </div>
        </div>
        <br/>
        
        {
  Section_Vehicle.length > 0 ?
  Section_Vehicle.map((key, i) => {
    return (
      <>
             
<div className="row">
  <div className='col-lg-6 col-md-6 col-sm-12'>
    <h6 align="left" style={{ color: "#14848A"}}><b>VEHICLE (#{i+2})</b></h6>
  </div>
  <div className='col-lg-6 col-md-6 col-sm-12'>
    <div className='row'>
        {
          i+1 == Section_Vehicle.length ?
          <div className="col-6">
              <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_Vehicle(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Vehicle</button>
          </div>
          : <></>
        }
        <div className="col-6">
            <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_Vehicle(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Vehicle</button>
        </div>
    </div>
  </div>
</div>
        <div>Please see attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number and engine number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Vehicle in the name of:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_Owner" name='Vehicle_Owner' value={key['Vehicle_Owner']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_RegOwner" name='Vehicle_RegOwner' value={key['Vehicle_RegOwner']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Usage:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_Usage" name='Vehicle_Usage' value={key['Vehicle_Usage']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      
                  </div>
              </div>
          </div>
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Overnight parking</b></label>
                  </div>
                  <div className="col-6">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select"  name='Vehicle_ONParkingOptions' value={key['Vehicle_ONParkingOptions']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_ONParking" name='Vehicle_ONParking' value={key['Vehicle_ONParking']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>

          {/* <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>R:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_ONOtherParking" name='Vehicle_ONOtherParking' value={key['Vehicle_ONOtherParking']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div> */}
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Type of cover required</b></label>
                  </div>
                  <div className="col-6">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select"  name='Vehicle_CoverType' value={key['Vehicle_CoverType']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}
                      // value={} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}
                      aria-label="Default select example">
                        <option value="0" selected>Select the type of cover</option>
                        <option value="1">Comprehensive (cover for comprehensive risks)</option>
                        <option value="2">Limited (Fire and Theft)</option>
                        <option value="3">Third Party (cover for claims of 3rd parties)</option>
                        <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                    </select>
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Select the type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">

                      <label htmlFor="id_number" className="col-form-label"><b></b></label>
                  </div>
                  <div className="col-6">
                      
                  </div>
              </div>
          </div>
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-4 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Safety measures</b></label>
                  </div>
                  <div className="col-8">
                    <div className='row'>
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={key["Vehicle_SM1"] == 1 ? true : false} name="Vehicle_SM1" onChange={(e)=>{key["Vehicle_SM1"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_SM1", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_SM2", i, 1)}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                            Immobilizer  
                            </label>
                        </div>
                      </div> 
                        
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={key["Vehicle_SM2"] == 1 ? true : false} name="Vehicle_SM2" onChange={(e)=>{key["Vehicle_SM2"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_SM2", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_SM2", i, 1)}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                              Gear lock
                            </label>
                        </div>
                      </div> 
                    </div>
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-4 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      {/* <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={key["Vehicle_SM2"] == 1 ? true : false} name="Vehicle_SM2" onChange={(e)=>{key["Vehicle_SM2"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_SM2", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_SM2", i, 1)}}/> */}
                        <label className="form-check-label" for="flexCheckDefault">
                        {/* Tracking device   */}
                        </label>
                    </div>
                  </td> 
                    
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      {/* <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={key["Vehicle_SM2"] == 1 ? true : false} name="Vehicle_SM2" onChange={(e)=>{key["Vehicle_SM2"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_SM2", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_SM2", i, 1)}}/> */}
                        <label className="form-check-label" for="flexCheckDefault">
                          {/* Data dot */}
                        </label>
                    </div>
                  </td> 
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-4 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b></b></label>
                  </div>
                  <div className="col-8">
                    <div className='row'>
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={key["Vehicle_SM3"] == 1 ? true : false} name="Vehicle_SM3" onChange={(e)=>{key["Vehicle_SM3"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_SM3", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_SM3", i, 1)}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                            Tracking device  
                            </label>
                        </div>
                      </div> 
                        
                      <div className="col-6" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                        <div className="form-check">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="checkbox" checked={key["Vehicle_SM4"] == 1 ? true : false} name="Vehicle_SM4" onChange={(e)=>{key["Vehicle_SM4"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_SM4", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_SM4", i, 1)}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                              Data dot
                            </label>
                        </div>
                      </div> 
                    </div>
                  </div>
              </div>
          </div>

        
      </div>
  </div>
      <br/>
  <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Regular driver:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_Driver" name='Vehicle_Driver' value={key['Vehicle_Driver']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_DriverLicIssDate" name='Vehicle_DriverLicIssDate' value={key['Vehicle_DriverLicIssDate']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
      <hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Driver's license issue date:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date" id="Vehicle_DriverLicIssDate" name='Vehicle_DriverLicIssDate' value={key['Vehicle_DriverLicIssDate']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter date."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>License code:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_LicCode" name='Vehicle_LicCode' value={key['Vehicle_LicCode']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
      <hr/>
        

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_SumInsured" name='Vehicle_SumInsured' value={key['Vehicle_SumInsured']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

      <hr/>
          

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>No claims bonus:</b></label>
                  </div>
                  <div className="col-6">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_ClaimBonus" name='Vehicle_ClaimBonus' value={key['Vehicle_ClaimBonus']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

  
      </div>
  </div>
      <hr/>
  <div className="row g-2 align-items-center">
  <div className="col-2">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Voluntary excess</b></label>
      </div>
        <div className="col-6">
          <div className="row">
            <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_VoluntaryExcess"] == 1 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="1" id="Vehicle_VoluntaryExcess" name="Vehicle_VoluntaryExcess" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_VoluntaryExcess"] == 0 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="0" id="Vehicle_VoluntaryExcess" name="Vehicle_VoluntaryExcess" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      No
                  </label>
              </div>
          </div>

            </div>
          </div>
        </div>
        <hr/>

      <div><b>Extras:</b></div>

      <div className="row g-2 align-items-center">
  <div className="col-2">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"></label>
      </div>
        <div className="col-10">
          <div className="row">
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras1"] == 1 ? true : false} name="Vehicle_Extras1" onChange={(e)=>{key["Vehicle_Extras1"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras1", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extras1", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                          Air Conditioning
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount1' value={key['Vehicle_ExtrasAmount1']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras2"] == 1 ? true : false} name="Vehicle_Extras2" onChange={(e)=>{key["Vehicle_Extras2"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras2", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extras2", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Mag wheels
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount2' value={key['Vehicle_ExtrasAmount2']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras3"] == 1 ? true : false} name="Vehicle_Extras3" onChange={(e)=>{key["Vehicle_Extras3"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras3", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extras3", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                          Canopy
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount3' value={key['Vehicle_ExtrasAmount3']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras4"] == 1 ? true : false} name="Vehicle_Extras4" onChange={(e)=>{key["Vehicle_Extras4"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras4", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extras4", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Electric windows
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount4' value={key['Vehicle_ExtrasAmount4']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras5"] == 1 ? true : false} name="Vehicle_Extras5" onChange={(e)=>{key["Vehicle_Extras5"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras5", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra5", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Leather seats
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount5' value={key['Vehicle_ExtrasAmount5']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras6"] == 1 ? true : false} name="Vehicle_Extras6" onChange={(e)=>{key["Vehicle_Extras6"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras6", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra6", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Tow bar
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount6' value={key['Vehicle_ExtrasAmount6']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras7"] == 1 ? true : false} name="Vehicle_Extras7" onChange={(e)=>{key["Vehicle_Extras7"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras7", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra7", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Roof carrier
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount7' value={key['Vehicle_ExtrasAmount7']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras8"] == 1 ? true : false} name="Vehicle_Extras8" onChange={(e)=>{key["Vehicle_Extras8"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras8", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra8", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Sunroof
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount8' value={key['Vehicle_ExtrasAmount8']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras9"] == 1 ? true : false} name="Vehicle_Extras9" onChange={(e)=>{key["Vehicle_Extras9"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras9", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra9", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Power steering
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount9' value={key['Vehicle_ExtrasAmount9']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras10"] == 1 ? true : false} name="Vehicle_Extras10" onChange={(e)=>{key["Vehicle_Extras10"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras10", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra10", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Sound
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount10' value={key['Vehicle_ExtrasAmount10']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras11"] == 1 ? true : false} name="Vehicle_Extras11" onChange={(e)=>{key["Vehicle_Extras11"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras11", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra11", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Car Keys
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount11' value={key['Vehicle_ExtrasAmount11']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras12"] == 1 ? true : false} name="Vehicle_Extras12" onChange={(e)=>{key["Vehicle_Extras12"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras12", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_Extra12", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Tools,spare parts
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount12' value={key['Vehicle_ExtrasAmount12']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={key["Vehicle_Extras13"] == 1 ? true : false} name="Vehicle_Extras13" onChange={(e)=>{key["Vehicle_Extras13"] == 1 ? on_Section_Vehicle_Value_Change("Vehicle_Extras13", i, 0) : on_Section_Vehicle_Value_Change("Vehicle_SM1", i, 1)}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Restricted travelling cover
                      </label>
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount13' value={key['Vehicle_ExtrasAmount13']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                      <label className="form-check-label"  >
                      Other
                      </label>
                  </div>
                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="text" placeholder="Enter text" name='Vehicle_Extras14' value={key['Vehicle_Extras14']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
                  <div className="col-6">
                    <input onBlur={(e)=>{onFieldBlur(e)}} className="form-control" type="number" placeholder="R 0.0" name='Vehicle_ExtrasAmount14' value={key['Vehicle_ExtrasAmount14']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}}   />
                  </div>
              </div>
            </div>
          </div>
        <div className="col-10">
          <div className="row">
              <div className="row align-items-center">
                  <div className="col-4">
                    <b>Additional cover required by client:</b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Market value/hire purchase difference
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                      <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC1"] == 1 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="1" id="Vehicle_AC1" name="Vehicle_AC1" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC1"] == 0 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="0" id="Vehicle_AC1" name="Vehicle_AC1" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Waiver of excess (NOT if client choose voluntary excess)
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC2"] == 1 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="1" id="Vehicle_AC2" name="Vehicle_AC2" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC2"] == 0 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="0" id="Vehicle_AC2" name="Vehicle_AC2" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Car hire	
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC3"] == 1 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="1" id="Vehicle_AC3" name="Vehicle_AC3" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC3"] == 0 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="0" id="Vehicle_AC3" name="Vehicle_AC3" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Damage to rims and tyres
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC4"] == 1 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="1" id="Vehicle_AC4" name="Vehicle_AC4" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC4"] == 0 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="0" id="Vehicle_AC4" name="Vehicle_AC4" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <div className="row align-items-center">
                  <div className="col-4">
                    <b></b>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Contents of 4 x 4
                      </label>
                  </div>
                  <div className='col-4'> 
                    <div className="row">
                    <div className="row col-6 align-items-center">
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC5"] == 1 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="1" id="Vehicle_AC5" name="Vehicle_AC5" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["Vehicle_AC5"] == 0 ? true : false} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} type="radio" value="0" id="Vehicle_AC5" name="Vehicle_AC5" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  No
                              </label>
                          </div>
                      </div>

                    </div>
                  </div>

              </div>
              <br/>
              <br/>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Fees:</b></label>
                    </div>
                    <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_Fees" name='Vehicle_Fees' value={key['Vehicle_Fees']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
              </div>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Commission:</b></label>
                    </div>
                    <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_Commission" name='Vehicle_Commission' value={key['Vehicle_Commission']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
              </div>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Total Premium:</b></label>
                    </div>
                    <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_TotalPremium" name='Vehicle_TotalPremium' value={key['Vehicle_TotalPremium']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
                
              </div>
                {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Vehicle_Comments" name='Vehicle_Comments' value={key['Vehicle_Comments']} onChange={(e) => {on_Section_Vehicle_Change(e, i)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />
              <br/> */}
              <b className="col-form-label">Additional Comments</b>
              <div>Additional notes on vehicles that may affect cover/advice to the client:</div>
              <br/>
              <Editor onBlur={(e)=>{onFieldBlur(e)}}
                value={key['Vehicle_AddComments']}
                onEditorChange={(newText)=>{ on_Section_Vehicle_Value_Change("Vehicle_AddComments", i, newText) }}                  
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    placeholder: "Click here to enter text",
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
                    'removeformat | wordcount ',
                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                }}
              />
              <hr/>
              
            </div>
          </div>
        </div>
        <br/>
      </>
    )})
    : <></>
}
                
        <hr/>
        

        

        


        <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h6 align="left" style={{ color: "#14848A"}}><b>MOTORCYCLES</b></h6>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                  {
                    Section_MotorC.length === 0 ?
                      <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_MotorC(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Motorcycle</button>
                    : <></>
                  }
                  </div>
                </div>
        <div>Please see attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number and engine number etc.</div>

      <br/>
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_RegOwner" name='STIP_MotorC_RegOwner' value={FormData['STIP_MotorC_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Usage:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_Usage" name='STIP_MotorC_Usage' value={FormData['STIP_MotorC_Usage']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the class of use."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Overnight parking:</b></label>
                  </div>
                  <div className="col-8">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="STIP_MotorC_ONParkingOptions" name='STIP_MotorC_ONParkingOptions' value={FormData['STIP_MotorC_ONParkingOptions']} onChange={(e) => {onChange(e)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_ONParking" name='STIP_MotorC_ONParking' value={FormData['STIP_MotorC_ONParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_ONOtherParking" name='STIP_MotorC_ONOtherParking' value={FormData['STIP_MotorC_ONOtherParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type of cover required:</b></label>
                  </div>
                  <div className="col-8">
                      <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="STIP_MotorC_CoverType" name='STIP_MotorC_CoverType' value={FormData["STIP_MotorC_CoverType"]} onChange={(e) => {onChange(e)}}
                        aria-label="Default select example">
                          <option value="0" selected>Select the type of cover</option>
                          <option value="1">Comprehensive (cover for comprehensive risks)</option>
                          <option value="2">Limited (Fire and Theft)</option>
                          <option value="3">Third Party (cover for claims of 3rd parties)</option>
                          <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                      </select>
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the type of cover."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Regular driver:</b></label>
                  </div>
                  <div className="col-8">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="STIP_MotorC_Driver" name='STIP_MotorC_Driver' value={FormData['STIP_MotorC_Driver']} onChange={(e) => {onChange(e)}}
                        aria-label="Default select example">
                          <option value="0" selected>Select the relevant regular driver description</option>
                          <option value="1">Financial dependant child</option>
                          <option value="2">Policy Holder</option>
                          <option value="3">Spouse</option>
                          <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                      </select>
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}

                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the relevant regular driver description ."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_Driver1" name='STIP_MotorC_Driver1' value={FormData['STIP_MotorC_Driver1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other regular driver."  aria-describedby="" />
                  </div>
              </div>
          </div>
          
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Driver license issue date:</b></label>
                  </div>
                  <div className="col-8">
                      <input type="date" onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_DriverLicIssDate" name='STIP_MotorC_DriverLicIssDate' value={FormData['STIP_MotorC_DriverLicIssDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click or tap to enter date."  aria-describedby="" />
                  </div>
              </div>
          </div>
          
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>License code:</b></label>
                  </div>
                  <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_LicCode" name='STIP_MotorC_LicCode' value={FormData['STIP_MotorC_LicCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> 
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>No claims bonus:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_ClaimBonus" name='STIP_MotorC_ClaimBonus' value={FormData['STIP_MotorC_ClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_SumInsured" name='STIP_MotorC_SumInsured' value={FormData['STIP_MotorC_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>
      <hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Fees:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_Fees" name='STIP_MotorC_Fees' value={FormData['STIP_MotorC_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Commission:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_Commission" name='STIP_MotorC_Commission' value={FormData['STIP_MotorC_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Total premium:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_TotalPremium" name='STIP_MotorC_TotalPremium' value={FormData['STIP_MotorC_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>
          

        </div>
      </div>
      
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_MotorC_Comments" name='STIP_MotorC_Comments' value={FormData['STIP_MotorC_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />
      <br/> */}
      <b className="col-form-label">Additional Comments</b>
      <div>Additional notes on motorcycles that may affect cover/advice to the client:</div>
      <br/>
      <Editor onBlur={(e)=>{onFieldBlur(e)}}
        value={FormData['STIP_MotorC_AddComments']}
        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_MotorC_AddComments']: newText }) }}                  
        init={{
            selector: "textarea",
            browser_spellcheck : true,
            placeholder: "Click here to enter text",
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
            'removeformat | wordcount ',
            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
        }}
      />
      <hr/>
      {
  Section_MotorC.length > 0 ?
  Section_MotorC.map((key, i) => {
    return (
      <>
        

                
<div className="row">
  <div className='col-lg-6 col-md-6 col-sm-12'>
    <h6 align="left" style={{ color: "#14848A"}}><b>MOTORCYCLES (#{i+2})</b></h6>
  </div>
  <div className='col-lg-6 col-md-6 col-sm-12'>
    <div className='row'>
        {
          i+1 == Section_MotorC.length ?
          <div className="col-6">
              <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_MotorC(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Motorcycle</button>
          </div>
          : <></>
        }
        <div className="col-6">
            <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_MotorC(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Motorcycle</button>
        </div>
    </div>
  </div>
</div>
        <div>Please see attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number and engine number etc.</div>

      <br/>
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_RegOwner" name='MotorC_RegOwner' value={key['MotorC_RegOwner']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Usage:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_Usage" name='MotorC_Usage' value={key['MotorC_Usage']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Select the class of use."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Overnight parking:</b></label>
                  </div>
                  <div className="col-8">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="MotorC_ONParkingOptions" name='MotorC_ONParkingOptions' value={key['MotorC_ONParkingOptions']} onChange={(e) => {on_Section_MotorC_Change(e, i)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_ONParking" name='MotorC_ONParking' value={key['MotorC_ONParking']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_ONOtherParking" name='MotorC_ONOtherParking' value={key['MotorC_ONOtherParking']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type of cover required:</b></label>
                  </div>
                  <div className="col-8">
                      <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="MotorC_CoverType" name='MotorC_CoverType' value={key["MotorC_CoverType"]} onChange={(e) => {on_Section_MotorC_Change(e, i)}}
                        aria-label="Default select example">
                          <option value="0" selected>Select the type of cover</option>
                          <option value="1">Comprehensive (cover for comprehensive risks)</option>
                          <option value="2">Limited (Fire and Theft)</option>
                          <option value="3">Third Party (cover for claims of 3rd parties)</option>
                          <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                      </select>
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Select the type of cover."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Regular driver:</b></label>
                  </div>
                  <div className="col-8">
                    <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="MotorC_Driver" name='MotorC_Driver' value={key['MotorC_Driver']} onChange={(e) => {on_Section_MotorC_Change(e, i)}}
                        aria-label="Default select example">
                          <option value="0" selected>Select the relevant regular driver description</option>
                          <option value="1">Financial dependant child</option>
                          <option value="2">Policy Holder</option>
                          <option value="3">Spouse</option>
                          <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                      </select>
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}

                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Select the relevant regular driver description ."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_Driver1" name='MotorC_Driver1' value={key['MotorC_Driver1']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Other regular driver."  aria-describedby="" />
                  </div>
              </div>
          </div>
          
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Driver license issue date:</b></label>
                  </div>
                  <div className="col-8">
                      <input type="date" onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_DriverLicIssDate" name='MotorC_DriverLicIssDate' value={key['MotorC_DriverLicIssDate']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click or tap to enter date."  aria-describedby="" />
                  </div>
              </div>
          </div>
          
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>License code:</b></label>
                  </div>
                  <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_LicCode" name='MotorC_LicCode' value={key['MotorC_LicCode']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> 
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>No claims bonus:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_ClaimBonus" name='MotorC_ClaimBonus' value={key['MotorC_ClaimBonus']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_SumInsured" name='MotorC_SumInsured' value={key['MotorC_SumInsured']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>
      <hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Fees:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_Fees" name='MotorC_Fees' value={key['MotorC_Fees']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Commission:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_Commission" name='MotorC_Commission' value={key['MotorC_Commission']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Total premium:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_TotalPremium" name='MotorC_TotalPremium' value={key['MotorC_TotalPremium']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>
          

        </div>
      </div>
      
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="MotorC_Comments" name='MotorC_Comments' value={key['MotorC_Comments']} onChange={(e) => {on_Section_MotorC_Change(e, i)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />
      <br/> */}
      <b className="col-form-label">Additional Comments</b>
      <div>Additional notes on motorcycles that may affect cover/advice to the client:</div>
      <br/>
      <Editor onBlur={(e)=>{onFieldBlur(e)}}
        value={key['MotorC_AddComments']}
        onEditorChange={(newText)=>{ on_Section_MotorC_Value_Change("MotorC_AddComments", i, newText) }}                  
        init={{
            selector: "textarea",
            browser_spellcheck : true,
            placeholder: "Click here to enter text",
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
            'removeformat | wordcount ',
            content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
        }}
      />
      <hr/>
      </>
    )})
    : <></>
}
                
      {/* TRAILER/CARAVAN */}
      <div className="row">
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h6 align="left" style={{ color: "#14848A"}}><b>TRAILER/CARAVAN</b></h6>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        {
          Section_Trailer.length === 0 ?
            <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_Trailer(e)}}><FontAwesomeIcon icon={faPlus} /> Add New TRAILER/CARAVAN</button>
          : <></>
        }
        </div>
      </div>
      <div>Please see the attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_RegOwner" name='STIP_Trailer_RegOwner' value={FormData['STIP_Trailer_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_Type" name='STIP_Trailer_Type' value={FormData['STIP_Trailer_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Overnight parking:</b></label>
                  </div>
                  <div className="col-8">
                      <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="STIP_Trailer_ONParkingOptions" name='STIP_Trailer_ONParkingOptions' value={FormData["STIP_Trailer_ONParkingOptions"]} onChange={(e) => {onChange(e)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_ONOtherParking" name='STIP_Trailer_ONOtherParking' value={FormData['STIP_Trailer_ONOtherParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>No claims bonus:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_ClaimBonus" name='STIP_Trailer_ClaimBonus' value={FormData['STIP_Trailer_ClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_SumInsured" name='STIP_Trailer_SumInsured' value={FormData['STIP_Trailer_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>
<hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Fees:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_Fees" name='STIP_Trailer_Fees' value={FormData['STIP_Trailer_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Commission:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_Commission" name='STIP_Trailer_Commission' value={FormData['STIP_Trailer_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Total premium:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_TotalPremium" name='STIP_Trailer_TotalPremium' value={FormData['STIP_Trailer_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

        </div>
      </div>
        
        <br/>
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_Trailer_Comments" name='STIP_Trailer_Comments' value={FormData['STIP_Trailer_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />

        <br/> */}
        <b className="col-form-label">Additional Comments</b>
          <div>Additional notes on trailer that may affect cover/advice to the client:</div>
          <br/>
          <Editor onBlur={(e)=>{onFieldBlur(e)}}
            value={FormData['STIP_Trailer_AddComments']}
            onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_Trailer_AddComments']: newText }) }}                  
            name="STIP_Trailer_AddComments"
            init={{
                selector: "textarea",
                browser_spellcheck : true,
                placeholder: "Click here to enter text",
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
                'removeformat | wordcount ',
                content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
            }}
          />
          <hr/>
          {
  Section_Trailer.length > 0 ?
  Section_Trailer.map((key, i) => {
    return (
      <>
        <div className="row">
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h6 align="left" style={{ color: "#14848A"}}><b>TRAILER/CARAVAN (#{i+2})</b></h6>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='row'>
        {
          i+1 == Section_Trailer.length ?
          <div className="col-6">
              <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_Trailer(e)}}><FontAwesomeIcon icon={faPlus} /> Add New TRAILER/CARAVAN</button>
          </div>
          : <></>
        }
        <div className="col-6">
            <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_Trailer(e)}}><FontAwesomeIcon icon={faMinus} /> Remove TRAILER/CARAVAN</button>
        </div>
    </div>
        </div>
      </div>
      <div>Please see the attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_RegOwner" name='Trailer_RegOwner' value={key['Trailer_RegOwner']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_Type" name='Trailer_Type' value={key['Trailer_Type']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Overnight parking:</b></label>
                  </div>
                  <div className="col-8">
                      <select onBlur={(e)=>{onFieldBlur(e)}} className="text-start form-select" id="Trailer_ONParkingOptions" name='Trailer_ONParkingOptions' value={key["Trailer_ONParkingOptions"]} onChange={(e) => {on_Section_Trailer_Change(e, i)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_ONOtherParking" name='Trailer_ONOtherParking' value={key['Trailer_ONOtherParking']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>No claims bonus:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_ClaimBonus" name='Trailer_ClaimBonus' value={key['Trailer_ClaimBonus']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_SumInsured" name='Trailer_SumInsured' value={key['Trailer_SumInsured']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>
<hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Fees:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_Fees" name='Trailer_Fees' value={key['Trailer_Fees']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Commission:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_Commission" name='Trailer_Commission' value={key['Trailer_Commission']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Total premium:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_TotalPremium" name='Trailer_TotalPremium' value={key['Trailer_TotalPremium']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

        </div>
      </div>
        
        <br/>
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="Trailer_Comments" name='Trailer_Comments' value={key['Trailer_Comments']} onChange={(e) => {on_Section_Trailer_Change(e, i)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />

        <br/> */}
        <b className="col-form-label">Additional Comments</b>
          <div>Additional notes on trailer that may affect cover/advice to the client:</div>
          <br/>
          <Editor onBlur={(e)=>{onFieldBlur(e)}}
            value={key['Trailer_AddComments']}
            onEditorChange={(newText)=>{ on_Section_Trailer_Value_Change("Trailer_AddComments", i, newText) }}                  
            name="Trailer_AddComments"
            init={{
                selector: "textarea",
                browser_spellcheck : true,
                placeholder: "Click here to enter text",
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
                'removeformat | wordcount ',
                content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
            }}
          />
          <hr/>
      </>
    )})
    : <></>
}
                
          <hr/>
              </> :<></>}
    {
        FormData['STIP_CnRI_25_Accepted'] === 1 ?
              <>
               <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h6 align="left" style={{ color: "#14848A"}}><b>WATER CRAFT</b></h6>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                  {
                    Section_WaterC.length === 0 ?
                      <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_WaterC(e)}}><FontAwesomeIcon icon={faPlus} /> Add New WATER CRAFT</button>
                    : <></>
                  }
                  </div>
                </div>
      <div>Please see the attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_RegOwner" name='STIP_WaterC_RegOwner' value={FormData['STIP_WaterC_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_Type" name='STIP_WaterC_Type' value={FormData['STIP_WaterC_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Length of hull:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_Hull" name='STIP_WaterC_Hull' value={FormData['STIP_WaterC_Hull']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Craft sum insured</b></label>
                  </div>
                  <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_SumInsured" name='STIP_WaterC_SumInsured' value={FormData['STIP_WaterC_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="     R 0.00"  aria-describedby="" /> 
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>VIN Number:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_VIN" name='STIP_WaterC_VIN' value={FormData['STIP_WaterC_VIN']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Engine number:</b></label>
                  </div>
                  <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_EngineNumber" name='STIP_WaterC_EngineNumber' value={FormData['STIP_WaterC_EngineNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />  
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Optical cover required by client:</b></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Glitter finish:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_OC_Glitter" name='STIP_WaterC_OC_Glitter' value={FormData['STIP_WaterC_OC_Glitter']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Specified accessories:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_OC_SpecifiedAccessories" name='STIP_WaterC_OC_SpecifiedAccessories' value={FormData['STIP_WaterC_OC_SpecifiedAccessories']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>      
<hr/>
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Outboard motor type:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_OC_MotorType" name='STIP_WaterC_OC_MotorType' value={FormData['STIP_WaterC_OC_MotorType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Output:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_OC_Output" name='STIP_WaterC_OC_Output' value={FormData['STIP_WaterC_OC_Output']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
          <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Fees:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_Fees" name='STIP_WaterC_Fees' value={FormData['STIP_WaterC_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Commission:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_Commission" name='STIP_WaterC_Commission' value={FormData['STIP_WaterC_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Total premium:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_TotalPremium" name='STIP_WaterC_TotalPremium' value={FormData['STIP_WaterC_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />

                  </div>
              </div>
          </div>

        </div>
      </div>

<br/>
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_WaterC_Comments" name='STIP_WaterC_Comments' value={FormData['STIP_WaterC_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" /> */}
        <b className="col-form-label">Additional Comments</b>
      <div>Additional notes on watercraft that may affect cover/advice to the client:</div>
        <br/>
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_WaterC_AddComments']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_WaterC_AddComments']: newText }) }}                  
          init={{
              selector: "textarea",
              browser_spellcheck : true,
              placeholder: "Click here to enter text",
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
        <hr/>
        {
  Section_WaterC.length > 0 ?
  Section_WaterC.map((key, i) => {
    return (
      <>
        
        <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h6 align="left" style={{ color: "#14848A"}}><b>WATER CRAFT</b></h6>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='row'>
                      {
                        i+1 == Section_WaterC.length ?
                        <div className="col-6">
                            <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_WaterC(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Water Craft</button>
                        </div>
                        : <></>
                      }
                      <div className="col-6">
                          <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_WaterC(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Water Craft</button>
                      </div>
                  </div>
                  </div>
                </div>
      <div>Please see the attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_RegOwner" name='WaterC_RegOwner' value={key['WaterC_RegOwner']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_Type" name='WaterC_Type' value={key['WaterC_Type']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Length of hull:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_Hull" name='WaterC_Hull' value={key['WaterC_Hull']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Craft sum insured</b></label>
                  </div>
                  <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_SumInsured" name='WaterC_SumInsured' value={key['WaterC_SumInsured']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="     R 0.00"  aria-describedby="" /> 
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>VIN Number:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_VIN" name='WaterC_VIN' value={key['WaterC_VIN']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Engine number:</b></label>
                  </div>
                  <div className="col-8">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_EngineNumber" name='WaterC_EngineNumber' value={key['WaterC_EngineNumber']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />  
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Optical cover required by client:</b></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Glitter finish:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_OC_Glitter" name='WaterC_OC_Glitter' value={key['WaterC_OC_Glitter']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Specified accessories:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_OC_SpecifiedAccessories" name='WaterC_OC_SpecifiedAccessories' value={key['WaterC_OC_SpecifiedAccessories']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>      
<hr/>
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Outboard motor type:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_OC_MotorType" name='WaterC_OC_MotorType' value={key['WaterC_OC_MotorType']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Output:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_OC_Output" name='WaterC_OC_Output' value={key['WaterC_OC_Output']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
          <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Fees:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_Fees" name='WaterC_Fees' value={key['WaterC_Fees']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Commission:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_Commission" name='WaterC_Commission' value={key['WaterC_Commission']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={key['IP_InvestmentTerm']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>
<hr/>
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Total premium:</b></label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_TotalPremium" name='WaterC_TotalPremium' value={key['WaterC_TotalPremium']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />

                  </div>
              </div>
          </div>

        </div>
      </div>

<br/>
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="WaterC_Comments" name='WaterC_Comments' value={key['WaterC_Comments']} onChange={(e) => {on_Section_WaterC_Change(e, i)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" /> */}
        <b className="col-form-label">Additional Comments</b>
      <div>Additional notes on watercraft that may affect cover/advice to the client:</div>
        <br/>
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={key['WaterC_AddComments']}
          onEditorChange={(newText)=>{ on_Section_WaterC_Value_Change("WaterC_AddComments", i, newText) }}                  
          init={{
              selector: "textarea",
              browser_spellcheck : true,
              placeholder: "Click here to enter text",
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
        <hr/>
      </>
    )})
    : <></>
}
                
        </>
        
        :
              <>
              </>
    }
        {
          FormData["STIP_CnRI_19_Accepted"] === 1 ?
          <>
            <br/>
            <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h6 align="left" style={{ color: "#14848A"}}><b>PERSONAL LEGAL LIABILITY</b></h6>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                  {
                    Section_PersonalLL.length === 0 ?
                      <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_PersonalLL(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Personal Legal Liability</button>
                    : <></>
                  }
                  </div>
                </div>
      <div>R5 000 000: (this cover is COMPULSORY if household content or building cover is taken)</div>

      <div><b>Optional: Extended personal legal liability:</b></div>
      
      <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Indemnity limit: R10 million or R 20 million	</label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-6 align-items-center">
                <div className="col-3">
                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_PersonalLL_IndemnityLimit"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_PersonalLL_IndemnityLimit" name="STIP_PersonalLL_IndemnityLimit" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_PersonalLL_IndemnityLimit"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_PersonalLL_IndemnityLimit" name="STIP_PersonalLL_IndemnityLimit" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        No
                    </label>
                </div>
            </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate">If 'Yes', state required indemnity limit: </label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_PersonalLL_IndemnityLimitDetail" name='STIP_PersonalLL_IndemnityLimitDetail' value={FormData['STIP_PersonalLL_IndemnityLimitDetail']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees:</b></label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_PersonalLL_Fees" name='STIP_PersonalLL_Fees' value={FormData['STIP_PersonalLL_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission:</b></label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_PersonalLL_Commission" name='STIP_PersonalLL_Commission' value={FormData['STIP_PersonalLL_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium:</b></label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_PersonalLL_TotalPremium" name='STIP_PersonalLL_TotalPremium' value={FormData['STIP_PersonalLL_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

      <br/>
        
        {/* <textare maxLength={500} spellCheck="true"  id="STIP_PersonalLL_Comments" name='STIP_PersonalLL_Comments' value={FormData['STIP_PersonalLL_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} /> */}
        {/* <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_PersonalLL_Comments']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_PersonalLL_Comments']: newText }) }}
          name="STIP_PersonalLL_Comments"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        /> */}

        <br/>
        <b className="col-form-label">Additional Comments</b>
        <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
              <br/>
              <Editor onBlur={(e)=>{onFieldBlur(e)}}
                value={FormData['STIP_PersonalLL_AddComments']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_PersonalLL_AddComments']: newText }) }}                  
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    placeholder: "Click here to enter text",
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
                    'removeformat | wordcount ',
                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                }}
              />
              <hr/>
              {
  Section_PersonalLL.length > 0 ?
  Section_PersonalLL.map((key, i) => {
    return (
      <>
        
        <br/>
            <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h6 align="left" style={{ color: "#14848A"}}><b>PERSONAL LEGAL LIABILITY</b></h6>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='row'>
                        {
                          i+1 == Section_PersonalLL.length ?
                          <div className="col-6">
                              <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_PersonalLL(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Personal Legal Liability</button>
                          </div>
                          : <></>
                        }
                        <div className="col-6">
                            <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_PersonalLL(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Personal Legal Liability</button>
                        </div>
                    </div>
                  </div>
                </div>
      <div>R5 000 000: (this cover is COMPULSORY if household content or building cover is taken)</div>

      <div><b>Optional: Extended personal legal liability:</b></div>
      
      <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Indemnity limit: R10 million or R 20 million	</label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-6 align-items-center">
                <div className="col-3">
                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["PersonalLL_IndemnityLimit"] == 1 ? true : false} onChange={(e) => {on_Section_PersonalLL_Change(e, i)}} type="radio" value="1" id="PersonalLL_IndemnityLimit" name="PersonalLL_IndemnityLimit" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["PersonalLL_IndemnityLimit"] == 0 ? true : false} onChange={(e) => {on_Section_PersonalLL_Change(e, i)}} type="radio" value="0" id="PersonalLL_IndemnityLimit" name="PersonalLL_IndemnityLimit" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        No
                    </label>
                </div>
            </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate">If 'Yes', state required indemnity limit: </label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="PersonalLL_IndemnityLimitDetail" name='PersonalLL_IndemnityLimitDetail' value={key['PersonalLL_IndemnityLimitDetail']} onChange={(e) => {on_Section_PersonalLL_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees:</b></label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="PersonalLL_Fees" name='PersonalLL_Fees' value={key['PersonalLL_Fees']} onChange={(e) => {on_Section_PersonalLL_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission:</b></label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="PersonalLL_Commission" name='PersonalLL_Commission' value={key['PersonalLL_Commission']} onChange={(e) => {on_Section_PersonalLL_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

        <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium:</b></label>
      </div>
        <div className="col-6">
          <div className="row">
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="PersonalLL_TotalPremium" name='PersonalLL_TotalPremium' value={key['PersonalLL_TotalPremium']} onChange={(e) => {on_Section_PersonalLL_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

      <br/>
        
        {/* <textare maxLength={500} spellCheck="true"  id="PersonalLL_Comments" name='PersonalLL_Comments' value={key['PersonalLL_Comments']} onChange={(e) => {on_Section_PersonalLL_Change(e, i)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} /> */}
        {/* <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={key['PersonalLL_Comments']}
          onEditorChange={(newText)=>{ setkey({...key, ['PersonalLL_Comments']: newText }) }}
          name="PersonalLL_Comments"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        /> */}

        <br/>
        <b className="col-form-label">Additional Comments</b>
        <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
              <br/>
              <Editor onBlur={(e)=>{onFieldBlur(e)}}
                value={key['PersonalLL_AddComments']}
                onEditorChange={(newText)=>{ on_Section_HC_Value_Change("PersonalLL_AddComments", i, newText)  }}                  
                init={{
                    selector: "textarea",
                    browser_spellcheck : true,
                    placeholder: "Click here to enter text",
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
                    'removeformat | wordcount ',
                    content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
                }}
              />
              <hr/>
          
      </>
    )})
    : <></>
}
                
          </>
          :<></>

        }
        {
          FormData["STIP_CnRI_27_Recomm"] === 1 ?
          <>
          <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h6 align="left" style={{ color: "#14848A"}}><b>LEGAL ACCESS</b></h6>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                  {
                    Section_LegalA.length === 0 ?
                      <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_LegalA(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Legal Access</button>
                    : <></>
                  }
                  </div>
                </div>
            <h6 align="left" style={{ color: "#14848A"}}><b></b></h6>
          
          
          <div className="row g-2 align-items-center">
      <div className="col-3">
              <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Indemnity limit: R10 million or R 20 million	</label>
          </div>
            <div className="col-6">
              <div className="row">
                <div className="row col-6 align-items-center">
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_LegalA_IndemnityLimit"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_LegalA_IndemnityLimit" name="STIP_LegalA_IndemnityLimit" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIP_LegalA_IndemnityLimit"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_LegalA_IndemnityLimit" name="STIP_LegalA_IndemnityLimit" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>

                </div>
              </div>
            </div>
            <hr/>

            <div className="row g-2 align-items-center">
      <div className="col-3">
              <label htmlFor="client_name" className="col-form-label" title="If no, motivate">If 'Yes', state required indemnity limit: </label>
          </div>
            <div className="col-6">
              <div className="row">
                  <div className="row col-2 align-items-center">
                      <div className="col-2">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_LegalA_IndemnityLimitDetail" name='STIP_LegalA_IndemnityLimitDetail' value={FormData['STIP_LegalA_IndemnityLimitDetail']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                      </div>
                      
                  </div>

                </div>
              </div>
            </div>
            <hr/>

            <div className="row g-2 align-items-center">
      <div className="col-3">
              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees:</b></label>
          </div>
            <div className="col-6">
              <div className="row">
                  <div className="row col-2 align-items-center">
                      <div className="col-2">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_LegalA_Fees" name='STIP_LegalA_Fees' value={FormData['STIP_LegalA_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                      </div>
                      
                  </div>

                </div>
              </div>
            </div>
            <hr/>

            <div className="row g-2 align-items-center">
      <div className="col-3">
              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission:</b></label>
          </div>
            <div className="col-6">
              <div className="row">
                  <div className="row col-2 align-items-center">
                      <div className="col-2">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_LegalA_Commission" name='STIP_LegalA_Commission' value={FormData['STIP_LegalA_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                      </div>
                      
                  </div>

                </div>
              </div>
            </div>
            <hr/>

            <div className="row g-2 align-items-center">
      <div className="col-3">
              <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium:</b></label>
          </div>
            <div className="col-6">
              <div className="row">
                  <div className="row col-2 align-items-center">
                      <div className="col-2">
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_LegalA_TotalPremium" name='STIP_LegalA_TotalPremium' value={FormData['STIP_LegalA_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                      </div>
                      
                  </div>

                </div>
              </div>
            </div>
            <hr/>

          <br/>
            {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_LegalA_Comments" name='STIP_LegalA_Comments' value={FormData['STIP_LegalA_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} /> */}

            <br/>
            <b className="col-form-label">Additional Comments</b>
            <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
            <br/>
            <Editor onBlur={(e)=>{onFieldBlur(e)}}
              value={FormData['STIP_LegalA_AddComments']}
              onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_LegalA_AddComments']: newText }) }}                  
              init={{
                  selector: "textarea",
                  browser_spellcheck : true,
                  placeholder: "Click here to enter text",
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
                  'removeformat | wordcount ',
                  content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
              }}
            />
            <hr/>
            {
  Section_LegalA.length > 0 ?
  Section_LegalA.map((key, i) => {
    return (
      <>
        <div className="row">
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <h6 align="left" style={{ color: "#14848A"}}><b>LEGAL ACCESS</b></h6>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='row'>
                    {
                      i+1 == Section_LegalA.length ?
                      <div className="col-6">
                          <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-primary fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-primary sanlam " 
                                : "btn btn-primary sfp "
                            } type='button' onClick={(e)=>{AddNewSection_LegalA(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Legal Access</button>
                      </div>
                      : <></>
                    }
                    <div className="col-6">
                        <button className= { 
                                user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-danger sfp " 
                                : user['email'].includes('fs4p') ? "btn btn-danger fs4p " 
                                : user['email'].includes('sanlam') ? "btn btn-danger sanlam " 
                                : "btn btn-danger sfp "
                            } type='button' onClick={(e)=>{RemoveNewSection_LegalA(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Legal Access</button>
                    </div>
                </div>
                </div>
              </div>
          <h6 align="left" style={{ color: "#14848A"}}><b></b></h6>
        
        
        <div className="row g-2 align-items-center">
    <div className="col-3">
            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Indemnity limit: R10 million or R 20 million	</label>
        </div>
          <div className="col-6">
            <div className="row">
              <div className="row col-6 align-items-center">
                <div className="col-3">
                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["LegalA_IndemnityLimit"] == 1 ? true : false} onChange={(e) => {on_Section_LegalA_Change(e, i)}} type="radio" value="1" id="LegalA_IndemnityLimit" name="LegalA_IndemnityLimit" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={key["LegalA_IndemnityLimit"] == 0 ? true : false} onChange={(e) => {on_Section_LegalA_Change(e, i)}} type="radio" value="0" id="LegalA_IndemnityLimit" name="LegalA_IndemnityLimit" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        No
                    </label>
                </div>
            </div>

              </div>
            </div>
          </div>
          <hr/>

          <div className="row g-2 align-items-center">
    <div className="col-3">
            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">If 'Yes', state required indemnity limit: </label>
        </div>
          <div className="col-6">
            <div className="row">
                <div className="row col-2 align-items-center">
                    <div className="col-2">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="LegalA_IndemnityLimitDetail" name='LegalA_IndemnityLimitDetail' value={key['LegalA_IndemnityLimitDetail']} onChange={(e) => {on_Section_LegalA_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                    </div>
                    
                </div>

              </div>
            </div>
          </div>
          <hr/>

          <div className="row g-2 align-items-center">
    <div className="col-3">
            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Fees:</b></label>
        </div>
          <div className="col-6">
            <div className="row">
                <div className="row col-2 align-items-center">
                    <div className="col-2">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="LegalA_Fees" name='LegalA_Fees' value={key['LegalA_Fees']} onChange={(e) => {on_Section_LegalA_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                    </div>
                    
                </div>

              </div>
            </div>
          </div>
          <hr/>

          <div className="row g-2 align-items-center">
    <div className="col-3">
            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Commission:</b></label>
        </div>
          <div className="col-6">
            <div className="row">
                <div className="row col-2 align-items-center">
                    <div className="col-2">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="LegalA_Commission" name='LegalA_Commission' value={key['LegalA_Commission']} onChange={(e) => {on_Section_LegalA_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                    </div>
                    
                </div>

              </div>
            </div>
          </div>
          <hr/>

          <div className="row g-2 align-items-center">
    <div className="col-3">
            <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Total premium:</b></label>
        </div>
          <div className="col-6">
            <div className="row">
                <div className="row col-2 align-items-center">
                    <div className="col-2">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="LegalA_TotalPremium" name='LegalA_TotalPremium' value={key['LegalA_TotalPremium']} onChange={(e) => {on_Section_LegalA_Change(e, i)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                    </div>
                    
                </div>

              </div>
            </div>
          </div>
          <hr/>

        <br/>
          {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="LegalA_Comments" name='LegalA_Comments' value={key['LegalA_Comments']} onChange={(e) => {on_Section_LegalA_Change(e, i)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} /> */}

          <br/>
          <b className="col-form-label">Additional Comments</b>
          <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
          <br/>
          <Editor onBlur={(e)=>{onFieldBlur(e)}}
            value={key['LegalA_AddComments']}
            onEditorChange={(newText)=>{ on_Section_LegalA_Value_Change("LegalA_AddComments", i, newText) }}                  
            init={{
                selector: "textarea",
                browser_spellcheck : true,
                placeholder: "Click here to enter text",
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
                'removeformat | wordcount ',
                content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
            }}
          />
          <hr/>
        </>
    )})
    : <></>
}
                
          </> 
          : <></>
        }
        <div><b>IMPORTANT:</b></div>

        <ul>
          <li>Premium payment: (The premium is paid monthly, quarterly, bi-annually, or annually)
              The premium is due and payable on or before the inception date or renewal date but must be paid immediately upon receipt of the invoice, but no later than within 30 (thirty) days of inception/renewal of the policy. The Company shall not be obliged to accept premium tendered to it more than 30 (thirty) days after the inception or renewal date but may do so upon application at such terms as it, at its sole discretion, may determine.
          </li>
          <li>Where the premium is paid monthly</li>

        </ul>

        <div>The premium is due and payable on or before the inception date or the first day of each month thereafter as the case may be. If the premium has not been paid for any reason other than the Insured having stopped payment, the Company will re-debit in the following month for two months' premium. </div>

        <div>The policy will cancel immediately:</div>
        <ul>
          <li>If the Insured has placed a stop payment on the premium</li>
          <li>If the full double premium has not been paid (effective from the date of the first unpaid premium)</li>
          <li>There may be instances where the policy may be cancelled if one month's premium has not been successfully received. Take note of specific correspondence received in instances where this is the case.</li>
        </ul>

        <div>If all premiums have not been paid, any claims made will not be settled under this policy.</div>

        <br/>
        <h6 align="left" style={{ color: "#14848A"}}><b>RECORD OF ADVICE</b></h6>
        <div>Products considered appropriate to address the needs of the client:</div>
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_ProductConsidered" name='STIP_ProductConsidered' value={FormData['STIP_ProductConsidered']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} /> */}
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_ProductConsidered']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_ProductConsidered']: newText }) }}
          name="STIP_ProductConsidered"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
        <hr/>
        <div>Recommended product:</div>
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_ProductRecommended" name='STIP_ProductRecommended' value={FormData['STIP_ProductRecommended']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} /> */}
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_ProductRecommended']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_ProductRecommended']: newText }) }}
          name="STIP_ProductRecommended"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
        <hr/>
        <div>Reasons why the recommended product is considered the most suitable for the needs of the client:</div>
        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_ProductReasons" name='STIP_ProductReasons' value={FormData['STIP_ProductReasons']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} /> */}
        <Editor onBlur={(e)=>{onFieldBlur(e)}}
          value={FormData['STIP_ProductReasons']}
          onEditorChange={(newText)=>{ setFormData({...FormData, ['STIP_ProductReasons']: newText }) }}
          name="STIP_ProductReasons"
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
              'removeformat | wordcount ',
              content_style: 'body { font-family:"Arial Narrow",Arial,sans-serif; font-size:14px }',
          }}
        />
        <hr/>
        <div><b>Note: The intermediary whose name appears in section below, will be regarded as the person responsible for advice to the client. </b></div>
        <br/>
        <h6 align="left" style={{ color: "#14848A"}}><b>DECLARATION BY INTERMEDIARY</b></h6>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Name of intermediary:</label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_DbyI_IName" name='STIP_DbyI_IName' value={FormData['STIP_DbyI_IName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Code:</label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_DbyI_Code" name='STIP_DbyI_Code' value={FormData['STIP_DbyI_Code']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
        </div>
      </div>

      <br/>
      <div>I hereby declare that, if applicable, I have explained the meaning and possible detrimental consequences of the replacement of a financial product to the applicant.</div>
      <div>I hereby declare that I have disclosed the intermediary’s permit and product quotation to the applicant.</div>
      <div>I understand and accept that if this plan is cancelled, the fee or commission paid to me can be reversed on my remuneration account, in accordance with the terms of my contract.</div>
      <div>I hereby declare that I am authorized to market this product and that, in terms of the Financial Advisory and Intermediary Services Act and its sub-legislation, I have not been debarred nor has any authorization given to me been withdrawn, suspended, or lapsed.</div>

<hr/>
<br/>
      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Signature of intermediary</label>
                  </div>
                  <div className="col-8">
                      <label className="col-form-label" style={{color: 'white'}}>Signature of intermediary</label>
                      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIP_DbyI_Signature" name='IP_InvestmentTerm' value={FormData['STIP_DbyI_Signature']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Sign here"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Date(dd/mm/yyyy)</label>
                  </div>
                  <div className="col-8">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" type="date"  id="STIP_DbyI_Date" name='STIP_DbyI_Date' value={FormData['STIP_DbyI_Date']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
        </div>
      </div>

  <br/>
  <div  
              className={
                  state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "container-sfp" 
                  : state['advisor']['email'].includes('fs4p') ? "container-fs4p" 
                  : state['advisor']['email'].includes('sanlam') ? "container-sanlam" 
                  : "container-sfp"
              }
          >
              <div 
                  className={"icon1 update"}
              >
                  <div 
                      className={
                          state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "tooltip-sfp" 
                          : state['advisor']['email'].includes('fs4p') ? "tooltip-fs4p" 
                          : state['advisor']['email'].includes('sanlam') ? "tooltip-sanlam" 
                          : "tooltip-sfp"
                      }
                  >
                      Update
                  </div>
                  <span>
                      <button 
                          type="submit"  
                          className="updateSTIPFormBTN"
                          style={{border: "none", backgroundColor: "transparent"}}
                      >
                          <i className="fa-solid fa-check" />
                      </button>
                  </span>
              </div>
          </div>
        </form>
      

        </>
    )
}


const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect(mapStateToProps,{LogOut})(Short_term_Personal)