import React, {useState} from 'react';
function AssuranceInvestment()
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
      return(
          <>
          <br/>

          <div class="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>BUSINESS ASSURANCE</b></div>
          <hr/>
<h5><b>PART II: INVESTMENT & SAVINGS</b></h5>
<hr/>
<h5 className="section_class"><b>SECTION B:</b></h5>
    <div className="h6 fw-bold" style={{color: '#00788A'}}>Analysis of Business’s Circumstances</div>    

<p>The analysis of your personal circumstances as described above</p>

<p><b>Investment requirements</b></p>
<p>Need</p>

    <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">

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
            </div>

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
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="years"  aria-describedby="" />
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
    <textarea  id="background_info14" name="background_info14" className="form-control"  style={{height: '80px'}} 
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
                                <input className="form-check-input" checked={Sica1 ? true : false} onChange={(e) => {setSica1(true)}} type="radio" value="0" id="provided_identity_radio_btn3" name="provided_identity_radio_btn3"/>
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
                                <input className="form-check-input" checked={Sica1 ? false : true} onChange={(e) => {setSica1(false)}} type="radio" value="1" id="provided_identity_radio_btn3" name="provided_identity_radio_btn3"/>
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
                    <textarea  id="provided_identity" name="provided_identity" onChange={(e) => {setSica1Reason(e.target.value)}} onFocus={sica1_onFocus} onBlur={sica1_onBlur} className="form-control" placeholder="Notes" aria-describedby="" ></textarea>
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
    <textarea  id="background_info15" name="background_info15" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus15}
        onBlur={backgroundInfo_onBlur15}
        placeholder={
`Notes`}  aria-describedby=""  ></textarea>
<hr/>
<br/>

<p>Investment Strategy</p>
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
    <textarea  id="background_info16" name="background_info16" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus16}
        onBlur={backgroundInfo_onBlur16}
        placeholder={
`Notes on discussion with client concerning the investment strategy.`}  aria-describedby=""  ></textarea>
<hr/>
<br/>

<p>Return Required</p>
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
    <textarea  id="background_info17" name="background_info17" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus17}
        onBlur={backgroundInfo_onBlur17}
        placeholder={
`Notes on discussion with client concerning return expectations.`}  aria-describedby=""  ></textarea>
<hr/>
<br/>

<p>Risk Profile</p>
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
    <textarea  id="background_info18" name="background_info18" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus18}
        onBlur={backgroundInfo_onBlur18}
        placeholder={
`Notes on the client risk profile..`}  aria-describedby=""  ></textarea>

<br/>
<div className="h6 fw-bold" style={{color: '#00788A'}}>Funding of future expenses and/or deferred gratuities</div>    

<table class="table">
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
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>

      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Replacement of assets</td>
      <td>
        <div >
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Compulsory refurbishing of franchises</td>
      <td>
        <div >
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div >
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
        </div>
      </td>
      <td>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="R 0.0"/>
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
    <textarea  id="background_info19" name="background_info19" className="form-control"  style={{height: '150px'}} 
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
    <textarea  id="background_info20" name="background_info20" className="form-control"  style={{height: '80px'}} 
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
    <textarea  id="background_info21" name="background_info21" className="form-control"  style={{height: '80px'}} 
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
    <textarea  id="background_info22" name="background_info22" className="form-control"  style={{height: '80px'}} 
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
                        <label className="col-form-label"><b>Escalation</b></label>
                    </div>
                    <div className="col-6">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="Click here to enter text."  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Effective annual cost (EAC)</b></label>
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
            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Beneficiary/cessionary</b></label>
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
                        <label className="col-form-label"><b>Initial commission</b></label>
                    </div>
                    <div className="col-4">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="R 0.00"  aria-describedby="" />
                    </div>
                    <div className="col-4">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="            00 %"  aria-describedby="" />
                    </div>
                </div>
            </div>

            <div className="col-6" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <label htmlFor="id_number" className="col-form-label"><b>Ongoing commission</b></label>
                    </div>
                    <div className="col-4">
                        <input spellCheck="true"  id="id_number"  name="id_number" className="form-control" placeholder="R 0.00"  aria-describedby="" />
                    </div>
                    <div className="col-4">
                        <input spellCheck="true"  id="client_name" name="client_name" className="form-control" placeholder="            00 %"  aria-describedby="" />
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
    <textarea  id="background_info23" name="background_info23" className="form-control"  style={{height: '300px'}} 
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


<table class="table">
  <thead>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
      <td scope="col" align="center"><p><b>Fund Fact Sheets to client:</b></p></td> 
    
  </thead>
       
        
  </table>
<div class="container mt-3">          
  <table class="table">
    
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
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>

        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>     
      </tr>

      <tr>
        <td>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>

        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>     
      </tr>

      <tr>
        <td>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>

        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>     
      </tr>

      <tr>
        <td>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>

        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>     
      </tr>

      <tr>
        <td >
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>

        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>     
      </tr>

      <tr>
        <td>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>

        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>     
      </tr>

      <tr>
        <td>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; */}
            
        
        <td align="center">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
        </td>
       
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
       <td> 
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Yes</label>
        </td>

        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" placeholder="         00%"/>
            <label for="vehicle1"> Yes</label>
        </td>     
      </tr>

      
 
    </tbody>
  </table>
</div>

<br/>
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
    <textarea  id="background_info24" name="background_info24" className="form-control"  style={{height: '100px'}} 
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
    <textarea  id="background_info25" name="background_info25" className="form-control"  style={{height: '150px'}} 
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
    <textarea  id="background_info26" name="background_info26" className="form-control"  style={{height: '300px'}} 
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
    <textarea  id="background_info27" name="background_info27" className="form-control"  style={{height: '150px'}} 
        onFocus={backgroundInfo_onFocus27}
        onBlur={backgroundInfo_onBlur27}
        placeholder={
`Record discussion with regard to nomination of beneficiaries or cessionaries.



`}  aria-describedby=""  ></textarea>
          </>
      )
}

export default AssuranceInvestment