import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';
import './Styles/CustomNotification.css';
import './Styles/CustomButton.css';
import './Invest.css';
import { connect } from 'react-redux';
import { Editor, tinyMCE } from '@tinymce/tinymce-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
const Invest = ({user}) => 
{
    const location = useLocation();
    const { state } = location;
    const [FormData, setFormData] = useState({
        advisorId : user['id'],
        formId : state['formId'],
        // clientIdNumber : "",

        IP_SourceOfIncome : 0,    
        IP_OtherSourceOfIncome : "",    
        IP_InvestmentTerm : "",    
        IP_InvestmentTermDetails : "",    
        IP_Liquidity : 2,    
        IP_LiquidityDetails : "",    
        IP_Type : 2,    
        IP_TypeDetails : "",    
        IP_PremiumType : 2,    
        IP_PremiumTypeDetails : "",    
        IP_IncomeRequired : 2,    
        IP_IncomeRequiredDetails : "",    
        IP_InvestmentStrategy : 2,    
        IP_InvestmentStrategyDetails : "",    
        IP_ReturnRequired : 2,    
        IP_ReturnRequiredDetails : "",    
        IP_RiskProfile : 2,      
        IP_RiskProfileDetails : "",      

        IP_RecommendationSummary : "",    

        IP_AltS_1 : "",    
        IP_AltS_2 : "",    
        IP_AltS_3 : ""

        
    })
    const [ProductTaken, setProductTaken] = useState([{
        advisorId : user['id'],  
        formId : state['formId'],  
          

        ProductTaken : 0,    
        ProductProvider : "",    
        PolicyNumber : "",    
        ProductName : "",    
        ProductPremium : "",    
        ProductPremiumFrequency : 1,   
        ProductEscalation : "",    
        ProductEAC : "",    
        ProductContractingParty : "",    
        ProductLivesAssured : "",    
        ProductPremiumLayer : "",    
        ProductBeneficiary : "",    
        Product_IniC : "",    
        Product_IniC_Percentage : "",    
        Product_OnC : "",    
        Product_OnC_Percentage : "",    

        SFPSolutionFunds : 2,
        SFPSolutionFundsDetails : "",

        ItP : "",
        ItP_Fund : "",
        ItP_FundPercentage : "",
        ItP_FundProvided : 0,
        ItP_FundDiscussed : 0,
        
        ItP_Fund1 : "",
        ItP_FundPercentage1 : "",
        ItP_FundProvided1 : 0,
        ItP_FundDiscussed1 : 0,

        ItP_Fund2 : "",
        ItP_FundPercentage2 : "",
        ItP_FundProvided2 : 0,
        ItP_FundDiscussed2 : 0,

        ItP_Fund3 : "",
        ItP_FundPercentage3 : "",
        ItP_FundProvided3 : 0,
        ItP_FundDiscussed3 : 0,

        ItP_Fund4 : "",
        ItP_FundPercentage4 : "",
        ItP_FundProvided4 : 0,
        ItP_FundDiscussed4 : 0,

        ItP_Fund5 : "",
        ItP_FundPercentage5 : "",
        ItP_FundProvided5 : 0,
        ItP_FundDiscussed5 : 0,

        ItP_Fund6 : "",
        ItP_FundPercentage6 : "",
        ItP_FundProvided6 : 0,
        ItP_FundDiscussed6 : 0,

        ItP_Fund7 : "",
        ItP_FundPercentage7 : "",
        ItP_FundProvided7 : 0,
        ItP_FundDiscussed7 : 0,

        ItP_FundsReasons : "",

        ItP_FundsMaterialAspects : ""
      }])
      const AddNewProductTaken = (e) => {
        const current = [...ProductTaken]
        current.push({
            advisorId : user['id'],  
            formId : state['formId'],  
            

            ProductTaken : 0,    
            ProductProvider : "",    
            PolicyNumber : "",    
            ProductName : "",    
            ProductPremium : "",    
            ProductPremiumFrequency : 1,   
            ProductEscalation : "",    
            ProductEAC : "",    
            ProductContractingParty : "",    
            ProductLivesAssured : "",    
            ProductPremiumLayer : "",    
            ProductBeneficiary : "",    
            Product_IniC : "",    
            Product_IniC_Percentage : "",    
            Product_OnC : "",    
            Product_OnC_Percentage : "",    

            SFPSolutionFunds : 2,
            SFPSolutionFundsDetails : "",

            ItP : "",
            ItP_Fund : "",
            ItP_FundPercentage : "",
            ItP_FundProvided : 0,
            ItP_FundDiscussed : 0,
            
            ItP_Fund1 : "",
            ItP_FundPercentage1 : "",
            ItP_FundProvided1 : 0,
            ItP_FundDiscussed1 : 0,

            ItP_Fund2 : "",
            ItP_FundPercentage2 : "",
            ItP_FundProvided2 : 0,
            ItP_FundDiscussed2 : 0,

            ItP_Fund3 : "",
            ItP_FundPercentage3 : "",
            ItP_FundProvided3 : 0,
            ItP_FundDiscussed3 : 0,

            ItP_Fund4 : "",
            ItP_FundPercentage4 : "",
            ItP_FundProvided4 : 0,
            ItP_FundDiscussed4 : 0,

            ItP_Fund5 : "",
            ItP_FundPercentage5 : "",
            ItP_FundProvided5 : 0,
            ItP_FundDiscussed5 : 0,

            ItP_Fund6 : "",
            ItP_FundPercentage6 : "",
            ItP_FundProvided6 : 0,
            ItP_FundDiscussed6 : 0,

            ItP_Fund7 : "",
            ItP_FundPercentage7 : "",
            ItP_FundProvided7 : 0,
            ItP_FundDiscussed7 : 0,

            ItP_FundsReasons : "",

            ItP_FundsMaterialAspects : ""
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
    const on_ProductTaken_CheckBox_Change = (e, i, value) => {
        let newProductTaken = [...ProductTaken]
        newProductTaken[i][e.target.name] = value
        setProductTaken(newProductTaken)
    }
    
    const on_ProductTaken_Value_Change = (name, i, val) => {
        let newProductTaken = [...ProductTaken]
        newProductTaken[i][""+name+""] = val
        setProductTaken(newProductTaken)
    }
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
            setProductTaken(response.data['ProductTaken'])
            // if (response.data['ProductTaken'].length > 0) {
            //   } else {
            //     setProductTaken([{
            //         advisorId : user['id'],  
            //         formId : state['formId'],  
                      
            
            //         ProductTaken : 0,    
            //         ProductProvider : "",    
            //         PolicyNumber : "",    
            //         ProductName : "",    
            //         ProductPremium : "",    
            //         ProductPremiumFrequency : 1,   
            //         ProductEscalation : "",    
            //         ProductEAC : "",    
            //         ProductContractingParty : "",    
            //         ProductLivesAssured : "",    
            //         ProductPremiumLayer : "",    
            //         ProductBeneficiary : "",    
            //         Product_IniC : "",    
            //         Product_IniC_Percentage : "",    
            //         Product_OnC : "",    
            //         Product_OnC_Percentage : "",    
            
            //         SFPSolutionFunds : 2,
            //         SFPSolutionFundsDetails : "",
            
            //         ItP : "",
            //         ItP_Fund : "",
            //         ItP_FundPercentage : "",
            //         ItP_FundProvided : 0,
            //         ItP_FundDiscussed : 0,
                    
            //         ItP_Fund1 : "",
            //         ItP_FundPercentage1 : "",
            //         ItP_FundProvided1 : 0,
            //         ItP_FundDiscussed1 : 0,
            
            //         ItP_Fund2 : "",
            //         ItP_FundPercentage2 : "",
            //         ItP_FundProvided2 : 0,
            //         ItP_FundDiscussed2 : 0,
            
            //         ItP_Fund3 : "",
            //         ItP_FundPercentage3 : "",
            //         ItP_FundProvided3 : 0,
            //         ItP_FundDiscussed3 : 0,
            
            //         ItP_Fund4 : "",
            //         ItP_FundPercentage4 : "",
            //         ItP_FundProvided4 : 0,
            //         ItP_FundDiscussed4 : 0,
            
            //         ItP_Fund5 : "",
            //         ItP_FundPercentage5 : "",
            //         ItP_FundProvided5 : 0,
            //         ItP_FundDiscussed5 : 0,
            
            //         ItP_Fund6 : "",
            //         ItP_FundPercentage6 : "",
            //         ItP_FundProvided6 : 0,
            //         ItP_FundDiscussed6 : 0,
            
            //         ItP_Fund7 : "",
            //         ItP_FundPercentage7 : "",
            //         ItP_FundProvided7 : 0,
            //         ItP_FundDiscussed7 : 0,
            
            //         ItP_FundsReasons : "",
            
            //         ItP_FundsMaterialAspects : ""
            //       }])
            //   }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
        }
    }
    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
    const updateIPForm = async() => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify(FormData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_investment_planning_data/`, Body ,config)
            // console.log(response.data['formData'])
            setFormData(response.data['formData'])
            
            setSuccessMessage("Investment Planning data is successfully updated")
            setSuccessMessageVisibility("block")
            setTimeout(() => {
                setSuccessMessageVisibility("none")
            }, 5000)
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            console.log(error)
        }
        
        const ProductTaken_Body = JSON.stringify({
            "formId" : state['formId'],
            "ip_data" : ProductTaken
          })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_ip_ProductTaken_Data/`, ProductTaken_Body ,config) 
        } catch (error) {
            
        }
    }
    const onSubmit = e => {
        e.preventDefault()
        updateIPForm()
        // window.location.reload();
    }
    useEffect(() => {
        createIPForm(FormData)
        const interval = setInterval(() => {
            const investFormSubmitButton = document.querySelector(".updateInvestFormBTN")
            investFormSubmitButton.click()
        }, 10000)
        return () => {
            clearInterval(interval);
        }
        // setInterval(updateIPForm, 20000);
    }, []);
    // console.log(JSON.stringify(FormData))
    
    // setTimeout(() => {
    //     setSuccessMessageVisibility("none")
    // }, 5000);
    
    const getInitialState = () => {
        var value;
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

    return(
        <>
        
      <div className="notification_container">
        <div className="alert alert-success fade show" style={{display: SuccessMessageVisibility}} role="alert">
          {SuccessMessage}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      </div>
            <form onSubmit={e => onSubmit(e)}>
                
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
            {/* <textarea maxLength={500}   id="background_info10" className="form-control"  style={{height: '100px'}} 
                name='IP_OtherSourceOfIncome' onChange={(e) => {onChange(e)}}
                value={FormData['IP_OtherSourceOfIncome']}
                onFocus={backgroundInfo_onFocus10}
                onBlur={backgroundInfo_onBlur10}
                placeholder={`Define Other Source of Funds.
                
                `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_OtherSourceOfIncome']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_OtherSourceOfIncome']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus10()}}
                onBlur={(e)=>{backgroundInfo_onBlur10()}}                      
                name="IP_OtherSourceOfIncome"
                init={{
                    selector: "textarea",
                    placeholder: 'Define Other Source of Funds.',
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
                    <input spellCheck="true" type="number" id="IP_InvestmentTerm" name='IP_InvestmentTerm' value={FormData['IP_InvestmentTerm']} onChange={(e) => {onChange(e)}} className="form-control" placeholder="Investment Term"  aria-describedby="" />
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
            {/* <textarea maxLength={500}   id="background_info11" className="form-control"
                name='IP_InvestmentTermDetails' onChange={(e) => {onChange(e)}}
                value={FormData['IP_InvestmentTermDetails']}
                onFocus={backgroundInfo_onFocus11}
                onBlur={backgroundInfo_onBlur11}
                placeholder={`Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.
                `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_InvestmentTermDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_InvestmentTermDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus11()}}
                onBlur={(e)=>{backgroundInfo_onBlur11()}}                      
                name="IP_InvestmentTermDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.',
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

            <hr />
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.2 Liquidity/Access required during term</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData['IP_Liquidity'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_Liquidity" name="IP_Liquidity" />
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
                                <input className="form-check-input" checked={FormData['IP_Liquidity'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_Liquidity" name="IP_Liquidity" />
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
            {/* <textarea maxLength={500}   id="background_info11" className="form-control"
                name='IP_LiquidityDetails' onChange={(e) => {onChange(e)}} value={FormData['IP_LiquidityDetails']}
                onFocus={backgroundInfo_onFocus12}
                onBlur={backgroundInfo_onBlur12}
                placeholder={`Does the client require access to the investment during the term?                
                `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_LiquidityDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_LiquidityDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus12()}}
                onBlur={(e)=>{backgroundInfo_onBlur12()}}                      
                name="IP_LiquidityDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Does the client require access to the investment during the term?',
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
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.3 Voluntary or compulsory investment</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData['IP_Type'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_Type" name="IP_Type" />
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
                                <input className="form-check-input" checked={FormData['IP_Type'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_Type" name="IP_Type" />
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
            {/* <textarea maxLength={500}   id="background_info11" className="form-control" 
                name='IP_TypeDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_TypeDetails']}
                onFocus={backgroundInfo_onFocus13}
                onBlur={backgroundInfo_onBlur13}
                placeholder={`Explain?                
                `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_TypeDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_TypeDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus13()}}
                onBlur={(e)=>{backgroundInfo_onBlur13()}}                      
                name="IP_TypeDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Explain?',
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

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.4 Lump sum or recurring premium</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData['IP_PremiumType'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_PremiumType" name="IP_PremiumType"/>
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
                                <input className="form-check-input" checked={FormData['IP_PremiumType'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_PremiumType" name="IP_PremiumType"/>
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
            {/* <textarea maxLength={500}   id="background_info11" className="form-control"
                name='IP_PremiumTypeDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_PremiumTypeDetails']}
                onFocus={backgroundInfo_onFocus14}
                onBlur={backgroundInfo_onBlur14}
                placeholder={`Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.
                `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_PremiumTypeDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_PremiumTypeDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus14()}}
                onBlur={(e)=>{backgroundInfo_onBlur14()}}                      
                name="IP_PremiumTypeDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.',
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
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.5 Income Required</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-3 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={FormData['IP_IncomeRequired'] == 1 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="1" id="IP_IncomeRequired" name="IP_IncomeRequired"/>
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
                                <input className="form-check-input" checked={FormData['IP_IncomeRequired'] == 0 ? true : false} onChange={(e) => {onChange(e)}} type="radio" value="0" id="IP_IncomeRequired" name="IP_IncomeRequired"/>
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
            {/* <textarea maxLength={500}   id="background_info11" className="form-control"
                name='IP_IncomeRequiredDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_IncomeRequiredDetails']}
                onFocus={backgroundInfo_onFocus15}
                onBlur={backgroundInfo_onBlur15}
                placeholder={`Details of Income Required.                
                `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_IncomeRequiredDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_IncomeRequiredDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus15()}}
                onBlur={(e)=>{backgroundInfo_onBlur15()}}                      
                name="IP_IncomeRequiredDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Details of Income Required.',
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
            {/* <textarea maxLength={500}   id="background_info1" className="form-control"  style={{height: '80px'}}
                name='IP_InvestmentStrategyDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_InvestmentStrategyDetails']}
                onFocus={backgroundInfo_onFocus1}
                onBlur={backgroundInfo_onBlur1}
                placeholder={`Notes on discussion with client concerning the investment strategy.`}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_InvestmentStrategyDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_InvestmentStrategyDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus1()}}
                onBlur={(e)=>{backgroundInfo_onBlur1()}}                      
                name="IP_InvestmentStrategyDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Notes on discussion with client concerning the investment strategy.',
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
            {/* <textarea maxLength={500}   id="background_info2" className="form-control"  style={{height: '80px'}} 
                name='IP_ReturnRequiredDetails' onChange={(e) => {onChange(e)}}
                value={FormData['IP_ReturnRequiredDetails']}
                onFocus={backgroundInfo_onFocus2}
                onBlur={backgroundInfo_onBlur2}
                placeholder={
            `Notes on discussion with client concerning return expectations.`}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_RiskProfileDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_ReturnRequiredDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus2()}}
                onBlur={(e)=>{backgroundInfo_onBlur2()}}                      
                name="IP_ReturnRequiredDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Notes on discussion with client concerning return expectations.',
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
            {/* <textarea maxLength={500}   id="background_info3" className="form-control"  style={{height: '80px'}} 
                name='IP_RiskProfileDetails' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_RiskProfileDetails']} 
                onFocus={backgroundInfo_onFocus3}
                onBlur={backgroundInfo_onBlur3}
                placeholder={
            `Notes on the client risk profile.`}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_RiskProfileDetails']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_RiskProfileDetails']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus3()}}
                onBlur={(e)=>{backgroundInfo_onBlur3()}}                      
                name="IP_RiskProfileDetails"
                init={{
                    selector: "textarea",
                    placeholder: 'Notes on the client risk profile.',
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
            {/* <textarea maxLength={500}   id="background_info" className="form-control"  style={{height: '120px'}} 
                name='IP_RecommendationSummary' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_RecommendationSummary']}
                onFocus={backgroundInfo_onFocus}
                onBlur={backgroundInfo_onBlur}
                placeholder={
                `Discuss the outcome of the FNA
                Qualification of need explaining the reasons why this type of investment vehicle was recommended
                How it will meet the client's needs
                                `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_RecommendationSummary']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_RecommendationSummary']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus()}}
                onBlur={(e)=>{backgroundInfo_onBlur()}}                      
                name="IP_RecommendationSummary"
                init={{
                    selector: "textarea",
                    placeholder: "Discuss the outcome of the FNA Qualification of need explaining the reasons why this type of investment vehicle was recommended How it will meet the client's needs",
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
            <h5 className="text-start " ><b>SECTION D:</b></h5> 
            <h6 className="text-start " style={{ color: "#14848A"}} ><b>Alternative Solutions Considered</b></h6>

            <p>The following solutions were presented to you for consideration but were not selected for the following reasons:</p>

            {
                backgroundInfoVisibility4 ? 
                <>
                <div id="background_info_instructions4" className="hidden_class">
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
            {/* <textarea maxLength={500}   id="background_info4" className="form-control"  style={{height: '60px'}} 
                name='IP_AltS_1' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_AltS_1']}
                onFocus={backgroundInfo_onFocus4}
                onBlur={backgroundInfo_onBlur4}
                placeholder={
                `1. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_AltS_1']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_AltS_1']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus4()}}
                onBlur={(e)=>{backgroundInfo_onBlur4()}}                      
                name="IP_AltS_1"
                init={{
                    selector: "textarea",
                    placeholder: "1. Identify the type of product or product provider which was considered but not selected and motivate.",
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
                backgroundInfoVisibility5 ? 
                <>
                <div id="background_info_instructions5" className="hidden_class">
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
            {/* <textarea maxLength={500}   id="background_info5" className="form-control"  style={{height: '60px'}} 
                name='IP_AltS_2' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_AltS_2']}
                onFocus={backgroundInfo_onFocus5}
                onBlur={backgroundInfo_onBlur5}
                placeholder={
            `2. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_AltS_2']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_AltS_2']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus5()}}
                onBlur={(e)=>{backgroundInfo_onBlur5()}}                      
                name="IP_AltS_2"
                init={{
                    selector: "textarea",
                    placeholder: "2. Identify the type of product or product provider which was considered but not selected and motivate.",
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
                backgroundInfoVisibility6 ? 
                <>
                <div id="background_info_instructions6" className="hidden_class">
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
            {/* <textarea maxLength={500}   id="background_info6" className="form-control"  style={{height: '60px'}} 
                name='IP_AltS_3' onChange={(e) => {onChange(e)}} 
                value={FormData['IP_AltS_3']}
                onFocus={backgroundInfo_onFocus6}
                onBlur={backgroundInfo_onBlur6}
                placeholder={
            `3. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={FormData['IP_AltS_3']}
                onEditorChange={(newText)=>{ setFormData({...FormData, ['IP_AltS_3']: newText }) }}
                onFocus={(e)=>{backgroundInfo_onFocus6()}}
                onBlur={(e)=>{backgroundInfo_onBlur6()}}                      
                name="IP_AltS_3"
                init={{
                    selector: "textarea",
                    placeholder: "3. Identify the type of product or product provider which was considered but not selected and motivate.",
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




            <br />
            <h5 className="text-start " ><b>SECTION E:</b></h5> 
            <h6 className="text-start " style={{ color: "#14848A"}} ><b>Product Taken</b></h6>

            <p>Products accepted by you to meet your requirements.</p>
            {
                ProductTaken.length === 0 ? 
                    <div className="col-6">
                        <button className="btn btn-md" type='button' onClick={(e)=>{AddNewProductTaken(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Product</button>
                    </div>
                :<></>
            }

            {
                ProductTaken.length > 0 ? 
                ProductTaken.map((key,i) => {
                    // console.log(i+1)
                      return (
                        <>
            <div className="row">
                <div className="col-6">
                    <button className="btn btn-md" type='button' onClick={(e)=>{AddNewProductTaken(e)}}><FontAwesomeIcon icon={faPlus} /> Add New Product</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-md" type='button' onClick={(e)=>{RemoveNewProductTaken(e)}}><FontAwesomeIcon icon={faMinus} /> Remove Product</button>
                </div>
              </div>

            <div className="container mt-3">          
            <table className="table">
                
                <tbody>
                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product:</td>
                    <td>  
                    <div className=''>
                        <select className="text-start form-select" name='ProductTaken' value={parseInt(key.ProductTaken)} onChange={(e)=>{on_ProductTaken_Change(e, i)}} aria-label="Default select example">
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
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Provider:</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='ProductProvider' value={key.ProductProvider}  onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Policy No:</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='PolicyNumber' required value={key.PolicyNumber} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 

                    <td></td> 
                    
                    <td></td>      
                </tr>

                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Name:</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='ProductName' value={key.ProductName} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium</td>
                <td>  
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group">
                                <input type="text" className="form-control" name='ProductPremium' value={key.ProductPremium} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <select className="text-start form-select" name='ProductPremiumFrequency' value={key.ProductPremiumFrequency} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-label="Default select example">
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
                        <input type="text" className="form-control" name='ProductEscalation' value={key.ProductEscalation} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Total estimated annual <br/>cost (EAC)</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='ProductEAC' value={key.ProductEAC} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 
                    <td></td> 
                    <td></td>      
                </tr>

                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Contracting Party</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='ProductContractingParty' value={key.ProductContractingParty} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Life/Lives assured</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='ProductLivesAssured' value={key.ProductLivesAssured} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 
                    <td></td> 
                    <td></td>      
                </tr>

                <tr>
                    <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium Layer</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='ProductPremiumLayer' value={key.ProductPremiumLayer} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td></td>
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Beneficiary / nominee</td>
                <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='ProductBeneficiary' value={key.ProductBeneficiary} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td> 
                    <td></td> 
                    <td></td>      
                </tr>
                <tr>
                    
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Initial Commission</td>
                    <td>  
                    <div className="form-group">
                        <input type="text" className="form-control" name='Product_IniC' value={key.Product_IniC} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                    </div>
                </td>  
                <td><input type="text" className="form-control" name='Product_IniC_Percentage' value={key.Product_IniC_Percentage} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%</td>
                <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Ongoing Commission</td>
                <td>  
                        <div className="form-group">
                            <input type="text" className="form-control" name='Product_OnC' value={key.Product_OnC} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                </td> 
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='Product_OnC_Percentage' value={key.Product_OnC_Percentage} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%
                        </div>
                    </td> 
                    {/* <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='SFPSolutionFunds' value={key.SFPSolutionFunds} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="Total" style={{width: '120px'}}/>
                        </div>
                    </td>       */}

                </tr>

                
                </tbody>
            </table>
            </div>

            {/* {(() => {
          
                if (value==2) {
                    return (<><p>Hello</p><h1>hi</h1></>);
                }
                
            })()} */}

            <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Were the SFP Solution Funds (multi-managed wrap funds) considered?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" checked={key.SFPSolutionFunds == 1 ? true : false} onChange={(e) => {on_ProductTaken_Change(e, i)}} type="radio" value="1" id="SFPSolutionFunds" name="SFPSolutionFunds"/>
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
                                    <input className="form-check-input" checked={FormData["SFPSolutionFunds"] == 0 ? true : false} onChange={(e) => {on_ProductTaken_Change(e, i)}} type="radio" value="0" id="SFPSolutionFunds" name="SFPSolutionFunds"/>
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
                    {/* <textarea maxLength={500}   id="provided_identity2" name="SFPSolutionFundsDetails" value={key.SFPSolutionFundsDetails} onChange={(e) => {on_ProductTaken_Change(e, i)}} onFocus={sica_onFocus} onBlur={sica_onBlur} className="form-control" placeholder="State the motivation" aria-describedby="" ></textarea> */}
                    <Editor
                        value={key.SFPSolutionFundsDetails}
                        onEditorChange={(newText)=>{ on_ProductTaken_Value_Change("SFPSolutionFundsDetails", i, newText)}}
                        onFocus={(e)=>{sica_onFocus()}}
                        onBlur={(e)=>{sica_onBlur()}} 
                        name="SFPSolutionFundsDetails"                     
                        init={{
                            selector: "textarea",
                            placeholder: 'State the motivation',
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
            {/* <textarea maxLength={500}   id="background_info7" className="form-control"  style={{height: '400px'}} 
                name='ItP' value={key.ItP} onChange={(e) => {on_ProductTaken_Change(e, i)}} 
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

                meeting the investment objectives of the clients `}  aria-describedby=""  ></textarea> */}
            <Editor
                value={key.ItP}
                onEditorChange={(newText)=>{ on_ProductTaken_Value_Change("ItP", i, newText)}}
                onFocus={(e)=>{backgroundInfo_onFocus7()}}
                onBlur={(e)=>{backgroundInfo_onBlur7()}} 
                name="ItP"                     
                init={{
                    selector: "textarea",
                    placeholder: `
                    When a wrap fund or a selection of wrap funds is used, motivate, and explain.
    
                    Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided:
    
                    illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,
    
                    motivating the constructed portfolio with reference to the following aspects:
    
                    correlation;
    
                    drawdown;
    
                    portfolio return;
    
                    meeting the investment objectives of the clients `,
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
                            <input type="text" className="form-control" name='ItP_Fund' value={key.ItP_Fund} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage' value={key.ItP_FundPercentage} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" checked={key.ItP_FundProvided === 1 ? true : false} name="ItP_FundProvided" onChange={(e)=>{key.ItP_FundProvided === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" checked={key.ItP_FundDiscussed === 1 ? true : false} name="ItP_FundDiscussed" onChange={(e)=>{key.ItP_FundDiscussed === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> No</label>
                    </td>     
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_Fund1' value={key.ItP_Fund1} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage1' value={key.ItP_FundPercentage1} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundProvided1 === 1 ? true : false} name="ItP_FundProvided1" onChange={(e)=>{key.ItP_FundProvided1 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundDiscussed1 === 1 ? true : false} name="ItP_FundDiscussed1" onChange={(e)=>{key.ItP_FundDiscussed1 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> No</label>
                    </td>     
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_Fund2' value={key.ItP_Fund2} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage2' value={key.ItP_FundPercentage2} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundProvided2 === 1 ? true : false} name="ItP_FundProvided2" onChange={(e)=>{key.ItP_FundProvided2 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundDiscussed2 === 1 ? true : false} name="ItP_FundDiscussed2" onChange={(e)=>{key.ItP_FundDiscussed2 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> No</label>
                    </td>    
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_Fund3' value={key.ItP_Fund3} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage3' value={key.ItP_FundPercentage3} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundProvided3 === 1 ? true : false} name="ItP_FundProvided3" onChange={(e)=>{key.ItP_FundProvided3 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundDiscussed3 === 1 ? true : false} name="ItP_FundDiscussed3" onChange={(e)=>{key.ItP_FundDiscussed3 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> No</label>
                    </td>    
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_Fund4' value={key.ItP_Fund4} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage4' value={key.ItP_FundPercentage4} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundProvided4 === 1 ? true : false} name="ItP_FundProvided4" onChange={(e)=>{key.ItP_FundProvided4 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundDiscussed4 === 1 ? true : false} name="ItP_FundDiscussed4" onChange={(e)=>{key.ItP_FundDiscussed4 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> No</label>
                    </td>     
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_Fund5' value={key.ItP_Fund5} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage5' value={key.ItP_FundPercentage5} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundProvided5 === 1 ? true : false} name="ItP_FundProvided5" onChange={(e)=>{key.ItP_FundProvided5 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundDiscussed5 === 1 ? true : false} name="ItP_FundDiscussed5" onChange={(e)=>{key.ItP_FundDiscussed5 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> No</label>
                    </td> 
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_Fund6' value={key.ItP_Fund6} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage6' value={key.ItP_FundPercentage6} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundProvided6 === 1 ? true : false} name="ItP_FundProvided6" onChange={(e)=>{key.ItP_FundProvided6 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundDiscussed6 === 1 ? true : false} name="ItP_FundDiscussed6" onChange={(e)=>{key.ItP_FundDiscussed6 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> No</label>
                    </td>      
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_Fund7' value={key.ItP_Fund7} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
                        
                    
                    <td align="center">
                        <div className="form-group">
                            <input type="text" className="form-control" name='ItP_FundPercentage7' value={key.ItP_FundPercentage7} onChange={(e) => {on_ProductTaken_Change(e, i)}} aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
                        </div>
                    </td>
                
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                    <td> 
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundProvided7 === 1 ? true : false} name="ItP_FundProvided7" onChange={(e)=>{key.ItP_FundProvided7 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
                        <label for="vehicle1"> Yes</label>
                    </td>

                    <td>
                        <input type="checkbox" id="vehicle1" checked={key.ItP_FundDiscussed7 === 1 ? true : false} name="ItP_FundDiscussed7" onChange={(e)=>{key.ItP_FundDiscussed7 === 1 ? on_ProductTaken_CheckBox_Change(e, i, 0) : on_ProductTaken_CheckBox_Change(e, i, 1)}}/>
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
        {/* <textarea maxLength={500}   id="background_info8" className="form-control"  style={{height: '60px'}} 
            name='ItP_FundsReasons' value={key.ItP_FundsReasons} onChange={(e) => {on_ProductTaken_Change(e, i)}} 
            onFocus={backgroundInfo_onFocus8}
            onBlur={backgroundInfo_onBlur8}
            placeholder={
        `Motivate why the chosen product was recommended to best suit your client's needs. `}  aria-describedby=""  ></textarea> */}
        <Editor
            value={key.ItP_FundsReasons}
            onEditorChange={(newText)=>{ on_ProductTaken_Value_Change("ItP_FundsReasons", i, newText)}}
            onFocus={(e)=>{backgroundInfo_onFocus8()}}
            onBlur={(e)=>{backgroundInfo_onBlur8()}} 
            name="ItP_FundsReasons"                     
            init={{
                selector: "textarea",
                placeholder: `Motivate why the chosen product was recommended to best suit your client's needs.  `,
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
        <p>The details of the material aspects of the selected product that were discussed with you are outlined below:</p>
        {
          
          parseInt(key.ProductTaken)==1 ? <>
            <p>
                <b>Tax Implications:</b><br/>
                There are significant tax benefits afforded to Endowment plan investors. With an endowment plan the life insurance company will pay tax on your behalf at a rate of 30%. At maturity date the proceeds of this investment will be tax free.
            </p>

            <p>
                <b>Liquidity:</b><br/> 
                In the first five years of this investment your access to your funds are restricted. During this period access is limited to one partial withdrawal or a full surrender or a loan subject to penalties.
            </p>

            <p>
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

            <p>
                <b>Gurantees:</b><br/>
                The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses 
            </p>

            <p>
                <b>Legislative Restrictions:</b><br/>
                In the event of a withdrawal there may be restrictions on the maximum amount allowed as a withdrawal, any excess amount above the 
                allowed limit will have to remain invested until the end of the restricted period.
                In the event of any increase in contributions in which an increase of more than 20% of the preceeding two years premiums occurs a new restriction period of 5 years will apply

            </p>

            <p>
                <b>Implication of Fees:</b><br/> 
                Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.
            </p>

            <p>
                <b>At death-Endownment:</b><br/>
                The proceeds will pay-out to your nominated beneficiary and will attract estate duty at a maximum of 25%. Should the beneficiary be your estate executors fees will be applicable. 
            </p>

            <p>
                <b>At death-sinking fund</b><br/>
                The policy will be enforced with the new owner as stipulated.
            </p>


            </> : parseInt(key.ProductTaken)==2 ?
                <>
                    <p><b>Tax Implications:</b><br/>
                    There are significant tax benefits afforded to RA investors. You are permitted to deduct up to 27.5% of your annual taxable incomes (subject to  R350 000 per year maximum). Contributions in excess of this amount may deducted in the following tax year or at retirement. In addition to this, no income tax or capital gain tax is charged on the investment returns within an RA. Also, the funds housed in your RA do not form part of your estate, which means that this money will not be subject to executors fees or estate duty (except the excess contributions made). At retirement, you will be permitted to withdraw up to 1/3 of the value of the retirement annuity(s) of which the first R500 000 of the total withdrawal is tax-free subject to there being no previous withdrawals from any retirement fund.</p>
                    
                    <p><b>Liquidity:</b><br/>
                    You will only be able to access the funds from age 55 onwards, subject to formal emigration from South Africa after a period of 3 years or at early retirement due to permanent disability.</p>

                    <p><b>Termination Penalties:</b><br/>
                    Planner disclose as per the product</p>
                    
                    <p><b>Gurantees:</b><br/>
                    The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses.</p>

                    <p><b>Legislative Restrictions:</b><br/>
                    At retirement you have the option to withdraw 1/3 of the investment in cash. The remaining two-thirds must be used to purchase a pension income to sustain you during retirement. Alternatively you may choose to purchase an income with the full amount. Retirement annuity withdrawals are taxed according to the retirement lumpsum tax tables</p>

                    <p><b>Implication of Fees:</b><br/>
                    Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.</p>

                    <p><b>Commutation at Retirement:</b><br/>
                    You are allowed to commute the entire fund value provided the minimum fund value of R247 500 is met. This rule is applied per retirement fund and not per client. </p>

                    <p><b>At death</b><br/>
                    You may nominate beneficiaries. However, the trustees of the fund will make the final decision in terms of equitable distribution of the funds. The trustees will take your wishes into account but are not bound by them.</p>
              </> 
              : parseInt(key.ProductTaken)==3 ? 
              <>
                <p>
                    <b>Tax Implications:</b><br/>
                    The investment will not attract any tax  if contributions are kept within the annual limits which are R36 000 p.a and R500 000 life time. Any excess contributions will be taxed at 40%. 
                </p>

                <p>
                    <b>Liquidity:</b><br/>
                    Planner disclose 
                </p>

                <p>
                    <b>Termination Penalties:</b><br/>
                    Planner to disclosed
                </p>

                <p>
                    <b>Gurantees:</b><br/>
                    The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses.
                </p>

                <p>
                    <b>Implication of Fees:</b><br/> 
                    Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.
                </p>

                <p>
                    <b>Legislative Restrictions:</b><br/> 
                    There are limits to the annual and life time contributions on this investment. You may have multiple tax free savings accounts but the annual and lifetime limits limits are applied per individual and not per investment.In the event that you make a withdrawal any subsequent replacement of funds above the limit will attract tax at 40%.
                </p>

                <p>
                    <b>Death Benefit</b><br/>
                    Planner to disclose
                </p>

                </> : parseInt(key.ProductTaken)==4 ?
                <>
                <p>
                    <b>Tax Implications:</b><br/>
                    Your investment will be taxed in accordance with your marginal tax rate. This investment will attract capital gains tax when you change funds or when funds are withdrawn.
                </p>

                <p>
                    <b>Liquidity:</b><br/>
                    You are allowed to make regular withdrawals.
                </p>

                <p>
                    <b>Termination Penalties:</b><br/> 
                    No termination penalties 
                </p>

                <p>
                    <b>Gurantees:</b><br/>
                    The product does not offer any guarantees. Invested funds will be subject to market fluctuations and may be exposed to capital losses.
                </p>
                
                <p>
                    <b>Implication of Fees:</b><br/> 
                    Please note there will be fees levied on the investment, these fees will result in the reduction of the returns generated by the investment and in the event of low growth may also have a negative impact on the fund value. We have also discussed the EAC which is an illustration of the maximum total cost that may be levied on your investment.
                </p>

                <p>
                    <b>Legislative Restrictions:</b><br/>
                    The are no legislative restrictions on this investment 
                </p>

                <p>
                    <b>At Death</b><br/>
                    You cannot appoint a beneficiary. In the event of death this benefit will pay into the your Estate. The investment will be an asset in your estate and will attract estate duty and executors’ fees. The investment will be distributed in accordance with your instructions in the will.
                </p>
            </> : parseInt(key.ProductTaken)==5 ?
            <>

                <p>
                    <b>Tax Implications:</b><br/>
                    The income drawn form this investmenet will be taxed at your marginal tax rate taking into consideration your gross income form all your income streams. Due to this you may pay a higher tax than illustrated when looking at this investment individually.
                </p>

                <p>
                    <b>Termination Penalties:</b><br/> 
                    This investment cannot be terminated
                </p>

                <p>
                    <b>Gurantees:</b><br/>
                    The income amount paid out by this investment is guaranteed for life, if you have selecetd an escalation for your income the income will increase by the selected escalation annually. Selecting an escalation on your income will result I the initial income amount being substantially lower than if the level income option is selected.
                </p>

                <p>
                    <b>Implication of Fees:</b><br/>  
                    The fees levied on this investment are priced into the product
                </p>

                <p>
                    <b>Legislative Restrictions:</b><br/> 
                    The decision to invest in this product cannot be reversed, the income amount cannot be altered you will only receive annual increases if you have selected the escalation option
                </p>

                <p>
                    <b>At Death</b><br/>
                    Single Life: If you have selecetd the single life option the income paid out on this investment will cease in the event of your death, the product does not have a death benefit this means no funds will be paid out.<br/><br/>
                    Joint Life : If you have selected the joint life option it means you have elecetd to have two life assured on the product. In the event of the 1st life assureds death the income will continue paying out to the second life assured, the income paid out to the second life assured maybe reduced subject to the option you have selected. At the death of the second life assured income will cease and no death benefit will be paid out.<br/><br/>
                    Guarantee Period : In the event that you have seleceted a guarantee period this means that in the event of your death or the death of both life assured in the case of a joint life within the guarantee period the income on this investment will continue to pay to your nominated beneficiary until the end of the guarantee period.

                </p>

                <p>
                    Please not if death is to occur after the guarantee period no income will be paid to your nominated beneficiary.
                </p>
        </> : parseInt(key.ProductTaken)==6 ?<>

                <p>
                    <b>Tax Implications:</b><br/>
                    The growth on this investment will not attract any tax, but the income drawn will be taxed at your marginal tax rate taking into consideration all gross income generated form all available income streams. Due to this you may pay a higher tax than illustrated when looking at this investment individually.
                </p>

                <p>
                    <b>Liquidity:</b><br/> 
                    This investment does not allow you to access the invested capital not even in the event of termination 
                </p>

                <p>
                    <b>Termination Penalties:</b><br/>
                    In the event that you terminate this investment any applicable termination fees will be disclosed in the termination quotation 
                </p>

                <p>
                    <b>Gurantees:</b><br/>
                    The product does not offer any guarantees, invested funds will be subject to markert fluctuations and pontential capital losses
                </p>

                <p>
                    <b>Implication of Fees:</b><br/> 
                    Please note there will be fees levied on the invetsment, these fees will result in the reduction of returns generated by the investment and in the event of low growth may alos have a negative impact on the fund value. We have also discussed the EAC which is an illustration  the maximum tatal cost that may be levied on the investment. It also important to not that as a general rule and for longegivity the icnome withdrwaa rate should be kept lower than the invetsment return rate. I have also made you aware of inflation that is the risk that the buying power of your funds over time may be depleted and eroded . 
                </p>

                <p>
                    <b>Legislative Restrictions:</b><br/>
                    There are limits imposed on the income witdrawal rate, currntly as legislation stands you are allowed a minimum of 2.5% and a maximum of 17.5%. The income withdrawal rate can be changed once a year depending on your income objectives at the time. It should be noted that changes in income rates should be considered in consideration to expected investment returns and adjustments and realingment consindered accordingly.  
                </p>

                <p>
                    In the event that this invetsment is terminated you will not have access to the inevsted capital but will be required to transffer the fund value to an alternative annuity vehicle, life or living annuity.
                </p>

                <p>
                    <b>At Death</b><br/>
                    In the event of death the investment will pay-out directly to your nominated beneficiary and will not form part of your estate or attract any estate taxes. The beneficiary will be presented with the option to transfer the funds into a new annuity in their name or alternatively take the funds in cash which will attract taxes.The beneficiary also has an option the select the alternatives as a combination.  
                </p>

           </> : <></>
    }
                        </>
                      )
                }): <></>
            }
            
      
      <div className="container1">
            <div className="icon1 update">
                <div className="tooltip1">
                    Update
                </div>
                <span><button type="submit" className="updateInvestFormBTN" style={{border: "none", backgroundColor: "transparent"}}><i className="fa-solid fa-check" /></button></span>
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

export default connect(mapStateToProps)(Invest)
