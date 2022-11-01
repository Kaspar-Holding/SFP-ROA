import React, {useState} from 'react';
// import './Invest.css';
 function  Short_term_Personal()
 {
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
      
    return(
        <>
         <br/>
        <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SHORT-TERM INSURANCE: PERSONAL LINES</b></div>
       <hr/>

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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Branch name:</b></label>
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
                        <label htmlFor="id_number" className="col-form-label"><b>Branch number:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Quotation number:</b></label>
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
                        <label htmlFor="id_number" className="col-form-label"><b>Policy Number</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Inception date:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Gender:</b></label>
                    </div>
                    <div className="col-6">
                        <label for="html">Male</label>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label for="css">Female</label>
                            <input type="radio" id="css" name="fav_language" value="CSS"/>
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
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Title:</b></label>
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
                        <label htmlFor="id_number" className="col-form-label"><b>Date of birth</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Identity Number:</b></label>
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
                        <label htmlFor="id_number" className="col-form-label"><b>Email Address:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Contact Number:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
            <div className="row">
                <div className="row col-2 align-items-center">
                    <div className="col-2">
                        <input className="form-check-input" checked={letterOfIntroduction ? true : false} onChange={(e) => {setletterOfIntroduction(true)}} type="radio" value="0" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                    </div>
                    <div className="col-2">
                        <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                            No
                        </label>
                    </div>
                </div>
                <div className="row col-2 align-items-center">
                    <div className="col-2">
                        <input className="form-check-input" checked={letterOfIntroduction ? false : true} onChange={(e) => {setletterOfIntroduction(false)}} type="radio" value="1" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                    </div>
                    <div className="col-2">
                        <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                            Yes
                        </label>
                    </div>
                </div>
            </div>
        </div>
        {
            letterOfIntroduction ?
                null :
                <>
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
                        <textarea  id="letter_of_introduction" name="letter_of_introduction" onChange={(e) => {setletterOfIntroductionReason(e.target.value)}} onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If yes, provide details" aria-describedby="" ></textarea>
                    </div>
                </>
        }
    </div>
    <hr/>

            <div className="row g-3 align-items-center">
                <div className="col-6">
                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">4.	Are you currently insured against the risks you are applying for?  </label>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={Fica ? true : false} onChange={(e) => {setFica(true)}} type="radio" value="0" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="row col-2 align-items-center">
                            <div className="col-2">
                                <input className="form-check-input" checked={Fica ? false : true} onChange={(e) => {setFica(false)}} type="radio" value="1" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                            </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    Fica ? null : 
                    <>
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
                    <textarea  id="provided_identity" name="provided_identity" onChange={(e) => {setFicaReason(e.target.value)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="If yes,provide name of the issuer" aria-describedby="" ></textarea>
                    </div>
                    </>
                }
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
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click or tap to enter date."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label">Name of insurer: </label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click or tap to enter text."  aria-describedby="" />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Type of loss"  aria-describedby="" style={{width:"150px"}} />
                                            </div>
                                            
                                            <div className="col-6">
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Year"  aria-describedby="" style={{width:"150px"}} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                            </div>
                                            
                                            <div className="col-6">
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Insurer"  aria-describedby="" style={{width:"150px"}} />
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
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Buildings</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Subsidence and landslip</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Accidental damage</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>All Risk(General)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Clothing and personal</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Keys and locks</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Wheelchairs</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Bicycles</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Cellular telephones</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; TV,VCR,Decoders</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>All Risk Specified</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Computer equipment</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Items in bank vault</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Jewellery(All jewellery)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Photographic equipment</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Sound Equipment</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Other specify</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Personal legal liability</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>(PLIP)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Vehicles(Refer to quote/policy)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Car hire</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Excess waiver</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Credit shortfall</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>



                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Watercraft</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Sasria</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Legal access</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      
                                      
                                  </tbody>
                              </table>
                              </div>


                              <br/>
                              <hr/>
                            <h6 align="left" style={{ color: "#14848A"}}><b>COVER AND RENEWAL OF INSURANCE</b></h6>
                            <hr/>
                            <div className="container-fluid">
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
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Buildings</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Subsidence and landslip</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Accidental damage</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>All Risk(General)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Clothing and personal</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Keys and locks</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Wheelchairs</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Bicycles</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Cellular telephones</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; TV,VCR,Decoders</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>All Risk Specified</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Computer equipment</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Items in bank vault</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Jewellery(All jewellery)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Photographic equipment</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Sound Equipment</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Other specify</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Personal legal liability</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>(PLIP)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Vehicles(Refer to quote/policy)</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Car hire</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Excess waiver</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>

                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Credit shortfall</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>



                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Watercraft</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Sasria</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr className="d-flex">
                                          
                                          <td className="col-2" style={{width:"200px"}}>Legal access</td>
                                          <td className="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td className="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>
    
                                  </tbody>
                              </table>
                              </div>

                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Does the advice given to the client include replacement of an existing financial product?	</label>
                                  </div>
                                  <div className="col-6">
                                      <div className="row">
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" checked={Fica1 ? true : false} onChange={(e) => {setFica1(true)}} type="radio" value="0" id="provided_identity_radio_btn1" name="provided_identity_radio_btn1"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
                                                      No
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" checked={Fica1 ? false : true} onChange={(e) => {setFica1(false)}} type="radio" value="1" id="provided_identity_radio_btn1" name="provided_identity_radio_btn1"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="provided_identity_radio_btn1" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  {
                                      Fica1 ? null : 
                                      <>
                                          <div className="col-11" id="provided_identity_2" >
                                              {
                                                  FicaVisibility1 ?
                                                  <>
                                                      {/* <div id="provided_identity_instructions" className="hidden_class">
                                                           <p>What is the purpose of this replacement?</p> 
                                                      </div> */}
                                                      
                                                      
                                                  </> : 
                                                  null
                                              }

                                            <p>If yes,answer the following:</p>
                                              <p>What is the purpose of this replacement?</p>
                                              <textarea  id="provided_identity_instructions" name="provided_identity_instructions" onChange={(e) => {setFicaReason1(e.target.value)}} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
                                            <hr/>
                                              <p>Reasons why replacement is considered more suitable than retaining or modifying the terminated product:</p>
                                              <textarea  id="provided_identity_instructions" name="provided_identity_instructions" onChange={(e) => {setFicaReason1(e.target.value)}} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
                                              <hr/>
                                              <p>Suppliers of the product(s) to be replaced:</p>
                                              <textarea  id="provided_identity_instructions" name="provided_identity_instructions" onChange={(e) => {setFicaReason1(e.target.value)}} onFocus={fica1_onFocus} onBlur={fica1_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
          
                                          </div>

                                      </>
                                  }
                              </div>


                              <br/>
                              <hr/>
                            <h6 align="left" style={{ color: "#14848A"}}>HOUSE CONTENT</h6>
                            <div><b>Primary Property</b></div>

                            <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                              <div className="row">

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                      <div className="row g-3 align-items-center">
                                          <div className="col-4">
                                              <label className="col-form-label">Residential area</label>
                                          </div>
                                          <div className="col-6">
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/>
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
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
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
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn1" name="letter_of_introduction_radio_btn1" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn1" >
                                                      Standard
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn1" name="letter_of_introduction_radio_btn1" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn1" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn2" name="letter_of_introduction_radio_btn2" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn2" >
                                                      Non Standard
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn2" name="letter_of_introduction_radio_btn2" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn2" >
                                                      Standard
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn3" name="letter_of_introduction_radio_btn3" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn3" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn3" name="letter_of_introduction_radio_btn3" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn3" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn4" name="letter_of_introduction_radio_btn4" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn4" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn4" name="letter_of_introduction_radio_btn4" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn4" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn5" name="letter_of_introduction_radio_btn5" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn5" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn5" name="letter_of_introduction_radio_btn5" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn5" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn7" name="letter_of_introduction_radio_btn7" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn7" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn7" name="letter_of_introduction_radio_btn7" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn7" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn8" name="letter_of_introduction_radio_btn8" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn8" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn8" name="letter_of_introduction_radio_btn8" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn8" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn9" name="letter_of_introduction_radio_btn9" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn9" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn9" name="letter_of_introduction_radio_btn9" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn9" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn10" name="letter_of_introduction_radio_btn10" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn10" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn10" name="letter_of_introduction_radio_btn10" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn10" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn11" name="letter_of_introduction_radio_btn11" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn11" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn11" name="letter_of_introduction_radio_btn11" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn11" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn12" name="letter_of_introduction_radio_btn12" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn12" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn12" name="letter_of_introduction_radio_btn12" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn12" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn13" name="letter_of_introduction_radio_btn13" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn13" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn13" name="letter_of_introduction_radio_btn13" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn13" >
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/>
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
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
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
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:'200px'}}/>
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn14" name="letter_of_introduction_radio_btn14" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn14" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn14" name="letter_of_introduction_radio_btn14" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn14" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn15" name="letter_of_introduction_radio_btn15" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn15" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn15" name="letter_of_introduction_radio_btn15" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn15" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn16" name="letter_of_introduction_radio_btn16" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn16" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn16" name="letter_of_introduction_radio_btn16" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn16" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn17" name="letter_of_introduction_radio_btn17" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn17" >
                                                      Standard
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn17" name="letter_of_introduction_radio_btn17" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn17" >
                                                      Non standard
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn18" name="letter_of_introduction_radio_btn18" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn18" >
                                                      Non standard
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn18" name="letter_of_introduction_radio_btn18" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn18" >
                                                      Standard
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:'200px'}}/>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                </div>

                                  <br/>
                                <div>Additional notes on buildings that may affect cover/advice to the client: </div>
                                <div className="col-2">
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=" Click here to enter text"  aria-describedby="" style={{width:'1000px'}}/>
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
                                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="house number and street name, Suburb, Town"  aria-describedby="" style={{height:"100px"}}/>
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
                                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby=""/>
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
                                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn19" name="letter_of_introduction_radio_btn19" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn19" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn19" name="letter_of_introduction_radio_btn19" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn19" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn20" name="letter_of_introduction_radio_btn20" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn20" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn20" name="letter_of_introduction_radio_btn20" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn20" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn21" name="letter_of_introduction_radio_btn21" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn21" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn21" name="letter_of_introduction_radio_btn21" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn21" >
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn22" name="letter_of_introduction_radio_btn22" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn22" >
                                                      Standard
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn22" name="letter_of_introduction_radio_btn22" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn22" >
                                                      Non standard
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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn23" name="letter_of_introduction_radio_btn23" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn23" >
                                                      Non Standard
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn23" name="letter_of_introduction_radio_btn23" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn23" >
                                                      Standard
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                              </div>    
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <hr/>

                                  <br/>
                                    <div>Additional notes on buildings that may affect cover/advice to the client: </div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{width:"1000px"}} />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="id_number" className="col-form-label"><b>Registered owner:</b></label>
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
                                                  <label htmlFor="id_number" className="col-form-label"><b>Usage:</b></label>
                                              </div>
                                              <div className="col-6">
                                                  <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Select the type of overnight parking."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label htmlFor="id_number" className="col-form-label"><b>R:</b></label>
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
                                                  <label htmlFor="id_number" className="col-form-label"><b>Type of cover required</b></label>
                                              </div>
                                              <div className="col-6">
                                                  <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="Select the type of overnight parking."  aria-describedby="" />
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
                                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                    Immobilizer  
                                                    </label>
                                                </div>
                                              </td> 
                                                
                                              <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                                                <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                                                  {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> */}
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                    {/* Tracking device   */}
                                                    </label>
                                                </div>
                                              </td> 
                                                
                                              <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                                                <div className="form-check">
                                                  {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> */}
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
                                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                    Tracking device  
                                                    </label>
                                                </div>
                                              </td> 
                                                
                                              <td scope="col" style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="left"> 
                                                <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-6">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter date."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>License code:</b></label>
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
                                                  <label className="col-form-label"><b>Sum insured:</b></label>
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
                                                  <label className="col-form-label"><b>No claims bonus:</b></label>
                                              </div>
                                              <div className="col-6">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-6">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                          <div className="row col-3 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn21" name="letter_of_introduction_radio_btn21" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn21" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn21" name="letter_of_introduction_radio_btn21" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn21" >
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
                                    <div className="col-6">
                                      <div className="row">
                                          <div className="row col-3 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-3">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn25" >
                                                      Air conditioning
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn25" >
                                                      Mag wheels
                                                  </label>
                                              </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <br/>

                                    <div className="row g-2 align-items-center">
                              <div className="col-2">
                                      <label htmlFor="client_name" className="col-form-label" title="If no, motivate"></label>
                                  </div>
                                    <div className="col-6">
                                      <div className="row">
                                          <div className="row col-3 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn26" >
                                                      Canopy
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn26" >
                                                      Electric windows
                                                  </label>
                                              </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <br/>

                                    <div className="row g-2 align-items-center">
                              <div className="col-2">
                                      <label htmlFor="client_name" className="col-form-label" title="If no, motivate"></label>
                                  </div>
                                    <div className="col-6">
                                      <div className="row">
                                          <div className="row col-3 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn27" >
                                                      Leather seats
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn27" >
                                                      Tow bar
                                                  </label>
                                              </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>

                                    <br/>
                                    <div className="row g-2 align-items-center">
                              <div className="col-2">
                                      <label htmlFor="client_name" className="col-form-label" title="If no, motivate"></label>
                                  </div>
                                    <div className="col-6">
                                      <div className="row">
                                          <div className="row col-3 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn28" >
                                                      Roof carrier
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn28" >
                                                      Sunroof
                                                  </label>
                                              </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>

                                    <br/>
                                    <div className="row g-2 align-items-center">
                              <div className="col-2">
                                      <label htmlFor="client_name" className="col-form-label" title="If no, motivate"></label>
                                  </div>
                                    <div className="col-6">
                                      <div className="row">
                                          <div className="row col-3 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn29" >
                                                      Power steering
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn29" >
                                                      Sound
                                                  </label>
                                              </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>

                                    <br/>
                                    <div className="row g-2 align-items-center">
                              <div className="col-2">
                                      <label htmlFor="client_name" className="col-form-label" title="If no, motivate"></label>
                                  </div>
                                    <div className="col-6">
                                      <div className="row">
                                          <div className="row col-3 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn30" >
                                                      Car keys
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn30" >
                                                      Tools,spare parts
                                                  </label>
                                              </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>


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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Select the class of use."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Select the type of overnight parking."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other type of overnight parking"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Select the type of cover."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Select the relevant regular driver description ."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other regular driver."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap to enter date."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>License code:</b></label>
                                              </div>
                                              <div className="col-8">
                                                   <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" /> 
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>Sum insured:</b></label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>
                                      

                                    </div>
                                 </div>
                                  
                                 <div>Additional notes on Mororcycle that may affect cover/advice to the client:</div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>Type:</b></label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Select the type of overnight parking."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>Sum insured:</b></label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                    </div>
                                  </div>
                                    
                                    <br/>
                                    <div>Additional notes on trailer that may affect cover/advice to the client:</div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />

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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>Type:</b></label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>Craft sum insured</b></label>
                                              </div>
                                              <div className="col-8">
                                                   <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="     R 0.00"  aria-describedby="" /> 
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />
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
                                                   <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" />  
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
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" /> */}
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other type of overnight parking."  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>Specified accessories:</b></label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"><b>Output:</b></label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label"></label>
                                              </div>
                                              <div className="col-8">
                                                  {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" /> */}
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" />

                                              </div>
                                          </div>
                                      </div>

                                    </div>
                                  </div>

<br/>
                                  <div>Additional notes on motorcycle that may affect cover/advice to the client:</div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=" Click here to enter text"  aria-describedby="" />

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
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn30" name="letter_of_introduction_radio_btn30" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn30" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn30" name="letter_of_introduction_radio_btn30" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn30" >
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                              </div>
                                              
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <hr/>

                                  <br/>
                                    <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} />


                                    <br/>
                                    <h6 align="left" style={{ color: "#14848A"}}><b>LEGAL ACCESS</b></h6>
                                  
                                 
                                 <div className="row g-2 align-items-center">
                              <div className="col-3">
                                      <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Indemnity limit: R10 million or R 20 million	</label>
                                  </div>
                                    <div className="col-6">
                                      <div className="row">
                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input"  type="radio" value="0" id="letter_of_introduction_radio_btn31" name="letter_of_introduction_radio_btn31" />
                                              </div>
                                              <div className="col-2">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn31" >
                                                      Yes
                                                  </label>
                                              </div>
                                          </div>

                                          <div className="row col-2 align-items-center">
                                              <div className="col-2">
                                                  <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn31" name="letter_of_introduction_radio_btn31" />
                                              </div>
                                              <div className="col-4">
                                                  <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn31" >
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                              </div>
                                              
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <hr/>

                                  <br/>
                                    <div>Additional notes on personal legal liability that may affect cover/advice to the client:</div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

                                    <hr/>
                                    <div>Recommended product:</div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

                                    <hr/>
                                    <div>Reasons why the recommended product is considered the most suitable for the needs of the client:</div>
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="    Click here to enter text"  aria-describedby="" style={{height:"80px"}} />

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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label">Code:</label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
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
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Sign here"  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-6" style={{paddingBottom: "0.5%"}}>
                                          <div className="row g-3 align-items-center">
                                              <div className="col-4">
                                                  <label className="col-form-label">Date(dd/mm/yyyy)</label>
                                              </div>
                                              <div className="col-8">
                                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                                              </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>

<hr/>






                        
                                   






                                    



                                    


        </>
    )
}

export default Short_term_Personal