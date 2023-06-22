import { Breadcrumbs } from '@material-ui/core';
import React, {useState} from 'react';
// import './Header.css';
function  Risk()
{
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

    return(

      <header style={ HeaderStyle }>
   <br/>
   <div className="text-start "style={{ color: "#14848A" ,fontSize:'36.66px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>RISK</b></div>
   <hr/>
        <h5 className="text-start " style={{ color: "#14848A"}} > <b>Financial Needs Analysis Summary</b></h5>  

        <table className="table">
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
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover: </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover:Lump sum</td>
      <td>
        <div >
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Death Cover: Income (p.m.)</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Funeral Benefit (p.m.)</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Disability Cover: </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Lump Sum</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Permanent Income (p.m.)</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Temporary Income (p.m.)</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Sickness Benefit</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


     <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
        <td>  
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>
       <td></td>  
       <td></td>
       <td></td>
       <td></td> 
     </tr> 


    <tr>
       {/* <th scope="row" style={{color:"#14848a"}}>1</th>  */}
      <td style={{color:"#14848a",fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease Cover: </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease:Lump Sum</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold'}} align="left">Dread Disease:Income(p.m)</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>

            </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr>
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Other</td>
      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>

      <td>
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
      </td>
    </tr>


    <tr> 
      <td style={{fontSize:'14px',fontFamily:'Arial Narrow Bold',fontWeight:'bold',color:'grey'}} align="left">Comments</td>
        <td>  
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
       <td></td>  
       <td></td>
       <td></td>
       <td></td>   
     </tr> 
    </tbody>
  </table>
        

  <h5 className="text-start " ><b>SECTION C:</b></h5> 
        <h6 className="text-start " style={{ color: "#14848A"}} ><b>Financial Solutions:</b></h6>
        
        <p className="text-start">Summary of recommendations to address your identified needs.</p>
        <p className="text-start"> No cash values are payable/accessible unless a specified event has occurred, i.e., the life event for which cover is taken; in which case the proceeds are payable tax-free. The premiums are not tax-deductible according to current legislation and loans against the policy are not permitted.</p>    
        <p className="text-start">Should the policy have an accelerator benefit attached, it means that upon a claim of that benefit the life cover amount will reduce by the claim amount. Standalone benefits are independent of the life cover, and you may claim without affecting the life cover amounts.</p>
        <p className="text-start"><u>Life Cover:</u></p>
        <p className="text-start">Policies payable to the estate will attract executors’ fees at a maximum of 3.5% + VAT. Where there is a beneficiary the executors fees will not be levied. Executors’ fees are applicable to all assets in the estate of a client and the exemption only applies to policies with beneficiaries. </p>
        <p className="text-start">Death benefits will not be paid where the life insured commits suicide within 2 years of commencement or reinstatement of the cover.</p>


        {
        backgroundInfoVisibility1 ? 
        <>
        <div id="background_info_instructions1" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info1" name="background_info1" className="form-control"  style={{height: '100px'}} 
        onFocus={backgroundInfo_onFocus1}
        onBlur={backgroundInfo_onBlur1}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        `}  aria-describedby=""  ></textarea>



<p className="text-start"><u>Disability Cover:</u></p>
{
        backgroundInfoVisibility2 ? 
        <>
        <div id="background_info_instructions2" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info2" name="background_info2" className="form-control"  style={{height: '100px'}} 
        onFocus={backgroundInfo_onFocus2}
        onBlur={backgroundInfo_onBlur2}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        `}  aria-describedby=""  ></textarea>




<p className="text-start"><u>Dread Disease Cover:</u></p>
{
        backgroundInfoVisibility3 ? 
        <>
        <div id="background_info_instructions3" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Explain the reasons why life cover benefits were recommended to satisfy this need.<br/>
                    Record the client's instructions, deviations and implications thereof.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info3" name="background_info3" className="form-control"  style={{height: '100px'}} 
        onFocus={backgroundInfo_onFocus3}
        onBlur={backgroundInfo_onBlur3}
        placeholder={`Explain the reasons why life cover benefits were recommended to satisfy this need. 
Record the client's instructions, deviations and implications thereof.
        `}  aria-describedby=""  ></textarea>


<h5 className="text-start " ><b>SECTION D:</b></h5> 
        <h6 className="text-start " style={{ color: "#14848A"}} ><b>Alternative Solutions Considered</b></h6>

        <p className="text-start">The following solutions were presented to you for consideration but were not selected for the following reasons:</p>

        {
        backgroundInfoVisibility4 ? 
        <>
        <div id="background_info_instructions4" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    1. Identify the type of product or product provider which was considered but not selected and motivate.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info4" name="background_info4" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus4}
        onBlur={backgroundInfo_onBlur4}
        placeholder={`1. Identify the type of product or product provider which was considered but not selected and motivate.
        `}  aria-describedby=""  ></textarea>
<br/>

    {
        backgroundInfoVisibility5 ? 
        <>
        <div id="background_info_instructions5" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    2. Identify the type of product or product provider which was considered but not selected and motivate.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info5" name="background_info5" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus5}
        onBlur={backgroundInfo_onBlur5}
        placeholder={`2. Identify the type of product or product provider which was considered but not selected and motivate.
        `}  aria-describedby=""  ></textarea>

    <br/>
    {
        backgroundInfoVisibility6 ? 
        <>
        <div id="background_info_instructions6" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    3. Identify the type of product or product provider which was considered but not selected and motivate.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info6" name="background_info6" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus6}
        onBlur={backgroundInfo_onBlur6}
        placeholder={`3. Identify the type of product or product provider which was considered but not selected and motivate.
        `}  aria-describedby=""  ></textarea>

<h5 className="text-start " ><b>SECTION E:</b></h5> 
        <h6 className="text-start " style={{ color: "#14848A"}} ><b>Product Taken</b></h6>

        <p className="text-start ">Products accepted by you to meet your requirements. </p> 


  <div className="container mt-3">          
  <table className="table">
    
    <tbody>
      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Product:</td>
        <td>  
        <div className="form-group">
            <input type="text" value="chilli" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
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
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Policy No:</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 

        <td></td> 
        
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium Pattern:</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Escalation in<br/>cover/premium</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 

        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Contracting Party:</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Life/Lives<br/>covered</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Beneficial/<br/>Cessionary</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Premium<br/>payer(s)</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">1st year<br/>commission</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">2nd year<br/>commission</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Ongoing fees</td>
        <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>  
       <td></td>
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Frequency</td>
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td> 
        <td></td> 
        <td></td>      
      </tr>

      

      <tr>
        <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start"></td>
         
       <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Total fees and commission</td>

       {/* <td style={{ fontSize:'16px',fontFamily:'Arial Narrow'}} align="start">Frequency</td> */}
       <td>  
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
        </div>
       </td>
       <td></td> 
       <td></td>
       <td></td>
              
      </tr>


      <tr>
        
      </tr>

     
    </tbody>
  </table>
</div>

<div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
        <div className="row">
            <div className="col-8" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-8">
                        <label className="col-form-label"><b>Benefit description: life cover, disability etc</b></label>
                    </div>
                </div>
            </div>

            <div className="col-4" style={{paddingBottom: "0.5%"}}>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
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


<p className="text-start">The following are reasons why the above-mentioned product best suits your needs and objectives</p>

{
        backgroundInfoVisibility7 ? 
        <>
        <div id="background_info_instructions7" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Motivate why the chosen product was recommended to best suit your client’s needs.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info7" name="background_info7" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus7}
        onBlur={backgroundInfo_onBlur7}
        placeholder={`Motivate why the chosen product was recommended to best suit your client’s needs.
        `}  aria-describedby=""  ></textarea>
<hr/>
<p className="text-start">The details of the material aspects of the selected product that were discussed with you are outlined below:</p>

    {
        backgroundInfoVisibility8 ? 
        <>
        <div id="background_info_instructions8" className="hidden_class">
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
    <textarea  id="background_info8" name="background_info8" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus8}
        onBlur={backgroundInfo_onBlur8}
        placeholder={`Explain any deviations from your recommendation and the implications thereof.
        `}  aria-describedby=""  ></textarea>

<br/>
    {
        backgroundInfoVisibility9 ? 
        <>
        <div id="background_info_instructions9" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?
                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info9" name="background_info9" className="form-control"  style={{height: '80px'}} 
        onFocus={backgroundInfo_onFocus9}
        onBlur={backgroundInfo_onBlur9}
        placeholder={`The tax implications, e.g., estate duty, income tax in the event of an Income Protector etc.?
        `}  aria-describedby=""  ></textarea>


    <br/>
    {
        backgroundInfoVisibility10 ? 
        <>
        <div id="background_info_instructions10" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Executor’s fees?<br/>
                    Does the policy offer any liquidity?<br/>
                    Provide a summary of the contents of the quote with regard to the following:<br/>
                    Benefit terms (cease ages, cover periods etc.)<br/>
                    Details of premium and cover pattern structure, frequency etc.

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info10" name="background_info10" className="form-control"  style={{height: '200px'}} 
        onFocus={backgroundInfo_onFocus10}
        onBlur={backgroundInfo_onBlur10}
        placeholder={`Executor’s fees?
Does the policy offer any liquidity?
Provide a summary of the contents of the quote with regard to the following:
Benefit terms (cease ages, cover periods etc.)
Details of premium and cover pattern structure, frequency etc.
        
        `}  aria-describedby=""  ></textarea>


<br/>
    {
        backgroundInfoVisibility11 ? 
        <>
        <div id="background_info_instructions11" className="hidden_class">
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
    <textarea  id="background_info11" name="background_info11" className="form-control"  style={{height: '100px'}} 
        onFocus={backgroundInfo_onFocus11}
        onBlur={backgroundInfo_onBlur11}
        placeholder={`Record discussion with regard to nomination of beneficiaries or cessionaries.
        
        `}  aria-describedby=""  ></textarea>


<br/>
    {
        backgroundInfoVisibility12 ? 
        <>
        <div id="background_info_instructions12" className="hidden_class">
            {/* <p>Discuss the outcome of the FNA</p><br /> */}
                <ul>
                    <li>
                    Discuss the following information which has been explained to client.<br/>
                    General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.)<br/>
                    Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)<br/>
                    Waiting periods<br/>
                    Cooling off period

                    </li>
                   
                </ul>
                
        </div>
        </>: 
         null
    }
    <textarea  id="background_info12" name="background_info12" className="form-control"  style={{height: '220px'}} 
        onFocus={backgroundInfo_onFocus12}
        onBlur={backgroundInfo_onBlur12}
        placeholder={`Discuss the following information which has been explained to client.
General exclusions of liability (i.e. benefit exclusions e.g. suicide clause on death, psychological conditions on disability, etc.)
Client-specific exclusions of liability (e.g. medical exclusions, pre-existing conditions, loadings)
Waiting periods
Cooling off period
        
        
        `}  aria-describedby=""  ></textarea>

        
        
  </header>
    )
}

export default Risk

const HeaderStyle = {
   width: "100%",
   height: "100vh",
  // background: `url(${BackgroundImage})`,
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover"
}