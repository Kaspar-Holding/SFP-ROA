import axios from 'axios';
import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
// import Form from '../Form';
import '../Invest.css';
const Invest = (props) => 
{
    const location = useLocation();
    const { state } = location;
    const [propsData, setpropsData] = useState(props.data);
    const [FormData, setFormData] = useState({
        advisorId : state['advisorId'],
        formId : state['formId'],
        // clientIdNumber : "",

        IP_SourceOfIncome : 0,    
        IP_OtherSourceOfIncome : "",    
        IP_InvestmentTerm : "",    
        IP_InvestmentTermDetails : "",    
        IP_Liquidity : 0,    
        IP_LiquidityDetails : "",    
        IP_Type : 0,    
        IP_TypeDetails : "",    
        IP_PremiumType : 0,    
        IP_PremiumTypeDetails : "",    
        IP_IncomeRequired : 0,    
        IP_IncomeRequiredDetails : "",    
        IP_InvestmentStrategy : 0,    
        IP_InvestmentStrategyDetails : "",    
        IP_ReturnRequired : 0,    
        IP_ReturnRequiredDetails : "",    
        IP_RiskProfile : 0,      
        IP_RiskProfileDetails : "",      

        IP_RecommendationSummary : "",    

        IP_AltS_1 : "",    
        IP_AltS_2 : "",    
        IP_AltS_3 : "",    

        IP_ProductTaken : 0,    
        IP_ProductProvider : "",    
        IP_PolicyNumber : "",    
        IP_ProductName : "",    
        IP_ProductPremium : "",    
        IP_ProductPremiumFrequency : 1,   
        IP_ProductEscalation : "",    
        IP_ProductEAC : "",    
        IP_ProductContractingParty : "",    
        IP_ProductLivesAssured : "",    
        IP_ProductPremiumLayer : "",    
        IP_ProductBeneficiary : "",    
        IP_Product_IniC : "",    
        IP_Product_IniC_Percentage : "",    
        IP_Product_OnC : "",    
        IP_Product_OnC_Percentage : "",    

        IP_SFPSolutionFunds : 0,
        IP_SFPSolutionFundsDetails : "",

        IP_ItP : "",
        IP_ItP_Fund : "",
        IP_ItP_FundPercentage : "",
        IP_ItP_FundProvided : 0,
        IP_ItP_FundDiscussed : 0,
        
        IP_ItP_Fund1 : "",
        IP_ItP_FundPercentage1 : "",
        IP_ItP_FundProvided1 : 0,
        IP_ItP_FundDiscussed1 : 0,

        IP_ItP_Fund2 : "",
        IP_ItP_FundPercentage2 : "",
        IP_ItP_FundProvided2 : 0,
        IP_ItP_FundDiscussed2 : 0,

        IP_ItP_Fund3 : "",
        IP_ItP_FundPercentage3 : "",
        IP_ItP_FundProvided3 : 0,
        IP_ItP_FundDiscussed3 : 0,

        IP_ItP_Fund4 : "",
        IP_ItP_FundPercentage4 : "",
        IP_ItP_FundProvided4 : 0,
        IP_ItP_FundDiscussed4 : 0,

        IP_ItP_Fund5 : "",
        IP_ItP_FundPercentage5 : "",
        IP_ItP_FundProvided5 : 0,
        IP_ItP_FundDiscussed5 : 0,

        IP_ItP_Fund6 : "",
        IP_ItP_FundPercentage6 : "",
        IP_ItP_FundProvided6 : 0,
        IP_ItP_FundDiscussed6 : 0,

        IP_ItP_Fund7 : "",
        IP_ItP_FundPercentage7 : "",
        IP_ItP_FundProvided7 : 0,
        IP_ItP_FundDiscussed7 : 0,

        IP_ItP_FundsReasons : "",

        IP_ItP_FundsMaterialAspects : ""

        
    });
    // console.log(JSON.stringify(FormData))
    const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
    // console.log(JSON.stringify(FormData))
    const [letterOfIntroduction, setletterOfIntroduction] = useState(true)
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [setletterOfIntroductionReason] = useState("")
    const [letterOfIntroductionAccess, setletterOfIntroductionAccess] = useState(true)
    const [letterOfIntroductionAccessVisibility, setletterOfIntroductionAccessVisibility] = useState(false)
    const [setletterOfIntroductionAccessReason] = useState("")

    const [Fica, setFica] = useState(true)
     const [Rica, setRica] = useState(true)
     const [Sica, setSica] = useState(true)

    const [FicaVisibility, setFicaVisibility] = useState(false)
     const [RicaVisibility, setRicaVisibility] = useState(false)
     const [SicaVisibility, setSicaVisibility] = useState(false)

    const [setFicaReason] = useState("")
     const [setRicaReason] = useState("")
     const [setSicaReason] = useState("")

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

    const createIPForm = async(data) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(data)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_investment_planning_data/`, Body ,config)
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
        createIPForm(FormData)
        // setInterval(updateIPForm, 20000);
    }, []);
    // console.log(JSON.stringify(FormData))

    
    
    return(
        <>
            <form>
                
                <br/>
                    <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>INVESTMENT AND SAVINGS</b></div>
                    <hr/>
                    <h6 className="text-start " style={{ color: "#14848A"}} > <b>Source of Funds</b></h6>  
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-start'>Identify the source of funds being invested</p>
                        </div>
                        <div className='col-6'>
                            <div className='col-6'>
                                <select className="text-start form-select" name='IP_SourceOfIncome' value={FormData['IP_SourceOfIncome']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info10" className="form-control"
                name='IP_OtherSourceOfIncome' onChange={(e) => {onChange(e)}}
                value={FormData['IP_OtherSourceOfIncome']}
                onFocus={backgroundInfo_onFocus10}
                onBlur={backgroundInfo_onBlur10}
                placeholder={`Define Other Source of Funds.
                
                `}  aria-describedby=""  ></textarea>

            <br/>
            <h6 className="text-start " style={{ color: "#14848A"}} > <b>Analysis of Client's Circumstances</b></h6>
            <p className="text-start">The analysis of your personal circumstances as described above.</p> 


            <div className='row'>
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Investment Requirements</b></label>
                </div>
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Need</b></label>
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.1 Investment term</label>
                </div>
                <div className="col-3">
                    <input spellCheck="true" disabled  type="number" id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Investment Term"  aria-describedby="" />
                </div>
                <div className="col-3">
                <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Years</label>
                </div>
            </div>
            <br/>


            {
                backgroundInfoVisibility11 ? 
                <>
                <div id="background_info_instructions11" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.

                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info11" className="form-control"
                name='IP_InvestmentTermDetails' onChange={(e) => {onChange(e)}}
                value={FormData['IP_InvestmentTermDetails']}
                onFocus={backgroundInfo_onFocus11}
                onBlur={backgroundInfo_onBlur11}
                placeholder={`Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.
                `}  aria-describedby=""  ></textarea>


            <hr />
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.2 Liquidity/Access required during term</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_Liquidity'] == "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_Liquidity" name="IP_Liquidity" />
                            </div>
                            <div className="col-8">
                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_Liquidity'] == "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_Liquidity" name="IP_Liquidity" />
                            </div>
                            <div className="col-8">
                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
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
                <div id="background_info_instructions11" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Does the client require access to the investment during the term?

                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info11" className="form-control"
                name='IP_LiquidityDetails' onChange={(e) => {onChange(e)}}
                value={FormData['IP_LiquidityDetails']}
                onFocus={backgroundInfo_onFocus12}
                onBlur={backgroundInfo_onBlur12}
                placeholder={`Does the client require access to the investment during the term?                
                `}  aria-describedby=""  ></textarea>

            <hr/>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.3 Voluntary or compulsory investment</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_Type'] == "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_Type" name="IP_Type" />
                            </div>
                            <div className="col-8">
                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                    Voluntary
                                </label>
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_Type'] == "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_Type" name="IP_Type" />
                            </div>
                            <div className="col-8">
                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
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
                <div id="background_info_instructions11" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Explain?

                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info11" className="form-control" 
                name='IP_TypeDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_TypeDetails']}
                onFocus={backgroundInfo_onFocus13}
                onBlur={backgroundInfo_onBlur13}
                placeholder={`Explain?                
                `}  aria-describedby=""  ></textarea>

            <hr/>

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.4 Lump sum or recurring premium</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_PremiumType'] == "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_PremiumType" name="IP_PremiumType"/>
                            </div>
                            <div className="col-8">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                    Lump Sum
                                </label>
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_PremiumType'] == "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_PremiumType" name="IP_PremiumType"/>
                            </div>
                            <div className="col-8">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
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
                <div id="background_info_instructions11" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.

                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info11" className="form-control"
                name='IP_PremiumTypeDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_PremiumTypeDetails']}
                onFocus={backgroundInfo_onFocus14}
                onBlur={backgroundInfo_onBlur14}
                placeholder={`Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.
                `}  aria-describedby=""  ></textarea>

            <hr/>
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.5 Income Required</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_IncomeRequired'] == "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_IncomeRequired" name="IP_IncomeRequired"/>
                            </div>
                                <div className="col-8">
                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
                                        Yes
                                    </label>
                                </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input disabled className="form-check-input" checked={FormData['IP_IncomeRequired'] == "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_IncomeRequired" name="IP_IncomeRequired"/>
                            </div>
                            <div className="col-8">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
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
                <div id="background_info_instructions15" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Details of Income Required.
                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info11" className="form-control"
                name='IP_IncomeRequiredDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_IncomeRequiredDetails']}
                onFocus={backgroundInfo_onFocus15}
                onBlur={backgroundInfo_onBlur15}
                placeholder={`Details of Income Required.                
                `}  aria-describedby=""  ></textarea>
            <hr/>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.6 Investment Strategy</label>
                </div>
                
                <div className='col-6'>
                    <div className='col-6'>
                        <select className="text-start form-select" name='IP_InvestmentStrategy' value={FormData['IP_InvestmentStrategy']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                            <option value="0" selected>Choose an Item</option>
                            <option value="1">Capital Reservation</option>
                            <option value="2">Income</option>
                            <option value="3">Goal Specification Investment</option>
                        </select>
                    </div>
                </div>
            </div>
            <br/>


            {
                backgroundInfoVisibility1 ? 
                <>
                <div id="background_info_instructions1" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Notes on discussion with client concerning the investment strategy.<br />
                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info1" className="form-control" 
                name='IP_InvestmentStrategyDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_InvestmentStrategyDetails']}
                onFocus={backgroundInfo_onFocus1}
                onBlur={backgroundInfo_onBlur1}
                placeholder={`Notes on discussion with client concerning the investment strategy.`}  aria-describedby=""  ></textarea>


            <hr/>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.7 Return Required</label>
                </div>
                <div className='col-6'>
                    <div className='col-6'>
                        <select className="text-start form-select" name='IP_ReturnRequired' value={FormData['IP_ReturnRequired']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
                <div id="background_info_instructions2" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Notes on discussion with client concerning return expectations.<br />
                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info2" className="form-control"  
                name='IP_ReturnRequiredDetails' onChange={(e) => {onChange(e)}}
                value={FormData['IP_ReturnRequiredDetails']}
                onFocus={backgroundInfo_onFocus2}
                onBlur={backgroundInfo_onBlur2}
                placeholder={
            `Notes on discussion with client concerning return expectations.`}  aria-describedby=""  ></textarea>

            <hr/>
            <div className="col-6">
            </div>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.8 Risk Profile</label>
                </div>
                <div className='col-6'>
                    <div className='col-6'>
                        <select className="text-start form-select" name='IP_RiskProfile' value={FormData['IP_RiskProfile']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
            <br/>
            {
                backgroundInfoVisibility3 ? 
                <>
                <div id="background_info_instructions3" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            Notes on the client risk profile.<br />
                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info3" className="form-control"  
                name='IP_RiskProfileDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_RiskProfileDetails']} 
                onFocus={backgroundInfo_onFocus3}
                onBlur={backgroundInfo_onBlur3}
                placeholder={
            `Notes on the client risk profile.`}  aria-describedby=""  ></textarea>


            <hr />



            <h5 className="text-start " ><b>SECTION C:</b></h5> 
            <h6 className="text-start " style={{ color: "#14848A"}} ><b>Financial Solutions:</b></h6>

            <p>Summary of recommendations to address your identified needs</p>
            {
                backgroundInfoVisibility ? 
                <>
                <div id="background_info_instructions" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                                Discuss the outcome of the FNA<br />
                            </li>
                            <li>
                                Qualification of need explaining the reasons why this type of investment vehicle was recommended<br />
                            </li>
                            <li>
                                How it will meet the client's needs<br />
                            </li>
                            
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info" className="form-control"
                name='IP_RecommendationSummary' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_RecommendationSummary']}
                onFocus={backgroundInfo_onFocus}
                onBlur={backgroundInfo_onBlur}
                placeholder={
                `Discuss the outcome of the FNA
                Qualification of need explaining the reasons why this type of investment vehicle was recommended
                How it will meet the client's needs
                                `}  aria-describedby=""  ></textarea>

            <h5 className="text-start " ><b>SECTION D:</b></h5> 
            <h6 className="text-start " style={{ color: "#14848A"}} ><b>Alternative Solutions Considered</b></h6>

            <p>The following solutions were presented to you for consideration but were not value="0" selected for the following reasons:</p>

            {
                backgroundInfoVisibility4 ? 
                <>
                <div id="background_info_instructions4" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            1. Identify the type of product or product provider which was considered but not value="0" selected and motivate..<br />
                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info4" className="form-control"  
                name='IP_AltS_1' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_AltS_1']}
                onFocus={backgroundInfo_onFocus4}
                onBlur={backgroundInfo_onBlur4}
                placeholder={
                `1. Identify the type of product or product provider which was considered but not value="0" selected and motivate.. `}  aria-describedby=""  ></textarea>

            <hr/>

            {
                backgroundInfoVisibility5 ? 
                <>
                <div id="background_info_instructions5" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            2. Identify the type of product or product provider which was considered but not value="0" selected and motivate..<br />
                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info5" className="form-control"  
                name='IP_AltS_2' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_AltS_2']}
                onFocus={backgroundInfo_onFocus5}
                onBlur={backgroundInfo_onBlur5}
                placeholder={
            `2. Identify the type of product or product provider which was considered but not value="0" selected and motivate.. `}  aria-describedby=""  ></textarea>

            <hr/>

            {
                backgroundInfoVisibility6 ? 
                <>
                <div id="background_info_instructions6" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            3. Identify the type of product or product provider which was considered but not value="0" selected and motivate..<br />
                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info6" className="form-control"  
                name='IP_AltS_3' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_AltS_3']}
                onFocus={backgroundInfo_onFocus6}
                onBlur={backgroundInfo_onBlur6}
                placeholder={
            `3. Identify the type of product or product provider which was considered but not value="0" selected and motivate.. `}  aria-describedby=""  ></textarea>





            <br />


            <h5 className="text-start " ><b>SECTION E:</b></h5> 
            <h6 className="text-start " style={{ color: "#14848A"}} ><b>Product Taken</b></h6>

            <p>Products accepted by you to meet your requirements.</p>

            <div className="container mt-3">          
            <table className="table">
                
                <tbody>
                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product:</td>
                    <td>  
                    <div className=''>
                        <select className="text-start form-select" name='IP_ProductTaken' value={FormData['IP_ProductTaken']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                            <option value="0" selected>Choose Product</option>
                            <option value="1">Endowment</option>
                            <option value="2">RA</option>
                            <option value="3">TSFA</option>
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
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Provider:</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductProvider' value={FormData['IP_ProductProvider']}  onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Policy No:</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_PolicyNumber' value={FormData['IP_PolicyNumber']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 

                    <td></td> 
                    
                    <td></td>      
                </tr>

                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Name:</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductName' value={FormData['IP_ProductName']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium</td>
                <td>  
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group">
                                <input type="text" className="form-control" name='IP_ProductPremium' value={FormData['IP_ProductPremium']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <select className="text-start form-select" name='IP_ProductPremiumFrequency' value={FormData['IP_ProductPremiumFrequency']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Escalation:</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductEscalation' value={FormData['IP_ProductEscalation']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Total estimated annual <br/>cost (EAC)</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductEAC' value={FormData['IP_ProductEAC']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 
                    <td></td> 
                    <td></td>      
                </tr>

                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Contracting Party</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductContractingParty' value={FormData['IP_ProductContractingParty']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Life/Lives assured</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductLivesAssured' value={FormData['IP_ProductLivesAssured']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 
                    <td></td> 
                    <td></td>      
                </tr>

                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium Layer</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductPremiumLayer' value={FormData['IP_ProductPremiumLayer']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Beneficiary / nominee</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_ProductBeneficiary' value={FormData['IP_ProductBeneficiary']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 
                    <td></td> 
                    <td></td>      
                </tr>
                <tr>
                    
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Initial Commission</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='IP_Product_IniC' value={FormData['IP_Product_IniC']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td><input type="text" className="form-control" name='IP_Product_IniC_Percentage' value={FormData['IP_Product_IniC_Percentage']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%</td>
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Ongoing Commission</td>
                <td>  
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_Product_OnC' value={FormData['IP_Product_OnC']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                </td> 
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_Product_OnC_Percentage' value={FormData['IP_Product_OnC_Percentage']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%
                        </div>
                    </td> 
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_SFPSolutionFunds' value={FormData['IP_SFPSolutionFunds']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="Total" style={{width: '120px'}}/>
                        </div>
                    </td>      

                </tr>

                
                </tbody>
            </table>
            </div>


            <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Were the SFP Solution Funds (multi-managed wrap funds) considered?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input disabled className="form-check-input" checked={FormData['IP_SFPSolutionFundsDetails'] == "1" ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_SFPSolutionFundsDetails" name="IP_SFPSolutionFundsDetails"/>
                                </div>
                                    <div className="col-2">
                                        <label className="form-check-label" htmlFor="provided_identity_radio_btn2" >
                                            Yes
                                        </label>
                                    </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input disabled className="form-check-input" checked={FormData["IP_SFPSolutionFundsDetails"] == "1" ? false : true} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_SFPSolutionFundsDetails" name="IP_SFPSolutionFundsDetails"/>
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="provided_identity_radio_btn2" >
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
                                    <p>State the motivation</p>
                                </div>
                            </> : 
                        null
                    }
                        <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="provided_identity2" name="IP_SFPSolutionFundsDetailsDetails" onChange={(e) => {onChange(e)}} onFocus={sica_onFocus} onBlur={sica_onBlur} className="form-control" placeholder="State the motivation" aria-describedby="" ></textarea>
                    </div>
            </div>
            <hr/>
            <p><b>Investment portfolio</b></p>

            {
                backgroundInfoVisibility7 ? 
                <>
                <div id="background_info_instructions7" className="hidden_class">
                    {/* <p>Discuss the outcome of the FNA</p><br /> */}
                        <ul>
                            <li>
                            When a wrap fund or a selection of wrap funds is used, motivate, and explain.<br/><br/>
                            Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided:<br/><br/>
                            illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,<br/><br/>
                            motivating the constructed portfolio with reference to the following aspects:<br/><br/>
                            correlation;<br/><br/>					
                            drawdown;<br/><br/>
                            portfolio return;<br/><br/>
                            meeting the investment objectives of the clients

                            </li>
                        
                        </ul>
                        
                </div>
                </>: 
                null
            }
            <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info7" className="form-control" 
                name='IP_ItP' value={FormData['IP_ItP']} onChange={(e) => {onChange(e)}} 
                onFocus={backgroundInfo_onFocus7}
                onBlur={backgroundInfo_onBlur7}
                placeholder={`
                When a wrap fund or a selection of wrap funds is used, motivate, and explain.

                Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided:

                illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,

                motivating the constructed portfolio with reference to the following aspects:

                correlation;

                drawdown;

                portfolio return;

                meeting the investment objectives of the clients `}  aria-describedby=""  ></textarea>

            <br/>
            <table className="table">
                <thead>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <td scope="col" align="center"><p>Fund Fact Sheets to client:</p></td> 
                    
                </thead>
                
                    
            </table>


            <div className="container mt-3">          
            <table className="table">
                
                <tbody>
                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Funds</td>
                    
                        
                    
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="center">%</td>
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                <td> 
                        <div>Provided</div>
                    </td>
                    <td>
                        <div>Discussed</div>
                    </td>     
                </tr>

                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund' value={FormData['IP_ItP_Fund']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage' value={FormData['IP_ItP_FundPercentage']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided"] == 1 ? true : false} name="IP_ItP_FundProvided" onChange={(e)=>{FormData["IP_ItP_FundProvided"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed"] == 1 ? true : false} name="IP_ItP_FundDiscussed" onChange={(e)=>{FormData["IP_ItP_FundDiscussed"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td>     
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund1' value={FormData['IP_ItP_Fund1']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage1' value={FormData['IP_ItP_FundPercentage1']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided1"] == 1 ? true : false} name="IP_ItP_FundProvided1" onChange={(e)=>{FormData["IP_ItP_FundProvided1"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed1"] == 1 ? true : false} name="IP_ItP_FundDiscussed1" onChange={(e)=>{FormData["IP_ItP_FundDiscussed1"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td>     
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund2' value={FormData['IP_ItP_Fund2']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage2' value={FormData['IP_ItP_FundPercentage2']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided2"] == 1 ? true : false} name="IP_ItP_FundProvided2" onChange={(e)=>{FormData["IP_ItP_FundProvided2"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed2"] == 1 ? true : false} name="IP_ItP_FundDiscussed2" onChange={(e)=>{FormData["IP_ItP_FundDiscussed2"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td>    
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund3' value={FormData['IP_ItP_Fund3']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage3' value={FormData['IP_ItP_FundPercentage3']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided3"] == 1 ? true : false} name="IP_ItP_FundProvided3" onChange={(e)=>{FormData["IP_ItP_FundProvided3"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed3"] == 1 ? true : false} name="IP_ItP_FundDiscussed3" onChange={(e)=>{FormData["IP_ItP_FundDiscussed3"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td>    
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund4' value={FormData['IP_ItP_Fund4']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage4' value={FormData['IP_ItP_FundPercentage4']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided4"] == 1 ? true : false} name="IP_ItP_FundProvided4" onChange={(e)=>{FormData["IP_ItP_FundProvided4"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed4"] == 1 ? true : false} name="IP_ItP_FundDiscussed4" onChange={(e)=>{FormData["IP_ItP_FundDiscussed4"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td>     
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund5' value={FormData['IP_ItP_Fund5']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage5' value={FormData['IP_ItP_FundPercentage5']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided5"] == 1 ? true : false} name="IP_ItP_FundProvided5" onChange={(e)=>{FormData["IP_ItP_FundProvided5"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed5"] == 1 ? true : false} name="IP_ItP_FundDiscussed5" onChange={(e)=>{FormData["IP_ItP_FundDiscussed5"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td> 
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund6' value={FormData['IP_ItP_Fund6']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage6' value={FormData['IP_ItP_FundPercentage6']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided6"] == 1 ? true : false} name="IP_ItP_FundProvided6" onChange={(e)=>{FormData["IP_ItP_FundProvided6"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed6"] == 1 ? true : false} name="IP_ItP_FundDiscussed6" onChange={(e)=>{FormData["IP_ItP_FundDiscussed6"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td>      
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_Fund7' value={FormData['IP_ItP_Fund7']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='IP_ItP_FundPercentage7' value={FormData['IP_ItP_FundPercentage7']} onChange={(e) => {onChange(e)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundProvided7"] == 1 ? true : false} name="IP_ItP_FundProvided7" onChange={(e)=>{FormData["IP_ItP_FundProvided7"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input disabled type="checkbox" id="vehicle1" checked={FormData["IP_ItP_FundDiscussed7"] == 1 ? true : false} name="IP_ItP_FundDiscussed7" onChange={(e)=>{FormData["IP_ItP_FundDiscussed7"] == 1 ? setFormData({...FormData, [e.target.name]: 0}) : setFormData({...FormData, [e.target.name]: 1})}}/>
                        <label for="vehicle1"> No</label>
                    </td>     
            </tr>

        
            </tbody>
        </table>
        </div>

        <br/>
        <p>The following are reasons why the abovementioned product best suits your needs and objectives:</p>

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
        <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info8" className="form-control"  
            name='IP_ItP_FundsReasons' value={FormData['IP_ItP_FundsReasons']} onChange={(e) => {onChange(e)}} 
            onFocus={backgroundInfo_onFocus8}
            onBlur={backgroundInfo_onBlur8}
            placeholder={
        `Motivate why the chosen product was recommended to best suit your client's needs. `}  aria-describedby=""  ></textarea>

        <hr/>
        <p>The details of the material aspects of the value="0" selected product that were discussed with you are outlined below:</p>

        {
            backgroundInfoVisibility9 ? 
            <>
            <div id="background_info_instructions9" className="hidden_class">
                {/* <p>Discuss the outcome of the FNA</p><br /> */}
                    <ul>
                        <li>
                        Fill this field if Non-standard Product is chosen, Record the client's instructions, deviations, and implications thereof<br/>
                        Disclose and explain the following:<br/>
                        The tax implications, i.e., estate duty, income tax (e.g., RA premium deductions, interest received), CGT<br/>
                        Executor’s fees?<br/>
                        Discuss the product details:<br/>
                        Liquidity<br/>
                        Termination penalties<br/>
                        Guarantees, if any<br/>
                        Implications of fees & costs<br/>
                        Legislative restrictions<br/>
                        Special terms & conditions<br/>
                        Other relevant information<br/>
                        Record discussion with regards to nomination of beneficiaries, beneficiary for ownership or cessionary.<br/>
                        Executor’s fees?<br/>

                        </li>
                    
                    </ul>
                    
            </div>
            </>: 
            null
        }
        <textarea disabled ref={textareaRef} style={{minHeight: MIN_TEXTAREA_HEIGHT, resize: "none" }} id="background_info9" className="form-control" 
            name='IP_ItP_FundsMaterialAspects' value={FormData['IP_ItP_FundsMaterialAspects']} onChange={(e) => {onChange(e)}} 
            onFocus={backgroundInfo_onFocus9}
            onBlur={backgroundInfo_onBlur9}
            placeholder={`
            Fill this field if Non-standard Product is chosen, Record the client's instructions, deviations, and implications thereof
            Disclose and explain the following:
            The tax implications, i.e., estate duty, income tax (e.g., RA premium deductions, interest received), CGT
            Executor’s fees?
            Discuss the product details:
            Liquidity
            Termination penalties
            Guarantees, if any
            Implications of fees & costs
            Legislative restrictions
            Special terms & conditions
            Other relevant information
            Record discussion with regards to nomination of beneficiaries, beneficiary for ownership or cessionary.
            Executor’s fees?
        `}  aria-describedby=""  ></textarea>


    



        

                {/* <button className='btn btn-primary'>Update Data</button> */}
            
            </form>
        </>
     )
 }

 export default Invest

