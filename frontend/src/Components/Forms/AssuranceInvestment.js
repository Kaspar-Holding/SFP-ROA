import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Styles/CustomNotification.css'
import './Styles/CustomButton.css'
import { connect } from 'react-redux';

const AssuranceInvestment = ({user}) =>
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
    const [backgroundInfoVisibility10_1, setbackgroundInfoVisibility10_1] = useState(false)
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
        setbackgroundInfoVisibility22(true)}
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
        
        advisorId: user['id'],
        formId : state['formId'],
        
        AI_Term : "",    
        AI_TermDetails : "",  
        // AI_Type : 1,    
        // AI_TypeDetails : "",    
        AI_PremiumType : 2,    
        AI_PremiumTypeDetails : "",       
        AI_Strategy : 1,    
        AI_StrategyDetails : "",    
        AI_ReturnRequired : 1,    
        AI_ReturnRequiredDetails : "",    
        AI_RiskProfile : 1,      
        AI_RiskProfileDetails : "",      

        AI_TRP_TotalNeed : "",    
        AI_TRP_ExistingProvisions : "",    
        AI_TRP_ExistingShortfallSurplus : "",    
        AI_TRP_ExistingInvestments : "",    

        AI_RA_TotalNeed : "",    
        AI_RA_ExistingProvisions : "",    
        AI_RA_ExistingShortfallSurplus : "",    
        AI_RA_ExistingInvestments : "",    

        AI_CR_TotalNeed : "",    
        AI_CR_ExistingProvisions : "",    
        AI_CR_ExistingShortfallSurplus : "",    
        AI_CR_Investments : "",    

        AI_Other : "",    
        AI_Other_TotalNeed : "",    
        AI_Other_ExistingProvisions : "",    
        AI_Other_ExistingShortfallSurplus : "",    
        AI_Other_Investments : "",    

        AI_FinancialSolutions : "",    
        AI_AltS_1 : "",    
        AI_AltS_2 : "",    
        AI_AltS_3 : "",    

        AI_Pr_Taken : "",    
        AI_Pr_Provider : "",    
        AI_Pr_PolicyNumber : "",    
        AI_Pr_Name : "",    
        AI_Pr_Premium : "",    
        AI_Pr_PremiumFrequency : 0,   
        AI_Pr_Escalation : "",    
        AI_Pr_EAC : "",    
        AI_Pr_ContractingParty : "",    
        AI_Pr_LivesAssured : "",    
        AI_Pr_PremiumPayer : "",    
        AI_Pr_Beneficiary : "",    
        AI_Pr_IniC : "",    
        AI_Pr_IniC_Percentage : "",    
        AI_Pr_OnC : "",    
        AI_Pr_OnC_Percentage : "",

        AI_Portfolio : "",
        
        AI_SourceOfFunds : 0,
        AI_SourceOfFundsDetail : "",
        
        AI_PF_1 : "",
        AI_PF_Percentage1 : "",
        AI_PF_Provided1 : false,
        AI_PF_Discussed1 : false,

        AI_PF_2 : "",
        AI_PF_Percentage2 : "",
        AI_PF_Provided2 : false,
        AI_PF_Discussed2 : false,

        AI_PF_3 : "",
        AI_PF_Percentage3 : "",
        AI_PF_Provided3 : false,
        AI_PF_Discussed3 : false,

        AI_PF_4 : "",
        AI_PF_Percentage4 : "",
        AI_PF_Provided4 : false,
        AI_PF_Discussed4 : false,

        AI_PF_5 : "",
        AI_PF_Percentage5 : "",
        AI_PF_Provided5 : false,
        AI_PF_Discussed5 : false,

        AI_PF_6 : "",
        AI_PF_Percentage6 : "",
        AI_PF_Provided6 : false,
        AI_PF_Discussed6 : false,

        AI_PF_7 : "",
        AI_PF_Reasons : "",
        AI_PF_Provided7 : false,
        AI_PF_Discussed7 : false,

        AI_PF_Reasons : "",
        AI_PF_MaterialAspects : "",
        AI_PF_Pr_Details : "",
        AI_PF_NominationOfBeneficiaries : "",

      })
      console.log(FormData['AI_PF_Pr_Details'])
      const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
      const createAIForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_assurance_investment_data/`, Body ,config)
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
      const [SuccessMessage, setSuccessMessage] = useState("")
      const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
      const updateAIForm = async() => {
          const config = {
              headers: {
                  'Content-Type' : 'application/json',
                  'Accept' : 'application/json',
                  'Authorization' : `JWT ${localStorage.getItem('access')}`
              }
          }
          const Body = JSON.stringify(FormData)
          try {
              const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_assurance_investment_data/`, Body ,config)
              // console.log(response.data['formData'])
              setFormData(response.data['formData'])
              setSuccessMessage("Assurance Investment data is successfully updated")
              setSuccessMessageVisibility("block")
              setTimeout(() => {
                setSuccessMessageVisibility("none")
              }, 5000)
              // setSubmissionMessageVisibility("block")
          } catch (error) {
              console.log(error)
              
              setUpdateErrorData({
                status: error.response.status,
                message: error.response.statusText
              })
              setUpdateErrorVisibility("block")
          }
      }
      const onSubmit = e => {
          e.preventDefault()
          updateAIForm()
          // window.location.reload();
      }
      useEffect(() => {
          createAIForm(FormData)
          // setInterval(updateIPForm, 20000);
      }, []);
      // console.log(JSON.stringify(FormData))
            
        
      return(
          <>
          <hr/>
        
      <div className="notification_container">
        <div className="alert alert-success fade show" style={{display: SuccessMessageVisibility}} role="alert">
          {SuccessMessage}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      </div>
    <h4><b>PART II: INVESTMENT & SAVINGS</b></h4>
    <br/>
    <h5 className="section_class"><b>SECTION B:</b></h5>
        <div className="h6 fw-bold" style={{color: '#00788A'}}>Analysis of Business’s Circumstances</div>    

    <p>The analysis of your personal circumstances as described above</p>

    <p><b>Investment requirements</b></p>
    <p>Need</p>
    <form onSubmit={e => onSubmit(e)}>
      
    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">
{/* 
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Investment requirements</b></label>
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Needs</b></label>
                    </div>
                </div>
            </div> */}

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label">Investment term</label>
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <input spellCheck="true" id="AI_Term" name='AI_Term' value={FormData['AI_Term']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="years"  aria-describedby="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    {
        backgroundInfoVisibility14 ? 
        <>
        <div id="background_info_instructions14" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.<br/>

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '80px'}} 
        name='AI_TermDetails' value={FormData['AI_TermDetails']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus14}
        onBlur={backgroundInfo_onBlur14}
        placeholder={
`Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.`}  aria-describedby=""  ></textarea>
<hr/>
<br/> 

        <div className="row g-3 align-items-center">
            <div className="col-6">
                <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Lump sum or recurring premium.</label>
            </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData['AI_PremiumType'] === 1 ? true : false} name="AI_PremiumType" onChange={(e) => {onChange(e)}} type="radio" value="1" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn3" >
                                    Lump sum
                                </label>
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData['AI_PremiumType'] === 0 ? true : false} name="AI_PremiumType" onChange={(e) => {onChange(e)}} type="radio" value="0" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn3" >
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
                    <textarea maxLength={500}   onFocus={sica1_onFocus} onBlur={sica1_onBlur} className="form-control" placeholder="Notes" aria-describedby="" ></textarea>
                    </div>
                    <hr/>
                    </>
                }
            </div>

            {
        backgroundInfoVisibility15 ? 
        <>
        <div id="background_info_instructions15" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>Notes<br/>

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500}  
        id="AI_PremiumTypeDetails" name='AI_PremiumTypeDetails' value={FormData['AI_PremiumTypeDetails']} onChange={(e) => {onChange(e)}}
        className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus15}
        onBlur={backgroundInfo_onBlur15}
        placeholder={
`Notes`}  aria-describedby=""  ></textarea>
<hr/>
<br/>
  <div className='row'>
      <div className='col-6'>
        <p>Investment Strategy</p>
      </div>
      <div className='col-6'>
          <select className="text-start form-select" id="AI_Strategy" name='AI_Strategy' value={FormData['AI_Strategy']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
              <option value="0" selected>Select</option>
              <option value="1">Capital Growth</option>
              <option value="2">Capital Preservtion</option>
              <option value="3">Income</option>
              <option value="4">Specified Goal Investment</option>
          </select>
      </div>
  </div>
    {
        backgroundInfoVisibility16 ? 
        <>
        <div id="background_info_instructions16" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>Notes on discussion with client concerning the investment strategy.<br/>

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} id="AI_StrategyDetails" name='AI_StrategyDetails' value={FormData['AI_StrategyDetails']} onChange={(e) => {onChange(e)}}
        className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus16}
        onBlur={backgroundInfo_onBlur16}
        placeholder={
`Notes on discussion with client concerning the investment strategy.`}  aria-describedby=""  ></textarea>
<hr/>
<br/>
  <div className='row'>
      <div className='col-6'>
        <p>Return Required</p>
      </div>
      <div className='col-6'>
          <select className="text-start form-select" id="AI_ReturnRequired" name='AI_ReturnRequired' value={FormData['AI_ReturnRequired']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>Notes on discussion with client concerning return expectations.<br/>

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '80px'}}
        id="AI_ReturnRequiredDetails" name='AI_ReturnRequiredDetails' value={FormData['AI_ReturnRequiredDetails']} onChange={(e) => {onChange(e)}}
        onFocus={backgroundInfo_onFocus17}
        onBlur={backgroundInfo_onBlur17}
        placeholder={
`Notes on discussion with client concerning return expectations.`}  aria-describedby=""  ></textarea>
<hr/>
<br/>

<div className='row'>
      <div className='col-6'>
        <p>Risk Profile</p>
      </div>
      <div className='col-6'>
          <select className="text-start form-select" id="AI_RiskProfile" name='AI_RiskProfile' value={FormData['AI_RiskProfile']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>Notes on the client risk profile..<br/>

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '80px'}} 
        id="AI_RiskProfileDetails" name='AI_RiskProfileDetails' value={FormData['AI_RiskProfileDetails']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus18}
        onBlur={backgroundInfo_onBlur18}
        placeholder={
`Notes on the client risk profile..`}  aria-describedby=""  ></textarea>

<br/>
<div className="h6 fw-bold" style={{color: '#00788A'}}>Funding of future expenses and/or deferred gratuities</div>    

<table className="table">
    <thead>
        <tr align="left">
      {/* <th scope="col">#</th> */}
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Financial Planning Need/Objective</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Total need identified</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Existing provisions</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Shortfall/ Surplus</th>
      <th scope="col" style={{ fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}}>Investment/Savings amount</th>
      
    </tr>
  </thead>

<tbody>
  <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Payment of trade restraint agreements</td>
      <td>
        <div >
            <input type="number" className="form-control" id="AI_TRP_TotalNeed" name='AI_TRP_TotalNeed' value={FormData['AI_TRP_TotalNeed']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_TRP_ExistingProvisions" name='AI_TRP_ExistingProvisions' value={FormData['AI_TRP_ExistingProvisions']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_TRP_ExistingShortfallSurplus" name='AI_TRP_ExistingShortfallSurplus' value={FormData['AI_TRP_ExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_TRP_ExistingInvestments" name='AI_TRP_ExistingInvestments' value={FormData['AI_TRP_ExistingInvestments']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Replacement of assets</td>
      <td>
        <div >
            <input type="number" className="form-control" id="AI_RA_TotalNeed" name='AI_RA_TotalNeed' value={FormData['AI_RA_TotalNeed']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_RA_ExistingProvisions" name='AI_RA_ExistingProvisions' value={FormData['AI_RA_ExistingProvisions']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_RA_ExistingShortfallSurplus" name='AI_RA_ExistingShortfallSurplus' value={FormData['AI_RA_ExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_RA_ExistingInvestments" name='AI_RA_ExistingInvestments' value={FormData['AI_RA_ExistingInvestments']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Compulsory refurbishing of franchises</td>
      <td>
        <div >
            <input type="number" className="form-control" id="AI_CR_TotalNeed" name='AI_CR_TotalNeed' value={FormData['AI_CR_TotalNeed']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_CR_ExistingProvisions" name='AI_CR_ExistingProvisions' value={FormData['AI_CR_ExistingProvisions']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_CR_ExistingShortfallSurplus" name='AI_CR_ExistingShortfallSurplus' value={FormData['AI_CR_ExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_CR_ExistingInvestments" name='AI_CR_ExistingInvestments' value={FormData['AI_CR_ExistingInvestments']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">
        <div className="form-group">
              <input type="text"  name='AI_Other' value={FormData['AI_Other']} onChange={(e) => {onChange(e)}} placeholder="Other" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
      </td>
      <td>
        <div >
            <input type="number" className="form-control" id="AI_Other_TotalNeed" name='AI_Other_TotalNeed' value={FormData['AI_Other_TotalNeed']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_Other_ExistingProvisions" name='AI_Other_ExistingProvisions' value={FormData['AI_Other_ExistingProvisions']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_Other_ExistingShortfallSurplus" name='AI_Other_ExistingShortfallSurplus' value={FormData['AI_Other_ExistingShortfallSurplus']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="number" className="form-control" id="AI_Other_ExistingInvestments" name='AI_Other_ExistingInvestments' value={FormData['AI_Other_ExistingInvestments']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
    </tr>
    </tbody>
</table>

<br/>
<h5 className="section_class"><b>SECTION C:</b></h5>
    <div className="h6 fw-bold" style={{color: '#00788A'}}>Financial Solutions</div> 
<p>Summary of recommendations to address the business’s needs identified</p>  

{
        backgroundInfoVisibility19 ? 
        <>
        <div id="background_info_instructions19" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>Discuss the outcome of the FNA:<br/>
                        Quantification of need explaining the reasons why this type of investment vehicle was recommended<br/>
                        How it will meet the business need
<br/>

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '150px'}} 
        id="AI_FinancialSolutions" name='AI_FinancialSolutions' value={FormData['AI_FinancialSolutions']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus19}
        onBlur={backgroundInfo_onBlur19}
        placeholder={
`Discuss the outcome of the FNA:
Quantification of need explaining the reasons why this type of investment vehicle was recommended 
How it will meet the business need
`}  aria-describedby=""  ></textarea>

<br/>
<h5 className="section_class"><b>SECTION D:</b></h5>
    <div className="h6 fw-bold" style={{color: '#00788A'}}>Alternative Solutions Considered</div> 

    <p>The following solutions were presented to you for consideration but were not selected for the following reasons:</p>

    {
        backgroundInfoVisibility20 ? 
        <>
        <div id="background_info_instructions20" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>1. Identify the type of product or product provider which was considered but not selected and motivate.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '80px'}} 
        id="AI_AltS_1" name='AI_AltS_1' value={FormData['AI_AltS_1']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus20}
        onBlur={backgroundInfo_onBlur20}
        placeholder={
`1. Identify the type of product or product provider which was considered but not selected and motivate.
`}  aria-describedby=""  ></textarea>

<br/>
{
        backgroundInfoVisibility21 ? 
        <>
        <div id="background_info_instructions21" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>2. Identify the type of product or product provider which was considered but not selected and motivate.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '80px'}} 
        id="AI_AltS_2" name='AI_AltS_2' value={FormData['AI_AltS_2']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus21}
        onBlur={backgroundInfo_onBlur21}
        placeholder={
`2. Identify the type of product or product provider which was considered but not selected and motivate.
`}  aria-describedby=""  ></textarea>

<br/>
{
        backgroundInfoVisibility22 ? 
        <>
        <div id="background_info_instructions22" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>3. Identify the type of product or product provider which was considered but not selected and motivate.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '80px'}} 
        id="AI_AltS_3" name='AI_AltS_3' value={FormData['AI_AltS_3']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus22}
        onBlur={backgroundInfo_onBlur22}
        placeholder={
`3. Identify the type of product or product provider which was considered but not selected and motivate.
`}  aria-describedby=""  ></textarea>

<br/>
<h5 className="section_class"><b>SECTION E:</b></h5>
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
                        <input spellCheck="true" id="AI_Pr_Provider" name='AI_Pr_Provider' value={FormData['AI_Pr_Provider']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Policy number</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" id="AI_Pr_PolicyNumber" name='AI_Pr_PolicyNumber' value={FormData['AI_Pr_PolicyNumber']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true" id="AI_Pr_Name" name='AI_Pr_Name' value={FormData['AI_Pr_Name']} onChange={(e) => {onChange(e)}}  className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                <input type="text" className="form-control" id="AI_Pr_Premium" name='AI_Pr_Premium' value={FormData['AI_Pr_Premium']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" />
                              </div>
                          </div>
                          <div className='col-6'>
                              <select className="text-start form-select" id="AI_Pr_PremiumFrequency" name='AI_Pr_PremiumFrequency' value={FormData['AI_Pr_PremiumFrequency']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
                        <label className="col-form-label"><b>Escalation</b></label>
                    </div>
                    <div className="col-6"> 
                        <input spellCheck="true" id="AI_Pr_Escalation" name='AI_Pr_Escalation' value={FormData['AI_Pr_Escalation']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Effective annual cost (EAC)</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" id="AI_Pr_EAC" name='AI_Pr_EAC' value={FormData['AI_Pr_EAC']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true" id="AI_Pr_ContractingParty" name='AI_Pr_ContractingParty' value={FormData['AI_Pr_ContractingParty']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Life / Lives covered</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" id="AI_Pr_LivesAssured" name='AI_Pr_LivesAssured' value={FormData['AI_Pr_LivesAssured']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true" id="AI_Pr_PremiumPayer" name='AI_Pr_PremiumPayer' value={FormData['AI_Pr_PremiumPayer']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Beneficiary/cessionary</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true" id="AI_Pr_Beneficiary" name='AI_Pr_Beneficiary' value={FormData['AI_Pr_Beneficiary']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Initial commission</b></label>
                    </div>
                    <div className="col-4">
                        <input spellCheck="true" id="AI_Pr_IniC" name='AI_Pr_IniC' value={FormData['AI_Pr_IniC']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
                    </div>
                    <div className="col-4">
                        <input spellCheck="true" id="AI_Pr_IniC_Percentage" name='AI_Pr_IniC_Percentage' value={FormData['AI_Pr_IniC_Percentage']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="            00 %"  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Ongoing commission</b></label>
                    </div>
                    <div className="col-4">
                        <input spellCheck="true" id="AI_Pr_OnC" name='AI_Pr_OnC' value={FormData['AI_Pr_OnC']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="R 0.00"  aria-describedby="" />
                    </div>
                    <div className="col-4">
                        <input spellCheck="true" id="AI_Pr_OnC_Percentage" name='AI_Pr_OnC_Percentage' value={FormData['AI_Pr_OnC_Percentage']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="            00 %"  aria-describedby="" />
                    </div>
                </div>
            </div>
            <hr/>

        </div> 
    </div> 

    <br/>
    <div className="h6 fw-bold" style={{color: '#00788A'}}>Investment Portfolio</div>  

    {
        backgroundInfoVisibility23 ? 
        <>
        <div id="background_info_instructions23" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    When a wrap fund or a selection of wrap funds is used, motivate and explain. <br/>
                    Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided: <br/>
                    illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,<br/>
                    motivating the constructed portfolio with reference to the following aspects:<br/>
                    o	correlation;<br/>
                    o	drawdown;<br/>
                    o	portfolio return;<br/>
                    o	meeting the investment objectives of the clients<br/>



                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '300px'}} 
        id="AI_Portfolio" name='AI_Portfolio' value={FormData['AI_Portfolio']} onChange={(e) => {onChange(e)}}
        onFocus={backgroundInfo_onFocus23}
        onBlur={backgroundInfo_onBlur23}
        placeholder={
`When a wrap fund or a selection of wrap funds is used, motivate and explain. 
Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided: 
illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,
motivating the constructed portfolio with reference to the following aspects:
o	correlation;
o	drawdown;
o	portfolio return;
o	meeting the investment objectives of the clients

`}  aria-describedby=""  ></textarea>


<table className="table">
  <thead>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
      <td scope="col" align="center"><p><b>Fund Fact Sheets to client:</b></p></td> 
    
  </thead>
       
        
  </table>
<div className="container mt-3">          
  <table className="table">
    
    <tbody>
      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start"><b>Funds</b></td>
           
            
        
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="center"><b>%</b></td>
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <div><b>Provided</b></div>
        </td>
        <td>
            <div><b>Discussed</b></div>
        </td>     
      </tr>

      <tr>
        <td>
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_1" name='AI_PF_1' value={FormData['AI_PF_1']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_Percentage1" name='AI_PF_Percentage1' value={FormData['AI_PF_Percentage1']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
        <td> 
            <input type="checkbox" checked={FormData["AI_PF_Provided1"]} name="AI_PF_Provided1" onChange={(e)=>{FormData["AI_PF_Provided1"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>

        <td>
            <input type="checkbox" checked={FormData["AI_PF_Discussed1"]} name="AI_PF_Discussed1" onChange={(e)=>{FormData["AI_PF_Discussed1"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>  
      </tr>

      <tr>
        <td>
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_2" name='AI_PF_2' value={FormData['AI_PF_2']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_Percentage2" name='AI_PF_Percentage2' value={FormData['AI_PF_Percentage2']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
        <td> 
            <input type="checkbox" checked={FormData["AI_PF_Provided2"]} name="AI_PF_Provided2" onChange={(e)=>{FormData["AI_PF_Provided2"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>

        <td>
            <input type="checkbox" checked={FormData["AI_PF_Discussed2"]} name="AI_PF_Discussed2" onChange={(e)=>{FormData["AI_PF_Discussed2"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>   
      </tr>

      <tr>
        <td>
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_3" name='AI_PF_3' value={FormData['AI_PF_3']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_Percentage3" name='AI_PF_Percentage3' value={FormData['AI_PF_Percentage3']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
        <td> 
            <input type="checkbox" checked={FormData["AI_PF_Provided3"]} name="AI_PF_Provided3" onChange={(e)=>{FormData["AI_PF_Provided3"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>

        <td>
            <input type="checkbox" checked={FormData["AI_PF_Discussed3"]} name="AI_PF_Discussed3" onChange={(e)=>{FormData["AI_PF_Discussed3"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>       
      </tr>

      <tr>
        <td>
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_4" name='AI_PF_4' value={FormData['AI_PF_4']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_Percentage4" name='AI_PF_Percentage4' value={FormData['AI_PF_Percentage4']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
        <td> 
            <input type="checkbox" checked={FormData["AI_PF_Provided4"]} name="AI_PF_Provided4" onChange={(e)=>{FormData["AI_PF_Provided4"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>

        <td>
            <input type="checkbox" checked={FormData["AI_PF_Discussed4"]} name="AI_PF_Discussed4" onChange={(e)=>{FormData["AI_PF_Discussed4"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>      
      </tr>

      <tr>
        <td >
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_5" name='AI_PF_5' value={FormData['AI_PF_5']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_Percentage5" name='AI_PF_Percentage5' value={FormData['AI_PF_Percentage5']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
        <td> 
            <input type="checkbox" checked={FormData["AI_PF_Provided5"]} name="AI_PF_Provided5" onChange={(e)=>{FormData["AI_PF_Provided5"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>

        <td>
            <input type="checkbox" checked={FormData["AI_PF_Discussed5"]} name="AI_PF_Discussed5" onChange={(e)=>{FormData["AI_PF_Discussed5"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>        
      </tr>

      
      <tr>
        <td >
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_6" name='AI_PF_6' value={FormData['AI_PF_6']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_Percentage6" name='AI_PF_Percentage6' value={FormData['AI_PF_Percentage6']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
        <td> 
            <input type="checkbox" checked={FormData["AI_PF_Provided6"]} name="AI_PF_Provided6" onChange={(e)=>{FormData["AI_PF_Provided6"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>

        <td>
            <input type="checkbox" checked={FormData["AI_PF_Discussed6"]} name="AI_PF_Discussed6" onChange={(e)=>{FormData["AI_PF_Discussed6"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>   
      </tr>

      
      <tr>
        <td >
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_7" name='AI_PF_7' value={FormData['AI_PF_7']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div className="form-group">
                <input type="text" className="form-control" id="AI_PF_Percentage7" name='AI_PF_Percentage7' value={FormData['AI_PF_Percentage7']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
        <td> 
            <input type="checkbox" checked={FormData["AI_PF_Provided7"]} name="AI_PF_Provided7" onChange={(e)=>{FormData["AI_PF_Provided7"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>

        <td>
            <input type="checkbox" checked={FormData["AI_PF_Discussed7"]} name="AI_PF_Discussed7" onChange={(e)=>{FormData["AI_PF_Discussed7"] === true ? setFormData({...FormData, [e.target.name]: false}) : setFormData({...FormData, [e.target.name]: true})}} />
            <label> Yes</label>
        </td>   
      </tr>

      

      
 
    </tbody>
  </table>
</div>

<br/>
      <div className="h6 fw-bold" style={{color: '#00788A'}}>Source of Funds</div>
            <div className='row'>
                <div className='col-6'>
                    <p className='text-start'>Identify the source of funds being invested</p>
                </div>
                <div className='col-6'>
                    <div className='col-6'>
                        <select className="text-start form-select" name='AI_SourceOfFunds' value={FormData['AI_SourceOfFunds']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
            <textarea maxLength={500} className="form-control"  style={{height: '100px'}} 
                name='AI_SourceOfFundsDetail' onChange={(e) => {onChange(e)}} value={FormData['AI_SourceOfFundsDetail']}
                onFocus={backgroundInfo_onFocus10_1}
                onBlur={backgroundInfo_onBlur10_1}
                placeholder={`Define Other Source of Funds.
                
                `}  aria-describedby=""  ></textarea>
<p>The following are reasons why the abovementioned product best suits the business’s needs and objectives:</p>
{
        backgroundInfoVisibility24 ? 
        <>
        <div id="background_info_instructions24" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Motivate why the chosen product was recommended to best suit your client's needs


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '100px'}} 
        id="AI_PF_Reasons" name='AI_PF_Reasons' value={FormData['AI_PF_Reasons']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus24}
        onBlur={backgroundInfo_onBlur24}
        placeholder={
`Motivate why the chosen product was recommended to best suit your client's needs

`}  aria-describedby=""  ></textarea>

<br/>
<p>The details of the material aspects of the selected product that were discussed with you are outlined below:</p>
{
        backgroundInfoVisibility25 ? 
        <>
        <div id="background_info_instructions25" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Disclose and explain the following:<br/>
                    The tax implications, i.e. estate duty, income tax (e.g. interest received), CGT


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '150px'}} 
        id="AI_PF_MaterialAspects" name='AI_PF_MaterialAspects' value={FormData['AI_PF_MaterialAspects']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus25}
        onBlur={backgroundInfo_onBlur25}
        placeholder={
`Disclose and explain the following:
The tax implications, i.e. estate duty, income tax (e.g. interest received), CGT


`}  aria-describedby=""  ></textarea>

<br/>
{
        backgroundInfoVisibility26 ? 
        <>
        <div id="background_info_instructions26" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Discuss the product details: <br/>
                    Liquidity<br/>
                    Termination penalties<br/>
                    Guarantees, if any<br/>
                    Implications of fees & costs<br/>
                    Legislative restrictions <br/>
                    Special terms and conditions <br/>
                    Other relevant information<br/>


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '300px'}} 
        id="AI_PF_Pr_Details" name='AI_PF_Pr_Details' value={FormData['AI_PF_Pr_Details']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus26}
        onBlur={backgroundInfo_onBlur26}
        placeholder={
`Discuss the product details: 
Liquidity
Termination penalties
Guarantees, if any
Implications of fees & costs
Legislative restrictions 
Special terms and conditions 
Other relevant information



`}  aria-describedby=""  ></textarea>

<br/>
{
        backgroundInfoVisibility27 ? 
        <>
        <div id="background_info_instructions27" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Record discussion with regard to nomination of beneficiaries or cessionaries.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea maxLength={500} className="form-control"  style={{height: '150px'}} 
        id="AI_PF_NominationOfBeneficiaries" name='AI_PF_NominationOfBeneficiaries' value={FormData['AI_PF_NominationOfBeneficiaries']} onChange={(e) => {onChange(e)}} 
        onFocus={backgroundInfo_onFocus27}
        onBlur={backgroundInfo_onBlur27}
        placeholder={
`Record discussion with regard to nomination of beneficiaries or cessionaries.



`}  aria-describedby=""  ></textarea>
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

export default connect(mapStateToProps)(AssuranceInvestment)