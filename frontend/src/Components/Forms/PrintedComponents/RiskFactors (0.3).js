
import { useLocation } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import './Invest.css';
 function  RiskFactors()
 {
        const getInitialState = () => {
        var value;
        return value;
        };
        const [value, setValue] = useState(getInitialState);
        const handleChange = (e) => {
        setValue(e.target.value);
      };


       const getInitialState1 = () => {
         var value1;
         return value1;
       };
       const [value1, setValue1] = useState(getInitialState1);
       const handleChange1 = (f) => {
         setValue1(f.target.value1);
       };


        const getInitialState5 = () => {
        var value;
        return value;
        };
        const [value5, setValue5] = useState(getInitialState5);
        const handleChange5 = (g) => {
        setValue5(g.target.value);
        };

        const getInitialState6 = () => {
            var value;
            return value;
        };
        const [value6, setValue6] = useState(getInitialState6);
        const handleChange6 = (g) => {
            setValue6(g.target.value);
        };

        const getInitialState7 = () => {
            var value;
            return value;
        };
        const [value7, setValue7] = useState(getInitialState7);
        const handleChange7 = (h) => {
            setValue7(h.target.value);
        };

        const getInitialState8 = () => {
            var value;
            return value;
        };
        const [value8, setValue8] = useState(getInitialState8);
        const handleChange8 = (i) => {
            setValue8(i.target.value);
        };

        const getInitialState9 = () => {
            var value;
            return value;
        };
        const [value9, setValue9] = useState(getInitialState9);
        const handleChange9 = (j) => {
            setValue9(j.target.value);
        };

        const getInitialState10 = () => {
            var value;
            return value;
        };
        const [value10, setValue10] = useState(getInitialState10);
        const handleChange10 = (k) => {
            setValue10(k.target.value);
        };

        const getInitialState11 = () => {
            var value;
            return value;
        };
        const [value11, setValue11] = useState(getInitialState11);
        const handleChange11 = (l) => {
            setValue11(l.target.value);
        };

        const getInitialState12 = () => {
            var value;
            return value;
        };
        const [value12, setValue12] = useState(getInitialState12);
        const handleChange12 = (m) => {
            setValue12(m.target.value);
        };

        const getInitialState13 = () => {
            var value;
            return value;
        };
        const [value13, setValue13] = useState(getInitialState13);
        const handleChange13 = (n) => {
            setValue13(n.target.value);
        };

        const getInitialState14 = () => {
            var value;
            return value;
        };
        const [value14, setValue14] = useState(getInitialState14);
        const handleChange14 = (o) => {
            setValue14(o.target.value);
        };

        const getInitialState15 = () => {
            var value;
            return value;
        };
        const [value15, setValue15] = useState(getInitialState15);
        const handleChange15 = (p) => {
            setValue15(p.target.value);
        };

        const getInitialState16 = () => {
            var value;
            return value;
        };
        const [value16, setValue16] = useState(getInitialState16);
        const handleChange16 = (q) => {
            setValue16(q.target.value);
        };

        const getInitialState17 = () => {
            var value;
            return value;
        };
        const [value17, setValue17] = useState(getInitialState17);
        const handleChange17 = (r) => {
            setValue17(r.target.value);
        };

        const getInitialState18 = () => {
            var value;
            return value;
        };
        const [value18, setValue18] = useState(getInitialState18);
        const handleChange18 = (s) => {
            setValue18(s.target.value);
        };

        const getInitialState19 = () => {
            var value;
            return value;
        };
        const [value19, setValue19] = useState(getInitialState19);
        const handleChange19 = (t) => {
            setValue19(t.target.value);
        };

        const getInitialState20 = () => {
            var value;
            return value;
        };
        const [value20, setValue20] = useState(getInitialState20);
        const handleChange20 = (u) => {
            setValue20(u.target.value);
        };

        const getInitialState21 = () => {
            var value;
            return value;
        };
        const [value21, setValue21] = useState(getInitialState21);
        const handleChange21 = (v) => {
            setValue21(v.target.value);
        };

        const getInitialState22 = () => {
            var value;
            return value;
        };
        const [value22, setValue22] = useState(getInitialState22);
        const handleChange22 = (w) => {
            setValue22(w.target.value);
        };

        const getInitialState23 = () => {
            var value;
            return value;
        };
        const [value23, setValue23] = useState(getInitialState23);
        const handleChange23 = (x) => {
            setValue23(x.target.value);
        };

        const getInitialState24 = () => {
            var value;
            return value;
        };
        const [value24, setValue24] = useState(getInitialState24);
        const handleChange24 = (y) => {
            setValue24(y.target.value);
        };

        const getInitialState25 = () => {
            var value;
            return value;
        };
        const [value25, setValue25] = useState(getInitialState25);
        const handleChange25 = (z) => {
            setValue25(z.target.value);
        };

        const getInitialState26 = () => {
            var value;
            return value;
        };
        const [value26, setValue26] = useState(getInitialState26);
        const handleChange26 = (a) => {
            setValue26(a.target.value);
        };

        const getInitialState27 = () => {
            var value;
            return value;
        };
        const [value27, setValue27] = useState(getInitialState27);
        const handleChange27 = (b) => {
            setValue27(b.target.value);
        };

        const getInitialState28 = () => {
            var value;
            return value;
        };
        const [value28, setValue28] = useState(getInitialState28);
        const handleChange28 = (c) => {
            setValue28(c.target.value);
        };

        const getInitialState29 = () => {
            var value;
            return value;
        };
        const [value29, setValue29] = useState(getInitialState29);
        const handleChange29 = (d) => {
            setValue29(d.target.value);
        };

        const getInitialState30 = () => {
            var value;
            return value;
        };
        const [value30, setValue30] = useState(getInitialState30);
        const handleChange30 = (e) => {
            setValue30(e.target.value);
        };

        const getInitialState31 = () => {
            var value;
            return value;
        };
        const [value31, setValue31] = useState(getInitialState31);
        const handleChange31 = (f) => {
            setValue31(f.target.value);
        };

        const getInitialState32 = () => {
            var value;
            return value;
        };
        const [value32, setValue32] = useState(getInitialState32);
        const handleChange32 = (f) => {
            setValue32(f.target.value);
        };

        const getInitialState33 = () => {
            var value;
            return value;
        };
        const [value33, setValue33] = useState(getInitialState33);
        const handleChange33 = (f) => {
            setValue33(f.target.value);
        };

        const getInitialState34 = () => {
            var value;
            return value;
        };
        const [value34, setValue34] = useState(getInitialState34);
        const handleChange34 = (f) => {
            setValue34(f.target.value);
        };

        const getInitialState35 = () => {
            var value;
            return value;
        };
        const [value35, setValue35] = useState(getInitialState35);
        const handleChange35 = (f) => {
            setValue35(f.target.value);
        };

        const getInitialState37 = () => {
            var value;
            return value;
        };
        const [value37, setValue37] = useState(getInitialState37);
        const handleChange37 = (f) => {
            setValue37(f.target.value);
        };

        const getInitialState38 = () => {
            var value;
            return value;
        };
        const [value38, setValue38] = useState(getInitialState38);
        const handleChange38 = (f) => {
            setValue38(f.target.value);
        };

        const location = useLocation();
        const { state } = location;


        const [errorData, setErrorData] = useState({
            status: "",
            message: ""
          })

          const [responseErrorVisibility, setResponseErrorVisibility] = useState("none")
          const [updateErrorData, setUpdateErrorData] = useState({
            status: "",
            message: ""
        })

        const [updateErrorVisibilty, setUpdateErrorVisibility] = useState("none")


    const [FormData, setFormData] = useState({
        
            advisorId : state['advisorId'],
            formId : state['formId'],
            
                
            RF_BU_Risk : "",
            RF_Date : "",
            RF_ClientName : "",
            RF_CompleteByName : "",
            RF_CompleteByName : "",
            RF_EventID : "",
            RF_CompleteByRole : "",

            RF_AdjustedRisk : "",
            RF_GCO_Risk : "",
            RF_Approvals : "",

            RF_ClientType : "1",
            RF_Occupation : "1",
            RF_CountryOfBirth : "0",
            RF_CountryOfResidence : "0",
            RF_Nationality : "0",
            RF_Different_Nationality : "0",
            RF_CountryOfTax : "0",
            RF_Industry : "0",
            RF_SourceOfFunds : "0",
            RF_RelationshipToClient : "0",
            RF_CountryOfRegistration : "0",
            RF_CountryOfOperation : "0",
            RF_Type_Legal_Entity : "0",
            RF_Industry : "0",
            RF_SourceOfFunds : "0",
            RF_Client_Relationship : "0",
            RF_Product_Name : "0",
            RF_Transaction_Flow : "0",
            RF_Transaction_Method : "0",
            RF_Transaction_Reason : "0",
            RF_High_Transaction_Reason : "0",
            RF_Transaction_Frequency : "0",
            RF_Transaction_Value : "0",
            RF_Currency_Value : "0",
            RF_Transaction_Geography : "0",
            RF_Funds_Jurisdiction : "0",
            RF_Delivery_Channel : "0",
            RF_Linked_Party_Acting : "0",
            RF_Linked_Party_Paying : "0",
            RF_Client_Match : "0",
            RF_Client_Beneficiaries : "0",
            RF_Adjust_Risk1 : "0",
            RF_Name : "",
            RF_ID : "",
            RF_Linked_Party : "0",
            RF_RCA : "0",
            RF_Birth_Country : "0",
            RF_Residence_Country : "0",
            RF_Nationality1 : "0",
            RF_Control1 : "",
            RF_Control2 : "",
            RF_Control3 : "",
            RF_Another_Control1 : "0",
            RF_Another_Control2 : "0",

            value : "",
            value1 : "",
            value5 : "",
            value6 : "",
            value7 : "",
            value8 : "",
            value9 : "",
            value10 : "",
            value11 : "",
            value12 : "",
            value13 : "",
            value14 : "",
            value15 : "",
            value16 : "",
            value17 : "",
            value18 : "",
            value19 : "",
            value20 : "",
            value21 : "",
            value22 : "",
            value23 : "",
            value24 : "",
            value25 : "",
            value26 : "",
            value27 : "",
            value28 : "",
            value29 : "",
            value30 : "",
            value31 : "",
            value32 : "",
            value33 : "",
            value34 : "",
            value35 : "",
            value36 : "",
            value37 : "",
            value38 : "",
           
    
 
    
        })    
        var val1;
        const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})

        const createRFForm = async(data) => {
            const config = {
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `JWT ${localStorage.getItem('access')}`
                }
            }
            const Body = JSON.stringify(data)
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_risk_data/`, Body ,config)
                // console.log(response.data['formData'])
                if (response.status === 201) {
                    setFormData(response.data['formData'])
                } else {
                    setFormData(response.data['formData'])
                }
                // setSubmissionMessageVisibility("block")
            } catch (error) {
                console.log(error)
                setErrorData({
                  status: error.response.status,
                  message: error.response.statusText
                })
                setResponseErrorVisibility("block")
            }
          }

            const [SuccessMessage, setSuccessMessage] = useState("")
            const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
    useEffect(() => {
        createRFForm(FormData)
        // setInterval(updateIPForm, 20000);
    }, []);

       
    


    return(
    <>
    
    
         <div class="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>RISK FACTORS</b></div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label className="col-form-label"><b>Business Unit Risk</b></label>
                        </div>
                        <div className="col-6">
                        <select disabled className="text-start form-select" id="RF_BU_Risk" name='RF_BU_Risk' value={FormData['RF_BU_Risk']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                            <option value="0" selected></option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            <option value="4">Intolerable</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="id_number" className="col-form-label"><b>Date</b></label>
                        </div>
                        <div className="col-6">
                            <input disabled  spellCheck="true" type="date" id="RF_Date" name="RF_Date" value={FormData['RF_Date']} className="form-control" onChange={(e) => {onChange(e)}} placeholder="Date"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <hr className="col-11" />
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="address" className="col-form-label"><b>Client Name</b></label>
                        </div>
                        <div className="col-6">
                            <input disabled  spellCheck="true"  id="RF_ClientName" name="RF_ClientName" value={FormData['RF_ClientName']} className="form-control" onChange={(e) => {onChange(e)}}  placeholder="Client Name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Completed By: Name</b></label>
                        </div>
                        <div className="col-6">
                            <input disabled  spellCheck="true"  id="RF_CompleteByName" name="RF_CompleteByName" value={FormData['RF_CompleteByName']} className="form-control" onChange={(e) => {onChange(e)}} placeholder="Name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <hr className="col-11" />
                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="address" className="col-form-label"><b>Screening Event ID</b></label>
                        </div>
                        <div className="col-6">
                            <input disabled  spellCheck="true"  id="RF_EventID" name="RF_EventID" value={FormData['RF_EventID']}  className="form-control" onChange={(e) => {onChange(e)}} placeholder="Event ID"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Completed By: Role/Designation</b></label>
                        </div>
                        <div className="col-6">
                            <input disabled  spellCheck="true"  id="RF_CompleteByRole" name="RF_CompleteByRole" value={FormData['RF_CompleteByRole']} className="form-control" onChange={(e) => {onChange(e)}} placeholder="Role/Designation"  aria-describedby="" />
                        </div>
                    </div>
                </div>
                <hr/>

            </div>
        </div>

        <br/>

                <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
                    <div className="row">

                
                        <div className="col-2">
                            <label className="col-form-label"><b>Overall Dynamic Risk:</b></label>
                        </div>
                    
                        <div className="col-2">
                        {(() => { 
            
                        if(FormData['RF_Client_Match']===1)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Medium</b></label>
                                </div>

                            </>);
                        }

                        if(FormData['RF_Client_Match']===2 || FormData['RF_Client_Match']===5 || FormData['RF_Client_Match']===8 || FormData['RF_Client_Match']===11)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>High</b></label>
                                </div>

                            </>);
                        }

                        if(FormData['RF_Client_Match']===3 || FormData['RF_Client_Match']===6)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Low</b></label>
                                </div>

                            </>);
                        }

                        if(FormData['RF_Client_Match']===4 || FormData['RF_Client_Match']===7)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Medium</b></label>
                                </div>

                            </>);
                        }

                        if(FormData['RF_Client_Match']===9 || FormData['RF_Client_Match']===10) 
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Intolerable</b></label>
                                </div>

                            </>);
                        }

                        else
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Undetermined</b></label>
                                </div>

                            </>);
                        }
                        })()}
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"><b>Adjusted Risk:</b></label>
                        </div>

                        <div className="col-2">
                        <select disabled className="text-start form-select" name='RF_AdjustedRisk' id='RF_AdjustedRisk' value={FormData['RF_AdjustedRisk']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                            <option value="0" selected></option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            <option value="4">Intolerable</option>
                        </select>  
                        </div>
 
                        <div className="col-2">
                            <label className="col-form-label"><b>Approvals?</b></label>
                        </div>

                        <div className="col-2"> 
                            <select disabled className="text-start form-select" name='RF_Approvals' id='RF_Approvals' value={FormData['RF_Approvals']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>  
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        
                        <hr/>
                       
            </div>
        </div>

        
        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

            <div className="col-8">
                {(() => { 
                        
                       if(value===1)
                       {
                           return (<>
                               
                                <label className="col-form-label">The adjusted risk to be approved by Sanlam Entity Senior Management. All evidence and signatories motivating the risk adjustment to be attached to the client records. Insufficient approval / evidence is subject to disciplinary action.</label>
                               
                           </>);
                       }

                       else{
                        return (<>
                            
                            <label className="col-form-label"></label>
                        
                            </>);
                        }
                       
                })()}

            </div>

                
                <div className="col-1">
                    <label className="col-form-label"><b>Score</b></label>
                </div>

                <div className="col-1">
                    <label className="col-form-label"><b>Weight</b></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"><b>Risk Factor</b></label>
                </div>

            </div>
        </div>
        <hr/>
                
        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label"><b>A. Client Risk</b></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label">Adjust Risk on GCO Approval</label>
                </div>

                <div className="col-2">
                    <select disabled className="text-start form-select" name='RF_GCO_Risk' id='RF_GCO_Risk' value={FormData['RF_GCO_Risk']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                        <option value3="0" selected></option>
                        <option value3="1">Low</option>
                        <option value3="2">Medium</option>
                        <option value3="3">High</option>
                        <option value3="4">Intolerable</option>
                    </select>  
                </div>

                <div className="col-1">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-1">
                    <label className="col-form-label"></label>
                </div>
                
                <div className="col-2">
                {(() => { 
                                var val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11
                                
                                
                                if(FormData['RF_Occupation']==="1" || FormData['RF_Occupation']==="2" || FormData['RF_Occupation']==="3" || FormData['RF_Occupation']==="5")
                                {
                                    val1=1
                                    
                                } 
                                
                                else if(FormData['RF_Occupation']==="4" || FormData['RF_Occupation']==="6")
                                {
                                    val1=3
                                   
                                }
                               

                                if(
                                    FormData['RF_CountryOfBirth']==="1" || FormData['RF_CountryOfBirth']==="2" || FormData['RF_CountryOfBirth']==="3" || FormData['RF_CountryOfBirth']==="4" || FormData['RF_CountryOfBirth']==="6" || FormData['RF_CountryOfBirth']==="8" || FormData['RF_CountryOfBirth']==="10" || FormData['RF_CountryOfBirth']==="13" || FormData['RF_CountryOfBirth']==="16" || FormData['RF_CountryOfBirth']==="17" || FormData['RF_CountryOfBirth']==="19" || FormData['RF_CountryOfBirth']==="20" || FormData['RF_CountryOfBirth']==="24"
                                 || FormData['RF_CountryOfBirth']==="27" || FormData['RF_CountryOfBirth']==="28" || FormData['RF_CountryOfBirth']==="29" || FormData['RF_CountryOfBirth']==="30" || FormData['RF_CountryOfBirth']==="31" || FormData['RF_CountryOfBirth']==="32" || FormData['RF_CountryOfBirth']==="33" || FormData['RF_CountryOfBirth']==="36" || FormData['RF_CountryOfBirth']==="37" || FormData['RF_CountryOfBirth']==="39" || FormData['RF_CountryOfBirth']==="41" || FormData['RF_CountryOfBirth']==="42" || FormData['RF_CountryOfBirth']==="43"
                                 || FormData['RF_CountryOfBirth']==="46" || FormData['RF_CountryOfBirth']==="47" || FormData['RF_CountryOfBirth']==="48" || FormData['RF_CountryOfBirth']==="49" || FormData['RF_CountryOfBirth']==="50" || FormData['RF_CountryOfBirth']==="51" || FormData['RF_CountryOfBirth']==="52" || FormData['RF_CountryOfBirth']==="53" || FormData['RF_CountryOfBirth']==="55" || FormData['RF_CountryOfBirth']==="58" || FormData['RF_CountryOfBirth']==="62" || FormData['RF_CountryOfBirth']==="64" || FormData['RF_CountryOfBirth']==="65" || FormData['RF_CountryOfBirth']==="66" 
                                 || FormData['RF_CountryOfBirth']==="67" || FormData['RF_CountryOfBirth']==="68" || FormData['RF_CountryOfBirth']==="69" || FormData['RF_CountryOfBirth']==="70" || FormData['RF_CountryOfBirth']==="71" || FormData['RF_CountryOfBirth']==="72" || FormData['RF_CountryOfBirth']==="73" || FormData['RF_CountryOfBirth']==="74" || FormData['RF_CountryOfBirth']==="82" || FormData['RF_CountryOfBirth']==="85" || FormData['RF_CountryOfBirth']==="86" || FormData['RF_CountryOfBirth']==="90" || FormData['RF_CountryOfBirth']==="91" || FormData['RF_CountryOfBirth']==="92" || FormData['RF_CountryOfBirth']==="93"
                                 || FormData['RF_CountryOfBirth']==="94" || FormData['RF_CountryOfBirth']==="95" || FormData['RF_CountryOfBirth']==="96" || FormData['RF_CountryOfBirth']==="97" || FormData['RF_CountryOfBirth']==="98" || FormData['RF_CountryOfBirth']==="99" || FormData['RF_CountryOfBirth']==="100" || FormData['RF_CountryOfBirth']==="102" || FormData['RF_CountryOfBirth']==="103"
                                 
                                 || FormData['RF_CountryOfBirth']==="109"  || FormData['RF_CountryOfBirth']==="112"  || FormData['RF_CountryOfBirth']==="115"  || FormData['RF_CountryOfBirth']==="116"  || FormData['RF_CountryOfBirth']==="117"  || FormData['RF_CountryOfBirth']==="121"  || FormData['RF_CountryOfBirth']==="123"  || FormData['RF_CountryOfBirth']==="124"
                                 || FormData['RF_CountryOfBirth']==="126"  || FormData['RF_CountryOfBirth']==="127"  || FormData['RF_CountryOfBirth']==="128"  || FormData['RF_CountryOfBirth']==="129"  || FormData['RF_CountryOfBirth']==="134"  || FormData['RF_CountryOfBirth']==="135"  || FormData['RF_CountryOfBirth']==="136"
                                 || FormData['RF_CountryOfBirth']==="139"  || FormData['RF_CountryOfBirth']==="143"  || FormData['RF_CountryOfBirth']==="145"  || FormData['RF_CountryOfBirth']==="146"  || FormData['RF_CountryOfBirth']==="148"  || FormData['RF_CountryOfBirth']==="150" || FormData['RF_CountryOfBirth']==="151"
                                 || FormData['RF_CountryOfBirth']==="152" || FormData['RF_CountryOfBirth']==="153" || FormData['RF_CountryOfBirth']==="154" || FormData['RF_CountryOfBirth']==="155" || FormData['RF_CountryOfBirth']==="158" || FormData['RF_CountryOfBirth']==="160" || FormData['RF_CountryOfBirth']==="162" 
                                 || FormData['RF_CountryOfBirth']==="163" || FormData['RF_CountryOfBirth']==="164" || FormData['RF_CountryOfBirth']==="165" || FormData['RF_CountryOfBirth']==="166" || FormData['RF_CountryOfBirth']==="168" || FormData['RF_CountryOfBirth']==="170" || FormData['RF_CountryOfBirth']==="172" || FormData['RF_CountryOfBirth']==="173" || FormData['RF_CountryOfBirth']==="174" || FormData['RF_CountryOfBirth']==="175" || FormData['RF_CountryOfBirth']==="176" || FormData['RF_CountryOfBirth']==="177"
                                 || FormData['RF_CountryOfBirth']==="186" || FormData['RF_CountryOfBirth']==="187" || FormData['RF_CountryOfBirth']==="188" || FormData['RF_CountryOfBirth']==="190" || FormData['RF_CountryOfBirth']==="191" || FormData['RF_CountryOfBirth']==="193" || FormData['RF_CountryOfBirth']==="195"
                                 || FormData['RF_CountryOfBirth']==="197" || FormData['RF_CountryOfBirth']==="198" || FormData['RF_CountryOfBirth']==="200" || FormData['RF_CountryOfBirth']==="202" || FormData['RF_CountryOfBirth']==="203" || FormData['RF_CountryOfBirth']==="206" || FormData['RF_CountryOfBirth']==="208" || FormData['RF_CountryOfBirth']==="209"
                                 || FormData['RF_CountryOfBirth']==="211" || FormData['RF_CountryOfBirth']==="212" || FormData['RF_CountryOfBirth']==="213" || FormData['RF_CountryOfBirth']==="214" || FormData['RF_CountryOfBirth']==="219" || FormData['RF_CountryOfBirth']==="220" || FormData['RF_CountryOfBirth']==="221" || FormData['RF_CountryOfBirth']==="222" || FormData['RF_CountryOfBirth']==="223" || FormData['RF_CountryOfBirth']==="224"
                                 || FormData['RF_CountryOfBirth']==="226" || FormData['RF_CountryOfBirth']==="230" || FormData['RF_CountryOfBirth']==="232" || FormData['RF_CountryOfBirth']==="233" || FormData['RF_CountryOfBirth']==="236" || FormData['RF_CountryOfBirth']==="237" || FormData['RF_CountryOfBirth']==="238" || FormData['RF_CountryOfBirth']==="239")
                                {
                                    val2=9
                                    
                                }

                                else if(FormData['RF_CountryOfBirth']==="5" || FormData['RF_CountryOfBirth']==="7" || FormData['RF_CountryOfBirth']==="9" || FormData['RF_CountryOfBirth']==="12" || FormData['RF_CountryOfBirth']==="25" || FormData['RF_CountryOfBirth']==="34" || FormData['RF_CountryOfBirth']==="35" || FormData['RF_CountryOfBirth']==="61" || FormData['RF_CountryOfBirth']==="76" || FormData['RF_CountryOfBirth']==="84" || FormData['RF_CountryOfBirth']==="88"
                                
                                || FormData['RF_CountryOfBirth']==="114" || FormData['RF_CountryOfBirth']==="130" || FormData['RF_CountryOfBirth']==="132" || FormData['RF_CountryOfBirth']==="142" || FormData['RF_CountryOfBirth']==="149" || FormData['RF_CountryOfBirth']==="159" || FormData['RF_CountryOfBirth']==="161" 
                                || FormData['RF_CountryOfBirth']==="167" || FormData['RF_CountryOfBirth']==="194" || FormData['RF_CountryOfBirth']==="215" || FormData['RF_CountryOfBirth']==="216")
                            {
                                val2=3
                            }

                            else if(FormData['RF_CountryOfBirth']==="11" || FormData['RF_CountryOfBirth']==="14" || FormData['RF_CountryOfBirth']==="15" || FormData['RF_CountryOfBirth']==="18" || FormData['RF_CountryOfBirth']==="22" || FormData['RF_CountryOfBirth']==="23" || FormData['RF_CountryOfBirth']==="26" || FormData['RF_CountryOfBirth']==="30" || FormData['RF_CountryOfBirth']==="38" || FormData['RF_CountryOfBirth']==="40"
                                || FormData['RF_CountryOfBirth']==="44" || FormData['RF_CountryOfBirth']==="45" || FormData['RF_CountryOfBirth']==="54" || FormData['RF_CountryOfBirth']==="56" || FormData['RF_CountryOfBirth']==="59" || FormData['RF_CountryOfBirth']==="60" || FormData['RF_CountryOfBirth']==="63" || FormData['RF_CountryOfBirth']==="70" || FormData['RF_CountryOfBirth']==="75" || FormData['RF_CountryOfBirth']==="77" 
                                || FormData['RF_CountryOfBirth']==="78" || FormData['RF_CountryOfBirth']==="79" || FormData['RF_CountryOfBirth']==="80" || FormData['RF_CountryOfBirth']==="81" || FormData['RF_CountryOfBirth']==="83" || FormData['RF_CountryOfBirth']==="87" || FormData['RF_CountryOfBirth']==="89" || FormData['RF_CountryOfBirth']==="96" || FormData['RF_CountryOfBirth']==="97" || FormData['RF_CountryOfBirth']==="98" 
                                || FormData['RF_CountryOfBirth']==="99" || FormData['RF_CountryOfBirth']==="100" || FormData['RF_CountryOfBirth']==="101" || FormData['RF_CountryOfBirth']==="102" || FormData['RF_CountryOfBirth']==="104" || FormData['RF_CountryOfBirth']==="105"
                                || FormData['RF_CountryOfBirth']==="108" || FormData['RF_CountryOfBirth']==="110" || FormData['RF_CountryOfBirth']==="111" || FormData['RF_CountryOfBirth']==="113" || FormData['RF_CountryOfBirth']==="118" || FormData['RF_CountryOfBirth']==="120" || FormData['RF_CountryOfBirth']==="125"
                                || FormData['RF_CountryOfBirth']==="131" || FormData['RF_CountryOfBirth']==="133" ||  FormData['RF_CountryOfBirth']==="137" || FormData['RF_CountryOfBirth']==="138" || FormData['RF_CountryOfBirth']==="140" || FormData['RF_CountryOfBirth']==="141"
                                || FormData['RF_CountryOfBirth']==="144" || FormData['RF_CountryOfBirth']==="147" || FormData['RF_CountryOfBirth']==="156" || FormData['RF_CountryOfBirth']==="157" || FormData['RF_CountryOfBirth']==="169" || FormData['RF_CountryOfBirth']==="171" || FormData['RF_CountryOfBirth']==="178" || FormData['RF_CountryOfBirth']==="179" || FormData['RF_CountryOfBirth']==="180" || FormData['RF_CountryOfBirth']==="181" || FormData['RF_CountryOfBirth']==="182" || FormData['RF_CountryOfBirth']==="183"
                                || FormData['RF_CountryOfBirth']==="185" || FormData['RF_CountryOfBirth']==="189" || FormData['RF_CountryOfBirth']==="192" || FormData['RF_CountryOfBirth']==="196" || FormData['RF_CountryOfBirth']==="199" || FormData['RF_CountryOfBirth']==="201" || FormData['RF_CountryOfBirth']==="204" || FormData['RF_CountryOfBirth']==="205"
                                || FormData['RF_CountryOfBirth']==="207" || FormData['RF_CountryOfBirth']==="210" || FormData['RF_CountryOfBirth']==="218" || FormData['RF_CountryOfBirth']==="225" || FormData['RF_CountryOfBirth']==="231" || FormData['RF_CountryOfBirth']==="234" || FormData['RF_CountryOfBirth']==="235" || FormData['RF_CountryOfBirth']==="237" || FormData['RF_CountryOfBirth']==="238")
                            {
                                val2=6
                            }

                            else if(FormData['RF_CountryOfBirth']==="21" || FormData['RF_CountryOfBirth']==="57" || FormData['RF_CountryOfBirth']==="106" || FormData['RF_CountryOfBirth']==="107" || FormData['RF_CountryOfBirth']==="119" || FormData['RF_CountryOfBirth']==="187" || FormData['RF_CountryOfBirth']==="217")
                            {
                                val2=12
                            }
    
                            if(FormData['RF_CountryOfResidence']===1 || FormData['RF_CountryOfResidence']===2 || FormData['RF_CountryOfResidence']===3 || FormData['RF_CountryOfResidence']===4 || FormData['RF_CountryOfResidence']===6 || FormData['RF_CountryOfResidence']===8 || FormData['RF_CountryOfResidence']===10 || FormData['RF_CountryOfResidence']===13 || FormData['RF_CountryOfResidence']===16 || FormData['RF_CountryOfResidence']===17 || FormData['RF_CountryOfResidence']===19 || FormData['RF_CountryOfResidence']===20 || FormData['RF_CountryOfResidence']===24
                            || FormData['RF_CountryOfResidence']===27 || FormData['RF_CountryOfResidence']===28 || FormData['RF_CountryOfResidence']===29 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===31 || FormData['RF_CountryOfResidence']===32 || FormData['RF_CountryOfResidence']===33 || FormData['RF_CountryOfResidence']===36 || FormData['RF_CountryOfResidence']===37 || FormData['RF_CountryOfResidence']===39 || FormData['RF_CountryOfResidence']===41 || FormData['RF_CountryOfResidence']===42 || FormData['RF_CountryOfResidence']===43
                            || FormData['RF_CountryOfResidence']===46 || FormData['RF_CountryOfResidence']===47 || FormData['RF_CountryOfResidence']===48 || FormData['RF_CountryOfResidence']===49 || FormData['RF_CountryOfResidence']===50 || FormData['RF_CountryOfResidence']===51 || FormData['RF_CountryOfResidence']===52 || FormData['RF_CountryOfResidence']===53 || FormData['RF_CountryOfResidence']===55 || FormData['RF_CountryOfResidence']===58 || FormData['RF_CountryOfResidence']===62 || FormData['RF_CountryOfResidence']===64 || FormData['RF_CountryOfResidence']===65 || FormData['RF_CountryOfResidence']===66 
                            || FormData['RF_CountryOfResidence']===67 || FormData['RF_CountryOfResidence']===68 || FormData['RF_CountryOfResidence']===69 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===71 || FormData['RF_CountryOfResidence']===72 || FormData['RF_CountryOfResidence']===73 || FormData['RF_CountryOfResidence']===74 || FormData['RF_CountryOfResidence']===82 || FormData['RF_CountryOfResidence']===85 || FormData['RF_CountryOfResidence']===86 || FormData['RF_CountryOfResidence']===90 || FormData['RF_CountryOfResidence']===91 || FormData['RF_CountryOfResidence']===92 || FormData['RF_CountryOfResidence']===93
                            || FormData['RF_CountryOfResidence']===94 || FormData['RF_CountryOfResidence']===95 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===103
                            
                            || FormData['RF_CountryOfResidence']===109  || FormData['RF_CountryOfResidence']===112  || FormData['RF_CountryOfResidence']===115  || FormData['RF_CountryOfResidence']===116  || FormData['RF_CountryOfResidence']===117  || FormData['RF_CountryOfResidence']===121  || FormData['RF_CountryOfResidence']===123  || FormData['RF_CountryOfResidence']===124
                            || FormData['RF_CountryOfResidence']===126  || FormData['RF_CountryOfResidence']===127  || FormData['RF_CountryOfResidence']===128  || FormData['RF_CountryOfResidence']===129  || FormData['RF_CountryOfResidence']===134  || FormData['RF_CountryOfResidence']===135  || FormData['RF_CountryOfResidence']===136
                            || FormData['RF_CountryOfResidence']===139  || FormData['RF_CountryOfResidence']===143  || FormData['RF_CountryOfResidence']===145  || FormData['RF_CountryOfResidence']===146  || FormData['RF_CountryOfResidence']===148  || FormData['RF_CountryOfResidence']===150 || FormData['RF_CountryOfResidence']===151
                            || FormData['RF_CountryOfResidence']===152 || FormData['RF_CountryOfResidence']===153 || FormData['RF_CountryOfResidence']===154 || FormData['RF_CountryOfResidence']===155 || FormData['RF_CountryOfResidence']===158 || FormData['RF_CountryOfResidence']===160 || FormData['RF_CountryOfResidence']===162 
                            || FormData['RF_CountryOfResidence']===163 || FormData['RF_CountryOfResidence']===164 || FormData['RF_CountryOfResidence']===165 || FormData['RF_CountryOfResidence']===166 || FormData['RF_CountryOfResidence']===168 || FormData['RF_CountryOfResidence']===170 || FormData['RF_CountryOfResidence']===172 || FormData['RF_CountryOfResidence']===173 || FormData['RF_CountryOfResidence']===174 || FormData['RF_CountryOfResidence']===175 || FormData['RF_CountryOfResidence']===176 || FormData['RF_CountryOfResidence']===177
                            || FormData['RF_CountryOfResidence']===186 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===188 || FormData['RF_CountryOfResidence']===190 || FormData['RF_CountryOfResidence']===191 || FormData['RF_CountryOfResidence']===193 || FormData['RF_CountryOfResidence']===195
                            || FormData['RF_CountryOfResidence']===197 || FormData['RF_CountryOfResidence']===198 || FormData['RF_CountryOfResidence']===200 || FormData['RF_CountryOfResidence']===202 || FormData['RF_CountryOfResidence']===203 || FormData['RF_CountryOfResidence']===206 || FormData['RF_CountryOfResidence']===208 || FormData['RF_CountryOfResidence']===209
                            || FormData['RF_CountryOfResidence']===211 || FormData['RF_CountryOfResidence']===212 || FormData['RF_CountryOfResidence']===213 || FormData['RF_CountryOfResidence']===214 || FormData['RF_CountryOfResidence']===219 || FormData['RF_CountryOfResidence']===220 || FormData['RF_CountryOfResidence']===221 || FormData['RF_CountryOfResidence']===222 || FormData['RF_CountryOfResidence']===223 || FormData['RF_CountryOfResidence']===224
                            || FormData['RF_CountryOfResidence']===226 || FormData['RF_CountryOfResidence']===230 || FormData['RF_CountryOfResidence']===232 || FormData['RF_CountryOfResidence']===233 || FormData['RF_CountryOfResidence']===236 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238 || FormData['RF_CountryOfResidence']===239)
                        {
                           val3=9
                        }

                        else if(FormData['RF_CountryOfResidence']===5 || FormData['RF_CountryOfResidence']===7 || FormData['RF_CountryOfResidence']===9 || FormData['RF_CountryOfResidence']===12 || FormData['RF_CountryOfResidence']===25 || FormData['RF_CountryOfResidence']===34 || FormData['RF_CountryOfResidence']===35 || FormData['RF_CountryOfResidence']===61 || FormData['RF_CountryOfResidence']===76 || FormData['RF_CountryOfResidence']===84|| FormData['RF_CountryOfResidence']===88
                            
                            || FormData['RF_CountryOfResidence']===114 || FormData['RF_CountryOfResidence']===130 || FormData['RF_CountryOfResidence']===132 || FormData['RF_CountryOfResidence']===142 || FormData['RF_CountryOfResidence']===149 || FormData['RF_CountryOfResidence']===159 || FormData['RF_CountryOfResidence']===161 
                            || FormData['RF_CountryOfResidence']===167 || FormData['RF_CountryOfResidence']===194 || FormData['RF_CountryOfResidence']===215 || FormData['RF_CountryOfResidence']===216)
                        {
                            val3=3
                        }

                        else if(FormData['RF_CountryOfResidence']===11 || FormData['RF_CountryOfResidence']===14 || FormData['RF_CountryOfResidence']===15 || FormData['RF_CountryOfResidence']===18 || FormData['RF_CountryOfResidence']===22 || FormData['RF_CountryOfResidence']===23 || FormData['RF_CountryOfResidence']===26 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===38 || FormData['RF_CountryOfResidence']===40
                            || FormData['RF_CountryOfResidence']===44 || FormData['RF_CountryOfResidence']===45 || FormData['RF_CountryOfResidence']===54 || FormData['RF_CountryOfResidence']===56 || FormData['RF_CountryOfResidence']===59 || FormData['RF_CountryOfResidence']===60 || FormData['RF_CountryOfResidence']===63 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===75 || FormData['RF_CountryOfResidence']===77 
                            || FormData['RF_CountryOfResidence']===78 || FormData['RF_CountryOfResidence']===79 || FormData['RF_CountryOfResidence']===80 || FormData['RF_CountryOfResidence']===81 || FormData['RF_CountryOfResidence']===83 || FormData['RF_CountryOfResidence']===87 || FormData['RF_CountryOfResidence']===89 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 
                            || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===101 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===104 || FormData['RF_CountryOfResidence']===105
                            
                            || FormData['RF_CountryOfResidence']===108 || FormData['RF_CountryOfResidence']===110 || FormData['RF_CountryOfResidence']===111 || FormData['RF_CountryOfResidence']===113 || FormData['RF_CountryOfResidence']===118 || FormData['RF_CountryOfResidence']===120 || FormData['RF_CountryOfResidence']===125
                            || FormData['RF_CountryOfResidence']===131 || FormData['RF_CountryOfResidence']===133 ||  FormData['RF_CountryOfResidence']===137 || FormData['RF_CountryOfResidence']===138 || FormData['RF_CountryOfResidence']===140 || FormData['RF_CountryOfResidence']===141
                            || FormData['RF_CountryOfResidence']===144 || FormData['RF_CountryOfResidence']===147 || FormData['RF_CountryOfResidence']===156 || FormData['RF_CountryOfResidence']===157 || FormData['RF_CountryOfResidence']===169 || FormData['RF_CountryOfResidence']===171 || FormData['RF_CountryOfResidence']===178 || FormData['RF_CountryOfResidence']===179 || FormData['RF_CountryOfResidence']===180 || FormData['RF_CountryOfResidence']===181 || FormData['RF_CountryOfResidence']===182 || FormData['RF_CountryOfResidence']===183
                            || FormData['RF_CountryOfResidence']===185 || FormData['RF_CountryOfResidence']===189 || FormData['RF_CountryOfResidence']===192 || FormData['RF_CountryOfResidence']===196 || FormData['RF_CountryOfResidence']===199 || FormData['RF_CountryOfResidence']===201 || FormData['RF_CountryOfResidence']===204 || FormData['RF_CountryOfResidence']===205
                            || FormData['RF_CountryOfResidence']===207 || FormData['RF_CountryOfResidence']===210 || FormData['RF_CountryOfResidence']===218 || FormData['RF_CountryOfResidence']===225 || FormData['RF_CountryOfResidence']===231 || FormData['RF_CountryOfResidence']===234 || FormData['RF_CountryOfResidence']===235 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238)
                        {
                            val3=6
                        }

                        else if(FormData['RF_CountryOfResidence']===21 || FormData['RF_CountryOfResidence']===57 || FormData['RF_CountryOfResidence']===106 || FormData['RF_CountryOfResidence']===107 || FormData['RF_CountryOfResidence']===119 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===217)
                        {
                            val3=12
                        }

                        if(FormData['RF_Nationality']===1 || FormData['RF_Nationality']===2 || FormData['RF_Nationality']===3 || FormData['RF_Nationality']===4 || FormData['RF_Nationality']===6 || FormData['RF_Nationality']===8 || FormData['RF_Nationality']===10 || FormData['RF_Nationality']===13 || FormData['RF_Nationality']===16 || FormData['RF_Nationality']===17 || FormData['RF_Nationality']===19 || FormData['RF_Nationality']===20 || FormData['RF_Nationality']===24
                        || FormData['RF_Nationality']===27 || FormData['RF_Nationality']===28 || FormData['RF_Nationality']===29 || FormData['RF_Nationality']===30 || FormData['RF_Nationality']===31 || FormData['RF_Nationality']===32 || FormData['RF_Nationality']===33 || FormData['RF_Nationality']===36 || FormData['RF_Nationality']===37 || FormData['RF_Nationality']===39 || FormData['RF_Nationality']===41 || FormData['RF_Nationality']===42 || FormData['RF_Nationality']===43
                        || FormData['RF_Nationality']===46 || FormData['RF_Nationality']===47 || FormData['RF_Nationality']===48 || FormData['RF_Nationality']===49 || FormData['RF_Nationality']===50 || FormData['RF_Nationality']===51 || FormData['RF_Nationality']===52 || FormData['RF_Nationality']===53 || FormData['RF_Nationality']===55 || FormData['RF_Nationality']===58 || FormData['RF_Nationality']===62 || FormData['RF_Nationality']===64 || FormData['RF_Nationality']===65 || FormData['RF_Nationality']===66 
                        || FormData['RF_Nationality']===67 || FormData['RF_Nationality']===68 || FormData['RF_Nationality']===69 || FormData['RF_Nationality']===70 || FormData['RF_Nationality']===71 || FormData['RF_Nationality']===72 || FormData['RF_Nationality']===73 || FormData['RF_Nationality']===74 || FormData['RF_Nationality']===82 || FormData['RF_Nationality']===85 || FormData['RF_Nationality']===86 || FormData['RF_Nationality']===90 || FormData['RF_Nationality']===91 || FormData['RF_Nationality']===92 || FormData['RF_Nationality']===93
                        || FormData['RF_Nationality']===94 || FormData['RF_Nationality']===95 || FormData['RF_Nationality']===96 || FormData['RF_Nationality']===97 || FormData['RF_Nationality']===98 || FormData['RF_Nationality']===99 || FormData['RF_Nationality']===100 || FormData['RF_Nationality']===102 || FormData['RF_Nationality']===103
                        
                        || FormData['RF_Nationality']===109  || FormData['RF_Nationality']===112  || FormData['RF_Nationality']===115  || FormData['RF_Nationality']===116  || FormData['RF_Nationality']===117  || FormData['RF_Nationality']===121  || FormData['RF_Nationality']===123  || FormData['RF_Nationality']===124
                        || FormData['RF_Nationality']===126  || FormData['RF_Nationality']===127  || FormData['RF_Nationality']===128  || FormData['RF_Nationality']===129  || FormData['RF_Nationality']===134  || FormData['RF_Nationality']===135  || FormData['RF_Nationality']===136
                        || FormData['RF_Nationality']===139  || FormData['RF_Nationality']===143  || FormData['RF_Nationality']===145  || FormData['RF_Nationality']===146  || FormData['RF_Nationality']===148  || FormData['RF_Nationality']===150 || FormData['RF_Nationality']===151
                        || FormData['RF_Nationality']===152 || FormData['RF_Nationality']===153 || FormData['RF_Nationality']===154 || FormData['RF_Nationality']===155 || FormData['RF_Nationality']===158 || FormData['RF_Nationality']===160 || FormData['RF_Nationality']===162 
                        || FormData['RF_Nationality']===163 || FormData['RF_Nationality']===164 || FormData['RF_Nationality']===165 || FormData['RF_Nationality']===166 || FormData['RF_Nationality']===168 || FormData['RF_Nationality']===170 || FormData['RF_Nationality']===172 || FormData['RF_Nationality']===173 || FormData['RF_Nationality']===174 || FormData['RF_Nationality']===175 || FormData['RF_Nationality']===176 || FormData['RF_Nationality']===177
                        || FormData['RF_Nationality']===186 || FormData['RF_Nationality']===187 || FormData['RF_Nationality']===188 || FormData['RF_Nationality']===190 || FormData['RF_Nationality']===191 || FormData['RF_Nationality']===193 || FormData['RF_Nationality']===195
                        || FormData['RF_Nationality']===197 || FormData['RF_Nationality']===198 || FormData['RF_Nationality']===200 || FormData['RF_Nationality']===202 || FormData['RF_Nationality']===203 || FormData['RF_Nationality']===206 || FormData['RF_Nationality']===208 || FormData['RF_Nationality']===209
                        || FormData['RF_Nationality']===211 || FormData['RF_Nationality']===212 || FormData['RF_Nationality']===213 || FormData['RF_Nationality']===214 || FormData['RF_Nationality']===219 || FormData['RF_Nationality']===220 || FormData['RF_Nationality']===221 || FormData['RF_Nationality']===222 || FormData['RF_Nationality']===223 || FormData['RF_Nationality']===224
                        || FormData['RF_Nationality']===226 || FormData['RF_Nationality']===230 || FormData['RF_Nationality']===232 || FormData['RF_Nationality']===233 || FormData['RF_Nationality']===236 || FormData['RF_Nationality']===237 || FormData['RF_Nationality']===238 || FormData['RF_Nationality']===239)
                    {
                        val4=9
                    }

                    else if(FormData['RF_Nationality']===5 || FormData['RF_Nationality']===7 || FormData['RF_Nationality']===9 || FormData['RF_Nationality']===12 || FormData['RF_Nationality']===25 || FormData['RF_Nationality']===34 || FormData['RF_Nationality']===35 || FormData['RF_Nationality']===61 || FormData['RF_Nationality']===76 || FormData['RF_Nationality']===84|| FormData['RF_Nationality']===88
                        
                        || FormData['RF_Nationality']===114 || FormData['RF_Nationality']===130 || FormData['RF_Nationality']===132 || FormData['RF_Nationality']===142 || FormData['RF_Nationality']===149 || FormData['RF_Nationality']===159 || FormData['RF_Nationality']===161 
                        || FormData['RF_Nationality']===167 || FormData['RF_Nationality']===194 || FormData['RF_Nationality']===215 || FormData['RF_Nationality']===216)
                    {
                        val4=3
                    }

                    else if(FormData['RF_Nationality']===11 || FormData['RF_Nationality']===14 || FormData['RF_Nationality']===15 || FormData['RF_Nationality']===18 || FormData['RF_Nationality']===22 || FormData['RF_Nationality']===23 || FormData['RF_Nationality']===26 || FormData['RF_Nationality']===30 || FormData['RF_Nationality']===38 || FormData['RF_Nationality']===40
                        || FormData['RF_Nationality']===44 || FormData['RF_Nationality']===45 || FormData['RF_Nationality']===54 || FormData['RF_Nationality']===56 || FormData['RF_Nationality']===59 || FormData['RF_Nationality']===60 || FormData['RF_Nationality']===63 || FormData['RF_Nationality']===70 || FormData['RF_Nationality']===75 || FormData['RF_Nationality']===77 
                        || FormData['RF_Nationality']===78 || FormData['RF_Nationality']===79 || FormData['RF_Nationality']===80 || FormData['RF_Nationality']===81 || FormData['RF_Nationality']===83 || FormData['RF_Nationality']===87 || FormData['RF_Nationality']===89 || FormData['RF_Nationality']===96 || FormData['RF_Nationality']===97 || FormData['RF_Nationality']===98 
                        || FormData['RF_Nationality']===99 || FormData['RF_Nationality']===100 || FormData['RF_Nationality']===101 || FormData['RF_Nationality']===102 || FormData['RF_Nationality']===104 || FormData['RF_Nationality']===105
                        
                        || FormData['RF_Nationality']===108 || FormData['RF_Nationality']===110 || FormData['RF_Nationality']===111 || FormData['RF_Nationality']===113 || FormData['RF_Nationality']===118 || FormData['RF_Nationality']===120 || FormData['RF_Nationality']===125
                        || FormData['RF_Nationality']===131 || FormData['RF_Nationality']===133 ||  FormData['RF_Nationality']===137 || FormData['RF_Nationality']===138 || FormData['RF_Nationality']===140 || FormData['RF_Nationality']===141
                        || FormData['RF_Nationality']===144 || FormData['RF_Nationality']===147 || FormData['RF_Nationality']===156 || FormData['RF_Nationality']===157 || FormData['RF_Nationality']===169 || FormData['RF_Nationality']===171 || FormData['RF_Nationality']===178 || FormData['RF_Nationality']===179 || FormData['RF_Nationality']===180 || FormData['RF_Nationality']===181 || FormData['RF_Nationality']===182 || FormData['RF_Nationality']===183
                        || FormData['RF_Nationality']===185 || FormData['RF_Nationality']===189 || FormData['RF_Nationality']===192 || FormData['RF_Nationality']===196 || FormData['RF_Nationality']===199 || FormData['RF_Nationality']===201 || FormData['RF_Nationality']===204 || FormData['RF_Nationality']===205
                        || FormData['RF_Nationality']===207 || FormData['RF_Nationality']===210 || FormData['RF_Nationality']===218 || FormData['RF_Nationality']===225 || FormData['RF_Nationality']===231 || FormData['RF_Nationality']===234 || FormData['RF_Nationality']===235 || FormData['RF_Nationality']===237 || FormData['RF_Nationality']===238)
                    {
                        val4=6
                    }

                    else if(FormData['RF_Nationality']===21 || FormData['RF_Nationality']===57 || FormData['RF_Nationality']===106 || FormData['RF_Nationality']===107 || FormData['RF_Nationality']===119 || FormData['RF_Nationality']===187 || FormData['RF_Nationality']===217)
                    {
                        val4=12
                    }

                    if(FormData['RF_CountryOfTax']===1 || FormData['RF_CountryOfTax']===2 || FormData['RF_CountryOfTax']===3 || FormData['RF_CountryOfTax']===4 || FormData['RF_CountryOfTax']===6 || FormData['RF_CountryOfTax']===8 || FormData['RF_CountryOfTax']===10 || FormData['RF_CountryOfTax']===13 || FormData['RF_CountryOfTax']===16 || FormData['RF_CountryOfTax']===17 || FormData['RF_CountryOfTax']===19 || FormData['RF_CountryOfTax']===20 || FormData['RF_CountryOfTax']===24
                                || FormData['RF_CountryOfTax']===27 || FormData['RF_CountryOfTax']===28 || FormData['RF_CountryOfTax']===29 || FormData['RF_CountryOfTax']===30 || FormData['RF_CountryOfTax']===31 || FormData['RF_CountryOfTax']===32 || FormData['RF_CountryOfTax']===33 || FormData['RF_CountryOfTax']===36 || FormData['RF_CountryOfTax']===37 || FormData['RF_CountryOfTax']===39 || FormData['RF_CountryOfTax']===41 || FormData['RF_CountryOfTax']===42 || FormData['RF_CountryOfTax']===43
                                || FormData['RF_CountryOfTax']===46 || FormData['RF_CountryOfTax']===47 || FormData['RF_CountryOfTax']===48 || FormData['RF_CountryOfTax']===49 || FormData['RF_CountryOfTax']===50 || FormData['RF_CountryOfTax']===51 || FormData['RF_CountryOfTax']===52 || FormData['RF_CountryOfTax']===53 || FormData['RF_CountryOfTax']===55 || FormData['RF_CountryOfTax']===58 || FormData['RF_CountryOfTax']===62 || FormData['RF_CountryOfTax']===64 || FormData['RF_CountryOfTax']===65 || FormData['RF_CountryOfTax']===66 
                                || FormData['RF_CountryOfTax']===67 || FormData['RF_CountryOfTax']===68 || FormData['RF_CountryOfTax']===69 || FormData['RF_CountryOfTax']===70 || FormData['RF_CountryOfTax']===71 || FormData['RF_CountryOfTax']===72 || FormData['RF_CountryOfTax']===73 || FormData['RF_CountryOfTax']===74 || FormData['RF_CountryOfTax']===82 || FormData['RF_CountryOfTax']===85 || FormData['RF_CountryOfTax']===86 || FormData['RF_CountryOfTax']===90 || FormData['RF_CountryOfTax']===91 || FormData['RF_CountryOfTax']===92 || FormData['RF_CountryOfTax']===93
                                || FormData['RF_CountryOfTax']===94 || FormData['RF_CountryOfTax']===95 || FormData['RF_CountryOfTax']===96 || FormData['RF_CountryOfTax']===97 || FormData['RF_CountryOfTax']===98 || FormData['RF_CountryOfTax']===99 || FormData['RF_CountryOfTax']===100 || FormData['RF_CountryOfTax']===102 || FormData['RF_CountryOfTax']===103
                                
                                || FormData['RF_CountryOfTax']===109  || FormData['RF_CountryOfTax']===112  || FormData['RF_CountryOfTax']===115  || FormData['RF_CountryOfTax']===116  || FormData['RF_CountryOfTax']===117  || FormData['RF_CountryOfTax']===121  || FormData['RF_CountryOfTax']===123  || FormData['RF_CountryOfTax']===124
                                || FormData['RF_CountryOfTax']===126  || FormData['RF_CountryOfTax']===127  || FormData['RF_CountryOfTax']===128  || FormData['RF_CountryOfTax']===129  || FormData['RF_CountryOfTax']===134  || FormData['RF_CountryOfTax']===135  || FormData['RF_CountryOfTax']===136
                                || FormData['RF_CountryOfTax']===139  || FormData['RF_CountryOfTax']===143  || FormData['RF_CountryOfTax']===145  || FormData['RF_CountryOfTax']===146  || FormData['RF_CountryOfTax']===148  || FormData['RF_CountryOfTax']===150 || FormData['RF_CountryOfTax']===151
                                || FormData['RF_CountryOfTax']===152 || FormData['RF_CountryOfTax']===153 || FormData['RF_CountryOfTax']===154 || FormData['RF_CountryOfTax']===155 || FormData['RF_CountryOfTax']===158 || FormData['RF_CountryOfTax']===160 || FormData['RF_CountryOfTax']===162 
                                || FormData['RF_CountryOfTax']===163 || FormData['RF_CountryOfTax']===164 || FormData['RF_CountryOfTax']===165 || FormData['RF_CountryOfTax']===166 || FormData['RF_CountryOfTax']===168 || FormData['RF_CountryOfTax']===170 || FormData['RF_CountryOfTax']===172 || FormData['RF_CountryOfTax']===173 || FormData['RF_CountryOfTax']===174 || FormData['RF_CountryOfTax']===175 || FormData['RF_CountryOfTax']===176 || FormData['RF_CountryOfTax']===177
                                || FormData['RF_CountryOfTax']===186 || FormData['RF_CountryOfTax']===187 || FormData['RF_CountryOfTax']===188 || FormData['RF_CountryOfTax']===190 || FormData['RF_CountryOfTax']===191 || FormData['RF_CountryOfTax']===193 || FormData['RF_CountryOfTax']===195
                                || FormData['RF_CountryOfTax']===197 || FormData['RF_CountryOfTax']===198 || FormData['RF_CountryOfTax']===200 || FormData['RF_CountryOfTax']===202 || FormData['RF_CountryOfTax']===203 || FormData['RF_CountryOfTax']===206 || FormData['RF_CountryOfTax']===208 || FormData['RF_CountryOfTax']===209
                                || FormData['RF_CountryOfTax']===211 || FormData['RF_CountryOfTax']===212 || FormData['RF_CountryOfTax']===213 || FormData['RF_CountryOfTax']===214 || FormData['RF_CountryOfTax']===219 || FormData['RF_CountryOfTax']===220 || FormData['RF_CountryOfTax']===221 || FormData['RF_CountryOfTax']===222 || FormData['RF_CountryOfTax']===223 || FormData['RF_CountryOfTax']===224
                                || FormData['RF_CountryOfTax']===226 || FormData['RF_CountryOfTax']===230 || FormData['RF_CountryOfTax']===232 || FormData['RF_CountryOfTax']===233 || FormData['RF_CountryOfTax']===236 || FormData['RF_CountryOfTax']===237 || FormData['RF_CountryOfTax']===238 || FormData['RF_CountryOfTax']===239)
                            {
                                val5=9
                            }

                            else if(FormData['RF_CountryOfTax']===5 || FormData['RF_CountryOfTax']===7 || FormData['RF_CountryOfTax']===9 || FormData['RF_CountryOfTax']===12 || FormData['RF_CountryOfTax']===25 || FormData['RF_CountryOfTax']===34 || FormData['RF_CountryOfTax']===35 || FormData['RF_CountryOfTax']===61 || FormData['RF_CountryOfTax']===76 || FormData['RF_CountryOfTax']===84|| FormData['RF_CountryOfTax']===88
                                
                                || FormData['RF_CountryOfTax']===114 || FormData['RF_CountryOfTax']===130 || FormData['RF_CountryOfTax']===132 || FormData['RF_CountryOfTax']===142 || FormData['RF_CountryOfTax']===149 || FormData['RF_CountryOfTax']===159 || FormData['RF_CountryOfTax']===161 
                                || FormData['RF_CountryOfTax']===167 || FormData['RF_CountryOfTax']===194 || FormData['RF_CountryOfTax']===215 || FormData['RF_CountryOfTax']===216)
                            {
                                val5=3
                            }

                            else if(FormData['RF_CountryOfTax']===11 || FormData['RF_CountryOfTax']===14 || FormData['RF_CountryOfTax']===15 || FormData['RF_CountryOfTax']===18 || FormData['RF_CountryOfTax']===22 || FormData['RF_CountryOfTax']===23 || FormData['RF_CountryOfTax']===26 || FormData['RF_CountryOfTax']===30 || FormData['RF_CountryOfTax']===38 || FormData['RF_CountryOfTax']===40
                                || FormData['RF_CountryOfTax']===44 || FormData['RF_CountryOfTax']===45 || FormData['RF_CountryOfTax']===54 || FormData['RF_CountryOfTax']===56 || FormData['RF_CountryOfTax']===59 || FormData['RF_CountryOfTax']===60 || FormData['RF_CountryOfTax']===63 || FormData['RF_CountryOfTax']===70 || FormData['RF_CountryOfTax']===75 || FormData['RF_CountryOfTax']===77 
                                || FormData['RF_CountryOfTax']===78 || FormData['RF_CountryOfTax']===79 || FormData['RF_CountryOfTax']===80 || FormData['RF_CountryOfTax']===81 || FormData['RF_CountryOfTax']===83 || FormData['RF_CountryOfTax']===87 || FormData['RF_CountryOfTax']===89 || FormData['RF_CountryOfTax']===96 || FormData['RF_CountryOfTax']===97 || FormData['RF_CountryOfTax']===98 
                                || FormData['RF_CountryOfTax']===99 || FormData['RF_CountryOfTax']===100 || FormData['RF_CountryOfTax']===101 || FormData['RF_CountryOfTax']===102 || FormData['RF_CountryOfTax']===104 || FormData['RF_CountryOfTax']===105
                                
                                || FormData['RF_CountryOfTax']===108 || FormData['RF_CountryOfTax']===110 || FormData['RF_CountryOfTax']===111 || FormData['RF_CountryOfTax']===113 || FormData['RF_CountryOfTax']===118 || FormData['RF_CountryOfTax']===120 || FormData['RF_CountryOfTax']===125
                                || FormData['RF_CountryOfTax']===131 || FormData['RF_CountryOfTax']===133 ||  FormData['RF_CountryOfTax']===137 || FormData['RF_CountryOfTax']===138 || FormData['RF_CountryOfTax']===140 || FormData['RF_CountryOfTax']===141
                                || FormData['RF_CountryOfTax']===144 || FormData['RF_CountryOfTax']===147 || FormData['RF_CountryOfTax']===156 || FormData['RF_CountryOfTax']===157 || FormData['RF_CountryOfTax']===169 || FormData['RF_CountryOfTax']===171 || FormData['RF_CountryOfTax']===178 || FormData['RF_CountryOfTax']===179 || FormData['RF_CountryOfTax']===180 || FormData['RF_CountryOfTax']===181 || FormData['RF_CountryOfTax']===182 || FormData['RF_CountryOfTax']===183
                                || FormData['RF_CountryOfTax']===185 || FormData['RF_CountryOfTax']===189 || FormData['RF_CountryOfTax']===192 || FormData['RF_CountryOfTax']===196 || FormData['RF_CountryOfTax']===199 || FormData['RF_CountryOfTax']===201 || FormData['RF_CountryOfTax']===204 || FormData['RF_CountryOfTax']===205
                                || FormData['RF_CountryOfTax']===207 || FormData['RF_CountryOfTax']===210 || FormData['RF_CountryOfTax']===218 || FormData['RF_CountryOfTax']===225 || FormData['RF_CountryOfTax']===231 || FormData['RF_CountryOfTax']===234 || FormData['RF_CountryOfTax']===235 || FormData['RF_CountryOfTax']===237 || FormData['RF_CountryOfTax']===238)
                            {
                                val5=6
                            }

                            else if(FormData['RF_CountryOfTax']===21 || FormData['RF_CountryOfTax']===57 || FormData['RF_CountryOfTax']===106 || FormData['RF_CountryOfTax']===107 || FormData['RF_CountryOfTax']===119 || FormData['RF_CountryOfTax']===187 || FormData['RF_CountryOfTax']===217)
                            {
                                val5=12
                            }

                             
                            if(FormData['RF_Industry']===1 || FormData['RF_Industry']===3 || FormData['RF_Industry']===15 || FormData['RF_Industry']===19)
                            {
                                val6=1
                            }

                            else if(FormData['RF_Industry']===25)
                            {
                                val6=0
                            }

                            
                            else if(FormData['RF_Industry']===2 || FormData['RF_Industry']===12 || FormData['RF_Industry']===14 || FormData['RF_Industry']===16 || FormData['RF_Industry']===17 || FormData['RF_Industry']===20 || FormData['RF_Industry']===23 || FormData['RF_Industry']===24
                                || FormData['RF_Industry']===26 || FormData['RF_Industry']===27 || FormData['RF_Industry']===28 || FormData['RF_Industry']===30 || FormData['RF_Industry']===34)
                            {
                                val6=3
                            }

                            else if(FormData['RF_Industry']===4 || FormData['RF_Industry']===5 || FormData['RF_Industry']===6 || FormData['RF_Industry']===7 || FormData['RF_Industry']===8 || FormData['RF_Industry']===9 || FormData['RF_Industry']===10 || FormData['RF_Industry']===11 || FormData['RF_Industry']===13
                                || FormData['RF_Industry']===18 || FormData['RF_Industry']===21 || FormData['RF_Industry']===22 || FormData['RF_Industry']===29 || FormData['RF_Industry']===32 || FormData['RF_Industry']===33)
                            {
                                val6=2
                            }

                            else if(FormData['RF_Industry']===31)
                            {
                                val6=4
                            }

                            if(FormData['RF_SourceOfFunds']===1 || FormData['RF_SourceOfFunds']===6 || FormData['RF_SourceOfFunds']===12 || FormData['RF_SourceOfFunds']===13 || FormData['RF_SourceOfFunds']===16)
                            {
                               val7=3
                            }

                            else if(FormData['RF_SourceOfFunds']===2 || FormData['RF_SourceOfFunds']===3 || FormData['RF_SourceOfFunds']===8 || FormData['RF_SourceOfFunds']===9 || FormData['RF_SourceOfFunds']===14 || FormData['RF_SourceOfFunds']===17 || FormData['RF_SourceOfFunds']===18 || FormData['RF_SourceOfFunds']===20
                               || FormData['RF_SourceOfFunds']===22 || FormData['RF_SourceOfFunds']===23 || FormData['RF_SourceOfFunds']===25 || FormData['RF_SourceOfFunds']===26 || FormData['RF_SourceOfFunds']===29 || FormData['RF_SourceOfFunds']===31 || FormData['RF_SourceOfFunds']===32 || FormData['RF_SourceOfFunds']===33)
                            {
                                val7=1
                            }

                            else if(FormData['RF_SourceOfFunds']===4 || FormData['RF_SourceOfFunds']===5 || FormData['RF_SourceOfFunds']===7 || FormData['RF_SourceOfFunds']===10 || FormData['RF_SourceOfFunds']===11 || FormData['RF_SourceOfFunds']===15 || FormData['RF_SourceOfFunds']===19 || FormData['RF_SourceOfFunds']===24
                                || FormData['RF_SourceOfFunds']===27 || FormData['RF_SourceOfFunds']===28 || FormData['RF_SourceOfFunds']===30)
                            {
                                val7=2
                            }

                            else if(FormData['RF_SourceOfFunds']===21)
                            {
                                val7=0
                            }
                           
                            if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===11 
                            || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15)
                            {
                               val8=1
                            }

                            else if(FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===12 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===16)
                            {
                                val8=2
                            }

                            
                            if(FormData['RF_CountryOfRegistration']==="1" || FormData['RF_CountryOfRegistration']==="2" || FormData['RF_CountryOfRegistration']==="3" || FormData['RF_CountryOfRegistration']==="4" || FormData['RF_CountryOfRegistration']==="6" || FormData['RF_CountryOfRegistration']==="8" || FormData['RF_CountryOfRegistration']==="10" || FormData['RF_CountryOfRegistration']==="13" || FormData['RF_CountryOfRegistration']==="16" || FormData['RF_CountryOfRegistration']==="17" || FormData['RF_CountryOfRegistration']==="19" || FormData['RF_CountryOfRegistration']==="20" || FormData['RF_CountryOfRegistration']==="24"
                            || FormData['RF_CountryOfRegistration']==="27" || FormData['RF_CountryOfRegistration']==="28" || FormData['RF_CountryOfRegistration']==="29" || FormData['RF_CountryOfRegistration']==="30" || FormData['RF_CountryOfRegistration']==="31" || FormData['RF_CountryOfRegistration']==="32" || FormData['RF_CountryOfRegistration']==="33" || FormData['RF_CountryOfRegistration']==="36" || FormData['RF_CountryOfRegistration']==="37" || FormData['RF_CountryOfRegistration']==="39" || FormData['RF_CountryOfRegistration']==="41" || FormData['RF_CountryOfRegistration']==="42" || FormData['RF_CountryOfRegistration']==="43"
                            || FormData['RF_CountryOfRegistration']==="46" || FormData['RF_CountryOfRegistration']==="47" || FormData['RF_CountryOfRegistration']==="48" || FormData['RF_CountryOfRegistration']==="49" || FormData['RF_CountryOfRegistration']==="50" || FormData['RF_CountryOfRegistration']==="51" || FormData['RF_CountryOfRegistration']==="52" || FormData['RF_CountryOfRegistration']==="53" || FormData['RF_CountryOfRegistration']==="55" || FormData['RF_CountryOfRegistration']==="58" || FormData['RF_CountryOfRegistration']==="62" || FormData['RF_CountryOfRegistration']==="64" || FormData['RF_CountryOfRegistration']==="65" || FormData['RF_CountryOfRegistration']==="66" 
                            || FormData['RF_CountryOfRegistration']==="67" || FormData['RF_CountryOfRegistration']==="68" || FormData['RF_CountryOfRegistration']==="69" || FormData['RF_CountryOfRegistration']==="70" || FormData['RF_CountryOfRegistration']==="71" || FormData['RF_CountryOfRegistration']==="72" || FormData['RF_CountryOfRegistration']==="73" || FormData['RF_CountryOfRegistration']==="74" || FormData['RF_CountryOfRegistration']==="82" || FormData['RF_CountryOfRegistration']==="85" || FormData['RF_CountryOfRegistration']==="86" || FormData['RF_CountryOfRegistration']==="90" || FormData['RF_CountryOfRegistration']==="91" || FormData['RF_CountryOfRegistration']==="92" || FormData['RF_CountryOfRegistration']==="93"
                            || FormData['RF_CountryOfRegistration']==="94" || FormData['RF_CountryOfRegistration']==="95" || FormData['RF_CountryOfRegistration']==="96" || FormData['RF_CountryOfRegistration']==="97" || FormData['RF_CountryOfRegistration']==="98" || FormData['RF_CountryOfRegistration']==="99" || FormData['RF_CountryOfRegistration']==="100" || FormData['RF_CountryOfRegistration']==="102" || FormData['RF_CountryOfRegistration']==="103"

                            || FormData['RF_CountryOfRegistration']==="109" || FormData['RF_CountryOfRegistration']==="112" || FormData['RF_CountryOfRegistration']==="115" ||  FormData['RF_CountryOfRegistration']==="116" ||  FormData['RF_CountryOfRegistration']==="117" ||  FormData['RF_CountryOfRegistration']==="121" ||  FormData['RF_CountryOfRegistration']==="123" ||  FormData['RF_CountryOfRegistration']==="124"
                            || FormData['RF_CountryOfRegistration']==="126" || FormData['RF_CountryOfRegistration']==="127" || FormData['RF_CountryOfRegistration']==="128" ||  FormData['RF_CountryOfRegistration']==="129" ||  FormData['RF_CountryOfRegistration']==="134" ||  FormData['RF_CountryOfRegistration']==="135" ||  FormData['RF_CountryOfRegistration']==="136"
                            || FormData['RF_CountryOfRegistration']==="139" || FormData['RF_CountryOfRegistration']==="143" || FormData['RF_CountryOfRegistration']==="145" ||  FormData['RF_CountryOfRegistration']==="146" ||  FormData['RF_CountryOfRegistration']==="148" ||  FormData['RF_CountryOfRegistration']==="150" || FormData['RF_CountryOfRegistration']==="151"
                            || FormData['RF_CountryOfRegistration']==="152" || FormData['RF_CountryOfRegistration']==="153" || FormData['RF_CountryOfRegistration']==="154" || FormData['RF_CountryOfRegistration']==="155" || FormData['RF_CountryOfRegistration']==="158" || FormData['RF_CountryOfRegistration']==="160" || FormData['RF_CountryOfRegistration']==="162" 
                            || FormData['RF_CountryOfRegistration']==="163" || FormData['RF_CountryOfRegistration']==="164" || FormData['RF_CountryOfRegistration']==="165" || FormData['RF_CountryOfRegistration']==="166" || FormData['RF_CountryOfRegistration']==="168" || FormData['RF_CountryOfRegistration']==="170" || FormData['RF_CountryOfRegistration']==="172" || FormData['RF_CountryOfRegistration']==="173" || FormData['RF_CountryOfRegistration']==="174" || FormData['RF_CountryOfRegistration']==="175" || FormData['RF_CountryOfRegistration']==="176" || FormData['RF_CountryOfRegistration']==="177"
                            || FormData['RF_CountryOfRegistration']==="186" || FormData['RF_CountryOfRegistration']==="187" || FormData['RF_CountryOfRegistration']==="188" || FormData['RF_CountryOfRegistration']==="190" || FormData['RF_CountryOfRegistration']==="191" || FormData['RF_CountryOfRegistration']==="193" || FormData['RF_CountryOfRegistration']==="195"
                            || FormData['RF_CountryOfRegistration']==="197" || FormData['RF_CountryOfRegistration']==="198" || FormData['RF_CountryOfRegistration']==="200" || FormData['RF_CountryOfRegistration']==="202" || FormData['RF_CountryOfRegistration']==="203" || FormData['RF_CountryOfRegistration']==="206" || FormData['RF_CountryOfRegistration']==="208" || FormData['RF_CountryOfRegistration']==="209"
                            || FormData['RF_CountryOfRegistration']==="211" || FormData['RF_CountryOfRegistration']==="212" || FormData['RF_CountryOfRegistration']==="213" || FormData['RF_CountryOfRegistration']==="214" || FormData['RF_CountryOfRegistration']==="219" || FormData['RF_CountryOfRegistration']==="220" || FormData['RF_CountryOfRegistration']==="221" || FormData['RF_CountryOfRegistration']==="222" || FormData['RF_CountryOfRegistration']==="223" || FormData['RF_CountryOfRegistration']==="224"
                            || FormData['RF_CountryOfRegistration']==="226" || FormData['RF_CountryOfRegistration']==="230" || FormData['RF_CountryOfRegistration']==="232" || FormData['RF_CountryOfRegistration']==="233" || FormData['RF_CountryOfRegistration']==="236" || FormData['RF_CountryOfRegistration']==="237" || FormData['RF_CountryOfRegistration']==="238" || FormData['RF_CountryOfRegistration']==="239")
                            {
                                val9=9
                            }

                            else if(FormData['RF_CountryOfRegistration']==="5" || FormData['RF_CountryOfRegistration']==="7" || FormData['RF_CountryOfRegistration']==="9" || FormData['RF_CountryOfRegistration']==="12" || FormData['RF_CountryOfRegistration']==="25" || FormData['RF_CountryOfRegistration']==="34" || FormData['RF_CountryOfRegistration']==="35" || FormData['RF_CountryOfRegistration']==="61" || FormData['RF_CountryOfRegistration']==="76" || FormData['RF_CountryOfRegistration']==="84" || FormData['RF_CountryOfRegistration']==="88" 
                            || FormData['RF_CountryOfRegistration']==="114" || FormData['RF_CountryOfRegistration']==="130" || FormData['RF_CountryOfRegistration']==="132" || FormData['RF_CountryOfRegistration']==="142" || FormData['RF_CountryOfRegistration']==="149" || FormData['RF_CountryOfRegistration']==="159" || FormData['RF_CountryOfRegistration']==="161"
                            || FormData['RF_CountryOfRegistration']==="167" || FormData['RF_CountryOfRegistration']==="194" || FormData['RF_CountryOfRegistration']==="215" || FormData['RF_CountryOfRegistration']==="216")
                            {
                                val9=3
                            }

                            else if(FormData['RF_CountryOfRegistration']==="11" || FormData['RF_CountryOfRegistration']==="14" || FormData['RF_CountryOfRegistration']==="15" || FormData['RF_CountryOfRegistration']==="18" || FormData['RF_CountryOfRegistration']==="22" || FormData['RF_CountryOfRegistration']==="23" || FormData['RF_CountryOfRegistration']==="26" || FormData['RF_CountryOfRegistration']==="30" || FormData['RF_CountryOfRegistration']==="38" || FormData['RF_CountryOfRegistration']==="40"
                            || FormData['RF_CountryOfRegistration']==="44" || FormData['RF_CountryOfRegistration']==="45" || FormData['RF_CountryOfRegistration']==="54" || FormData['RF_CountryOfRegistration']==="56" || FormData['RF_CountryOfRegistration']==="59" || FormData['RF_CountryOfRegistration']==="60" || FormData['RF_CountryOfRegistration']==="63" || FormData['RF_CountryOfRegistration']==="70" || FormData['RF_CountryOfRegistration']==="75" || FormData['RF_CountryOfRegistration']==="77" 
                            || FormData['RF_CountryOfRegistration']==="78" || FormData['RF_CountryOfRegistration']==="79" || FormData['RF_CountryOfRegistration']==="80" || FormData['RF_CountryOfRegistration']==="81" || FormData['RF_CountryOfRegistration']==="83" || FormData['RF_CountryOfRegistration']==="87" || FormData['RF_CountryOfRegistration']==="89" || FormData['RF_CountryOfRegistration']==="96" || FormData['RF_CountryOfRegistration']==="97" || FormData['RF_CountryOfRegistration']==="98" 
                            || FormData['RF_CountryOfRegistration']==="99" || FormData['RF_CountryOfRegistration']==="100" || FormData['RF_CountryOfRegistration']==="101" || FormData['RF_CountryOfRegistration']==="102" || FormData['RF_CountryOfRegistration']==="104" || FormData['RF_CountryOfRegistration']==="105"
                            || FormData['RF_CountryOfRegistration']==="108" || FormData['RF_CountryOfRegistration']==="110" || FormData['RF_CountryOfRegistration']==="111" || FormData['RF_CountryOfRegistration']==="113" || FormData['RF_CountryOfRegistration']==="118" || FormData['RF_CountryOfRegistration']==="120" || FormData['RF_CountryOfRegistration']==="125"
                            || FormData['RF_CountryOfRegistration']==="131" || FormData['RF_CountryOfRegistration']==="133" ||  FormData['RF_CountryOfRegistration']==="137" || FormData['RF_CountryOfRegistration']==="138" || FormData['RF_CountryOfRegistration']==="140" || FormData['RF_CountryOfRegistration']==="141"
                            || FormData['RF_CountryOfRegistration']==="144" || FormData['RF_CountryOfRegistration']==="147" || FormData['RF_CountryOfRegistration']==="156" || FormData['RF_CountryOfRegistration']==="157" || FormData['RF_CountryOfRegistration']==="169" || FormData['RF_CountryOfRegistration']==="171" || FormData['RF_CountryOfRegistration']==="178" || FormData['RF_CountryOfRegistration']==="179" || FormData['RF_CountryOfRegistration']==="180" || FormData['RF_CountryOfRegistration']==="181" || FormData['RF_CountryOfRegistration']==="182" || FormData['RF_CountryOfRegistration']==="183"
                            || FormData['RF_CountryOfRegistration']==="185" || FormData['RF_CountryOfRegistration']==="189" || FormData['RF_CountryOfRegistration']==="192" || FormData['RF_CountryOfRegistration']==="196" || FormData['RF_CountryOfRegistration']==="199" || FormData['RF_CountryOfRegistration']==="201" || FormData['RF_CountryOfRegistration']==="204" || FormData['RF_CountryOfRegistration']==="205"
                            || FormData['RF_CountryOfRegistration']==="207" || FormData['RF_CountryOfRegistration']==="210" || FormData['RF_CountryOfRegistration']==="218" || FormData['RF_CountryOfRegistration']==="225" || FormData['RF_CountryOfRegistration']==="231" || FormData['RF_CountryOfRegistration']==="234" || FormData['RF_CountryOfRegistration']==="235" || FormData['RF_CountryOfRegistration']==="237" || FormData['RF_CountryOfRegistration']==="238")
                            {
                                val9=6
                            }

                            else if(FormData['RF_CountryOfRegistration']==="21" || FormData['RF_CountryOfRegistration']==="57" || FormData['RF_CountryOfRegistration']==="106" || FormData['RF_CountryOfRegistration']==="107" || FormData['RF_CountryOfRegistration']==="119" || FormData['RF_CountryOfRegistration']==="187" || FormData['RF_CountryOfRegistration']==="217")
                            {
                                val9=12
                            }

                            if(FormData['RF_CountryOfResidence']===1 || FormData['RF_CountryOfResidence']===2 || FormData['RF_CountryOfResidence']===3 || FormData['RF_CountryOfResidence']===4 || FormData['RF_CountryOfResidence']===6 || FormData['RF_CountryOfResidence']===8 || FormData['RF_CountryOfResidence']===10 || FormData['RF_CountryOfResidence']===13 || FormData['RF_CountryOfResidence']===16 || FormData['RF_CountryOfResidence']===17 || FormData['RF_CountryOfResidence']===19 || FormData['RF_CountryOfResidence']===20 || FormData['RF_CountryOfResidence']===24
                                || FormData['RF_CountryOfResidence']===27 || FormData['RF_CountryOfResidence']===28 || FormData['RF_CountryOfResidence']===29 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===31 || FormData['RF_CountryOfResidence']===32 || FormData['RF_CountryOfResidence']===33 || FormData['RF_CountryOfResidence']===36 || FormData['RF_CountryOfResidence']===37 || FormData['RF_CountryOfResidence']===39 || FormData['RF_CountryOfResidence']===41 || FormData['RF_CountryOfResidence']===42 || FormData['RF_CountryOfResidence']===43
                                || FormData['RF_CountryOfResidence']===46 || FormData['RF_CountryOfResidence']===47 || FormData['RF_CountryOfResidence']===48 || FormData['RF_CountryOfResidence']===49 || FormData['RF_CountryOfResidence']===50 || FormData['RF_CountryOfResidence']===51 || FormData['RF_CountryOfResidence']===52 || FormData['RF_CountryOfResidence']===53 || FormData['RF_CountryOfResidence']===55 || FormData['RF_CountryOfResidence']===58 || FormData['RF_CountryOfResidence']===62 || FormData['RF_CountryOfResidence']===64 || FormData['RF_CountryOfResidence']===65 || FormData['RF_CountryOfResidence']===66 
                                || FormData['RF_CountryOfResidence']===67 || FormData['RF_CountryOfResidence']===68 || FormData['RF_CountryOfResidence']===69 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===71 || FormData['RF_CountryOfResidence']===72 || FormData['RF_CountryOfResidence']===73 || FormData['RF_CountryOfResidence']===74 || FormData['RF_CountryOfResidence']===82 || FormData['RF_CountryOfResidence']===85 || FormData['RF_CountryOfResidence']===86 || FormData['RF_CountryOfResidence']===90 || FormData['RF_CountryOfResidence']===91 || FormData['RF_CountryOfResidence']===92 || FormData['RF_CountryOfResidence']===93
                                || FormData['RF_CountryOfResidence']===94 || FormData['RF_CountryOfResidence']===95 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===103
                                
                                || FormData['RF_CountryOfResidence']===109  || FormData['RF_CountryOfResidence']===112  || FormData['RF_CountryOfResidence']===115  || FormData['RF_CountryOfResidence']===116  || FormData['RF_CountryOfResidence']===117  || FormData['RF_CountryOfResidence']===121  || FormData['RF_CountryOfResidence']===123  || FormData['RF_CountryOfResidence']===124
                                || FormData['RF_CountryOfResidence']===126  || FormData['RF_CountryOfResidence']===127  || FormData['RF_CountryOfResidence']===128  || FormData['RF_CountryOfResidence']===129  || FormData['RF_CountryOfResidence']===134  || FormData['RF_CountryOfResidence']===135  || FormData['RF_CountryOfResidence']===136
                                || FormData['RF_CountryOfResidence']===139  || FormData['RF_CountryOfResidence']===143  || FormData['RF_CountryOfResidence']===145  || FormData['RF_CountryOfResidence']===146  || FormData['RF_CountryOfResidence']===148  || FormData['RF_CountryOfResidence']===150 || FormData['RF_CountryOfResidence']===151
                                || FormData['RF_CountryOfResidence']===152 || FormData['RF_CountryOfResidence']===153 || FormData['RF_CountryOfResidence']===154 || FormData['RF_CountryOfResidence']===155 || FormData['RF_CountryOfResidence']===158 || FormData['RF_CountryOfResidence']===160 || FormData['RF_CountryOfResidence']===162 
                                || FormData['RF_CountryOfResidence']===163 || FormData['RF_CountryOfResidence']===164 || FormData['RF_CountryOfResidence']===165 || FormData['RF_CountryOfResidence']===166 || FormData['RF_CountryOfResidence']===168 || FormData['RF_CountryOfResidence']===170 || FormData['RF_CountryOfResidence']===172 || FormData['RF_CountryOfResidence']===173 || FormData['RF_CountryOfResidence']===174 || FormData['RF_CountryOfResidence']===175 || FormData['RF_CountryOfResidence']===176 || FormData['RF_CountryOfResidence']===177
                                || FormData['RF_CountryOfResidence']===186 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===188 || FormData['RF_CountryOfResidence']===190 || FormData['RF_CountryOfResidence']===191 || FormData['RF_CountryOfResidence']===193 || FormData['RF_CountryOfResidence']===195
                                || FormData['RF_CountryOfResidence']===197 || FormData['RF_CountryOfResidence']===198 || FormData['RF_CountryOfResidence']===200 || FormData['RF_CountryOfResidence']===202 || FormData['RF_CountryOfResidence']===203 || FormData['RF_CountryOfResidence']===206 || FormData['RF_CountryOfResidence']===208 || FormData['RF_CountryOfResidence']===209
                                || FormData['RF_CountryOfResidence']===211 || FormData['RF_CountryOfResidence']===212 || FormData['RF_CountryOfResidence']===213 || FormData['RF_CountryOfResidence']===214 || FormData['RF_CountryOfResidence']===219 || FormData['RF_CountryOfResidence']===220 || FormData['RF_CountryOfResidence']===221 || FormData['RF_CountryOfResidence']===222 || FormData['RF_CountryOfResidence']===223 || FormData['RF_CountryOfResidence']===224
                                || FormData['RF_CountryOfResidence']===226 || FormData['RF_CountryOfResidence']===230 || FormData['RF_CountryOfResidence']===232 || FormData['RF_CountryOfResidence']===233 || FormData['RF_CountryOfResidence']===236 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238 || FormData['RF_CountryOfResidence']===239)
                            {
                                val10=9
                            }

                            else if(FormData['RF_CountryOfResidence']===5 || FormData['RF_CountryOfResidence']===7 || FormData['RF_CountryOfResidence']===9 || FormData['RF_CountryOfResidence']===12 || FormData['RF_CountryOfResidence']===25 || FormData['RF_CountryOfResidence']===34 || FormData['RF_CountryOfResidence']===35 || FormData['RF_CountryOfResidence']===61 || FormData['RF_CountryOfResidence']===76 || FormData['RF_CountryOfResidence']===84|| FormData['RF_CountryOfResidence']===88
                                
                                || FormData['RF_CountryOfResidence']===114 || FormData['RF_CountryOfResidence']===130 || FormData['RF_CountryOfResidence']===132 || FormData['RF_CountryOfResidence']===142 || FormData['RF_CountryOfResidence']===149 || FormData['RF_CountryOfResidence']===159 || FormData['RF_CountryOfResidence']===161 
                                || FormData['RF_CountryOfResidence']===167 || FormData['RF_CountryOfResidence']===194 || FormData['RF_CountryOfResidence']===215 || FormData['RF_CountryOfResidence']===216)
                            {
                                val10=3
                            }

                            else if(FormData['RF_CountryOfResidence']===11 || FormData['RF_CountryOfResidence']===14 || FormData['RF_CountryOfResidence']===15 || FormData['RF_CountryOfResidence']===18 || FormData['RF_CountryOfResidence']===22 || FormData['RF_CountryOfResidence']===23 || FormData['RF_CountryOfResidence']===26 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===38 || FormData['RF_CountryOfResidence']===40
                                || FormData['RF_CountryOfResidence']===44 || FormData['RF_CountryOfResidence']===45 || FormData['RF_CountryOfResidence']===54 || FormData['RF_CountryOfResidence']===56 || FormData['RF_CountryOfResidence']===59 || FormData['RF_CountryOfResidence']===60 || FormData['RF_CountryOfResidence']===63 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===75 || FormData['RF_CountryOfResidence']===77 
                                || FormData['RF_CountryOfResidence']===78 || FormData['RF_CountryOfResidence']===79 || FormData['RF_CountryOfResidence']===80 || FormData['RF_CountryOfResidence']===81 || FormData['RF_CountryOfResidence']===83 || FormData['RF_CountryOfResidence']===87 || FormData['RF_CountryOfResidence']===89 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 
                                || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===101 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===104 || FormData['RF_CountryOfResidence']===105
                                
                                || FormData['RF_CountryOfResidence']===108 || FormData['RF_CountryOfResidence']===110 || FormData['RF_CountryOfResidence']===111 || FormData['RF_CountryOfResidence']===113 || FormData['RF_CountryOfResidence']===118 || FormData['RF_CountryOfResidence']===120 || FormData['RF_CountryOfResidence']===125
                                || FormData['RF_CountryOfResidence']===131 || FormData['RF_CountryOfResidence']===133 ||  FormData['RF_CountryOfResidence']===137 || FormData['RF_CountryOfResidence']===138 || FormData['RF_CountryOfResidence']===140 || FormData['RF_CountryOfResidence']===141
                                || FormData['RF_CountryOfResidence']===144 || FormData['RF_CountryOfResidence']===147 || FormData['RF_CountryOfResidence']===156 || FormData['RF_CountryOfResidence']===157 || FormData['RF_CountryOfResidence']===169 || FormData['RF_CountryOfResidence']===171 || FormData['RF_CountryOfResidence']===178 || FormData['RF_CountryOfResidence']===179 || FormData['RF_CountryOfResidence']===180 || FormData['RF_CountryOfResidence']===181 || FormData['RF_CountryOfResidence']===182 || FormData['RF_CountryOfResidence']===183
                                || FormData['RF_CountryOfResidence']===185 || FormData['RF_CountryOfResidence']===189 || FormData['RF_CountryOfResidence']===192 || FormData['RF_CountryOfResidence']===196 || FormData['RF_CountryOfResidence']===199 || FormData['RF_CountryOfResidence']===201 || FormData['RF_CountryOfResidence']===204 || FormData['RF_CountryOfResidence']===205
                                || FormData['RF_CountryOfResidence']===207 || FormData['RF_CountryOfResidence']===210 || FormData['RF_CountryOfResidence']===218 || FormData['RF_CountryOfResidence']===225 || FormData['RF_CountryOfResidence']===231 || FormData['RF_CountryOfResidence']===234 || FormData['RF_CountryOfResidence']===235 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238)
                            {
                                val10=6
                            }

                            else if(FormData['RF_CountryOfResidence']===21 || FormData['RF_CountryOfResidence']===57 || FormData['RF_CountryOfResidence']===106 || FormData['RF_CountryOfResidence']===107 || FormData['RF_CountryOfResidence']===119 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===217)
                            {
                                val10=12
                            }

                            if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15 || FormData['RF_RelationshipToClient']===16
                                || FormData['RF_RelationshipToClient']===20 || FormData['RF_RelationshipToClient']===21 || FormData['RF_RelationshipToClient']===25)
                            {
                               val11=1
                            }
    
                            else if(FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===11 || FormData['RF_RelationshipToClient']===12
                                || FormData['RF_RelationshipToClient']===17 || FormData['RF_RelationshipToClient']===18 || FormData['RF_RelationshipToClient']===22 || FormData['RF_RelationshipToClient']===23)
                            {
                                val11=3      
                                
                            }
    
                            else if(FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===19 || FormData['RF_RelationshipToClient']===24)
                            {
                                val11=2
                            }

                            var val2n=val1+val2+val3+val4+val5+val6+val7+val8
                            var val3n=val6+val7+val8+val9+val10+val11
                            if(FormData['RF_ClientType']==="1")
                            {
                                return (<>
                               
                                      
                                   <label className="col-form-label">{val2n}</label>

                                   </>)
                            }

                            else if(FormData['RF_ClientType']==="2")
                            {
                                return (<>
                               
                                      
                                   <label className="col-form-label">{val3n}</label>

                                   </>)
                            }
                        

                        

                           
                                
                           
                })()}

                </div>

            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label">Client Type</label>
                </div>

                <div className="col-2">
                    <select disabled className="text-start form-select" name='RF_ClientType' id='RF_ClientType' value={FormData['RF_ClientType']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Individual</option>
                        <option value="2">Legal</option>
                    </select>  
                </div>

            </div>
        </div>
        {/* <hr/> */}
        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
                
                {(() => { 
                                
                    if(FormData['RF_ClientType']==="1")
                    {
                        
                        return (<>
                        <br/>
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Occupation</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Occupation' id='RF_Occupation' value={FormData['RF_Occupation']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Minor/Scholar</option>
                                <option value="2">Retired</option>
                                <option value="3">Salaried Employee</option>
                                <option value="4">Self Employed</option>
                                <option value="5">Student</option>
                                <option value="6">Unemployed</option>
                            </select>    
                        </div>
                        
                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>
                        
                        <div className="col-1">
                            {(() => { 
                             
                            if(FormData['RF_Occupation']==="1" || FormData['RF_Occupation']==="2" || FormData['RF_Occupation']==="3" || FormData['RF_Occupation']==="5")
                            {
                                val1=1;
                                
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Occupation']==="4" || FormData['RF_Occupation']==="6")
                            {
                                return (<>
                                    
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                        {(() => { 
                            
                            if(FormData['RF_Occupation']==="1" || FormData['RF_Occupation']==="2" || FormData['RF_Occupation']==="3" || FormData['RF_Occupation']==="5" || FormData['RF_Occupation']==="4" || FormData['RF_Occupation']==="6")
                            {
                                return (<>
                                    
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

    
                            })()}
                        </div>

                        <div className="col-2">
                        {(() => { 
                            
                            if(FormData['RF_Occupation']==="1" || FormData['RF_Occupation']==="2" || FormData['RF_Occupation']==="3" || FormData['RF_Occupation']==="5")
                            {
                                return (<>
                                    
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Occupation']==="4" || FormData['RF_Occupation']==="6")
                            {
                                return (<>
                                    
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <br/>
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Country of Birth</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_CountryOfBirth' id='RF_CountryOfBirth' value={FormData['RF_CountryOfBirth']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andora</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armania</option>
                                <option value="12">Aruba</option>
                                <option value="13">Auckland Islands</option>
                                <option value="14">Australia</option>
                                <option value="15">Austria</option>
                                <option value="16">Azerbaijan</option>
                                <option value="17">Bahamas</option>
                                <option value="18">Bahrain</option>
                                <option value="19">Bangladesh</option>
                                <option value="20">Barbados</option>
                                <option value="21">Belarus</option>
                                <option value="22">Belgium</option>
                                <option value="23">Belize</option>
                                <option value="24">Benin</option>
                                <option value="25">Bermuda</option>
                                <option value="26">Bhutan</option>
                                <option value="27">Bolivia</option>
                                <option value="28">Bonaire</option>
                                <option value="29">Bosnia</option>
                                <option value="30">Botswana</option>
                                <option value="31">Bouvet Islands</option>
                                <option value="32">Brazil</option>
                                <option value="33">British Indian Ocean Teritory</option>
                                <option value="34">Brunei Darussalam</option>
                                <option value="35">Bulgaria</option>
                                <option value="36">Burkina Faso</option>
                                <option value="37">Burundi</option>
                                <option value="38">Cabo Verde</option>
                                <option value="39">Cambodia</option>
                                <option value="40">Cameroon</option>
                                <option value="41">Canada</option>
                                <option value="42">Cayman Islands</option>
                                <option value="43">Central African Republic</option>
                                <option value="44">Chad</option>
                                <option value="45">Chile</option>
                                <option value="46">China</option>
                                <option value="47">Christmas Island</option>
                                <option value="48">Cocos</option>
                                <option value="49">Colombia</option>
                                <option value="50">Comoros</option>
                                <option value="51">Congo Democratic</option>
                                <option value="52">Congo Republic</option>
                                <option value="53">Cook Islands</option>
                                <option value="54">Costa Rica</option>
                                <option value="55">Ivory Cost</option>
                                <option value="56">Croatia</option>
                                <option value="57">Cuba</option>
                                <option value="58">Curacao</option>
                                <option value="59">Cyprus</option>
                                <option value="60">Czech Republic</option>
                                <option value="61">Denmark</option>
                                <option value="62">Djibouti</option>
                                <option value="63">Dominica</option>
                                <option value="64">Dominican Republic</option>
                                <option value="65">Ecuador</option>
                                <option value="66">Egypt</option>
                                <option value="67">EI Salvador</option>
                                <option value="68">Equatorial Guinea</option>
                                <option value="69">Eritrea</option>
                                <option value="70">Estonia</option>
                                <option value="71">eSwaitini</option>
                                <option value="72">Ethiopia</option>
                                <option value="73">Falkland Islands</option>
                                <option value="74">Faroe Islands</option>
                                <option value="75">Fiji</option>
                                <option value="76">Finland</option>
                                <option value="77">France</option>
                                <option value="78">French Guiana</option>
                                <option value="79">French Polynesia</option>
                                <option value="80">French Southern Territories</option>
                                <option value="81">Gabon</option>
                                <option value="82">Gambia</option>
                                <option value="83">Georgia</option>
                                <option value="84">Germany</option>
                                <option value="85">Ghana</option>
                                <option value="86">Gibralter</option>
                                <option value="87">Greece</option>
                                <option value="88">Greenland</option>
                                <option value="89">Grenada</option>
                                <option value="90">Guadeloupe</option>
                                <option value="91">Guam</option>
                                <option value="92">Guatemala</option>
                                <option value="93">Guernsey</option>
                                <option value="94">Guinea</option>
                                <option value="95">Guinea Bissau</option>
                                <option value="96">Guyana</option>
                                <option value="97">Haiti</option>
                                <option value="98">Herd Island</option>
                                <option value="99">Holy See</option>
                                <option value="100">Honduras</option>
                                <option value="101">Hongkong</option>
                                <option value="102">Hungary</option>
                                <option value="103">Iceland</option>
                                <option value="104">India</option>
                                <option value="105">Indonessia</option>
                                <option value="106">Iran</option>
                                <option value="107">Iraq</option>
                                <option value="108">Ireland</option>
                                <option value="109">Isle of man</option>
                                <option value="110">Israel</option>
                                <option value="111">Italy</option>
                                <option value="112">Jamaica</option>
                                <option value="113">Japan</option>
                                <option value="114">Jersey</option>
                                <option value="115">Jordan</option>
                                <option value="116">Kazakhstan</option>
                                <option value="117">Kenya</option>
                                <option value="118">Kiribati</option>
                                <option value="119">Korea North</option>
                                <option value="120">Korea South</option>
                                <option value="121">Kosovo</option>
                                <option value="122">Kuwait</option>
                                <option value="123">Kyrgyzstan</option>
                                <option value="124">Laos</option>
                                <option value="125">Latvia</option>
                                <option value="126">Lebanon</option>
                                <option value="127">Lesotho</option>
                                <option value="128">Liberia</option>
                                <option value="129">Libya</option>
                                <option value="130">Liechtenstein</option>
                                <option value="131">Lithuania</option>
                                <option value="132">Luxembourg</option>
                                <option value="133">Macao</option>
                                <option value="134">Macedonia</option>
                                <option value="135">Madagascar</option>
                                <option value="136">Malawi</option>
                                <option value="137">Malaysia</option>
                                <option value="138">Maldives</option>
                                <option value="139">Mali</option>
                                <option value="140">Malta</option>
                                <option value="141">Marshall Islands</option>
                                <option value="142">Martinique</option>
                                <option value="143">Mauritania</option>
                                <option value="144">Mauritius</option>
                                <option value="145">Mayotte</option>
                                <option value="146">Mexico</option>
                                <option value="147">Micronessia</option>
                                <option value="148">Moldova</option>
                                <option value="149">Monaco</option>
                                <option value="150">Mongolia</option>
                                <option value="151">Montenegro</option>
                                <option value="152">Montserrat</option>
                                <option value="153">Morocco</option>
                                <option value="154">Mozambique</option>
                                <option value="155">Mynamar</option>
                                <option value="156">Namabia</option>
                                <option value="157">Nauru</option>
                                <option value="158">Nepal</option>
                                <option value="159">Netherlands</option>
                                <option value="160">New Celedonia</option>
                                <option value="161">Newzealand</option>
                                <option value="162">Niger</option>
                                <option value="163">Nigeria</option>
                                <option value="164">Norfolk Island</option>
                                <option value="165">Nothern Mariana Islands</option>
                                <option value="166">Norway</option>
                                <option value="167">Nuie</option>
                                <option value="168">Oman</option>
                                <option value="169">Pakistan</option>
                                <option value="170">Palau</option>
                                <option value="171">Panama</option>
                                <option value="172">Papua New Guinea</option>
                                <option value="173">Paraguay</option>
                                <option value="174">Peru</option>
                                <option value="175">Philippines</option>
                                <option value="176">Pitcaim</option>
                                <option value="177">Poland</option>
                                <option value="178">Portugal</option>
                                <option value="179">Puerto Rico</option>
                                <option value="180">Qatar</option>
                                <option value="181">Reunion</option>
                                <option value="182">Roman</option>
                                 <option value="183">Russia</option>
                                 <option value="184">Rwanda</option>
                                 <option value="185">Saint Barthelemy</option>
                                 <option value="186">Saint Helena</option>
                                 <option value="187">Saint Kitts</option>
                                 <option value="188">Saint Lucia</option>
                                 <option value="189">Saint Martin</option>
                                 <option value="190">Saint Pierre</option>
                                 <option value="191">Saint Vincent</option>
                                 <option value="192">Samoa</option>
                                 <option value="193">Saint Marino</option>
                                 <option value="194">Sao Tome</option>
                                 <option value="195">Saudia Arabia</option>
                                 <option value="196">Senegal</option>
                                 <option value="197">Serbia</option>
                                 <option value="198">Seychelles</option>
                                 <option value="199">Sierra Leone</option>
                                 <option value="200">Singapore</option>
                                 <option value="201">Sint Martin</option>
                                 <option value="202">Slovekia</option>
                                 <option value="203">Slovenia</option>
                                 <option value="204">Solomon Islands</option>
                                 <option value="205">Somalia</option>
                                 <option value="206">South Africa</option>
                                 <option value="207">South Georgia</option>
                                 <option value="208">South Sudan</option>
                                 <option value="209">SPain</option>
                                 <option value="210">Srilanka</option>
                                 <option value="211">Sudan</option>
                                 <option value="212">Suriname</option>
                                 <option value="213">Svalbard</option>
                                 <option value="214">Sweden</option>
                                 <option value="215">Switxerland</option>
                                 <option value="216">Syria</option>
                                 <option value="217">Taiwan</option>
                                 <option value="218">Tajikistan</option>
                                 <option value="219">Tanzania</option>
                                 <option value="220">Thailand</option>
                                 <option value="221">Timor Leste</option>
                                 <option value="222">Togo</option>
                                 <option value="223">Tokelau</option>
                                 <option value="224">Tonga</option>
                                 <option value="225">Trinidad</option>
                                 <option value="226">Tunisia</option>
                                 <option value="227">Turkey</option>
                                 <option value="228">Turkmenistan</option>
                                 <option value="229">Turks</option>
                                 <option value="230">Tuvalu</option>
                                 <option value="231">Uganda</option>
                                 <option value="232">Ukraine</option>
                                 <option value="233">United Arab Emirates</option>
                                 <option value="224">United Kingdom</option>
                                 <option value="225">United States Minor</option>
                                 <option value="226">United States of America</option>
                                 <option value="227">Uruguay</option>
                                 <option value="228">Uzbekistan</option>
                                 <option value="229">Vanuatu</option>
                                 <option value="230">Venezuela</option>
                                 <option value="231">Vietnam</option>
                                 <option value="232">Virgin Islands(British)</option>
                                 <option value="233">Virgin Islands(US)</option>
                                 <option value="234">Wallis and Fatuna</option>
                                 <option value="235">West Bank</option>
                                 <option value="236">Western Sahara</option>
                                 <option value="237">Yemen</option>
                                 <option value="238">Zambia</option>
                                 <option value="239">Zimbabwe</option>
                                 

                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfBirth']==="1" || FormData['RF_CountryOfBirth']==="2" || FormData['RF_CountryOfBirth']==="3" || FormData['RF_CountryOfBirth']==="4" || FormData['RF_CountryOfBirth']==="6" || FormData['RF_CountryOfBirth']==="8" || FormData['RF_CountryOfBirth']==="10" || FormData['RF_CountryOfBirth']==="13" || FormData['RF_CountryOfBirth']==="16" || FormData['RF_CountryOfBirth']==="17" || FormData['RF_CountryOfBirth']==="19" || FormData['RF_CountryOfBirth']==="20" || FormData['RF_CountryOfBirth']==="24" || FormData['RF_CountryOfBirth']==="27"
                                || FormData['RF_CountryOfBirth']==="28" || FormData['RF_CountryOfBirth']==="29" || FormData['RF_CountryOfBirth']==="31" || FormData['RF_CountryOfBirth']==="32" || FormData['RF_CountryOfBirth']==="33" || FormData['RF_CountryOfBirth']==="36" || FormData['RF_CountryOfBirth']==="37" || FormData['RF_CountryOfBirth']==="39" || FormData['RF_CountryOfBirth']==="41" || FormData['RF_CountryOfBirth']==="42" || FormData['RF_CountryOfBirth']==="43" || FormData['RF_CountryOfBirth']==="46" || FormData['RF_CountryOfBirth']==="47" || FormData['RF_CountryOfBirth']==="48" || FormData['RF_CountryOfBirth']==="49" || FormData['RF_CountryOfBirth']==="50" || FormData['RF_CountryOfBirth']==="51" || FormData['RF_CountryOfBirth']==="52" || FormData['RF_CountryOfBirth']==="53"
                                || FormData['RF_CountryOfBirth']==="55" || FormData['RF_CountryOfBirth']==="58" || FormData['RF_CountryOfBirth']==="62" || FormData['RF_CountryOfBirth']==="64" || FormData['RF_CountryOfBirth']==="65" || FormData['RF_CountryOfBirth']==="66" || FormData['RF_CountryOfBirth']==="67" || FormData['RF_CountryOfBirth']==="68" || FormData['RF_CountryOfBirth']==="69" || FormData['RF_CountryOfBirth']==="71" || FormData['RF_CountryOfBirth']==="72" || FormData['RF_CountryOfBirth']==="73" || FormData['RF_CountryOfBirth']==="74"
                                || FormData['RF_CountryOfBirth']==="82" || FormData['RF_CountryOfBirth']==="85" || FormData['RF_CountryOfBirth']==="86" || FormData['RF_CountryOfBirth']==="90" || FormData['RF_CountryOfBirth']==="91" || FormData['RF_CountryOfBirth']==="92" || FormData['RF_CountryOfBirth']==="93"
                                || FormData['RF_CountryOfBirth']==="94" || FormData['RF_CountryOfBirth']==="95" || FormData['RF_CountryOfBirth']==="97" || FormData['RF_CountryOfBirth']==="98" || FormData['RF_CountryOfBirth']==="99" || FormData['RF_CountryOfBirth']==="100" || FormData['RF_CountryOfBirth']==="103"
                                || FormData['RF_CountryOfBirth']==="109"  || FormData['RF_CountryOfBirth']==="112"  || FormData['RF_CountryOfBirth']==="115"  || FormData['RF_CountryOfBirth']==="116"  || FormData['RF_CountryOfBirth']==="117"  || FormData['RF_CountryOfBirth']==="121"  || FormData['RF_CountryOfBirth']==="123"  || FormData['RF_CountryOfBirth']==="124"
                                || FormData['RF_CountryOfBirth']==="126"  || FormData['RF_CountryOfBirth']==="127"  || FormData['RF_CountryOfBirth']==="128"  || FormData['RF_CountryOfBirth']==="129"  || FormData['RF_CountryOfBirth']==="134"  || FormData['RF_CountryOfBirth']==="135"  || FormData['RF_CountryOfBirth']==="136"
                                || FormData['RF_CountryOfBirth']==="139"  || FormData['RF_CountryOfBirth']==="143"  || FormData['RF_CountryOfBirth']==="145"  || FormData['RF_CountryOfBirth']==="146"  || FormData['RF_CountryOfBirth']==="148"  || FormData['RF_CountryOfBirth']==="150" || FormData['RF_CountryOfBirth']==="151"
                                || FormData['RF_CountryOfBirth']==="152" || FormData['RF_CountryOfBirth']==="153" || FormData['RF_CountryOfBirth']==="154" || FormData['RF_CountryOfBirth']==="155" || FormData['RF_CountryOfBirth']==="158" || FormData['RF_CountryOfBirth']==="160" || FormData['RF_CountryOfBirth']==="162"
                                || FormData['RF_CountryOfBirth']==="163" || FormData['RF_CountryOfBirth']==="164" || FormData['RF_CountryOfBirth']==="165" || FormData['RF_CountryOfBirth']==="166" || FormData['RF_CountryOfBirth']==="168" || FormData['RF_CountryOfBirth']==="170" || FormData['RF_CountryOfBirth']==="172" || FormData['RF_CountryOfBirth']==="173" || FormData['RF_CountryOfBirth']==="174" || FormData['RF_CountryOfBirth']==="175" || FormData['RF_CountryOfBirth']==="176" || FormData['RF_CountryOfBirth']==="177"
                                || FormData['RF_CountryOfBirth']==="186" || FormData['RF_CountryOfBirth']==="187" || FormData['RF_CountryOfBirth']==="188" || FormData['RF_CountryOfBirth']==="190" || FormData['RF_CountryOfBirth']==="191" || FormData['RF_CountryOfBirth']==="193" || FormData['RF_CountryOfBirth']==="195"
                                || FormData['RF_CountryOfBirth']==="197" || FormData['RF_CountryOfBirth']==="198" || FormData['RF_CountryOfBirth']==="200" || FormData['RF_CountryOfBirth']==="202" || FormData['RF_CountryOfBirth']==="203" || FormData['RF_CountryOfBirth']==="206" || FormData['RF_CountryOfBirth']==="208" || FormData['RF_CountryOfBirth']==="209"
                                || FormData['RF_CountryOfBirth']==="211" || FormData['RF_CountryOfBirth']==="212" || FormData['RF_CountryOfBirth']==="213" || FormData['RF_CountryOfBirth']==="214" || FormData['RF_CountryOfBirth']==="219" || FormData['RF_CountryOfBirth']==="220" || FormData['RF_CountryOfBirth']==="221" || FormData['RF_CountryOfBirth']==="222" || FormData['RF_CountryOfBirth']==="223" || FormData['RF_CountryOfBirth']==="224"
                                || FormData['RF_CountryOfBirth']==="226" || FormData['RF_CountryOfBirth']==="230" || FormData['RF_CountryOfBirth']==="232" || FormData['RF_CountryOfBirth']==="233" || FormData['RF_CountryOfBirth']==="236" || FormData['RF_CountryOfBirth']==="237" || FormData['RF_CountryOfBirth']==="238" || FormData['RF_CountryOfBirth']==="239")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfBirth']==="5" || FormData['RF_CountryOfBirth']==="7" || FormData['RF_CountryOfBirth']==="9" || FormData['RF_CountryOfBirth']==="12" || FormData['RF_CountryOfBirth']==="25" || FormData['RF_CountryOfBirth']==="34" || FormData['RF_CountryOfBirth']==="35" || FormData['RF_CountryOfBirth']==="61" || FormData['RF_CountryOfBirth']==="76" || FormData['RF_CountryOfBirth']==="84" || FormData['RF_CountryOfBirth']==="88"
                                
                                || FormData['RF_CountryOfBirth']==="114" || FormData['RF_CountryOfBirth']==="130" || FormData['RF_CountryOfBirth']==="132" || FormData['RF_CountryOfBirth']==="142" || FormData['RF_CountryOfBirth']==="149" || FormData['RF_CountryOfBirth']==="159" || FormData['RF_CountryOfBirth']==="161" 
                                || FormData['RF_CountryOfBirth']==="167" || FormData['RF_CountryOfBirth']==="194" || FormData['RF_CountryOfBirth']==="215" || FormData['RF_CountryOfBirth']==="216" )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfBirth']==="11" || FormData['RF_CountryOfBirth']==="14" || FormData['RF_CountryOfBirth']==="15" || FormData['RF_CountryOfBirth']==="18" || FormData['RF_CountryOfBirth']==="22" || FormData['RF_CountryOfBirth']==="23" || FormData['RF_CountryOfBirth']==="26" || FormData['RF_CountryOfBirth']==="30" || FormData['RF_CountryOfBirth']==="38" || FormData['RF_CountryOfBirth']==="40" || FormData['RF_CountryOfBirth']==="44" || FormData['RF_CountryOfBirth']==="45"
                                || FormData['RF_CountryOfBirth']==="54" || FormData['RF_CountryOfBirth']==="56" || FormData['RF_CountryOfBirth']==="59" || FormData['RF_CountryOfBirth']==="60" || FormData['RF_CountryOfBirth']==="63" || FormData['RF_CountryOfBirth']==="70" || FormData['RF_CountryOfBirth']==="75" || FormData['RF_CountryOfBirth']==="77" || FormData['RF_CountryOfBirth']==="78" || FormData['RF_CountryOfBirth']==="79" || FormData['RF_CountryOfBirth']==="80" || FormData['RF_CountryOfBirth']==="81"
                                || FormData['RF_CountryOfBirth']==="83" || FormData['RF_CountryOfBirth']==="87" || FormData['RF_CountryOfBirth']==="89" || FormData['RF_CountryOfBirth']==="96" || FormData['RF_CountryOfBirth']==="101" || FormData['RF_CountryOfBirth']==="104" || FormData['RF_CountryOfBirth']==="105"
                                
                                || FormData['RF_CountryOfBirth']==="108" || FormData['RF_CountryOfBirth']==="110" || FormData['RF_CountryOfBirth']==="111" || FormData['RF_CountryOfBirth']==="113" || FormData['RF_CountryOfBirth']==="118" || FormData['RF_CountryOfBirth']==="120" || FormData['RF_CountryOfBirth']==="125"
                                || FormData['RF_CountryOfBirth']==="131" || FormData['RF_CountryOfBirth']==="133" ||  FormData['RF_CountryOfBirth']==="137" || FormData['RF_CountryOfBirth']==="138" || FormData['RF_CountryOfBirth']==="140" || FormData['RF_CountryOfBirth']==="141"
                                || FormData['RF_CountryOfBirth']==="144" || FormData['RF_CountryOfBirth']==="147" || FormData['RF_CountryOfBirth']==="156" || FormData['RF_CountryOfBirth']==="157" || FormData['RF_CountryOfBirth']==="169" || FormData['RF_CountryOfBirth']==="171" || FormData['RF_CountryOfBirth']==="178" || FormData['RF_CountryOfBirth']==="179" || FormData['RF_CountryOfBirth']==="180" || FormData['RF_CountryOfBirth']==="181" || FormData['RF_CountryOfBirth']==="182" || FormData['RF_CountryOfBirth']==="183"
                                || FormData['RF_CountryOfBirth']==="185" || FormData['RF_CountryOfBirth']==="189" || FormData['RF_CountryOfBirth']==="192" || FormData['RF_CountryOfBirth']==="196" || FormData['RF_CountryOfBirth']==="199" || FormData['RF_CountryOfBirth']==="201" || FormData['RF_CountryOfBirth']==="204" || FormData['RF_CountryOfBirth']==="205"
                                || FormData['RF_CountryOfBirth']==="207" || FormData['RF_CountryOfBirth']==="210" || FormData['RF_CountryOfBirth']==="218" || FormData['RF_CountryOfBirth']==="225" || FormData['RF_CountryOfBirth']==="231" || FormData['RF_CountryOfBirth']==="234" || FormData['RF_CountryOfBirth']==="235" || FormData['RF_CountryOfBirth']==="237" || FormData['RF_CountryOfBirth']==="238")
                            {
                                return (<>
                                     
 "                                   <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfBirth']==="21" || FormData['RF_CountryOfBirth']==="57" || FormData['RF_CountryOfBirth']==="106" || FormData['RF_CountryOfBirth']==="107" || FormData['RF_CountryOfBirth']==="119" || FormData['RF_CountryOfBirth']==="187" || FormData['RF_CountryOfBirth']==="217" )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                            
                                     
                                    <label className="col-form-label">3</label>
                                    
                             
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(
                                   FormData['RF_CountryOfBirth']==="1" || FormData['RF_CountryOfBirth']==="2" || FormData['RF_CountryOfBirth']==="3" || FormData['RF_CountryOfBirth']==="4" || FormData['RF_CountryOfBirth']==="6" || FormData['RF_CountryOfBirth']==="8" || FormData['RF_CountryOfBirth']==="10" || FormData['RF_CountryOfBirth']==="13" || FormData['RF_CountryOfBirth']==="16" || FormData['RF_CountryOfBirth']==="17" || FormData['RF_CountryOfBirth']==="19" || FormData['RF_CountryOfBirth']==="20" || FormData['RF_CountryOfBirth']==="24"
                                || FormData['RF_CountryOfBirth']==="27" || FormData['RF_CountryOfBirth']==="28" || FormData['RF_CountryOfBirth']==="29" || FormData['RF_CountryOfBirth']==="30" || FormData['RF_CountryOfBirth']==="31" || FormData['RF_CountryOfBirth']==="32" || FormData['RF_CountryOfBirth']==="33" || FormData['RF_CountryOfBirth']==="36" || FormData['RF_CountryOfBirth']==="37" || FormData['RF_CountryOfBirth']==="39" || FormData['RF_CountryOfBirth']==="41" || FormData['RF_CountryOfBirth']==="42" || FormData['RF_CountryOfBirth']==="43"
                                || FormData['RF_CountryOfBirth']==="46" || FormData['RF_CountryOfBirth']==="47" || FormData['RF_CountryOfBirth']==="48" || FormData['RF_CountryOfBirth']==="49" || FormData['RF_CountryOfBirth']==="50" || FormData['RF_CountryOfBirth']==="51" || FormData['RF_CountryOfBirth']==="52" || FormData['RF_CountryOfBirth']==="53" || FormData['RF_CountryOfBirth']==="55" || FormData['RF_CountryOfBirth']==="58" || FormData['RF_CountryOfBirth']==="62" || FormData['RF_CountryOfBirth']==="64" || FormData['RF_CountryOfBirth']==="65" || FormData['RF_CountryOfBirth']==="66" 
                                || FormData['RF_CountryOfBirth']==="67" || FormData['RF_CountryOfBirth']==="68" || FormData['RF_CountryOfBirth']==="69" || FormData['RF_CountryOfBirth']==="70" || FormData['RF_CountryOfBirth']==="71" || FormData['RF_CountryOfBirth']==="72" || FormData['RF_CountryOfBirth']==="73" || FormData['RF_CountryOfBirth']==="74" || FormData['RF_CountryOfBirth']==="82" || FormData['RF_CountryOfBirth']==="85" || FormData['RF_CountryOfBirth']==="86" || FormData['RF_CountryOfBirth']==="90" || FormData['RF_CountryOfBirth']==="91" || FormData['RF_CountryOfBirth']==="92" || FormData['RF_CountryOfBirth']==="93"
                                || FormData['RF_CountryOfBirth']==="94" || FormData['RF_CountryOfBirth']==="95" || FormData['RF_CountryOfBirth']==="96" || FormData['RF_CountryOfBirth']==="97" || FormData['RF_CountryOfBirth']==="98" || FormData['RF_CountryOfBirth']==="99" || FormData['RF_CountryOfBirth']==="100" || FormData['RF_CountryOfBirth']==="102" || FormData['RF_CountryOfBirth']==="103"
                                
                                || FormData['RF_CountryOfBirth']==="109"  || FormData['RF_CountryOfBirth']==="112"  || FormData['RF_CountryOfBirth']==="115"  || FormData['RF_CountryOfBirth']==="116"  || FormData['RF_CountryOfBirth']==="117"  || FormData['RF_CountryOfBirth']==="121"  || FormData['RF_CountryOfBirth']==="123"  || FormData['RF_CountryOfBirth']==="124"
                                || FormData['RF_CountryOfBirth']==="126"  || FormData['RF_CountryOfBirth']==="127"  || FormData['RF_CountryOfBirth']==="128"  || FormData['RF_CountryOfBirth']==="129"  || FormData['RF_CountryOfBirth']==="134"  || FormData['RF_CountryOfBirth']==="135"  || FormData['RF_CountryOfBirth']==="136"
                                || FormData['RF_CountryOfBirth']==="139"  || FormData['RF_CountryOfBirth']==="143"  || FormData['RF_CountryOfBirth']==="145"  || FormData['RF_CountryOfBirth']==="146"  || FormData['RF_CountryOfBirth']==="148"  || FormData['RF_CountryOfBirth']==="150" || FormData['RF_CountryOfBirth']==="151"
                                || FormData['RF_CountryOfBirth']==="152" || FormData['RF_CountryOfBirth']==="153" || FormData['RF_CountryOfBirth']==="154" || FormData['RF_CountryOfBirth']==="155" || FormData['RF_CountryOfBirth']==="158" || FormData['RF_CountryOfBirth']==="160" || FormData['RF_CountryOfBirth']==="162" 
                                || FormData['RF_CountryOfBirth']==="163" || FormData['RF_CountryOfBirth']==="164" || FormData['RF_CountryOfBirth']==="165" || FormData['RF_CountryOfBirth']==="166" || FormData['RF_CountryOfBirth']==="168" || FormData['RF_CountryOfBirth']==="170" || FormData['RF_CountryOfBirth']==="172" || FormData['RF_CountryOfBirth']==="173" || FormData['RF_CountryOfBirth']==="174" || FormData['RF_CountryOfBirth']==="175" || FormData['RF_CountryOfBirth']==="176" || FormData['RF_CountryOfBirth']==="177"
                                || FormData['RF_CountryOfBirth']==="186" || FormData['RF_CountryOfBirth']==="187" || FormData['RF_CountryOfBirth']==="188" || FormData['RF_CountryOfBirth']==="190" || FormData['RF_CountryOfBirth']==="191" || FormData['RF_CountryOfBirth']==="193" || FormData['RF_CountryOfBirth']==="195"
                                || FormData['RF_CountryOfBirth']==="197" || FormData['RF_CountryOfBirth']==="198" || FormData['RF_CountryOfBirth']==="200" || FormData['RF_CountryOfBirth']==="202" || FormData['RF_CountryOfBirth']==="203" || FormData['RF_CountryOfBirth']==="206" || FormData['RF_CountryOfBirth']==="208" || FormData['RF_CountryOfBirth']==="209"
                                || FormData['RF_CountryOfBirth']==="211" || FormData['RF_CountryOfBirth']==="212" || FormData['RF_CountryOfBirth']==="213" || FormData['RF_CountryOfBirth']==="214" || FormData['RF_CountryOfBirth']==="219" || FormData['RF_CountryOfBirth']==="220" || FormData['RF_CountryOfBirth']==="221" || FormData['RF_CountryOfBirth']==="222" || FormData['RF_CountryOfBirth']==="223" || FormData['RF_CountryOfBirth']==="224"
                                || FormData['RF_CountryOfBirth']==="226" || FormData['RF_CountryOfBirth']==="230" || FormData['RF_CountryOfBirth']==="232" || FormData['RF_CountryOfBirth']==="233" || FormData['RF_CountryOfBirth']==="236" || FormData['RF_CountryOfBirth']==="237" || FormData['RF_CountryOfBirth']==="238" || FormData['RF_CountryOfBirth']==="239")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfBirth']==="5" || FormData['RF_CountryOfBirth']==="7" || FormData['RF_CountryOfBirth']==="9" || FormData['RF_CountryOfBirth']==="12" || FormData['RF_CountryOfBirth']==="25" || FormData['RF_CountryOfBirth']==="34" || FormData['RF_CountryOfBirth']==="35" || FormData['RF_CountryOfBirth']==="61" || FormData['RF_CountryOfBirth']==="76" || FormData['RF_CountryOfBirth']==="84" || FormData['RF_CountryOfBirth']==="88"
                                
                                || FormData['RF_CountryOfBirth']==="114" || FormData['RF_CountryOfBirth']==="130" || FormData['RF_CountryOfBirth']==="132" || FormData['RF_CountryOfBirth']==="142" || FormData['RF_CountryOfBirth']==="149" || FormData['RF_CountryOfBirth']==="159" || FormData['RF_CountryOfBirth']==="161" 
                                || FormData['RF_CountryOfBirth']==="167" || FormData['RF_CountryOfBirth']==="194" || FormData['RF_CountryOfBirth']==="215" || FormData['RF_CountryOfBirth']==="216")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfBirth']==="11" || FormData['RF_CountryOfBirth']==="14" || FormData['RF_CountryOfBirth']==="15" || FormData['RF_CountryOfBirth']==="18" || FormData['RF_CountryOfBirth']==="22" || FormData['RF_CountryOfBirth']==="23" || FormData['RF_CountryOfBirth']==="26" || FormData['RF_CountryOfBirth']==="30" || FormData['RF_CountryOfBirth']==="38" || FormData['RF_CountryOfBirth']==="40"
                                || FormData['RF_CountryOfBirth']==="44" || FormData['RF_CountryOfBirth']==="45" || FormData['RF_CountryOfBirth']==="54" || FormData['RF_CountryOfBirth']==="56" || FormData['RF_CountryOfBirth']==="59" || FormData['RF_CountryOfBirth']==="60" || FormData['RF_CountryOfBirth']==="63" || FormData['RF_CountryOfBirth']==="70" || FormData['RF_CountryOfBirth']==="75" || FormData['RF_CountryOfBirth']==="77" 
                                || FormData['RF_CountryOfBirth']==="78" || FormData['RF_CountryOfBirth']==="79" || FormData['RF_CountryOfBirth']==="80" || FormData['RF_CountryOfBirth']==="81" || FormData['RF_CountryOfBirth']==="83" || FormData['RF_CountryOfBirth']==="87" || FormData['RF_CountryOfBirth']==="89" || FormData['RF_CountryOfBirth']==="96" || FormData['RF_CountryOfBirth']==="97" || FormData['RF_CountryOfBirth']==="98" 
                                || FormData['RF_CountryOfBirth']==="99" || FormData['RF_CountryOfBirth']==="100" || FormData['RF_CountryOfBirth']==="101" || FormData['RF_CountryOfBirth']==="102" || FormData['RF_CountryOfBirth']==="104" || FormData['RF_CountryOfBirth']==="105"
                                || FormData['RF_CountryOfBirth']==="108" || FormData['RF_CountryOfBirth']==="110" || FormData['RF_CountryOfBirth']==="111" || FormData['RF_CountryOfBirth']==="113" || FormData['RF_CountryOfBirth']==="118" || FormData['RF_CountryOfBirth']==="120" || FormData['RF_CountryOfBirth']==="125"
                                || FormData['RF_CountryOfBirth']==="131" || FormData['RF_CountryOfBirth']==="133" ||  FormData['RF_CountryOfBirth']==="137" || FormData['RF_CountryOfBirth']==="138" || FormData['RF_CountryOfBirth']==="140" || FormData['RF_CountryOfBirth']==="141"
                                || FormData['RF_CountryOfBirth']==="144" || FormData['RF_CountryOfBirth']==="147" || FormData['RF_CountryOfBirth']==="156" || FormData['RF_CountryOfBirth']==="157" || FormData['RF_CountryOfBirth']==="169" || FormData['RF_CountryOfBirth']==="171" || FormData['RF_CountryOfBirth']==="178" || FormData['RF_CountryOfBirth']==="179" || FormData['RF_CountryOfBirth']==="180" || FormData['RF_CountryOfBirth']==="181" || FormData['RF_CountryOfBirth']==="182" || FormData['RF_CountryOfBirth']==="183"
                                || FormData['RF_CountryOfBirth']==="185" || FormData['RF_CountryOfBirth']==="189" || FormData['RF_CountryOfBirth']==="192" || FormData['RF_CountryOfBirth']==="196" || FormData['RF_CountryOfBirth']==="199" || FormData['RF_CountryOfBirth']==="201" || FormData['RF_CountryOfBirth']==="204" || FormData['RF_CountryOfBirth']==="205"
                                || FormData['RF_CountryOfBirth']==="207" || FormData['RF_CountryOfBirth']==="210" || FormData['RF_CountryOfBirth']==="218" || FormData['RF_CountryOfBirth']==="225" || FormData['RF_CountryOfBirth']==="231" || FormData['RF_CountryOfBirth']==="234" || FormData['RF_CountryOfBirth']==="235" || FormData['RF_CountryOfBirth']==="237" || FormData['RF_CountryOfBirth']==="238")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfBirth']==="21" || FormData['RF_CountryOfBirth']==="57" || FormData['RF_CountryOfBirth']==="106" || FormData['RF_CountryOfBirth']==="107" || FormData['RF_CountryOfBirth']==="119" || FormData['RF_CountryOfBirth']==="187" || FormData['RF_CountryOfBirth']==="217")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">12</label>
                                    
                                </>);
                            }
    
    
                            })()}
                        </div>

                        <br/>
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Country of Residence</label>
                        </div>
                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_CountryOfResidence' id='RF_CountryOfResidence' value={FormData['RF_CountryOfResidence']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andora</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armania</option>
                                <option value="12">Aruba</option>
                                <option value="13">Auckland Islands</option>
                                <option value="14">Australia</option>
                                <option value="15">Austria</option>
                                <option value="16">Azerbaijan</option>
                                <option value="17">Bahamas</option>
                                <option value="18">Bahrain</option>
                                <option value="19">Bangladesh</option>
                                <option value="20">Barbados</option>
                                <option value="21">Belarus</option>
                                <option value="22">Belgium</option>
                                <option value="23">Belize</option>
                                <option value="24">Benin</option>
                                <option value="25">Bermuda</option>
                                <option value="26">Bhutan</option>
                                <option value="27">Bolivia</option>
                                <option value="28">Bonaire</option>
                                <option value="29">Bosnia</option>
                                <option value="30">Botswana</option>
                                <option value="31">Bouvet Islands</option>
                                <option value="32">Brazil</option>
                                <option value="33">British Indian Ocean Teritory</option>
                                <option value="34">Brunei Darussalam</option>
                                <option value="35">Bulgaria</option>
                                <option value="36">Burkina Faso</option>
                                <option value="37">Burundi</option>
                                <option value="38">Cabo Verde</option>
                                <option value="39">Cambodia</option>
                                <option value="40">Cameroon</option>
                                <option value="41">Canada</option>
                                <option value="42">Cayman Islands</option>
                                <option value="43">Central African Republic</option>
                                <option value="44">Chad</option>
                                <option value="45">Chile</option>
                                <option value="46">China</option>
                                <option value="47">Christmas Island</option>
                                <option value="48">Cocos</option>
                                <option value="49">Colombia</option>
                                <option value="50">Comoros</option>
                                <option value="51">Congo Democratic</option>
                                <option value="52">Congo Republic</option>
                                <option value="53">Cook Islands</option>
                                <option value="54">Costa Rica</option>
                                <option value="55">Ivory Cost</option>
                                <option value="56">Croatia</option>
                                <option value="57">Cuba</option>
                                <option value="58">Curacao</option>
                                <option value="59">Cyprus</option>
                                <option value="60">Czech Republic</option>
                                <option value="61">Denmark</option>
                                <option value="62">Djibouti</option>
                                <option value="63">Dominica</option>
                                <option value="64">Dominican Republic</option>
                                <option value="65">Ecuador</option>
                                <option value="66">Egypt</option>
                                <option value="67">EI Salvador</option>
                                <option value="68">Equatorial Guinea</option>
                                <option value="69">Eritrea</option>
                                <option value="70">Estonia</option>
                                <option value="71">eSwaitini</option>
                                <option value="72">Ethiopia</option>
                                <option value="73">Falkland Islands</option>
                                <option value="74">Faroe Islands</option>
                                <option value="75">Fiji</option>
                                <option value="76">Finland</option>
                                <option value="77">France</option>
                                <option value="78">French Guiana</option>
                                <option value="79">French Polynesia</option>
                                <option value="80">French Southern Territories</option>
                                <option value="81">Gabon</option>
                                <option value="82">Gambia</option>
                                <option value="83">Georgia</option>
                                <option value="84">Germany</option>
                                <option value="85">Ghana</option>
                                <option value="86">Gibralter</option>
                                <option value="87">Greece</option>
                                <option value="88">Greenland</option>
                                <option value="89">Grenada</option>
                                <option value="90">Guadeloupe</option>
                                <option value="91">Guam</option>
                                <option value="92">Guatemala</option>
                                <option value="93">Guernsey</option>
                                <option value="94">Guinea</option>
                                <option value="95">Guinea Bissau</option>
                                <option value="96">Guyana</option>
                                <option value="97">Haiti</option>
                                <option value="98">Herd Island</option>
                                <option value="99">Holy See</option>
                                <option value="100">Honduras</option>
                                <option value="101">Hongkong</option>
                                <option value="102">Hungary</option>
                                <option value="103">Iceland</option>
                                <option value="104">India</option>
                                <option value="105">Indonessia</option>
                                <option value="106">Iran</option>
                                <option value="107">Iraq</option>
                                <option value="108">Ireland</option>
                                <option value="109">Isle of man</option>
                                <option value="110">Israel</option>
                                <option value="111">Italy</option>
                                <option value="112">Jamaica</option>
                                <option value="113">Japan</option>
                                <option value="114">Jersey</option>
                                <option value="115">Jordan</option>
                                <option value="116">Kazakhstan</option>
                                <option value="117">Kenya</option>
                                <option value="118">Kiribati</option>
                                <option value="119">Korea North</option>
                                <option value="120">Korea South</option>
                                <option value="121">Kosovo</option>
                                <option value="122">Kuwait</option>
                                <option value="123">Kyrgyzstan</option>
                                <option value="124">Laos</option>
                                <option value="125">Latvia</option>
                                <option value="126">Lebanon</option>
                                <option value="127">Lesotho</option>
                                <option value="128">Liberia</option>
                                <option value="129">Libya</option>
                                <option value="130">Liechtenstein</option>
                                <option value="131">Lithuania</option>
                                <option value="132">Luxembourg</option>
                                <option value="133">Macao</option>
                                <option value="134">Macedonia</option>
                                <option value="135">Madagascar</option>
                                <option value="136">Malawi</option>
                                <option value="137">Malaysia</option>
                                <option value="138">Maldives</option>
                                <option value="139">Mali</option>
                                <option value="140">Malta</option>
                                <option value="141">Marshall Islands</option>
                                <option value="142">Martinique</option>
                                <option value="143">Mauritania</option>
                                <option value="144">Mauritius</option>
                                <option value="145">Mayotte</option>
                                <option value="146">Mexico</option>
                                <option value="147">Micronessia</option>
                                <option value="148">Moldova</option>
                                <option value="149">Monaco</option>
                                <option value="150">Mongolia</option>
                                <option value="151">Montenegro</option>
                                <option value="152">Montserrat</option>
                                <option value="153">Morocco</option>
                                <option value="154">Mozambique</option>
                                <option value="155">Mynamar</option>
                                <option value="156">Namabia</option>
                                <option value="157">Nauru</option>
                                <option value="158">Nepal</option>
                                <option value="159">Netherlands</option>
                                <option value="160">New Celedonia</option>
                                <option value="161">Newzealand</option>
                                <option value="162">Niger</option>
                                <option value="163">Nigeria</option>
                                <option value="164">Norfolk Island</option>
                                <option value="165">Nothern Mariana Islands</option>
                                <option value="166">Norway</option>
                                <option value="167">Nuie</option>
                                <option value="168">Oman</option>
                                <option value="169">Pakistan</option>
                                <option value="170">Palau</option>
                                <option value="171">Panama</option>
                                <option value="172">Papua New Guinea</option>
                                <option value="173">Paraguay</option>
                                <option value="174">Peru</option>
                                <option value="175">Philippines</option>
                                <option value="176">Pitcaim</option>
                                <option value="177">Poland</option>
                                <option value="178">Portugal</option>
                                <option value="179">Puerto Rico</option>
                                <option value="180">Qatar</option>
                                <option value="181">Reunion</option>
                                <option value="182">Roman</option>
                                 <option value="183">Russia</option>
                                 <option value="184">Rwanda</option>
                                 <option value="185">Saint Barthelemy</option>
                                 <option value="186">Saint Helena</option>
                                 <option value="187">Saint Kitts</option>
                                 <option value="188">Saint Lucia</option>
                                 <option value="189">Saint Martin</option>
                                 <option value="190">Saint Pierre</option>
                                 <option value="191">Saint Vincent</option>
                                 <option value="192">Samoa</option>
                                 <option value="193">Saint Marino</option>
                                 <option value="194">Sao Tome</option>
                                 <option value="195">Saudia Arabia</option>
                                 <option value="196">Senegal</option>
                                 <option value="197">Serbia</option>
                                 <option value="198">Seychelles</option>
                                 <option value="199">Sierra Leone</option>
                                 <option value="200">Singapore</option>
                                 <option value="201">Sint Martin</option>
                                 <option value="202">Slovekia</option>
                                 <option value="203">Slovenia</option>
                                 <option value="204">Solomon Islands</option>
                                 <option value="205">Somalia</option>
                                 <option value="206">South Africa</option>
                                 <option value="207">South Georgia</option>
                                 <option value="208">South Sudan</option>
                                 <option value="209">SPain</option>
                                 <option value="210">Srilanka</option>
                                 <option value="211">Sudan</option>
                                 <option value="212">Suriname</option>
                                 <option value="213">Svalbard</option>
                                 <option value="214">Sweden</option>
                                 <option value="215">Switxerland</option>
                                 <option value="216">Syria</option>
                                 <option value="217">Taiwan</option>
                                 <option value="218">Tajikistan</option>
                                 <option value="219">Tanzania</option>
                                 <option value="220">Thailand</option>
                                 <option value="221">Timor Leste</option>
                                 <option value="222">Togo</option>
                                 <option value="223">Tokelau</option>
                                 <option value="224">Tonga</option>
                                 <option value="225">Trinidad</option>
                                 <option value="226">Tunisia</option>
                                 <option value="227">Turkey</option>
                                 <option value="228">Turkmenistan</option>
                                 <option value="229">Turks</option>
                                 <option value="230">Tuvalu</option>
                                 <option value="231">Uganda</option>
                                 <option value="232">Ukraine</option>
                                 <option value="233">United Arab Emirates</option>
                                 <option value="224">United Kingdom</option>
                                 <option value="225">United States Minor</option>
                                 <option value="226">United States of America</option>
                                 <option value="227">Uruguay</option>
                                 <option value="228">Uzbekistan</option>
                                 <option value="229">Vanuatu</option>
                                 <option value="230">Venezuela</option>
                                 <option value="231">Vietnam</option>
                                 <option value="232">Virgin Islands(British)</option>
                                 <option value="233">Virgin Islands(US)</option>
                                 <option value="234">Wallis and Fatuna</option>
                                 <option value="235">West Bank</option>
                                 <option value="236">Western Sahara</option>
                                 <option value="237">Yemen</option>
                                 <option value="238">Zambia</option>
                                 <option value="239">Zimbabwe</option>
 
                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfResidence']===1 || FormData['RF_CountryOfResidence']===2 || FormData['RF_CountryOfResidence']===3 || FormData['RF_CountryOfResidence']===4 || FormData['RF_CountryOfResidence']===6 || FormData['RF_CountryOfResidence']===8 || FormData['RF_CountryOfResidence']===10 || FormData['RF_CountryOfResidence']===13 || FormData['RF_CountryOfResidence']===16 || FormData['RF_CountryOfResidence']===17 || FormData['RF_CountryOfResidence']===19 || FormData['RF_CountryOfResidence']===20 || FormData['RF_CountryOfResidence']===24 || FormData['RF_CountryOfResidence']===27
                                || FormData['RF_CountryOfResidence']===28 || FormData['RF_CountryOfResidence']===29 || FormData['RF_CountryOfResidence']===31 || FormData['RF_CountryOfResidence']===32 || FormData['RF_CountryOfResidence']===33 || FormData['RF_CountryOfResidence']===36 || FormData['RF_CountryOfResidence']===37 || FormData['RF_CountryOfResidence']===39 || FormData['RF_CountryOfResidence']===41 || FormData['RF_CountryOfResidence']===42 || FormData['RF_CountryOfResidence']===43 || FormData['RF_CountryOfResidence']===46 || FormData['RF_CountryOfResidence']===47 || FormData['RF_CountryOfResidence']===48 || FormData['RF_CountryOfResidence']===49 || FormData['RF_CountryOfResidence']===50 || FormData['RF_CountryOfResidence']===51 || FormData['RF_CountryOfResidence']===52 || FormData['RF_CountryOfResidence']===53
                                || FormData['RF_CountryOfResidence']===55 || FormData['RF_CountryOfResidence']===58 || FormData['RF_CountryOfResidence']===62 || FormData['RF_CountryOfResidence']===64 || FormData['RF_CountryOfResidence']===65 || FormData['RF_CountryOfResidence']===66 || FormData['RF_CountryOfResidence']===67 || FormData['RF_CountryOfResidence']===68 || FormData['RF_CountryOfResidence']===69 || FormData['RF_CountryOfResidence']===71 || FormData['RF_CountryOfResidence']===72 || FormData['RF_CountryOfResidence']===73 || FormData['RF_CountryOfResidence']===74
                                || FormData['RF_CountryOfResidence']===82 || FormData['RF_CountryOfResidence']===85 || FormData['RF_CountryOfResidence']===86 || FormData['RF_CountryOfResidence']===90 || FormData['RF_CountryOfResidence']===91 || FormData['RF_CountryOfResidence']===92 || FormData['RF_CountryOfResidence']===93
                                || FormData['RF_CountryOfResidence']===94 || FormData['RF_CountryOfResidence']===95 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===103 
                                
                                || FormData['RF_CountryOfResidence']===109  || FormData['RF_CountryOfResidence']===112  || FormData['RF_CountryOfResidence']===115  || FormData['RF_CountryOfResidence']===116  || FormData['RF_CountryOfResidence']===117  || FormData['RF_CountryOfResidence']===121  || FormData['RF_CountryOfResidence']===123  || FormData['RF_CountryOfResidence']===124
                                || FormData['RF_CountryOfResidence']===126  || FormData['RF_CountryOfResidence']===127  || FormData['RF_CountryOfResidence']===128  || FormData['RF_CountryOfResidence']===129  || FormData['RF_CountryOfResidence']===134  || FormData['RF_CountryOfResidence']===135  || FormData['RF_CountryOfResidence']===136
                                || FormData['RF_CountryOfResidence']===139  || FormData['RF_CountryOfResidence']===143  || FormData['RF_CountryOfResidence']===145  || FormData['RF_CountryOfResidence']===146  || FormData['RF_CountryOfResidence']===148  || FormData['RF_CountryOfResidence']===150 || FormData['RF_CountryOfResidence']===151
                                || FormData['RF_CountryOfResidence']===152 || FormData['RF_CountryOfResidence']===153 || FormData['RF_CountryOfResidence']===154 || FormData['RF_CountryOfResidence']===155 || FormData['RF_CountryOfResidence']===158 || FormData['RF_CountryOfResidence']===160 || FormData['RF_CountryOfResidence']===162 
                                || FormData['RF_CountryOfResidence']===163 || FormData['RF_CountryOfResidence']===164 || FormData['RF_CountryOfResidence']===165 || FormData['RF_CountryOfResidence']===166 || FormData['RF_CountryOfResidence']===168 || FormData['RF_CountryOfResidence']===170 || FormData['RF_CountryOfResidence']===172 || FormData['RF_CountryOfResidence']===173 || FormData['RF_CountryOfResidence']===174 || FormData['RF_CountryOfResidence']===175 || FormData['RF_CountryOfResidence']===176 || FormData['RF_CountryOfResidence']===177
                                || FormData['RF_CountryOfResidence']===186 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===188 || FormData['RF_CountryOfResidence']===190 || FormData['RF_CountryOfResidence']===191 || FormData['RF_CountryOfResidence']===193 || FormData['RF_CountryOfResidence']===195
                                || FormData['RF_CountryOfResidence']===197 || FormData['RF_CountryOfResidence']===198 || FormData['RF_CountryOfResidence']===200 || FormData['RF_CountryOfResidence']===202 || FormData['RF_CountryOfResidence']===203 || FormData['RF_CountryOfResidence']===206 || FormData['RF_CountryOfResidence']===208 || FormData['RF_CountryOfResidence']===209
                                || FormData['RF_CountryOfResidence']===211 || FormData['RF_CountryOfResidence']===212 || FormData['RF_CountryOfResidence']===213 || FormData['RF_CountryOfResidence']===214 || FormData['RF_CountryOfResidence']===219 || FormData['RF_CountryOfResidence']===220 || FormData['RF_CountryOfResidence']===221 || FormData['RF_CountryOfResidence']===222 || FormData['RF_CountryOfResidence']===223 || FormData['RF_CountryOfResidence']===224
                                || FormData['RF_CountryOfResidence']===226 || FormData['RF_CountryOfResidence']===230 || FormData['RF_CountryOfResidence']===232 || FormData['RF_CountryOfResidence']===233 || FormData['RF_CountryOfResidence']===236 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238 || FormData['RF_CountryOfResidence']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===5 || FormData['RF_CountryOfResidence']===7 || FormData['RF_CountryOfResidence']===9 || FormData['RF_CountryOfResidence']===12 || FormData['RF_CountryOfResidence']===25 || FormData['RF_CountryOfResidence']===34 || FormData['RF_CountryOfResidence']===35 || FormData['RF_CountryOfResidence']===61 || FormData['RF_CountryOfResidence']===76 || FormData['RF_CountryOfResidence']===84 || FormData['RF_CountryOfResidence']===88
                                
                                || FormData['RF_CountryOfResidence']===114 || FormData['RF_CountryOfResidence']===130 || FormData['RF_CountryOfResidence']===132 || FormData['RF_CountryOfResidence']===142 || FormData['RF_CountryOfResidence']===149 || FormData['RF_CountryOfResidence']===159 || FormData['RF_CountryOfResidence']===161 
                                || FormData['RF_CountryOfResidence']===167 || FormData['RF_CountryOfResidence']===194 || FormData['RF_CountryOfResidence']===215 || FormData['RF_CountryOfResidence']===216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===11 || FormData['RF_CountryOfResidence']===14 || FormData['RF_CountryOfResidence']===15 || FormData['RF_CountryOfResidence']===18 || FormData['RF_CountryOfResidence']===22 || FormData['RF_CountryOfResidence']===23 || FormData['RF_CountryOfResidence']===26 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===38 || FormData['RF_CountryOfResidence']===40 || FormData['RF_CountryOfResidence']===44 || FormData['RF_CountryOfResidence']===45
                                || FormData['RF_CountryOfResidence']===54 || FormData['RF_CountryOfResidence']===56 || FormData['RF_CountryOfResidence']===59 || FormData['RF_CountryOfResidence']===60 || FormData['RF_CountryOfResidence']===63 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===75 || FormData['RF_CountryOfResidence']===77 || FormData['RF_CountryOfResidence']===78 || FormData['RF_CountryOfResidence']===79 || FormData['RF_CountryOfResidence']===80 || FormData['RF_CountryOfResidence']===81
                                || FormData['RF_CountryOfResidence']===83 || FormData['RF_CountryOfResidence']===87 || FormData['RF_CountryOfResidence']===89 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===101 || FormData['RF_CountryOfResidence']===104 || FormData['RF_CountryOfResidence']===105
                                
                                || FormData['RF_CountryOfResidence']===108 || FormData['RF_CountryOfResidence']===110 || FormData['RF_CountryOfResidence']===111 || FormData['RF_CountryOfResidence']===113 || FormData['RF_CountryOfResidence']===118 || FormData['RF_CountryOfResidence']===120 || FormData['RF_CountryOfResidence']===125
                                || FormData['RF_CountryOfResidence']===131 || FormData['RF_CountryOfResidence']===133 ||  FormData['RF_CountryOfResidence']===137 || FormData['RF_CountryOfResidence']===138 || FormData['RF_CountryOfResidence']===140 || FormData['RF_CountryOfResidence']===141
                                || FormData['RF_CountryOfResidence']===144 || FormData['RF_CountryOfResidence']===147 || FormData['RF_CountryOfResidence']===156 || FormData['RF_CountryOfResidence']===157 || FormData['RF_CountryOfResidence']===169 || FormData['RF_CountryOfResidence']===171 || FormData['RF_CountryOfResidence']===178 || FormData['RF_CountryOfResidence']===179 || FormData['RF_CountryOfResidence']===180 || FormData['RF_CountryOfResidence']===181 || FormData['RF_CountryOfResidence']===182 || FormData['RF_CountryOfResidence']===183
                                || FormData['RF_CountryOfResidence']===185 || FormData['RF_CountryOfResidence']===189 || FormData['RF_CountryOfResidence']===192 || FormData['RF_CountryOfResidence']===196 || FormData['RF_CountryOfResidence']===199 || FormData['RF_CountryOfResidence']===201 || FormData['RF_CountryOfResidence']===204 || FormData['RF_CountryOfResidence']===205
                                || FormData['RF_CountryOfResidence']===207 || FormData['RF_CountryOfResidence']===210 || FormData['RF_CountryOfResidence']===218 || FormData['RF_CountryOfResidence']===225 || FormData['RF_CountryOfResidence']===231 || FormData['RF_CountryOfResidence']===234 || FormData['RF_CountryOfResidence']===235 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===21 || FormData['RF_CountryOfResidence']===57 || FormData['RF_CountryOfResidence']===106 || FormData['RF_CountryOfResidence']===107 || FormData['RF_CountryOfResidence']===119 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===217 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                            
                                     
                                    <label className="col-form-label">3</label>
                                    
                             
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfResidence']===1 || FormData['RF_CountryOfResidence']===2 || FormData['RF_CountryOfResidence']===3 || FormData['RF_CountryOfResidence']===4 || FormData['RF_CountryOfResidence']===6 || FormData['RF_CountryOfResidence']===8 || FormData['RF_CountryOfResidence']===10 || FormData['RF_CountryOfResidence']===13 || FormData['RF_CountryOfResidence']===16 || FormData['RF_CountryOfResidence']===17 || FormData['RF_CountryOfResidence']===19 || FormData['RF_CountryOfResidence']===20 || FormData['RF_CountryOfResidence']===24
                                || FormData['RF_CountryOfResidence']===27 || FormData['RF_CountryOfResidence']===28 || FormData['RF_CountryOfResidence']===29 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===31 || FormData['RF_CountryOfResidence']===32 || FormData['RF_CountryOfResidence']===33 || FormData['RF_CountryOfResidence']===36 || FormData['RF_CountryOfResidence']===37 || FormData['RF_CountryOfResidence']===39 || FormData['RF_CountryOfResidence']===41 || FormData['RF_CountryOfResidence']===42 || FormData['RF_CountryOfResidence']===43
                                || FormData['RF_CountryOfResidence']===46 || FormData['RF_CountryOfResidence']===47 || FormData['RF_CountryOfResidence']===48 || FormData['RF_CountryOfResidence']===49 || FormData['RF_CountryOfResidence']===50 || FormData['RF_CountryOfResidence']===51 || FormData['RF_CountryOfResidence']===52 || FormData['RF_CountryOfResidence']===53 || FormData['RF_CountryOfResidence']===55 || FormData['RF_CountryOfResidence']===58 || FormData['RF_CountryOfResidence']===62 || FormData['RF_CountryOfResidence']===64 || FormData['RF_CountryOfResidence']===65 || FormData['RF_CountryOfResidence']===66 
                                || FormData['RF_CountryOfResidence']===67 || FormData['RF_CountryOfResidence']===68 || FormData['RF_CountryOfResidence']===69 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===71 || FormData['RF_CountryOfResidence']===72 || FormData['RF_CountryOfResidence']===73 || FormData['RF_CountryOfResidence']===74 || FormData['RF_CountryOfResidence']===82 || FormData['RF_CountryOfResidence']===85 || FormData['RF_CountryOfResidence']===86 || FormData['RF_CountryOfResidence']===90 || FormData['RF_CountryOfResidence']===91 || FormData['RF_CountryOfResidence']===92 || FormData['RF_CountryOfResidence']===93
                                || FormData['RF_CountryOfResidence']===94 || FormData['RF_CountryOfResidence']===95 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===103
                                
                                || FormData['RF_CountryOfResidence']===109  || FormData['RF_CountryOfResidence']===112  || FormData['RF_CountryOfResidence']===115  || FormData['RF_CountryOfResidence']===116  || FormData['RF_CountryOfResidence']===117  || FormData['RF_CountryOfResidence']===121  || FormData['RF_CountryOfResidence']===123  || FormData['RF_CountryOfResidence']===124
                                || FormData['RF_CountryOfResidence']===126  || FormData['RF_CountryOfResidence']===127  || FormData['RF_CountryOfResidence']===128  || FormData['RF_CountryOfResidence']===129  || FormData['RF_CountryOfResidence']===134  || FormData['RF_CountryOfResidence']===135  || FormData['RF_CountryOfResidence']===136
                                || FormData['RF_CountryOfResidence']===139  || FormData['RF_CountryOfResidence']===143  || FormData['RF_CountryOfResidence']===145  || FormData['RF_CountryOfResidence']===146  || FormData['RF_CountryOfResidence']===148  || FormData['RF_CountryOfResidence']===150 || FormData['RF_CountryOfResidence']===151
                                || FormData['RF_CountryOfResidence']===152 || FormData['RF_CountryOfResidence']===153 || FormData['RF_CountryOfResidence']===154 || FormData['RF_CountryOfResidence']===155 || FormData['RF_CountryOfResidence']===158 || FormData['RF_CountryOfResidence']===160 || FormData['RF_CountryOfResidence']===162 
                                || FormData['RF_CountryOfResidence']===163 || FormData['RF_CountryOfResidence']===164 || FormData['RF_CountryOfResidence']===165 || FormData['RF_CountryOfResidence']===166 || FormData['RF_CountryOfResidence']===168 || FormData['RF_CountryOfResidence']===170 || FormData['RF_CountryOfResidence']===172 || FormData['RF_CountryOfResidence']===173 || FormData['RF_CountryOfResidence']===174 || FormData['RF_CountryOfResidence']===175 || FormData['RF_CountryOfResidence']===176 || FormData['RF_CountryOfResidence']===177
                                || FormData['RF_CountryOfResidence']===186 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===188 || FormData['RF_CountryOfResidence']===190 || FormData['RF_CountryOfResidence']===191 || FormData['RF_CountryOfResidence']===193 || FormData['RF_CountryOfResidence']===195
                                || FormData['RF_CountryOfResidence']===197 || FormData['RF_CountryOfResidence']===198 || FormData['RF_CountryOfResidence']===200 || FormData['RF_CountryOfResidence']===202 || FormData['RF_CountryOfResidence']===203 || FormData['RF_CountryOfResidence']===206 || FormData['RF_CountryOfResidence']===208 || FormData['RF_CountryOfResidence']===209
                                || FormData['RF_CountryOfResidence']===211 || FormData['RF_CountryOfResidence']===212 || FormData['RF_CountryOfResidence']===213 || FormData['RF_CountryOfResidence']===214 || FormData['RF_CountryOfResidence']===219 || FormData['RF_CountryOfResidence']===220 || FormData['RF_CountryOfResidence']===221 || FormData['RF_CountryOfResidence']===222 || FormData['RF_CountryOfResidence']===223 || FormData['RF_CountryOfResidence']===224
                                || FormData['RF_CountryOfResidence']===226 || FormData['RF_CountryOfResidence']===230 || FormData['RF_CountryOfResidence']===232 || FormData['RF_CountryOfResidence']===233 || FormData['RF_CountryOfResidence']===236 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238 || FormData['RF_CountryOfResidence']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===5 || FormData['RF_CountryOfResidence']===7 || FormData['RF_CountryOfResidence']===9 || FormData['RF_CountryOfResidence']===12 || FormData['RF_CountryOfResidence']===25 || FormData['RF_CountryOfResidence']===34 || FormData['RF_CountryOfResidence']===35 || FormData['RF_CountryOfResidence']===61 || FormData['RF_CountryOfResidence']===76 || FormData['RF_CountryOfResidence']===84|| FormData['RF_CountryOfResidence']===88
                                
                                || FormData['RF_CountryOfResidence']===114 || FormData['RF_CountryOfResidence']===130 || FormData['RF_CountryOfResidence']===132 || FormData['RF_CountryOfResidence']===142 || FormData['RF_CountryOfResidence']===149 || FormData['RF_CountryOfResidence']===159 || FormData['RF_CountryOfResidence']===161 
                                || FormData['RF_CountryOfResidence']===167 || FormData['RF_CountryOfResidence']===194 || FormData['RF_CountryOfResidence']===215 || FormData['RF_CountryOfResidence']===216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===11 || FormData['RF_CountryOfResidence']===14 || FormData['RF_CountryOfResidence']===15 || FormData['RF_CountryOfResidence']===18 || FormData['RF_CountryOfResidence']===22 || FormData['RF_CountryOfResidence']===23 || FormData['RF_CountryOfResidence']===26 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===38 || FormData['RF_CountryOfResidence']===40
                                || FormData['RF_CountryOfResidence']===44 || FormData['RF_CountryOfResidence']===45 || FormData['RF_CountryOfResidence']===54 || FormData['RF_CountryOfResidence']===56 || FormData['RF_CountryOfResidence']===59 || FormData['RF_CountryOfResidence']===60 || FormData['RF_CountryOfResidence']===63 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===75 || FormData['RF_CountryOfResidence']===77 
                                || FormData['RF_CountryOfResidence']===78 || FormData['RF_CountryOfResidence']===79 || FormData['RF_CountryOfResidence']===80 || FormData['RF_CountryOfResidence']===81 || FormData['RF_CountryOfResidence']===83 || FormData['RF_CountryOfResidence']===87 || FormData['RF_CountryOfResidence']===89 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 
                                || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===101 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===104 || FormData['RF_CountryOfResidence']===105
                                
                                || FormData['RF_CountryOfResidence']===108 || FormData['RF_CountryOfResidence']===110 || FormData['RF_CountryOfResidence']===111 || FormData['RF_CountryOfResidence']===113 || FormData['RF_CountryOfResidence']===118 || FormData['RF_CountryOfResidence']===120 || FormData['RF_CountryOfResidence']===125
                                || FormData['RF_CountryOfResidence']===131 || FormData['RF_CountryOfResidence']===133 ||  FormData['RF_CountryOfResidence']===137 || FormData['RF_CountryOfResidence']===138 || FormData['RF_CountryOfResidence']===140 || FormData['RF_CountryOfResidence']===141
                                || FormData['RF_CountryOfResidence']===144 || FormData['RF_CountryOfResidence']===147 || FormData['RF_CountryOfResidence']===156 || FormData['RF_CountryOfResidence']===157 || FormData['RF_CountryOfResidence']===169 || FormData['RF_CountryOfResidence']===171 || FormData['RF_CountryOfResidence']===178 || FormData['RF_CountryOfResidence']===179 || FormData['RF_CountryOfResidence']===180 || FormData['RF_CountryOfResidence']===181 || FormData['RF_CountryOfResidence']===182 || FormData['RF_CountryOfResidence']===183
                                || FormData['RF_CountryOfResidence']===185 || FormData['RF_CountryOfResidence']===189 || FormData['RF_CountryOfResidence']===192 || FormData['RF_CountryOfResidence']===196 || FormData['RF_CountryOfResidence']===199 || FormData['RF_CountryOfResidence']===201 || FormData['RF_CountryOfResidence']===204 || FormData['RF_CountryOfResidence']===205
                                || FormData['RF_CountryOfResidence']===207 || FormData['RF_CountryOfResidence']===210 || FormData['RF_CountryOfResidence']===218 || FormData['RF_CountryOfResidence']===225 || FormData['RF_CountryOfResidence']===231 || FormData['RF_CountryOfResidence']===234 || FormData['RF_CountryOfResidence']===235 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===21 || FormData['RF_CountryOfResidence']===57 || FormData['RF_CountryOfResidence']===106 || FormData['RF_CountryOfResidence']===107 || FormData['RF_CountryOfResidence']===119 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===217)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">12</label>
                                    
                                </>);
                            }
    
    
                            })()}
                        </div>


                        <br/>
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Nationality</label>
                        </div>
                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Nationality' id='RF_Nationality' value={FormData['RF_Nationality']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andora</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armania</option>
                                <option value="12">Aruba</option>
                                <option value="13">Auckland Islands</option>
                                <option value="14">Australia</option>
                                <option value="15">Austria</option>
                                <option value="16">Azerbaijan</option>
                                <option value="17">Bahamas</option>
                                <option value="18">Bahrain</option>
                                <option value="19">Bangladesh</option>
                                <option value="20">Barbados</option>
                                <option value="21">Belarus</option>
                                <option value="22">Belgium</option>
                                <option value="23">Belize</option>
                                <option value="24">Benin</option>
                                <option value="25">Bermuda</option>
                                <option value="26">Bhutan</option>
                                <option value="27">Bolivia</option>
                                <option value="28">Bonaire</option>
                                <option value="29">Bosnia</option>
                                <option value="30">Botswana</option>
                                <option value="31">Bouvet Islands</option>
                                <option value="32">Brazil</option>
                                <option value="33">British Indian Ocean Teritory</option>
                                <option value="34">Brunei Darussalam</option>
                                <option value="35">Bulgaria</option>
                                <option value="36">Burkina Faso</option>
                                <option value="37">Burundi</option>
                                <option value="38">Cabo Verde</option>
                                <option value="39">Cambodia</option>
                                <option value="40">Cameroon</option>
                                <option value="41">Canada</option>
                                <option value="42">Cayman Islands</option>
                                <option value="43">Central African Republic</option>
                                <option value="44">Chad</option>
                                <option value="45">Chile</option>
                                <option value="46">China</option>
                                <option value="47">Christmas Island</option>
                                <option value="48">Cocos</option>
                                <option value="49">Colombia</option>
                                <option value="50">Comoros</option>
                                <option value="51">Congo Democratic</option>
                                <option value="52">Congo Republic</option>
                                <option value="53">Cook Islands</option>
                                <option value="54">Costa Rica</option>
                                <option value="55">Ivory Cost</option>
                                <option value="56">Croatia</option>
                                <option value="57">Cuba</option>
                                <option value="58">Curacao</option>
                                <option value="59">Cyprus</option>
                                <option value="60">Czech Republic</option>
                                <option value="61">Denmark</option>
                                <option value="62">Djibouti</option>
                                <option value="63">Dominica</option>
                                <option value="64">Dominican Republic</option>
                                <option value="65">Ecuador</option>
                                <option value="66">Egypt</option>
                                <option value="67">EI Salvador</option>
                                <option value="68">Equatorial Guinea</option>
                                <option value="69">Eritrea</option>
                                <option value="70">Estonia</option>
                                <option value="71">eSwaitini</option>
                                <option value="72">Ethiopia</option>
                                <option value="73">Falkland Islands</option>
                                <option value="74">Faroe Islands</option>
                                <option value="75">Fiji</option>
                                <option value="76">Finland</option>
                                <option value="77">France</option>
                                <option value="78">French Guiana</option>
                                <option value="79">French Polynesia</option>
                                <option value="80">French Southern Territories</option>
                                <option value="81">Gabon</option>
                                <option value="82">Gambia</option>
                                <option value="83">Georgia</option>
                                <option value="84">Germany</option>
                                <option value="85">Ghana</option>
                                <option value="86">Gibralter</option>
                                <option value="87">Greece</option>
                                <option value="88">Greenland</option>
                                <option value="89">Grenada</option>
                                <option value="90">Guadeloupe</option>
                                <option value="91">Guam</option>
                                <option value="92">Guatemala</option>
                                <option value="93">Guernsey</option>
                                <option value="94">Guinea</option>
                                <option value="95">Guinea Bissau</option>
                                <option value="96">Guyana</option>
                                <option value="97">Haiti</option>
                                <option value="98">Herd Island</option>
                                <option value="99">Holy See</option>
                                <option value="100">Honduras</option>
                                <option value="101">Hongkong</option>
                                <option value="102">Hungary</option>
                                <option value="103">Iceland</option>
                                <option value="104">India</option>
                                <option value="105">Indonessia</option>
                                <option value="106">Iran</option>
                                <option value="107">Iraq</option>
                                <option value="108">Ireland</option>
                                <option value="109">Isle of man</option>
                                <option value="110">Israel</option>
                                <option value="111">Italy</option>
                                <option value="112">Jamaica</option>
                                <option value="113">Japan</option>
                                <option value="114">Jersey</option>
                                <option value="115">Jordan</option>
                                <option value="116">Kazakhstan</option>
                                <option value="117">Kenya</option>
                                <option value="118">Kiribati</option>
                                <option value="119">Korea North</option>
                                <option value="120">Korea South</option>
                                <option value="121">Kosovo</option>
                                <option value="122">Kuwait</option>
                                <option value="123">Kyrgyzstan</option>
                                <option value="124">Laos</option>
                                <option value="125">Latvia</option>
                                <option value="126">Lebanon</option>
                                <option value="127">Lesotho</option>
                                <option value="128">Liberia</option>
                                <option value="129">Libya</option>
                                <option value="130">Liechtenstein</option>
                                <option value="131">Lithuania</option>
                                <option value="132">Luxembourg</option>
                                <option value="133">Macao</option>
                                <option value="134">Macedonia</option>
                                <option value="135">Madagascar</option>
                                <option value="136">Malawi</option>
                                <option value="137">Malaysia</option>
                                <option value="138">Maldives</option>
                                <option value="139">Mali</option>
                                <option value="140">Malta</option>
                                <option value="141">Marshall Islands</option>
                                <option value="142">Martinique</option>
                                <option value="143">Mauritania</option>
                                <option value="144">Mauritius</option>
                                <option value="145">Mayotte</option>
                                <option value="146">Mexico</option>
                                <option value="147">Micronessia</option>
                                <option value="148">Moldova</option>
                                <option value="149">Monaco</option>
                                <option value="150">Mongolia</option>
                                <option value="151">Montenegro</option>
                                <option value="152">Montserrat</option>
                                <option value="153">Morocco</option>
                                <option value="154">Mozambique</option>
                                <option value="155">Mynamar</option>
                                <option value="156">Namabia</option>
                                <option value="157">Nauru</option>
                                <option value="158">Nepal</option>
                                <option value="159">Netherlands</option>
                                <option value="160">New Celedonia</option>
                                <option value="161">Newzealand</option>
                                <option value="162">Niger</option>
                                <option value="163">Nigeria</option>
                                <option value="164">Norfolk Island</option>
                                <option value="165">Nothern Mariana Islands</option>
                                <option value="166">Norway</option>
                                <option value="167">Nuie</option>
                                <option value="168">Oman</option>
                                <option value="169">Pakistan</option>
                                <option value="170">Palau</option>
                                <option value="171">Panama</option>
                                <option value="172">Papua New Guinea</option>
                                <option value="173">Paraguay</option>
                                <option value="174">Peru</option>
                                <option value="175">Philippines</option>
                                <option value="176">Pitcaim</option>
                                <option value="177">Poland</option>
                                <option value="178">Portugal</option>
                                <option value="179">Puerto Rico</option>
                                <option value="180">Qatar</option>
                                <option value="181">Reunion</option>
                                <option value="182">Roman</option>
                                 <option value="183">Russia</option>
                                 <option value="184">Rwanda</option>
                                 <option value="185">Saint Barthelemy</option>
                                 <option value="186">Saint Helena</option>
                                 <option value="187">Saint Kitts</option>
                                 <option value="188">Saint Lucia</option>
                                 <option value="189">Saint Martin</option>
                                 <option value="190">Saint Pierre</option>
                                 <option value="191">Saint Vincent</option>
                                 <option value="192">Samoa</option>
                                 <option value="193">Saint Marino</option>
                                 <option value="194">Sao Tome</option>
                                 <option value="195">Saudia Arabia</option>
                                 <option value="196">Senegal</option>
                                 <option value="197">Serbia</option>
                                 <option value="198">Seychelles</option>
                                 <option value="199">Sierra Leone</option>
                                 <option value="200">Singapore</option>
                                 <option value="201">Sint Martin</option>
                                 <option value="202">Slovekia</option>
                                 <option value="203">Slovenia</option>
                                 <option value="204">Solomon Islands</option>
                                 <option value="205">Somalia</option>
                                 <option value="206">South Africa</option>
                                 <option value="207">South Georgia</option>
                                 <option value="208">South Sudan</option>
                                 <option value="209">SPain</option>
                                 <option value="210">Srilanka</option>
                                 <option value="211">Sudan</option>
                                 <option value="212">Suriname</option>
                                 <option value="213">Svalbard</option>
                                 <option value="214">Sweden</option>
                                 <option value="215">Switxerland</option>
                                 <option value="216">Syria</option>
                                 <option value="217">Taiwan</option>
                                 <option value="218">Tajikistan</option>
                                 <option value="219">Tanzania</option>
                                 <option value="220">Thailand</option>
                                 <option value="221">Timor Leste</option>
                                 <option value="222">Togo</option>
                                 <option value="223">Tokelau</option>
                                 <option value="224">Tonga</option>
                                 <option value="225">Trinidad</option>
                                 <option value="226">Tunisia</option>
                                 <option value="227">Turkey</option>
                                 <option value="228">Turkmenistan</option>
                                 <option value="229">Turks</option>
                                 <option value="230">Tuvalu</option>
                                 <option value="231">Uganda</option>
                                 <option value="232">Ukraine</option>
                                 <option value="233">United Arab Emirates</option>
                                 <option value="224">United Kingdom</option>
                                 <option value="225">United States Minor</option>
                                 <option value="226">United States of America</option>
                                 <option value="227">Uruguay</option>
                                 <option value="228">Uzbekistan</option>
                                 <option value="229">Vanuatu</option>
                                 <option value="230">Venezuela</option>
                                 <option value="231">Vietnam</option>
                                 <option value="232">Virgin Islands(British)</option>
                                 <option value="233">Virgin Islands(US)</option>
                                 <option value="234">Wallis and Fatuna</option>
                                 <option value="235">West Bank</option>
                                 <option value="236">Western Sahara</option>
                                 <option value="237">Yemen</option>
                                 <option value="238">Zambia</option>
                                 <option value="239">Zimbabwe</option>

                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Nationality']===1 || FormData['RF_Nationality']===2 || FormData['RF_Nationality']===3 || FormData['RF_Nationality']===4 || FormData['RF_Nationality']===6 || FormData['RF_Nationality']===8 || FormData['RF_Nationality']===10 || FormData['RF_Nationality']===13 || FormData['RF_Nationality']===16 || FormData['RF_Nationality']===17 || FormData['RF_Nationality']===19 || FormData['RF_Nationality']===20 || FormData['RF_Nationality']===24 || FormData['RF_Nationality']===27
                                || FormData['RF_Nationality']===28 || FormData['RF_Nationality']===29 || FormData['RF_Nationality']===31 || FormData['RF_Nationality']===32 || FormData['RF_Nationality']===33 || FormData['RF_Nationality']===36 || FormData['RF_Nationality']===37 || FormData['RF_Nationality']===39 || FormData['RF_Nationality']===41 || FormData['RF_Nationality']===42 || FormData['RF_Nationality']===43 || FormData['RF_Nationality']===46 || FormData['RF_Nationality']===47 || FormData['RF_Nationality']===48 || FormData['RF_Nationality']===49 || FormData['RF_Nationality']===50 || FormData['RF_Nationality']===51 || FormData['RF_Nationality']===52 || FormData['RF_Nationality']===53
                                || FormData['RF_Nationality']===55 || FormData['RF_Nationality']===58 || FormData['RF_Nationality']===62 || FormData['RF_Nationality']===64 || FormData['RF_Nationality']===65 || FormData['RF_Nationality']===66 || FormData['RF_Nationality']===67 || FormData['RF_Nationality']===68 || FormData['RF_Nationality']===69 || FormData['RF_Nationality']===71 || FormData['RF_Nationality']===72 || FormData['RF_Nationality']===73 || FormData['RF_Nationality']===74
                                || FormData['RF_Nationality']===82 || FormData['RF_Nationality']===85 || FormData['RF_Nationality']===86 || FormData['RF_Nationality']===90 || FormData['RF_Nationality']===91 || FormData['RF_Nationality']===92 || FormData['RF_Nationality']===93
                                || FormData['RF_Nationality']===94 || FormData['RF_Nationality']===95 || FormData['RF_Nationality']===97 || FormData['RF_Nationality']===98 || FormData['RF_Nationality']===99 || FormData['RF_Nationality']===100 || FormData['RF_Nationality']===103 
                                
                                || FormData['RF_Nationality']===109  || FormData['RF_Nationality']===112  || FormData['RF_Nationality']===115  || FormData['RF_Nationality']===116  || FormData['RF_Nationality']===117  || FormData['RF_Nationality']===121  || FormData['RF_Nationality']===123  || FormData['RF_Nationality']===124
                                || FormData['RF_Nationality']===126  || FormData['RF_Nationality']===127  || FormData['RF_Nationality']===128  || FormData['RF_Nationality']===129  || FormData['RF_Nationality']===134  || FormData['RF_Nationality']===135  || FormData['RF_Nationality']===136
                                || FormData['RF_Nationality']===139  || FormData['RF_Nationality']===143  || FormData['RF_Nationality']===145  || FormData['RF_Nationality']===146  || FormData['RF_Nationality']===148  || FormData['RF_Nationality']===150 || FormData['RF_Nationality']===151
                                || FormData['RF_Nationality']===152 || FormData['RF_Nationality']===153 || FormData['RF_Nationality']===154 || FormData['RF_Nationality']===155 || FormData['RF_Nationality']===158 || FormData['RF_Nationality']===160 || FormData['RF_Nationality']===162 
                                || FormData['RF_Nationality']===163 || FormData['RF_Nationality']===164 || FormData['RF_Nationality']===165 || FormData['RF_Nationality']===166 || FormData['RF_Nationality']===168 || FormData['RF_Nationality']===170 || FormData['RF_Nationality']===172 || FormData['RF_Nationality']===173 || FormData['RF_Nationality']===174 || FormData['RF_Nationality']===175 || FormData['RF_Nationality']===176 || FormData['RF_Nationality']===177
                                || FormData['RF_Nationality']===186 || FormData['RF_Nationality']===187 || FormData['RF_Nationality']===188 || FormData['RF_Nationality']===190 || FormData['RF_Nationality']===191 || FormData['RF_Nationality']===193 || FormData['RF_Nationality']===195
                                || FormData['RF_Nationality']===197 || FormData['RF_Nationality']===198 || FormData['RF_Nationality']===200 || FormData['RF_Nationality']===202 || FormData['RF_Nationality']===203 || FormData['RF_Nationality']===206 || FormData['RF_Nationality']===208 || FormData['RF_Nationality']===209
                                || FormData['RF_Nationality']===211 || FormData['RF_Nationality']===212 || FormData['RF_Nationality']===213 || FormData['RF_Nationality']===214 || FormData['RF_Nationality']===219 || FormData['RF_Nationality']===220 || FormData['RF_Nationality']===221 || FormData['RF_Nationality']===222 || FormData['RF_Nationality']===223 || FormData['RF_Nationality']===224
                                || FormData['RF_Nationality']===226 || FormData['RF_Nationality']===230 || FormData['RF_Nationality']===232 || FormData['RF_Nationality']===233 || FormData['RF_Nationality']===236 || FormData['RF_Nationality']===237 || FormData['RF_Nationality']===238 || FormData['RF_Nationality']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Nationality']===5 || FormData['RF_Nationality']===7 || FormData['RF_Nationality']===9 || FormData['RF_Nationality']===12 || FormData['RF_Nationality']===25 || FormData['RF_Nationality']===34 || FormData['RF_Nationality']===35 || FormData['RF_Nationality']===61 || FormData['RF_Nationality']===76 || FormData['RF_Nationality']===84 || value===88
                                
                                || FormData['RF_Nationality']===114 || FormData['RF_Nationality']===130 || FormData['RF_Nationality']===132 || FormData['RF_Nationality']===142 || FormData['RF_Nationality']===149 || FormData['RF_Nationality']===159 || FormData['RF_Nationality']===161 
                                || FormData['RF_Nationality']===167 || FormData['RF_Nationality']===194 || FormData['RF_Nationality']===215 || FormData['RF_Nationality']===216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Nationality']===11 || FormData['RF_Nationality']===14 || FormData['RF_Nationality']===15 || FormData['RF_Nationality']===18 || FormData['RF_Nationality']===22 || FormData['RF_Nationality']===23 || FormData['RF_Nationality']===26 || FormData['RF_Nationality']===30 || FormData['RF_Nationality']===38 || FormData['RF_Nationality']===40 || FormData['RF_Nationality']===44 || FormData['RF_Nationality']===45
                                || FormData['RF_Nationality']===54 || FormData['RF_Nationality']===56 || FormData['RF_Nationality']===59 || FormData['RF_Nationality']===60 || FormData['RF_Nationality']===63 || FormData['RF_Nationality']===70 || FormData['RF_Nationality']===75 || FormData['RF_Nationality']===77 || FormData['RF_Nationality']===78 || FormData['RF_Nationality']===79 || FormData['RF_Nationality']===80 || FormData['RF_Nationality']===81
                                || FormData['RF_Nationality']===83 || FormData['RF_Nationality']===87 || FormData['RF_Nationality']===89 || FormData['RF_Nationality']===96 || FormData['RF_Nationality']===101 || FormData['RF_Nationality']===104 || FormData['RF_Nationality']===105
                                
                                || FormData['RF_Nationality']===108 || FormData['RF_Nationality']===110 || FormData['RF_Nationality']===111 || FormData['RF_Nationality']===113 || FormData['RF_Nationality']===118 || FormData['RF_Nationality']===120 || FormData['RF_Nationality']===125
                                || FormData['RF_Nationality']===131 || FormData['RF_Nationality']===133 || FormData['RF_Nationality']===137 || FormData['RF_Nationality']===138 || FormData['RF_Nationality']===140 || FormData['RF_Nationality']===141
                                || FormData['RF_Nationality']===144 || FormData['RF_Nationality']===147 || FormData['RF_Nationality']===156 || FormData['RF_Nationality']===157 || FormData['RF_Nationality']===169 || FormData['RF_Nationality']===171 || FormData['RF_Nationality']===178 || FormData['RF_Nationality']===179 || FormData['RF_Nationality']===180 || FormData['RF_Nationality']===181 || FormData['RF_Nationality']===182 || FormData['RF_Nationality']===183
                                || FormData['RF_Nationality']===185 || FormData['RF_Nationality']===189 || FormData['RF_Nationality']===192 || FormData['RF_Nationality']===196 || FormData['RF_Nationality']===199 || FormData['RF_Nationality']===201 || FormData['RF_Nationality']===204 || FormData['RF_Nationality']===205
                                || FormData['RF_Nationality']===207 || FormData['RF_Nationality']===210 || FormData['RF_Nationality']===218 || FormData['RF_Nationality']===225 || FormData['RF_Nationality']===231 || FormData['RF_Nationality']===234 || FormData['RF_Nationality']===235 || FormData['RF_Nationality']===237 || FormData['RF_Nationality']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Nationality']===21 || FormData['RF_Nationality']===57 || FormData['RF_Nationality']===106 || FormData['RF_Nationality']===107 || FormData['RF_Nationality']===119 || FormData['RF_Nationality']===187 || FormData['RF_Nationality']===217 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                            
                                     
                                    <label className="col-form-label">3</label>
                                    
                             
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Nationality']===1 || FormData['RF_Nationality']===2 || FormData['RF_Nationality']===3 || FormData['RF_Nationality']===4 || FormData['RF_Nationality']===6 || FormData['RF_Nationality']===8 || FormData['RF_Nationality']===10 || FormData['RF_Nationality']===13 || FormData['RF_Nationality']===16 || FormData['RF_Nationality']===17 || FormData['RF_Nationality']===19 || FormData['RF_Nationality']===20 || FormData['RF_Nationality']===24
                                || FormData['RF_Nationality']===27 || FormData['RF_Nationality']===28 || FormData['RF_Nationality']===29 || FormData['RF_Nationality']===30 || FormData['RF_Nationality']===31 || FormData['RF_Nationality']===32 || FormData['RF_Nationality']===33 || FormData['RF_Nationality']===36 || FormData['RF_Nationality']===37 || FormData['RF_Nationality']===39 || FormData['RF_Nationality']===41 || FormData['RF_Nationality']===42 || FormData['RF_Nationality']===43
                                || FormData['RF_Nationality']===46 || FormData['RF_Nationality']===47 || FormData['RF_Nationality']===48 || FormData['RF_Nationality']===49 || FormData['RF_Nationality']===50 || FormData['RF_Nationality']===51 || FormData['RF_Nationality']===52 || FormData['RF_Nationality']===53 || FormData['RF_Nationality']===55 || FormData['RF_Nationality']===58 || FormData['RF_Nationality']===62 || FormData['RF_Nationality']===64 || FormData['RF_Nationality']===65 || FormData['RF_Nationality']===66 
                                || FormData['RF_Nationality']===67 || FormData['RF_Nationality']===68 || FormData['RF_Nationality']===69 || FormData['RF_Nationality']===70 || FormData['RF_Nationality']===71 || FormData['RF_Nationality']===72 || FormData['RF_Nationality']===73 || FormData['RF_Nationality']===74 || FormData['RF_Nationality']===82 || FormData['RF_Nationality']===85 || FormData['RF_Nationality']===86 || FormData['RF_Nationality']===90 || FormData['RF_Nationality']===91 || FormData['RF_Nationality']===92 || FormData['RF_Nationality']===93
                                || FormData['RF_Nationality']===94 || FormData['RF_Nationality']===95 || FormData['RF_Nationality']===96 || FormData['RF_Nationality']===97 || FormData['RF_Nationality']===98 || FormData['RF_Nationality']===99 || FormData['RF_Nationality']===100 || FormData['RF_Nationality']===102 || FormData['RF_Nationality']===103
                                
                                || FormData['RF_Nationality']===109  || FormData['RF_Nationality']===112  || FormData['RF_Nationality']===115  || FormData['RF_Nationality']===116  || FormData['RF_Nationality']===117  || FormData['RF_Nationality']===121  || FormData['RF_Nationality']===123  || FormData['RF_Nationality']===124
                                || FormData['RF_Nationality']===126  || FormData['RF_Nationality']===127  || FormData['RF_Nationality']===128  || FormData['RF_Nationality']===129  || FormData['RF_Nationality']===134  || FormData['RF_Nationality']===135  || FormData['RF_Nationality']===136
                                || FormData['RF_Nationality']===139  || FormData['RF_Nationality']===143  || FormData['RF_Nationality']===145  || FormData['RF_Nationality']===146  || FormData['RF_Nationality']===148  || FormData['RF_Nationality']===150 || FormData['RF_Nationality']===151
                                || FormData['RF_Nationality']===152 || FormData['RF_Nationality']===153 || FormData['RF_Nationality']===154 || FormData['RF_Nationality']===155 || FormData['RF_Nationality']===158 || FormData['RF_Nationality']===160 || FormData['RF_Nationality']===162 
                                || FormData['RF_Nationality']===163 || FormData['RF_Nationality']===164 || FormData['RF_Nationality']===165 || FormData['RF_Nationality']===166 || FormData['RF_Nationality']===168 || FormData['RF_Nationality']===170 || FormData['RF_Nationality']===172 || FormData['RF_Nationality']===173 || FormData['RF_Nationality']===174 || FormData['RF_Nationality']===175 || FormData['RF_Nationality']===176 || FormData['RF_Nationality']===177
                                || FormData['RF_Nationality']===186 || FormData['RF_Nationality']===187 || FormData['RF_Nationality']===188 || FormData['RF_Nationality']===190 || FormData['RF_Nationality']===191 || FormData['RF_Nationality']===193 || FormData['RF_Nationality']===195
                                || FormData['RF_Nationality']===197 || FormData['RF_Nationality']===198 || FormData['RF_Nationality']===200 || FormData['RF_Nationality']===202 || FormData['RF_Nationality']===203 || FormData['RF_Nationality']===206 || FormData['RF_Nationality']===208 || FormData['RF_Nationality']===209
                                || FormData['RF_Nationality']===211 || FormData['RF_Nationality']===212 || FormData['RF_Nationality']===213 || FormData['RF_Nationality']===214 || FormData['RF_Nationality']===219 || FormData['RF_Nationality']===220 || FormData['RF_Nationality']===221 || FormData['RF_Nationality']===222 || FormData['RF_Nationality']===223 || FormData['RF_Nationality']===224
                                || FormData['RF_Nationality']===226 || FormData['RF_Nationality']===230 || FormData['RF_Nationality']===232 || FormData['RF_Nationality']===233 || FormData['RF_Nationality']===236 || FormData['RF_Nationality']===237 || FormData['RF_Nationality']===238 || FormData['RF_Nationality']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Nationality']===5 || FormData['RF_Nationality']===7 || FormData['RF_Nationality']===9 || FormData['RF_Nationality']===12 || FormData['RF_Nationality']===25 || FormData['RF_Nationality']===34 || FormData['RF_Nationality']===35 || FormData['RF_Nationality']===61 || FormData['RF_Nationality']===76 || FormData['RF_Nationality']===84|| FormData['RF_Nationality']===88
                                
                                || FormData['RF_Nationality']===114 || FormData['RF_Nationality']===130 || FormData['RF_Nationality']===132 || FormData['RF_Nationality']===142 || FormData['RF_Nationality']===149 || FormData['RF_Nationality']===159 || FormData['RF_Nationality']===161 
                                || FormData['RF_Nationality']===167 || FormData['RF_Nationality']===194 || FormData['RF_Nationality']===215 || FormData['RF_Nationality']===216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Nationality']===11 || FormData['RF_Nationality']===14 || FormData['RF_Nationality']===15 || FormData['RF_Nationality']===18 || FormData['RF_Nationality']===22 || FormData['RF_Nationality']===23 || FormData['RF_Nationality']===26 || FormData['RF_Nationality']===30 || FormData['RF_Nationality']===38 || FormData['RF_Nationality']===40
                                || FormData['RF_Nationality']===44 || FormData['RF_Nationality']===45 || FormData['RF_Nationality']===54 || FormData['RF_Nationality']===56 || FormData['RF_Nationality']===59 || FormData['RF_Nationality']===60 || FormData['RF_Nationality']===63 || FormData['RF_Nationality']===70 || FormData['RF_Nationality']===75 || FormData['RF_Nationality']===77 
                                || FormData['RF_Nationality']===78 || FormData['RF_Nationality']===79 || FormData['RF_Nationality']===80 || FormData['RF_Nationality']===81 || FormData['RF_Nationality']===83 || FormData['RF_Nationality']===87 || FormData['RF_Nationality']===89 || FormData['RF_Nationality']===96 || FormData['RF_Nationality']===97 || FormData['RF_Nationality']===98 
                                || FormData['RF_Nationality']===99 || FormData['RF_Nationality']===100 || FormData['RF_Nationality']===101 || FormData['RF_Nationality']===102 || FormData['RF_Nationality']===104 || FormData['RF_Nationality']===105
                                
                                || FormData['RF_Nationality']===108 || FormData['RF_Nationality']===110 || FormData['RF_Nationality']===111 || FormData['RF_Nationality']===113 || FormData['RF_Nationality']===118 || FormData['RF_Nationality']===120 || FormData['RF_Nationality']===125
                                || FormData['RF_Nationality']===131 || FormData['RF_Nationality']===133 ||  FormData['RF_Nationality']===137 || FormData['RF_Nationality']===138 || FormData['RF_Nationality']===140 || FormData['RF_Nationality']===141
                                || FormData['RF_Nationality']===144 || FormData['RF_Nationality']===147 || FormData['RF_Nationality']===156 || FormData['RF_Nationality']===157 || FormData['RF_Nationality']===169 || FormData['RF_Nationality']===171 || FormData['RF_Nationality']===178 || FormData['RF_Nationality']===179 || FormData['RF_Nationality']===180 || FormData['RF_Nationality']===181 || FormData['RF_Nationality']===182 || FormData['RF_Nationality']===183
                                || FormData['RF_Nationality']===185 || FormData['RF_Nationality']===189 || FormData['RF_Nationality']===192 || FormData['RF_Nationality']===196 || FormData['RF_Nationality']===199 || FormData['RF_Nationality']===201 || FormData['RF_Nationality']===204 || FormData['RF_Nationality']===205
                                || FormData['RF_Nationality']===207 || FormData['RF_Nationality']===210 || FormData['RF_Nationality']===218 || FormData['RF_Nationality']===225 || FormData['RF_Nationality']===231 || FormData['RF_Nationality']===234 || FormData['RF_Nationality']===235 || FormData['RF_Nationality']===237 || FormData['RF_Nationality']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Nationality']===21 || FormData['RF_Nationality']===57 || FormData['RF_Nationality']===106 || FormData['RF_Nationality']===107 || FormData['RF_Nationality']===119 || FormData['RF_Nationality']===187 || FormData['RF_Nationality']===217)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">12</label>
                                    
                                </>);
                            }
    
    
                            })()}
                        </div>

                        <br/>
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Is nationality different to current jurisdiction?</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Different_Nationality' id='RF_Different_Nationality' value={FormData['RF_Different_Nationality']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>

                       

                        
                        {(() => { 
                            
                            if(FormData['RF_Different_Nationality']===1)
                            {
                                return (<>
                                     
                                     <br/>
                                    <hr/>
                                    <div className="col-2">       
                                        <label className="col-form-label">Country of tax residence</label>
                                    </div>

                                    <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_CountryOfTax' id='RF_CountryOfTax' value={FormData['RF_CountryOfTax']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                    <option value="0" selected></option>
                                    <option value="1">Afghanistan</option>
                                    <option value="2">Albania</option>
                                    <option value="3">Algeria</option>
                                    <option value="4">American Samoa</option>
                                    <option value="5">Andora</option>
                                    <option value="6">Angola</option>
                                    <option value="7">Anguilla</option>
                                    <option value="8">Antarctica</option>
                                    <option value="9">Antigua and Barbuda</option>
                                    <option value="10">Argentina</option>
                                    <option value="11">Armania</option>
                                    <option value="12">Aruba</option>
                                    <option value="13">Auckland Islands</option>
                                    <option value="14">Australia</option>
                                    <option value="15">Austria</option>
                                    <option value="16">Azerbaijan</option>
                                    <option value="17">Bahamas</option>
                                    <option value="18">Bahrain</option>
                                    <option value="19">Bangladesh</option>
                                    <option value="20">Barbados</option>
                                    <option value="21">Belarus</option>
                                    <option value="22">Belgium</option>
                                    <option value="23">Belize</option>
                                    <option value="24">Benin</option>
                                    <option value="25">Bermuda</option>
                                    <option value="26">Bhutan</option>
                                    <option value="27">Bolivia</option>
                                    <option value="28">Bonaire</option>
                                    <option value="29">Bosnia</option>
                                    <option value="30">Botswana</option>
                                    <option value="31">Bouvet Islands</option>
                                    <option value="32">Brazil</option>
                                    <option value="33">British Indian Ocean Teritory</option>
                                    <option value="34">Brunei Darussalam</option>
                                    <option value="35">Bulgaria</option>
                                    <option value="36">Burkina Faso</option>
                                    <option value="37">Burundi</option>
                                    <option value="38">Cabo Verde</option>
                                    <option value="39">Cambodia</option>
                                    <option value="40">Cameroon</option>
                                    <option value="41">Canada</option>
                                    <option value="42">Cayman Islands</option>
                                    <option value="43">Central African Republic</option>
                                    <option value="44">Chad</option>
                                    <option value="45">Chile</option>
                                    <option value="46">China</option>
                                    <option value="47">Christmas Island</option>
                                    <option value="48">Cocos</option>
                                    <option value="49">Colombia</option>
                                    <option value="50">Comoros</option>
                                    <option value="51">Congo Democratic</option>
                                    <option value="52">Congo Republic</option>
                                    <option value="53">Cook Islands</option>
                                    <option value="54">Costa Rica</option>
                                    <option value="55">Ivory Cost</option>
                                    <option value="56">Croatia</option>
                                    <option value="57">Cuba</option>
                                    <option value="58">Curacao</option>
                                    <option value="59">Cyprus</option>
                                    <option value="60">Czech Republic</option>
                                    <option value="61">Denmark</option>
                                    <option value="62">Djibouti</option>
                                    <option value="63">Dominica</option>
                                    <option value="64">Dominican Republic</option>
                                    <option value="65">Ecuador</option>
                                    <option value="66">Egypt</option>
                                    <option value="67">EI Salvador</option>
                                    <option value="68">Equatorial Guinea</option>
                                    <option value="69">Eritrea</option>
                                    <option value="70">Estonia</option>
                                    <option value="71">eSwaitini</option>
                                    <option value="72">Ethiopia</option>
                                    <option value="73">Falkland Islands</option>
                                    <option value="74">Faroe Islands</option>
                                    <option value="75">Fiji</option>
                                    <option value="76">Finland</option>
                                    <option value="77">France</option>
                                    <option value="78">French Guiana</option>
                                    <option value="79">French Polynesia</option>
                                    <option value="80">French Southern Territories</option>
                                    <option value="81">Gabon</option>
                                    <option value="82">Gambia</option>
                                    <option value="83">Georgia</option>
                                    <option value="84">Germany</option>
                                    <option value="85">Ghana</option>
                                    <option value="86">Gibralter</option>
                                    <option value="87">Greece</option>
                                    <option value="88">Greenland</option>
                                    <option value="89">Grenada</option>
                                    <option value="90">Guadeloupe</option>
                                    <option value="91">Guam</option>
                                    <option value="92">Guatemala</option>
                                    <option value="93">Guernsey</option>
                                    <option value="94">Guinea</option>
                                    <option value="95">Guinea Bissau</option>
                                    <option value="96">Guyana</option>
                                    <option value="97">Haiti</option>
                                    <option value="98">Herd Island</option>
                                    <option value="99">Holy See</option>
                                    <option value="100">Honduras</option>
                                    <option value="101">Hongkong</option>
                                    <option value="102">Hungary</option>
                                    <option value="103">Iceland</option>
                                    <option value="104">India</option>
                                    <option value="105">Indonessia</option>
                                    <option value="106">Iran</option>
                                    <option value="107">Iraq</option>
                                    <option value="108">Ireland</option>
                                    <option value="109">Isle of man</option>
                                    <option value="110">Israel</option>
                                    <option value="111">Italy</option>
                                    <option value="112">Jamaica</option>
                                    <option value="113">Japan</option>
                                    <option value="114">Jersey</option>
                                    <option value="115">Jordan</option>
                                    <option value="116">Kazakhstan</option>
                                    <option value="117">Kenya</option>
                                    <option value="118">Kiribati</option>
                                    <option value="119">Korea North</option>
                                    <option value="120">Korea South</option>
                                    <option value="121">Kosovo</option>
                                    <option value="122">Kuwait</option>
                                    <option value="123">Kyrgyzstan</option>
                                    <option value="124">Laos</option>
                                    <option value="125">Latvia</option>
                                    <option value="126">Lebanon</option>
                                    <option value="127">Lesotho</option>
                                    <option value="128">Liberia</option>
                                    <option value="129">Libya</option>
                                    <option value="130">Liechtenstein</option>
                                    <option value="131">Lithuania</option>
                                    <option value="132">Luxembourg</option>
                                    <option value="133">Macao</option>
                                    <option value="134">Macedonia</option>
                                    <option value="135">Madagascar</option>
                                    <option value="136">Malawi</option>
                                    <option value="137">Malaysia</option>
                                    <option value="138">Maldives</option>
                                    <option value="139">Mali</option>
                                    <option value="140">Malta</option>
                                    <option value="141">Marshall Islands</option>
                                    <option value="142">Martinique</option>
                                    <option value="143">Mauritania</option>
                                    <option value="144">Mauritius</option>
                                    <option value="145">Mayotte</option>
                                    <option value="146">Mexico</option>
                                    <option value="147">Micronessia</option>
                                    <option value="148">Moldova</option>
                                    <option value="149">Monaco</option>
                                    <option value="150">Mongolia</option>
                                    <option value="151">Montenegro</option>
                                    <option value="152">Montserrat</option>
                                    <option value="153">Morocco</option>
                                    <option value="154">Mozambique</option>
                                    <option value="155">Mynamar</option>
                                    <option value="156">Namabia</option>
                                    <option value="157">Nauru</option>
                                    <option value="158">Nepal</option>
                                    <option value="159">Netherlands</option>
                                    <option value="160">New Celedonia</option>
                                    <option value="161">Newzealand</option>
                                    <option value="162">Niger</option>
                                    <option value="163">Nigeria</option>
                                    <option value="164">Norfolk Island</option>
                                    <option value="165">Nothern Mariana Islands</option>
                                    <option value="166">Norway</option>
                                    <option value="167">Nuie</option>
                                    <option value="168">Oman</option>
                                    <option value="169">Pakistan</option>
                                    <option value="170">Palau</option>
                                    <option value="171">Panama</option>
                                    <option value="172">Papua New Guinea</option>
                                    <option value="173">Paraguay</option>
                                    <option value="174">Peru</option>
                                    <option value="175">Philippines</option>
                                    <option value="176">Pitcaim</option>
                                    <option value="177">Poland</option>
                                    <option value="178">Portugal</option>
                                    <option value="179">Puerto Rico</option>
                                    <option value="180">Qatar</option>
                                    <option value="181">Reunion</option>
                                    <option value="182">Roman</option>
                                    <option value="183">Russia</option>
                                    <option value="184">Rwanda</option>
                                    <option value="185">Saint Barthelemy</option>
                                    <option value="186">Saint Helena</option>
                                    <option value="187">Saint Kitts</option>
                                    <option value="188">Saint Lucia</option>
                                    <option value="189">Saint Martin</option>
                                    <option value="190">Saint Pierre</option>
                                    <option value="191">Saint Vincent</option>
                                    <option value="192">Samoa</option>
                                    <option value="193">Saint Marino</option>
                                    <option value="194">Sao Tome</option>
                                    <option value="195">Saudia Arabia</option>
                                    <option value="196">Senegal</option>
                                    <option value="197">Serbia</option>
                                    <option value="198">Seychelles</option>
                                    <option value="199">Sierra Leone</option>
                                    <option value="200">Singapore</option>
                                    <option value="201">Sint Martin</option>
                                    <option value="202">Slovekia</option>
                                    <option value="203">Slovenia</option>
                                    <option value="204">Solomon Islands</option>
                                    <option value="205">Somalia</option>
                                    <option value="206">South Africa</option>
                                    <option value="207">South Georgia</option>
                                    <option value="208">South Sudan</option>
                                    <option value="209">SPain</option>
                                    <option value="210">Srilanka</option>
                                    <option value="211">Sudan</option>
                                    <option value="212">Suriname</option>
                                    <option value="213">Svalbard</option>
                                    <option value="214">Sweden</option>
                                    <option value="215">Switxerland</option>
                                    <option value="216">Syria</option>
                                    <option value="217">Taiwan</option>
                                    <option value="218">Tajikistan</option>
                                    <option value="219">Tanzania</option>
                                    <option value="220">Thailand</option>
                                    <option value="221">Timor Leste</option>
                                    <option value="222">Togo</option>
                                    <option value="223">Tokelau</option>
                                    <option value="224">Tonga</option>
                                    <option value="225">Trinidad</option>
                                    <option value="226">Tunisia</option>
                                    <option value="227">Turkey</option>
                                    <option value="228">Turkmenistan</option>
                                    <option value="229">Turks</option>
                                    <option value="230">Tuvalu</option>
                                    <option value="231">Uganda</option>
                                    <option value="232">Ukraine</option>
                                    <option value="233">United Arab Emirates</option>
                                    <option value="224">United Kingdom</option>
                                    <option value="225">United States Minor</option>
                                    <option value="226">United States of America</option>
                                    <option value="227">Uruguay</option>
                                    <option value="228">Uzbekistan</option>
                                    <option value="229">Vanuatu</option>
                                    <option value="230">Venezuela</option>
                                    <option value="231">Vietnam</option>
                                    <option value="232">Virgin Islands(British)</option>
                                    <option value="233">Virgin Islands(US)</option>
                                    <option value="234">Wallis and Fatuna</option>
                                    <option value="235">West Bank</option>
                                    <option value="236">Western Sahara</option>
                                    <option value="237">Yemen</option>
                                    <option value="238">Zambia</option>
                                    <option value="239">Zimbabwe</option>

                                </select> 
                            </div>

                            <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfTax']===1 || FormData['RF_CountryOfTax']===2 || FormData['RF_CountryOfTax']===3 || FormData['RF_CountryOfTax']===4 || FormData['RF_CountryOfTax']===6 || FormData['RF_CountryOfTax']===8 || FormData['RF_CountryOfTax']===10 || FormData['RF_CountryOfTax']===13 || FormData['RF_CountryOfTax']===16 || FormData['RF_CountryOfTax']===17 || FormData['RF_CountryOfTax']===19 || FormData['RF_CountryOfTax']===20 || FormData['RF_CountryOfTax']===24 || FormData['RF_CountryOfTax']===27
                                || FormData['RF_CountryOfTax']===28 || FormData['RF_CountryOfTax']===29 || FormData['RF_CountryOfTax']===31 || FormData['RF_CountryOfTax']===32 || FormData['RF_CountryOfTax']===33 || FormData['RF_CountryOfTax']===36 || FormData['RF_CountryOfTax']===37 || FormData['RF_CountryOfTax']===39 || FormData['RF_CountryOfTax']===41 || FormData['RF_CountryOfTax']===42 || FormData['RF_CountryOfTax']===43 || FormData['RF_CountryOfTax']===46 || FormData['RF_CountryOfTax']===47 || FormData['RF_CountryOfTax']===48 || FormData['RF_CountryOfTax']===49 || FormData['RF_CountryOfTax']===50 || FormData['RF_CountryOfTax']===51 || FormData['RF_CountryOfTax']===52 || FormData['RF_CountryOfTax']===53
                                || FormData['RF_CountryOfTax']===55 || FormData['RF_CountryOfTax']===58 || FormData['RF_CountryOfTax']===62 || FormData['RF_CountryOfTax']===64 || FormData['RF_CountryOfTax']===65 || FormData['RF_CountryOfTax']===66 || FormData['RF_CountryOfTax']===67 || FormData['RF_CountryOfTax']===68 || FormData['RF_CountryOfTax']===69 || FormData['RF_CountryOfTax']===71 || FormData['RF_CountryOfTax']===72 || FormData['RF_CountryOfTax']===73 || FormData['RF_CountryOfTax']===74
                                || FormData['RF_CountryOfTax']===82 || FormData['RF_CountryOfTax']===85 || FormData['RF_CountryOfTax']===86 || FormData['RF_CountryOfTax']===90 || FormData['RF_CountryOfTax']===91 || FormData['RF_CountryOfTax']===92 || FormData['RF_CountryOfTax']===93
                                || FormData['RF_CountryOfTax']===94 || FormData['RF_CountryOfTax']===95 || FormData['RF_CountryOfTax']===97 || FormData['RF_CountryOfTax']===98 || FormData['RF_CountryOfTax']===99 || FormData['RF_CountryOfTax']===100 || FormData['RF_CountryOfTax']===103 
                                
                                || FormData['RF_CountryOfTax']===109  || FormData['RF_CountryOfTax']===112  || FormData['RF_CountryOfTax']===115  || FormData['RF_CountryOfTax']===116  || FormData['RF_CountryOfTax']===117  || FormData['RF_CountryOfTax']===121  || FormData['RF_CountryOfTax']===123  || FormData['RF_CountryOfTax']===124
                                || FormData['RF_CountryOfTax']===126  || FormData['RF_CountryOfTax']===127  || FormData['RF_CountryOfTax']===128  || FormData['RF_CountryOfTax']===129  || FormData['RF_CountryOfTax']===134  || FormData['RF_CountryOfTax']===135  || FormData['RF_CountryOfTax']===136
                                || FormData['RF_CountryOfTax']===139  || FormData['RF_CountryOfTax']===143  || FormData['RF_CountryOfTax']===145  || FormData['RF_CountryOfTax']===146  || FormData['RF_CountryOfTax']===148  || FormData['RF_CountryOfTax']===150 || FormData['RF_CountryOfTax']===151
                                || FormData['RF_CountryOfTax']===152 || FormData['RF_CountryOfTax']===153 || FormData['RF_CountryOfTax']===154 || FormData['RF_CountryOfTax']===155 || FormData['RF_CountryOfTax']===158 || FormData['RF_CountryOfTax']===160 || FormData['RF_CountryOfTax']===162 
                                || FormData['RF_CountryOfTax']===163 || FormData['RF_CountryOfTax']===164 || FormData['RF_CountryOfTax']===165 || FormData['RF_CountryOfTax']===166 || FormData['RF_CountryOfTax']===168 || FormData['RF_CountryOfTax']===170 || FormData['RF_CountryOfTax']===172 || FormData['RF_CountryOfTax']===173 || FormData['RF_CountryOfTax']===174 || FormData['RF_CountryOfTax']===175 || FormData['RF_CountryOfTax']===176 || FormData['RF_CountryOfTax']===177
                                || FormData['RF_CountryOfTax']===186 || FormData['RF_CountryOfTax']===187 || FormData['RF_CountryOfTax']===188 || FormData['RF_CountryOfTax']===190 || FormData['RF_CountryOfTax']===191 || FormData['RF_CountryOfTax']===193 || FormData['RF_CountryOfTax']===195
                                || FormData['RF_CountryOfTax']===197 || FormData['RF_CountryOfTax']===198 || FormData['RF_CountryOfTax']===200 || FormData['RF_CountryOfTax']===202 || FormData['RF_CountryOfTax']===203 || FormData['RF_CountryOfTax']===206 || FormData['RF_CountryOfTax']===208 || FormData['RF_CountryOfTax']===209
                                || FormData['RF_CountryOfTax']===211 || FormData['RF_CountryOfTax']===212 || FormData['RF_CountryOfTax']===213 || FormData['RF_CountryOfTax']===214 || FormData['RF_CountryOfTax']===219 || FormData['RF_CountryOfTax']===220 || FormData['RF_CountryOfTax']===221 || FormData['RF_CountryOfTax']===222 || FormData['RF_CountryOfTax']===223 || FormData['RF_CountryOfTax']===224
                                || FormData['RF_CountryOfTax']===226 || FormData['RF_CountryOfTax']===230 || FormData['RF_CountryOfTax']===232 || FormData['RF_CountryOfTax']===233 || FormData['RF_CountryOfTax']===236 || FormData['RF_CountryOfTax']===237 || FormData['RF_CountryOfTax']===238 || FormData['RF_CountryOfTax']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfTax']===5 || FormData['RF_CountryOfTax']===7 || FormData['RF_CountryOfTax']===9 || FormData['RF_CountryOfTax']===12 || FormData['RF_CountryOfTax']===25 || FormData['RF_CountryOfTax']===34 || FormData['RF_CountryOfTax']===35 || FormData['RF_CountryOfTax']===61 || FormData['RF_CountryOfTax']===76 || FormData['RF_CountryOfTax']===84 || FormData['RF_CountryOfTax']===88
                                
                                || FormData['RF_CountryOfTax']===114 || FormData['RF_CountryOfTax']===130 || FormData['RF_CountryOfTax']===132 || FormData['RF_CountryOfTax']===142 || FormData['RF_CountryOfTax']===149 || FormData['RF_CountryOfTax']===159 || FormData['RF_CountryOfTax']===161 
                                || FormData['RF_CountryOfTax']===167 || FormData['RF_CountryOfTax']===194 || FormData['RF_CountryOfTax']===215 || FormData['RF_CountryOfTax']===216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfTax']===11 || FormData['RF_CountryOfTax']===14 || FormData['RF_CountryOfTax']===15 || FormData['RF_CountryOfTax']===18 || FormData['RF_CountryOfTax']===22 || FormData['RF_CountryOfTax']===23 || FormData['RF_CountryOfTax']===26 || FormData['RF_CountryOfTax']===30 || FormData['RF_CountryOfTax']===38 || FormData['RF_CountryOfTax']===40 || FormData['RF_CountryOfTax']===44 || FormData['RF_CountryOfTax']===45
                                || FormData['RF_CountryOfTax']===54 || FormData['RF_CountryOfTax']===56 || FormData['RF_CountryOfTax']===59 || FormData['RF_CountryOfTax']===60 || FormData['RF_CountryOfTax']===63 || FormData['RF_CountryOfTax']===70 || FormData['RF_CountryOfTax']===75 || FormData['RF_CountryOfTax']===77 || FormData['RF_CountryOfTax']===78 || FormData['RF_CountryOfTax']===79 || FormData['RF_CountryOfTax']===80 || FormData['RF_CountryOfTax']===81
                                || FormData['RF_CountryOfTax']===83 || FormData['RF_CountryOfTax']===87 || FormData['RF_CountryOfTax']===89 || FormData['RF_CountryOfTax']===96 || FormData['RF_CountryOfTax']===101 || FormData['RF_CountryOfTax']===104 || FormData['RF_CountryOfTax']===105
                                
                                || FormData['RF_CountryOfTax']===108 || FormData['RF_CountryOfTax']===110 || FormData['RF_CountryOfTax']===111 || FormData['RF_CountryOfTax']===113 || FormData['RF_CountryOfTax']===118 || FormData['RF_CountryOfTax']===120 || FormData['RF_CountryOfTax']===125
                                || FormData['RF_CountryOfTax']===131 || FormData['RF_CountryOfTax']===133 || FormData['RF_CountryOfTax']===137 || FormData['RF_CountryOfTax']===138 || FormData['RF_CountryOfTax']===140 || FormData['RF_CountryOfTax']===141
                                || FormData['RF_CountryOfTax']===144 || FormData['RF_CountryOfTax']===147 || FormData['RF_CountryOfTax']===156 || FormData['RF_CountryOfTax']===157 || FormData['RF_CountryOfTax']===169 || FormData['RF_CountryOfTax']===171 || FormData['RF_CountryOfTax']===178 || FormData['RF_CountryOfTax']===179 || FormData['RF_CountryOfTax']===180 || FormData['RF_CountryOfTax']===181 || FormData['RF_CountryOfTax']===182 || FormData['RF_CountryOfTax']===183
                                || FormData['RF_CountryOfTax']===185 || FormData['RF_CountryOfTax']===189 || FormData['RF_CountryOfTax']===192 || FormData['RF_CountryOfTax']===196 || FormData['RF_CountryOfTax']===199 || FormData['RF_CountryOfTax']===201 || FormData['RF_CountryOfTax']===204 || FormData['RF_CountryOfTax']===205
                                || FormData['RF_CountryOfTax']===207 || FormData['RF_CountryOfTax']===210 || FormData['RF_CountryOfTax']===218 || FormData['RF_CountryOfTax']===225 || FormData['RF_CountryOfTax']===231 || FormData['RF_CountryOfTax']===234 || FormData['RF_CountryOfTax']===235 || FormData['RF_CountryOfTax']===237 || FormData['RF_CountryOfTax']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfTax']===21 || FormData['RF_CountryOfTax']===57 || FormData['RF_CountryOfTax']===106 || FormData['RF_CountryOfTax']===107 || FormData['RF_CountryOfTax']===119 || FormData['RF_CountryOfTax']===187 || FormData['RF_CountryOfTax']===217 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                              
                            <label className="col-form-label">3</label>
                                     
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfTax']===1 || FormData['RF_CountryOfTax']===2 || FormData['RF_CountryOfTax']===3 || FormData['RF_CountryOfTax']===4 || FormData['RF_CountryOfTax']===6 || FormData['RF_CountryOfTax']===8 || FormData['RF_CountryOfTax']===10 || FormData['RF_CountryOfTax']===13 || FormData['RF_CountryOfTax']===16 || FormData['RF_CountryOfTax']===17 || FormData['RF_CountryOfTax']===19 || FormData['RF_CountryOfTax']===20 || FormData['RF_CountryOfTax']===24
                                || FormData['RF_CountryOfTax']===27 || FormData['RF_CountryOfTax']===28 || FormData['RF_CountryOfTax']===29 || FormData['RF_CountryOfTax']===30 || FormData['RF_CountryOfTax']===31 || FormData['RF_CountryOfTax']===32 || FormData['RF_CountryOfTax']===33 || FormData['RF_CountryOfTax']===36 || FormData['RF_CountryOfTax']===37 || FormData['RF_CountryOfTax']===39 || FormData['RF_CountryOfTax']===41 || FormData['RF_CountryOfTax']===42 || FormData['RF_CountryOfTax']===43
                                || FormData['RF_CountryOfTax']===46 || FormData['RF_CountryOfTax']===47 || FormData['RF_CountryOfTax']===48 || FormData['RF_CountryOfTax']===49 || FormData['RF_CountryOfTax']===50 || FormData['RF_CountryOfTax']===51 || FormData['RF_CountryOfTax']===52 || FormData['RF_CountryOfTax']===53 || FormData['RF_CountryOfTax']===55 || FormData['RF_CountryOfTax']===58 || FormData['RF_CountryOfTax']===62 || FormData['RF_CountryOfTax']===64 || FormData['RF_CountryOfTax']===65 || FormData['RF_CountryOfTax']===66 
                                || FormData['RF_CountryOfTax']===67 || FormData['RF_CountryOfTax']===68 || FormData['RF_CountryOfTax']===69 || FormData['RF_CountryOfTax']===70 || FormData['RF_CountryOfTax']===71 || FormData['RF_CountryOfTax']===72 || FormData['RF_CountryOfTax']===73 || FormData['RF_CountryOfTax']===74 || FormData['RF_CountryOfTax']===82 || FormData['RF_CountryOfTax']===85 || FormData['RF_CountryOfTax']===86 || FormData['RF_CountryOfTax']===90 || FormData['RF_CountryOfTax']===91 || FormData['RF_CountryOfTax']===92 || FormData['RF_CountryOfTax']===93
                                || FormData['RF_CountryOfTax']===94 || FormData['RF_CountryOfTax']===95 || FormData['RF_CountryOfTax']===96 || FormData['RF_CountryOfTax']===97 || FormData['RF_CountryOfTax']===98 || FormData['RF_CountryOfTax']===99 || FormData['RF_CountryOfTax']===100 || FormData['RF_CountryOfTax']===102 || FormData['RF_CountryOfTax']===103
                                
                                || FormData['RF_CountryOfTax']===109  || FormData['RF_CountryOfTax']===112  || FormData['RF_CountryOfTax']===115  || FormData['RF_CountryOfTax']===116  || FormData['RF_CountryOfTax']===117  || FormData['RF_CountryOfTax']===121  || FormData['RF_CountryOfTax']===123  || FormData['RF_CountryOfTax']===124
                                || FormData['RF_CountryOfTax']===126  || FormData['RF_CountryOfTax']===127  || FormData['RF_CountryOfTax']===128  || FormData['RF_CountryOfTax']===129  || FormData['RF_CountryOfTax']===134  || FormData['RF_CountryOfTax']===135  || FormData['RF_CountryOfTax']===136
                                || FormData['RF_CountryOfTax']===139  || FormData['RF_CountryOfTax']===143  || FormData['RF_CountryOfTax']===145  || FormData['RF_CountryOfTax']===146  || FormData['RF_CountryOfTax']===148  || FormData['RF_CountryOfTax']===150 || FormData['RF_CountryOfTax']===151
                                || FormData['RF_CountryOfTax']===152 || FormData['RF_CountryOfTax']===153 || FormData['RF_CountryOfTax']===154 || FormData['RF_CountryOfTax']===155 || FormData['RF_CountryOfTax']===158 || FormData['RF_CountryOfTax']===160 || FormData['RF_CountryOfTax']===162 
                                || FormData['RF_CountryOfTax']===163 || FormData['RF_CountryOfTax']===164 || FormData['RF_CountryOfTax']===165 || FormData['RF_CountryOfTax']===166 || FormData['RF_CountryOfTax']===168 || FormData['RF_CountryOfTax']===170 || FormData['RF_CountryOfTax']===172 || FormData['RF_CountryOfTax']===173 || FormData['RF_CountryOfTax']===174 || FormData['RF_CountryOfTax']===175 || FormData['RF_CountryOfTax']===176 || FormData['RF_CountryOfTax']===177
                                || FormData['RF_CountryOfTax']===186 || FormData['RF_CountryOfTax']===187 || FormData['RF_CountryOfTax']===188 || FormData['RF_CountryOfTax']===190 || FormData['RF_CountryOfTax']===191 || FormData['RF_CountryOfTax']===193 || FormData['RF_CountryOfTax']===195
                                || FormData['RF_CountryOfTax']===197 || FormData['RF_CountryOfTax']===198 || FormData['RF_CountryOfTax']===200 || FormData['RF_CountryOfTax']===202 || FormData['RF_CountryOfTax']===203 || FormData['RF_CountryOfTax']===206 || FormData['RF_CountryOfTax']===208 || FormData['RF_CountryOfTax']===209
                                || FormData['RF_CountryOfTax']===211 || FormData['RF_CountryOfTax']===212 || FormData['RF_CountryOfTax']===213 || FormData['RF_CountryOfTax']===214 || FormData['RF_CountryOfTax']===219 || FormData['RF_CountryOfTax']===220 || FormData['RF_CountryOfTax']===221 || FormData['RF_CountryOfTax']===222 || FormData['RF_CountryOfTax']===223 || FormData['RF_CountryOfTax']===224
                                || FormData['RF_CountryOfTax']===226 || FormData['RF_CountryOfTax']===230 || FormData['RF_CountryOfTax']===232 || FormData['RF_CountryOfTax']===233 || FormData['RF_CountryOfTax']===236 || FormData['RF_CountryOfTax']===237 || FormData['RF_CountryOfTax']===238 || FormData['RF_CountryOfTax']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfTax']===5 || FormData['RF_CountryOfTax']===7 || FormData['RF_CountryOfTax']===9 || FormData['RF_CountryOfTax']===12 || FormData['RF_CountryOfTax']===25 || FormData['RF_CountryOfTax']===34 || FormData['RF_CountryOfTax']===35 || FormData['RF_CountryOfTax']===61 || FormData['RF_CountryOfTax']===76 || FormData['RF_CountryOfTax']===84|| FormData['RF_CountryOfTax']===88
                                
                                || FormData['RF_CountryOfTax']===114 || FormData['RF_CountryOfTax']===130 || FormData['RF_CountryOfTax']===132 || FormData['RF_CountryOfTax']===142 || FormData['RF_CountryOfTax']===149 || FormData['RF_CountryOfTax']===159 || FormData['RF_CountryOfTax']===161 
                                || FormData['RF_CountryOfTax']===167 || FormData['RF_CountryOfTax']===194 || FormData['RF_CountryOfTax']===215 || FormData['RF_CountryOfTax']===216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfTax']===11 || FormData['RF_CountryOfTax']===14 || FormData['RF_CountryOfTax']===15 || FormData['RF_CountryOfTax']===18 || FormData['RF_CountryOfTax']===22 || FormData['RF_CountryOfTax']===23 || FormData['RF_CountryOfTax']===26 || FormData['RF_CountryOfTax']===30 || FormData['RF_CountryOfTax']===38 || FormData['RF_CountryOfTax']===40
                                || FormData['RF_CountryOfTax']===44 || FormData['RF_CountryOfTax']===45 || FormData['RF_CountryOfTax']===54 || FormData['RF_CountryOfTax']===56 || FormData['RF_CountryOfTax']===59 || FormData['RF_CountryOfTax']===60 || FormData['RF_CountryOfTax']===63 || FormData['RF_CountryOfTax']===70 || FormData['RF_CountryOfTax']===75 || FormData['RF_CountryOfTax']===77 
                                || FormData['RF_CountryOfTax']===78 || FormData['RF_CountryOfTax']===79 || FormData['RF_CountryOfTax']===80 || FormData['RF_CountryOfTax']===81 || FormData['RF_CountryOfTax']===83 || FormData['RF_CountryOfTax']===87 || FormData['RF_CountryOfTax']===89 || FormData['RF_CountryOfTax']===96 || FormData['RF_CountryOfTax']===97 || FormData['RF_CountryOfTax']===98 
                                || FormData['RF_CountryOfTax']===99 || FormData['RF_CountryOfTax']===100 || FormData['RF_CountryOfTax']===101 || FormData['RF_CountryOfTax']===102 || FormData['RF_CountryOfTax']===104 || FormData['RF_CountryOfTax']===105
                                
                                || FormData['RF_CountryOfTax']===108 || FormData['RF_CountryOfTax']===110 || FormData['RF_CountryOfTax']===111 || FormData['RF_CountryOfTax']===113 || FormData['RF_CountryOfTax']===118 || FormData['RF_CountryOfTax']===120 || FormData['RF_CountryOfTax']===125
                                || FormData['RF_CountryOfTax']===131 || FormData['RF_CountryOfTax']===133 ||  FormData['RF_CountryOfTax']===137 || FormData['RF_CountryOfTax']===138 || FormData['RF_CountryOfTax']===140 || FormData['RF_CountryOfTax']===141
                                || FormData['RF_CountryOfTax']===144 || FormData['RF_CountryOfTax']===147 || FormData['RF_CountryOfTax']===156 || FormData['RF_CountryOfTax']===157 || FormData['RF_CountryOfTax']===169 || FormData['RF_CountryOfTax']===171 || FormData['RF_CountryOfTax']===178 || FormData['RF_CountryOfTax']===179 || FormData['RF_CountryOfTax']===180 || FormData['RF_CountryOfTax']===181 || FormData['RF_CountryOfTax']===182 || FormData['RF_CountryOfTax']===183
                                || FormData['RF_CountryOfTax']===185 || FormData['RF_CountryOfTax']===189 || FormData['RF_CountryOfTax']===192 || FormData['RF_CountryOfTax']===196 || FormData['RF_CountryOfTax']===199 || FormData['RF_CountryOfTax']===201 || FormData['RF_CountryOfTax']===204 || FormData['RF_CountryOfTax']===205
                                || FormData['RF_CountryOfTax']===207 || FormData['RF_CountryOfTax']===210 || FormData['RF_CountryOfTax']===218 || FormData['RF_CountryOfTax']===225 || FormData['RF_CountryOfTax']===231 || FormData['RF_CountryOfTax']===234 || FormData['RF_CountryOfTax']===235 || FormData['RF_CountryOfTax']===237 || FormData['RF_CountryOfTax']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfTax']===21 || FormData['RF_CountryOfTax']===57 || FormData['RF_CountryOfTax']===106 || FormData['RF_CountryOfTax']===107 || FormData['RF_CountryOfTax']===119 || FormData['RF_CountryOfTax']===187 || FormData['RF_CountryOfTax']===217)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">12</label>
                                    
                                </>);
                            }
    
    
                            })()}
                        </div>

                        <br/>
                                    
                                    
                                </>);
                            }

                        })()}

                        
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Industry</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Industry' id='RF_Industry' value={FormData['RF_Industry']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Administrative and support services</option>
                                <option value="2">Adult Entertainment</option>
                                <option value="3">Agriculture,forestry and fishing</option>
                                <option value="4">Arts,Entertainment and Recreation</option>
                                <option value="5">Broadcasting and Entertainment</option>
                                <option value="6">Chemical engineering/manufacturing</option>
                                <option value="7">Community and social activities</option>
                                <option value="8">Construction and civil engineering</option>
                                <option value="9">Consumer goods:wholesale and retail</option>
                                <option value="10">Education</option>
                                <option value="11">Electricity,solar,water,gas</option>
                                <option value="12">Entrepreneurship</option>
                                <option value="13">Estate living and family trusts</option>
                                <option value="14">Extractive services,mining and quarrying</option>
                                <option value="15">Financial and insurance</option>
                                <option value="16">Gambling</option>
                                <option value="17">Government services,armed and state owned enterprise</option>
                                <option value="18">Health care and medical</option>
                                <option value="19">Information technology,communication and telecom</option>
                                <option value="20">Legal practitioner</option>
                                <option value="21">Manufacturing</option>
                                <option value="22">Motor wholesale,retail trade and repair</option>
                                <option value="23">Non profit organization</option>
                                <option value="24">Non government organization(NGO)</option>
                                <option value="25">other</option>
                                <option value="26">PFMA schedule 1</option>
                                <option value="27">PFMA schedule 2</option>
                                <option value="28">PFMA schedule 3A</option>
                                <option value="29">Professional sport</option>
                                <option value="30">Real estate and property services</option>
                                <option value="31">Shell Banking</option>
                                <option value="32">Transport storage,courier and freight</option>
                                <option value="33">Travel,tourism and accomodation</option>
                                <option value="34">Virtual currencies</option>
                            </select>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Industry']===1 || FormData['RF_Industry']===3 || FormData['RF_Industry']===15 || FormData['RF_Industry']===19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===2 || FormData['RF_Industry']===12 || FormData['RF_Industry']===14 || FormData['RF_Industry']===16 || FormData['RF_Industry']===17 || FormData['RF_Industry']===20 || FormData['RF_Industry']===23 || FormData['RF_Industry']===24
                                || FormData['RF_Industry']===26 || FormData['RF_Industry']===27 || FormData['RF_Industry']===28 || FormData['RF_Industry']===30 || FormData['RF_Industry']===34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===4 || FormData['RF_Industry']===5 || FormData['RF_Industry']===6 || FormData['RF_Industry']===7 || FormData['RF_Industry']===8 || FormData['RF_Industry']===9 || FormData['RF_Industry']===10 || FormData['RF_Industry']===11 || FormData['RF_Industry']===13
                                || FormData['RF_Industry']===18 || FormData['RF_Industry']===21 || FormData['RF_Industry']===22 || FormData['RF_Industry']===29 || FormData['RF_Industry']===32 || FormData['RF_Industry']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===31)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }

                        })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Industry']===1 || FormData['RF_Industry']===3 || FormData['RF_Industry']===15 || FormData['RF_Industry']===19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            
                            else if(FormData['RF_Industry']===2 || FormData['RF_Industry']===12 || FormData['RF_Industry']===14 || FormData['RF_Industry']===16 || FormData['RF_Industry']===17 || FormData['RF_Industry']===20 || FormData['RF_Industry']===23 || FormData['RF_Industry']===24
                                || FormData['RF_Industry']===26 || FormData['RF_Industry']===27 || FormData['RF_Industry']===28 || FormData['RF_Industry']===30 || FormData['RF_Industry']===34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===4 || FormData['RF_Industry']===5 || FormData['RF_Industry']===6 || FormData['RF_Industry']===7 || FormData['RF_Industry']===8 || FormData['RF_Industry']===9 || FormData['RF_Industry']===10 || FormData['RF_Industry']===11 || FormData['RF_Industry']===13
                                || FormData['RF_Industry']===18 || FormData['RF_Industry']===21 || FormData['RF_Industry']===22 || FormData['RF_Industry']===29 || FormData['RF_Industry']===32 || FormData['RF_Industry']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===31)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }

                        })()}
                        </div>

                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Source of Funds</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_SourceOfFunds'  id='RF_SourceOfFunds' value={FormData['RF_SourceOfFunds']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Allowance</option>
                                <option value="2">Bonus</option>
                                <option value="3">Bursary</option>
                                <option value="4">Company profits</option>
                                <option value="5">Company sale</option>
                                <option value="6">Cryptocurrency</option>
                                <option value="7">Debt capital</option>
                                <option value="8">Disability/social grant</option>
                                <option value="9">Dividends from investment</option>
                                <option value="10">Divorce settlement</option>
                                <option value="11">Equity capital</option>
                                <option value="12">Gambling winnings</option>
                                <option value="13">Gift</option>
                                <option value="14">Income from previous employment</option>
                                <option value="15">Inherritance</option>
                                <option value="16">Loan</option>
                                <option value="17">Lottery winnings</option>
                                <option value="18">Maintainance(Formal agreement)</option>
                                <option value="19">Maintainance(Informal agreement)</option>
                                <option value="20">Maturing Investments</option>
                                <option value="21">Other</option>
                                <option value="22">Pension</option>
                                <option value="23">Provident fund</option>
                                <option value="24">Rental Propert</option>
                                <option value="25">Retirement Funds</option>
                                <option value="26">Salary</option>
                                <option value="27">Salary asset/property</option>
                                <option value="28">Sale of shares</option>
                                <option value="29">Sanlam payout</option>
                                <option value="30">Savings</option>
                                <option value="31">Settlement</option>
                                <option value="32">Transfer to/from approved funds</option>
                                <option value="33">Trust Income</option>
                            </select>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_SourceOfFunds']===1 || FormData['RF_SourceOfFunds']===6 || FormData['RF_SourceOfFunds']===12 || FormData['RF_SourceOfFunds']===13 || FormData['RF_SourceOfFunds']===16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===2 || FormData['RF_SourceOfFunds']===3 || FormData['RF_SourceOfFunds']===8 || FormData['RF_SourceOfFunds']===9 || FormData['RF_SourceOfFunds']===14 || FormData['RF_SourceOfFunds']===17 || FormData['RF_SourceOfFunds']===18 || FormData['RF_SourceOfFunds']===20
                                || FormData['RF_SourceOfFunds']===22 || FormData['RF_SourceOfFunds']===23 || FormData['RF_SourceOfFunds']===25 || FormData['RF_SourceOfFunds']===26 || FormData['RF_SourceOfFunds']===29 || FormData['RF_SourceOfFunds']===31 || FormData['RF_SourceOfFunds']===32 || FormData['RF_SourceOfFunds']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===4 || FormData['RF_SourceOfFunds']===5 || FormData['RF_SourceOfFunds']===7 || FormData['RF_SourceOfFunds']===10 || FormData['RF_SourceOfFunds']===11 || FormData['RF_SourceOfFunds']===15 || FormData['RF_SourceOfFunds']===19 || FormData['RF_SourceOfFunds']===24
                                || FormData['RF_SourceOfFunds']===27 || FormData['RF_SourceOfFunds']===28 || FormData['RF_SourceOfFunds']===30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===21)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            
                        })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_SourceOfFunds']===1 || FormData['RF_SourceOfFunds']===6 || FormData['RF_SourceOfFunds']===12 || FormData['RF_SourceOfFunds']===13 || FormData['RF_SourceOfFunds']===16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===2 || FormData['RF_SourceOfFunds']===3 || FormData['RF_SourceOfFunds']===8 || FormData['RF_SourceOfFunds']===9 || FormData['RF_SourceOfFunds']===14 || FormData['RF_SourceOfFunds']===17 || FormData['RF_SourceOfFunds']===18 || FormData['RF_SourceOfFunds']===20
                               || FormData['RF_SourceOfFunds']===22 || FormData['RF_SourceOfFunds']===23 || FormData['RF_SourceOfFunds']===25 || FormData['RF_SourceOfFunds']===26 || FormData['RF_SourceOfFunds']===29 || FormData['RF_SourceOfFunds']===31 || FormData['RF_SourceOfFunds']===32 || FormData['RF_SourceOfFunds']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===4 || FormData['RF_SourceOfFunds']===5 || FormData['RF_SourceOfFunds']===7 || FormData['RF_SourceOfFunds']===10 || FormData['RF_SourceOfFunds']===11 || FormData['RF_SourceOfFunds']===15 || FormData['RF_SourceOfFunds']===19 || FormData['RF_SourceOfFunds']===24
                                || FormData['RF_SourceOfFunds']===27 || FormData['RF_SourceOfFunds']===28 || FormData['RF_SourceOfFunds']===30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===21)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }
                           

                        })()}
                        </div>

                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Relationship to client</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_RelationshipToClient' id='RF_RelationshipToClient' value={FormData['RF_RelationshipToClient']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Annuitant</option>
                                <option value="2">Applicant</option>
                                <option value="3">Authorised Representative</option>
                                <option value="4">Cessionary</option>
                                <option value="5">Curator</option>
                                <option value="6">Executor</option>
                                <option value="7">Fund Annuitant</option>
                                <option value="8">Gurantor</option>
                                <option value="9">Legal Guardian</option>
                                <option value="10">Legal owner</option>
                                <option value="11">Multi data client</option>
                                <option value="12">Nominee of ownership</option>
                                <option value="13">Policy owner</option>
                                <option value="14">Power of Attorney</option>
                                <option value="15">Premium Payer</option>
                                <option value="16">Surety</option>
                                
                            </select>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===11
                                || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===12 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===16)
                            {
                                
                                return (<>
                                
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            

                            
                            })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===11 
                            || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===12 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            
                            })()}
                        </div>

                                       
                        </>);
                    }

                   
            
                })()}
                
            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
                
                {(() => { 
                                
                    if(FormData['RF_ClientType']==="2")
                    {
                        
                        return (<>
                        <br/>
                        
                        <div className="col-2">       
                            <label className="col-form-label">Country of registration</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_CountryOfRegistration' id='RF_CountryOfRegistration' value={FormData['RF_CountryOfRegistration']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andora</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armania</option>
                                <option value="12">Aruba</option>
                                <option value="13">Auckland Islands</option>
                                <option value="14">Australia</option>
                                <option value="15">Austria</option>
                                <option value="16">Azerbaijan</option>
                                <option value="17">Bahamas</option>
                                <option value="18">Bahrain</option>
                                <option value="19">Bangladesh</option>
                                <option value="20">Barbados</option>
                                <option value="21">Belarus</option>
                                <option value="22">Belgium</option>
                                <option value="23">Belize</option>
                                <option value="24">Benin</option>
                                <option value="25">Bermuda</option>
                                <option value="26">Bhutan</option>
                                <option value="27">Bolivia</option>
                                <option value="28">Bonaire</option>
                                <option value="29">Bosnia</option>
                                <option value="30">Botswana</option>
                                <option value="31">Bouvet Islands</option>
                                <option value="32">Brazil</option>
                                <option value="33">British Indian Ocean Teritory</option>
                                <option value="34">Brunei Darussalam</option>
                                <option value="35">Bulgaria</option>
                                <option value="36">Burkina Faso</option>
                                <option value="37">Burundi</option>
                                <option value="38">Cabo Verde</option>
                                <option value="39">Cambodia</option>
                                <option value="40">Cameroon</option>
                                <option value="41">Canada</option>
                                <option value="42">Cayman Islands</option>
                                <option value="43">Central African Republic</option>
                                <option value="44">Chad</option>
                                <option value="45">Chile</option>
                                <option value="46">China</option>
                                <option value="47">Christmas Island</option>
                                <option value="48">Cocos</option>
                                <option value="49">Colombia</option>
                                <option value="50">Comoros</option>
                                <option value="51">Congo Democratic</option>
                                <option value="52">Congo Republic</option>
                                <option value="53">Cook Islands</option>
                                <option value="54">Costa Rica</option>
                                <option value="55">Ivory Cost</option>
                                <option value="56">Croatia</option>
                                <option value="57">Cuba</option>
                                <option value="58">Curacao</option>
                                <option value="59">Cyprus</option>
                                <option value="60">Czech Republic</option>
                                <option value="61">Denmark</option>
                                <option value="62">Djibouti</option>
                                <option value="63">Dominica</option>
                                <option value="64">Dominican Republic</option>
                                <option value="65">Ecuador</option>
                                <option value="66">Egypt</option>
                                <option value="67">EI Salvador</option>
                                <option value="68">Equatorial Guinea</option>
                                <option value="69">Eritrea</option>
                                <option value="70">Estonia</option>
                                <option value="71">eSwaitini</option>
                                <option value="72">Ethiopia</option>
                                <option value="73">Falkland Islands</option>
                                <option value="74">Faroe Islands</option>
                                <option value="75">Fiji</option>
                                <option value="76">Finland</option>
                                <option value="77">France</option>
                                <option value="78">French Guiana</option>
                                <option value="79">French Polynesia</option>
                                <option value="80">French Southern Territories</option>
                                <option value="81">Gabon</option>
                                <option value="82">Gambia</option>
                                <option value="83">Georgia</option>
                                <option value="84">Germany</option>
                                <option value="85">Ghana</option>
                                <option value="86">Gibralter</option>
                                <option value="87">Greece</option>
                                <option value="88">Greenland</option>
                                <option value="89">Grenada</option>
                                <option value="90">Guadeloupe</option>
                                <option value="91">Guam</option>
                                <option value="92">Guatemala</option>
                                <option value="93">Guernsey</option>
                                <option value="94">Guinea</option>
                                <option value="95">Guinea Bissau</option>
                                <option value="96">Guyana</option>
                                <option value="97">Haiti</option>
                                <option value="98">Herd Island</option>
                                <option value="99">Holy See</option>
                                <option value="100">Honduras</option>
                                <option value="101">Hongkong</option>
                                <option value="102">Hungary</option>
                                <option value="103">Iceland</option>
                                <option value="104">India</option>
                                <option value="105">Indonessia</option>
                                <option value="106">Iran</option>
                                <option value="107">Iraq</option>
                                <option value="108">Ireland</option>
                                <option value="109">Isle of man</option>
                                <option value="110">Israel</option>
                                <option value="111">Italy</option>
                                <option value="112">Jamaica</option>
                                <option value="113">Japan</option>
                                <option value="114">Jersey</option>
                                <option value="115">Jordan</option>
                                <option value="116">Kazakhstan</option>
                                <option value="117">Kenya</option>
                                <option value="118">Kiribati</option>
                                <option value="119">Korea North</option>
                                <option value="120">Korea South</option>
                                <option value="121">Kosovo</option>
                                <option value="122">Kuwait</option>
                                <option value="123">Kyrgyzstan</option>
                                <option value="124">Laos</option>
                                <option value="125">Latvia</option>
                                <option value="126">Lebanon</option>
                                <option value="127">Lesotho</option>
                                <option value="128">Liberia</option>
                                <option value="129">Libya</option>
                                <option value="130">Liechtenstein</option>
                                <option value="131">Lithuania</option>
                                <option value="132">Luxembourg</option>
                                <option value="133">Macao</option>
                                <option value="134">Macedonia</option>
                                <option value="135">Madagascar</option>
                                <option value="136">Malawi</option>
                                <option value="137">Malaysia</option>
                                <option value="138">Maldives</option>
                                <option value="139">Mali</option>
                                <option value="140">Malta</option>
                                <option value="141">Marshall Islands</option>
                                <option value="142">Martinique</option>
                                <option value="143">Mauritania</option>
                                <option value="144">Mauritius</option>
                                <option value="145">Mayotte</option>
                                <option value="146">Mexico</option>
                                <option value="147">Micronessia</option>
                                <option value="148">Moldova</option>
                                <option value="149">Monaco</option>
                                <option value="150">Mongolia</option>
                                <option value="151">Montenegro</option>
                                <option value="152">Montserrat</option>
                                <option value="153">Morocco</option>
                                <option value="154">Mozambique</option>
                                <option value="155">Mynamar</option>
                                <option value="156">Namabia</option>
                                <option value="157">Nauru</option>
                                <option value="158">Nepal</option>
                                <option value="159">Netherlands</option>
                                <option value="160">New Celedonia</option>
                                <option value="161">Newzealand</option>
                                <option value="162">Niger</option>
                                <option value="163">Nigeria</option>
                                <option value="164">Norfolk Island</option>
                                <option value="165">Nothern Mariana Islands</option>
                                <option value="166">Norway</option>
                                <option value="167">Nuie</option>
                                <option value="168">Oman</option>
                                <option value="169">Pakistan</option>
                                <option value="170">Palau</option>
                                <option value="171">Panama</option>
                                <option value="172">Papua New Guinea</option>
                                <option value="173">Paraguay</option>
                                <option value="174">Peru</option>
                                <option value="175">Philippines</option>
                                <option value="176">Pitcaim</option>
                                <option value="177">Poland</option>
                                <option value="178">Portugal</option>
                                <option value="179">Puerto Rico</option>
                                <option value="180">Qatar</option>
                                <option value="181">Reunion</option>
                                <option value="182">Roman</option>
                                 <option value="183">Russia</option>
                                 <option value="184">Rwanda</option>
                                 <option value="185">Saint Barthelemy</option>
                                 <option value="186">Saint Helena</option>
                                 <option value="187">Saint Kitts</option>
                                 <option value="188">Saint Lucia</option>
                                 <option value="189">Saint Martin</option>
                                 <option value="190">Saint Pierre</option>
                                 <option value="191">Saint Vincent</option>
                                 <option value="192">Samoa</option>
                                 <option value="193">Saint Marino</option>
                                 <option value="194">Sao Tome</option>
                                 <option value="195">Saudia Arabia</option>
                                 <option value="196">Senegal</option>
                                 <option value="197">Serbia</option>
                                 <option value="198">Seychelles</option>
                                 <option value="199">Sierra Leone</option>
                                 <option value="200">Singapore</option>
                                 <option value="201">Sint Martin</option>
                                 <option value="202">Slovekia</option>
                                 <option value="203">Slovenia</option>
                                 <option value="204">Solomon Islands</option>
                                 <option value="205">Somalia</option>
                                 <option value="206">South Africa</option>
                                 <option value="207">South Georgia</option>
                                 <option value="208">South Sudan</option>
                                 <option value="209">SPain</option>
                                 <option value="210">Srilanka</option>
                                 <option value="211">Sudan</option>
                                 <option value="212">Suriname</option>
                                 <option value="213">Svalbard</option>
                                 <option value="214">Sweden</option>
                                 <option value="215">Switxerland</option>
                                 <option value="216">Syria</option>
                                 <option value="217">Taiwan</option>
                                 <option value="218">Tajikistan</option>
                                 <option value="219">Tanzania</option>
                                 <option value="220">Thailand</option>
                                 <option value="221">Timor Leste</option>
                                 <option value="222">Togo</option>
                                 <option value="223">Tokelau</option>
                                 <option value="224">Tonga</option>
                                 <option value="225">Trinidad</option>
                                 <option value="226">Tunisia</option>
                                 <option value="227">Turkey</option>
                                 <option value="228">Turkmenistan</option>
                                 <option value="229">Turks</option>
                                 <option value="230">Tuvalu</option>
                                 <option value="231">Uganda</option>
                                 <option value="232">Ukraine</option>
                                 <option value="233">United Arab Emirates</option>
                                 <option value="224">United Kingdom</option>
                                 <option value="225">United States Minor</option>
                                 <option value="226">United States of America</option>
                                 <option value="227">Uruguay</option>
                                 <option value="228">Uzbekistan</option>
                                 <option value="229">Vanuatu</option>
                                 <option value="230">Venezuela</option>
                                 <option value="231">Vietnam</option>
                                 <option value="232">Virgin Islands(British)</option>
                                 <option value="233">Virgin Islands(US)</option>
                                 <option value="234">Wallis and Fatuna</option>
                                 <option value="235">West Bank</option>
                                 <option value="236">Western Sahara</option>
                                 <option value="237">Yemen</option>
                                 <option value="238">Zambia</option>
                                 <option value="239">Zimbabwe</option>
                                 

                            </select>    
                        </div>

                        
                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">

                            {(() => { 
                            
                            if(FormData['RF_CountryOfRegistration'] === "1" || FormData['RF_CountryOfRegistration'] === "2" || FormData['RF_CountryOfRegistration'] === "3" || FormData['RF_CountryOfRegistration'] === "4" || FormData['RF_CountryOfRegistration'] === "6" || FormData['RF_CountryOfRegistration'] === "8" || FormData['RF_CountryOfRegistration'] === "10" || FormData['RF_CountryOfRegistration'] === "13" || FormData['RF_CountryOfRegistration'] === "16" || FormData['RF_CountryOfRegistration'] === "17" || FormData['RF_CountryOfRegistration'] === "19" || FormData['RF_CountryOfRegistration'] === "20" || FormData['RF_CountryOfRegistration'] === "24" || FormData['RF_CountryOfRegistration'] === "27"
                                || FormData['RF_CountryOfRegistration'] === "28" || FormData['RF_CountryOfRegistration'] === "29" || FormData['RF_CountryOfRegistration'] === "31" || FormData['RF_CountryOfRegistration'] === "32" || FormData['RF_CountryOfRegistration'] === "33" || FormData['RF_CountryOfRegistration'] === "36" || FormData['RF_CountryOfRegistration'] === "37" || FormData['RF_CountryOfRegistration'] === "39" || FormData['RF_CountryOfRegistration'] === "41" || FormData['RF_CountryOfRegistration'] === "42" || FormData['RF_CountryOfRegistration'] === "43" || FormData['RF_CountryOfRegistration'] === "46" || FormData['RF_CountryOfRegistration'] === "47" || FormData['RF_CountryOfRegistration'] === "48" || FormData['RF_CountryOfRegistration'] === "49" || FormData['RF_CountryOfRegistration'] === "50" || FormData['RF_CountryOfRegistration'] === "51" || FormData['RF_CountryOfRegistration'] === "52" || FormData['RF_CountryOfRegistration'] === "53"
                                || FormData['RF_CountryOfRegistration'] === "55" || FormData['RF_CountryOfRegistration'] === "58" || FormData['RF_CountryOfRegistration'] === "62" || FormData['RF_CountryOfRegistration'] === "64" || FormData['RF_CountryOfRegistration'] === "65" || FormData['RF_CountryOfRegistration'] === "66" || FormData['RF_CountryOfRegistration'] === "67" || FormData['RF_CountryOfRegistration'] === "68" || FormData['RF_CountryOfRegistration'] === "69" || FormData['RF_CountryOfRegistration'] === "71" || FormData['RF_CountryOfRegistration'] === "72" || FormData['RF_CountryOfRegistration'] === "73" || FormData['RF_CountryOfRegistration'] === "74"
                                || FormData['RF_CountryOfRegistration'] === "82" || FormData['RF_CountryOfRegistration'] === "85" || FormData['RF_CountryOfRegistration'] === "86" || FormData['RF_CountryOfRegistration'] === "90" || FormData['RF_CountryOfRegistration'] === "91" || FormData['RF_CountryOfRegistration'] === "92" || FormData['RF_CountryOfRegistration'] === "93"
                                || FormData['RF_CountryOfRegistration'] === "94" || FormData['RF_CountryOfRegistration'] === "95" || FormData['RF_CountryOfRegistration'] === "97" || FormData['RF_CountryOfRegistration'] === "98" || FormData['RF_CountryOfRegistration'] === "99" || FormData['RF_CountryOfRegistration'] === "100" || FormData['RF_CountryOfRegistration'] === "103"
                                
                                || FormData['RF_CountryOfRegistration'] === "109" ||  FormData['RF_CountryOfRegistration'] === "112" ||  FormData['RF_CountryOfRegistration'] === "115" ||  FormData['RF_CountryOfRegistration'] === "116" ||  FormData['RF_CountryOfRegistration'] === "117" ||  FormData['RF_CountryOfRegistration'] === "121" ||  FormData['RF_CountryOfRegistration'] === "123" || FormData['RF_CountryOfRegistration'] === "124"
                                || FormData['RF_CountryOfRegistration'] === "126" ||  FormData['RF_CountryOfRegistration'] === "127" ||  FormData['RF_CountryOfRegistration'] === "128" ||  FormData['RF_CountryOfRegistration'] === "129" ||  FormData['RF_CountryOfRegistration'] === "134" ||  FormData['RF_CountryOfRegistration'] === "135" ||  FormData['RF_CountryOfRegistration'] === "136"
                                || FormData['RF_CountryOfRegistration'] === "139" ||  FormData['RF_CountryOfRegistration'] === "143" ||  FormData['RF_CountryOfRegistration'] === "145" ||  FormData['RF_CountryOfRegistration'] === "146" ||  FormData['RF_CountryOfRegistration'] === "148" ||  FormData['RF_CountryOfRegistration'] === "150" || FormData['RF_CountryOfRegistration'] === "151"
                                || FormData['RF_CountryOfRegistration'] === "152" || FormData['RF_CountryOfRegistration'] === "153" || FormData['RF_CountryOfRegistration'] === "154" || FormData['RF_CountryOfRegistration'] === "155" || FormData['RF_CountryOfRegistration'] === "158" || FormData['RF_CountryOfRegistration'] === "160" || FormData['RF_CountryOfRegistration'] === "162" 
                                || FormData['RF_CountryOfRegistration'] === "163" || FormData['RF_CountryOfRegistration'] === "164" || FormData['RF_CountryOfRegistration'] === "165" || FormData['RF_CountryOfRegistration'] === "166" || FormData['RF_CountryOfRegistration'] === "168" || FormData['RF_CountryOfRegistration'] === "170" || FormData['RF_CountryOfRegistration'] === "172" || FormData['RF_CountryOfRegistration'] === "173" || FormData['RF_CountryOfRegistration'] === "174" || FormData['RF_CountryOfRegistration'] === "175" || FormData['RF_CountryOfRegistration'] === "176" || FormData['RF_CountryOfRegistration'] === "177"
                                || FormData['RF_CountryOfRegistration'] === "186" || FormData['RF_CountryOfRegistration'] === "187" || FormData['RF_CountryOfRegistration'] === "188" || FormData['RF_CountryOfRegistration'] === "190" || FormData['RF_CountryOfRegistration'] === "191" || FormData['RF_CountryOfRegistration'] === "193" || FormData['RF_CountryOfRegistration'] === "195"
                                || FormData['RF_CountryOfRegistration'] === "197" || FormData['RF_CountryOfRegistration'] === "198" || FormData['RF_CountryOfRegistration'] === "200" || FormData['RF_CountryOfRegistration'] === "202" || FormData['RF_CountryOfRegistration'] === "203" || FormData['RF_CountryOfRegistration'] === "206" || FormData['RF_CountryOfRegistration'] === "208" || FormData['RF_CountryOfRegistration'] === "209"
                                || FormData['RF_CountryOfRegistration'] === "211" || FormData['RF_CountryOfRegistration'] === "212" || FormData['RF_CountryOfRegistration'] === "213" || FormData['RF_CountryOfRegistration'] === "214" || FormData['RF_CountryOfRegistration'] === "219" || FormData['RF_CountryOfRegistration'] === "220" || FormData['RF_CountryOfRegistration'] === "221" || FormData['RF_CountryOfRegistration'] === "222" || FormData['RF_CountryOfRegistration'] === "223" || FormData['RF_CountryOfRegistration'] === "224"
                                || FormData['RF_CountryOfRegistration'] === "226" || FormData['RF_CountryOfRegistration'] === "230" || FormData['RF_CountryOfRegistration'] === "232" || FormData['RF_CountryOfRegistration'] === "233" || FormData['RF_CountryOfRegistration'] === "236" || FormData['RF_CountryOfRegistration'] === "237" || FormData['RF_CountryOfRegistration'] === "238" || FormData['RF_CountryOfRegistration']==="239")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfRegistration']==="5" || FormData['RF_CountryOfRegistration']==="7" || FormData['RF_CountryOfRegistration']==="9" || FormData['RF_CountryOfRegistration']==="12" || FormData['RF_CountryOfRegistration']==="25" || FormData['RF_CountryOfRegistration']==="34" || FormData['RF_CountryOfRegistration']==="35" || FormData['RF_CountryOfRegistration']==="61" || FormData['RF_CountryOfRegistration']==="76" || FormData['RF_CountryOfRegistration']==="84" || FormData['RF_CountryOfRegistration']==="88"
                                
                                || FormData['RF_CountryOfRegistration']==="114" || FormData['RF_CountryOfRegistration']==="130" || FormData['RF_CountryOfRegistration']==="132" || FormData['RF_CountryOfRegistration']==="142" || FormData['RF_CountryOfRegistration']==="149" || FormData['RF_CountryOfRegistration']==="159" || FormData['RF_CountryOfRegistration']==="161"
                                || FormData['RF_CountryOfRegistration']==="167" || FormData['RF_CountryOfRegistration']==="194" || FormData['RF_CountryOfRegistration']==="215" || FormData['RF_CountryOfRegistration']==="216" )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfRegistration']==="11" || FormData['RF_CountryOfRegistration']==="14" || FormData['RF_CountryOfRegistration']==="15" || FormData['RF_CountryOfRegistration']==="18" || FormData['RF_CountryOfRegistration']==="22" || FormData['RF_CountryOfRegistration']==="23" || FormData['RF_CountryOfRegistration']==="26" || FormData['RF_CountryOfRegistration']==="30" || FormData['RF_CountryOfRegistration']==="38" || FormData['RF_CountryOfRegistration']==="40" || FormData['RF_CountryOfRegistration']==="44" || FormData['RF_CountryOfRegistration']==="45"
                                || FormData['RF_CountryOfRegistration']==="54" || FormData['RF_CountryOfRegistration']==="56" || FormData['RF_CountryOfRegistration']==="59" || FormData['RF_CountryOfRegistration']==="60" || FormData['RF_CountryOfRegistration']==="63" || FormData['RF_CountryOfRegistration']==="70" || FormData['RF_CountryOfRegistration']==="75" || FormData['RF_CountryOfRegistration']==="77" || FormData['RF_CountryOfRegistration']==="78" || FormData['RF_CountryOfRegistration']==="79" || FormData['RF_CountryOfRegistration']==="80" || FormData['RF_CountryOfRegistration']==="81"
                                || FormData['RF_CountryOfRegistration']==="83" || FormData['RF_CountryOfRegistration']==="87" || FormData['RF_CountryOfRegistration']==="89" || FormData['RF_CountryOfRegistration']==="96" || FormData['RF_CountryOfRegistration']==="101" || FormData['RF_CountryOfRegistration']==="104" || FormData['RF_CountryOfRegistration']==="105"
                                || FormData['RF_CountryOfRegistration']==="108" || FormData['RF_CountryOfRegistration']==="110" || FormData['RF_CountryOfRegistration']==="111" || FormData['RF_CountryOfRegistration']==="113" || FormData['RF_CountryOfRegistration']==="118" || FormData['RF_CountryOfRegistration']==="120" || FormData['RF_CountryOfRegistration']==="125"
                                || FormData['RF_CountryOfRegistration']==="131" || FormData['RF_CountryOfRegistration']==="133" ||  FormData['RF_CountryOfRegistration']==="137" || FormData['RF_CountryOfRegistration']==="138" || FormData['RF_CountryOfRegistration']==="140" || FormData['RF_CountryOfRegistration']==="141"
                                || FormData['RF_CountryOfRegistration']==="144" || FormData['RF_CountryOfRegistration']==="147" || FormData['RF_CountryOfRegistration']==="156" || FormData['RF_CountryOfRegistration']==="157" || FormData['RF_CountryOfRegistration']==="169" || FormData['RF_CountryOfRegistration']==="171" || FormData['RF_CountryOfRegistration']==="178" || FormData['RF_CountryOfRegistration']==="179" || FormData['RF_CountryOfRegistration']==="180" || FormData['RF_CountryOfRegistration']==="181" || FormData['RF_CountryOfRegistration']==="182" || FormData['RF_CountryOfRegistration']==="183"
                                || FormData['RF_CountryOfRegistration']==="185" || FormData['RF_CountryOfRegistration']==="189" || FormData['RF_CountryOfRegistration']==="192" || FormData['RF_CountryOfRegistration']==="196" || FormData['RF_CountryOfRegistration']==="199" || FormData['RF_CountryOfRegistration']==="201" || FormData['RF_CountryOfRegistration']==="204" || FormData['RF_CountryOfRegistration']==="205"
                                || FormData['RF_CountryOfRegistration']==="207" || FormData['RF_CountryOfRegistration']==="210" || FormData['RF_CountryOfRegistration']==="218" || FormData['RF_CountryOfRegistration']==="225" || FormData['RF_CountryOfRegistration']==="231" || FormData['RF_CountryOfRegistration']==="234" || FormData['RF_CountryOfRegistration']==="235" || FormData['RF_CountryOfRegistration']==="237" || FormData['RF_CountryOfRegistration']==="238")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfRegistration']==="21" || FormData['RF_CountryOfRegistration']==="57" || FormData['RF_CountryOfRegistration']==="106" || FormData['RF_CountryOfRegistration']==="107" || FormData['RF_CountryOfRegistration']==="119" || FormData['RF_CountryOfRegistration']==="187" || FormData['RF_CountryOfRegistration']==="217" )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                            
                                     
                                    <label className="col-form-label">3</label>
                                    
                             
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfRegistration']==="1" || FormData['RF_CountryOfRegistration']==="2" || FormData['RF_CountryOfRegistration']==="3" || FormData['RF_CountryOfRegistration']==="4" || FormData['RF_CountryOfRegistration']==="6" || FormData['RF_CountryOfRegistration']==="8" || FormData['RF_CountryOfRegistration']==="10" || FormData['RF_CountryOfRegistration']==="13" || FormData['RF_CountryOfRegistration']==="16" || FormData['RF_CountryOfRegistration']==="17" || FormData['RF_CountryOfRegistration']==="19" || FormData['RF_CountryOfRegistration']==="20" || FormData['RF_CountryOfRegistration']==="24"
                                || FormData['RF_CountryOfRegistration']==="27" || FormData['RF_CountryOfRegistration']==="28" || FormData['RF_CountryOfRegistration']==="29" || FormData['RF_CountryOfRegistration']==="30" || FormData['RF_CountryOfRegistration']==="31" || FormData['RF_CountryOfRegistration']==="32" || FormData['RF_CountryOfRegistration']==="33" || FormData['RF_CountryOfRegistration']==="36" || FormData['RF_CountryOfRegistration']==="37" || FormData['RF_CountryOfRegistration']==="39" || FormData['RF_CountryOfRegistration']==="41" || FormData['RF_CountryOfRegistration']==="42" || FormData['RF_CountryOfRegistration']==="43"
                                || FormData['RF_CountryOfRegistration']==="46" || FormData['RF_CountryOfRegistration']==="47" || FormData['RF_CountryOfRegistration']==="48" || FormData['RF_CountryOfRegistration']==="49" || FormData['RF_CountryOfRegistration']==="50" || FormData['RF_CountryOfRegistration']==="51" || FormData['RF_CountryOfRegistration']==="52" || FormData['RF_CountryOfRegistration']==="53" || FormData['RF_CountryOfRegistration']==="55" || FormData['RF_CountryOfRegistration']==="58" || FormData['RF_CountryOfRegistration']==="62" || FormData['RF_CountryOfRegistration']==="64" || FormData['RF_CountryOfRegistration']==="65" || FormData['RF_CountryOfRegistration']==="66" 
                                || FormData['RF_CountryOfRegistration']==="67" || FormData['RF_CountryOfRegistration']==="68" || FormData['RF_CountryOfRegistration']==="69" || FormData['RF_CountryOfRegistration']==="70" || FormData['RF_CountryOfRegistration']==="71" || FormData['RF_CountryOfRegistration']==="72" || FormData['RF_CountryOfRegistration']==="73" || FormData['RF_CountryOfRegistration']==="74" || FormData['RF_CountryOfRegistration']==="82" || FormData['RF_CountryOfRegistration']==="85" || FormData['RF_CountryOfRegistration']==="86" || FormData['RF_CountryOfRegistration']==="90" || FormData['RF_CountryOfRegistration']==="91" || FormData['RF_CountryOfRegistration']==="92" || FormData['RF_CountryOfRegistration']==="93"
                                || FormData['RF_CountryOfRegistration']==="94" || FormData['RF_CountryOfRegistration']==="95" || FormData['RF_CountryOfRegistration']==="96" || FormData['RF_CountryOfRegistration']==="97" || FormData['RF_CountryOfRegistration']==="98" || FormData['RF_CountryOfRegistration']==="99" || FormData['RF_CountryOfRegistration']==="100" || FormData['RF_CountryOfRegistration']==="102" || FormData['RF_CountryOfRegistration']==="103"
                                
                                || FormData['RF_CountryOfRegistration']==="109" || FormData['RF_CountryOfRegistration']==="112" || FormData['RF_CountryOfRegistration']==="115" ||  FormData['RF_CountryOfRegistration']==="116" ||  FormData['RF_CountryOfRegistration']==="117" ||  FormData['RF_CountryOfRegistration']==="121" ||  FormData['RF_CountryOfRegistration']==="123" ||  FormData['RF_CountryOfRegistration']==="124"
                                || FormData['RF_CountryOfRegistration']==="126" || FormData['RF_CountryOfRegistration']==="127" || FormData['RF_CountryOfRegistration']==="128" ||  FormData['RF_CountryOfRegistration']==="129" ||  FormData['RF_CountryOfRegistration']==="134" ||  FormData['RF_CountryOfRegistration']==="135" ||  FormData['RF_CountryOfRegistration']==="136"
                                || FormData['RF_CountryOfRegistration']==="139" || FormData['RF_CountryOfRegistration']==="143" || FormData['RF_CountryOfRegistration']==="145" ||  FormData['RF_CountryOfRegistration']==="146" ||  FormData['RF_CountryOfRegistration']==="148" ||  FormData['RF_CountryOfRegistration']==="150" || FormData['RF_CountryOfRegistration']==="151"
                                || FormData['RF_CountryOfRegistration']==="152" || FormData['RF_CountryOfRegistration']==="153" || FormData['RF_CountryOfRegistration']==="154" || FormData['RF_CountryOfRegistration']==="155" || FormData['RF_CountryOfRegistration']==="158" || FormData['RF_CountryOfRegistration']==="160" || FormData['RF_CountryOfRegistration']==="162" 
                                || FormData['RF_CountryOfRegistration']==="163" || FormData['RF_CountryOfRegistration']==="164" || FormData['RF_CountryOfRegistration']==="165" || FormData['RF_CountryOfRegistration']==="166" || FormData['RF_CountryOfRegistration']==="168" || FormData['RF_CountryOfRegistration']==="170" || FormData['RF_CountryOfRegistration']==="172" || FormData['RF_CountryOfRegistration']==="173" || FormData['RF_CountryOfRegistration']==="174" || FormData['RF_CountryOfRegistration']==="175" || FormData['RF_CountryOfRegistration']==="176" || FormData['RF_CountryOfRegistration']==="177"
                                || FormData['RF_CountryOfRegistration']==="186" || FormData['RF_CountryOfRegistration']==="187" || FormData['RF_CountryOfRegistration']==="188" || FormData['RF_CountryOfRegistration']==="190" || FormData['RF_CountryOfRegistration']==="191" || FormData['RF_CountryOfRegistration']==="193" || FormData['RF_CountryOfRegistration']==="195"
                                || FormData['RF_CountryOfRegistration']==="197" || FormData['RF_CountryOfRegistration']==="198" || FormData['RF_CountryOfRegistration']==="200" || FormData['RF_CountryOfRegistration']==="202" || FormData['RF_CountryOfRegistration']==="203" || FormData['RF_CountryOfRegistration']==="206" || FormData['RF_CountryOfRegistration']==="208" || FormData['RF_CountryOfRegistration']==="209"
                                || FormData['RF_CountryOfRegistration']==="211" || FormData['RF_CountryOfRegistration']==="212" || FormData['RF_CountryOfRegistration']==="213" || FormData['RF_CountryOfRegistration']==="214" || FormData['RF_CountryOfRegistration']==="219" || FormData['RF_CountryOfRegistration']==="220" || FormData['RF_CountryOfRegistration']==="221" || FormData['RF_CountryOfRegistration']==="222" || FormData['RF_CountryOfRegistration']==="223" || FormData['RF_CountryOfRegistration']==="224"
                                || FormData['RF_CountryOfRegistration']==="226" || FormData['RF_CountryOfRegistration']==="230" || FormData['RF_CountryOfRegistration']==="232" || FormData['RF_CountryOfRegistration']==="233" || FormData['RF_CountryOfRegistration']==="236" || FormData['RF_CountryOfRegistration']==="237" || FormData['RF_CountryOfRegistration']==="238" || FormData['RF_CountryOfRegistration']==="239")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfRegistration']==="5" || FormData['RF_CountryOfRegistration']==="7" || FormData['RF_CountryOfRegistration']==="9" || FormData['RF_CountryOfRegistration']==="12" || FormData['RF_CountryOfRegistration']==="25" || FormData['RF_CountryOfRegistration']==="34" || FormData['RF_CountryOfRegistration']==="35" || FormData['RF_CountryOfRegistration']==="61" || FormData['RF_CountryOfRegistration']==="76" || FormData['RF_CountryOfRegistration']==="84" || FormData['RF_CountryOfRegistration']==="88" 
                                || FormData['RF_CountryOfRegistration']==="114" || FormData['RF_CountryOfRegistration']==="130" || FormData['RF_CountryOfRegistration']==="132" || FormData['RF_CountryOfRegistration']==="142" || FormData['RF_CountryOfRegistration']==="149" || FormData['RF_CountryOfRegistration']==="159" || FormData['RF_CountryOfRegistration']==="161"
                                || FormData['RF_CountryOfRegistration']==="167" || FormData['RF_CountryOfRegistration']==="194" || FormData['RF_CountryOfRegistration']==="215" || FormData['RF_CountryOfRegistration']==="216")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfRegistration']==="11" || FormData['RF_CountryOfRegistration']==="14" || FormData['RF_CountryOfRegistration']==="15" || FormData['RF_CountryOfRegistration']==="18" || FormData['RF_CountryOfRegistration']==="22" || FormData['RF_CountryOfRegistration']==="23" || FormData['RF_CountryOfRegistration']==="26" || FormData['RF_CountryOfRegistration']==="30" || FormData['RF_CountryOfRegistration']==="38" || FormData['RF_CountryOfRegistration']==="40"
                                || FormData['RF_CountryOfRegistration']==="44" || FormData['RF_CountryOfRegistration']==="45" || FormData['RF_CountryOfRegistration']==="54" || FormData['RF_CountryOfRegistration']==="56" || FormData['RF_CountryOfRegistration']==="59" || FormData['RF_CountryOfRegistration']==="60" || FormData['RF_CountryOfRegistration']==="63" || FormData['RF_CountryOfRegistration']==="70" || FormData['RF_CountryOfRegistration']==="75" || FormData['RF_CountryOfRegistration']==="77" 
                                || FormData['RF_CountryOfRegistration']==="78" || FormData['RF_CountryOfRegistration']==="79" || FormData['RF_CountryOfRegistration']==="80" || FormData['RF_CountryOfRegistration']==="81" || FormData['RF_CountryOfRegistration']==="83" || FormData['RF_CountryOfRegistration']==="87" || FormData['RF_CountryOfRegistration']==="89" || FormData['RF_CountryOfRegistration']==="96" || FormData['RF_CountryOfRegistration']==="97" || FormData['RF_CountryOfRegistration']==="98" 
                                || FormData['RF_CountryOfRegistration']==="99" || FormData['RF_CountryOfRegistration']==="100" || FormData['RF_CountryOfRegistration']==="101" || FormData['RF_CountryOfRegistration']==="102" || FormData['RF_CountryOfRegistration']==="104" || FormData['RF_CountryOfRegistration']==="105"
                                || FormData['RF_CountryOfRegistration']==="108" || FormData['RF_CountryOfRegistration']==="110" || FormData['RF_CountryOfRegistration']==="111" || FormData['RF_CountryOfRegistration']==="113" || FormData['RF_CountryOfRegistration']==="118" || FormData['RF_CountryOfRegistration']==="120" || FormData['RF_CountryOfRegistration']==="125"
                                || FormData['RF_CountryOfRegistration']==="131" || FormData['RF_CountryOfRegistration']==="133" ||  FormData['RF_CountryOfRegistration']==="137" || FormData['RF_CountryOfRegistration']==="138" || FormData['RF_CountryOfRegistration']==="140" || FormData['RF_CountryOfRegistration']==="141"
                                || FormData['RF_CountryOfRegistration']==="144" || FormData['RF_CountryOfRegistration']==="147" || FormData['RF_CountryOfRegistration']==="156" || FormData['RF_CountryOfRegistration']==="157" || FormData['RF_CountryOfRegistration']==="169" || FormData['RF_CountryOfRegistration']==="171" || FormData['RF_CountryOfRegistration']==="178" || FormData['RF_CountryOfRegistration']==="179" || FormData['RF_CountryOfRegistration']==="180" || FormData['RF_CountryOfRegistration']==="181" || FormData['RF_CountryOfRegistration']==="182" || FormData['RF_CountryOfRegistration']==="183"
                                || FormData['RF_CountryOfRegistration']==="185" || FormData['RF_CountryOfRegistration']==="189" || FormData['RF_CountryOfRegistration']==="192" || FormData['RF_CountryOfRegistration']==="196" || FormData['RF_CountryOfRegistration']==="199" || FormData['RF_CountryOfRegistration']==="201" || FormData['RF_CountryOfRegistration']==="204" || FormData['RF_CountryOfRegistration']==="205"
                                || FormData['RF_CountryOfRegistration']==="207" || FormData['RF_CountryOfRegistration']==="210" || FormData['RF_CountryOfRegistration']==="218" || FormData['RF_CountryOfRegistration']==="225" || FormData['RF_CountryOfRegistration']==="231" || FormData['RF_CountryOfRegistration']==="234" || FormData['RF_CountryOfRegistration']==="235" || FormData['RF_CountryOfRegistration']==="237" || FormData['RF_CountryOfRegistration']==="238")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfRegistration']==="21" || FormData['RF_CountryOfRegistration']==="57" || FormData['RF_CountryOfRegistration']==="106" || FormData['RF_CountryOfRegistration']==="107" || FormData['RF_CountryOfRegistration']==="119" || FormData['RF_CountryOfRegistration']==="187" || FormData['RF_CountryOfRegistration']==="217")
                            {
                                return (<>
                                     
                                    <label className="col-form-label">12</label>
                                    
                                </>);
                            }
    
    
                            })()}

                        </div>

                        <br/>
                        <hr/>

                        <div className="col-2">       
                            <label className="col-form-label">Country of Operation</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_CountryOfOperation' id='RF_CountryOfOperation' value={FormData['RF_CountryOfOperation']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andora</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armania</option>
                                <option value="12">Aruba</option>
                                <option value="13">Auckland Islands</option>
                                <option value="14">Australia</option>
                                <option value="15">Austria</option>
                                <option value="16">Azerbaijan</option>
                                <option value="17">Bahamas</option>
                                <option value="18">Bahrain</option>
                                <option value="19">Bangladesh</option>
                                <option value="20">Barbados</option>
                                <option value="21">Belarus</option>
                                <option value="22">Belgium</option>
                                <option value="23">Belize</option>
                                <option value="24">Benin</option>
                                <option value="25">Bermuda</option>
                                <option value="26">Bhutan</option>
                                <option value="27">Bolivia</option>
                                <option value="28">Bonaire</option>
                                <option value="29">Bosnia</option>
                                <option value="30">Botswana</option>
                                <option value="31">Bouvet Islands</option>
                                <option value="32">Brazil</option>
                                <option value="33">British Indian Ocean Teritory</option>
                                <option value="34">Brunei Darussalam</option>
                                <option value="35">Bulgaria</option>
                                <option value="36">Burkina Faso</option>
                                <option value="37">Burundi</option>
                                <option value="38">Cabo Verde</option>
                                <option value="39">Cambodia</option>
                                <option value="40">Cameroon</option>
                                <option value="41">Canada</option>
                                <option value="42">Cayman Islands</option>
                                <option value="43">Central African Republic</option>
                                <option value="44">Chad</option>
                                <option value="45">Chile</option>
                                <option value="46">China</option>
                                <option value="47">Christmas Island</option>
                                <option value="48">Cocos</option>
                                <option value="49">Colombia</option>
                                <option value="50">Comoros</option>
                                <option value="51">Congo Democratic</option>
                                <option value="52">Congo Republic</option>
                                <option value="53">Cook Islands</option>
                                <option value="54">Costa Rica</option>
                                <option value="55">Ivory Cost</option>
                                <option value="56">Croatia</option>
                                <option value="57">Cuba</option>
                                <option value="58">Curacao</option>
                                <option value="59">Cyprus</option>
                                <option value="60">Czech Republic</option>
                                <option value="61">Denmark</option>
                                <option value="62">Djibouti</option>
                                <option value="63">Dominica</option>
                                <option value="64">Dominican Republic</option>
                                <option value="65">Ecuador</option>
                                <option value="66">Egypt</option>
                                <option value="67">EI Salvador</option>
                                <option value="68">Equatorial Guinea</option>
                                <option value="69">Eritrea</option>
                                <option value="70">Estonia</option>
                                <option value="71">eSwaitini</option>
                                <option value="72">Ethiopia</option>
                                <option value="73">Falkland Islands</option>
                                <option value="74">Faroe Islands</option>
                                <option value="75">Fiji</option>
                                <option value="76">Finland</option>
                                <option value="77">France</option>
                                <option value="78">French Guiana</option>
                                <option value="79">French Polynesia</option>
                                <option value="80">French Southern Territories</option>
                                <option value="81">Gabon</option>
                                <option value="82">Gambia</option>
                                <option value="83">Georgia</option>
                                <option value="84">Germany</option>
                                <option value="85">Ghana</option>
                                <option value="86">Gibralter</option>
                                <option value="87">Greece</option>
                                <option value="88">Greenland</option>
                                <option value="89">Grenada</option>
                                <option value="90">Guadeloupe</option>
                                <option value="91">Guam</option>
                                <option value="92">Guatemala</option>
                                <option value="93">Guernsey</option>
                                <option value="94">Guinea</option>
                                <option value="95">Guinea Bissau</option>
                                <option value="96">Guyana</option>
                                <option value="97">Haiti</option>
                                <option value="98">Herd Island</option>
                                <option value="99">Holy See</option>
                                <option value="100">Honduras</option>
                                <option value="101">Hongkong</option>
                                <option value="102">Hungary</option>
                                <option value="103">Iceland</option>
                                <option value="104">India</option>
                                <option value="105">Indonessia</option>
                                <option value="106">Iran</option>
                                <option value="107">Iraq</option>
                                <option value="108">Ireland</option>
                                <option value="109">Isle of man</option>
                                <option value="110">Israel</option>
                                <option value="111">Italy</option>
                                <option value="112">Jamaica</option>
                                <option value="113">Japan</option>
                                <option value="114">Jersey</option>
                                <option value="115">Jordan</option>
                                <option value="116">Kazakhstan</option>
                                <option value="117">Kenya</option>
                                <option value="118">Kiribati</option>
                                <option value="119">Korea North</option>
                                <option value="120">Korea South</option>
                                <option value="121">Kosovo</option>
                                <option value="122">Kuwait</option>
                                <option value="123">Kyrgyzstan</option>
                                <option value="124">Laos</option>
                                <option value="125">Latvia</option>
                                <option value="126">Lebanon</option>
                                <option value="127">Lesotho</option>
                                <option value="128">Liberia</option>
                                <option value="129">Libya</option>
                                <option value="130">Liechtenstein</option>
                                <option value="131">Lithuania</option>
                                <option value="132">Luxembourg</option>
                                <option value="133">Macao</option>
                                <option value="134">Macedonia</option>
                                <option value="135">Madagascar</option>
                                <option value="136">Malawi</option>
                                <option value="137">Malaysia</option>
                                <option value="138">Maldives</option>
                                <option value="139">Mali</option>
                                <option value="140">Malta</option>
                                <option value="141">Marshall Islands</option>
                                <option value="142">Martinique</option>
                                <option value="143">Mauritania</option>
                                <option value="144">Mauritius</option>
                                <option value="145">Mayotte</option>
                                <option value="146">Mexico</option>
                                <option value="147">Micronessia</option>
                                <option value="148">Moldova</option>
                                <option value="149">Monaco</option>
                                <option value="150">Mongolia</option>
                                <option value="151">Montenegro</option>
                                <option value="152">Montserrat</option>
                                <option value="153">Morocco</option>
                                <option value="154">Mozambique</option>
                                <option value="155">Mynamar</option>
                                <option value="156">Namabia</option>
                                <option value="157">Nauru</option>
                                <option value="158">Nepal</option>
                                <option value="159">Netherlands</option>
                                <option value="160">New Celedonia</option>
                                <option value="161">Newzealand</option>
                                <option value="162">Niger</option>
                                <option value="163">Nigeria</option>
                                <option value="164">Norfolk Island</option>
                                <option value="165">Nothern Mariana Islands</option>
                                <option value="166">Norway</option>
                                <option value="167">Nuie</option>
                                <option value="168">Oman</option>
                                <option value="169">Pakistan</option>
                                <option value="170">Palau</option>
                                <option value="171">Panama</option>
                                <option value="172">Papua New Guinea</option>
                                <option value="173">Paraguay</option>
                                <option value="174">Peru</option>
                                <option value="175">Philippines</option>
                                <option value="176">Pitcaim</option>
                                <option value="177">Poland</option>
                                <option value="178">Portugal</option>
                                <option value="179">Puerto Rico</option>
                                <option value="180">Qatar</option>
                                <option value="181">Reunion</option>
                                <option value="182">Roman</option>
                                 <option value="183">Russia</option>
                                 <option value="184">Rwanda</option>
                                 <option value="185">Saint Barthelemy</option>
                                 <option value="186">Saint Helena</option>
                                 <option value="187">Saint Kitts</option>
                                 <option value="188">Saint Lucia</option>
                                 <option value="189">Saint Martin</option>
                                 <option value="190">Saint Pierre</option>
                                 <option value="191">Saint Vincent</option>
                                 <option value="192">Samoa</option>
                                 <option value="193">Saint Marino</option>
                                 <option value="194">Sao Tome</option>
                                 <option value="195">Saudia Arabia</option>
                                 <option value="196">Senegal</option>
                                 <option value="197">Serbia</option>
                                 <option value="198">Seychelles</option>
                                 <option value="199">Sierra Leone</option>
                                 <option value="200">Singapore</option>
                                 <option value="201">Sint Martin</option>
                                 <option value="202">Slovekia</option>
                                 <option value="203">Slovenia</option>
                                 <option value="204">Solomon Islands</option>
                                 <option value="205">Somalia</option>
                                 <option value="206">South Africa</option>
                                 <option value="207">South Georgia</option>
                                 <option value="208">South Sudan</option>
                                 <option value="209">SPain</option>
                                 <option value="210">Srilanka</option>
                                 <option value="211">Sudan</option>
                                 <option value="212">Suriname</option>
                                 <option value="213">Svalbard</option>
                                 <option value="214">Sweden</option>
                                 <option value="215">Switxerland</option>
                                 <option value="216">Syria</option>
                                 <option value="217">Taiwan</option>
                                 <option value="218">Tajikistan</option>
                                 <option value="219">Tanzania</option>
                                 <option value="220">Thailand</option>
                                 <option value="221">Timor Leste</option>
                                 <option value="222">Togo</option>
                                 <option value="223">Tokelau</option>
                                 <option value="224">Tonga</option>
                                 <option value="225">Trinidad</option>
                                 <option value="226">Tunisia</option>
                                 <option value="227">Turkey</option>
                                 <option value="228">Turkmenistan</option>
                                 <option value="229">Turks</option>
                                 <option value="230">Tuvalu</option>
                                 <option value="231">Uganda</option>
                                 <option value="232">Ukraine</option>
                                 <option value="233">United Arab Emirates</option>
                                 <option value="224">United Kingdom</option>
                                 <option value="225">United States Minor</option>
                                 <option value="226">United States of America</option>
                                 <option value="227">Uruguay</option>
                                 <option value="228">Uzbekistan</option>
                                 <option value="229">Vanuatu</option>
                                 <option value="230">Venezuela</option>
                                 <option value="231">Vietnam</option>
                                 <option value="232">Virgin Islands(British)</option>
                                 <option value="233">Virgin Islands(US)</option>
                                 <option value="234">Wallis and Fatuna</option>
                                 <option value="235">West Bank</option>
                                 <option value="236">Western Sahara</option>
                                 <option value="237">Yemen</option>
                                 <option value="238">Zambia</option>
                                 <option value="239">Zimbabwe</option>

                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfResidence']===1 || FormData['RF_CountryOfResidence']===2 || FormData['RF_CountryOfResidence']===3 || FormData['RF_CountryOfResidence']===4 || FormData['RF_CountryOfResidence']===6 || FormData['RF_CountryOfResidence']===8 || FormData['RF_CountryOfResidence']===10 || FormData['RF_CountryOfResidence']===13 || FormData['RF_CountryOfResidence']===16 || FormData['RF_CountryOfResidence']===17 || FormData['RF_CountryOfResidence']===19 || FormData['RF_CountryOfResidence']===20 || FormData['RF_CountryOfResidence']===24 || FormData['RF_CountryOfResidence']===27
                                || FormData['RF_CountryOfResidence']===28 || FormData['RF_CountryOfResidence']===29 || FormData['RF_CountryOfResidence']===31 || FormData['RF_CountryOfResidence']===32 || FormData['RF_CountryOfResidence']===33 || FormData['RF_CountryOfResidence']===36 || FormData['RF_CountryOfResidence']===37 || FormData['RF_CountryOfResidence']===39 || FormData['RF_CountryOfResidence']===41 || FormData['RF_CountryOfResidence']===42 || FormData['RF_CountryOfResidence']===43 || FormData['RF_CountryOfResidence']===46 || FormData['RF_CountryOfResidence']===47 || FormData['RF_CountryOfResidence']===48 || FormData['RF_CountryOfResidence']===49 || FormData['RF_CountryOfResidence']===50 || FormData['RF_CountryOfResidence']===51 || FormData['RF_CountryOfResidence']===52 || FormData['RF_CountryOfResidence']===53
                                || FormData['RF_CountryOfResidence']===55 || FormData['RF_CountryOfResidence']===58 || FormData['RF_CountryOfResidence']===62 || FormData['RF_CountryOfResidence']===64 || FormData['RF_CountryOfResidence']===65 || FormData['RF_CountryOfResidence']===66 || FormData['RF_CountryOfResidence']===67 || FormData['RF_CountryOfResidence']===68 || FormData['RF_CountryOfResidence']===69 || FormData['RF_CountryOfResidence']===71 || FormData['RF_CountryOfResidence']===72 || FormData['RF_CountryOfResidence']===73 || FormData['RF_CountryOfResidence']===74
                                || FormData['RF_CountryOfResidence']===82 || FormData['RF_CountryOfResidence']===85 || FormData['RF_CountryOfResidence']===86 || FormData['RF_CountryOfResidence']===90 || FormData['RF_CountryOfResidence']===91 || FormData['RF_CountryOfResidence']===92 || FormData['RF_CountryOfResidence']===93
                                || FormData['RF_CountryOfResidence']===94 || FormData['RF_CountryOfResidence']===95 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===103 
                                
                                || FormData['RF_CountryOfResidence']===109  || FormData['RF_CountryOfResidence']===112  || FormData['RF_CountryOfResidence']===115  || FormData['RF_CountryOfResidence']===116  || FormData['RF_CountryOfResidence']===117  || FormData['RF_CountryOfResidence']===121  || FormData['RF_CountryOfResidence']===123  || FormData['RF_CountryOfResidence']===124
                                || FormData['RF_CountryOfResidence']===126  || FormData['RF_CountryOfResidence']===127  || FormData['RF_CountryOfResidence']===128  || FormData['RF_CountryOfResidence']===129  || FormData['RF_CountryOfResidence']===134  || FormData['RF_CountryOfResidence']===135  || FormData['RF_CountryOfResidence']===136
                                || FormData['RF_CountryOfResidence']===139  || FormData['RF_CountryOfResidence']===143  || FormData['RF_CountryOfResidence']===145  || FormData['RF_CountryOfResidence']===146  || FormData['RF_CountryOfResidence']===148  || FormData['RF_CountryOfResidence']===150 || FormData['RF_CountryOfResidence']===151
                                || FormData['RF_CountryOfResidence']===152 || FormData['RF_CountryOfResidence']===153 || FormData['RF_CountryOfResidence']===154 || FormData['RF_CountryOfResidence']===155 || FormData['RF_CountryOfResidence']===158 || FormData['RF_CountryOfResidence']===160 || FormData['RF_CountryOfResidence']===162 
                                || FormData['RF_CountryOfResidence']===163 || FormData['RF_CountryOfResidence']===164 || FormData['RF_CountryOfResidence']===165 || FormData['RF_CountryOfResidence']===166 || FormData['RF_CountryOfResidence']===168 || FormData['RF_CountryOfResidence']===170 || FormData['RF_CountryOfResidence']===172 || FormData['RF_CountryOfResidence']===173 || FormData['RF_CountryOfResidence']===174 || FormData['RF_CountryOfResidence']===175 || FormData['RF_CountryOfResidence']===176 || FormData['RF_CountryOfResidence']===177
                                || FormData['RF_CountryOfResidence']===186 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===188 || FormData['RF_CountryOfResidence']===190 || FormData['RF_CountryOfResidence']===191 || FormData['RF_CountryOfResidence']===193 || FormData['RF_CountryOfResidence']===195
                                || FormData['RF_CountryOfResidence']===197 || FormData['RF_CountryOfResidence']===198 || FormData['RF_CountryOfResidence']===200 || FormData['RF_CountryOfResidence']===202 || FormData['RF_CountryOfResidence']===203 || FormData['RF_CountryOfResidence']===206 || FormData['RF_CountryOfResidence']===208 || FormData['RF_CountryOfResidence']===209
                                || FormData['RF_CountryOfResidence']===211 || FormData['RF_CountryOfResidence']===212 || FormData['RF_CountryOfResidence']===213 || FormData['RF_CountryOfResidence']===214 || FormData['RF_CountryOfResidence']===219 || FormData['RF_CountryOfResidence']===220 || FormData['RF_CountryOfResidence']===221 || FormData['RF_CountryOfResidence']===222 || FormData['RF_CountryOfResidence']===223 || FormData['RF_CountryOfResidence']===224
                                || FormData['RF_CountryOfResidence']===226 || FormData['RF_CountryOfResidence']===230 || FormData['RF_CountryOfResidence']===232 || FormData['RF_CountryOfResidence']===233 || FormData['RF_CountryOfResidence']===236 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238 || FormData['RF_CountryOfResidence']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===5 || FormData['RF_CountryOfResidence']===7 || FormData['RF_CountryOfResidence']===9 || FormData['RF_CountryOfResidence']===12 || FormData['RF_CountryOfResidence']===25 || FormData['RF_CountryOfResidence']===34 || FormData['RF_CountryOfResidence']===35 || FormData['RF_CountryOfResidence']===61 || FormData['RF_CountryOfResidence']===76 || FormData['RF_CountryOfResidence']===84 || FormData['RF_CountryOfResidence']===88
                                
                                || FormData['RF_CountryOfResidence']===114 || FormData['RF_CountryOfResidence']===130 || FormData['RF_CountryOfResidence']===132 || FormData['RF_CountryOfResidence']===142 || FormData['RF_CountryOfResidence']===149 || FormData['RF_CountryOfResidence']===159 || FormData['RF_CountryOfResidence']===161 
                                || FormData['RF_CountryOfResidence']===167 || FormData['RF_CountryOfResidence']===194 || FormData['RF_CountryOfResidence']===215 || FormData['RF_CountryOfResidence']===216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===11 || FormData['RF_CountryOfResidence']===14 || FormData['RF_CountryOfResidence']===15 || FormData['RF_CountryOfResidence']===18 || FormData['RF_CountryOfResidence']===22 || FormData['RF_CountryOfResidence']===23 || FormData['RF_CountryOfResidence']===26 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===38 || FormData['RF_CountryOfResidence']===40 || FormData['RF_CountryOfResidence']===44 || FormData['RF_CountryOfResidence']===45
                                || FormData['RF_CountryOfResidence']===54 || FormData['RF_CountryOfResidence']===56 || FormData['RF_CountryOfResidence']===59 || FormData['RF_CountryOfResidence']===60 || FormData['RF_CountryOfResidence']===63 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===75 || FormData['RF_CountryOfResidence']===77 || FormData['RF_CountryOfResidence']===78 || FormData['RF_CountryOfResidence']===79 || FormData['RF_CountryOfResidence']===80 || FormData['RF_CountryOfResidence']===81
                                || FormData['RF_CountryOfResidence']===83 || FormData['RF_CountryOfResidence']===87 || FormData['RF_CountryOfResidence']===89 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===101 || FormData['RF_CountryOfResidence']===104 || FormData['RF_CountryOfResidence']===105
                                
                                || FormData['RF_CountryOfResidence']===108 || FormData['RF_CountryOfResidence']===110 || FormData['RF_CountryOfResidence']===111 || FormData['RF_CountryOfResidence']===113 || FormData['RF_CountryOfResidence']===118 || FormData['RF_CountryOfResidence']===120 || FormData['RF_CountryOfResidence']===125
                                || FormData['RF_CountryOfResidence']===131 || FormData['RF_CountryOfResidence']===133 ||  FormData['RF_CountryOfResidence']===137 || FormData['RF_CountryOfResidence']===138 || FormData['RF_CountryOfResidence']===140 || FormData['RF_CountryOfResidence']===141
                                || FormData['RF_CountryOfResidence']===144 || FormData['RF_CountryOfResidence']===147 || FormData['RF_CountryOfResidence']===156 || FormData['RF_CountryOfResidence']===157 || FormData['RF_CountryOfResidence']===169 || FormData['RF_CountryOfResidence']===171 || FormData['RF_CountryOfResidence']===178 || FormData['RF_CountryOfResidence']===179 || FormData['RF_CountryOfResidence']===180 || FormData['RF_CountryOfResidence']===181 || FormData['RF_CountryOfResidence']===182 || FormData['RF_CountryOfResidence']===183
                                || FormData['RF_CountryOfResidence']===185 || FormData['RF_CountryOfResidence']===189 || FormData['RF_CountryOfResidence']===192 || FormData['RF_CountryOfResidence']===196 || FormData['RF_CountryOfResidence']===199 || FormData['RF_CountryOfResidence']===201 || FormData['RF_CountryOfResidence']===204 || FormData['RF_CountryOfResidence']===205
                                || FormData['RF_CountryOfResidence']===207 || FormData['RF_CountryOfResidence']===210 || FormData['RF_CountryOfResidence']===218 || FormData['RF_CountryOfResidence']===225 || FormData['RF_CountryOfResidence']===231 || FormData['RF_CountryOfResidence']===234 || FormData['RF_CountryOfResidence']===235 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===21 || FormData['RF_CountryOfResidence']===57 || FormData['RF_CountryOfResidence']===106 || FormData['RF_CountryOfResidence']===107 || FormData['RF_CountryOfResidence']===119 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===217 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                            
                                     
                                    <label className="col-form-label">3</label>
                                    
                             
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_CountryOfResidence']===1 || FormData['RF_CountryOfResidence']===2 || FormData['RF_CountryOfResidence']===3 || FormData['RF_CountryOfResidence']===4 || FormData['RF_CountryOfResidence']===6 || FormData['RF_CountryOfResidence']===8 || FormData['RF_CountryOfResidence']===10 || FormData['RF_CountryOfResidence']===13 || FormData['RF_CountryOfResidence']===16 || FormData['RF_CountryOfResidence']===17 || FormData['RF_CountryOfResidence']===19 || FormData['RF_CountryOfResidence']===20 || FormData['RF_CountryOfResidence']===24
                                || FormData['RF_CountryOfResidence']===27 || FormData['RF_CountryOfResidence']===28 || FormData['RF_CountryOfResidence']===29 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===31 || FormData['RF_CountryOfResidence']===32 || FormData['RF_CountryOfResidence']===33 || FormData['RF_CountryOfResidence']===36 || FormData['RF_CountryOfResidence']===37 || FormData['RF_CountryOfResidence']===39 || FormData['RF_CountryOfResidence']===41 || FormData['RF_CountryOfResidence']===42 || FormData['RF_CountryOfResidence']===43
                                || FormData['RF_CountryOfResidence']===46 || FormData['RF_CountryOfResidence']===47 || FormData['RF_CountryOfResidence']===48 || FormData['RF_CountryOfResidence']===49 || FormData['RF_CountryOfResidence']===50 || FormData['RF_CountryOfResidence']===51 || FormData['RF_CountryOfResidence']===52 || FormData['RF_CountryOfResidence']===53 || FormData['RF_CountryOfResidence']===55 || FormData['RF_CountryOfResidence']===58 || FormData['RF_CountryOfResidence']===62 || FormData['RF_CountryOfResidence']===64 || FormData['RF_CountryOfResidence']===65 || FormData['RF_CountryOfResidence']===66 
                                || FormData['RF_CountryOfResidence']===67 || FormData['RF_CountryOfResidence']===68 || FormData['RF_CountryOfResidence']===69 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===71 || FormData['RF_CountryOfResidence']===72 || FormData['RF_CountryOfResidence']===73 || FormData['RF_CountryOfResidence']===74 || FormData['RF_CountryOfResidence']===82 || FormData['RF_CountryOfResidence']===85 || FormData['RF_CountryOfResidence']===86 || FormData['RF_CountryOfResidence']===90 || FormData['RF_CountryOfResidence']===91 || FormData['RF_CountryOfResidence']===92 || FormData['RF_CountryOfResidence']===93
                                || FormData['RF_CountryOfResidence']===94 || FormData['RF_CountryOfResidence']===95 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===103
                                
                                || FormData['RF_CountryOfResidence']===109  || FormData['RF_CountryOfResidence']===112  || FormData['RF_CountryOfResidence']===115  || FormData['RF_CountryOfResidence']===116  || FormData['RF_CountryOfResidence']===117  || FormData['RF_CountryOfResidence']===121  || FormData['RF_CountryOfResidence']===123  || FormData['RF_CountryOfResidence']===124
                                || FormData['RF_CountryOfResidence']===126  || FormData['RF_CountryOfResidence']===127  || FormData['RF_CountryOfResidence']===128  || FormData['RF_CountryOfResidence']===129  || FormData['RF_CountryOfResidence']===134  || FormData['RF_CountryOfResidence']===135  || FormData['RF_CountryOfResidence']===136
                                || FormData['RF_CountryOfResidence']===139  || FormData['RF_CountryOfResidence']===143  || FormData['RF_CountryOfResidence']===145  || FormData['RF_CountryOfResidence']===146  || FormData['RF_CountryOfResidence']===148  || FormData['RF_CountryOfResidence']===150 || FormData['RF_CountryOfResidence']===151
                                || FormData['RF_CountryOfResidence']===152 || FormData['RF_CountryOfResidence']===153 || FormData['RF_CountryOfResidence']===154 || FormData['RF_CountryOfResidence']===155 || FormData['RF_CountryOfResidence']===158 || FormData['RF_CountryOfResidence']===160 || FormData['RF_CountryOfResidence']===162 
                                || FormData['RF_CountryOfResidence']===163 || FormData['RF_CountryOfResidence']===164 || FormData['RF_CountryOfResidence']===165 || FormData['RF_CountryOfResidence']===166 || FormData['RF_CountryOfResidence']===168 || FormData['RF_CountryOfResidence']===170 || FormData['RF_CountryOfResidence']===172 || FormData['RF_CountryOfResidence']===173 || FormData['RF_CountryOfResidence']===174 || FormData['RF_CountryOfResidence']===175 || FormData['RF_CountryOfResidence']===176 || FormData['RF_CountryOfResidence']===177
                                || FormData['RF_CountryOfResidence']===186 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===188 || FormData['RF_CountryOfResidence']===190 || FormData['RF_CountryOfResidence']===191 || FormData['RF_CountryOfResidence']===193 || FormData['RF_CountryOfResidence']===195
                                || FormData['RF_CountryOfResidence']===197 || FormData['RF_CountryOfResidence']===198 || FormData['RF_CountryOfResidence']===200 || FormData['RF_CountryOfResidence']===202 || FormData['RF_CountryOfResidence']===203 || FormData['RF_CountryOfResidence']===206 || FormData['RF_CountryOfResidence']===208 || FormData['RF_CountryOfResidence']===209
                                || FormData['RF_CountryOfResidence']===211 || FormData['RF_CountryOfResidence']===212 || FormData['RF_CountryOfResidence']===213 || FormData['RF_CountryOfResidence']===214 || FormData['RF_CountryOfResidence']===219 || FormData['RF_CountryOfResidence']===220 || FormData['RF_CountryOfResidence']===221 || FormData['RF_CountryOfResidence']===222 || FormData['RF_CountryOfResidence']===223 || FormData['RF_CountryOfResidence']===224
                                || FormData['RF_CountryOfResidence']===226 || FormData['RF_CountryOfResidence']===230 || FormData['RF_CountryOfResidence']===232 || FormData['RF_CountryOfResidence']===233 || FormData['RF_CountryOfResidence']===236 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238 || FormData['RF_CountryOfResidence']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===5 || FormData['RF_CountryOfResidence']===7 || FormData['RF_CountryOfResidence']===9 || FormData['RF_CountryOfResidence']===12 || FormData['RF_CountryOfResidence']===25 || FormData['RF_CountryOfResidence']===34 || FormData['RF_CountryOfResidence']===35 || FormData['RF_CountryOfResidence']===61 || FormData['RF_CountryOfResidence']===76 || FormData['RF_CountryOfResidence']===84|| FormData['RF_CountryOfResidence']===88
                                
                                || FormData['RF_CountryOfResidence']===114 || FormData['RF_CountryOfResidence']===130 || FormData['RF_CountryOfResidence']===132 || FormData['RF_CountryOfResidence']===142 || FormData['RF_CountryOfResidence']===149 || FormData['RF_CountryOfResidence']===159 || FormData['RF_CountryOfResidence']===161 
                                || FormData['RF_CountryOfResidence']===167 || FormData['RF_CountryOfResidence']===194 || FormData['RF_CountryOfResidence']===215 || FormData['RF_CountryOfResidence']===216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===11 || FormData['RF_CountryOfResidence']===14 || FormData['RF_CountryOfResidence']===15 || FormData['RF_CountryOfResidence']===18 || FormData['RF_CountryOfResidence']===22 || FormData['RF_CountryOfResidence']===23 || FormData['RF_CountryOfResidence']===26 || FormData['RF_CountryOfResidence']===30 || FormData['RF_CountryOfResidence']===38 || FormData['RF_CountryOfResidence']===40
                                || FormData['RF_CountryOfResidence']===44 || FormData['RF_CountryOfResidence']===45 || FormData['RF_CountryOfResidence']===54 || FormData['RF_CountryOfResidence']===56 || FormData['RF_CountryOfResidence']===59 || FormData['RF_CountryOfResidence']===60 || FormData['RF_CountryOfResidence']===63 || FormData['RF_CountryOfResidence']===70 || FormData['RF_CountryOfResidence']===75 || FormData['RF_CountryOfResidence']===77 
                                || FormData['RF_CountryOfResidence']===78 || FormData['RF_CountryOfResidence']===79 || FormData['RF_CountryOfResidence']===80 || FormData['RF_CountryOfResidence']===81 || FormData['RF_CountryOfResidence']===83 || FormData['RF_CountryOfResidence']===87 || FormData['RF_CountryOfResidence']===89 || FormData['RF_CountryOfResidence']===96 || FormData['RF_CountryOfResidence']===97 || FormData['RF_CountryOfResidence']===98 
                                || FormData['RF_CountryOfResidence']===99 || FormData['RF_CountryOfResidence']===100 || FormData['RF_CountryOfResidence']===101 || FormData['RF_CountryOfResidence']===102 || FormData['RF_CountryOfResidence']===104 || FormData['RF_CountryOfResidence']===105
                                
                                || FormData['RF_CountryOfResidence']===108 || FormData['RF_CountryOfResidence']===110 || FormData['RF_CountryOfResidence']===111 || FormData['RF_CountryOfResidence']===113 || FormData['RF_CountryOfResidence']===118 || FormData['RF_CountryOfResidence']===120 || FormData['RF_CountryOfResidence']===125
                                || FormData['RF_CountryOfResidence']===131 || FormData['RF_CountryOfResidence']===133 ||  FormData['RF_CountryOfResidence']===137 || FormData['RF_CountryOfResidence']===138 || FormData['RF_CountryOfResidence']===140 || FormData['RF_CountryOfResidence']===141
                                || FormData['RF_CountryOfResidence']===144 || FormData['RF_CountryOfResidence']===147 || FormData['RF_CountryOfResidence']===156 || FormData['RF_CountryOfResidence']===157 || FormData['RF_CountryOfResidence']===169 || FormData['RF_CountryOfResidence']===171 || FormData['RF_CountryOfResidence']===178 || FormData['RF_CountryOfResidence']===179 || FormData['RF_CountryOfResidence']===180 || FormData['RF_CountryOfResidence']===181 || FormData['RF_CountryOfResidence']===182 || FormData['RF_CountryOfResidence']===183
                                || FormData['RF_CountryOfResidence']===185 || FormData['RF_CountryOfResidence']===189 || FormData['RF_CountryOfResidence']===192 || FormData['RF_CountryOfResidence']===196 || FormData['RF_CountryOfResidence']===199 || FormData['RF_CountryOfResidence']===201 || FormData['RF_CountryOfResidence']===204 || FormData['RF_CountryOfResidence']===205
                                || FormData['RF_CountryOfResidence']===207 || FormData['RF_CountryOfResidence']===210 || FormData['RF_CountryOfResidence']===218 || FormData['RF_CountryOfResidence']===225 || FormData['RF_CountryOfResidence']===231 || FormData['RF_CountryOfResidence']===234 || FormData['RF_CountryOfResidence']===235 || FormData['RF_CountryOfResidence']===237 || FormData['RF_CountryOfResidence']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_CountryOfResidence']===21 || FormData['RF_CountryOfResidence']===57 || FormData['RF_CountryOfResidence']===106 || FormData['RF_CountryOfResidence']===107 || FormData['RF_CountryOfResidence']===119 || FormData['RF_CountryOfResidence']===187 || FormData['RF_CountryOfResidence']===217)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">12</label>
                                    
                                </>);
                            }
    
    
                            })()}
                        </div>

                        <br/>
                        <hr/>

                        <div className="col-2">       
                            <label className="col-form-label">Type of Legal Entity</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Type_Legal_Entity' id='RF_Type_Legal_Entity' value={FormData['RF_RelationshipToClient']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Body corporate</option>
                                <option value="2">Charitable organization</option>
                                <option value="3">Church/religious organization</option>
                                <option value="4">Closed corporation</option>
                                <option value="5">Club</option>
                                <option value="6">Deceased Estate</option>
                                <option value="7">Foreign government</option>
                                <option value="8">Foreign listed company</option>
                                <option value="9">Foreign state owned entity</option>
                                <option value="10">Foreign trust</option>
                                <option value="11">Foreign Unlisted company</option>
                                <option value="12">Foundation</option>
                                <option value="13">Fund</option>
                                <option value="14">Insolvent Estate</option>
                                <option value="15">Listed company</option>
                                <option value="16">Non government organization</option>
                                <option value="17">Non profit organization</option>
                                <option value="18">Other corporate arrangement</option>
                                <option value="19">Retirement fund</option>
                                <option value="20">School/university</option>
                                <option value="21">State owned Enterprise</option>
                                <option value="22">Stokvel</option>
                                <option value="23">Trade Union</option>
                                <option value="24">Trust</option>
                                <option value="25">Unlisted company</option>
                                
                            </select>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                        {(() => { 
                            
                        if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15 || FormData['RF_RelationshipToClient']===16
                            || FormData['RF_RelationshipToClient']===20 || FormData['RF_RelationshipToClient']===21 || FormData['RF_RelationshipToClient']===25)
                        {
                            return (<>
                                        
                                <label className="col-form-label">1</label>
                                        
                            </>);
                        }

                        else if(FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===11 || FormData['RF_RelationshipToClient']===12
                            || FormData['RF_RelationshipToClient']===17 || FormData['RF_RelationshipToClient']===18 || FormData['RF_RelationshipToClient']===22 || FormData['RF_RelationshipToClient']===23)
                        {
                            return (<>
                                        
                                <label className="col-form-label">3</label>
                                        
                            </>);
                        }

                        else if(FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===19 || FormData['RF_RelationshipToClient']===24)
                        {
                            return (<>
                                        
                                <label className="col-form-label">2</label>
                                        
                            </>);
                        }


                        })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                        {(() => { 
                            
                            if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15 || FormData['RF_RelationshipToClient']===16
                                || FormData['RF_RelationshipToClient']===20 || FormData['RF_RelationshipToClient']===21 || FormData['RF_RelationshipToClient']===25)
                            {
                                return (<>
                                            
                                    <label className="col-form-label">1</label>
                                            
                                </>);
                            }
    
                            else if(FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===11 || FormData['RF_RelationshipToClient']===12
                                || FormData['RF_RelationshipToClient']===17 || FormData['RF_RelationshipToClient']===18 || FormData['RF_RelationshipToClient']===22 || FormData['RF_RelationshipToClient']===23)
                            {
                                return (<>
                                            
                                    <label className="col-form-label">3</label>
                                            
                                </>);
                            }
    
                            else if(FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===19 || FormData['RF_RelationshipToClient']===24)
                            {
                                return (<>
                                            
                                    <label className="col-form-label">2</label>
                                            
                                </>);
                            }

                            })()}
                        </div>

                        <br/>
                        <hr/>
                        
                        <div className="col-2">       
                            <label className="col-form-label">Industry</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Industry' id='RF_Industry' value={FormData['RF_Industry']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Administrative and support services</option>
                                <option value="2">Adult Entertainment</option>
                                <option value="3">Agriculture,forestry and fishing</option>
                                <option value="4">Arts,Entertainment and Recreation</option>
                                <option value="5">Broadcasting and Entertainment</option>
                                <option value="6">Chemical engineering/manufacturing</option>
                                <option value="7">Community and social activities</option>
                                <option value="8">Construction and civil engineering</option>
                                <option value="9">Consumer goods:wholesale and retail</option>
                                <option value="10">Education</option>
                                <option value="11">Electricity,solar,water,gas</option>
                                <option value="12">Entrepreneurship</option>
                                <option value="13">Estate living and family trusts</option>
                                <option value="14">Extractive services,mining and quarrying</option>
                                <option value="15">Financial and insurance</option>
                                <option value="16">Gambling</option>
                                <option value="17">Government services,armed and state owned enterprise</option>
                                <option value="18">Health care and medical</option>
                                <option value="19">Information technology,communication and telecom</option>
                                <option value="20">Legal practitioner</option>
                                <option value="21">Manufacturing</option>
                                <option value="22">Motor wholesale,retail trade and repair</option>
                                <option value="23">Non profit organization</option>
                                <option value="24">Non government organization(NGO)</option>
                                <option value="25">other</option>
                                <option value="26">PFMA schedule 1</option>
                                <option value="27">PFMA schedule 2</option>
                                <option value="28">PFMA schedule 3A</option>
                                <option value="29">Professional sport</option>
                                <option value="30">Real estate and property services</option>
                                <option value="31">Shell Banking</option>
                                <option value="32">Transport storage,courier and freight</option>
                                <option value="33">Travel,tourism and accomodation</option>
                                <option value="34">Virtual currencies</option>
                            </select>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Industry']===1 || FormData['RF_Industry']===3 || FormData['RF_Industry']===15 || FormData['RF_Industry']===19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===2 || FormData['RF_Industry']===12 || FormData['RF_Industry']===14 || FormData['RF_Industry']===16 || FormData['RF_Industry']===17 || FormData['RF_Industry']===20 || FormData['RF_Industry']===23 || FormData['RF_Industry']===24
                                || FormData['RF_Industry']===26 || FormData['RF_Industry']===27 || FormData['RF_Industry']===28 || FormData['RF_Industry']===30 || FormData['RF_Industry']===34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===4 || FormData['RF_Industry']===5 || FormData['RF_Industry']===6 || FormData['RF_Industry']===7 || FormData['RF_Industry']===8 || FormData['RF_Industry']===9 || FormData['RF_Industry']===10 || FormData['RF_Industry']===11 || FormData['RF_Industry']===13
                                || FormData['RF_Industry']===18 || FormData['RF_Industry']===21 || FormData['RF_Industry']===22 || FormData['RF_Industry']===29 || FormData['RF_Industry']===32 || FormData['RF_Industry']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===31)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }

                        })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Industry']===1 || FormData['RF_Industry']===3 || FormData['RF_Industry']===15 || FormData['RF_Industry']===19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            
                            else if(FormData['RF_Industry']===2 || FormData['RF_Industry']===12 || FormData['RF_Industry']===14 || FormData['RF_Industry']===16 || FormData['RF_Industry']===17 || FormData['RF_Industry']===20 || FormData['RF_Industry']===23 || FormData['RF_Industry']===24
                                || FormData['RF_Industry']===26 || FormData['RF_Industry']===27 || FormData['RF_Industry']===28 || FormData['RF_Industry']===30 || FormData['RF_Industry']===34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===4 || FormData['RF_Industry']===5 || FormData['RF_Industry']===6 || FormData['RF_Industry']===7 || FormData['RF_Industry']===8 || FormData['RF_Industry']===9 || FormData['RF_Industry']===10 || FormData['RF_Industry']===11 || FormData['RF_Industry']===13
                                || FormData['RF_Industry']===18 || FormData['RF_Industry']===21 || FormData['RF_Industry']===22 || FormData['RF_Industry']===29 || FormData['RF_Industry']===32 || FormData['RF_Industry']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Industry']===31)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }

                            

                        })()}
                        </div>
                        
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Source of Funds</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_SourceOfFunds' id='RF_SourceOfFunds' value={FormData['RF_SourceOfFunds']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Allowance</option>
                                <option value="2">Bonus</option>
                                <option value="3">Bursary</option>
                                <option value="4">Company profits</option>
                                <option value="5">Company sale</option>
                                <option value="6">Cryptocurrency</option>
                                <option value="7">Debt capital</option>
                                <option value="8">Disability/social grant</option>
                                <option value="9">Dividends from investment</option>
                                <option value="10">Divorce settlement</option>
                                <option value="11">Equity capital</option>
                                <option value="12">Gambling winnings</option>
                                <option value="13">Gift</option>
                                <option value="14">Income from previous employment</option>
                                <option value="15">Inherritance</option>
                                <option value="16">Loan</option>
                                <option value="17">Lottery winnings</option>
                                <option value="18">Maintainance(Formal agreement)</option>
                                <option value="19">Maintainance(Informal agreement)</option>
                                <option value="20">Maturing Investments</option>
                                <option value="21">Other</option>
                                <option value="22">Pension</option>
                                <option value="23">Provident fund</option>
                                <option value="24">Rental Propert</option>
                                <option value="25">Retirement Funds</option>
                                <option value="26">Salary</option>
                                <option value="27">Salary asset/property</option>
                                <option value="28">Sale of shares</option>
                                <option value="29">Sanlam payout</option>
                                <option value="30">Savings</option>
                                <option value="31">Settlement</option>
                                <option value="32">Transfer to/from approved funds</option>
                                <option value="33">Trust Income</option>
                            </select>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_SourceOfFunds']===1 || FormData['RF_SourceOfFunds']===6 || FormData['RF_SourceOfFunds']===12 || FormData['RF_SourceOfFunds']===13 || FormData['RF_SourceOfFunds']===16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===2 || FormData['RF_SourceOfFunds']===3 || FormData['RF_SourceOfFunds']===8 || FormData['RF_SourceOfFunds']===9 || FormData['RF_SourceOfFunds']===14 || FormData['RF_SourceOfFunds']===17 || FormData['RF_SourceOfFunds']===18 || FormData['RF_SourceOfFunds']===20
                                || FormData['RF_SourceOfFunds']===22 || FormData['RF_SourceOfFunds']===23 || FormData['RF_SourceOfFunds']===25 || FormData['RF_SourceOfFunds']===26 || FormData['RF_SourceOfFunds']===29 || FormData['RF_SourceOfFunds']===31 || FormData['RF_SourceOfFunds']===32 || FormData['RF_SourceOfFunds']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===4 || FormData['RF_SourceOfFunds']===5 || FormData['RF_SourceOfFunds']===7 || FormData['RF_SourceOfFunds']===10 || FormData['RF_SourceOfFunds']===11 || FormData['RF_SourceOfFunds']===15 || FormData['RF_SourceOfFunds']===19 || FormData['RF_SourceOfFunds']===24
                                || FormData['RF_SourceOfFunds']===27 || FormData['RF_SourceOfFunds']===28 || FormData['RF_SourceOfFunds']===30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===21)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            
                        })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_SourceOfFunds']===1 || FormData['RF_SourceOfFunds']===6 || FormData['RF_SourceOfFunds']===12 || FormData['RF_SourceOfFunds']===13 || FormData['RF_SourceOfFunds']===16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===2 || FormData['RF_SourceOfFunds']===3 || FormData['RF_SourceOfFunds']===8 || FormData['RF_SourceOfFunds']===9 || FormData['RF_SourceOfFunds']===14 || FormData['RF_SourceOfFunds']===17 || FormData['RF_SourceOfFunds']===18 || FormData['RF_SourceOfFunds']===20
                               || FormData['RF_SourceOfFunds']===22 || FormData['RF_SourceOfFunds']===23 || FormData['RF_SourceOfFunds']===25 || FormData['RF_SourceOfFunds']===26 || FormData['RF_SourceOfFunds']===29 || FormData['RF_SourceOfFunds']===31 || FormData['RF_SourceOfFunds']===32 || FormData['RF_SourceOfFunds']===33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===4 || FormData['RF_SourceOfFunds']===5 || FormData['RF_SourceOfFunds']===7 || FormData['RF_SourceOfFunds']===10 || FormData['RF_SourceOfFunds']===11 || FormData['RF_SourceOfFunds']===15 || FormData['RF_SourceOfFunds']===19 || FormData['RF_SourceOfFunds']===24
                                || FormData['RF_SourceOfFunds']===27 || FormData['RF_SourceOfFunds']===28 || FormData['RF_SourceOfFunds']===30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_SourceOfFunds']===21)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }
                           

                        })()}
                        </div>
                        
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Relationship to client</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Client_Relationship' id='RF_Client_Relationship' value={FormData['RF_RelationshipToClient']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Annuitant</option>
                                <option value="2">Applicant</option>
                                <option value="3">Authorised Representative</option>
                                <option value="4">Cessionary</option>
                                <option value="5">Curator</option>
                                <option value="6">Executor</option>
                                <option value="7">Fund Annuitant</option>
                                <option value="8">Gurantor</option>
                                <option value="9">Legal Guardian</option>
                                <option value="10">Legal owner</option>
                                <option value="11">Multi data client</option>
                                <option value="12">Nominee of ownership</option>
                                <option value="13">Policy owner</option>
                                <option value="14">Power of Attorney</option>
                                <option value="15">Premium Payer</option>
                                <option value="16">Surety</option>
                                
                            </select>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===11
                                || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===12 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===16)
                            {
                                
                                return (<>
                                
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                                                   
                            })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_RelationshipToClient']===1 || FormData['RF_RelationshipToClient']===2 || FormData['RF_RelationshipToClient']===4 || FormData['RF_RelationshipToClient']===6 || FormData['RF_RelationshipToClient']===7 || FormData['RF_RelationshipToClient']===9 || FormData['RF_RelationshipToClient']===11 
                            || FormData['RF_RelationshipToClient']===13 || FormData['RF_RelationshipToClient']===15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_RelationshipToClient']===3 || FormData['RF_RelationshipToClient']===5 || FormData['RF_RelationshipToClient']===8 || FormData['RF_RelationshipToClient']===10 || FormData['RF_RelationshipToClient']===12 || FormData['RF_RelationshipToClient']===14 || FormData['RF_RelationshipToClient']===16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            
                            })()}
                        </div>

                        <hr/>



                        </>)

                        

                    }

                    
                })()}

            </div>
        </div>
  
        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label"><b>B. Product/Service Risk</b></label>
                </div>

                <div className="col-2">
                {(() => { 
                        
                        if(FormData['RF_Product_Name']===1 || FormData['RF_Product_Name']===2 || FormData['RF_Product_Name']===6 || FormData['RF_Product_Name']===9 || FormData['RF_Product_Name']===12 || FormData['RF_Product_Name']===13 || FormData['RF_Product_Name']===16
                            || FormData['RF_Product_Name']===19 || FormData['RF_Product_Name']===20 || FormData['RF_Product_Name']===24 || FormData['RF_Product_Name']===26 || FormData['RF_Product_Name']===27)
                        {
                            return (<>
                                
                                 <label className="col-form-label"><b>Low</b></label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===3 || FormData['RF_Product_Name']===4 || FormData['RF_Product_Name']===5 || FormData['RF_Product_Name']===8 || FormData['RF_Product_Name']===11 || FormData['RF_Product_Name']===18 || FormData['RF_Product_Name']===21)
                        {
                            return (<>
                                
                                 <label className="col-form-label"><b>Medium</b></label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===7 || FormData['RF_Product_Name']===10 || FormData['RF_Product_Name']===14 || FormData['RF_Product_Name']===15 || FormData['RF_Product_Name']===17 || FormData['RF_Product_Name']===22 || FormData['RF_Product_Name']===23
                            || FormData['RF_Product_Name']===25 || FormData['RF_Product_Name']===28 || FormData['RF_Product_Name']===29)
                        {
                            return (<>
                                
                                 <label className="col-form-label"><b>High</b></label>
                                
                            </>);
                        }
            
                 })()}
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                     {(() => { 
                        
                        if(FormData['RF_Product_Name']===1 || FormData['RF_Product_Name']===2 || FormData['RF_Product_Name']===6 || FormData['RF_Product_Name']===9 || FormData['RF_Product_Name']===12 || FormData['RF_Product_Name']===13 || FormData['RF_Product_Name']===16
                            || FormData['RF_Product_Name']===19 || FormData['RF_Product_Name']===20 || FormData['RF_Product_Name']===24 || FormData['RF_Product_Name']===26 || FormData['RF_Product_Name']===27)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===3 || FormData['RF_Product_Name']===4 || FormData['RF_Product_Name']===5 || FormData['RF_Product_Name']===8 || FormData['RF_Product_Name']===11 || FormData['RF_Product_Name']===18 || FormData['RF_Product_Name']===21)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===7 || FormData['RF_Product_Name']===10 || FormData['RF_Product_Name']===14 || FormData['RF_Product_Name']===15 || FormData['RF_Product_Name']===17 || FormData['RF_Product_Name']===22 || FormData['RF_Product_Name']===23
                            || FormData['RF_Product_Name']===25 || FormData['RF_Product_Name']===28 || FormData['RF_Product_Name']===29)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }
            
                 })()}
                </div>

            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label">Product/Service Name</label>
                </div>

                <div className="col-2">
                    <select disabled className="text-start form-select" name='RF_Product_Name' id='RF_Product_Name' value={FormData['RF_Product_Name']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Access to funds or benefits restricted to specific contractual events (specified termination, uncertain insured event)</option>
                        <option value="2">Access to primary benefits only at claim stage</option>
                        <option value="3">Access to primary benefits only at claim stage, but have access to cash during the lifetime of the product</option>
                        <option value="4">Access to the values may be limited by legislation</option>
                        <option value="5">Accumulation of cash values</option>
                        <option value="6">AAdministrative service provided</option>
                        <option value="7">Advisory or intermediary services only with commission based inflow</option>
                        <option value="8">Allows for restricted number of withdrawals</option>
                        <option value="9">Benefits governed by specific regulatory- and tax regimes</option>
                        <option value="10">Can be accessed without any restrictions by law or product provider</option>
                        <option value="11">Can be offered as security and be transferred to another person (ceded)</option>
                        <option value="12">Cannot be offered as security or ceded</option>
                        <option value="13">Contributions are limited by legislation or regulation</option>
                        <option value="14">Contributions from Third Parties are allowed</option>
                        <option value="15">Funds can be accumulated and easily accessed</option>
                        <option value="16">Funds linked to a specific source (Estate, Order of Court, Retirement Fund Benefits, Employer)</option>
                        <option value="17">Investments are made with discretionary money</option>
                        <option value="18">Lump sum payments, including ad-hoc lump sum payments allowed</option>
                        <option value="19">No or little accumulation of cash values during the lifetime of the product</option>
                        <option value="20">Not available to retail investors</option>
                        <option value="21">Online transactability and automated access</option>
                        <option value="22">Payments to foreign bank accounts are allowed</option>
                        <option value="23">Product allows for investment in or via a foreign jurisdiction(s)</option>
                        <option value="24">Product only provides a structured flow of transactions</option>
                        <option value="25">Significant fund flows are involved</option>
                        <option value="26">Third Party EFT services provided</option>
                        <option value="27">Third Party non-financial services provided</option>
                        <option value="28">Transparency is limited in respect of source of funds</option>
                        <option value="29">Unlimited contributions and withdrawals</option>
                    </select>  
                </div>

                

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-1">
                {(() => { 
                        
                        if(FormData['RF_Product_Name']===1 || FormData['RF_Product_Name']===2 || FormData['RF_Product_Name']===6 || FormData['RF_Product_Name']===9 || FormData['RF_Product_Name']===12 || FormData['RF_Product_Name']===13 || FormData['RF_Product_Name']===16
                            || FormData['RF_Product_Name']===19 || FormData['RF_Product_Name']===20 || FormData['RF_Product_Name']===24 || FormData['RF_Product_Name']===26 || FormData['RF_Product_Name']===27)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===3 || FormData['RF_Product_Name']===4 || FormData['RF_Product_Name']===5 || FormData['RF_Product_Name']===8 || FormData['RF_Product_Name']===11 || FormData['RF_Product_Name']===18 || FormData['RF_Product_Name']===21)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===7 || FormData['RF_Product_Name']===10 || FormData['RF_Product_Name']===14 || FormData['RF_Product_Name']===15 || FormData['RF_Product_Name']===17 || FormData['RF_Product_Name']===22 || FormData['RF_Product_Name']===23
                            || FormData['RF_Product_Name']===25 || FormData['RF_Product_Name']===28 || FormData['RF_Product_Name']===29)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }
            
                 })()}
                </div>

                <div className="col-1">
                    <label className="col-form-label">2</label>
                </div>

                <div className="col-2">
                {(() => { 
                        
                        if(FormData['RF_Product_Name']===1 || FormData['RF_Product_Name']===2 || FormData['RF_Product_Name']===6 || FormData['RF_Product_Name']===9 || FormData['RF_Product_Name']===12 || FormData['RF_Product_Name']===13 || FormData['RF_Product_Name']===16
                            || FormData['RF_Product_Name']===19 || FormData['RF_Product_Name']===20 || FormData['RF_Product_Name']===24 || FormData['RF_Product_Name']===26 || FormData['RF_Product_Name']===27)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===3 || FormData['RF_Product_Name']===4 || FormData['RF_Product_Name']===5 || FormData['RF_Product_Name']===8 || FormData['RF_Product_Name']===11 || FormData['RF_Product_Name']===18 || FormData['RF_Product_Name']===21)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        else if(FormData['RF_Product_Name']===7 || FormData['RF_Product_Name']===10 || FormData['RF_Product_Name']===14 || FormData['RF_Product_Name']===15 || FormData['RF_Product_Name']===17 || FormData['RF_Product_Name']===22 || FormData['RF_Product_Name']===23
                            || FormData['RF_Product_Name']===25 || FormData['RF_Product_Name']===28 || FormData['RF_Product_Name']===29)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }
            
                 })()}
                </div>

                 <hr/>
                <div className="col-2">
                    <label className="col-form-label">Product/Service Category</label>
                </div>

                <div className="col-2">
                    <input disabled  spellCheck="true" id="RF_Product_Category" name='EB_ClientPhoneNumber' className="form-control" placeholder=""  aria-describedby="" />
                </div>


            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label"><b>C. Transaction Risk</b></label>
                </div>

                <div className="col-2">
                {(() => { 
                        
                        if(FormData['RF_Transaction_Flow']===3)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Low</label>
                                
                            </>);
                        }
 
                          else{
                           return (<>
                             
                               <label className="col-form-label"></label>
                         
                               </>);
                           }
                        
                 })()}
 
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                {(() => { 
                            var val13,val14,val15,val16,val17,val18,val19,val20
                            if(FormData['RF_Transaction_Method']===1 || FormData['RF_Transaction_Method']===4 || FormData['RF_Transaction_Method']===5 || FormData['RF_Transaction_Method']===7 || FormData['RF_Transaction_Method']===8)
                            {
                                val13=4
                            }

                            else if(FormData['RF_Transaction_Method']===2 || FormData['RF_Transaction_Method']===11)
                            {
                                val13=6
                            }

                            else if(FormData['RF_Transaction_Method']===3 || FormData['RF_Transaction_Method']===6 || FormData['RF_Transaction_Method']===9 || FormData['RF_Transaction_Method']===10 || FormData['RF_Transaction_Method']===12)
                            {
                                val13=2
                            }

                            if(FormData['RF_Transaction_Reason']===1)
                            {
                               val14=2
                            } 

                            else if(FormData['RF_Transaction_Reason']!=0)
                            {
                                val14=1
                            } 

                            if(FormData['RF_High_Transaction_Reason']===1)
                            {
                                val15=6
                            } 

                            else if(FormData['RF_High_Transaction_Reason']===2)
                            {
                                val15=2
                            } 

                            if(FormData['RF_Transaction_Frequency']===1 || FormData['RF_Transaction_Frequency']===2 || FormData['RF_Transaction_Frequency']===3)
                            {
                                val16=3
                            } 

                            else if(FormData['RF_Transaction_Frequency']===4)
                            {
                                val16=1
                            } 

                            if(FormData['RF_Transaction_Geography']===1)
                            {
                                val17=2
                            } 

                            else if(FormData['RF_Transaction_Geography']===2 || FormData['RF_Transaction_Geography']===3)
                            {
                                val17=1
                            } 

                            if(FormData['RF_Delivery_Channel']===1)
                            {
                                val18=3
                            } 

                            else if(FormData['RF_Delivery_Channel']===2 || FormData['RF_Delivery_Channel']===5 || FormData['RF_Delivery_Channel']===6)
                            {
                                val18=2
                            } 

                            else if(FormData['RF_Delivery_Channel']===3 || FormData['RF_Delivery_Channel']===4)
                            {
                                val18=1
                            } 
                              
                            if(FormData['RF_Linked_Party_Acting']===1 || FormData['RF_Linked_Party_Acting']===2)
                            {
                                val19=1
                            } 

                            else if(FormData['RF_Linked_Party_Acting']===3)
                            {
                                val19=3
                            } 
                            
                            if(FormData['RF_Linked_Party_Paying']===1 )
                            {
                                val20=0
                            } 

                            else if(FormData['RF_Linked_Party_Paying']===2 || FormData['RF_Linked_Party_Paying']===3)
                            {
                                val20=3
                            } 

                            if(FormData['RF_Transaction_Flow']==='1' || FormData['RF_Transaction_Flow']==='2')
                            {
                                var val4n=val13+val14+val15+val16+val17+val18+val19+val20
                                return (<>
                                
                                        
                                    <label className="col-form-label">{val4n}</label>

                                    </>)
                            }
                                                   
                            })()}
                </div>

            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label">Transaction Flow</label>
                </div>

                <div className="col-2">
                    <select disabled className="text-start form-select" name='RF_Transaction_Flow' id='RF_Transaction_Flow'  value={FormData['RF_Transaction_Flow']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Inflow</option>
                        <option value="2">Outflow</option>
                        <option value="3">Not Applicable</option>
                    </select>  
                </div>


            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">
                
                {(() => { 
                                
                    if(FormData['RF_Transaction_Flow']===1 || FormData['RF_Transaction_Flow']===2)
                    {
                        
                        return (<>
                        <br/>
                        
                        <div className="col-2">       
                            <label className="col-form-label">Method of Transaction</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Transaction_Method' id='RF_Transaction_Method' value={FormData['RF_Transaction_Method']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Bank Transfer</option>
                                <option value="2">Cash</option>
                                <option value="3">Debit order</option>
                                <option value="4">Debit/credit card</option>
                                <option value="5">EFT</option>
                                <option value="6">File/API Transfer</option>
                                <option value="7">Mobile payment</option>
                                <option value="8">Retailer/Merchant payment</option>
                                <option value="9">Script Transfer</option>
                                <option value="10">Stop order</option>
                                <option value="11">Straight through processing</option>
                                <option value="12">Unit Transfer</option>
                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Method']===3 || FormData['RF_Transaction_Method']===6 || FormData['RF_Transaction_Method']===9 || FormData['RF_Transaction_Method']===10 || FormData['RF_Transaction_Method']===12)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Transaction_Method']===1 || FormData['RF_Transaction_Method']===4 || FormData['RF_Transaction_Method']===5 || FormData['RF_Transaction_Method']===7 || FormData['RF_Transaction_Method']===8)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Transaction_Method']===2 || FormData['RF_Transaction_Method']===11)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }
                                                   
                            })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">2</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Method']===1 || FormData['RF_Transaction_Method']===4 || FormData['RF_Transaction_Method']===5 || FormData['RF_Transaction_Method']===7 || FormData['RF_Transaction_Method']===8)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Transaction_Method']===2 || FormData['RF_Transaction_Method']===11)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Transaction_Method']===3 || FormData['RF_Transaction_Method']===6 || FormData['RF_Transaction_Method']===9 || FormData['RF_Transaction_Method']===10 || FormData['RF_Transaction_Method']===12)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }
                                                   
                            })()}
                        </div>

                        <hr/>
                        
                        
                        <div className="col-2">       
                            <label className="col-form-label">Reason of Transaction</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Transaction_Reason' id='RF_Transaction_Reason' value={FormData['RF_Transaction_Reason']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Additional Premium</option>
                                <option value="2">Cession</option>
                                <option value="3">Client/Policy change</option>
                                <option value="4">Combined alteration</option>
                                <option value="5">Commission/Service fee</option>
                                <option value="6">Continuation</option>
                                <option value="7">Conversion</option>
                                <option value="8">New business</option>
                                <option value="9">Premium arrears</option>
                                <option value="10">Re-issue</option>
                                <option value="11">Renewal</option>
                                <option value="12">Review underwriting</option>
                                <option value="13">Switch in</option>
                                <option value="14">Transfer of value</option>
                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Reason']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Transaction_Reason']!=0)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Reason']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Transaction_Reason']!=0)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div>

                        <hr/>
                        <div className="col-5">       
                            <label className="col-form-label">Has this Reason for Transaction been considered as a High Risk in any Typology report/guidance?</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_High_Transaction_Reason' id='RF_High_Transaction_Reason' value={FormData['RF_High_Transaction_Reason']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>     
                            </select>    
                        </div>
                        
                        <div className="col-1">       
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_High_Transaction_Reason']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_High_Transaction_Reason']===2)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div>

                        <div className="col-1">       
                            <label className="col-form-label">2</label>
                        </div> 

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_High_Transaction_Reason']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_High_Transaction_Reason']===2)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div>

                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Frequency of Transaction</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Transaction_Frequency' id='RF_Transaction_Frequency' value={FormData['RF_Transaction_Frequency']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Ad hoc</option>
                                <option value="2">Lump sum and recurring combination</option>  
                                <option value="3">Once off/Lump sum</option>   
                                <option value="4">Recurring</option>
                            </select>    
                        </div>

                        <div className="col-2">       
                            <label className="col-form-label"></label>
                        </div>

                        
                        <div className="col-2">       
                            <label className="col-form-label"></label>
                        </div> 

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Frequency']===1 || FormData['RF_Transaction_Frequency']===2 || FormData['RF_Transaction_Frequency']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            if(FormData['RF_Transaction_Frequency']===4)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div> 

                        <div className="col-1">       
                            <label className="col-form-label">1</label>
                        </div> 

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Frequency']===1 || FormData['RF_Transaction_Frequency']===2 || FormData['RF_Transaction_Frequency']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            if(FormData['RF_Transaction_Frequency']===4)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div> 

                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Value of Transaction:</label>
                        </div>

                        <div className="col-2">
                            <input disabled  spellCheck="true" id="RF_Transaction_Value" name='RF_Transaction_Value' className="form-control" aria-describedby="" />
                        </div>

                        <div className="col-1">       
                            <label className="col-form-label">Currency:</label>
                        </div>

                        <div className="col-2">
                            <input disabled  spellCheck="true" id="RF_Currency_Value" name='RF_Currency_Value' className="form-control" aria-describedby="" />
                        </div>

                        <div className="col-1">       
                            <label className="col-form-label"></label>
                        </div> 

                        <div className="col-1">       
                            <label className="col-form-label">0</label>
                        </div> 

                        <div className="col-1">       
                            <label className="col-form-label">1</label>
                        </div> 

                        <div className="col-1">       
                            <label className="col-form-label">0</label>
                        </div> 

                        <hr/>
                        
                        <div className="col-2">       
                            <label className="col-form-label">Transaction Geography</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Transaction_Geography' id='RF_Transaction_Geography' value={FormData['RF_Transaction_Geography']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Cross Border</option>
                                <option value="2">In-country</option>  
                                <option value="3">Not applicable</option>   
                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Geography']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Transaction_Geography']===2 || FormData['RF_Transaction_Geography']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div> 

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Geography']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Transaction_Geography']===2 || FormData['RF_Transaction_Geography']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div> 

                        <hr/>
                        
                            {(() => { 
                            
                            if(FormData['RF_Transaction_Geography']===1)
                            {
                                return (<>
                                     <div className="col-2">
                                        <label className="col-form-label">Jurisdiction of funds</label>
                                    </div>

                                <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_Funds_Jurisdiction' value={FormData['RF_Funds_Jurisdiction']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">American Samoa</option>
                                        <option value="5">Andora</option>
                                        <option value="6">Angola</option>
                                        <option value="7">Anguilla</option>
                                        <option value="8">Antarctica</option>
                                        <option value="9">Antigua and Barbuda</option>
                                        <option value="10">Argentina</option>
                                        <option value="11">Armania</option>
                                        <option value="12">Aruba</option>
                                        <option value="13">Auckland Islands</option>
                                        <option value="14">Australia</option>
                                        <option value="15">Austria</option>
                                        <option value="16">Azerbaijan</option>
                                        <option value="17">Bahamas</option>
                                        <option value="18">Bahrain</option>
                                        <option value="19">Bangladesh</option>
                                        <option value="20">Barbados</option>
                                        <option value="21">Belarus</option>
                                        <option value="22">Belgium</option>
                                        <option value="23">Belize</option>
                                        <option value="24">Benin</option>
                                        <option value="25">Bermuda</option>
                                        <option value="26">Bhutan</option>
                                        <option value="27">Bolivia</option>
                                        <option value="28">Bonaire</option>
                                        <option value="29">Bosnia</option>
                                        <option value="30">Botswana</option>
                                        <option value="31">Bouvet Islands</option>
                                        <option value="32">Brazil</option>
                                        <option value="33">British Indian Ocean Teritory</option>
                                        <option value="34">Brunei Darussalam</option>
                                        <option value="35">Bulgaria</option>
                                        <option value="36">Burkina Faso</option>
                                        <option value="37">Burundi</option>
                                        <option value="38">Cabo Verde</option>
                                        <option value="39">Cambodia</option>
                                        <option value="40">Cameroon</option>
                                        <option value="41">Canada</option>
                                        <option value="42">Cayman Islands</option>
                                        <option value="43">Central African Republic</option>
                                        <option value="44">Chad</option>
                                        <option value="45">Chile</option>
                                        <option value="46">China</option>
                                        <option value="47">Christmas Island</option>
                                        <option value="48">Cocos</option>
                                        <option value="49">Colombia</option>
                                        <option value="50">Comoros</option>
                                        <option value="51">Congo Democratic</option>
                                        <option value="52">Congo Republic</option>
                                        <option value="53">Cook Islands</option>
                                        <option value="54">Costa Rica</option>
                                        <option value="55">Ivory Cost</option>
                                        <option value="56">Croatia</option>
                                        <option value="57">Cuba</option>
                                        <option value="58">Curacao</option>
                                        <option value="59">Cyprus</option>
                                        <option value="60">Czech Republic</option>
                                        <option value="61">Denmark</option>
                                        <option value="62">Djibouti</option>
                                        <option value="63">Dominica</option>
                                        <option value="64">Dominican Republic</option>
                                        <option value="65">Ecuador</option>
                                        <option value="66">Egypt</option>
                                        <option value="67">EI Salvador</option>
                                        <option value="68">Equatorial Guinea</option>
                                        <option value="69">Eritrea</option>
                                        <option value="70">Estonia</option>
                                        <option value="71">eSwaitini</option>
                                        <option value="72">Ethiopia</option>
                                        <option value="73">Falkland Islands</option>
                                        <option value="74">Faroe Islands</option>
                                        <option value="75">Fiji</option>
                                        <option value="76">Finland</option>
                                        <option value="77">France</option>
                                        <option value="78">French Guiana</option>
                                        <option value="79">French Polynesia</option>
                                        <option value="80">French Southern Territories</option>
                                        <option value="81">Gabon</option>
                                        <option value="82">Gambia</option>
                                        <option value="83">Georgia</option>
                                        <option value="84">Germany</option>
                                        <option value="85">Ghana</option>
                                        <option value="86">Gibralter</option>
                                        <option value="87">Greece</option>
                                        <option value="88">Greenland</option>
                                        <option value="89">Grenada</option>
                                        <option value="90">Guadeloupe</option>
                                        <option value="91">Guam</option>
                                        <option value="92">Guatemala</option>
                                        <option value="93">Guernsey</option>
                                        <option value="94">Guinea</option>
                                        <option value="95">Guinea Bissau</option>
                                        <option value="96">Guyana</option>
                                        <option value="97">Haiti</option>
                                        <option value="98">Herd Island</option>
                                        <option value="99">Holy See</option>
                                        <option value="100">Honduras</option>
                                        <option value="101">Hongkong</option>
                                        <option value="102">Hungary</option>
                                        <option value="103">Iceland</option>
                                        <option value="104">India</option>
                                        <option value="105">Indonessia</option>
                                        <option value="106">Iran</option>
                                        <option value="107">Iraq</option>
                                        <option value="108">Ireland</option>
                                        <option value="109">Isle of man</option>
                                        <option value="110">Israel</option>
                                        <option value="111">Italy</option>
                                        <option value="112">Jamaica</option>
                                        <option value="113">Japan</option>
                                        <option value="114">Jersey</option>
                                        <option value="115">Jordan</option>
                                        <option value="116">Kazakhstan</option>
                                        <option value="117">Kenya</option>
                                        <option value="118">Kiribati</option>
                                        <option value="119">Korea North</option>
                                        <option value="120">Korea South</option>
                                        <option value="121">Kosovo</option>
                                        <option value="122">Kuwait</option>
                                        <option value="123">Kyrgyzstan</option>
                                        <option value="124">Laos</option>
                                        <option value="125">Latvia</option>
                                        <option value="126">Lebanon</option>
                                        <option value="127">Lesotho</option>
                                        <option value="128">Liberia</option>
                                        <option value="129">Libya</option>
                                        <option value="130">Liechtenstein</option>
                                        <option value="131">Lithuania</option>
                                        <option value="132">Luxembourg</option>
                                        <option value="133">Macao</option>
                                        <option value="134">Macedonia</option>
                                        <option value="135">Madagascar</option>
                                        <option value="136">Malawi</option>
                                        <option value="137">Malaysia</option>
                                        <option value="138">Maldives</option>
                                        <option value="139">Mali</option>
                                        <option value="140">Malta</option>
                                        <option value="141">Marshall Islands</option>
                                        <option value="142">Martinique</option>
                                        <option value="143">Mauritania</option>
                                        <option value="144">Mauritius</option>
                                        <option value="145">Mayotte</option>
                                        <option value="146">Mexico</option>
                                        <option value="147">Micronessia</option>
                                        <option value="148">Moldova</option>
                                        <option value="149">Monaco</option>
                                        <option value="150">Mongolia</option>
                                        <option value="151">Montenegro</option>
                                        <option value="152">Montserrat</option>
                                        <option value="153">Morocco</option>
                                        <option value="154">Mozambique</option>
                                        <option value="155">Mynamar</option>
                                        <option value="156">Namabia</option>
                                        <option value="157">Nauru</option>
                                        <option value="158">Nepal</option>
                                        <option value="159">Netherlands</option>
                                        <option value="160">New Celedonia</option>
                                        <option value="161">Newzealand</option>
                                        <option value="162">Niger</option>
                                        <option value="163">Nigeria</option>
                                        <option value="164">Norfolk Island</option>
                                        <option value="165">Nothern Mariana Islands</option>
                                        <option value="166">Norway</option>
                                        <option value="167">Nuie</option>
                                        <option value="168">Oman</option>
                                        <option value="169">Pakistan</option>
                                        <option value="170">Palau</option>
                                        <option value="171">Panama</option>
                                        <option value="172">Papua New Guinea</option>
                                        <option value="173">Paraguay</option>
                                        <option value="174">Peru</option>
                                        <option value="175">Philippines</option>
                                        <option value="176">Pitcaim</option>
                                        <option value="177">Poland</option>
                                        <option value="178">Portugal</option>
                                        <option value="179">Puerto Rico</option>
                                        <option value="180">Qatar</option>
                                        <option value="181">Reunion</option>
                                        <option value="182">Roman</option>
                                        <option value="183">Russia</option>
                                        <option value="184">Rwanda</option>
                                        <option value="185">Saint Barthelemy</option>
                                        <option value="186">Saint Helena</option>
                                        <option value="187">Saint Kitts</option>
                                        <option value="188">Saint Lucia</option>
                                        <option value="189">Saint Martin</option>
                                        <option value="190">Saint Pierre</option>
                                        <option value="191">Saint Vincent</option>
                                        <option value="192">Samoa</option>
                                        <option value="193">Saint Marino</option>
                                        <option value="194">Sao Tome</option>
                                        <option value="195">Saudia Arabia</option>
                                        <option value="196">Senegal</option>
                                        <option value="197">Serbia</option>
                                        <option value="198">Seychelles</option>
                                        <option value="199">Sierra Leone</option>
                                        <option value="200">Singapore</option>
                                        <option value="201">Sint Martin</option>
                                        <option value="202">Slovekia</option>
                                        <option value="203">Slovenia</option>
                                        <option value="204">Solomon Islands</option>
                                        <option value="205">Somalia</option>
                                        <option value="206">South Africa</option>
                                        <option value="207">South Georgia</option>
                                        <option value="208">South Sudan</option>
                                        <option value="209">SPain</option>
                                        <option value="210">Srilanka</option>
                                        <option value="211">Sudan</option>
                                        <option value="212">Suriname</option>
                                        <option value="213">Svalbard</option>
                                        <option value="214">Sweden</option>
                                        <option value="215">Switxerland</option>
                                        <option value="216">Syria</option>
                                        <option value="217">Taiwan</option>
                                        <option value="218">Tajikistan</option>
                                        <option value="219">Tanzania</option>
                                        <option value="220">Thailand</option>
                                        <option value="221">Timor Leste</option>
                                        <option value="222">Togo</option>
                                        <option value="223">Tokelau</option>
                                        <option value="224">Tonga</option>
                                        <option value="225">Trinidad</option>
                                        <option value="226">Tunisia</option>
                                        <option value="227">Turkey</option>
                                        <option value="228">Turkmenistan</option>
                                        <option value="229">Turks</option>
                                        <option value="230">Tuvalu</option>
                                        <option value="231">Uganda</option>
                                        <option value="232">Ukraine</option>
                                        <option value="233">United Arab Emirates</option>
                                        <option value="224">United Kingdom</option>
                                        <option value="225">United States Minor</option>
                                        <option value="226">United States of America</option>
                                        <option value="227">Uruguay</option>
                                        <option value="228">Uzbekistan</option>
                                        <option value="229">Vanuatu</option>
                                        <option value="230">Venezuela</option>
                                        <option value="231">Vietnam</option>
                                        <option value="232">Virgin Islands(British)</option>
                                        <option value="233">Virgin Islands(US)</option>
                                        <option value="234">Wallis and Fatuna</option>
                                        <option value="235">West Bank</option>
                                        <option value="236">Western Sahara</option>
                                        <option value="237">Yemen</option>
                                        <option value="238">Zambia</option>
                                        <option value="239">Zimbabwe</option>

                                    </select> 
                                </div>

                                <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Funds_Jurisdiction']===1 || FormData['RF_Funds_Jurisdiction']===2 || FormData['RF_Funds_Jurisdiction']===3 || FormData['RF_Funds_Jurisdiction']===4 || FormData['RF_Funds_Jurisdiction']===6 || FormData['RF_Funds_Jurisdiction']===8 || FormData['RF_Funds_Jurisdiction']===10 || FormData['RF_Funds_Jurisdiction']===13 || FormData['RF_Funds_Jurisdiction']===16 || FormData['RF_Funds_Jurisdiction']===17 || FormData['RF_Funds_Jurisdiction']===19 || FormData['RF_Funds_Jurisdiction']===20 || FormData['RF_Funds_Jurisdiction']===24 || FormData['RF_Funds_Jurisdiction']===27
                                || FormData['RF_Funds_Jurisdiction']===28 || FormData['RF_Funds_Jurisdiction']===29 || FormData['RF_Funds_Jurisdiction']===31 || FormData['RF_Funds_Jurisdiction']===32 || FormData['RF_Funds_Jurisdiction']===33 || FormData['RF_Funds_Jurisdiction']===36 || FormData['RF_Funds_Jurisdiction']===37 || FormData['RF_Funds_Jurisdiction']===39 || FormData['RF_Funds_Jurisdiction']===41 || FormData['RF_Funds_Jurisdiction']===42 || FormData['RF_Funds_Jurisdiction']===43 || FormData['RF_Funds_Jurisdiction']===46 || FormData['RF_Funds_Jurisdiction']===47 || FormData['RF_Funds_Jurisdiction']===48 || FormData['RF_Funds_Jurisdiction']===49 || FormData['RF_Funds_Jurisdiction']===50 || FormData['RF_Funds_Jurisdiction']===51 || FormData['RF_Funds_Jurisdiction']===52 || FormData['RF_Funds_Jurisdiction']===53
                                || FormData['RF_Funds_Jurisdiction']===55 || FormData['RF_Funds_Jurisdiction']===58 || FormData['RF_Funds_Jurisdiction']===62 || FormData['RF_Funds_Jurisdiction']===64 || FormData['RF_Funds_Jurisdiction']===65 || FormData['RF_Funds_Jurisdiction']===66 || FormData['RF_Funds_Jurisdiction']===67 || FormData['RF_Funds_Jurisdiction']===68 || FormData['RF_Funds_Jurisdiction']===69 || FormData['RF_Funds_Jurisdiction']===71 || FormData['RF_Funds_Jurisdiction']===72 || FormData['RF_Funds_Jurisdiction']===73 || FormData['RF_Funds_Jurisdiction']===74
                                || FormData['RF_Funds_Jurisdiction']===82 || FormData['RF_Funds_Jurisdiction']===85 || FormData['RF_Funds_Jurisdiction']===86 || FormData['RF_Funds_Jurisdiction']===90 || FormData['RF_Funds_Jurisdiction']===91 || FormData['RF_Funds_Jurisdiction']===92 || FormData['RF_Funds_Jurisdiction']===93
                                || FormData['RF_Funds_Jurisdiction']===94 || FormData['RF_Funds_Jurisdiction']===95 || FormData['RF_Funds_Jurisdiction']===97 || FormData['RF_Funds_Jurisdiction']===98 || FormData['RF_Funds_Jurisdiction']===99 || FormData['RF_Funds_Jurisdiction']===100 || FormData['RF_Funds_Jurisdiction']===103 
                                
                                || FormData['RF_Funds_Jurisdiction']===109  || FormData['RF_Funds_Jurisdiction']===112  || FormData['RF_Funds_Jurisdiction']===115 || FormData['RF_Funds_Jurisdiction']===116  || FormData['RF_Funds_Jurisdiction']===117  || FormData['RF_Funds_Jurisdiction']===121  || FormData['RF_Funds_Jurisdiction']===123  || FormData['RF_Funds_Jurisdiction']===124
                                || FormData['RF_Funds_Jurisdiction']===126  || FormData['RF_Funds_Jurisdiction']===127  || FormData['RF_Funds_Jurisdiction']===128 || FormData['RF_Funds_Jurisdiction']===129  || FormData['RF_Funds_Jurisdiction']===134  || FormData['RF_Funds_Jurisdiction']===135  || FormData['RF_Funds_Jurisdiction']===136
                                || FormData['RF_Funds_Jurisdiction']===139  || FormData['RF_Funds_Jurisdiction']===143  || FormData['RF_Funds_Jurisdiction']===145 || FormData['RF_Funds_Jurisdiction']===146  || FormData['RF_Funds_Jurisdiction']===148  || FormData['RF_Funds_Jurisdiction']===150 || FormData['RF_Funds_Jurisdiction']===151
                                || FormData['RF_Funds_Jurisdiction']===152 || FormData['RF_Funds_Jurisdiction']===153 || FormData['RF_Funds_Jurisdiction']===154 || FormData['RF_Funds_Jurisdiction']===155 || FormData['RF_Funds_Jurisdiction']===158 || FormData['RF_Funds_Jurisdiction']===160 || FormData['RF_Funds_Jurisdiction']===162 
                                || FormData['RF_Funds_Jurisdiction']===163 || FormData['RF_Funds_Jurisdiction']===164 || FormData['RF_Funds_Jurisdiction']===165 || FormData['RF_Funds_Jurisdiction']===166 || FormData['RF_Funds_Jurisdiction']===168 || FormData['RF_Funds_Jurisdiction']===170 || FormData['RF_Funds_Jurisdiction']===172 || FormData['RF_Funds_Jurisdiction']===173 || FormData['RF_Funds_Jurisdiction']===174 || FormData['RF_Funds_Jurisdiction']===175 || FormData['RF_Funds_Jurisdiction']===176 || FormData['RF_Funds_Jurisdiction']===177
                                || FormData['RF_Funds_Jurisdiction']===186 || FormData['RF_Funds_Jurisdiction']===187 || FormData['RF_Funds_Jurisdiction']===188 || FormData['RF_Funds_Jurisdiction']===190 || FormData['RF_Funds_Jurisdiction']===191 || FormData['RF_Funds_Jurisdiction']===193 || FormData['RF_Funds_Jurisdiction']===195
                                || FormData['RF_Funds_Jurisdiction']===197 || FormData['RF_Funds_Jurisdiction']===198 || FormData['RF_Funds_Jurisdiction']===200 || FormData['RF_Funds_Jurisdiction']===202 || FormData['RF_Funds_Jurisdiction']===203 || FormData['RF_Funds_Jurisdiction']===206 || FormData['RF_Funds_Jurisdiction']===208 || FormData['RF_Funds_Jurisdiction']===209
                                || FormData['RF_Funds_Jurisdiction']===211 || FormData['RF_Funds_Jurisdiction']===212 || FormData['RF_Funds_Jurisdiction']===213 || FormData['RF_Funds_Jurisdiction']===214 || FormData['RF_Funds_Jurisdiction']===219 || FormData['RF_Funds_Jurisdiction']===220 || FormData['RF_Funds_Jurisdiction']===221 || FormData['RF_Funds_Jurisdiction']===222 || FormData['RF_Funds_Jurisdiction']===223 || FormData['RF_Funds_Jurisdiction']===224
                                || FormData['RF_Funds_Jurisdiction']===226 || FormData['RF_Funds_Jurisdiction']===230 || FormData['RF_Funds_Jurisdiction']===232 || FormData['RF_Funds_Jurisdiction']===233 || FormData['RF_Funds_Jurisdiction']===236 || FormData['RF_Funds_Jurisdiction']===237 || FormData['RF_Funds_Jurisdiction']===238 || FormData['RF_Funds_Jurisdiction']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Funds_Jurisdiction']===5 || FormData['RF_Funds_Jurisdiction']===7 || FormData['RF_Funds_Jurisdiction']===9 || FormData['RF_Funds_Jurisdiction']===12 || FormData['RF_Funds_Jurisdiction']===25 || FormData['RF_Funds_Jurisdiction']===34 || FormData['RF_Funds_Jurisdiction']===35 || FormData['RF_Funds_Jurisdiction']===61 || FormData['RF_Funds_Jurisdiction']===76 || FormData['RF_Funds_Jurisdiction']===84 || FormData['RF_Funds_Jurisdiction']===88
                                
                                || FormData['RF_Funds_Jurisdiction']===114 || FormData['RF_Funds_Jurisdiction']===130 || FormData['RF_Funds_Jurisdiction']===132 || FormData['RF_Funds_Jurisdiction']===142 || FormData['RF_Funds_Jurisdiction']===149 || FormData['RF_Funds_Jurisdiction']===159 || FormData['RF_Funds_Jurisdiction']===161 
                                || FormData['RF_Funds_Jurisdiction']===167 || FormData['RF_Funds_Jurisdiction']===194 || FormData['RF_Funds_Jurisdiction']===215 || FormData['RF_Funds_Jurisdiction']===216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Funds_Jurisdiction']===11 || FormData['RF_Funds_Jurisdiction']===14 || FormData['RF_Funds_Jurisdiction']===15 || FormData['RF_Funds_Jurisdiction']===18 || FormData['RF_Funds_Jurisdiction']===22 || FormData['RF_Funds_Jurisdiction']===23 || FormData['RF_Funds_Jurisdiction']===26 || FormData['RF_Funds_Jurisdiction']===30 || FormData['RF_Funds_Jurisdiction']===38 || FormData['RF_Funds_Jurisdiction']===40 || FormData['RF_Funds_Jurisdiction']===44 || FormData['RF_Funds_Jurisdiction']===45
                                || FormData['RF_Funds_Jurisdiction']===54 || FormData['RF_Funds_Jurisdiction']===56 || FormData['RF_Funds_Jurisdiction']===59 || FormData['RF_Funds_Jurisdiction']===60 || FormData['RF_Funds_Jurisdiction']===63 || FormData['RF_Funds_Jurisdiction']===70 || FormData['RF_Funds_Jurisdiction']===75 || FormData['RF_Funds_Jurisdiction']===77 || FormData['RF_Funds_Jurisdiction']===78 || FormData['RF_Funds_Jurisdiction']===79 || FormData['RF_Funds_Jurisdiction']===80 || FormData['RF_Funds_Jurisdiction']===81
                                || FormData['RF_Funds_Jurisdiction']===83 || FormData['RF_Funds_Jurisdiction']===87 || FormData['RF_Funds_Jurisdiction']===89 || FormData['RF_Funds_Jurisdiction']===96 || FormData['RF_Funds_Jurisdiction']===101 || FormData['RF_Funds_Jurisdiction']===104 || FormData['RF_Funds_Jurisdiction']===105
                                
                                || FormData['RF_Funds_Jurisdiction']===108 || FormData['RF_Funds_Jurisdiction']===110 || FormData['RF_Funds_Jurisdiction']===111 || FormData['RF_Funds_Jurisdiction']===113 || FormData['RF_Funds_Jurisdiction']===118 || FormData['RF_Funds_Jurisdiction']===120 || FormData['RF_Funds_Jurisdiction']===125
                                || FormData['RF_Funds_Jurisdiction']===131 || FormData['RF_Funds_Jurisdiction']===133 || FormData['RF_Funds_Jurisdiction']===137 || FormData['RF_Funds_Jurisdiction']===138 || FormData['RF_Funds_Jurisdiction']===140 || FormData['RF_Funds_Jurisdiction']===141
                                || FormData['RF_Funds_Jurisdiction']===144 || FormData['RF_Funds_Jurisdiction']===147 || FormData['RF_Funds_Jurisdiction']===156 || FormData['RF_Funds_Jurisdiction']===157 || FormData['RF_Funds_Jurisdiction']===169 || FormData['RF_Funds_Jurisdiction']===171 || FormData['RF_Funds_Jurisdiction']===178 || FormData['RF_Funds_Jurisdiction']===179 || FormData['RF_Funds_Jurisdiction']===180 || FormData['RF_Funds_Jurisdiction']===181 || FormData['RF_Funds_Jurisdiction']===182 || FormData['RF_Funds_Jurisdiction']===183
                                || FormData['RF_Funds_Jurisdiction']===185 || FormData['RF_Funds_Jurisdiction']===189 || FormData['RF_Funds_Jurisdiction']===192 || FormData['RF_Funds_Jurisdiction']===196 || FormData['RF_Funds_Jurisdiction']===199 || FormData['RF_Funds_Jurisdiction']===201 || FormData['RF_Funds_Jurisdiction']===204 || FormData['RF_Funds_Jurisdiction']===205
                                || FormData['RF_Funds_Jurisdiction']===207 || FormData['RF_Funds_Jurisdiction']===210 || FormData['RF_Funds_Jurisdiction']===218 || FormData['RF_Funds_Jurisdiction']===225 || FormData['RF_Funds_Jurisdiction']===231 || FormData['RF_Funds_Jurisdiction']===234 || FormData['RF_Funds_Jurisdiction']===235 || FormData['RF_Funds_Jurisdiction']===237 || FormData['RF_Funds_Jurisdiction']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Funds_Jurisdiction']===21 || FormData['RF_Funds_Jurisdiction']===57 || FormData['RF_Funds_Jurisdiction']===106 || FormData['RF_Funds_Jurisdiction']===107 || FormData['RF_Funds_Jurisdiction']===119 || FormData['RF_Funds_Jurisdiction']===187 || FormData['RF_Funds_Jurisdiction']===217 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                                                        
                            <label className="col-form-label">3</label>
                                    
                             
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Funds_Jurisdiction']===1 || FormData['RF_Funds_Jurisdiction']===2 || FormData['RF_Funds_Jurisdiction']===3 || FormData['RF_Funds_Jurisdiction']===4 || FormData['RF_Funds_Jurisdiction']===6 || FormData['RF_Funds_Jurisdiction']===8 || FormData['RF_Funds_Jurisdiction']===10 || FormData['RF_Funds_Jurisdiction']===13 || FormData['RF_Funds_Jurisdiction']===16 || FormData['RF_Funds_Jurisdiction']===17 || FormData['RF_Funds_Jurisdiction']===19 || FormData['RF_Funds_Jurisdiction']===20 || FormData['RF_Funds_Jurisdiction']===24
                                || FormData['RF_Funds_Jurisdiction']===27 || FormData['RF_Funds_Jurisdiction']===28 || FormData['RF_Funds_Jurisdiction']===29 || FormData['RF_Funds_Jurisdiction']===30 || FormData['RF_Funds_Jurisdiction']===31 || FormData['RF_Funds_Jurisdiction']===32 || FormData['RF_Funds_Jurisdiction']===33 || FormData['RF_Funds_Jurisdiction']===36 || FormData['RF_Funds_Jurisdiction']===37 || FormData['RF_Funds_Jurisdiction']===39 || FormData['RF_Funds_Jurisdiction']===41 || FormData['RF_Funds_Jurisdiction']===42 || FormData['RF_Funds_Jurisdiction']===43
                                || FormData['RF_Funds_Jurisdiction']===46 || FormData['RF_Funds_Jurisdiction']===47 || FormData['RF_Funds_Jurisdiction']===48 || FormData['RF_Funds_Jurisdiction']===49 || FormData['RF_Funds_Jurisdiction']===50 || FormData['RF_Funds_Jurisdiction']===51 || FormData['RF_Funds_Jurisdiction']===52 || FormData['RF_Funds_Jurisdiction']===53 || FormData['RF_Funds_Jurisdiction']===55 || FormData['RF_Funds_Jurisdiction']===58 || FormData['RF_Funds_Jurisdiction']===62 || FormData['RF_Funds_Jurisdiction']===64 || FormData['RF_Funds_Jurisdiction']===65 || FormData['RF_Funds_Jurisdiction']===66 
                                || FormData['RF_Funds_Jurisdiction']===67 || FormData['RF_Funds_Jurisdiction']===68 || FormData['RF_Funds_Jurisdiction']===69 || FormData['RF_Funds_Jurisdiction']===70 || FormData['RF_Funds_Jurisdiction']===71 || FormData['RF_Funds_Jurisdiction']===72 || FormData['RF_Funds_Jurisdiction']===73 || FormData['RF_Funds_Jurisdiction']===74 || FormData['RF_Funds_Jurisdiction']===82 || FormData['RF_Funds_Jurisdiction']===85 || FormData['RF_Funds_Jurisdiction']===86 || FormData['RF_Funds_Jurisdiction']===90 || FormData['RF_Funds_Jurisdiction']===91 || FormData['RF_Funds_Jurisdiction']===92 || FormData['RF_Funds_Jurisdiction']===93
                                || FormData['RF_Funds_Jurisdiction']===94 || FormData['RF_Funds_Jurisdiction']===95 || FormData['RF_Funds_Jurisdiction']===96 || FormData['RF_Funds_Jurisdiction']===97 || FormData['RF_Funds_Jurisdiction']===98 || FormData['RF_Funds_Jurisdiction']===99 || FormData['RF_Funds_Jurisdiction']===100 || FormData['RF_Funds_Jurisdiction']===102 || FormData['RF_Funds_Jurisdiction']===103
                                
                                || FormData['RF_Funds_Jurisdiction']===109  || FormData['RF_Funds_Jurisdiction']===112  || FormData['RF_Funds_Jurisdiction']===115  || FormData['RF_Funds_Jurisdiction']===116  || FormData['RF_Funds_Jurisdiction']===117  || FormData['RF_Funds_Jurisdiction']===121  || FormData['RF_Funds_Jurisdiction']===123 || FormData['RF_Funds_Jurisdiction']===124
                                || FormData['RF_Funds_Jurisdiction']===126  || FormData['RF_Funds_Jurisdiction']===127  || FormData['RF_Funds_Jurisdiction']===128  || FormData['RF_Funds_Jurisdiction']===129  || FormData['RF_Funds_Jurisdiction']===134  || FormData['RF_Funds_Jurisdiction']===135  || FormData['RF_Funds_Jurisdiction']===136
                                || FormData['RF_Funds_Jurisdiction']===139  || FormData['RF_Funds_Jurisdiction']===143  || FormData['RF_Funds_Jurisdiction']===145  || FormData['RF_Funds_Jurisdiction']===146  || FormData['RF_Funds_Jurisdiction']===148  || FormData['RF_Funds_Jurisdiction']===150 || FormData['RF_Funds_Jurisdiction']===151
                                || FormData['RF_Funds_Jurisdiction']===152 || FormData['RF_Funds_Jurisdiction']===153 || FormData['RF_Funds_Jurisdiction']===154 || FormData['RF_Funds_Jurisdiction']===155 || FormData['RF_Funds_Jurisdiction']===158 || FormData['RF_Funds_Jurisdiction']===160 || FormData['RF_Funds_Jurisdiction']===162 
                                || FormData['RF_Funds_Jurisdiction']===163 || FormData['RF_Funds_Jurisdiction']===164 || FormData['RF_Funds_Jurisdiction']===165 || FormData['RF_Funds_Jurisdiction']===166 || FormData['RF_Funds_Jurisdiction']===168 || FormData['RF_Funds_Jurisdiction']===170 || FormData['RF_Funds_Jurisdiction']===172 || FormData['RF_Funds_Jurisdiction']===173 || FormData['RF_Funds_Jurisdiction']===174 || FormData['RF_Funds_Jurisdiction']===175 || FormData['RF_Funds_Jurisdiction']===176 || FormData['RF_Funds_Jurisdiction']===177
                                || FormData['RF_Funds_Jurisdiction']===186 || FormData['RF_Funds_Jurisdiction']===187 || FormData['RF_Funds_Jurisdiction']===188 || FormData['RF_Funds_Jurisdiction']===190 || FormData['RF_Funds_Jurisdiction']===191 || FormData['RF_Funds_Jurisdiction']===193 || FormData['RF_Funds_Jurisdiction']===195
                                || FormData['RF_Funds_Jurisdiction']===197 || FormData['RF_Funds_Jurisdiction']===198 || FormData['RF_Funds_Jurisdiction']===200 || FormData['RF_Funds_Jurisdiction']===202 || FormData['RF_Funds_Jurisdiction']===203 || FormData['RF_Funds_Jurisdiction']===206 || FormData['RF_Funds_Jurisdiction']===208 || FormData['RF_Funds_Jurisdiction']===209
                                || FormData['RF_Funds_Jurisdiction']===211 || FormData['RF_Funds_Jurisdiction']===212 || FormData['RF_Funds_Jurisdiction']===213 || FormData['RF_Funds_Jurisdiction']===214 || FormData['RF_Funds_Jurisdiction']===219 || FormData['RF_Funds_Jurisdiction']===220 || FormData['RF_Funds_Jurisdiction']===221 || FormData['RF_Funds_Jurisdiction']===222 || FormData['RF_Funds_Jurisdiction']===223 || FormData['RF_Funds_Jurisdiction']===224
                                || FormData['RF_Funds_Jurisdiction']===226 || FormData['RF_Funds_Jurisdiction']===230 || FormData['RF_Funds_Jurisdiction']===232 || FormData['RF_Funds_Jurisdiction']===233 || FormData['RF_Funds_Jurisdiction']===236 || FormData['RF_Funds_Jurisdiction']===237 || FormData['RF_Funds_Jurisdiction']===238 || FormData['RF_Funds_Jurisdiction']===239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Funds_Jurisdiction']===5 || FormData['RF_Funds_Jurisdiction']===7 || FormData['RF_Funds_Jurisdiction']===9 || FormData['RF_Funds_Jurisdiction']===12 || FormData['RF_Funds_Jurisdiction']===25 || FormData['RF_Funds_Jurisdiction']===34 || FormData['RF_Funds_Jurisdiction']===35 || FormData['RF_Funds_Jurisdiction']===61 || FormData['RF_Funds_Jurisdiction']===76 || FormData['RF_Funds_Jurisdiction']===84|| FormData['RF_Funds_Jurisdiction']===88
                                
                                || FormData['RF_Funds_Jurisdiction']===114 || FormData['RF_Funds_Jurisdiction']===130 || FormData['RF_Funds_Jurisdiction']===132 || FormData['RF_Funds_Jurisdiction']===142 || FormData['RF_Funds_Jurisdiction']===149 || FormData['RF_Funds_Jurisdiction']===159 || FormData['RF_Funds_Jurisdiction']===161 
                                || FormData['RF_Funds_Jurisdiction']===167 || FormData['RF_Funds_Jurisdiction']===194 || FormData['RF_Funds_Jurisdiction']===215 || FormData['RF_Funds_Jurisdiction']===216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Funds_Jurisdiction']===11 || FormData['RF_Funds_Jurisdiction']===14 || FormData['RF_Funds_Jurisdiction']===15 || FormData['RF_Funds_Jurisdiction']===18 || FormData['RF_Funds_Jurisdiction']===22 || FormData['RF_Funds_Jurisdiction']===23 || FormData['RF_Funds_Jurisdiction']===26 || FormData['RF_Funds_Jurisdiction']===30 || FormData['RF_Funds_Jurisdiction']===38 || FormData['RF_Funds_Jurisdiction']===40
                                || FormData['RF_Funds_Jurisdiction']===44 || FormData['RF_Funds_Jurisdiction']===45 || FormData['RF_Funds_Jurisdiction']===54 || FormData['RF_Funds_Jurisdiction']===56 || FormData['RF_Funds_Jurisdiction']===59 || FormData['RF_Funds_Jurisdiction']===60 || FormData['RF_Funds_Jurisdiction']===63 || FormData['RF_Funds_Jurisdiction']===70 || FormData['RF_Funds_Jurisdiction']===75 || FormData['RF_Funds_Jurisdiction']===77 
                                || FormData['RF_Funds_Jurisdiction']===78 || FormData['RF_Funds_Jurisdiction']===79 || FormData['RF_Funds_Jurisdiction']===80 || FormData['RF_Funds_Jurisdiction']===81 || FormData['RF_Funds_Jurisdiction']===83 || FormData['RF_Funds_Jurisdiction']===87 || FormData['RF_Funds_Jurisdiction']===89 || FormData['RF_Funds_Jurisdiction']===96 || FormData['RF_Funds_Jurisdiction']===97 || FormData['RF_Funds_Jurisdiction']===98 
                                || FormData['RF_Funds_Jurisdiction']===99 || FormData['RF_Funds_Jurisdiction']===100 || FormData['RF_Funds_Jurisdiction']===101 || FormData['RF_Funds_Jurisdiction']===102 || FormData['RF_Funds_Jurisdiction']===104 || FormData['RF_Funds_Jurisdiction']===105
                                
                                || FormData['RF_Funds_Jurisdiction']===108 || FormData['RF_Funds_Jurisdiction']===110 || FormData['RF_Funds_Jurisdiction']===111 || FormData['RF_Funds_Jurisdiction']===113 || FormData['RF_Funds_Jurisdiction']===118 || FormData['RF_Funds_Jurisdiction']===120 || FormData['RF_Funds_Jurisdiction']===125
                                || FormData['RF_Funds_Jurisdiction']===131 || FormData['RF_Funds_Jurisdiction']===133 || FormData['RF_Funds_Jurisdiction']===137 || FormData['RF_Funds_Jurisdiction']===138 || FormData['RF_Funds_Jurisdiction']===140 || FormData['RF_Funds_Jurisdiction']===141
                                || FormData['RF_Funds_Jurisdiction']===144 || FormData['RF_Funds_Jurisdiction']===147 || FormData['RF_Funds_Jurisdiction']===156 || FormData['RF_Funds_Jurisdiction']===157 || FormData['RF_Funds_Jurisdiction']===169 || FormData['RF_Funds_Jurisdiction']===171 || FormData['RF_Funds_Jurisdiction']===178 || FormData['RF_Funds_Jurisdiction']===179 || FormData['RF_Funds_Jurisdiction']===180 || FormData['RF_Funds_Jurisdiction']===181 || FormData['RF_Funds_Jurisdiction']===182 || FormData['RF_Funds_Jurisdiction']===183
                                || FormData['RF_Funds_Jurisdiction']===185 || FormData['RF_Funds_Jurisdiction']===189 || FormData['RF_Funds_Jurisdiction']===192 || FormData['RF_Funds_Jurisdiction']===196 || FormData['RF_Funds_Jurisdiction']===199 || FormData['RF_Funds_Jurisdiction']===201 || FormData['RF_Funds_Jurisdiction']===204 || FormData['RF_Funds_Jurisdiction']===205
                                || FormData['RF_Funds_Jurisdiction']===207 || FormData['RF_Funds_Jurisdiction']===210 || FormData['RF_Funds_Jurisdiction']===218 || FormData['RF_Funds_Jurisdiction']===225 || FormData['RF_Funds_Jurisdiction']===231 || FormData['RF_Funds_Jurisdiction']===234 || FormData['RF_Funds_Jurisdiction']===235 || FormData['RF_Funds_Jurisdiction']===237 || FormData['RF_Funds_Jurisdiction']===238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(FormData['RF_Funds_Jurisdiction']===21 || FormData['RF_Funds_Jurisdiction']===57 || FormData['RF_Funds_Jurisdiction']===106 || FormData['RF_Funds_Jurisdiction']===107 || FormData['RF_Funds_Jurisdiction']===119 || FormData['RF_Funds_Jurisdiction']===187 || FormData['RF_Funds_Jurisdiction']===217)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">12</label>
                                    
                                </>);
                            }
    
    
                            })()}
                        </div>
                        <hr/>
                                    
                                    
                                </>);
                            } 
                                              
                            })()}
                       
                       <div className="col-2">
                            <label className="col-form-label">Delivery channel</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Delivery_Channel' id='RF_Delivery_Channel' value={FormData['RF_Delivery_Channel']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Combination of delivery channels</option>
                                <option value="2">Digital / Technology</option>  
                                <option value="3">Direct through Sanlam staff</option>
                                <option value="4">Intermediaries(Advisors,tied agents)</option>
                                <option value="5">Intermediaries(Brokers,consultants)</option>
                                <option value="6">Other third parties</option>  
                                  
                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Delivery_Channel']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Delivery_Channel']===2 || FormData['RF_Delivery_Channel']===5 || FormData['RF_Delivery_Channel']===6)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Delivery_Channel']===3 || FormData['RF_Delivery_Channel']===4)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                        
                            })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Delivery_Channel']===1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Delivery_Channel']===2 || FormData['RF_Delivery_Channel']===5 || FormData['RF_Delivery_Channel']===6)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Delivery_Channel']===3 || FormData['RF_Delivery_Channel']===4)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                        
                            })()}
                        </div>

                        <hr/>
                        <div className="col-2">
                            <label className="col-form-label">Linked Party acting on behalf of Client?</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Linked_Party_Acting' id='RF_Linked_Party_Acting' value={FormData['RF_Linked_Party_Acting']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Not applicable</option>
                                <option value="2">No</option>  
                                <option value="3">Yes</option>    
                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Linked_Party_Acting']===1 || FormData['RF_Linked_Party_Acting']===2)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Linked_Party_Acting']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 
                                                        
                            })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Linked_Party_Acting']===1 || FormData['RF_Linked_Party_Acting']===2)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Linked_Party_Acting']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 
                                                        
                            })()}
                        </div>

                        <hr/>
                        <div className="col-2">
                            <label className="col-form-label">Linked Party paying / receiving funds</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Linked_Party_Paying' id='RF_Linked_Party_Paying' value={FormData['RF_Linked_Party_Paying']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Not applicable</option>
                                <option value="2">Paying funds</option>  
                                <option value="3">Received funds</option>    
                            </select>    
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Linked_Party_Paying']===1 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Linked_Party_Paying']===2 || FormData['RF_Linked_Party_Paying']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 
                                              
                            })()}
                        </div>

                        <div className="col-1">
                            <label className="col-form-label">1</label>
                        </div>

                        <div className="col-1">
                            {(() => { 
                            
                            if(FormData['RF_Linked_Party_Paying']===1 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            } 

                            else if(FormData['RF_Linked_Party_Paying']===2 || FormData['RF_Linked_Party_Paying']===3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 
                                              
                            })()}
                        </div>

                        <hr/>


                        </>)
                    }

                    })()}
                </div>
            </div>




        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label"><b>D. Reputation Risk</b></label>
                </div>

                <div className="col-2">
                {(() => { 
                        
                        if(FormData['RF_Client_Match']===1)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Medium</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===2)
                        {
                            return (<>
                                
                                 <label className="col-form-label">High</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===3 || FormData['RF_Client_Match']===6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Low</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===4 || FormData['RF_Client_Match']===7)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label">Medium</label>
                                </div>

                            </>);
                        }

                        if(FormData['RF_Client_Match']===5 || FormData['RF_Client_Match']===8 || FormData['RF_Client_Match']===11)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label">High</label>
                                </div>

                            </>);
                        }

                        if(FormData['RF_Client_Match']===9 || FormData['RF_Client_Match']===10)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label">Intolerable</label>
                                </div>

                            </>);
                        }
 
                          
                        
                 })()}
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                {(() => { 
                        
                        if(FormData['RF_Client_Match']===1 || FormData['RF_Client_Match']===4 || FormData['RF_Client_Match']===7)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        
                        if(FormData['RF_Client_Match']===2 || FormData['RF_Client_Match']===5 || FormData['RF_Client_Match']===8 || FormData['RF_Client_Match']===11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }

                        
                        if(FormData['RF_Client_Match']===3 || FormData['RF_Client_Match']===6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===9 || FormData['RF_Client_Match']===10)
                        {
                            return (<>
                                
                                 <label className="col-form-label">4</label>
                                
                            </>);
                        }
                    })()}
                </div>

            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label">Client is a true match on:</label>
                </div>

                <div className="col-2">
                    <select disabled className="text-start form-select" name='RF_Client_Match' id='RF_Client_Match'  value={FormData['RF_Client_Match']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Adverse Media</option>
                        <option value="2">Enforcement,SIP,SIE</option>
                        <option value="3">False Positive</option>
                        <option value="4">False Positive-Unsure</option>
                        <option value="5">False Positive-Unsure:Sanctions</option>
                        <option value="6">No Alert</option>
                        <option value="7">PEP-Domestic</option>
                        <option value="8">PEP-Foreign</option>
                        <option value="9">Sanction</option>
                        <option value="10">Sanlam Do not Trnsact List</option>
                        <option value="11">SOE</option>

                    </select>  
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-1">
                {(() => { 
                        
                        if(FormData['RF_Client_Match']===1 || FormData['RF_Client_Match']===4 || FormData['RF_Client_Match']===7)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===2 || FormData['RF_Client_Match']===5 || FormData['RF_Client_Match']===8 || FormData['RF_Client_Match']===11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }

                        
                        if(FormData['RF_Client_Match']===3 || FormData['RF_Client_Match']===6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===9 || FormData['RF_Client_Match']===10)
                        {
                            return (<>
                                
                                 <label className="col-form-label">4</label>
                                
                            </>);
                        }
                    })()}
                </div>

                <div className="col-1">
                {(() => { 
                        
                        if(FormData['RF_Client_Match']===1 || FormData['RF_Client_Match']===2 || FormData['RF_Client_Match']===3 || FormData['RF_Client_Match']===4 || FormData['RF_Client_Match']===5|| FormData['RF_Client_Match']===6 || FormData['RF_Client_Match']===7 || FormData['RF_Client_Match']===8 || FormData['RF_Client_Match']===9 || FormData['RF_Client_Match']===10 || FormData['RF_Client_Match']===11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }
                    })()}
                </div>

                <div className="col-2">
                {(() => { 
                        
                        if(FormData['RF_Client_Match']===1 || FormData['RF_Client_Match']===4 || FormData['RF_Client_Match']===7)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        
                        if(FormData['RF_Client_Match']===2 || FormData['RF_Client_Match']===5 || FormData['RF_Client_Match']===8 || FormData['RF_Client_Match']===11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===3 || FormData['RF_Client_Match']===6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===9 || FormData['RF_Client_Match']===10)
                        {
                            return (<>
                                
                                 <label className="col-form-label">4</label>
                                
                            </>);
                        }
                    })()}
                </div>


            </div>
        </div>
        <hr/>

         <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label">Are there Linked Parties / Beneficiaries to Client?</label>
                </div>

                <div className="col-2">
                    <select disabled className="text-start form-select" name='RF_Client_Beneficiaries' id='RF_Client_Beneficiaries' value={FormData['RF_Client_Beneficiaries']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>  
                </div>

                {(() => { 
                        
                        if(FormData['RF_Client_Beneficiaries']===1)
                        {
                            return (<>
                                <hr/>
                                <div className="col-2">
                                    <label className="col-form-label"><b>&nbsp;&nbsp;&nbsp;Linked Party 1</b></label>
                                 </div>

                                 <div className="col-2">
                                 {(() => { 
                        
                                if(FormData['RF_Adjust_Risk1']===1)
                                {
                                    return (<>
                                    
                                    <div className="col-2">
                                        <label className="col-form-label"><b>Low</b></label>
                                    </div>
                                    </>)
                                 }

                                else if(FormData['RF_Adjust_Risk1']===2)
                                {
                                    return (<>
                                    
                                    <div className="col-2">
                                        <label className="col-form-label"><b>Medium</b></label>
                                    </div>
                                    </>)
                                 }

                                 if(FormData['RF_Adjust_Risk1']===3)
                                {
                                    return (<>
                                    
                                    <div className="col-2">
                                        <label className="col-form-label"><b>High</b></label>
                                    </div>
                                    </>)
                                 }

                                 if(FormData['RF_Adjust_Risk1']===4)
                                {
                                    return (<>
                                    
                                    <div className="col-2">
                                        <label className="col-form-label"><b>Intolerable</b></label>
                                    </div>
                                    </>)
                                 }

                                })()}
                                 </div>

                                 <div className="col-2">
                                    <label className="col-form-label"><b>Adjust Risk</b></label>
                                 </div>

                                 <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_Adjust_Risk1' id='RF_Adjust_Risk1' value={FormData['RF_Adjust_Risk1']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Low</option>
                                        <option value="2">Medium</option>
                                        <option value="3">High</option>
                                        <option value="4">Intolerable</option>
                                    </select>  
                                </div>

                                <hr/>
                                <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name and surname</label>
                                 </div>

                                 <div className="col-2">
                                 <input disabled  spellCheck="true" id="RF_Name" name='RF_Name' className="form-control" value={FormData['RF_Name']}  onChange={(e) => {onChange(e)}} placeholder=""  aria-describedby="" />
                                 </div>

                                 <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relationship to client</label>
                                 </div>

                                 <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_Client_Relationship' id='RF_Client_Relationship' value={FormData['RF_Client_Relationship']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Beneficial owner</option>
                                        <option value="2">Beneficiary</option>
                                        <option value="3">Co-policy owner</option>
                                        <option value="4">Dependent</option>
                                        <option value="5">EFT third party</option>
                                        <option value="6">Individual acting on behalf of an entity</option>
                                        <option value="7">Individual exercising control other than owner</option>
                                        <option value="8">Individual linked to a partnership</option>
                                        <option value="9">Individual linked to a trust</option>
                                        <option value="10">Legal entity acting on behalf of individual</option>
                                        <option value="11">Legal entity acting on behalf of other legal entity</option>
                                        <option value="12">Legal Entity exercising control over another Legal Entity</option>
                                        <option value="13">Legal Entity has legal relationship with other Legal Entity</option>
                                        <option value="14">Legal Entity linked to a Trust</option>
                                        <option value="15">Legal guardian</option>
                                        <option value="16">Life assured</option>
                                        <option value="17">Natural guardian</option>
                                        <option value="18">Nominee for ownership</option>
                                        <option value="19">Principal owner</option>
                                        <option value="20">Security cession</option>
                                        <option value="21">Signatory</option>
                                        <option value="22">Trust has control over another trust</option>
                                        <option value="23">Trustee</option>
                                        <option value="24">Unit transfer investment owner</option>
                                        
                                    </select>  
                                </div>

                                <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID/Passport Number/Tax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number</label>
                                 </div>

                                 <div className="col-2">
                                    <input disabled  spellCheck="true" id="RF_ID" name='RF_ID' className="form-control" value={FormData['RF_ID']} onChange={(e) => {onChange(e)}} placeholder=""  aria-describedby="" />
                                 </div>
                                 
                                 <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linked Party is a true&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; match on</label>
                                 </div>

                                 <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_Linked_Party' id='RF_Linked_Party' value={FormData['RF_Linked_Party']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Adverse Media</option>
                                        <option value="2">Enforcement,SIP,SIE</option>
                                        <option value="3">False Positive</option>
                                        <option value="4">False Positive-Unsure</option>
                                        <option value="5">False Positive-Unsure:Sanctions</option>
                                        <option value="6">No Alert</option>
                                        <option value="7">PEP-Domestic</option>
                                        <option value="8">PEP-Foreign</option>
                                        <option value="9">Sanction</option>
                                        <option value="10">Sanlam Do not Trnsact List</option>
                                        <option value="11">SOE</option>

                                    </select>  
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-1">
                                {(() => { 
                                        
                                        if(FormData['RF_Linked_Party']===1 || FormData['RF_Linked_Party']===4 || FormData['RF_Linked_Party']===7)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">2</label>
                                                
                                            </>);
                                        }

                                        if(FormData['RF_Linked_Party']===2 || FormData['RF_Linked_Party']===5 || FormData['RF_Linked_Party']===8 || FormData['RF_Linked_Party']===11)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">3</label>
                                                
                                            </>);
                                        }

                                        
                                        if(FormData['RF_Linked_Party']===3 || FormData['RF_Linked_Party']===6)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">1</label>
                                                
                                            </>);
                                        }

                                        if(FormData['RF_Linked_Party']===9 || FormData['RF_Linked_Party']===10)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">4</label>
                                                
                                            </>);
                                        }
                                    })()}
                                </div>

                                <div className="col-1">
                                {(() => { 
                                        
                                        if(FormData['RF_Linked_Party']===1 || FormData['RF_Linked_Party']===2 || FormData['RF_Linked_Party']===3 || FormData['RF_Linked_Party']===4 || FormData['RF_Linked_Party']===5|| FormData['RF_Linked_Party']===6 || FormData['RF_Linked_Party']===7 || FormData['RF_Linked_Party']===8 || FormData['RF_Linked_Party']===9 || FormData['RF_Linked_Party']===10 || FormData['RF_Linked_Party']===11)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">1</label>
                                                
                                            </>);
                                        }
                                    })()}
                                </div>

                                <div className="col-2">
                                {(() => { 
                                        
                                        if(FormData['RF_Linked_Party']===1 || FormData['RF_Linked_Party']===4 || FormData['RF_Linked_Party']===7)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">2</label>
                                                
                                            </>);
                                        }

                                        
                                        if(FormData['RF_Linked_Party']===2 || FormData['RF_Linked_Party']===5 || FormData['RF_Linked_Party']===8 || FormData['RF_Linked_Party']===11)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">3</label>
                                                
                                            </>);
                                        }

                                        if(FormData['RF_Linked_Party']===3 || FormData['RF_Linked_Party']===6)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">1</label>
                                                
                                            </>);
                                        }

                                        if(FormData['RF_Linked_Party']===9 || FormData['RF_Linked_Party']===10)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">4</label>
                                                
                                            </>);
                                        }
                                    })()}
                                </div>

                                <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is this a RCA (relative / close associate) to Client? </label>
                                 </div>

                                 <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_RCA' id='RF_RCA' value={FormData['RF_RCA']} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>  
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-1">
                                {(() => { 
                                        
                                        if(FormData['RF_RCA']===1)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">2</label>
                                                
                                            </>);
                                        }
                                    
                                    })()}
                                </div>

                                <div className="col-1">
                                    <label className="col-form-label">1</label>
                                </div>

                                <div className="col-1">
                                {(() => { 
                                        
                                        if(FormData['RF_RCA']===1)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">2</label>
                                                
                                            </>);
                                        }

                                        else if(FormData['RF_RCA']===2)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">0</label>
                                                
                                            </>);
                                        }
                                    
                                    })()}
                                </div>

                                <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country of Birth </label>
                                 </div>

                                 <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_Birth_Country' id='RF_Birth_Country' value={FormData['RF_Birth_Country']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">American Samoa</option>
                                        <option value="5">Andora</option>
                                        <option value="6">Angola</option>
                                        <option value="7">Anguilla</option>
                                        <option value="8">Antarctica</option>
                                        <option value="9">Antigua and Barbuda</option>
                                        <option value="10">Argentina</option>
                                        <option value="11">Armania</option>
                                        <option value="12">Aruba</option>
                                        <option value="13">Auckland Islands</option>
                                        <option value="14">Australia</option>
                                        <option value="15">Austria</option>
                                        <option value="16">Azerbaijan</option>
                                        <option value="17">Bahamas</option>
                                        <option value="18">Bahrain</option>
                                        <option value="19">Bangladesh</option>
                                        <option value="20">Barbados</option>
                                        <option value="21">Belarus</option>
                                        <option value="22">Belgium</option>
                                        <option value="23">Belize</option>
                                        <option value="24">Benin</option>
                                        <option value="25">Bermuda</option>
                                        <option value="26">Bhutan</option>
                                        <option value="27">Bolivia</option>
                                        <option value="28">Bonaire</option>
                                        <option value="29">Bosnia</option>
                                        <option value="30">Botswana</option>
                                        <option value="31">Bouvet Islands</option>
                                        <option value="32">Brazil</option>
                                        <option value="33">British Indian Ocean Teritory</option>
                                        <option value="34">Brunei Darussalam</option>
                                        <option value="35">Bulgaria</option>
                                        <option value="36">Burkina Faso</option>
                                        <option value="37">Burundi</option>
                                        <option value="38">Cabo Verde</option>
                                        <option value="39">Cambodia</option>
                                        <option value="40">Cameroon</option>
                                        <option value="41">Canada</option>
                                        <option value="42">Cayman Islands</option>
                                        <option value="43">Central African Republic</option>
                                        <option value="44">Chad</option>
                                        <option value="45">Chile</option>
                                        <option value="46">China</option>
                                        <option value="47">Christmas Island</option>
                                        <option value="48">Cocos</option>
                                        <option value="49">Colombia</option>
                                        <option value="50">Comoros</option>
                                        <option value="51">Congo Democratic</option>
                                        <option value="52">Congo Republic</option>
                                        <option value="53">Cook Islands</option>
                                        <option value="54">Costa Rica</option>
                                        <option value="55">Ivory Cost</option>
                                        <option value="56">Croatia</option>
                                        <option value="57">Cuba</option>
                                        <option value="58">Curacao</option>
                                        <option value="59">Cyprus</option>
                                        <option value="60">Czech Republic</option>
                                        <option value="61">Denmark</option>
                                        <option value="62">Djibouti</option>
                                        <option value="63">Dominica</option>
                                        <option value="64">Dominican Republic</option>
                                        <option value="65">Ecuador</option>
                                        <option value="66">Egypt</option>
                                        <option value="67">EI Salvador</option>
                                        <option value="68">Equatorial Guinea</option>
                                        <option value="69">Eritrea</option>
                                        <option value="70">Estonia</option>
                                        <option value="71">eSwaitini</option>
                                        <option value="72">Ethiopia</option>
                                        <option value="73">Falkland Islands</option>
                                        <option value="74">Faroe Islands</option>
                                        <option value="75">Fiji</option>
                                        <option value="76">Finland</option>
                                        <option value="77">France</option>
                                        <option value="78">French Guiana</option>
                                        <option value="79">French Polynesia</option>
                                        <option value="80">French Southern Territories</option>
                                        <option value="81">Gabon</option>
                                        <option value="82">Gambia</option>
                                        <option value="83">Georgia</option>
                                        <option value="84">Germany</option>
                                        <option value="85">Ghana</option>
                                        <option value="86">Gibralter</option>
                                        <option value="87">Greece</option>
                                        <option value="88">Greenland</option>
                                        <option value="89">Grenada</option>
                                        <option value="90">Guadeloupe</option>
                                        <option value="91">Guam</option>
                                        <option value="92">Guatemala</option>
                                        <option value="93">Guernsey</option>
                                        <option value="94">Guinea</option>
                                        <option value="95">Guinea Bissau</option>
                                        <option value="96">Guyana</option>
                                        <option value="97">Haiti</option>
                                        <option value="98">Herd Island</option>
                                        <option value="99">Holy See</option>
                                        <option value="100">Honduras</option>
                                        <option value="101">Hongkong</option>
                                        <option value="102">Hungary</option>
                                        <option value="103">Iceland</option>
                                        <option value="104">India</option>
                                        <option value="105">Indonessia</option>
                                        <option value="106">Iran</option>
                                        <option value="107">Iraq</option>
                                        <option value="108">Ireland</option>
                                        <option value="109">Isle of man</option>
                                        <option value="110">Israel</option>
                                        <option value="111">Italy</option>
                                        <option value="112">Jamaica</option>
                                        <option value="113">Japan</option>
                                        <option value="114">Jersey</option>
                                        <option value="115">Jordan</option>
                                        <option value="116">Kazakhstan</option>
                                        <option value="117">Kenya</option>
                                        <option value="118">Kiribati</option>
                                        <option value="119">Korea North</option>
                                        <option value="120">Korea South</option>
                                        <option value="121">Kosovo</option>
                                        <option value="122">Kuwait</option>
                                        <option value="123">Kyrgyzstan</option>
                                        <option value="124">Laos</option>
                                        <option value="125">Latvia</option>
                                        <option value="126">Lebanon</option>
                                        <option value="127">Lesotho</option>
                                        <option value="128">Liberia</option>
                                        <option value="129">Libya</option>
                                        <option value="130">Liechtenstein</option>
                                        <option value="131">Lithuania</option>
                                        <option value="132">Luxembourg</option>
                                        <option value="133">Macao</option>
                                        <option value="134">Macedonia</option>
                                        <option value="135">Madagascar</option>
                                        <option value="136">Malawi</option>
                                        <option value="137">Malaysia</option>
                                        <option value="138">Maldives</option>
                                        <option value="139">Mali</option>
                                        <option value="140">Malta</option>
                                        <option value="141">Marshall Islands</option>
                                        <option value="142">Martinique</option>
                                        <option value="143">Mauritania</option>
                                        <option value="144">Mauritius</option>
                                        <option value="145">Mayotte</option>
                                        <option value="146">Mexico</option>
                                        <option value="147">Micronessia</option>
                                        <option value="148">Moldova</option>
                                        <option value="149">Monaco</option>
                                        <option value="150">Mongolia</option>
                                        <option value="151">Montenegro</option>
                                        <option value="152">Montserrat</option>
                                        <option value="153">Morocco</option>
                                        <option value="154">Mozambique</option>
                                        <option value="155">Mynamar</option>
                                        <option value="156">Namabia</option>
                                        <option value="157">Nauru</option>
                                        <option value="158">Nepal</option>
                                        <option value="159">Netherlands</option>
                                        <option value="160">New Celedonia</option>
                                        <option value="161">Newzealand</option>
                                        <option value="162">Niger</option>
                                        <option value="163">Nigeria</option>
                                        <option value="164">Norfolk Island</option>
                                        <option value="165">Nothern Mariana Islands</option>
                                        <option value="166">Norway</option>
                                        <option value="167">Nuie</option>
                                        <option value="168">Oman</option>
                                        <option value="169">Pakistan</option>
                                        <option value="170">Palau</option>
                                        <option value="171">Panama</option>
                                        <option value="172">Papua New Guinea</option>
                                        <option value="173">Paraguay</option>
                                        <option value="174">Peru</option>
                                        <option value="175">Philippines</option>
                                        <option value="176">Pitcaim</option>
                                        <option value="177">Poland</option>
                                        <option value="178">Portugal</option>
                                        <option value="179">Puerto Rico</option>
                                        <option value="180">Qatar</option>
                                        <option value="181">Reunion</option>
                                        <option value="182">Roman</option>
                                        <option value="183">Russia</option>
                                        <option value="184">Rwanda</option>
                                        <option value="185">Saint Barthelemy</option>
                                        <option value="186">Saint Helena</option>
                                        <option value="187">Saint Kitts</option>
                                        <option value="188">Saint Lucia</option>
                                        <option value="189">Saint Martin</option>
                                        <option value="190">Saint Pierre</option>
                                        <option value="191">Saint Vincent</option>
                                        <option value="192">Samoa</option>
                                        <option value="193">Saint Marino</option>
                                        <option value="194">Sao Tome</option>
                                        <option value="195">Saudia Arabia</option>
                                        <option value="196">Senegal</option>
                                        <option value="197">Serbia</option>
                                        <option value="198">Seychelles</option>
                                        <option value="199">Sierra Leone</option>
                                        <option value="200">Singapore</option>
                                        <option value="201">Sint Martin</option>
                                        <option value="202">Slovekia</option>
                                        <option value="203">Slovenia</option>
                                        <option value="204">Solomon Islands</option>
                                        <option value="205">Somalia</option>
                                        <option value="206">South Africa</option>
                                        <option value="207">South Georgia</option>
                                        <option value="208">South Sudan</option>
                                        <option value="209">SPain</option>
                                        <option value="210">Srilanka</option>
                                        <option value="211">Sudan</option>
                                        <option value="212">Suriname</option>
                                        <option value="213">Svalbard</option>
                                        <option value="214">Sweden</option>
                                        <option value="215">Switxerland</option>
                                        <option value="216">Syria</option>
                                        <option value="217">Taiwan</option>
                                        <option value="218">Tajikistan</option>
                                        <option value="219">Tanzania</option>
                                        <option value="220">Thailand</option>
                                        <option value="221">Timor Leste</option>
                                        <option value="222">Togo</option>
                                        <option value="223">Tokelau</option>
                                        <option value="224">Tonga</option>
                                        <option value="225">Trinidad</option>
                                        <option value="226">Tunisia</option>
                                        <option value="227">Turkey</option>
                                        <option value="228">Turkmenistan</option>
                                        <option value="229">Turks</option>
                                        <option value="230">Tuvalu</option>
                                        <option value="231">Uganda</option>
                                        <option value="232">Ukraine</option>
                                        <option value="233">United Arab Emirates</option>
                                        <option value="224">United Kingdom</option>
                                        <option value="225">United States Minor</option>
                                        <option value="226">United States of America</option>
                                        <option value="227">Uruguay</option>
                                        <option value="228">Uzbekistan</option>
                                        <option value="229">Vanuatu</option>
                                        <option value="230">Venezuela</option>
                                        <option value="231">Vietnam</option>
                                        <option value="232">Virgin Islands(British)</option>
                                        <option value="233">Virgin Islands(US)</option>
                                        <option value="234">Wallis and Fatuna</option>
                                        <option value="235">West Bank</option>
                                        <option value="236">Western Sahara</option>
                                        <option value="237">Yemen</option>
                                        <option value="238">Zambia</option>
                                        <option value="239">Zimbabwe</option>

                                    </select> 
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-1">
                                    {(() => { 
                                    
                                    if(FormData['RF_Birth_Country']===1 || FormData['RF_Birth_Country']===2 || FormData['RF_Birth_Country']===3 || FormData['RF_Birth_Country']===4 || FormData['RF_Birth_Country']===6 || FormData['RF_Birth_Country']===8 || FormData['RF_Birth_Country']===10 || FormData['RF_Birth_Country']===13 || FormData['RF_Birth_Country']===16 || FormData['RF_Birth_Country']===17 || FormData['RF_Birth_Country']===19 || FormData['RF_Birth_Country']===20 || FormData['RF_Birth_Country']===24 || FormData['RF_Birth_Country']===27
                                        || FormData['RF_Birth_Country']===28 || FormData['RF_Birth_Country']===29 || FormData['RF_Birth_Country']===31 || FormData['RF_Birth_Country']===32 || FormData['RF_Birth_Country']===33 || FormData['RF_Birth_Country']===36 || FormData['RF_Birth_Country']===37 || FormData['RF_Birth_Country']===39 || FormData['RF_Birth_Country']===41 || FormData['RF_Birth_Country']===42 || FormData['RF_Birth_Country']===43 || FormData['RF_Birth_Country']===46 || FormData['RF_Birth_Country']===47 || FormData['RF_Birth_Country']===48 || FormData['RF_Birth_Country']===49 || FormData['RF_Birth_Country']===50 || FormData['RF_Birth_Country']===51 || FormData['RF_Birth_Country']===52 || FormData['RF_Birth_Country']===53
                                        || FormData['RF_Birth_Country']===55 || FormData['RF_Birth_Country']===58 || FormData['RF_Birth_Country']===62 || FormData['RF_Birth_Country']===64 || FormData['RF_Birth_Country']===65 || FormData['RF_Birth_Country']===66 || FormData['RF_Birth_Country']===67 || FormData['RF_Birth_Country']===68 || FormData['RF_Birth_Country']===69 || FormData['RF_Birth_Country']===71 || FormData['RF_Birth_Country']===72 || FormData['RF_Birth_Country']===73 || FormData['RF_Birth_Country']===74
                                        || FormData['RF_Birth_Country']===82 || FormData['RF_Birth_Country']===85 || FormData['RF_Birth_Country']===86 || FormData['RF_Birth_Country']===90 || FormData['RF_Birth_Country']===91 || FormData['RF_Birth_Country']===92 || FormData['RF_Birth_Country']===93
                                        || FormData['RF_Birth_Country']===94 || FormData['RF_Birth_Country']===95 || FormData['RF_Birth_Country']===97 || FormData['RF_Birth_Country']===98 || FormData['RF_Birth_Country']===99 || FormData['RF_Birth_Country']===100 || FormData['RF_Birth_Country']===103 
                                        
                                        || FormData['RF_Birth_Country']===109 || FormData['RF_Birth_Country']===112  || FormData['RF_Birth_Country']===115 || FormData['RF_Birth_Country']===116  || FormData['RF_Birth_Country']===117  || FormData['RF_Birth_Country']===121  || FormData['RF_Birth_Country']===123  || FormData['RF_Birth_Country']===124
                                        || FormData['RF_Birth_Country']===126 || FormData['RF_Birth_Country']===127  || FormData['RF_Birth_Country']===128 || FormData['RF_Birth_Country']===129  || FormData['RF_Birth_Country']===134  || FormData['RF_Birth_Country']===135  || FormData['RF_Birth_Country']===136
                                        || FormData['RF_Birth_Country']===139 || FormData['RF_Birth_Country']===143  || FormData['RF_Birth_Country']===145 || FormData['RF_Birth_Country']===146  || FormData['RF_Birth_Country']===148  || FormData['RF_Birth_Country']===150 || FormData['RF_Birth_Country']===151
                                        || FormData['RF_Birth_Country']===152 || FormData['RF_Birth_Country']===153 || FormData['RF_Birth_Country']===154 || FormData['RF_Birth_Country']===155 || FormData['RF_Birth_Country']===158 || FormData['RF_Birth_Country']===160 || FormData['RF_Birth_Country']===162 
                                        || FormData['RF_Birth_Country']===163 || FormData['RF_Birth_Country']===164 || FormData['RF_Birth_Country']===165 || FormData['RF_Birth_Country']===166 || FormData['RF_Birth_Country']===168 || FormData['RF_Birth_Country']===170 || FormData['RF_Birth_Country']===172 || FormData['RF_Birth_Country']===173 || FormData['RF_Birth_Country']===174 || FormData['RF_Birth_Country']===175 || FormData['RF_Birth_Country']===176 || FormData['RF_Birth_Country']===177
                                        || FormData['RF_Birth_Country']===186 || FormData['RF_Birth_Country']===187 || FormData['RF_Birth_Country']===188 || FormData['RF_Birth_Country']===190 || FormData['RF_Birth_Country']===191 || FormData['RF_Birth_Country']===193 || FormData['RF_Birth_Country']===195
                                        || FormData['RF_Birth_Country']===197 || FormData['RF_Birth_Country']===198 || FormData['RF_Birth_Country']===200 || FormData['RF_Birth_Country']===202 || FormData['RF_Birth_Country']===203 || FormData['RF_Birth_Country']===206 || FormData['RF_Birth_Country']===208 || FormData['RF_Birth_Country']===209
                                        || FormData['RF_Birth_Country']===211 || FormData['RF_Birth_Country']===212 || FormData['RF_Birth_Country']===213 || FormData['RF_Birth_Country']===214 || FormData['RF_Birth_Country']===219 || FormData['RF_Birth_Country']===220 || FormData['RF_Birth_Country']===221 || FormData['RF_Birth_Country']===222 || FormData['RF_Birth_Country']===223 || FormData['RF_Birth_Country']===224
                                        || FormData['RF_Birth_Country']===226 || FormData['RF_Birth_Country']===230 || FormData['RF_Birth_Country']===232 || FormData['RF_Birth_Country']===233 || FormData['RF_Birth_Country']===236 || FormData['RF_Birth_Country']===237 || FormData['RF_Birth_Country']===238 || FormData['RF_Birth_Country']===239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Birth_Country']===5 || FormData['RF_Birth_Country']===7 || FormData['RF_Birth_Country']===9 || FormData['RF_Birth_Country']===12 || FormData['RF_Birth_Country']===25 || FormData['RF_Birth_Country']===34 || FormData['RF_Birth_Country']===35 || FormData['RF_Birth_Country']===61 || FormData['RF_Birth_Country']===76 || FormData['RF_Birth_Country']===84 || FormData['RF_Birth_Country']===88
                                        
                                        || FormData['RF_Birth_Country']===114 || FormData['RF_Birth_Country']===130 || FormData['RF_Birth_Country']===132 || FormData['RF_Birth_Country']===142 || FormData['RF_Birth_Country']===149 || FormData['RF_Birth_Country']===159 || FormData['RF_Birth_Country']===161 
                                        || FormData['RF_Birth_Country']===167 || FormData['RF_Birth_Country']===194 || FormData['RF_Birth_Country']===215 || FormData['RF_Birth_Country']===216 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">1</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Birth_Country']===11 || FormData['RF_Birth_Country']===14 || FormData['RF_Birth_Country']===15 || FormData['RF_Birth_Country']===18 || FormData['RF_Birth_Country']===22 || FormData['RF_Birth_Country']===23 || FormData['RF_Birth_Country']===26 || FormData['RF_Birth_Country']===30 || FormData['RF_Birth_Country']===38 || FormData['RF_Birth_Country']===40 || FormData['RF_Birth_Country']===44 || FormData['RF_Birth_Country']===45
                                        || FormData['RF_Birth_Country']===54 || FormData['RF_Birth_Country']===56 || FormData['RF_Birth_Country']===59 || FormData['RF_Birth_Country']===60 || FormData['RF_Birth_Country']===63 || FormData['RF_Birth_Country']===70 || FormData['RF_Birth_Country']===75 || FormData['RF_Birth_Country']===77 || FormData['RF_Birth_Country']===78 || FormData['RF_Birth_Country']===79 || FormData['RF_Birth_Country']===80 || FormData['RF_Birth_Country']===81
                                        || FormData['RF_Birth_Country']===83 || FormData['RF_Birth_Country']===87 || FormData['RF_Birth_Country']===89 || FormData['RF_Birth_Country']===96 || FormData['RF_Birth_Country']===101 || FormData['RF_Birth_Country']===104 || FormData['RF_Birth_Country']===105
                                        
                                        || FormData['RF_Birth_Country']===108 || FormData['RF_Birth_Country']===110 || FormData['RF_Birth_Country']===111 || FormData['RF_Birth_Country']===113 || FormData['RF_Birth_Country']===118 || FormData['RF_Birth_Country']===120 || FormData['RF_Birth_Country']===125
                                        || FormData['RF_Birth_Country']===131 || FormData['RF_Birth_Country']===133 || FormData['RF_Birth_Country']===137 || FormData['RF_Birth_Country']===138 || FormData['RF_Birth_Country']===140 || FormData['RF_Birth_Country']===141
                                        || FormData['RF_Birth_Country']===144 || FormData['RF_Birth_Country']===147 || FormData['RF_Birth_Country']===156 || FormData['RF_Birth_Country']===157 || FormData['RF_Birth_Country']===169 || FormData['RF_Birth_Country']===171 || FormData['RF_Birth_Country']===178 || FormData['RF_Birth_Country']===179 || FormData['RF_Birth_Country']===180 || FormData['RF_Birth_Country']===181 || FormData['RF_Birth_Country']===182 || FormData['RF_Birth_Country']===183
                                        || FormData['RF_Birth_Country']===185 || FormData['RF_Birth_Country']===189 || FormData['RF_Birth_Country']===192 || FormData['RF_Birth_Country']===196 || FormData['RF_Birth_Country']===199 || FormData['RF_Birth_Country']===201 || FormData['RF_Birth_Country']===204 || FormData['RF_Birth_Country']===205
                                        || FormData['RF_Birth_Country']===207 || FormData['RF_Birth_Country']===210 || FormData['RF_Birth_Country']===218 || FormData['RF_Birth_Country']===225 || FormData['RF_Birth_Country']===231 || FormData['RF_Birth_Country']===234 || FormData['RF_Birth_Country']===235 || FormData['RF_Birth_Country']===237 || FormData['RF_Birth_Country']===238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">2</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Birth_Country']===21 || FormData['RF_Birth_Country']===57 || FormData['RF_Birth_Country']===106 || FormData['RF_Birth_Country']===107 || FormData['RF_Birth_Country']===119 || FormData['RF_Birth_Country']===187 || FormData['RF_Birth_Country']===217 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">4</label>
                                            
                                        </>);
                                    }
            
                                    })()}
                                </div>

                                <div className="col-1">
                                                                
                                    <label className="col-form-label">3</label>
                                            
                                    
                                </div>

                                <div className="col-1">
                                    {(() => { 
                                    
                                    if(FormData['RF_Birth_Country']===1 || FormData['RF_Birth_Country']===2 || FormData['RF_Birth_Country']===3 || FormData['RF_Birth_Country']===4 || FormData['RF_Birth_Country']===6 || FormData['RF_Birth_Country']===8 || FormData['RF_Birth_Country']===10 || FormData['RF_Birth_Country']===13 || FormData['RF_Birth_Country']===16 || FormData['RF_Birth_Country']===17 || FormData['RF_Birth_Country']===19 || FormData['RF_Birth_Country']===20 || FormData['RF_Birth_Country']===24
                                        || FormData['RF_Birth_Country']===27 || FormData['RF_Birth_Country']===28 || FormData['RF_Birth_Country']===29 || FormData['RF_Birth_Country']===30 || FormData['RF_Birth_Country']===31 || FormData['RF_Birth_Country']===32 || FormData['RF_Birth_Country']===33 || FormData['RF_Birth_Country']===36 || FormData['RF_Birth_Country']===37 || FormData['RF_Birth_Country']===39 || FormData['RF_Birth_Country']===41 || FormData['RF_Birth_Country']===42 || FormData['RF_Birth_Country']===43
                                        || FormData['RF_Birth_Country']===46 || FormData['RF_Birth_Country']===47 || FormData['RF_Birth_Country']===48 || FormData['RF_Birth_Country']===49 || FormData['RF_Birth_Country']===50 || FormData['RF_Birth_Country']===51 || FormData['RF_Birth_Country']===52 || FormData['RF_Birth_Country']===53 || FormData['RF_Birth_Country']===55 || FormData['RF_Birth_Country']===58 || FormData['RF_Birth_Country']===62 || FormData['RF_Birth_Country']===64 || FormData['RF_Birth_Country']===65 || FormData['RF_Birth_Country']===66 
                                        || FormData['RF_Birth_Country']===67 || FormData['RF_Birth_Country']===68 || FormData['RF_Birth_Country']===69 || FormData['RF_Birth_Country']===70 || FormData['RF_Birth_Country']===71 || FormData['RF_Birth_Country']===72 || FormData['RF_Birth_Country']===73 || FormData['RF_Birth_Country']===74 || FormData['RF_Birth_Country']===82 || FormData['RF_Birth_Country']===85 || FormData['RF_Birth_Country']===86 || FormData['RF_Birth_Country']===90 || FormData['RF_Birth_Country']===91 || FormData['RF_Birth_Country']===92 || FormData['RF_Birth_Country']===93
                                        || FormData['RF_Birth_Country']===94 || FormData['RF_Birth_Country']===95 || FormData['RF_Birth_Country']===96 || FormData['RF_Birth_Country']===97 || FormData['RF_Birth_Country']===98 || FormData['RF_Birth_Country']===99 || FormData['RF_Birth_Country']===100 || FormData['RF_Birth_Country']===102 || FormData['RF_Birth_Country']===103
                                        
                                        || FormData['RF_Birth_Country']===109 || FormData['RF_Birth_Country']===112 || FormData['RF_Birth_Country']===115 || FormData['RF_Birth_Country']===116 || FormData['RF_Birth_Country']===117 || FormData['RF_Birth_Country']===121 || FormData['RF_Birth_Country']===123 || FormData['RF_Birth_Country']===124
                                        || FormData['RF_Birth_Country']===126 || FormData['RF_Birth_Country']===127 || FormData['RF_Birth_Country']===128 || FormData['RF_Birth_Country']===129 || FormData['RF_Birth_Country']===134 || FormData['RF_Birth_Country']===135 || FormData['RF_Birth_Country']===136
                                        || FormData['RF_Birth_Country']===139 || FormData['RF_Birth_Country']===143 || FormData['RF_Birth_Country']===145 || FormData['RF_Birth_Country']===146 || FormData['RF_Birth_Country']===148 || FormData['RF_Birth_Country']===150 || FormData['RF_Birth_Country']===151
                                        || FormData['RF_Birth_Country']===152 || FormData['RF_Birth_Country']===153 || FormData['RF_Birth_Country']===154 || FormData['RF_Birth_Country']===155 || FormData['RF_Birth_Country']===158 || FormData['RF_Birth_Country']===160 || FormData['RF_Birth_Country']===162 
                                        || FormData['RF_Birth_Country']===163 || FormData['RF_Birth_Country']===164 || FormData['RF_Birth_Country']===165 || FormData['RF_Birth_Country']===166 || FormData['RF_Birth_Country']===168 || FormData['RF_Birth_Country']===170 || FormData['RF_Birth_Country']===172 || FormData['RF_Birth_Country']===173 || FormData['RF_Birth_Country']===174 || FormData['RF_Birth_Country']===175 || FormData['RF_Birth_Country']===176 || FormData['RF_Birth_Country']===177
                                        || FormData['RF_Birth_Country']===186 || FormData['RF_Birth_Country']===187 || FormData['RF_Birth_Country']===188 || FormData['RF_Birth_Country']===190 || FormData['RF_Birth_Country']===191 || FormData['RF_Birth_Country']===193 || FormData['RF_Birth_Country']===195
                                        || FormData['RF_Birth_Country']===197 || FormData['RF_Birth_Country']===198 || FormData['RF_Birth_Country']===200 || FormData['RF_Birth_Country']===202 || FormData['RF_Birth_Country']===203 || FormData['RF_Birth_Country']===206 || FormData['RF_Birth_Country']===208 || FormData['RF_Birth_Country']===209
                                        || FormData['RF_Birth_Country']===211 || FormData['RF_Birth_Country']===212 || FormData['RF_Birth_Country']===213 || FormData['RF_Birth_Country']===214 || FormData['RF_Birth_Country']===219 || FormData['RF_Birth_Country']===220 || FormData['RF_Birth_Country']===221 || FormData['RF_Birth_Country']===222 || FormData['RF_Birth_Country']===223 || FormData['RF_Birth_Country']===224
                                        || FormData['RF_Birth_Country']===226 || FormData['RF_Birth_Country']===230 || FormData['RF_Birth_Country']===232 || FormData['RF_Birth_Country']===233 || FormData['RF_Birth_Country']===236 || FormData['RF_Birth_Country']===237 || FormData['RF_Birth_Country']===238 || FormData['RF_Birth_Country']===239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">9</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Birth_Country']===5 || FormData['RF_Birth_Country']===7 || FormData['RF_Birth_Country']===9 || FormData['RF_Birth_Country']===12 || FormData['RF_Birth_Country']===25 || FormData['RF_Birth_Country']===34 || FormData['RF_Birth_Country']===35 || FormData['RF_Birth_Country']===61 || FormData['RF_Birth_Country']===76 || FormData['RF_Birth_Country']===84|| FormData['RF_Birth_Country']===88
                                        
                                        || FormData['RF_Birth_Country']===114 || FormData['RF_Birth_Country']===130 || FormData['RF_Birth_Country']===132 || FormData['RF_Birth_Country']===142 || FormData['RF_Birth_Country']===149 || FormData['RF_Birth_Country']===159 || FormData['RF_Birth_Country']===161 
                                        || FormData['RF_Birth_Country']===167 || FormData['RF_Birth_Country']===194 || FormData['RF_Birth_Country']===215 || FormData['RF_Birth_Country']===216)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Birth_Country']===11 || FormData['RF_Birth_Country']===14 || FormData['RF_Birth_Country']===15 || FormData['RF_Birth_Country']===18 || FormData['RF_Birth_Country']===22 || FormData['RF_Birth_Country']===23 || FormData['RF_Birth_Country']===26 || FormData['RF_Birth_Country']===30 || FormData['RF_Birth_Country']===38 || FormData['RF_Birth_Country']===40
                                        || FormData['RF_Birth_Country']===44 || FormData['RF_Birth_Country']===45 || FormData['RF_Birth_Country']===54 || FormData['RF_Birth_Country']===56 || FormData['RF_Birth_Country']===59 || FormData['RF_Birth_Country']===60 || FormData['RF_Birth_Country']===63 || FormData['RF_Birth_Country']===70 || FormData['RF_Birth_Country']===75 || FormData['RF_Birth_Country']===77 
                                        || FormData['RF_Birth_Country']===78 || FormData['RF_Birth_Country']===79 || FormData['RF_Birth_Country']===80 || FormData['RF_Birth_Country']===81 || FormData['RF_Birth_Country']===83 || FormData['RF_Birth_Country']===87 || FormData['RF_Birth_Country']===89 || FormData['RF_Birth_Country']===96 || FormData['RF_Birth_Country']===97 || FormData['RF_Birth_Country']===98 
                                        || FormData['RF_Birth_Country']===99 || FormData['RF_Birth_Country']===100 || FormData['RF_Birth_Country']===101 || FormData['RF_Birth_Country']===102 || FormData['RF_Birth_Country']===104 || FormData['RF_Birth_Country']===105
                                        
                                        || FormData['RF_Birth_Country']===108 || FormData['RF_Birth_Country']===110 || FormData['RF_Birth_Country']===111 || FormData['RF_Birth_Country']===113 || FormData['RF_Birth_Country']===118 || FormData['RF_Birth_Country']===120 || FormData['RF_Birth_Country']===125
                                        || FormData['RF_Birth_Country']===131 || FormData['RF_Birth_Country']===133 || FormData['RF_Birth_Country']===137 || FormData['RF_Birth_Country']===138 || FormData['RF_Birth_Country']===140 || FormData['RF_Birth_Country']===141
                                        || FormData['RF_Birth_Country']===144 || FormData['RF_Birth_Country']===147 || FormData['RF_Birth_Country']===156 || FormData['RF_Birth_Country']===157 || FormData['RF_Birth_Country']===169 || FormData['RF_Birth_Country']===171 || FormData['RF_Birth_Country']===178 || FormData['RF_Birth_Country']===179 || FormData['RF_Birth_Country']===180 || FormData['RF_Birth_Country']===181 || FormData['RF_Birth_Country']===182 || FormData['RF_Birth_Country']===183
                                        || FormData['RF_Birth_Country']===185 || FormData['RF_Birth_Country']===189 || FormData['RF_Birth_Country']===192 || FormData['RF_Birth_Country']===196 || FormData['RF_Birth_Country']===199 || FormData['RF_Birth_Country']===201 || FormData['RF_Birth_Country']===204 || FormData['RF_Birth_Country']===205
                                        || FormData['RF_Birth_Country']===207 || FormData['RF_Birth_Country']===210 || FormData['RF_Birth_Country']===218 || FormData['RF_Birth_Country']===225 || FormData['RF_Birth_Country']===231 || FormData['RF_Birth_Country']===234 || FormData['RF_Birth_Country']===235 || FormData['RF_Birth_Country']===237 || FormData['RF_Birth_Country']===238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">6</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Birth_Country']===21 || FormData['RF_Birth_Country']===57 || FormData['RF_Birth_Country']===106 || FormData['RF_Birth_Country']===107 || FormData['RF_Birth_Country']===119 || FormData['RF_Birth_Country']===187 || FormData['RF_Birth_Country']===217)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">12</label>
                                            
                                        </>);
                                    }
            
            
                                    })()}
                                </div>

                                <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country of Residence </label>
                                 </div>

                                 <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_Residence_Country' id='RF_Residence_Country' value={FormData['RF_Residence_Country']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">American Samoa</option>
                                        <option value="5">Andora</option>
                                        <option value="6">Angola</option>
                                        <option value="7">Anguilla</option>
                                        <option value="8">Antarctica</option>
                                        <option value="9">Antigua and Barbuda</option>
                                        <option value="10">Argentina</option>
                                        <option value="11">Armania</option>
                                        <option value="12">Aruba</option>
                                        <option value="13">Auckland Islands</option>
                                        <option value="14">Australia</option>
                                        <option value="15">Austria</option>
                                        <option value="16">Azerbaijan</option>
                                        <option value="17">Bahamas</option>
                                        <option value="18">Bahrain</option>
                                        <option value="19">Bangladesh</option>
                                        <option value="20">Barbados</option>
                                        <option value="21">Belarus</option>
                                        <option value="22">Belgium</option>
                                        <option value="23">Belize</option>
                                        <option value="24">Benin</option>
                                        <option value="25">Bermuda</option>
                                        <option value="26">Bhutan</option>
                                        <option value="27">Bolivia</option>
                                        <option value="28">Bonaire</option>
                                        <option value="29">Bosnia</option>
                                        <option value="30">Botswana</option>
                                        <option value="31">Bouvet Islands</option>
                                        <option value="32">Brazil</option>
                                        <option value="33">British Indian Ocean Teritory</option>
                                        <option value="34">Brunei Darussalam</option>
                                        <option value="35">Bulgaria</option>
                                        <option value="36">Burkina Faso</option>
                                        <option value="37">Burundi</option>
                                        <option value="38">Cabo Verde</option>
                                        <option value="39">Cambodia</option>
                                        <option value="40">Cameroon</option>
                                        <option value="41">Canada</option>
                                        <option value="42">Cayman Islands</option>
                                        <option value="43">Central African Republic</option>
                                        <option value="44">Chad</option>
                                        <option value="45">Chile</option>
                                        <option value="46">China</option>
                                        <option value="47">Christmas Island</option>
                                        <option value="48">Cocos</option>
                                        <option value="49">Colombia</option>
                                        <option value="50">Comoros</option>
                                        <option value="51">Congo Democratic</option>
                                        <option value="52">Congo Republic</option>
                                        <option value="53">Cook Islands</option>
                                        <option value="54">Costa Rica</option>
                                        <option value="55">Ivory Cost</option>
                                        <option value="56">Croatia</option>
                                        <option value="57">Cuba</option>
                                        <option value="58">Curacao</option>
                                        <option value="59">Cyprus</option>
                                        <option value="60">Czech Republic</option>
                                        <option value="61">Denmark</option>
                                        <option value="62">Djibouti</option>
                                        <option value="63">Dominica</option>
                                        <option value="64">Dominican Republic</option>
                                        <option value="65">Ecuador</option>
                                        <option value="66">Egypt</option>
                                        <option value="67">EI Salvador</option>
                                        <option value="68">Equatorial Guinea</option>
                                        <option value="69">Eritrea</option>
                                        <option value="70">Estonia</option>
                                        <option value="71">eSwaitini</option>
                                        <option value="72">Ethiopia</option>
                                        <option value="73">Falkland Islands</option>
                                        <option value="74">Faroe Islands</option>
                                        <option value="75">Fiji</option>
                                        <option value="76">Finland</option>
                                        <option value="77">France</option>
                                        <option value="78">French Guiana</option>
                                        <option value="79">French Polynesia</option>
                                        <option value="80">French Southern Territories</option>
                                        <option value="81">Gabon</option>
                                        <option value="82">Gambia</option>
                                        <option value="83">Georgia</option>
                                        <option value="84">Germany</option>
                                        <option value="85">Ghana</option>
                                        <option value="86">Gibralter</option>
                                        <option value="87">Greece</option>
                                        <option value="88">Greenland</option>
                                        <option value="89">Grenada</option>
                                        <option value="90">Guadeloupe</option>
                                        <option value="91">Guam</option>
                                        <option value="92">Guatemala</option>
                                        <option value="93">Guernsey</option>
                                        <option value="94">Guinea</option>
                                        <option value="95">Guinea Bissau</option>
                                        <option value="96">Guyana</option>
                                        <option value="97">Haiti</option>
                                        <option value="98">Herd Island</option>
                                        <option value="99">Holy See</option>
                                        <option value="100">Honduras</option>
                                        <option value="101">Hongkong</option>
                                        <option value="102">Hungary</option>
                                        <option value="103">Iceland</option>
                                        <option value="104">India</option>
                                        <option value="105">Indonessia</option>
                                        <option value="106">Iran</option>
                                        <option value="107">Iraq</option>
                                        <option value="108">Ireland</option>
                                        <option value="109">Isle of man</option>
                                        <option value="110">Israel</option>
                                        <option value="111">Italy</option>
                                        <option value="112">Jamaica</option>
                                        <option value="113">Japan</option>
                                        <option value="114">Jersey</option>
                                        <option value="115">Jordan</option>
                                        <option value="116">Kazakhstan</option>
                                        <option value="117">Kenya</option>
                                        <option value="118">Kiribati</option>
                                        <option value="119">Korea North</option>
                                        <option value="120">Korea South</option>
                                        <option value="121">Kosovo</option>
                                        <option value="122">Kuwait</option>
                                        <option value="123">Kyrgyzstan</option>
                                        <option value="124">Laos</option>
                                        <option value="125">Latvia</option>
                                        <option value="126">Lebanon</option>
                                        <option value="127">Lesotho</option>
                                        <option value="128">Liberia</option>
                                        <option value="129">Libya</option>
                                        <option value="130">Liechtenstein</option>
                                        <option value="131">Lithuania</option>
                                        <option value="132">Luxembourg</option>
                                        <option value="133">Macao</option>
                                        <option value="134">Macedonia</option>
                                        <option value="135">Madagascar</option>
                                        <option value="136">Malawi</option>
                                        <option value="137">Malaysia</option>
                                        <option value="138">Maldives</option>
                                        <option value="139">Mali</option>
                                        <option value="140">Malta</option>
                                        <option value="141">Marshall Islands</option>
                                        <option value="142">Martinique</option>
                                        <option value="143">Mauritania</option>
                                        <option value="144">Mauritius</option>
                                        <option value="145">Mayotte</option>
                                        <option value="146">Mexico</option>
                                        <option value="147">Micronessia</option>
                                        <option value="148">Moldova</option>
                                        <option value="149">Monaco</option>
                                        <option value="150">Mongolia</option>
                                        <option value="151">Montenegro</option>
                                        <option value="152">Montserrat</option>
                                        <option value="153">Morocco</option>
                                        <option value="154">Mozambique</option>
                                        <option value="155">Mynamar</option>
                                        <option value="156">Namabia</option>
                                        <option value="157">Nauru</option>
                                        <option value="158">Nepal</option>
                                        <option value="159">Netherlands</option>
                                        <option value="160">New Celedonia</option>
                                        <option value="161">Newzealand</option>
                                        <option value="162">Niger</option>
                                        <option value="163">Nigeria</option>
                                        <option value="164">Norfolk Island</option>
                                        <option value="165">Nothern Mariana Islands</option>
                                        <option value="166">Norway</option>
                                        <option value="167">Nuie</option>
                                        <option value="168">Oman</option>
                                        <option value="169">Pakistan</option>
                                        <option value="170">Palau</option>
                                        <option value="171">Panama</option>
                                        <option value="172">Papua New Guinea</option>
                                        <option value="173">Paraguay</option>
                                        <option value="174">Peru</option>
                                        <option value="175">Philippines</option>
                                        <option value="176">Pitcaim</option>
                                        <option value="177">Poland</option>
                                        <option value="178">Portugal</option>
                                        <option value="179">Puerto Rico</option>
                                        <option value="180">Qatar</option>
                                        <option value="181">Reunion</option>
                                        <option value="182">Roman</option>
                                        <option value="183">Russia</option>
                                        <option value="184">Rwanda</option>
                                        <option value="185">Saint Barthelemy</option>
                                        <option value="186">Saint Helena</option>
                                        <option value="187">Saint Kitts</option>
                                        <option value="188">Saint Lucia</option>
                                        <option value="189">Saint Martin</option>
                                        <option value="190">Saint Pierre</option>
                                        <option value="191">Saint Vincent</option>
                                        <option value="192">Samoa</option>
                                        <option value="193">Saint Marino</option>
                                        <option value="194">Sao Tome</option>
                                        <option value="195">Saudia Arabia</option>
                                        <option value="196">Senegal</option>
                                        <option value="197">Serbia</option>
                                        <option value="198">Seychelles</option>
                                        <option value="199">Sierra Leone</option>
                                        <option value="200">Singapore</option>
                                        <option value="201">Sint Martin</option>
                                        <option value="202">Slovekia</option>
                                        <option value="203">Slovenia</option>
                                        <option value="204">Solomon Islands</option>
                                        <option value="205">Somalia</option>
                                        <option value="206">South Africa</option>
                                        <option value="207">South Georgia</option>
                                        <option value="208">South Sudan</option>
                                        <option value="209">SPain</option>
                                        <option value="210">Srilanka</option>
                                        <option value="211">Sudan</option>
                                        <option value="212">Suriname</option>
                                        <option value="213">Svalbard</option>
                                        <option value="214">Sweden</option>
                                        <option value="215">Switxerland</option>
                                        <option value="216">Syria</option>
                                        <option value="217">Taiwan</option>
                                        <option value="218">Tajikistan</option>
                                        <option value="219">Tanzania</option>
                                        <option value="220">Thailand</option>
                                        <option value="221">Timor Leste</option>
                                        <option value="222">Togo</option>
                                        <option value="223">Tokelau</option>
                                        <option value="224">Tonga</option>
                                        <option value="225">Trinidad</option>
                                        <option value="226">Tunisia</option>
                                        <option value="227">Turkey</option>
                                        <option value="228">Turkmenistan</option>
                                        <option value="229">Turks</option>
                                        <option value="230">Tuvalu</option>
                                        <option value="231">Uganda</option>
                                        <option value="232">Ukraine</option>
                                        <option value="233">United Arab Emirates</option>
                                        <option value="224">United Kingdom</option>
                                        <option value="225">United States Minor</option>
                                        <option value="226">United States of America</option>
                                        <option value="227">Uruguay</option>
                                        <option value="228">Uzbekistan</option>
                                        <option value="229">Vanuatu</option>
                                        <option value="230">Venezuela</option>
                                        <option value="231">Vietnam</option>
                                        <option value="232">Virgin Islands(British)</option>
                                        <option value="233">Virgin Islands(US)</option>
                                        <option value="234">Wallis and Fatuna</option>
                                        <option value="235">West Bank</option>
                                        <option value="236">Western Sahara</option>
                                        <option value="237">Yemen</option>
                                        <option value="238">Zambia</option>
                                        <option value="239">Zimbabwe</option>

                                    </select> 
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-1">
                                    {(() => { 
                                    
                                    if(FormData['RF_Residence_Country']===1 || FormData['RF_Residence_Country']===2 || FormData['RF_Residence_Country']===3 || FormData['RF_Residence_Country']===4 || FormData['RF_Residence_Country']===6 || FormData['RF_Residence_Country']===8 || FormData['RF_Residence_Country']===10 || FormData['RF_Residence_Country']===13 || FormData['RF_Residence_Country']===16 || FormData['RF_Residence_Country']===17 || FormData['RF_Residence_Country']===19 || FormData['RF_Residence_Country']===20 || FormData['RF_Residence_Country']===24 || FormData['RF_Residence_Country']===27
                                        || FormData['RF_Residence_Country']===28 || FormData['RF_Residence_Country']===29 || FormData['RF_Residence_Country']===31 || FormData['RF_Residence_Country']===32 || FormData['RF_Residence_Country']===33 || FormData['RF_Residence_Country']===36 || FormData['RF_Residence_Country']===37 || FormData['RF_Residence_Country']===39 || FormData['RF_Residence_Country']===41 || FormData['RF_Residence_Country']===42 || FormData['RF_Residence_Country']===43 || FormData['RF_Residence_Country']===46 || FormData['RF_Residence_Country']===47 || FormData['RF_Residence_Country']===48 || FormData['RF_Residence_Country']===49 || FormData['RF_Residence_Country']===50 || FormData['RF_Residence_Country']===51 || FormData['RF_Residence_Country']===52 || FormData['RF_Residence_Country']===53
                                        || FormData['RF_Residence_Country']===55 || FormData['RF_Residence_Country']===58 || FormData['RF_Residence_Country']===62 || FormData['RF_Residence_Country']===64 || FormData['RF_Residence_Country']===65 || FormData['RF_Residence_Country']===66 || FormData['RF_Residence_Country']===67 || FormData['RF_Residence_Country']===68 || FormData['RF_Residence_Country']===69 || FormData['RF_Residence_Country']===71 || FormData['RF_Residence_Country']===72 || FormData['RF_Residence_Country']===73 || FormData['RF_Residence_Country']===74
                                        || FormData['RF_Residence_Country']===82 || FormData['RF_Residence_Country']===85 || FormData['RF_Residence_Country']===86 || FormData['RF_Residence_Country']===90 || FormData['RF_Residence_Country']===91 || FormData['RF_Residence_Country']===92 || FormData['RF_Residence_Country']===93
                                        || FormData['RF_Residence_Country']===94 || FormData['RF_Residence_Country']===95 || FormData['RF_Residence_Country']===97 || FormData['RF_Residence_Country']===98 || FormData['RF_Residence_Country']===99 || FormData['RF_Residence_Country']===100 || FormData['RF_Residence_Country']===103 
                                        
                                        || FormData['RF_Residence_Country']===109 || FormData['RF_Residence_Country']===112  || FormData['RF_Residence_Country']===115 || FormData['RF_Residence_Country']===116 || FormData['RF_Residence_Country']===117 || FormData['RF_Residence_Country']===121 || FormData['RF_Residence_Country']===123  || FormData['RF_Residence_Country']===124
                                        || FormData['RF_Residence_Country']===126 || FormData['RF_Residence_Country']===127  || FormData['RF_Residence_Country']===128 || FormData['RF_Residence_Country']===129 || FormData['RF_Residence_Country']===134 || FormData['RF_Residence_Country']===135 || FormData['RF_Residence_Country']===136
                                        || FormData['RF_Residence_Country']===139 || FormData['RF_Residence_Country']===143  || FormData['RF_Residence_Country']===145 || FormData['RF_Residence_Country']===146 || FormData['RF_Residence_Country']===148 || FormData['RF_Residence_Country']===150 || FormData['RF_Residence_Country']===151
                                        || FormData['RF_Residence_Country']===152 || FormData['RF_Residence_Country']===153 || FormData['RF_Residence_Country']===154 || FormData['RF_Residence_Country']===155 || FormData['RF_Residence_Country']===158 || FormData['RF_Residence_Country']===160 || FormData['RF_Residence_Country']===162 
                                        || FormData['RF_Residence_Country']===163 || FormData['RF_Residence_Country']===164 || FormData['RF_Residence_Country']===165 || FormData['RF_Residence_Country']===166 || FormData['RF_Residence_Country']===168 || FormData['RF_Residence_Country']===170 || FormData['RF_Residence_Country']===172 || FormData['RF_Residence_Country']===173 || FormData['RF_Residence_Country']===174 || FormData['RF_Residence_Country']===175 || FormData['RF_Residence_Country']===176 || FormData['RF_Residence_Country']===177
                                        || FormData['RF_Residence_Country']===186 || FormData['RF_Residence_Country']===187 || FormData['RF_Residence_Country']===188 || FormData['RF_Residence_Country']===190 || FormData['RF_Residence_Country']===191 || FormData['RF_Residence_Country']===193 || FormData['RF_Residence_Country']===195
                                        || FormData['RF_Residence_Country']===197 || FormData['RF_Residence_Country']===198 || FormData['RF_Residence_Country']===200 || FormData['RF_Residence_Country']===202 || FormData['RF_Residence_Country']===203 || FormData['RF_Residence_Country']===206 || FormData['RF_Residence_Country']===208 || FormData['RF_Residence_Country']===209
                                        || FormData['RF_Residence_Country']===211 || FormData['RF_Residence_Country']===212 || FormData['RF_Residence_Country']===213 || FormData['RF_Residence_Country']===214 || FormData['RF_Residence_Country']===219 || FormData['RF_Residence_Country']===220 || FormData['RF_Residence_Country']===221 || FormData['RF_Residence_Country']===222 || FormData['RF_Residence_Country']===223 || FormData['RF_Residence_Country']===224
                                        || FormData['RF_Residence_Country']===226 || FormData['RF_Residence_Country']===230 || FormData['RF_Residence_Country']===232 || FormData['RF_Residence_Country']===233 || FormData['RF_Residence_Country']===236 || FormData['RF_Residence_Country']===237 || FormData['RF_Residence_Country']===238 || FormData['RF_Residence_Country']===239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Residence_Country']===5 || FormData['RF_Residence_Country']===7 || FormData['RF_Residence_Country']===9 || FormData['RF_Residence_Country']===12 || FormData['RF_Residence_Country']===25 || FormData['RF_Residence_Country']===34 || FormData['RF_Residence_Country']===35 || FormData['RF_Residence_Country']===61 || FormData['RF_Residence_Country']===76 || FormData['RF_Residence_Country']===84 || FormData['RF_Residence_Country']===88
                                        
                                        || FormData['RF_Residence_Country']===114 || FormData['RF_Residence_Country']===130 || FormData['RF_Residence_Country']===132 || FormData['RF_Residence_Country']===142 || FormData['RF_Residence_Country']===149 || FormData['RF_Residence_Country']===159 || FormData['RF_Residence_Country']===161 
                                        || FormData['RF_Residence_Country']===167 || FormData['RF_Residence_Country']===194 || FormData['RF_Residence_Country']===215 || FormData['RF_Residence_Country']===216 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">1</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Residence_Country']===11 || FormData['RF_Residence_Country']===14 || FormData['RF_Residence_Country']===15 || FormData['RF_Residence_Country']===18 || FormData['RF_Residence_Country']===22 || FormData['RF_Residence_Country']===23 || FormData['RF_Residence_Country']===26 || FormData['RF_Residence_Country']===30 || FormData['RF_Residence_Country']===38 || FormData['RF_Residence_Country']===40 || FormData['RF_Residence_Country']===44 || FormData['RF_Residence_Country']===45
                                        || FormData['RF_Residence_Country']===54 || FormData['RF_Residence_Country']===56 || FormData['RF_Residence_Country']===59 || FormData['RF_Residence_Country']===60 || FormData['RF_Residence_Country']===63 || FormData['RF_Residence_Country']===70 || FormData['RF_Residence_Country']===75 || FormData['RF_Residence_Country']===77 || FormData['RF_Residence_Country']===78 || FormData['RF_Residence_Country']===79 || FormData['RF_Residence_Country']===80 || FormData['RF_Residence_Country']===81
                                        || FormData['RF_Residence_Country']===83 || FormData['RF_Residence_Country']===87 || FormData['RF_Residence_Country']===89 || FormData['RF_Residence_Country']===96 || FormData['RF_Residence_Country']===101 || FormData['RF_Residence_Country']===104 || FormData['RF_Residence_Country']===105
                                        
                                        || FormData['RF_Residence_Country']===108 || FormData['RF_Residence_Country']===110 || FormData['RF_Residence_Country']===111 || FormData['RF_Residence_Country']===113 || FormData['RF_Residence_Country']===118 || FormData['RF_Residence_Country']===120 || FormData['RF_Residence_Country']===125
                                        || FormData['RF_Residence_Country']===131 || FormData['RF_Residence_Country']===133 || FormData['RF_Residence_Country']===137 || FormData['RF_Residence_Country']===138 || FormData['RF_Residence_Country']===140 || FormData['RF_Residence_Country']===141
                                        || FormData['RF_Residence_Country']===144 || FormData['RF_Residence_Country']===147 || FormData['RF_Residence_Country']===156 || FormData['RF_Residence_Country']===157 || FormData['RF_Residence_Country']===169 || FormData['RF_Residence_Country']===171 || FormData['RF_Residence_Country']===178 || FormData['RF_Residence_Country']===179 || FormData['RF_Residence_Country']===180 || FormData['RF_Residence_Country']===181 || FormData['RF_Residence_Country']===182 || FormData['RF_Residence_Country']===183
                                        || FormData['RF_Residence_Country']===185 || FormData['RF_Residence_Country']===189 || FormData['RF_Residence_Country']===192 || FormData['RF_Residence_Country']===196 || FormData['RF_Residence_Country']===199 || FormData['RF_Residence_Country']===201 || FormData['RF_Residence_Country']===204 || FormData['RF_Residence_Country']===205
                                        || FormData['RF_Residence_Country']===207 || FormData['RF_Residence_Country']===210 || FormData['RF_Residence_Country']===218 || FormData['RF_Residence_Country']===225 || FormData['RF_Residence_Country']===231 || FormData['RF_Residence_Country']===234 || FormData['RF_Residence_Country']===235 || FormData['RF_Residence_Country']===237 || FormData['RF_Residence_Country']===238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">2</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Residence_Country']===21 || FormData['RF_Residence_Country']===57 || FormData['RF_Residence_Country']===106 || FormData['RF_Residence_Country']===107 || FormData['RF_Residence_Country']===119 || FormData['RF_Residence_Country']===187 || FormData['RF_Residence_Country']===217 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">4</label>
                                            
                                        </>);
                                    }
            
                                    })()}
                                </div>

                                <div className="col-1">
                                                                
                                    <label className="col-form-label">3</label>
                                                     
                                </div>

                                <div className="col-1">
                                    {(() => { 
                                    
                                    if(FormData['RF_Residence_Country']===1 || FormData['RF_Residence_Country']===2 || FormData['RF_Residence_Country']===3 || FormData['RF_Residence_Country']===4 || FormData['RF_Residence_Country']===6 || FormData['RF_Residence_Country']===8 || FormData['RF_Residence_Country']===10 || FormData['RF_Residence_Country']===13 || FormData['RF_Residence_Country']===16 || FormData['RF_Residence_Country']===17 || FormData['RF_Residence_Country']===19 || FormData['RF_Residence_Country']===20 || FormData['RF_Residence_Country']===24
                                        || FormData['RF_Residence_Country']===27 || FormData['RF_Residence_Country']===28 || FormData['RF_Residence_Country']===29 || FormData['RF_Residence_Country']===30 || FormData['RF_Residence_Country']===31 || FormData['RF_Residence_Country']===32 || FormData['RF_Residence_Country']===33 || FormData['RF_Residence_Country']===36 || FormData['RF_Residence_Country']===37 || FormData['RF_Residence_Country']===39 || FormData['RF_Residence_Country']===41 || FormData['RF_Residence_Country']===42 || FormData['RF_Residence_Country']===43
                                        || FormData['RF_Residence_Country']===46 || FormData['RF_Residence_Country']===47 || FormData['RF_Residence_Country']===48 || FormData['RF_Residence_Country']===49 || FormData['RF_Residence_Country']===50 || FormData['RF_Residence_Country']===51 || FormData['RF_Residence_Country']===52 || FormData['RF_Residence_Country']===53 || FormData['RF_Residence_Country']===55 || FormData['RF_Residence_Country']===58 || FormData['RF_Residence_Country']===62 || FormData['RF_Residence_Country']===64 || FormData['RF_Residence_Country']===65 || FormData['RF_Residence_Country']===66 
                                        || FormData['RF_Residence_Country']===67 || FormData['RF_Residence_Country']===68 || FormData['RF_Residence_Country']===69 || FormData['RF_Residence_Country']===70 || FormData['RF_Residence_Country']===71 || FormData['RF_Residence_Country']===72 || FormData['RF_Residence_Country']===73 || FormData['RF_Residence_Country']===74 || FormData['RF_Residence_Country']===82 || FormData['RF_Residence_Country']===85 || FormData['RF_Residence_Country']===86 || FormData['RF_Residence_Country']===90 || FormData['RF_Residence_Country']===91 || FormData['RF_Residence_Country']===92 || FormData['RF_Residence_Country']===93
                                        || FormData['RF_Residence_Country']===94 || FormData['RF_Residence_Country']===95 || FormData['RF_Residence_Country']===96 || FormData['RF_Residence_Country']===97 || FormData['RF_Residence_Country']===98 || FormData['RF_Residence_Country']===99 || FormData['RF_Residence_Country']===100 || FormData['RF_Residence_Country']===102 || FormData['RF_Residence_Country']===103
                                        
                                        || FormData['RF_Residence_Country']===109 || FormData['RF_Residence_Country']===112 || FormData['RF_Residence_Country']===115 || FormData['RF_Residence_Country']===116 || FormData['RF_Residence_Country']===117 || FormData['RF_Residence_Country']===121 || FormData['RF_Residence_Country']===123 || FormData['RF_Residence_Country']===124
                                        || FormData['RF_Residence_Country']===126 || FormData['RF_Residence_Country']===127 || FormData['RF_Residence_Country']===128 || FormData['RF_Residence_Country']===129 || FormData['RF_Residence_Country']===134 || FormData['RF_Residence_Country']===135 || FormData['RF_Residence_Country']===136
                                        || FormData['RF_Residence_Country']===139 || FormData['RF_Residence_Country']===143 || FormData['RF_Residence_Country']===145 || FormData['RF_Residence_Country']===146 || FormData['RF_Residence_Country']===148 || FormData['RF_Residence_Country']===150 || FormData['RF_Residence_Country']===151
                                        || FormData['RF_Residence_Country']===152 || FormData['RF_Residence_Country']===153 || FormData['RF_Residence_Country']===154 || FormData['RF_Residence_Country']===155 || FormData['RF_Residence_Country']===158 || FormData['RF_Residence_Country']===160 || FormData['RF_Residence_Country']===162 
                                        || FormData['RF_Residence_Country']===163 || FormData['RF_Residence_Country']===164 || FormData['RF_Residence_Country']===165 || FormData['RF_Residence_Country']===166 || FormData['RF_Residence_Country']===168 || FormData['RF_Residence_Country']===170 || FormData['RF_Residence_Country']===172 || FormData['RF_Residence_Country']===173 || FormData['RF_Residence_Country']===174 || FormData['RF_Residence_Country']===175 || FormData['RF_Residence_Country']===176 || FormData['RF_Residence_Country']===177
                                        || FormData['RF_Residence_Country']===186 || FormData['RF_Residence_Country']===187 || FormData['RF_Residence_Country']===188 || FormData['RF_Residence_Country']===190 || FormData['RF_Residence_Country']===191 || FormData['RF_Residence_Country']===193 || FormData['RF_Residence_Country']===195
                                        || FormData['RF_Residence_Country']===197 || FormData['RF_Residence_Country']===198 || FormData['RF_Residence_Country']===200 || FormData['RF_Residence_Country']===202 || FormData['RF_Residence_Country']===203 || FormData['RF_Residence_Country']===206 || FormData['RF_Residence_Country']===208 || FormData['RF_Residence_Country']===209
                                        || FormData['RF_Residence_Country']===211 || FormData['RF_Residence_Country']===212 || FormData['RF_Residence_Country']===213 || FormData['RF_Residence_Country']===214 || FormData['RF_Residence_Country']===219 || FormData['RF_Residence_Country']===220 || FormData['RF_Residence_Country']===221 || FormData['RF_Residence_Country']===222 || FormData['RF_Residence_Country']===223 || FormData['RF_Residence_Country']===224
                                        || FormData['RF_Residence_Country']===226 || FormData['RF_Residence_Country']===230 || FormData['RF_Residence_Country']===232 || FormData['RF_Residence_Country']===233 || FormData['RF_Residence_Country']===236 || FormData['RF_Residence_Country']===237 || FormData['RF_Residence_Country']===238 || FormData['RF_Residence_Country']===239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">9</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Residence_Country']===5 || FormData['RF_Residence_Country']===7 || FormData['RF_Residence_Country']===9 || FormData['RF_Residence_Country']===12 || FormData['RF_Residence_Country']===25 || FormData['RF_Residence_Country']===34 || FormData['RF_Residence_Country']===35 || FormData['RF_Residence_Country']===61 || FormData['RF_Residence_Country']===76 || FormData['RF_Residence_Country']===84|| FormData['RF_Residence_Country']===88
                                        
                                        || FormData['RF_Residence_Country']===114 || FormData['RF_Residence_Country']===130 || FormData['RF_Residence_Country']===132 || FormData['RF_Residence_Country']===142 || FormData['RF_Residence_Country']===149 || FormData['RF_Residence_Country']===159 || FormData['RF_Residence_Country']===161 
                                        || FormData['RF_Residence_Country']===167 || FormData['RF_Residence_Country']===194 || FormData['RF_Residence_Country']===215 || FormData['RF_Residence_Country']===216)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Residence_Country']===11 || FormData['RF_Residence_Country']===14 || FormData['RF_Residence_Country']===15 || FormData['RF_Residence_Country']===18 || FormData['RF_Residence_Country']===22 || FormData['RF_Residence_Country']===23 || FormData['RF_Residence_Country']===26 || FormData['RF_Residence_Country']===30 || FormData['RF_Residence_Country']===38 || FormData['RF_Residence_Country']===40
                                        || FormData['RF_Residence_Country']===44 || FormData['RF_Residence_Country']===45 || FormData['RF_Residence_Country']===54 || FormData['RF_Residence_Country']===56 || FormData['RF_Residence_Country']===59 || FormData['RF_Residence_Country']===60 || FormData['RF_Residence_Country']===63 || FormData['RF_Residence_Country']===70 || FormData['RF_Residence_Country']===75 || FormData['RF_Residence_Country']===77 
                                        || FormData['RF_Residence_Country']===78 || FormData['RF_Residence_Country']===79 || FormData['RF_Residence_Country']===80 || FormData['RF_Residence_Country']===81 || FormData['RF_Residence_Country']===83 || FormData['RF_Residence_Country']===87 || FormData['RF_Residence_Country']===89 || FormData['RF_Residence_Country']===96 || FormData['RF_Residence_Country']===97 || FormData['RF_Residence_Country']===98 
                                        || FormData['RF_Residence_Country']===99 || FormData['RF_Residence_Country']===100 || FormData['RF_Residence_Country']===101 || FormData['RF_Residence_Country']===102 || FormData['RF_Residence_Country']===104 || FormData['RF_Residence_Country']===105
                                        
                                        || FormData['RF_Residence_Country']===108 || FormData['RF_Residence_Country']===110 || FormData['RF_Residence_Country']===111 || FormData['RF_Residence_Country']===113 || FormData['RF_Residence_Country']===118 || FormData['RF_Residence_Country']===120 || FormData['RF_Residence_Country']===125
                                        || FormData['RF_Residence_Country']===131 || FormData['RF_Residence_Country']===133 || FormData['RF_Residence_Country']===137 || FormData['RF_Residence_Country']===138 || FormData['RF_Residence_Country']===140 || FormData['RF_Residence_Country']===141
                                        || FormData['RF_Residence_Country']===144 || FormData['RF_Residence_Country']===147 || FormData['RF_Residence_Country']===156 || FormData['RF_Residence_Country']===157 || FormData['RF_Residence_Country']===169 || FormData['RF_Residence_Country']===171 || FormData['RF_Residence_Country']===178 || FormData['RF_Residence_Country']===179 || FormData['RF_Residence_Country']===180 || FormData['RF_Residence_Country']===181 || FormData['RF_Residence_Country']===182 || FormData['RF_Residence_Country']===183
                                        || FormData['RF_Residence_Country']===185 || FormData['RF_Residence_Country']===189 || FormData['RF_Residence_Country']===192 || FormData['RF_Residence_Country']===196 || FormData['RF_Residence_Country']===199 || FormData['RF_Residence_Country']===201 || FormData['RF_Residence_Country']===204 || FormData['RF_Residence_Country']===205
                                        || FormData['RF_Residence_Country']===207 || FormData['RF_Residence_Country']===210 || FormData['RF_Residence_Country']===218 || FormData['RF_Residence_Country']===225 || FormData['RF_Residence_Country']===231 || FormData['RF_Residence_Country']===234 || FormData['RF_Residence_Country']===235 || FormData['RF_Residence_Country']===237 || FormData['RF_Residence_Country']===238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">6</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Residence_Country']===21 || FormData['RF_Residence_Country']===57 || FormData['RF_Residence_Country']===106 || FormData['RF_Residence_Country']===107 || FormData['RF_Residence_Country']===119 || FormData['RF_Residence_Country']===187 || FormData['RF_Residence_Country']===217)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">12</label>
                                            
                                        </>);
                                    }

                                    
            
            
                                    })()}
                                </div>

                                <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nationality</label>
                                 </div>

                                 <div className="col-2">
                                    <select disabled className="text-start form-select" name='RF_Nationality1' id='RF_Nationality1' value={FormData['RF_Nationality1']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                        <option value="0" selected></option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">American Samoa</option>
                                        <option value="5">Andora</option>
                                        <option value="6">Angola</option>
                                        <option value="7">Anguilla</option>
                                        <option value="8">Antarctica</option>
                                        <option value="9">Antigua and Barbuda</option>
                                        <option value="10">Argentina</option>
                                        <option value="11">Armania</option>
                                        <option value="12">Aruba</option>
                                        <option value="13">Auckland Islands</option>
                                        <option value="14">Australia</option>
                                        <option value="15">Austria</option>
                                        <option value="16">Azerbaijan</option>
                                        <option value="17">Bahamas</option>
                                        <option value="18">Bahrain</option>
                                        <option value="19">Bangladesh</option>
                                        <option value="20">Barbados</option>
                                        <option value="21">Belarus</option>
                                        <option value="22">Belgium</option>
                                        <option value="23">Belize</option>
                                        <option value="24">Benin</option>
                                        <option value="25">Bermuda</option>
                                        <option value="26">Bhutan</option>
                                        <option value="27">Bolivia</option>
                                        <option value="28">Bonaire</option>
                                        <option value="29">Bosnia</option>
                                        <option value="30">Botswana</option>
                                        <option value="31">Bouvet Islands</option>
                                        <option value="32">Brazil</option>
                                        <option value="33">British Indian Ocean Teritory</option>
                                        <option value="34">Brunei Darussalam</option>
                                        <option value="35">Bulgaria</option>
                                        <option value="36">Burkina Faso</option>
                                        <option value="37">Burundi</option>
                                        <option value="38">Cabo Verde</option>
                                        <option value="39">Cambodia</option>
                                        <option value="40">Cameroon</option>
                                        <option value="41">Canada</option>
                                        <option value="42">Cayman Islands</option>
                                        <option value="43">Central African Republic</option>
                                        <option value="44">Chad</option>
                                        <option value="45">Chile</option>
                                        <option value="46">China</option>
                                        <option value="47">Christmas Island</option>
                                        <option value="48">Cocos</option>
                                        <option value="49">Colombia</option>
                                        <option value="50">Comoros</option>
                                        <option value="51">Congo Democratic</option>
                                        <option value="52">Congo Republic</option>
                                        <option value="53">Cook Islands</option>
                                        <option value="54">Costa Rica</option>
                                        <option value="55">Ivory Cost</option>
                                        <option value="56">Croatia</option>
                                        <option value="57">Cuba</option>
                                        <option value="58">Curacao</option>
                                        <option value="59">Cyprus</option>
                                        <option value="60">Czech Republic</option>
                                        <option value="61">Denmark</option>
                                        <option value="62">Djibouti</option>
                                        <option value="63">Dominica</option>
                                        <option value="64">Dominican Republic</option>
                                        <option value="65">Ecuador</option>
                                        <option value="66">Egypt</option>
                                        <option value="67">EI Salvador</option>
                                        <option value="68">Equatorial Guinea</option>
                                        <option value="69">Eritrea</option>
                                        <option value="70">Estonia</option>
                                        <option value="71">eSwaitini</option>
                                        <option value="72">Ethiopia</option>
                                        <option value="73">Falkland Islands</option>
                                        <option value="74">Faroe Islands</option>
                                        <option value="75">Fiji</option>
                                        <option value="76">Finland</option>
                                        <option value="77">France</option>
                                        <option value="78">French Guiana</option>
                                        <option value="79">French Polynesia</option>
                                        <option value="80">French Southern Territories</option>
                                        <option value="81">Gabon</option>
                                        <option value="82">Gambia</option>
                                        <option value="83">Georgia</option>
                                        <option value="84">Germany</option>
                                        <option value="85">Ghana</option>
                                        <option value="86">Gibralter</option>
                                        <option value="87">Greece</option>
                                        <option value="88">Greenland</option>
                                        <option value="89">Grenada</option>
                                        <option value="90">Guadeloupe</option>
                                        <option value="91">Guam</option>
                                        <option value="92">Guatemala</option>
                                        <option value="93">Guernsey</option>
                                        <option value="94">Guinea</option>
                                        <option value="95">Guinea Bissau</option>
                                        <option value="96">Guyana</option>
                                        <option value="97">Haiti</option>
                                        <option value="98">Herd Island</option>
                                        <option value="99">Holy See</option>
                                        <option value="100">Honduras</option>
                                        <option value="101">Hongkong</option>
                                        <option value="102">Hungary</option>
                                        <option value="103">Iceland</option>
                                        <option value="104">India</option>
                                        <option value="105">Indonessia</option>
                                        <option value="106">Iran</option>
                                        <option value="107">Iraq</option>
                                        <option value="108">Ireland</option>
                                        <option value="109">Isle of man</option>
                                        <option value="110">Israel</option>
                                        <option value="111">Italy</option>
                                        <option value="112">Jamaica</option>
                                        <option value="113">Japan</option>
                                        <option value="114">Jersey</option>
                                        <option value="115">Jordan</option>
                                        <option value="116">Kazakhstan</option>
                                        <option value="117">Kenya</option>
                                        <option value="118">Kiribati</option>
                                        <option value="119">Korea North</option>
                                        <option value="120">Korea South</option>
                                        <option value="121">Kosovo</option>
                                        <option value="122">Kuwait</option>
                                        <option value="123">Kyrgyzstan</option>
                                        <option value="124">Laos</option>
                                        <option value="125">Latvia</option>
                                        <option value="126">Lebanon</option>
                                        <option value="127">Lesotho</option>
                                        <option value="128">Liberia</option>
                                        <option value="129">Libya</option>
                                        <option value="130">Liechtenstein</option>
                                        <option value="131">Lithuania</option>
                                        <option value="132">Luxembourg</option>
                                        <option value="133">Macao</option>
                                        <option value="134">Macedonia</option>
                                        <option value="135">Madagascar</option>
                                        <option value="136">Malawi</option>
                                        <option value="137">Malaysia</option>
                                        <option value="138">Maldives</option>
                                        <option value="139">Mali</option>
                                        <option value="140">Malta</option>
                                        <option value="141">Marshall Islands</option>
                                        <option value="142">Martinique</option>
                                        <option value="143">Mauritania</option>
                                        <option value="144">Mauritius</option>
                                        <option value="145">Mayotte</option>
                                        <option value="146">Mexico</option>
                                        <option value="147">Micronessia</option>
                                        <option value="148">Moldova</option>
                                        <option value="149">Monaco</option>
                                        <option value="150">Mongolia</option>
                                        <option value="151">Montenegro</option>
                                        <option value="152">Montserrat</option>
                                        <option value="153">Morocco</option>
                                        <option value="154">Mozambique</option>
                                        <option value="155">Mynamar</option>
                                        <option value="156">Namabia</option>
                                        <option value="157">Nauru</option>
                                        <option value="158">Nepal</option>
                                        <option value="159">Netherlands</option>
                                        <option value="160">New Celedonia</option>
                                        <option value="161">Newzealand</option>
                                        <option value="162">Niger</option>
                                        <option value="163">Nigeria</option>
                                        <option value="164">Norfolk Island</option>
                                        <option value="165">Nothern Mariana Islands</option>
                                        <option value="166">Norway</option>
                                        <option value="167">Nuie</option>
                                        <option value="168">Oman</option>
                                        <option value="169">Pakistan</option>
                                        <option value="170">Palau</option>
                                        <option value="171">Panama</option>
                                        <option value="172">Papua New Guinea</option>
                                        <option value="173">Paraguay</option>
                                        <option value="174">Peru</option>
                                        <option value="175">Philippines</option>
                                        <option value="176">Pitcaim</option>
                                        <option value="177">Poland</option>
                                        <option value="178">Portugal</option>
                                        <option value="179">Puerto Rico</option>
                                        <option value="180">Qatar</option>
                                        <option value="181">Reunion</option>
                                        <option value="182">Roman</option>
                                        <option value="183">Russia</option>
                                        <option value="184">Rwanda</option>
                                        <option value="185">Saint Barthelemy</option>
                                        <option value="186">Saint Helena</option>
                                        <option value="187">Saint Kitts</option>
                                        <option value="188">Saint Lucia</option>
                                        <option value="189">Saint Martin</option>
                                        <option value="190">Saint Pierre</option>
                                        <option value="191">Saint Vincent</option>
                                        <option value="192">Samoa</option>
                                        <option value="193">Saint Marino</option>
                                        <option value="194">Sao Tome</option>
                                        <option value="195">Saudia Arabia</option>
                                        <option value="196">Senegal</option>
                                        <option value="197">Serbia</option>
                                        <option value="198">Seychelles</option>
                                        <option value="199">Sierra Leone</option>
                                        <option value="200">Singapore</option>
                                        <option value="201">Sint Martin</option>
                                        <option value="202">Slovekia</option>
                                        <option value="203">Slovenia</option>
                                        <option value="204">Solomon Islands</option>
                                        <option value="205">Somalia</option>
                                        <option value="206">South Africa</option>
                                        <option value="207">South Georgia</option>
                                        <option value="208">South Sudan</option>
                                        <option value="209">SPain</option>
                                        <option value="210">Srilanka</option>
                                        <option value="211">Sudan</option>
                                        <option value="212">Suriname</option>
                                        <option value="213">Svalbard</option>
                                        <option value="214">Sweden</option>
                                        <option value="215">Switxerland</option>
                                        <option value="216">Syria</option>
                                        <option value="217">Taiwan</option>
                                        <option value="218">Tajikistan</option>
                                        <option value="219">Tanzania</option>
                                        <option value="220">Thailand</option>
                                        <option value="221">Timor Leste</option>
                                        <option value="222">Togo</option>
                                        <option value="223">Tokelau</option>
                                        <option value="224">Tonga</option>
                                        <option value="225">Trinidad</option>
                                        <option value="226">Tunisia</option>
                                        <option value="227">Turkey</option>
                                        <option value="228">Turkmenistan</option>
                                        <option value="229">Turks</option>
                                        <option value="230">Tuvalu</option>
                                        <option value="231">Uganda</option>
                                        <option value="232">Ukraine</option>
                                        <option value="233">United Arab Emirates</option>
                                        <option value="224">United Kingdom</option>
                                        <option value="225">United States Minor</option>
                                        <option value="226">United States of America</option>
                                        <option value="227">Uruguay</option>
                                        <option value="228">Uzbekistan</option>
                                        <option value="229">Vanuatu</option>
                                        <option value="230">Venezuela</option>
                                        <option value="231">Vietnam</option>
                                        <option value="232">Virgin Islands(British)</option>
                                        <option value="233">Virgin Islands(US)</option>
                                        <option value="234">Wallis and Fatuna</option>
                                        <option value="235">West Bank</option>
                                        <option value="236">Western Sahara</option>
                                        <option value="237">Yemen</option>
                                        <option value="238">Zambia</option>
                                        <option value="239">Zimbabwe</option>

                                    </select> 
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-2">
                                    <label className="col-form-label"></label>
                                </div>

                                <div className="col-1">
                                    {(() => { 
                                    
                                    if(FormData['RF_Nationality1']===1 || FormData['RF_Nationality1']===2 || FormData['RF_Nationality1']===3 || FormData['RF_Nationality1']===4 || FormData['RF_Nationality1']===6 || FormData['RF_Nationality1']===8 || FormData['RF_Nationality1']===10 || FormData['RF_Nationality1']===13 || FormData['RF_Nationality1']===16 || FormData['RF_Nationality1']===17 || FormData['RF_Nationality1']===19 || FormData['RF_Nationality1']===20 || FormData['RF_Nationality1']===24 || FormData['RF_Nationality1']===27
                                        || FormData['RF_Nationality1']===28 || FormData['RF_Nationality1']===29 || FormData['RF_Nationality1']===31 || FormData['RF_Nationality1']===32 || FormData['RF_Nationality1']===33 || FormData['RF_Nationality1']===36 || FormData['RF_Nationality1']===37 || FormData['RF_Nationality1']===39 || FormData['RF_Nationality1']===41 || FormData['RF_Nationality1']===42 || FormData['RF_Nationality1']===43 || FormData['RF_Nationality1']===46 || FormData['RF_Nationality1']===47 || FormData['RF_Nationality1']===48 || FormData['RF_Nationality1']===49 || FormData['RF_Nationality1']===50 || FormData['RF_Nationality1']===51 || FormData['RF_Nationality1']===52 || FormData['RF_Nationality1']===53
                                        || FormData['RF_Nationality1']===55 || FormData['RF_Nationality1']===58 || FormData['RF_Nationality1']===62 || FormData['RF_Nationality1']===64 || FormData['RF_Nationality1']===65 || FormData['RF_Nationality1']===66 || FormData['RF_Nationality1']===67 || FormData['RF_Nationality1']===68 || FormData['RF_Nationality1']===69 || FormData['RF_Nationality1']===71 || FormData['RF_Nationality1']===72 || FormData['RF_Nationality1']===73 || FormData['RF_Nationality1']===74
                                        || FormData['RF_Nationality1']===82 || FormData['RF_Nationality1']===85 || FormData['RF_Nationality1']===86 || FormData['RF_Nationality1']===90 || FormData['RF_Nationality1']===91 || FormData['RF_Nationality1']===92 || FormData['RF_Nationality1']===93
                                        || FormData['RF_Nationality1']===94 || FormData['RF_Nationality1']===95 || FormData['RF_Nationality1']===97 || FormData['RF_Nationality1']===98 || FormData['RF_Nationality1']===99 || FormData['RF_Nationality1']===100 || FormData['RF_Nationality1']===103 
                                        
                                        || FormData['RF_Nationality1']===109 || FormData['RF_Nationality1']===112  || FormData['RF_Nationality1']===115 || FormData['RF_Nationality1']===116 || FormData['RF_Nationality1']===117 || FormData['RF_Nationality1']===121 || FormData['RF_Nationality1']===123  || FormData['RF_Nationality1']===124
                                        || FormData['RF_Nationality1']===126 || FormData['RF_Nationality1']===127  || FormData['RF_Nationality1']===128 || FormData['RF_Nationality1']===129 || FormData['RF_Nationality1']===134 || FormData['RF_Nationality1']===135 || FormData['RF_Nationality1']===136
                                        || FormData['RF_Nationality1']===139 || FormData['RF_Nationality1']===143  || FormData['RF_Nationality1']===145 || FormData['RF_Nationality1']===146 || FormData['RF_Nationality1']===148 || FormData['RF_Nationality1']===150 || FormData['RF_Nationality1']===151
                                        || FormData['RF_Nationality1']===152 || FormData['RF_Nationality1']===153 || FormData['RF_Nationality1']===154 || FormData['RF_Nationality1']===155 || FormData['RF_Nationality1']===158 || FormData['RF_Nationality1']===160 || FormData['RF_Nationality1']===162 
                                        || FormData['RF_Nationality1']===163 || FormData['RF_Nationality1']===164 || FormData['RF_Nationality1']===165 || FormData['RF_Nationality1']===166 || FormData['RF_Nationality1']===168 || FormData['RF_Nationality1']===170 || FormData['RF_Nationality1']===172 || FormData['RF_Nationality1']===173 || FormData['RF_Nationality1']===174 || FormData['RF_Nationality1']===175 || FormData['RF_Nationality1']===176 || FormData['RF_Nationality1']===177
                                        || FormData['RF_Nationality1']===186 || FormData['RF_Nationality1']===187 || FormData['RF_Nationality1']===188 || FormData['RF_Nationality1']===190 || FormData['RF_Nationality1']===191 || FormData['RF_Nationality1']===193 || FormData['RF_Nationality1']===195
                                        || FormData['RF_Nationality1']===197 || FormData['RF_Nationality1']===198 || FormData['RF_Nationality1']===200 || FormData['RF_Nationality1']===202 || FormData['RF_Nationality1']===203 || FormData['RF_Nationality1']===206 || FormData['RF_Nationality1']===208 || FormData['RF_Nationality1']===209
                                        || FormData['RF_Nationality1']===211 || FormData['RF_Nationality1']===212 || FormData['RF_Nationality1']===213 || FormData['RF_Nationality1']===214 || FormData['RF_Nationality1']===219 || FormData['RF_Nationality1']===220 || FormData['RF_Nationality1']===221 || FormData['RF_Nationality1']===222 || FormData['RF_Nationality1']===223 || FormData['RF_Nationality1']===224
                                        || FormData['RF_Nationality1']===226 || FormData['RF_Nationality1']===230 || FormData['RF_Nationality1']===232 || FormData['RF_Nationality1']===233 || FormData['RF_Nationality1']===236 || FormData['RF_Nationality1']===237 || FormData['RF_Nationality1']===238 || FormData['RF_Nationality1']===239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Nationality1']===5 || FormData['RF_Nationality1']===7 || FormData['RF_Nationality1']===9 || FormData['RF_Nationality1']===12 || FormData['RF_Nationality1']===25 || FormData['RF_Nationality1']===34 || FormData['RF_Nationality1']===35 || FormData['RF_Nationality1']===61 || FormData['RF_Nationality1']===76 || FormData['RF_Nationality1']===84 || FormData['RF_Nationality1']===88
                                        
                                        || FormData['RF_Nationality1']===114 || FormData['RF_Nationality1']===130 || FormData['RF_Nationality1']===132 || FormData['RF_Nationality1']===142 || FormData['RF_Nationality1']===149 || FormData['RF_Nationality1']===159 || FormData['RF_Nationality1']===161 
                                        || FormData['RF_Nationality1']===167 || FormData['RF_Nationality1']===194 || FormData['RF_Nationality1']===215 || FormData['RF_Nationality1']===216 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">1</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Nationality1']===11 || FormData['RF_Nationality1']===14 || FormData['RF_Nationality1']===15 || FormData['RF_Nationality1']===18 || FormData['RF_Nationality1']===22 || FormData['RF_Nationality1']===23 || FormData['RF_Nationality1']===26 || FormData['RF_Nationality1']===30 || FormData['RF_Nationality1']===38 || FormData['RF_Nationality1']===40 || FormData['RF_Nationality1']===44 || FormData['RF_Nationality1']===45
                                        || FormData['RF_Nationality1']===54 || FormData['RF_Nationality1']===56 || FormData['RF_Nationality1']===59 || FormData['RF_Nationality1']===60 || FormData['RF_Nationality1']===63 || FormData['RF_Nationality1']===70 || FormData['RF_Nationality1']===75 || FormData['RF_Nationality1']===77 || FormData['RF_Nationality1']===78 || FormData['RF_Nationality1']===79 || FormData['RF_Nationality1']===80 || FormData['RF_Nationality1']===81
                                        || FormData['RF_Nationality1']===83 || FormData['RF_Nationality1']===87 || FormData['RF_Nationality1']===89 || FormData['RF_Nationality1']===96 || FormData['RF_Nationality1']===101 || FormData['RF_Nationality1']===104 || FormData['RF_Nationality1']===105
                                        
                                        || FormData['RF_Nationality1']===108 || FormData['RF_Nationality1']===110 || FormData['RF_Nationality1']===111 || FormData['RF_Nationality1']===113 || FormData['RF_Nationality1']===118 || FormData['RF_Nationality1']===120 || FormData['RF_Nationality1']===125
                                        || FormData['RF_Nationality1']===131 || FormData['RF_Nationality1']===133 || FormData['RF_Nationality1']===137 || FormData['RF_Nationality1']===138 || FormData['RF_Nationality1']===140 || FormData['RF_Nationality1']===141
                                        || FormData['RF_Nationality1']===144 || FormData['RF_Nationality1']===147 || FormData['RF_Nationality1']===156 || FormData['RF_Nationality1']===157 || FormData['RF_Nationality1']===169 || FormData['RF_Nationality1']===171 || FormData['RF_Nationality1']===178 || FormData['RF_Nationality1']===179 || FormData['RF_Nationality1']===180 || FormData['RF_Nationality1']===181 || FormData['RF_Nationality1']===182 || FormData['RF_Nationality1']===183
                                        || FormData['RF_Nationality1']===185 || FormData['RF_Nationality1']===189 || FormData['RF_Nationality1']===192 || FormData['RF_Nationality1']===196 || FormData['RF_Nationality1']===199 || FormData['RF_Nationality1']===201 || FormData['RF_Nationality1']===204 || FormData['RF_Nationality1']===205
                                        || FormData['RF_Nationality1']===207 || FormData['RF_Nationality1']===210 || FormData['RF_Nationality1']===218 || FormData['RF_Nationality1']===225 || FormData['RF_Nationality1']===231 || FormData['RF_Nationality1']===234 || FormData['RF_Nationality1']===235 || FormData['RF_Nationality1']===237 || FormData['RF_Nationality1']===238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">2</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Nationality1']===21 || FormData['RF_Nationality1']===57 || FormData['RF_Nationality1']===106 || FormData['RF_Nationality1']===107 || FormData['RF_Nationality1']===119 || FormData['RF_Nationality1']===187 || FormData['RF_Nationality1']===217 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">4</label>
                                            
                                        </>);
                                    }
            
                                    })()}
                                </div>

                                <div className="col-1">
                                                                
                                    <label className="col-form-label">3</label>
                                                     
                                </div>

                                <div className="col-1">
                                    {(() => { 
                                    
                                    if(FormData['RF_Nationality1']===1 || FormData['RF_Nationality1']===2 || FormData['RF_Nationality1']===3 || FormData['RF_Nationality1']===4 || FormData['RF_Nationality1']===6 || FormData['RF_Nationality1']===8 || FormData['RF_Nationality1']===10 || FormData['RF_Nationality1']===13 || FormData['RF_Nationality1']===16 || FormData['RF_Nationality1']===17 || FormData['RF_Nationality1']===19 || FormData['RF_Nationality1']===20 || FormData['RF_Nationality1']===24
                                        || FormData['RF_Nationality1']===27 || FormData['RF_Nationality1']===28 || FormData['RF_Nationality1']===29 || FormData['RF_Nationality1']===30 || FormData['RF_Nationality1']===31 || FormData['RF_Nationality1']===32 || FormData['RF_Nationality1']===33 || FormData['RF_Nationality1']===36 || FormData['RF_Nationality1']===37 || FormData['RF_Nationality1']===39 || FormData['RF_Nationality1']===41 || FormData['RF_Nationality1']===42 || FormData['RF_Nationality1']===43
                                        || FormData['RF_Nationality1']===46 || FormData['RF_Nationality1']===47 || FormData['RF_Nationality1']===48 || FormData['RF_Nationality1']===49 || FormData['RF_Nationality1']===50 || FormData['RF_Nationality1']===51 || FormData['RF_Nationality1']===52 || FormData['RF_Nationality1']===53 || FormData['RF_Nationality1']===55 || FormData['RF_Nationality1']===58 || FormData['RF_Nationality1']===62 || FormData['RF_Nationality1']===64 || FormData['RF_Nationality1']===65 || FormData['RF_Nationality1']===66 
                                        || FormData['RF_Nationality1']===67 || FormData['RF_Nationality1']===68 || FormData['RF_Nationality1']===69 || FormData['RF_Nationality1']===70 || FormData['RF_Nationality1']===71 || FormData['RF_Nationality1']===72 || FormData['RF_Nationality1']===73 || FormData['RF_Nationality1']===74 || FormData['RF_Nationality1']===82 || FormData['RF_Nationality1']===85 || FormData['RF_Nationality1']===86 || FormData['RF_Nationality1']===90 || FormData['RF_Nationality1']===91 || FormData['RF_Nationality1']===92 || FormData['RF_Nationality1']===93
                                        || FormData['RF_Nationality1']===94 || FormData['RF_Nationality1']===95 || FormData['RF_Nationality1']===96 || FormData['RF_Nationality1']===97 || FormData['RF_Nationality1']===98 || FormData['RF_Nationality1']===99 || FormData['RF_Nationality1']===100 || FormData['RF_Nationality1']===102 || FormData['RF_Nationality1']===103
                                        
                                        || FormData['RF_Nationality1']===109 || FormData['RF_Nationality1']===112 || FormData['RF_Nationality1']===115 || FormData['RF_Nationality1']===116 || FormData['RF_Nationality1']===117 || FormData['RF_Nationality1']===121 || FormData['RF_Nationality1']===123 || FormData['RF_Nationality1']===124
                                        || FormData['RF_Nationality1']===126 || FormData['RF_Nationality1']===127 || FormData['RF_Nationality1']===128 || FormData['RF_Nationality1']===129 || FormData['RF_Nationality1']===134 || FormData['RF_Nationality1']===135 || FormData['RF_Nationality1']===136
                                        || FormData['RF_Nationality1']===139 || FormData['RF_Nationality1']===143 || FormData['RF_Nationality1']===145 || FormData['RF_Nationality1']===146 || FormData['RF_Nationality1']===148 || FormData['RF_Nationality1']===150 || FormData['RF_Nationality1']===151
                                        || FormData['RF_Nationality1']===152 || FormData['RF_Nationality1']===153 || FormData['RF_Nationality1']===154 || FormData['RF_Nationality1']===155 || FormData['RF_Nationality1']===158 || FormData['RF_Nationality1']===160 || FormData['RF_Nationality1']===162 
                                        || FormData['RF_Nationality1']===163 || FormData['RF_Nationality1']===164 || FormData['RF_Nationality1']===165 || FormData['RF_Nationality1']===166 || FormData['RF_Nationality1']===168 || FormData['RF_Nationality1']===170 || FormData['RF_Nationality1']===172 || FormData['RF_Nationality1']===173 || FormData['RF_Nationality1']===174 || FormData['RF_Nationality1']===175 || FormData['RF_Nationality1']===176 || FormData['RF_Nationality1']===177
                                        || FormData['RF_Nationality1']===186 || FormData['RF_Nationality1']===187 || FormData['RF_Nationality1']===188 || FormData['RF_Nationality1']===190 || FormData['RF_Nationality1']===191 || FormData['RF_Nationality1']===193 || FormData['RF_Nationality1']===195
                                        || FormData['RF_Nationality1']===197 || FormData['RF_Nationality1']===198 || FormData['RF_Nationality1']===200 || FormData['RF_Nationality1']===202 || FormData['RF_Nationality1']===203 || FormData['RF_Nationality1']===206 || FormData['RF_Nationality1']===208 || FormData['RF_Nationality1']===209
                                        || FormData['RF_Nationality1']===211 || FormData['RF_Nationality1']===212 || FormData['RF_Nationality1']===213 || FormData['RF_Nationality1']===214 || FormData['RF_Nationality1']===219 || FormData['RF_Nationality1']===220 || FormData['RF_Nationality1']===221 || FormData['RF_Nationality1']===222 || FormData['RF_Nationality1']===223 || FormData['RF_Nationality1']===224
                                        || FormData['RF_Nationality1']===226 || FormData['RF_Nationality1']===230 || FormData['RF_Nationality1']===232 || FormData['RF_Nationality1']===233 || FormData['RF_Nationality1']===236 || FormData['RF_Nationality1']===237 || FormData['RF_Nationality1']===238 || FormData['RF_Nationality1']===239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">9</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Nationality1']===5 || FormData['RF_Nationality1']===7 || FormData['RF_Nationality1']===9 || FormData['RF_Nationality1']===12 || FormData['RF_Nationality1']===25 || FormData['RF_Nationality1']===34 || FormData['RF_Nationality1']===35 || FormData['RF_Nationality1']===61 || FormData['RF_Nationality1']===76 || FormData['RF_Nationality1']===84|| FormData['RF_Nationality1']===88
                                        
                                        || FormData['RF_Nationality1']===114 || FormData['RF_Nationality1']===130 || FormData['RF_Nationality1']===132 || FormData['RF_Nationality1']===142 || FormData['RF_Nationality1']===149 || FormData['RF_Nationality1']===159 || FormData['RF_Nationality1']===161 
                                        || FormData['RF_Nationality1']===167 || FormData['RF_Nationality1']===194 || FormData['RF_Nationality1']===215 || FormData['RF_Nationality1']===216)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Nationality1']===11 || FormData['RF_Nationality1']===14 || FormData['RF_Nationality1']===15 || FormData['RF_Nationality1']===18 || FormData['RF_Nationality1']===22 || FormData['RF_Nationality1']===23 || FormData['RF_Nationality1']===26 || FormData['RF_Nationality1']===30 || FormData['RF_Nationality1']===38 || FormData['RF_Nationality1']===40
                                        || FormData['RF_Nationality1']===44 || FormData['RF_Nationality1']===45 || FormData['RF_Nationality1']===54 || FormData['RF_Nationality1']===56 || FormData['RF_Nationality1']===59 || FormData['RF_Nationality1']===60 || FormData['RF_Nationality1']===63 || FormData['RF_Nationality1']===70 || FormData['RF_Nationality1']===75 || FormData['RF_Nationality1']===77 
                                        || FormData['RF_Nationality1']===78 || FormData['RF_Nationality1']===79 || FormData['RF_Nationality1']===80 || FormData['RF_Nationality1']===81 || FormData['RF_Nationality1']===83 || FormData['RF_Nationality1']===87 || FormData['RF_Nationality1']===89 || FormData['RF_Nationality1']===96 || FormData['RF_Nationality1']===97 || FormData['RF_Nationality1']===98 
                                        || FormData['RF_Nationality1']===99 || FormData['RF_Nationality1']===100 || FormData['RF_Nationality1']===101 || FormData['RF_Nationality1']===102 || FormData['RF_Nationality1']===104 || FormData['RF_Nationality1']===105
                                        
                                        || FormData['RF_Nationality1']===108 || FormData['RF_Nationality1']===110 || FormData['RF_Nationality1']===111 || FormData['RF_Nationality1']===113 || FormData['RF_Nationality1']===118 || FormData['RF_Nationality1']===120 || FormData['RF_Nationality1']===125
                                        || FormData['RF_Nationality1']===131 || FormData['RF_Nationality1']===133 || FormData['RF_Nationality1']===137 || FormData['RF_Nationality1']===138 || FormData['RF_Nationality1']===140 || FormData['RF_Nationality1']===141
                                        || FormData['RF_Nationality1']===144 || FormData['RF_Nationality1']===147 || FormData['RF_Nationality1']===156 || FormData['RF_Nationality1']===157 || FormData['RF_Nationality1']===169 || FormData['RF_Nationality1']===171 || FormData['RF_Nationality1']===178 || FormData['RF_Nationality1']===179 || FormData['RF_Nationality1']===180 || FormData['RF_Nationality1']===181 || FormData['RF_Nationality1']===182 || FormData['RF_Nationality1']===183
                                        || FormData['RF_Nationality1']===185 || FormData['RF_Nationality1']===189 || FormData['RF_Nationality1']===192 || FormData['RF_Nationality1']===196 || FormData['RF_Nationality1']===199 || FormData['RF_Nationality1']===201 || FormData['RF_Nationality1']===204 || FormData['RF_Nationality1']===205
                                        || FormData['RF_Nationality1']===207 || FormData['RF_Nationality1']===210 || FormData['RF_Nationality1']===218 || FormData['RF_Nationality1']===225 || FormData['RF_Nationality1']===231 || FormData['RF_Nationality1']===234 || FormData['RF_Nationality1']===235 || FormData['RF_Nationality1']===237 || FormData['RF_Nationality1']===238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">6</label>
                                            
                                        </>);
                                    }

                                    else if(FormData['RF_Nationality1']===21 || FormData['RF_Nationality1']===57 || FormData['RF_Nationality1']===106 || FormData['RF_Nationality1']===107 || FormData['RF_Nationality1']===119 || FormData['RF_Nationality1']===187 || FormData['RF_Nationality1']===217)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">12</label>
                                            
                                        </>);
                                    }

                                    
            
            
                                    })()}
                                </div>


                            </>);
                        }

                        

                        
                        
                    })()}

            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label"><b>Action:</b></label>
                </div>

                <div className="col-4">
                {(() => { 
                        
                        if(FormData['RF_Client_Match']===1)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Accept with standard controls</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===2)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Conduct Enhanced Due Diligence</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===3 || FormData['RF_Client_Match']===6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Accept with simplified or standard Due Diligence</label>
                                
                            </>);
                        }

                        if(FormData['RF_Client_Match']===4 || FormData['RF_Client_Match']===7)
                        {
                            return (<>
                                
                                    <label className="col-form-label">Accept with standard controls</label>
                                

                            </>);
                        }

                        if(FormData['RF_Client_Match']===5 || FormData['RF_Client_Match']===8 || FormData['RF_Client_Match']===11)
                        {
                            return (<>
                                
                                    <label className="col-form-label">Conduct Enhanced Due Diligence</label>
                                
                            </>);
                        }

                        
                        if(FormData['RF_Client_Match']===9 || FormData['RF_Client_Match']===10)
                        {
                            return (<>
                                
                                    <label className="col-form-label">DO NOT ACCEPT.Follow business rules for Sanctioned Entity.</label>
                                
                            </>);
                        }
 
 
                        
                 })()}
                </div>

            </div>
        </div>
        <hr/>

        <div style={{fontFamily: 'Arial Narrow',fontSize: '9'}}>
            <div className="row">

                <div className="col-2">
                    <label className="col-form-label"><b>Controls:</b></label>
                </div>

                <hr/>
                <div className="col-2">
                    <label className="col-form-label"></label>
                </div>

                <div className="col-1">
                    <label className="col-form-label">Control 1</label>
                </div>

                <div className="col-4">
                    <input disabled  spellCheck="true" id="RF_Control1" name='RF_Control1' className="form-control" value={FormData['RF_Control1']} onChange={(e) => {onChange(e)}} style={{height:"80px"}} placeholder=""  aria-describedby="" />
                 </div>

                 <div className="col-2">
                    <label className="col-form-label">Add another control?</label>
                </div>

                <div className="col-2">
                    <select disabled className="text-start form-select" name='RF_Another_Control1' id='RF_Another_Control1' value={FormData['RF_Another_Control1']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select> 
                </div>

                {(() => { 
                    
                               
                    if(FormData['RF_Another_Control1']===1)
                    {
                        
                        return (<>

                        <hr/>
                        <div className="col-2">
                            <label className="col-form-label"></label>
                        </div>
                   
                        <div className="col-1">
                            <label className="col-form-label">Control 2</label>
                        </div>

                        <div className="col-4">
                            <input disabled  spellCheck="true" id="RF_Control2" name='RF_Control2' className="form-control" style={{height:"80px"}}  value={FormData['RF_Control2']} onChange={(e) => {onChange(e)}} placeholder=""  aria-describedby="" />
                        </div>

                        <div className="col-2">
                            <label className="col-form-label">Add another control?</label>
                        </div>

                        <div className="col-2">
                            <select disabled className="text-start form-select" name='RF_Another_Control2' id='RF_Another_Control2' value={FormData['RF_Another_Control2']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select> 
                        </div>

                        {(() => { 
                    
                               
                            if(FormData['RF_Another_Control2']===1)
                            {
                                
                                return (<>

                                    <hr/>
                                    <div className="col-2">
                                        <label className="col-form-label"></label>
                                    </div>
                            
                                    <div className="col-1">
                                        <label className="col-form-label">Control 3</label>
                                    </div>

                                    <div className="col-4">
                                        <input disabled  spellCheck="true" id="RF_Control3" name='RF_Control3' value={FormData['RF_Control3']} onChange={(e)=>{onChange(e)}} className="form-control" style={{height:"80px"}} placeholder=""  aria-describedby="" />
                                    </div>

                                </>)
                                }
                                })()}
                                            
                            </>);
                    }

                                  

            
                })()}

            </div>
        </div>

        
    </>
    )
 }
export default RiskFactors


        
      
                   
              
                               
   
