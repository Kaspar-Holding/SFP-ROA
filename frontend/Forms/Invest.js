import React, {useState} from 'react';
import './Invest.css';
 function  Invest()
 {
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
     return(
         <>
         <br/>
             <div class="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>INVESTMENT AND SAVINGS</b></div>
             <hr/>
             <h6 class="text-start " style={{ color: "#14848A"}} > <b>Source of Funds</b></h6>  
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
    <textarea  id="background_info10" name="background_info10" className="form-control"  style={{height: '100px'}} 
        onFocus={backgroundInfo_onFocus10}
        onBlur={backgroundInfo_onBlur10}
        placeholder={`Define Other Source of Funds.
        
        `}  aria-describedby=""  ></textarea>

 <br/>
 <h6 class="text-start " style={{ color: "#14848A"}} > <b>Analysis of Client's Circumstances</b></h6>
 <p class="text-start">The analysis of your personal circumstances as described above.</p> 


 <div className="col-6">
    <label htmlFor="client_name" className="col-form-label" title="If no, motivate"><b>Investment Requirements</b></label>
</div>

 <div className="col-6">
    <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.1 Investment term</label>
</div>

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
    <textarea  id="background_info11" name="background_info11" className="form-control"  style={{height: '100px'}} 
        onFocus={backgroundInfo_onFocus11}
        onBlur={backgroundInfo_onBlur11}
        placeholder={`Indicate the duration for which the client intends to maintain investment to meet his/her goals. Explain.
        
        `}  aria-describedby=""  ></textarea>



         <div className="row g-3 align-items-center">
            <div className="col-6">
                <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.2 Liquidity/Access required during term</label>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            //     null :
                <>
                    <div className="col-11" id="letter_of_introduction_2">
                    {/* {
                        letterOfIntroductionVisibility ?
                        <>
                            <div id="letter_of_introduction_instructions" className="hidden_class">
                                <p>Does the client require access to the investment during the term?</p>
                            </div>
                            </> :
                                null
                    } */}
                    <textarea  id="letter_of_introduction" name="letter_of_introduction" className="form-control" placeholder="Does the client require access to the investment during the term?" aria-describedby="" ></textarea>
                    </div>
                            </>
            }
        </div>

        <hr/>
        <div className="row g-3 align-items-center">
            <div className="col-6">
                <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.3 Voluntary or compulsory investment</label>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="row col-2 align-items-center">
                        <div className="col-2">
                            <input className="form-check-input" type="radio" value="0" id="authority_access_radio_btn" name="authority_access_radio_btn" />
                        </div>
                        <div className="col-2">
                            <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                Voluntary
                            </label>
                        </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="row col-2 align-items-center">
                        <div className="col-2">
                            <input className="form-check-input" type="radio" value="1" id="authority_access_radio_btn" name="authority_access_radio_btn" />
                        </div>
                        <div className="col-2">
                            <label className="form-check-label" htmlFor="authority_access_radio_btn" >
                                Compulsary
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {
                // letterOfIntroductionAccess ?
                //     null :
                    <>
                    <div className="col-11" id="authority_access_2" >
                    {/* {
                        letterOfIntroductionAccessVisibility ?
                        <>
                            <div id="authority_access_instructions" className="hidden_class">
                                <p>Explain</p>
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

        <div className="row g-3 align-items-center">
            <div className="col-6">
                <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.4 Lump sum or recurring premium</label>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="row col-2 align-items-center">
                        <div className="col-2">
                            <input className="form-check-input" type="radio" value="0" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                        </div>
                            <div className="col-2">
                                <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                    Lump Sum
                                </label>
                            </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="row col-2 align-items-center">
                        <div className="col-2">
                            <input className="form-check-input" type="radio" value="1" id="provided_identity_radio_btn" name="provided_identity_radio_btn"/>
                        </div>
                        <div className="col-2">
                            <label className="form-check-label" htmlFor="provided_identity_radio_btn" >
                                Recurring
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
                                <p>Notes</p>
                            </div>
                        </> : 
                        null
                    } */}
                        <textarea  id="provided_identity" name="provided_identity" className="form-control" placeholder="Notes" aria-describedby="" ></textarea>
                    </div>
                </>
            }
    </div>

    <hr/>
    <div className="row g-3 align-items-center">
            <div className="col-6">
                <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.5 Income Required</label>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <div className="col-11" id="provided_identity_3" >
                    {/* {
                         RicaVisibility ?
                         <>
                             <div id="provided_identity_instructions1" className="hidden_class">
                                 <p>Details of Income Required</p>
                             </div>
                         </> : 
                        null
                    } */}
                        <textarea  id="provided_identity1" name="provided_identity1" className="form-control" placeholder="Details of Income Required" aria-describedby="" ></textarea>
                    </div>
                </>
            }
    </div>
    <hr/>
    <div className="col-6">
        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.6 Investment Strategy</label>
     </div>

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
    <textarea  id="background_info1" name="background_info1" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus1}
        onBlur={backgroundInfo_onBlur1}
        placeholder={`Notes on discussion with client concerning the investment strategy.`}  aria-describedby=""  ></textarea>


<hr/>
    <div className="col-6">
        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.7 Return Required</label>
     </div>

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
    <textarea  id="background_info2" name="background_info2" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus2}
        onBlur={backgroundInfo_onBlur2}
        placeholder={
`Notes on discussion with client concerning return expectations.`}  aria-describedby=""  ></textarea>

<hr/>
    <div className="col-6">
        <label htmlFor="client_name" className="col-form-label" title="If no, motivate">2.8 Risk Profile</label>
     </div>

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
    <textarea  id="background_info3" name="background_info2" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus3}
        onBlur={backgroundInfo_onBlur3}
        placeholder={
`Notes on the client risk profile.`}  aria-describedby=""  ></textarea>






    <h5 class="text-start " ><b>SECTION C:</b></h5> 
    <h6 class="text-start " style={{ color: "#14848A"}} ><b>Financial Solutions:</b></h6>

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
    <textarea  id="background_info" name="background_info" className="form-control"  style={{height: '120px'}} 
        onFocus={backgroundInfo_onFocus}
        onBlur={backgroundInfo_onBlur}
        placeholder={
`Discuss the outcome of the FNA
 Qualification of need explaining the reasons why this type of investment vehicle was recommended
 How it will meet the client's needs
                        `}  aria-describedby=""  ></textarea>

<h5 class="text-start " ><b>SECTION D:</b></h5> 
<h6 class="text-start " style={{ color: "#14848A"}} ><b>Alternative Solutions Considered</b></h6>

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
    <textarea  id="background_info4" name="background_info4" className="form-control"  style={{height: '60px'}} 
        onFocus={backgroundInfo_onFocus4}
        onBlur={backgroundInfo_onBlur4}
        placeholder={
`1. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea>

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
    <textarea  id="background_info5" name="background_info5" className="form-control"  style={{height: '60px'}} 
        onFocus={backgroundInfo_onFocus5}
        onBlur={backgroundInfo_onBlur5}
        placeholder={
`2. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea>

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
    <textarea  id="background_info6" name="background_info6" className="form-control"  style={{height: '60px'}} 
        onFocus={backgroundInfo_onFocus6}
        onBlur={backgroundInfo_onBlur6}
        placeholder={
`3. Identify the type of product or product provider which was considered but not selected and motivate.. `}  aria-describedby=""  ></textarea>








<h5 class="text-start " ><b>SECTION E:</b></h5> 
<h6 class="text-start " style={{ color: "#14848A"}} ><b>Product Taken</b></h6>

<p>Products accepted by you to meet your requirements.</p>

<div class="container mt-3">          
  <table class="table">
    
    <tbody>
      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product:</td>
        <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
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
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Policy No:</td>
       <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td> 

        <td></td> 
        
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product Name:</td>
        <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium</td>
       <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td> 
        <td></td> 

        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Escalation:</td>
        <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Total estimated annual <br/>cost (EAC)</td>
       <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Contracting Party</td>
        <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Life/Lives assured</td>
       <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium Layer</td>
        <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td>  
       <td></td>
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Beneficiary / nominee</td>
       <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>
      <tr>
        
      <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Initial Commission</td>
        <td>  
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
        </div>
       </td>  
       <td><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%</td>
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Ongoing Commission</td>
       <td>  
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>
            </div>
       </td> 
        <td>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{width: '120px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%
            </div>
        </td> 
        <td>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Total" style={{width: '120px'}}/>
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
                            <input className="form-check-input" type="radio" value="0" id="provided_identity_radio_btn2" name="provided_identity_radio_btn2"/>
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
                    <div className="col-11" id="provided_identity_3" >
                    {/* {
                         SicaVisibility ?
                         <>
                             <div id="provided_identity_instructions2" className="hidden_class">
                                 <p>State the motivation</p>
                             </div>
                         </> : 
                        null
                    } */}
                        <textarea  id="provided_identity2" name="provided_identity2" className="form-control" placeholder="Explain" aria-describedby="" ></textarea>
                    </div>
                </>
            }
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
    <textarea  id="background_info7" name="background_info7" className="form-control"  style={{height: '400px'}} 
        onFocus={backgroundInfo_onFocus7}
        onBlur={backgroundInfo_onBlur7}
        placeholder={
`When a wrap fund or a selection of wrap funds is used, motivate, and explain.

Where you have constructed your own portfolio from a selection of funds contained in the SFP Approved Fund List, an analysis (ICE analysis or similar) must be provided:

illustrating the alignment of the risk profile of the constructed portfolio and that of the investor,

motivating the constructed portfolio with reference to the following aspects:

correlation;

drawdown;

portfolio return;

meeting the investment objectives of the clients `}  aria-describedby=""  ></textarea>

<br/>
<table class="table">
  <thead>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
      <td scope="col" align="center"><p>Fund Fact Sheets to client:</p></td> 
    
  </thead>
       
        
  </table>


<div class="container mt-3">          
  <table class="table">
    
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
            <label for="vehicle1"> No</label>
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
            <label for="vehicle1"> No</label>
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
            <label for="vehicle1"> No</label>
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
            <label for="vehicle1"> No</label>
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
            <label for="vehicle1"> No</label>
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
            <label for="vehicle1"> No</label>
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
            <label for="vehicle1"> No</label>
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
    <textarea  id="background_info9" name="background_info9" className="form-control"  style={{height: '400px'}} 
        onFocus={backgroundInfo_onFocus9}
        onBlur={backgroundInfo_onBlur9}
        placeholder={
`Fill this field if Non-standard Product is chosen, Record the client's instructions, deviations, and implications thereof
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


  



       

                </>
     )
 }

 export default Invest

