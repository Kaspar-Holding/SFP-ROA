import axios from 'axios';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
function AssuranceRisk()
{
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
      
      const location = useLocation();
      const { state } = location;
      
      const [errorData, setErrorData] = useState({
        status: "",
        message: ""
      })
      const [responseErrorVisibility, setResponseErrorVisibility] = useState("none")
      
      const [UpdateMessage, setUpdateMessage] = useState("")
      const [UpdateMessageVisibility, setUpdateMessageVisibility] = useState("none")
      const [updateErrorData, setUpdateErrorData] = useState({
          status: "",
          message: ""
      })
      const [updateErrorVisibilty, setUpdateErrorVisibility] = useState("none")
      
      const [FormData, setFormData] = useState({
        
        advisorId : state['advisorId'],
        formId : state['formId'],
        
                
        AR_BusinessTradeName : "",   
        AR_BusinessRegisteredName : "",   
        AR_BusinessAuthorisedPersons : "",   
        AR_BusinessFinancialAdvisor : "",   
        AR_BusinessAddress : "",   
        AR_BusinessEmail : "",   
        AR_BusinessPhoneNumber : "",   
        AR_BusinessDate : "",   

        AR_ComDisc_AuthorizedPerson : 0, 
        AR_ComDisc_AuthorizedPersonDetail : "",   
        AR_ComDisc_Authority : 0, 
        AR_ComDisc_AuthorityDetail : "",   

        AR_FICA : 0, 
        AR_FICADetail : "",   

        AR_RepPrs_Taken : 0, 
        AR_RepPrs_TakenDetail : "",   
        AR_RepPrs_Explained : 0, 
        AR_RepPrs_ExplainedDetail : "",   
        AR_RepPrs_Cancelled : 0, 
        AR_RepPrs_CancelledDetail : "",  

        AR_SourceOfFunds : 0, 
        AR_SourceOfFundsDetail : "",   
        
        AR_ReplacementBackInfo : "",   

        AR_BusA_BnS : false,  
        AR_BusA_KeyP_Insurance : false,  
        AR_BusA_ContingentLiability : false,  
        AR_BusA_BusOvProt : false,  
        AR_BusA_CLARedm : false,  
        AR_BusA_DebitLoanRedemption : false,  
        AR_BusA_FundingOfFutureExpenses : false,  
        AR_BusA_FundingOfDeferredGratuities : false,  
        AR_BusA_Details : "",    

        AR_BnS_DeathTotalNeed : "",   
        AR_BnS_DeathProvisions : "",   
        AR_BnS_DeathShortfallSurplus : "",   
        AR_BnS_DeathAssuranceInvestments : "",   
            
        AR_BnS_DiC_TotalNeed : "",   
        AR_BnS_DiC_ExistingProvisions : "",   
        AR_BnS_DiC_ExistingShortfallSurplus : "",   
        AR_BnS_DiC_Investments : "",      

        AR_BnS_OtherTotalNeed : "",   
        AR_BnS_OtherExistingProvisions : "",   
        AR_BnS_OtherExistingShortfallSurplus : "",   
        AR_BnS_OtherInvestments : "",   
            
        AR_BnS_Comments : "",   

        AR_KeyP_DC_TotalNeed : "",   
        AR_KeyP_DC_ExistingProvisions : "",   
        AR_KeyP_DC_ExistingShortfallSurplus : "",   
        AR_KeyP_DC_Investments : "",   
            
        AR_KeyP_DiC_TotalNeed : "",   
        AR_KeyP_DiC_ExistingProvisions : "",   
        AR_KeyP_DiC_ExistingShortfallSurplus : "",   
        AR_KeyP_DiC_Investments : "",   
            
        AR_KeyP_TI_CoverTotalNeed : "",   
        AR_KeyP_TI_CoverExistingProvisions : "",   
        AR_KeyP_TI_CoverExistingShortfallSurplus : "",   
        AR_KeyP_TI_CoverInvestments : "",       
            
        AR_KeyP_PI_CoverTotalNeed : "",   
        AR_KeyP_PI_CoverExistingProvisions : "",   
        AR_KeyP_PI_CoverExistingShortfallSurplus : "",   
        AR_KeyP_PI_CoverInvestments : "",       

        AR_KeyP_OtherTotalNeed : "",   
        AR_KeyP_OtherExistingProvisions : "",   
        AR_KeyP_OtherExistingShortfallSurplus : "",   
        AR_KeyP_OtherInvestments : "",    
            
        AR_KeyP_Comments : "",       

        AR_SureNLia_DeathTotalNeed : "",   
        AR_SureNLia_DeathProvisions : "",   
        AR_SureNLia_DeathShortfallSurplus : "",   
        AR_SureNLia_DeathAssuranceInvestments : "",   
            
        AR_SureNLia_DiC_TotalNeed : "",   
        AR_SureNLia_DiC_ExistingProvisions : "",   
        AR_SureNLia_DiC_ExistingShortfallSurplus : "",   
        AR_SureNLia_DiC_Investments : "",      

        AR_SureNLia_OtherTotalNeed : "",   
        AR_SureNLia_OtherExistingProvisions : "",   
        AR_SureNLia_OtherExistingShortfallSurplus : "",   
        AR_SureNLia_OtherInvestments : "",   
            
        AR_SureNLia_Comments : "",   
            
        AR_BusOvProt_TI_CoverTotalNeed : "",   
        AR_BusOvProt_TI_CoverExistingProvisions : "",   
        AR_BusOvProt_TI_CoverExistingShortfallSurplus : "",   
        AR_BusOvProt_TI_CoverInvestments : "",       
            
        AR_BusOvProt_PI_CoverTotalNeed : "",   
        AR_BusOvProt_PI_CoverExistingProvisions : "",   
        AR_BusOvProt_PI_CoverExistingShortfallSurplus : "",   
        AR_BusOvProt_PI_CoverInvestments : "",       

        AR_BusOvProt_OtherTotalNeed : "",   
        AR_BusOvProt_OtherExistingProvisions : "",   
        AR_BusOvProt_OtherExistingShortfallSurplus : "",   
        AR_BusOvProt_OtherInvestments : "",    
            
        AR_BusOvProt_Comments : "", 

        AR_CLARedm_DC_TotalNeed : "",   
        AR_CLARedm_DC_ExistingProvisions : "",   
        AR_CLARedm_DC_ExistingShortfallSurplus : "",   
        AR_CLARedm_DC_Investments : "",   
            
        AR_CLARedm_DiC_TotalNeed : "",   
        AR_CLARedm_DiC_ExistingProvisions : "",   
        AR_CLARedm_DiC_ExistingShortfallSurplus : "",   
        AR_CLARedm_DiC_Investments : "",   
            
        AR_CLARedm_OtherTotalNeed : "",   
        AR_CLARedm_OtherExistingProvisions : "",   
        AR_CLARedm_OtherExistingShortfallSurplus : "",   
        AR_CLARedm_OtherInvestments : "",    
            
        // AR_CLARedm_Comments : "",  

        AR_DLARedm_DC_TotalNeed : "",   
        AR_DLARedm_DC_ExistingProvisions : "",   
        AR_DLARedm_DC_ExistingShortfallSurplus : "",   
        AR_DLARedm_DC_Investments : "",   
            
        AR_DLARedm_DiC_TotalNeed : "",   
        AR_DLARedm_DiC_ExistingProvisions : "",   
        AR_DLARedm_DiC_ExistingShortfallSurplus : "",   
        AR_DLARedm_DiC_Investments : "",   
            
        AR_DLARedm_OtherTotalNeed : "",   
        AR_DLARedm_OtherExistingProvisions : "",   
        AR_DLARedm_OtherExistingShortfallSurplus : "",   
        AR_DLARedm_OtherInvestments : "",    
            
        // AR_DLARedm_Comments : "",  
            
        AR_LifeCoverFinancialSolutions : "",   
        AR_DiC_FinancialSolutions : "",  

        AR_AltS_1 : "",   
        AR_AltS_2 : "",   
        AR_AltS_3 : "",   

        AR_ProductProvider : "",   
        AR_PolicyNumber : "",   
        AR_ProductName : "",   
        AR_ProductPremium : "",   
        AR_ProductPremiumFrequency : 0,   
        AR_ProductPattern : "",   
        AR_ProductEscalation : "",   
        AR_ProductContractingParty : "",   
        AR_ProductLivesAssured : "",   
        AR_ProductPremiumPayer : "",   
        AR_Product1stYearCommission : "",   
        AR_Product2ndYearCommission : "",   
        AR_ProductOngoingFees : "",   
        AR_ProductOngoingFeesFrequency : "",   
            
        AR_BenDesc_1 : "",
        AR_BenDesc_CoverAmount1 : "",
        AR_BenDesc_2 : "",
        AR_BenDesc_CoverAmount2 : "",
        AR_BenDesc_3 : "",
        AR_BenDesc_CoverAmount3 : "",
        // AR_BenDesc_4 : "",
        // AR_BenDesc_CoverAmount4 : "",
        // AR_BenDesc_5 : "",
        // AR_BenDesc_CoverAmount5 : "",
        // AR_BenDesc_6 : "",
        // AR_BenDesc_CoverAmount6 : "",
        // AR_BenDesc_7 : "",
        // AR_BenDesc_CoverAmount7 : "",
            
        AR_ProductReasons : "",
        AR_ProductMaterialAspects : "",
        AR_ProductDetails : "",
        AR_ProductBriefSummary : "",
        AR_Cessionaries : "",
        AR_InformationExplained : "",


      })
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
      const createARForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_assurance_risk_data/`, Body ,config)
            // console.log(response.data['formData'])
            if (response.status === 201) {
                setFormData(response.data['formData'])
            } else {
                setFormData(response.data['formData'])
            }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
            setErrorData({
              status: error.response.status,
              message: error.response.statusText
            })
            setResponseErrorVisibility("block")
        }
      }
      
      const MIN_TEXTAREA_HEIGHT = 32;
      const textareaRef = useRef(null);
      useLayoutEffect(() => {
          textareaRef.current.style.height = "inherit";
          // Set height
          textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
          )}px`;
      }, [FormData])
      useEffect(() => {
          createARForm(FormData)
          // setInterval(updateIPForm, 20000);
      }, []);
      // console.log(JSON.stringify(FormData))
    return(
        <>
          <form>
            
        <br/>
            <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>BUSINESS ASSURANCE</b></div>
            <hr/>
            <div className="alert alert-danger" style={{display: responseErrorVisibility}} role="alert">
                {errorData.status} : {errorData.message}
            </div>
            <div className="alert alert-success" style={{display: UpdateMessageVisibility}} role="alert">
                {UpdateMessage}
            </div>
    
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Trade name of Business:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BusinessTradeName" name='AR_BusinessTradeName' value={FormData['AR_BusinessTradeName']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Trade name of Business"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Registered name of Business:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BusinessRegisteredName" name='AR_BusinessRegisteredName' value={FormData['AR_BusinessRegisteredName']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Registered name of business (If different from the trade name of the business)"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Authorised Person(s):</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BusinessAuthorisedPersons" name='AR_BusinessAuthorisedPersons' value={FormData['AR_BusinessAuthorisedPersons']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Person(s) who may act on behalf of this business"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Financial Advisor:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true" disabled id="AR_BusinessFinancialAdvisor" name='AR_BusinessFinancialAdvisor' value={FormData['AR_BusinessFinancialAdvisor']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Primary intermediary's name"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Address:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BusinessAddress" name='AR_BusinessAddress' value={FormData['AR_BusinessAddress']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Business address"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Email:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true" disabled  type="email" id="AR_BusinessEmail" name='AR_BusinessEmail' value={FormData['AR_BusinessEmail']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Email address"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Phone:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BusinessPhoneNumber" name='AR_BusinessPhoneNumber' value={FormData['AR_BusinessPhoneNumber']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Contact numbers"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Date:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true" disabled type="date" id="AR_BusinessDate" name='AR_BusinessDate' value={FormData['AR_BusinessDate']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Click or tap to enter date"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-12" />

            <div className="col-12 p_class">
                <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>
            </div>

            <h5 className="section_class"><b>SECTION A:</b></h5>
            {/* <ol style={{fontFamily: 'Arial Narrow',fontSize: 15}}/> */}
            <div className="h6 fw-bold" style={{color: '#00788A'}}>1. Compulsory Disclosures</div>
            

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Authorised person(s) was/were provided with a copy of the Letter of Introduction.</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_ComDisc_AuthorizedPerson'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="AR_ComDisc_AuthorizedPerson" name="AR_ComDisc_AuthorizedPerson" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_ComDisc_AuthorizedPerson'] == 1 ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="AR_ComDisc_AuthorizedPerson" name="AR_ComDisc_AuthorizedPerson" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12" id="letter_of_introduction_2">
                    {
                        letterOfIntroductionVisibility ?
                        <>
                            <div id="letter_of_introduction_instructions" className="hidden_class">
                                <p>If no, motivate</p>
                            </div>
                        </> :
                        null
                    }
                    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}   id="AR_ComDisc_AuthorizedPersonDetail" name="AR_ComDisc_AuthorizedPersonDetail" value={FormData['AR_ComDisc_AuthorizedPersonDetail']} onChange={(e) => {onChange(e)}} onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                </div>
            </div>

            <hr className="col-12" />
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided authority to access information.</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_ComDisc_Authority'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="AR_ComDisc_Authority" name="AR_ComDisc_Authority" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_ComDisc_Authority'] == 1  ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="AR_ComDisc_Authority" name="AR_ComDisc_Authority" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
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
                      <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}   id="AR_ComDisc_AuthorityDetail" name="AR_ComDisc_AuthorityDetail" value={FormData['AR_ComDisc_AuthorityDetail']} onChange={(e) => {onChange(e)}} onFocus={letter_of_introduction_access_onFocus} onBlur={letter_of_introduction_access_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                </div>
            </div>
            <hr/>
            <div className="h6 fw-bold" style={{color: '#00788A'}}>2. Financial Intelligence Centre Act (FICA)</div>

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided the required FICA documents.</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_FICA'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="AR_FICA" name="AR_FICA"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_FICA'] == 1 ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="AR_FICA" name="AR_FICA"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
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
                <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}   id="AR_FICADetail" name="AR_FICADetail" value={FormData['AR_FICADetail']} onChange={(e) => {onChange(e)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                </div>
            </div>
            <hr/>

            <div className="h6 fw-bold" style={{color: '#00788A'}}>3. Replacements</div>

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Does/Do the product(s) taken replace an existing product(s)?</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_RepPrs_Taken'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="AR_RepPrs_Taken" name="AR_RepPrs_Taken"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_RepPrs_Taken'] == 1 ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="AR_RepPrs_Taken" name="AR_RepPrs_Taken"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
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
                <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}   id="AR_RepPrs_TakenDetail" name="AR_RepPrs_TakenDetail" value={FormData['AR_RepPrs_TakenDetail']} onChange={(e) => {onChange(e)}} onFocus={rica_onFocus} onBlur={rica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                </div>
            </div>

            <hr/>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">If “Yes” (above), the Financial Adviser confirms that all disclosures on the Replacement Product Comparison document have been explained to the client.</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_RepPrs_Explained'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="AR_RepPrs_Explained" name="AR_RepPrs_Explained"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_RepPrs_Explained'] == 1 ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="AR_RepPrs_Explained" name="AR_RepPrs_Explained"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
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
                <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}   id="AR_RepPrs_ExplainedDetail" name="AR_RepPrs_ExplainedDetail" value={FormData["AR_RepPrs_ExplainedDetail"]} onChange={(e) => {onChange(e)}} onFocus={rica_onFocus} onBlur={rica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                </div>
            </div>

            <hr/>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">The client has confirmed that no financial products were canceled, Lapsed forfeited, surrendered, or partially surrendered in the 6 months preceding and does not intend to cancel a financial product in the next 6 months.</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_RepPrs_Cancelled'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="AR_RepPrs_Cancelled" name="AR_RepPrs_Cancelled"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn2" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['AR_RepPrs_Cancelled'] == 1 ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="AR_RepPrs_Cancelled" name="AR_RepPrs_Cancelled"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn2" >
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
                <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}   id="AR_RepPrs_CancelledDetail" name="AR_RepPrs_CancelledDetail" value={FormData["AR_RepPrs_CancelledDetail"]} onChange={(e) => {onChange(e)}} onFocus={rica_onFocus} onBlur={rica_onBlur} className="form-control" placeholder="If no, motivate" aria-describedby="" ></textarea>
                </div>
            </div>

            <hr/>
            {/* <div className="h6 fw-bold" style={{color: '#00788A'}}>4. Source of Funds</div>
            <div className='row'>
                <div className='col-6'>
                    <p className='text-start'>Identify the source of funds being invested</p>
                </div>
                <div className='col-6'>
                    <div className='col-6'>
                        <select className="text-start form-select" name='AR_SourceOfFunds' value={FormData['AR_SourceOfFunds']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
            <br /> */}
            {
              backgroundInfoVisibility10 ? 
                <>
                  <div id="background_info_instructions10" className="hidden_class">
                      {/* <p>Discuss the outcome of the FNA</p><br /> */}
                          <ul>
                              <li>
                              Define Other Source of Funds.

                              </li>
                            
                          </ul>
                          
                  </div>
                  </>: 
                null
            }
            {/* <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control" 
                name='AR_SourceOfFundsDetail' onChange={(e) => {onChange(e)}} value={FormData['AR_SourceOfFundsDetail']}
                onFocus={backgroundInfo_onFocus10}
                onBlur={backgroundInfo_onBlur10}
                placeholder={`Define Other Source of Funds.
                
                `}  aria-describedby=""  ></textarea> */}

            <hr />
            <h5 className="section_class"><b>SECTION B:</b></h5>
            <div className="h6 fw-bold" style={{color: '#00788A'}}>Background Information</div>
            <p>Provide a brief description of the business</p>

        {
            backgroundInfoVisibility1 ? 
            <>
            <div id="background_info_instructions1" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Brief description of the business.<br />
                    </li>
                   
                </ul>
                
            </div>
            </>: 
            null
        }
        <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        name='AR_ReplacementBackInfo' onChange={(e) => {onChange(e)}} value={FormData['AR_ReplacementBackInfo']}
        onFocus={backgroundInfo_onFocus1}
        onBlur={backgroundInfo_onBlur1}
        placeholder={`Brief description of the business.`}  aria-describedby=""  ></textarea>

        <hr/>
        <p><b>Business Needs Identified</b></p>

        <h4><b>PART I: RISK</b></h4>
        <div className="h6 fw-bold" style={{color: '#00788A'}}>2. Financial Needs Analysis Summary: Business Assurance</div>
        <br/>
        <p><b>Business assurance needs identified</b></p>

<table className="table">
    <thead>
        
      {/* <th scope="col">#</th> */}
       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_BnS"]} name="AR_BusA_BnS" onChange={(e)=>{FormData["AR_BusA_BnS"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Funding of Buy-and-Sell Agreement
            </label>
        </div>
       </td> 
      
       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_KeyP_Insurance"]} name="AR_BusA_KeyP_Insurance" onChange={(e)=>{FormData["AR_BusA_KeyP_Insurance"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Key Person Insurance
            </label>
        </div>
       </td> 
      
       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_ContingentLiability"]} name="AR_BusA_ContingentLiability" onChange={(e)=>{FormData["AR_BusA_ContingentLiability"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Contingent liability
            </label>
        </div>
       </td> 

       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_BusOvProt"]} name="AR_BusA_BusOvProt" onChange={(e)=>{FormData["AR_BusA_BusOvProt"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Business Overheads Protection
            </label>
        </div>
       </td> 
      
    </thead>
    <br/>
    <thead>
        
        {/* <th scope="col">#</th> */}
        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_CLARedm"]} name="AR_BusA_CLARedm" onChange={(e)=>{FormData["AR_BusA_CLARedm"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Credit Loan Account Redemption
            </label>
        </div>
       </td> 

        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_DebitLoanRedemption"]} name="AR_BusA_DebitLoanRedemption" onChange={(e)=>{FormData["AR_BusA_DebitLoanRedemption"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Debit Loan Redemption
            </label>
        </div>
       </td> 

        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_FundingOfFutureExpenses"]} name="AR_BusA_FundingOfFutureExpenses" onChange={(e)=>{FormData["AR_BusA_FundingOfFutureExpenses"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Funding of Future Expenses
            </label>
        </div>
       </td> 

        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div className="form-check">
            <input disabled type="checkbox" id="vehicle1" checked={FormData["AR_BusA_FundingOfDeferredGratuities"]} name="AR_BusA_FundingOfDeferredGratuities" onChange={(e)=>{FormData["AR_BusA_FundingOfDeferredGratuities"] == true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}}/>
            <label className="form-check-label" for="flexCheckDefault">
            Funding of Deferred Gratuities
            </label>
        </div>
       </td> 

      </thead>
</table>

{
        backgroundInfoVisibility2 ? 
        <>
        <div id="background_info_instructions2" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Provide description and motivation of the description of the needs identified.<br />
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        name='AR_BusA_Details' onChange={(e) => {onChange(e)}} value={FormData['AR_BusA_Details']}
        onFocus={backgroundInfo_onFocus2}
        onBlur={backgroundInfo_onBlur2}
        placeholder={
`Provide description and motivation of the description of the needs identified.`}  aria-describedby=""  ></textarea>

<hr/>

        


        <table className="table">
        <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Financial Planning Need/Objective</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Total need identified</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Existing provisions</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Shortfall/ Surplus</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Cover taken up now </th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Buy and sell </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death</td>
      <td>
        <div >
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DC_TotalNeed']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DC_Provisions' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DC_Provisions']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DC_ShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DC_ShortfallSurplus']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div >
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DiC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DiC_TotalNeed']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DiC_Provisions' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DiC_Provisions']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DiC_ShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DiC_ShortfallSurplus']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_DiC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_DiC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      
      <td>
        <div >
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_OtherTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_OtherTotalNeed']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_OtherProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_OtherProvisions']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text">R</span>
            <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_OtherShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_OtherShortfallSurplus']} aria-label="" />
          </div>
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00' name='AR_BnS_OtherInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_OtherInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
      <td>
        <div className="form-group">
            <input disabled type="email" className="form-control" id="AR_BnS_Comments" name='AR_BnS_Comments' onChange={(e) => {onChange(e)}} value={FormData['AR_BnS_Comments']} aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <br/>
   
    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Key person </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DC_TotalNeed" name='AR_KeyP_DC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DC_ExistingProvisions" name='AR_KeyP_DC_ExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DC_ExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DC_ExistingShortfallSurplus" name='AR_KeyP_DC_ExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DC_ExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DC_Investments" name='AR_KeyP_DC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DiC_TotalNeed" name='AR_KeyP_DiC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DiC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DiC_ExistingProvisions" name='AR_KeyP_DiC_ExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DiC_ExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DiC_ExistingShortfallSurplus" name='AR_KeyP_DiC_ExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DiC_ExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_DiC_Investments" name='AR_KeyP_DiC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_DiC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Temporary Income (p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_TI_CoverTotalNeed" name='AR_KeyP_TI_CoverTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_TI_CoverTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_TI_CoverExistingProvisions" name='AR_KeyP_TI_CoverExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_TI_CoverExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_TI_CoverExistingShortfallSurplus" name='AR_KeyP_TI_CoverExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_TI_CoverExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_TI_CoverInvestments" name='AR_KeyP_TI_CoverInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_TI_CoverInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanent Income(p.m)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_PI_CoverTotalNeed" name='AR_KeyP_PI_CoverTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_PI_CoverTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_PI_CoverExistingProvisions" name='AR_KeyP_PI_CoverExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_PI_CoverExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_PI_CoverExistingShortfallSurplus" name='AR_KeyP_PI_CoverExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_PI_CoverExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_PI_CoverInvestments" name='AR_KeyP_PI_CoverInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_PI_CoverInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_OtherTotalNeed" name='AR_KeyP_OtherTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_OtherTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_OtherExistingProvisions" name='AR_KeyP_OtherExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_OtherExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_OtherExistingShortfallSurplus" name='AR_KeyP_OtherExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_OtherExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_KeyP_OtherInvestments" name='AR_KeyP_OtherInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_OtherInvestments']} aria-label="" />
        </div>
      </td>
    </tr>

     <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
        <td>  
        <div className="form-group">
            <input disabled type="email" className="form-control" id="AR_KeyP_Comments" name='AR_KeyP_Comments' onChange={(e) => {onChange(e)}} value={FormData['AR_KeyP_Comments']} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>
       <td></td>  
       <td></td>
       <td></td>
       <td></td> 
     </tr> 

    <br/>
    <br/>

    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Suretyship and Liability </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DC_TotalNeed" name='AR_SureNLia_DC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DC_Provisions" name='AR_SureNLia_DC_Provisions' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DC_Provisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DC_ShortfallSurplus" name='AR_SureNLia_DC_ShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DC_ShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DC_Investment" name='AR_SureNLia_DC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DiC_TotalNeed" name='AR_SureNLia_DiC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DiC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DiC_Provisions" name='AR_SureNLia_DiC_Provisions' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DiC_Provisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DiC_ShortfallSurplus" name='AR_SureNLia_DiC_ShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DiC_ShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_DiC_Investment" name='AR_SureNLia_DiC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_DiC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_OtherTotalNeed" name='AR_SureNLia_OtherTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_OtherTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_OtherProvisions" name='AR_SureNLia_OtherProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_OtherProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_OtherShortfallSurplus" name='AR_SureNLia_OtherShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_OtherShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_SureNLia_OtherInvestment" name='AR_SureNLia_OtherInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_OtherInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
        <td>  
        <div className="form-group">
            <input disabled type="email" className="form-control"  id="AR_SureNLia_Comments" name='AR_SureNLia_Comments' onChange={(e) => {onChange(e)}} value={FormData['AR_SureNLia_Comments']} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
       <td></td>  
       <td></td>
       <td></td>
       <td></td>   
     </tr> 

        <br/>
        <br/>

     <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Business Overheads Protection </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Temporary Income(p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_TI_CoverTotalNeed" name='AR_BusOvProt_TI_CoverTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_TI_CoverTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_TI_CoverExistingProvisions" name='AR_BusOvProt_TI_CoverExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_TI_CoverExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_TI_CoverExistingShortfallSurplus" name='AR_BusOvProt_TI_CoverExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_TI_CoverExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_TI_CoverInvestments" name='AR_BusOvProt_TI_CoverInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_TI_CoverInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanant Income(p.m.)</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_PI_CoverTotalNeed" name='AR_BusOvProt_PI_CoverTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_PI_CoverTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_PI_CoverExistingProvisions" name='AR_BusOvProt_PI_CoverExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_PI_CoverExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_PI_CoverExistingShortfallSurplus" name='AR_BusOvProt_PI_CoverExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_PI_CoverExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_PI_CoverInvestments" name='AR_BusOvProt_PI_CoverInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_PI_CoverInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_OtherTotalNeed" name='AR_BusOvProt_OtherTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_OtherTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_OtherExistingProvisions" name='AR_BusOvProt_OtherExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_OtherExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_OtherExistingShortfallSurplus" name='AR_BusOvProt_OtherExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_OtherExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BusOvProt_OtherInvestments" name='AR_BusOvProt_OtherInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_OtherInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
        <td>  
        <div className="form-group">
            <input disabled type="email" className="form-control"  id="AR_BusOvProt_Comments" name='AR_BusOvProt_Comments' onChange={(e) => {onChange(e)}} value={FormData['AR_BusOvProt_Comments']} aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
       <td></td>  
       <td></td>
       <td></td>
       <td></td>   
     </tr> 


    <br/>
    <br/>
     <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Credit Loan Account Redemption </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DC_TotalNeed" name='AR_CLARedm_DC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DC_ExistingProvisions" name='AR_CLARedm_DC_ExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DC_ExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DC_ExistingShortfallSurplus" name='AR_CLARedm_DC_ExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DC_ExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DC_Investments" name='AR_CLARedm_DC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DiC_TotalNeed" name='AR_CLARedm_DiC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DiC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DiC_ExistingProvisions" name='AR_CLARedm_DiC_ExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DiC_ExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DiC_ExistingShortfallSurplus" name='AR_CLARedm_DiC_ExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DiC_ExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_DiC_Investments" name='AR_CLARedm_DiC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_DiC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_OtherTotalNeed" name='AR_CLARedm_OtherTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_OtherTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_OtherExistingProvisions" name='AR_CLARedm_OtherExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_OtherExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_OtherExistingShortfallSurplus" name='AR_CLARedm_OtherExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_OtherExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_CLARedm_OtherInvestments" name='AR_CLARedm_OtherInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_CLARedm_OtherInvestments']} aria-label="" />
        </div>
      </td>
    </tr>


    <br/>
    <br/>
     <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Debit Loan Redemption </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DC_TotalNeed" name='AR_DLARedm_DC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DC_ExistingProvisions" name='AR_DLARedm_DC_ExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DC_ExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DC_ExistingShortfallSurplus" name='AR_DLARedm_DC_ExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DC_ExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DC_Investments" name='AR_DLARedm_DC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DiC_TotalNeed" name='AR_DLARedm_DiC_TotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DiC_TotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DiC_ExistingProvisions" name='AR_DLARedm_DiC_ExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DiC_ExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DiC_ExistingShortfallSurplus" name='AR_DLARedm_DiC_ExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DiC_ExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_DiC_Investments" name='AR_DLARedm_DiC_Investments' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_DiC_Investments']} aria-label="" />
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_OtherTotalNeed" name='AR_DLARedm_OtherTotalNeed' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_OtherTotalNeed']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_OtherExistingProvisions" name='AR_DLARedm_OtherExistingProvisions' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_OtherExistingProvisions']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_OtherExistingShortfallSurplus" name='AR_DLARedm_OtherExistingShortfallSurplus' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_OtherExistingShortfallSurplus']} aria-label="" />
        </div>
      </td>

      <td>
        <div className="input-group">
          <span className="input-group-text">R</span>
          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_DLARedm_OtherInvestments" name='AR_DLARedm_OtherInvestments' onChange={(e) => {onChange(e)}} value={FormData['AR_DLARedm_OtherInvestments']} aria-label="" />
        </div>
      </td>
    </tr>
    </tbody>
  </table>

<br/>
  <h5 className="section_class"><b>SECTION B:</b></h5>
    <div className="h6 fw-bold" style={{color: '#00788A'}}>Financial Solutions</div>
    <p>Summary of recommendations to address the business's needs identified.</p>
    <p>Life Cover</p>
    <hr/>

    {
        backgroundInfoVisibility3 ? 
        <>
        <div id="background_info_instructions3" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why Life cover benefits were recommended to satisfy this need.<br />
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        id="AR_LifeCoverFinancialSolutions" name='AR_LifeCoverFinancialSolutions' onChange={(e) => {onChange(e)}} value={FormData['AR_LifeCoverFinancialSolutions']}
        onFocus={backgroundInfo_onFocus3}
        onBlur={backgroundInfo_onBlur3}
        placeholder={
`Explain the reasons why Life cover benefits were recommended to satisfy this need.
Record the client's instructions, deviations and implications thereof..`}  aria-describedby=""  ></textarea>

<hr/>
    <br/>
    <p>Disability Cover</p>
    <hr/>

    {
        backgroundInfoVisibility4 ? 
        <>
        <div id="background_info_instructions4" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why Disability cover benefits were recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        id="AR_DiC_FinancialSolutions" name='AR_DiC_FinancialSolutions' onChange={(e) => {onChange(e)}} value={FormData['AR_DiC_FinancialSolutions']}
        onFocus={backgroundInfo_onFocus4}
        onBlur={backgroundInfo_onBlur4}
        placeholder={
`Explain the reasons why Disability cover benefits were recommended to satisfy this need.
Record the client's instructions, deviations and implications thereof.
`}  aria-describedby=""  ></textarea>
<hr/>

<br/>
<h5 className="section_class"><b>SECTION C:</b></h5>
    <div className="h6 fw-bold" style={{color: '#00788A'}}>Alternative Solutions Considered</div>    
    <p>The following solutions were presented to you for consideration but were not selected for the following reasons:</p>

  
    {
        backgroundInfoVisibility5 ? 
        <>
        <div id="background_info_instructions5" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    1. Identify the type of product or product provider which was considered but not selected and motivate..<br />
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control" 
        id="AR_AltS_1" name='AR_AltS_1' onChange={(e) => {onChange(e)}} value={FormData['AR_AltS_1']}
        onFocus={backgroundInfo_onFocus5}
        onBlur={backgroundInfo_onBlur5}
        placeholder={
`1. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea>

<hr/>

{
        backgroundInfoVisibility6 ? 
        <>
        <div id="background_info_instructions6" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    2. Identify the type of product or product provider which was considered but not selected and motivate..<br />
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control" 
        id="AR_AltS_2" name='AR_AltS_2' onChange={(e) => {onChange(e)}} value={FormData['AR_AltS_2']}
        onFocus={backgroundInfo_onFocus6}
        onBlur={backgroundInfo_onBlur6}
        placeholder={
`2. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea>

<hr/>

{
        backgroundInfoVisibility7 ? 
        <>
        <div id="background_info_instructions7" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    3. Identify the type of product or product provider which was considered but not selected and motivate..<br />
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control" 
        id="AR_AltS_3" name='AR_AltS_3' onChange={(e) => {onChange(e)}} value={FormData['AR_AltS_3']}
        onFocus={backgroundInfo_onFocus7}
        onBlur={backgroundInfo_onBlur7}
        placeholder={
`3. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea>

<br/>
<h5 className="section_class"><b>SECTION D:</b></h5>
    <div className="h6 fw-bold" style={{color: '#00788A'}}>Product Taken (Each additional need must be accompanied by its own product annexure.)</div>

<p>Products accepted by you to meet the business’s requirements.</p>

<hr/>
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Product Provider</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_ProductProvider" name='AR_ProductProvider' value={FormData['AR_ProductProvider']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Policy number</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_PolicyNumber" name='AR_PolicyNumber' onChange={(e) => {onChange(e)}} value={FormData['AR_PolicyNumber']} className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Product Name</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_ProductName" name='AR_ProductName' value={FormData['AR_ProductName']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Premium</b></label>
                    </div>
                    <div className="col-6">
                      <div className='row'>
                          <div className='col-6'>
                              <div className="form-group">
                                  <input disabled type="text" className="form-control" id="AR_ProductPremium" name='AR_ProductPremium' onChange={(e) => {onChange(e)}} value={FormData['AR_ProductPremium']} aria-describedby="emailHelp" placeholder="" />
                              </div>
                          </div>
                          <div className='col-6'>
                              <select className="text-start form-select" disabled  id="AR_ProductPremiumFrequency" name='AR_ProductPremiumFrequency' onChange={(e) => {onChange(e)}} value={FormData['AR_ProductPremiumFrequency']} aria-label="Default select example">
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
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Premium Pattern</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_ProductPattern" name='AR_ProductPattern' value={FormData['AR_ProductPattern']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Escalation in cover / premium</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled    id="AR_ProductEscalation" name='AR_ProductEscalation' value={FormData['AR_ProductEscalation']} className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Contracting party</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_ProductContractingParty" name='AR_ProductContractingParty' value={FormData['AR_ProductContractingParty']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Life / Lives covered</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled  id="AR_ProductLivesAssured" name='AR_ProductLivesAssured' value={FormData['AR_ProductLivesAssured']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Premium Payer</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_ProductPremiumPayer" name='AR_ProductPremiumPayer' value={FormData['AR_ProductPremiumPayer']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>1st year commission</b></label>
                    </div>
                    <div className="col-6">
                      <div className="input-group">
                        <span className="input-group-text">R</span>
                        <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_Product1stYearCommission" name='AR_Product1stYearCommission' onChange={(e) => {onChange(e)}} value={FormData['AR_Product1stYearCommission']} aria-label="" />
                      </div>
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>2nd year commission</b></label>
                    </div>
                    <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_Product2ndYearCommission" name='AR_Product2ndYearCommission' onChange={(e) => {onChange(e)}} value={FormData['AR_Product2ndYearCommission']} aria-label="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Benefit description: life cover, disability etc</b></label>
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="id_number" className="col-form-label"><b>Cover amount</b></label>
                    </div> 
                </div>
            </div>
            <hr/>


            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BenDesc_1" name='AR_BenDesc_1' value={FormData['AR_BenDesc_1']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-9">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BenDesc_CoverAmount1" name='AR_BenDesc_CoverAmount1' onChange={(e) => {onChange(e)}} value={FormData['AR_BenDesc_CoverAmount1']} aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BenDesc_2" name='AR_BenDesc_2' value={FormData['AR_BenDesc_2']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-9">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BenDesc_CoverAmount2" name='AR_BenDesc_CoverAmount2' onChange={(e) => {onChange(e)}} value={FormData['AR_BenDesc_CoverAmount2']} aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>

            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true" disabled   id="AR_BenDesc_3" name='AR_BenDesc_3' value={FormData['AR_BenDesc_3']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder=""  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-9">
                        <div className="input-group">
                          <span className="input-group-text">R</span>
                          <input disabled type="number" className="form-control" placeholder='0.00'  id="AR_BenDesc_CoverAmount3" name='AR_BenDesc_CoverAmount3' onChange={(e) => {onChange(e)}} value={FormData['AR_BenDesc_CoverAmount3']} aria-label="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>
        </div> 
    </div>  

    <p>The following are reasons why the abovementioned product best suits the business’s needs and objectives:</p>

    {
        backgroundInfoVisibility8 ? 
        <>
        <div id="background_info_instructions8" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Motivate why the chosen product was recommended to best suit your client's needs.<br />
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control" 
        id="AR_ProductReasons" name='AR_ProductReasons' value={FormData['AR_ProductReasons']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus8}
        onBlur={backgroundInfo_onBlur8}
        placeholder={
`Motivate why the chosen product was recommended to best suit your client's needs. `}  aria-describedby=""  ></textarea>

<hr/>
<p>The details of the material aspects of the selected product that were discussed with you are outlined below:</p>

{
        backgroundInfoVisibility9 ? 
        <>
        <div id="background_info_instructions9" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain any deviations from your recommendation and the implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control" 
        id="AR_ProductMaterialAspects" name='AR_ProductMaterialAspects' value={FormData['AR_ProductMaterialAspects']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus9}
        onBlur={backgroundInfo_onBlur9}
        placeholder={
`Explain any deviations from your recommendation and the implications thereof.`}  aria-describedby=""  ></textarea>
<hr/>

{
        backgroundInfoVisibility10 ? 
        <>
        <div id="background_info_instructions9" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Disclose and explain the following:<br/>
                    The tax implications for the company, e.g., income tax<br/>
                    The tax implications for the lives covered, e.g., estate duty, income tax, CGT<br/>
                    Executor’s fees?


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        id="AR_ProductDetails" name='AR_ProductDetails' value={FormData['AR_ProductDetails']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus10}
        onBlur={backgroundInfo_onBlur10}
        placeholder={
`Disclose and explain the following:
The tax implications for the company, e.g., income tax
The tax implications for the lives covered, e.g., estate duty, income tax, CGT
Executor’s fees?`}  aria-describedby=""  ></textarea>
<hr/>

{
        backgroundInfoVisibility11 ? 
        <>
        <div id="background_info_instructions11" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Provide a brief summary of the contents of the quote with regard to the following:<br/>
                    Benefit terms (cease ages, cover periods etc.)<br/>
                    Details of premium and cover pattern structure, frequency etc.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        id="AR_ProductBriefSummary" name='AR_ProductBriefSummary' value={FormData['AR_ProductBriefSummary']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus11}
        onBlur={backgroundInfo_onBlur11}
        placeholder={
`Provide a brief summary of the contents of the quote with regard to the following:
Benefit terms (cease ages, cover periods etc.)
Details of premium and cover pattern structure, frequency etc.`}  aria-describedby=""  ></textarea>
<hr/>

{
        backgroundInfoVisibility12 ? 
        <>
        <div id="background_info_instructions12" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Record discussion with regard to cessionaries, if applicable.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        id="AR_Cessionaries" name='AR_Cessionaries' value={FormData['AR_Cessionaries']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus12}
        onBlur={backgroundInfo_onBlur12}
        placeholder={
`Record discussion with regard to cessionaries, if applicable.`}  aria-describedby=""  ></textarea>
<hr/>

{
        backgroundInfoVisibility13 ? 
        <>
        <div id="background_info_instructions13" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>Discuss the following information which has been explained to client:<br/>
                        General exclusions of liability (i.e. benefit exclusions e.g., suicide clause on death, psychological conditions on disability, etc.)<br/>
                        Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)<br/>
                        Waiting periods<br/>
                        Cooling off period<br/>
                        Other relevant information<br/>
                        Record discussion with regard to cessionaries, if applicable.<br/>

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }}  className="form-control"  
        id="AR_InformationExplained" name='AR_InformationExplained' value={FormData['AR_InformationExplained']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus13}
        onBlur={backgroundInfo_onBlur13}
        placeholder={
`Discuss the following information which has been explained to client:
General exclusions of liability (i.e. benefit exclusions e.g., suicide clause on death, psychological conditions on disability, etc.)
Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)
Waiting periods
Cooling off period
Other relevant information.`}  aria-describedby=""  ></textarea>
<hr/>
          
          </form>
        </>
    )
}

export default AssuranceRisk

