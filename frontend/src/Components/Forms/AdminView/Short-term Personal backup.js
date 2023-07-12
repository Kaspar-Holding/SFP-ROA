import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
// import './Invest.css';
import './Styles/CustomNotification.css'
import './Styles/CustomButton.css'
import { connect } from 'react-redux';

const Short_term_Personal = ({user}) => {
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
        advisorId : user['id'],
        formId : state['formId'],
        
        STIP_Underwritten_By: "",
        STIP_Branch_Name: "",
        STIP_Branch_Number: "",
        STIP_Quotation_Number: "",
        STIP_Policy_Number: "",
        STIP_Inception_Date: "",
        
        STIP_Applicant_Surname: "",
        STIP_Applicant_Gender : 1,
        STIP_Applicant_Initials: "",
        STIP_Applicant_Title: "",
        STIP_Applicant_DateofBirth: "",
        STIP_Applicant_IdNumber: "",
        STIP_Applicant_Email: "",
        STIP_Applicant_ContactNumber: "",

        STIP_General_Refused : 1,
        STIP_General_Risks : 1,
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
            
        STIP_CnRI_1_Recomm : 1, 
        STIP_CnRI_1_Accepted : 1, 
        STIP_CnRI_1_CoverAmount : "", 
        STIP_CnRI_1_Premium1 : "", 
        STIP_CnRI_1_Premium2 : "", 
        STIP_CnRI_1_Excess1 : "", 
        STIP_CnRI_1_Excess2 : "", 
        
        STIP_CnRI_2_Recomm : 1, 
        STIP_CnRI_2_Accepted : 1, 
        STIP_CnRI_2_CoverAmount : "", 
        STIP_CnRI_2_Premium1 : "", 
        STIP_CnRI_2_Premium2 : "", 
        STIP_CnRI_2_Excess1 : "", 
        STIP_CnRI_2_Excess2 : "", 
        
        STIP_CnRI_3_Recomm : 1, 
        STIP_CnRI_3_Accepted : 1, 
        STIP_CnRI_3_CoverAmount : "", 
        STIP_CnRI_3_Premium1 : "", 
        STIP_CnRI_3_Premium2 : "", 
        STIP_CnRI_3_Excess1 : "", 
        STIP_CnRI_3_Excess2 : "", 
        
        STIP_CnRI_4_Recomm : 1, 
        STIP_CnRI_4_Accepted : 1, 
        STIP_CnRI_4_CoverAmount : "", 
        STIP_CnRI_4_Premium1 : "", 
        STIP_CnRI_4_Premium2 : "", 
        STIP_CnRI_4_Excess1 : "", 
        STIP_CnRI_4_Excess2 : "", 
        
        STIP_CnRI_4_Recomm : 1, 
        STIP_CnRI_4_Accepted : 1, 
        STIP_CnRI_4_CoverAmount : "", 
        STIP_CnRI_4_Premium1 : "", 
        STIP_CnRI_4_Premium2 : "", 
        STIP_CnRI_4_Excess1 : "", 
        STIP_CnRI_4_Excess2 : "", 
        
        STIP_CnRI_5_Recomm : 1, 
        STIP_CnRI_5_Accepted : 1, 
        STIP_CnRI_5_CoverAmount : "", 
        STIP_CnRI_5_Premium1 : "", 
        STIP_CnRI_5_Premium2 : "", 
        STIP_CnRI_5_Excess1 : "", 
        STIP_CnRI_5_Excess2 : "", 
        
        STIP_CnRI_6_Recomm : 1, 
        STIP_CnRI_6_Accepted : 1, 
        STIP_CnRI_6_CoverAmount : "", 
        STIP_CnRI_6_Premium1 : "", 
        STIP_CnRI_6_Premium2 : "", 
        STIP_CnRI_6_Excess1 : "", 
        STIP_CnRI_6_Excess2 : "", 
        
        STIP_CnRI_7_Recomm : 1, 
        STIP_CnRI_7_Accepted : 1, 
        STIP_CnRI_7_CoverAmount : "", 
        STIP_CnRI_7_Premium1 : "", 
        STIP_CnRI_7_Premium2 : "", 
        STIP_CnRI_7_Excess1 : "", 
        STIP_CnRI_7_Excess2 : "", 
        
        STIP_CnRI_8_Recomm : 1, 
        STIP_CnRI_8_Accepted : 1, 
        STIP_CnRI_8_CoverAmount : "", 
        STIP_CnRI_8_Premium1 : "", 
        STIP_CnRI_8_Premium2 : "", 
        STIP_CnRI_8_Excess1 : "", 
        STIP_CnRI_8_Excess2 : "", 
        
        STIP_CnRI_9_Recomm : 1, 
        STIP_CnRI_9_Accepted : 1, 
        STIP_CnRI_9_CoverAmount : "", 
        STIP_CnRI_9_Premium1 : "", 
        STIP_CnRI_9_Premium2 : "", 
        STIP_CnRI_9_Excess1 : "", 
        STIP_CnRI_9_Excess2 : "", 
        
        STIP_CnRI_10_Recomm : 1, 
        STIP_CnRI_10_Accepted : 1, 
        STIP_CnRI_10_CoverAmount : "", 
        STIP_CnRI_10_Premium1 : "", 
        STIP_CnRI_10_Premium2 : "", 
        STIP_CnRI_10_Excess1 : "", 
        STIP_CnRI_10_Excess2 : "", 
        
        STIP_CnRI_11_Recomm : 1, 
        STIP_CnRI_11_Accepted : 1, 
        STIP_CnRI_11_CoverAmount : "", 
        STIP_CnRI_11_Premium1 : "", 
        STIP_CnRI_11_Premium2 : "", 
        STIP_CnRI_11_Excess1 : "", 
        STIP_CnRI_11_Excess2 : "", 
        
        STIP_CnRI_12_Recomm : 1, 
        STIP_CnRI_12_Accepted : 1, 
        STIP_CnRI_12_CoverAmount : "", 
        STIP_CnRI_12_Premium1 : "", 
        STIP_CnRI_12_Premium2 : "", 
        STIP_CnRI_12_Excess1 : "", 
        STIP_CnRI_12_Excess2 : "", 
        
        STIP_CnRI_13_Recomm : 1, 
        STIP_CnRI_13_Accepted : 1, 
        STIP_CnRI_13_CoverAmount : "", 
        STIP_CnRI_13_Premium1 : "", 
        STIP_CnRI_13_Premium2 : "", 
        STIP_CnRI_13_Excess1 : "", 
        STIP_CnRI_13_Excess2 : "", 
        
        STIP_CnRI_14_Recomm : 1, 
        STIP_CnRI_14_Accepted : 1, 
        STIP_CnRI_14_CoverAmount : "", 
        STIP_CnRI_14_Premium1 : "", 
        STIP_CnRI_14_Premium2 : "", 
        STIP_CnRI_14_Excess1 : "", 
        STIP_CnRI_14_Excess2 : "", 
        
        STIP_CnRI_15_Recomm : 1, 
        STIP_CnRI_15_Accepted : 1, 
        STIP_CnRI_15_CoverAmount : "", 
        STIP_CnRI_15_Premium1 : "", 
        STIP_CnRI_15_Premium2 : "", 
        STIP_CnRI_15_Excess1 : "", 
        STIP_CnRI_15_Excess2 : "", 
        
        STIP_CnRI_16_Recomm : 1, 
        STIP_CnRI_16_Accepted : 1, 
        STIP_CnRI_16_CoverAmount : "", 
        STIP_CnRI_16_Premium1 : "", 
        STIP_CnRI_16_Premium2 : "", 
        STIP_CnRI_16_Excess1 : "", 
        STIP_CnRI_16_Excess2 : "", 
        
        STIP_CnRI_17_Recomm : 1, 
        STIP_CnRI_17_Accepted : 1, 
        STIP_CnRI_17_CoverAmount : "", 
        STIP_CnRI_17_Premium1 : "", 
        STIP_CnRI_17_Premium2 : "", 
        STIP_CnRI_17_Excess1 : "", 
        STIP_CnRI_17_Excess2 : "", 
        
        STIP_CnRI_18_Recomm : 1, 
        STIP_CnRI_18_Accepted : 1, 
        STIP_CnRI_18_CoverAmount : "", 
        STIP_CnRI_18_Premium1 : "", 
        STIP_CnRI_18_Premium2 : "", 
        STIP_CnRI_18_Excess1 : "", 
        STIP_CnRI_18_Excess2 : "", 
        
        STIP_CnRI_19_Recomm : 1, 
        STIP_CnRI_19_Accepted : 1, 
        STIP_CnRI_19_CoverAmount : "", 
        STIP_CnRI_19_Premium1 : "", 
        STIP_CnRI_19_Premium2 : "", 
        STIP_CnRI_19_Excess1 : "", 
        STIP_CnRI_19_Excess2 : "", 
        
        STIP_CnRI_20_Recomm : 1, 
        STIP_CnRI_20_Accepted : 1, 
        STIP_CnRI_20_CoverAmount : "", 
        STIP_CnRI_20_Premium1 : "", 
        STIP_CnRI_20_Premium2 : "", 
        STIP_CnRI_20_Excess1 : "", 
        STIP_CnRI_20_Excess2 : "", 
        
        STIP_CnRI_21_Recomm : 1, 
        STIP_CnRI_21_Accepted : 1, 
        STIP_CnRI_21_CoverAmount : "", 
        STIP_CnRI_21_Premium1 : "", 
        STIP_CnRI_21_Premium2 : "", 
        STIP_CnRI_21_Excess1 : "", 
        STIP_CnRI_21_Excess2 : "", 
        
        STIP_CnRI_22_Recomm : 1, 
        STIP_CnRI_22_Accepted : 1, 
        STIP_CnRI_22_CoverAmount : "", 
        STIP_CnRI_22_Premium1 : "", 
        STIP_CnRI_22_Premium2 : "", 
        STIP_CnRI_22_Excess1 : "", 
        STIP_CnRI_22_Excess2 : "", 
        
        STIP_CnRI_23_Recomm : 1, 
        STIP_CnRI_23_Accepted : 1, 
        STIP_CnRI_23_CoverAmount : "", 
        STIP_CnRI_23_Premium1 : "", 
        STIP_CnRI_23_Premium2 : "", 
        STIP_CnRI_23_Excess1 : "", 
        STIP_CnRI_23_Excess2 : "", 
        
        STIP_CnRI_24_Recomm : 1, 
        STIP_CnRI_24_Accepted : 1, 
        STIP_CnRI_24_CoverAmount : "", 
        STIP_CnRI_24_Premium1 : "", 
        STIP_CnRI_24_Premium2 : "", 
        STIP_CnRI_24_Excess1 : "", 
        STIP_CnRI_24_Excess2 : "", 
        
        STIP_CnRI_25_Recomm : 1, 
        STIP_CnRI_25_Accepted : 1, 
        STIP_CnRI_25_CoverAmount : "", 
        STIP_CnRI_25_Premium1 : "", 
        STIP_CnRI_25_Premium2 : "", 
        STIP_CnRI_25_Excess1 : "", 
        STIP_CnRI_25_Excess2 : "", 
        
        STIP_CnRI_26_Recomm : 1, 
        STIP_CnRI_26_Accepted : 1, 
        STIP_CnRI_26_CoverAmount : "", 
        STIP_CnRI_26_Premium1 : "", 
        STIP_CnRI_26_Premium2 : "", 
        STIP_CnRI_26_Excess1 : "", 
        STIP_CnRI_26_Excess2 : "", 
        
        STIP_CnRI_27_Recomm : 1,
        STIP_CnRI_27_Accepted : 1,
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
        
        STIP_CnRen_1_Recomm : 1, 
        STIP_CnRen_1_Accepted : 1, 
        STIP_CnRen_1_CoverAmount : "", 
        STIP_CnRen_1_Premium1 : "", 
        STIP_CnRen_1_Premium2 : "", 
        STIP_CnRen_1_Excess1 : "", 
        STIP_CnRen_1_Excess2 : "", 
        
        STIP_CnRen_2_Recomm : 1, 
        STIP_CnRen_2_Accepted : 1, 
        STIP_CnRen_2_CoverAmount : "", 
        STIP_CnRen_2_Premium1 : "", 
        STIP_CnRen_2_Premium2 : "", 
        STIP_CnRen_2_Excess1 : "", 
        STIP_CnRen_2_Excess2 : "", 
        
        STIP_CnRen_3_Recomm : 1, 
        STIP_CnRen_3_Accepted : 1, 
        STIP_CnRen_3_CoverAmount : "", 
        STIP_CnRen_3_Premium1 : "", 
        STIP_CnRen_3_Premium2 : "", 
        STIP_CnRen_3_Excess1 : "", 
        STIP_CnRen_3_Excess2 : "", 
        
        STIP_CnRen_4_Recomm : 1, 
        STIP_CnRen_4_Accepted : 1, 
        STIP_CnRen_4_CoverAmount : "", 
        STIP_CnRen_4_Premium1 : "", 
        STIP_CnRen_4_Premium2 : "", 
        STIP_CnRen_4_Excess1 : "", 
        STIP_CnRen_4_Excess2 : "", 
        
        STIP_CnRen_4_Recomm : 1, 
        STIP_CnRen_4_Accepted : 1, 
        STIP_CnRen_4_CoverAmount : "", 
        STIP_CnRen_4_Premium1 : "", 
        STIP_CnRen_4_Premium2 : "", 
        STIP_CnRen_4_Excess1 : "", 
        STIP_CnRen_4_Excess2 : "", 
        
        STIP_CnRen_5_Recomm : 1, 
        STIP_CnRen_5_Accepted : 1, 
        STIP_CnRen_5_CoverAmount : "", 
        STIP_CnRen_5_Premium1 : "", 
        STIP_CnRen_5_Premium2 : "", 
        STIP_CnRen_5_Excess1 : "", 
        STIP_CnRen_5_Excess2 : "", 
        
        STIP_CnRen_6_Recomm : 1, 
        STIP_CnRen_6_Accepted : 1, 
        STIP_CnRen_6_CoverAmount : "", 
        STIP_CnRen_6_Premium1 : "", 
        STIP_CnRen_6_Premium2 : "", 
        STIP_CnRen_6_Excess1 : "", 
        STIP_CnRen_6_Excess2 : "", 
        
        STIP_CnRen_7_Recomm : 1, 
        STIP_CnRen_7_Accepted : 1, 
        STIP_CnRen_7_CoverAmount : "", 
        STIP_CnRen_7_Premium1 : "", 
        STIP_CnRen_7_Premium2 : "", 
        STIP_CnRen_7_Excess1 : "", 
        STIP_CnRen_7_Excess2 : "", 
        
        STIP_CnRen_8_Recomm : 1, 
        STIP_CnRen_8_Accepted : 1, 
        STIP_CnRen_8_CoverAmount : "", 
        STIP_CnRen_8_Premium1 : "", 
        STIP_CnRen_8_Premium2 : "", 
        STIP_CnRen_8_Excess1 : "", 
        STIP_CnRen_8_Excess2 : "", 
        
        STIP_CnRen_9_Recomm : 1, 
        STIP_CnRen_9_Accepted : 1, 
        STIP_CnRen_9_CoverAmount : "", 
        STIP_CnRen_9_Premium1 : "", 
        STIP_CnRen_9_Premium2 : "", 
        STIP_CnRen_9_Excess1 : "", 
        STIP_CnRen_9_Excess2 : "", 
        
        STIP_CnRen_10_Recomm : 1, 
        STIP_CnRen_10_Accepted : 1, 
        STIP_CnRen_10_CoverAmount : "", 
        STIP_CnRen_10_Premium1 : "", 
        STIP_CnRen_10_Premium2 : "", 
        STIP_CnRen_10_Excess1 : "", 
        STIP_CnRen_10_Excess2 : "", 
        
        STIP_CnRen_11_Recomm : 1, 
        STIP_CnRen_11_Accepted : 1, 
        STIP_CnRen_11_CoverAmount : "", 
        STIP_CnRen_11_Premium1 : "", 
        STIP_CnRen_11_Premium2 : "", 
        STIP_CnRen_11_Excess1 : "", 
        STIP_CnRen_11_Excess2 : "", 
        
        STIP_CnRen_12_Recomm : 1, 
        STIP_CnRen_12_Accepted : 1, 
        STIP_CnRen_12_CoverAmount : "", 
        STIP_CnRen_12_Premium1 : "", 
        STIP_CnRen_12_Premium2 : "", 
        STIP_CnRen_12_Excess1 : "", 
        STIP_CnRen_12_Excess2 : "", 
        
        STIP_CnRen_13_Recomm : 1, 
        STIP_CnRen_13_Accepted : 1, 
        STIP_CnRen_13_CoverAmount : "", 
        STIP_CnRen_13_Premium1 : "", 
        STIP_CnRen_13_Premium2 : "", 
        STIP_CnRen_13_Excess1 : "", 
        STIP_CnRen_13_Excess2 : "", 
        
        STIP_CnRen_14_Recomm : 1, 
        STIP_CnRen_14_Accepted : 1, 
        STIP_CnRen_14_CoverAmount : "", 
        STIP_CnRen_14_Premium1 : "", 
        STIP_CnRen_14_Premium2 : "", 
        STIP_CnRen_14_Excess1 : "", 
        STIP_CnRen_14_Excess2 : "", 
        
        STIP_CnRen_15_Recomm : 1, 
        STIP_CnRen_15_Accepted : 1, 
        STIP_CnRen_15_CoverAmount : "", 
        STIP_CnRen_15_Premium1 : "", 
        STIP_CnRen_15_Premium2 : "", 
        STIP_CnRen_15_Excess1 : "", 
        STIP_CnRen_15_Excess2 : "", 
        
        STIP_CnRen_16_Recomm : 1, 
        STIP_CnRen_16_Accepted : 1, 
        STIP_CnRen_16_CoverAmount : "", 
        STIP_CnRen_16_Premium1 : "", 
        STIP_CnRen_16_Premium2 : "", 
        STIP_CnRen_16_Excess1 : "", 
        STIP_CnRen_16_Excess2 : "", 
        
        STIP_CnRen_17_Recomm : 1, 
        STIP_CnRen_17_Accepted : 1, 
        STIP_CnRen_17_CoverAmount : "", 
        STIP_CnRen_17_Premium1 : "", 
        STIP_CnRen_17_Premium2 : "", 
        STIP_CnRen_17_Excess1 : "", 
        STIP_CnRen_17_Excess2 : "", 
        
        STIP_CnRen_18_Recomm : 1, 
        STIP_CnRen_18_Accepted : 1, 
        STIP_CnRen_18_CoverAmount : "", 
        STIP_CnRen_18_Premium1 : "", 
        STIP_CnRen_18_Premium2 : "", 
        STIP_CnRen_18_Excess1 : "", 
        STIP_CnRen_18_Excess2 : "", 
        
        STIP_CnRen_19_Recomm : 1, 
        STIP_CnRen_19_Accepted : 1, 
        STIP_CnRen_19_CoverAmount : "", 
        STIP_CnRen_19_Premium1 : "", 
        STIP_CnRen_19_Premium2 : "", 
        STIP_CnRen_19_Excess1 : "", 
        STIP_CnRen_19_Excess2 : "", 
        
        STIP_CnRen_20_Recomm : 1, 
        STIP_CnRen_20_Accepted : 1, 
        STIP_CnRen_20_CoverAmount : "", 
        STIP_CnRen_20_Premium1 : "", 
        STIP_CnRen_20_Premium2 : "", 
        STIP_CnRen_20_Excess1 : "", 
        STIP_CnRen_20_Excess2 : "", 
        
        STIP_CnRen_21_Recomm : 1, 
        STIP_CnRen_21_Accepted : 1, 
        STIP_CnRen_21_CoverAmount : "", 
        STIP_CnRen_21_Premium1 : "", 
        STIP_CnRen_21_Premium2 : "", 
        STIP_CnRen_21_Excess1 : "", 
        STIP_CnRen_21_Excess2 : "", 
        
        STIP_CnRen_22_Recomm : 1, 
        STIP_CnRen_22_Accepted : 1, 
        STIP_CnRen_22_CoverAmount : "", 
        STIP_CnRen_22_Premium1 : "", 
        STIP_CnRen_22_Premium2 : "", 
        STIP_CnRen_22_Excess1 : "", 
        STIP_CnRen_22_Excess2 : "", 
        
        STIP_CnRen_23_Recomm : 1, 
        STIP_CnRen_23_Accepted : 1, 
        STIP_CnRen_23_CoverAmount : "", 
        STIP_CnRen_23_Premium1 : "", 
        STIP_CnRen_23_Premium2 : "", 
        STIP_CnRen_23_Excess1 : "", 
        STIP_CnRen_23_Excess2 : "", 
        
        STIP_CnRen_24_Recomm : 1, 
        STIP_CnRen_24_Accepted : 1, 
        STIP_CnRen_24_CoverAmount : "", 
        STIP_CnRen_24_Premium1 : "", 
        STIP_CnRen_24_Premium2 : "", 
        STIP_CnRen_24_Excess1 : "", 
        STIP_CnRen_24_Excess2 : "", 
        
        STIP_CnRen_25_Recomm : 1, 
        STIP_CnRen_25_Accepted : 1, 
        STIP_CnRen_25_CoverAmount : "", 
        STIP_CnRen_25_Premium1 : "", 
        STIP_CnRen_25_Premium2 : "", 
        STIP_CnRen_25_Excess1 : "", 
        STIP_CnRen_25_Excess2 : "", 
        
        STIP_CnRen_26_Recomm : 1, 
        STIP_CnRen_26_Accepted : 1, 
        STIP_CnRen_26_CoverAmount : "", 
        STIP_CnRen_26_Premium1 : "", 
        STIP_CnRen_26_Premium2 : "", 
        STIP_CnRen_26_Excess1 : "", 
        STIP_CnRen_26_Excess2 : "", 
        
        STIP_CnRen_27_Recomm : 1,
        STIP_CnRen_27_Accepted : 1,
        STIP_CnRen_27_CoverAmount : "",
        STIP_CnRen_27_Premium1 : "",
        STIP_CnRen_27_Premium2 : "",
        STIP_CnRen_27_Excess1 : "",
        STIP_CnRen_27_Excess2 : "",

        STIP_CnRen_FeeCharges: "",
        STIP_CnRen_Commission: "",
        STIP_CnRen_TotalPremium: "",

        STIP_CnRI_AdviseGiven : 1,
        STIP_CnRI_ReplacePurpose: "",
        STIP_CnRI_ReplaceReason: "",
        STIP_CnRI_ReplaceSupplier: "",

        STIP_HC_ResidentialArea: "",
        STIP_HC_StreetNumber: "",
        STIP_HC_PostalCode: "",
        STIP_HC_ResidenceType: "",
        STIP_HC_Flat_GroundLevel : 1,
        STIP_HC_WallConstruction : 1,
        STIP_HC_RoofConstruction : 1,
        STIP_HC_SM_BurglarBar : 1,
        STIP_HC_SM_SecurityGate : 1,
        STIP_HC_SM_AlarmSystem : 1,
        STIP_HC_SM_SecurityArea : 1,
        STIP_HC_NoClaimBonus: "",
        STIP_HC_SumInsured: "",
        STIP_HCEx_BusinessType: "",
        STIP_HCEx_InsuredAmount: "",
        STIP_HC_ADI_General1: 1,
        STIP_HC_ADI_General2: 1,
        STIP_HC_ADI_MechElecBreakdown: 1,
        STIP_HC_ADI_ElectronicalBreakdown: 1,
        STIP_HC_ADI_PowerSurgeCover1: 1,
        STIP_HC_ADI_PowerSurgeCover2: 1,
        STIP_HC_ADI_PowerSurgeCover3: 1,
        STIP_HC_Fee: "",
        STIP_HC_Commission: "",
        STIP_HC_TotalPremium: "",

        STIP_Build_ResidentialArea: "",
        STIP_Build_StreetNumber: "",
        STIP_Build_PostalCode: "",
        STIP_Build_ResidenceType: "",
        STIP_Build_Type: "",
        // STIP_Build_Flat_GroundLevel : 1,
        STIP_Build_Voluntary : 1,
        STIP_Build_SnL : 1,
        STIP_Build_ADI : 1,
        STIP_Build_WallConstruction : 1,
        STIP_Build_RoofConstruction : 1,
        STIP_Build_Fee: "",
        STIP_Build_Commission: "",
        STIP_Build_TotalPremium: "",
        STIP_Build_AdditionalAdvise: "",

        STIP_AddProp_ResidentialArea: "",
        STIP_AddProp_StreetNumber: "",
        STIP_AddProp_PostalCode: "",
        STIP_AddProp_ResidenceType: "",
        STIP_AddProp_Type: "",
        // STIP_AddProp_Flat_GroundLevel : "",
        STIP_AddProp_Voluntary : 1,
        STIP_AddProp_SnL : 1,
        STIP_AddProp_ADI : 1,
        STIP_AddProp_WallConstruction : 1,
        STIP_AddProp_RoofConstruction : 1,
        STIP_AddProp_Fee: "",
        STIP_AddProp_Commission: "",
        STIP_AddProp_TotalPremium: "",
        STIP_AddProp_AdditionalAdvise: "",

        STIP_Vehicle_Owner: "",
        STIP_Vehicle_RegOwner: "",
        STIP_Vehicle_Usage: "",
        STIP_Vehicle_ONParkingOptions : 0,
        STIP_Vehicle_ONParking: "",
        STIP_Vehicle_ONOtherParking: "",
        STIP_Vehicle_CoverType : 0,
        STIP_Vehicle_SM1 : 1,
        STIP_Vehicle_SM2 : 1,
        STIP_Vehicle_SM3 : 1,
        STIP_Vehicle_SM4 : 1,
        STIP_Vehicle_Driver: "",
        STIP_Vehicle_DriverLicIssDate: "",
        STIP_Vehicle_LicCode: "",
        STIP_Vehicle_SumInsured: "",
        STIP_Vehicle_ClaimBonus: "",
        STIP_Vehicle_VoluntaryExcess : 1,
        STIP_Vehicle_Extras1 : 1,
        STIP_Vehicle_ExtrasAmount1: "",
        STIP_Vehicle_Extras2 : 1,
        STIP_Vehicle_ExtrasAmount2: "",
        STIP_Vehicle_Extras3 : 1,
        STIP_Vehicle_ExtrasAmount3: "",
        STIP_Vehicle_Extras4 : 1,
        STIP_Vehicle_ExtrasAmount4: "",
        STIP_Vehicle_Extras5 : 1,
        STIP_Vehicle_ExtrasAmount5: "",
        STIP_Vehicle_Extras6 : 1,
        STIP_Vehicle_ExtrasAmount6: "",
        STIP_Vehicle_Extras7 : 1,
        STIP_Vehicle_ExtrasAmount7: "",
        STIP_Vehicle_Extras8 : 1,
        STIP_Vehicle_ExtrasAmount8: "",
        STIP_Vehicle_Extras9 : 1,
        STIP_Vehicle_ExtrasAmount9: "",
        STIP_Vehicle_Extras10 : 1,
        STIP_Vehicle_ExtrasAmount10: "",
        STIP_Vehicle_Extras11 : 1,
        STIP_Vehicle_ExtrasAmount11: "",
        STIP_Vehicle_Extras12 : 1,
        STIP_Vehicle_ExtrasAmount12: "",
        STIP_Vehicle_Extras13 : 1,
        STIP_Vehicle_ExtrasAmount13: "",
        STIP_Vehicle_Extras14 : "",
        STIP_Vehicle_ExtrasAmount14: "",
        STIP_Vehicle_AC1 : 1,
        STIP_Vehicle_AC2 : 1,
        STIP_Vehicle_AC3 : 1,
        STIP_Vehicle_AC4 : 1,
        STIP_Vehicle_AC5 : 1,
        STIP_Vehicle_Fees: "",
        STIP_Vehicle_Commission: "",
        STIP_Vehicle_TotalPremium: "",
        STIP_Vehicle_Comments: "",
        
        STIP_MotorC_RegOwner: "",
        STIP_MotorC_Usage: "",
        STIP_MotorC_ONParkingOptions : 1,
        STIP_MotorC_ONParking: "",
        STIP_MotorC_ONOtherParking: "",
        STIP_MotorC_CoverType : 1,
        STIP_MotorC_Driver: 1,
        STIP_MotorC_Driver1: "",
        STIP_MotorC_DriverLicIssDate: "",
        STIP_MotorC_LicCode: "",
        STIP_MotorC_SumInsured: "",
        STIP_MotorC_ClaimBonus: "",
        STIP_MotorC_Fees: "",
        STIP_MotorC_Commission: "",
        STIP_MotorC_TotalPremium: "",
        STIP_MotorC_Comments: "",

        STIP_Trailer_RegOwner: "",
        STIP_Trailer_Type: "",
        STIP_Trailer_ONParkingOptions : 1,
        STIP_Trailer_ONOtherParking: "",
        STIP_Trailer_SumInsured: "",
        STIP_Trailer_ClaimBonus: 1,
        STIP_Trailer_Fees: "",
        STIP_Trailer_Commission: "",
        STIP_Trailer_TotalPremium: "",
        STIP_Trailer_Comments: "",

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

        STIP_PersonalLL_IndemnityLimit : 1,
        STIP_PersonalLL_IndemnityLimitDetail : "",
        STIP_PersonalLL_Fees: "",
        STIP_PersonalLL_Commission: "",
        STIP_PersonalLL_TotalPremium: "",
        STIP_PersonalLL_Comments: "",

        STIP_LegalA_IndemnityLimit : 1,
        STIP_LegalA_IndemnityLimitDetail : "",
        STIP_LegalA_Fees: "",
        STIP_LegalA_Commission: "",
        STIP_LegalA_TotalPremium: "",
        STIP_LegalA_Comments: "",

        STIP_ProductConsidered: "",
        STIP_ProductRecommended: "",
        STIP_ProductReasons: "",

        STIP_DbyI_IName: "",
        STIP_DbyI_Code: "",
        STIP_DbyI_Signature: "",
        STIP_DbyI_Date: "",

        STIP_MSA_ClientName: "",
        STIP_MSA_ClientIdNumber: "",
        STIP_MSA_ClientAddress: "",
        STIP_MSA_ClientEmail: "",
        STIP_MSA_ClientPhone: "",
        STIP_MSA_ClientDate: "",

        STIP_MSA_Name: "",
        STIP_MSA_MaritalStatus: "",
        STIP_MSA_Gender: "",
        STIP_MSA_Occupation: "",
        STIP_MSA_Income: "",
        STIP_MSA_Subsidy: "",
        STIP_MSA_Dependant: "",
        STIP_MSA_Spouse: "",
        STIP_MSA_AdultDependant: "",
        STIP_MSA_ChronicM: "",
        STIP_MSA_ChronicS: "",
        STIP_MSA_ChronicAD: "",
        STIP_MSA_ChronicC: "",
        STIP_MSA_ChronicOC: "",
        STIP_MSA_PFromDate: "",
        STIP_MSA_PTODate: "",

        STIP_BackInfo: "",
        
        STIP_SNA_Needs1 : 1,
        STIP_SNA_Comments1: "",
        STIP_SNA_Needs2 : 1,
        STIP_SNA_Comments2: "",
        STIP_SNA_Needs3 : 1,
        STIP_SNA_Comments3: "",
        STIP_SNA_Needs4 : 1,
        STIP_SNA_Comments4: "",
        STIP_SNA_Needs5 : 1,
        STIP_SNA_Comments5: "",
        STIP_SNA_Needs6 : 1,
        STIP_SNA_Comments6: "",
        STIP_SNA_Needs7 : 1,
        STIP_SNA_Comments7: "",
        STIP_SNA_Needs8 : 1,
        STIP_SNA_Comments8: "",
        STIP_SNA_Needs9 : 1,
        STIP_SNA_Comments9: "",
        STIP_SNA_Needs10 : 1,
        STIP_SNA_Comments10: "",
        
        STIP_CoMAB_Current1: 1,
        STIP_CoMAB_Replaced1: "",
        STIP_CoMAB_Current2: 1,
        STIP_CoMAB_Replaced2: "",
        STIP_CoMAB_Current3: 1,
        STIP_CoMAB_Replaced3: "",
        STIP_CoMAB_Current4: 1,
        STIP_CoMAB_Replaced4: "",
        STIP_CoMAB_Current5: 1,
        STIP_CoMAB_Replaced5: "",
        STIP_CoMAB_Current6: 1,
        STIP_CoMAB_Replaced6: "",
        STIP_CoMAB_Current7: 1,
        STIP_CoMAB_Replaced7: "",
        STIP_CoMAB_Current8: 1,
        STIP_CoMAB_Replaced8: "",
        STIP_CoMAB_Current9: 1,
        STIP_CoMAB_Replaced9: "",
        STIP_CoMAB_Current10: 1,
        STIP_CoMAB_Replaced10: "",
        STIP_CoMAB_Current11: 1,
        STIP_CoMAB_Replaced11: "",
        STIP_CoMAB_Current12: 1,
        STIP_CoMAB_Replaced12: "",

        STIP_SectionD_SnF: "",
        STIP_SectionE_PMB: "",

        STIP_SectionF_NotAccepted: "",
        STIP_SectionF_Reasons: "",
        STIP_SectionF_Consequences : 1,
        STIP_SectionF_Fee: "",
        STIP_SectionF_Comments: "",
        STIP_SectionF_Date: "",
        STIP_SectionF_ClientName: "",

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
            setFormData(response.data['formData'])
            setSuccessMessage("Short Term Insurance Personal data is successfully updated")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
              setSuccessMessageVisibility("none")
            }, 5000)
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
        }
      }
      const onSubmit = e => {
        e.preventDefault()
        updateForm()
        // window.location.reload();
      }
      // console.log(FormData)
      useEffect(() => {
        createSTIPForm(FormData)
      }, []);
      // setTimeout(() => {
      //   setSuccessMessageVisibility("none")
      // }, 5000);
      
    return(
        <>
         <br/>
        <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SHORT-TERM INSURANCE: PERSONAL LINES</b></div>
       <hr/>
       <div className="notification_container">
          <div className={
              state['advisor']['email'].includes('sfp') ? "alert alert-sfp-success fade show" 
              : state['advisor']['email'].includes('fs4p') ? "alert alert-fs4p-success fade show" 
              : state['advisor']['email'].includes('sanlam') ? "alert alert-sanlam-success fade show" 
              : "alert alert-sfp-success fade show"
          } style={{display: SuccessMessageVisibility}} role="alert">
          {SuccessMessage}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
          </div>
        </div>
       <form onSubmit={e => onSubmit(e)}>
       <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence and storage of your personal information relating to your financial matters. Ts&Cs on  <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>
       <hr/>
       <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label className="col-form-label"><b>Very Importnat:</b></label>
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

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Underwritten By:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Underwritten_By" name='STIP_Underwritten_By' value={FormData['STIP_Underwritten_By']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Branch name:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Branch_Name" name='STIP_Branch_Name' value={FormData['STIP_Branch_Name']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Branch number:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Branch_Number" name='STIP_Branch_Number' value={FormData['STIP_Branch_Number']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Quotation number:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Quotation_Number" name='STIP_Quotation_Number' value={FormData['STIP_Quotation_Number']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Policy Number</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Policy_Number" name='STIP_Policy_Number' value={FormData['STIP_Policy_Number']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Inception date:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" type="date" id="STIP_Inception_Date" name='STIP_Inception_Date' value={FormData['STIP_Inception_Date']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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

        <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>DETAILS OF APPLICANT</b></div>
        <hr/>
        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Surname:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Applicant_Surname" name='STIP_Applicant_Surname' value={FormData['STIP_Applicant_Surname']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                            <input className="form-check-input" checked={FormData["STIP_Applicant_Gender"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Applicant_Gender" name="STIP_Applicant_Gender" />
                        </div>
                        <div className="col-3">
                            <label className="form-check-label"  >
                                Male
                            </label>
                        </div>
                        <div className="col-3">
                            <input className="form-check-input" checked={FormData["STIP_Applicant_Gender"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Applicant_Gender" name="STIP_Applicant_Gender" />
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
                        <input spellCheck="true"  id="STIP_Applicant_Initials" name='STIP_Applicant_Initials' value={FormData['STIP_Applicant_Initials']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Title:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Applicant_Title" name='STIP_Applicant_Title' value={FormData['STIP_Applicant_Title']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true" type="date" id="STIP_Applicant_DateofBirth" name='STIP_Applicant_DateofBirth' value={FormData['STIP_Applicant_DateofBirth']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Identity Number:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Applicant_IdNumber" name='STIP_Applicant_IdNumber' value={FormData['STIP_Applicant_IdNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true"  id="STIP_Applicant_Email" name='STIP_Applicant_Email' value={FormData['STIP_Applicant_Email']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Contact Number:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_Applicant_ContactNumber" name='STIP_Applicant_ContactNumber' value={FormData['STIP_Applicant_ContactNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

        </div>
    </div>

    <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>GENERAL</b></div>
    <hr/>

    <div className="row g-3 align-items-center">
        <div className="col-6">
            <label htmlFor="client_name" className="col-form-label" title="If no, motivate">3.	Has an insurer ever refused any proposal of yours, cancelled any policy (or section thereof), refused to renew any policy (or section thereof), or imposed any special conditions?</label>
        </div>
        <div className="col-6">
          <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_General_Refused"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_General_Refused" name="STIP_General_Refused" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_General_Refused"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_General_Refused" name="STIP_General_Refused" />
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
                <textarea  id="STIP_General_RefusedDetails" name='STIP_General_RefusedDetails' value={FormData['STIP_General_RefusedDetails']} onChange={(e) => {onChange(e)}} onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If yes, provide details" aria-describedby="" ></textarea>
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
                        <input className="form-check-input" checked={FormData["STIP_General_Risks"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_General_Risks" name="STIP_General_Risks" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            Yes
                        </label>
                    </div>
                    <div className="col-3">
                        <input className="form-check-input" checked={FormData["STIP_General_Risks"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_General_Risks" name="STIP_General_Risks" />
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
                <textarea  id="STIP_General_RisksDetails" name='STIP_General_RisksDetails' value={FormData['STIP_General_RisksDetails']} onChange={(e) => {onChange(e)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If yes,provide name of the issuer" aria-describedby="" ></textarea>
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
                        <input spellCheck="true" type="date" id="STIP_General_LastDate" name='STIP_General_LastDate' value={FormData['STIP_General_LastDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click or tap to enter date."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label">Name of insurer: </label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_General_InsurerName" name='STIP_General_InsurerName' value={FormData['STIP_General_InsurerName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click or tap to enter text."  aria-describedby="" />
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
        <div className="col-6" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label className="col-form-label"><b>TYPE OF LOSS</b></label>
                </div>

                <div className="col-6">
                <label className="col-form-label"><b>YEAR</b></label>
                </div>
            </div>
        </div>

        <div className="col-6" style={{paddingBottom: "0.5%"}}>
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

<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
    <div className="row">
        <div className="col-6" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <input spellCheck="true"  id="STIP_General_TypeOfLoss" name='STIP_General_TypeOfLoss' value={FormData['STIP_General_TypeOfLoss']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Type of loss"  aria-describedby="" style={{width:"150px"}} />
                </div>
                
                <div className="col-6">
                    <input spellCheck="true"  id="STIP_General_LossYear" name='STIP_General_LossYear' value={FormData['STIP_General_LossYear']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Year"  aria-describedby="" style={{width:"150px"}} />
                </div>
            </div>
        </div>

        <div className="col-6" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <input spellCheck="true"  id="STIP_General_LossAmount" name='STIP_General_LossAmount' value={FormData['STIP_General_LossAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                </div>
                
                <div className="col-6">
                    <input spellCheck="true"  id="STIP_General_LossInsurer" name='STIP_General_LossInsurer' value={FormData['STIP_General_LossInsurer']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Insurer"  aria-describedby="" style={{width:"150px"}} />
                </div>
            </div>
        </div>

    </div>
</div>

<br/>
  <hr/>
<h6 align="left" style={{ color: "#14848A"}}><b>COVER AND REPLACEMENT OF INSURANCE</b></h6>
<hr/>
<div className="container-fluid">
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
              
              <td><h6 align="center" style={{ color: "#14848A", width:"1110px"}}><b>PRODUCT COMPARISON AND REPLACEMENT</b></h6></td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"590px"}}></td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <b>Existing Product</b>
                <input spellCheck="true"  id="STIP_CnRI_Existing_Company" name='STIP_CnRI_Existing_Company' value={FormData['STIP_CnRI_Existing_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" style={{width:"100px"}} />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <b>Replacement Product</b>
                <input spellCheck="true"  id="STIP_CnRI_Replacement_Company" name='STIP_CnRI_Replacement_Company' value={FormData['STIP_CnRI_Replacement_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"590px"}}></td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRI_Existing_Provider" name='STIP_CnRI_Existing_Provider' value={FormData['STIP_CnRI_Existing_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" style={{width:"100px"}} />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRI_Replacement_Provider" name='STIP_CnRI_Replacement_Provider' value={FormData['STIP_CnRI_Replacement_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"590px"}}></td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRI_Existing_Product" name='STIP_CnRI_Existing_Product' value={FormData['STIP_CnRI_Existing_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" style={{width:"100px"}} />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRI_Replacement_Product" name='STIP_CnRI_Replacement_Product' value={FormData['STIP_CnRI_Replacement_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}><b>Cover</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Recommended</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Accepted</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Cover amount</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Premium</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Excess</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Premium</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Excess</b></td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>House content</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_1_Recomm"] === 1 ? true : false} name="STIP_CnRI_1_Recomm" onChange={(e)=>{FormData["STIP_CnRI_1_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_1_Accepted"] === 1 ? true : false} name="STIP_CnRI_1_Accepted" onChange={(e)=>{FormData["STIP_CnRI_1_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_1_CoverAmount" name='STIP_CnRI_1_CoverAmount' value={FormData['STIP_CnRI_1_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Premium1" name='STIP_CnRen_1_Premium1' value={FormData['STIP_CnRen_1_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Excess1" name='STIP_CnRen_1_Excess1' value={FormData['STIP_CnRen_1_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Premium2" name='STIP_CnRen_1_Premium2' value={FormData['STIP_CnRen_1_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Excess2" name='STIP_CnRen_1_Excess2' value={FormData['STIP_CnRen_1_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Buildings</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_2_Recomm"] === 1 ? true : false} name="STIP_CnRI_2_Recomm" onChange={(e)=>{FormData["STIP_CnRI_2_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_2_Accepted"] === 1 ? true : false} name="STIP_CnRI_2_Accepted" onChange={(e)=>{FormData["STIP_CnRI_2_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_2_CoverAmount" name='STIP_CnRI_2_CoverAmount' value={FormData['STIP_CnRI_2_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Premium1" name='STIP_CnRen_2_Premium1' value={FormData['STIP_CnRen_2_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Excess1" name='STIP_CnRen_2_Excess1' value={FormData['STIP_CnRen_2_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Premium2" name='STIP_CnRen_2_Premium2' value={FormData['STIP_CnRen_2_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Excess2" name='STIP_CnRen_2_Excess2' value={FormData['STIP_CnRen_2_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Subsidence and landslip</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_3_Recomm"] === 1 ? true : false} name="STIP_CnRI_3_Recomm" onChange={(e)=>{FormData["STIP_CnRI_3_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_3_Accepted"] === 1 ? true : false} name="STIP_CnRI_3_Accepted" onChange={(e)=>{FormData["STIP_CnRI_3_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_3_CoverAmount" name='STIP_CnRI_3_CoverAmount' value={FormData['STIP_CnRI_3_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Premium1" name='STIP_CnRen_3_Premium1' value={FormData['STIP_CnRen_3_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Excess1" name='STIP_CnRen_3_Excess1' value={FormData['STIP_CnRen_3_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Premium2" name='STIP_CnRen_3_Premium2' value={FormData['STIP_CnRen_3_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Excess2" name='STIP_CnRen_3_Excess2' value={FormData['STIP_CnRen_3_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Accidental damage</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_4_Recomm"] === 1 ? true : false} name="STIP_CnRI_4_Recomm" onChange={(e)=>{FormData["STIP_CnRI_4_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_4_Accepted"] === 1 ? true : false} name="STIP_CnRI_4_Accepted" onChange={(e)=>{FormData["STIP_CnRI_4_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_4_CoverAmount" name='STIP_CnRI_4_CoverAmount' value={FormData['STIP_CnRI_4_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Premium1" name='STIP_CnRen_4_Premium1' value={FormData['STIP_CnRen_4_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Excess1" name='STIP_CnRen_4_Excess1' value={FormData['STIP_CnRen_4_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Premium2" name='STIP_CnRen_4_Premium2' value={FormData['STIP_CnRen_4_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Excess2" name='STIP_CnRen_4_Excess2' value={FormData['STIP_CnRen_4_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>All Risk(General)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_5_Recomm"] === 1 ? true : false} name="STIP_CnRI_5_Recomm" onChange={(e)=>{FormData["STIP_CnRI_5_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_5_Accepted"] === 1 ? true : false} name="STIP_CnRI_5_Accepted" onChange={(e)=>{FormData["STIP_CnRI_5_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_5_CoverAmount" name='STIP_CnRI_5_CoverAmount' value={FormData['STIP_CnRI_5_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Premium1" name='STIP_CnRen_5_Premium1' value={FormData['STIP_CnRen_5_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Excess1" name='STIP_CnRen_5_Excess1' value={FormData['STIP_CnRen_5_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Premium2" name='STIP_CnRen_5_Premium2' value={FormData['STIP_CnRen_5_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Excess2" name='STIP_CnRen_5_Excess2' value={FormData['STIP_CnRen_5_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Clothing and personal</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_6_Recomm"] === 1 ? true : false} name="STIP_CnRI_6_Recomm" onChange={(e)=>{FormData["STIP_CnRI_6_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_6_Accepted"] === 1 ? true : false} name="STIP_CnRI_6_Accepted" onChange={(e)=>{FormData["STIP_CnRI_6_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_6_CoverAmount" name='STIP_CnRI_6_CoverAmount' value={FormData['STIP_CnRI_6_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Premium1" name='STIP_CnRen_6_Premium1' value={FormData['STIP_CnRen_6_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Excess1" name='STIP_CnRen_6_Excess1' value={FormData['STIP_CnRen_6_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Premium2" name='STIP_CnRen_6_Premium2' value={FormData['STIP_CnRen_6_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Excess2" name='STIP_CnRen_6_Excess2' value={FormData['STIP_CnRen_6_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Keys and locks</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_7_Recomm"] === 1 ? true : false} name="STIP_CnRI_7_Recomm" onChange={(e)=>{FormData["STIP_CnRI_7_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_7_Accepted"] === 1 ? true : false} name="STIP_CnRI_7_Accepted" onChange={(e)=>{FormData["STIP_CnRI_7_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_7_CoverAmount" name='STIP_CnRI_7_CoverAmount' value={FormData['STIP_CnRI_7_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Premium1" name='STIP_CnRen_7_Premium1' value={FormData['STIP_CnRen_7_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Excess1" name='STIP_CnRen_7_Excess1' value={FormData['STIP_CnRen_7_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Premium2" name='STIP_CnRen_7_Premium2' value={FormData['STIP_CnRen_7_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Excess2" name='STIP_CnRen_7_Excess2' value={FormData['STIP_CnRen_7_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Wheelchairs</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_8_Recomm"] === 1 ? true : false} name="STIP_CnRI_8_Recomm" onChange={(e)=>{FormData["STIP_CnRI_8_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_8_Accepted"] === 1 ? true : false} name="STIP_CnRI_8_Accepted" onChange={(e)=>{FormData["STIP_CnRI_8_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_8_CoverAmount" name='STIP_CnRI_8_CoverAmount' value={FormData['STIP_CnRI_8_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Premium1" name='STIP_CnRen_8_Premium1' value={FormData['STIP_CnRen_8_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Excess1" name='STIP_CnRen_8_Excess1' value={FormData['STIP_CnRen_8_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Premium2" name='STIP_CnRen_8_Premium2' value={FormData['STIP_CnRen_8_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Excess2" name='STIP_CnRen_8_Excess2' value={FormData['STIP_CnRen_8_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Bicycles</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_9_Recomm"] === 1 ? true : false} name="STIP_CnRI_9_Recomm" onChange={(e)=>{FormData["STIP_CnRI_9_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_9_Accepted"] === 1 ? true : false} name="STIP_CnRI_9_Accepted" onChange={(e)=>{FormData["STIP_CnRI_9_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_9_CoverAmount" name='STIP_CnRI_9_CoverAmount' value={FormData['STIP_CnRI_9_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Premium1" name='STIP_CnRen_9_Premium1' value={FormData['STIP_CnRen_9_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Excess1" name='STIP_CnRen_9_Excess1' value={FormData['STIP_CnRen_9_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Premium2" name='STIP_CnRen_9_Premium2' value={FormData['STIP_CnRen_9_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Excess2" name='STIP_CnRen_9_Excess2' value={FormData['STIP_CnRen_9_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Cellular telephones</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_10_Recomm"] === 1 ? true : false} name="STIP_CnRI_10_Recomm" onChange={(e)=>{FormData["STIP_CnRI_10_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_10_Accepted"] === 1 ? true : false} name="STIP_CnRI_10_Accepted" onChange={(e)=>{FormData["STIP_CnRI_10_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_10_CoverAmount" name='STIP_CnRI_10_CoverAmount' value={FormData['STIP_CnRI_10_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Premium1" name='STIP_CnRen_10_Premium1' value={FormData['STIP_CnRen_10_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Excess1" name='STIP_CnRen_10_Excess1' value={FormData['STIP_CnRen_10_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Premium2" name='STIP_CnRen_10_Premium2' value={FormData['STIP_CnRen_10_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Excess2" name='STIP_CnRen_10_Excess2' value={FormData['STIP_CnRen_10_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; TV,VCR,Decoders</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_11_Recomm"] === 1 ? true : false} name="STIP_CnRI_11_Recomm" onChange={(e)=>{FormData["STIP_CnRI_11_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_11_Accepted"] === 1 ? true : false} name="STIP_CnRI_11_Accepted" onChange={(e)=>{FormData["STIP_CnRI_11_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_11_CoverAmount" name='STIP_CnRI_11_CoverAmount' value={FormData['STIP_CnRI_11_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Premium1" name='STIP_CnRen_11_Premium1' value={FormData['STIP_CnRen_11_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Excess1" name='STIP_CnRen_11_Excess1' value={FormData['STIP_CnRen_11_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Premium2" name='STIP_CnRen_11_Premium2' value={FormData['STIP_CnRen_11_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Excess2" name='STIP_CnRen_11_Excess2' value={FormData['STIP_CnRen_11_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>All Risk Specified</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_12_Recomm"] === 1 ? true : false} name="STIP_CnRI_12_Recomm" onChange={(e)=>{FormData["STIP_CnRI_12_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_12_Accepted"] === 1 ? true : false} name="STIP_CnRI_12_Accepted" onChange={(e)=>{FormData["STIP_CnRI_12_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_12_CoverAmount" name='STIP_CnRI_12_CoverAmount' value={FormData['STIP_CnRI_12_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Premium1" name='STIP_CnRen_12_Premium1' value={FormData['STIP_CnRen_12_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Excess1" name='STIP_CnRen_12_Excess1' value={FormData['STIP_CnRen_12_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Premium2" name='STIP_CnRen_12_Premium2' value={FormData['STIP_CnRen_12_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Excess2" name='STIP_CnRen_12_Excess2' value={FormData['STIP_CnRen_12_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Computer equipment</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_13_Recomm"] === 1 ? true : false} name="STIP_CnRI_13_Recomm" onChange={(e)=>{FormData["STIP_CnRI_13_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_13_Accepted"] === 1 ? true : false} name="STIP_CnRI_13_Accepted" onChange={(e)=>{FormData["STIP_CnRI_13_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_13_CoverAmount" name='STIP_CnRI_13_CoverAmount' value={FormData['STIP_CnRI_13_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Premium1" name='STIP_CnRen_13_Premium1' value={FormData['STIP_CnRen_13_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Excess1" name='STIP_CnRen_13_Excess1' value={FormData['STIP_CnRen_13_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Premium2" name='STIP_CnRen_13_Premium2' value={FormData['STIP_CnRen_13_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Excess2" name='STIP_CnRen_13_Excess2' value={FormData['STIP_CnRen_13_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Items in bank vault</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_14_Recomm"] === 1 ? true : false} name="STIP_CnRI_14_Recomm" onChange={(e)=>{FormData["STIP_CnRI_14_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_14_Accepted"] === 1 ? true : false} name="STIP_CnRI_14_Accepted" onChange={(e)=>{FormData["STIP_CnRI_14_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_14_CoverAmount" name='STIP_CnRI_14_CoverAmount' value={FormData['STIP_CnRI_14_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Premium1" name='STIP_CnRen_14_Premium1' value={FormData['STIP_CnRen_14_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Excess1" name='STIP_CnRen_14_Excess1' value={FormData['STIP_CnRen_14_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Premium2" name='STIP_CnRen_14_Premium2' value={FormData['STIP_CnRen_14_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Excess2" name='STIP_CnRen_14_Excess2' value={FormData['STIP_CnRen_14_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Jewellery(All jewellery)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_15_Recomm"] === 1 ? true : false} name="STIP_CnRI_15_Recomm" onChange={(e)=>{FormData["STIP_CnRI_15_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_15_Accepted"] === 1 ? true : false} name="STIP_CnRI_15_Accepted" onChange={(e)=>{FormData["STIP_CnRI_15_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_15_CoverAmount" name='STIP_CnRI_15_CoverAmount' value={FormData['STIP_CnRI_15_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Premium1" name='STIP_CnRen_15_Premium1' value={FormData['STIP_CnRen_15_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Excess1" name='STIP_CnRen_15_Excess1' value={FormData['STIP_CnRen_15_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Premium2" name='STIP_CnRen_15_Premium2' value={FormData['STIP_CnRen_15_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Excess2" name='STIP_CnRen_15_Excess2' value={FormData['STIP_CnRen_15_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Photographic equipment</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_16_Recomm"] === 1 ? true : false} name="STIP_CnRI_16_Recomm" onChange={(e)=>{FormData["STIP_CnRI_16_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_16_Accepted"] === 1 ? true : false} name="STIP_CnRI_16_Accepted" onChange={(e)=>{FormData["STIP_CnRI_16_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_16_CoverAmount" name='STIP_CnRI_16_CoverAmount' value={FormData['STIP_CnRI_16_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Premium1" name='STIP_CnRen_16_Premium1' value={FormData['STIP_CnRen_16_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Excess1" name='STIP_CnRen_16_Excess1' value={FormData['STIP_CnRen_16_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Premium2" name='STIP_CnRen_16_Premium2' value={FormData['STIP_CnRen_16_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Excess2" name='STIP_CnRen_16_Excess2' value={FormData['STIP_CnRen_16_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Sound Equipment</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_17_Recomm"] === 1 ? true : false} name="STIP_CnRI_17_Recomm" onChange={(e)=>{FormData["STIP_CnRI_17_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_17_Accepted"] === 1 ? true : false} name="STIP_CnRI_17_Accepted" onChange={(e)=>{FormData["STIP_CnRI_17_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_17_CoverAmount" name='STIP_CnRI_17_CoverAmount' value={FormData['STIP_CnRI_17_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Premium1" name='STIP_CnRen_17_Premium1' value={FormData['STIP_CnRen_17_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Excess1" name='STIP_CnRen_17_Excess1' value={FormData['STIP_CnRen_17_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Premium2" name='STIP_CnRen_17_Premium2' value={FormData['STIP_CnRen_17_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Excess2" name='STIP_CnRen_17_Excess2' value={FormData['STIP_CnRen_17_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Other specify</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_18_Recomm"] === 1 ? true : false} name="STIP_CnRI_18_Recomm" onChange={(e)=>{FormData["STIP_CnRI_18_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_18_Accepted"] === 1 ? true : false} name="STIP_CnRI_18_Accepted" onChange={(e)=>{FormData["STIP_CnRI_18_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_18_CoverAmount" name='STIP_CnRI_18_CoverAmount' value={FormData['STIP_CnRI_18_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Premium1" name='STIP_CnRen_18_Premium1' value={FormData['STIP_CnRen_18_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Excess1" name='STIP_CnRen_18_Excess1' value={FormData['STIP_CnRen_18_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Premium2" name='STIP_CnRen_18_Premium2' value={FormData['STIP_CnRen_18_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Excess2" name='STIP_CnRen_18_Excess2' value={FormData['STIP_CnRen_18_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Personal legal liability</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_19_Recomm"] === 1 ? true : false} name="STIP_CnRI_19_Recomm" onChange={(e)=>{FormData["STIP_CnRI_19_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_19_Accepted"] === 1 ? true : false} name="STIP_CnRI_19_Accepted" onChange={(e)=>{FormData["STIP_CnRI_19_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_19_CoverAmount" name='STIP_CnRI_19_CoverAmount' value={FormData['STIP_CnRI_19_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Premium1" name='STIP_CnRen_19_Premium1' value={FormData['STIP_CnRen_19_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Excess1" name='STIP_CnRen_19_Excess1' value={FormData['STIP_CnRen_19_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Premium2" name='STIP_CnRen_19_Premium2' value={FormData['STIP_CnRen_19_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Excess2" name='STIP_CnRen_19_Excess2' value={FormData['STIP_CnRen_19_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>(PLIP)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_20_Recomm"] === 1 ? true : false} name="STIP_CnRI_20_Recomm" onChange={(e)=>{FormData["STIP_CnRI_20_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_20_Accepted"] === 1 ? true : false} name="STIP_CnRI_20_Accepted" onChange={(e)=>{FormData["STIP_CnRI_20_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_20_CoverAmount" name='STIP_CnRI_20_CoverAmount' value={FormData['STIP_CnRI_20_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Premium1" name='STIP_CnRen_20_Premium1' value={FormData['STIP_CnRen_20_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Excess1" name='STIP_CnRen_20_Excess1' value={FormData['STIP_CnRen_20_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Premium2" name='STIP_CnRen_20_Premium2' value={FormData['STIP_CnRen_20_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Excess2" name='STIP_CnRen_20_Excess2' value={FormData['STIP_CnRen_20_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Vehicles(Refer to quote/policy)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_21_Recomm"] === 1 ? true : false} name="STIP_CnRI_21_Recomm" onChange={(e)=>{FormData["STIP_CnRI_21_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_21_Accepted"] === 1 ? true : false} name="STIP_CnRI_21_Accepted" onChange={(e)=>{FormData["STIP_CnRI_21_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_21_CoverAmount" name='STIP_CnRI_21_CoverAmount' value={FormData['STIP_CnRI_21_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Premium1" name='STIP_CnRen_21_Premium1' value={FormData['STIP_CnRen_21_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Excess1" name='STIP_CnRen_21_Excess1' value={FormData['STIP_CnRen_21_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Premium2" name='STIP_CnRen_21_Premium2' value={FormData['STIP_CnRen_21_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Excess2" name='STIP_CnRen_21_Excess2' value={FormData['STIP_CnRen_21_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Car hire</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_22_Recomm"] === 1 ? true : false} name="STIP_CnRI_22_Recomm" onChange={(e)=>{FormData["STIP_CnRI_22_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_22_Accepted"] === 1 ? true : false} name="STIP_CnRI_22_Accepted" onChange={(e)=>{FormData["STIP_CnRI_22_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_22_CoverAmount" name='STIP_CnRI_22_CoverAmount' value={FormData['STIP_CnRI_22_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Premium1" name='STIP_CnRen_22_Premium1' value={FormData['STIP_CnRen_22_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Excess1" name='STIP_CnRen_22_Excess1' value={FormData['STIP_CnRen_22_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Premium2" name='STIP_CnRen_22_Premium2' value={FormData['STIP_CnRen_22_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Excess2" name='STIP_CnRen_22_Excess2' value={FormData['STIP_CnRen_22_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Excess waiver</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_23_Recomm"] === 1 ? true : false} name="STIP_CnRI_23_Recomm" onChange={(e)=>{FormData["STIP_CnRI_23_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_23_Accepted"] === 1 ? true : false} name="STIP_CnRI_23_Accepted" onChange={(e)=>{FormData["STIP_CnRI_23_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_23_CoverAmount" name='STIP_CnRI_23_CoverAmount' value={FormData['STIP_CnRI_23_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Premium1" name='STIP_CnRen_23_Premium1' value={FormData['STIP_CnRen_23_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Excess1" name='STIP_CnRen_23_Excess1' value={FormData['STIP_CnRen_23_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Premium2" name='STIP_CnRen_23_Premium2' value={FormData['STIP_CnRen_23_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Excess2" name='STIP_CnRen_23_Excess2' value={FormData['STIP_CnRen_23_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Credit shortfall</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_24_Recomm"] === 1 ? true : false} name="STIP_CnRI_24_Recomm" onChange={(e)=>{FormData["STIP_CnRI_24_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_24_Accepted"] === 1 ? true : false} name="STIP_CnRI_24_Accepted" onChange={(e)=>{FormData["STIP_CnRI_24_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_24_CoverAmount" name='STIP_CnRI_24_CoverAmount' value={FormData['STIP_CnRI_24_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Premium1" name='STIP_CnRen_24_Premium1' value={FormData['STIP_CnRen_24_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Excess1" name='STIP_CnRen_24_Excess1' value={FormData['STIP_CnRen_24_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Premium2" name='STIP_CnRen_24_Premium2' value={FormData['STIP_CnRen_24_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Excess2" name='STIP_CnRen_24_Excess2' value={FormData['STIP_CnRen_24_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>



          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Watercraft</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_25_Recomm"] === 1 ? true : false} name="STIP_CnRI_25_Recomm" onChange={(e)=>{FormData["STIP_CnRI_25_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_25_Accepted"] === 1 ? true : false} name="STIP_CnRI_25_Accepted" onChange={(e)=>{FormData["STIP_CnRI_25_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_25_CoverAmount" name='STIP_CnRI_25_CoverAmount' value={FormData['STIP_CnRI_25_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Premium1" name='STIP_CnRen_25_Premium1' value={FormData['STIP_CnRen_25_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Excess1" name='STIP_CnRen_25_Excess1' value={FormData['STIP_CnRen_25_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Premium2" name='STIP_CnRen_25_Premium2' value={FormData['STIP_CnRen_25_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Excess2" name='STIP_CnRen_25_Excess2' value={FormData['STIP_CnRen_25_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Sasria</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_26_Recomm"] === 1 ? true : false} name="STIP_CnRI_26_Recomm" onChange={(e)=>{FormData["STIP_CnRI_26_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_26_Accepted"] === 1 ? true : false} name="STIP_CnRI_26_Accepted" onChange={(e)=>{FormData["STIP_CnRI_26_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_26_CoverAmount" name='STIP_CnRI_26_CoverAmount' value={FormData['STIP_CnRI_26_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Premium1" name='STIP_CnRen_26_Premium1' value={FormData['STIP_CnRen_26_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Excess1" name='STIP_CnRen_26_Excess1' value={FormData['STIP_CnRen_26_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Premium2" name='STIP_CnRen_26_Premium2' value={FormData['STIP_CnRen_26_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Excess2" name='STIP_CnRen_26_Excess2' value={FormData['STIP_CnRen_26_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Legal access</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRI_27_Recomm"] === 1 ? true : false} name="STIP_CnRI_27_Recomm" onChange={(e)=>{FormData["STIP_CnRI_27_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRI_27_Accepted"] === 1 ? true : false} name="STIP_CnRI_27_Accepted" onChange={(e)=>{FormData["STIP_CnRI_27_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRI_27_CoverAmount" name='STIP_CnRI_27_CoverAmount' value={FormData['STIP_CnRI_27_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Premium1" name='STIP_CnRen_27_Premium1' value={FormData['STIP_CnRen_27_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Excess1" name='STIP_CnRen_27_Excess1' value={FormData['STIP_CnRen_27_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Premium2" name='STIP_CnRen_27_Premium2' value={FormData['STIP_CnRen_27_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Excess2" name='STIP_CnRen_27_Excess2' value={FormData['STIP_CnRen_27_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Fees and charges</td>
              <td className="col-2" style={{width:"910px"}}>
                <input spellCheck="true"  id="STIP_CnRI_FeeCharges" name='STIP_CnRI_FeeCharges' value={FormData['STIP_CnRI_FeeCharges']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Commissions</td>
              <td className="col-2" style={{width:"910px"}}>
                <input spellCheck="true"  id="STIP_CnRI_Commission" name='STIP_CnRI_Commission' value={FormData['STIP_CnRI_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Total premium</td>
              <td className="col-2" style={{width:"910px"}}>
                <input spellCheck="true"  id="STIP_CnRI_TotalPremium" name='STIP_CnRI_TotalPremium' value={FormData['STIP_CnRI_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
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
<div className="container-fluid">
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
              
              <td className="col-8" style={{width:"590px"}}></td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <b>Existing Product</b>
                <input spellCheck="true"  id="STIP_CnRen_Existing_Company" name='STIP_CnRen_Existing_Company' value={FormData['STIP_CnRen_Existing_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" style={{width:"100px"}} />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <b>Replacement Product</b>
                <input spellCheck="true"  id="STIP_CnRen_Replacement_Company" name='STIP_CnRen_Replacement_Company' value={FormData['STIP_CnRen_Replacement_Company']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Company"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"590px"}}></td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRen_Existing_Provider" name='STIP_CnRen_Existing_Provider' value={FormData['STIP_CnRen_Existing_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" style={{width:"100px"}} />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRen_Replacement_Provider" name='STIP_CnRen_Replacement_Provider' value={FormData['STIP_CnRen_Replacement_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Provider"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-8" style={{width:"590px"}}></td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRen_Existing_Product" name='STIP_CnRen_Existing_Product' value={FormData['STIP_CnRen_Existing_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" style={{width:"100px"}} />
              </td>
              <td className="col-2" align="center" style={{width:"260px"}}>
                <input spellCheck="true"  id="STIP_CnRen_Replacement_Product" name='STIP_CnRen_Replacement_Product' value={FormData['STIP_CnRen_Replacement_Product']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Product"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}><b>Cover</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Recommended</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Accepted</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Cover amount</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Premium</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Excess</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Premium</b></td>
              <td className="col-2" style={{width:"130px"}}><b>Excess</b></td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>House content</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_1_Recomm"] === 1 ? true : false} name="STIP_CnRen_1_Recomm" onChange={(e)=>{FormData["STIP_CnRen_1_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_1_Accepted"] === 1 ? true : false} name="STIP_CnRen_1_Accepted" onChange={(e)=>{FormData["STIP_CnRen_1_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_CoverAmount" name='STIP_CnRen_1_CoverAmount' value={FormData['STIP_CnRen_1_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Premium1" name='STIP_CnRen_1_Premium1' value={FormData['STIP_CnRen_1_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Excess1" name='STIP_CnRen_1_Excess1' value={FormData['STIP_CnRen_1_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Premium2" name='STIP_CnRen_1_Premium2' value={FormData['STIP_CnRen_1_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_1_Excess2" name='STIP_CnRen_1_Excess2' value={FormData['STIP_CnRen_1_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Buildings</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_2_Recomm"] === 1 ? true : false} name="STIP_CnRen_2_Recomm" onChange={(e)=>{FormData["STIP_CnRen_2_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_2_Accepted"] === 1 ? true : false} name="STIP_CnRen_2_Accepted" onChange={(e)=>{FormData["STIP_CnRen_2_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_CoverAmount" name='STIP_CnRen_2_CoverAmount' value={FormData['STIP_CnRen_2_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Premium1" name='STIP_CnRen_2_Premium1' value={FormData['STIP_CnRen_2_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Excess1" name='STIP_CnRen_2_Excess1' value={FormData['STIP_CnRen_2_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Premium2" name='STIP_CnRen_2_Premium2' value={FormData['STIP_CnRen_2_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_2_Excess2" name='STIP_CnRen_2_Excess2' value={FormData['STIP_CnRen_2_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Subsidence and landslip</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_3_Recomm"] === 1 ? true : false} name="STIP_CnRen_3_Recomm" onChange={(e)=>{FormData["STIP_CnRen_3_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_3_Accepted"] === 1 ? true : false} name="STIP_CnRen_3_Accepted" onChange={(e)=>{FormData["STIP_CnRen_3_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_CoverAmount" name='STIP_CnRen_3_CoverAmount' value={FormData['STIP_CnRen_3_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Premium1" name='STIP_CnRen_3_Premium1' value={FormData['STIP_CnRen_3_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Excess1" name='STIP_CnRen_3_Excess1' value={FormData['STIP_CnRen_3_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Premium2" name='STIP_CnRen_3_Premium2' value={FormData['STIP_CnRen_3_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_3_Excess2" name='STIP_CnRen_3_Excess2' value={FormData['STIP_CnRen_3_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Accidental damage</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_4_Recomm"] === 1 ? true : false} name="STIP_CnRen_4_Recomm" onChange={(e)=>{FormData["STIP_CnRen_4_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_4_Accepted"] === 1 ? true : false} name="STIP_CnRen_4_Accepted" onChange={(e)=>{FormData["STIP_CnRen_4_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_CoverAmount" name='STIP_CnRen_4_CoverAmount' value={FormData['STIP_CnRen_4_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Premium1" name='STIP_CnRen_4_Premium1' value={FormData['STIP_CnRen_4_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Excess1" name='STIP_CnRen_4_Excess1' value={FormData['STIP_CnRen_4_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Premium2" name='STIP_CnRen_4_Premium2' value={FormData['STIP_CnRen_4_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_4_Excess2" name='STIP_CnRen_4_Excess2' value={FormData['STIP_CnRen_4_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>All Risk(General)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_5_Recomm"] === 1 ? true : false} name="STIP_CnRen_5_Recomm" onChange={(e)=>{FormData["STIP_CnRen_5_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_5_Accepted"] === 1 ? true : false} name="STIP_CnRen_5_Accepted" onChange={(e)=>{FormData["STIP_CnRen_5_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_CoverAmount" name='STIP_CnRen_5_CoverAmount' value={FormData['STIP_CnRen_5_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Premium1" name='STIP_CnRen_5_Premium1' value={FormData['STIP_CnRen_5_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Excess1" name='STIP_CnRen_5_Excess1' value={FormData['STIP_CnRen_5_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Premium2" name='STIP_CnRen_5_Premium2' value={FormData['STIP_CnRen_5_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_5_Excess2" name='STIP_CnRen_5_Excess2' value={FormData['STIP_CnRen_5_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Clothing and personal</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_6_Recomm"] === 1 ? true : false} name="STIP_CnRen_6_Recomm" onChange={(e)=>{FormData["STIP_CnRen_6_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_6_Accepted"] === 1 ? true : false} name="STIP_CnRen_6_Accepted" onChange={(e)=>{FormData["STIP_CnRen_6_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_CoverAmount" name='STIP_CnRen_6_CoverAmount' value={FormData['STIP_CnRen_6_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Premium1" name='STIP_CnRen_6_Premium1' value={FormData['STIP_CnRen_6_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Excess1" name='STIP_CnRen_6_Excess1' value={FormData['STIP_CnRen_6_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Premium2" name='STIP_CnRen_6_Premium2' value={FormData['STIP_CnRen_6_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_6_Excess2" name='STIP_CnRen_6_Excess2' value={FormData['STIP_CnRen_6_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Keys and locks</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_7_Recomm"] === 1 ? true : false} name="STIP_CnRen_7_Recomm" onChange={(e)=>{FormData["STIP_CnRen_7_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_7_Accepted"] === 1 ? true : false} name="STIP_CnRen_7_Accepted" onChange={(e)=>{FormData["STIP_CnRen_7_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_CoverAmount" name='STIP_CnRen_7_CoverAmount' value={FormData['STIP_CnRen_7_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Premium1" name='STIP_CnRen_7_Premium1' value={FormData['STIP_CnRen_7_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Excess1" name='STIP_CnRen_7_Excess1' value={FormData['STIP_CnRen_7_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Premium2" name='STIP_CnRen_7_Premium2' value={FormData['STIP_CnRen_7_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_7_Excess2" name='STIP_CnRen_7_Excess2' value={FormData['STIP_CnRen_7_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Wheelchairs</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_8_Recomm"] === 1 ? true : false} name="STIP_CnRen_8_Recomm" onChange={(e)=>{FormData["STIP_CnRen_8_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_8_Accepted"] === 1 ? true : false} name="STIP_CnRen_8_Accepted" onChange={(e)=>{FormData["STIP_CnRen_8_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_CoverAmount" name='STIP_CnRen_8_CoverAmount' value={FormData['STIP_CnRen_8_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Premium1" name='STIP_CnRen_8_Premium1' value={FormData['STIP_CnRen_8_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Excess1" name='STIP_CnRen_8_Excess1' value={FormData['STIP_CnRen_8_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Premium2" name='STIP_CnRen_8_Premium2' value={FormData['STIP_CnRen_8_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_8_Excess2" name='STIP_CnRen_8_Excess2' value={FormData['STIP_CnRen_8_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Bicycles</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_9_Recomm"] === 1 ? true : false} name="STIP_CnRen_9_Recomm" onChange={(e)=>{FormData["STIP_CnRen_9_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_9_Accepted"] === 1 ? true : false} name="STIP_CnRen_9_Accepted" onChange={(e)=>{FormData["STIP_CnRen_9_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_CoverAmount" name='STIP_CnRen_9_CoverAmount' value={FormData['STIP_CnRen_9_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Premium1" name='STIP_CnRen_9_Premium1' value={FormData['STIP_CnRen_9_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Excess1" name='STIP_CnRen_9_Excess1' value={FormData['STIP_CnRen_9_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Premium2" name='STIP_CnRen_9_Premium2' value={FormData['STIP_CnRen_9_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_9_Excess2" name='STIP_CnRen_9_Excess2' value={FormData['STIP_CnRen_9_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Cellular telephones</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_10_Recomm"] === 1 ? true : false} name="STIP_CnRen_10_Recomm" onChange={(e)=>{FormData["STIP_CnRen_10_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_10_Accepted"] === 1 ? true : false} name="STIP_CnRen_10_Accepted" onChange={(e)=>{FormData["STIP_CnRen_10_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_CoverAmount" name='STIP_CnRen_10_CoverAmount' value={FormData['STIP_CnRen_10_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Premium1" name='STIP_CnRen_10_Premium1' value={FormData['STIP_CnRen_10_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Excess1" name='STIP_CnRen_10_Excess1' value={FormData['STIP_CnRen_10_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Premium2" name='STIP_CnRen_10_Premium2' value={FormData['STIP_CnRen_10_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_10_Excess2" name='STIP_CnRen_10_Excess2' value={FormData['STIP_CnRen_10_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; TV,VCR,Decoders</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_11_Recomm"] === 1 ? true : false} name="STIP_CnRen_11_Recomm" onChange={(e)=>{FormData["STIP_CnRen_11_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_11_Accepted"] === 1 ? true : false} name="STIP_CnRen_11_Accepted" onChange={(e)=>{FormData["STIP_CnRen_11_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_CoverAmount" name='STIP_CnRen_11_CoverAmount' value={FormData['STIP_CnRen_11_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Premium1" name='STIP_CnRen_11_Premium1' value={FormData['STIP_CnRen_11_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Excess1" name='STIP_CnRen_11_Excess1' value={FormData['STIP_CnRen_11_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Premium2" name='STIP_CnRen_11_Premium2' value={FormData['STIP_CnRen_11_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_11_Excess2" name='STIP_CnRen_11_Excess2' value={FormData['STIP_CnRen_11_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>All Risk Specified</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_12_Recomm"] === 1 ? true : false} name="STIP_CnRen_12_Recomm" onChange={(e)=>{FormData["STIP_CnRen_12_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_12_Accepted"] === 1 ? true : false} name="STIP_CnRen_12_Accepted" onChange={(e)=>{FormData["STIP_CnRen_12_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_CoverAmount" name='STIP_CnRen_12_CoverAmount' value={FormData['STIP_CnRen_12_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Premium1" name='STIP_CnRen_12_Premium1' value={FormData['STIP_CnRen_12_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Excess1" name='STIP_CnRen_12_Excess1' value={FormData['STIP_CnRen_12_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Premium2" name='STIP_CnRen_12_Premium2' value={FormData['STIP_CnRen_12_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_12_Excess2" name='STIP_CnRen_12_Excess2' value={FormData['STIP_CnRen_12_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Computer equipment</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_13_Recomm"] === 1 ? true : false} name="STIP_CnRen_13_Recomm" onChange={(e)=>{FormData["STIP_CnRen_13_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_13_Accepted"] === 1 ? true : false} name="STIP_CnRen_13_Accepted" onChange={(e)=>{FormData["STIP_CnRen_13_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_CoverAmount" name='STIP_CnRen_13_CoverAmount' value={FormData['STIP_CnRen_13_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Premium1" name='STIP_CnRen_13_Premium1' value={FormData['STIP_CnRen_13_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Excess1" name='STIP_CnRen_13_Excess1' value={FormData['STIP_CnRen_13_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Premium2" name='STIP_CnRen_13_Premium2' value={FormData['STIP_CnRen_13_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_13_Excess2" name='STIP_CnRen_13_Excess2' value={FormData['STIP_CnRen_13_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Items in bank vault</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_14_Recomm"] === 1 ? true : false} name="STIP_CnRen_14_Recomm" onChange={(e)=>{FormData["STIP_CnRen_14_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_14_Accepted"] === 1 ? true : false} name="STIP_CnRen_14_Accepted" onChange={(e)=>{FormData["STIP_CnRen_14_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_CoverAmount" name='STIP_CnRen_14_CoverAmount' value={FormData['STIP_CnRen_14_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Premium1" name='STIP_CnRen_14_Premium1' value={FormData['STIP_CnRen_14_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Excess1" name='STIP_CnRen_14_Excess1' value={FormData['STIP_CnRen_14_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Premium2" name='STIP_CnRen_14_Premium2' value={FormData['STIP_CnRen_14_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_14_Excess2" name='STIP_CnRen_14_Excess2' value={FormData['STIP_CnRen_14_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Jewellery(All jewellery)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_15_Recomm"] === 1 ? true : false} name="STIP_CnRen_15_Recomm" onChange={(e)=>{FormData["STIP_CnRen_15_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_15_Accepted"] === 1 ? true : false} name="STIP_CnRen_15_Accepted" onChange={(e)=>{FormData["STIP_CnRen_15_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_CoverAmount" name='STIP_CnRen_15_CoverAmount' value={FormData['STIP_CnRen_15_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Premium1" name='STIP_CnRen_15_Premium1' value={FormData['STIP_CnRen_15_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Excess1" name='STIP_CnRen_15_Excess1' value={FormData['STIP_CnRen_15_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Premium2" name='STIP_CnRen_15_Premium2' value={FormData['STIP_CnRen_15_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_15_Excess2" name='STIP_CnRen_15_Excess2' value={FormData['STIP_CnRen_15_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Photographic equipment</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_16_Recomm"] === 1 ? true : false} name="STIP_CnRen_16_Recomm" onChange={(e)=>{FormData["STIP_CnRen_16_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_16_Accepted"] === 1 ? true : false} name="STIP_CnRen_16_Accepted" onChange={(e)=>{FormData["STIP_CnRen_16_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_CoverAmount" name='STIP_CnRen_16_CoverAmount' value={FormData['STIP_CnRen_16_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Premium1" name='STIP_CnRen_16_Premium1' value={FormData['STIP_CnRen_16_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Excess1" name='STIP_CnRen_16_Excess1' value={FormData['STIP_CnRen_16_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Premium2" name='STIP_CnRen_16_Premium2' value={FormData['STIP_CnRen_16_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_16_Excess2" name='STIP_CnRen_16_Excess2' value={FormData['STIP_CnRen_16_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Sound Equipment</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_17_Recomm"] === 1 ? true : false} name="STIP_CnRen_17_Recomm" onChange={(e)=>{FormData["STIP_CnRen_17_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_17_Accepted"] === 1 ? true : false} name="STIP_CnRen_17_Accepted" onChange={(e)=>{FormData["STIP_CnRen_17_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_CoverAmount" name='STIP_CnRen_17_CoverAmount' value={FormData['STIP_CnRen_17_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Premium1" name='STIP_CnRen_17_Premium1' value={FormData['STIP_CnRen_17_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Excess1" name='STIP_CnRen_17_Excess1' value={FormData['STIP_CnRen_17_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Premium2" name='STIP_CnRen_17_Premium2' value={FormData['STIP_CnRen_17_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_17_Excess2" name='STIP_CnRen_17_Excess2' value={FormData['STIP_CnRen_17_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Other specify</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_18_Recomm"] === 1 ? true : false} name="STIP_CnRen_18_Recomm" onChange={(e)=>{FormData["STIP_CnRen_18_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_18_Accepted"] === 1 ? true : false} name="STIP_CnRen_18_Accepted" onChange={(e)=>{FormData["STIP_CnRen_18_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_CoverAmount" name='STIP_CnRen_18_CoverAmount' value={FormData['STIP_CnRen_18_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Premium1" name='STIP_CnRen_18_Premium1' value={FormData['STIP_CnRen_18_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Excess1" name='STIP_CnRen_18_Excess1' value={FormData['STIP_CnRen_18_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Premium2" name='STIP_CnRen_18_Premium2' value={FormData['STIP_CnRen_18_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_18_Excess2" name='STIP_CnRen_18_Excess2' value={FormData['STIP_CnRen_18_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Personal legal liability</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_19_Recomm"] === 1 ? true : false} name="STIP_CnRen_19_Recomm" onChange={(e)=>{FormData["STIP_CnRen_19_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_19_Accepted"] === 1 ? true : false} name="STIP_CnRen_19_Accepted" onChange={(e)=>{FormData["STIP_CnRen_19_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_CoverAmount" name='STIP_CnRen_19_CoverAmount' value={FormData['STIP_CnRen_19_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Premium1" name='STIP_CnRen_19_Premium1' value={FormData['STIP_CnRen_19_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Excess1" name='STIP_CnRen_19_Excess1' value={FormData['STIP_CnRen_19_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Premium2" name='STIP_CnRen_19_Premium2' value={FormData['STIP_CnRen_19_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_19_Excess2" name='STIP_CnRen_19_Excess2' value={FormData['STIP_CnRen_19_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>(PLIP)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_20_Recomm"] === 1 ? true : false} name="STIP_CnRen_20_Recomm" onChange={(e)=>{FormData["STIP_CnRen_20_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_20_Accepted"] === 1 ? true : false} name="STIP_CnRen_20_Accepted" onChange={(e)=>{FormData["STIP_CnRen_20_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_CoverAmount" name='STIP_CnRen_20_CoverAmount' value={FormData['STIP_CnRen_20_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Premium1" name='STIP_CnRen_20_Premium1' value={FormData['STIP_CnRen_20_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Excess1" name='STIP_CnRen_20_Excess1' value={FormData['STIP_CnRen_20_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Premium2" name='STIP_CnRen_20_Premium2' value={FormData['STIP_CnRen_20_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_20_Excess2" name='STIP_CnRen_20_Excess2' value={FormData['STIP_CnRen_20_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Vehicles(Refer to quote/policy)</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_21_Recomm"] === 1 ? true : false} name="STIP_CnRen_21_Recomm" onChange={(e)=>{FormData["STIP_CnRen_21_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_21_Accepted"] === 1 ? true : false} name="STIP_CnRen_21_Accepted" onChange={(e)=>{FormData["STIP_CnRen_21_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_CoverAmount" name='STIP_CnRen_21_CoverAmount' value={FormData['STIP_CnRen_21_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Premium1" name='STIP_CnRen_21_Premium1' value={FormData['STIP_CnRen_21_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Excess1" name='STIP_CnRen_21_Excess1' value={FormData['STIP_CnRen_21_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Premium2" name='STIP_CnRen_21_Premium2' value={FormData['STIP_CnRen_21_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_21_Excess2" name='STIP_CnRen_21_Excess2' value={FormData['STIP_CnRen_21_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Car hire</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_22_Recomm"] === 1 ? true : false} name="STIP_CnRen_22_Recomm" onChange={(e)=>{FormData["STIP_CnRen_22_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_22_Accepted"] === 1 ? true : false} name="STIP_CnRen_22_Accepted" onChange={(e)=>{FormData["STIP_CnRen_22_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_CoverAmount" name='STIP_CnRen_22_CoverAmount' value={FormData['STIP_CnRen_22_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Premium1" name='STIP_CnRen_22_Premium1' value={FormData['STIP_CnRen_22_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Excess1" name='STIP_CnRen_22_Excess1' value={FormData['STIP_CnRen_22_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Premium2" name='STIP_CnRen_22_Premium2' value={FormData['STIP_CnRen_22_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_22_Excess2" name='STIP_CnRen_22_Excess2' value={FormData['STIP_CnRen_22_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Excess waiver</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_23_Recomm"] === 1 ? true : false} name="STIP_CnRen_23_Recomm" onChange={(e)=>{FormData["STIP_CnRen_23_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_23_Accepted"] === 1 ? true : false} name="STIP_CnRen_23_Accepted" onChange={(e)=>{FormData["STIP_CnRen_23_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_CoverAmount" name='STIP_CnRen_23_CoverAmount' value={FormData['STIP_CnRen_23_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Premium1" name='STIP_CnRen_23_Premium1' value={FormData['STIP_CnRen_23_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Excess1" name='STIP_CnRen_23_Excess1' value={FormData['STIP_CnRen_23_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Premium2" name='STIP_CnRen_23_Premium2' value={FormData['STIP_CnRen_23_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_23_Excess2" name='STIP_CnRen_23_Excess2' value={FormData['STIP_CnRen_23_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>

          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Credit shortfall</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_24_Recomm"] === 1 ? true : false} name="STIP_CnRen_24_Recomm" onChange={(e)=>{FormData["STIP_CnRen_24_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_24_Accepted"] === 1 ? true : false} name="STIP_CnRen_24_Accepted" onChange={(e)=>{FormData["STIP_CnRen_24_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_CoverAmount" name='STIP_CnRen_24_CoverAmount' value={FormData['STIP_CnRen_24_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Premium1" name='STIP_CnRen_24_Premium1' value={FormData['STIP_CnRen_24_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Excess1" name='STIP_CnRen_24_Excess1' value={FormData['STIP_CnRen_24_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Premium2" name='STIP_CnRen_24_Premium2' value={FormData['STIP_CnRen_24_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_24_Excess2" name='STIP_CnRen_24_Excess2' value={FormData['STIP_CnRen_24_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>



          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Watercraft</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_25_Recomm"] === 1 ? true : false} name="STIP_CnRen_25_Recomm" onChange={(e)=>{FormData["STIP_CnRen_25_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_25_Accepted"] === 1 ? true : false} name="STIP_CnRen_25_Accepted" onChange={(e)=>{FormData["STIP_CnRen_25_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_CoverAmount" name='STIP_CnRen_25_CoverAmount' value={FormData['STIP_CnRen_25_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Premium1" name='STIP_CnRen_25_Premium1' value={FormData['STIP_CnRen_25_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Excess1" name='STIP_CnRen_25_Excess1' value={FormData['STIP_CnRen_25_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Premium2" name='STIP_CnRen_25_Premium2' value={FormData['STIP_CnRen_25_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_25_Excess2" name='STIP_CnRen_25_Excess2' value={FormData['STIP_CnRen_25_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Sasria</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_26_Recomm"] === 1 ? true : false} name="STIP_CnRen_26_Recomm" onChange={(e)=>{FormData["STIP_CnRen_26_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_26_Accepted"] === 1 ? true : false} name="STIP_CnRen_26_Accepted" onChange={(e)=>{FormData["STIP_CnRen_26_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_CoverAmount" name='STIP_CnRen_26_CoverAmount' value={FormData['STIP_CnRen_26_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Premium1" name='STIP_CnRen_26_Premium1' value={FormData['STIP_CnRen_26_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Excess1" name='STIP_CnRen_26_Excess1' value={FormData['STIP_CnRen_26_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Premium2" name='STIP_CnRen_26_Premium2' value={FormData['STIP_CnRen_26_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_26_Excess2" name='STIP_CnRen_26_Excess2' value={FormData['STIP_CnRen_26_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>


          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Legal access</td>
              <td className="col-2" style={{width:"130px"}}>
                  <input type="checkbox" checked={FormData["STIP_CnRen_27_Recomm"] === 1 ? true : false} name="STIP_CnRen_27_Recomm" onChange={(e)=>{FormData["STIP_CnRen_27_Recomm"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input type="checkbox" checked={FormData["STIP_CnRen_27_Accepted"] === 1 ? true : false} name="STIP_CnRen_27_Accepted" onChange={(e)=>{FormData["STIP_CnRen_27_Accepted"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_CoverAmount" name='STIP_CnRen_27_CoverAmount' value={FormData['STIP_CnRen_27_CoverAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Premium1" name='STIP_CnRen_27_Premium1' value={FormData['STIP_CnRen_27_Premium1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Excess1" name='STIP_CnRen_27_Excess1' value={FormData['STIP_CnRen_27_Excess1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Premium2" name='STIP_CnRen_27_Premium2' value={FormData['STIP_CnRen_27_Premium2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>

              <td className="col-2" style={{width:"130px"}}>
                <input spellCheck="true"  id="STIP_CnRen_27_Excess2" name='STIP_CnRen_27_Excess2' value={FormData['STIP_CnRen_27_Excess2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Fees and charges</td>
              <td className="col-2" style={{width:"910px"}}>
                <input spellCheck="true"  id="STIP_CnRen_FeeCharges" name='STIP_CnRen_FeeCharges' value={FormData['STIP_CnRen_FeeCharges']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Commissions</td>
              <td className="col-2" style={{width:"910px"}}>
                <input spellCheck="true"  id="STIP_CnRen_Commission" name='STIP_CnRen_Commission' value={FormData['STIP_CnRen_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
              </td>
            
          </tr>
          <tr className="d-flex">
              
              <td className="col-2" style={{width:"200px"}}>Total premium</td>
              <td className="col-2" style={{width:"910px"}}>
                <input spellCheck="true"  id="STIP_CnRen_TotalPremium" name='STIP_CnRen_TotalPremium' value={FormData['STIP_CnRen_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
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
                      <input className="form-check-input" checked={FormData['STIP_CnRI_AdviseGiven'] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_CnRI_AdviseGiven" name="STIP_CnRI_AdviseGiven"/>
                  </div>
                  <div className="col-2">
                      <label className="form-check-label" htmlFor="STIP_CnRI_AdviseGiven" >
                          Yes
                      </label>
                  </div>
              </div>
              <div className="row col-2 align-items-center">
                  <div className="col-2">
                      <input className="form-check-input" checked={FormData['STIP_CnRI_AdviseGiven'] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_CnRI_AdviseGiven" name="STIP_CnRI_AdviseGiven"/>
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
        <textarea name='STIP_CnRI_ReplacePurpose' onChange={(e) => {onChange(e)}} value={FormData['STIP_CnRI_ReplacePurpose']} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
      <hr/>
        <p>Reasons why replacement is considered more suitable than retaining or modifying the terminated product:</p>
        <textarea name='STIP_CnRI_ReplaceReason' onChange={(e) => {onChange(e)}} value={FormData['STIP_CnRI_ReplaceReason']} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
        <hr/>
        <p>Suppliers of the product(s) to be replaced:</p>
        <textarea name='STIP_CnRen_TotalPremium' onChange={(e) => {onChange(e)}} value={FormData['STIP_CnRen_TotalPremium']} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>

    </div>
  </div>


  <br/>
  <hr/>
<h6 align="left" style={{ color: "#14848A"}}><b>HOUSE CONTENT</b></h6>
<div><b>Primary Property</b></div>

<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
  <div className="row">

      <div className="col-8" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Residential area</label>
              </div>
              <div className="col-6">
                  <input spellCheck="true"  id="STIP_HC_ResidentialArea" name='STIP_HC_ResidentialArea' value={FormData['STIP_HC_ResidentialArea']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
              </div>
          </div>
      </div>
      <hr/>

      <div className="col-8" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Street name,number and suburb</label>
              </div>
              <div className="col-6">
                  <input spellCheck="true"  id="STIP_HC_StreetNumber" name='STIP_HC_StreetNumber' value={FormData['STIP_HC_StreetNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/>
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
                  <input spellCheck="true"  id="STIP_HC_PostalCode" name='STIP_HC_PostalCode' value={FormData['STIP_HC_PostalCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
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
                  <input spellCheck="true"  id="STIP_HC_ResidenceType" name='STIP_HC_ResidenceType' value={FormData['STIP_HC_ResidenceType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                  <input className="form-check-input" checked={FormData["STIP_HC_Flat_GroundLevel"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_Flat_GroundLevel" name="STIP_HC_Flat_GroundLevel" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_HC_Flat_GroundLevel"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_Flat_GroundLevel" name="STIP_HC_Flat_GroundLevel" />
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
                  <input className="form-check-input" checked={FormData["STIP_HC_WallConstruction"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_WallConstruction" name="STIP_HC_WallConstruction" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Standard
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_HC_WallConstruction"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_WallConstruction" name="STIP_HC_WallConstruction" />
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
                  <input className="form-check-input" checked={FormData["STIP_HC_RoofConstruction"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_RoofConstruction" name="STIP_HC_RoofConstruction" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Standard
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_HC_RoofConstruction"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_RoofConstruction" name="STIP_HC_RoofConstruction" />
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
                <input className="form-check-input" checked={FormData["STIP_HC_SM_BurglarBar"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_BurglarBar" name="STIP_HC_SM_BurglarBar" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input className="form-check-input" checked={FormData["STIP_HC_SM_BurglarBar"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_BurglarBar" name="STIP_HC_SM_BurglarBar" />
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
                <input className="form-check-input" checked={FormData["STIP_HC_SM_SecurityGate"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_SecurityGate" name="STIP_HC_SM_SecurityGate" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input className="form-check-input" checked={FormData["STIP_HC_SM_SecurityGate"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_SecurityGate" name="STIP_HC_SM_SecurityGate" />
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
                  <input className="form-check-input" checked={FormData["STIP_HC_SM_AlarmSystem"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_AlarmSystem" name="STIP_HC_SM_AlarmSystem" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_HC_SM_AlarmSystem"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_AlarmSystem" name="STIP_HC_SM_AlarmSystem" />
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
                  <input className="form-check-input" checked={FormData["STIP_HC_SM_SecurityArea"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_SM_SecurityArea" name="STIP_HC_SM_SecurityArea" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_HC_SM_SecurityArea"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_SM_SecurityArea" name="STIP_HC_SM_SecurityArea" />
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
                      <input spellCheck="true"  id="STIP_HC_NoClaimBonus" name='STIP_HC_NoClaimBonus' value={FormData['STIP_HC_NoClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="STIP_HC_SumInsured" name='STIP_HC_SumInsured' value={FormData['STIP_HC_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="STIP_HCEx_BusinessType" name='STIP_HCEx_BusinessType' value={FormData['STIP_HCEx_BusinessType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="STIP_HCEx_InsuredAmount" name='STIP_HCEx_InsuredAmount' value={FormData['STIP_HCEx_InsuredAmount']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                  <input className="form-check-input" checked={FormData["STIP_HC_ADI_General1"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_General1" name="STIP_HC_ADI_General1" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_HC_ADI_General1"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_General1" name="STIP_HC_ADI_General1" />
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
                  <input className="form-check-input" checked={FormData["STIP_HC_ADI_General2"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_General2" name="STIP_HC_ADI_General2" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_HC_ADI_General2"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_General2" name="STIP_HC_ADI_General2" />
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
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_MechElecBreakdown"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_MechElecBreakdown" name="STIP_HC_ADI_MechElecBreakdown" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_MechElecBreakdown"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_MechElecBreakdown" name="STIP_HC_ADI_MechElecBreakdown" />
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
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_ElectronicalBreakdown"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_ElectronicalBreakdown" name="STIP_HC_ADI_ElectronicalBreakdown" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_ElectronicalBreakdown"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_ElectronicalBreakdown" name="STIP_HC_ADI_ElectronicalBreakdown" />
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
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover1"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_PowerSurgeCover1" name="STIP_HC_ADI_PowerSurgeCover1" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover1"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_PowerSurgeCover1" name="STIP_HC_ADI_PowerSurgeCover1" />
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
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover2"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_PowerSurgeCover2" name="STIP_HC_ADI_PowerSurgeCover2" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover2"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_PowerSurgeCover2" name="STIP_HC_ADI_PowerSurgeCover2" />
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
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover3"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_HC_ADI_PowerSurgeCover3" name="STIP_HC_ADI_PowerSurgeCover3" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_HC_ADI_PowerSurgeCover3"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_HC_ADI_PowerSurgeCover3" name="STIP_HC_ADI_PowerSurgeCover3" />
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
                      <input spellCheck="true"  id="STIP_HC_Fee" name='STIP_HC_Fee' value={FormData['STIP_HC_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="STIP_HC_Commission" name='STIP_HC_Commission' value={FormData['STIP_HC_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="STIP_HC_TotalPremium" name='STIP_HC_TotalPremium' value={FormData['STIP_HC_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>

        <div>It is in your own interest to check the adequacy of the sum insured (replacement value – new for old) by using the House Content Inventory and informing us about your requirements. Similar attention should be given to your All Risk policy.</div>

        <br/>
        <hr/>
          <h6 align="left" style={{ color: "#14848A"}}><b>BUILDINGS</b></h6>
          <div><b>Primary Property</b></div>

<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
  <div className="row">

      <div className="col-8" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Residential area</label>
              </div>
              <div className="col-6">
                  <input spellCheck="true"  id="STIP_Build_ResidentialArea" name='STIP_Build_ResidentialArea' value={FormData['STIP_Build_ResidentialArea']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
              </div>
          </div>
      </div>
      <hr/>

      <div className="col-8" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Street name,number and suburb</label>
              </div>
              <div className="col-6">
                  <input spellCheck="true"  id="STIP_Build_StreetNumber" name='STIP_Build_StreetNumber' value={FormData['STIP_Build_StreetNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/>
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
                  <input spellCheck="true"  id="STIP_Build_PostalCode" name='STIP_Build_PostalCode' value={FormData['STIP_Build_PostalCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
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
                  <input spellCheck="true"  id="STIP_Build_ResidenceType" name='STIP_Build_ResidenceType' value={FormData['STIP_Build_ResidenceType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                    <input spellCheck="true"  id="STIP_Build_Type" name='STIP_Build_Type' value={FormData['STIP_Build_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:'200px'}}/>
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
                  <input className="form-check-input" checked={FormData["STIP_Build_Voluntary"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_Voluntary" name="STIP_Build_Voluntary" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_Build_Voluntary"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_Voluntary" name="STIP_Build_Voluntary" />
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
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Subsidence and lanslide</label>
      </div>
        <div className="col-8">
          <div className="row">
            <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_Build_SnL"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_SnL" name="STIP_Build_SnL" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_Build_SnL"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_SnL" name="STIP_Build_SnL" />
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
                    <input className="form-check-input" checked={FormData["STIP_Build_ADI"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_ADI" name="STIP_Build_ADI" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_Build_ADI"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_ADI" name="STIP_Build_ADI" />
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
                <input className="form-check-input" checked={FormData["STIP_Build_WallConstruction"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_WallConstruction" name="STIP_Build_WallConstruction" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Standard
                </label>
            </div>
            <div className="col-3">
                <input className="form-check-input" checked={FormData["STIP_Build_WallConstruction"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_WallConstruction" name="STIP_Build_WallConstruction" />
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
                <input className="form-check-input" checked={FormData["STIP_Build_RoofConstruction"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Build_RoofConstruction" name="STIP_Build_RoofConstruction" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Standard
                </label>
            </div>
            <div className="col-3">
                <input className="form-check-input" checked={FormData["STIP_Build_RoofConstruction"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Build_RoofConstruction" name="STIP_Build_RoofConstruction" />
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
                    <input spellCheck="true"  id="STIP_Build_Fee" name='STIP_Build_Fee' value={FormData['STIP_Build_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
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
                    <input spellCheck="true"  id="STIP_Build_Commission" name='STIP_Build_Commission' value={FormData['STIP_Build_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
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
                    <input spellCheck="true"  id="STIP_Build_TotalPremium" name='STIP_Build_TotalPremium' value={FormData['STIP_Build_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                  </div>
              </div>
            </div>
          </div>
    </div>

      <br/>
    <div>Additional notes on buildings that may affect cover/advice to the client: </div>
    <div className="col-2">
        <input spellCheck="true"  id="STIP_Build_AdditionalAdvise" name='STIP_Build_AdditionalAdvise' value={FormData['STIP_Build_AdditionalAdvise']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" style={{width:'1000px'}}/>
    </div>

      <hr/>
      <br/>
    <div><b>Additional Property</b></div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">

            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label">Residential area</label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_AddProp_ResidentialArea" name='STIP_AddProp_ResidentialArea' value={FormData['STIP_AddProp_ResidentialArea']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label">Street name,number and suburb</label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="STIP_AddProp_StreetNumber" name='STIP_AddProp_StreetNumber' value={FormData['STIP_AddProp_StreetNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/>
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
                        <input spellCheck="true"  id="STIP_AddProp_PostalCode" name='STIP_AddProp_PostalCode' value={FormData['STIP_AddProp_PostalCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
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
                        <input spellCheck="true"  id="STIP_AddProp_ResidenceType" name='STIP_AddProp_ResidenceType' value={FormData['STIP_AddProp_ResidenceType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                        <input spellCheck="true"  id="STIP_AddProp_Type" name='STIP_AddProp_Type' value={FormData['STIP_AddProp_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                    <input className="form-check-input" checked={FormData["STIP_AddProp_Voluntary"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_Voluntary" name="STIP_AddProp_Voluntary" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_AddProp_Voluntary"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_Voluntary" name="STIP_AddProp_Voluntary" />
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
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate">. Subsidence and lanslide</label>
      </div>
        <div className="col-8">
          <div className="row">
            <div className="row col-6 align-items-center">
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_AddProp_SnL"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_SnL" name="STIP_AddProp_SnL" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_AddProp_SnL"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_SnL" name="STIP_AddProp_SnL" />
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
                    <input className="form-check-input" checked={FormData["STIP_AddProp_ADI"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_ADI" name="STIP_AddProp_ADI" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_AddProp_ADI"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_ADI" name="STIP_AddProp_ADI" />
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
                    <input className="form-check-input" checked={FormData["STIP_AddProp_WallConstruction"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_WallConstruction" name="STIP_AddProp_WallConstruction" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Standard
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_AddProp_WallConstruction"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_WallConstruction" name="STIP_AddProp_WallConstruction" />
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
                    <input className="form-check-input" checked={FormData["STIP_AddProp_RoofConstruction"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_AddProp_RoofConstruction" name="STIP_AddProp_RoofConstruction" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Standard
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_AddProp_RoofConstruction"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_AddProp_RoofConstruction" name="STIP_AddProp_RoofConstruction" />
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
                      <input spellCheck="true"  id="STIP_AddProp_Fee" name='STIP_AddProp_Fee' value={FormData['STIP_AddProp_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="STIP_AddProp_Commission" name='STIP_AddProp_Commission' value={FormData['STIP_AddProp_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="STIP_AddProp_TotalPremium" name='STIP_AddProp_TotalPremium' value={FormData['STIP_AddProp_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>    
              </div>
            </div>
          </div>
        </div>
        <hr/>

      <br/>
        <div>Additional notes on buildings that may affect cover/advice to the client: </div>
        <input spellCheck="true"  id="STIP_AddProp_AdditionalAdvise" name='STIP_AddProp_AdditionalAdvise' value={FormData['STIP_AddProp_AdditionalAdvise']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{width:"1000px"}} />
        <hr/>

        <br/>
        <h6 align="left" style={{ color: "#14848A"}}><b>VEHICLE</b></h6>
        <div>Please see attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number and engine number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Vehicle in the name of:</b></label>
                  </div>
                  <div className="col-6">
                      <input spellCheck="true"  id="STIP_Vehicle_Owner" name='STIP_Vehicle_Owner' value={FormData['STIP_Vehicle_Owner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-6">
                      <input spellCheck="true"  id="STIP_Vehicle_RegOwner" name='STIP_Vehicle_RegOwner' value={FormData['STIP_Vehicle_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_Vehicle_Usage" name='STIP_Vehicle_Usage' value={FormData['STIP_Vehicle_Usage']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                    <select className="text-start form-select"  name='STIP_Vehicle_ONParkingOptions' value={FormData['STIP_Vehicle_ONParkingOptions']} onChange={(e) => {onChange(e)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    <input spellCheck="true"  id="STIP_Vehicle_ONParking" name='STIP_Vehicle_ONParking' value={FormData['STIP_Vehicle_ONParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>R:</b></label>
                  </div>
                  <div className="col-6">
                      <input spellCheck="true"  id="STIP_Vehicle_ONOtherParking" name='STIP_Vehicle_ONOtherParking' value={FormData['STIP_Vehicle_ONOtherParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
          <hr/>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label htmlFor="id_number" className="col-form-label"><b>Type of cover required</b></label>
                  </div>
                  <div className="col-6">
                    <select className="text-start form-select"  name='STIP_Vehicle_CoverType' value={FormData['STIP_Vehicle_CoverType']} onChange={(e) => {onChange(e)}}
                      // value={} onChange={(e) => {onChange(e)}}
                      aria-label="Default select example">
                        <option value="0" selected>Select the type of cover</option>
                        <option value="1">Comprehensive (cover for comprehensive risks)</option>
                        <option value="2">Limited (Fire and Theft)</option>
                        <option value="3">Third Party (cover for claims of 3rd parties)</option>
                        <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                    </select>
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the type of overnight parking."  aria-describedby="" /> */}
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
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM1"] === 1 ? true : false} name="STIP_Vehicle_SM1" onChange={(e)=>{FormData["STIP_Vehicle_SM1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label className="form-check-label" for="flexCheckDefault">
                        Immobilizer  
                        </label>
                    </div>
                  </td> 
                    
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM2"] === 1 ? true : false} name="STIP_Vehicle_SM2" onChange={(e)=>{FormData["STIP_Vehicle_SM2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Gear lock
                        </label>
                    </div>
                  </td> 
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
                      {/* <input className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM2"] === 1 ? true : false} name="STIP_Vehicle_SM2" onChange={(e)=>{FormData["STIP_Vehicle_SM2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/> */}
                        <label className="form-check-label" for="flexCheckDefault">
                        {/* Tracking device   */}
                        </label>
                    </div>
                  </td> 
                    
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      {/* <input className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM2"] === 1 ? true : false} name="STIP_Vehicle_SM2" onChange={(e)=>{FormData["STIP_Vehicle_SM2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/> */}
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
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM3"] === 1 ? true : false} name="STIP_Vehicle_SM3" onChange={(e)=>{FormData["STIP_Vehicle_SM3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label className="form-check-label" for="flexCheckDefault">
                        Tracking device  
                        </label>
                    </div>
                  </td> 
                    
                  <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={FormData["STIP_Vehicle_SM4"] === 1 ? true : false} name="STIP_Vehicle_SM4" onChange={(e)=>{FormData["STIP_Vehicle_SM4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Data dot
                        </label>
                    </div>
                  </td> 
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
                      <input spellCheck="true"  id="STIP_Vehicle_Driver" name='STIP_Vehicle_Driver' value={FormData['STIP_Vehicle_Driver']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      {/* <input spellCheck="true"  id="STIP_Vehicle_DriverLicIssDate" name='STIP_Vehicle_DriverLicIssDate' value={FormData['STIP_Vehicle_DriverLicIssDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                      <input spellCheck="true" type="date" id="STIP_Vehicle_DriverLicIssDate" name='STIP_Vehicle_DriverLicIssDate' value={FormData['STIP_Vehicle_DriverLicIssDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter date."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>License code:</b></label>
                  </div>
                  <div className="col-6">
                      <input spellCheck="true"  id="STIP_Vehicle_LicCode" name='STIP_Vehicle_LicCode' value={FormData['STIP_Vehicle_LicCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_Vehicle_SumInsured" name='STIP_Vehicle_SumInsured' value={FormData['STIP_Vehicle_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_Vehicle_ClaimBonus" name='STIP_Vehicle_ClaimBonus' value={FormData['STIP_Vehicle_ClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-6">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                  <input className="form-check-input" checked={FormData["STIP_Vehicle_VoluntaryExcess"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_VoluntaryExcess" name="STIP_Vehicle_VoluntaryExcess" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_Vehicle_VoluntaryExcess"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_VoluntaryExcess" name="STIP_Vehicle_VoluntaryExcess" />
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
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras1"] === 1 ? true : false} name="STIP_Vehicle_Extras1" onChange={(e)=>{FormData["STIP_Vehicle_Extras1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                          Air Conditioning
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount1' value={FormData['STIP_Vehicle_ExtrasAmount1']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras2"] === 1 ? true : false} name="STIP_Vehicle_Extras2" onChange={(e)=>{FormData["STIP_Vehicle_Extras2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Mag wheels
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount2' value={FormData['STIP_Vehicle_ExtrasAmount2']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras3"] === 1 ? true : false} name="STIP_Vehicle_Extras3" onChange={(e)=>{FormData["STIP_Vehicle_Extras3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                          Canopy
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount3' value={FormData['STIP_Vehicle_ExtrasAmount3']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras4"] === 1 ? true : false} name="STIP_Vehicle_Extras4" onChange={(e)=>{FormData["STIP_Vehicle_Extras4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Electric windows
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount4' value={FormData['STIP_Vehicle_ExtrasAmount4']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras5"] === 1 ? true : false} name="STIP_Vehicle_Extras5" onChange={(e)=>{FormData["STIP_Vehicle_Extras5"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Leather seats
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount5' value={FormData['STIP_Vehicle_ExtrasAmount5']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras6"] === 1 ? true : false} name="STIP_Vehicle_Extras6" onChange={(e)=>{FormData["STIP_Vehicle_Extras6"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Tow bar
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount6' value={FormData['STIP_Vehicle_ExtrasAmount6']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras7"] === 1 ? true : false} name="STIP_Vehicle_Extras7" onChange={(e)=>{FormData["STIP_Vehicle_Extras7"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Roof carrier
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount7' value={FormData['STIP_Vehicle_ExtrasAmount7']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras8"] === 1 ? true : false} name="STIP_Vehicle_Extras8" onChange={(e)=>{FormData["STIP_Vehicle_Extras8"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Sunroof
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount8' value={FormData['STIP_Vehicle_ExtrasAmount8']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras9"] === 1 ? true : false} name="STIP_Vehicle_Extras9" onChange={(e)=>{FormData["STIP_Vehicle_Extras9"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Power steering
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount9' value={FormData['STIP_Vehicle_ExtrasAmount9']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras10"] === 1 ? true : false} name="STIP_Vehicle_Extras10" onChange={(e)=>{FormData["STIP_Vehicle_Extras10"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Sound
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount10' value={FormData['STIP_Vehicle_ExtrasAmount10']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras11"] === 1 ? true : false} name="STIP_Vehicle_Extras11" onChange={(e)=>{FormData["STIP_Vehicle_Extras11"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Car Keys
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount11' value={FormData['STIP_Vehicle_ExtrasAmount11']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras12"] === 1 ? true : false} name="STIP_Vehicle_Extras12" onChange={(e)=>{FormData["STIP_Vehicle_Extras12"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Tools,spare parts
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount12' value={FormData['STIP_Vehicle_ExtrasAmount12']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                    <input type="checkbox" checked={FormData["STIP_Vehicle_Extras13"] === 1 ? true : false} name="STIP_Vehicle_Extras13" onChange={(e)=>{FormData["STIP_Vehicle_Extras13"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                  </div>
                  <div className="col-4">
                      <label className="form-check-label"  >
                      Restricted travelling cover
                      </label>
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount13' value={FormData['STIP_Vehicle_ExtrasAmount13']} onChange={(e) => {onChange(e)}}   />
                  </div>
              </div>
              <div className="row col-6 align-items-center">
                  <div className="col-2">
                      <label className="form-check-label"  >
                      Other
                      </label>
                  </div>
                  <div className="col-4">
                    <input className="form-control" type="text" placeholder="Enter text" name='STIP_Vehicle_Extras14' value={FormData['STIP_Vehicle_Extras14']} onChange={(e) => {onChange(e)}}   />
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="number" placeholder="R 0.0" name='STIP_Vehicle_ExtrasAmount14' value={FormData['STIP_Vehicle_ExtrasAmount14']} onChange={(e) => {onChange(e)}}   />
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
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC1"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC1" name="STIP_Vehicle_AC1" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC1"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC1" name="STIP_Vehicle_AC1" />
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
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC2"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC2" name="STIP_Vehicle_AC2" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC2"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC2" name="STIP_Vehicle_AC2" />
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
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC1"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC3" name="STIP_Vehicle_AC3" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC3"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC3" name="STIP_Vehicle_AC3" />
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
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC4"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC4" name="STIP_Vehicle_AC4" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC4"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC4" name="STIP_Vehicle_AC4" />
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
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC5"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_Vehicle_AC5" name="STIP_Vehicle_AC5" />
                          </div>
                          <div className="col-3">
                              <label className="form-check-label"  >
                                  Yes
                              </label>
                          </div>
                          <div className="col-3">
                              <input className="form-check-input" checked={FormData["STIP_Vehicle_AC5"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_Vehicle_AC5" name="STIP_Vehicle_AC5" />
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
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Fees:</b></label>
                    </div>
                    <div className="col-8">
                        <input spellCheck="true"  id="STIP_Vehicle_Fees" name='STIP_Vehicle_Fees' value={FormData['STIP_Vehicle_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
              </div>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Commission:</b></label>
                    </div>
                    <div className="col-8">
                        <input spellCheck="true"  id="STIP_Vehicle_Commission" name='STIP_Vehicle_Commission' value={FormData['STIP_Vehicle_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
              </div>
              <div className="" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Total Premium:</b></label>
                    </div>
                    <div className="col-8">
                        <input spellCheck="true"  id="STIP_Vehicle_TotalPremium" name='STIP_Vehicle_TotalPremium' value={FormData['STIP_Vehicle_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                    </div>
                </div>
                
              </div>
              <div>Additional notes on Mororcycle that may affect cover/advice to the client:</div>
                <input spellCheck="true"  id="STIP_Vehicle_Comments" name='STIP_Vehicle_Comments' value={FormData['STIP_Vehicle_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />
              <br/>
              
            </div>
          </div>
        </div>
        <br/>
        
        

        

        


        <h6 align="left" style={{ color: "#14848A"}}><b>MOTORCYCLES</b></h6>
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
                      <input spellCheck="true"  id="STIP_MotorC_RegOwner" name='STIP_MotorC_RegOwner' value={FormData['STIP_MotorC_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_MotorC_Usage" name='STIP_MotorC_Usage' value={FormData['STIP_MotorC_Usage']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the class of use."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                    <select className="text-start form-select" id="STIP_MotorC_ONParkingOptions" name='STIP_MotorC_ONParkingOptions' value={FormData['STIP_MotorC_ONParkingOptions']} onChange={(e) => {onChange(e)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    <input spellCheck="true"  id="STIP_MotorC_ONParking" name='STIP_MotorC_ONParking' value={FormData['STIP_MotorC_ONParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_MotorC_ONOtherParking" name='STIP_MotorC_ONOtherParking' value={FormData['STIP_MotorC_ONOtherParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                      <select className="text-start form-select" id="STIP_MotorC_CoverType" name='STIP_MotorC_CoverType' value={FormData["STIP_MotorC_CoverType"]} onChange={(e) => {onChange(e)}}
                        aria-label="Default select example">
                          <option value="0" selected>Select the type of cover</option>
                          <option value="1">Comprehensive (cover for comprehensive risks)</option>
                          <option value="2">Limited (Fire and Theft)</option>
                          <option value="3">Third Party (cover for claims of 3rd parties)</option>
                          <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                      </select>
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the type of cover."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                    <select className="text-start form-select" id="STIP_MotorC_Driver" name='STIP_MotorC_Driver' value={FormData['STIP_MotorC_Driver']} onChange={(e) => {onChange(e)}}
                        aria-label="Default select example">
                          <option value="0" selected>Select the relevant regular driver description</option>
                          <option value="1">Financial dependant child</option>
                          <option value="2">Policy Holder</option>
                          <option value="3">Spouse</option>
                          <option value="4">Third Party - Theft excluded (cover for loss or damage except by theft)</option>
                      </select>
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}

                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Select the relevant regular driver description ."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_MotorC_Driver1" name='STIP_MotorC_Driver1' value={FormData['STIP_MotorC_Driver1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other regular driver."  aria-describedby="" />
                  </div>
              </div>
          </div>
          
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_MotorC_DriverLicIssDate" name='STIP_MotorC_DriverLicIssDate' value={FormData['STIP_MotorC_DriverLicIssDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click or tap to enter date."  aria-describedby="" />
                  </div>
              </div>
          </div>
          
          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>License code:</b></label>
                  </div>
                  <div className="col-8">
                        <input spellCheck="true"  id="STIP_MotorC_LicCode" name='STIP_MotorC_LicCode' value={FormData['STIP_MotorC_LicCode']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> 
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
                      <input spellCheck="true"  id="STIP_MotorC_ClaimBonus" name='STIP_MotorC_ClaimBonus' value={FormData['STIP_MotorC_ClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_MotorC_SumInsured" name='STIP_MotorC_SumInsured' value={FormData['STIP_MotorC_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_MotorC_Fees" name='STIP_MotorC_Fees' value={FormData['STIP_MotorC_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_MotorC_Commission" name='STIP_MotorC_Commission' value={FormData['STIP_MotorC_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_MotorC_TotalPremium" name='STIP_MotorC_TotalPremium' value={FormData['STIP_MotorC_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>
          

        </div>
      </div>
      
      <div>Additional notes on Mororcycle that may affect cover/advice to the client:</div>
        <input spellCheck="true"  id="STIP_MotorC_Comments" name='STIP_MotorC_Comments' value={FormData['STIP_MotorC_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />
      <br/>
      <h6 align="left" style={{ color: "#14848A"}}><b>TRAILER/CARAVAN</b></h6>
      <div>Please see the attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_Trailer_RegOwner" name='STIP_Trailer_RegOwner' value={FormData['STIP_Trailer_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_Trailer_Type" name='STIP_Trailer_Type' value={FormData['STIP_Trailer_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <select className="text-start form-select" id="STIP_Trailer_ONParkingOptions" name='STIP_Trailer_ONParkingOptions' value={FormData["STIP_Trailer_ONParkingOptions"]} onChange={(e) => {onChange(e)}}
                    aria-label="Default select example">
                        <option value="0" selected>Select the type of Overnight Parking</option>
                        <option value="1">Overnight Parking</option>
                        <option value="2">Locked Garage</option>
                        <option value="3">Carport</option>
                        <option value="4">Security Complex</option>
                        <option value="5">Behind Gates</option>
                        <option value="6">Others</option>
                    </select>
                    {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_Trailer_ONOtherParking" name='STIP_Trailer_ONOtherParking' value={FormData['STIP_Trailer_ONOtherParking']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_Trailer_ClaimBonus" name='STIP_Trailer_ClaimBonus' value={FormData['STIP_Trailer_ClaimBonus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Sum insured:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_Trailer_SumInsured" name='STIP_Trailer_SumInsured' value={FormData['STIP_Trailer_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_Trailer_Fees" name='STIP_Trailer_Fees' value={FormData['STIP_Trailer_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_Trailer_Commission" name='STIP_Trailer_Commission' value={FormData['STIP_Trailer_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_Trailer_TotalPremium" name='STIP_Trailer_TotalPremium' value={FormData['STIP_Trailer_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

        </div>
      </div>
        
        <br/>
        <div>Additional notes on trailer that may affect cover/advice to the client:</div>
        <input spellCheck="true"  id="STIP_Trailer_Comments" name='STIP_Trailer_Comments' value={FormData['STIP_Trailer_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />

        <br/>
      <h6 align="left" style={{ color: "#14848A"}}><b>WATER CRAFT</b></h6>
      <div>Please see the attached certificate of registration and motor vehicle license for the make, model, vehicle year, VIN number etc.</div>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Registered owner:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_WaterC_RegOwner" name='STIP_WaterC_RegOwner' value={FormData['STIP_WaterC_RegOwner']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Type:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_WaterC_Type" name='STIP_WaterC_Type' value={FormData['STIP_WaterC_Type']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_WaterC_Hull" name='STIP_WaterC_Hull' value={FormData['STIP_WaterC_Hull']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Craft sum insured</b></label>
                  </div>
                  <div className="col-8">
                        <input spellCheck="true"  id="STIP_WaterC_SumInsured" name='STIP_WaterC_SumInsured' value={FormData['STIP_WaterC_SumInsured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="     R 0.00"  aria-describedby="" /> 
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
                      <input spellCheck="true"  id="STIP_WaterC_VIN" name='STIP_WaterC_VIN' value={FormData['STIP_WaterC_VIN']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                        <input spellCheck="true"  id="STIP_WaterC_EngineNumber" name='STIP_WaterC_EngineNumber' value={FormData['STIP_WaterC_EngineNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" />  
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
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" /> */}
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_WaterC_OC_Glitter" name='STIP_WaterC_OC_Glitter' value={FormData['STIP_WaterC_OC_Glitter']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Specified accessories:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_WaterC_OC_SpecifiedAccessories" name='STIP_WaterC_OC_SpecifiedAccessories' value={FormData['STIP_WaterC_OC_SpecifiedAccessories']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_WaterC_OC_MotorType" name='STIP_WaterC_OC_MotorType' value={FormData['STIP_WaterC_OC_MotorType']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Output:</b></label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_WaterC_OC_Output" name='STIP_WaterC_OC_Output' value={FormData['STIP_WaterC_OC_Output']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_WaterC_Fees" name='STIP_WaterC_Fees' value={FormData['STIP_WaterC_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_WaterC_Commission" name='STIP_WaterC_Commission' value={FormData['STIP_WaterC_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"></label>
                  </div>
                  <div className="col-8">
                      {/* <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                      <input spellCheck="true"  id="STIP_WaterC_TotalPremium" name='STIP_WaterC_TotalPremium' value={FormData['STIP_WaterC_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" />

                  </div>
              </div>
          </div>

        </div>
      </div>

<br/>
      <div>Additional notes on motorcycle that may affect cover/advice to the client:</div>
        <input spellCheck="true"  id="STIP_WaterC_Comments" name='STIP_WaterC_Comments' value={FormData['STIP_WaterC_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />

        <br/>
        <h6 align="left" style={{ color: "#14848A"}}><b>PERSONAL LEGAL LIABILITY</b></h6>
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
                    <input className="form-check-input" checked={FormData["STIP_PersonalLL_IndemnityLimit"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_PersonalLL_IndemnityLimit" name="STIP_PersonalLL_IndemnityLimit" />
                </div>
                <div className="col-3">
                    <label className="form-check-label"  >
                        Yes
                    </label>
                </div>
                <div className="col-3">
                    <input className="form-check-input" checked={FormData["STIP_PersonalLL_IndemnityLimit"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_PersonalLL_IndemnityLimit" name="STIP_PersonalLL_IndemnityLimit" />
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
                    <input spellCheck="true"  id="STIP_PersonalLL_IndemnityLimitDetail" name='STIP_PersonalLL_IndemnityLimitDetail' value={FormData['STIP_PersonalLL_IndemnityLimitDetail']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                    <input spellCheck="true"  id="STIP_PersonalLL_Fees" name='STIP_PersonalLL_Fees' value={FormData['STIP_PersonalLL_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                    <input spellCheck="true"  id="STIP_PersonalLL_Commission" name='STIP_PersonalLL_Commission' value={FormData['STIP_PersonalLL_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                    <input spellCheck="true"  id="STIP_PersonalLL_TotalPremium" name='STIP_PersonalLL_TotalPremium' value={FormData['STIP_PersonalLL_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

      <br/>
        <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
        <input spellCheck="true"  id="STIP_PersonalLL_Comments" name='STIP_PersonalLL_Comments' value={FormData['STIP_PersonalLL_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} />


        <br/>
        <h6 align="left" style={{ color: "#14848A"}}><b>LEGAL ACCESS</b></h6>
      
      
      <div className="row g-2 align-items-center">
  <div className="col-3">
          <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Indemnity limit: R10 million or R 20 million	</label>
      </div>
        <div className="col-6">
          <div className="row">
            <div className="row col-6 align-items-center">
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_LegalA_IndemnityLimit"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_LegalA_IndemnityLimit" name="STIP_LegalA_IndemnityLimit" />
              </div>
              <div className="col-3">
                  <label className="form-check-label"  >
                      Yes
                  </label>
              </div>
              <div className="col-3">
                  <input className="form-check-input" checked={FormData["STIP_LegalA_IndemnityLimit"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_LegalA_IndemnityLimit" name="STIP_LegalA_IndemnityLimit" />
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
                    <input spellCheck="true"  id="STIP_LegalA_IndemnityLimitDetail" name='STIP_LegalA_IndemnityLimitDetail' value={FormData['STIP_LegalA_IndemnityLimitDetail']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                    <input spellCheck="true"  id="STIP_LegalA_Fees" name='STIP_LegalA_Fees' value={FormData['STIP_LegalA_Fees']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                    <input spellCheck="true"  id="STIP_LegalA_Commission" name='STIP_LegalA_Commission' value={FormData['STIP_LegalA_Commission']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                    <input spellCheck="true"  id="STIP_LegalA_TotalPremium" name='STIP_LegalA_TotalPremium' value={FormData['STIP_LegalA_TotalPremium']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <hr/>

      <br/>
        <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
        <input spellCheck="true"  id="STIP_LegalA_Comments" name='STIP_LegalA_Comments' value={FormData['STIP_LegalA_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

        <br/>
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
        <input spellCheck="true"  id="STIP_ProductConsidered" name='STIP_ProductConsidered' value={FormData['STIP_ProductConsidered']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

        <hr/>
        <div>Recommended product:</div>
        <input spellCheck="true"  id="STIP_ProductRecommended" name='STIP_ProductRecommended' value={FormData['STIP_ProductRecommended']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

        <hr/>
        <div>Reasons why the recommended product is considered the most suitable for the needs of the client:</div>
        <input spellCheck="true"  id="STIP_ProductReasons" name='STIP_ProductReasons' value={FormData['STIP_ProductReasons']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

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
                      <input spellCheck="true"  id="STIP_DbyI_IName" name='STIP_DbyI_IName' value={FormData['STIP_DbyI_IName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Code:</label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true"  id="STIP_DbyI_Code" name='STIP_DbyI_Code' value={FormData['STIP_DbyI_Code']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                      <input spellCheck="true"  id="STIP_DbyI_Signature" name='IP_InvestmentTerm' value={FormData['STIP_DbyI_Signature']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Sign here"  aria-describedby="" />
                  </div>
              </div>
          </div>

          <div className="col-6" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Date(dd/mm/yyyy)</label>
                  </div>
                  <div className="col-8">
                      <input spellCheck="true" type="date"  id="STIP_DbyI_Date" name='STIP_DbyI_Date' value={FormData['STIP_DbyI_Date']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                  </div>
              </div>
          </div>
        </div>
      </div>

  <br/>
  <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>MEDICAL SCHEMES ANALYSIS</b></div>
    <hr/>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Client name:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ClientName" name='STIP_MSA_ClientName' value={FormData['STIP_MSA_ClientName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Client Name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>ID Number:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ClientIdNumber" name='STIP_MSA_ClientIdNumber' value={FormData['STIP_MSA_ClientIdNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="ID# of client"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Address:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ClientAddress" name='STIP_MSA_ClientAddress' value={FormData['STIP_MSA_ClientAddress']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Address"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Email:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ClientEmail" name='STIP_MSA_ClientEmail' value={FormData['STIP_MSA_ClientEmail']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Email Address"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Phone:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ClientPhone" name='STIP_MSA_ClientPhone' value={FormData['STIP_MSA_ClientPhone']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Contact Number"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Financial advisor:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true" disabled value={""} className="form-control" placeholder="Primary intermediary's name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Date:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ClientDate" name='STIP_MSA_ClientDate' value={FormData['STIP_MSA_ClientDate']} onChange={(e) => {onChange(e)}} type="date" className="form-control" placeholder="Primary intermediary's name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

      </div>
    </div>

    <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence and storage of your personal information relating to your financial matters. Ts&Cs on  <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a></p>

    {/* <br/> */}
    <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION A:</b></div>

    <div className="text-start "style={{ color: "#14848A" ,fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>MEDICAL SCHEMES ANALYSIS</b></div>

    <hr/>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Name and surname:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_Name" name='STIP_MSA_Name' value={FormData['STIP_MSA_Name']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Marital status:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_MaritalStatus" name='STIP_MSA_MaritalStatus' value={FormData['STIP_MSA_MaritalStatus']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Gender:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_Gender" name='STIP_MSA_Gender' value={FormData['STIP_MSA_Gender']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Occupation:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_Occupation" name='STIP_MSA_Occupation' value={FormData['STIP_MSA_Occupation']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Income per month(if income plan is selected):</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_Income" name='STIP_MSA_Income' value={FormData['STIP_MSA_Income']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 00"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Subsidy:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_Subsidy" name='STIP_MSA_Subsidy' value={FormData['STIP_MSA_Subsidy']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 00"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Number of Dependants:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_Dependant" name='STIP_MSA_Dependant' value={FormData['STIP_MSA_Dependant']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="# of Dependants"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Spouse:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_Spouse" name='STIP_MSA_Spouse' value={FormData['STIP_MSA_Spouse']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Enter name of spouse"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Other Adult Dependents (Parents, Guardians, Legal dependents):</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_AdultDependant" name='STIP_MSA_AdultDependant' value={FormData['STIP_MSA_AdultDependant']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List name of other adult dependents"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Member):</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ChronicM" name='STIP_MSA_ChronicM' value={FormData['STIP_MSA_ChronicM']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Spouse):</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ChronicS" name='STIP_MSA_ChronicS' value={FormData['STIP_MSA_ChronicS']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions of spouse"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Adult Dependents):</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ChronicAD" name='STIP_MSA_ChronicAD' value={FormData['STIP_MSA_ChronicAD']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions for adult dependents"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Chronic conditions(Children):</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ChronicC" name='STIP_MSA_ChronicC' value={FormData['STIP_MSA_ChronicC']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="List of chronic conditions for children"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Other medical pre existing conditions:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_MSA_ChronicOC" name='STIP_MSA_ChronicOC' value={FormData['STIP_MSA_ChronicOC']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label"><b>Period that you have been part of your previous Medical Aid:</b></label>
              </div>
              <div className="col-1">
                <label className="col-form-label">From:</label>
              </div>
              <div className="col-4">
                <input spellCheck="true" type="date" id="STIP_MSA_PFromDate" name='STIP_MSA_PFromDate' value={FormData['STIP_MSA_PFromDate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/> 
              </div>
              <div className="col-1">
                <label className="col-form-label">To:</label>
              </div>
              <div className="col-4">
                <input spellCheck="true" type="date" id="STIP_MSA_PTODate" name='STIP_MSA_PTODate' value={FormData['STIP_MSA_PTODate']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/> 
              </div>
          </div>
        </div>
        <hr/>

      </div>
    </div>

    <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION B:</b></div>

    <div className="text-start "style={{ color: "#14848A" ,fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>BACKGROUND INFORMATION</b></div>

    <hr/><p>Your personal circumstances that formed the basis for my recommendation</p>
      {
          backgroundInfoVisibility ? 
          <>
              <div id="background_info_instructions" className="hidden_class">
                  <p>Provide a detailed description of the client’s:</p><br />
                  <ul>
                      <li>
                          current personal circumstances,<br />
                      </li>
                      <li>
                          needs that have been identified,<br />
                      </li>
                      <li>
                          and relevant information<br />
                      </li>
                  </ul>
                  <p>that formed the basis for the financial solution recommended</p>
              </div>
          </>: 
          null
      }
      <textarea  id="STIP_BackInfo"  className="form-control"  style={{height: '160px'}}  
      name='STIP_BackInfo' value={FormData['STIP_BackInfo']} onChange={(e) => {onChange(e)}} 
      onFocus={backgroundInfo_onFocus}
      onBlur={backgroundInfo_onBlur}
      placeholder={
          `                       Provide a detailed description of the client’s:
          •	current personal circumstances,
          •	needs that have been identified, 
          •	and relevant information 
      that formed the basis for the financial solution recommended`}  aria-describedby=""  ></textarea>

<br/>
<div className="text-start "style={{ color: "#14848A" ,fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SUMMARY NEEDS ANALYSIS</b></div>

<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Need</b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Need Identified</b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Comments</b></label>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Hospital cover</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs1"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs1" name="STIP_SNA_Needs1" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs1"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs1" name="STIP_SNA_Needs1" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments1" name='STIP_SNA_Comments1' value={FormData['STIP_SNA_Comments1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Day to Day Benefits</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs2"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs2" name="STIP_SNA_Needs2" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs2"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs2" name="STIP_SNA_Needs2" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments2" name='STIP_SNA_Comments2' value={FormData['STIP_SNA_Comments2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Threshhold Benefits</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs3"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs3" name="STIP_SNA_Needs3" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs3"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs3" name="STIP_SNA_Needs3" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments3" name='STIP_SNA_Comments3' value={FormData['STIP_SNA_Comments3']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Chronic Benefits</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs4"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs4" name="STIP_SNA_Needs4" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs4"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs4" name="STIP_SNA_Needs4" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments4" name='STIP_SNA_Comments4' value={FormData['STIP_SNA_Comments4']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Savings Account</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs5"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs5" name="STIP_SNA_Needs5" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs5"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs5" name="STIP_SNA_Needs5" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments5" name='STIP_SNA_Comments5' value={FormData['STIP_SNA_Comments5']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Affordable Premium</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs6"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs6" name="STIP_SNA_Needs6" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs6"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs6" name="STIP_SNA_Needs6" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments6" name='STIP_SNA_Comments6' value={FormData['STIP_SNA_Comments6']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Hospital Preference</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs7"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs7" name="STIP_SNA_Needs7" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs7"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs7" name="STIP_SNA_Needs7" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments7" name='STIP_SNA_Comments7' value={FormData['STIP_SNA_Comments7']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>PMB</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs8"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs8" name="STIP_SNA_Needs8" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs8"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs8" name="STIP_SNA_Needs8" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments8" name='STIP_SNA_Comments8' value={FormData['STIP_SNA_Comments8']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Doctor/Specialist/Hospital network</b></label>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs9"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs9" name="STIP_SNA_Needs9" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs9"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs9" name="STIP_SNA_Needs9" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments9" name='STIP_SNA_Comments9' value={FormData['STIP_SNA_Comments9']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                <input spellCheck="true"  id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}}/>
              </div>
              <div className="col-4">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs10"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SNA_Needs10" name="STIP_SNA_Needs10" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SNA_Needs10"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SNA_Needs10" name="STIP_SNA_Needs10" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          No
                      </label>
                  </div>
              </div>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SNA_Comments10" name='STIP_SNA_Comments10' value={FormData['STIP_SNA_Comments10']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

      </div>
  </div>

  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION C:</b></div>

    <div className="text-start "style={{ color: "#14848A" ,fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SUMMARY: COMPARISON OF MEDICAL AID BENEFITS</b></div>
    <p className="text-start "style={{ color: "#14848A"}}>(Indicate whether a new medical scheme(s) is recommended or an existing scheme is to be replaced) </p>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Details</b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Current Medical Scheme/<br/>
                                                    Proposed Medical Scheme<br/>
                                                    What are we expecting to be answered here
                                                  </b></label>
              </div>
              <div className="col-4">
                <label className="col-form-label"><b>Replaced Medical Scheme/<br/>
                                                    Proposed Medical Scheme
                                                    </b></label>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Name:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current1" name='STIP_CoMAB_Current1' value={FormData['STIP_CoMAB_Current1']} onChange={(e) => {onChange(e)}} clasCoMABme="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced1" name='STIP_CoMAB_Replaced1' value={FormData['STIP_CoMAB_Replaced1']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Contribution/Premium:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current2" name='STIP_CoMAB_Current2' value={FormData['STIP_CoMAB_Current2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced2" name='STIP_CoMAB_Replaced2' value={FormData['STIP_CoMAB_Replaced2']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Benefits:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current3" name='STIP_CoMAB_Current3' value={FormData['STIP_CoMAB_Current3']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced3" name='STIP_CoMAB_Replaced3' value={FormData['STIP_CoMAB_Replaced3']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Savings Account:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current4" name='STIP_CoMAB_Current4' value={FormData['STIP_CoMAB_Current4']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced4" name='STIP_CoMAB_Replaced4' value={FormData['STIP_CoMAB_Replaced4']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Chronic Benefits:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current5" name='STIP_CoMAB_Current5' value={FormData['STIP_CoMAB_Current5']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced5" name='STIP_CoMAB_Replaced5' value={FormData['STIP_CoMAB_Replaced5']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Hospital Cover:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current6" name='STIP_CoMAB_Current6' value={FormData['STIP_CoMAB_Current6']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced6" name='STIP_CoMAB_Replaced6' value={FormData['STIP_CoMAB_Replaced6']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Limits on cover:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current7" name='STIP_CoMAB_Current7' value={FormData['STIP_CoMAB_Current7']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced7" name='STIP_CoMAB_Replaced7' value={FormData['STIP_CoMAB_Replaced7']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>General Waiting Period:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current8" name='STIP_CoMAB_Current8' value={FormData['STIP_CoMAB_Current8']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced8" name='STIP_CoMAB_Replaced8' value={FormData['STIP_CoMAB_Replaced8']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Condition Specific Waiting Period:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current9" name='STIP_CoMAB_Current9' value={FormData['STIP_CoMAB_Current9']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced9" name='STIP_CoMAB_Replaced9' value={FormData['STIP_CoMAB_Replaced9']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Legislated Prescribed Minimum Benefits:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current10" name='STIP_CoMAB_Current10' value={FormData['STIP_CoMAB_Current10']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced10" name='STIP_CoMAB_Replaced10' value={FormData['STIP_CoMAB_Replaced10']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Later Joiner Penalty:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current11" name='STIP_CoMAB_Current11' value={FormData['STIP_CoMAB_Current11']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced11" name='STIP_CoMAB_Replaced11' value={FormData['STIP_CoMAB_Replaced11']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label"><b>Reward/Loyalty Programme:</b></label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Current12" name='STIP_CoMAB_Current12' value={FormData['STIP_CoMAB_Current12']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_CoMAB_Replaced12" name='STIP_CoMAB_Replaced12' value={FormData['STIP_CoMAB_Replaced12']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>
      </div>
  </div>

<br/>
  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION D:</b></div>

    <div className="text-start "style={{ color: "#14848A" ,fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>INITIAL RECOMMENDATION/ADVICE & MOTIVATION</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-3">
                  <label className="col-form-label"><b>Scheme and Fund recommended and/or selected by you:</b></label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_SectionD_SnF" name='STIP_SectionD_SnF' value={FormData['STIP_SectionD_SnF']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Motivation for recommendations – State why the product purchased will suit the client"  aria-describedby="" style={{height:"150px"}}/>
              </div>
            </div>
        </div>

        <hr/>
      </div>
    </div>

    <br/>
  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION E:</b></div>

    <div className="text-start "style={{ color: "#14848A" ,fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>IMPORTANT INFORMATION HIGHLIGHTED TO YOU</b></div>
    <hr/>
    <input spellCheck="true"  id="STIP_SectionE_PMB" name='STIP_SectionE_PMB' value={FormData['STIP_SectionE_PMB']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="PMB, waiting periods, exclusions, late joiner penalties, tax deductibility, consequences of replacement, etc."  aria-describedby="" style={{height:"80px"}}/>
    <hr/>

    
    <br/>
  <div className="text-start" style={{fontSize:'18px',fontFamily:'Arial Bold'}}><b>SECTION F:</b></div>

    <div className="text-start "style={{ color: "#14848A" ,fontSize:'16px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>FINANCIAL ADVISER'S DECLARATION</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">You have elected not to accept the following product recommendations:</label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_SectionF_NotAccepted" name='STIP_SectionF_NotAccepted' value={FormData['STIP_SectionF_NotAccepted']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">For the following reasons:</label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_SectionF_Reasons" name='STIP_SectionF_Reasons' value={FormData['STIP_SectionF_Reasons']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">The consequences thereof have been clearly explained to you:</label>
              </div>
              <div className="col-6">
                <div className="row col-6 align-items-center">
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SectionF_Consequences"] === "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIP_SectionF_Consequences" name="STIP_SectionF_Consequences" />
                  </div>
                  <div className="col-3">
                      <label className="form-check-label"  >
                          Yes
                      </label>
                  </div>
                  <div className="col-3">
                      <input className="form-check-input" checked={FormData["STIP_SectionF_Consequences"] === "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIP_SectionF_Consequences" name="STIP_SectionF_Consequences" />
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

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Fees and/or commission:</label>
              </div>
              <div className="col-6">
                <input spellCheck="true"  id="STIP_SectionF_Fee" name='STIP_SectionF_Fee' value={FormData['STIP_SectionF_Fee']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-10">
                <input spellCheck="true"  id="STIP_SectionF_Comments" name='STIP_SectionF_Comments' value={FormData['STIP_SectionF_Comments']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter comments"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SectionF_Date" name='STIP_SectionF_Date' value={FormData['STIP_SectionF_Date']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Sign here"  aria-describedby=""/>
              </div>
              <div className="col-4">
                  <label className="col-form-label">Date:</label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SectionF_Date" name='STIP_SectionF_Date' value={FormData['STIP_SectionF_Date']} onChange={(e) => {onChange(e)}} type="date" className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                <input spellCheck="true"  id="STIP_SectionF_ClientName" name='STIP_SectionF_ClientName' value={FormData['STIP_SectionF_ClientName']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Client Name"  aria-describedby=""/>
              </div>
            </div>
        </div>
        <hr/>

        
        
        
      </div>
    </div>
    <div className="container1">
          <div className="icon1 update">
              <div className="tooltip1">
                  Update
              </div>
              <span><button type="submit" style={{border: "none", backgroundColor: "transparent"}}><i className="fa-solid fa-check" /></button></span>
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

export default connect(mapStateToProps)(Short_term_Personal)