import React, {useState} from 'react';
// import './Invest.css';
 function  Employee()
 {
    const [backgroundInfoVisibility1, setbackgroundInfoVisibility1] = useState(false)
    const [backgroundInfoVisibility2, setbackgroundInfoVisibility2] = useState(false)
    const [backgroundInfoVisibility3, setbackgroundInfoVisibility3] = useState(false)
    const [backgroundInfoVisibility4, setbackgroundInfoVisibility4] = useState(false)
    const [backgroundInfoVisibility5, setbackgroundInfoVisibility5] = useState(false)




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
    return(
        <>
        <br/>
             <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>EMPLOYEE BENEFITS</b></div>
             <hr/>
             <form method="get">
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
                                  <input spellCheck="true"  id="id_number" name="id_number" className="form-control" placeholder="ID # of client"  aria-describedby="" />
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
                                    <label htmlFor="email" className="col-form-label"><b>Phone:</b></label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true"  id="email" name="email" className="form-control" placeholder="Office Tel"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-6">
                                    <input spellCheck="true"  type="number" id="phone" name="phone" className="form-control" placeholder="Cell Number"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="advisor" className="col-form-label"><b>Email:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="advisor" name="advisor" className="form-control" placeholder="Email"  aria-describedby="" />
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

                          <hr className="col-11" />
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="advisor" className="col-form-label"><b>Financial Advisor:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="advisor" name="advisor" className="form-control" placeholder="Primary Intermediary’s name"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="date_of_birth" className="col-form-label"><b>Details of fee:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="text"  id="date_of_birth" name="date_of_birth" className="form-control" placeholder="Details of fee due to intermediary"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </form>

                <hr/>
                <div className="col-11 p_class">
                    <p>In terms of the Financial Advisory and Intermediary Services Act (FAIS Act), we must provide you (the client) with a record of advice. This document is a summary that intends to confirm the advisory process you recently undertook with your advisor. If you have any questions concerning the content, please contact your advisor. You are entitled to a copy of this document for your records. You consent to Succession Financial Planning (SFP) processing your personal information per the Protection of Personal Information Act (POPIA). You have given consent to SFP retaining your personal information to recommend the best-suited financial solutions for your financial needs and maintenance. You consent to be contacted from time to time for maintenance, news, correspondence and storage of your personal information relating to your financial matters. Ts&Cs on  <a href="https://www.sfpadvice.co.za">https://www.sfpadvice.co.za</a>  </p>
                </div>
                <h5 style={{color: '#00788A'}}><b>Section A:Employer Information</b></h5>

                <hr/>
                <form method="get">
                  <div style={{fontFamily: 'Arial Narrow',fontSize: '12'}}>
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Name of business entity:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Name of business entity"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Physical Business Address:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Physical Business Address"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Employer contact person:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Employer contact person"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="advisor" className="col-form-label"><b>Office Tel No:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  id="advisor" name="advisor" className="form-control" placeholder="Office Tel No"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <div className="col-6" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                  <label htmlFor="date_of_birth" className="col-form-label"><b>Cell Phone:</b></label>
                                  </div>
                                  <div className="col-6">
                                  <input spellCheck="true"  type="text"  id="date_of_birth" name="date_of_birth" className="form-control" placeholder="Cell Phone"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Email Address:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Email Address"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Nature of business & Type of industry:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Nature of business & Type of industry"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Do the employees belong to Trade Union/ Bargaining Council?:</b></label>
                                  </div>
                                  <div className="col-1">
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" checked/>Yes
                                    </label>
                                  </div>
                                  <div className="col-1">
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>No
                                    </label>
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Details:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Details"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Total number of employees:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Total number of employees"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Total number of eligible employees:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Total number of eligible employees"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Specify and explain categories of members excluded:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Specify and explain categories of members excluded"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                </form>

                <hr/>
                <h5 style={{color: '#00788A'}}><b>Section B:Take-over of existing fund</b></h5>
                <hr/>
                <form method="get">
                  <div style={{fontFamily: 'Arial Narrow',fontSize: '12'}}>
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Name of existing fund & PF Reg no:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Name of existing fund & PF Reg no"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Name of previous Insurer/ Administrator:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Name of previous Insurer/ Administrator"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Current total fund value:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Current total fund value"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Number of current active members:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Number of current active members"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Number of fully paid-up members:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Number of fully paid-up members"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr className="col-11" />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="address" className="col-form-label"><b>Reason for change:</b></label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Reason for change"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </form>

                <hr/>
                <h5 style={{color: '#00788A'}}><b>Section C:Clients Needs and Requirements</b></h5>

                
                <hr/>
                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                    <select>
                        <option value="type">Select the type of benefit cover</option>
                        <option value="Retirement">Retirement Benefits</option>
                        <option value="fund">Type of fund/scheme</option>
                        <option value="trauma">Trauma Benefits</option>
                        <option value="funeral">Funeral Benefits</option>
                        <option value="accident">Accident Benefits</option>
                        <option value="group">Group life cover</option>
                        <option value="lumpsum">Lump sum Disability Benefits</option>
                        <option value="spouse">Spouse life cover</option>
                        <option value="disability">Disability Income Benefit</option>
                    </select>
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

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="2" id="letter_of_introduction_radio_btn" name="letter_of_introduction_radio_btn" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn" >
                                        Undecided
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 
        {
        backgroundInfoVisibility1 ? 
        <>
        <div id="background_info_instructions1" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Additional Comments .

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info1" name="background_info1" className="form-control"  style={{height: '100px'}} 
        onFocus={backgroundInfo_onFocus1}
        onBlur={backgroundInfo_onBlur1}
        placeholder={`Additional Comments .
        
        `}  aria-describedby=""  ></textarea>

    <hr/>
    <h5 style={{color: '#00788A'}}><b>Section D:Investment Indicator</b></h5>
    <hr/>

                <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate1">Are some of the employees within five years of retirement?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn1" name="letter_of_introduction_radio_btn1" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn1" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn1" name="letter_of_introduction_radio_btn1" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn1" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate2">Indicate the percentage of employees that are financially illiterate?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn2" name="letter_of_introduction_radio_btn2" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn2" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn2" name="letter_of_introduction_radio_btn2" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn2" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate3">Indicate the percentage of employees that are financially sophisticated</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn3" name="letter_of_introduction_radio_btn3" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn3" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn3" name="letter_of_introduction_radio_btn3" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn3" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate4">Is there a high staff turnover?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn4" name="letter_of_introduction_radio_btn4" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn4" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn4" name="letter_of_introduction_radio_btn4" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn4" >
                                        No
                                    </label>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="row col-2 align-items-center">
                                <input type="text" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="00 %" style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate5">Is individual member investment choice required?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn5" name="letter_of_introduction_radio_btn5" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn5" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn5" name="letter_of_introduction_radio_btn5" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn5" >
                                        No
                                    </label>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <div className="row g-3 align-items-center">
                    <div className="col-6">
                        <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is a Default Investment Portfolio required?</label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                        Yes
                                    </label>
                                </div>
                            </div>

                            <div className="row col-2 align-items-center">
                                <div className="col-2">
                                    <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                </div>
                                <div className="col-2">
                                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                        No
                                    </label>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                    <hr/>
                                 
                 </div> 

                 <form method="get">
                  <div style={{fontFamily: 'Arial Narrow',fontSize: '12'}}>
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-2">
                                    <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Additional Comments</label>
                                  </div>
                                  <div className="col-9">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Additional Comments"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </form>

                <hr/>
                <h5 style={{color: '#00788A'}}><b>Section E:Risk Benefits</b></h5>
                <hr/>

    <table className="table">
  <tbody>
    
    <tr>
      <td style={{fontSize:'14px'}} align="left">Categories (description)</td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px'}} align="left">Member Contributions</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px'}} align="left">Employer contributions</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00 %"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Normal Retirement age</td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>
    </tr>
 
    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
       <td style={{fontSize:'14px'}} align="left">Death Benefits</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Flexible group life</td>
      <td>
        
      </td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Approved</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>

    </tr>
    
    <tr>
      <td style={{fontSize:'14px'}} align="left">Unapproved</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>

    </tr>


    </tbody>
  </table>

  <div className="row g-3 align-items-center">
    <div className="col-6">
        <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Will the new fund be taking over the life cover of existing disability claims? </label>
    </div>
    <div className="col-6">
        <div className="row">
            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                </div>
                <div className="col-2">
                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                        Yes
                    </label>
                </div>
            </div>

            <div className="row col-2 align-items-center">
                <div className="col-2">
                    <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                </div>
                <div className="col-2">
                    <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                        No
                    </label>
                </div>
            </div>
                             
        </div>
    </div>
    <hr/>                           
  </div> 
                 <hr/>
<table className="table">
  <tbody>
    
    <tr>
      <td style={{fontSize:'14px'}} align="left">Spouse life cover</td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>
    </tr>
    
    <tr>
      <td style={{fontSize:'14px'}} align="left">Notes on Spouse cover</td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Notes on Spouse cover"/>
        </div>
      </td>

      <td></td>

      <td></td>

      <td></td>
      
    </tr>
    <br/>
    <tr>
      <td style={{fontSize:'14px'}} align="left">Trauma Benefit</td>
      <td></td>

      <td></td>

      <td></td>

      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Multiple of Salary </td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>
    </tr>
    <br/>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Funeral Benefit</td>
      <td></td>

      <td></td>

      <td></td>

      <td></td>
      
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Cover required </td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="         R 00"/>
        </div>
      </td>
    </tr>
    {/* <br/> */}
    </tbody>
</table>


    <form method="get">
        <div style={{fontSize:'14px'}} align="left">
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="address" className="col-form-label">Conversion option:</label>
                        </div>
                        <div className="col-10">
                            <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Conversion option"  aria-describedby="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        <div style={{fontSize:'14px'}} align="left">
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="address" className="col-form-label">Growth rates for income benefits:</label>
                        </div>
                        <div className="col-10">
                            <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Growth rates for income benefits"  aria-describedby="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        <div style={{fontSize:'14px'}} align="left">
            <div className="row">
                <div className="col-12" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-2">
                            <label htmlFor="address" className="col-form-label">Notes on Disability Benefits:</label>
                        </div>
                        <div className="col-10">
                            <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Notes on Disability Benefits"  aria-describedby="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <hr/>

    <table className="table">
  <tbody>
    
  <tr>
      <td style={{fontSize:'14px'}} align="left">Accident Benefit </td>
      <td></td>

      <td></td>

      <td></td>

      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px'}} align="left">Benefit </td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
        </div>
      </td>
    </tr>
    </tbody>
</table>
    
    <hr/>
    {
        backgroundInfoVisibility2 ? 
        <>
        <div id="background_info_instructions2" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need. <br/>
                    Record the client's instructions, deviations and implications thereof.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info2" name="background_info2" className="form-control"  style={{height: '140px'}} 
        onFocus={backgroundInfo_onFocus2}
        onBlur={backgroundInfo_onBlur2}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        
        
        `}  aria-describedby=""  ></textarea>
            
            <hr/>
            <p>Disability Cover:</p>
            <hr/>

        {
        backgroundInfoVisibility4 ? 
        <>
        <div id="background_info_instructions4" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why disability benefits were recommended to satisfy this need. <br/>
                    Record the client's instructions, deviations and implications thereof.


                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info4" name="background_info4" className="form-control"  style={{height: '140px'}} 
        onFocus={backgroundInfo_onFocus4}
        onBlur={backgroundInfo_onBlur4}
        placeholder={`Explain the reasons why disability benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        
        
        `}  aria-describedby=""  ></textarea>

    <hr/>
    <p>Dread Disease Cover:</p>
    <hr/>

            {
        backgroundInfoVisibility3 ? 
        <>
        <div id="background_info_instructions3" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why dread disease cover was recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.



                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info3" name="background_info3" className="form-control"  style={{height: '140px'}} 
        onFocus={backgroundInfo_onFocus3}
        onBlur={backgroundInfo_onBlur3}
        placeholder={`Explain the reasons why dread disease cover was recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        
        
        
        `}  aria-describedby=""  ></textarea>

<hr/>

        {
            backgroundInfoVisibility5 ? 
            <>
            <div id="background_info_instructions5" className="hidden_class">
                <ul>
                    <li>
                        Summary of recommendations to address your identified needs.
                    </li>
       
                </ul>
    
            </div>
            </>: 
            null
        }

        <textarea  id="background_info5" name="background_info5" className="form-control"  style={{height: '140px'}} 
        onFocus={backgroundInfo_onFocus5}
        onBlur={backgroundInfo_onBlur5}
        placeholder={`Summary of recommendations to address your identified needs.



        `}  aria-describedby=""  ></textarea>

        <hr/>

        <h5 style={{color: '#00788A'}}><b>Section F:Recommendations</b></h5>
        <hr/>
        <p>Submit a copy of the accepted proposal with all details of new fund/scheme and benefits with this document. </p>
        <hr/>
                <form method="get">
                  <div style={{fontSize:'14px'}} align="left">
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Product provider/ Administrator:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Product provider/ Administrator"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Product name:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Type of fund </label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Motivation for recommendations of fund/scheme and type:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is a Default Investment Portfolio required?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-2 align-items-center">
                                        <div className="col-2">
                                            <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row col-2 align-items-center">
                                        <div className="col-4">
                                            <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                        </div>
                                        <div className="col-4">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 


                          <hr />
                          <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">The client has accepted the recommendations</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-2 align-items-center">
                                        <div className="col-2">
                                            <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn7" name="letter_of_introduction_radio_btn7" />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn7" >
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row col-2 align-items-center">
                                        <div className="col-4">
                                            <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn7" name="letter_of_introduction_radio_btn7" />
                                        </div>
                                        <div className="col-4">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn7" >
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 

                        <hr/>
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">If the client has decided to conclude a transaction that differs from the recommended solution, has the employer been informed of the risks? What risks have been pointed out?:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          
                        </div>
                    </div>
                </form>
               
               <br/>
                <h5 style={{color: '#00788A'}}><b>Section G: Fund Replacement</b></h5>
                <hr/>

                <form method="get">
                  <div style={{fontSize:'14px'}} align="left">
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Name of fund replaced:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Reg No: </label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr />
                          <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Type of fund replaced:</label>
                                  </div>
                                  <div className="col-8">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>

                          <hr/>
                          
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Detail (as applicable) of the actual and potential financial implications, costs & consequences of the replacement as disclosed to the client.</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-2 align-items-center">
                                        <div className="col-2">
                                            <input className="form-check-input" type="radio" value="0" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                Replacement Fund
                                            </label>
                                        </div>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="row col-2 align-items-center">
                                        <div className="col-4">
                                            <input className="form-check-input" type="radio" value="1" id="letter_of_introduction_radio_btn6" name="letter_of_introduction_radio_btn6" />
                                        </div>
                                        <div className="col-4">
                                            <label className="form-check-label" htmlFor="letter_of_introduction_radio_btn6" >
                                                Existing Fund
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 


                          <hr />
                          <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Fees and charges in respect of the replacement fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div> 

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Special terms and conditions, exclusions of liability, waiting periods, loadings, penalties, excesses, pre-existing conditions, restrictions or circumstances in which benefits will not be provided, which may be applicable to the replacement product:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>

                         <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">In the case of risk benefits, the impact of age and health changes on the premium payable:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Differences between the tax implications of the replacement fund and the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Material differences between the investment risk of the replacement fund and the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Penalties or un-recouped expenses deductible or payable due to termination of the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">The extent to which the replacement fund is readily realisable or the relevant funds accessible, compared to the terminated fund:</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  
                          
                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Comparison of Benefits </label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Proposed</label>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Existing Fund</label>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  
                        
                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Eligible groups</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Member contribution % / rate</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Employer contribution % / rate</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                    
                                 
                          </div> 
                        </div>  
{/* jnhhufhhfhhfgtghutgjfhhrguh */}
                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is the employer contribution % inclusive or exclusive of risk and administration fees?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>         
                          </div> 
                        </div> 

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on death</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on disability (if admitted by underwriter)</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on withdrawal</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Benefit payable on retirement</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Normal retirement age</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Conversion option available and for which benefits?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Are housing loans provided?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">What is the cost of administration and related costs (e.g. commission) as a % of employer’s contribution?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">What are the investments fees?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">What is the cost of risk cover as a % of the employer’s contribution?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Are any other benefits available to members on old fund/scheme that are not under the new fund/scheme (e.g. funeral or monthly disability benefits)?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                                <label htmlFor="client_name" className="col-form-label" title="If no, motivate6">Is there investment choice and if so who qualifies?</label>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                    </div>

                                    <div className="row col-6 align-items-center">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Click to enter text"/>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>      
                          </div> 
                        </div>   

                        <hr/>
                        </div>
                    </div>
                </form>

                <br/>
                <h5 style={{color: '#00788A'}}><b>Section H: Clients Declarations</b></h5>
                <p>(Please note that it is of utmost importance that you read this section carefully and understand it fully).</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                1.&nbsp;&nbsp;&nbsp;I confirm that a Contact Stage Disclosure letter, setting out the financial adviser’s full particulars, experience and services offered has been provided to me.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                2.&nbsp;&nbsp;&nbsp;I confirm that I required the financial adviser to render the financial services set out in the Service Level Agreement, a copy of which has been provided to me.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                3.&nbsp;&nbsp;&nbsp;I understand that the accuracy of a needs analysis is dependent upon the information provided to or obtained by the financial adviser. The advice furnished and product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;recommendations made by the financial adviser are based largely on the information I provided to the financial adviser. I understand that material non-disclosures and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; misrepresentations could result in inappropriate product(s) being recommended and purchased by me.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                4.&nbsp;&nbsp;&nbsp;I confirm that I was provided with copies of quotations, fund fact sheet(s), marketing brochures and rates and benefit sheets for the product(s) selected. All material terms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and conditions of the product(s) selected were explained to me prior to any decision made.  <br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                5.&nbsp;&nbsp;&nbsp;I have been informed of and understand all costs, charges, penalties, liquidity limitations and tax implications where applicable.  I understand the risks / guarantees (or &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;absence thereof) associated with the product(s) and /or underlying fund(s) selected.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                6.&nbsp;&nbsp;&nbsp;I confirm that all documents signed by me were fully completed prior to my signing them.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                7.&nbsp;&nbsp;&nbsp;I confirm that the financial adviser has made enquiries to ascertain whether the product(s) selected are intended to replace any existing financial products held by me and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where applicable, has informed me of the financial implications, costs and consequences of replacement.<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                8.&nbsp;&nbsp;&nbsp;Notwithstanding the information provided by the Advisor, I acknowledge that I have an obligation to familiarize myself with the terms and conditions of the product(s) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that I have purchased.<br/>

                </p>
            
                <hr/>
                
                




    



        </>
    )
 }

 export default Employee