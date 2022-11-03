import React, {useState} from 'react';
// import './Invest.css';

const GapCover = () => {
    return(
        <>
        <br/>
        <div class="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>GAP COVER</b></div>
       <hr/>

       <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
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
                            <input spellCheck="true"  id="id_number" name="id_number" className="form-control" placeholder="ID number"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <hr className="col-11" />
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="address" className="col-form-label"><b>Address:</b></label>
                        </div>
                        <div className="col-9">
                            <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Address"  aria-describedby="" />
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
                            <input spellCheck="true"  id="email" name="email" className="form-control" placeholder="Email"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Phone:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="id_number" name="id_number" className="form-control" placeholder="Mobile Number"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <hr className="col-11" />
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Medical Aid:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="email" name="email" className="form-control" placeholder="Medical Aid Name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Inception Date:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" type="date" id="id_number" name="id_number" className="form-control" placeholder="Click to enter date"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <hr className="col-11" />
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Financial Advisor:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="email" name="email" className="form-control" placeholder="Primary intermediary's name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Date:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" type="date" id="id_number" name="id_number" className="form-control" placeholder="Click here to enter date"  aria-describedby="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <hr className="col-11" />
        <div className="col-11 p_class">
            <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence, and storage of your personal information relating to your financial matters. Ts&Cs on <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>
        </div>

        {/* <br/> */}
        <div><b>SECTION A</b></div>
        <h5 className="h6 section_class1"><b>NEED</b></h5>
        <div><b> Gap cover benefits are only available as an add-on to the members belonging to a registered medical aid.</b></div>
        
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Details:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" id="id_number" name="id_number" className="form-control" placeholder="Details"  aria-describedby="" style={{width:"900px",height:"80px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div><b>SECTION B</b></div>
                <h5 className="h6 section_class1"><b>DEPENDENTS COVERED</b></h5>
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-6">
                            <label htmlFor="id_number" className="col-form-label"><b>Are all dependents on the same medical aid and same medical aid plan? </b></label>
                        </div>
                        <div className="col-6">
                            <input type="radio" id="yes9" name="fav_language" value="yes9"/>
                                <label for="yes9">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="no9" name="fav_language" value="no9"/>
                                <label for="no9">No</label>
                        </div>
                    </div>
                </div>
                <hr/>
                <table class="table">
                    <thead>
                        <tr align="left">
                            <th align="left"><b>Member Name</b></th>
                            <th><b>Relationship to main Member</b></th>
                            <th><b>Medical Aid Plan</b></th>
                            {/* <th></th>
                            <th></th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td align="left">
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left">
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left">
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left">
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Member Name"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Relationship to main member"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Medical Aid Plan"  aria-describedby=""  />
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div><b>SECTION C</b></div>
                <h5 className="h6 section_class1"><b>SOLUTION</b></h5>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Provider:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" id="id_number" name="id_number" className="form-control" placeholder="         Provider"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Option:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" id="id_number" name="id_number" className="form-control" placeholder="         Option"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Motivation:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" id="id_number" name="id_number" className="form-control" placeholder="         Motivation"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Total Premium:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" id="id_number" name="id_number" className="form-control" placeholder="         R 0.00"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Broker Fee:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" id="id_number" name="id_number" className="form-control" placeholder="         R 0.00"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Commission:</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true" id="id_number" name="id_number" className="form-control" placeholder="         R 0.00"  aria-describedby="" style={{width:"800px"}} />
                        </div>
                    </div>
                </div>
                <hr/>

                <div><b>SECTION D</b></div>
                <h5 className="h6 section_class1"><b>BENEFITS</b></h5>
                <div><b>In the event of a replacement complete both current and new product</b></div>

                <table class="table">
                    <thead>
                        <tr align="left">
                            <th align="left"><b></b></th>
                            <th><b>Current Product</b></th>
                            <th><b>New Product</b></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td align="left"><b>Gap Cover rate</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Overall annual limit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Co-payment benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Sub-limit benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Cancer benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Cancer diagnose benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Other benefits</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Casualty benefit(In case of accident)</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Trauma counselling benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Gap Cover premium waiver benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Medical scheme waiver benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Accidental death cover benefit</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <div><b>SECTION E</b></div>
                            
                        </tr>

                        <tr>
                            <h5 className="h6 section_class1"><b>WAITING PERIODS</b></h5>
                           
                        </tr>

                        <tr>
                            <td align="left"><b>General Waiting period</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Waiting period for pre-existing condition</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                        <tr>
                            <td align="left"><b>Specific waiting periods</b></td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Current Product"  aria-describedby=""  />
                            </td>
                            <td>
                                <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="New Product"  aria-describedby=""  />
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div><b>SECTION F</b></div>
                <h5 className="h6 section_class1"><b>EXCLUSIONS</b></h5>

                    <div className="row g-3 align-items-center">
                        <div className="col-6">
                            <label htmlFor="id_number" className="col-form-label"><b>Are claims whereby the medical aid requires a co-payment for not using a specific medical service provider excluded?</b></label>
                        </div>
                        <div className="col-6">
                            <input type="radio" id="yes15" name="fav_language" value="yes15"/>
                                <label for="yes15">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="no15" name="fav_language" value="no15"/>
                                <label for="no15">No</label>
                        </div>
                    </div>
                    <hr/>

                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>Other Exclusions</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Discuss other exclusions"  aria-describedby=""  />
                        </div>
                    </div>
                    <hr/>

                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="id_number" className="col-form-label"><b>General comments</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Discuss other exclusions"  aria-describedby=""  />
                        </div>
                    </div>
                    <hr/>
                    <div align="center"><b>Notes</b></div>
                    <hr/>

                    <div>You will always be responsible towards the provider of medical services. Gap cover often requires a subsequent claim process to be followed, once the medical aid company has made their payment. You are then required to submit a claim to the Gap cover provider for settlement of the remainder, up to the limit of the option selected.  </div>
                    <hr/>

                    <div>Most Medical Aid companies have introduced co-payments and sub-limits for certain in hospital treatment and procedures. If you elect not to take this cover you will be responsible for these. </div>
                    <hr/>

                    <div>Please be aware that No benefits are payable which should be provided by the Medical Aid scheme (such as Prescribed Minimum Benefits), this exception includes ward fees, theatre fees, medicines and other hospital expenses.</div>
                    <hr/>

                    <div>Please make sure you have read through your policy schedule/s Terms and Conditions thoroughly once your policy/s has been accepted.</div>
                    <hr/>

                    <div>All material facts must be accurately and properly disclosed. The accuracy and completeness of all answers, statements and/or other information provided by or on behalf of the client, are the client’s own responsibility.</div>
                    <hr/>

                    <div>Gap Cover applies to In-Hospital accounts and must not be confused with the Threshold Gap that applies for Out-Of-Hospital claims.</div>
                    <hr/>

                    <div><b>SECTION G</b></div>
                    <h5 className="h6 section_class1"><b>FINANCIAL ADVISER'S DECLARATION</b></h5>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">You have elected not to accept the following product recommendations:</label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
                        </div>
                    </div>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">For the following reasons</label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
                        </div>
                    </div>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">The consequences thereof have been clearly explained to you.</label>
                        </div>
                        <div className="col-6">
                            <input type="radio" id="yes16" name="fav_language" value="yes16"/>
                                <label for="yes16">Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="no16" name="fav_language" value="no16"/>
                                <label for="no16">No</label>
                        </div>
                    </div>

                    <hr/>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label">Fee and/or commission</label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Other Comments"  aria-describedby=""  />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Sign here"  aria-describedby=""  />
                        </div>
                        <div className="col-6">
                            <input type="date" name="client_name" className="form-control" placeholder="Click here to enter text"  aria-describedby=""  />
                        </div>
                    </div>

            
        </>
    )
}


export default GapCover 