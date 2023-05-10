import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
// import './Invest.css';
import './Styles/CustomNotification.css'
import './Styles/CustomButton.css'
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react'

const Short_term_Commercial= ({user}) => {
 {
    const [letterOfIntroduction, setletterOfIntroduction] = useState(true)
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionReason, setletterOfIntroductionReason] = useState("")
    const [Fica, setFica] = useState(true)
    const [FicaReason, setFicaReason] = useState("")
    const [STIC_Replacement_PurposeVisibility, setSTIC_Replacement_PurposeVisibility] = useState(false)
    const [FicaVisibility, setFicaVisibility] = useState(false)
    const [STIC_Replacement_ReasonVisibility, setSTIC_Replacement_ReasonVisibility] = useState(false)
    const [STIC_Replacement_SuppliersVisibility, setSTIC_Replacement_SuppliersVisibility] = useState(false)

    function letter_of_introduction_onFocus() {
        setletterOfIntroductionVisibility(true)
      }
      function letter_of_introduction_onBlur() {
        setletterOfIntroductionVisibility(false)
      }
      function STIC_Replacement_Purpose_onFocus() {
        setSTIC_Replacement_PurposeVisibility(true)
      }
      function STIC_Replacement_Purpose_onBlur() {
        setSTIC_Replacement_PurposeVisibility(false)
      }
      function STIC_Replacement_Reason_onFocus() {
        setSTIC_Replacement_ReasonVisibility(true)
      }
      function STIC_Replacement_Reason_onBlur() {
        setSTIC_Replacement_ReasonVisibility(false)
      }
      function STIC_Replacement_Suppliers_onFocus() {
        setSTIC_Replacement_SuppliersVisibility(true)
      }
      function STIC_Replacement_Suppliers_onBlur() {
        setSTIC_Replacement_SuppliersVisibility(false)
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
        
        STIC_Quotation_Number : "",
        STIC_Underwritten_By : "",
        STIC_Branch_Name : "",
        STIC_Branch_Number : "",
        STIC_Inception_Date : "",
        STIC_Renewal_Date : "",
        STIC_Payment_Method_Annual : 0,
        STIC_Payment_Method_Monthly : 0,
        STIC_Sasria_Annual : 0,
        STIC_Sasria_Monthly : 0,

        STIC_Business_Owner : "",
        STIC_Client_Id_Number : "",
        STIC_Company_Reg_Number : "",
        STIC_Company_VAT_Number : "",
        STIC_Postal_Address : "",
        STIC_Risk_Address : "",
        STIC_Contact_Person : "",
        STIC_TelePhone_Number : "",
        STIC_Fax_Number : "",
        STIC_CellPhone_Number : "",
        STIC_Email : "",
        STIC_Business_Description : "",

        STIC_Lower_Premium : 0,
        STIC_Higher_Premium : 0,
        STIC_Applicable_Option : "",

        STIC_General_Cancelled : 2,
        STIC_General_Cancelled_Detail : "",
        STIC_General_LossType : "",
        STIC_General_Year : "",
        STIC_General_Amount : "",
        STIC_General_History : "",
        STIC_General_Insurer : "",

        STIC_Replacement_Advise : 2,
        STIC_Replacement_Purpose : "",
        STIC_Replacement_Reason : "",
        STIC_Replacement_Suppliers : "",

        STIC_Fin_FnC_Existing : "",
        STIC_Fin_FnC_Replacement : "",
        STIC_Fin_STnC_Existing : "",
        STIC_Fin_STnC_Replacement : "",
        STIC_Fin_ImpOnPre_Existing : "",
        STIC_Fin_ImpOnPre_Replacement : "",
        STIC_Fin_Excesses_Existing : "",
        STIC_Fin_Excesses_Replacement : "",
        STIC_Fin_VABen_Existing : "",
        STIC_Fin_VABen_Replacement : "",
        STIC_Fin_AdvisorComm_Existing : "",
        STIC_Fin_AdvisorComm_Replacement : "",

        STIC_ProdComp_Existing_Company : "",
        STIC_ProdComp_Replacement_Company : "",
        STIC_ProdComp_Existing_Provider : "",
        STIC_ProdComp_Replacement_Provider : "",
        STIC_ProdComp_Existing_Product : "",
        STIC_ProdComp_Replacement_Product : "",

        STIC_ProdComp_Recommended1 : 0,
        STIC_ProdComp_Accepted1 : 0,
        STIC_ProdComp_CoverAmount1 : "",
        STIC_ProdComp_ExistP_Premium1 : "",
        STIC_ProdComp_ExistP_Excess1 : "",
        STIC_ProdComp_RecommP_Premium1 : "",
        STIC_ProdComp_RecommP_Excess1 : "",

        STIC_ProdComp_Recommended2 : 0,
        STIC_ProdComp_Accepted2 : 0,
        STIC_ProdComp_CoverAmount2 : "",
        STIC_ProdComp_ExistP_Premium2 : "",
        STIC_ProdComp_ExistP_Excess2 : "",
        STIC_ProdComp_RecommP_Premium2 : "",
        STIC_ProdComp_RecommP_Excess2 : "",

        STIC_ProdComp_Recommended3 : 0,
        STIC_ProdComp_Accepted3 : 0,
        STIC_ProdComp_CoverAmount3 : "",
        STIC_ProdComp_ExistP_Premium3 : "",
        STIC_ProdComp_ExistP_Excess3 : "",
        STIC_ProdComp_RecommP_Premium3 : "",
        STIC_ProdComp_RecommP_Excess3 : "",

        STIC_ProdComp_Recommended5 : 0,
        STIC_ProdComp_Accepted5 : 0,
        STIC_ProdComp_CoverAmount5 : "",
        STIC_ProdComp_ExistP_Premium5 : "",
        STIC_ProdComp_ExistP_Excess5 : "",
        STIC_ProdComp_RecommP_Premium5 : "",
        STIC_ProdComp_RecommP_Excess5 : "",

        STIC_ProdComp_Recommended6 : 0,
        STIC_ProdComp_Accepted6 : 0,
        STIC_ProdComp_CoverAmount6 : "",
        STIC_ProdComp_ExistP_Premium6 : "",
        STIC_ProdComp_ExistP_Excess6 : "",
        STIC_ProdComp_RecommP_Premium6 : "",
        STIC_ProdComp_RecommP_Excess6 : "",

        STIC_ProdComp_Recommended7 : 0,
        STIC_ProdComp_Accepted7 : 0,
        STIC_ProdComp_CoverAmount7 : "",
        STIC_ProdComp_ExistP_Premium7 : "",
        STIC_ProdComp_ExistP_Excess7 : "",
        STIC_ProdComp_RecommP_Premium7 : "",
        STIC_ProdComp_RecommP_Excess7 : "",

        STIC_ProdComp_Recommended8 : 0,
        STIC_ProdComp_Accepted8 : 0,
        STIC_ProdComp_CoverAmount8 : "",
        STIC_ProdComp_ExistP_Premium8 : "",
        STIC_ProdComp_ExistP_Excess8 : "",
        STIC_ProdComp_RecommP_Premium8 : "",
        STIC_ProdComp_RecommP_Excess8 : "",

        STIC_ProdComp_Recommended9 : 0,
        STIC_ProdComp_Accepted9 : 0,
        STIC_ProdComp_CoverAmount9 : "",
        STIC_ProdComp_ExistP_Premium9 : "",
        STIC_ProdComp_ExistP_Excess9 : "",
        STIC_ProdComp_RecommP_Premium9 : "",
        STIC_ProdComp_RecommP_Excess9 : "",

        STIC_ProdComp_Recommended10 : 0,
        STIC_ProdComp_Accepted10 : 0,
        STIC_ProdComp_CoverAmount10 : "",
        STIC_ProdComp_ExistP_Premium10 : "",
        STIC_ProdComp_ExistP_Excess10 : "",
        STIC_ProdComp_RecommP_Premium10 : "",
        STIC_ProdComp_RecommP_Excess10 : "",

        STIC_ProdComp_Recommended11 : 0,
        STIC_ProdComp_Accepted11 : 0,
        STIC_ProdComp_CoverAmount11 : "",
        STIC_ProdComp_ExistP_Premium11 : "",
        STIC_ProdComp_ExistP_Excess11 : "",
        STIC_ProdComp_RecommP_Premium11 : "",
        STIC_ProdComp_RecommP_Excess11 : "",

        STIC_ProdComp_Recommended12 : 0,
        STIC_ProdComp_Accepted12 : 0,
        STIC_ProdComp_CoverAmount12 : "",
        STIC_ProdComp_ExistP_Premium12 : "",
        STIC_ProdComp_ExistP_Excess12 : "",
        STIC_ProdComp_RecommP_Premium12 : "",
        STIC_ProdComp_RecommP_Excess12 : "",

        STIC_ProdComp_Recommended13 : 0,
        STIC_ProdComp_Accepted13 : 0,
        STIC_ProdComp_CoverAmount13 : "",
        STIC_ProdComp_ExistP_Premium13 : "",
        STIC_ProdComp_ExistP_Excess13 : "",
        STIC_ProdComp_RecommP_Premium13 : "",
        STIC_ProdComp_RecommP_Excess13 : "",

        STIC_ProdComp_Recommended14 : 0,
        STIC_ProdComp_Accepted14 : 0,
        STIC_ProdComp_CoverAmount14 : "",
        STIC_ProdComp_ExistP_Premium14 : "",
        STIC_ProdComp_ExistP_Excess14 : "",
        STIC_ProdComp_RecommP_Premium14 : "",
        STIC_ProdComp_RecommP_Excess14 : "",

        STIC_ProdComp_Recommended15 : 0,
        STIC_ProdComp_Accepted15 : 0,
        STIC_ProdComp_CoverAmount15 : "",
        STIC_ProdComp_ExistP_Premium15 : "",
        STIC_ProdComp_ExistP_Excess15 : "",
        STIC_ProdComp_RecommP_Premium15 : "",
        STIC_ProdComp_RecommP_Excess15 : "",

        STIC_ProdComp_Recommended16 : 0,
        STIC_ProdComp_Accepted16 : 0,
        STIC_ProdComp_CoverAmount16 : "",
        STIC_ProdComp_ExistP_Premium16 : "",
        STIC_ProdComp_ExistP_Excess16 : "",
        STIC_ProdComp_RecommP_Premium16 : "",
        STIC_ProdComp_RecommP_Excess16 : "",

        STIC_ProdComp_Recommended17 : 0,
        STIC_ProdComp_Accepted17 : 0,
        STIC_ProdComp_CoverAmount17 : "",
        STIC_ProdComp_ExistP_Premium17 : "",
        STIC_ProdComp_ExistP_Excess17 : "",
        STIC_ProdComp_RecommP_Premium17 : "",
        STIC_ProdComp_RecommP_Excess17 : "",

        STIC_ProdComp_Recommended18 : 0,
        STIC_ProdComp_Accepted18 : 0,
        STIC_ProdComp_CoverAmount18 : "",
        STIC_ProdComp_ExistP_Premium18 : "",
        STIC_ProdComp_ExistP_Excess18 : "",
        STIC_ProdComp_RecommP_Premium18 : "",
        STIC_ProdComp_RecommP_Excess18 : "",

        STIC_ProdComp_Recommended19 : 0,
        STIC_ProdComp_Accepted19 : 0,
        STIC_ProdComp_CoverAmount19 : "",
        STIC_ProdComp_ExistP_Premium19 : "",
        STIC_ProdComp_ExistP_Excess19 : "",
        STIC_ProdComp_RecommP_Premium19 : "",
        STIC_ProdComp_RecommP_Excess19 : "",

        STIC_ProdComp_Recommended20 : 0,
        STIC_ProdComp_Accepted20 : 0,
        STIC_ProdComp_CoverAmount20 : "",
        STIC_ProdComp_ExistP_Premium20 : "",
        STIC_ProdComp_ExistP_Excess20 : "",
        STIC_ProdComp_RecommP_Premium20 : "",
        STIC_ProdComp_RecommP_Excess20 : "",

        STIC_ProdComp_Recommended21 : 0,
        STIC_ProdComp_Accepted21 : 0,
        STIC_ProdComp_CoverAmount21 : "",
        STIC_ProdComp_ExistP_Premium21 : "",
        STIC_ProdComp_ExistP_Excess21 : "",
        STIC_ProdComp_RecommP_Premium21 : "",
        STIC_ProdComp_RecommP_Excess21 : "",

        STIC_ProdComp_Recommended22 : 0,
        STIC_ProdComp_Accepted22 : 0,
        STIC_ProdComp_CoverAmount22 : "",
        STIC_ProdComp_ExistP_Premium22 : "",
        STIC_ProdComp_ExistP_Excess22 : "",
        STIC_ProdComp_RecommP_Premium22 : "",
        STIC_ProdComp_RecommP_Excess22 : "",

        STIC_ProdComp_Recommended23 : 0,
        STIC_ProdComp_Accepted23 : 0,
        STIC_ProdComp_CoverAmount23 : "",
        STIC_ProdComp_ExistP_Premium23 : "",
        STIC_ProdComp_ExistP_Excess23 : "",
        STIC_ProdComp_RecommP_Premium23 : "",
        STIC_ProdComp_RecommP_Excess23 : "",

        STIC_ProdComp_Recommended24 : 0,
        STIC_ProdComp_Accepted24 : 0,
        STIC_ProdComp_CoverAmount24 : "",
        STIC_ProdComp_ExistP_Premium24 : "",
        STIC_ProdComp_ExistP_Excess24 : "",
        STIC_ProdComp_RecommP_Premium24 : "",
        STIC_ProdComp_RecommP_Excess24 : "",

        STIC_ProdComp_Recommended25 : 0,
        STIC_ProdComp_Accepted25 : 0,
        STIC_ProdComp_CoverAmount25 : "",
        STIC_ProdComp_ExistP_Premium25 : "",
        STIC_ProdComp_ExistP_Excess25 : "",
        STIC_ProdComp_RecommP_Premium25 : "",
        STIC_ProdComp_RecommP_Excess25 : "",

        STIC_ProdComp_Recommended26 : 0,
        STIC_ProdComp_Accepted26 : 0,
        STIC_ProdComp_CoverAmount26 : "",
        STIC_ProdComp_ExistP_Premium26 : "",
        STIC_ProdComp_ExistP_Excess26 : "",
        STIC_ProdComp_RecommP_Premium26 : "",
        STIC_ProdComp_RecommP_Excess26 : "",

        STIC_ProdComp_Recommended27 : 0,
        STIC_ProdComp_Accepted27 : 0,
        STIC_ProdComp_CoverAmount27 : "",
        STIC_ProdComp_ExistP_Premium27 : "",
        STIC_ProdComp_ExistP_Excess27 : "",
        STIC_ProdComp_RecommP_Premium27 : "",
        STIC_ProdComp_RecommP_Excess27 : "",

        STIC_ProdComp_Recommended28 : 0,
        STIC_ProdComp_Accepted28 : 0,
        STIC_ProdComp_CoverAmount28 : "",
        STIC_ProdComp_ExistP_Premium28 : "",
        STIC_ProdComp_ExistP_Excess28 : "",
        STIC_ProdComp_RecommP_Premium28 : "",
        STIC_ProdComp_RecommP_Excess28 : "",

        STIC_ProdComp_Recommended29 : 0,
        STIC_ProdComp_Accepted29 : 0,
        STIC_ProdComp_CoverAmount29 : "",
        STIC_ProdComp_ExistP_Premium29 : "",
        STIC_ProdComp_ExistP_Excess29 : "",
        STIC_ProdComp_RecommP_Premium29 : "",
        STIC_ProdComp_RecommP_Excess29 : "",

        STIC_ProdComp_Recommended30 : 0,
        STIC_ProdComp_Accepted30 : 0,
        STIC_ProdComp_CoverAmount30 : "",
        STIC_ProdComp_ExistP_Premium30 : "",
        STIC_ProdComp_ExistP_Excess30 : "",
        STIC_ProdComp_RecommP_Premium30 : "",
        STIC_ProdComp_RecommP_Excess30 : "",

        STIC_ProdComp_Recommended31 : 0,
        STIC_ProdComp_Accepted31 : 0,
        STIC_ProdComp_CoverAmount31 : "",
        STIC_ProdComp_ExistP_Premium31 : "",
        STIC_ProdComp_ExistP_Excess31 : "",
        STIC_ProdComp_RecommP_Premium31 : "",
        STIC_ProdComp_RecommP_Excess31 : "",

        STIC_ProdComp_Recommended32 : 0,
        STIC_ProdComp_Accepted32 : 0,
        STIC_ProdComp_CoverAmount32 : "",
        STIC_ProdComp_ExistP_Premium32 : "",
        STIC_ProdComp_ExistP_Excess32 : "",
        STIC_ProdComp_RecommP_Premium32 : "",
        STIC_ProdComp_RecommP_Excess32 : "",

        STIC_ProdComp_Recommended33 : 0,
        STIC_ProdComp_Accepted33 : 0,
        STIC_ProdComp_CoverAmount33 : "",
        STIC_ProdComp_ExistP_Premium33 : "",
        STIC_ProdComp_ExistP_Excess33 : "",
        STIC_ProdComp_RecommP_Premium33 : "",
        STIC_ProdComp_RecommP_Excess33 : "",

        STIC_ProdComp_Recommended34 : 0,
        STIC_ProdComp_Accepted34 : 0,
        STIC_ProdComp_CoverAmount34 : "",
        STIC_ProdComp_ExistP_Premium34 : "",
        STIC_ProdComp_ExistP_Excess34 : "",
        STIC_ProdComp_RecommP_Premium34 : "",
        STIC_ProdComp_RecommP_Excess34 : "",

        STIC_ProdComp_Recommended35 : 0,
        STIC_ProdComp_Accepted35 : 0,
        STIC_ProdComp_CoverAmount35 : "",
        STIC_ProdComp_ExistP_Premium35 : "",
        STIC_ProdComp_ExistP_Excess35 : "",
        STIC_ProdComp_RecommP_Premium35 : "",
        STIC_ProdComp_RecommP_Excess35 : "",

        STIC_ProdComp_Recommended36 : 0,
        STIC_ProdComp_Accepted36 : 0,
        STIC_ProdComp_CoverAmount36 : "",
        STIC_ProdComp_ExistP_Premium36 : "",
        STIC_ProdComp_ExistP_Excess36 : "",
        STIC_ProdComp_RecommP_Premium36 : "",
        STIC_ProdComp_RecommP_Excess36 : "",

        STIC_ProdComp_Recommended37 : 0,
        STIC_ProdComp_Accepted37 : 0,
        STIC_ProdComp_CoverAmount37 : "",
        STIC_ProdComp_ExistP_Premium37 : "",
        STIC_ProdComp_ExistP_Excess37 : "",
        STIC_ProdComp_RecommP_Premium37 : "",
        STIC_ProdComp_RecommP_Excess37 : "",

        STIC_ProdComp_Recommended38 : 0,
        STIC_ProdComp_Accepted38 : 0,
        STIC_ProdComp_CoverAmount38 : "",
        STIC_ProdComp_ExistP_Premium38 : "",
        STIC_ProdComp_ExistP_Excess38 : "",
        STIC_ProdComp_RecommP_Premium38 : "",
        STIC_ProdComp_RecommP_Excess38 : "",

        STIC_ProdComp_Recommended39 : 0,
        STIC_ProdComp_Accepted39 : 0,
        STIC_ProdComp_CoverAmount39 : "",
        STIC_ProdComp_ExistP_Premium39 : "",
        STIC_ProdComp_ExistP_Excess39 : "",
        STIC_ProdComp_RecommP_Premium39 : "",
        STIC_ProdComp_RecommP_Excess39 : "",

        STIC_ProdComp_Recommended40 : 0,
        STIC_ProdComp_Accepted40 : 0,
        STIC_ProdComp_CoverAmount40 : "",
        STIC_ProdComp_ExistP_Premium40 : "",
        STIC_ProdComp_ExistP_Excess40 : "",
        STIC_ProdComp_RecommP_Premium40 : "",
        STIC_ProdComp_RecommP_Excess40 : "",

        STIC_ProdComp_Recommended41 : 0,
        STIC_ProdComp_Accepted41 : 0,
        STIC_ProdComp_CoverAmount41 : "",
        STIC_ProdComp_ExistP_Premium41 : "",
        STIC_ProdComp_ExistP_Excess41 : "",
        STIC_ProdComp_RecommP_Premium41 : "",
        STIC_ProdComp_RecommP_Excess41 : "",

        STIC_ProdComp_Recommended42 : 0,
        STIC_ProdComp_Accepted42 : 0,
        STIC_ProdComp_CoverAmount42 : "",
        STIC_ProdComp_ExistP_Premium42 : "",
        STIC_ProdComp_ExistP_Excess42 : "",
        STIC_ProdComp_RecommP_Premium42 : "",
        STIC_ProdComp_RecommP_Excess42 : "",

        STIC_ProdComp_Recommended43 : 0,
        STIC_ProdComp_Accepted43 : 0,
        STIC_ProdComp_CoverAmount43 : "",
        STIC_ProdComp_ExistP_Premium43 : "",
        STIC_ProdComp_ExistP_Excess43 : "",
        STIC_ProdComp_RecommP_Premium43 : "",
        STIC_ProdComp_RecommP_Excess43 : "",

        
        STIC_ProdComp_Recommended44 : 0,
        STIC_ProdComp_Accepted44 : 0,
        STIC_ProdComp_CoverAmount44 : "",
        STIC_ProdComp_ExistP_Premium44 : "",
        STIC_ProdComp_ExistP_Excess44 : "",
        STIC_ProdComp_RecommP_Premium44 : "",
        STIC_ProdComp_RecommP_Excess44 : "",

        STIC_ProdComp_FeeNCharges : "",
        STIC_ProdComp_Commission : "",
        STIC_ProdComp_TotalPremium : "",

        
        STIC_Fire_Limit : "",
        STIC_Fire_ItemNumber : "",
        STIC_Fire_Premium : "",
        STIC_Fire_PremNumber : "",
        STIC_Buildings_Insured : "",
        STIC_Rental_Insured : "",
        STIC_Others_Insured : "",
        STIC_Stocks_Insured : "",
        STIC_Miscellaneous1_Insured : "",
        STIC_Miscellaneous2_Insured : "",

        STIC_Earthquake_Insured : 2,
        STIC_Malicious_Damage_Insured : 2,
        STIC_Special_Insured : 2,
        STIC_LeakFull_Insured : 2,
        STIC_LeakFirst_Insured : 2,
        STIC_SnLLimited_Insured : 2,
        STIC_SnLComprehensive_Insured : 2,
        STIC_RnS_Insured : 2,
        STIC_SDC_Insured : 2,

        STIC_BuildCombined_Limit : "",
        STIC_BuildCombined_ItemNumber : "",
        STIC_BuildCombined_Premium : "",
        STIC_BuildCombined_PremNumber : "",
        STIC_BuildCombined_ColumnRef : "",
        STIC_BuildCombined_Sum : "",
        STIC_BuildCombined_Construct : 2,
        STIC_BuildCombined_Desc : "",

        STIC_Extensions_RnS : 2,
        STIC_Extensions_Geysers : 2,
        STIC_Extensions_SnL : 2,
        STIC_Extensions_PoA : 2,
        STIC_Extensions_IorE : 2,

        STIC_OC_Limit : "",
        STIC_OC_ItemNumber : "",
        STIC_OC_Premium : "",
        STIC_OC_PremNumber : "",
        STIC_OC_PremisesNum : "",
        STIC_OC_Sum : "",
        STIC_OC_Construct : 2,
        STIC_OC_Desc : "",

        STIC_OC_Doc_Sum : "",
        STIC_OC_Doc_Premium : "",
        STIC_OC_LLDoc_Sum : "",
        STIC_OC_LLDoc_Premium : "",
        STIC_OC_RnS_Sum : "",
        STIC_OC_RnS_Premium : "",
        STIC_OC_TheftF_Sum : "",
        STIC_OC_TheftF_Premium : "",
        STIC_OC_Theft_Sum : "",
        STIC_OC_Theft_Premium : "",
        STIC_OC_Total_Premium : "",

        STIC_BusInt_Limit : "",
        STIC_BusInt_Premium : "",
        STIC_BusInt_ItemNumber : "",
        STIC_BusInt_PremNumber : "",
        STIC_BusInt_Basis : "",
        STIC_BusInt_Indemnity : "",

        STIC_BusInt_Type1 : 2,
        STIC_BusInt_Type2 : 2,
        STIC_BusInt_Type3 : 2,
        STIC_BusInt_Type4 : 2,
        STIC_BusInt_Type5 : 2,
        STIC_BusInt_Type6 : 2,
        STIC_BusInt_Type7 : 2,
        STIC_BusInt_Type8 : 2,
        
        STIC_BusInt_Type9 : "",
        STIC_BusInt_Type9_1 : "",
        STIC_BusInt_Type10 : "",
        STIC_BusInt_Type11 : 2,
        STIC_BusInt_Type11_1 : "",
        STIC_BusInt_Type12 : "",
        STIC_BusInt_Type13 : "",
        STIC_BusInt_Type14 : 2,
        STIC_BusInt_Type14_1 : "",
        STIC_BusInt_Type15 : 2,
        STIC_BusInt_Type15_1 : "",
        STIC_BusInt_Type16 : 2,
        STIC_BusInt_Type16_1 : "",
        STIC_BusInt_Type17 : "",
        STIC_BusInt_Type18 : "",
        STIC_BusInt_Type19 : 2,
        STIC_BusInt_Type19_1 : "",
        STIC_BusInt_Type20 : 2,
        STIC_BusInt_Type20_1 : "",
        STIC_BusInt_Type21 : 2,
        STIC_BusInt_Type21_1 : "",
        STIC_BusInt_Type22 : 2,
        STIC_BusInt_Type22_1 : "",
        STIC_BusInt_Type23 : 2,
        STIC_BusInt_Type23_1 : "",

        STIC_BusInt_TotalPremium : "",
        STIC_BusInt_PremisesNumber : "",
        STIC_BusInt_Basis : "",
        STIC_BusInt_IndemPer : "",
        STIC_BusInt_Suppliers : 2,

        STIC_BusInt_Type2_1 : 2,
        STIC_BusInt_Type2_2 : 2,
        STIC_BusInt_Type2_3 : 2,
        STIC_BusInt_Type2_4 : 2,
        STIC_BusInt_Type2_5 : 2,
        STIC_BusInt_Type2_6 : 2,
        STIC_BusInt_Type2_7 : 2,
        STIC_BusInt_Type2_8 : 2,
        
        STIC_BusInt_Type2_9 : "",
        STIC_BusInt_Type2_9_1 : "",
        STIC_BusInt_Type2_10 : "",
        STIC_BusInt_Type2_11 : 2,
        STIC_BusInt_Type2_11_1 : "",
        STIC_BusInt_Type2_12 : "",
        STIC_BusInt_Type2_13 : "",
        STIC_BusInt_Type2_14 : 2,
        STIC_BusInt_Type2_14_1 : "",
        STIC_BusInt_Type2_15 : 2,
        STIC_BusInt_Type2_15_1 : "",
        STIC_BusInt_Type2_16 : 2,
        STIC_BusInt_Type2_16_1 : "",
        STIC_BusInt_Type2_17 : "",
        STIC_BusInt_Type2_18 : "",
        STIC_BusInt_Type2_19 : 2,
        STIC_BusInt_Type2_19_1 : "",
        STIC_BusInt_Type2_20 : 2,
        STIC_BusInt_Type2_20_1 : "",
        STIC_BusInt_Type2_21 : 2,
        STIC_BusInt_Type2_21_1 : "",
        STIC_BusInt_Type2_22 : 2,
        STIC_BusInt_Type2_22_1 : "",
        STIC_BusInt_Type2_23 : 2,
        STIC_BusInt_Type2_23_1 : "",

        STIC_BusInt2_TotalPremium : "",
        STIC_BusInt2_Comments : "",
        
        STIC_Sec5_Limit : "",
        STIC_Sec5_Premium : "",
        STIC_Sec5_ItemNumber : "",
        STIC_Sec5_PremNumber : "",
        STIC_Sec5_1 : "",
        STIC_Sec5_2 : "",
        STIC_Sec5_Extension_1 : 2,
        STIC_Sec5_Extension_2 : 2,
        STIC_Sec5_Extension_3 : 2,
        STIC_Sec5_Extension_4 : 2,
        STIC_Sec5_Extension_5 : 2,
        STIC_Sec5_AnnualPremium : "",
        STIC_Sec5_Comments : "",


        STIC_Sec6_Limit : "",
        STIC_Sec6_Premium : "",
        STIC_Sec6_ItemNumber : "",
        STIC_Sec6_PremNumber : "",
        STIC_Sec6_1 : "",
        STIC_Sec6_2 : "",
        STIC_Sec6_3 : "",
        STIC_Sec6_4 : "",
        STIC_Sec6_5 : "",
        STIC_Sec6_6 : "",
        STIC_Sec6_Comments : "",

        STIC_Sec7_Limit : "",
        STIC_Sec7_Premium : "",
        STIC_Sec7_ItemNumber : "",
        STIC_Sec7_PremNumber : "",
        STIC_Sec7_1 : "",
        STIC_Sec7_2 : "",
        STIC_Sec7_3 : 2,
        STIC_Sec7_4 : 2,
        STIC_Sec7_5 : "",
        STIC_Sec7_6 : "",
        STIC_Sec7_7 : "",
        STIC_Sec7_8 : "",
        STIC_Sec7_9 : "",
        STIC_Sec7_Extension_Included1 : 2,
        STIC_Sec7_Extension_Limit1 : "",
        STIC_Sec7_Extension_Premium1 : "",
        STIC_Sec7_Extension_Included2 : 2,
        STIC_Sec7_Extension_Limit2 : "",
        STIC_Sec7_Extension_Premium2 : "",
        STIC_Sec7_Extension_Included3 : 2,
        STIC_Sec7_Extension_Limit3 : "",
        STIC_Sec7_Extension_Premium3 : "",
        STIC_Sec7_AnnualPremium : "",
        STIC_Sec7_Comments : "",

        STIC_Sec8_Limit : "",
        STIC_Sec8_Premium : "",
        STIC_Sec8_ItemNumber : "",
        STIC_Sec8_PremNumber : "",
        STIC_Sec8_1 : "",
        STIC_Sec8_2 : "",
        STIC_Sec8_Extension_Included1 : 2,
        STIC_Sec8_Extension_Included2 : 2,
        STIC_Sec8_AnnualPremium : "",
        STIC_Sec8_Comments : "",

        STIC_Sec9_Limit : "",
        STIC_Sec9_Premium : "",
        STIC_Sec9_ItemNumber : "",
        STIC_Sec9_PremNumber : "",
        STIC_Sec9_1 : "",
        STIC_Sec9_2 : "",
        STIC_Sec9_3 : "",
        STIC_Sec9_4 : "",
        STIC_Sec9_5 : "",
        STIC_Sec9_6 : "",
        STIC_Sec9_Extension_Included1 : 2,
        STIC_Sec9_Extension_Limit1 : "",
        STIC_Sec9_Extension_Premium1 : "",
        STIC_Sec9_Extension_Included2 : 2,
        STIC_Sec9_Extension_Limit2 : "",
        STIC_Sec9_Extension_Premium2 : "",
        STIC_Sec9_Extension_Included3 : 2,
        STIC_Sec9_Extension_Limit3 : "",
        STIC_Sec9_Extension_Premium3 : "",
        STIC_Sec9_Extension_Included4 : 2,
        STIC_Sec9_Extension_Limit4 : "",
        STIC_Sec9_Extension_Premium4 : "",
        STIC_Sec9_Extension_Included5 : 2,
        STIC_Sec9_Extension_Limit5 : "",
        STIC_Sec9_Extension_Premium5 : "",
        STIC_Sec9_Extension_Included6 : 2,
        STIC_Sec9_Extension_Limit6 : "",
        STIC_Sec9_Extension_Premium6 : "",
        STIC_Sec9_AnnualPremium : "",
        STIC_Sec9_Comments : "",

        STIC_Sec10_Limit : "",
        STIC_Sec10_Premium : "",
        STIC_Sec10_ItemNumber : "",
        STIC_Sec10_PremNumber : "",
        STIC_Sec10_1 : "",
        STIC_Sec10_2 : "",
        STIC_Sec10_3 : "",
        STIC_Sec10_4 : "",
        STIC_Sec10_5 : "",
        STIC_Sec10_6 : "",
        STIC_Sec10_7 : "",
        STIC_Sec10_Extension_Included1 : 2,
        STIC_Sec10_Extension_Limit1 : "",
        STIC_Sec10_Extension_Premium1 : "",
        STIC_Sec10_Extension_Included2 : 2,
        STIC_Sec10_Extension_Limit2 : "",
        STIC_Sec10_Extension_Premium2 : "",
        STIC_Sec10_Extension_Included3 : 2,
        STIC_Sec10_Extension_Limit3 : "",
        STIC_Sec10_Extension_Premium3 : "",
        STIC_Sec10_Extension_Included4 : 2,
        STIC_Sec10_Extension_Limit4 : "",
        STIC_Sec10_Extension_Premium4 : "",
        STIC_Sec10_AnnualPremium : "",
        STIC_Sec10_Comments : "",

        STIC_Sec11_Limit : "",
        STIC_Sec11_Premium : "",
        STIC_Sec11_ItemNumber : "",
        STIC_Sec11_PremNumber : "",
        STIC_Sec11_1 : 2,
        STIC_Sec11_2 : "",
        STIC_Sec11_3 : "",
        STIC_Sec11_4 : "",
        STIC_Sec11_5 : "",
        STIC_Sec11_6 : "",
        STIC_Sec11_7 : "",
        STIC_Sec11_8 : "",
        STIC_Sec11_9 : "",
        STIC_Sec11_10 : "",
        STIC_Sec11_AnnualPremium : "",
        STIC_Sec11_Comments : "",

        STIC_Sec12_Limit : "",
        STIC_Sec12_Premium : "",
        STIC_Sec12_ItemNumber : "",
        STIC_Sec12_PremNumber : "",
        STIC_Sec12_1 : "",
        STIC_Sec12_2 : "",
        STIC_Sec12_3 : "",
        STIC_Sec12_4 : "",
        STIC_Sec12_5 : "",
        STIC_Sec12_6 : "",
        STIC_Sec12_Extension_Included1 : 2,
        STIC_Sec12_Extension_Included2 : 2,
        STIC_Sec12_Extension_Included3 : 2,
        STIC_Sec12_Extension_Included4 : 2,
        STIC_Sec12_Extension_Included5 : 2,
        STIC_Sec12_AnnualPremium : "",
        STIC_Sec12_Comments : "",

        STIC_Sec13_Limit : "",
        STIC_Sec13_Premium : "",
        STIC_Sec13_ItemNumber : "",
        STIC_Sec13_PremNumber : "",
        STIC_Sec13_1 : "",
        STIC_Sec13_2 : "",
        STIC_Sec13_3 : "",
        STIC_Sec13_4 : "",
        STIC_Sec13_5 : "",
        STIC_Sec13_6 : "",
        STIC_Sec13_7 : 2,
        STIC_Sec13_8 : "",
        STIC_Sec13_9 : "",
        STIC_Sec13_10 : "",
        STIC_Sec13_11 : "",
        STIC_Sec13_12 : 2,
        STIC_Sec13_13 : "",
        STIC_Sec13_14 : "",
        STIC_Sec13_15 : "",
        STIC_Sec13_16 : 2,
        STIC_Sec13_17 : "",
        STIC_Sec13_18 : "",
        STIC_Sec13_19 : "",
        STIC_Sec13_20 : 2,
        STIC_Sec13_21 : "",
        STIC_Sec13_22 : "",
        STIC_Sec13_23 : "",
        STIC_Sec13_24 : 2,
        STIC_Sec13_25 : "",
        STIC_Sec13_26 : "",
        STIC_Sec13_27 : "",
        STIC_Sec13_28 : 2,
        STIC_Sec13_29 : "",
        STIC_Sec13_30 : 2,
        STIC_Sec13_31 : 2,
        STIC_Sec13_32 : 2,
        STIC_Sec13_AnnualPremium : "",
        STIC_Sec13_Comments : "",

        STIC_Sec14_Limit : "",
        STIC_Sec14_Premium : "",
        STIC_Sec14_ItemNumber : "",
        STIC_Sec14_PremNumber : "",
        STIC_Sec14_1 : "",
        STIC_Sec14_2 : "",
        STIC_Sec14_3 : "",
        STIC_Sec14_4 : "",
        STIC_Sec14_5 : "",
        STIC_Sec14_6 : "",
        STIC_Sec14_Recommended1 : 0,
        STIC_Sec14_Accepted1 : 0,
        STIC_Sec14_CoverAmount1 : "",
        STIC_Sec14_Recommended2 : 0,
        STIC_Sec14_Accepted2 : 0,
        STIC_Sec14_CoverAmount2 : "",
        STIC_Sec14_Recommended3 : 0,
        STIC_Sec14_Accepted3 : 0,
        STIC_Sec14_CoverAmount3 : "",
        STIC_Sec14_Recommended4 : 0,
        STIC_Sec14_Accepted4 : 0,
        STIC_Sec14_CoverAmount4 : "",
        STIC_Sec14_Recommended5 : 0,
        STIC_Sec14_Accepted5 : 0,
        STIC_Sec14_CoverAmount5 : "",
        STIC_Sec14_Recommended6 : 0,
        STIC_Sec14_Accepted6 : 0,
        STIC_Sec14_CoverAmount6 : "",
        STIC_Sec14_Recommended7 :1,
        STIC_Sec14_Accepted7 : 0,
        STIC_Sec14_CoverAmount7 : "",
        STIC_Sec14_Recommended8 : 0,
        STIC_Sec14_Accepted8 : 0,
        STIC_Sec14_CoverAmount8 : "",
        STIC_Sec14_Recommended9 : 0,
        STIC_Sec14_Accepted9 : 0,
        STIC_Sec14_CoverAmount9 : "",
        STIC_Sec14_Recommended10 : 0,
        STIC_Sec14_Accepted10 : 0,
        STIC_Sec14_CoverAmount10 : "",
        STIC_Sec14_Recommended11 : 0,
        STIC_Sec14_Accepted11 : 0,
        STIC_Sec14_CoverAmount11 : "",
        STIC_Sec14_Recommended12 : 0,
        STIC_Sec14_Accepted12 : 0,
        STIC_Sec14_CoverAmount12 : "",

        STIC_Sec15_Limit : "",
        STIC_Sec15_Premium : "",
        STIC_Sec15_ItemNumber : "",
        STIC_Sec15_PremNumber : "",
        STIC_Sec15_1 : "",
        STIC_Sec15_1_1 : "",
        STIC_Sec15_2 : "",
        STIC_Sec15_2_1 : "",
        STIC_Sec15_3 : "",
        STIC_Sec15_3_1 : "",
        STIC_Sec15_AnnualPremium : "",
        STIC_Sec15_Comments : "",

        STIC_Sec16_Limit : "",
        STIC_Sec16_Premium : "",
        STIC_Sec16_ItemNumber : "",
        STIC_Sec16_PremNumber : "",
        STIC_Sec16_1 : "",
        STIC_Sec16_2 : "",
        STIC_Sec16_3 : "",
        STIC_Sec16_4 : "",
        STIC_Sec16_5 : "",
        STIC_Sec16_6 : "",
        STIC_Sec16_7 : "",
        STIC_Sec16_8 : "",
        STIC_Sec16_9 : "",
        STIC_Sec16_10 : 2,
        STIC_Sec16_Extension1 : 2,
        STIC_Sec16_Extension2 : 2,
        STIC_Sec16_Extension3 : 2,
        STIC_Sec16_Extension4 : 2,
        STIC_Sec16_Extension5 : 2,
        STIC_Sec16_Extension6 : 2,
        STIC_Sec16_Extension7 : 2,
        STIC_Sec16_Extension8 : 2,
        STIC_Sec16_Extension9 : 2,
        STIC_Sec16_AnnualPremium : "",
        STIC_Sec16_Comments : "",

        STIC_Sec17_Limit : "",
        STIC_Sec17_Premium : "",
        STIC_Sec17_ItemNumber : "",
        STIC_Sec17_PremNumber : "",
        STIC_Sec17_1 : "",
        STIC_Sec17_2 : "",
        STIC_Sec17_3 : "",
        STIC_Sec17_4 : "",
        STIC_Sec17_5 : "",
        STIC_Sec17_6 : 2,
        STIC_Sec17_7 : "",
        STIC_Sec17_8 : "",
        STIC_Sec17_9 :"",
        STIC_Sec17_10 : 2,
        STIC_Sec17_Extension1 : 2,
        STIC_Sec17_ExtensionLimit1 : "",
        STIC_Sec17_ExtensionPremium1 : "",
        STIC_Sec17_Extension2 : 2,
        STIC_Sec17_ExtensionLimit2 : "",
        STIC_Sec17_ExtensionPremium2 : "",
        STIC_Sec17_Extension3 : 2,
        STIC_Sec17_ExtensionLimit3 : "",
        STIC_Sec17_ExtensionPremium3 : "",
        STIC_Sec17_Extension4 : 2,
        STIC_Sec17_ExtensionLimit4 : "",
        STIC_Sec17_ExtensionPremium4 : "",
        STIC_Sec17_Extension5 : 2,
        STIC_Sec17_ExtensionLimit5 : "",
        STIC_Sec17_ExtensionPremium5 : "",
        STIC_Sec17_Extension6 : 2,
        STIC_Sec17_ExtensionLimit6 : "",
        STIC_Sec17_ExtensionPremium6 : "",
        STIC_Sec17_Extension7 : 2,
        STIC_Sec17_ExtensionLimit7 : "",
        STIC_Sec17_ExtensionPremium7 : "",
        STIC_Sec17_Extension8 : 2,
        STIC_Sec17_ExtensionLimit8 : "",
        STIC_Sec17_ExtensionPremium8 : "",
        STIC_Sec17_Extension9 : 2,
        STIC_Sec17_ExtensionLimit9 : "",
        STIC_Sec17_ExtensionPremium9 : "",
        STIC_Sec17_AnnualPremium : "",
        STIC_Sec17_Comments : "",

        STIC_Sec18_Limit : "",
        STIC_Sec18_Premium : "",
        STIC_Sec18_ItemNumber : "",
        STIC_Sec18_PremNumber : "",
        STIC_Sec18_1 : "",
        STIC_Sec18_2 : "",
        STIC_Sec18_3 : "",
        STIC_Sec18_4 : "",
        STIC_Sec18_5 : "",
        STIC_Sec18_6 : "",
        STIC_Sec18_7 : "",
        STIC_Sec18_8 : "",
        STIC_Sec18_9 : "",
        STIC_Sec18_10 : "",
        STIC_Sec18_11 : "",
        STIC_Sec18_12 : "",
        STIC_Sec18_13 : "",
        STIC_Sec18_14 : "",
        STIC_Sec18_15 : "",
        STIC_Sec18_16 : "",
        STIC_Sec18_17 : "",
        STIC_Sec18_18 : "",
        STIC_Sec18_19 : "",
        STIC_Sec18_20 : 2,
        STIC_Sec18_21 : "",
        STIC_Sec18_22 : "",
        STIC_Sec18_23 : "",
        STIC_Sec18_24 : "",
        STIC_Sec18_25 : "",
        STIC_Sec18_26 : "",
        STIC_Sec18_27 : "",
        STIC_Sec18_27 : "",
        STIC_Sec18_FaP1 : 0,
        STIC_Sec18_FaP1_1 : "",
        STIC_Sec18_FaP1_2 : "",
        STIC_Sec18_FaP2 : 0,
        STIC_Sec18_FaP2_1 : "",
        STIC_Sec18_FaP2_2 : "",
        STIC_Sec18_FaP3 : 0,
        STIC_Sec18_FaP3_1 : "",
        STIC_Sec18_FaP3_2 : "",
        STIC_Sec18_FaP4 : 0,
        STIC_Sec18_FaP4_1 : "",
        STIC_Sec18_FaP4_2 : "",
        STIC_Sec18_FaP5 : 0,
        STIC_Sec18_FaP5_1 : "",
        STIC_Sec18_FaP5_2 : "",
        STIC_Sec18_FaP6 : 0,
        STIC_Sec18_FaP6_1 : "",
        STIC_Sec18_FaP6_2 : "",
        STIC_Sec18_Extension1 : 0,
        STIC_Sec18_Extension1_1 : "",
        STIC_Sec18_Extension1_2 : "",
        STIC_Sec18_Extension2 : 0,
        STIC_Sec18_Extension2_1 : "",
        STIC_Sec18_Extension3 : 0,
        STIC_Sec18_Extension3_1 : "",
        STIC_Sec18_Extension4 : 0,
        STIC_Sec18_Extension4_1 : "",
        STIC_Sec18_Extension5 : 0,
        STIC_Sec18_Extension5_1 : "",
        STIC_Sec18_Extension6 : 0,
        STIC_Sec18_Extension6_1 : "",
        STIC_Sec18_Comments : "",

        STIC_Sec19_Limit : "",
        STIC_Sec19_Premium : "",
        STIC_Sec19_ItemNumber : "",
        STIC_Sec19_PremNumber : "",
        STIC_Sec19_Part1_1 : "",
        STIC_Sec19_Part1_2 : "",
        STIC_Sec19_Part1_3 : "",
        STIC_Sec19_Part1_4 : "",
        STIC_Sec19_Part1_5 : "",
        STIC_Sec19_Part1_6 : "",
        STIC_Sec19_Part1_7 : "",
        STIC_Sec19_Part1_8 : "",
        STIC_Sec19_Part1_9 : "",
        STIC_Sec19_Part2_1 : "",
        STIC_Sec19_Part2_2 : "",
        STIC_Sec19_Part2_3 : "",
        STIC_Sec19_Part2_4 : "",
        STIC_Sec19_Part2_5 : "",
        STIC_Sec19_Extension1 : 2,
        STIC_Sec19_Extension_Premium1 : "",
        STIC_Sec19_Extension2 : 2,
        STIC_Sec19_Extension_Premium2 : "",
        STIC_Sec19_RoD_1 : "",
        STIC_Sec19_RoD_2 : "",
        STIC_Sec19_RoD_3 : "",
        STIC_Sec19_RoD_4 : "",
        STIC_Sec19_RoD_5 : "",
        STIC_Sec19_AnnualPremium : "",
        STIC_Sec19_Comments : "",

        STIC_Sec20_Limit : "",
        STIC_Sec20_Premium : "",
        STIC_Sec20_ItemNumber : "",
        STIC_Sec20_PremNumber : "",
        STIC_Sec20_1 : "",
        STIC_Sec20_2 : "",
        STIC_Sec20_3 : "",
        STIC_Sec20_4 : "",
        STIC_Sec20_5 : "",
        STIC_Sec20_6 : "",
        STIC_Sec20_Extension1 : 2,
        STIC_Sec20_Extension_Premium1 : "",
        STIC_Sec20_Extension2 : 2,
        STIC_Sec20_Extension_Premium2 : "",
        STIC_Sec20_AnnualPremium : "",
        STIC_Sec20_Comments : "",

        STIC_Sec21_Limit : "",
        STIC_Sec21_Premium : "",
        STIC_Sec21_ItemNumber : "",
        STIC_Sec21_PremNumber : "",
        STIC_Sec21_1 : "",
        STIC_Sec21_2 : "",
        STIC_Sec21_3 : "",
        STIC_Sec21_4 : "",
        STIC_Sec21_5 : "",
        STIC_Sec21_6 : "",
        STIC_Sec21_Extension1 : 2,
        STIC_Sec21_Extension_Premium1 : "",
        STIC_Sec21_Extension2 : 2,
        STIC_Sec21_Extension_Premium2 : "",
        STIC_Sec21_AnnualPremium : "",
        STIC_Sec21_Comments : "",
        
        STIC_SecD_1 : "",
        STIC_SecD_2 : "",
        STIC_SecD_3 : "",
        STIC_SecD_4 : 2,
        STIC_SecD_5 : "",
        STIC_SecD_6 : "",
        STIC_SecD_7 : "",
        STIC_SecD_8 : "",
        STIC_SecD_9 : "",
        STIC_SecD_10 : "",
        STIC_SecD_11 : "",
        STIC_SecD_12 : "",
        STIC_SecD_13 : "",

        STIC_SecE_1 : "",
        STIC_SecE_2 : "",
        STIC_SecE_3 : "",

        STIC_SecG_1 : "",
        STIC_SecG_2 : "",
        STIC_SecG_3 : "",



      });
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})

      const createSTICForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_short_term_commerical_data/`, Body ,config)
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
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_short_term_commerical_data/`, Body ,config)
            // console.log(response.data['formData'])
            setFormData(response.data['formData'])
            setSuccessMessage("Short Term Insurance Commerical data is successfully updated")
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
      
      const onFieldBlur = e => {
        updateForm()
        // window.location.reload();
      }
      // console.log(JSON.stringify(FormData))
      // console.log(JSON.stringify(localStorage.getItem('access')))
      useEffect(() => {
        createSTICForm(FormData)
        // const interval = setInterval(() => {
        //     const STICFormSubmitButton = document.querySelector(".updateSTICFormBTN")
        //     STICFormSubmitButton.click()
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
      } style={{fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SHORT-TERM INSURANCE: COMMERCIAL</b></div>
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
                  
                  <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label className="col-form-label">Quotation Number:</label>
                                  </div>
                                  <div className="col-6">
        
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Quotation_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Quotation_Number']}  name="STIC_Quotation_Number" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="id_number" className="col-form-label">Underwritten by:</label>
                                  </div>
                                  <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Underwritten_By" onChange={(e) => {onChange(e)}} value={FormData['STIC_Underwritten_By']}  name="STIC_Underwritten_By" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label">Branch Name:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Name" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Name']}  name="STIC_Branch_Name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="id_number" className="col-form-label">Branch Number:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label">Inception Date:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} type={"date"} spellCheck="true" id="STIC_Inception_Date" onChange={(e) => {onChange(e)}} value={FormData['STIC_Inception_Date']}  name="STIC_Inception_Date"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="id_number" className="col-form-label">Renewal Date: (If any):</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} type={"date"} spellCheck="true" id="STIC_Renewal_Date" onChange={(e) => {onChange(e)}} value={FormData['STIC_Renewal_Date']}  name="STIC_Renewal_Date" className="form-control" placeholder="Click or tap here to enter text." aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label"><i>(* Select if applicable)</i></label>
                                  </div>
                                  {/* <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div> */}
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label"><i></i></label>
                                  </div>
                                  {/* <div className="col-6">
                                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div> */}
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label">Payment method: Annual</label>
                                  </div>
                                 <div className="col-6">
                                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Payment_Method_Annual"] === 1 ? true : false} name="STIC_Payment_Method_Annual" onChange={(e)=>{FormData["STIC_Payment_Method_Annual"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                        <label for="vehicle1">Yes</label><br/>
                                  </div> 
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label">Payment method: Monthly</label>
                                  </div>
                                 <div className="col-6">
                                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Payment_Method_Monthly"] === 1 ? true : false} name="STIC_Payment_Method_Monthly" onChange={(e)=>{FormData["STIC_Payment_Method_Monthly"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                        <label for="vehicle1">Yes</label><br/>
                                  </div> 
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label">*Sasria: Annual</label>
                                  </div>
                                 <div className="col-6">
                                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sasria_Annual"] === 1 ? true : false} name="STIC_Sasria_Annual" onChange={(e)=>{FormData["STIC_Sasria_Annual"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                        <label for="vehicle2">Yes</label><br/>
                                  </div> 
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label">*Sasria: Monthly</label>
                                  </div>
                                 <div className="col-6">
                                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sasria_Monthly"] === 1 ? true : false} name="STIC_Sasria_Monthly" onChange={(e)=>{FormData["STIC_Sasria_Monthly"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                        <label for="vehicle3">Yes</label><br/>
                                  </div> 
                              </div>
                          </div>


                        </div>
                    </div>
        <hr/>

        <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) 
                                    processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to 
                                    SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on 
                                    <a href="https://www.sfpadvice.co.za"> https://www.sfpadvice.co.za</a>
                                </p>
        <hr/>
        <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>A. DETAILS OF CLIENT </b></div>
        <hr/>
                    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Full name of business/Applicant/Owner:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Business_Owner" onChange={(e) => {onChange(e)}} value={FormData['STIC_Business_Owner']}  name="STIC_Business_Owner"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>
                          

                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Client identity number:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Client_Id_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Client_Id_Number']}  name="STIC_Client_Id_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Company registration number: </label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Company_Reg_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Company_Reg_Number']}  name="STIC_Company_Reg_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">VAT number:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Company_VAT_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Company_VAT_Number']}  name="STIC_Company_VAT_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Company_VAT_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Company_VAT_Number']}  name="STIC_Company_VAT_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Postal Address:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Postal_Address" onChange={(e) => {onChange(e)}} value={FormData['STIC_Postal_Address']}  name="STIC_Postal_Address"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Postal_Address" onChange={(e) => {onChange(e)}} value={FormData['STIC_Postal_Address']}  name="STIC_Postal_Address"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Risk Address:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Risk_Address" onChange={(e) => {onChange(e)}} value={FormData['STIC_Risk_Address']}  name="STIC_Risk_Address"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Risk_Address" onChange={(e) => {onChange(e)}} value={FormData['STIC_Risk_Address']}  name="STIC_Risk_Address"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Name and surname of contact person:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Contact_Person" onChange={(e) => {onChange(e)}} value={FormData['STIC_Contact_Person']}  name="STIC_Contact_Person"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                         
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Telephone Number:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_TelePhone_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_TelePhone_Number']}  name="STIC_TelePhone_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_TelePhone_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_TelePhone_Number']}  name="STIC_TelePhone_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Fax Number:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fax_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fax_Number']}  name="STIC_Fax_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fax_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fax_Number']}  name="STIC_Fax_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Cellphone Number:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_CellPhone_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_CellPhone_Number']}  name="STIC_CellPhone_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Email Address:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Email" onChange={(e) => {onChange(e)}} value={FormData['STIC_Email']}  name="STIC_Email"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Description of business activities:</label>
                                  </div>
                                  <div className="col-6">
                                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Business_Description" onChange={(e) => {onChange(e)}} value={FormData['STIC_Business_Description']}  name="STIC_Business_Description"  className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>

                    <hr/>
                    <br/>
                    <p style={{color:"grey"}}>It is important for the purpose of disclosure that the insurer is aware of the full business description which encompasses all the activities that the business is involved. This impacts the validity of the cover and potential future claims, and you are requested to inform us whenever there may be change in the business description.</p>

                    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'15px'}} ><b>Client Preference:</b></div>

                    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">

                        <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label"></label>
                                  </div>
                                 <div className="col-6">
                                    {/* <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["IP_ItP_FundProvided"] === 1 ? true : false} name="IP_ItP_FundProvided" onChange={(e)=>{FormData["IP_ItP_FundProvided"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                        <label for="vehicle3">Yes</label><br/> */}
                                  </div> 
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-8">
                                    <label className="col-form-label"><i>(Mark the applicable option. Client must initial in the space provided.)</i></label>
                                  </div>
                                  {/* <div className="col-4">
                                    <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["IP_ItP_FundProvided"] === 1 ? true : false} name="IP_ItP_FundProvided" onChange={(e)=>{FormData["IP_ItP_FundProvided"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                        <label for="vehicle3">Yes</label><br/>
                                  </div>   */}
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label className="col-form-label">Lower premium (Possible lower cover/reduced benefits)</label>
                                        </div>
                                        <div className="col-4">
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Lower_Premium"] === 1 ? true : false} name="STIC_Lower_Premium" onChange={(e)=>{FormData["STIC_Lower_Premium"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                                <label for="vehicle3">Yes</label><br/>
                                        </div> 
                                    </div>

                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label className="col-form-label">Most comprehensive cover (Possible higher premium)</label>
                                        </div>
                                        <div className="col-4">
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Higher_Premium"] === 1 ? true : false} name="STIC_Higher_Premium" onChange={(e)=>{FormData["STIC_Higher_Premium"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                                                <label for="vehicle3">Yes</label><br/>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-4">
                                  {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Applicable_Option" onChange={(e) => {onChange(e)}} value={FormData['STIC_Applicable_Option']}  name="STIC_Applicable_Option"  className="form-control" placeholder=""  aria-describedby="" style={{width:"600px",height:"100px"}} /> */}
                                  <Editor onBlur={(e)=>{onFieldBlur(e)}}
                                    value={FormData['STIC_Applicable_Option']}
                                    onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_Applicable_Option']: newText }) }}
                                    name="STIC_Applicable_Option"
                                    init={{
                                        selector: "textarea",
                                        browser_spellcheck : true,
                                        height: '300px',
                                        width: '600px',
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

                        </div>
                    </div>

                    <br/>
                    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>B. GENERAL</b></div>
                    <hr/>

                            <div className="row g-3 align-items-center">
                                <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">1.Has any short-term insurer ever turned down your application for insurance, cancelled any policy (or part thereof) imposed any special conditions, refused to renew any policy, or part thereof, or refused to continue any part of your insurance?</label>
                                </div>
                                  <div className="col-6">
                                      <div className="row">
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_General_Cancelled'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_General_Cancelled" name="STIC_General_Cancelled" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="STIC_General_Cancelled" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_General_Cancelled'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_General_Cancelled" name="STIC_General_Cancelled" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="STIC_General_Cancelled" >
                                                      No
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-11" id="letter_of_introduction_2">
                                      {
                                          letterOfIntroductionVisibility ?
                                          <>
                                              <div id="letter_of_introduction_instructions" className="hidden_class">
                                                  <p>If 'Yes', provide details:</p>
                                              </div>
                                          </> :
                                          null
                                      }
                                      {/* <textarea id="STIC_General_Cancelled_Detail" onChange={(e) => {onChange(e)}} value={FormData['STIC_General_Cancelled_Detail']}  name="STIC_General_Cancelled_Detail"  onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If 'Yes', provide details:" aria-describedby="" ></textarea> */}
                                      <Editor
                                        value={FormData['STIC_General_Cancelled_Detail']}
                                        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_General_Cancelled_Detail']: newText }) }}
                                        onFocus={(e)=>{letter_of_introduction_onFocus()}}
                                        onBlur={(e)=>{letter_of_introduction_onBlur();onFieldBlur(e)}}                      
                                        name="STIC_General_Cancelled_Detail"
                                        init={{
                                            selector: "textarea",
                                            browser_spellcheck : true,
                                            placeholder: "If 'Yes', provide details:",
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
                                  <hr/>
                              </div>

                              <p>2. History of previous losses/claims. Provide details regarding any losses you might have sustained during the past five years, including all claims that were paid out or not paid out</p>

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
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_General_LossType" onChange={(e) => {onChange(e)}} value={FormData['STIC_General_LossType']}  name="STIC_General_LossType"  className="form-control" placeholder="Type of loss"  aria-describedby="" style={{width:"150px"}} />
                                            </div>
                                            
                                            <div className="col-6">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_General_Year" onChange={(e) => {onChange(e)}} value={FormData['STIC_General_Year']}  name="STIC_General_Year"  className="form-control" placeholder="Year"  aria-describedby="" style={{width:"150px"}} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_General_Amount" onChange={(e) => {onChange(e)}} value={FormData['STIC_General_Amount']}  name="STIC_General_Amount"  className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"150px"}} />
                                            </div>
                                            
                                            <div className="col-6">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_General_Insurer" onChange={(e) => {onChange(e)}} value={FormData['STIC_General_Insurer']}  name="STIC_General_Insurer"  className="form-control" placeholder="Insurer"  aria-describedby="" style={{width:"150px"}} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <br/>
                            <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>C. REPLACEMENT OF INSURANCE</b></div>
                            <hr/>

                            <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Does the advice given to the client include replacement of an existing financial product?	</label>
                                  </div>
                                  <div className="col-6">
                                      <div className="row">
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="radio" value="1" checked={FormData['STIC_Replacement_Advise'] == 1 ? true : false} id="STIC_Replacement_Advise" name="STIC_Replacement_Advise" onChange={(e) => {onChange(e)}}/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" type="radio" value="0" checked={FormData['STIC_Replacement_Advise'] == 0 ? true : false} id="STIC_Replacement_Advise" name="STIC_Replacement_Advise" onChange={(e) => {onChange(e)}}/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                                      No
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-11" id="provided_identity_2" >
                                    <p>If yes,answer the following:</p>
                                      <p>What is the purpose of this replacement?</p>
                                      {
                                          STIC_Replacement_PurposeVisibility ?
                                          <>
                                              <div id="provided_identity_instructions" className="hidden_class">
                                                    <p>What is the purpose of this replacement?</p> 
                                              </div>
                                              
                                              
                                          </> : 
                                          null
                                      }
                                      {/* <textarea  id="STIC_Replacement_Purpose" onChange={(e) => {onChange(e)}} value={FormData['STIC_Replacement_Purpose']}  name="STIC_Replacement_Purpose"  onFocus={STIC_Replacement_Purpose_onFocus} onBlur={STIC_Replacement_Purpose_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea> */}
                                      <Editor
                                        value={FormData['STIC_Replacement_Purpose']}
                                        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_Replacement_Purpose']: newText }) }}
                                        onFocus={(e)=>{STIC_Replacement_Purpose_onFocus()}}
                                        onBlur={(e)=>{STIC_Replacement_Purpose_onBlur();onFieldBlur(e)}}                      
                                        name="STIC_Replacement_Purpose"
                                        init={{
                                            selector: "textarea",
                                            browser_spellcheck : true,
                                            placeholder: "What is the purpose of this replacement",
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
                                      {
                                          STIC_Replacement_ReasonVisibility ?
                                          <>
                                              <div id="provided_identity_instructions" className="hidden_class">
                                                    <p>Reasons why replacement is considered more suitable than retaining or modifying the terminated product?</p> 
                                              </div>
                                              
                                              
                                          </> : 
                                          null
                                      }
                                      {/* <textarea  id="STIC_Replacement_Reason" onChange={(e) => {onChange(e)}} value={FormData['STIC_Replacement_Reason']}  name="STIC_Replacement_Reason"  onFocus={STIC_Replacement_Reason_onFocus} onBlur={STIC_Replacement_Reason_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea> */}
                                      <Editor
                                        value={FormData['STIC_Replacement_Reason']}
                                        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_Replacement_Reason']: newText }) }}
                                        onFocus={(e)=>{STIC_Replacement_Reason_onFocus()}}
                                        onBlur={(e)=>{STIC_Replacement_Reason_onBlur();onFieldBlur(e)}}                      
                                        name="STIC_Replacement_Reason"
                                        init={{
                                            selector: "textarea",
                                            browser_spellcheck : true,
                                            placeholder: "Reasons why replacement is considered more suitable than retaining or modifying the terminated product?",
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
                                      {
                                          STIC_Replacement_SuppliersVisibility ?
                                          <>
                                              <div id="provided_identity_instructions" className="hidden_class">
                                                    <p>Suppliers of the product(s) to be replaced?</p> 
                                              </div>
                                              
                                              
                                          </> : 
                                          null
                                      }
                                      {/* <textarea  id="STIC_Replacement_Suppliers" onChange={(e) => {onChange(e)}} value={FormData['STIC_Replacement_Suppliers']}  name="STIC_Replacement_Suppliers"  onFocus={STIC_Replacement_Suppliers_onFocus} onBlur={STIC_Replacement_Suppliers_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea> */}
                                      <Editor
                                        value={FormData['STIC_Replacement_Suppliers']}
                                        onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_Replacement_Suppliers']: newText }) }}
                                        onFocus={(e)=>{STIC_Replacement_Suppliers_onFocus()}}
                                        onBlur={(e)=>{STIC_Replacement_Suppliers_onBlur();onFieldBlur(e)}}                      
                                        name="STIC_Replacement_Suppliers"
                                        init={{
                                            selector: "textarea",
                                            browser_spellcheck : true,
                                            placeholder: "Suppliers of the product(s) to be replaced?",
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
                              <p>Comparison between the product to be replaced (old product) and the recommended product (new product):</p>
                              <p><b>Read the detail required carefully and complete the comparison below. Use 'Not applicable' where an aspect does not apply and explain why not applicable.</b></p>

                                  {/* <br/> */}
                                  <hr/>
                              <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                                <div className="row">
                                    <div className="col-16" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label"><b>Financial Implications of Replacement </b></label>
                                            </div>

                                            <div className="col-4">
                                            <label className="col-form-label"><b>Existing Products</b></label>
                                            </div>

                                            <div className="col-4">
                                                <label className="col-form-label"><b>Replacement Product</b></label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>
                                    <div className="col-16" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label">Difference in fees and charges</label>
                                            </div>

                                            <div className="col-4">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_FnC_Existing" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_FnC_Existing']}  name="STIC_Fin_FnC_Existing"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_FnC_Replacement" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_FnC_Replacement']}  name="STIC_Fin_FnC_Replacement"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>
                                    <div className="col-16" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label">Special terms and conditions, e.g., tracker, endorsements, alarm </label>
                                            </div>

                                            <div className="col-4">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_STnC_Existing" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_STnC_Existing']}  name="STIC_Fin_STnC_Existing"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_STnC_Replacement" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_STnC_Replacement']}  name="STIC_Fin_STnC_Replacement"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>
                                    <div className="col-16" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label">Impact on premium </label>
                                            </div>

                                            <div className="col-4">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_ImpOnPre_Existing" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_ImpOnPre_Existing']}  name="STIC_Fin_ImpOnPre_Existing"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_ImpOnPre_Replacement" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_ImpOnPre_Replacement']}  name="STIC_Fin_ImpOnPre_Replacement"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>
                                    <div className="col-16" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label">Excesses</label>
                                            </div>

                                            <div className="col-4">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_Excesses_Existing" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_Excesses_Existing']}  name="STIC_Fin_Excesses_Existing"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_Excesses_Replacement" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_Excesses_Replacement']}  name="STIC_Fin_Excesses_Replacement"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>
                                    <div className="col-16" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label">Value added benefits, e.g. towing, SOS services,                       no claims bonus</label>
                                            </div>

                                            <div className="col-4">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_VABen_Existing" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_VABen_Existing']}  name="STIC_Fin_VABen_Existing"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_VABen_Replacement" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_VABen_Replacement']}  name="STIC_Fin_VABen_Replacement"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>
                                    <div className="col-16" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label className="col-form-label">Difference in advisor commission </label>
                                            </div>

                                            <div className="col-4">
                                                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_AdvisorComm_Existing" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_AdvisorComm_Existing']}  name="STIC_Fin_AdvisorComm_Existing"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                              <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fin_AdvisorComm_Replacement" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fin_AdvisorComm_Replacement']}  name="STIC_Fin_AdvisorComm_Replacement"  className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                              <br/>
                              <hr/>
                            <h6 align="center" style={{ color: "#14848A"}}>PRODUCT COMPARISON</h6>
                            <hr/>

                            <div className='table-responsive'>
                            <div class="container-fluid">
                              <table id="productSizes" class="table table-bordered border dark">
                              <tbody>
                                      {/* <tr class="d-flex">
                                          <td class="col-2"></td>
                                          <td class="col-2"></td>
                                          <td class="col-2"></td>
                                          <td class="col-3">Existing Product</td>
                                          <td class="col-3">Replacement Product</td>
                                      </tr> */}
                                      <tr className="d-flex">
              
                                          <td className="col-6" style={{width:"590px"}}></td>
                                          <td className="col-2" align="center" style={{width:"260px"}}>
                                            <b>Existing Product</b>
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_ProdComp_Existing_Company" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_Existing_Company']}  name="STIC_ProdComp_Existing_Company"  className="form-control" placeholder="Company"  aria-describedby="" />
                                            
                                          </td>
                                          <td className="col-2" align="center" style={{width:"260px"}}>
                                            <b>Replacement Product</b>
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_ProdComp_Replacement_Company" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_Replacement_Company']}  name="STIC_ProdComp_Replacement_Company"  className="form-control" placeholder="Company"  aria-describedby="" />
                                            
                                          </td>
                                        
                                      </tr>
                                      <tr className="d-flex">
                                          
                                          <td className="col-6" style={{width:"590px"}}></td>
                                          <td className="col-2" align="center" style={{width:"260px"}}>
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_ProdComp_Existing_Provider" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_Existing_Provider']}  name="STIC_ProdComp_Existing_Provider"  className="form-control" placeholder="Provider"  aria-describedby="" />
                                            
                                          </td>
                                          <td className="col-2" align="center" style={{width:"260px"}}>
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_ProdComp_Replacement_Provider" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_Replacement_Provider']}  name="STIC_ProdComp_Replacement_Provider"  className="form-control" placeholder="Provider"  aria-describedby="" />
                                            
                                          </td>
                                        
                                      </tr>
                                      <tr className="d-flex">
                                          
                                          <td className="col-6" style={{width:"590px"}}></td>
                                          <td className="col-2" align="center" style={{width:"260px"}}>
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIC_ProdComp_Existing_Product" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_Existing_Product']}  name="STIC_ProdComp_Existing_Product"  className="form-control" placeholder="Product"  aria-describedby="" />
                                            
                                          </td>
                                          <td className="col-2" align="center" style={{width:"260px"}}>
                                            <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIC_ProdComp_Replacement_Product" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_Replacement_Product']}  name="STIC_ProdComp_Replacement_Product"  className="form-control" placeholder="Product"  aria-describedby="" />
                                            
                                          </td>
                                        
                                      </tr>
                                  
                                  
                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}><b>Cover</b></td>
                                          <td class="col-2" style={{width:"130px"}}><b>Recommended</b></td>
                                          <td class="col-2" style={{width:"130px"}}><b>Accepted</b></td>
                                          <td class="col-2" style={{width:"130px"}}><b>Cover amount</b></td>
                                          <td class="col-2" style={{width:"130px"}}><b>Premium</b></td>
                                          <td class="col-2" style={{width:"130px"}}><b>Excess</b></td>
                                          <td class="col-2" style={{width:"130px"}}><b>Premium</b></td>
                                          <td class="col-2" style={{width:"130px"}}><b>Excess</b></td>
                                        
                                      </tr>

                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Fire</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended1"] === 1 ? true : false} name="STIC_ProdComp_Recommended1" onChange={(e)=>{FormData["STIC_ProdComp_Recommended1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted1"] === 1 ? true : false} name="STIC_ProdComp_Accepted1" onChange={(e)=>{FormData["STIC_ProdComp_Accepted1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount1" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount1"]}  name="STIC_ProdComp_CoverAmount1"  className="form-control" placeholder="0.00"  aria-describedby="" />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium1" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium1"]}  name="STIC_ProdComp_ExistP_Premium1"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess1" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess1"]}  name="STIC_ProdComp_ExistP_Excess1"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium1" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium1"]}  name="STIC_ProdComp_RecommP_Premium1"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess1" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess1"]}  name="STIC_ProdComp_RecommP_Excess1"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Buildings combined</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended2"] === 1 ? true : false} name="STIC_ProdComp_Recommended2" onChange={(e)=>{FormData["STIC_ProdComp_Recommended2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted2"] === 1 ? true : false} name="STIC_ProdComp_Accepted2" onChange={(e)=>{FormData["STIC_ProdComp_Accepted2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount2" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount2"]}  name="STIC_ProdComp_CoverAmount2"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium2" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium2"]}  name="STIC_ProdComp_ExistP_Premium2"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess2" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess2"]}  name="STIC_ProdComp_ExistP_Excess2"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium2" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium2"]}  name="STIC_ProdComp_RecommP_Premium2"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess2" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess2"]}  name="STIC_ProdComp_RecommP_Excess2"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Office contents</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended3"] === 1 ? true : false} name="STIC_ProdComp_Recommended3" onChange={(e)=>{FormData["STIC_ProdComp_Recommended3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted3"] === 1 ? true : false} name="STIC_ProdComp_Accepted3" onChange={(e)=>{FormData["STIC_ProdComp_Accepted3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount3" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount3"]}  name="STIC_ProdComp_CoverAmount3"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium3" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium3"]}  name="STIC_ProdComp_ExistP_Premium3"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess3" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess3"]}  name="STIC_ProdComp_ExistP_Excess3"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium3" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium3"]}  name="STIC_ProdComp_RecommP_Premium3"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess3" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess3"]}  name="STIC_ProdComp_RecommP_Excess3"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Business Interruption</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended4"] === 1 ? true : false} name="STIC_ProdComp_Recommended4" onChange={(e)=>{FormData["STIC_ProdComp_Recommended4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted4"] === 1 ? true : false} name="STIC_ProdComp_Accepted4" onChange={(e)=>{FormData["STIC_ProdComp_Accepted4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount4" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount4"]}  name="STIC_ProdComp_CoverAmount4"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium4" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium4"]}  name="STIC_ProdComp_ExistP_Premium4"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess4" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess4"]}  name="STIC_ProdComp_ExistP_Excess4"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium4" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium4"]}  name="STIC_ProdComp_RecommP_Premium4"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess4" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess4"]}  name="STIC_ProdComp_RecommP_Excess4"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Machinery Breakdown</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended5"] === 1 ? true : false} name="STIC_ProdComp_Recommended5" onChange={(e)=>{FormData["STIC_ProdComp_Recommended5"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted5"] === 1 ? true : false} name="STIC_ProdComp_Accepted5" onChange={(e)=>{FormData["STIC_ProdComp_Accepted5"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount5" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount5"]}  name="STIC_ProdComp_CoverAmount5"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium5" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium5"]}  name="STIC_ProdComp_ExistP_Premium5"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess5" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess5"]}  name="STIC_ProdComp_ExistP_Excess5"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium5" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium5"]}  name="STIC_ProdComp_RecommP_Premium5"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess5" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess5"]}  name="STIC_ProdComp_RecommP_Excess5"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Machinery breakdown:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loss of profits</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended6"] === 1 ? true : false} name="STIC_ProdComp_Recommended6" onChange={(e)=>{FormData["STIC_ProdComp_Recommended6"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted6"] === 1 ? true : false} name="STIC_ProdComp_Accepted6" onChange={(e)=>{FormData["STIC_ProdComp_Accepted6"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount6" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount6"]}  name="STIC_ProdComp_CoverAmount6"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium6" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium6"]}  name="STIC_ProdComp_ExistP_Premium6"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess6" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess6"]}  name="STIC_ProdComp_ExistP_Excess6"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium6" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium6"]}  name="STIC_ProdComp_RecommP_Premium6"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess6" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess6"]}  name="STIC_ProdComp_RecommP_Excess6"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Deterioration of stock</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended7"] === 1 ? true : false} name="STIC_ProdComp_Recommended7" onChange={(e)=>{FormData["STIC_ProdComp_Recommended7"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted7"] === 1 ? true : false} name="STIC_ProdComp_Accepted7" onChange={(e)=>{FormData["STIC_ProdComp_Accepted7"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount7" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount7"]}  name="STIC_ProdComp_CoverAmount7"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium7" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium7"]}  name="STIC_ProdComp_ExistP_Premium7"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess7" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess7"]}  name="STIC_ProdComp_ExistP_Excess7"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium7" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium7"]}  name="STIC_ProdComp_RecommP_Premium7"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess7" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess7"]}  name="STIC_ProdComp_RecommP_Excess7"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Accounts receiveable</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended8"] === 1 ? true : false} name="STIC_ProdComp_Recommended8" onChange={(e)=>{FormData["STIC_ProdComp_Recommended8"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted8"] === 1 ? true : false} name="STIC_ProdComp_Accepted8" onChange={(e)=>{FormData["STIC_ProdComp_Accepted8"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount8" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount8"]}  name="STIC_ProdComp_CoverAmount8"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium8" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium8"]}  name="STIC_ProdComp_ExistP_Premium8"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess8" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess8"]}  name="STIC_ProdComp_ExistP_Excess8"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium8" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium8"]}  name="STIC_ProdComp_RecommP_Premium8"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess8" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess8"]}  name="STIC_ProdComp_RecommP_Excess8"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Theft</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended9"] === 1 ? true : false} name="STIC_ProdComp_Recommended9" onChange={(e)=>{FormData["STIC_ProdComp_Recommended9"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted9"] === 1 ? true : false} name="STIC_ProdComp_Accepted9" onChange={(e)=>{FormData["STIC_ProdComp_Accepted9"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount9" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount9"]}  name="STIC_ProdComp_CoverAmount9"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium9" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium9"]}  name="STIC_ProdComp_ExistP_Premium9"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess9" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess9"]}  name="STIC_ProdComp_ExistP_Excess9"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium9" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium9"]}  name="STIC_ProdComp_RecommP_Premium9"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess9" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess9"]}  name="STIC_ProdComp_RecommP_Excess9"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Money</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended10"] === 1 ? true : false} name="STIC_ProdComp_Recommended10" onChange={(e)=>{FormData["STIC_ProdComp_Recommended10"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted10"] === 1 ? true : false} name="STIC_ProdComp_Accepted10" onChange={(e)=>{FormData["STIC_ProdComp_Accepted10"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount10" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount10"]}  name="STIC_ProdComp_CoverAmount10"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium10" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium10"]}  name="STIC_ProdComp_ExistP_Premium10"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess10" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess10"]}  name="STIC_ProdComp_ExistP_Excess10"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium10" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium10"]}  name="STIC_ProdComp_RecommP_Premium10"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess10" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess10"]}  name="STIC_ProdComp_RecommP_Excess10"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Glass</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended11"] === 1 ? true : false} name="STIC_ProdComp_Recommended11" onChange={(e)=>{FormData["STIC_ProdComp_Recommended11"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted11"] === 1 ? true : false} name="STIC_ProdComp_Accepted11" onChange={(e)=>{FormData["STIC_ProdComp_Accepted11"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount11" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount11"]}  name="STIC_ProdComp_CoverAmount11"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium11" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium11"]}  name="STIC_ProdComp_ExistP_Premium11"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess11" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess11"]}  name="STIC_ProdComp_ExistP_Excess11"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium11" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium11"]}  name="STIC_ProdComp_RecommP_Premium11"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess11" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess11"]}  name="STIC_ProdComp_RecommP_Excess11"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Fidelity gurantee</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended12"] === 1 ? true : false} name="STIC_ProdComp_Recommended12" onChange={(e)=>{FormData["STIC_ProdComp_Recommended12"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted12"] === 1 ? true : false} name="STIC_ProdComp_Accepted12" onChange={(e)=>{FormData["STIC_ProdComp_Accepted12"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount12" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount12"]}  name="STIC_ProdComp_CoverAmount12"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium12" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium12"]}  name="STIC_ProdComp_ExistP_Premium12"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess12" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess12"]}  name="STIC_ProdComp_ExistP_Excess12"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium12" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium12"]}  name="STIC_ProdComp_RecommP_Premium12"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess12" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess12"]}  name="STIC_ProdComp_RecommP_Excess12"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Goods in transit</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended13"] === 1 ? true : false} name="STIC_ProdComp_Recommended13" onChange={(e)=>{FormData["STIC_ProdComp_Recommended13"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted13"] === 1 ? true : false} name="STIC_ProdComp_Accepted13" onChange={(e)=>{FormData["STIC_ProdComp_Accepted13"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount13" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount13"]}  name="STIC_ProdComp_CoverAmount13"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium13" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium13"]}  name="STIC_ProdComp_ExistP_Premium13"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess13" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess13"]}  name="STIC_ProdComp_ExistP_Excess13"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium13" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium13"]}  name="STIC_ProdComp_RecommP_Premium13"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess13" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess13"]}  name="STIC_ProdComp_RecommP_Excess13"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Business all risks</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended14"] === 1 ? true : false} name="STIC_ProdComp_Recommended14" onChange={(e)=>{FormData["STIC_ProdComp_Recommended14"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted14"] === 1 ? true : false} name="STIC_ProdComp_Accepted14" onChange={(e)=>{FormData["STIC_ProdComp_Accepted14"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount14" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount14"]}  name="STIC_ProdComp_CoverAmount14"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium14" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium14"]}  name="STIC_ProdComp_ExistP_Premium14"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess14" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess14"]}  name="STIC_ProdComp_ExistP_Excess14"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium14" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium14"]}  name="STIC_ProdComp_RecommP_Premium14"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess14" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess14"]}  name="STIC_ProdComp_RecommP_Excess14"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Accidental damage</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended15"] === 1 ? true : false} name="STIC_ProdComp_Recommended15" onChange={(e)=>{FormData["STIC_ProdComp_Recommended15"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted15"] === 1 ? true : false} name="STIC_ProdComp_Accepted15" onChange={(e)=>{FormData["STIC_ProdComp_Accepted15"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount15" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount15"]}  name="STIC_ProdComp_CoverAmount15"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium15" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium15"]}  name="STIC_ProdComp_ExistP_Premium15"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess15" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess15"]}  name="STIC_ProdComp_ExistP_Excess15"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium15" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium15"]}  name="STIC_ProdComp_RecommP_Premium15"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess15" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess15"]}  name="STIC_ProdComp_RecommP_Excess15"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Public liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended16"] === 1 ? true : false} name="STIC_ProdComp_Recommended16" onChange={(e)=>{FormData["STIC_ProdComp_Recommended16"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted16"] === 1 ? true : false} name="STIC_ProdComp_Accepted16" onChange={(e)=>{FormData["STIC_ProdComp_Accepted16"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount16" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount16"]}  name="STIC_ProdComp_CoverAmount16"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium16" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium16"]}  name="STIC_ProdComp_ExistP_Premium16"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess16" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess16"]}  name="STIC_ProdComp_ExistP_Excess16"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium16" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium16"]}  name="STIC_ProdComp_RecommP_Premium16"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess16" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess16"]}  name="STIC_ProdComp_RecommP_Excess16"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Top up personal Liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended17"] === 1 ? true : false} name="STIC_ProdComp_Recommended17" onChange={(e)=>{FormData["STIC_ProdComp_Recommended17"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted17"] === 1 ? true : false} name="STIC_ProdComp_Accepted17" onChange={(e)=>{FormData["STIC_ProdComp_Accepted17"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount17" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount17"]}  name="STIC_ProdComp_CoverAmount17"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium17" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium17"]}  name="STIC_ProdComp_ExistP_Premium17"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess17" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess17"]}  name="STIC_ProdComp_ExistP_Excess17"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium17" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium17"]}  name="STIC_ProdComp_RecommP_Premium17"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess17" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess17"]}  name="STIC_ProdComp_RecommP_Excess17"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Commercial umberella &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended18"] === 1 ? true : false} name="STIC_ProdComp_Recommended18" onChange={(e)=>{FormData["STIC_ProdComp_Recommended18"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted18"] === 1 ? true : false} name="STIC_ProdComp_Accepted18" onChange={(e)=>{FormData["STIC_ProdComp_Accepted18"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount18" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount18"]}  name="STIC_ProdComp_CoverAmount18"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium18" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium18"]}  name="STIC_ProdComp_ExistP_Premium18"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess18" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess18"]}  name="STIC_ProdComp_ExistP_Excess18"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium18" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium18"]}  name="STIC_ProdComp_RecommP_Premium18"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess18" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess18"]}  name="STIC_ProdComp_RecommP_Excess18"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Products gurantee</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended19"] === 1 ? true : false} name="STIC_ProdComp_Recommended19" onChange={(e)=>{FormData["STIC_ProdComp_Recommended19"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted19"] === 1 ? true : false} name="STIC_ProdComp_Accepted19" onChange={(e)=>{FormData["STIC_ProdComp_Accepted19"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount19" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount19"]}  name="STIC_ProdComp_CoverAmount19"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium19" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium19"]}  name="STIC_ProdComp_ExistP_Premium19"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess19" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess19"]}  name="STIC_ProdComp_ExistP_Excess19"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium19" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium19"]}  name="STIC_ProdComp_RecommP_Premium19"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess19" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess19"]}  name="STIC_ProdComp_RecommP_Excess19"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Cyber Risks</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended20"] === 1 ? true : false} name="STIC_ProdComp_Recommended20" onChange={(e)=>{FormData["STIC_ProdComp_Recommended20"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted20"] === 1 ? true : false} name="STIC_ProdComp_Accepted20" onChange={(e)=>{FormData["STIC_ProdComp_Accepted20"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount20" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount20"]}  name="STIC_ProdComp_CoverAmount20"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium20" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium20"]}  name="STIC_ProdComp_ExistP_Premium20"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess20" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess20"]}  name="STIC_ProdComp_ExistP_Excess20"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium20" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium20"]}  name="STIC_ProdComp_RecommP_Premium20"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess20" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess20"]}  name="STIC_ProdComp_RecommP_Excess20"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Director and officer's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended21"] === 1 ? true : false} name="STIC_ProdComp_Recommended21" onChange={(e)=>{FormData["STIC_ProdComp_Recommended21"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted21"] === 1 ? true : false} name="STIC_ProdComp_Accepted21" onChange={(e)=>{FormData["STIC_ProdComp_Accepted21"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount21" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount21"]}  name="STIC_ProdComp_CoverAmount21"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium21" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium21"]}  name="STIC_ProdComp_ExistP_Premium21"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess21" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess21"]}  name="STIC_ProdComp_ExistP_Excess21"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium21" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium21"]}  name="STIC_ProdComp_RecommP_Premium21"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess21" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess21"]}  name="STIC_ProdComp_RecommP_Excess21"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Employer practices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended22"] === 1 ? true : false} name="STIC_ProdComp_Recommended22" onChange={(e)=>{FormData["STIC_ProdComp_Recommended22"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted22"] === 1 ? true : false} name="STIC_ProdComp_Accepted22" onChange={(e)=>{FormData["STIC_ProdComp_Accepted22"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount22" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount22"]}  name="STIC_ProdComp_CoverAmount22"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium22" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium22"]}  name="STIC_ProdComp_ExistP_Premium22"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess22" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess22"]}  name="STIC_ProdComp_ExistP_Excess22"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium22" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium22"]}  name="STIC_ProdComp_RecommP_Premium22"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess22" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess22"]}  name="STIC_ProdComp_RecommP_Excess22"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product inefficacy</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended23"] === 1 ? true : false} name="STIC_ProdComp_Recommended23" onChange={(e)=>{FormData["STIC_ProdComp_Recommended23"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted23"] === 1 ? true : false} name="STIC_ProdComp_Accepted23" onChange={(e)=>{FormData["STIC_ProdComp_Accepted23"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount23" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount23"]}  name="STIC_ProdComp_CoverAmount23"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium23" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium23"]}  name="STIC_ProdComp_ExistP_Premium23"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess23" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess23"]}  name="STIC_ProdComp_ExistP_Excess23"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium23" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium23"]}  name="STIC_ProdComp_RecommP_Premium23"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess23" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess23"]}  name="STIC_ProdComp_RecommP_Excess23"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product guarantee</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended24"] === 1 ? true : false} name="STIC_ProdComp_Recommended24" onChange={(e)=>{FormData["STIC_ProdComp_Recommended24"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted24"] === 1 ? true : false} name="STIC_ProdComp_Accepted24" onChange={(e)=>{FormData["STIC_ProdComp_Accepted24"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount24" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount24"]}  name="STIC_ProdComp_CoverAmount24"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium24" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium24"]}  name="STIC_ProdComp_ExistP_Premium24"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess24" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess24"]}  name="STIC_ProdComp_ExistP_Excess24"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium24" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium24"]}  name="STIC_ProdComp_RecommP_Premium24"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess24" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess24"]}  name="STIC_ProdComp_RecommP_Excess24"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Warehousemen's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended25"] === 1 ? true : false} name="STIC_ProdComp_Recommended25" onChange={(e)=>{FormData["STIC_ProdComp_Recommended25"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted25"] === 1 ? true : false} name="STIC_ProdComp_Accepted25" onChange={(e)=>{FormData["STIC_ProdComp_Accepted25"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount25" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount25"]}  name="STIC_ProdComp_CoverAmount25"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium25" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium25"]}  name="STIC_ProdComp_ExistP_Premium25"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess25" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess25"]}  name="STIC_ProdComp_ExistP_Excess25"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium25" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium25"]}  name="STIC_ProdComp_RecommP_Premium25"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess25" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess25"]}  name="STIC_ProdComp_RecommP_Excess25"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Employer liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended26"] === 1 ? true : false} name="STIC_ProdComp_Recommended26" onChange={(e)=>{FormData["STIC_ProdComp_Recommended26"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted26"] === 1 ? true : false} name="STIC_ProdComp_Accepted26" onChange={(e)=>{FormData["STIC_ProdComp_Accepted26"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount26" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount26"]}  name="STIC_ProdComp_CoverAmount26"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium26" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium26"]}  name="STIC_ProdComp_ExistP_Premium26"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess26" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess26"]}  name="STIC_ProdComp_ExistP_Excess26"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium26" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium26"]}  name="STIC_ProdComp_RecommP_Premium26"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess26" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess26"]}  name="STIC_ProdComp_RecommP_Excess26"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Stated benefits</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended27"] === 1 ? true : false} name="STIC_ProdComp_Recommended27" onChange={(e)=>{FormData["STIC_ProdComp_Recommended27"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted27"] === 1 ? true : false} name="STIC_ProdComp_Accepted27" onChange={(e)=>{FormData["STIC_ProdComp_Accepted27"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount27" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount27"]}  name="STIC_ProdComp_CoverAmount27"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium27" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium27"]}  name="STIC_ProdComp_ExistP_Premium27"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess27" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess27"]}  name="STIC_ProdComp_ExistP_Excess27"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium27" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium27"]}  name="STIC_ProdComp_RecommP_Premium27"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess27" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess27"]}  name="STIC_ProdComp_RecommP_Excess27"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Personal and group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; accident</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended28"] === 1 ? true : false} name="STIC_ProdComp_Recommended28" onChange={(e)=>{FormData["STIC_ProdComp_Recommended28"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted28"] === 1 ? true : false} name="STIC_ProdComp_Accepted28" onChange={(e)=>{FormData["STIC_ProdComp_Accepted28"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount28" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount28"]}  name="STIC_ProdComp_CoverAmount28"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium28" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium28"]}  name="STIC_ProdComp_ExistP_Premium28"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess28" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess28"]}  name="STIC_ProdComp_ExistP_Excess28"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium28" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium28"]}  name="STIC_ProdComp_RecommP_Premium28"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess28" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess28"]}  name="STIC_ProdComp_RecommP_Excess28"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Group personal accident</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended29"] === 1 ? true : false} name="STIC_ProdComp_Recommended29" onChange={(e)=>{FormData["STIC_ProdComp_Recommended29"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted29"] === 1 ? true : false} name="STIC_ProdComp_Accepted29" onChange={(e)=>{FormData["STIC_ProdComp_Accepted29"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount29" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount29"]}  name="STIC_ProdComp_CoverAmount29"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium29" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium29"]}  name="STIC_ProdComp_ExistP_Premium29"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess29" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess29"]}  name="STIC_ProdComp_ExistP_Excess29"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium29" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium29"]}  name="STIC_ProdComp_RecommP_Premium29"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess29" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess29"]}  name="STIC_ProdComp_RecommP_Excess29"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Motor</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended30"] === 1 ? true : false} name="STIC_ProdComp_Recommended30" onChange={(e)=>{FormData["STIC_ProdComp_Recommended30"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted30"] === 1 ? true : false} name="STIC_ProdComp_Accepted30" onChange={(e)=>{FormData["STIC_ProdComp_Accepted30"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount30" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount30"]}  name="STIC_ProdComp_CoverAmount30"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium30" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium30"]}  name="STIC_ProdComp_ExistP_Premium30"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess30" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess30"]}  name="STIC_ProdComp_ExistP_Excess30"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium30" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium30"]}  name="STIC_ProdComp_RecommP_Premium30"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess30" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess30"]}  name="STIC_ProdComp_RecommP_Excess30"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor car hire extension</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended31"] === 1 ? true : false} name="STIC_ProdComp_Recommended31" onChange={(e)=>{FormData["STIC_ProdComp_Recommended31"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted31"] === 1 ? true : false} name="STIC_ProdComp_Accepted31" onChange={(e)=>{FormData["STIC_ProdComp_Accepted31"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount31" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount31"]}  name="STIC_ProdComp_CoverAmount31"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium31" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium31"]}  name="STIC_ProdComp_ExistP_Premium31"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess31" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess31"]}  name="STIC_ProdComp_ExistP_Excess31"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium31" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium31"]}  name="STIC_ProdComp_RecommP_Premium31"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess31" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess31"]}  name="STIC_ProdComp_RecommP_Excess31"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor traders: internal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risk</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended32"] === 1 ? true : false} name="STIC_ProdComp_Recommended32" onChange={(e)=>{FormData["STIC_ProdComp_Recommended32"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted32"] === 1 ? true : false} name="STIC_ProdComp_Accepted32" onChange={(e)=>{FormData["STIC_ProdComp_Accepted32"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount32" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount32"]}  name="STIC_ProdComp_CoverAmount32"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium32" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium32"]}  name="STIC_ProdComp_ExistP_Premium32"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess32" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess32"]}  name="STIC_ProdComp_ExistP_Excess32"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium32" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium32"]}  name="STIC_ProdComp_RecommP_Premium32"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess32" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess32"]}  name="STIC_ProdComp_RecommP_Excess32"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor traders: internal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risk</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended33"] === 1 ? true : false} name="STIC_ProdComp_Recommended33" onChange={(e)=>{FormData["STIC_ProdComp_Recommended33"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted33"] === 1 ? true : false} name="STIC_ProdComp_Accepted33" onChange={(e)=>{FormData["STIC_ProdComp_Accepted33"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount33" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount33"]}  name="STIC_ProdComp_CoverAmount33"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium33" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium33"]}  name="STIC_ProdComp_ExistP_Premium33"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess33" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess33"]}  name="STIC_ProdComp_ExistP_Excess33"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium33" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium33"]}  name="STIC_ProdComp_RecommP_Premium33"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess33" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess33"]}  name="STIC_ProdComp_RecommP_Excess33"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Electronic equipment</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended34"] === 1 ? true : false} name="STIC_ProdComp_Recommended34" onChange={(e)=>{FormData["STIC_ProdComp_Recommended34"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted34"] === 1 ? true : false} name="STIC_ProdComp_Accepted34" onChange={(e)=>{FormData["STIC_ProdComp_Accepted34"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount34" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount34"]}  name="STIC_ProdComp_CoverAmount34"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium34" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium34"]}  name="STIC_ProdComp_ExistP_Premium34"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess34" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess34"]}  name="STIC_ProdComp_ExistP_Excess34"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium34" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium34"]}  name="STIC_ProdComp_RecommP_Premium34"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess34" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess34"]}  name="STIC_ProdComp_RecommP_Excess34"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>
                                     

                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>House owner</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended35"] === 1 ? true : false} name="STIC_ProdComp_Recommended35" onChange={(e)=>{FormData["STIC_ProdComp_Recommended35"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted35"] === 1 ? true : false} name="STIC_ProdComp_Accepted35" onChange={(e)=>{FormData["STIC_ProdComp_Accepted35"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount35" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount35"]}  name="STIC_ProdComp_CoverAmount35"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium35" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium35"]}  name="STIC_ProdComp_ExistP_Premium35"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess35" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess35"]}  name="STIC_ProdComp_ExistP_Excess35"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium35" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium35"]}  name="STIC_ProdComp_RecommP_Premium35"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess35" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess35"]}  name="STIC_ProdComp_RecommP_Excess35"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>House holders</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended44"] === 1 ? true : false} name="STIC_ProdComp_Recommended44" onChange={(e)=>{FormData["STIC_ProdComp_Recommended44"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted44"] === 1 ? true : false} name="STIC_ProdComp_Accepted44" onChange={(e)=>{FormData["STIC_ProdComp_Accepted44"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount44" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount44"]}  name="STIC_ProdComp_CoverAmount44"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium44" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium44"]}  name="STIC_ProdComp_ExistP_Premium44"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess44" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess44"]}  name="STIC_ProdComp_ExistP_Excess44"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium44" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium44"]}  name="STIC_ProdComp_RecommP_Premium44"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess44" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess44"]}  name="STIC_ProdComp_RecommP_Excess44"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Professional indenmity</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended36"] === 1 ? true : false} name="STIC_ProdComp_Recommended36" onChange={(e)=>{FormData["STIC_ProdComp_Recommended36"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted36"] === 1 ? true : false} name="STIC_ProdComp_Accepted36" onChange={(e)=>{FormData["STIC_ProdComp_Accepted36"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount36" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount36"]}  name="STIC_ProdComp_CoverAmount36"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium36" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium36"]}  name="STIC_ProdComp_ExistP_Premium36"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess36" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess36"]}  name="STIC_ProdComp_ExistP_Excess36"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium36" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium36"]}  name="STIC_ProdComp_RecommP_Premium36"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess36" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess36"]}  name="STIC_ProdComp_RecommP_Excess36"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Marine/hull</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended37"] === 1 ? true : false} name="STIC_ProdComp_Recommended37" onChange={(e)=>{FormData["STIC_ProdComp_Recommended37"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted37"] === 1 ? true : false} name="STIC_ProdComp_Accepted37" onChange={(e)=>{FormData["STIC_ProdComp_Accepted37"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount37" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount37"]}  name="STIC_ProdComp_CoverAmount37"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium37" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium37"]}  name="STIC_ProdComp_ExistP_Premium37"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess37" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess37"]}  name="STIC_ProdComp_ExistP_Excess37"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium37" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium37"]}  name="STIC_ProdComp_RecommP_Premium37"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess37" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess37"]}  name="STIC_ProdComp_RecommP_Excess37"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>contractors all risks:construction and engineering</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended38"] === 1 ? true : false} name="STIC_ProdComp_Recommended38" onChange={(e)=>{FormData["STIC_ProdComp_Recommended38"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted38"] === 1 ? true : false} name="STIC_ProdComp_Accepted38" onChange={(e)=>{FormData["STIC_ProdComp_Accepted38"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount38" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount38"]}  name="STIC_ProdComp_CoverAmount38"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium38" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium38"]}  name="STIC_ProdComp_ExistP_Premium38"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess38" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess38"]}  name="STIC_ProdComp_ExistP_Excess38"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium38" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium38"]}  name="STIC_ProdComp_RecommP_Premium38"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess38" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess38"]}  name="STIC_ProdComp_RecommP_Excess38"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Body corporate</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended39"] === 1 ? true : false} name="STIC_ProdComp_Recommended39" onChange={(e)=>{FormData["STIC_ProdComp_Recommended39"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted39"] === 1 ? true : false} name="STIC_ProdComp_Accepted39" onChange={(e)=>{FormData["STIC_ProdComp_Accepted39"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount39" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount39"]}  name="STIC_ProdComp_CoverAmount39"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium39" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium39"]}  name="STIC_ProdComp_ExistP_Premium39"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess39" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess39"]}  name="STIC_ProdComp_ExistP_Excess39"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium39" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium39"]}  name="STIC_ProdComp_RecommP_Premium39"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess39" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess39"]}  name="STIC_ProdComp_RecommP_Excess39"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Aviation</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended40"] === 1 ? true : false} name="STIC_ProdComp_Recommended40" onChange={(e)=>{FormData["STIC_ProdComp_Recommended40"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted40"] === 1 ? true : false} name="STIC_ProdComp_Accepted40" onChange={(e)=>{FormData["STIC_ProdComp_Accepted40"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount40" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount40"]}  name="STIC_ProdComp_CoverAmount40"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium40" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium40"]}  name="STIC_ProdComp_ExistP_Premium40"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess40" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess40"]}  name="STIC_ProdComp_ExistP_Excess40"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium40" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium40"]}  name="STIC_ProdComp_RecommP_Premium40"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess40" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess40"]}  name="STIC_ProdComp_RecommP_Excess40"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Travel insurance</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended41"] === 1 ? true : false} name="STIC_ProdComp_Recommended41" onChange={(e)=>{FormData["STIC_ProdComp_Recommended41"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted41"] === 1 ? true : false} name="STIC_ProdComp_Accepted41" onChange={(e)=>{FormData["STIC_ProdComp_Accepted41"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount41" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount41"]}  name="STIC_ProdComp_CoverAmount41"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium41" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium41"]}  name="STIC_ProdComp_ExistP_Premium41"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess41" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess41"]}  name="STIC_ProdComp_ExistP_Excess41"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium41" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium41"]}  name="STIC_ProdComp_RecommP_Premium41"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess41" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess41"]}  name="STIC_ProdComp_RecommP_Excess41"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Sasria</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended42"] === 1 ? true : false} name="STIC_ProdComp_Recommended42" onChange={(e)=>{FormData["STIC_ProdComp_Recommended42"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted42"] === 1 ? true : false} name="STIC_ProdComp_Accepted42" onChange={(e)=>{FormData["STIC_ProdComp_Accepted42"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount42" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount42"]}  name="STIC_ProdComp_CoverAmount42"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium42" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium42"]}  name="STIC_ProdComp_ExistP_Premium42"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess42" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess42"]}  name="STIC_ProdComp_ExistP_Excess42"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium42" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium42"]}  name="STIC_ProdComp_RecommP_Premium42"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess42" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess42"]}  name="STIC_ProdComp_RecommP_Excess42"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Legal fees</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Recommended43"] === 1 ? true : false} name="STIC_ProdComp_Recommended43" onChange={(e)=>{FormData["STIC_ProdComp_Recommended43"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_ProdComp_Accepted43"] === 1 ? true : false} name="STIC_ProdComp_Accepted43" onChange={(e)=>{FormData["STIC_ProdComp_Accepted43"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}} align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_CoverAmount43" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_CoverAmount43"]}  name="STIC_ProdComp_CoverAmount43"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Premium43" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Premium43"]}  name="STIC_ProdComp_ExistP_Premium43"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_ExistP_Excess43" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_ExistP_Excess43"]}  name="STIC_ProdComp_ExistP_Excess43"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Premium43" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Premium43"]}  name="STIC_ProdComp_RecommP_Premium43"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_RecommP_Excess43" onChange={(e) => {onChange(e)}} value={FormData["STIC_ProdComp_RecommP_Excess43"]}  name="STIC_ProdComp_RecommP_Excess43"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>
                                        
                                      </tr>
                                        
                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Fees and charges</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_FeeNCharges" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_FeeNCharges']}  name="STIC_ProdComp_FeeNCharges"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                      </tr>  

                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Commissions</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_Commission" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_Commission']}  name="STIC_ProdComp_Commission"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                      </tr> 

                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Total premium</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                            <div className="input-group">
                                              <span className="input-group-text">R</span>
                                              <input onBlur={(e)=>{onFieldBlur(e)}} type="number" spellCheck="true" id="STIC_ProdComp_TotalPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_ProdComp_TotalPremium']}  name="STIC_ProdComp_TotalPremium"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                                            </div>
                                          </td>

                                      </tr>   
                                    
                                  </tbody>
                              </table>
                              </div>
                            </div>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Insurable interest:</b></div>
                              <p>The Insured must have an insurable interest in any item insured under this policy at the date of the event giving rise to a claim. If the Insured's insurable interest in an insured item is an interest other than as an owner or a good-faith possessor of the goods (in terms of a credit agreement or else) who bears the risk of loss, the Insured must advise the Company of the nature and extent of the insurable interest before the cover commences. The cover for any such item will start only when the Company has given written confirmation and agreed to insure the property. Should the nature or extent of the insurable interest in any item insured under this policy change, the Insured must notify the Company immediately in writing of such change. Failure to do so may entitle the Company to reject the claim if the Insured's insurable interest was not agreed to by the Company.</p>
                              {/* <br/> */}

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Average:</b></div>
                              <p>Policies of insurance covering material property are subject to average. This means that you could recover the full amount of an insured loss only if your sum insured represents the full value of the property covered. If the amounts insured are less than the full value at the time of the loss, you can recover only a proportionate amount of the loss. If there are several items of property insured, the average will be applied separately to each item. Consequently, sums insured should always be maintained at adequate level.</p>
                              {/* <br/> */}

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Reinstatement value conditions:</b></div>
                              <p>Where cover is subject to these conditions, the basis upon which the amount payable is calculated should be the cost of replacement or reinstatement by similar property or repair to a condition substantially the same, but not better or more extensive than its condition when NEW.  </p>
                              <p>It is therefore essential that in all instances where these conditions apply, the sum insured must be representative of the actual NEW INSTALLED REPLACEMENT VALUE at the time of reinstatement, and must cater for: </p>
                              <ul>
                                <li>All leased, hired or rented assets which you are responsible to insure</li>
                                <li>Labour, installation, engineering, project management and all associated costs</li>
                                <li>Peripheral/associated equipment and costs such as cabling, trunking, etc.</li>
                                <li>Inflation during the time it will take to reinstate/rebuild/replace</li>
                                <li>Currency fluctuations, exchange rate duties, taxes, surcharges, and all associated costs</li>
                                <li>Trends and other fluctuations in value</li>
                                <li>Value-added tax</li>
                              </ul>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Value-added tax:</b></div>
                              <p>All sums insured/limits of indemnity must be inclusive of VAT and in some instances, e.g. personal accident/stated benefits cover, where indemnity payments received by 'vendor insured's' are vatable, the sums insured/limits of indemnity would need to be increased by a further 15% so as not to reduce the net payment when a claim occurs.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Premium payment:</b></div>
                              <p>The premium is due and payable on or before the inception date or renewal date but must be paid immediately upon receipt of the invoice, but no later than within 30 (thirty) days of inception/renewal of the policy. The Company shall not be obliged to accept premium tendered to it more than 30 (thirty) days after the inception or renewal date but may do so upon application at such terms as it, at its sole discretion, may determine.</p>
                              <ul>
                                <li>Where the premium is paid monthly</li>
                              </ul>
                              <p>The premium is due and payable on or before the inception date or the first day of each month thereafter as the case may be. If the premium has not been paid for any reason other than the Insured having stopped payment, the Company will re-debit in the following month for two months' premium. </p>
                              <p>The policy will cancel immediately:</p>

                              <ul>
                                <li>If the Insured has placed a stop payment on the premium</li>
                                <li>If the full double premium has not been paid (effective from the date of the first unpaid premium)</li>
                                <li>There may be instances where the policy may be cancelled if one month's premium has not been successfully received. Take note of specific correspondence received in instances where this is the case.</li>
                              </ul>

                              <p>If all premiums have not been paid, any claims made will not be settled under this policy.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Adjustment Premium:</b></div>
                              <p>If the premium for any section of this policy has been calculated on any estimated figures, the Insured shall, after the expiry of each period of insurance, furnish the Company with such particulars and information as the Company may require for the purpose of recalculation of the premium for such period. Any differences shall be paid by or to the Insured as the case may be.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Duty of disclosure of material facts:</b></div>
                              <p>Because you have a far better knowledge of your risk than your insurers, please advise us prior to inception of cover or renewal or when changes are made to your risk during the year, of information which may affect the insurer's appreciation of the risk. Examples could be particularly hazardous aspects of your business (such as processes undertaken, new products, signing of leases or contracts which may impose additional liabilities on you, situation of premises, threats from other parties, warehousing of customers' properties, hiring of plant and equipment).</p>
                              <p>You do not have to disclose things which diminish the risk of insurers or are common knowledge or knowledge of which is waived by the insurer. Where, however, you are in any doubt, it is better to inform insurers as many claims have been repudiated on grounds of non-disclosure.</p>
                              <p>When a policy is placed with an Insurer you need to disclose all material facts, which could affect your Insurer's appreciation of the risk of loss, damage or liability, for which they will be providing you with insurance cover. </p>
                              <p>Once cover has been placed, the need to continue disclosing material facts not previously disclosed to your current insurers continues. This applies to all your insurance covers not just those insuring your assets, and disclosure should be made via your broker as soon as the facts come to your attention. </p>
                              <p>In addition, you need to immediately advise your broker of any changes or planned changes in your assets or business activities.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Standard construction:</b></div>
                              <p>The building and outbuildings are constructed with brick walls, stone or concrete and are roofed with slate, tiles, concrete, asbestos, or metal. We must be advised if any structure on your premises is not constructed in accordance with these requirements.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Unoccupied buildings/premises:</b></div>
                              <p>If any building and/or premise shall become unoccupied for 30 (thirty) consecutive days, the insurance cover is suspended as regards the property affected unless the Insured, before the occurrence of any damage, obtains the written agreement of the insurer to continue with the cover.</p>
                              <p>During the period of the initial unoccupancy of 30 (thirty) consecutive days, the Insured shall become a co-insurer with the insurer and shall bear a proportion of any damage equal to 20% (twenty per cent) of the claim before deduction of any first amount payable.</p>
                              <p>Theft (or any attempt thereat) of contents, electronic and all other equipment, plant, machinery, landlord's fixtures, and fittings, etc. not accompanied by forcible and violent entry into or exit from such building, is excluded unless specifically insured. An alarm warranty is also applicable for all sections which provide theft cover to the premises and requires that a linked alarm be activated and in working order whenever the premises is unoccupied. The alarm must be linked to a 24-hour manned control room and armed reaction and be activated whenever the premises is unoccupied. If either of these conditions are not met, there will be no cover. We further recommend that you test the alarm at the intervals recommended by the service provider to ensure that the alarm is operational and in working order.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Power surge:</b></div>
                              <p>Power surge cover is generally limited in terms of the policy, and we encourage you to check each section of the policy to determine the adequacy of the limit of cover selected. Insurers further require that there is SABS-approved power surge arrestors installed at the premises for the cover to be valid, or else ensuring that the cover is not limited, or additional excesses being applied. We recommend that such surge arrestors be installed on the mains of the premises by a professional service provider, to ensure that all equipment is adequate protected.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Retaining and boundary walls:</b></div>
                              <p>Simplistically, a boundary wall serves as a dividing structure between two pieces of land and a retaining wall serves to split levels of ground to prevent the higher level from subsiding onto the lower level. </p>
                              <p>In consequence, a retaining wall carries a much higher risk than a boundary wall.</p>
                              <p>The policy excludes damage to retaining walls caused by storm, wind, water, hail, or snow, unless you can provide insurers with written proof confirming the retaining walls were designed and constructed in accordance with a professional structural engineer design specification. </p>
                              <p>An Insurer will require the submission of a stability report from a suitably qualified engineer prior to going on risk at inception or renewal of a policy, to substantiate the current stability of the structure. Once this report has been received and cover is approved, the Insurer will list the retaining wall separately on the policy schedule and likely charge an additional premium on the (new replacement) value of the retaining wall. </p>
                              <p>It is imperative that property owners be aware of all retaining and boundary walls on their property and monitor, on an ongoing basis, the changes to and around all retaining and boundary walls, especially where the other side of the wall is outside of their property. </p>
                              <p>Pleading ignorance when your boundary wall becomes a retaining wall by the action or inaction of a third party and then collapses is unfortunately of no help in an insurance claim. When in doubt, always ask your broker for assistance.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Claim Notification:</b></div>
                              <p>On the happening of an event that may result in a claim under this policy, notify us as soon as possible and provide in writing details of the event including all substantiating documentation that your insurers may require. The police must be notified immediately after the event. Insurers require that all claims be reported no later than 30 days after the insured event or there may be no cover.</p>
                              
                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Prevention of loss:</b></div>
                              <p>You are required to take all reasonable steps and precautions to prevent accidents or losses, including, but not limited to, compliance and adherence to laws and regulations which are material to the risk. It is warranted that all laws, regulations, by-laws, and rules which apply to the business or any other matter for which cover is provided in terms of the policy shall be always adhered to. </p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Remote jamming/theft of items from a vehicle without forcible and violent entry or exit:</b></div>
                              <p>If the Insured can demonstrate through video surveillance footage (or any other conclusive proof) that an attempt was made to lock the vehicle using the vehicle remote but that the locking mechanism was blocked by thieves using an electronic device, such evidence shall be deemed to satisfy the forcible and violent entry or exit requirement for any loss out of the cab or boot of the vehicle</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Burglar alarm warranty (where applicable):</b></div>
                              <p>It is a condition precedent to the liability of the Company that a burglar alarm system will be installed in all premises stated in the schedule and warranted that: </p>
                              <ul>
                                <li>The burglar alarm installed in the premises shall be fully activated whenever the premises is not open for normal business unless any principal, partner, director or employee is in the premises </li>
                                <li>The insurance shall not cover loss of or damage to property following the use of keys, the keypad code or remote control of the burglar alarm or any duplicate thereof belonging to the Insured unless such keys, keypad code or remote control were obtained by theft</li>
                              </ul>
                              <p>Unless specifically stated to the contrary, all premises shall be protected by such alarm, and it is further warranted that: </p>
                              <ul>
                                <li>The contract for any burglar alarm services shall include services of a 24-hour armed response unit </li>
                                <li>The control panel shall have an event log and the arming and disarming of the alarm shall be logged and after the occurrence of a claim the Company will be entitled to request full information of the relevant log </li>
                                <li>Such alarm will be maintained in proper working order, but the Insured shall be deemed to have discharged their liability if they have maintained their obligations under a maintenance contract with the installation/service company of the alarm system </li>
                              </ul>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Excess/first amount payable/deductible:</b></div>
                              <p>Your policy is subject to several different excesses/first amounts payable for each section of the policy where cover has been selected – these are detailed per section of the policy or are listed under the Excess section. Refer to the various sections for applicable excesses/first amounts payable in the event of a claim.</p>

                              <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Tracking device requirements:</b></div>
                              <p>Your policy may contain specific requirements regarding the compulsory fitment, maintenance and testing of tracking devices, as well as the type of tracking device specified for the type/category of vehicle (i.e. constant monitoring/early warning). We strongly encourage you to familiarise yourself with these requirements as theft/hijacking cover is often subject to such tracking devices being installed, maintained, and tested. </p>
                              <p>Where tracking devices are not a requirement, and you have elected to fit such a device of your own accord, inform us as you may be entitled to a reduction in premium and/or your theft excess may be waived (subject to policy terms and conditions).</p>
      {
        FormData['STIC_ProdComp_Recommended1'] === 1 || FormData['STIC_ProdComp_Accepted1'] === 1 ?
        <>
          <div className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
            : ""
          } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > 
          <b>SECTION 1:FIRE</b></div>
          <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
            <div className="col-12" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label">Additional claims Preparation cost:</label>
                    </div>

                </div>
            </div>

            <hr/>
            <div className="col-12" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Limit:</label>
                    </div>

                    <div className="col-4">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fire_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fire_Limit']}  name="STIC_Fire_Limit"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>

                    <div className="col-2">
                        <label className="col-form-label">Premium:</label>
                    </div>

                    <div className="col-4">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fire_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fire_ItemNumber']}  name="STIC_Fire_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>
                </div>
            </div>

            <hr/>
            <div className="col-12" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Item Number:</label>
                    </div>

                    <div className="col-4">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fire_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fire_Premium']}  name="STIC_Fire_Premium"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>

                    <div className="col-2">
                        <label className="col-form-label">Premises Number:</label>
                    </div>

                    <div className="col-4">
                    <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Fire_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Fire_PremNumber']}  name="STIC_Fire_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div><b>Important notes:</b></div>
          <p>The onus is on the client to provide the correct sums insured.</p>
          <div><b>Building:</b></div>
          <p>Sum insured is the replacement costs (not market value).</p>
          <div><b>Plant and machinery:</b></div>
          <p>When calculating the sum insured, plant/machinery must be insured at new replacement costs/value.</p>
          <div><b>Stock in trade:</b></div>
          <p>When calculating the sum insured, stock in trade must be insured at cost price.</p>
          <div><b>Insured property: </b></div>
          <hr/>
          <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum insured: Buildings (excluding surrounding walls and paving)</label>
                  </div>
                  <div className="col-3">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Buildings_Insured" onChange={(e) => {onChange(e)}} value={FormData['STIC_Buildings_Insured']}  name="STIC_Buildings_Insured"  className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
              <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum insured: Rental</label>
                  </div>
                  <div className="col-3">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Rental_Insured" onChange={(e) => {onChange(e)}} value={FormData['STIC_Rental_Insured']}  name="STIC_Rental_Insured"  className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum insured: Plant, machinery, fixtures, and fittings</label>
                  </div>
                  <div className="col-3">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Others_Insured" onChange={(e) => {onChange(e)}} value={FormData['STIC_Others_Insured']}  name="STIC_Others_Insured"  className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum insured: Stock and materials in trade</label>
                  </div>
                  <div className="col-3">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Stocks_Insured" onChange={(e) => {onChange(e)}} value={FormData['STIC_Stocks_Insured']}  name="STIC_Stocks_Insured"  className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum insured: Miscellaneous</label>
                  </div>
                  <div className="col-3">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Miscellaneous1_Insured" onChange={(e) => {onChange(e)}} value={FormData['STIC_Miscellaneous1_Insured']}  name="STIC_Miscellaneous1_Insured"  className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum insured: Miscellaneous</label>
                  </div>
                  <div className="col-3">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Miscellaneous2_Insured" onChange={(e) => {onChange(e)}} value={FormData['STIC_Miscellaneous2_Insured']}  name="STIC_Miscellaneous2_Insured"  className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
              <hr/>

            </div>
          </div>

          <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <div><b>Additional Perils</b></div>
                  </div>
                  <div className="col-3">
                    <div><b>Included</b></div>
                  </div>
                </div>
              </div>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <div></div>
                  </div>
                  <div className="col-4">
                    <div><b>Yes/No</b></div>
                  </div>
                </div>
              </div>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Earthquake</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Earthquake_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Earthquake_Insured" name="STIC_Earthquake_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Earthquake_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Earthquake_Insured" name="STIC_Earthquake_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Malicious damage</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Malicious_Damage_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Malicious_Damage_Insured" name="STIC_Malicious_Damage_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Malicious_Damage_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Malicious_Damage_Insured" name="STIC_Malicious_Damage_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Special Perils</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Special_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Special_Insured" name="STIC_Special_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Special_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Special_Insured" name="STIC_Special_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Leakage-full value</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_LeakFull_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_LeakFull_Insured" name="STIC_LeakFull_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_LeakFull_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_LeakFull_Insured" name="STIC_LeakFull_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Leakage-first loss limit</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_LeakFirst_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_LeakFirst_Insured" name="STIC_LeakFirst_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_LeakFirst_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_LeakFirst_Insured" name="STIC_LeakFirst_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Subsidence and landslip(limited)</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_SnLLimited_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_SnLLimited_Insured" name="STIC_SnLLimited_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_SnLLimited_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_SnLLimited_Insured" name="STIC_SnLLimited_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Subsidence and landslip(comprehensive)</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_SnLComprehensive_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_SnLComprehensive_Insured" name="STIC_SnLComprehensive_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_SnLComprehensive_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_SnLComprehensive_Insured" name="STIC_SnLComprehensive_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Riot and strike(except RSA)</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_RnS_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_RnS_Insured" name="STIC_RnS_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_RnS_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_RnS_Insured" name="STIC_RnS_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Stock declaration conditions</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_SDC_Insured'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_SDC_Insured" name="STIC_SDC_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Monthly
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_SDC_Insured'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_SDC_Insured" name="STIC_SDC_Insured" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Quarterly
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

            </div>
          </div>
        </>
        : <></>
      }
      {
        FormData['STIC_ProdComp_Recommended2'] === 1 || FormData['STIC_ProdComp_Accepted2'] === 1 ?
        <>
          <div className={
            state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
            : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
            : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
            : ""
          } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} 
          > 
            <b>SECTION 2:BUILDINGS COMBINED</b></div>
            <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
              <div className="col-12" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label">Additional claims Preparation cost:</label>
                    </div>

                </div>
            </div>

            <hr/>
            <div className="col-12" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Limit:</label>
                    </div>

                    <div className="col-4">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BuildCombined_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_BuildCombined_Limit']}  name="STIC_BuildCombined_Limit"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>

                    <div className="col-2">
                        <label className="col-form-label">Premium:</label>
                    </div>

                    <div className="col-4">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BuildCombined_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_BuildCombined_Premium']}  name="STIC_BuildCombined_Premium"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>
                </div>
            </div>

            <hr/>
            <div className="col-12" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Item Number:</label>
                    </div>

                    <div className="col-4">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BuildCombined_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_BuildCombined_ItemNumber']}  name="STIC_BuildCombined_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>

                    <div className="col-2">
                        <label className="col-form-label">Premises Number:</label>
                    </div>

                    <div className="col-4">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BuildCombined_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_BuildCombined_PremNumber']}  name="STIC_BuildCombined_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div><b>Importance notes:</b></div>
          <p>The onus is on the client to provide the correct sums insured. </p>
          <ul>
            <li>Building: The sum insured is the replacement costs (not market value).</li>
            <li>All fixtures and fittings added to the building, e.g., carpets, air conditioning units</li>
            <li>In the event of insuring contents; the sum insured should be the new replacement value of contents</li>
            <li>Loss of rental is included in the policy up to a maximum of 25% of the sum insured of the insured property. </li>
          </ul>
          <hr/>
          <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Column refernce:</label>
                  </div>
                  <div className="col-3">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BuildCombined_ColumnRef" onChange={(e) => {onChange(e)}} value={FormData['STIC_BuildCombined_ColumnRef']}  name="STIC_BuildCombined_ColumnRef"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum insured (to include perimeter walls or fencing and paving, etc.):  </label>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <span className="input-group-text">R</span>
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BuildCombined_Sum" onChange={(e) => {onChange(e)}} value={FormData['STIC_BuildCombined_Sum']}  name="STIC_BuildCombined_Sum"  className="form-control" placeholder="0.00"  aria-describedby=""  />
                    </div>
                  </div>
                </div>
              </div>
                <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Construction standard: </label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BuildCombined_Construct'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BuildCombined_Construct" name="STIC_BuildCombined_Construct" />
                        
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BuildCombined_Construct'] == 0 ? true: false } onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BuildCombined_Construct" name="STIC_BuildCombined_Construct" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>
              
              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Description</label>
                  </div>
                  <div className="col-3">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BuildCombined_Desc" onChange={(e) => {onChange(e)}} value={FormData['STIC_BuildCombined_Desc']}  name="STIC_BuildCombined_Desc"  className="form-control" placeholder="Click here to enter the text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
                </div>
              </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <div><b>Extensions</b></div>
                  </div>
                  <div className="col-3">
                    <div><b>Included</b></div>
                  </div>
                </div>
              </div>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <div></div>
                  </div>
                  <div className="col-4">
                    <div><b>Yes/No</b></div>
                  </div>
                </div>
              </div>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Riot and strike (except RSA)</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_RnS'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Extensions_RnS" name="STIC_Extensions_RnS" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_RnS'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Extensions_RnS" name="STIC_Extensions_RnS" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Sum ensured geysers</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_Geysers'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Extensions_Geysers" name="STIC_Extensions_Geysers" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_Geysers'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Extensions_Geysers" name="STIC_Extensions_Geysers" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Subsidence and landslip(comprehensive)</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_SnL'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Extensions_SnL" name="STIC_Extensions_SnL" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_SnL'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Extensions_SnL" name="STIC_Extensions_SnL" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>


              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Prevention of access</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_PoA'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Extensions_PoA" name="STIC_Extensions_PoA" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_PoA'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Extensions_PoA" name="STIC_Extensions_PoA" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                  <div className="col-8">
                    <label className="col-form-label">Inflation/Escalation clause</label>
                  </div>
                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_IorE'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Extensions_IorE" name="STIC_Extensions_IorE" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_Extensions_IorE'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Extensions_IorE" name="STIC_Extensions_IorE" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>
                </div>
              </div>
              <hr/>

            </div>
          </div>

          <br/>
            
        </>
        :<></>
      }
      {
        FormData['STIC_ProdComp_Recommended3'] === 1 || FormData['STIC_ProdComp_Accepted3'] === 1 ?
          <>
      <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > 
      <b>SECTION 3:OFFICE CONTENTS</b></div>
                              <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                <div className="input-group">
                  <span className="input-group-text">R</span>
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Limit']}  name="STIC_OC_Limit"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                </div>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <div className="input-group">
                  <span className="input-group-text">R</span>
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Premium']}  name="STIC_OC_Premium"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                </div>
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_ItemNumber']}  name="STIC_OC_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_PremNumber']}  name="STIC_OC_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <hr/>
                              <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                                <div className="row">

                                

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Sum insured:</label>
                                      </div>
                                      <div className="col-3">
                                        <div className="input-group">
                                          <span className="input-group-text">R</span>
                                          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Sum" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Sum']}  name="STIC_OC_Sum"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                    <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Construction standard: </label>
                                      </div>
                                      <div className="row col-4 align-items-center">
                                          <div className="col-3">
                                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_OC_Construct'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_OC_Construct" name="STIC_OC_Construct" />
                                          </div>
                                          <div className="col-3">
                                              <label className="form-check-label"  >
                                                  Yes
                                              </label>
                                          </div>
                                          <div className="col-3">
                                              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_OC_Construct'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_OC_Construct" name="STIC_OC_Construct" />
                                          </div>
                                          <div className="col-3">
                                              <label className="form-check-label"  >
                                                  No
                                              </label>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>
                                  
                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Description</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Desc" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Desc']}  name="STIC_OC_Desc"  className="form-control" placeholder="Click here to enter the text"  aria-describedby="" style={{width:"200px"}} />
                                      </div>
                                    </div>
                                  </div>
                                    <hr/>

                                </div>
                              </div>

                              <div><b>Important notes:</b></div>
                              <ul>
                                <li>Sum insured of contents should be at new replacement costs</li>
                                <li>Office contents exclude electronic equipment.</li>
                              </ul>

                              <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                                <div className="row">
                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <div><b>Extensions</b></div>
                                      </div>
                                      <div className="col-3">
                                        <div style={{align:"left"}}><b>Sum Insured</b></div>
                                      </div>
                                      <div className="col-3">
                                        <div><b>Premium</b></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Documents</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Doc_Sum" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Doc_Sum']}  name="STIC_OC_Doc_Sum"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Doc_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Doc_Premium']}  name="STIC_OC_Doc_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Legal Liability Documents</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_LLDoc_Sum" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_LLDoc_Sum']}  name="STIC_OC_LLDoc_Sum"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_LLDoc_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_LLDoc_Premium']}  name="STIC_OC_LLDoc_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Riot and strike(RSA)</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_RnS_Sum" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_RnS_Sum']}  name="STIC_OC_RnS_Sum"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_RnS_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_RnS_Premium']}  name="STIC_OC_RnS_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Theft(forcible)</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_TheftF_Sum" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_TheftF_Sum']}  name="STIC_OC_TheftF_Sum"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_TheftF_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_TheftF_Premium']}  name="STIC_OC_TheftF_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Theft</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Theft_Sum" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Theft_Sum']}  name="STIC_OC_Theft_Sum"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Theft_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Theft_Premium']}  name="STIC_OC_Theft_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label"><b>Total annual premium for item:</b></label>
                                      </div>
                                      <div className="col-3">
                                        {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Total_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Total_Premium']}  name="STIC_OC_Total_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} /> */}
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_OC_Total_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_OC_Total_Premium']}  name="STIC_OC_Total_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />

                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                </div>
                              </div>

                              <br/>
          </>
        :
        <></>
      }
      {
        FormData['STIC_ProdComp_Recommended4'] === 1 || FormData['STIC_ProdComp_Accepted4'] === 1 ?
          <>
      <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 4:BUSINESS INTERRUPTION</b></div>
                              <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Limit']}  name="STIC_BusInt_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Premium']}  name="STIC_BusInt_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_ItemNumber']}  name="STIC_BusInt_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_PremNumber']}  name="STIC_BusInt_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>

                              <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                                <div className="row">
                                  

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Basis:</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Basis" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Basis']}  name="STIC_BusInt_Basis"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Indemnity Period:</label>
                                      </div>
                                      <div className="col-3">
                                        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Indemnity" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Indemnity']}  name="STIC_BusInt_Indemnity"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                </div>
                              </div>

                              <div><b>Important Notes</b></div>
                              <ul>
                                <li>Calculation of gross profit sum insured: Difference basis</li>
                                <li>Calculation of gross profit sum insured: Addition's basis (Net profit and standing charges)</li>
                                <li>Indemnity period: Suggested minimum period is 12 months and more. It is not only the time involved in repairing the material damage, but it may consider actual time to return to normal production.</li>
                              </ul>

                              

      <table class="table" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}}>
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Type</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Included Yes/No</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Schedule Item Number</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}> </th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Gross Profit </td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type1'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type1" name="STIC_BusInt_Type1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type1'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type1" name="STIC_BusInt_Type1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Gross rentals </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type2'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2" name="STIC_BusInt_Type2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type2'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2" name="STIC_BusInt_Type2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Revenue</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type3" name="STIC_BusInt_Type3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type3" name="STIC_BusInt_Type3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional increase in cost of working </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type4" name="STIC_BusInt_Type4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type4" name="STIC_BusInt_Type4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type5" name="STIC_BusInt_Type5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type5" name="STIC_BusInt_Type5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Fines and penalties </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type6"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type6" name="STIC_BusInt_Type6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type6"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type6" name="STIC_BusInt_Type6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Standing charges</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type7"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type7" name="STIC_BusInt_Type7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type7"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type7" name="STIC_BusInt_Type7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extensions</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type8"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type8" name="STIC_BusInt_Type8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type8"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type8" name="STIC_BusInt_Type8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured</td>
      <td>
        <div className="col-3">
          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type9" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type9']}  name="STIC_BusInt_Type9"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type9_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type9_1']}  name="STIC_BusInt_Type9_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
        <div className="col-3">
          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type10" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type10']}  name="STIC_BusInt_Type10"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Specified suppliers</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type11"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type11" name="STIC_BusInt_Type11" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type11"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type11" name="STIC_BusInt_Type11" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type11_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type11_1']}  name="STIC_BusInt_Type11_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">List Specified suppliers</td>
      <td>
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supplier</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type12" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type12']}  name="STIC_BusInt_Type12"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type13" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type13']}  name="STIC_BusInt_Type13"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Unspecified suppliers</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type14"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type14" name="STIC_BusInt_Type14" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type14"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type14" name="STIC_BusInt_Type14" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type14_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type14_1']}  name="STIC_BusInt_Type14_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Prevention of access</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type15"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type15" name="STIC_BusInt_Type15" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type15"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type15" name="STIC_BusInt_Type15" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type15_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type15_1']}  name="STIC_BusInt_Type15_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Clients</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type16"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type16" name="STIC_BusInt_Type16" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type16"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type16" name="STIC_BusInt_Type16" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type16_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type16_1']}  name="STIC_BusInt_Type16_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type17" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type17']}  name="STIC_BusInt_Type17"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type18" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type18']}  name="STIC_BusInt_Type18"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Public utilities</td>
      <td>
        
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Insured perils</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type19"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type19" name="STIC_BusInt_Type19" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type19"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type19" name="STIC_BusInt_Type19" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type19_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type19_1']}  name="STIC_BusInt_Type19_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type20"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type20" name="STIC_BusInt_Type20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type20"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type20" name="STIC_BusInt_Type20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type20_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type20_1']}  name="STIC_BusInt_Type20_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Public telecommunications</td>
      <td>
       
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Insured perils</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type21"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type21" name="STIC_BusInt_Type21" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type21"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type21" name="STIC_BusInt_Type21" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type21_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type21_1']}  name="STIC_BusInt_Type21_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type22"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type22" name="STIC_BusInt_Type22" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type22"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type22" name="STIC_BusInt_Type22" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type22_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type22_1']}  name="STIC_BusInt_Type22_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Accidental cover</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type23"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type23" name="STIC_BusInt_Type23" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type23"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type23" name="STIC_BusInt_Type23" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type23_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type23_1']}  name="STIC_BusInt_Type23_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_TotalPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_TotalPremium']}  name="STIC_BusInt_TotalPremium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>
    
    </tbody>
  </table>

    <br/>
    <div><b>Comments</b></div>
    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Comments']}  name="STIC_BusInt_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
       <div className="row">
          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Premises Number:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_PremisesNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_PremisesNumber']}  name="STIC_BusInt_PremisesNumber"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>
          <hr/>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                <label className="col-form-label">Basis:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Basis" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Basis']}  name="STIC_BusInt_Basis"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>
          <hr/>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                <label className="col-form-label">Indemnity Period:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_IndemPer" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_IndemPer']}  name="STIC_BusInt_IndemPer"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />

              </div>
            </div>
          </div>
          <hr/>

        </div>
      </div>

      <div><b>Important Notes</b></div>
      <ul>
        <li>Calculation of gross profit sum insured: Difference basis</li>
        <li>Calculation of gross profit sum insured: Addition's basis (Net profit and standing charges)</li>
        <li>Indemnity period: Suggested minimum period is 12 months and more. It is not only the time involved in repairing the material damage, but it may consider actual time to return to normal production.</li>
      </ul>

      <table class="table" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}}>
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Type</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Included Yes/No</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Schedule Item Number</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}> </th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Gross Profit </td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type2_1'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_1" name="STIC_BusInt_Type2_1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type2_1'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_1" name="STIC_BusInt_Type2_1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Gross rentals </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type2_2'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_2" name="STIC_BusInt_Type2_2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData['STIC_BusInt_Type2_2'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_2" name="STIC_BusInt_Type2_2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Revenue</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_3" name="STIC_BusInt_Type2_3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_3" name="STIC_BusInt_Type2_3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional increase in cost of working </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_4" name="STIC_BusInt_Type2_4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_4" name="STIC_BusInt_Type2_4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_5" name="STIC_BusInt_Type2_5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_5" name="STIC_BusInt_Type2_5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Fines and penalties </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_6"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_6" name="STIC_BusInt_Type2_6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_6"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_6" name="STIC_BusInt_Type2_6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Standing charges</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_7"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_7" name="STIC_BusInt_Type2_7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_7"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_7" name="STIC_BusInt_Type2_7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extensions</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_8"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_8" name="STIC_BusInt_Type2_8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_8"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_8" name="STIC_BusInt_Type2_8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured</td>
      <td>
        <div className="col-3">
          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_9']}  name="STIC_BusInt_Type2_9"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_9_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_9_1']}  name="STIC_BusInt_Type2_9_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
        <div className="col-3">
          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_10" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_10']}  name="STIC_BusInt_Type2_10"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Specified suppliers</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_11"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_11" name="STIC_BusInt_Type2_11" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_11"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_11" name="STIC_BusInt_Type2_11" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_11_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_11_1']}  name="STIC_BusInt_Type2_11_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">List Specified suppliers</td>
      <td>
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supplier</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_12" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_12']}  name="STIC_BusInt_Type2_12"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_13" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_13']}  name="STIC_BusInt_Type2_13"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Unspecified suppliers</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_14"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_14" name="STIC_BusInt_Type2_14" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_14"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_14" name="STIC_BusInt_Type2_14" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_14_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_14_1']}  name="STIC_BusInt_Type2_14_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Prevention of access</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_15"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_15" name="STIC_BusInt_Type2_15" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_15"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_15" name="STIC_BusInt_Type2_15" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_15_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_15_1']}  name="STIC_BusInt_Type2_15_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Clients</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_16"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_16" name="STIC_BusInt_Type2_16" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_16"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_16" name="STIC_BusInt_Type2_16" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_16_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_16_1']}  name="STIC_BusInt_Type2_16_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_17" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_17']}  name="STIC_BusInt_Type2_17"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_18" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_18']}  name="STIC_BusInt_Type2_18"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Public utilities</td>
      <td>
        
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Insured perils</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_19"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_19" name="STIC_BusInt_Type2_19" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_19"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_19" name="STIC_BusInt_Type2_19" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_19_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_19_1']}  name="STIC_BusInt_Type2_19_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_20"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_20" name="STIC_BusInt_Type2_20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_20"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_20" name="STIC_BusInt_Type2_20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_20_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_20_1']}  name="STIC_BusInt_Type2_20_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Public telecommunications</td>
      <td>
       
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Insured perils</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_21"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_21" name="STIC_BusInt_Type2_21" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_21"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_21" name="STIC_BusInt_Type2_21" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_21_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_21_1']}  name="STIC_BusInt_Type2_21_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_22"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_22" name="STIC_BusInt_Type2_22" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_22"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_22" name="STIC_BusInt_Type2_22" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_22_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_22_1']}  name="STIC_BusInt_Type2_22_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Accidental cover</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_23"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_BusInt_Type2_23" name="STIC_BusInt_Type2_23" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_BusInt_Type2_23"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_BusInt_Type2_23" name="STIC_BusInt_Type2_23" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt_Type2_23_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt_Type2_23_1']}  name="STIC_BusInt_Type2_23_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt2_TotalPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt2_TotalPremium']}  name="STIC_BusInt2_TotalPremium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>
    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_BusInt2_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_BusInt2_Comments']}  name="STIC_BusInt2_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

          </>
        : <></>
    }
    {
        FormData['STIC_ProdComp_Recommended5'] === 1 || FormData['STIC_ProdComp_Accepted5'] === 1 ?
          <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 5:ACCOUNTS RECEIVABLE</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_Limit']}  name="STIC_Sec5_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_Premium']}  name="STIC_Sec5_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_ItemNumber']}  name="STIC_Sec5_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_PremNumber']}  name="STIC_Sec5_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>                               
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
       <div className="row">
          

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                <label className="col-form-label">Occupation Description:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_1']}  name="STIC_Sec5_1"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>
          <hr/>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                <label className="col-form-label">Construction type:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_2']}  name="STIC_Sec5_2"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />

              </div>
            </div>
          </div>
          <hr/>

        </div>
      </div>

    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Extensions</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Included Yes/No</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}> </th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Riot and strike(except RSA and Namibia) </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec5_Extension_1" name="STIC_Sec5_Extension_1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec5_Extension_1" name="STIC_Sec5_Extension_1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Duplicate records </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec5_Extension_2" name="STIC_Sec5_Extension_2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec5_Extension_2" name="STIC_Sec5_Extension_2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Protection</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec5_Extension_3" name="STIC_Sec5_Extension_3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec5_Extension_3" name="STIC_Sec5_Extension_3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Transit</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec5_Extension_4" name="STIC_Sec5_Extension_4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec5_Extension_4" name="STIC_Sec5_Extension_4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Declaration </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec5_Extension_5" name="STIC_Sec5_Extension_5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec5_Extension_5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec5_Extension_5" name="STIC_Sec5_Extension_5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        
      </td>
      <td>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_AnnualPremium']}  name="STIC_Sec5_AnnualPremium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />

      </td>
      <td></td>
      <td></td>
    </tr>

    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec5_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec5_Comments']}  name="STIC_Sec5_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
          </>
        :
        <></>
    }
    {
        FormData['STIC_ProdComp_Recommended6'] === 1 || FormData['STIC_ProdComp_Accepted6'] === 1 ?
                <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 6:THEFT</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_Limit']}  name="STIC_Sec6_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_Premium']}  name="STIC_Sec6_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_ItemNumber']}  name="STIC_Sec6_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_PremNumber']}  name="STIC_Sec6_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div> 

      <div><b>Important Notes</b></div>
      <div>The onus is on the client to provide the correct sums insured on a first loss basis.</div>
      <ul>
        <li>Sum insured is on a first loss basis</li>
        <li>Security is important</li>
        <li>Forcible and violent entry</li>
        <li>Look at the type of contents that you have, e.g. heavy machinery or electronic goods and whether it will be easy to carry it away</li>
      </ul>

      <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
       <div className="row">

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Sum insured:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_1']}  name="STIC_Sec6_1"  className="form-control" placeholder=" R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Specific description of content:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_2']}  name="STIC_Sec6_2"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Total value of contents:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_3']}  name="STIC_Sec6_3"  className="form-control" placeholder=" R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Construction type:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_4']}  name="STIC_Sec6_4"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Protection:</label>
              </div>
              <div className="col-3">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_5']}  name="STIC_Sec6_5"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>


        </div>
      </div>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec6_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec6_Comments']}  name="STIC_Sec6_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

                </>
        :
                <>
                </>
}
    {
            FormData['STIC_ProdComp_Recommended7'] === 1 || FormData['STIC_ProdComp_Accepted7'] === 1 ?
                    <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > 
      <b>SECTION 7:MONEY</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Limit']}  name="STIC_Sec7_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Premium']}  name="STIC_Sec7_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_ItemNumber']}  name="STIC_Sec7_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_PremNumber']}  name="STIC_Sec7_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>                                  
    

      <div><b>Important Notes</b></div>
      <ul>
        <li>Money in an unattended vehicle is not covered</li>
      </ul>

      <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Receptacle limit </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_1']}  name="STIC_Sec7_1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium </td>

      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_2']}  name="STIC_Sec7_2"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Personal Accident</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec7_3" name="STIC_Sec7_3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec7_3" name="STIC_Sec7_3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Riot and strike</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec7_4" name="STIC_Sec7_4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec7_4" name="STIC_Sec7_4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <div className='row' style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">
          <p>Occupation Description</p>
        </div>
      </td>
      <td>
          <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_5']}  name="STIC_Sec7_5"  className="form-control" placeholder="Occupation Description:"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Major limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_6']}  name="STIC_Sec7_6"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_7']}  name="STIC_Sec7_7"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Seasonal limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_8']}  name="STIC_Sec7_8"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_9']}  name="STIC_Sec7_9"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      
    </tr>

    {/* <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Season description:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Category description:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
      </td>
      
    </tr> */}

    
    </tbody>
  </table>

<br/>
  <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Extensions</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Included Yes/No</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Limit</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Premium</th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Petrol Attendants </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_Extension_Included1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec7_Extension_Included1" name="STIC_Sec7_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_Extension_Included1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec7_Extension_Included1" name="STIC_Sec7_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
        
      </td>
      <td> 
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Extension_Limit1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Extension_Limit1']}  name="STIC_Sec7_Extension_Limit1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Extension_Premium1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Extension_Premium1']}  name="STIC_Sec7_Extension_Premium1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Collectors </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_Extension_Included2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec7_Extension_Included2" name="STIC_Sec7_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_Extension_Included2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec7_Extension_Included2" name="STIC_Sec7_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
        
      </td>
      <td> 
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Extension_Limit2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Extension_Limit2']}  name="STIC_Sec7_Extension_Limit2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Extension_Premium2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Extension_Premium2']}  name="STIC_Sec7_Extension_Premium2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Petrol Attendants </td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_Extension_Included3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec7_Extension_Included3" name="STIC_Sec7_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec7_Extension_Included3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec7_Extension_Included3" name="STIC_Sec7_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
        
      </td>
      <td> 
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Extension_Limit3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Extension_Limit3']}  name="STIC_Sec7_Extension_Limit3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Extension_Premium3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Extension_Premium3']}  name="STIC_Sec7_Extension_Premium3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium</b></td>
      <td>
     
        
      </td>
      <td> 
        
      </td>
      <td>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIC_Sec7_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_AnnualPremium']}  name="STIC_Sec7_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec7_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec7_Comments']}  name="STIC_Sec7_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

                    </>
            :
                    <>
                    </>
    }
    {
        FormData['STIC_ProdComp_Recommended8'] === 1 || FormData['STIC_ProdComp_Accepted8'] === 1 ?
                <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > 
    <b>SECTION 8:GLASS</b></div>
    <div className='row' style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec8_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_Limit']}  name="STIC_Sec8_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec8_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_Premium']}  name="STIC_Sec8_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec8_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_ItemNumber']}  name="STIC_Sec8_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec8_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_PremNumber']}  name="STIC_Sec8_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
    
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured: </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"   id="STIC_Sec8_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_1']}  name="STIC_Sec8_1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">
        {/* Premium:  */}
      </td>
      <td>
      {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec8_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_PremNumber']}  name="STIC_Sec8_PremNumber" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> */}
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Extensions</b> </td>
      <td> 
        
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Included Yes/No</b> </td>
      <td>
      
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Special replacement </td>
      <td> </td>
       
      <td>
      <div className="row col-6 align-items-center">
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec8_Extension_Included1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec8_Extension_Included1" name="STIC_Sec8_Extension_Included1" />
          </div>
          <div className="col-3">
              <label className="form-check-label"  >
                  Yes
              </label>
          </div>
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec8_Extension_Included1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec8_Extension_Included1" name="STIC_Sec8_Extension_Included1" />
          </div>
          <div className="col-3">
              <label className="form-check-label"  >
                  No
              </label>
          </div>
      </div>
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Riot and strike </td>
      <td> </td>
        
      <td>
      <div className="row col-6 align-items-center">
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec8_Extension_Included2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec8_Extension_Included2" name="STIC_Sec8_Extension_Included2" />
          </div>
          <div className="col-3">
              <label className="form-check-label"  >
                  Yes
              </label>
          </div>
          <div className="col-3">
              <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec8_Extension_Included2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec8_Extension_Included2" name="STIC_Sec8_Extension_Included2" />
          </div>
          <div className="col-3">
              <label className="form-check-label"  >
                  No
              </label>
          </div>
      </div>
      </td>
      <td></td>
      
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium</b></td>
      <td>
     
        
      </td>
      <td> 
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true"  id="STIC_Sec8_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_AnnualPremium']}  name="STIC_Sec8_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      </td>
      <td></td>
      
    </tr>

    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec8_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_Comments']}  name="STIC_Sec8_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

                </>
        :
                <>
                </>
    }
    {
        FormData['STIC_ProdComp_Recommended9'] === 1 || FormData['STIC_ProdComp_Accepted9'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 9:FIDELITY GURANTEE</b></div>
    <div className='row' style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Limit']}  name="STIC_Sec9_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Premium']}  name="STIC_Sec9_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_ItemNumber']}  name="STIC_Sec9_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_PremNumber']}  name="STIC_Sec9_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Number of employees:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_1']}  name="STIC_Sec9_1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_2']}  name="STIC_Sec9_2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Voluntary excess: </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_3']}  name="STIC_Sec9_3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td>
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Cost of recovery: </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_4']}  name="STIC_Sec9_4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td>
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_5']}  name="STIC_Sec9_5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_6']}  name="STIC_Sec9_6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Extensions</b> </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Included Yes/No</b> </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Limit</b> </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Premium</b> </td>
      
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Reinstatement of sum insured </td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec9_Extension_Included1" name="STIC_Sec9_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec9_Extension_Included1" name="STIC_Sec9_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Limit1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Limit1']}  name="STIC_Sec9_Extension_Limit1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Premium1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Premium1']}  name="STIC_Sec9_Extension_Premium1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Computer losses</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec9_Extension_Included2" name="STIC_Sec9_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec9_Extension_Included2" name="STIC_Sec9_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Limit2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Limit2']}  name="STIC_Sec9_Extension_Limit2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Premium2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Premium2']}  name="STIC_Sec9_Extension_Premium2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Supersedded insurance </td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec9_Extension_Included3" name="STIC_Sec9_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec9_Extension_Included3" name="STIC_Sec9_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Limit3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Limit3']}  name="STIC_Sec9_Extension_Limit3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Premium3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Premium3']}  name="STIC_Sec9_Extension_Premium3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Retroactive cover </td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec9_Extension_Included4" name="STIC_Sec9_Extension_Included4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec9_Extension_Included4" name="STIC_Sec9_Extension_Included4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Limit4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Limit4']}  name="STIC_Sec9_Extension_Limit4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Premium4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Premium4']}  name="STIC_Sec9_Extension_Premium4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Losses(24/36 months) </td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec9_Extension_Included5" name="STIC_Sec9_Extension_Included5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec9_Extension_Included5" name="STIC_Sec9_Extension_Included5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Limit5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Limit5']}  name="STIC_Sec9_Extension_Limit5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Premium5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Premium5']}  name="STIC_Sec9_Extension_Premium5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Losses(24 months-audit)</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included6"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec9_Extension_Included6" name="STIC_Sec9_Extension_Included6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec9_Extension_Included6"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec9_Extension_Included6" name="STIC_Sec9_Extension_Included6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Limit6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Limit6']}  name="STIC_Sec9_Extension_Limit6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Extension_Premium6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Extension_Premium6']}  name="STIC_Sec9_Extension_Premium6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        
      </td>
       
      <td>
        
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_AnnualPremium']}  name="STIC_Sec9_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>
    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec9_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec9_Comments']}  name="STIC_Sec9_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
              </>
        :
              <>
              </>
    }
    
    {
        FormData['STIC_ProdComp_Recommended10'] === 1 || FormData['STIC_ProdComp_Accepted10'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 10:GOODS IN TRANSIT</b></div>
    <div className='row' style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Limit']}  name="STIC_Sec10_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Premium']}  name="STIC_Sec10_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_ItemNumber']}  name="STIC_Sec10_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_PremNumber']}  name="STIC_Sec10_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Commodity:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_1']}  name="STIC_Sec10_1" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Means of conveyance(e.g by road,rail or air):</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_2']}  name="STIC_Sec10_2" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Estimated annual turnover:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_3']}  name="STIC_Sec10_3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit per load:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_4']}  name="STIC_Sec10_4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_5']}  name="STIC_Sec10_5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Number of vehicles:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_6']}  name="STIC_Sec10_6" className="form-control" placeholder="0.00"  aria-describedby=""/> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Extensions</b> </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Included Yes/No</b> </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Limit</b> </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Premium</b> </td>
      
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Riot and strike</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec10_Extension_Included1" name="STIC_Sec10_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec10_Extension_Included1" name="STIC_Sec10_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Limit1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Limit1']}  name="STIC_Sec10_Extension_Limit1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Premium1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Premium1']}  name="STIC_Sec10_Extension_Premium1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Debris removal</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec10_Extension_Included2" name="STIC_Sec10_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec10_Extension_Included2" name="STIC_Sec10_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Limit2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Limit2']}  name="STIC_Sec10_Extension_Limit2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Premium2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Premium2']}  name="STIC_Sec10_Extension_Premium2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Fire extinguishing charges </td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec10_Extension_Included3" name="STIC_Sec10_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec10_Extension_Included3" name="STIC_Sec10_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Limit4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Limit4']}  name="STIC_Sec10_Extension_Limit4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Premium4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Premium4']}  name="STIC_Sec10_Extension_Premium4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Declaration conditions frequency</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec10_Extension_Included4" name="STIC_Sec10_Extension_Included4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec10_Extension_Included4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec10_Extension_Included4" name="STIC_Sec10_Extension_Included4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
       
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Limit4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Limit4']}  name="STIC_Sec10_Extension_Limit4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Extension_Premium4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Extension_Premium4']}  name="STIC_Sec10_Extension_Premium4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total  annual premium for item</b></td>
      <td></td>
       
      <td></td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_AnnualPremium']}  name="STIC_Sec10_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>
 
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec10_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec10_Comments']}  name="STIC_Sec10_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended11'] === 1 || FormData['STIC_ProdComp_Accepted11'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 11:BUSINESS ALL RISKS</b></div>
    <div className='row' style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_Limit']}  name="STIC_Sec11_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_Premium']}  name="STIC_Sec11_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_ItemNumber']}  name="STIC_Sec11_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_PremNumber']}  name="STIC_Sec11_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Riot and strike:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec11_1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec11_1" name="STIC_Sec11_1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec11_1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec11_1" name="STIC_Sec11_1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Place:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_2']}  name="STIC_Sec11_2" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Basis:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_3']}  name="STIC_Sec11_3" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Increase cost of working limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_4']}  name="STIC_Sec11_4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Article Description:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_5']}  name="STIC_Sec11_5" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Model Number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_6']}  name="STIC_Sec11_6" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Serial Number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_7']}  name="STIC_Sec11_7" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_8']}  name="STIC_Sec11_8" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_9']}  name="STIC_Sec11_9" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">First amount payable:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_10" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_10']}  name="STIC_Sec11_10" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>



    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td></td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_AnnualPremium']}  name="STIC_Sec11_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec11_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec11_Comments']}  name="STIC_Sec11_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
</>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended12'] === 1 || FormData['STIC_ProdComp_Accepted12'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 12:ACCIDENTAL DAMAGE</b></div>
    <div className='row' style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_Limit']}  name="STIC_Sec12_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_Premium']}  name="STIC_Sec12_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_ItemNumber']}  name="STIC_Sec12_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_PremNumber']}  name="STIC_Sec12_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">EML%:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_1']}  name="STIC_Sec12_1" className="form-control" placeholder="0.00"  aria-describedby=""/> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Same risk:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_2']}  name="STIC_Sec12_2" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Total value:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_3']}  name="STIC_Sec12_3" className="form-control" placeholder="0.00"  aria-describedby=""/> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_4']}  name="STIC_Sec12_4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_5']}  name="STIC_Sec12_5" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">First amount payable:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_6']}  name="STIC_Sec12_6" className="form-control" placeholder="0.00"  aria-describedby=""/> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Extensions</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Included Yes/No</b></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Leakage of oil:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec12_Extension_Included1" name="STIC_Sec12_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec12_Extension_Included1" name="STIC_Sec12_Extension_Included1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Average:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec12_Extension_Included2" name="STIC_Sec12_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec12_Extension_Included2" name="STIC_Sec12_Extension_Included2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Excluded Property:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec12_Extension_Included3" name="STIC_Sec12_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec12_Extension_Included3" name="STIC_Sec12_Extension_Included3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Reinstatement:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec12_Extension_Included4" name="STIC_Sec12_Extension_Included4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec12_Extension_Included4" name="STIC_Sec12_Extension_Included4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">First loss average:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec12_Extension_Included5" name="STIC_Sec12_Extension_Included5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec12_Extension_Included5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec12_Extension_Included5" name="STIC_Sec12_Extension_Included5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b>:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_AnnualPremium']}  name="STIC_Sec12_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec12_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec12_Comments']}  name="STIC_Sec12_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended13'] === 1 || FormData['STIC_ProdComp_Accepted13'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 13:PUBLIC LIABILITY</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_Limit']}  name="STIC_Sec13_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_Premium']}  name="STIC_Sec13_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_ItemNumber']}  name="STIC_Sec13_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_PremNumber']}  name="STIC_Sec13_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <p>Additional claims preparation cost: R1 000 or 10% of the sum insured, whichever is the lower. No additional cover is allowed.</p>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Client must determine limit of indemnity</li>
      <li>Umbrella liability cover available:  R20 million</li>
    </ul>

    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Basis of cover:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_1']}  name="STIC_Sec13_1" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Retroactive date:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_2']}  name="STIC_Sec13_2" type="date" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Occupation:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_3']}  name="STIC_Sec13_3"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional premises:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_4']}  name="STIC_Sec13_4"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit of indemnity:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_5']}  name="STIC_Sec13_5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_6']}  name="STIC_Sec13_6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Products liability/defective workmanship:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_7"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_7" name="STIC_Sec13_7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_7"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_7" name="STIC_Sec13_7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Code</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_8']}  name="STIC_Sec13_8" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Limit</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_9']}  name="STIC_Sec13_9" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Turnover</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_10" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_10']}  name="STIC_Sec13_10" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Premium</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_11" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_11']}  name="STIC_Sec13_11" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">EC Liability:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_12"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_12" name="STIC_Sec13_12" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_12"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_12" name="STIC_Sec13_12" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Limit</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_13" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_13']}  name="STIC_Sec13_13" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Turnover</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_14" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_14']}  name="STIC_Sec13_14" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Premium</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_15" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_15']}  name="STIC_Sec13_15" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">USA/Canada Liability:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_16"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_16" name="STIC_Sec13_16" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_16"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_16" name="STIC_Sec13_16" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Limit</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_17" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_17']}  name="STIC_Sec13_17" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Turnover</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_18" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_18']}  name="STIC_Sec13_18" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Premium</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_19" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_19']}  name="STIC_Sec13_19" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Legal defense cost:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_20"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_20" name="STIC_Sec13_20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_20"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_20" name="STIC_Sec13_20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. A. R50 000</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_21" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_21']}  name="STIC_Sec13_21" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. B. R100 000</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_22" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_22']}  name="STIC_Sec13_22" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. C. R250 000</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_23" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_23']}  name="STIC_Sec13_23" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wrongful arrest and defamation:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_24"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_24" name="STIC_Sec13_24" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_24"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_24" name="STIC_Sec13_24" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. A. Event: R50 000</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_25" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_25']}  name="STIC_Sec13_25" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. B. Event: R100 000</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_26" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_26']}  name="STIC_Sec13_26" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. C. Event: R250 000</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_27" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_27']}  name="STIC_Sec13_27" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Pharmacies:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_28"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_28" name="STIC_Sec13_28" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_28"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_28" name="STIC_Sec13_28" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Number of pharmacists/Assist</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_29" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_29']}  name="STIC_Sec13_29" className="form-control" placeholder="Click to enter text"  aria-describedby="" /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Errors/omissions/negligence:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_30"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_30" name="STIC_Sec13_30" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_30"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_30" name="STIC_Sec13_30" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Hair salons:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_31"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_31" name="STIC_Sec13_31" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_31"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_31" name="STIC_Sec13_31" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Medical Treatment:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_32"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec13_32" name="STIC_Sec13_32" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec13_32"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec13_32" name="STIC_Sec13_32" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b>:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_AnnualPremium']}  name="STIC_Sec13_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec13_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec13_Comments']}  name="STIC_Sec13_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended14'] === 1 || FormData['STIC_ProdComp_Accepted14'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 14:SPECIALIST PRODUCTS</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_Limit']}  name="STIC_Sec14_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_Premium']}  name="STIC_Sec14_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_ItemNumber']}  name="STIC_Sec14_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_PremNumber']}  name="STIC_Sec14_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Cover</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Recommended</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Accepted</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Cover amount</th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Top up personal liability</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended1"] === 1 ? true : false} name="STIC_Sec14_Recommended1" onChange={(e)=>{FormData["STIC_Sec14_Recommended1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted1"] === 1 ? true : false} name="STIC_Sec14_Accepted1" onChange={(e)=>{FormData["STIC_Sec14_Accepted1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount1']}  name="STIC_Sec14_CoverAmount1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Commercial umbrella liability</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended2"] === 1 ? true : false} name="STIC_Sec14_Recommended2" onChange={(e)=>{FormData["STIC_Sec14_Recommended2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted2"] === 1 ? true : false} name="STIC_Sec14_Accepted2" onChange={(e)=>{FormData["STIC_Sec14_Accepted2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount2']}  name="STIC_Sec14_CoverAmount2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Products guarantee</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended3"] === 1 ? true : false} name="STIC_Sec14_Recommended3" onChange={(e)=>{FormData["STIC_Sec14_Recommended3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted3"] === 1 ? true : false} name="STIC_Sec14_Accepted3" onChange={(e)=>{FormData["STIC_Sec14_Accepted3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount3']}  name="STIC_Sec14_CoverAmount3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Cyber risks</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended4"] === 1 ? true : false} name="STIC_Sec14_Recommended4" onChange={(e)=>{FormData["STIC_Sec14_Recommended4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted4"] === 1 ? true : false} name="STIC_Sec14_Accepted4" onChange={(e)=>{FormData["STIC_Sec14_Accepted4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount4']}  name="STIC_Sec14_CoverAmount4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Directors and officers liability</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommendedh5"] === 1 ? true : false} name="STIC_Sec14_Recommended5" onChange={(e)=>{FormData["STIC_Sec14_Recommended5"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted5"] === 1 ? true : false} name="STIC_Sec14_Accepted5" onChange={(e)=>{FormData["STIC_Sec14_Accepted5"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount5']}  name="STIC_Sec14_CoverAmount5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Employment practices liability</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended6"] === 1 ? true : false} name="STIC_Sec14_Recommended6" onChange={(e)=>{FormData["STIC_Sec14_Recommended6"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted6"] === 1 ? true : false} name="STIC_Sec14_Accepted6" onChange={(e)=>{FormData["STIC_Sec14_Accepted6"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount6']}  name="STIC_Sec14_CoverAmount6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Product inefficacy</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended7"] === 1 ? true : false} name="STIC_Sec14_Recommended7" onChange={(e)=>{FormData["STIC_Sec14_Recommended7"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted7"] === 1 ? true : false} name="STIC_Sec14_Accepted7" onChange={(e)=>{FormData["STIC_Sec14_Accepted7"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount7']}  name="STIC_Sec14_CoverAmount7" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Product guarantee</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended8"] === 1 ? true : false} name="STIC_Sec14_Recommended8" onChange={(e)=>{FormData["STIC_Sec14_Recommended8"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted8"] === 1 ? true : false} name="STIC_Sec14_Accepted8" onChange={(e)=>{FormData["STIC_Sec14_Accepted8"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount8']}  name="STIC_Sec14_CoverAmount8" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Cover</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Recommended</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Accepted</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Cover amount</b></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Warehousemen's liability</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended9"] === 1 ? true : false} name="STIC_Sec14_Recommended9" onChange={(e)=>{FormData["STIC_Sec14_Recommended9"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted9"] === 1 ? true : false} name="STIC_Sec14_Accepted9" onChange={(e)=>{FormData["STIC_Sec14_Accepted9"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount9']}  name="STIC_Sec14_CoverAmount9" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Professional indemnity</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended10"] === 1 ? true : false} name="STIC_Sec14_Recommended10" onChange={(e)=>{FormData["STIC_Sec14_Recommended10"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted10"] === 1 ? true : false} name="STIC_Sec14_Accepted10" onChange={(e)=>{FormData["STIC_Sec14_Accepted10"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount10" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount10']}  name="STIC_Sec14_CoverAmount10" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Contractor's All Risk</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended11"] === 1 ? true : false} name="STIC_Sec14_Recommended11" onChange={(e)=>{FormData["STIC_Sec14_Recommended11"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted11"] === 1 ? true : false} name="STIC_Sec14_Accepted11" onChange={(e)=>{FormData["STIC_Sec14_Accepted11"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount11" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount11']}  name="STIC_Sec14_CoverAmount11" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Other</td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Recommended12"] === 1 ? true : false} name="STIC_Sec14_Recommended12" onChange={(e)=>{FormData["STIC_Sec14_Recommended12"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} checked={FormData["STIC_Sec14_Accepted12"] === 1 ? true : false} name="STIC_Sec14_Accepted12" onChange={(e)=>{FormData["STIC_Sec14_Accepted12"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec14_CoverAmount12" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec14_CoverAmount12']}  name="STIC_Sec14_CoverAmount12" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>


    </tbody>
  </table>
  </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended15'] === 1 || FormData['STIC_ProdComp_Accepted15'] === 1 ?
              <>
  <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 15:EMPLOYER'S LIABILITY</b></div>
  <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_Limit']}  name="STIC_Sec15_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_Premium']}  name="STIC_Sec15_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_ItemNumber']}  name="STIC_Sec15_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_PremNumber']}  name="STIC_Sec15_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    
  <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit of indemnity:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_1']}  name="STIC_Sec15_1" className="form-control" placeholder="R 0.00 Annual earnings"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"></td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_1_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_1_1']}  name="STIC_Sec15_1_1" className="form-control" placeholder="R 0.00 Business turnover"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_2']}  name="STIC_Sec15_2" className="form-control" placeholder="R 0.00 Retroactive date"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"></td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_2_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_2_1']}  name="STIC_Sec15_2_1" type="date" className="form-control" placeholder="Click to enter date"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Loading:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_3']}  name="STIC_Sec15_3" className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Total annual premium for item</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_AnnualPremium']}  name="STIC_Sec15_AnnualPremium" className="form-control" placeholder="R 0.00 "  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>  
      
    </tr>

    </tbody>
    </table>

    <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec15_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec15_Comments']}  name="STIC_Sec15_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended16'] === 1 || FormData['STIC_ProdComp_Accepted16'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 16:STATED BENEFITS</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_Limit']}  name="STIC_Sec16_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_Premium']}  name="STIC_Sec16_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_ItemNumber']}  name="STIC_Sec16_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_PremNumber']}  name="STIC_Sec16_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Attach complete list of full names and identity number for each employee.</li>
    </ul>

    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">ID Number</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_1']}  name="STIC_Sec16_1" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Number of persons</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_2']}  name="STIC_Sec16_2" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Occupation</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_3']}  name="STIC_Sec16_3" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Job Description</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_4']}  name="STIC_Sec16_4" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Insured Person</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_5']}  name="STIC_Sec16_5" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Annual earnings</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_6']}  name="STIC_Sec16_6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

      <br/>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Cover</b></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Death</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_7']}  name="STIC_Sec16_7" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Permanant Disability</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_8']}  name="STIC_Sec16_8" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Temporary Disability</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_9']}  name="STIC_Sec16_9" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Business Limitation</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_10"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_10" name="STIC_Sec16_10" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_10"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_10" name="STIC_Sec16_10" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <br/>
    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Extensions</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Yes/No</b></td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Medical Cost</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension1" name="STIC_Sec16_Extension1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension1" name="STIC_Sec16_Extension1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Burns Disfigurement</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension2" name="STIC_Sec16_Extension2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension2" name="STIC_Sec16_Extension2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Passive war</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension3" name="STIC_Sec16_Extension3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension3" name="STIC_Sec16_Extension3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Motorcycling</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension4" name="STIC_Sec16_Extension4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension4" name="STIC_Sec16_Extension4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Mountaineering necessitating the use of ropes</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension5" name="STIC_Sec16_Extension5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension5" name="STIC_Sec16_Extension5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Polo on horse back</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension6"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension6" name="STIC_Sec16_Extension6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension6"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension6" name="STIC_Sec16_Extension6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Funeral Cost</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension7"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension7" name="STIC_Sec16_Extension7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension7"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension7" name="STIC_Sec16_Extension7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Repatriation cost</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension8"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension8" name="STIC_Sec16_Extension8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension8"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension8" name="STIC_Sec16_Extension8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Trauma cost</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension9"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec16_Extension9" name="STIC_Sec16_Extension9" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec16_Extension9"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec16_Extension9" name="STIC_Sec16_Extension9" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_AnnualPremium']}  name="STIC_Sec16_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    </tbody>
    </table>

    <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec16_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec16_Comments']}  name="STIC_Sec16_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended17'] === 1 || FormData['STIC_ProdComp_Accepted17'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 17:GROUP PERSONAL ACCIDENT</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_Limit']}  name="STIC_Sec17_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_Premium']}  name="STIC_Sec17_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ItemNumber']}  name="STIC_Sec17_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_PremNumber']}  name="STIC_Sec17_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Profession:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_1']}  name="STIC_Sec17_1" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Basis:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_2']}  name="STIC_Sec17_2" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Number of People:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_3']}  name="STIC_Sec17_3" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Compensation(death)Sum insured:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_4']}  name="STIC_Sec17_4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_5']}  name="STIC_Sec17_5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Permanant Disability:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_6"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_6" name="STIC_Sec17_6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_6"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_6" name="STIC_Sec17_6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Temporary Disabiltiy:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_7']}  name="STIC_Sec17_7" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Minimum period:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_8']}  name="STIC_Sec17_8" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Maximum period:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_9']}  name="STIC_Sec17_9" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Business Limitation:</td>
      <td>
          {/* <label for="cssss">No</label> */}
          <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_10"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_10" name="STIC_Sec17_10" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_10"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_10" name="STIC_Sec17_10" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Extensions</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Yes/No</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Limit</b></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Premium</b></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Medical Cost:</td>
      <td>
        <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension1" name="STIC_Sec17_Extension1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension1" name="STIC_Sec17_Extension1" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit1']}  name="STIC_Sec17_ExtensionLimit1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium1']}  name="STIC_Sec17_ExtensionPremium1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Burns Disfigurement:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension2" name="STIC_Sec17_Extension2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension2" name="STIC_Sec17_Extension2" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit2']}  name="STIC_Sec17_ExtensionLimit2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium2']}  name="STIC_Sec17_ExtensionPremium2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Passive war:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension3"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension3" name="STIC_Sec17_Extension3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension3"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension3" name="STIC_Sec17_Extension3" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit3']}  name="STIC_Sec17_ExtensionLimit3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium3']}  name="STIC_Sec17_ExtensionPremium3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>    
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Motorcycling:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension4" name="STIC_Sec17_Extension4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension4" name="STIC_Sec17_Extension4" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit4']}  name="STIC_Sec17_ExtensionLimit4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium4']}  name="STIC_Sec17_ExtensionPremium4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>    
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Mountaineering necessitating the use of ropes:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension5"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension5" name="STIC_Sec17_Extension5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension5"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension5" name="STIC_Sec17_Extension5" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit5']}  name="STIC_Sec17_ExtensionLimit5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium5']}  name="STIC_Sec17_ExtensionPremium5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>    
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Polo on horseback:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension6"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension6" name="STIC_Sec17_Extension6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension6"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension6" name="STIC_Sec17_Extension6" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit6']}  name="STIC_Sec17_ExtensionLimit6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium6']}  name="STIC_Sec17_ExtensionPremium6" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>    
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Funeral Cost:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension7"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension7" name="STIC_Sec17_Extension7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension7"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension7" name="STIC_Sec17_Extension7" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit7']}  name="STIC_Sec17_ExtensionLimit7" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium7']}  name="STIC_Sec17_ExtensionPremium7" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>    
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Repatriation Cost:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension8"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension8" name="STIC_Sec17_Extension8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension8"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension8" name="STIC_Sec17_Extension8" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit8']}  name="STIC_Sec17_ExtensionLimit8" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium8']}  name="STIC_Sec17_ExtensionPremium8" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>    
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Trauma Cost:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension9"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec17_Extension9" name="STIC_Sec17_Extension9" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec17_Extension9"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec17_Extension9" name="STIC_Sec17_Extension9" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionLimit9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionLimit9']}  name="STIC_Sec17_ExtensionLimit9" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_ExtensionPremium9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_ExtensionPremium9']}  name="STIC_Sec17_ExtensionPremium9" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>    
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td></td>
      <td></td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_AnnualPremium']}  name="STIC_Sec17_AnnualPremium" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec17_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec17_Comments']}  name="STIC_Sec17_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended18'] === 1 || FormData['STIC_ProdComp_Accepted18'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 18:MOTOR</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Limit']}  name="STIC_Sec18_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Premium']}  name="STIC_Sec18_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_ItemNumber']}  name="STIC_Sec18_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_PremNumber']}  name="STIC_Sec18_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Contingency Liability:</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_1']}  name="STIC_Sec18_1" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_2']}  name="STIC_Sec18_2" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Parking facilities and moving of third party vehicles:</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_3']}  name="STIC_Sec18_3" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_4']}  name="STIC_Sec18_4" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Item Number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_5']}  name="STIC_Sec18_5" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    </tbody>
    </table>

    <p><b>Important Notes:</b></p>
    <ul>
      <li>Vehicle value is based on retail value including all extras</li>
      <li>Settlement of claim is based on the market value of the vehicle at the time</li>
    </ul>

    <table class="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>
      <th></th>
      
      
    </tr>
  </thead>

  <tbody>
  <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Category:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_6']}  name="STIC_Sec18_6" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Class of use:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_7']}  name="STIC_Sec18_7" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Type of cover:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_8']}  name="STIC_Sec18_8" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Registration number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_9']}  name="STIC_Sec18_9" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Year manufactured:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_10" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_10']}  name="STIC_Sec18_10" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Auto dealer's code:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_11" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_11']}  name="STIC_Sec18_11" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Make:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_12" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_12']}  name="STIC_Sec18_12" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Model:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_13" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_13']}  name="STIC_Sec18_13" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">NCB:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_14" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_14']}  name="STIC_Sec18_14" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_15" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_15']}  name="STIC_Sec18_15" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">VSS security:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_16" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_16']}  name="STIC_Sec18_16" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">GVM/CC:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_17" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_17']}  name="STIC_Sec18_17" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Engine Number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_18" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_18']}  name="STIC_Sec18_18" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Chassis Number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_19" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_19']}  name="STIC_Sec18_19" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Hire purchase:</td>
      <td>
      <div className="row col-6 align-items-center">
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec18_20"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec18_20" name="STIC_Sec18_20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    Yes
                </label>
            </div>
            <div className="col-3">
                <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec18_20"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec18_20" name="STIC_Sec18_20" />
            </div>
            <div className="col-3">
                <label className="form-check-label"  >
                    No
                </label>
            </div>
        </div>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Financial institute:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_21" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_21']}  name="STIC_Sec18_21" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td></td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Contact Number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_22" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_22']}  name="STIC_Sec18_22" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td></td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Period:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_23" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_23']}  name="STIC_Sec18_23" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_24" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_24']}  name="STIC_Sec18_24" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_25" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_25']}  name="STIC_Sec18_25" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Parking facilities and moving of third party vehicles:</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_26" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_26']}  name="STIC_Sec18_26" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_27" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_27']}  name="STIC_Sec18_27" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    {/* <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Item Number:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec8_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec8_PremNumber']}  name="STIC_Sec8_PremNumber" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr> */}

    </tbody>
    </table>

    <br/>
    <p><b>First amount payable</b></p>
    <table>
    <thead>
    <tr align="left">     
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left"></th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>  
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>  
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}></th>  
    </tr>
  </thead>

    <tbody>

    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_FaP1"] === 1 ? true : false} name="STIC_Sec18_FaP1" onChange={(e)=>{FormData["STIC_Sec18_FaP1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Basic:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP1_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP1_1']}  name="STIC_Sec18_FaP1_1" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claim/sum insured with minimum amount of R</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP1_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP1_2']}  name="STIC_Sec18_FaP1_2" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
    </tr>

  <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_FaP2"] === 1 ? true : false} name="STIC_Sec18_FaP2" onChange={(e)=>{FormData["STIC_Sec18_FaP2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Theft and/or hijacking</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP2_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP2_1']}  name="STIC_Sec18_FaP2_1" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claims amount/sum insured with minimum amount of R</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP2_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP2_2']}  name="STIC_Sec18_FaP2_2" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_FaP3"] === 1 ? true : false} name="STIC_Sec18_FaP3" onChange={(e)=>{FormData["STIC_Sec18_FaP3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Motor vehicle glass</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP3_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP3_1']}  name="STIC_Sec18_FaP3_1" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claims amount/sum insured with minimum amount of R</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP3_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP3_2']}  name="STIC_Sec18_FaP3_2" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_FaP4"] === 1 ? true : false} name="STIC_Sec18_FaP4" onChange={(e)=>{FormData["STIC_Sec18_FaP4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional voluntary excess</td>
      <td></td>
      <td></td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP4_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP4_1']}  name="STIC_Sec18_FaP4_1" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_FaP5"] === 1 ? true : false} name="STIC_Sec18_FaP5" onChange={(e)=>{FormData["STIC_Sec18_FaP5"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Third party liability</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP5_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP5_1']}  name="STIC_Sec18_FaP5_1" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claims amount/sum insured with minimum amount of R</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP5_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP5_2']}  name="STIC_Sec18_FaP5_2" className="form-control" placeholder="0.00"  aria-describedby="" /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_FaP6"] === 1 ? true : false} name="STIC_Sec18_FaP6" onChange={(e)=>{FormData["STIC_Sec18_FaP6"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Loss of keys:</td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP6_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP6_1']}  name="STIC_Sec18_FaP6_1" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_FaP6_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_FaP6_2']}  name="STIC_Sec18_FaP6_2" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
    </tr>

    <br/>
    <div><b>Extensions</b></div>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_Extension1"] === 1 ? true : false} name="STIC_Sec18_Extension1" onChange={(e)=>{FormData["STIC_Sec18_Extension1"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Credit shortfall:(only applicable if 'Hire Purchase' Yes): </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Limit:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Extension1_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Extension1_1']}  name="STIC_Sec18_Extension1_1" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Extension1_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Extension1_2']}  name="STIC_Sec18_Extension1_2" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_Extension2"] === 1 ? true : false} name="STIC_Sec18_Extension2" onChange={(e)=>{FormData["STIC_Sec18_Extension2"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Road assistance: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Extension2_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Extension2_1']}  name="STIC_Sec18_Extension2_1" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_Extension3"] === 1 ? true : false} name="STIC_Sec18_Extension3" onChange={(e)=>{FormData["STIC_Sec18_Extension3"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Rental: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Extension3_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Extension3_1']}  name="STIC_Sec18_Extension3_1" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_Extension4"] === 1 ? true : false} name="STIC_Sec18_Extension4" onChange={(e)=>{FormData["STIC_Sec18_Extension4"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Locks and keys: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Extension4_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Extension4_1']}  name="STIC_Sec18_Extension4_1" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_Extension5"] === 1 ? true : false} name="STIC_Sec18_Extension5" onChange={(e)=>{FormData["STIC_Sec18_Extension5"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Trauma: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Extension5_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Extension5_1']}  name="STIC_Sec18_Extension5_1" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" onMouseLeave={(e)=>{onFieldBlur(e)}} id="vehicle1" checked={FormData["STIC_Sec18_Extension6"] === 1 ? true : false} name="STIC_Sec18_Extension6" onChange={(e)=>{FormData["STIC_Sec18_Extension6"] === 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Towing: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Extension6_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Extension6_1']}  name="STIC_Sec18_Extension6_1" className="form-control" placeholder="0.00"  aria-describedby=""  /> 
      </td>
      <td></td>
      <td></td>
    </tr>


    </tbody>
  
    </table>

    <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec18_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec18_Comments']}  name="STIC_Sec18_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended19'] === 1 || FormData['STIC_ProdComp_Accepted19'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 19:ELECTRONIC EQUIPMENT</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Limit']}  name="STIC_Sec19_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Premium']}  name="STIC_Sec19_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_ItemNumber']}  name="STIC_Sec19_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_PremNumber']}  name="STIC_Sec19_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <div><b>PART 1</b></div>
    
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Additional claims Preparation cost:</label>
                  </div>

              </div>
          </div>

          <hr/>
          

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Burglary cover:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_1']}  name="STIC_Sec19_Part1_1"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                  </div>

                  <div className="col-2"></div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Make model:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_2']}  name="STIC_Sec19_Part1_2"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2"></div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Item description:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_3']}  name="STIC_Sec19_Part1_3"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2"></div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Serial Number:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_4']}  name="STIC_Sec19_Part1_4"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2"></div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Sum insured:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_5']}  name="STIC_Sec19_Part1_5"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_6']}  name="STIC_Sec19_Part1_6"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">EML%</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_7" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_7']}  name="STIC_Sec19_Part1_7"  className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2"></div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">First amount payable:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_8']}  name="STIC_Sec19_Part1_8"  className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">General minimum:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part1_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part1_9']}  name="STIC_Sec19_Part1_9"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <br/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>PART 2</b></label>
                  </div>

              </div>
          </div>

          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label"><b>Working expense increases</b></label>
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Item:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part2_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part2_1']}  name="STIC_Sec19_Part2_1"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2"></div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Time excess:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part2_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part2_3']}  name="STIC_Sec19_Part2_3"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Indemnity period:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part2_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part2_4']}  name="STIC_Sec19_Part2_4"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Sum insured:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part2_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part2_5']}  name="STIC_Sec19_Part2_5"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Part2_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Part2_6']}  name="STIC_Sec19_Part2_6"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Extensions</b></label>
                  </div>

                  <div className="col-4">
                    <label className="col-form-label"><b>Yes/No</b></label>
                  </div>

                  <div className="col-2">
                    <label className="col-form-label"><b>Premium</b></label>
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Telkom access lines</label>
                  </div>

                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec19_Extension1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec19_Extension1" name="STIC_Sec19_Extension1" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec19_Extension1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec19_Extension1" name="STIC_Sec19_Extension1" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>

                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Extension_Premium1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Extension_Premium1']}  name="STIC_Sec19_Extension_Premium1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Failure of electricity</label>
                  </div>

                  <div className="row col-4 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec19_Extension2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec19_Extension2" name="STIC_Sec19_Extension2" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec19_Extension2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec19_Extension2" name="STIC_Sec19_Extension2" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              No
                          </label>
                      </div>
                  </div>

                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Extension_Premium2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Extension_Premium2']}  name="STIC_Sec19_Extension_Premium2"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <br/>
          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Reinstatement of data</b></label>
                  </div>

                  <div className="col-4">
                    
                  </div>

                  <div className="col-2">
                    
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Item:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_RoD_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_RoD_1']}  name="STIC_Sec19_RoD_1"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2"></div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Sum insured:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_RoD_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_RoD_2']}  name="STIC_Sec19_RoD_2"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_RoD_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_RoD_3']}  name="STIC_Sec19_RoD_3"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">First amount payable:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_RoD_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_RoD_4']}  name="STIC_Sec19_RoD_4"  className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Insured with minimum:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_RoD_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_RoD_5']}  name="STIC_Sec19_RoD_5"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Total annual premium for item:</b></label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_AnnualPremium']}  name="STIC_Sec19_AnnualPremium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                  </div>

                  <div className="col-4">
                  </div>
              </div>
          </div>


      </div>
  </div>

  <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec19_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec19_Comments']}  name="STIC_Sec19_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended20'] === 1 || FormData['STIC_ProdComp_Accepted20'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 20:HOUSE OWNERS</b></div>
    <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-4">
                  <label className="col-form-label">Additional claims Preparation cost:</label>
              </div>

          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Limit:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_Limit']}  name="STIC_Sec20_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premium:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_Premium']}  name="STIC_Sec20_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
          </div>
      </div>

      <hr/>
      <div className="col-12" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Item Number:</label>
              </div>

              <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_ItemNumber']}  name="STIC_Sec20_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>

              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>

              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_PremNumber']}  name="STIC_Sec20_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
              </div>
          </div>
      </div>
    </div>
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">
          

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Type of dwelling:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_1']}  name="STIC_Sec20_1"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Construction:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_2']}  name="STIC_Sec20_2"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Construction description:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_3']}  name="STIC_Sec20_3"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">EML%:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_4']}  name="STIC_Sec20_4"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Sum insured:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_5']}  name="STIC_Sec20_5"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_6']}  name="STIC_Sec20_6"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Extensions</b></label>
                  </div>

                  <div className="col-4">
                    <label className="col-form-label"><b>Yes/No</b></label>
                  </div>

                  <div className="col-2">
                    <label className="col-form-label"><b>Premium</b></label>
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Subsidence and landslip</label>
                  </div>

                  <div className="row col-4 align-items-center">
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec20_Extension1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec20_Extension1" name="STIC_Sec20_Extension1" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            Yes
                        </label>
                    </div>
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec20_Extension1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec20_Extension1" name="STIC_Sec20_Extension1" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            No
                        </label>
                    </div>
                </div>

                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_Extension_Premium1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_Extension_Premium1']}  name="STIC_Sec20_Extension_Premium1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Inflation escalation</label>
                  </div>

                  <div className="row col-4 align-items-center">
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec20_Extension2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec20_Extension2" name="STIC_Sec20_Extension2" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            Yes
                        </label>
                    </div>
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec20_Extension2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec20_Extension2" name="STIC_Sec20_Extension2" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            No
                        </label>
                    </div>
                </div>

                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_Extension_Premium2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_Extension_Premium2']}  name="STIC_Sec20_Extension_Premium2"  className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Total annual premium for item:</b></label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_AnnualPremium']}  name="STIC_Sec20_AnnualPremium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                  </div>

                  <div className="col-4">
                  </div>
              </div>
          </div>

      </div>
      </div>

      <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec20_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec20_Comments']}  name="STIC_Sec20_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>
    </>
        :
              <>
              </>
    }
    {
        FormData['STIC_ProdComp_Recommended21'] === 1 || FormData['STIC_ProdComp_Accepted21'] === 1 ?
              <>
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 21:HOUSE HOLDERS</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">
        <div className="row" style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>
          <div className="col-12" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-4">
                      <label className="col-form-label">Additional claims Preparation cost:</label>
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-12" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
                <div className="col-2">
                    <label className="col-form-label">Limit:</label>
                </div>

                <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_Limit" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_Limit']}  name="STIC_Sec21_Limit"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                </div>

                <div className="col-2">
                    <label className="col-form-label">Premium:</label>
                </div>

                <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_Premium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_Premium']}  name="STIC_Sec21_Premium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                </div>
            </div>
        </div>

        <hr/>
        <div className="col-12" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
                <div className="col-2">
                    <label className="col-form-label">Item Number:</label>
                </div>

                <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_ItemNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_ItemNumber']}  name="STIC_Sec21_ItemNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                </div>

                <div className="col-2">
                    <label className="col-form-label">Premises Number:</label>
                </div>

                <div className="col-4">
                  <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_PremNumber" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_PremNumber']}  name="STIC_Sec21_PremNumber"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                </div>
            </div>
        </div>
        </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Type of dwelling:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_1']}  name="STIC_Sec21_1"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Construction:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_2']}  name="STIC_Sec21_2"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Construction description:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_3']}  name="STIC_Sec21_3"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">EML%:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_4" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_4']}  name="STIC_Sec21_4"  className="form-control" placeholder="0.00"  aria-describedby=""/>
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Sum insured:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_5']}  name="STIC_Sec21_5"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_6']}  name="STIC_Sec21_6"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Extensions</b></label>
                  </div>

                  <div className="col-4">
                    <label className="col-form-label"><b>Yes/No</b></label>
                  </div>

                  <div className="col-2">
                    <label className="col-form-label"><b>Premium</b></label>
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Subsidence and landslip</label>
                  </div>

                  <div className="row col-4 align-items-center">
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec21_Extension1"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec21_Extension1" name="STIC_Sec21_Extension1" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            Yes
                        </label>
                    </div>
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec21_Extension1"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec21_Extension1" name="STIC_Sec21_Extension1" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            No
                        </label>
                    </div>
                </div>

                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_Extension_Premium1" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_Extension_Premium1']}  name="STIC_Sec21_Extension_Premium1"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Inflation escalation</label>
                  </div>

                  <div className="row col-4 align-items-center">
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec21_Extension2"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_Sec21_Extension2" name="STIC_Sec21_Extension2" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            Yes
                        </label>
                    </div>
                    <div className="col-3">
                        <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_Sec21_Extension2"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_Sec21_Extension2" name="STIC_Sec21_Extension2" />
                    </div>
                    <div className="col-3">
                        <label className="form-check-label"  >
                            No
                        </label>
                    </div>
                </div>

                  <div className="col-2">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_Extension_Premium2" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_Extension_Premium2']}  name="STIC_Sec21_Extension_Premium2"  className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-4"></div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Total annual premium for item:</b></label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_AnnualPremium" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_AnnualPremium']}  name="STIC_Sec21_AnnualPremium"  className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                  </div>

                  <div className="col-4">
                  </div>
              </div>
          </div>

    

        </div>
      </div>

      <br/>
    <div><b>Comments</b></div>
      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Sec21_Comments" onChange={(e) => {onChange(e)}} value={FormData['STIC_Sec21_Comments']}  name="STIC_Sec21_Comments"  className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <br/>
    </>
        :
              <>
              </>
    }
    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>D. DEBIT ORDER DETAILS</b></div>

    <p>
      I, the undersigned hereby request and authorise to arrange with my bank to collect the payment due on the policy (as amended from time to time) by debit order from the bank account identified below.  
    </p>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Title:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_1']}  name="STIC_SecD_1"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Full names and surname:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_2']}  name="STIC_SecD_2"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Identity Number:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_3']}  name="STIC_SecD_3"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Language preference:</label>
                  </div>

                  <div className="col-4">
                    <div className="row col-6 align-items-center">
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_SecD_4"] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="STIC_SecD_4" name="STIC_SecD_4" />
                      </div>
                      <div className="col-3">
                          <label className="form-check-label"  >
                              Yes
                          </label>
                      </div>
                      <div className="col-3">
                          <input onMouseLeave={(e)=>{onFieldBlur(e)}} className="form-check-input" checked={FormData["STIC_SecD_4"] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="STIC_SecD_4" name="STIC_SecD_4" />
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
                  <div className="col-2">
                      <label className="col-form-label">Postal address:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_5" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_5']}  name="STIC_SecD_5"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
{/* 
                  <div className="col-2">
                      <label className="col-form-label">Postal code:</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_6" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_6']}  name="STIC_SecD_6"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div> */}
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Details of account</b></label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_7" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_7']}  name="STIC_SecD_7"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Name of bank:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_8" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_8']}  name="STIC_SecD_8"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Name of branch:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_9" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_9']}  name="STIC_SecD_9"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">6-Digit branch code:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_10" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_10']}  name="STIC_SecD_10"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Date of first withdrawal:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} type="date" spellCheck="true" id="STIC_SecD_11" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_11']}  name="STIC_SecD_11"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label className="col-form-label">Sign:</label>
                  </div>

                  <div className="col-4">
                    <label style={{color: 'white'}} className="col-form-label">Sign:</label>
                    {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_12" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_12']}  name="STIC_SecD_12"  className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} /> */}
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Date(dd/mm/yyyy):</label>
                  </div>

                  <div className="col-4">
                    <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecD_13" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecD_13']}  name="STIC_SecD_13"  type="date" className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>


        </div>
      </div>

      <br/>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>E. Record of Advice</b></div>

    <p>Products considered appropriate to address the needs of the client</p>
    {/* <textarea maxLength={500} spellCheck="true" id="STIC_SecE_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecE_1']}  name="STIC_SecE_1"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"1000px",height:"100px"}} /> */}
    <Editor onBlur={(e)=>{onFieldBlur(e)}}
      value={FormData['STIC_SecE_1']}
      onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_SecE_1']: newText }) }}                  
      name="STIC_SecE_1"
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

    <p>Recommended product</p>
    {/* <textarea maxLength={500} spellCheck="true" id="STIC_SecE_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecE_2']}  name="STIC_SecE_2"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"1000px",height:"100px"}} /> */}
    <Editor onBlur={(e)=>{onFieldBlur(e)}}
      value={FormData['STIC_SecE_2']}
      onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_SecE_2']: newText }) }}                   
      name="STIC_SecE_2"
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

    <p>Reasons why the recommended product is considered the most suitable for the needs of the client:</p>
    {/* <textarea maxLength={500} spellCheck="true" id="STIC_SecE_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecE_3']}  name="STIC_SecE_3"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"1000px",height:"100px"}} /> */}
    <Editor onBlur={(e)=>{onFieldBlur(e)}}
      value={FormData['STIC_SecE_3']}
      onEditorChange={(newText)=>{ setFormData({...FormData, ['STIC_SecE_3']: newText }) }}                 
      name="STIC_SecE_3"
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

    <br/>

    <div className={
        state['advisor']['email'].includes('sfp') || state['advisor']['email'].includes('succession') ? "text-start sfp-text" 
        : state['advisor']['email'].includes('fs4p') ? "text-start fs4p-text" 
        : state['advisor']['email'].includes('sanlam') ? "text-start sanlam-text" 
        : ""
      } style={{fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>G. DECLARATION BY INTERMEDIARY</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Name of intermediary:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecG_1" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecG_1']}  name="STIC_SecG_1"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Code:</label>
                  </div>

                  <div className="col-4">
                      <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecG_2" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecG_2']}  name="STIC_SecG_2"  className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

      </div>
    </div>

    <p>I hereby declare that, if applicable, I have explained the meaning and possible detrimental consequences of replacement of a financial product to the applicant.</p>
    <p>I hereby declare that I have disclosed the intermediary’s permit and product quotation to the applicant.</p>
    <p>I understand and accept that if this plan is cancelled, the fee or commission paid to me can be reversed on my remuneration account, in accordance with the terms of my contract.</p>
    <p>I hereby declare that I am authorised to market this product and that, in terms of the Financial Advisory and Intermediary Services Act and its sub-legislation, I have not been debarred nor has any authorisation given to me been withdrawn, suspended, or lapsed.</p>


    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

        <div className="col-16" style={{paddingBottom: "0.5%"}}>
          <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Signature of intermediary:</label>
              </div>
              <div className="col-4">
                  <label className="col-form-label" style={{color: "white"}}>Signature of intermediary:</label>
                {/* <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_Branch_Number" onChange={(e) => {onChange(e)}} value={FormData['STIC_Branch_Number']}  name="STIC_Branch_Number"  className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} /> */}
              </div>
              <div className="col-2">
                  <label className="col-form-label">Date(dd/mm/yyyy):</label>
              </div>
              <div className="col-4">
                <input onBlur={(e)=>{onFieldBlur(e)}} spellCheck="true" id="STIC_SecG_3" onChange={(e) => {onChange(e)}} value={FormData['STIC_SecG_3']}  name="STIC_SecG_3"  type="date" className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
        </div>

      </div>
  </div>
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
                          className="updateSTICFormBTN"
                          style={{border: "none", backgroundColor: "transparent"}}
                      >
                          <i className="fa-solid fa-check" />
                      </button>
                  </span>
              </div>
          </div>
  </form>
<br/>
  <p><b>Very Important:</b></p>
  <p>You are strongly advised to study your policy to acquaint yourself with the detail of all special terms and conditions for liability. If you have any questions or queries regarding the terms of your policy contract, you are advised to immediately contact the intermediary whose detail appears in Section F so that these issues can be addressed.</p>

    



        </>       

    )
 }
}



const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect(mapStateToProps)(Short_term_Commercial)