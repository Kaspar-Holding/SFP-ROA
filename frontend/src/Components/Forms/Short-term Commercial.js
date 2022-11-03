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
        <div class="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SHORT-TERM INSURANCE: COMMERCIAL</b></div>
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
        <div class="text-start "style={{ color: "#14848A" ,fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>A. DETAILS OF CLIENT </b></div>
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

                    <div class="text-start "style={{ color: "#14848A" ,fontSize:'15px'}} ><b>Client Preference:</b></div>

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
                    <div class="text-start "style={{ color: "#14848A" ,fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>B. GENERAL</b></div>
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
                            <div class="text-start "style={{ color: "#14848A" ,fontSize:'20px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>C. REPLACEMENT OF INSURANCE</b></div>
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
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Buildings combined</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Office contents</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Business Interruption</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Machinery Breakdown</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Machinery breakdown:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loss of profits</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp; Deterioration of stock</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Accounts receiveable</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Theft</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Money</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Glass</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Fidelity gurantee</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Goods in transit</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Business all risks</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Accidental damage</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Public liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Top up personal Liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Commercial umberella &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Products gurantee</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Cyber Risks</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Director and officer's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Employer practices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product inefficacy</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product guarantee</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      {/* <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Employment practices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr> */}


                                      {/* <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product inefficacy</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr> */}


                                      {/* <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Product gurantee</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr> */}


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Warehousemen's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Employer liability</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Stated benefits</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Personal and group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; accident</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Group personal accident</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Motor</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor car hire extension</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor traders: internal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risk</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>.</b>&nbsp;Motor traders: internal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risk</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Electronic equipment</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>
                                     

                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>House owner</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>House holders</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Professional indenmity</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Marine/hull</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>contractors all risks:construction and engineering</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Body corporate</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Aviation</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Travel insurance</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Sasria</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>


                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Legal fees</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" align="centre"/>
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>
                                        
                                      </tr>
                                        
                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Fees and charges</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                      </tr>  

                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Commissions</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                      </tr> 

                                      <tr class="d-flex">
                                          
                                          <td class="col-2" style={{width:"200px"}}>Total premium</td>
                                          <td class="col-2" style={{width:"130px"}}>
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} />
                                          </td>

                                      </tr>   
                                    
                                  </tbody>
                              </table>
                              </div>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Insurable interest:</b></div>
                              <p>The Insured must have an insurable interest in any item insured under this policy at the date of the event giving rise to a claim. If the Insured's insurable interest in an insured item is an interest other than as an owner or a good-faith possessor of the goods (in terms of a credit agreement or else) who bears the risk of loss, the Insured must advise the Company of the nature and extent of the insurable interest before the cover commences. The cover for any such item will start only when the Company has given written confirmation and agreed to insure the property. Should the nature or extent of the insurable interest in any item insured under this policy change, the Insured must notify the Company immediately in writing of such change. Failure to do so may entitle the Company to reject the claim if the Insured's insurable interest was not agreed to by the Company.</p>
                              {/* <br/> */}

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Average:</b></div>
                              <p>Policies of insurance covering material property are subject to average. This means that you could recover the full amount of an insured loss only if your sum insured represents the full value of the property covered. If the amounts insured are less than the full value at the time of the loss, you can recover only a proportionate amount of the loss. If there are several items of property insured, the average will be applied separately to each item. Consequently, sums insured should always be maintained at adequate level.</p>
                              {/* <br/> */}

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Reinstatement value conditions:</b></div>
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

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Value-added tax:</b></div>
                              <p>All sums insured/limits of indemnity must be inclusive of VAT and in some instances, e.g. personal accident/stated benefits cover, where indemnity payments received by 'vendor insured's' are vatable, the sums insured/limits of indemnity would need to be increased by a further 15% so as not to reduce the net payment when a claim occurs.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Premium payment:</b></div>
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

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Adjustment Premium:</b></div>
                              <p>If the premium for any section of this policy has been calculated on any estimated figures, the Insured shall, after the expiry of each period of insurance, furnish the Company with such particulars and information as the Company may require for the purpose of recalculation of the premium for such period. Any differences shall be paid by or to the Insured as the case may be.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Duty of disclosure of material facts:</b></div>
                              <p>Because you have a far better knowledge of your risk than your insurers, please advise us prior to inception of cover or renewal or when changes are made to your risk during the year, of information which may affect the insurer's appreciation of the risk. Examples could be particularly hazardous aspects of your business (such as processes undertaken, new products, signing of leases or contracts which may impose additional liabilities on you, situation of premises, threats from other parties, warehousing of customers' properties, hiring of plant and equipment).</p>
                              <p>You do not have to disclose things which diminish the risk of insurers or are common knowledge or knowledge of which is waived by the insurer. Where, however, you are in any doubt, it is better to inform insurers as many claims have been repudiated on grounds of non-disclosure.</p>
                              <p>When a policy is placed with an Insurer you need to disclose all material facts, which could affect your Insurer's appreciation of the risk of loss, damage or liability, for which they will be providing you with insurance cover. </p>
                              <p>Once cover has been placed, the need to continue disclosing material facts not previously disclosed to your current insurers continues. This applies to all your insurance covers not just those insuring your assets, and disclosure should be made via your broker as soon as the facts come to your attention. </p>
                              <p>In addition, you need to immediately advise your broker of any changes or planned changes in your assets or business activities.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Standard construction:</b></div>
                              <p>The building and outbuildings are constructed with brick walls, stone or concrete and are roofed with slate, tiles, concrete, asbestos, or metal. We must be advised if any structure on your premises is not constructed in accordance with these requirements.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Unoccupied buildings/premises:</b></div>
                              <p>If any building and/or premise shall become unoccupied for 30 (thirty) consecutive days, the insurance cover is suspended as regards the property affected unless the Insured, before the occurrence of any damage, obtains the written agreement of the insurer to continue with the cover.</p>
                              <p>During the period of the initial unoccupancy of 30 (thirty) consecutive days, the Insured shall become a co-insurer with the insurer and shall bear a proportion of any damage equal to 20% (twenty per cent) of the claim before deduction of any first amount payable.</p>
                              <p>Theft (or any attempt thereat) of contents, electronic and all other equipment, plant, machinery, landlord's fixtures, and fittings, etc. not accompanied by forcible and violent entry into or exit from such building, is excluded unless specifically insured. An alarm warranty is also applicable for all sections which provide theft cover to the premises and requires that a linked alarm be activated and in working order whenever the premises is unoccupied. The alarm must be linked to a 24-hour manned control room and armed reaction and be activated whenever the premises is unoccupied. If either of these conditions are not met, there will be no cover. We further recommend that you test the alarm at the intervals recommended by the service provider to ensure that the alarm is operational and in working order.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Power surge:</b></div>
                              <p>Power surge cover is generally limited in terms of the policy, and we encourage you to check each section of the policy to determine the adequacy of the limit of cover selected. Insurers further require that there is SABS-approved power surge arrestors installed at the premises for the cover to be valid, or else ensuring that the cover is not limited, or additional excesses being applied. We recommend that such surge arrestors be installed on the mains of the premises by a professional service provider, to ensure that all equipment is adequate protected.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Retaining and boundary walls:</b></div>
                              <p>Simplistically, a boundary wall serves as a dividing structure between two pieces of land and a retaining wall serves to split levels of ground to prevent the higher level from subsiding onto the lower level. </p>
                              <p>In consequence, a retaining wall carries a much higher risk than a boundary wall.</p>
                              <p>The policy excludes damage to retaining walls caused by storm, wind, water, hail, or snow, unless you can provide insurers with written proof confirming the retaining walls were designed and constructed in accordance with a professional structural engineer design specification. </p>
                              <p>An Insurer will require the submission of a stability report from a suitably qualified engineer prior to going on risk at inception or renewal of a policy, to substantiate the current stability of the structure. Once this report has been received and cover is approved, the Insurer will list the retaining wall separately on the policy schedule and likely charge an additional premium on the (new replacement) value of the retaining wall. </p>
                              <p>It is imperative that property owners be aware of all retaining and boundary walls on their property and monitor, on an ongoing basis, the changes to and around all retaining and boundary walls, especially where the other side of the wall is outside of their property. </p>
                              <p>Pleading ignorance when your boundary wall becomes a retaining wall by the action or inaction of a third party and then collapses is unfortunately of no help in an insurance claim. When in doubt, always ask your broker for assistance.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Claim Notification:</b></div>
                              <p>On the happening of an event that may result in a claim under this policy, notify us as soon as possible and provide in writing details of the event including all substantiating documentation that your insurers may require. The police must be notified immediately after the event. Insurers require that all claims be reported no later than 30 days after the insured event or there may be no cover.</p>
                              
                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Prevention of loss:</b></div>
                              <p>You are required to take all reasonable steps and precautions to prevent accidents or losses, including, but not limited to, compliance and adherence to laws and regulations which are material to the risk. It is warranted that all laws, regulations, by-laws, and rules which apply to the business or any other matter for which cover is provided in terms of the policy shall be always adhered to. </p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Remote jamming/theft of items from a vehicle without forcible and violent entry or exit:</b></div>
                              <p>If the Insured can demonstrate through video surveillance footage (or any other conclusive proof) that an attempt was made to lock the vehicle using the vehicle remote but that the locking mechanism was blocked by thieves using an electronic device, such evidence shall be deemed to satisfy the forcible and violent entry or exit requirement for any loss out of the cab or boot of the vehicle</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Burglar alarm warranty (where applicable):</b></div>
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

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Excess/first amount payable/deductible:</b></div>
                              <p>Your policy is subject to several different excesses/first amounts payable for each section of the policy where cover has been selected – these are detailed per section of the policy or are listed under the Excess section. Refer to the various sections for applicable excesses/first amounts payable in the event of a claim.</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Tracking device requirements:</b></div>
                              <p>Your policy may contain specific requirements regarding the compulsory fitment, maintenance and testing of tracking devices, as well as the type of tracking device specified for the type/category of vehicle (i.e. constant monitoring/early warning). We strongly encourage you to familiarise yourself with these requirements as theft/hijacking cover is often subject to such tracking devices being installed, maintained, and tested. </p>
                              <p>Where tracking devices are not a requirement, and you have elected to fit such a device of your own accord, inform us as you may be entitled to a reduction in premium and/or your theft excess may be waived (subject to policy terms and conditions).</p>

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 1:FIRE</b></div>
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

                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 2:BUILDINGS COMBINED</b></div>
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
                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 3:OFFICE CONTENTS</b></div>
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
                              <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 4:BUSINESS INTERRUPTION</b></div>

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

                              

      <table class="table">
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
        <div className="col-3">
            <input type="radio" id="html1a" name="fav_language1a" value="HTML1a"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1a" name="fav_language1a" value="CSS1a"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Gross rentals </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1b" name="fav_language1b" value="HTML1b"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1b" name="fav_language1b" value="CSS1b"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Revenue</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1c" name="fav_language1c" value="HTML1c"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1c" name="fav_language1c" value="CSS1c"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional increase in cost of working </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1d" name="fav_language1d" value="HTML1d"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1d" name="fav_language1d" value="CSS1d"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1e" name="fav_language1e" value="HTML1e"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1e" name="fav_language1e" value="CSS1e"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Fines and penalties </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1f" name="fav_language1f" value="HTML1f"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1f" name="fav_language1f" value="CSS1f"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Standing charges</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1g" name="fav_language1g" value="HTML1g"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1g" name="fav_language1g" value="CSS1g"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extensions</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1h" name="fav_language1h" value="HTML1h"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1h" name="fav_language1h" value="CSS1h"/>
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
          <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
        <div className="col-3">
          <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Specified suppliers</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1i" name="fav_language1i" value="HTML1i"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1i" name="fav_language1i" value="CSS1i"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Unspecified suppliers</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1j" name="fav_language1j" value="HTML1j"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1j" name="fav_language1j" value="CSS1j"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Prevention of access</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1k" name="fav_language1k" value="HTML1k"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1k" name="fav_language1k" value="CSS1k"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Clients</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1l" name="fav_language1l" value="HTML1l"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1l" name="fav_language1l" value="CSS1l"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
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
        <div className="col-3">
            <input type="radio" id="html1m" name="fav_language1m" value="HTML1m"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1m" name="fav_language1m" value="CSS1m"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1n" name="fav_language1n" value="HTML1n"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1n" name="fav_language1n" value="CSS1n"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
        <div className="col-3">
            <input type="radio" id="html1o" name="fav_language1o" value="HTML1o"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1o" name="fav_language1o" value="CSS1o"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1p" name="fav_language1p" value="HTML1p"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1p" name="fav_language1p" value="CSS1p"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Accidental cover</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1q" name="fav_language1q" value="HTML1q"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1q" name="fav_language1q" value="CSS1q"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>
    
    </tbody>
  </table>

    <br/>
    <div><b>Comments</b></div>
    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

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

      <table class="table">
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
        <div className="col-3">
            <input type="radio" id="html1r" name="fav_language1r" value="HTML1r"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1r" name="fav_language1r" value="CSS1r"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Gross rentals </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1s" name="fav_language1s" value="HTML1s"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1s" name="fav_language1s" value="CSS1s"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Revenue</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1t" name="fav_language1t" value="HTML1t"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1t" name="fav_language1t" value="CSS1t"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional increase in cost of working </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1u" name="fav_language1u" value="HTML1u"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1v" name="fav_language1v" value="CSS1v"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1w" name="fav_language1w" value="HTML1w"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1ww" name="fav_language1ww" value="CSS1ww"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Fines and penalties </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1x" name="fav_language1x" value="HTML1x"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="cssy" name="fav_languagey" value="CSS1y"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Standing charges</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1z" name="fav_language1z" value="HTML1z"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1z" name="fav_language1z" value="CSS1z"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extensions</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1aa" name="fav_language1aa" value="HTML1aa"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1bb" name="fav_language1bb" value="CSS1bb"/>
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
          <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wages </td>
      <td>
        <div className="col-3">
          <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Specified suppliers</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1cc" name="fav_language1cc" value="HTML1cc"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1dd" name="fav_language1dd" value="CSS1dd"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Unspecified suppliers</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1ee" name="fav_language1ee" value="HTML1ee"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1ff" name="fav_language1ff" value="CSS1ff"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Prevention of access</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1gg" name="fav_language1gg" value="HTML1gg"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1gg" name="fav_language1gg" value="CSS1gg"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Clients</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1hh" name="fav_language1hh" value="HTML1hh"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1hh" name="fav_language1hh" value="CSS1hh"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td>
        
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premises</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"150px"}} />
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
        <div className="col-3">
            <input type="radio" id="html1ii" name="fav_language1ii" value="HTML1ii"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1ii" name="fav_language1ii" value="CSS1ii"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1jj" name="fav_language1jj" value="HTML1jj"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1jj" name="fav_language1jj" value="CSS1jj"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
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
        <div className="col-3">
            <input type="radio" id="html1kk" name="fav_language1kk" value="HTML1kk"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1ll" name="fav_language1ll" value="CSS1ll"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Extended cover</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1mm" name="fav_language1mm" value="HTML1mm"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1nn" name="fav_language1nn" value="CSS1nn"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Accidental cover</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1oo" name="fav_language1oo" value="HTML1oo"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1pp" name="fav_language1pp" value="CSS1pp"/>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>
    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 5:ACCOUNTS RECEIVABLE</b></div>

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
                <label className="col-form-label">Occupation Description:</label>
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
                <label className="col-form-label">Construction type:</label>
              </div>
              <div className="col-3">
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />

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
        <div className="col-3">
            <input type="radio" id="html1" name="fav_language1" value="HTML1"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1" name="fav_language1" value="CSS1"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Duplicae records </td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1xx" name="fav_language1xx" value="HTML1xx"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1yy" name="fav_language1yy" value="CSS1yy"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Protection</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1zz" name="fav_language1zz" value="HTML1zz"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1aaa" name="fav_language1aaa" value="CSS1aaa"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Transit</td>
      <td>
        <div className="col-3">
            <input type="radio" id="html1bbb" name="fav_language1bbb" value="HTML1bbb"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1bbb" name="fav_language1bbb" value="CSS1bbb"/>
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
        <div className="col-3">
            <input type="radio" id="html1ccc" name="fav_language1ccc" value="HTML1ccc"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" id="css1ccc" name="fav_language1ccc" value="CSS1ccc"/>
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
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"150px"}} />

      </td>
      <td></td>
      <td></td>
    </tr>

    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 6:THEFT</b></div>

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
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=" R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Premium:</label>
              </div>
              <div className="col-3">
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=" R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Specific description of content:</label>
              </div>
              <div className="col-3">
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Total value of contents:</label>
              </div>
              <div className="col-3">
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder=" R 0.00"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Construction type:</label>
              </div>
              <div className="col-3">
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-6">
                  <label className="col-form-label">Protection:</label>
              </div>
              <div className="col-3">
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
          </div>


        </div>
      </div>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 7:MONEY</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
       <div className="row">
          <div className="col-10" style={{paddingBottom: "0.5%"}}>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                  <label className="col-form-label">Premises Number:</label>
              </div>
              <div className="col-3">
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"200px"}} />
              </div>
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
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
        
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Premium:R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Personal Accident</td>
      <td>
        <div className="col-3">
            <input type="radio" id="htmla" name="fav_languagea" value="HTMLa"/>
            <label for="htmla">Yes</label>
              
                <input type="radio" id="cssa" name="fav_languagea" value="CSSa"/>
                <label for="cssa">No</label>
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
      <div className="col-3">
        <input type="radio" id="htmlb" name="fav_languageb" value="HTMLb"/>
        <label for="htmlb">Yes</label>
          
        <input type="radio" id="cssb" name="fav_languageb" value="CSSb"/>
        <label for="cssb">No</label>
        </div>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Ocupation Description:"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Major limit:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Seasonal limit:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      
    </tr>

    {/* <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Season description:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontcolor:"grey"}} align="left">Category description:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
      <input type="radio" id="htmlc" name="fav_languagec" value="HTMLc"/>  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <input type="radio" id="cssc" name="fav_languagec" value="CSSc"/>
        
      </td>
      <td> 
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Collectors </td>
      <td>
      <input type="radio" id="htmld" name="fav_languaged" value="HTMLd"/>  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <input type="radio" id="cssd" name="fav_languaged" value="CSSd"/>
        
      </td>
      <td> 
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Petrol Attendants </td>
      <td>
      <input type="radio" id="htmle" name="fav_languagee" value="HTMLe"/>  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <input type="radio" id="csse" name="fav_languagee" value="CSSe"/>
        
      </td>
      <td> 
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
      <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td></td>
      
    </tr>

    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 8:GLASS</b></div>

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
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premises number </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td> 
        
      </td>
      <td>
      
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured: </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium: </td>
      <td>
      <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
      <input type="radio" id="htmlf" name="fav_languagef" value="HTMLf"/>  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssf" name="fav_languagef" value="CSSf"/>
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Riot and strike </td>
      <td> </td>
        
      <td>
      <input type="radio" id="htmlg" name="fav_languageg" value="HTMLg"/>  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssg" name="fav_languageg" value="CSSg"/>
      </td>
      <td></td>
      
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium</b></td>
      <td>
     
        
      </td>
      <td> 
      <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
      </td>
      <td>
      </td>
      <td></td>
      
    </tr>

    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 9:FIDELITY GURANTEE</b></div>

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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Voluntary excess: </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td>
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Cost of recovery: </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td>
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input type="radio" id="htmlh" name="fav_languageh"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssh" name="fav_languageh"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Computer losses</td>
      <td>
        <input type="radio" id="htmli" name="fav_languagei"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssi" name="fav_languagei"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Supersedded insurance </td>
      <td>
        <input type="radio" id="htmlj" name="fav_languagej"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssj" name="fav_languagej"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Retroactive cover </td>
      <td>
        <input type="radio" id="htmlk" name="fav_languagek"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssk" name="fav_languagek"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Losses(24/36 months) </td>
      <td>
        <input type="radio" id="htmll" name="fav_languagel"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssl" name="fav_languagel"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Losses(24 months-audit)</td>
      <td>
        <input type="radio" id="htmlm" name="fav_languagem"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssm" name="fav_languagem"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        
      </td>
       
      <td>
        
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>
    
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 10:GOODS IN TRANSIT</b></div>

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
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premises Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Commodity:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Means of conveyance(e.g by road,rail or air):</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Estimated annual turnover:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit per load:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Number of vehicles:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input type="radio" id="htmln" name="fav_languagen"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssn" name="fav_languagen"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Debris removal</td>
      <td>
        <input type="radio" id="htmlo" name="fav_languageo"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="csso" name="fav_languageo"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Fire extinguishing charges </td>
      <td>
        <input type="radio" id="htmlp" name="fav_languagep"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssp" name="fav_languagep"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Declaration conditions frequency</td>
      <td>
        <input type="radio" id="htmlq" name="fav_languageq"/>  
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssq" name="fav_languageq"/>
      </td>
       
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total  annual premium for item</b></td>
      <td></td>
       
      <td></td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      
    </tr>
 
    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 11:BUSINESS ALL RISKS</b></div>

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
        <input type="radio" id="htmlr" name="fav_languager"/>  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssr" name="fav_languager"/>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Item Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Place:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Basis:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Increase cost of working limit:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Article Description:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Model Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Serial Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">First amount payable:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>



    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td></td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 12:ACCIDENTAL DAMAGE</b></div>

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
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Item Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premises Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">EML%:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Same risk:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Total value:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">First amount payable:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input type="radio" id="htmls" name="fav_languages"/>  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="csss" name="fav_languages"/>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Average:</td>
      <td>
        <input type="radio" id="htmlt" name="fav_languaget"/>  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="csst" name="fav_languaget"/>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Excluded Property:</td>
      <td>
        <input type="radio" id="htmlu" name="fav_languageu"/>  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssu" name="fav_languageu"/>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Reinstatement:</td>
      <td>
        <input type="radio" id="htmlw" name="fav_languagew"/>  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssw" name="fav_languagew"/>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">First loss average:</td>
      <td>
        <input type="radio" id="htmlx" name="fav_languagex"/>  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="radio" id="cssx" name="fav_languagex"/>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b>:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 13:PUBLIC LIABILITY</b></div>

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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Retroactive date:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" type="date" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premises number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Occupation:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional premises:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea"  className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit of indemnity:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Products liability/defective workmanship:</td>
      <td>
        <input type="radio" id="htmly" name="fav_languagey"/> 
          <label for="htmly">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssy" name="fav_languagey"/>
          <label for="cssy">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Code</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Limit</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Turnover</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Premium</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">EC Liability:</td>
      <td>
        <input type="radio" id="htmlz" name="fav_languagez"/> 
          <label for="htmlz">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssz" name="fav_languagez"/>
          <label for="cssz">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Limit</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Turnover</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Premium</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">USA/Canada Liability:</td>
      <td>
        <input type="radio" id="htmlaa" name="fav_languageaa"/> 
          <label for="htmlaa">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssaa" name="fav_languageaa"/>
          <label for="cssaa">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Limit</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Turnover</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Premium</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Legal defense cost:</td>
      <td>
        <input type="radio" id="htmlbb" name="fav_languagebb"/> 
          <label for="htmlbb">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssbb" name="fav_languagebb"/>
          <label for="cssbb">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. A. R50 000</td>
      <td>
        <input spellCheck="true"  id="client_name1" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. B. R100 000</td>
      <td>
        <input spellCheck="true"  id="client_name1" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. C. R250 000</td>
      <td>
        <input spellCheck="true"  id="client_name1" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Wrongful arrest and defamation:</td>
      <td>
        <input type="radio" id="htmlcc" name="fav_languagecc"/> 
          <label for="htmlcc">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="csscc" name="fav_languagecc"/>
          <label for="csscc">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. A. Event: R50 000</td>
      <td>
        <input spellCheck="true"  id="client_name1" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. B. Event: R100 000</td>
      <td>
        <input spellCheck="true"  id="client_name1" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. C. Event: R250 000</td>
      <td>
        <input spellCheck="true"  id="client_name1" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Pharmacies:</td>
      <td>
        <input type="radio" id="htmldd" name="fav_languagedd"/> 
          <label for="htmldd">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssdd" name="fav_languagedd"/>
          <label for="cssdd">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">. Number of pharmacists/Assist</td>
      <td>
        <input spellCheck="true"  id="client_name1" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>   
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Errors/omissions/negligence:</td>
      <td>
        <input type="radio" id="htmlee" name="fav_languageee"/> 
          <label for="htmlee">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssee" name="fav_languageee"/>
          <label for="cssee">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Hair salons:</td>
      <td>
        <input type="radio" id="htmlff" name="fav_languageff"/> 
          <label for="htmlff">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssff" name="fav_languageff"/>
          <label for="cssff">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Medical Treatment:</td>
      <td>
        <input type="radio" id="htmlgg" name="fav_languagegg"/> 
          <label for="htmlgg">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssgg" name="fav_languagegg"/>
          <label for="cssgg">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b>:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 14:SPECIALIST PRODUCTS</b></div>

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
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Commercial umbrella liability</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Products guarantee</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Cyber risks</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Directors and officers liability</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Employment practices liability</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Product inefficacy</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Product guarantee</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Professional indemnity</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Contractor's All Risk</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Other</td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      
    </tr>


    </tbody>
  </table>

  <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 15:EMPLOYER'S LIABILITY</b></div>

    
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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00 Annual earnings"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"></td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00 Business turnover"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00 Retroactive date"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"></td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" type="date" className="form-control" placeholder="Click to enter date"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Loading:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td> 
      
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Total annual premium for item</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00 "  aria-describedby="" style={{width:"200px"}} /> 
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
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 16:STATED BENEFITS</b></div>

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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Number of persons</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Occupation</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Job Description</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Insured Person</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Annual earnings</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Permanant Disability</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Temporary Disability</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Business Limitation</td>
      <td>
        <input type="radio" id="htmlhh" name="fav_languagehh"/> 
          <label for="htmlhh">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="csshh" name="fav_languagehh"/>
          <label for="csshh">No</label>
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
        <input type="radio" id="htmlii" name="fav_languageii"/> 
          <label for="htmlii">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssii" name="fav_languageii"/>
          <label for="cssii">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Burns Disfigurement</td>
      <td>
        <input type="radio" id="htmljj" name="fav_languagejj"/> 
          <label for="htmljj">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssjj" name="fav_languagejj"/>
          <label for="cssjj">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Passive war</td>
      <td>
        <input type="radio" id="htmlkk" name="fav_languagekk"/> 
          <label for="htmlkk">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="csskk" name="fav_languagekk"/>
          <label for="csskk">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Motorcycling</td>
      <td>
        <input type="radio" id="htmlll" name="fav_languagell"/> 
          <label for="htmlll">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssll" name="fav_languagell"/>
          <label for="cssll">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Mountaineering necessitating the use of ropes</td>
      <td>
        <input type="radio" id="htmlmm" name="fav_languagemm"/> 
          <label for="htmlmm">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssmm" name="fav_languagemm"/>
          <label for="cssmm">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Polo on horse back</td>
      <td>
        <input type="radio" id="htmlnn" name="fav_languagenn"/> 
          <label for="htmlnn">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssnn" name="fav_languagenn"/>
          <label for="cssnn">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Funeral Cost</td>
      <td>
        <input type="radio" id="htmloo" name="fav_languageoo"/> 
          <label for="htmloo">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssoo" name="fav_languageoo"/>
          <label for="cssoo">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Repatriation cost</td>
      <td>
        <input type="radio" id="htmlpp" name="fav_languagepp"/> 
          <label for="htmlpp">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="csspp" name="fav_languagepp"/>
          <label for="csspp">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Trauma cost</td>
      <td>
        <input type="radio" id="htmlqq" name="fav_languageqq"/> 
          <label for="htmlqq">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssqq" name="fav_languageqq"/>
          <label for="cssqq">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    </tbody>
    </table>

    <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 17:GROUP PERSONAL ACCIDENT</b></div>

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
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Item Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Profession:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Basis:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Number of People:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Compensation(death)Sum insured:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Permanant Disability:</td>
      <td>
        <input type="radio" id="htmlrr" name="fav_languagerr"/> 
          <label for="htmlrr">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssrr" name="fav_languagerr"/>
          <label for="cssrr">No</label>
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Temporary Disabiltiy:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Minimum period:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Maximum period:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Business Limitation:</td>
      <td>
        <input type="radio" id="htmlss" name="fav_languagess"/> 
          <label for="htmlss">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssss" name="fav_languagess"/>
          <label for="cssss">No</label>
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
        <input type="radio" id="htmltt" name="fav_languagett"/> 
          <label for="htmltt">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="csstt" name="fav_languagett"/>
          <label for="csstt">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Burns Disfigurement:</td>
      <td>
        <input type="radio" id="htmluu" name="fav_languageuu"/> 
          <label for="htmluu">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssuu" name="fav_languageuu"/>
          <label for="cssuu">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Passive war:</td>
      <td>
        <input type="radio" id="htmlvv" name="fav_languagevv"/> 
          <label for="htmlvv">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssvv" name="fav_languagevv"/>
          <label for="cssvv">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Motorcycling:</td>
      <td>
        <input type="radio" id="htmlww" name="fav_languageww"/> 
          <label for="htmlww">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssww" name="fav_languageww"/>
          <label for="cssww">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Mountaineering necessitating the use of ropes:</td>
      <td>
        <input type="radio" id="htmlxx" name="fav_languagexx"/> 
          <label for="htmlxx">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssxx" name="fav_languagexx"/>
          <label for="cssxx">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Polo on horseback:</td>
      <td>
        <input type="radio" id="htmlyy" name="fav_languageyy"/> 
          <label for="htmlyy">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssyy" name="fav_languageyy"/>
          <label for="cssyy">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Funeral Cost:</td>
      <td>
        <input type="radio" id="htmlzz" name="fav_languagezz"/> 
          <label for="htmlzz">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="csszz" name="fav_languagezz"/>
          <label for="csszz">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Repatriation Cost:</td>
      <td>
        <input type="radio" id="htmlaaa" name="fav_languageaaa"/> 
          <label for="htmlaaa">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssaaa" name="fav_languageaaa"/>
          <label for="cssaaa">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Trauma Cost:</td>
      <td>
        <input type="radio" id="htmlbbb" name="fav_languagebbb"/> 
          <label for="htmlbbb">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssbbb" name="fav_languagebbb"/>
          <label for="cssbbb">No</label>
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left"><b>Total annual premium for item</b></td>
      <td></td>
      <td></td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    </tbody>
  </table>

  <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 18:MOTOR</b></div>

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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Item Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Class of use:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Type of cover:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Registration number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Year manufactured:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Auto dealer's code:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Make:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Model:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">NCB:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Sum insured:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">VSS security:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">GVM/CC:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Engine Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Chassis Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Hire purchase:</td>
      <td>
        <input type="radio" id="htmlccc" name="fav_languageccc"/> 
          <label for="htmlccc">Yes</label>  
          &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="cssccc" name="fav_languageccc"/>
          <label for="cssccc">No</label>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Financial institute:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td></td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Contact Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td></td>
      <td></td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Period:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Limit:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
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
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>  
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Item Number:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} /> 
      </td>
      <td></td>
      <td></td>
      <td></td>  
    </tr>

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
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Basic:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claim/sum insured with minimum amount of R</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
    </tr>

  <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Theft and/or hijacking</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claims amount/sum insured with minimum amount of R</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Motor vehicle glass</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claims amount/sum insured with minimum amount of R</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Additional voluntary excess</td>
      <td></td>
      <td></td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Third party liability</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>% of claims amount/sum insured with minimum amount of R</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Loss of keys:</td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Limit:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
    </tr>

    <br/>
    <div><b>Extensions</b></div>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Credit shortfall:(only applicable if 'Hire Purchase' Yes): </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Limit:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Road assistance: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Rental: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Locks and keys: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Trauma: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
    </tr>

    <br/>
    <tr>
      <td>
        <input type="checkbox" id="cssqq" name="fav_languageqq"/>
      </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}} align="left">Towing: </td>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold'}}>Premium:</td>
      <td>
        <input spellCheck="true"  id="client_name" name="client_namea" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"100px"}} /> 
      </td>
      <td></td>
      <td></td>
    </tr>


    </tbody>
  
    </table>

    <br/>
    <div><b>Comments</b></div>
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 19:ELECTRONIC EQUIPMENT</b></div>
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
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Item Number:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premises Number:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Burglary cover:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">General minimum:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Indemnity period:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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

                  <div className="col-4">
                    <input type="radio" id="htmlddd" name="fav_languageddd"/> 
                      <label for="htmlddd">Yes</label>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="cssddd" name="fav_languageddd"/>
                      <label for="cssddd">No</label>
                  </div>

                  <div className="col-2">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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

                  <div className="col-4">
                    <input type="radio" id="htmleee" name="fav_languageeee"/> 
                      <label for="htmleee">Yes</label>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="csseee" name="fav_languageeee"/>
                      <label for="csseee">No</label>
                  </div>

                  <div className="col-2">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Insured with minimum:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 20:HOUSE OWNERS</b></div>

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
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Limit:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Item Number:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premises Number:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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

                  <div className="col-4">
                    <input type="radio" id="htmlfff" name="fav_languagefff"/> 
                      <label for="htmlfff">Yes</label>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="cssfff" name="fav_languagefff"/>
                      <label for="cssfff">No</label>
                  </div>

                  <div className="col-2">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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

                  <div className="col-4">
                    <input type="radio" id="htmlggg" name="fav_languageggg"/> 
                      <label for="htmlggg">Yes</label>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="cssggg" name="fav_languageggg"/>
                      <label for="cssggg">No</label>
                  </div>

                  <div className="col-2">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>SECTION 21:HOUSE HOLDERS</b></div>

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
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Limit:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Item Number:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premises Number:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Premium:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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

                  <div className="col-4">
                    <input type="radio" id="htmlhhh" name="fav_languagehhh"/> 
                      <label for="htmlhhh">Yes</label>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="csshhh" name="fav_languagehhh"/>
                      <label for="csshhh">No</label>
                  </div>

                  <div className="col-2">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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

                  <div className="col-4">
                    <input type="radio" id="htmliii" name="fav_languageiii"/> 
                      <label for="htmliii">Yes</label>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="cssiii" name="fav_languageiii"/>
                      <label for="cssiii">No</label>
                  </div>

                  <div className="col-2">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="0.00 %"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" style={{width:"200px"}} />
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
      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click or tap here to enter text"  aria-describedby="" style={{width:"1000px"}} />
    <br/>

    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>D. DEBIT ORDER DETAILS</b></div>

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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Identity Number:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                    <input type="radio" id="htmljjj" name="fav_languagejjj"/> 
                      <label for="htmljjj">English</label>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="cssjjj" name="fav_languagejjj"/>
                      <label for="cssjjj">Afrikaans</label>
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Postal code:</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>
              </div>
          </div>

          <hr/>
          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label"><b>Details of account</b></label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">6-Digit branch code:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Date(dd/mm/yyyy):</label>
                  </div>

                  <div className="col-4">
                    <input spellCheck="true"  id="client_name" name="client_name" type="date" className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} />
                  </div>

              </div>
          </div>


        </div>
      </div>

      <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>E. INTERMEDIARY INFORMATION</b></div>

    <p>Products considered appropriate to address the needs of the client</p>
    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"1000px",height:"100px"}} />
    <hr/>

    <p>Recommended product</p>
    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"1000px",height:"100px"}} />
    <hr/>

    <p>Reasons why the recommended product is considered the most suitable for the needs of the client:</p>
    <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"1000px",height:"100px"}} />
    <hr/>

    <br/>

    <div class="text-start "style={{ color: "#14848A" ,fontSize:'18px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>G. DECLARATION BY INTERMEDIARY</b></div>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
      <div className="row">

          <div className="col-16" style={{paddingBottom: "0.5%"}}>
              <div className="row g-3 align-items-center">
                  <div className="col-2">
                      <label className="col-form-label">Name of intermediary:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
                  </div>

                  <div className="col-2">
                      <label className="col-form-label">Code:</label>
                  </div>

                  <div className="col-4">
                      <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby="" style={{width:"200px"}} />
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
                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} />
              </div>
              <div className="col-2">
                  <label className="col-form-label">Date(dd/mm/yyyy):</label>
              </div>
              <div className="col-4">
                <input spellCheck="true"  id="client_name" name="client_name" type="date" className="form-control" placeholder="Sign here"  aria-describedby="" style={{width:"200px"}} />
              </div>
            </div>
        </div>

      </div>
  </div>

<br/>
  <p><b>Very Important:</b></p>
  <p>You are strongly advised to study your policy to acquaint yourself with the detail of all special terms and conditions for liability. If you have any questions or queries regarding the terms of your policy contract, you are advised to immediately contact the intermediary whose detail appears in Section F so that these issues can be addressed.</p>

    



        </>       

    )
 }



 export default Short_term_Commercial