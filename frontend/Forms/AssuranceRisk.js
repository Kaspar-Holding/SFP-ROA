import React, {useState} from 'react';
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
    return(
        <>
        <br/>
            <div class="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>BUSINESS ASSURANCE</b></div>
            <hr/>
            <h5><b>PART I: RISK</b></h5>
            <hr/>
            
    
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Trade name of Business:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Trade name of Business"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Registered name of Business:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Registered name of business (If different from the trade name of the business)"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Authorised Person(s):</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Person(s) who may act on behalf of this business"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Financial Advisor:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Primary intermediary's name"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Address:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Business address"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Email:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Email address"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Phone:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Contact numbers"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Date:</b></label>
                    </div>

                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap to enter date"  aria-describedby="" style={{width: '830px'}} />
                    </div>
                </div>
            </div>
            <hr className="col-11" />

            <div className="col-11 p_class">
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
                                <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // letterOfIntroduction ?
                    // null :
                    <>
                        <div className="col-11" id="letter_of_introduction_2">
                        {/* {
                            letterOfIntroductionVisibility ?
                            <>
                                <div id="letter_of_introduction_instructions" className="hidden_class">
                                    <p>If no, motivate</p>
                                </div>
                            </> :
                            null
                        } */}
                        <textarea  id="letter_of_introduction" name="letter_of_introduction" className="form-control" placeholder="Explain" aria-describedby="" ></textarea>
                        </div>
                    </>
                }
            </div>

            <hr className="col-11" />
            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Client has provided authority to access information.</label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" type="radio" value="0" id="authority_access_radio_btn" name="authority_access_radio_btn" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" type="radio" value="1" id="authority_access_radio_btn" name="authority_access_radio_btn" />
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // letterOfIntroductionAccess ?
                    // null :
                    <>
                        <div className="col-11" id="authority_access_2" >
                        {/* {
                            letterOfIntroductionAccessVisibility ?
                            <>
                                <div id="authority_access_instructions" className="hidden_class">
                                    <p>If no, motivate</p>
                                </div>
                            </> :
                            null
                        } */}
                    <textarea  id="authority_access" name="authority_access" className="form-control" placeholder="Explain" aria-describedby="" ></textarea>
                        </div>
                    </>
                }
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
                                <input className="form-check-input" type="radio" value="0" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" type="radio" value="1" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // Fica ? null : 
                    <>
                    <div className="col-11" id="provided_identity_2" >
                    {/* {
                        FicaVisibility ?
                        <>
                            <div id="provided_identity_instructions" className="hidden_class">
                                <p>If no, motivate</p>
                            </div>
                        </> : 
                        null
                    } */}
                    <textarea  id="provided_identity" name="provided_identity" className="form-control" placeholder="Explain" aria-describedby="" ></textarea>
                    </div>
                    </>
                }
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
                                <input className="form-check-input" type="radio" value="0" id="provided_identity_radio_btn1" name="provided_identity_radio_btn1"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" type="radio" value="1" id="provided_identity_radio_btn1" name="provided_identity_radio_btn1"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // Rica ? null : 
                    <>
                    <div className="col-11" id="provided_identity_2" >
                    {/* {
                        RicaVisibility ?
                        <>
                            <div id="provided_identity_instructions" className="hidden_class">
                                <p>If no, motivate</p>
                            </div>
                        </> : 
                        null
                    } */}
                    <textarea  id="provided_identity" name="provided_identity" className="form-control" placeholder="Explain" aria-describedby="" ></textarea>
                    </div>
                    </>
                }
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
                                <input className="form-check-input" type="radio" value="0" id="provided_identity_radio_btn2" name="provided_identity_radio_btn2"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn2" >
                                    Yes
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" type="radio" value="1" id="provided_identity_radio_btn2" name="provided_identity_radio_btn2"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn2" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // Sica ? null : 
                    <>
                    <div className="col-11" id="provided_identity_2" >
                    {/* {
                        SicaVisibility ?
                        <>
                            <div id="provided_identity_instructions" className="hidden_class">
                                <p>If no, motivate</p>
                            </div>
                        </> : 
                        null
                    } */}
                    <textarea  id="provided_identity" name="provided_identity" className="form-control" placeholder="Explain" aria-describedby="" ></textarea>
                    </div>
                    <hr/>
                    </>
                }
            </div>

            <hr/>
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
        <textarea  id="background_info1" name="background_info1" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus1}
        onBlur={backgroundInfo_onBlur1}
        placeholder={`Brief description of the business.`}  aria-describedby=""  ></textarea>

        <hr/>
        <p><b>Business Needs Identified</b></p>

        <h4><b>PART I: RISK</b></h4>
        <div className="h6 fw-bold" style={{color: '#00788A'}}>2. Financial Needs Analysis Summary: Business Assurance</div>
        <br/>
        <p><b>Business assurance needs identified</b></p>

<table class="table">
    <thead>
        
      {/* <th scope="col">#</th> */}
       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Funding of Buy-and-Sell Agreement
            </label>
        </div>
       </td> 
      
       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Key Person Insurance
            </label>
        </div>
       </td> 
      
       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Contingent liability
            </label>
        </div>
       </td> 

       <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Business Overheads Protection
            </label>
        </div>
       </td> 
      
    </thead>
    <br/>
    <thead>
        
        {/* <th scope="col">#</th> */}
        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Credit Loan Account Redemption
            </label>
        </div>
       </td> 

        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Debit Loan Redemption
            </label>
        </div>
       </td> 

        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Funding of Future Expenses
            </label>
        </div>
       </td> 

        <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
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
    <textarea  id="background_info2" name="background_info2" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus2}
        onBlur={backgroundInfo_onBlur2}
        placeholder={
`Provide description and motivation of the description of the needs identified.`}  aria-describedby=""  ></textarea>

<hr/>

        


        <table class="table">
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
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
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
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Temporary Income (p.m.)</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanent Income(p.m)</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>

     <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
        <td>  
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
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
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>

            </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
        <td>  
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
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
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanant Income(p.m.)</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>

            </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comment</td>
        <td>  
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
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
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>

            </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
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
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>

            </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">OTHER</td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
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
    <textarea  id="background_info3" name="background_info2" className="form-control"  style={{height: '80px'}} 
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
    <textarea  id="background_info4" name="background_info4" className="form-control"  style={{height: '80px'}} 
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
    <textarea  id="background_info5" name="background_info5" className="form-control"  style={{height: '60px'}} 
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
    <textarea  id="background_info6" name="background_info6" className="form-control"  style={{height: '60px'}} 
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
    <textarea  id="background_info7" name="background_info7" className="form-control"  style={{height: '60px'}} 
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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Policy number</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Premium</b></label>
                    </div>
                    <div className="col-6">
                    
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="R 0.00"  aria-describedby="" />
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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Escalation in cover / premium</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Life / Lives covered</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>2nd year commission</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="R 0.00"  aria-describedby="" />
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
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="R 0.00"  aria-describedby="" />
                    </div> 
                </div>
            </div>
            <hr/>

            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="R 0.00"  aria-describedby="" />
                    </div> 
                </div>
            </div>
            <hr/>

            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="R 0.00"  aria-describedby="" />
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
    <textarea  id="background_info8" name="background_info8" className="form-control"  style={{height: '60px'}} 
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
    <textarea  id="background_info9" name="background_info9" className="form-control"  style={{height: '60px'}} 
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
    <textarea  id="background_info10" name="background_info10" className="form-control"  style={{height: '140px'}} 
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
    <textarea  id="background_info11" name="background_info11" className="form-control"  style={{height: '120px'}} 
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
    <textarea  id="background_info12" name="background_info12" className="form-control"  style={{height: '80px'}} 
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
    <textarea  id="background_info13" name="background_info13" className="form-control"  style={{height: '200px'}} 
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

        </>
    )
}

export default AssuranceRisk

