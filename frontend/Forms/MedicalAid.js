import React, {useState} from 'react';
// import './Invest.css';
 function  MedicalAid()
 {
    const [backgroundInfoVisibility, setbackgroundInfoVisibility] = useState(false)

    function backgroundInfo_onFocus() {
        setbackgroundInfoVisibility(true)
      }
      function backgroundInfo_onBlur() {
        setbackgroundInfoVisibility(false)
      }
    return(

        <>
             <br/>
        <div class="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>MEDICAL SCHEMES ANALYSIS</b></div>
       <hr/>
       <div className="row">
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label className="col-form-label"><b>Client Name:</b></label>
                     </div>
                     <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Client Name"  aria-describedby="" />
                     </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>ID number:</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="ID number"  aria-describedby="" />
                    </div>
                 </div>
            </div>

            <hr/>
            <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                  <label htmlFor="address" className="col-form-label"><b>Address:</b></label>
                                  </div>
                                  <div className="col-9">
                                  <input spellCheck="true"  id="address"   name="address" className="form-control" placeholder="Address"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="email" className="col-form-label"><b>Email:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="email"   name="email" className="form-control" placeholder="Email"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="phone" className="col-form-label"><b>Phone:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="number" id="phone"  name="phone" className="form-control" placeholder="Phone"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          <hr/>
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="advisor" className="col-form-label"><b>Financial Advisor:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="advisor"   name="advisor" className="form-control" placeholder="Financial Advisor"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="date_of_birth" className="col-form-label"><b>Date:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="date"  id="date_of_birth" name="date_of_birth" className="form-control" placeholder="date_of_birth"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
  <hr/>
        </div>

        <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>

        <h5 ><b>SECTION A:</b></h5>
        <h6 align="left" style={{ color: "#14848A"}}>GENERAL CLIENT DETAILS </h6>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Name and surname:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Marital status:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Gender:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Occupation:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Income per month(if income plan is selected):</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="        R 0.00"  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Subsidy:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="        R 0.00"  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Number of Dependants:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="# of dependants"  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Spouse:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Enter name of spouse."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Other adult dependants(parents,guardians,Legal dependants):</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="List names of other Adult dependants ."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Children:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Enter name of children."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Chronic conditions(member):</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="List of chronic conditions"  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Chronic conditions(spouse):</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="List of chronic conditions for spouse."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Chronic conditions(Adult dependants):</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="List of chronic conditions for adult."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Chronic conditions(children):</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="List of chronic conditions for children"  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Other medical pre-existing conditions:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Previous medical aid name:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Period that you have been part of your previous Medical Aid:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Period that you havenot been part of a Medical Aid recently:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"750px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

            </div>
        </div>

                        <h5 className="section_class"><b>SECTION B:</b></h5>
                          <h5 className="h6 section_class1"><b>Background information</b></h5>
                          <p>Your personal circumstances that formed the basis for my recommendation</p>
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
                          <textarea  id="background_info" name="background_info" className="form-control"  style={{height: '160px'}} 
                          onFocus={backgroundInfo_onFocus}
                          onBlur={backgroundInfo_onBlur}
                          placeholder={
                              `                       Provide a detailed description of the client’s:
                              •	current personal circumstances,
                              •	needs that have been identified, 
                              •	and relevant information 
                          that formed the basis for the financial solution recommended`}  aria-describedby=""  ></textarea>
<br/>
                        <h5 className="h6 section_class1"><b>SUMMARY NEEDS ANALYSIS</b></h5>

                        <table class="table">
                            <thead>
                                <tr align="left">
                                    <th align="left"><b>Need</b></th>
                                    <th><b>Need identified</b></th>
                                    <th><b>Comments</b></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            

                            <tbody>
                                <tr>
                                    <td align="left"><b>Hospital Cover</b> </td>
                                    <td>
                                        <input type="radio" id="yes1" name="fav_language" value="yes1"/>
                                            <label for="yes1">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no1" name="fav_language" value="no1"/>
                                            <label for="no1">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>Day to Day benefits</b> </td>
                                    <td>
                                        <input type="radio" id="yes2" name="fav_language" value="yes2"/>
                                            <label for="yes2">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no2" name="fav_language" value="no2"/>
                                            <label for="no2">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>Threshhold benefit</b> </td>
                                    <td>
                                        <input type="radio" id="yes3" name="fav_language" value="yes3"/>
                                            <label for="yes3">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no3" name="fav_language" value="no3"/>
                                            <label for="no3">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>Chronic benefits</b> </td>
                                    <td>
                                        <input type="radio" id="yes4" name="fav_language" value="yes4"/>
                                            <label for="yes4">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no4" name="fav_language" value="no4"/>
                                            <label for="no4">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>Savings account</b> </td>
                                    <td>
                                        <input type="radio" id="yes5" name="fav_language" value="yes5"/>
                                            <label for="yes5">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no5" name="fav_language" value="no5"/>
                                            <label for="no5">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>Affordable Premium</b> </td>
                                    <td>
                                        <input type="radio" id="yes6" name="fav_language" value="yes6"/>
                                            <label for="yes6">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no6" name="fav_language" value="no6"/>
                                            <label for="no6">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>Hospital Preference</b> </td>
                                    <td>
                                        <input type="radio" id="yes7" name="fav_language" value="yes7"/>
                                            <label for="yes7">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no7" name="fav_language" value="no7"/>
                                            <label for="no7">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>PMB</b> </td>
                                    <td>
                                        <input type="radio" id="yes8" name="fav_language" value="yes8"/>
                                            <label for="yes8">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no8" name="fav_language" value="no8"/>
                                            <label for="no8">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td align="left"><b>Doctor/Specialist/Hospital Networks</b> </td>
                                    <td>
                                        <input type="radio" id="yes9" name="fav_language" value="yes9"/>
                                            <label for="yes9">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="no9" name="fav_language" value="no9"/>
                                            <label for="no9">No</label>
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>

                            <br/>
                        <div><b>SECTION C</b></div>
                        <h5 className="h6 section_class1"><b>SUMMARY:COMPARISON OF MEDICAL AID BENEFITS</b></h5>

                        <table class="table">
                            <thead>
                                <tr align="left">
                                    <th align="left"><b>Details</b></th>
                                    <th><b>Current Medical Scheme</b></th>
                                    <th><b>Replaced Medical Scheme</b></th>
                                    {/* <th></th>
                                    <th></th> */}
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td align="left"><b>Name</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Contribution/Premium</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Benefits</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Savings Account</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Chronic Benefits</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Hospital Cover</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Limits on cover</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>General Waiting Period</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Condition Specific Waiting Period</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Legislated Prescribed Minimum Benefits</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Later Jointer Penalty</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                                <tr>
                                    <td align="left"><b>Reward/Loyalty Programme</b> </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td>
                                    <td>
                                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby=""  />
                                    </td> 
                                </tr>

                            </tbody>
                        </table>

                        <br/>
                        <div><b>SECTION D</b></div>
                        <h5 className="h6 section_class1"><b>IMPORTANT INFORMATION HIGHLIGHTED TO YOU</b></h5>
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="PMB, waiting periods, exclusions, late joiner penalties, tax deductibility, consequences of replacement, etc."  aria-describedby="" style={{height:"100px"}} />
                        <hr/>

                        <br/>
                        <div><b>SECTION E</b></div>
                        <h5 className="h6 section_class1"><b>FINANCIAL ADVISER'S DECLARATION</b></h5>
                        <hr/>
                        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                            <div className="row">

                                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label className="col-form-label">You have elected not to accept the following product recommendations:</label>
                                        </div>
                                        <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"550px"}}/>
                                        </div>
                                    </div>
                                </div>
                                    <hr/>

                                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label className="col-form-label">For the following reasons:</label>
                                        </div>
                                        <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"550px"}}/>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label className="col-form-label">The consequences thereof have been clearly explained to you:</label>
                                        </div>
                                        <div className="col-4">
                                            <input type="radio" id="yes10" name="fav_language" value="yes10"/>
                                                <label for="yes10">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" id="no10" name="fav_language" value="no10"/>
                                                <label for="no10">No</label>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                                <div className="col-8" style={{paddingBottom: "0.5%"}}>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-8">
                                            <label className="col-form-label">Fees and/or commission:</label>
                                        </div>
                                        <div className="col-4">
                                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" style={{width:"550px"}}/>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                            </div>
                        </div>
                
        </>
    )
 }

 export default MedicalAid