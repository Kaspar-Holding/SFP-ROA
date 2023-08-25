import React, {useState} from 'react';
// import './Invest.css';
 function  Short_term_Commercial()
 {
    const [letterOfIntroduction, setletterOfIntroduction] = useState(true)
    const [letterOfIntroductionVisibility, setletterOfIntroductionVisibility] = useState(false)
    const [letterOfIntroductionReason, setletterOfIntroductionReason] = useState("")
    const [Fica, setFica] = useState(true)
    const [FicaReason, setFicaReason] = useState("")
    const [FicaVisibility, setFicaVisibility] = useState(false)

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
    return(
        <>
        <br/>
        <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SHORT-TERM INSURANCE: COMMERCIAL</b></div>
       <hr/>
                {/* <form onSubmit={_btn} method="get"> */}
                  <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label className="col-form-label">Quotation Number:</label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="id_number" className="col-form-label">Underwritten by:</label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="id_number" name="id_number" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="id_number" className="col-form-label">Branch Number:</label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true"  id="id_number" name="id_number" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="id_number" className="col-form-label">Renewal Date: (If any):</label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true"  id="id_number" name="id_number" className="form-control" placeholder="Click or tap here to enter text." aria-describedby="" />
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
                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div> */}
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label"><i></i></label>
                                  </div>
                                  {/* <div className="col-6">
                                  <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" />
                                  </div> */}
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label">Payment method: Annual</label>
                                  </div>
                                 <div className="col-6">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
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
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike1"/>
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
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike1"/>
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
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike3"/>
                                        <label for="vehicle3">Yes</label><br/>
                                  </div> 
                              </div>
                          </div>


                        </div>
                    </div>
                {/* </form> */}
        <hr/>

        <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary of the information and material on which the advisory process you recently undertook with your advisor was based. Contact your advisor if you have any questions concerning the content. You are entitled to a copy of this document for your records. You have given consent to Succession Financial Planning (SFP) to process your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP to retain your personal information to recommend the best financial solutions for your financial needs and maintenance. You have given consent to be contacted from time to time for maintenance, news, correspondence and storage of your personal information relating to your financial matters.Terms and Conditions on <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a> </p>
        <hr/>
        <div className="text-start "style={{ color: "#14848A" ,fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>A. DETAILS OF CLIENT </b></div>
        <hr/>
                    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">Full name of business/Applicant/Owner:</label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>
                          

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                         
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
                                  </div>
                              </div>
                          </div>
                        <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label">email-address:</label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <label className="col-form-label"></label>
                                  </div>
                                  <div className="col-6">
                                    {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} /> */}
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
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text."  aria-describedby="" style={{width:"800px"}} />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>

                    <hr/>
                    <br/>
                    <p style={{color:"grey"}}>It is important for the purpose of disclosure that the insurer is aware of the full business description which encompasses all the activities that the business is involved. This impacts the validity of the cover and potential future claims, and you are requested to inform us whenever there may be change in the business description.</p>

                    <div className="text-start "style={{ color: "#14848A" ,fontSize:'15px'}} ><b>Client Preference:</b></div>

                    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                      <div className="row">

                        <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label className="col-form-label"></label>
                                  </div>
                                 <div className="col-6">
                                    {/* <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike3"/>
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
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike3"/>
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
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike3"/>
                                                <label for="vehicle3">Yes</label><br/>
                                        </div> 
                                    </div>

                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label className="col-form-label">Most comprehensive cover (Possible higher premium)</label>
                                        </div>
                                        <div className="col-4">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike3"/>
                                                <label for="vehicle3">Yes</label><br/>
                                        </div> 
                                    </div>
                                </div>
                                  <div className="col-4">
                                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"600px",height:"100px"}} />
                                  </div>
                              </div>
                          </div>

                        </div>
                    </div>

                    <br/>
                    <div className="text-start "style={{ color: "#14848A" ,fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>B. GENERAL</b></div>
                    <hr/>

                            <div className="row g-3 align-items-center">
                                <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">1.Has any short-term insurer ever turned down your application for insurance, cancelled any policy (or part thereof) imposed any special conditions, refused to renew any policy, or part thereof, or refused to continue any part of your insurance?</label>
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
                                                          <p>If 'Yes', provide details:</p>
                                                      </div>
                                                  </> :
                                                  null
                                              }
                                              <textarea  id="letter_of_introduction" name="letter_of_introduction" onChange={(e) => {setletterOfIntroductionReason(e.target.value)}} onFocus={letter_of_introduction_onFocus} onBlur={letter_of_introduction_onBlur} className="form-control" placeholder="If 'Yes', provide details:" aria-describedby="" ></textarea>
                                          </div>
                                          <hr/>
                                          
                                             
                                      </>
                                  }
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
                            <div className="text-start "style={{ color: "#14848A" ,fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>C. REPLACEMENT OF INSURANCE</b></div>
                            <hr/>

                            <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                  <label htmlFor="client_name" className="col-form-label" title="If no, motivate">Does the advice given to the client include replacement of an existing financial product?	</label>
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
                                                      {/* <div id="provided_identity_instructions" className="hidden_class">
                                                           <p>What is the purpose of this replacement?</p> 
                                                      </div> */}
                                                      
                                                      
                                                  </> : 
                                                  null
                                              }

                                            <p>If yes,answer the following:</p>
                                              <p>What is the purpose of this replacement?</p>
                                              <textarea  id="provided_identity_instructions" name="provided_identity_instructions" onChange={(e) => {setFicaReason(e.target.value)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
                                            <hr/>
                                              <p>Reasons why replacement is considered more suitable than retaining or modifying the terminated product:</p>
                                              <textarea  id="provided_identity_instructions" name="provided_identity_instructions" onChange={(e) => {setFicaReason(e.target.value)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
                                              <hr/>
                                              <p>Suppliers of the product(s) to be replaced:</p>
                                              <textarea  id="provided_identity_instructions" name="provided_identity_instructions" onChange={(e) => {setFicaReason(e.target.value)}} onFocus={fica_onFocus} onBlur={fica_onBlur} className="form-control" placeholder="Click or tap here to enter text" aria-describedby="" ></textarea>
          
                                          </div>
                                      </>
                                  }
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
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
                                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>

                                            <div className="col-4">
                                              <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=""  aria-describedby="" style={{width:"200px"}} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                              <br/>
                              <hr/>
                            <h6 align="center" style={{ color: "#14848A"}}>PRODUCT COMPARISON AND REPLACEMENT</h6>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Fire</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Buildings combined</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Office contents</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Business Interruption</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Machinery Breakdown</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Machinery breakdown:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loss of profits</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Deterioration of stock</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Accounts receiveable</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Theft</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Money</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Glass</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Fidelity gurantee</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Goods in transit</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Business all risks</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Accidental damage</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Public liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Top up personal Liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Commercial umberella &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Products gurantee</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Warehousemen's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Top up personal Liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Employer Liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Cyber risks</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Directors and officers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Employment practices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product inefficacy</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product gurantee</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Warehousemen's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Employer liability</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Stated benefits</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Personal and group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; accident</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Group personal accident</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Motor</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor car hire extension</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor traders: internal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risk</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor traders: internal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risk</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Electronic equipment</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>House owner</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>House holders</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Professional indenmity</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Marine/hull</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>contractors all risks:construction and engineering</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Body corporate</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Aviation</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Travel insurance</td>
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
                                          
                                          <td className="col-2" style={{width:"200px"}}>Legal fees</td>
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

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Insurable interest:</b></div>
                              <p>The Insured must have an insurable interest in any item insured under this policy at the date of the event giving rise to a claim. If the Insured's insurable interest in an insured item is an interest other than as an owner or a good-faith possessor of the goods (in terms of a credit agreement or else) who bears the risk of loss, the Insured must advise the Company of the nature and extent of the insurable interest before the cover commences. The cover for any such item will start only when the Company has given written confirmation and agreed to insure the property. Should the nature or extent of the insurable interest in any item insured under this policy change, the Insured must notify the Company immediately in writing of such change. Failure to do so may entitle the Company to reject the claim if the Insured's insurable interest was not agreed to by the Company.</p>
                              {/* <br/> */}

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Average:</b></div>
                              <p>Policies of insurance covering material property are subject to average. This means that you could recover the full amount of an insured loss only if your sum insured represents the full value of the property covered. If the amounts insured are less than the full value at the time of the loss, you can recover only a proportionate amount of the loss. If there are several items of property insured, the average will be applied separately to each item. Consequently, sums insured should always be maintained at adequate level.</p>
                              {/* <br/> */}

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Reinstatement value conditions:</b></div>
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

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Value-added tax:</b></div>
                              <p>All sums insured/limits of indemnity must be inclusive of VAT and in some instances, e.g. personal accident/stated benefits cover, where indemnity payments received by 'vendor insured's' are vatable, the sums insured/limits of indemnity would need to be increased by a further 15% so as not to reduce the net payment when a claim occurs.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Premium payment:</b></div>
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

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Adjustment Premium:</b></div>
                              <p>If the premium for any section of this policy has been calculated on any estimated figures, the Insured shall, after the expiry of each period of insurance, furnish the Company with such particulars and information as the Company may require for the purpose of recalculation of the premium for such period. Any differences shall be paid by or to the Insured as the case may be.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Duty of disclosure of material facts:</b></div>
                              <p>Because you have a far better knowledge of your risk than your insurers, please advise us prior to inception of cover or renewal or when changes are made to your risk during the year, of information which may affect the insurer's appreciation of the risk. Examples could be particularly hazardous aspects of your business (such as processes undertaken, new products, signing of leases or contracts which may impose additional liabilities on you, situation of premises, threats from other parties, warehousing of customers' properties, hiring of plant and equipment).</p>
                              <p>You do not have to disclose things which diminish the risk of insurers or are common knowledge or knowledge of which is waived by the insurer. Where, however, you are in any doubt, it is better to inform insurers as many claims have been repudiated on grounds of non-disclosure.</p>
                              <p>When a policy is placed with an Insurer you need to disclose all material facts, which could affect your Insurer's appreciation of the risk of loss, damage or liability, for which they will be providing you with insurance cover. </p>
                              <p>Once cover has been placed, the need to continue disclosing material facts not previously disclosed to your current insurers continues. This applies to all your insurance covers not just those insuring your assets, and disclosure should be made via your broker as soon as the facts come to your attention. </p>
                              <p>In addition, you need to immediately advise your broker of any changes or planned changes in your assets or business activities.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Standard construction:</b></div>
                              <p>The building and outbuildings are constructed with brick walls, stone or concrete and are roofed with slate, tiles, concrete, asbestos, or metal. We must be advised if any structure on your premises is not constructed in accordance with these requirements.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Unoccupied buildings/premises:</b></div>
                              <p>If any building and/or premise shall become unoccupied for 30 (thirty) consecutive days, the insurance cover is suspended as regards the property affected unless the Insured, before the occurrence of any damage, obtains the written agreement of the insurer to continue with the cover.</p>
                              <p>During the period of the initial unoccupancy of 30 (thirty) consecutive days, the Insured shall become a co-insurer with the insurer and shall bear a proportion of any damage equal to 20% (twenty per cent) of the claim before deduction of any first amount payable.</p>
                              <p>Theft (or any attempt thereat) of contents, electronic and all other equipment, plant, machinery, landlord's fixtures, and fittings, etc. not accompanied by forcible and violent entry into or exit from such building, is excluded unless specifically insured. An alarm warranty is also applicable for all sections which provide theft cover to the premises and requires that a linked alarm be activated and in working order whenever the premises is unoccupied. The alarm must be linked to a 24-hour manned control room and armed reaction and be activated whenever the premises is unoccupied. If either of these conditions are not met, there will be no cover. We further recommend that you test the alarm at the intervals recommended by the service provider to ensure that the alarm is operational and in working order.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Power surge:</b></div>
                              <p>Power surge cover is generally limited in terms of the policy, and we encourage you to check each section of the policy to determine the adequacy of the limit of cover selected. Insurers further require that there is SABS-approved power surge arrestors installed at the premises for the cover to be valid, or else ensuring that the cover is not limited, or additional excesses being applied. We recommend that such surge arrestors be installed on the mains of the premises by a professional service provider, to ensure that all equipment is adequate protected.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Retaining and boundary walls:</b></div>
                              <p>Simplistically, a boundary wall serves as a dividing structure between two pieces of land and a retaining wall serves to split levels of ground to prevent the higher level from subsiding onto the lower level. </p>
                              <p>In consequence, a retaining wall carries a much higher risk than a boundary wall.</p>
                              <p>The policy excludes damage to retaining walls caused by storm, wind, water, hail, or snow, unless you can provide insurers with written proof confirming the retaining walls were designed and constructed in accordance with a professional structural engineer design specification. </p>
                              <p>An Insurer will require the submission of a stability report from a suitably qualified engineer prior to going on risk at inception or renewal of a policy, to substantiate the current stability of the structure. Once this report has been received and cover is approved, the Insurer will list the retaining wall separately on the policy schedule and likely charge an additional premium on the (new replacement) value of the retaining wall. </p>
                              <p>It is imperative that property owners be aware of all retaining and boundary walls on their property and monitor, on an ongoing basis, the changes to and around all retaining and boundary walls, especially where the other side of the wall is outside of their property. </p>
                              <p>Pleading ignorance when your boundary wall becomes a retaining wall by the action or inaction of a third party and then collapses is unfortunately of no help in an insurance claim. When in doubt, always ask your broker for assistance.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Claim Notification:</b></div>
                              <p>On the happening of an event that may result in a claim under this policy, notify us as soon as possible and provide in writing details of the event including all substantiating documentation that your insurers may require. The police must be notified immediately after the event. Insurers require that all claims be reported no later than 30 days after the insured event or there may be no cover.</p>
                              
                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Prevention of loss:</b></div>
                              <p>You are required to take all reasonable steps and precautions to prevent accidents or losses, including, but not limited to, compliance and adherence to laws and regulations which are material to the risk. It is warranted that all laws, regulations, by-laws, and rules which apply to the business or any other matter for which cover is provided in terms of the policy shall be always adhered to. </p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Remote jamming/theft of items from a vehicle without forcible and violent entry or exit:</b></div>
                              <p>If the Insured can demonstrate through video surveillance footage (or any other conclusive proof) that an attempt was made to lock the vehicle using the vehicle remote but that the locking mechanism was blocked by thieves using an electronic device, such evidence shall be deemed to satisfy the forcible and violent entry or exit requirement for any loss out of the cab or boot of the vehicle</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Burglar alarm warranty (where applicable):</b></div>
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

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Excess/first amount payable/deductible:</b></div>
                              <p>Your policy is subject to several different excesses/first amounts payable for each section of the policy where cover has been selected – these are detailed per section of the policy or are listed under the Excess section. Refer to the various sections for applicable excesses/first amounts payable in the event of a claim.</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Tracking device requirements:</b></div>
                              <p>Your policy may contain specific requirements regarding the compulsory fitment, maintenance and testing of tracking devices, as well as the type of tracking device specified for the type/category of vehicle (i.e. constant monitoring/early warning). We strongly encourage you to familiarise yourself with these requirements as theft/hijacking cover is often subject to such tracking devices being installed, maintained, and tested. </p>
                              <p>Where tracking devices are not a requirement, and you have elected to fit such a device of your own accord, inform us as you may be entitled to a reduction in premium and/or your theft excess may be waived (subject to policy terms and conditions).</p>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION A:FIRE</b></div>
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="                    R .00"  aria-describedby="" style={{width:"200px"}} />
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
                                      <div className="col-3">
                                        <div><b>Yes/No</b></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Earthquake</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes1" name="f1" value="yes1"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no1" name="f1" value="no1"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Malicious damage</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes2" name="f2" value="yes2"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no2" name="f2" value="no2"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Special Perils</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes3" name="f3" value="yes3"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no3" name="f3" value="no3"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Leakage-full value</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes4" name="f4" value="yes4"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no4" name="f4" value="no4"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Leakage-first loss limit</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes5" name="f5" value="yes5"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no5" name="f5" value="no5"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Subsidence and landslip(limited)</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes6" name="f6" value="yes6"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no6" name="f6" value="no6"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Subsidence and landslip(comprehensive)</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes7" name="f7" value="yes7"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no7" name="f7" value="no7"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Riot and strike(except RSA)</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes8" name="f8" value="yes8"/>&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no8" name="f8" value="no8"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Stock declaration conditions</label>
                                      </div>
                                      <div className="col-3">
                                        <input type="radio" id="yes9" name="f9" value="yes9"/>&nbsp;&nbsp;&nbsp;
                                        <label for="yes9">Monthly</label>
                                        <input type="radio" id="no9" name="f9" value="no9"/>
                                        <label for="no9">Quaterly</label>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                </div>
                              </div>

                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 2:BUILDINGS COMBINED</b></div>
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                      </div>
                                    </div>
                                  </div>
                                    <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Construction standard: </label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html" name="fav_language" value="HTML"/>
                                        <label for="html">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css" name="fav_language" value="CSS"/>
                                        <label for="css">No</label>
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter the text"  aria-describedby="" style={{width:"200px"}} />
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
                                      <div className="col-3">
                                        <div><b>Yes/No</b></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Riot and strike (except RSA)</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html1" name="fav_language1" value="HTML1"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css1" name="fav_language1" value="CSS1"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Sum ensured geysers</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html2" name="fav_language2" value="HTML2"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css2" name="fav_language2" value="CSS2"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Subsidence and landslip(comprehensive)</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html3" name="fav_language3" value="HTML3"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css3" name="fav_language3" value="CSS3"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Riot and strike (except RSA)</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html4" name="fav_language4" value="HTML4"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css4" name="fav_language4" value="CSS4"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Prevention of access</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html5" name="fav_language5" value="HTML5"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css5" name="fav_language5" value="CSS5"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Inflation/Escalation clause</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html6" name="fav_language6" value="HTML6"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css6" name="fav_language6" value="CSS6"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                </div>
                              </div>

                              <br/>
                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 3:OFFICE CONTENTS</b></div>
                              <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                                <div className="row">

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Premises Number:</label>
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Sum insured:</label>
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="      R 0.00"  aria-describedby="" style={{width:"200px"}} />
                                      </div>
                                    </div>
                                  </div>
                                    <hr/>

                                  <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Construction standard: </label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html11" name="fav_language11" value="HTML11"/>
                                        <label for="html">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css11" name="fav_language11" value="CSS11"/>
                                        <label for="css">No</label>
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter the text"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
                                        {/* <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} /> */}
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />

                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                </div>
                              </div>

                              <br/>
                              <div className="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 4:BUSINESS INTERRUPTION</b></div>

                              <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                                <div className="row">
                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-6">
                                        <label className="col-form-label">Premises Number:</label>
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
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

                              <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                <div className="row g-3 align-items-center">
                                <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <div><b>Type</b></div>
                                      </div>
                                      <div className="col-3">
                                        <div><b>Included</b></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <div></div>
                                      </div>
                                      <div className="col-3">
                                        <div><b>Yes/No</b></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Gross Profit</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html1" name="fav_language1" value="HTML1"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css1" name="fav_language1" value="CSS1"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Gross Rentals</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html2" name="fav_language2" value="HTML2"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css2" name="fav_language2" value="CSS2"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Revenue</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html3" name="fav_language3" value="HTML3"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css3" name="fav_language3" value="CSS3"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Additional increase in cost of working</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html4" name="fav_language4" value="HTML4"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css4" name="fav_language4" value="CSS4"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Wages</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html5" name="fav_language5" value="HTML5"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css5" name="fav_language5" value="CSS5"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Fines and penalties</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html6" name="fav_language6" value="HTML6"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css6" name="fav_language6" value="CSS6"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Standing charges </label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html7" name="fav_language7" value="HTML7"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css7" name="fav_language7" value="CSS7"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Extensions</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html8" name="fav_language8" value="HTML8"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css8" name="fav_language8" value="CSS8"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Sum ensured</label>
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="        R 0.00"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Wages</label>
                                      </div>
                                      <div className="col-3">
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>

                                  <div className="col-10" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                      <div className="col-8">
                                        <label className="col-form-label">Specified suppliers</label>
                                      </div>
                                      <div className="col-3">
                                      <input type="radio" id="html11" name="fav_language11" value="HTML11"/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="radio" id="css11" name="fav_language11" value="CSS11"/>
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>
                                  
                                </div>
                              </div>

        </>       

    )
 }

 export default Short_term_Commercial